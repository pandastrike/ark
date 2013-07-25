var global = (function() {

  var base64Decode = function(string) {
    return window.atob(string);
  };

  return {
    filesystem: {
      root: {
        "bar.coffee": {
          "__stat": {
            "atime": "2013-07-25T19:04:59.000Z",
            "ctime": "2013-06-02T03:52:57.000Z",
            "mtime": "2013-01-25T18:48:59.000Z",
            "size": 25,
            "type": "file"
          },
          "__ref": "5e91caedd5be0dc0918d3aef0c737fc1"
        },
        "foo.coffee": {
          "__stat": {
            "atime": "2013-07-25T19:04:59.000Z",
            "ctime": "2013-06-02T18:41:24.000Z",
            "mtime": "2013-06-02T18:41:24.000Z",
            "size": 43,
            "type": "file"
          },
          "__ref": "dc0cbd6a4d298b9fc70ec7639d071330"
        },
        "index.coffee": {
          "__stat": {
            "atime": "2013-07-25T19:04:59.000Z",
            "ctime": "2013-06-02T03:06:08.000Z",
            "mtime": "2013-06-02T03:06:08.000Z",
            "size": 21,
            "type": "file"
          },
          "__ref": "6de4a3d0070cf29a4cae682554f2f9a1"
        },
        "package.json": {
          "__stat": {
            "atime": "2013-07-25T19:04:59.000Z",
            "ctime": "2013-06-04T10:43:08.000Z",
            "mtime": "2013-01-25T18:48:59.000Z",
            "size": 117,
            "type": "file"
          },
          "__ref": "a8cc837098e9ff617147e4112b544603"
        }
      },
      content: {
        "5e91caedd5be0dc0918d3aef0c737fc1": "NWU5MWNhZWRkNWJlMGRjMDkxOGQzYWVmMGM3MzdmYzE=",
        "dc0cbd6a4d298b9fc70ec7639d071330": "ZGMwY2JkNmE0ZDI5OGI5ZmM3MGVjNzYzOWQwNzEzMzA=",
        "6de4a3d0070cf29a4cae682554f2f9a1": "NmRlNGEzZDAwNzBjZjI5YTRjYWU2ODI1NTRmMmY5YTE=",
        "a8cc837098e9ff617147e4112b544603": "ewogICJuYW1lIjogInRlc3QiLAogICJ2ZXJzaW9uIjogIjAuMC4wIiwKICAiZGVzY3JpcHRpb24iOiAiSnVzdCBhIHRlc3QgcGFja2FnZSBmb3IgYXJrIiwKICAibWFpbiI6ICJpbmRleC5jb2ZmZWUiCn0K",
        "c4f9141dbd0d7a4e3dd3d1dc0a64c667": "YzRmOTE0MWRiZDBkN2E0ZTNkZDNkMWRjMGE2NGM2Njc=",
        "0426b7a6289080ce650637f0ac6e7e0c": "MDQyNmI3YTYyODkwODBjZTY1MDYzN2YwYWM2ZTdlMGM=",
        "a8aae685be6eeb8ec844ae9c4f5fd189": "YThhYWU2ODViZTZlZWI4ZWM4NDRhZTljNGY1ZmQxODk=",
        "b499eb63a89b9e6fb99ef1209a65ace6": "YjQ5OWViNjNhODliOWU2ZmI5OWVmMTIwOWE2NWFjZTY=",
        "e78828afe729e92d62b73d30c483888f": "ZTc4ODI4YWZlNzI5ZTkyZDYyYjczZDMwYzQ4Mzg4OGY=",
        "5d6e2c2d895132330e91af96bc1409c7": "NWQ2ZTJjMmQ4OTUxMzIzMzBlOTFhZjk2YmMxNDA5Yzc=",
        "8f99cc2b75044ae1f45cefc6948e42b3": "OGY5OWNjMmI3NTA0NGFlMWY0NWNlZmM2OTQ4ZTQyYjM=",
        "223f09f17e4aff9f2d05493c688f7934": "MjIzZjA5ZjE3ZTRhZmY5ZjJkMDU0OTNjNjg4Zjc5MzQ=",
        "7b51c3f0555ccb0c0f1fcd91d389ea1a": "N2I1MWMzZjA1NTVjY2IwYzBmMWZjZDkxZDM4OWVhMWE=",
        "54c69a095dc8e4a9173bd8284c4e8ad7": "NTRjNjlhMDk1ZGM4ZTRhOTE3M2JkODI4NGM0ZThhZDc=",
        "f0d5935f094eb3d9fb70c67795bd4caf": "ZjBkNTkzNWYwOTRlYjNkOWZiNzBjNjc3OTViZDRjYWY=",
        "4e0d787840f05b0c47b10d63b6f3898f": "NGUwZDc4Nzg0MGYwNWIwYzQ3YjEwZDYzYjZmMzg5OGY=",
        "12124e45d125f26e20242c0e81a80f19": "MTIxMjRlNDVkMTI1ZjI2ZTIwMjQyYzBlODFhODBmMTk=",
        "d0c9d6cc2490c964b789d43ae4803b7b": "ZDBjOWQ2Y2MyNDkwYzk2NGI3ODlkNDNhZTQ4MDNiN2I=",
        "ddeff58ff67e5d2d686891fc66ebb2b7": "ZGRlZmY1OGZmNjdlNWQyZDY4Njg5MWZjNjZlYmIyYjc="
      },
      modules: {
        api: {
          "assert": "c4f9141dbd0d7a4e3dd3d1dc0a64c667",
          "child_process": "0426b7a6289080ce650637f0ac6e7e0c",
          "crypto": "a8aae685be6eeb8ec844ae9c4f5fd189",
          "events": "b499eb63a89b9e6fb99ef1209a65ace6",
          "fs": "e78828afe729e92d62b73d30c483888f",
          "http": "5d6e2c2d895132330e91af96bc1409c7",
          "https": "8f99cc2b75044ae1f45cefc6948e42b3",
          "module": "223f09f17e4aff9f2d05493c688f7934",
          "path": "7b51c3f0555ccb0c0f1fcd91d389ea1a",
          "querystring": "54c69a095dc8e4a9173bd8284c4e8ad7",
          "stream": "f0d5935f094eb3d9fb70c67795bd4caf",
          "sys": "4e0d787840f05b0c47b10d63b6f3898f",
          "tty": "12124e45d125f26e20242c0e81a80f19",
          "url": "d0c9d6cc2490c964b789d43ae4803b7b",
          "util": "ddeff58ff67e5d2d686891fc66ebb2b7"
        },

        function: {

          "5e91caedd5be0dc0918d3aef0c737fc1": // from: bar.coffee
          function(exports, require, module, __filename, __dirname) {

            module.exports = "foobar";

          },

          "dc0cbd6a4d298b9fc70ec7639d071330": // from: foo.coffee
          function(exports, require, module, __filename, __dirname) {
            var bar;

            bar = require("./bar");

            module.exports = bar;

          },

          "6de4a3d0070cf29a4cae682554f2f9a1": // from: index.coffee
          function(exports, require, module, __filename, __dirname) {
            var foo;

            foo = require("./foo");

          },

          "c4f9141dbd0d7a4e3dd3d1dc0a64c667": // from: 
          function(exports, require, module, __filename, __dirname) {
            // http://wiki.commonjs.org/wiki/Unit_Testing/1.0
            //
            // THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
            //
            // Originally from narwhal.js (http://narwhaljs.org)
            // Copyright (c) 2009 Thomas Robinson <280north.com>
            //
            // Permission is hereby granted, free of charge, to any person obtaining a copy
            // of this software and associated documentation files (the 'Software'), to
            // deal in the Software without restriction, including without limitation the
            // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
            // sell copies of the Software, and to permit persons to whom the Software is
            // furnished to do so, subject to the following conditions:
            //
            // The above copyright notice and this permission notice shall be included in
            // all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            // AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            // ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            // WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

            // UTILITY
            var util = require('util');
            var pSlice = Array.prototype.slice;

            // 1. The assert module provides functions that throw
            // AssertionError's when particular conditions are not met. The
            // assert module must conform to the following interface.

            var assert = module.exports = ok;

            // 2. The AssertionError is defined in assert.
            // new assert.AssertionError({ message: message,
            //                             actual: actual,
            //                             expected: expected })

            assert.AssertionError = function AssertionError(options) {
              this.name = 'AssertionError';
              this.message = options.message;
              this.actual = options.actual;
              this.expected = options.expected;
              this.operator = options.operator;
              var stackStartFunction = options.stackStartFunction || fail;

              if (Error.captureStackTrace) {
                Error.captureStackTrace(this, stackStartFunction);
              }
            };

            // assert.AssertionError instanceof Error
            util.inherits(assert.AssertionError, Error);

            function replacer(key, value) {
              if (value === undefined) {
                return '' + value;
              }
              if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
                return value.toString();
              }
              if (typeof value === 'function' || value instanceof RegExp) {
                return value.toString();
              }
              return value;
            }

            function truncate(s, n) {
              if (typeof s == 'string') {
                return s.length < n ? s : s.slice(0, n);
              } else {
                return s;
              }
            }

            assert.AssertionError.prototype.toString = function() {
              if (this.message) {
                return [this.name + ':', this.message].join(' ');
              } else {
                return [
                this.name + ':',
                truncate(JSON.stringify(this.actual, replacer), 128),
                this.operator,
                truncate(JSON.stringify(this.expected, replacer), 128)].join(' ');
              }
            };

            // At present only the three keys mentioned above are used and
            // understood by the spec. Implementations or sub modules can pass
            // other keys to the AssertionError's constructor - they will be
            // ignored.

            // 3. All of the following functions must throw an AssertionError
            // when a corresponding condition is not met, with a message that
            // may be undefined if not provided.  All assertion methods provide
            // both the actual and expected values to the assertion error for
            // display purposes.

            function fail(actual, expected, message, operator, stackStartFunction) {
              throw new assert.AssertionError({
                message: message,
                actual: actual,
                expected: expected,
                operator: operator,
                stackStartFunction: stackStartFunction
              });
            }

            // EXTENSION! allows for well behaved errors defined elsewhere.
            assert.fail = fail;

            // 4. Pure assertion tests whether a value is truthy, as determined
            // by !!guard.
            // assert.ok(guard, message_opt);
            // This statement is equivalent to assert.equal(true, !!guard,
            // message_opt);. To test strictly for the value true, use
            // assert.strictEqual(true, guard, message_opt);.

            function ok(value, message) {
              if ( !! !value) fail(value, true, message, '==', assert.ok);
            }
            assert.ok = ok;

            // 5. The equality assertion tests shallow, coercive equality with
            // ==.
            // assert.equal(actual, expected, message_opt);

            assert.equal = function equal(actual, expected, message) {
              if (actual != expected) fail(actual, expected, message, '==', assert.equal);
            };

            // 6. The non-equality assertion tests for whether two objects are not equal
            // with != assert.notEqual(actual, expected, message_opt);

            assert.notEqual = function notEqual(actual, expected, message) {
              if (actual == expected) {
                fail(actual, expected, message, '!=', assert.notEqual);
              }
            };

            // 7. The equivalence assertion tests a deep equality relation.
            // assert.deepEqual(actual, expected, message_opt);

            assert.deepEqual = function deepEqual(actual, expected, message) {
              if (!_deepEqual(actual, expected)) {
                fail(actual, expected, message, 'deepEqual', assert.deepEqual);
              }
            };

            function _deepEqual(actual, expected) {
              // 7.1. All identical values are equivalent, as determined by ===.
              if (actual === expected) {
                return true;

              } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
                if (actual.length != expected.length) return false;

                for (var i = 0; i < actual.length; i++) {
                  if (actual[i] !== expected[i]) return false;
                }

                return true;

                // 7.2. If the expected value is a Date object, the actual value is
                // equivalent if it is also a Date object that refers to the same time.
              } else if (actual instanceof Date && expected instanceof Date) {
                return actual.getTime() === expected.getTime();

                // 7.3 If the expected value is a RegExp object, the actual value is
                // equivalent if it is also a RegExp object with the same source and
                // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
              } else if (actual instanceof RegExp && expected instanceof RegExp) {
                return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;

                // 7.4. Other pairs that do not both pass typeof value == 'object',
                // equivalence is determined by ==.
              } else if (typeof actual != 'object' && typeof expected != 'object') {
                return actual == expected;

                // 7.5 For all other Object pairs, including Array objects, equivalence is
                // determined by having the same number of owned properties (as verified
                // with Object.prototype.hasOwnProperty.call), the same set of keys
                // (although not necessarily the same order), equivalent values for every
                // corresponding key, and an identical 'prototype' property. Note: this
                // accounts for both named and indexed properties on Arrays.
              } else {
                return objEquiv(actual, expected);
              }
            }

            function isUndefinedOrNull(value) {
              return value === null || value === undefined;
            }

            function isArguments(object) {
              return Object.prototype.toString.call(object) == '[object Arguments]';
            }

            function objEquiv(a, b) {
              if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
              // an identical 'prototype' property.
              if (a.prototype !== b.prototype) return false;
              //~~~I've managed to break Object.keys through screwy arguments passing.
              //   Converting to array solves the problem.
              if (isArguments(a)) {
                if (!isArguments(b)) {
                  return false;
                }
                a = pSlice.call(a);
                b = pSlice.call(b);
                return _deepEqual(a, b);
              }
              try {
                var ka = Object.keys(a),
                  kb = Object.keys(b),
                  key, i;
              } catch (e) { //happens when one is a string literal and the other isn't
                return false;
              }
              // having the same number of owned properties (keys incorporates
              // hasOwnProperty)
              if (ka.length != kb.length) return false;
              //the same set of keys (although not necessarily the same order),
              ka.sort();
              kb.sort();
              //~~~cheap key test
              for (i = ka.length - 1; i >= 0; i--) {
                if (ka[i] != kb[i]) return false;
              }
              //equivalent values for every corresponding key, and
              //~~~possibly expensive deep test
              for (i = ka.length - 1; i >= 0; i--) {
                key = ka[i];
                if (!_deepEqual(a[key], b[key])) return false;
              }
              return true;
            }

            // 8. The non-equivalence assertion tests for any deep inequality.
            // assert.notDeepEqual(actual, expected, message_opt);

            assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
              if (_deepEqual(actual, expected)) {
                fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
              }
            };

            // 9. The strict equality assertion tests strict equality, as determined by ===.
            // assert.strictEqual(actual, expected, message_opt);

            assert.strictEqual = function strictEqual(actual, expected, message) {
              if (actual !== expected) {
                fail(actual, expected, message, '===', assert.strictEqual);
              }
            };

            // 10. The strict non-equality assertion tests for strict inequality, as
            // determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

            assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
              if (actual === expected) {
                fail(actual, expected, message, '!==', assert.notStrictEqual);
              }
            };

            function expectedException(actual, expected) {
              if (!actual || !expected) {
                return false;
              }

              if (expected instanceof RegExp) {
                return expected.test(actual);
              } else if (actual instanceof expected) {
                return true;
              } else if (expected.call({}, actual) === true) {
                return true;
              }

              return false;
            }

            function _throws(shouldThrow, block, expected, message) {
              var actual;

              if (typeof expected === 'string') {
                message = expected;
                expected = null;
              }

              try {
                block();
              } catch (e) {
                actual = e;
              }

              message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

              if (shouldThrow && !actual) {
                fail(actual, expected, 'Missing expected exception' + message);
              }

              if (!shouldThrow && expectedException(actual, expected)) {
                fail(actual, expected, 'Got unwanted exception' + message);
              }

              if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) {
                throw actual;
              }
            }

            // 11. Expected to throw an error:
            // assert.throws(block, Error_opt, message_opt);

            assert.throws = function(block, /*optional*/ error, /*optional*/ message) {
              _throws.apply(this, [true].concat(pSlice.call(arguments)));
            };

            // EXTENSION! This is annoying to write outside this module.
            assert.doesNotThrow = function(block, /*optional*/ message) {
              _throws.apply(this, [false].concat(pSlice.call(arguments)));
            };

            assert.ifError = function(err) {
              if (err) {
                throw err;
              }
            };

          },

          "0426b7a6289080ce650637f0ac6e7e0c": // from: 
          function(exports, require, module, __filename, __dirname) {
            exports.spawn = function() {};
            exports.exec = function() {};

          },

          "a8aae685be6eeb8ec844ae9c4f5fd189": // from: 
          function(exports, require, module, __filename, __dirname) {
            // TODO  
          },

          "b499eb63a89b9e6fb99ef1209a65ace6": // from: 
          function(exports, require, module, __filename, __dirname) {
            if (!process.EventEmitter) process.EventEmitter = function() {};

            var EventEmitter = exports.EventEmitter = process.EventEmitter;
            var isArray = typeof Array.isArray === 'function' ? Array.isArray : function(xs) {
                return Object.prototype.toString.call(xs) === '[object Array]'
              };

            // By default EventEmitters will print a warning if more than
            // 10 listeners are added to it. This is a useful default which
            // helps finding memory leaks.
            //
            // Obviously not all Emitters should be limited to 10. This function allows
            // that to be increased. Set to zero for unlimited.
            var defaultMaxListeners = 10;
            EventEmitter.prototype.setMaxListeners = function(n) {
              if (!this._events) this._events = {};
              this._events.maxListeners = n;
            };


            EventEmitter.prototype.emit = function(type) {
              // If there is no 'error' event listener then throw.
              if (type === 'error') {
                if (!this._events || !this._events.error || (isArray(this._events.error) && !this._events.error.length)) {
                  if (arguments[1] instanceof Error) {
                    throw arguments[1]; // Unhandled 'error' event
                  } else {
                    throw new Error("Uncaught, unspecified 'error' event.");
                  }
                  return false;
                }
              }

              if (!this._events) return false;
              var handler = this._events[type];
              if (!handler) return false;

              if (typeof handler == 'function') {
                switch (arguments.length) {
                  // fast cases
                case 1:
                  handler.call(this);
                  break;
                case 2:
                  handler.call(this, arguments[1]);
                  break;
                case 3:
                  handler.call(this, arguments[1], arguments[2]);
                  break;
                  // slower
                default:
                  var args = Array.prototype.slice.call(arguments, 1);
                  handler.apply(this, args);
                }
                return true;

              } else if (isArray(handler)) {
                var args = Array.prototype.slice.call(arguments, 1);

                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                  listeners[i].apply(this, args);
                }
                return true;

              } else {
                return false;
              }
            };

            // EventEmitter is defined in src/node_events.cc
            // EventEmitter.prototype.emit() is also defined there.
            EventEmitter.prototype.addListener = function(type, listener) {
              if ('function' !== typeof listener) {
                throw new Error('addListener only takes instances of Function');
              }

              if (!this._events) this._events = {};

              // To avoid recursion in the case that type == "newListeners"! Before
              // adding it to the listeners, first emit "newListeners".
              this.emit('newListener', type, listener);

              if (!this._events[type]) {
                // Optimize the case of one listener. Don't need the extra array object.
                this._events[type] = listener;
              } else if (isArray(this._events[type])) {

                // Check for listener leak
                if (!this._events[type].warned) {
                  var m;
                  if (this._events.maxListeners !== undefined) {
                    m = this._events.maxListeners;
                  } else {
                    m = defaultMaxListeners;
                  }

                  if (m && m > 0 && this._events[type].length > m) {
                    this._events[type].warned = true;
                    console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
                    console.trace();
                  }
                }

                // If we've already got an array, just append.
                this._events[type].push(listener);
              } else {
                // Adding the second element, need to change to array.
                this._events[type] = [this._events[type], listener];
              }

              return this;
            };

            EventEmitter.prototype.on = EventEmitter.prototype.addListener;

            EventEmitter.prototype.once = function(type, listener) {
              var self = this;
              self.on(type, function g() {
                self.removeListener(type, g);
                listener.apply(this, arguments);
              });

              return this;
            };

            EventEmitter.prototype.removeListener = function(type, listener) {
              if ('function' !== typeof listener) {
                throw new Error('removeListener only takes instances of Function');
              }

              // does not use listeners(), so no side effect of creating _events[type]
              if (!this._events || !this._events[type]) return this;

              var list = this._events[type];

              if (isArray(list)) {
                var i = list.indexOf(listener);
                if (i < 0) return this;
                list.splice(i, 1);
                if (list.length == 0) delete this._events[type];
              } else if (this._events[type] === listener) {
                delete this._events[type];
              }

              return this;
            };

            EventEmitter.prototype.removeAllListeners = function(type) {
              // does not use listeners(), so no side effect of creating _events[type]
              if (type && this._events && this._events[type]) this._events[type] = null;
              return this;
            };

            EventEmitter.prototype.listeners = function(type) {
              if (!this._events) this._events = {};
              if (!this._events[type]) this._events[type] = [];
              if (!isArray(this._events[type])) {
                this._events[type] = [this._events[type]];
              }
              return this._events[type];
            };

          },

          "e78828afe729e92d62b73d30c483888f": // from: 
          function(exports, require, module, __filename, __dirname) {
            var Stat, base64Decode, fs, getFile;

            getFile = function(path) {
              var file, part, parts, _i, _len;
              parts = path.split("/").slice(1);
              file = global.filesystem.root;
              for (_i = 0, _len = parts.length; _i < _len; _i++) {
                part = parts[_i];
                if (!(file = file[part])) {
                  throw "File not found at '" + path + "'";
                }
              }
              return file;
            };

            Stat = (function() {

              function Stat(path) {
                this.file = getFile(path);
              }

              Stat.prototype.isDirectory = function() {
                return this.file.__stat.type === "directory";
              };

              Stat.prototype.isFile = function() {
                return this.file.__stat.type === "file";
              };

              Stat.prototype.isSymbolicLink = function() {
                return false;
              };

              return Stat;

            })();

            base64Decode = function(string) {
              return decodeURIComponent(escape(window.atob(string)));
            };

            var fs = {
              readFileSync: function(path, encoding) {
                var file;
                file = getFile(path);
                return global.filesystem.read(file);
              },
              readdirSync: function(path) {
                var file;
                file = getFile(path);
                if (file.__stat.type === "directory") {
                  var result = [];
                  for (var key in file) {
                    // TODO: this is not a great convention, since it's hardly
                    // impossible that a file might start with two underscores
                    if (!(/^__/.test(key))) {
                      result.push(key);
                    }
                  }
                  return result;
                } else {
                  throw "Not a directory: '" + path + "'";
                }
              },
              statSync: function(path) {
                return new Stat(path);
              },
              lstatSync: function(path) {
                return this.statSync(path);
              },
              // realpath Sync adapted from Node source
              realpathSync: function realpathSync(p, cache) {

                var isWindows = process.platform === 'win32';

                // Regexp that finds the next partion of a (partial) path
                // result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
                if (isWindows) {
                  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
                } else {
                  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
                }

                // Regex to find the device root, including trailing slash. E.g. 'c:\\'.
                if (isWindows) {
                  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
                } else {
                  var splitRootRe = /^[\/]*/;
                }

                var pathModule = NativeModule.require("path");
                var normalize = pathModule.normalize;

                // make p is absolute
                p = pathModule.resolve(p);

                if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
                  return cache[p];
                }

                var original = p,
                  seenLinks = {},
                  knownHard = {};

                // current character position in p
                var pos;
                // the partial path so far, including a trailing slash if any
                var current;
                // the partial path without a trailing slash (except when pointing at a root)
                var base;
                // the partial path scanned in the previous round, with slash
                var previous;

                start();

                function start() {
                  // Skip over roots
                  var m = splitRootRe.exec(p);
                  pos = m[0].length;
                  current = m[0];
                  base = m[0];
                  previous = '';

                  // On windows, check that the root exists. On unix there is no need.
                  if (isWindows && !knownHard[base]) {
                    fs.lstatSync(base);
                    knownHard[base] = true;
                  }
                }

                // walk down the path, swapping out linked pathparts for their real
                // values
                // NB: p.length changes.
                while (pos < p.length) {
                  // find the next part
                  nextPartRe.lastIndex = pos;
                  var result = nextPartRe.exec(p);
                  previous = current;
                  current += result[0];
                  base = previous + result[1];
                  pos = nextPartRe.lastIndex;

                  // continue if not a symlink
                  if (knownHard[base] || (cache && cache[base] === base)) {
                    continue;
                  }

                  var resolvedLink;
                  if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
                    // some known symbolic link.  no need to stat again.
                    resolvedLink = cache[base];
                  } else {
                    var stat = fs.lstatSync(base);
                    if (!stat.isSymbolicLink()) {
                      knownHard[base] = true;
                      if (cache) cache[base] = base;
                      continue;
                    }

                    // read the link if it wasn't read before
                    // dev/ino always return 0 on windows, so skip the check.
                    var linkTarget = null;
                    if (!isWindows) {
                      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
                      if (seenLinks.hasOwnProperty(id)) {
                        linkTarget = seenLinks[id];
                      }
                    }
                    if (linkTarget === null) {
                      fs.statSync(base);
                      linkTarget = fs.readlinkSync(base);
                    }
                    resolvedLink = pathModule.resolve(previous, linkTarget);
                    // track this, if given a cache.
                    if (cache) cache[base] = resolvedLink;
                    if (!isWindows) seenLinks[id] = linkTarget;
                  }

                  // resolve the link, then start over
                  p = pathModule.resolve(resolvedLink, p.slice(pos));
                  start();
                }

                if (cache) cache[original] = p;

                return p;
              }
            };

            module.exports = fs;
          },

          "5d6e2c2d895132330e91af96bc1409c7": // from: 
          function(exports, require, module, __filename, __dirname) {
            //
            // Adapted from http-browserify
            //


            var http = module.exports;
            var EventEmitter = require('events').EventEmitter;
            var Request;

            http.request = function(params, cb) {
              if (!params) params = {};
              if (!params.host) params.host = window.location.host.split(':')[0];
              if (!params.port) params.port = window.location.port;

              var req = new Request(new xhrHttp, params);
              if (cb) req.on('response', cb);
              return req;
            };

            http.get = function(params, cb) {
              params.method = 'GET';
              var req = http.request(params, cb);
              req.end();
              return req;
            };

            http.Agent = function() {};
            http.Agent.defaultMaxSockets = 4;

            var xhrHttp = (function() {
              if (typeof window === 'undefined') {
                throw new Error('no window object present');
              } else if (window.XMLHttpRequest) {
                return window.XMLHttpRequest;
              } else if (window.ActiveXObject) {
                var axs = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP'];
                for (var i = 0; i < axs.length; i++) {
                  try {
                    var ax = new(window.ActiveXObject)(axs[i]);
                    return function() {
                      if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                      } else {
                        return new(window.ActiveXObject)(axs[i]);
                      }
                    };
                  } catch (e) {}
                }
                throw new Error('ajax not supported in this browser')
              } else {
                throw new Error('ajax not supported in this browser');
              }
            })();


            Request = (function() {
              var EventEmitter = require('events').EventEmitter;
              var Response;
              var concatStream;

              var Request = function(xhr, params) {
                var self = this;
                self.xhr = xhr;
                self.body = concatStream()

                var uri = params.host + ':' + params.port + (params.path || '/');

                xhr.open(
                params.method || 'GET', (params.scheme || 'http') + '://' + uri,
                true);

                if (params.headers) {
                  Object.keys(params.headers).forEach(function(key) {
                    if (!self.isSafeRequestHeader(key)) return;
                    var value = params.headers[key];
                    if (Array.isArray(value)) {
                      value.forEach(function(v) {
                        xhr.setRequestHeader(key, v);
                      });
                    } else xhr.setRequestHeader(key, value)
                  });
                }

                var res = new Response(xhr);
                res.on('ready', function() {
                  self.emit('response', res);
                });

                xhr.onreadystatechange = function() {
                  res.handle(xhr);
                };
              };

              Request.prototype = new EventEmitter;

              Request.prototype.setHeader = function(key, value) {
                if ((Array.isArray && Array.isArray(value)) || value instanceof Array) {
                  for (var i = 0; i < value.length; i++) {
                    this.xhr.setRequestHeader(key, value[i]);
                  }
                } else {
                  this.xhr.setRequestHeader(key, value);
                }
              };

              Request.prototype.write = function(s) {
                this.body.write(s);
              };

              Request.prototype.end = function(s) {
                if (s !== undefined) this.body.write(s);
                this.body.end()
                this.xhr.send(this.body.getBody());
              };

              // Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
              Request.unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];

              Request.prototype.isSafeRequestHeader = function(headerName) {
                if (!headerName) return false;
                return (Request.unsafeHeaders.indexOf(headerName.toLowerCase()) === -1)
              };

              Response = (function() {

                var EventEmitter = require('events').EventEmitter;

                var Response = function(xhr) {
                  this.xhr = xhr;
                  this.offset = 0;
                };

                Response.prototype = new EventEmitter;

                var capable = {
                  streaming: true,
                  status2: true
                };

                function parseHeaders(xhr) {
                  var lines = xhr.getAllResponseHeaders().split(/\r?\n/);
                  var headers = {};
                  for (var i = 0; i < lines.length; i++) {
                    var line = lines[i];
                    if (line === '') continue;

                    var m = line.match(/^([^:]+):\s*(.*)/);
                    if (m) {
                      var key = m[1].toLowerCase(),
                        value = m[2];

                      if (headers[key] !== undefined) {
                        if ((Array.isArray && Array.isArray(headers[key])) || headers[key] instanceof Array) {
                          headers[key].push(value);
                        } else {
                          headers[key] = [headers[key], value];
                        }
                      } else {
                        headers[key] = value;
                      }
                    } else {
                      headers[line] = true;
                    }
                  }
                  return headers;
                }

                Response.prototype.getResponse = function(xhr) {
                  var respType = xhr.responseType.toLowerCase();
                  if (respType === "blob") return xhr.responseBlob;
                  if (respType === "arraybuffer") return xhr.response;
                  return xhr.responseText;
                }

                Response.prototype.getHeader = function(key) {
                  return this.headers[key.toLowerCase()] || this.xhr.getResponseHeader(key);
                };

                Response.prototype.handle = function(xhr) {
                  if (xhr.readyState === 2 && capable.status2) {
                    try {
                      this.statusCode = xhr.status;
                      this.headers = parseHeaders(xhr);
                    } catch (err) {
                      capable.status2 = false;
                    }

                    if (capable.status2) {
                      this.emit('ready');
                    }
                  } else if (capable.streaming && xhr.readyState === 3) {
                    try {
                      if (!this.statusCode) {
                        this.statusCode = xhr.status;
                        this.headers = parseHeaders(xhr);
                        this.emit('ready');
                      }
                    } catch (err) {}

                    try {
                      this.write(xhr);
                    } catch (err) {
                      capable.streaming = false;
                    }
                  } else if (xhr.readyState === 4) {
                    if (!this.statusCode) {
                      this.statusCode = xhr.status;
                      this.emit('ready');
                    }
                    this.write(xhr);

                    if (xhr.error) {
                      this.emit('error', this.getResponse(xhr));
                    } else this.emit('end');
                  }
                };

                Response.prototype.write = function(xhr) {
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
                  return arrs.reduce(function(a, b) {
                    return a.concat(b)
                  })
                }

                ConcatStream.prototype.isArray = function(arr) {
                  var isArray = Array.isArray(arr)
                  var isTypedArray = arr.toString().match(/Array/)
                  return isArray || isTypedArray
                }

                ConcatStream.prototype.getBody = function() {
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



          },

          "8f99cc2b75044ae1f45cefc6948e42b3": // from: 
          function(exports, require, module, __filename, __dirname) {
            module.exports = require('http');

          },

          "223f09f17e4aff9f2d05493c688f7934": // from: 
          function(exports, require, module, __filename, __dirname) {
            //
            // Adapted from Node source
            //

            var NativeModule = require('native_module');
            var Script = process.binding('evals').NodeScript;
            var runInThisContext = Script.runInThisContext;
            var runInNewContext = Script.runInNewContext;
            var assert = require('assert').ok;


            // If obj.hasOwnProperty has been overridden, then calling
            // obj.hasOwnProperty(prop) will break.
            // See: https://github.com/joyent/node/issues/1707
            function hasOwnProperty(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            }


            function Module(id, parent) {
              this.id = id;
              this.exports = {};
              this.parent = parent;
              if (parent && parent.children) {
                parent.children.push(this);
              }

              this.filename = null;
              this.loaded = false;
              this.children = [];
            }
            module.exports = Module;

            // Set the environ variable NODE_MODULE_CONTEXTS=1 to make node load all
            // modules in thier own context.
            Module._contextLoad = (+process.env['NODE_MODULE_CONTEXTS'] > 0);
            Module._cache = {};
            Module._pathCache = {};
            Module._extensions = {};
            var modulePaths = [];
            Module.globalPaths = [];

            Module.wrapper = NativeModule.wrapper;
            Module.wrap = NativeModule.wrap;

            var path = NativeModule.require('path');

            Module._debug = function() {};
            if (process.env.NODE_DEBUG && /module/.test(process.env.NODE_DEBUG)) {
              Module._debug = function(x) {
                console.error(x);
              };
            }


            // We use this alias for the preprocessor that filters it out
            var debug = Module._debug;


            // given a module name, and a list of paths to test, returns the first
            // matching file in the following precedence.
            //
            // require("a.<ext>")
            //   -> a.<ext>
            //
            // require("a")
            //   -> a
            //   -> a.<ext>
            //   -> a/index.<ext>

            function statPath(path) {
              var fs = NativeModule.require('fs');
              try {
                return fs.statSync(path);
              } catch (ex) {}
              return false;
            }

            // check if the directory is a package.json dir
            var packageCache = {};

            function readPackage(requestPath) {
              if (hasOwnProperty(packageCache, requestPath)) {
                return packageCache[requestPath];
              }

              var fs = NativeModule.require('fs');
              try {
                var jsonPath = path.resolve(requestPath, 'package.json');
                var json = fs.readFileSync(jsonPath, 'utf8');
              } catch (e) {
                return false;
              }

              try {
                var pkg = packageCache[requestPath] = JSON.parse(json);
              } catch (e) {
                e.path = jsonPath;
                e.message = 'Error parsing ' + jsonPath + ': ' + e.message;
                throw e;
              }
              return pkg;
            }

            function tryPackage(requestPath, exts) {
              var pkg = readPackage(requestPath);

              if (!pkg || !pkg.main) return false;

              var filename = path.resolve(requestPath, pkg.main);
              return tryFile(filename) || tryExtensions(filename, exts) || tryExtensions(path.resolve(filename, 'index'), exts);
            }

            // In order to minimize unnecessary lstat() calls,
            // this cache is a list of known-real paths.
            // Set to an empty object to reset.
            Module._realpathCache = {};

            // check if the file exists and is not a directory
            function tryFile(requestPath) {
              var fs = NativeModule.require('fs');
              var stats = statPath(requestPath);
              if (stats && !stats.isDirectory()) {
                return fs.realpathSync(requestPath, Module._realpathCache);
              }
              return false;
            }

            // given a path check a the file exists with any of the set extensions
            function tryExtensions(p, exts) {
              for (var i = 0, EL = exts.length; i < EL; i++) {
                var filename = tryFile(p + exts[i]);

                if (filename) {
                  return filename;
                }
              }
              return false;
            }


            Module._findPath = function(request, paths) {
              var exts = Object.keys(Module._extensions);

              if (request.charAt(0) === '/') {
                paths = [''];
              }

              var trailingSlash = (request.slice(-1) === '/');

              var cacheKey = JSON.stringify({
                request: request,
                paths: paths
              });
              if (Module._pathCache[cacheKey]) {
                return Module._pathCache[cacheKey];
              }

              // For each path
              for (var i = 0, PL = paths.length; i < PL; i++) {
                var basePath = path.resolve(paths[i], request);
                var filename;

                if (!trailingSlash) {
                  // try to join the request to the path
                  filename = tryFile(basePath);

                  if (!filename && !trailingSlash) {
                    // try it with each of the extensions
                    filename = tryExtensions(basePath, exts);
                  }
                }

                if (!filename) {
                  filename = tryPackage(basePath, exts);
                }

                if (!filename) {
                  // try it with each of the extensions at "index"
                  filename = tryExtensions(path.resolve(basePath, 'index'), exts);
                }

                if (filename) {
                  Module._pathCache[cacheKey] = filename;
                  return filename;
                }
              }
              return false;
            };

            // 'from' is the __dirname of the module.
            Module._nodeModulePaths = function(from) {
              // guarantee that 'from' is absolute.
              from = path.resolve(from);

              // note: this approach *only* works when the path is guaranteed
              // to be absolute.  Doing a fully-edge-case-correct path.split
              // that works on both Windows and Posix is non-trivial.
              var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\//;
              // yes, '/' works on both, but let's be a little canonical.
              var joiner = process.platform === 'win32' ? '\\' : '/';
              var paths = [];
              var parts = from.split(splitRe);

              for (var tip = parts.length - 1; tip >= 0; tip--) {
                // don't search in .../node_modules/node_modules
                if (parts[tip] === 'node_modules') continue;
                var dir = parts.slice(0, tip + 1).concat('node_modules').join(joiner);
                paths.push(dir);
              }

              return paths;
            };


            Module._resolveLookupPaths = function(request, parent) {
              if (NativeModule.exists(request)) {
                return [request, []];
              }

              var start = request.substring(0, 2);
              if (start !== './' && start !== '..') {
                var paths = modulePaths;
                if (parent) {
                  if (!parent.paths) parent.paths = [];
                  paths = parent.paths.concat(paths);
                }
                return [request, paths];
              }

              // with --eval, parent.id is not set and parent.filename is null
              if (!parent || !parent.id || !parent.filename) {
                // make require('./path/to/foo') work - normally the path is taken
                // from realpath(__filename) but with eval there is no filename
                var mainPaths = ['.'].concat(modulePaths);
                mainPaths = Module._nodeModulePaths('.').concat(mainPaths);
                return [request, mainPaths];
              }

              // Is the parent an index module?
              // We can assume the parent has a valid extension,
              // as it already has been accepted as a module.
              var isIndex = /^index\.\w+?$/.test(path.basename(parent.filename));
              var parentIdPath = isIndex ? parent.id : path.dirname(parent.id);
              var id = path.resolve(parentIdPath, request);

              // make sure require('./path') and require('path') get distinct ids, even
              // when called from the toplevel js file
              if (parentIdPath === '.' && id.indexOf('/') === -1) {
                id = './' + id;
              }

              debug('RELATIVE: requested:' + request + ' set ID to: ' + id + ' from ' + parent.id);

              return [id, [path.dirname(parent.filename)]];
            };


            Module._load = function(request, parent, isMain) {
              if (parent) {
                debug('Module._load REQUEST  ' + (request) + ' parent: ' + parent.id);
              }

              var filename = Module._resolveFilename(request, parent);

              var cachedModule = Module._cache[filename];
              if (cachedModule) {
                return cachedModule.exports;
              }

              if (NativeModule.exists(filename)) {
                // REPL is a special case, because it needs the real require.
                if (filename == 'repl') {
                  var replModule = new Module('repl');
                  replModule._compile(NativeModule.getSource('repl'), 'repl.js');
                  NativeModule._cache.repl = replModule;
                  return replModule.exports;
                }

                debug('load native module ' + request);
                return NativeModule.require(filename);
              }

              var module = new Module(filename, parent);

              if (isMain) {
                process.mainModule = module;
                module.id = '.';
              }

              Module._cache[filename] = module;

              var hadException = true;

              try {
                module.load(filename);
                hadException = false;
              } finally {
                if (hadException) {
                  delete Module._cache[filename];
                }
              }

              return module.exports;
            };

            Module._resolveFilename = function(request, parent) {
              if (NativeModule.exists(request)) {
                return request;
              }

              var resolvedModule = Module._resolveLookupPaths(request, parent);
              var id = resolvedModule[0];
              var paths = resolvedModule[1];

              // look up the filename first, since that's the cache key.
              debug('looking for ' + JSON.stringify(id) + ' in ' + JSON.stringify(paths));

              var filename = Module._findPath(request, paths);
              if (!filename) {
                var err = new Error("Cannot find module '" + request + "'");
                err.code = 'MODULE_NOT_FOUND';
                throw err;
              }
              return filename;
            };


            Module.prototype.load = function(filename) {
              debug('load ' + JSON.stringify(filename) + ' for module ' + JSON.stringify(this.id));

              assert(!this.loaded);
              this.filename = filename;
              this.paths = Module._nodeModulePaths(path.dirname(filename));

              var extension = path.extname(filename) || '.js';
              if (!Module._extensions[extension]) extension = '.js';
              Module._extensions[extension](this, filename);
              this.loaded = true;
            };


            Module.prototype.require = function(path) {
              return Module._load(path, this);
            };


            // Resolved path to process.argv[1] will be lazily placed here
            // (needed for setting breakpoint when called with --debug-brk)
            var resolvedArgv;


            // Returns exception if any
            Module.prototype._compile = function(content, filename) {
              var self = this;
              // remove shebang
              content = content.replace(/^\#\!.*/, '');

              function require(path) {
                return self.require(path);
              }

              require.resolve = function(request) {
                return Module._resolveFilename(request, self);
              };

              Object.defineProperty(require, 'paths', {
                get: function() {
                  throw new Error('require.paths is removed. Use ' + 'node_modules folders, or the NODE_PATH ' + 'environment variable instead.');
                }
              });

              require.main = process.mainModule;

              // Enable support to add extra extension types
              require.extensions = Module._extensions;
              require.registerExtension = function() {
                throw new Error('require.registerExtension() removed. Use ' + 'require.extensions instead.');
              };

              require.cache = Module._cache;

              var dirname = path.dirname(filename);

              if (Module._contextLoad) {
                if (self.id !== '.') {
                  debug('load submodule');
                  // not root module
                  var sandbox = {};
                  for (var k in global) {
                    sandbox[k] = global[k];
                  }
                  sandbox.require = require;
                  sandbox.exports = self.exports;
                  sandbox.__filename = filename;
                  sandbox.__dirname = dirname;
                  sandbox.module = self;
                  sandbox.global = sandbox;
                  sandbox.root = root;

                  return runInNewContext(content, sandbox, filename, true);
                }

                debug('load root module');
                // root module
                global.require = require;
                global.exports = self.exports;
                global.__filename = filename;
                global.__dirname = dirname;
                global.module = self;

                return runInThisContext(content, filename, true);
              }

              // create wrapper function
              var wrapper = Module.wrap(content);

              var compiledWrapper = runInThisContext(wrapper, filename, true);
              if (global.v8debug) {
                if (!resolvedArgv) {
                  // we enter the repl if we're not given a filename argument.
                  if (process.argv[1]) {
                    resolvedArg = Module._resolveFilename(process.argv[1], null);
                  } else {
                    resolvedArg = 'repl';
                  }
                }

                // Set breakpoint on module start
                if (filename === resolvedArgv) {
                  global.v8debug.Debug.setBreakPoint(compiledWrapper, 0, 0);
                }
              }
              var args = [self.exports, require, self, filename, dirname];
              return compiledWrapper.apply(self.exports, args);
            };


            function stripBOM(content) {
              // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
              // because the buffer-to-string conversion in `fs.readFileSync()`
              // translates it to FEFF, the UTF-16 BOM.
              if (content.charCodeAt(0) === 0xFEFF) {
                content = content.slice(1);
              }
              return content;
            }


            // Native extension for .js
            Module._extensions['.js'] = function(module, filename) {
              var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
              module._compile(stripBOM(content), filename);
            };

            // We've already pre-compiled the CoffeeScript so we can embed the source and
            // have it show up in the debugger
            Module._extensions['.coffee'] = Module._extensions['.js']


            // Native extension for .json
            Module._extensions['.json'] = function(module, filename) {
              var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
              try {
                module.exports = JSON.parse(stripBOM(content));
              } catch (err) {
                err.message = filename + ': ' + err.message;
                throw err;
              }
            };


            //Native extension for .node
            Module._extensions['.node'] = function(module, filename) {
              process.dlopen(filename, module.exports);
            };


            // bootstrap main module.
            Module.runMain = function() {
              // Load the main module--the command line argument.
              Module._load(process.argv[1], null, true);
            };

            Module._initPaths = function() {
              var paths = [path.resolve(process.execPath, '..', '..', 'lib', 'node')];

              if (process.env['HOME']) {
                paths.unshift(path.resolve(process.env['HOME'], '.node_libraries'));
                paths.unshift(path.resolve(process.env['HOME'], '.node_modules'));
              }

              if (process.env['NODE_PATH']) {
                var splitter = process.platform === 'win32' ? ';' : ':';
                paths = process.env['NODE_PATH'].split(splitter).concat(paths);
              }

              modulePaths = paths;

              // clone as a read-only copy, for introspection.
              Module.globalPaths = modulePaths.slice(0);
            };

            // bootstrap repl
            Module.requireRepl = function() {
              return Module._load('repl', '.');
            };

            Module._initPaths();

            // backwards compatibility
            Module.Module = Module;

          },

          "7b51c3f0555ccb0c0f1fcd91d389ea1a": // from: 
          function(exports, require, module, __filename, __dirname) {
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.


            var isWindows = process.platform === 'win32';
            var util = require('util');


            // resolves . and .. elements in a path array with directory names there
            // must be no slashes, empty elements, or device names (c:\) in the array
            // (so also no leading and trailing slashes - it does not distinguish
            // relative and absolute paths)
            function normalizeArray(parts, allowAboveRoot) {
              // if the path tries to go above the root, `up` ends up > 0
              var up = 0;
              for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === '.') {
                  parts.splice(i, 1);
                } else if (last === '..') {
                  parts.splice(i, 1);
                  up++;
                } else if (up) {
                  parts.splice(i, 1);
                  up--;
                }
              }

              // if the path is allowed to go above the root, restore leading ..s
              if (allowAboveRoot) {
                for (; up--; up) {
                  parts.unshift('..');
                }
              }

              return parts;
            }


            if (isWindows) {
              // Regex to split a windows path into three parts: [*, device, slash,
              // tail] windows-only
              var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?([\\\/])?([\s\S]*?)$/;

              // Regex to split the tail part of the above into [*, dir, basename, ext]
              var splitTailRe = /^([\s\S]+[\\\/](?!$)|[\\\/])?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/\\]*)?)$/;

              // Function to split a filename into [root, dir, basename, ext]
              // windows version
              var splitPath = function(filename) {
                // Separate device+slash from tail
                var result = splitDeviceRe.exec(filename),
                  device = (result[1] || '') + (result[2] || ''),
                  tail = result[3] || '';
                // Split the tail into dir, basename and extension
                var result2 = splitTailRe.exec(tail),
                  dir = result2[1] || '',
                  basename = result2[2] || '',
                  ext = result2[3] || '';
                return [device, dir, basename, ext];
              };

              // path.resolve([from ...], to)
              // windows version
              exports.resolve = function() {
                var resolvedDevice = '',
                  resolvedTail = '',
                  resolvedAbsolute = false;

                for (var i = arguments.length - 1; i >= -1; i--) {
                  var path;
                  if (i >= 0) {
                    path = arguments[i];
                  } else if (!resolvedDevice) {
                    path = process.cwd();
                  } else {
                    // Windows has the concept of drive-specific current working
                    // directories. If we've resolved a drive letter but not yet an
                    // absolute path, get cwd for that drive. We're sure the device is not
                    // an unc path at this points, because unc paths are always absolute.
                    path = process.env['=' + resolvedDevice];
                    // Verify that a drive-local cwd was found and that it actually points
                    // to our drive. If not, default to the drive's root.
                    if (!path || path.substr(0, 3).toLowerCase() !== resolvedDevice.toLowerCase() + '\\') {
                      path = resolvedDevice + '\\';
                    }
                  }

                  // Skip empty and invalid entries
                  if (typeof path !== 'string' || !path) {
                    continue;
                  }

                  var result = splitDeviceRe.exec(path),
                    device = result[1] || '',
                    isUnc = device && device.charAt(1) !== ':',
                    isAbsolute = !! result[2] || isUnc, // UNC paths are always absolute
                    tail = result[3];

                  if (device && resolvedDevice && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
                    // This path points to another device so it is not applicable
                    continue;
                  }

                  if (!resolvedDevice) {
                    resolvedDevice = device;
                  }
                  if (!resolvedAbsolute) {
                    resolvedTail = tail + '\\' + resolvedTail;
                    resolvedAbsolute = isAbsolute;
                  }

                  if (resolvedDevice && resolvedAbsolute) {
                    break;
                  }
                }

                // Replace slashes (in UNC share name) by backslashes
                resolvedDevice = resolvedDevice.replace(/\//g, '\\');

                // At this point the path should be resolved to a full absolute path,
                // but handle relative paths to be safe (might happen when process.cwd()
                // fails)

                // Normalize the tail path

                function f(p) {
                  return !!p;
                }

                resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/).filter(f), !resolvedAbsolute).join('\\');

                return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) || '.';
              };

              // windows version
              exports.normalize = function(path) {
                var result = splitDeviceRe.exec(path),
                  device = result[1] || '',
                  isUnc = device && device.charAt(1) !== ':',
                  isAbsolute = !! result[2] || isUnc, // UNC paths are always absolute
                  tail = result[3],
                  trailingSlash = /[\\\/]$/.test(tail);

                // Normalize the tail path
                tail = normalizeArray(tail.split(/[\\\/]+/).filter(function(p) {
                  return !!p;
                }), !isAbsolute).join('\\');

                if (!tail && !isAbsolute) {
                  tail = '.';
                }
                if (tail && trailingSlash) {
                  tail += '\\';
                }

                // Convert slashes to backslashes when `device` points to an UNC root.
                device = device.replace(/\//g, '\\');

                return device + (isAbsolute ? '\\' : '') + tail;
              };

              // windows version
              exports.join = function() {
                function f(p) {
                  return p && typeof p === 'string';
                }

                var paths = Array.prototype.filter.call(arguments, f);
                var joined = paths.join('\\');

                // Make sure that the joined path doesn't start with two slashes
                // - it will be mistaken for an unc path by normalize() -
                // unless the paths[0] also starts with two slashes
                if (/^[\\\/]{2}/.test(joined) && !/^[\\\/]{2}/.test(paths[0])) {
                  joined = joined.substr(1);
                }

                return exports.normalize(joined);
              };

              // path.relative(from, to)
              // it will solve the relative path from 'from' to 'to', for instance:
              // from = 'C:\\orandea\\test\\aaa'
              // to = 'C:\\orandea\\impl\\bbb'
              // The output of the function should be: '..\\..\\impl\\bbb'
              // windows version
              exports.relative = function(from, to) {
                from = exports.resolve(from);
                to = exports.resolve(to);

                // windows is not case sensitive
                var lowerFrom = from.toLowerCase();
                var lowerTo = to.toLowerCase();

                function trim(arr) {
                  var start = 0;
                  for (; start < arr.length; start++) {
                    if (arr[start] !== '') break;
                  }

                  var end = arr.length - 1;
                  for (; end >= 0; end--) {
                    if (arr[end] !== '') break;
                  }

                  if (start > end) return [];
                  return arr.slice(start, end - start + 1);
                }

                var toParts = trim(to.split('\\'));

                var lowerFromParts = trim(lowerFrom.split('\\'));
                var lowerToParts = trim(lowerTo.split('\\'));

                var length = Math.min(lowerFromParts.length, lowerToParts.length);
                var samePartsLength = length;
                for (var i = 0; i < length; i++) {
                  if (lowerFromParts[i] !== lowerToParts[i]) {
                    samePartsLength = i;
                    break;
                  }
                }

                if (samePartsLength == 0) {
                  return to;
                }

                var outputParts = [];
                for (var i = samePartsLength; i < lowerFromParts.length; i++) {
                  outputParts.push('..');
                }

                outputParts = outputParts.concat(toParts.slice(samePartsLength));

                return outputParts.join('\\');
              };

              exports.sep = '\\';

            } else /* posix */
            {

              // Split a filename into [root, dir, basename, ext], unix version
              // 'root' is just a slash, or nothing.
              var splitPathRe = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/;
              var splitPath = function(filename) {
                var result = splitPathRe.exec(filename);
                return [result[1] || '', result[2] || '', result[3] || '', result[4] || ''];
              };

              // path.resolve([from ...], to)
              // posix version
              exports.resolve = function() {
                var resolvedPath = '',
                  resolvedAbsolute = false;

                for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                  var path = (i >= 0) ? arguments[i] : process.cwd();

                  // Skip empty and invalid entries
                  if (typeof path !== 'string' || !path) {
                    continue;
                  }

                  resolvedPath = path + '/' + resolvedPath;
                  resolvedAbsolute = path.charAt(0) === '/';
                }

                // At this point the path should be resolved to a full absolute path, but
                // handle relative paths to be safe (might happen when process.cwd() fails)

                // Normalize the path
                resolvedPath = normalizeArray(resolvedPath.split('/').filter(function(p) {
                  return !!p;
                }), !resolvedAbsolute).join('/');

                return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
              };

              // path.normalize(path)
              // posix version
              exports.normalize = function(path) {
                var isAbsolute = path.charAt(0) === '/',
                  trailingSlash = path.substr(-1) === '/';

                // Normalize the path
                path = normalizeArray(path.split('/').filter(function(p) {
                  return !!p;
                }), !isAbsolute).join('/');

                if (!path && !isAbsolute) {
                  path = '.';
                }
                if (path && trailingSlash) {
                  path += '/';
                }

                return (isAbsolute ? '/' : '') + path;
              };


              // posix version
              exports.join = function() {
                var paths = Array.prototype.slice.call(arguments, 0);
                return exports.normalize(paths.filter(function(p, index) {
                  return p && typeof p === 'string';
                }).join('/'));
              };


              // path.relative(from, to)
              // posix version
              exports.relative = function(from, to) {
                from = exports.resolve(from).substr(1);
                to = exports.resolve(to).substr(1);

                function trim(arr) {
                  var start = 0;
                  for (; start < arr.length; start++) {
                    if (arr[start] !== '') break;
                  }

                  var end = arr.length - 1;
                  for (; end >= 0; end--) {
                    if (arr[end] !== '') break;
                  }

                  if (start > end) return [];
                  return arr.slice(start, end - start + 1);
                }

                var fromParts = trim(from.split('/'));
                var toParts = trim(to.split('/'));

                var length = Math.min(fromParts.length, toParts.length);
                var samePartsLength = length;
                for (var i = 0; i < length; i++) {
                  if (fromParts[i] !== toParts[i]) {
                    samePartsLength = i;
                    break;
                  }
                }

                var outputParts = [];
                for (var i = samePartsLength; i < fromParts.length; i++) {
                  outputParts.push('..');
                }

                outputParts = outputParts.concat(toParts.slice(samePartsLength));

                return outputParts.join('/');
              };

              exports.sep = '/';
            }


            exports.dirname = function(path) {
              var result = splitPath(path),
                root = result[0],
                dir = result[1];

              if (!root && !dir) {
                // No dirname whatsoever
                return '.';
              }

              if (dir) {
                // It has a dirname, strip trailing slash
                dir = dir.substr(0, dir.length - 1);
              }

              return root + dir;
            };


            exports.basename = function(path, ext) {
              var f = splitPath(path)[2];
              // TODO: make this comparison case-insensitive on windows?
              if (ext && f.substr(-1 * ext.length) === ext) {
                f = f.substr(0, f.length - ext.length);
              }
              return f;
            };


            exports.extname = function(path) {
              return splitPath(path)[3];
            };


            exports.exists = util.deprecate(function(path, callback) {
              require('fs').exists(path, callback);
            }, 'path.exists is now called `fs.exists`.');


            exports.existsSync = util.deprecate(function(path) {
              return require('fs').existsSync(path);
            }, 'path.existsSync is now called `fs.existsSync`.');


            if (isWindows) {
              exports._makeLong = function(path) {
                path = '' + path;
                if (!path) {
                  return '';
                }

                var resolvedPath = exports.resolve(path);

                if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
                  // path is local filesystem path, which needs to be converted
                  // to long UNC path.
                  return '\\\\?\\' + resolvedPath;
                } else if (/^\\\\[^?.]/.test(resolvedPath)) {
                  // path is network UNC path, which needs to be converted
                  // to long UNC path.
                  return '\\\\?\\UNC\\' + resolvedPath.substring(2);
                }

                return path;
              };
            } else {
              exports._makeLong = function(path) {
                return path;
              };
            }

          },

          "54c69a095dc8e4a9173bd8284c4e8ad7": // from: 
          function(exports, require, module, __filename, __dirname) {
            var isArray = typeof Array.isArray === 'function' ? Array.isArray : function(xs) {
                return Object.prototype.toString.call(xs) === '[object Array]'
              };

            var objectKeys = Object.keys || function objectKeys(object) {
                if (object !== Object(object)) throw new TypeError('Invalid object');
                var keys = [];
                for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
                return keys;
              }


              /*!
               * querystring
               * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
               * MIT Licensed
               */

              /**
               * Library version.
               */

              exports.version = '0.3.1';

            /**
             * Object#toString() ref for stringify().
             */

            var toString = Object.prototype.toString;

            /**
             * Cache non-integer test regexp.
             */

            var notint = /[^0-9]/;

            /**
             * Parse the given query `str`, returning an object.
             *
             * @param {String} str
             * @return {Object}
             * @api public
             */

            exports.parse = function(str) {
              if (null == str || '' == str) return {};

              function promote(parent, key) {
                if (parent[key].length == 0) return parent[key] = {};
                var t = {};
                for (var i in parent[key]) t[i] = parent[key][i];
                parent[key] = t;
                return t;
              }

              return String(str).split('&').reduce(function(ret, pair) {
                try {
                  pair = decodeURIComponent(pair.replace(/\+/g, ' '));
                } catch (e) {
                  // ignore
                }

                var eql = pair.indexOf('='),
                  brace = lastBraceInKey(pair),
                  key = pair.substr(0, brace || eql),
                  val = pair.substr(brace || eql, pair.length),
                  val = val.substr(val.indexOf('=') + 1, val.length),
                  parent = ret;

                // ?foo
                if ('' == key) key = pair, val = '';

                // nested
                if (~key.indexOf(']')) {
                  var parts = key.split('['),
                    len = parts.length,
                    last = len - 1;

                  function parse(parts, parent, key) {
                    var part = parts.shift();

                    // end
                    if (!part) {
                      if (isArray(parent[key])) {
                        parent[key].push(val);
                      } else if ('object' == typeof parent[key]) {
                        parent[key] = val;
                      } else if ('undefined' == typeof parent[key]) {
                        parent[key] = val;
                      } else {
                        parent[key] = [parent[key], val];
                      }
                      // array
                    } else {
                      obj = parent[key] = parent[key] || [];
                      if (']' == part) {
                        if (isArray(obj)) {
                          if ('' != val) obj.push(val);
                        } else if ('object' == typeof obj) {
                          obj[objectKeys(obj).length] = val;
                        } else {
                          obj = parent[key] = [parent[key], val];
                        }
                        // prop
                      } else if (~part.indexOf(']')) {
                        part = part.substr(0, part.length - 1);
                        if (notint.test(part) && isArray(obj)) obj = promote(parent, key);
                        parse(parts, obj, part);
                        // key
                      } else {
                        if (notint.test(part) && isArray(obj)) obj = promote(parent, key);
                        parse(parts, obj, part);
                      }
                    }
                  }

                  parse(parts, parent, 'base');
                  // optimize
                } else {
                  if (notint.test(key) && isArray(parent.base)) {
                    var t = {};
                    for (var k in parent.base) t[k] = parent.base[k];
                    parent.base = t;
                  }
                  set(parent.base, key, val);
                }

                return ret;
              }, {
                base: {}
              }).base;
            };

            /**
             * Turn the given `obj` into a query string
             *
             * @param {Object} obj
             * @return {String}
             * @api public
             */

            var stringify = exports.stringify = function(obj, prefix) {
              if (isArray(obj)) {
                return stringifyArray(obj, prefix);
              } else if ('[object Object]' == toString.call(obj)) {
                return stringifyObject(obj, prefix);
              } else if ('string' == typeof obj) {
                return stringifyString(obj, prefix);
              } else {
                return prefix;
              }
            };

            /**
             * Stringify the given `str`.
             *
             * @param {String} str
             * @param {String} prefix
             * @return {String}
             * @api private
             */

            function stringifyString(str, prefix) {
              if (!prefix) throw new TypeError('stringify expects an object');
              return prefix + '=' + encodeURIComponent(str);
            }

            /**
             * Stringify the given `arr`.
             *
             * @param {Array} arr
             * @param {String} prefix
             * @return {String}
             * @api private
             */

            function stringifyArray(arr, prefix) {
              var ret = [];
              if (!prefix) throw new TypeError('stringify expects an object');
              for (var i = 0; i < arr.length; i++) {
                ret.push(stringify(arr[i], prefix + '[]'));
              }
              return ret.join('&');
            }

            /**
             * Stringify the given `obj`.
             *
             * @param {Object} obj
             * @param {String} prefix
             * @return {String}
             * @api private
             */

            function stringifyObject(obj, prefix) {
              var ret = [],
                keys = objectKeys(obj),
                key;
              for (var i = 0, len = keys.length; i < len; ++i) {
                key = keys[i];
                ret.push(stringify(obj[key], prefix ? prefix + '[' + encodeURIComponent(key) + ']' : encodeURIComponent(key)));
              }
              return ret.join('&');
            }

            /**
             * Set `obj`'s `key` to `val` respecting
             * the weird and wonderful syntax of a qs,
             * where "foo=bar&foo=baz" becomes an array.
             *
             * @param {Object} obj
             * @param {String} key
             * @param {String} val
             * @api private
             */

            function set(obj, key, val) {
              var v = obj[key];
              if (undefined === v) {
                obj[key] = val;
              } else if (isArray(v)) {
                v.push(val);
              } else {
                obj[key] = [v, val];
              }
            }

            /**
             * Locate last brace in `str` within the key.
             *
             * @param {String} str
             * @return {Number}
             * @api private
             */

            function lastBraceInKey(str) {
              var len = str.length,
                brace, c;
              for (var i = 0; i < len; ++i) {
                c = str[i];
                if (']' == c) brace = false;
                if ('[' == c) brace = true;
                if ('=' == c && !brace) return i;
              }
            }

          },

          "f0d5935f094eb3d9fb70c67795bd4caf": // from: 
          function(exports, require, module, __filename, __dirname) {
            var events = require('events');
            var util = require('util');

            function Stream() {
              events.EventEmitter.call(this);
            }
            util.inherits(Stream, events.EventEmitter);
            module.exports = Stream;
            // Backwards-compat with node 0.4.x
            Stream.Stream = Stream;

            Stream.prototype.pipe = function(dest, options) {
              var source = this;

              function ondata(chunk) {
                if (dest.writable) {
                  if (false === dest.write(chunk) && source.pause) {
                    source.pause();
                  }
                }
              }

              source.on('data', ondata);

              function ondrain() {
                if (source.readable && source.resume) {
                  source.resume();
                }
              }

              dest.on('drain', ondrain);

              // If the 'end' option is not supplied, dest.end() will be called when
              // source gets the 'end' or 'close' events.  Only dest.end() once, and
              // only when all sources have ended.
              if (!dest._isStdio && (!options || options.end !== false)) {
                dest._pipeCount = dest._pipeCount || 0;
                dest._pipeCount++;

                source.on('end', onend);
                source.on('close', onclose);
              }

              var didOnEnd = false;

              function onend() {
                if (didOnEnd) return;
                didOnEnd = true;

                dest._pipeCount--;

                // remove the listeners
                cleanup();

                if (dest._pipeCount > 0) {
                  // waiting for other incoming streams to end.
                  return;
                }

                dest.end();
              }


              function onclose() {
                if (didOnEnd) return;
                didOnEnd = true;

                dest._pipeCount--;

                // remove the listeners
                cleanup();

                if (dest._pipeCount > 0) {
                  // waiting for other incoming streams to end.
                  return;
                }

                dest.destroy();
              }

              // don't leave dangling pipes when there are errors.
              function onerror(er) {
                cleanup();
                if (this.listeners('error').length === 0) {
                  throw er; // Unhandled stream error in pipe.
                }
              }

              source.on('error', onerror);
              dest.on('error', onerror);

              // remove all the event listeners that were added.
              function cleanup() {
                source.removeListener('data', ondata);
                dest.removeListener('drain', ondrain);

                source.removeListener('end', onend);
                source.removeListener('close', onclose);

                source.removeListener('error', onerror);
                dest.removeListener('error', onerror);

                source.removeListener('end', cleanup);
                source.removeListener('close', cleanup);

                dest.removeListener('end', cleanup);
                dest.removeListener('close', cleanup);
              }

              source.on('end', cleanup);
              source.on('close', cleanup);

              dest.on('end', cleanup);
              dest.on('close', cleanup);

              dest.emit('pipe', source);

              // Allow for unix-like usage: A.pipe(B).pipe(C)
              return dest;
            };

          },

          "4e0d787840f05b0c47b10d63b6f3898f": // from: 
          function(exports, require, module, __filename, __dirname) {
            module.exports = require('util');

          },

          "12124e45d125f26e20242c0e81a80f19": // from: 
          function(exports, require, module, __filename, __dirname) {
            exports.isatty = function() {};
            exports.setRawMode = function() {};

          },

          "d0c9d6cc2490c964b789d43ae4803b7b": // from: 
          function(exports, require, module, __filename, __dirname) {
            var punycode = {
              encode: function(s) {
                return s
              }
            };

            exports.parse = urlParse;
            exports.resolve = urlResolve;
            exports.resolveObject = urlResolveObject;
            exports.format = urlFormat;

            function arrayIndexOf(array, subject) {
              for (var i = 0, j = array.length; i < j; i++) {
                if (array[i] == subject) return i;
              }
              return -1;
            }

            var objectKeys = Object.keys || function objectKeys(object) {
                if (object !== Object(object)) throw new TypeError('Invalid object');
                var keys = [];
                for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
                return keys;
              }

              // Reference: RFC 3986, RFC 1808, RFC 2396

              // define these here so at least they only have to be
              // compiled once on the first module load.
            var protocolPattern = /^([a-z0-9.+-]+:)/i,
              portPattern = /:[0-9]+$/,
              // RFC 2396: characters reserved for delimiting URLs.
              delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
              // RFC 2396: characters not allowed for various reasons.
              unwise = ['{', '}', '|', '\\', '^', '~', '[', ']', '`'].concat(delims),
              // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
              autoEscape = ['\''],
              // Characters that are never ever allowed in a hostname.
              // Note that any invalid chars are also handled, but these
              // are the ones that are *expected* to be seen, so we fast-path
              // them.
              nonHostChars = ['%', '/', '?', ';', '#'].concat(unwise).concat(autoEscape),
              nonAuthChars = ['/', '@', '?', '#'].concat(delims),
              hostnameMaxLen = 255,
              hostnamePartPattern = /^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,
              hostnamePartStart = /^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,
              // protocols that can allow "unsafe" and "unwise" chars.
              unsafeProtocol = {
                'javascript': true,
                'javascript:': true
              },
              // protocols that never have a hostname.
              hostlessProtocol = {
                'javascript': true,
                'javascript:': true
              },
              // protocols that always have a path component.
              pathedProtocol = {
                'http': true,
                'https': true,
                'ftp': true,
                'gopher': true,
                'file': true,
                'http:': true,
                'ftp:': true,
                'gopher:': true,
                'file:': true
              },
              // protocols that always contain a // bit.
              slashedProtocol = {
                'http': true,
                'https': true,
                'ftp': true,
                'gopher': true,
                'file': true,
                'http:': true,
                'https:': true,
                'ftp:': true,
                'gopher:': true,
                'file:': true
              },
              querystring = require('querystring');

            function urlParse(url, parseQueryString, slashesDenoteHost) {
              if (url && typeof(url) === 'object' && url.href) return url;

              if (typeof url !== 'string') {
                throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
              }

              var out = {},
              rest = url;

              // cut off any delimiters.
              // This is to support parse stuff like "<http://foo.com>"
              for (var i = 0, l = rest.length; i < l; i++) {
                if (arrayIndexOf(delims, rest.charAt(i)) === -1) break;
              }
              if (i !== 0) rest = rest.substr(i);


              var proto = protocolPattern.exec(rest);
              if (proto) {
                proto = proto[0];
                var lowerProto = proto.toLowerCase();
                out.protocol = lowerProto;
                rest = rest.substr(proto.length);
              }

              // figure out if it's got a host
              // user@server is *always* interpreted as a hostname, and url
              // resolution will treat //foo/bar as host=foo,path=bar because that's
              // how the browser resolves relative URLs.
              if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var slashes = rest.substr(0, 2) === '//';
                if (slashes && !(proto && hostlessProtocol[proto])) {
                  rest = rest.substr(2);
                  out.slashes = true;
                }
              }

              if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
                // there's a hostname.
                // the first instance of /, ?, ;, or # ends the host.
                // don't enforce full RFC correctness, just be unstupid about it.

                // If there is an @ in the hostname, then non-host chars *are* allowed
                // to the left of the first @ sign, unless some non-auth character
                // comes *before* the @-sign.
                // URLs are obnoxious.
                var atSign = arrayIndexOf(rest, '@');
                if (atSign !== -1) {
                  // there *may be* an auth
                  var hasAuth = true;
                  for (var i = 0, l = nonAuthChars.length; i < l; i++) {
                    var index = arrayIndexOf(rest, nonAuthChars[i]);
                    if (index !== -1 && index < atSign) {
                      // not a valid auth.  Something like http://foo.com/bar@baz/
                      hasAuth = false;
                      break;
                    }
                  }
                  if (hasAuth) {
                    // pluck off the auth portion.
                    out.auth = rest.substr(0, atSign);
                    rest = rest.substr(atSign + 1);
                  }
                }

                var firstNonHost = -1;
                for (var i = 0, l = nonHostChars.length; i < l; i++) {
                  var index = arrayIndexOf(rest, nonHostChars[i]);
                  if (index !== -1 && (firstNonHost < 0 || index < firstNonHost)) firstNonHost = index;
                }

                if (firstNonHost !== -1) {
                  out.host = rest.substr(0, firstNonHost);
                  rest = rest.substr(firstNonHost);
                } else {
                  out.host = rest;
                  rest = '';
                }

                // pull out port.
                var p = parseHost(out.host);
                var keys = objectKeys(p);
                for (var i = 0, l = keys.length; i < l; i++) {
                  var key = keys[i];
                  out[key] = p[key];
                }

                // we've indicated that there is a hostname,
                // so even if it's empty, it has to be present.
                out.hostname = out.hostname || '';

                // validate a little.
                if (out.hostname.length > hostnameMaxLen) {
                  out.hostname = '';
                } else {
                  var hostparts = out.hostname.split(/\./);
                  for (var i = 0, l = hostparts.length; i < l; i++) {
                    var part = hostparts[i];
                    if (!part) continue;
                    if (!part.match(hostnamePartPattern)) {
                      var newpart = '';
                      for (var j = 0, k = part.length; j < k; j++) {
                        if (part.charCodeAt(j) > 127) {
                          // we replace non-ASCII char with a temporary placeholder
                          // we need this to make sure size of hostname is not
                          // broken by replacing non-ASCII by nothing
                          newpart += 'x';
                        } else {
                          newpart += part[j];
                        }
                      }
                      // we test again with ASCII char only
                      if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);
                        if (bit) {
                          validParts.push(bit[1]);
                          notHost.unshift(bit[2]);
                        }
                        if (notHost.length) {
                          rest = '/' + notHost.join('.') + rest;
                        }
                        out.hostname = validParts.join('.');
                        break;
                      }
                    }
                  }
                }

                // hostnames are always lower case.
                out.hostname = out.hostname.toLowerCase();

                // IDNA Support: Returns a puny coded representation of "domain".
                // It only converts the part of the domain name that
                // has non ASCII characters. I.e. it dosent matter if
                // you call it with a domain that already is in ASCII.
                var domainArray = out.hostname.split('.');
                var newOut = [];
                for (var i = 0; i < domainArray.length; ++i) {
                  var s = domainArray[i];
                  newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
                }
                out.hostname = newOut.join('.');

                out.host = (out.hostname || '') + ((out.port) ? ':' + out.port : '');
                out.href += out.host;
              }

              // now rest is set to the post-host stuff.
              // chop off any delim chars.
              if (!unsafeProtocol[lowerProto]) {

                // First, make 100% sure that any "autoEscape" chars get
                // escaped, even if encodeURIComponent doesn't think they
                // need to be.
                for (var i = 0, l = autoEscape.length; i < l; i++) {
                  var ae = autoEscape[i];
                  var esc = encodeURIComponent(ae);
                  if (esc === ae) {
                    esc = escape(ae);
                  }
                  rest = rest.split(ae).join(esc);
                }

                // Now make sure that delims never appear in a url.
                var chop = rest.length;
                for (var i = 0, l = delims.length; i < l; i++) {
                  var c = arrayIndexOf(rest, delims[i]);
                  if (c !== -1) {
                    chop = Math.min(c, chop);
                  }
                }
                rest = rest.substr(0, chop);
              }


              // chop off from the tail first.
              var hash = arrayIndexOf(rest, '#');
              if (hash !== -1) {
                // got a fragment string.
                out.hash = rest.substr(hash);
                rest = rest.slice(0, hash);
              }
              var qm = arrayIndexOf(rest, '?');
              if (qm !== -1) {
                out.search = rest.substr(qm);
                out.query = rest.substr(qm + 1);
                if (parseQueryString) {
                  out.query = querystring.parse(out.query);
                }
                rest = rest.slice(0, qm);
              } else if (parseQueryString) {
                // no query string, but parseQueryString still requested
                out.search = '';
                out.query = {};
              }
              if (rest) out.pathname = rest;
              if (slashedProtocol[proto] && out.hostname && !out.pathname) {
                out.pathname = '/';
              }

              //to support http.request
              if (out.pathname || out.search) {
                out.path = (out.pathname ? out.pathname : '') + (out.search ? out.search : '');
              }

              // finally, reconstruct the href based on what has been validated.
              out.href = urlFormat(out);
              return out;
            }

            // format a parsed object into a url string
            function urlFormat(obj) {
              // ensure it's an object, and not a string url.
              // If it's an obj, this is a no-op.
              // this way, you can call url_format() on strings
              // to clean up potentially wonky urls.
              if (typeof(obj) === 'string') obj = urlParse(obj);

              var auth = obj.auth || '';
              if (auth) {
                auth = auth.split('@').join('%40');
                for (var i = 0, l = nonAuthChars.length; i < l; i++) {
                  var nAC = nonAuthChars[i];
                  auth = auth.split(nAC).join(encodeURIComponent(nAC));
                }
                auth += '@';
              }

              var protocol = obj.protocol || '',
                host = (obj.host !== undefined) ? auth + obj.host : obj.hostname !== undefined ? (
                auth + obj.hostname + (obj.port ? ':' + obj.port : '')) : false,
                pathname = obj.pathname || '',
                query = obj.query && ((typeof obj.query === 'object' && objectKeys(obj.query).length) ? querystring.stringify(obj.query) : '') || '',
                search = obj.search || (query && ('?' + query)) || '',
                hash = obj.hash || '';

              if (protocol && protocol.substr(-1) !== ':') protocol += ':';

              // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
              // unless they had them to begin with.
              if (obj.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
                host = '//' + (host || '');
                if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
              } else if (!host) {
                host = '';
              }

              if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
              if (search && search.charAt(0) !== '?') search = '?' + search;

              return protocol + host + pathname + search + hash;
            }

            function urlResolve(source, relative) {
              return urlFormat(urlResolveObject(source, relative));
            }

            function urlResolveObject(source, relative) {
              if (!source) return relative;

              source = urlParse(urlFormat(source), false, true);
              relative = urlParse(urlFormat(relative), false, true);

              // hash is always overridden, no matter what.
              source.hash = relative.hash;

              if (relative.href === '') {
                source.href = urlFormat(source);
                return source;
              }

              // hrefs like //foo/bar always cut to the protocol.
              if (relative.slashes && !relative.protocol) {
                relative.protocol = source.protocol;
                //urlParse appends trailing / to urls like http://www.example.com
                if (slashedProtocol[relative.protocol] && relative.hostname && !relative.pathname) {
                  relative.path = relative.pathname = '/';
                }
                relative.href = urlFormat(relative);
                return relative;
              }

              if (relative.protocol && relative.protocol !== source.protocol) {
                // if it's a known url protocol, then changing
                // the protocol does weird things
                // first, if it's not file:, then we MUST have a host,
                // and if there was a path
                // to begin with, then we MUST have a path.
                // if it is file:, then the host is dropped,
                // because that's known to be hostless.
                // anything else is assumed to be absolute.
                if (!slashedProtocol[relative.protocol]) {
                  relative.href = urlFormat(relative);
                  return relative;
                }
                source.protocol = relative.protocol;
                if (!relative.host && !hostlessProtocol[relative.protocol]) {
                  var relPath = (relative.pathname || '').split('/');
                  while (relPath.length && !(relative.host = relPath.shift()));
                  if (!relative.host) relative.host = '';
                  if (!relative.hostname) relative.hostname = '';
                  if (relPath[0] !== '') relPath.unshift('');
                  if (relPath.length < 2) relPath.unshift('');
                  relative.pathname = relPath.join('/');
                }
                source.pathname = relative.pathname;
                source.search = relative.search;
                source.query = relative.query;
                source.host = relative.host || '';
                source.auth = relative.auth;
                source.hostname = relative.hostname || relative.host;
                source.port = relative.port;
                //to support http.request
                if (source.pathname !== undefined || source.search !== undefined) {
                  source.path = (source.pathname ? source.pathname : '') + (source.search ? source.search : '');
                }
                source.slashes = source.slashes || relative.slashes;
                source.href = urlFormat(source);
                return source;
              }

              var isSourceAbs = (source.pathname && source.pathname.charAt(0) === '/'),
                isRelAbs = (
                relative.host !== undefined || relative.pathname && relative.pathname.charAt(0) === '/'),
                mustEndAbs = (isRelAbs || isSourceAbs || (source.host && relative.pathname)),
                removeAllDots = mustEndAbs,
                srcPath = source.pathname && source.pathname.split('/') || [],
                relPath = relative.pathname && relative.pathname.split('/') || [],
                psychotic = source.protocol && !slashedProtocol[source.protocol];

              // if the url is a non-slashed url, then relative
              // links like ../.. should be able
              // to crawl up to the hostname, as well.  This is strange.
              // source.protocol has already been set by now.
              // Later on, put the first path part into the host field.
              if (psychotic) {

                delete source.hostname;
                delete source.port;
                if (source.host) {
                  if (srcPath[0] === '') srcPath[0] = source.host;
                  else srcPath.unshift(source.host);
                }
                delete source.host;
                if (relative.protocol) {
                  delete relative.hostname;
                  delete relative.port;
                  if (relative.host) {
                    if (relPath[0] === '') relPath[0] = relative.host;
                    else relPath.unshift(relative.host);
                  }
                  delete relative.host;
                }
                mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
              }

              if (isRelAbs) {
                // it's absolute.
                source.host = (relative.host || relative.host === '') ? relative.host : source.host;
                source.hostname = (relative.hostname || relative.hostname === '') ? relative.hostname : source.hostname;
                source.search = relative.search;
                source.query = relative.query;
                srcPath = relPath;
                // fall through to the dot-handling below.
              } else if (relPath.length) {
                // it's relative
                // throw away the existing file, and take the new path instead.
                if (!srcPath) srcPath = [];
                srcPath.pop();
                srcPath = srcPath.concat(relPath);
                source.search = relative.search;
                source.query = relative.query;
              } else if ('search' in relative) {
                // just pull out the search.
                // like href='?foo'.
                // Put this after the other two cases because it simplifies the booleans
                if (psychotic) {
                  source.hostname = source.host = srcPath.shift();
                  //occationaly the auth can get stuck only in host
                  //this especialy happens in cases like
                  //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
                  var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ? source.host.split('@') : false;
                  if (authInHost) {
                    source.auth = authInHost.shift();
                    source.host = source.hostname = authInHost.shift();
                  }
                }
                source.search = relative.search;
                source.query = relative.query;
                //to support http.request
                if (source.pathname !== undefined || source.search !== undefined) {
                  source.path = (source.pathname ? source.pathname : '') + (source.search ? source.search : '');
                }
                source.href = urlFormat(source);
                return source;
              }
              if (!srcPath.length) {
                // no path at all.  easy.
                // we've already handled the other stuff above.
                delete source.pathname;
                //to support http.request
                if (!source.search) {
                  source.path = '/' + source.search;
                } else {
                  delete source.path;
                }
                source.href = urlFormat(source);
                return source;
              }
              // if a url ENDs in . or .., then it must get a trailing slash.
              // however, if it ends in anything else non-slashy,
              // then it must NOT get a trailing slash.
              var last = srcPath.slice(-1)[0];
              var hasTrailingSlash = (
              (source.host || relative.host) && (last === '.' || last === '..') || last === '');

              // strip single dots, resolve double dots to parent dir
              // if the path tries to go above the root, `up` ends up > 0
              var up = 0;
              for (var i = srcPath.length; i >= 0; i--) {
                last = srcPath[i];
                if (last == '.') {
                  srcPath.splice(i, 1);
                } else if (last === '..') {
                  srcPath.splice(i, 1);
                  up++;
                } else if (up) {
                  srcPath.splice(i, 1);
                  up--;
                }
              }

              // if the path is allowed to go above the root, restore leading ..s
              if (!mustEndAbs && !removeAllDots) {
                for (; up--; up) {
                  srcPath.unshift('..');
                }
              }

              if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
                srcPath.unshift('');
              }

              if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
                srcPath.push('');
              }

              var isAbsolute = srcPath[0] === '' || (srcPath[0] && srcPath[0].charAt(0) === '/');

              // put the host back
              if (psychotic) {
                source.hostname = source.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
                //occationaly the auth can get stuck only in host
                //this especialy happens in cases like
                //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
                var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ? source.host.split('@') : false;
                if (authInHost) {
                  source.auth = authInHost.shift();
                  source.host = source.hostname = authInHost.shift();
                }
              }

              mustEndAbs = mustEndAbs || (source.host && srcPath.length);

              if (mustEndAbs && !isAbsolute) {
                srcPath.unshift('');
              }

              source.pathname = srcPath.join('/');
              //to support request.http
              if (source.pathname !== undefined || source.search !== undefined) {
                source.path = (source.pathname ? source.pathname : '') + (source.search ? source.search : '');
              }
              source.auth = relative.auth || source.auth;
              source.slashes = source.slashes || relative.slashes;
              source.href = urlFormat(source);
              return source;
            }

            function parseHost(host) {
              var out = {};
              var port = portPattern.exec(host);
              if (port) {
                port = port[0];
                out.port = port.substr(1);
                host = host.substr(0, host.length - port.length);
              }
              if (host) out.hostname = host;
              return out;
            }

          },

          "ddeff58ff67e5d2d686891fc66ebb2b7": // from: 
          function(exports, require, module, __filename, __dirname) {
            // Copyright Joyent, Inc. and other Node contributors.
            //
            // Permission is hereby granted, free of charge, to any person obtaining a
            // copy of this software and associated documentation files (the
            // "Software"), to deal in the Software without restriction, including
            // without limitation the rights to use, copy, modify, merge, publish,
            // distribute, sublicense, and/or sell copies of the Software, and to permit
            // persons to whom the Software is furnished to do so, subject to the
            // following conditions:
            //
            // The above copyright notice and this permission notice shall be included
            // in all copies or substantial portions of the Software.
            //
            // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
            // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
            // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
            // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
            // USE OR OTHER DEALINGS IN THE SOFTWARE.

            var formatRegExp = /%[sdj%]/g;
            exports.format = function(f) {
              if (typeof f !== 'string') {
                var objects = [];
                for (var i = 0; i < arguments.length; i++) {
                  objects.push(inspect(arguments[i]));
                }
                return objects.join(' ');
              }

              var i = 1;
              var args = arguments;
              var len = args.length;
              var str = String(f).replace(formatRegExp, function(x) {
                if (x === '%%') return '%';
                if (i >= len) return x;
                switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  return JSON.stringify(args[i++]);
                default:
                  return x;
                }
              });
              for (var x = args[i]; i < len; x = args[++i]) {
                if (x === null || typeof x !== 'object') {
                  str += ' ' + x;
                } else {
                  str += ' ' + inspect(x);
                }
              }
              return str;
            };


            // Mark that a method should not be used.
            // Returns a modified function which warns once by default.
            // If --no-deprecation is set, then it is a no-op.
            exports.deprecate = function(fn, msg) {
              if (process.noDeprecation === true) {
                return fn;
              }

              var warned = false;

              function deprecated() {
                if (!warned) {
                  if (process.traceDeprecation) {
                    console.trace(msg);
                  } else {
                    console.error(msg);
                  }
                  warned = true;
                }
                return fn.apply(this, arguments);
              }

              return deprecated;
            };


            exports.print = function() {
              for (var i = 0, len = arguments.length; i < len; ++i) {
                process.stdout.write(String(arguments[i]));
              }
            };


            exports.puts = function() {
              for (var i = 0, len = arguments.length; i < len; ++i) {
                process.stdout.write(arguments[i] + '\n');
              }
            };


            exports.debug = function(x) {
              process.stderr.write('DEBUG: ' + x + '\n');
            };


            var error = exports.error = function(x) {
              for (var i = 0, len = arguments.length; i < len; ++i) {
                process.stderr.write(arguments[i] + '\n');
              }
            };


            /**
             * Echos the value of a value. Trys to print the value out
             * in the best way possible given the different types.
             *
             * @param {Object} obj The object to print out.
             * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
             *    properties of objects.
             * @param {Number} depth Depth in which to descend in object. Default is 2.
             * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
             *    output. Default is false (no coloring).
             */
            function inspect(obj, showHidden, depth, colors) {
              var ctx = {
                showHidden: showHidden,
                seen: [],
                stylize: colors ? stylizeWithColor : stylizeNoColor
              };
              return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
            }
            exports.inspect = inspect;


            // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
            inspect.colors = {
              'bold': [1, 22],
              'italic': [3, 23],
              'underline': [4, 24],
              'inverse': [7, 27],
              'white': [37, 39],
              'grey': [90, 39],
              'black': [30, 39],
              'blue': [34, 39],
              'cyan': [36, 39],
              'green': [32, 39],
              'magenta': [35, 39],
              'red': [31, 39],
              'yellow': [33, 39]
            };

            // Don't use 'blue' not visible on cmd.exe
            inspect.styles = {
              'special': 'cyan',
              'number': 'yellow',
              'boolean': 'yellow',
              'undefined': 'grey',
              'null': 'bold',
              'string': 'green',
              'date': 'magenta',
              // "name": intentionally not styling
              'regexp': 'red'
            };


            function stylizeWithColor(str, styleType) {
              var style = inspect.styles[styleType];

              if (style) {
                return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
              } else {
                return str;
              }
            }


            function stylizeNoColor(str, styleType) {
              return str;
            }


            function arrayToHash(array) {
              var hash = {};

              array.forEach(function(val, idx) {
                hash[val] = true;
              });

              return hash;
            }


            function formatValue(ctx, value, recurseTimes) {
              // Provide a hook for user-specified inspect functions.
              // Check that value is an object with an inspect function on it
              if (value && typeof value.inspect === 'function' &&
              // Filter out the util module, it's inspect function is special
              value.inspect !== exports.inspect &&
              // Also filter out any prototype objects using the circular check.
              !(value.constructor && value.constructor.prototype === value)) {
                return String(value.inspect(recurseTimes));
              }

              // Primitive types cannot have properties
              var primitive = formatPrimitive(ctx, value);
              if (primitive) {
                return primitive;
              }

              // Look up the keys of the object.
              var keys = Object.keys(value);
              var visibleKeys = arrayToHash(keys);

              if (ctx.showHidden) {
                keys = Object.getOwnPropertyNames(value);
              }

              // Some type of object without properties can be shortcutted.
              if (keys.length === 0) {
                if (typeof value === 'function') {
                  var name = value.name ? ': ' + value.name : '';
                  return ctx.stylize('[Function' + name + ']', 'special');
                }
                if (isRegExp(value)) {
                  return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                }
                if (isDate(value)) {
                  return ctx.stylize(Date.prototype.toString.call(value), 'date');
                }
                if (isError(value)) {
                  return formatError(value);
                }
              }

              var base = '',
                array = false,
                braces = ['{', '}'];

              // Make Array say that they are Array
              if (isArray(value)) {
                array = true;
                braces = ['[', ']'];
              }

              // Make functions say that they are functions
              if (typeof value === 'function') {
                var n = value.name ? ': ' + value.name : '';
                base = ' [Function' + n + ']';
              }

              // Make RegExps say that they are RegExps
              if (isRegExp(value)) {
                base = ' ' + RegExp.prototype.toString.call(value);
              }

              // Make dates with properties first say the date
              if (isDate(value)) {
                base = ' ' + Date.prototype.toUTCString.call(value);
              }

              // Make error with message first say the error
              if (isError(value)) {
                base = ' ' + formatError(value);
              }

              if (keys.length === 0 && (!array || value.length == 0)) {
                return braces[0] + base + braces[1];
              }

              if (recurseTimes < 0) {
                if (isRegExp(value)) {
                  return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                } else {
                  return ctx.stylize('[Object]', 'special');
                }
              }

              ctx.seen.push(value);

              var output;
              if (array) {
                output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
              } else {
                output = keys.map(function(key) {
                  return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                });
              }

              ctx.seen.pop();

              return reduceToSingleString(output, base, braces);
            }


            function formatPrimitive(ctx, value) {
              switch (typeof value) {
              case 'undefined':
                return ctx.stylize('undefined', 'undefined');

              case 'string':
                var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
                return ctx.stylize(simple, 'string');

              case 'number':
                return ctx.stylize('' + value, 'number');

              case 'boolean':
                return ctx.stylize('' + value, 'boolean');
              }
              // For some reason typeof null is "object", so special case here.
              if (value === null) {
                return ctx.stylize('null', 'null');
              }
            }


            function formatError(value) {
              return '[' + Error.prototype.toString.call(value) + ']';
            }


            function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
              var output = [];
              for (var i = 0, l = value.length; i < l; ++i) {
                if (hasOwnProperty(value, String(i))) {
                  output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                  String(i), true));
                } else {
                  output.push('');
                }
              }
              keys.forEach(function(key) {
                if (!key.match(/^\d+$/)) {
                  output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                  key, true));
                }
              });
              return output;
            }


            function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
              var name, str, desc;
              desc = Object.getOwnPropertyDescriptor(value, key) || {
                value: value[key]
              };
              if (desc.get) {
                if (desc.set) {
                  str = ctx.stylize('[Getter/Setter]', 'special');
                } else {
                  str = ctx.stylize('[Getter]', 'special');
                }
              } else {
                if (desc.set) {
                  str = ctx.stylize('[Setter]', 'special');
                }
              }
              if (!hasOwnProperty(visibleKeys, key)) {
                name = '[' + key + ']';
              }
              if (!str) {
                if (ctx.seen.indexOf(desc.value) < 0) {
                  if (recurseTimes === null) {
                    str = formatValue(ctx, desc.value, null);
                  } else {
                    str = formatValue(ctx, desc.value, recurseTimes - 1);
                  }
                  if (str.indexOf('\n') > -1) {
                    if (array) {
                      str = str.split('\n').map(function(line) {
                        return '  ' + line;
                      }).join('\n').substr(2);
                    } else {
                      str = '\n' + str.split('\n').map(function(line) {
                        return '   ' + line;
                      }).join('\n');
                    }
                  }
                } else {
                  str = ctx.stylize('[Circular]', 'special');
                }
              }
              if (typeof name === 'undefined') {
                if (array && key.match(/^\d+$/)) {
                  return str;
                }
                name = JSON.stringify('' + key);
                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                  name = name.substr(1, name.length - 2);
                  name = ctx.stylize(name, 'name');
                } else {
                  name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                  name = ctx.stylize(name, 'string');
                }
              }

              return name + ': ' + str;
            }


            function reduceToSingleString(output, base, braces) {
              var numLinesEst = 0;
              var length = output.reduce(function(prev, cur) {
                numLinesEst++;
                if (cur.indexOf('\n') >= 0) numLinesEst++;
                return prev + cur.length + 1;
              }, 0);

              if (length > 60) {
                return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
              }

              return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
            }


            // NOTE: These type checking functions intentionally don't use `instanceof`
            // because it is fragile and can be easily faked with `Object.create()`.
            function isArray(ar) {
              return Array.isArray(ar) || (typeof ar === 'object' && objectToString(ar) === '[object Array]');
            }
            exports.isArray = isArray;


            function isRegExp(re) {
              return typeof re === 'object' && objectToString(re) === '[object RegExp]';
            }
            exports.isRegExp = isRegExp;


            function isDate(d) {
              return typeof d === 'object' && objectToString(d) === '[object Date]';
            }
            exports.isDate = isDate;


            function isError(e) {
              return typeof e === 'object' && objectToString(e) === '[object Error]';
            }
            exports.isError = isError;


            function objectToString(o) {
              return Object.prototype.toString.call(o);
            }


            exports.p = exports.deprecate(function() {
              for (var i = 0, len = arguments.length; i < len; ++i) {
                error(exports.inspect(arguments[i]));
              }
            }, 'util.p: Use console.error() instead.');


            function pad(n) {
              return n < 10 ? '0' + n.toString(10) : n.toString(10);
            }


            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            // 26 Feb 16:19:34
            function timestamp() {
              var d = new Date();
              var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
              return [d.getDate(), months[d.getMonth()], time].join(' ');
            }


            exports.log = function(msg) {
              exports.puts(timestamp() + ' - ' + msg.toString());
            };


            exports.exec = exports.deprecate(function() {
              return require('child_process').exec.apply(this, arguments);
            }, 'util.exec is now called `child_process.exec`.');


            function pump(readStream, writeStream, callback) {
              var callbackCalled = false;

              function call(a, b, c) {
                if (callback && !callbackCalled) {
                  callback(a, b, c);
                  callbackCalled = true;
                }
              }

              readStream.addListener('data', function(chunk) {
                if (writeStream.write(chunk) === false) readStream.pause();
              });

              writeStream.addListener('drain', function() {
                readStream.resume();
              });

              readStream.addListener('end', function() {
                writeStream.end();
              });

              readStream.addListener('close', function() {
                call();
              });

              readStream.addListener('error', function(err) {
                writeStream.end();
                call(err);
              });

              writeStream.addListener('error', function(err) {
                readStream.destroy();
                call(err);
              });
            }
            exports.pump = exports.deprecate(pump, 'util.pump() is deprecated. Use ReadableStream.prototype.pump() instead.');


            /**
             * Inherit the prototype methods from one constructor into another.
             *
             * The Function.prototype.inherits from lang.js rewritten as a standalone
             * function (not on Function.prototype). NOTE: If this file is to be loaded
             * during bootstrapping this function needs to be rewritten using some native
             * functions as prototype setup using normal JavaScript does not work as
             * expected during bootstrapping (see mirror.js in r114903).
             *
             * @param {function} ctor Constructor function which needs to inherit the
             *     prototype.
             * @param {function} superCtor Constructor function to inherit prototype from.
             */
            exports.inherits = function(ctor, superCtor) {
              ctor.super_ = superCtor;
              ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                  value: ctor,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              });
            };

            exports._extend = function(origin, add) {
              // Don't do anything if add isn't an object
              if (!add || typeof add !== 'object') return origin;

              var keys = Object.keys(add);
              var i = keys.length;
              while (i--) {
                origin[keys[i]] = add[keys[i]];
              }
              return origin;
            };

            function hasOwnProperty(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            }

          },

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
          return global.filesystem.modules.
          function [source];
        },
        runInNewContext: function(source, filename, returnResult) {
          console.log("WARNING: runInNewContext doesn't work " + "in the browser.");
          return global.filesystem.module.
          function [source];
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
      setTimeout(fn, 0);
    },
    stdout: {
      write: function(string) {
        console.log(string.trim());
      }
    },
    stderr: {
      write: function(string) {
        console.error(string.trim())
      }
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
  };;

  _ref = global.filesystem.modules.api;
  for (name in _ref) {
    ref = _ref[name];
    NativeModule._source[name] = global.filesystem.read(ref);
  }
  return NativeModule;
})();

NativeModule.require("module").runMain();