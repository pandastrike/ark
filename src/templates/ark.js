var global = (function() {

  var base64Decode = function(string) {
    return window.atob(string);
  };
  
  return {
    filesystem: {
      root: <%- JSON.stringify( @root ) %>,
      content: <%- JSON.stringify( @content ) %>,
      modules: {
        api: <%- JSON.stringify( @modules.api ) %>,
        function: {
          <% for ref, code of @modules.function: %>
            "<%- ref %>": <%- code %>,
          <% end %>
        }
      },
      read: function(reference) {
        if (reference.__ref != null) {
          reference = reference.__ref;
        }
        return base64Decode(global.filesystem.content[reference]);
      }
    }
  };
})();

var process = (function() {
  var scopes;
  scopes = {
    evals: {
      NodeScript: {
        runInThisContext: function(source, filename, returnResult) {
          return global.filesystem.modules.function[source];
        },
        runInNewContext: function(source, filename, returnResult) {
          console.log("WARNING: runInNewContext doesn't work " +
            "in the browser.");
          return global.filesystem.module.function[source];
        }
      }
    }
  };
  return {
    platform: "browser",
    moduleLoadList: [],
    env: {},
    argv: ["node", "/"],
    binding: function(scope) {
      return scopes[scope];
    },
    cwd: function() {
      return "/";
    },
    nextTick: function(fn) {
      setTimeout( fn, 0 );
    }
  };
})();

var NativeModule = (function() {
  var name, ref, runInThisContext, _ref;
  runInThisContext = process.binding('evals').NodeScript.runInThisContext;
    
  function NativeModule(id) {
    this.filename = id + '.js';
    this.id = id;
    this.exports = {};
    this.loaded = false;
  }

  NativeModule._source = {}
  NativeModule._cache = {};

  NativeModule.require = function(id) {
    if (id == 'native_module') {
      return NativeModule;
    }

    var cached = NativeModule.getCached(id);
    if (cached) {
      return cached.exports;
    }

    if (!NativeModule.exists(id)) {
      throw new Error('No such native module ' + id);
    }

    process.moduleLoadList.push('NativeModule ' + id);

    var nativeModule = new NativeModule(id);

    nativeModule.compile();
    nativeModule.cache();

    return nativeModule.exports;
  };

  NativeModule.getCached = function(id) {
    return NativeModule._cache[id];
  }

  NativeModule.exists = function(id) {
    return NativeModule._source.hasOwnProperty(id);
  }

  NativeModule.getSource = function(id) {
    return NativeModule._source[id];
  }

  NativeModule.wrap = function(script) {
    // return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
    return script;
  };

  // NativeModule.wrapper = [
  //   '(function (exports, require, module, __filename, __dirname) { ',
  //   '\n});'
  // ];

  NativeModule.prototype.compile = function() {
    var source = NativeModule.getSource(this.id);
    source = NativeModule.wrap(source);
    var fn = runInThisContext(source, this.filename, true);
    fn(this.exports, NativeModule.require, this, this.filename);

    this.loaded = true;
  };

  NativeModule.prototype.cache = function() {
    NativeModule._cache[this.id] = this;
  };
  ;

  _ref = global.filesystem.modules.api;
  for (name in _ref) {
    ref = _ref[name];
    NativeModule._source[name] = global.filesystem.read(ref);
  }
  return NativeModule;
})();

NativeModule.require("module").runMain();