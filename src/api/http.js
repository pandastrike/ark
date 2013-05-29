//
// Adapted from http-browserify
//


var http = module.exports;
var EventEmitter = require('events').EventEmitter;
var Request;

http.request = function (params, cb) {
    if (!params) params = {};
    if (!params.host) params.host = window.location.host.split(':')[0];
    if (!params.port) params.port = window.location.port;
    
    var req = new Request(new xhrHttp, params);
    if (cb) req.on('response', cb);
    return req;
};

http.get = function (params, cb) {
    params.method = 'GET';
    var req = http.request(params, cb);
    req.end();
    return req;
};

http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;

var xhrHttp = (function () {
    if (typeof window === 'undefined') {
        throw new Error('no window object present');
    }
    else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
    }
    else if (window.ActiveXObject) {
        var axs = [
            'Msxml2.XMLHTTP.6.0',
            'Msxml2.XMLHTTP.3.0',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0; i < axs.length; i++) {
            try {
                var ax = new(window.ActiveXObject)(axs[i]);
                return function () {
                    if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                    }
                    else {
                        return new(window.ActiveXObject)(axs[i]);
                    }
                };
            }
            catch (e) {}
        }
        throw new Error('ajax not supported in this browser')
    }
    else {
        throw new Error('ajax not supported in this browser');
    }
})();


Request = (function() {
  var EventEmitter = require('events').EventEmitter;
  var Response;
  var concatStream;

  var Request = function (xhr, params) {
      var self = this;
      self.xhr = xhr;
      self.body = concatStream()

      var uri = params.host + ':' + params.port + (params.path || '/');

      xhr.open(
          params.method || 'GET',
          (params.scheme || 'http') + '://' + uri,
          true
      );

      if (params.headers) {
          Object.keys(params.headers).forEach(function (key) {
              if (!self.isSafeRequestHeader(key)) return;
              var value = params.headers[key];
              if (Array.isArray(value)) {
                  value.forEach(function (v) {
                      xhr.setRequestHeader(key, v);
                  });
              }
              else xhr.setRequestHeader(key, value)
          });
      }

      var res = new Response(xhr);
      res.on('ready', function () {
          self.emit('response', res);
      });

      xhr.onreadystatechange = function () {
          res.handle(xhr);
      };
  };

  Request.prototype = new EventEmitter;

  Request.prototype.setHeader = function (key, value) {
      if ((Array.isArray && Array.isArray(value))
      || value instanceof Array) {
          for (var i = 0; i < value.length; i++) {
              this.xhr.setRequestHeader(key, value[i]);
          }
      }
      else {
          this.xhr.setRequestHeader(key, value);
      }
  };

  Request.prototype.write = function (s) {
      this.body.write(s);
  };

  Request.prototype.end = function (s) {
      if (s !== undefined) this.body.write(s);
      this.body.end()
      this.xhr.send(this.body.getBody());
  };

  // Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
  Request.unsafeHeaders = [
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "cookie",
      "cookie2",
      "content-transfer-encoding",
      "date",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "user-agent",
      "via"
  ];

  Request.prototype.isSafeRequestHeader = function (headerName) {
      if (!headerName) return false;
      return (Request.unsafeHeaders.indexOf(headerName.toLowerCase()) === -1)
  };
  
  Response = (function() {
    
    var EventEmitter = require('events').EventEmitter;

    var Response = function (xhr) {
        this.xhr = xhr;
        this.offset = 0;
    };

    Response.prototype = new EventEmitter;

    var capable = {
        streaming : true,
        status2 : true
    };

    function parseHeaders (xhr) {
        var lines = xhr.getAllResponseHeaders().split(/\r?\n/);
        var headers = {};
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line === '') continue;

            var m = line.match(/^([^:]+):\s*(.*)/);
            if (m) {
                var key = m[1].toLowerCase(), value = m[2];

                if (headers[key] !== undefined) {
                    if ((Array.isArray && Array.isArray(headers[key]))
                    || headers[key] instanceof Array) {
                        headers[key].push(value);
                    }
                    else {
                        headers[key] = [ headers[key], value ];
                    }
                }
                else {
                    headers[key] = value;
                }
            }
            else {
                headers[line] = true;
            }
        }
        return headers;
    }

    Response.prototype.getResponse = function (xhr) {
        var respType = xhr.responseType.toLowerCase();
        if (respType === "blob") return xhr.responseBlob;
        if (respType === "arraybuffer") return xhr.response;
        return xhr.responseText;
    }

    Response.prototype.getHeader = function (key) {
        return this.headers[key.toLowerCase()] || this.xhr.getResponseHeader(key);
    };

    Response.prototype.handle = function (xhr) {
        if (xhr.readyState === 2 && capable.status2) {
            try {
                this.statusCode = xhr.status;
                this.headers = parseHeaders(xhr);
            }
            catch (err) {
                capable.status2 = false;
            }

            if (capable.status2) {
                this.emit('ready');
            }
        }
        else if (capable.streaming && xhr.readyState === 3) {
            try {
                if (!this.statusCode) {
                    this.statusCode = xhr.status;
                    this.headers = parseHeaders(xhr);
                    this.emit('ready');
                }
            }
            catch (err) {}

            try {
                this.write(xhr);
            }
            catch (err) {
                capable.streaming = false;
            }
        }
        else if (xhr.readyState === 4) {
            if (!this.statusCode) {
                this.statusCode = xhr.status;
                this.emit('ready');
            }
            this.write(xhr);

            if (xhr.error) {
                this.emit('error', this.getResponse(xhr));
            }
            else this.emit('end');
        }
    };

    Response.prototype.write = function (xhr) {
        var respBody = this.getResponse(xhr);
        if (respBody.toString().match(/ArrayBuffer/)) {
            this.emit('data', new Uint8Array(respBody, this.offset));
            this.offset = respBody.byteLength;
            return;
        }
        if (respBody.length > this.offset) {
            this.emit('data', respBody.slice(this.offset));
            this.offset = respBody.length;
        }
    };
    
    return Response;
    
  })();
  
  concatStream = (function() {
    
    var stream = require('stream')
    var util = require('util')

    function ConcatStream(cb) {
      stream.Stream.call(this)
      this.writable = true
      if (cb) this.cb = cb
      this.body = []
      this.on('error', function(err) {
        if (this.cb) this.cb(err)
      })
    }

    util.inherits(ConcatStream, stream.Stream)

    ConcatStream.prototype.write = function(chunk) {
      this.body.push(chunk)
    }

    ConcatStream.prototype.destroy = function() {}

    ConcatStream.prototype.arrayConcat = function(arrs) {
      if (arrs.length === 0) return []
      if (arrs.length === 1) return arrs[0]
      return arrs.reduce(function (a, b) { return a.concat(b) })
    }

    ConcatStream.prototype.isArray = function(arr) {
      var isArray = Array.isArray(arr)
      var isTypedArray = arr.toString().match(/Array/)
      return isArray || isTypedArray
    }

    ConcatStream.prototype.getBody = function () {
      if (this.body.length === 0) return
      if (typeof(this.body[0]) === "string") return this.body.join('')
      if (this.isArray(this.body[0])) return this.arrayConcat(this.body)
      if (typeof(Buffer) !== "undefined" && Buffer.isBuffer(this.body[0])) {
        return Buffer.concat(this.body)
      }
      return this.body
    }

    ConcatStream.prototype.end = function() {
      if (this.cb) this.cb(false, this.getBody())
    }

    var exports = function(cb) {
      return new ConcatStream(cb)
    }

    exports.ConcatStream = ConcatStream
    
    return exports;
    
  })();

  return Request;
    
})();


