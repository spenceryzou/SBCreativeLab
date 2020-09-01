/**
 * @license
 MIT
 Light.js v0.1.107
 (c) 2016 Nicolas Riciotti
 Released under the MIT License.
 Copyright (C) 2014-2015 by WebReflection
   Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
'use strict';
!function(modules) {
  /**
   * @param {number} moduleId
   * @return {?}
   */
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i : moduleId,
      l : false,
      exports : {}
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = true, module.exports;
  }
  /** @type {function(number, !Array, ?): undefined} */
  var oldWebpackJsonp = window.webpackJsonp;
  /**
   * @param {number} chunkIds
   * @param {!Array} moreModules
   * @param {?} startupModules
   * @return {undefined}
   */
  window.webpackJsonp = function(chunkIds, moreModules, startupModules) {
    var moduleId;
    var chunkId;
    /** @type {number} */
    var i = 0;
    /** @type {!Array} */
    var _sizeAnimateTimeStamps = [];
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (rawOrder[chunkId]) {
        _sizeAnimateTimeStamps.push(rawOrder[chunkId][0]);
      }
      /** @type {number} */
      rawOrder[chunkId] = 0;
    }
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }
    if (oldWebpackJsonp) {
      oldWebpackJsonp(chunkIds, moreModules, startupModules);
    }
    for (; _sizeAnimateTimeStamps.length;) {
      _sizeAnimateTimeStamps.shift()();
    }
  };
  var installedModules = {};
  var rawOrder = {
    4 : 0
  };
  /**
   * @param {number} key
   * @return {?}
   */
  __webpack_require__.e = function(key) {
    /**
     * @return {undefined}
     */
    function onScriptComplete() {
      /** @type {null} */
      script.onerror = script.onload = null;
      clearTimeout(timeout);
      var resolver = rawOrder[key];
      if (0 !== resolver) {
        if (resolver) {
          resolver[1](new Error("Loading chunk " + key + " failed."));
        }
        rawOrder[key] = void 0;
      }
    }
    var progress = rawOrder[key];
    if (0 === progress) {
      return new Promise(function(e) {
        e();
      });
    }
    if (progress) {
      return progress[2];
    }
    /** @type {!Promise} */
    var p = new Promise(function(cmdDict, i) {
      /** @type {!Array} */
      progress = rawOrder[key] = [cmdDict, i];
    });
    /** @type {!Promise} */
    progress[2] = p;
    /** @type {!Element} */
    var el_head = document.getElementsByTagName("head")[0];
    /** @type {!Element} */
    var script = document.createElement("script");
    /** @type {string} */
    script.type = "text/javascript";
    /** @type {string} */
    script.charset = "utf-8";
    /** @type {boolean} */
    script.async = true;
    /** @type {number} */
    script.timeout = 12e4;
    if (__webpack_require__.nc) {
      script.setAttribute("nonce", __webpack_require__.nc);
    }
    /** @type {string} */
    script.src = __webpack_require__.p + "assets/js/" + ({}[key] || key) + "-1cbeb6b8b1ce52796fc8.js";
    /** @type {number} */
    var timeout = setTimeout(onScriptComplete, 12e4);
    return script.onerror = script.onload = onScriptComplete, el_head.appendChild(script), p;
  };
  /** @type {!Array} */
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  /**
   * @param {!Function} exports
   * @param {string} name
   * @param {!Function} getter
   * @return {undefined}
   */
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable : false,
        enumerable : true,
        get : getter
      });
    }
  };
  /**
   * @param {!Object} module
   * @return {?}
   */
  __webpack_require__.n = function(module) {
    /** @type {function(): ?} */
    var getter = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return __webpack_require__.d(getter, "a", getter), getter;
  };
  /**
   * @param {!Function} object
   * @param {string} name
   * @return {?}
   */
  __webpack_require__.o = function(object, name) {
    return Object.prototype.hasOwnProperty.call(object, name);
  };
  /** @type {string} */
  __webpack_require__.p = "https://d3qjci20gubw09.cloudfront.net/";
  /**
   * @param {?} err
   * @return {?}
   */
  __webpack_require__.oe = function(err) {
    throw console.error(err), err;
  };
  __webpack_require__(__webpack_require__.s = 15);
}([function(a, err, e) {
  var callback;
  var options;
  /** @type {function(!Object): ?} */
  var forEach = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  !function(addedRenderer, b) {
    if ("object" === forEach(err) && void 0 !== a) {
      a.exports = b();
    } else {
      /** @type {function(): ?} */
      callback = b;
      if (void 0 !== (options = "function" == typeof callback ? callback.call(err, e, err, a) : callback)) {
        a.exports = options;
      }
    }
  }(0, function() {
    /**
     * @param {string} cssProperty
     * @return {?}
     */
    function parse(cssProperty) {
      return cssProperty.replace(/-([a-zA-Z0-9])/g, function(ctcp) {
        return ctcp[1].toUpperCase();
      });
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function create(name) {
      var s = parse(name);
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function dasherize(str) {
      return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function isArray(obj) {
      return "[object Array]" === Object.prototype.toString.call(obj) || "[object NodeList]" === Object.prototype.toString.call(obj);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    function _iso(o) {
      return "[object Object]" === Object.prototype.toString.call(o);
    }
    /**
     * @return {?}
     */
    function extend() {
      var object;
      var property;
      var value = arguments[0] || {};
      /** @type {number} */
      var i = 1;
      /** @type {number} */
      var argl = arguments.length;
      if ("object" !== (void 0 === value ? "undefined" : forEach(value)) && "function" != typeof value) {
        value = {};
      }
      for (; i < argl; i++) {
        if (null != (object = arguments[i])) {
          for (property in object) {
            if (void 0 !== object[property]) {
              value[property] = object[property];
            }
          }
        }
      }
      return value;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function clone(obj) {
      return isArray(obj) ? obj.slice() : extend({}, obj);
    }
    /**
     * @param {!Object} args
     * @return {?}
     */
    function transform(args) {
      var results;
      if (isArray(args)) {
        /** @type {!Array} */
        results = [];
        /** @type {number} */
        var i = 0;
        var argl = args.length;
        for (; i < argl; i++) {
          results.push("object" === forEach(args[i]) && null !== args[i] ? transform(args[i]) : args[i]);
        }
      } else {
        results = {};
        var i;
        for (i in args) {
          results[i] = "object" === forEach(args[i]) && null !== args[i] ? transform(args[i]) : args[i];
        }
      }
      return results;
    }
    /**
     * @return {undefined}
     */
    function l() {
    }
    /**
     * @param {!Object} e
     * @param {!Object} target
     * @return {undefined}
     */
    function update(e, target) {
      target = Transform(target);
      var key;
      for (key in target) {
        var i = support.getPrefixed(key);
        if (isArray(e) || e.length) {
          /** @type {number} */
          var j = 0;
          var el = e.length;
          for (; j < el; j++) {
            e[j].style[i] = target[key];
          }
        } else {
          e.style[i] = target[key];
        }
      }
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function Transform(obj) {
      /** @type {string} */
      var name = "";
      var k;
      for (k in obj) {
        if ("translateX" == k) {
          /** @type {string} */
          name = name + ("translateX(" + obj.translateX + ") ");
          delete obj.translateX;
        }
        if ("translateY" == k) {
          /** @type {string} */
          name = name + ("translateY(" + obj.translateY + ") ");
          delete obj.translateY;
        }
        if ("translate" == k) {
          /** @type {string} */
          name = name + ("translate(" + obj.translateY + ") ");
          delete obj.translate;
        }
        if ("scale" == k) {
          /** @type {string} */
          name = name + ("scale(" + obj.scale + ") ");
          delete obj.scale;
        }
        if ("scaleX" == k) {
          /** @type {string} */
          name = name + ("scaleX(" + obj.scaleX + ") ");
          delete obj.scaleX;
        }
        if ("scaleY" == k) {
          /** @type {string} */
          name = name + ("scaleY(" + obj.scaleY + ") ");
          delete obj.scaleY;
        }
        if ("rotate" == k) {
          /** @type {string} */
          name = name + ("rotate(" + obj.rotate + ") ");
          delete obj.rotate;
        }
        if ("force3d" == k) {
          /** @type {string} */
          name = name + (" " + support.translateZ);
        }
      }
      return obj.transform = name, obj;
    }
    /**
     * @param {!Node} e
     * @param {string} prop
     * @return {?}
     */
    function getStyle(e, prop) {
      var style;
      return e.currentStyle ? style = e.currentStyle[prop] : window.getComputedStyle && (style = document.defaultView.getComputedStyle(e, null).getPropertyValue(prop)), style;
    }
    /**
     * @param {!Object} e
     * @param {number} p
     * @return {?}
     */
    function toggleCp(e, p) {
      var top = (void 0 !== p || document, e.offsetTop);
      var posX = e.offsetLeft;
      for (; e && e.parentNode && e.parentNode != p;) {
        if ("static" != getStyle(e.parentNode, "position")) {
          top = top + e.parentNode.offsetTop;
          posX = posX + e.parentNode.offsetLeft;
        }
        e = e.parentNode;
      }
      return {
        top : top,
        left : posX
      };
    }
    /**
     * @param {string} name
     * @param {!Object} email
     * @return {undefined}
     */
    function notify(name, email) {
      console.log("%c[notify]: " + name, "color:#00aeff", email);
    }
    /**
     * @param {string} message
     * @param {!Object} event
     * @return {undefined}
     */
    function warn(message, event) {
      console.log("%c[warn]: " + message, "color:#ff0084", event);
    }
    /**
     * @param {string} key
     * @param {!Function} options
     * @param {string} value
     * @return {undefined}
     */
    function t(key, options, value) {
      if (void 0 === json[key]) {
        json[key] = value ? document.registerElement(key, {
          extends : value,
          prototype : Object.create(options.prototype)
        }) : document.registerElement(key, options);
      }
    }
    /**
     * @return {undefined}
     */
    function mousedown() {
      /** @type {number} */
      var rulei = 0;
      /** @type {number} */
      var rulelength = rules.length;
      for (; rulei < rulelength; rulei++) {
        rules[rulei]._resolveParentBatch();
      }
      requestAnimationFrame(mousedown);
    }
    /**
     * @param {?} fieldAnother
     * @return {?}
     */
    function item(fieldAnother) {
      switch(fieldAnother) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "\u00a0":
          return "&nbsp;";
      }
    }
    /**
     * @param {string} s
     * @return {?}
     */
    function escapeData(s) {
      return s.replace(reSelectorCase, item);
    }
    /**
     * @return {undefined}
     */
    function handler() {
      clearTimeout(_takingTooLongTimeout);
      app.fire("resize");
      /** @type {number} */
      _takingTooLongTimeout = setTimeout(function() {
        app.fire("resizeend");
      }, 300);
    }
    /**
     * @return {undefined}
     */
    function checkDimensions() {
      requestAnimationFrame(checkDimensions);
      app.fire("requestAnimationFrame");
    }
    var babelHelpers = {};
    /**
     * @param {!AudioNode} instance
     * @param {!Function} Constructor
     * @return {undefined}
     */
    babelHelpers.classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    /**
     * @param {!Object} subClass
     * @param {!Object} superClass
     * @return {undefined}
     */
    babelHelpers.inherits = function(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) {
        throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : forEach(superClass)));
      }
      /** @type {!Object} */
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor : {
          value : subClass,
          enumerable : false,
          writable : true,
          configurable : true
        }
      });
      if (superClass) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(subClass, superClass);
        } else {
          /** @type {!Object} */
          subClass.__proto__ = superClass;
        }
      }
    };
    /**
     * @param {number} call
     * @param {?} value
     * @return {?}
     */
    babelHelpers.possibleConstructorReturn = function(call, value) {
      if (!call) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !value || "object" !== (void 0 === value ? "undefined" : forEach(value)) && "function" != typeof value ? call : value;
    };
    (function(window, document, Object, canCreateDiscussions) {
      /**
       * @param {!NodeList} list
       * @param {string} action
       * @return {undefined}
       */
      function loopAndVerify(list, action) {
        /** @type {number} */
        var i = 0;
        var listLength = list.length;
        for (; i < listLength; i++) {
          verifyAndSetupAndAction(list[i], action);
        }
      }
      /**
       * @param {!NodeList} list
       * @return {undefined}
       */
      function loopAndSetup(list) {
        var node;
        /** @type {number} */
        var j = 0;
        var dataLen = list.length;
        for (; j < dataLen; j++) {
          node = list[j];
          patch(node, protos[getTypeIndex(node)]);
        }
      }
      /**
       * @param {string} action
       * @return {?}
       */
      function executeAction(action) {
        return function(node) {
          if (isValidNode(node)) {
            verifyAndSetupAndAction(node, action);
            loopAndVerify(node.querySelectorAll(query), action);
          }
        };
      }
      /**
       * @param {!Node} target
       * @return {?}
       */
      function getTypeIndex(target) {
        var is = target.getAttribute("is");
        var nodeName = target.nodeName.toUpperCase();
        /** @type {number} */
        var i = indexOf.call(types, is ? PREFIX_IS + is.toUpperCase() : PREFIX_TAG + nodeName);
        return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
      }
      /**
       * @param {string} name
       * @param {string} type
       * @return {?}
       */
      function isInQSA(name, type) {
        return -1 < query.indexOf(name + '[is="' + type + '"]');
      }
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      function onDOMAttrModified(e) {
        var element = e.currentTarget;
        var attrChange = e.attrChange;
        var attrName = e.attrName;
        var fromElement = e.target;
        if (notFromInnerHTMLHelper && (!fromElement || fromElement === element) && element.attributeChangedCallback && "style" !== attrName & e.prevValue !== e.newValue) {
          element.attributeChangedCallback(attrName, attrChange === e[ADDITION] ? null : e.prevValue, attrChange === e[REMOVAL] ? null : e.newValue);
        }
      }
      /**
       * @param {string} action
       * @return {?}
       */
      function onDOMNode(action) {
        var executor = executeAction(action);
        return function(e) {
          asapQueue.push(executor, e.target);
        };
      }
      /**
       * @param {!Event} e
       * @return {undefined}
       */
      function onReadyStateChange(e) {
        if (de) {
          /** @type {boolean} */
          de = false;
          e.currentTarget.removeEventListener(domContentLoaded, onReadyStateChange);
        }
        loopAndVerify((e.target || document).querySelectorAll(query), e.detail === DETACHED ? DETACHED : ATTACHED);
        if (IE8) {
          purge();
        }
      }
      /**
       * @param {string} name
       * @param {!Object} value
       * @return {undefined}
       */
      function patchedSetAttribute(name, value) {
        var self = this;
        setAttribute.call(self, name, value);
        onSubtreeModified.call(self, {
          target : self
        });
      }
      /**
       * @param {!Element} node
       * @param {!Object} proto
       * @return {undefined}
       */
      function setupNode(node, proto) {
        setPrototype(node, proto);
        if (observer) {
          observer.observe(node, selector);
        } else {
          if (ce) {
            /** @type {function(string, !Object): undefined} */
            node.setAttribute = patchedSetAttribute;
            node[EXPANDO_UID] = getAttributesMirror(node);
            node.addEventListener(eventName, onSubtreeModified);
          }
          node.addEventListener(DOM_ATTR_MODIFIED, onDOMAttrModified);
        }
        if (node.createdCallback && notFromInnerHTMLHelper) {
          node.createdCallback();
        }
      }
      /**
       * @return {undefined}
       */
      function purge() {
        var node;
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = targets.length;
        for (; i < l; i++) {
          node = targets[i];
          if (!documentElement.contains(node)) {
            l--;
            targets.splice(i--, 1);
            verifyAndSetupAndAction(node, DETACHED);
          }
        }
      }
      /**
       * @param {string} type
       * @return {?}
       */
      function throwTypeError(type) {
        throw new Error("A " + type + " type is already registered");
      }
      /**
       * @param {!Element} node
       * @param {string} action
       * @return {undefined}
       */
      function verifyAndSetupAndAction(node, action) {
        var fn;
        var i = getTypeIndex(node);
        if (-1 < i) {
          patchIfNotAlready(node, protos[i]);
          /** @type {number} */
          i = 0;
          if (action !== ATTACHED || node["_is" + ATTACHED]) {
            if (!(action !== DETACHED || node["_is" + DETACHED])) {
              /** @type {boolean} */
              node["_is" + ATTACHED] = false;
              /** @type {boolean} */
              node["_is" + DETACHED] = true;
              /** @type {number} */
              i = 1;
            }
          } else {
            /** @type {boolean} */
            node["_is" + DETACHED] = false;
            /** @type {boolean} */
            node["_is" + ATTACHED] = true;
            /** @type {number} */
            i = 1;
            if (IE8 && indexOf.call(targets, node) < 0) {
              targets.push(node);
            }
          }
          if (i && (fn = node[action + "Callback"])) {
            fn.call(node);
          }
        }
      }
      if (!("registerElement" in document)) {
        var asapQueue;
        var onSubtreeModified;
        var callDOMAttrModified;
        var getAttributesMirror;
        var observer;
        var patchIfNotAlready;
        var patch;
        /** @type {string} */
        var EXPANDO_UID = "__registerElement" + (1e5 * Math.random() >> 0);
        /** @type {string} */
        var ATTACHED = "attached";
        /** @type {string} */
        var DETACHED = "detached";
        /** @type {string} */
        var ADDITION = "ADDITION";
        /** @type {string} */
        var REMOVAL = "REMOVAL";
        /** @type {string} */
        var DOM_ATTR_MODIFIED = "DOMAttrModified";
        /** @type {string} */
        var domContentLoaded = "DOMContentLoaded";
        /** @type {string} */
        var eventName = "DOMSubtreeModified";
        /** @type {string} */
        var PREFIX_TAG = "<";
        /** @type {string} */
        var PREFIX_IS = "=";
        /** @type {!RegExp} */
        var validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/;
        /** @type {!Array} */
        var invalidNames = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"];
        /** @type {!Array} */
        var types = [];
        /** @type {!Array} */
        var protos = [];
        /** @type {string} */
        var query = "";
        /** @type {!Element} */
        var documentElement = document.documentElement;
        /** @type {function(this:(IArrayLike<T>|string), T, number=): number} */
        var indexOf = types.indexOf || function(value) {
          var i = this.length;
          for (; i-- && this[i] !== value;) {
          }
          return i;
        };
        var OP = Object.prototype;
        /** @type {function(this:Object, *): boolean} */
        var hOP = OP.hasOwnProperty;
        /** @type {function(this:Object, (Object|null)): boolean} */
        var iPO = OP.isPrototypeOf;
        /** @type {function(!Object, string, !Object): !Object} */
        var defineProperty = Object.defineProperty;
        /** @type {function(T, string): (ObjectPropertyDescriptor<T>|undefined)} */
        var gOPD = Object.getOwnPropertyDescriptor;
        /** @type {function(!Object): !Array<string>} */
        var gOPN = Object.getOwnPropertyNames;
        /** @type {function(!Object): (Object|null)} */
        var gPO = Object.getPrototypeOf;
        /** @type {function(!Object, ?): !Object} */
        var sPO = Object.setPrototypeOf;
        /** @type {boolean} */
        var hasProto = !!Object.__proto__;
        /** @type {function((Object|null), (Object|null)=): !Object} */
        var create = Object.create || function Bridge(proto) {
          return proto ? (Bridge.prototype = proto, new Bridge) : this;
        };
        /** @type {function(!Object, ?): !Object} */
        var setPrototype = sPO || (hasProto ? function(obj, proto) {
          return obj.__proto__ = proto, obj;
        } : gOPN && gOPD ? function() {
          /**
           * @param {?} o
           * @param {!Object} p
           * @return {undefined}
           */
          function setProperties(o, p) {
            var key;
            /** @type {!Array<string>} */
            var names = gOPN(p);
            /** @type {number} */
            var j = 0;
            /** @type {number} */
            var namesLength = names.length;
            for (; j < namesLength; j++) {
              /** @type {string} */
              key = names[j];
              if (!hOP.call(o, key)) {
                defineProperty(o, key, gOPD(p, key));
              }
            }
          }
          return function(o, p) {
            do {
              setProperties(o, p);
            } while ((p = gPO(p)) && !iPO.call(p, o));
            return o;
          };
        }() : function(data, obj) {
          var i;
          for (i in obj) {
            data[i] = obj[i];
          }
          return data;
        });
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var HTMLElementPrototype = (window.HTMLElement || window.Element || window.Node).prototype;
        /** @type {boolean} */
        var IE8 = !iPO.call(HTMLElementPrototype, documentElement);
        /** @type {function((Node|Window)): ?} */
        var isValidNode = IE8 ? function(insertionPoint) {
          return 1 === insertionPoint.nodeType;
        } : function(node) {
          return iPO.call(HTMLElementPrototype, node);
        };
        /** @type {(Array|boolean)} */
        var targets = IE8 && [];
        var cloneNode = HTMLElementPrototype.cloneNode;
        /** @type {function(this:Document, (Node|null), boolean): (Node|null)} */
        var importNode = document.importNode;
        var setAttribute = HTMLElementPrototype.setAttribute;
        var removeAttribute = HTMLElementPrototype.removeAttribute;
        /** @type {function(this:Document, string, string=): !Element} */
        var createElement = document.createElement;
        var selector = MutationObserver && {
          attributes : true,
          characterData : true,
          attributeOldValue : true
        };
        var DOMAttrModified = MutationObserver || function(canCreateDiscussions) {
          /** @type {boolean} */
          ce = false;
          documentElement.removeEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
        };
        var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(fn) {
          setTimeout(fn, 10);
        };
        /** @type {boolean} */
        var pe = false;
        /** @type {boolean} */
        var ce = true;
        /** @type {boolean} */
        var de = true;
        /** @type {boolean} */
        var notFromInnerHTMLHelper = true;
        if (sPO || hasProto) {
          /**
           * @param {!Element} node
           * @param {!Object} proto
           * @return {undefined}
           */
          patchIfNotAlready = function(node, proto) {
            if (!iPO.call(proto, node)) {
              setupNode(node, proto);
            }
          };
          /** @type {function(!Element, !Object): undefined} */
          patch = setupNode;
        } else {
          /**
           * @param {!Element} node
           * @param {!Object} proto
           * @return {undefined}
           */
          patchIfNotAlready = function(node, proto) {
            if (!node[EXPANDO_UID]) {
              /** @type {!Object} */
              node[EXPANDO_UID] = Object(true);
              setupNode(node, proto);
            }
          };
          /** @type {function(!Element, !Object): undefined} */
          patch = patchIfNotAlready;
        }
        if (IE8) {
          /** @type {boolean} */
          ce = false;
          (function() {
            /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
            var descriptor = gOPD(HTMLElementPrototype, "addEventListener");
            /** @type {function(string, ?, ?): undefined} */
            var addEventListener = descriptor.value;
            /**
             * @param {string} name
             * @return {undefined}
             */
            var patchedRemoveAttribute = function(name) {
              /** @type {!CustomEvent} */
              var e = new CustomEvent(DOM_ATTR_MODIFIED, {
                bubbles : true
              });
              /** @type {string} */
              e.attrName = name;
              e.prevValue = this.getAttribute(name);
              /** @type {null} */
              e.newValue = null;
              /** @type {number} */
              e[REMOVAL] = e.attrChange = 2;
              removeAttribute.call(this, name);
              this.dispatchEvent(e);
            };
            /**
             * @param {string} name
             * @param {!Object} value
             * @return {undefined}
             */
            var patchedSetAttribute = function(name, value) {
              var had = this.hasAttribute(name);
              var old = had && this.getAttribute(name);
              /** @type {!CustomEvent} */
              var e = new CustomEvent(DOM_ATTR_MODIFIED, {
                bubbles : true
              });
              setAttribute.call(this, name, value);
              /** @type {string} */
              e.attrName = name;
              e.prevValue = had ? old : null;
              /** @type {!Object} */
              e.newValue = value;
              if (had) {
                /** @type {number} */
                e.MODIFICATION = e.attrChange = 1;
              } else {
                /** @type {number} */
                e[ADDITION] = e.attrChange = 0;
              }
              this.dispatchEvent(e);
            };
            /**
             * @param {!Event} e
             * @return {undefined}
             */
            var onPropertyChange = function(e) {
              var event;
              var node = e.currentTarget;
              var superSecret = node[EXPANDO_UID];
              var propertyName = e.propertyName;
              if (superSecret.hasOwnProperty(propertyName)) {
                superSecret = superSecret[propertyName];
                /** @type {!CustomEvent} */
                event = new CustomEvent(DOM_ATTR_MODIFIED, {
                  bubbles : true
                });
                event.attrName = superSecret.name;
                event.prevValue = superSecret.value || null;
                event.newValue = superSecret.value = node[propertyName] || null;
                if (null == event.prevValue) {
                  /** @type {number} */
                  event[ADDITION] = event.attrChange = 0;
                } else {
                  /** @type {number} */
                  event.MODIFICATION = event.attrChange = 1;
                }
                node.dispatchEvent(event);
              }
            };
            /**
             * @param {string} name
             * @param {?} evt
             * @param {?} callbackId
             * @return {undefined}
             */
            descriptor.value = function(name, evt, callbackId) {
              if (name === DOM_ATTR_MODIFIED && this.attributeChangedCallback && this.setAttribute !== patchedSetAttribute) {
                this[EXPANDO_UID] = {
                  className : {
                    name : "class",
                    value : this.className
                  }
                };
                /** @type {function(string, !Object): undefined} */
                this.setAttribute = patchedSetAttribute;
                /** @type {function(string): undefined} */
                this.removeAttribute = patchedRemoveAttribute;
                addEventListener.call(this, "propertychange", onPropertyChange);
              }
              addEventListener.call(this, name, evt, callbackId);
            };
            defineProperty(HTMLElementPrototype, "addEventListener", descriptor);
          })();
        } else {
          if (!MutationObserver) {
            documentElement.addEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
            documentElement.setAttribute(EXPANDO_UID, 1);
            documentElement.removeAttribute(EXPANDO_UID);
            if (ce) {
              /**
               * @param {!Event} e
               * @return {?}
               */
              onSubtreeModified = function(e) {
                var oldAttributes;
                var newAttributes;
                var key;
                var node = this;
                if (node === e.target) {
                  oldAttributes = node[EXPANDO_UID];
                  node[EXPANDO_UID] = newAttributes = getAttributesMirror(node);
                  for (key in newAttributes) {
                    if (!(key in oldAttributes)) {
                      return callDOMAttrModified(0, node, key, oldAttributes[key], newAttributes[key], ADDITION);
                    }
                    if (newAttributes[key] !== oldAttributes[key]) {
                      return callDOMAttrModified(1, node, key, oldAttributes[key], newAttributes[key], "MODIFICATION");
                    }
                  }
                  for (key in oldAttributes) {
                    if (!(key in newAttributes)) {
                      return callDOMAttrModified(2, node, key, oldAttributes[key], newAttributes[key], REMOVAL);
                    }
                  }
                }
              };
              /**
               * @param {number} attrChange
               * @param {!Object} currentTarget
               * @param {string} attrName
               * @param {?} prevValue
               * @param {!Object} newValue
               * @param {string} action
               * @return {undefined}
               */
              callDOMAttrModified = function(attrChange, currentTarget, attrName, prevValue, newValue, action) {
                var e = {
                  attrChange : attrChange,
                  currentTarget : currentTarget,
                  attrName : attrName,
                  prevValue : prevValue,
                  newValue : newValue
                };
                /** @type {number} */
                e[action] = attrChange;
                onDOMAttrModified(e);
              };
              /**
               * @param {!Element} node
               * @return {?}
               */
              getAttributesMirror = function(node) {
                var attr;
                var name;
                var result = {};
                var attrs = node.attributes;
                /** @type {number} */
                var j = 0;
                var attrsLen = attrs.length;
                for (; j < attrsLen; j++) {
                  attr = attrs[j];
                  if ("setAttribute" !== (name = attr.name)) {
                    result[name] = attr.value;
                  }
                }
                return result;
              };
            }
          }
        }
        /**
         * @param {string} type
         * @param {{extends: (string|undefined), prototype: (Object|null|undefined)}=} options
         * @return {function(new:Element, ...*): ?}
         */
        document.registerElement = function(type, options) {
          if (upperType = type.toUpperCase(), pe || (pe = true, MutationObserver ? (observer = function(attached, detached) {
            /**
             * @param {!Object} list
             * @param {?} callback
             * @return {undefined}
             */
            function checkEmAll(list, callback) {
              /** @type {number} */
              var j = 0;
              var dataLen = list.length;
              for (; j < dataLen; callback(list[j++])) {
              }
            }
            return new MutationObserver(function(categories) {
              var current;
              var node;
              var value;
              /** @type {number} */
              var i = 0;
              var l = categories.length;
              for (; i < l; i++) {
                current = categories[i];
                if ("childList" === current.type) {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper && node.attributeChangedCallback && "style" !== current.attributeName && (value = node.getAttribute(current.attributeName)) !== current.oldValue) {
                    node.attributeChangedCallback(current.attributeName, current.oldValue, value);
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)), observer.observe(document, {
            childList : true,
            subtree : true
          })) : (asapQueue = [], rAF(function ASAP() {
            for (; asapQueue.length;) {
              asapQueue.shift().call(null, asapQueue.shift());
            }
            rAF(ASAP);
          }), document.addEventListener("DOMNodeInserted", onDOMNode(ATTACHED)), document.addEventListener("DOMNodeRemoved", onDOMNode(DETACHED))), document.addEventListener(domContentLoaded, onReadyStateChange), document.addEventListener("readystatechange", onReadyStateChange), document.importNode = function(doc, srcElement) {
            /** @type {(Node|null)} */
            var node = importNode.call(document, doc, !!srcElement);
            if (node.attributes) {
              var i = getTypeIndex(node);
              if (-1 < i) {
                patch(node, protos[i]);
              }
              if (srcElement) {
                loopAndSetup(node.querySelectorAll(query));
              }
            }
            return node;
          }, document.createElement = function(tag, typeExtension) {
            /** @type {!Element} */
            var node = createElement.apply(document, arguments);
            /** @type {string} */
            var name = "" + tag;
            /** @type {number} */
            var i = indexOf.call(types, (typeExtension ? PREFIX_IS : PREFIX_TAG) + (typeExtension || name).toUpperCase());
            /** @type {boolean} */
            var setup = -1 < i;
            return typeExtension && (node.setAttribute("is", typeExtension = typeExtension.toLowerCase()), setup && (setup = isInQSA(name.toUpperCase(), typeExtension))), notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper, setup && patch(node, protos[i]), node;
          }, HTMLElementPrototype.cloneNode = function(deep) {
            var node = cloneNode.call(this, !!deep);
            var i = getTypeIndex(node);
            return -1 < i && patch(node, protos[i]), deep && loopAndSetup(node.querySelectorAll(query)), node;
          }), -2 < indexOf.call(types, PREFIX_IS + upperType) + indexOf.call(types, PREFIX_TAG + upperType) && throwTypeError(type), !validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
            throw new Error("The type " + type + " is invalid");
          }
          var upperType;
          var i;
          /**
           * @return {?}
           */
          var constructor = function() {
            return extending ? document.createElement(nodeName, upperType) : document.createElement(nodeName);
          };
          var opt = options || OP;
          /** @type {boolean} */
          var extending = hOP.call(opt, "extends");
          /** @type {string} */
          var nodeName = extending ? options.extends.toUpperCase() : upperType;
          return extending && -1 < indexOf.call(types, PREFIX_TAG + nodeName) && throwTypeError(nodeName), i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1, query = query.concat(query.length ? "," : "", extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName), constructor.prototype = protos[i] = hOP.call(opt, "prototype") ? opt.prototype : create(HTMLElementPrototype), loopAndVerify(document.querySelectorAll(query), ATTACHED), constructor;
        };
      }
    })(window, document, Object);
    if (!Array.prototype.includes) {
      /**
       * @param {!Function} i
       * @param {number=} p1
       * @return {boolean}
       * @template T
       */
      Array.prototype.includes = function(i) {
        /** @type {!Object} */
        var params = Object(this);
        /** @type {number} */
        var fromJ = parseInt(params.length) || 0;
        if (0 === fromJ) {
          return false;
        }
        var j;
        /** @type {number} */
        var n = parseInt(arguments[1]) || 0;
        if (n >= 0) {
          /** @type {number} */
          j = n;
        } else {
          if ((j = fromJ + n) < 0) {
            /** @type {number} */
            j = 0;
          }
        }
        var k;
        for (; j < fromJ;) {
          if (k = params[j], i === k || i !== i && k !== k) {
            return true;
          }
          j++;
        }
        return false;
      };
    }
    (function() {
      /** @type {number} */
      var y$$ = 0;
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var vendors = ["ms", "moz", "webkit", "o"];
      for (; i < vendors.length && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[vendors[i] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[i] + "CancelAnimationFrame"] || window[vendors[i] + "CancelRequestAnimationFrame"];
      }
      if (window.msRequestAnimationFrame) {
        /**
         * @param {!Function} callback
         * @return {?}
         */
        window.requestAnimationFrame = function(callback) {
          return window.msRequestAnimationFrame(function() {
            callback(+new Date);
          });
        };
      }
      if (!window.requestAnimationFrame) {
        /**
         * @param {!Function} callback
         * @param {?} scope
         * @return {?}
         */
        window.requestAnimationFrame = function(callback, scope) {
          /** @type {number} */
          var fingerprinted_bundle_path = Date.now();
          var voronoi = window.setTimeout(function() {
            callback(fingerprinted_bundle_path + 1e3 / 60);
          }, 1e3 / 60);
          return y$$ = fingerprinted_bundle_path + 1e3 / 60, voronoi;
        };
      }
      if (!window.cancelAnimationFrame) {
        /**
         * @param {?} id
         * @return {undefined}
         */
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    })();
    var length = {};
    var requestFS = {};
    /** @type {null} */
    var validProp = null;
    /** @type {!Element} */
    var domScroll = document.createElement("div");
    /** @type {!CSSStyleDeclaration} */
    var style = domScroll.style;
    /** @type {!Array<string>} */
    var args = " Webkit WebKit Moz O Ms".split(" ");
    /** @type {!Array<string>} */
    var syns = " -webkit- -webkit- -moz- -o- -ms-".split(" ");
    /** @type {number} */
    var arg_count = args.length;
    /** @type {boolean} */
    var A = false;
    /**
     * @param {string} prop
     * @param {?} handler
     * @return {?}
     */
    var resolve = function(prop, handler) {
      if (A & prop in requestFS) {
        return requestFS[prop];
      }
      var i;
      var checkEndTime = void 0 !== handler && handler;
      /** @type {number} */
      var c = arg_count;
      i = prop.replace(/(^[a-z])/g, function(shortMonthName) {
        return shortMonthName.toUpperCase();
      }).replace(/\-([a-z])/g, function(canCreateDiscussions, shortMonthName) {
        return shortMonthName.toUpperCase();
      });
      for (; c--;) {
        if (prop in style) {
          return prop;
        }
        if (args[c] + i in style) {
          return checkEndTime ? syns[c] + prop.toLowerCase() : args[c] + i;
        }
        if (void 0 !== window[args[c].toLowerCase() + i]) {
          return args[c].toLowerCase() + i;
        }
        if (void 0 !== window[args[c] + i]) {
          return args[c] + i;
        }
      }
      return false;
    };
    validProp = {
      prefix : function() {
        var base = resolve("transform");
        return base ? base.replace("Transform", "") : "";
      },
      cssprefix : function() {
        var base = resolve("transform", true);
        return base ? base.replace("transform", "") : "";
      },
      transform : function() {
        return resolve("transform");
      },
      transformCss : function() {
        return resolve("transform", true);
      },
      transform3d : function() {
        return "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || !!resolve("perspective");
      },
      translateZ : function() {
        return this.transform3d() ? "translateZ(0)" : "";
      },
      transformOrigin : function() {
        return resolve("transformOrigin");
      },
      backfaceVisibility : function() {
        return resolve("backfaceVisibility");
      },
      perspective : function() {
        return resolve("perspective");
      },
      perspectiveOrigin : function() {
        return resolve("perspectiveOrigin");
      },
      transition : function() {
        return resolve("transition");
      },
      transitionProperty : function() {
        return resolve("transitionProperty");
      },
      transitionDuration : function() {
        return resolve("transitionDuration");
      },
      transitionTimingFunction : function() {
        return resolve("transitionTimingFunction");
      },
      transitionDelay : function() {
        return resolve("transitionDelay");
      },
      transitionEvent : function() {
        return resolve("transitionEvent");
      },
      transitionEventPrefix : function() {
        return resolve("transitionEvent") ? resolve("transitionEvent").replace("TransitionEvent", "").toLowerCase() : "";
      },
      transitionEnd : function() {
        return "" !== this.transitionEventPrefix() ? this.transitionEventPrefix() + "TransitionEnd" : "transitionend";
      },
      touch : function() {
        return "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
      },
      msPointer : function() {
        return !!window.navigator.msPointerEnabled;
      },
      pointer : function() {
        return !!window.navigator.pointerEnabled;
      },
      ipad : function() {
        return !!navigator.userAgent.match(/.*(iPad).*/);
      },
      iphone : function() {
        return !!navigator.userAgent.match(/.*(iPhone).*/);
      },
      android : function() {
        return !!navigator.userAgent.match(/.*(Android).*/);
      },
      firefox : function() {
        return !!navigator.userAgent.match(/.*((f|F)irefox).*/);
      },
      ltIE9 : function() {
        return window.attachEvent && !window.addEventListener;
      },
      pointerdown : function() {
        return this.touch() ? "touchstart" : this.pointer() ? "pointerdown" : this.msPointer() ? "MSPointerDown" : "mousedown";
      },
      pointerup : function() {
        return this.touch() ? "touchend" : this.pointer() ? "pointerup" : this.msPointer() ? "MSPointerUp" : "mouseup";
      },
      pointermove : function() {
        return this.touch() ? "touchmove" : this.pointer() ? "pointermove" : this.msPointer() ? "MSPointerMove" : "mousemove";
      },
      pointerenter : function() {
        return this.touch() ? "touchstart" : this.pointer() ? "pointerenter" : this.msPointer() ? "MSPointerEnter" : "mouseenter";
      },
      pointerleave : function() {
        return this.touch() ? "touchend" : this.pointer() ? "pointerleave" : this.msPointer() ? "MSPointerLeave" : "mouseleave";
      },
      pointerover : function() {
        return this.touch() ? "touchstart" : this.pointer() ? "pointerover" : this.msPointer() ? "MSPointerOver" : "mouseover";
      },
      pointerout : function() {
        return this.touch() ? "touchend" : this.pointer() ? "pointerout" : this.msPointer() ? "MSPointerOut" : "mouseout";
      },
      multipointerdown : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mousedown", "touchstart"] : ["touchstart"] : this.pointer() ? ["pointerdown"] : this.msPointer() ? ["MSPointerDown"] : ["mousedown"];
      },
      multipointerup : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseup", "touchend"] : ["touchend"] : this.pointer() ? ["pointerup"] : this.msPointer() ? ["MSPointerUp"] : ["mouseup"];
      },
      multipointermove : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mousemove", "touchmove"] : ["touchmove"] : this.pointer() ? ["pointermove"] : this.msPointer() ? ["MSPointerMove"] : ["mousemove"];
      },
      multipointerenter : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseenter", "touchstart"] : ["touchstart"] : this.pointer() ? ["pointerenter"] : this.msPointer() ? ["MSPointerEnter"] : ["mouseenter"];
      },
      multipointerleave : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseleave", "touchend"] : ["touchend"] : this.pointer() ? ["pointerleave"] : this.msPointer() ? ["MSPointerLeave"] : ["mouseleave"];
      },
      multipointerover : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseover", "touchstart"] : ["touchstart"] : this.pointer() ? ["pointerover"] : this.msPointer() ? ["MSPointerOver"] : ["mouseover"];
      },
      multipointerout : function() {
        return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseout", "touchend"] : ["touchend"] : this.pointer() ? ["pointerout"] : this.msPointer() ? ["MSPointerOut"] : ["mouseout"];
      },
      smallscreen : function() {
        return window.innerWidth < 700;
      }
    };
    var prefix;
    var prop;
    for (prop in validProp) {
      if (validProp.hasOwnProperty(prop)) {
        /** @type {string} */
        prefix = prop;
        requestFS[prefix] = validProp[prop]();
      }
    }
    /**
     * @param {!Object} options
     * @return {?}
     */
    requestFS.test = function(options) {
      return !!resolve(options);
    };
    /**
     * @param {string} name
     * @return {?}
     */
    requestFS.getPrefixed = function(name) {
      return resolve(name);
    };
    /**
     * @param {string} gwServerCredentials_
     * @return {?}
     */
    requestFS.getCssPrefixed = function(gwServerCredentials_) {
      return resolve(gwServerCredentials_, true);
    };
    /** @type {!Array} */
    var vendors = ["moz", "webkit", "", "ms", "o"];
    /** @type {number} */
    var i = vendors.length;
    if (void 0 !== document.cancelFullscreen) {
      /** @type {string} */
      requestFS.requestFullscreen = "requestFullscreen";
      /** @type {string} */
      requestFS.cancelFullScreen = "exitFullscreen";
      /** @type {string} */
      requestFS.fullscreenchange = "fullscreenchange";
    } else {
      for (; i--;) {
        if (!("moz" == vendors[i] && !document.mozFullScreenEnabled || void 0 === document[vendors[i] + "CancelFullScreen"])) {
          /** @type {string} */
          requestFS.requestFullscreen = vendors[i] + "RequestFullScreen";
          /** @type {string} */
          requestFS.cancelFullScreen = vendors[i] + "CancelFullScreen";
          /** @type {string} */
          requestFS.fullScreenChange = vendors[i] + "fullscreenchange";
          /** @type {string} */
          requestFS.isFullScreen = "webkit" == vendors[i] ? vendors[i] + "IsFullScreen" : vendors[i] + "FullScreen";
        }
      }
    }
    /** @type {boolean} */
    A = true;
    var util = {
      camelCalise : parse,
      pascalise : create,
      hyphenise : dasherize,
      isArray : isArray,
      isObject : _iso,
      clone : clone,
      cloneDeep : transform,
      extend : extend,
      nob : length,
      nop : l,
      style : update,
      position : toggleCp,
      notify : notify,
      warn : warn
    };
    /** @type {function(!Object): ?} */
    var amend = isArray;
    var app = {
      normalize : function(str) {
        return str.replace(":", "");
      },
      listeners : [],
      on : function(name, callback, data) {
        if (void 0 === callback) {
          util.warn("cannot find callback for " + name + " in context:" + data);
        } else {
          name = this.normalize(name);
          this.listeners.push({
            name : name,
            closure : callback,
            target : data
          });
        }
      },
      off : function(name, value, type) {
        var item;
        /** @type {number} */
        var i = 0;
        var length = this.listeners.length;
        name = this.normalize(name);
        for (; i < length; i++) {
          item = this.listeners[i];
          if (!(item.name !== name || item.closure !== value || type && item.target !== type)) {
            this.listeners.splice(i, 1);
            i--;
            length--;
          }
        }
      },
      fire : function(name, data) {
        var listener;
        /** @type {number} */
        var i = 0;
        var length = this.listeners.length;
        name = this.normalize(name);
        for (; i < length; i++) {
          if ((listener = this.listeners[i]) && listener.name === name) {
            if (void 0 !== data) {
              listener.closure.apply(listener.target, data);
            } else {
              listener.closure.call(listener.target);
            }
          }
        }
      },
      handlers : {},
      handlersQueue : {},
      setHandler : function(name, handler) {
        if (name = this.normalize(name), this.handlers[name] = handler, void 0 !== this.handlersQueue[name]) {
          /** @type {number} */
          var counts = 0;
          for (; counts < this.handlersQueue[name].length; counts++) {
            this.request(name, this.handlersQueue[name][counts]);
          }
          delete this.handlersQueue[name];
        }
      },
      request : function(e, body) {
        if (e = this.normalize(e), void 0 !== this.handlers[e]) {
          return void 0 !== body ? this.handlers[e].apply(this, body) : this.handlers[e]();
        }
        this.handlersQueue[e] = this.handlersQueue[e] || [];
        this.handlersQueue[e].push(body);
      },
      subscribe : function(name, val, fn) {
        _.warn("EventDispatcher.on is depreciated and will be removed. Please use EventDispatcher.on instead");
        this.subscribe(name, val, fn);
      },
      unsubscribe : function(type, fn) {
        _.warn("EventDispatcher.off is depreciated and will be removed. Please use EventDispatcher.off instead");
        this.off(type, fn, target);
      },
      publish : function(event, data) {
        _.warn("EventDispatcher.trigger is depreciated and will be removed. Please use EventDispatcher.trigger) instead");
        this.fire(event, data);
      },
      trigger : function(event, data) {
        _.warn("'EventDispatcher.trigger' is depreciated and will be removed. Please use 'EventDispatcher.fire' instead");
        this.fire(event, data);
      }
    };
    var json = {};
    var options = {
      on : function(name, fn, data) {
        this.callbackStack = this.callbackStack || {};
        this.callbackStack[name] = this.callbackStack[name] || {
          evtName : name,
          evtCbArr : []
        };
        this.callbackStack[name].evtCbArr.push({
          fn : fn,
          ctx : void 0 !== data ? data : this
        });
      },
      off : function(name, fn) {
        if (void 0 !== this.callbackStack && void 0 !== this.callbackStack[name]) {
          /** @type {number} */
          var i = 0;
          var patchLen = this.callbackStack[name].evtCbArr.length;
          for (; i < patchLen; i++) {
            if (this.callbackStack[name].evtCbArr[i].fn == fn) {
              this.callbackStack[name].evtCbArr.splice(i, 1);
              i--;
              patchLen--;
            }
          }
        }
      },
      trigger : function(type) {
        util.warn("event.trigger is deprecated, please use .fire() from now");
        this.fire(type);
      },
      fire : function(name) {
        if (this.callbackStack && void 0 !== this.callbackStack[name]) {
          /** @type {number} */
          var c = arguments.length;
          /** @type {!Array} */
          var args = Array(c > 1 ? c - 1 : 0);
          /** @type {number} */
          var j = 1;
          for (; j < c; j++) {
            args[j - 1] = arguments[j];
          }
          /** @type {number} */
          var i = 0;
          var patchLen = this.callbackStack[name].evtCbArr.length;
          for (; i < patchLen; i++) {
            if (void 0 !== this.callbackStack[name].evtCbArr[i]) {
              this.callbackStack[name].evtCbArr[i].fn.apply(this.callbackStack[name].evtCbArr[i].ctx, args);
            }
          }
        }
      }
    };
    var proto = Array.prototype;
    /** @type {!Object} */
    var def = Object.create(proto);
    /** @type {!Array} */
    var rules = (Object.getOwnPropertyNames(def), []);
    requestAnimationFrame(mousedown);
    app.on("force-resolve-binding", mousedown);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(method) {
      var impl = proto[method];
      Object.defineProperty(proto, method, {
        enumerable : true,
        writable : true,
        configurable : true,
        value : function() {
          /** @type {number} */
          var length = arguments.length;
          /** @type {!Array} */
          var data = new Array(length);
          for (; length--;) {
            data[length] = arguments[length];
          }
          if (this.__ob__) {
            this.__ob__.disable();
          }
          var pie = impl.apply(this, data);
          if (this.__ob__) {
            this.__ob__.enable();
            var error = void 0;
            switch(method) {
              case "push":
                if (data) {
                  /** @type {number} */
                  var i = this.length - data.length;
                  /** @type {number} */
                  var k = 0;
                  for (; k < data.length; k++) {
                    this.__ob__.observe(this, i + k, data[k]);
                    this.__ob__.defineReactive(this, i + k, data[k]);
                  }
                  error = {
                    index : i,
                    numAdded : data.length,
                    numRemoved : 0
                  };
                }
                break;
              case "unshift":
                if (data) {
                  this.__ob__.observeArrayItems(data);
                  error = {
                    index : 0,
                    numAdded : data.length,
                    numRemoved : 0
                  };
                }
                break;
              case "splice":
                this.__ob__.observeArrayItems(data.slice(2));
                error = {
                  index : Number(data[0]),
                  numAdded : data.slice(2).length,
                  numRemoved : Number(data[1])
                };
                break;
              case "pop":
                if (this.length > 0) {
                  error = {
                    index : this.length + data.length,
                    numAdded : 0,
                    numRemoved : 1
                  };
                }
            }
            this.__ob__.notify("change:arrayMethod", error, true);
          }
          return pie;
        }
      });
    });
    var Event = function() {
      /**
       * @param {number} name
       * @param {number} attrs
       * @param {!Object} obj
       * @return {undefined}
       */
      function Observer(name, attrs, obj) {
        babelHelpers.classCallCheck(this, Observer);
        rules.push(this);
        /** @type {!Object} */
        this.obj = obj;
        /** @type {boolean} */
        this.enabled = true;
        Object.defineProperty(this.obj, "__ob__", {
          value : this,
          enumerable : false,
          writable : true,
          configurable : true
        });
        /** @type {!Array} */
        this.parents = [];
        /** @type {!Array} */
        this.keysOnParent = [];
        if (void 0 !== name) {
          this.parents.push(name);
        }
        if (void 0 !== attrs) {
          this.keysOnParent.push(attrs);
        }
        if (amend(this.obj)) {
          this.observeArrayItems(this.obj);
        } else {
          this.observeObjectKeys(this.obj);
        }
      }
      return Observer.prototype.disable = function() {
        /** @type {boolean} */
        this.enabled = false;
      }, Observer.prototype.enable = function() {
        /** @type {boolean} */
        this.enabled = true;
      }, Observer.prototype.observeArrayItems = function(nameSetA) {
        var i = nameSetA.length;
        for (; i--;) {
          this.observe(this.obj, i, nameSetA[i]);
          this.defineReactive(this.obj, i, nameSetA[i]);
        }
      }, Observer.prototype.observeObjectKeys = function(d) {
        /** @type {!Array<string>} */
        var r = Object.keys(d);
        /** @type {number} */
        var i = r.length;
        for (; i--;) {
          this.defineReactive(this.obj, r[i], d[r[i]]);
        }
      }, Observer.prototype.defineReactive = function(obj, key, val) {
        var _this = this;
        /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
        var desc = Object.getOwnPropertyDescriptor(obj, key);
        if (!desc || false !== desc.configurable) {
          if (desc) {
            desc.get;
          }
          if (desc) {
            desc.set;
          }
          /** @type {string} */
          var update = (this.observe(obj, key, val), "change:" + key);
          Object.defineProperty(obj, key, {
            enumerable : true,
            configurable : true,
            get : function() {
              return val;
            },
            set : function(value) {
              if (value !== val) {
                if (!(void 0 === value || null === value || "object" !== (void 0 === value ? "undefined" : forEach(value)) || void 0 === value.__ob__ || value.__ob__.parents.includes(obj))) {
                  value.__ob__.parents.push(obj);
                  value.__ob__.keysOnParent.push(key);
                }
                val = value;
                _this.observe(obj, key, value);
                if (_this.enabled) {
                  _this.notify(update, null, true);
                }
              }
            }
          });
        }
      }, Observer.prototype.notify = function(type, value, name) {
        if (this._notifyBatchList = this._notifyBatchList || {}, void 0 !== this.callbackStack && void 0 !== this.callbackStack[type]) {
          if (void 0 === value || "object" === (void 0 === value ? "undefined" : forEach(value)) && null !== value && (0 !== value.numAdded || 0 !== value.numRemoved)) {
            this.fire(type, value);
          } else {
            if (void 0 !== this._notifyBatchList[type] && 0 !== this._notifyBatchList[type]) {
              return;
            }
            /** @type {number} */
            this._notifyBatchList[type] = 1;
          }
        }
        if (!this._dirty || "object" === (void 0 === value ? "undefined" : forEach(value)) && null !== value && (0 !== value.numAdded || 0 !== value.numRemoved)) {
          /** @type {boolean} */
          this._dirty = true;
          /** @type {number} */
          var i = 0;
          var length = this.parents.length;
          for (; i < length; i++) {
            if (void 0 !== this.parents[i].__ob__ && "props" !== this.keysOnParent[i]) {
              this.parents[i].__ob__.notify((name ? "change:" : "subChange:") + this.keysOnParent[i], value);
            }
          }
        }
      }, Observer.prototype._resolveParentBatch = function() {
        if (void 0 !== this._notifyBatchList) {
          /** @type {!Array<string>} */
          var tierKeys = Object.keys(this._notifyBatchList);
          /** @type {number} */
          var t = tierKeys.length;
          for (; t--;) {
            if (0 !== this._notifyBatchList[tierKeys[t]] && void 0 !== this.callbackStack && void 0 !== this.callbackStack[tierKeys[t]]) {
              /** @type {number} */
              var i = 0;
              var patchLen = this.callbackStack[tierKeys[t]].evtCbArr.length;
              for (; i < patchLen; i++) {
                if (void 0 !== this.callbackStack[tierKeys[t]].evtCbArr[i]) {
                  this.callbackStack[tierKeys[t]].evtCbArr[i].fn.call(this.callbackStack[tierKeys[t]].evtCbArr[i].ctx);
                }
              }
            }
            /** @type {number} */
            this._notifyBatchList[tierKeys[t]] = 0;
          }
          /** @type {boolean} */
          this._dirty = false;
        }
      }, Observer.prototype.observe = function(object, fn, value) {
        if (void 0 !== value && null !== value && "object" === (void 0 === value ? "undefined" : forEach(value)) && void 0 === value.__ob__) {
          return "object" !== (void 0 === value ? "undefined" : forEach(value)) || Object.isFrozen(value) ? void 0 : new Observer(object, fn, value);
        }
      }, Observer;
    }();
    var name;
    for (name in options) {
      Event.prototype[name] = options[name];
    }
    var source;
    /** @type {number} */
    var K = 0;
    var c = {
      _isInTemplate : function() {
        /** @type {boolean} */
        var e = false;
        var target = this;
        for (; target.parentNode && target.parentNode !== document.body;) {
          if ("TEMPLATE" === target.parentNode.tagName || target.parentNode._isLightDom) {
            /** @type {boolean} */
            e = true;
            break;
          }
          target = target.parentNode;
        }
        return e;
      },
      createdCallback : function() {
        if (!this._isInTemplate()) {
          /** @type {boolean} */
          this._isCreated = true;
          /** @type {number} */
          this._id = 0;
          /** @type {boolean} */
          this.visible = true;
          this.context = {};
          this.props = {};
          this._savePropChange = {};
          this._delegateEvents = {};
          if (void 0 === this._defaultProps) {
            this._defaultProps = this.defaultProps;
          }
          this._getPropsFromDefaultProps();
          this._events = this.events;
          this._template = this.template;
          this._styles = void 0 !== this.styles ? this.styles.replace(/:host/g, this.tagName.toLowerCase()) : null;
          this._observer = new Event(this, "props", this.props);
          this._defaultPropsChangeCallbacks = {};
          this.bindMethods(["_onDelegateEvent", "_resize", "_resizeEnd"]);
          if (void 0 !== this.update) {
            this._update = this._update.bind(this);
          }
          if (this.created) {
            this.created();
          }
        }
      },
      attachedCallback : function() {
        var child = this;
        if (!this._isInTemplate() && this._isCreated) {
          this._deserializeAttributes();
          this._retrieveLightDOM();
          this._retrieveTemplate();
          this._generateCompositedDOM();
          var endColorCoords;
          for (endColorCoords in this._defaultProps) {
            !function(name) {
              if (child._defaultProps[name] && child._defaultProps[name].change) {
                if (void 0 === child[child._defaultProps[name].change]) {
                  util.warn("Cannot bind change on undefined method:" + child._defaultProps[name].change);
                } else {
                  /**
                   * @param {?} refNode
                   * @return {?}
                   */
                  child._defaultPropsChangeCallbacks[name] = function(refNode) {
                    if (child._isAttached) {
                      return false === child.visible ? void(child._savePropChange[name] = refNode ? "object" == forEach(child._savePropChange[name]) ? child._savePropChange[name].push(refNode) : [refNode] : 1) : void child[child._defaultProps[name].change](refNode);
                    }
                  };
                  child.props.__ob__.on("change:" + name, child._defaultPropsChangeCallbacks[name]);
                }
              }
            }(endColorCoords);
          }
          if (this.attached) {
            this.attached();
          }
          this.fire("attached", this.index);
          /** @type {boolean} */
          this._isAttached = true;
          if ((this._template && this._shadowDOM && this._isShadowDOMReady || !this._template) && "TEMPLATE" !== this.tagName) {
            this._ready();
          }
        }
      },
      _getPropsFromDefaultProps : function() {
        var property;
        for (property in this._defaultProps) {
          if (util.isObject(this._defaultProps[property]) && void 0 !== this._defaultProps[property].value) {
            this.props[property] = this._defaultProps[property].value;
          } else {
            this.props[property] = this._defaultProps[property];
          }
        }
      },
      _safeParseJSON : function(data, tmpl) {
        try {
          return JSON.parse(data);
        } catch (i) {
          return void util.warn("invalid value '" + data + "' for the '" + tmpl + "' property; it must be Object type");
        }
      },
      setProp : function(name, value) {
        if (void 0 !== this._defaultProps && void 0 !== this._defaultProps[name] && void 0 !== this.props && this.props[name] !== value && ("string" != typeof value || !/\{\{[^{}]*\}\}/g.test(value))) {
          if ("object" !== forEach(this._defaultProps[name]) || null === this._defaultProps[name] || "object" === forEach(this._defaultProps[name]) && void 0 === this._defaultProps[name].type) {
            return void(this.props[name] = value);
          }
          if (this._defaultProps[name] && this._defaultProps[name].type) {
            if (("array" == this._defaultProps[name].type || "arr" == this._defaultProps[name].type || "json" == this._defaultProps[name].type || "object" == this._defaultProps[name].type || "obj" == this._defaultProps[name].type) && value) {
              if ("string" == typeof value && (value = this._safeParseJSON(value, name)), "object" !== forEach(this.props[name]) || null === this.props[name]) {
                /** @type {*} */
                this.props[name] = "object" === (void 0 === value ? "undefined" : forEach(value)) && null !== value ? value : JSON.parse(value);
              } else {
                if (this.props[name] !== value) {
                  if (this.props[name] !== value && value.length && this.props[name].length === value.length && !value.__ob__) {
                    /** @type {number} */
                    var i = 0;
                    for (; i < value.length; i++) {
                      this.props[name][i] = value[i];
                    }
                  } else {
                    /** @type {!Object} */
                    this.props[name] = value;
                  }
                }
              }
            }
            if (!("string" !== this._defaultProps[name].type && "str" !== this._defaultProps[name].type)) {
              /** @type {string} */
              this.props[name] = "string" == typeof value ? value : JSON.stringify(value);
            }
            if (!("bool" !== this._defaultProps[name].type && "boolean" !== this._defaultProps[name].type)) {
              /** @type {boolean} */
              this.props[name] = !("false" === value || "" === value || !value);
            }
            if (!("float" !== this._defaultProps[name].type && "f" !== this._defaultProps[name].type)) {
              /** @type {number} */
              this.props[name] = "number" != typeof value ? parseFloat(value, 10) : value;
            }
            if (!("int" !== this._defaultProps[name].type && "i" !== this._defaultProps[name].type)) {
              /** @type {number} */
              this.props[name] = "number" != typeof value ? parseInt(value, 10) : value >> 0;
            }
            if (!("func" !== this._defaultProps[name].type && "fn" !== this._defaultProps[name].type && "function" !== this._defaultProps[name].type)) {
              if ("function" == typeof value) {
                true;
                /** @type {!Object} */
                this.props[name] = value;
              }
            }
          }
          if (true === this._defaultProps[name].reflect) {
            this.setAttribute(util.hyphenise(name), value);
          }
        }
      },
      _deserializeAttributes : function() {
        /** @type {number} */
        var i = 0;
        var l = this.attributes.length;
        for (; i < l; i++) {
          var prop = util.camelCalise(this.attributes[i].nodeName.replace(/^data\-/, ""));
          if ("" !== this.attributes[i].nodeValue) {
            this.setProp(prop, this.attributes[i].nodeValue);
          }
        }
      },
      _retrieveLightDOM : function() {
        var storyjs_e_config = this;
        if (this._template && "TEMPLATE" !== this.tagName) {
          this._lightDOMUUID = K;
          /** @type {!DocumentFragment} */
          this._lightDOM = document.createDocumentFragment();
          /** @type {boolean} */
          this._lightDOM._isLightDom = true;
          for (; this.hasChildNodes();) {
            this._lightDOM.appendChild(this.childNodes[0]);
          }
          /** @type {number} */
          var j = 0;
          /** @type {number} */
          var imagesLen = this._lightDOM.childNodes.length;
          for (; j < imagesLen; j++) {
            this._eachNodes(this._lightDOM.childNodes[j], function(t) {
              if (t.attributes) {
                t.setAttribute("light-dom-id", storyjs_e_config._lightDOMUUID);
              }
            });
          }
          K++;
        }
      },
      _retrieveTemplate : function() {
        if ("TEMPLATE" !== this.tagName && this._template) {
          if (this._styles && (this._stylesTag = document.createElement("style"), this._stylesTag.innerHTML = this._styles, this.appendChild(this._stylesTag)), this._shadowDOM = document.createElement("template", "light-core-template"), this._shadowDOM.setAttribute("shadow-dom", ""), this._shadowDOM.setAttribute("parent-tag", this.tagName.toLowerCase()), this._shadowDOM._scope = this.props, this._shadowDOM._componentContext = this, this._shadowDOM.context = this.context, this._shadowDOM._$slot = 
          this._lightDOM, this._shadowDOM._slotuuid = this._lightDOMUUID, "string" == typeof this._template) {
            /** @type {!Element} */
            var e = document.createElement("div");
            this._shadowDOM.content.appendChild(e);
            e.innerHTML = this._template;
            for (; e.hasChildNodes();) {
              this._shadowDOM.content.appendChild(e.childNodes[0]);
            }
            this._shadowDOM.content.removeChild(e);
          } else {
            this._shadowDOM.content.appendChild(this._template);
          }
          this.bindMethods(["_onShadowDOMReady"]);
          this._shadowDOM.on("ready", this._onShadowDOMReady, this);
        }
      },
      _eachNodes : function(val, validatorOpts) {
        if (val && (void 0 === val._$parentUUID || void 0 === this._uuid || val._$parentUUID == this._uuid) && (validatorOpts(val), val && "TEMPLATE" !== val.tagName)) {
          /** @type {number} */
          var i = 0;
          var patchLen = val.childNodes.length;
          for (; i < patchLen; i++) {
            if (val.childNodes[i] && 8 != val.childNodes[i].nodeType) {
              this._eachNodes(val.childNodes[i], validatorOpts);
            }
          }
        }
      },
      _generateCompositedDOM : function() {
        if ("TEMPLATE" !== this.tagName && this._template && this._shadowDOM) {
          this.appendChild(this._shadowDOM);
        }
      },
      _ready : function() {
        /** @type {boolean} */
        this._isReady = true;
        this.fire("ready", this.index);
        if (this.ready) {
          this.ready();
        }
        this.setAttribute("ready", "");
        this._initEvents();
        app.on("resize", this._resize, this);
        app.on("resizeend", this._resizeEnd, this);
        this._resize();
      },
      _onShadowDOMReady : function() {
        this._shadowDOM.off("ready", this._onShadowDOMReady, this);
        /** @type {boolean} */
        this._isShadowDOMReady = true;
        if (this._isAttached && !this._isReady) {
          this._ready();
        }
      },
      _initEvents : function() {
        var event;
        for (event in this._events) {
          if (this._events.hasOwnProperty(event)) {
            var fn = this._events[event];
            /** @type {!Array<string>} */
            var i = event.split(" ");
            this._registerEvent(i[0], i[1], fn);
          }
        }
      },
      _registerEvent : function(name, o, i) {
        if ("pointerenter" === name ? name = "pointerover" : "pointerleave" === name && (name = "pointerout"), name = /pointer/.test(name) ? requestFS["multi" + name] : [name], void 0 === this[i]) {
          throw new Error("oups, there isnt any " + i + " method defined for this view");
        }
        this.bindMethods(i);
        /** @type {number} */
        var curPos = 0;
        for (; curPos < name.length; curPos++) {
          if (void 0 === this._delegateEvents[name[curPos]]) {
            /** @type {!Array} */
            this._delegateEvents[name[curPos]] = [];
            this.addEventListener(name[curPos], this._onDelegateEvent);
          }
          this._delegateEvents[name[curPos]].push({
            selector : o,
            callback : this[i]
          });
        }
      },
      _onDelegateEvent : function(e) {
        if (!(this._eventNeedsCheck && (/touch/.test(e.type) && /mouse/.test(this._eventNeedsCheckType) || /mouse/.test(e.type) && /touch/.test(this._eventNeedsCheckType)) && Date.now() - this._eventNeedsCheckTime < 300)) {
          if ("touchstart" === e.type || "touchend" === e.type || "mousedown" === e.type || "mouseup" === e.type) {
            this._eventNeedsCheckType = e.type;
            /** @type {boolean} */
            this._eventNeedsCheck = true;
            /** @type {number} */
            this._eventNeedsCheckTime = Date.now();
          } else {
            /** @type {boolean} */
            this._eventNeedsCheck = false;
          }
          var array = this._delegateEvents[e.type];
          /** @type {boolean} */
          var j = false;
          /** @type {number} */
          var i = 0;
          for (; i < array.length; i++) {
            if (j) {
              util.notify("Event propagation has been stopped");
              break;
            }
            if (array[i].selector) {
              var related = e.relatedTarget;
              var current = e.target;
              for (; current && current !== this;) {
                if (("string" == typeof array[i].selector && current.classList && current.classList.contains(array[i].selector.replace(".", "")) || array[i].selector === current) && ("mouseover" !== e.type && "mouseout" !== e.type || !current.contains(related))) {
                  var evt = util.clone(e);
                  evt.currentTarget = current;
                  /**
                   * @return {undefined}
                   */
                  evt.stopPropagation = function() {
                    /** @type {boolean} */
                    j = true;
                  };
                  array[i].callback(evt);
                }
                current = current.parentNode;
              }
            } else {
              array[i].callback(e);
            }
          }
        }
      },
      _removeEvents : function() {
        var type;
        for (type in this._delegateEvents) {
          this.removeEventListener(type, this._onDelegateEvent);
        }
        if (void 0 !== this.update) {
          app.off("requestAnimationFrame", this._update, this);
        }
        app.off("resize", this._resize, this);
        app.off("resizeend", this._resizeEnd, this);
      },
      detachedCallback : function() {
        /** @type {boolean} */
        this._isReady = false;
        /** @type {boolean} */
        this._isAttached = false;
        if (this._shadowDOM) {
          /** @type {boolean} */
          this._isShadowDOMReady = false;
          this._shadowDOM.off("ready", this._onShadowDOMReady, this);
        }
        clearTimeout(this._afterResizeTimer);
        /** @type {null} */
        this._observer = null;
        this._removeEvents();
        var eventName;
        for (eventName in this._defaultPropsChangeCallbacks) {
          this.props.__ob__.off("change:" + eventName, this._defaultPropsChangeCallbacks[eventName]);
        }
        if (void 0 !== this.detached) {
          this.detached();
        }
      },
      _resize : function() {
        var replyView = this;
        if (this._isReady) {
          if (this.resize) {
            this.resize();
          }
          /** @type {number} */
          this._afterResizeTimer = setTimeout(function() {
            replyView._resized();
          }, 0);
        }
      },
      _resized : function() {
        if (this._isReady) {
          if ("function" == typeof this.resized) {
            this.resized();
          }
          this.fire("resized");
          if (void 0 !== this.update) {
            app.off("requestAnimationFrame", this._update, this);
            app.on("requestAnimationFrame", this._update, this);
          }
        }
      },
      _resizeEnd : function() {
        if ("function" == typeof this.resizeEnd) {
          this.resizeEnd();
        }
      },
      _update : function() {
        if (this.visible) {
          this.update();
        }
      },
      _enable : function() {
        if (this.visible = true, this.classList) {
          this.classList.remove("is-disabled");
        } else {
          /** @type {string} */
          var m = " " + (this.getAttribute("class") || "") + " ";
          /** @type {string} */
          var t = " is-disabled ";
          for (; m.indexOf(t) >= 0;) {
            /** @type {string} */
            m = m.replace(t, " ");
          }
          this.setAttribute("class", m.trim());
        }
        this.removeAttribute("is-disabled");
        if (this._shadowDOM) {
          this._shadowDOM.enable();
        }
        var type;
        for (type in this._savePropChange) {
          if ("object" == forEach(this._savePropChange[type])) {
            /** @type {number} */
            var i = 0;
            var patchLen = this._savePropChange[type].length;
            for (; i < patchLen; i++) {
              this.props.__ob__.fire("change:" + type, this._savePropChange[type][i]);
            }
          } else {
            this.props.__ob__.fire("change:" + type);
          }
        }
        if (this.enable) {
          this.enable();
        }
      },
      _disable : function() {
        if (this.visible = false, this.classList) {
          this.classList.add("is-disabled");
        } else {
          /** @type {string} */
          var value = " " + (this.getAttribute("class") || "") + " ";
          if (value.indexOf(" is-disabled ") < 0) {
            this.setAttribute("class", (value + "is-disabled").trim());
          }
        }
        this.setAttribute("is-disabled", "");
        if (this._shadowDOM) {
          this._shadowDOM.disable();
        }
        if (this.disable) {
          this.disable();
        }
      },
      bindMethods : function(value) {
        value = "object" === (void 0 === value ? "undefined" : forEach(value)) && null !== value && value.length ? value : [value];
        /** @type {number} */
        var j = 0;
        var valueLength = value.length;
        for (; j < valueLength; j++) {
          var Slatebox = this[value[j]];
          this[value[j]] = Slatebox.bind(this);
        }
      }
    };
    if ("function" != typeof HTMLElement) {
      /**
       * @return {undefined}
       */
      source = function() {
      };
      /** @type {!Element} */
      source.prototype = document.createElement("div");
    } else {
      /** @type {function(new:HTMLElement): ?} */
      source = HTMLElement;
    }
    var Component = function(_React$Component) {
      /**
       * @return {?}
       */
      function Slider() {
        return babelHelpers.classCallCheck(this, Slider), babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
      }
      return babelHelpers.inherits(Slider, _React$Component), Slider;
    }(source);
    var x;
    for (x in c) {
      Component.prototype[x] = c[x];
    }
    var key;
    for (key in options) {
      Component.prototype[key] = options[key];
    }
    /** @type {!RegExp} */
    var rbreakright = /\((.*?)\)/g;
    /** @type {!RegExp} */
    var re = /(\(\?)?:\w+/g;
    /** @type {!RegExp} */
    var url = /\*\w+/g;
    /** @type {!RegExp} */
    var s_ESCAPE_REGEX = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    var service = {
      states : {},
      _routeToRegExp : function(route) {
        return route = route.replace(s_ESCAPE_REGEX, "\\$&").replace(rbreakright, "(?:$1)?").replace(re, function(labelOn, val) {
          return val ? labelOn : "([^/?]+)";
        }).replace(url, "([^?]*?)"), new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$");
      },
      add : function(name, options) {
        options = util.extend({
          controller : null,
          route : null
        }, options || {});
        if ("object" == forEach(options.controller)) {
          var app = options.controller;
          var id = options.method || "index";
          options.controller = app[id].bind(app);
        }
        return options.route && (options.regExp = this._routeToRegExp(options.route), options.paramList = this._extractParamsFromRoute(options.route)), this.states[name] = options, this;
      },
      initialize : function(castNode) {
        /** @type {null} */
        this.lastState = null;
        /** @type {string} */
        this.base = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        app.on("statechange", this.onStateChange, this);
        window.addEventListener("hashchange", this._onHashChange.bind(this));
      },
      onStateChange : function(name, args) {
        var i = this;
        if (name in this.states) {
          if (this.states[name].route) {
            clearTimeout(this.bypassTimer);
            /** @type {boolean} */
            this.bypass = true;
            window.location.hash = "#" + this.hrefFromParams(name, args);
            /** @type {number} */
            this.bypassTimer = setTimeout(function() {
              /** @type {boolean} */
              i.bypass = false;
            }, 50, this);
          }
          if (this.states[name].controller) {
            this.states[name].controller(args);
          }
        }
      },
      _extractParamsFromRoute : function(src) {
        var s = src.match(re);
        /** @type {number} */
        var i = 0;
        for (; i < s.length; i++) {
          s[i] = s[i].replace(":", "");
        }
        return s;
      },
      hrefFromParams : function(name, data) {
        if (!name in this.states) {
          return "no state found :: " + name;
        }
        if (!this.states[name].route) {
          return "no route found";
        }
        var path = this.states[name].route;
        var i;
        for (i in data) {
          /** @type {!RegExp} */
          var index = new RegExp("(\\(\\?)?:" + i, "g");
          new RegExp("\\([]\\)", "g");
          path = path.replace(index, data[i]).replace(/(\(|\))/g, "");
        }
        return path;
      },
      getHashState : function() {
        this._onHashChange();
      },
      _onHashChange : function() {
        if (!this.bypass) {
          var Factory = this;
          var result = this.getState();
          /** @type {!Array} */
          var paths = [];
          var name;
          for (name in this.states) {
            if (this.states[name].regExp && this.states[name].regExp.test(result)) {
              result.replace(this.states[name].regExp, function() {
                /** @type {number} */
                var i = 1;
                for (; i < arguments.length - 3; i++) {
                  if (void 0 === arguments[i]) {
                    paths.push("");
                  } else {
                    paths.push(arguments[i]);
                  }
                }
              });
              var out = {};
              /** @type {number} */
              var i = 0;
              for (; i < paths.length; i++) {
                out[Factory.states[name].paramList[i]] = paths[i];
              }
              app.fire("statechange", [name, out]);
              break;
            }
          }
        }
      },
      getState : function() {
        return document.location.hash.replace(/^#!?\/?/, "");
      }
    };
    /** @type {!Array} */
    var events = ["drag", "dragend", "pointerenter", "pointerleave", "pointerdown", "pointerup", "pointermove", "click", "keyup", "keydown", "keypress", "blur", "change", "focus", "submit", "resize", "scroll"];
    /** @type {string} */
    var fragmentFilename = "window,Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat,typeof,void";
    /** @type {!RegExp} */
    var negativeRegex = new RegExp("^(" + fragmentFilename.replace(/,/g, "\\b|") + "\\b)");
    var File = function() {
      /**
       * @param {!Node} el
       * @param {string} attrName
       * @param {!Object} value
       * @param {string} template
       * @return {undefined}
       */
      function init(el, attrName, value, template) {
        if (babelHelpers.classCallCheck(this, init), this.enabled = true, this.node = el, this.attrName = attrName, this.content = value, this.template = template, this.stringParts = [], this.numStringParts = 0, this.lightDom = [], this.isTextNode = !el.attributes, this.removableAttr = false, this.onPathChange = this.onPathChange.bind(this), this.isTextNode) {
          if (/\{\{\s*@/.test(this.content)) {
            /** @type {!Element} */
            var node = document.createElement("span");
            this.content = this.content.replace(/\{\{\s*@/, "{{");
            if (this.node.parentNode) {
              this.node.parentNode.replaceChild(node, this.node);
              /** @type {!Element} */
              this.node = node;
            } else {
              this.oldNode = this.node;
              this._onDOMNodeInserted = this._onDOMNodeInserted.bind(this);
              this.oldNode.addEventListener("DOMNodeInserted", this._onDOMNodeInserted, false);
            }
            /** @type {!Element} */
            this.node = node;
          }
        } else {
          this.node.setAttribute("has-binding", "");
          if (/^:/.test(this.attrName)) {
            /** @type {boolean} */
            this.removableAttr = true;
            this.attrName = this.attrName.replace(/^:/, "");
            this.node.removeAttribute(":" + this.attrName);
          }
          this.formatedPropName = util.camelCalise(this.attrName.replace("data-", ""));
        }
        this.parseExpression();
        this.attachListeners();
        this.onPathChange();
      }
      return init.prototype._onDOMNodeInserted = function() {
        this.oldNode.removeEventListener("DOMNodeInserted", this._onDOMNodeInserted, false);
        if (this.oldNode.parentNode) {
          this.oldNode.parentNode.replaceChild(this.node, this.oldNode);
        }
      }, init.prototype.attachListeners = function() {
        /** @type {number} */
        var q = 0;
        var t = this.numStringParts;
        for (; q < t; q++) {
          if ("expression" === this.stringParts[q].type) {
            /** @type {number} */
            var i = 0;
            var patchLen = this.stringParts[q].value.pathRoots.length;
            for (; i < patchLen; i++) {
              /** @type {boolean} */
              var o = false;
              if (null !== this.template._item && "$value" === this.stringParts[q].value.pathRoots[i] && (o = true, this.template._item.__ob__.on("subChange:" + this.template.props.itemIndex, this.onPathChange), this.template._item.__ob__.on("change:" + this.template.props.itemIndex, this.onPathChange)), null !== this.template.props.repeaterKey) {
                var groupingName;
                for (groupingName in this.template.props.repeaterKey) {
                  if (this.stringParts[q].value.pathRoots[i] === groupingName && null !== this.template.props.repeaterKey[groupingName].repeaterParentProps.repeat) {
                    /** @type {boolean} */
                    o = true;
                    this.template.props.repeaterKey[groupingName].repeaterParentProps.repeat.__ob__.on("subChange:" + this.template.props.repeaterKey[groupingName].repeaterProps.itemIndex, this.onPathChange);
                    this.template.props.repeaterKey[groupingName].repeaterParentProps.repeat.__ob__.on("change:" + this.template.props.repeaterKey[groupingName].repeaterProps.itemIndex, this.onPathChange);
                  }
                }
              }
              if (null !== this.template.props.repeaterIndex) {
                var groupingName;
                for (groupingName in this.template.props.repeaterIndex) {
                  if (this.stringParts[q].value.pathRoots[i] === groupingName && null !== this.template.props.repeaterIndex[groupingName].repeaterParentProps.repeat) {
                    /** @type {boolean} */
                    o = true;
                    this.template.props.__ob__.on("subChange:itemIndex", this.onPathChange);
                    this.template.props.__ob__.on("change:itemIndex", this.onPathChange);
                  }
                }
              }
              if (!o) {
                this.template._scope.__ob__.on("subChange:" + this.stringParts[q].value.pathRoots[i], this.onPathChange);
                this.template._scope.__ob__.on("change:" + this.stringParts[q].value.pathRoots[i], this.onPathChange);
              }
            }
          }
        }
      }, init.prototype.parseExpression = function() {
        var e = this;
        /** @type {number} */
        var i = 0;
        this.content.replace(/\{\{[^{}]*\}\}/g, function(result, pos, canCreateDiscussions) {
          if ("" != e.content.slice(i, pos)) {
            e.stringParts.push({
              type : "string",
              value : e.content.slice(i, pos)
            });
          }
          i = pos + result.length;
          var value = result.replace(/(\{\{|\}\})/g, "");
          if (/\sin\s/g.test(value)) {
            value = value.replace(/(?:(\S+)\s?,)?\s?(\S*)\s+in\s+/g, function(isSlidingUp, i, canCreateDiscussions) {
              return e.node._repeaterKey = canCreateDiscussions, void 0 !== i && (e.node._repeaterIndex = i), "";
            });
          }
          e.stringParts.push({
            type : "expression",
            expression : value,
            value : e._makeGetterFn(value)
          });
        });
        if (i < this.content.length && !/^\s+$/g.test(this.content.slice(i))) {
          this.stringParts.push({
            type : "string",
            value : this.content.slice(i)
          });
        }
        this.numStringParts = this.stringParts.length;
      }, init.prototype._makeGetterFn = function(name) {
        var jQuery = this;
        /** @type {!Array} */
        var typeInfoCache = [];
        var signal = name.replace(/((?:\.[A-Za-z_$][a-zA-Z0-9_\$]*)|(?:['][^']*[']|["][^"]*["]))|([A-Za-z_$][a-zA-Z0-9_\$]*)/g, function(contentWithoutData, canCreateDiscussions, undefined, n) {
          return negativeRegex.test(undefined) ? contentWithoutData : (typeInfoCache.push(undefined), "$index" === undefined ? "this.props.itemIndex" : "$value" === undefined ? "(this._item && this._item[this.props.itemIndex] ? this._item[this.props.itemIndex] : {})" : "$length" === undefined ? "this.props.itemLength" : null !== jQuery.template.props.repeaterKey && undefined in jQuery.template.props.repeaterKey ? '(this.props.repeaterKey["' + undefined + '"].repeaterParentProps.repeat[this.props.repeaterKey["' + 
          undefined + '"].repeaterProps.itemIndex] !== void 0 ? this.props.repeaterKey["' + undefined + '"].repeaterParentProps.repeat[this.props.repeaterKey["' + undefined + '"].repeaterProps.itemIndex] : {})' : null !== jQuery.template.props.repeaterIndex && undefined in jQuery.template.props.repeaterIndex ? '(this.props.repeaterIndex["' + undefined + '"].repeaterProps.itemIndex !== void 0 ? this.props.repeaterIndex["' + undefined + '"].repeaterProps.itemIndex : 0)' : void 0 !== undefined ? "this._scope." + 
          undefined : contentWithoutData);
        });
        try {
          return {
            fn : new Function([], "return " + signal + ";"),
            pathRoots : typeInfoCache
          };
        } catch (e) {
          return util.warn("Invalid expression. Generated function body: " + repeaterKey + "\n" + signal), {
            fn : function() {
            },
            pathRoots : typeInfoCache
          };
        }
      }, init.prototype.disable = function() {
        /** @type {boolean} */
        this.enabled = false;
      }, init.prototype.enable = function() {
        /** @type {boolean} */
        this.enabled = true;
        if (this._needsUpdate) {
          /** @type {boolean} */
          this._needsUpdate = false;
          this.onPathChange();
        }
      }, init.prototype.destroy = function() {
        if (this.oldNode) {
          this.oldNode.removeEventListener("DOMNodeInserted", this._onDOMNodeInserted);
        }
        /** @type {number} */
        var q = 0;
        var t = this.numStringParts;
        for (; q < t; q++) {
          if ("expression" === this.stringParts[q].type) {
            /** @type {number} */
            var i = 0;
            var patchLen = this.stringParts[q].value.pathRoots.length;
            for (; i < patchLen; i++) {
              /** @type {boolean} */
              var o = false;
              if (null !== this.template._item && "$value" === this.stringParts[q].value.pathRoots[i] && (o = true, this.template._item.__ob__.off("subChange:" + this.template.props.itemIndex, this.onPathChange), this.template._item.__ob__.off("change:" + this.template.props.itemIndex, this.onPathChange)), null !== this.template.props.repeaterKey) {
                var groupingName;
                for (groupingName in this.template.props.repeaterKey) {
                  if (this.stringParts[q].value.pathRoots[i] === groupingName && null !== this.template.props.repeaterKey[groupingName].repeaterParentProps.repeat) {
                    /** @type {boolean} */
                    o = true;
                    this.template.props.repeaterKey[groupingName].repeaterParentProps.repeat.__ob__.off("subChange:" + this.template.props.repeaterKey[groupingName].repeaterProps.itemIndex, this.onPathChange);
                    this.template.props.repeaterKey[groupingName].repeaterParentProps.repeat.__ob__.off("change:" + this.template.props.repeaterKey[groupingName].repeaterProps.itemIndex, this.onPathChange);
                  }
                }
              }
              if (null !== this.template.props.repeaterIndex) {
                var groupingName;
                for (groupingName in this.template.props.repeaterIndex) {
                  if (this.stringParts[q].value.pathRoots[i] === groupingName && null !== this.template.props.repeaterIndex[groupingName].repeaterParentProps.repeat) {
                    /** @type {boolean} */
                    o = true;
                    this.template.props.__ob__.off("subChange:itemIndex", this.onPathChange);
                    this.template.props.__ob__.off("change:itemIndex", this.onPathChange);
                  }
                }
              }
              if (!o) {
                this.template._scope.__ob__.off("subChange:" + this.stringParts[q].value.pathRoots[i], this.onPathChange);
                this.template._scope.__ob__.off("change:" + this.stringParts[q].value.pathRoots[i], this.onPathChange);
              }
            }
          }
        }
      }, init.prototype.safeExecuteGetterFn = function(e, tbid, data, linkedEntities, force) {
        try {
          return this.stringParts[e].value.fn.call(this.template);
        } catch (e) {
          return;
        }
      }, init.prototype.onPathChange = function() {
        if (false === this.enabled || void 0 !== this.node.visible && false === this.node.visible) {
          return void(this._needsUpdate = true);
        }
        if ("is" === this.attrName) {
          /** @type {boolean} */
          var node = false;
          if ((node = this.safeExecuteGetterFn(0)) && node !== this.node.tagName.toLowerCase()) {
            /** @type {!Element} */
            var newNode = document.createElement(node);
            /** @type {number} */
            var i = 0;
            var patchLen = this.node.attributes.length;
            for (; i < patchLen; i++) {
              if ("is" !== this.node.attributes[i].nodeName) {
                newNode.setAttribute(this.node.attributes[i].nodeName, this.node.attributes[i].nodeValue);
              }
            }
            if (this.node.hasAttribute("root-node")) {
              /** @type {number} */
              var i = Number(this.node.getAttribute("root-node"));
              newNode.setAttribute("root-node", i);
              /** @type {!Element} */
              this.template._nodes[i] = newNode;
            }
            if (this.template._preCheckNode(newNode), this.node.parentNode && (this.node.nextSibling ? this.node.parentNode.insertBefore(newNode, this.node.nextSibling) : this.node.parentNode.appendChild(newNode)), this.template._postCheckNode(newNode), this.template._checkContent(newNode), 0 === this.lightDom.length) {
              /** @type {number} */
              var i = 0;
              for (; i < this.node.childNodes.length; i++) {
                this.lightDom.push(this.node.childNodes[i]);
              }
            }
            /** @type {number} */
            var j = 0;
            for (; j < this.lightDom.length; j++) {
              newNode.appendChild(this.lightDom[j]);
            }
            if (this.node.parentNode) {
              this.node.parentNode.removeChild(this.node);
            }
            /** @type {!Element} */
            this.node = newNode;
          }
        } else {
          if (this.isTextNode || void 0 === this.node._defaultProps || void 0 === this.node._defaultProps[this.formatedPropName]) {
            if (this.oldValue = this.newValue, 1 === this.numStringParts && "expression" === this.stringParts[0].type) {
              this.newValue = this.safeExecuteGetterFn(0);
              if (null !== this.newValue && "object" === forEach(this.newValue)) {
                /** @type {string} */
                this.newValue = JSON.stringify(this.newValue);
              }
            } else {
              /** @type {string} */
              this.newValue = "";
              /** @type {number} */
              var handle = 0;
              for (; handle < this.numStringParts; handle++) {
                if ("expression" === this.stringParts[handle].type) {
                  this.newValue += this.safeExecuteGetterFn(handle);
                } else {
                  this.newValue += this.stringParts[handle].value;
                }
              }
            }
            if (this.isTextNode) {
              if (void 0 !== this.node.innerHTML) {
                if (this.node.innerHTML !== this.newValue) {
                  this.node.innerHTML = this.newValue;
                }
              } else {
                if (void 0 !== this.node.parentNode && this.node.textContent !== this.newValue) {
                  this.node.textContent = this.newValue;
                }
              }
            } else {
              if (!this.removableAttr || "false" !== this.newValue && this.newValue) {
                if ("$" == this.attrName.charAt(0) && (this.node.removeAttribute(this.attrName), this.attrName = this.attrName.replace("$", "")), "set-class" === this.attrName) {
                  if (void 0 !== this.oldValue) {
                    var l = this.oldValue.split(" ");
                    /** @type {number} */
                    var i = 0;
                    var il = l.length;
                    for (; i < il; i++) {
                      if (l[i].length) {
                        this.node.classList.remove(l[i]);
                      }
                    }
                  }
                  var c = this.newValue.split(" ");
                  /** @type {number} */
                  var i = 0;
                  var cl = c.length;
                  for (; i < cl; i++) {
                    if (c[i].length) {
                      this.node.classList.add(c[i]);
                    }
                  }
                } else {
                  if (this.oldValue !== this.newValue) {
                    this.node.setAttribute(this.attrName, this.newValue);
                  }
                }
              } else {
                this.node.removeAttribute(this.attrName);
                this.node.removeAttribute(":" + this.attrName);
              }
            }
          } else {
            if (1 === this.numStringParts && "expression" === this.stringParts[0].type) {
              this.newValue = this.safeExecuteGetterFn(0);
            } else {
              /** @type {string} */
              this.newValue = "";
              /** @type {number} */
              handle = 0;
              for (; handle < this.numStringParts; handle++) {
                if ("expression" === this.stringParts[handle].type) {
                  var value = this.safeExecuteGetterFn(handle);
                  this.newValue += "object" === (void 0 === value ? "undefined" : forEach(value)) ? JSON.stringify(value) : value;
                } else {
                  this.newValue += this.stringParts[handle].value;
                }
              }
            }
            if (void 0 !== this.newValue) {
              this.node.setProp(this.formatedPropName, this.newValue);
            }
          }
        }
      }, init;
    }();
    /** @type {number} */
    var le = 0;
    if (void 0 === window.HTMLTemplateElement) {
      document.implementation.createHTMLDocument("template");
      /**
       * @return {undefined}
       */
      window.HTMLTemplateElement = function() {
      };
      /** @type {!Object} */
      window.HTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);
    }
    var data;
    /** @type {!RegExp} */
    var reSelectorCase = /[&\u00A0<>]/g;
    var obj = {
      onItemIndexChange : function() {
        this._scope.__ob__.fire("change:$index");
      },
      onItemLengthChange : function() {
        this._scope.__ob__.fire("change:$length");
      },
      onRepeaterKeyChange : function() {
        this._scope.__ob__.fire("change:$value");
        var i;
        for (i in this.props.repeaterKey) {
          this.props.repeaterKey[i].repeaterParentProps.repeat.__ob__.fire("subChange:" + this.props.repeaterKey[i].repeaterProps.itemIndex);
          this.props.repeaterKey[i].repeaterParentProps.repeat.__ob__.fire("change:" + this.props.repeaterKey[i].repeaterProps.itemIndex);
        }
      },
      onRepeaterIndexChange : function() {
        this._scope.__ob__.fire("change:$index");
      },
      detached : function() {
        if (this._nodes && this._nodes.length > 0) {
          for (; this._nodes[0];) {
            if (null != this._nodes[0].parentNode) {
              this._nodes[0].parentNode.removeChild(this._nodes[0]);
            }
            this._nodes.splice(0, 1);
          }
        }
        if (this._templateNodes && this._templateNodes.length > 0) {
          for (; this._templateNodes[0];) {
            if (null !== this._templateNodes[0].parentNode && void 0 !== this._templateNodes[0].parentNode) {
              this._templateNodes[0].parentNode.removeChild(this._templateNodes[0]);
            }
            this._templateNodes.splice(0, 1);
          }
        }
        if (void 0 !== this._watchers) {
          /** @type {number} */
          var i = 0;
          for (; i < this._watchers.length; i++) {
            this._watchers[i].destroy();
          }
        }
        /** @type {!Array} */
        this._watchers = [];
      },
      _retrieveLightDom : function() {
      },
      _retrieveTemplate : function() {
      },
      created : function() {
        /** @type {number} */
        this._uuid = le++;
        if (void 0 === this.content) {
          /** @type {!DocumentFragment} */
          this.content = document.createDocumentFragment();
          /** @type {boolean} */
          this.isPolyfilled = true;
        }
        this._rootNode = this;
        /** @type {boolean} */
        this._isCreated = true;
        /** @type {!Array} */
        this._nodes = [];
        /** @type {null} */
        this._originPreviousSibling = null;
        /** @type {null} */
        this._originNextSibling = null;
        /** @type {null} */
        this._item = null;
        /** @type {null} */
        this._repeaterKey = null;
        /** @type {null} */
        this._repeaterIndex = null;
        /** @type {null} */
        this._scope = null;
        /** @type {!Array} */
        this._watchers = [];
        /** @type {!Array} */
        this._templateNodes = [];
        /** @type {number} */
        this._templateNodeReady = 0;
        Object.defineProperty(this, "innerHTML", {
          get : function() {
            /** @type {string} */
            var ret = "";
            var e = this.content.firstChild;
            for (; e; e = e.nextSibling) {
              /** @type {string} */
              ret = ret + (e.outerHTML || escapeData(e.data));
            }
            return ret;
          },
          set : function(name) {
            for (; this.content.firstChild;) {
              this.content.removeChild(this.content.firstChild);
            }
            /** @type {!Element} */
            var div = document.createElement("div");
            this.content.appendChild(div);
            /** @type {string} */
            div.innerHTML = name;
            for (; div.hasChildNodes();) {
              this.content.appendChild(div.childNodes[0]);
            }
            this.content.removeChild(div);
          },
          configurable : true
        });
      },
      appendChild : function(el) {
        this.content.appendChild(el);
      },
      insertBefore : function(node, element) {
        this.content.appendChild(node, element);
      },
      removeChild : function(elem) {
        this.content.removeChild(elem);
      },
      ready : function() {
      },
      attached : function() {
        if (this._originNextSibling || (this._originNextSibling = this.nextSibling), this._originPreviousSibling || (this._originPreviousSibling = this.previousSibling), this._isAttached = true, this.isPolyfilled) {
          for (; this.hasChildNodes();) {
            this.content.appendChild(this.childNodes[0]);
          }
        }
        this.hasRepeatAttr = this.hasAttribute("repeat") || this.hasAttribute("data-repeat");
        if (null !== this.props.if) {
          if (this.hasRepeatAttr) {
            this.onRepeatChange();
          } else {
            this.onIfChange();
          }
        }
      },
      _passContext : function(c) {
        if (c.tagName && void 0 !== c.context) {
          c.context = this.context;
        }
      },
      _scopeNode : function(node) {
        if (node.tagName && "TEMPLATE" === node.tagName && null === node.getAttribute("shadow-dom") && (node._scope = this._scope, node._componentContext = this._componentContext, node._$slot = this._$slot, node._slotuuid = this._slotuuid, null !== this._item && node.props)) {
          node._item = this._item;
          node.props.itemIndex = this.props.itemIndex;
          node.props.itemLength = this.props.itemLength;
          node.props.repeaterKey = {};
          node.props.repeaterIndex = {};
          var option;
          for (option in this.props.repeaterKey) {
            node.props.repeaterKey[option] = this.props.repeaterKey[option];
          }
          var i;
          for (i in this.props.repeaterIndex) {
            node.props.repeaterIndex[i] = this.props.repeaterIndex[i];
          }
        }
        node._$parentUUID = this._uuid;
      },
      _addNodesToDom : function() {
        /** @type {boolean} */
        this._isAddingNodes = true;
        var nextSibling = this._rootNode.nextSibling;
        /** @type {number} */
        var i = 0;
        for (; i < this.content.childNodes.length; i++) {
          if (8 != this.content.childNodes[i].nodeType) {
            /** @type {(Node|null)} */
            var node = document.importNode(this.content.childNodes[i], true);
            /** @type {(Node|null)} */
            this._nodes[i] = node;
            if (1 == node.nodeType) {
              node.setAttribute("root-node", i);
            }
            this._preCheckNode(this._nodes[i]);
            if (this.parentNode) {
              if (nextSibling) {
                this.parentNode.insertBefore(this._nodes[i], nextSibling);
              } else {
                this.parentNode.appendChild(this._nodes[i]);
              }
              this._rootNode = this._nodes[i];
            }
            this._postCheckNode(this._nodes[i]);
            this._checkContent(this._nodes[i]);
          }
        }
        this._ready();
        /** @type {boolean} */
        this._isTemplateReady = true;
      },
      _preCheckNode : function(node, attributeViewModelBindings, templateType) {
        var self = this;
        this._eachNodes(node, function(e) {
          if (8 != e.nodeType) {
            self._scopeNode(e);
            self._passContext(e);
            self._checkBindingOnNode(e);
          }
        });
      },
      _postCheckNode : function(oNewNode, oNode, data) {
      },
      _checkContent : function(args) {
        var tmpdiv = this;
        this._eachNodes(args, function(targetElement) {
          if (8 != targetElement.nodeType) {
            if (!(!targetElement.tagName || "content" !== targetElement.tagName.toLowerCase() && "slot" !== targetElement.tagName.toLowerCase())) {
              targetElement.parentNode.replaceChild(tmpdiv._$slot, targetElement);
            }
          }
        });
      },
      onRepeatChange : function(item) {
        if (this.props.if && null !== this.props.repeat) {
          if (void 0 !== item && null !== item || (item = {}, item.index = 0, item.numRemoved = this._templateNodes.length, item.numAdded = this.props.repeat.length), item.numRemoved > 0) {
            var i = item.index;
            for (; i < item.index + item.numRemoved; i++) {
              if (this._templateNodes[i]) {
                this._templateNodes[i].setAttribute("is-dead-node", "");
                if (void 0 !== this._templateNodes[i].parentNode && null !== this._templateNodes[i].parentNode) {
                  this._templateNodes[i].parentNode.removeChild(this._templateNodes[i]);
                }
                /** @type {null} */
                this._templateNodes[i] = null;
              }
            }
            this._templateNodes.splice(item.index, item.numRemoved);
          }
          /** @type {number} */
          var i = 0;
          for (; i < this._templateNodes.length; i++) {
            if (this._templateNodes[i].props.itemIndex = i, this._templateNodes[i].props.itemLength = this.props.repeat.length, this._templateNodes[i].setAttribute("_repeater-index", i), null !== this._repeaterKey) {
              var option;
              for (option in this.props.repeaterKey) {
                this._templateNodes[i].props.repeaterKey[option] = this.props.repeaterKey[option];
              }
              this._templateNodes[i].props.repeaterKey[this._repeaterKey] = {
                repeaterParentProps : this.props,
                repeaterProps : this._templateNodes[i].props
              };
            }
            if (null !== this._repeaterIndex) {
              var option;
              for (option in this.props.repeaterIndex) {
                this._templateNodes[i].props.repeaterIndex[option] = this.props.repeaterIndex[option];
              }
              this._templateNodes[i].props.repeaterIndex[this._repeaterIndex] = {
                repeaterParentProps : this.props,
                repeaterProps : this._templateNodes[i].props
              };
            }
          }
          if (item.numAdded > 0) {
            var next;
            if (this._templateNodes.length > 0) {
              var before = this._templateNodes[this._templateNodes.length - 1];
              next = before._nodes.length > 0 ? before._nodes[before._nodes.length - 1].nextSibling : before.nextSibling;
            } else {
              next = this.nextSibling;
            }
            var index = item.index;
            for (; index < item.index + item.numAdded; index++) {
              /** @type {!Element} */
              var node = document.createElement("template", "light-core-template");
              node.setAttribute("_repeater-index", index);
              /** @type {number} */
              var i = 0;
              for (; i < this.content.childNodes.length; i++) {
                node.content.appendChild(this.content.childNodes[i].cloneNode(true));
              }
              if (node._scope = this._scope, node._componentContext = this._componentContext, node._$slot = this._$slot, node._slotuuid = this._slotuuid, node.props.itemIndex = index, node.props.itemLength = this.props.repeat.length, node.props.repeaterKey = {}, node.props.repeaterIndex = {}, "object" === forEach(this.props.repeat) && (node._item = this.props.repeat), null !== this._repeaterKey) {
                var i;
                for (i in this.props.repeaterKey) {
                  node.props.repeaterKey[i] = this.props.repeaterKey[i];
                }
                node.props.repeaterKey[this._repeaterKey] = {
                  repeaterParentProps : this.props,
                  repeaterProps : node.props
                };
              }
              if (null !== this._repeaterIndex) {
                var i;
                for (i in this.props.repeaterIndex) {
                  node.props.repeaterIndex[i] = this.props.repeaterIndex[i];
                }
                node.props.repeaterIndex[this._repeaterIndex] = {
                  repeaterParentProps : this.props,
                  repeaterProps : node.props
                };
              }
              this._templateNodes.push(node);
              if (void 0 !== this.parentNode && null !== this.parentNode) {
                if (next) {
                  next.parentNode.insertBefore(node, next);
                } else {
                  this.parentNode.appendChild(node);
                }
              }
            }
          }
        } else {
          this.onIfChange();
        }
      },
      enable : function() {
        if (this.props.repeat) {
          var i = this._templateNodes.length;
          for (; i--;) {
            this._templateNodes[i]._enable();
          }
        } else {
          var n = this._nodes.length;
          for (; n--;) {
            this._eachNodes(this._nodes[n], function(button) {
              if (button._enable ? button._enable() : button.visible = true, 1 == button.nodeType) {
                if (button.classList) {
                  button.classList.remove("is-disabled");
                } else {
                  /** @type {string} */
                  var t = " " + (button.getAttribute("class") || "") + " ";
                  /** @type {string} */
                  var a = " is-disabled ";
                  for (; t.indexOf(a) >= 0;) {
                    /** @type {string} */
                    t = t.replace(a, " ");
                  }
                  button.setAttribute("class", t.trim());
                }
                button.removeAttribute("is-disabled");
              }
            });
          }
          /** @type {number} */
          var i = 0;
          for (; i < this._watchers.length; i++) {
            this._watchers[i].enable();
          }
        }
      },
      disable : function() {
        /** @type {number} */
        var i = 0;
        for (; i < this._watchers.length; i++) {
          this._watchers[i].disable();
        }
        if (this.props) {
          if (this.props.repeat) {
            var i = this._templateNodes.length;
            for (; i--;) {
              this._templateNodes[i]._disable();
            }
          } else {
            var n = this._nodes.length;
            for (; n--;) {
              this._eachNodes(this._nodes[n], function(button) {
                if (button._disable ? button._disable() : button.visible = false, 1 == button.nodeType) {
                  if (button.classList) {
                    button.classList.add("is-disabled");
                  } else {
                    /** @type {string} */
                    var value = " " + (button.getAttribute("class") || "") + " ";
                    if (value.indexOf(" is-disabled ") < 0) {
                      button.setAttribute("class", (value + "is-disabled").trim());
                    }
                  }
                  button.setAttribute("is-disabled", "");
                }
              });
            }
          }
        }
      },
      onIfChange : function() {
        if (this.props.if) {
          if (this.hasRepeatAttr) {
            if (this.props.repeat) {
              this.onRepeatChange();
            }
          } else {
            if (0 === this._nodes.length) {
              this._addNodesToDom();
            } else {
              this.enable();
            }
          }
        } else {
          if (true === this.props.removeNodes) {
            /** @type {number} */
            var key = 0;
            for (; key < this._watchers.length; key++) {
              this._watchers[key].destroy();
            }
            /** @type {!Array} */
            this._watchers = [];
            /** @type {number} */
            var i = 0;
            for (; i < this._nodes.length; i++) {
              if (void 0 !== this._nodes[i] && this._nodes[i].parentNode) {
                this._nodes[i].parentNode.removeChild(this._nodes[i]);
              }
            }
            /** @type {!Array} */
            this._nodes = [];
          } else {
            this.disable();
          }
        }
      },
      onBindChange : function() {
      },
      _checkBindingOnNode : function(element) {
        if (element.attributes) {
          /** @type {!Array} */
          var nodes = [];
          if (void 0 !== element.getAttribute("is") && /\{\{[^{}]*\}\}/g.test(element.getAttribute("is"))) {
            nodes.push({
              nodeName : "is",
              nodeValue : element.getAttribute("is")
            });
          } else {
            /** @type {number} */
            var i = 0;
            var patchLen = element.attributes.length;
            for (; i < patchLen; i++) {
              nodes.push({
                nodeName : element.attributes[i].nodeName,
                nodeValue : element.attributes[i].nodeValue
              });
            }
          }
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var nodes_len = nodes.length;
          for (; i < nodes_len; i++) {
            var name = nodes[i].nodeName;
            var v = nodes[i].nodeValue;
            var event = util.camelCalise(name.replace("data-", ""));
            if (/^on/.test(event)) {
              var slot = event.replace("on", "").toLowerCase();
              if (-1 !== events.indexOf(slot)) {
                if (this._componentContext && void 0 !== this._componentContext[v]) {
                  this._componentContext._registerEvent(slot, element, v);
                }
              } else {
                this._checkCallbackOnAttribute(element, name, v);
              }
            } else {
              this._addBinding(element, name, v);
            }
          }
        } else {
          if (void 0 !== element.parentNode && element.textContent) {
            this._addBinding(element);
          }
        }
      },
      _checkCallbackOnAttribute : function(item, attrName, direction) {
        var name = util.camelCalise(attrName.replace("data-", "")).replace(/\s/g, "");
        if (this._componentContext && void 0 !== this._componentContext[direction] && item.props && void 0 !== item.props[name]) {
          item.props[name] = this._componentContext[direction].bind(this._componentContext);
        }
      },
      _addBinding : function(options, data, type) {
        var info = options.attributes ? type : void 0 !== options.parentNode ? options.textContent : "";
        if (/\{\{[^{}]*\}\}/g.test(info)) {
          this._watchers.push(new File(options, data, info, this));
        }
      },
      _defaultProps : {
        if : {
          type : "bool",
          value : true,
          change : "onIfChange"
        },
        repeat : {
          type : "json",
          value : null,
          change : "onRepeatChange"
        },
        bind : {
          type : "json",
          value : null,
          change : "onBindChange"
        },
        itemIndex : {
          type : "int",
          value : null,
          change : "onItemIndexChange"
        },
        itemLength : {
          type : "int",
          value : null,
          change : "onItemLengthChange"
        },
        repeaterKey : {
          type : "json",
          value : null,
          change : "onRepeaterKeyChange"
        },
        repeaterIndex : {
          type : "json",
          value : null,
          change : "onRepeaterIndexChange"
        },
        removeNodes : {
          type : "bool",
          value : false
        }
      }
    };
    if ("function" != typeof HTMLElement) {
      /**
       * @return {undefined}
       */
      data = function() {
      };
      /** @type {!Element} */
      data.prototype = document.createElement("template");
    } else {
      /** @type {function(new:HTMLTemplateElement): ?} */
      data = HTMLTemplateElement;
    }
    var opts = function(_React$Component) {
      /**
       * @return {?}
       */
      function Slider() {
        return babelHelpers.classCallCheck(this, Slider), babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
      }
      return babelHelpers.inherits(Slider, _React$Component), Slider;
    }(data);
    var j;
    for (j in obj) {
      opts.prototype[j] = obj[j];
    }
    var p;
    for (p in c) {
      opts.prototype[p] = c[p];
    }
    var k;
    for (k in options) {
      opts.prototype[k] = options[k];
    }
    t("light-core-template", opts, "template");
    var ctx;
    if ("function" != typeof HTMLElement) {
      /**
       * @return {undefined}
       */
      ctx = function() {
      };
      /** @type {!Element} */
      ctx.prototype = document.createElement("div");
    } else {
      /** @type {function(new:HTMLTemplateElement): ?} */
      ctx = HTMLTemplateElement;
    }
    var r = function(_React$Component) {
      /**
       * @return {?}
       */
      function Slider() {
        return babelHelpers.classCallCheck(this, Slider), babelHelpers.possibleConstructorReturn(this, _React$Component.apply(this, arguments));
      }
      return babelHelpers.inherits(Slider, _React$Component), Slider;
    }(ctx);
    var property;
    for (property in obj) {
      r.prototype[property] = obj[property];
    }
    var n;
    for (n in c) {
      r.prototype[n] = c[n];
    }
    var field;
    for (field in options) {
      r.prototype[field] = options[field];
    }
    t("light-template", r);
    var _takingTooLongTimeout;
    var result = {
      Component : Component,
      components : json,
      register : t,
      StateProvider : service,
      EventDispatcher : app,
      utils : util,
      support : requestFS,
      TemplateComponent : opts,
      EventDispatcherMixin : options,
      ComponentMixin : c
    };
    return window.addEventListener("resize", handler, false), handler(), requestAnimationFrame(checkDimensions), window.console[void 0 === window.console.debug ? "log" : "debug"]("Light.js v107"), result;
  });
}, function(canCreateDiscussions, exports, __webpack_require__) {
  /**
   * @param {!Object} el
   * @param {?} dir
   * @return {?}
   */
  function render(el, dir) {
    var top = (void 0 !== dir || document, el.offsetTop);
    var offsetLeft = el.offsetLeft;
    for (; el && el.parentNode && el.parentNode != document && el !== document;) {
      if ("static" != (0, _deepAssign2.default)(el.parentNode, "position")) {
        top = top + el.parentNode.offsetTop;
        offsetLeft = offsetLeft + el.parentNode.offsetLeft;
      }
      el = el.parentNode;
    }
    return {
      top : top,
      left : offsetLeft
    };
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  /** @type {function(!Object, ?): ?} */
  exports.default = render;
  var _deepAssign = __webpack_require__(30);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
}, function(mixin, canCreateDiscussions, i) {
  mixin.exports = function() {
    /**
     * @param {number} fnMatch0
     * @return {?}
     */
    var $ = function(fnMatch0) {
      return 1 / (200 * fnMatch0);
    };
    /**
     * @param {number} type
     * @param {number} config
     * @param {string} handlers
     * @param {string} name
     * @return {?}
     */
    var factory = function(type, config, handlers, name) {
      /** @type {number} */
      var x = 3 * type;
      /** @type {number} */
      var i = 3 * (handlers - type) - x;
      /** @type {number} */
      var j = 1 - x - i;
      /** @type {number} */
      var C2 = 3 * config;
      /** @type {number} */
      var xj = 3 * (name - config) - C2;
      /** @type {number} */
      var lowInfo = 1 - C2 - xj;
      /**
       * @param {number} width
       * @return {?}
       */
      var parse = function(width) {
        return ((j * width + i) * width + x) * width;
      };
      /**
       * @param {number} a
       * @return {?}
       */
      var dispatch = function(a) {
        return ((lowInfo * a + xj) * a + C2) * a;
      };
      /**
       * @param {number} c
       * @return {?}
       */
      var merge = function(c) {
        return (3 * j * c + 2 * i) * c + x;
      };
      /**
       * @param {number} i
       * @param {number} len
       * @return {?}
       */
      var m = function(i, len) {
        var e;
        var d;
        var a;
        var val;
        var order;
        var t;
        /** @type {number} */
        a = i;
        /** @type {number} */
        t = 0;
        for (; t < 8; t++) {
          if (val = parse(a) - i, Math.abs(val) < len) {
            return a;
          }
          if (order = merge(a), Math.abs(order) < 1e-6) {
            break;
          }
          /** @type {number} */
          a = a - val / order;
        }
        if (e = 0, d = 1, (a = i) < e) {
          return e;
        }
        if (a > d) {
          return d;
        }
        for (; e < d;) {
          if (val = parse(a), Math.abs(val - i) < len) {
            return a;
          }
          if (i > val) {
            e = a;
          } else {
            d = a;
          }
          /** @type {number} */
          a = .5 * (d - e) + e;
        }
        return a;
      };
      /**
       * @param {number} e
       * @param {undefined} title
       * @return {?}
       */
      var action = function(e, title) {
        return dispatch(m(e, title));
      };
      return function(toggler, i) {
        return action(toggler, $(+i || 400));
      };
    };
    return function(predicate, fcn, options, jszip, n, index) {
      return factory(predicate, fcn, options, jszip)(n, index);
    };
  }();
}, function(canCreateDiscussions, exports, i) {
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {?} value
   * @return {?}
   */
  function extend(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  /**
   * @param {string} selector
   * @param {string} o
   * @return {?}
   */
  function $(selector, o) {
    if (!selector) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !o || "object" != typeof o && "function" != typeof o ? selector : o;
  }
  /**
   * @param {!Object} b
   * @param {!Object} t
   * @return {undefined}
   */
  function _inherits(b, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    /** @type {!Object} */
    b.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : b,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(b, t);
      } else {
        /** @type {!Object} */
        b.__proto__ = t;
      }
    }
  }
  /**
   * @param {!AudioNode} value
   * @param {!Function} type
   * @return {undefined}
   */
  function callback(value, type) {
    if (!(value instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @return {?}
   */
  function guid() {
    /** @type {number} */
    var i = 0;
    for (; i < 36; i++) {
      if (8 === i || 13 === i || 18 === i || 23 === i) {
        /** @type {string} */
        ret[i] = "-";
      } else {
        if (14 === i) {
          /** @type {string} */
          ret[i] = "4";
        } else {
          if (packed <= 2) {
            /** @type {number} */
            packed = 33554432 + 16777216 * Math.random() | 0;
          }
          /** @type {number} */
          fullyOpaque = 15 & packed;
          /** @type {number} */
          packed = packed >> 4;
          /** @type {string} */
          ret[i] = tmp2[19 === i ? 3 & fullyOpaque | 8 : fullyOpaque];
        }
      }
    }
    return ret.join("");
  }
  /**
   * @param {string} string
   * @return {?}
   */
  function addLineNumbers(string) {
    var calIds = string.split("\n");
    /** @type {number} */
    var i = 0;
    for (; i < calIds.length; i++) {
      calIds[i] = i + 1 + ": " + calIds[i];
    }
    return calIds.join("\n");
  }
  /**
   * @param {!WebGLRenderingContext} gl
   * @param {?} shader
   * @param {string} string
   * @return {?}
   */
  function createProgram(gl, shader, string) {
    return gl.shaderSource(shader, string), gl.compileShader(shader), !!gl.getShaderParameter(shader, gl.COMPILE_STATUS) || (console.error("Shader cannot compile: \n" + gl.getShaderInfoLog(shader) || ""), console.warn(addLineNumbers(string)), false);
  }
  /**
   * @param {boolean} p
   * @param {boolean} g
   * @param {boolean} d
   * @return {?}
   */
  function paramThreeToGL(p, g, d) {
    return 9728 | +p | +g << 8 | +(g && d) << 1;
  }
  /**
   * @param {number} val
   * @return {?}
   */
  function isZero(val) {
    return 0 == (val & val - 1);
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  /**
   * @param {!Object} object
   * @param {string} name
   * @param {?} index
   * @return {?}
   */
  var spinnerModifer = function set(object, name, index) {
    if (null === object) {
      object = Function.prototype;
    }
    /** @type {(ObjectPropertyDescriptor<?>|undefined)} */
    var output = Object.getOwnPropertyDescriptor(object, name);
    if (void 0 === output) {
      /** @type {(Object|null)} */
      var value = Object.getPrototypeOf(object);
      return null === value ? void 0 : set(value, name, index);
    }
    if ("value" in output) {
      return output.value;
    }
    /** @type {(function(): ?|undefined)} */
    var result = output.get;
    if (void 0 !== result) {
      return result.call(index);
    }
  };
  /** @type {function(?): ?} */
  var defined = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(canCreateDiscussions) {
    return typeof canCreateDiscussions;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var AssociationCollection = function() {
    /**
     * @param {!WebGLRenderingContext} context
     * @param {?} data
     * @param {?} key
     * @param {string} value
     * @param {string} type
     * @return {undefined}
     */
    function set(context, data, key, value, type) {
      callback(this, set);
      /** @type {string} */
      this.name = type;
      /** @type {!WebGLRenderingContext} */
      this.gl = context;
      this._buffer = this.gl.createBuffer();
      this.type = this.gl.FLOAT;
      this._target = this.gl[value ? "ELEMENT_ARRAY_BUFFER" : "ARRAY_BUFFER"];
      this.update(data, key);
    }
    return _createClass(set, [{
      key : "update",
      value : function(name, size) {
        /** @type {string} */
        this.data = name;
        /** @type {string} */
        this.size = size;
        this.length = this.data.length;
        this.gl.bindBuffer(this._target, this._buffer);
        this.gl.bufferData(this._target, this.data, this.gl.STATIC_DRAW);
      }
    }, {
      key : "bind",
      value : function() {
        this.gl.bindBuffer(this._target, this._buffer);
      }
    }]), set;
  }();
  var Point = function() {
    /**
     * @param {!WebGLRenderingContext} text
     * @param {number} size
     * @return {undefined}
     */
    function n(text, size) {
      callback(this, n);
      /** @type {!WebGLRenderingContext} */
      this.gl = text;
      this.attributes = {};
      this.length = size || 0;
    }
    return _createClass(n, [{
      key : "addAttribute",
      value : function(name, objects, value, index) {
        this.attributes[name] = new AssociationCollection(this.gl, objects, value, "index" === name, index);
      }
    }]), n;
  }();
  var result = {};
  /** @type {string} */
  result[5126] = "1f";
  /** @type {string} */
  result[35664] = "2f";
  /** @type {string} */
  result[35665] = "3f";
  /** @type {string} */
  result[35666] = "4f";
  /** @type {string} */
  result[35670] = result[5124] = result[35678] = result[35680] = "1i";
  /** @type {string} */
  result[35671] = result[35667] = "2i";
  /** @type {string} */
  result[35672] = result[35668] = "3i";
  /** @type {string} */
  result[35673] = result[35669] = "4i";
  /** @type {string} */
  result[35674] = "Matrix2f";
  /** @type {string} */
  result[35675] = "Matrix3f";
  /** @type {string} */
  result[35676] = "Matrix4f";
  var fullyOpaque;
  /** @type {string} */
  var vertexShader = "precision highp float;\n\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvColor = color;\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}";
  /** @type {string} */
  var basic_frag = "precision highp float;\n\nuniform float alpha;\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nvoid main(void) {\n    gl_FragColor = vec4( vec3(1., 1., 1.), alpha);\n}";
  /** @type {!Array<string>} */
  var tmp2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  /** @type {!Array} */
  var ret = new Array(36);
  /** @type {number} */
  var packed = 0;
  /** @type {boolean} */
  var k = false;
  /** @type {null} */
  var P = null;
  var noop = function() {
    /**
     * @param {!WebGLRenderingContext} gl
     * @param {!Object} source
     * @return {undefined}
     */
    function init(gl, source) {
      callback(this, init);
      this._uuid = guid();
      /** @type {!Object} */
      source = Object.assign({}, {
        vertexShader : vertexShader,
        fragmentShader : basic_frag,
        defines : {},
        extentions : {},
        type : gl.TRIANGLES
      }, source);
      /** @type {!Object} */
      this.options = source;
      this._vertexShaderSource = source.vertexShader;
      this._fragmentShaderSource = source.fragmentShader;
      /** @type {!WebGLRenderingContext} */
      this.gl = gl;
      this._program = gl.createProgram();
      this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
      this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.attachShader(this._program, this.vertexShader);
      gl.attachShader(this._program, this.fragmentShader);
      this.type = source.type;
      this.attributes = {};
      this.uniforms = {};
      this.defines = source.defines;
      this.extentions = source.extentions;
      /** @type {number} */
      this._textureUnit = 0;
      this.depthTest = void 0 === source.depthTest || source.depthTest;
      this.blend = void 0 !== source.blend && source.blend;
      this.blendEquation = void 0 !== source.blendEquation ? source.blendEquation : this.gl.FUNC_ADD;
      this.blendSrc = void 0 !== source.blendSrc ? source.blendSrc : this.gl.SRC_ALPHA;
      this.blendSrcAlpha = void 0 !== source.blendSrcAlpha ? source.blendSrcAlpha : this.gl.SRC_ALPHA;
      this.blendDst = void 0 !== source.blendDst ? source.blendDst : this.gl.ONE;
      this.blendDstAlpha = void 0 !== source.blendDstAlpha ? source.blendDstAlpha : this.gl.ONE_MINUS_SRC_ALPHA;
      this.wireframe = void 0 !== source.wireframe && source.wireframe;
      this.compile(source);
    }
    return _createClass(init, [{
      key : "compile",
      value : function(name) {
        /** @type {string} */
        var pix_color = "";
        var d;
        for (d in this.defines) {
          if (this.defines[d]) {
            /** @type {string} */
            pix_color = pix_color + ("#define " + d + " " + this.defines[d] + "\n");
          }
        }
        if (!createProgram(this.gl, this.vertexShader, pix_color + this._vertexShaderSource) || !createProgram(this.gl, this.fragmentShader, pix_color + this._fragmentShaderSource)) {
          return console.warn("compile error"), false;
        }
        if (this.gl.linkProgram(this._program), this.gl.getProgramParameter(this._program, this.gl.LINK_STATUS) || (console.error("Cannot link program: \n" + this.gl.getProgramInfoLog(this._program) || ""), console.warn("VERTEX_SHADER:\n" + addLineNumbers(name.vertexShader) + "\n\nFRAGMENT_SHADER:\n" + addLineNumbers(name.fragmentShader))), this.gl.useProgram(this._program), this._retrieveUnifromsFromShader(), "object" === defined(name.uniforms)) {
          var prop;
          for (prop in name.uniforms) {
            if (void 0 !== this.uniforms[prop]) {
              this.uniforms[prop].value = name.uniforms[prop];
            }
          }
        }
      }
    }, {
      key : "_retrieveUnifromsFromShader",
      value : function() {
        var location = this.gl.getProgramParameter(this._program, this.gl.ACTIVE_UNIFORMS);
        /** @type {number} */
        var i = 0;
        for (; i < location; ++i) {
          var uniform = this.gl.getActiveUniform(this._program, i);
          if (null !== uniform) {
            if (void 0 !== this.uniforms[uniform.name]) {
              this.uniforms[uniform.name].location = this.gl.getUniformLocation(this._program, uniform.name);
              this.uniforms[uniform.name].type = uniform.type;
            } else {
              this.uniforms[uniform.name] = {
                location : this.gl.getUniformLocation(this._program, uniform.name),
                type : uniform.type,
                value : null
              };
              var testMeshes = result[uniform.type];
              if ("2f" == testMeshes) {
                /** @type {!Array} */
                this.uniforms[uniform.name].value = [0, 0];
              } else {
                if ("3f" == testMeshes) {
                  /** @type {!Array} */
                  this.uniforms[uniform.name].value = [0, 0, 0];
                } else {
                  if ("4f" == testMeshes) {
                    /** @type {!Array} */
                    this.uniforms[uniform.name].value = [0, 0, 0, 0];
                  } else {
                    if (35678 === uniform.type) {
                      this.uniforms[uniform.name].unit = this._textureUnit;
                      this._textureUnit++;
                    }
                  }
                }
              }
            }
          } else {
            this.gl.getError();
          }
        }
        var info = this.gl.getProgramParameter(this._program, this.gl.ACTIVE_ATTRIBUTES);
        /** @type {number} */
        var name = 0;
        for (; name < info; ++name) {
          var attr = this.gl.getActiveAttrib(this._program, name);
          if (null !== attr) {
            this.attributes[attr.name] = {
              location : this.gl.getAttribLocation(this._program, attr.name),
              type : attr.type
            };
          } else {
            this.gl.getError();
          }
        }
      }
    }, {
      key : "dispose",
      value : function() {
      }
    }, {
      key : "use",
      value : function() {
        this.gl.useProgram(this._program);
      }
    }, {
      key : "attribPointer",
      value : function(name, t) {
        this.gl.useProgram(this._program);
        var i;
        for (i in this.attributes) {
          if (i in name) {
            name[i].bind();
            this.gl.vertexAttribPointer(this.attributes[i].location, name[i].size, name[i].type, false, 0, 0);
            this.gl.enableVertexAttribArray(this.attributes[i].location);
          }
        }
      }
    }, {
      key : "draw",
      value : function(name) {
        this.attribPointer(name.attributes, name);
        this.gl[this.depthTest ? "enable" : "disable"](this.gl.DEPTH_TEST);
        if (this.blend) {
          P = this;
          /** @type {boolean} */
          k = true;
          this.gl.disable(this.gl.DEPTH_TEST);
          if (this.depthTest) {
            this.gl.depthFunc(this.gl.LESS);
          }
          this.gl.enable(this.gl.BLEND);
          this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        } else {
          /** @type {boolean} */
          k = false;
          this.gl.disable(this.gl.BLEND);
          this.gl[this.depthTest ? "enable" : "disable"](this.gl.DEPTH_TEST);
        }
        /** @type {!Array<string>} */
        var keys = Object.keys(this.uniforms);
        /** @type {number} */
        var i = 0;
        for (; i < keys.length; i++) {
          switch(this.uniforms[keys[i]].type) {
            case this.gl.FLOAT_MAT2:
            case this.gl.FLOAT_MAT3:
            case this.gl.FLOAT_MAT4:
              this.gl["uniform" + result[this.uniforms[keys[i]].type] + "v"](this.uniforms[keys[i]].location, false, this.uniforms[keys[i]].value);
              break;
            default:
              if (35678 === this.uniforms[keys[i]].type && this.uniforms[keys[i]].value) {
                this.uniforms[keys[i]].value.bind(this.uniforms[keys[i]].unit);
                this.gl["uniform" + result[this.uniforms[keys[i]].type]](this.uniforms[keys[i]].location, this.uniforms[keys[i]].unit);
              } else {
                var type = result[this.uniforms[keys[i]].type];
                if (null !== this.uniforms[keys[i]].value) {
                  if ("2f" == type) {
                    this.gl["uniform" + type](this.uniforms[keys[i]].location, this.uniforms[keys[i]].value[0], this.uniforms[keys[i]].value[1]);
                  } else {
                    if ("3f" == type) {
                      this.gl["uniform" + type](this.uniforms[keys[i]].location, this.uniforms[keys[i]].value[0], this.uniforms[keys[i]].value[1], this.uniforms[keys[i]].value[2]);
                    } else {
                      if ("4f" == type) {
                        this.gl["uniform" + type](this.uniforms[keys[i]].location, this.uniforms[keys[i]].value[0], this.uniforms[keys[i]].value[1], this.uniforms[keys[i]].value[2], this.uniforms[keys[i]].value[3]);
                      } else {
                        this.gl["uniform" + type](this.uniforms[keys[i]].location, this.uniforms[keys[i]].value);
                      }
                    }
                  }
                }
              }
          }
        }
        if (name.attributes.index) {
          name.attributes.index.bind();
          this.gl.drawElements(this.wireframe ? this.gl.LINE_STRIP : this.type, name.attributes.index.length, this.gl.UNSIGNED_SHORT, 0);
        } else {
          this.gl.drawArrays(this.wireframe ? this.gl.LINE_STRIP : this.type, 0, name.length);
        }
      }
    }]), init;
  }();
  /** @type {string} */
  var updateFrag = "precision highp float;\n\nuniform float alpha;\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nuniform vec2 offset;\n\n#ifdef USE_MAP\n\tuniform sampler2D map;\n\tuniform vec2 mapOffset;\n#endif\n\n#ifdef USE_ALPHA_MAP\n\tuniform sampler2D alphaMap;\n\tuniform vec2 alphaMapOffset;\n#endif\n\nvoid main(void) {\n\n\tvec4 color = vec4(vColor, alpha);\n\n\t#ifdef USE_MAP\n\t\tcolor = texture2D(map, vUv + offset);\n\t\tcolor.a *= alpha;\n\t#endif\n\n\n    gl_FragColor = color;\n\n}";
  var Vis = function(e) {
    /**
     * @param {?} args
     * @param {!Object} options
     * @return {?}
     */
    function t(args, options) {
      callback(this, t);
      /** @type {!Object} */
      options = Object.assign({}, {
        vertexShader : vertexShader,
        fragmentShader : updateFrag,
        alpha : 1,
        map : null,
        roughnessMap : null,
        metalnessMap : null,
        normalMap : null,
        defines : {
          USE_MAP : false
        }
      }, options);
      var self = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, args, options));
      return self.map = options.map, self.options = options, Object.defineProperty(self, "map", {
        set : function(name) {
          if (name) {
            /** @type {boolean} */
            self.defines.USE_MAP = true;
            self.compile(self.options);
            if (self.uniforms.map) {
              /** @type {string} */
              self.uniforms.map.value = name;
            }
          } else {
            /** @type {boolean} */
            self.defines.USE_MAP = false;
            self.compile(self.options);
          }
        }
      }), self;
    }
    return _inherits(t, e), _createClass(t, [{
      key : "draw",
      value : function(name) {
        spinnerModifer(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "draw", this).call(this, name);
      }
    }]), t;
  }(noop);
  var Texture = function() {
    /**
     * @param {!WebGLRenderingContext} gl
     * @param {!Object} data
     * @return {undefined}
     */
    function init(gl, data) {
      var webGL = this;
      if (callback(this, init), data = Object.assign({}, extend({
        format : gl.RGBA,
        type : gl.UNSIGNED_BYTE,
        width : 1,
        height : 1,
        data : null,
        linear : true,
        mipmap : false,
        miplinear : false,
        wrapS : gl.CLAMP_TO_EDGE,
        wrapT : gl.CLAMP_TO_EDGE
      }, "data", new Uint8Array([0, 0, 0, 255])), data), this._uid = guid(), this.gl = gl, this.width = data.width, this.height = data.height, this.format = data.format, this.type = data.type, this.data = data.data, this._texture = this.gl.createTexture(), gl.bindTexture(gl.TEXTURE_2D, this._texture), this.type == gl.FLOAT) {
        if (!gl.getExtension("OES_texture_float")) {
          console.warn("no floating point texture support");
          this.type = gl.UNSIGNED_BYTE;
        }
      }
      Object.defineProperty(this, "wrapS", {
        set : function(value) {
          webGL.gl.texParameteri(webGL.gl.TEXTURE_2D, webGL.gl.TEXTURE_WRAP_S, value);
        }
      });
      Object.defineProperty(this, "wrapT", {
        set : function(value) {
          webGL.gl.texParameteri(webGL.gl.TEXTURE_2D, webGL.gl.TEXTURE_WRAP_T, value);
        }
      });
      this.setFilter(data.linear, data.mipmap, data.mipmapLinear);
      this.wrapS = data.wrapS;
      this.wrapT = data.wrapT;
      this.bindData();
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
    return _createClass(init, [{
      key : "bindData",
      value : function() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, this.data);
      }
    }, {
      key : "bindImage",
      value : function(name) {
        var t = isZero(name.width) && isZero(name.height);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.format, this.type, name);
        if (!t) {
          this.setFilter(true, false, false);
          this.wrapS = this.gl.CLAMP_TO_EDGE;
          this.wrapT = this.gl.CLAMP_TO_EDGE;
        }
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
      }
    }, {
      key : "bind",
      value : function(name) {
        if (void 0 !== name) {
          this.gl.activeTexture(this.gl.TEXTURE0 + (0 | name));
        }
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture);
      }
    }, {
      key : "delete",
      value : function() {
        this.gl.deleteTexture(this._texture);
        /** @type {null} */
        this._texture = null;
        /** @type {null} */
        this.gl = null;
      }
    }, {
      key : "setFilter",
      value : function(name, index, dt) {
        var gl = this.gl;
        var minFilter = paramThreeToGL(!!name, !!index, !!dt);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, paramThreeToGL(!!name, false, false));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
      }
    }]), init;
  }();
  /**
   * @param {?} url
   * @param {string} path
   * @param {?} size
   * @return {?}
   */
  Texture.fromUrl = function(url, path, size) {
    var a = new Texture(url, size);
    /** @type {!Image} */
    var img = new Image;
    return img.onload = function() {
      /** @type {null} */
      img.onload = null;
      /** @type {null} */
      img.onerror = null;
      a.bindImage(img);
    }, img.onerror = function() {
      /** @type {null} */
      img.onload = null;
      /** @type {null} */
      img.onerror = null;
      console.warn("Invalid url provided to Texture.fromUrl() : " + path);
    }, img.crossOrigin = "", img.src = path, a;
  };
  /**
   * @param {?} type
   * @param {!Object} event
   * @param {?} data
   * @return {?}
   */
  Texture.fromImage = function(type, event, data) {
    if (!event.width || !event.height) {
      return void console.warn("Cannot create texture with provided image\n Please make sure the image is loaded before calling Texture.fromImage() or use Texture.fromUrl()", event);
    }
    var evt = new Texture(type, data);
    return evt.bindImage(event), evt;
  };
  /** @type {function(): number} */
  var nativeRandom = Math.random;
  /** @type {!Function} */
  var ArrayType = "undefined" != typeof Float32Array ? Float32Array : Array;
  /** @type {!Function} */
  var Message = ArrayType;
  /** @type {function(): number} */
  var parseFloat = nativeRandom;
  var mat4 = {};
  /**
   * @return {?}
   */
  mat4.create = function() {
    var message6 = new Message(16);
    return message6[0] = 1, message6[1] = 0, message6[2] = 0, message6[3] = 0, message6[4] = 0, message6[5] = 1, message6[6] = 0, message6[7] = 0, message6[8] = 0, message6[9] = 0, message6[10] = 1, message6[11] = 0, message6[12] = 0, message6[13] = 0, message6[14] = 0, message6[15] = 1, message6;
  };
  /**
   * @param {!Array} o
   * @return {?}
   */
  mat4.clone = function(o) {
    var msg = new Message(16);
    return msg[0] = o[0], msg[1] = o[1], msg[2] = o[2], msg[3] = o[3], msg[4] = o[4], msg[5] = o[5], msg[6] = o[6], msg[7] = o[7], msg[8] = o[8], msg[9] = o[9], msg[10] = o[10], msg[11] = o[11], msg[12] = o[12], msg[13] = o[13], msg[14] = o[14], msg[15] = o[15], msg;
  };
  /**
   * @param {!Array} oldDot
   * @param {!Array} newDot
   * @return {?}
   */
  mat4.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot[2] = newDot[2], oldDot[3] = newDot[3], oldDot[4] = newDot[4], oldDot[5] = newDot[5], oldDot[6] = newDot[6], oldDot[7] = newDot[7], oldDot[8] = newDot[8], oldDot[9] = newDot[9], oldDot[10] = newDot[10], oldDot[11] = newDot[11], oldDot[12] = newDot[12], oldDot[13] = newDot[13], oldDot[14] = newDot[14], oldDot[15] = newDot[15], oldDot;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  mat4.identity = function(a) {
    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a;
  };
  /**
   * @param {!Array} resultMat
   * @param {!Array} mat
   * @return {?}
   */
  mat4.transpose = function(resultMat, mat) {
    if (resultMat === mat) {
      var a10 = mat[1];
      var a20 = mat[2];
      var a32 = mat[3];
      var a21 = mat[6];
      var a30 = mat[7];
      var a31 = mat[11];
      resultMat[1] = mat[4];
      resultMat[2] = mat[8];
      resultMat[3] = mat[12];
      resultMat[4] = a10;
      resultMat[6] = mat[9];
      resultMat[7] = mat[13];
      resultMat[8] = a20;
      resultMat[9] = a21;
      resultMat[11] = mat[14];
      resultMat[12] = a32;
      resultMat[13] = a30;
      resultMat[14] = a31;
    } else {
      resultMat[0] = mat[0];
      resultMat[1] = mat[4];
      resultMat[2] = mat[8];
      resultMat[3] = mat[12];
      resultMat[4] = mat[1];
      resultMat[5] = mat[5];
      resultMat[6] = mat[9];
      resultMat[7] = mat[13];
      resultMat[8] = mat[2];
      resultMat[9] = mat[6];
      resultMat[10] = mat[10];
      resultMat[11] = mat[14];
      resultMat[12] = mat[3];
      resultMat[13] = mat[7];
      resultMat[14] = mat[11];
      resultMat[15] = mat[15];
    }
    return resultMat;
  };
  /**
   * @param {!Array} value
   * @param {!Array} args
   * @return {?}
   */
  mat4.invert = function(value, args) {
    var y = args[0];
    var j = args[1];
    var i = args[2];
    var x = args[3];
    var sin = args[4];
    var cos = args[5];
    var n = args[6];
    var r = args[7];
    var a = args[8];
    var y0 = args[9];
    var x0 = args[10];
    var x2 = args[11];
    var b = args[12];
    var y1 = args[13];
    var y2 = args[14];
    var x1 = args[15];
    /** @type {number} */
    var len = y * cos - j * sin;
    /** @type {number} */
    var sr = y * n - i * sin;
    /** @type {number} */
    var d = y * r - x * sin;
    /** @type {number} */
    var cr = j * n - i * cos;
    /** @type {number} */
    var s = j * r - x * cos;
    /** @type {number} */
    var c = i * r - x * n;
    /** @type {number} */
    var k = a * y1 - y0 * b;
    /** @type {number} */
    var w = a * y2 - x0 * b;
    /** @type {number} */
    var cy = a * x1 - x2 * b;
    /** @type {number} */
    var h = y0 * y2 - x0 * y1;
    /** @type {number} */
    var cx = y0 * x1 - x2 * y1;
    /** @type {number} */
    var sy = x0 * x1 - x2 * y2;
    /** @type {number} */
    var noaccum = len * sy - sr * cx + d * h + cr * cy - s * w + c * k;
    return noaccum ? (noaccum = 1 / noaccum, value[0] = (cos * sy - n * cx + r * h) * noaccum, value[1] = (i * cx - j * sy - x * h) * noaccum, value[2] = (y1 * c - y2 * s + x1 * cr) * noaccum, value[3] = (x0 * s - y0 * c - x2 * cr) * noaccum, value[4] = (n * cy - sin * sy - r * w) * noaccum, value[5] = (y * sy - i * cy + x * w) * noaccum, value[6] = (y2 * d - b * c - x1 * sr) * noaccum, value[7] = (a * c - x0 * d + x2 * sr) * noaccum, value[8] = (sin * cx - cos * cy + r * k) * noaccum, value[9] = 
    (j * cy - y * cx - x * k) * noaccum, value[10] = (b * s - y1 * d + x1 * len) * noaccum, value[11] = (y0 * d - a * s - x2 * len) * noaccum, value[12] = (cos * w - sin * h - n * k) * noaccum, value[13] = (y * h - j * w + i * k) * noaccum, value[14] = (y1 * sr - b * cr - y2 * len) * noaccum, value[15] = (a * cr - y0 * sr + x0 * len) * noaccum, value) : null;
  };
  /**
   * @param {!Array} m
   * @param {!Array} a
   * @return {?}
   */
  mat4.adjoint = function(m, a) {
    var i = a[0];
    var r = a[1];
    var c = a[2];
    var b = a[3];
    var next = a[4];
    var x = a[5];
    var w = a[6];
    var z = a[7];
    var j = a[8];
    var y = a[9];
    var f = a[10];
    var d = a[11];
    var a_first = a[12];
    var sin = a[13];
    var k = a[14];
    var h = a[15];
    return m[0] = x * (f * h - d * k) - y * (w * h - z * k) + sin * (w * d - z * f), m[1] = -(r * (f * h - d * k) - y * (c * h - b * k) + sin * (c * d - b * f)), m[2] = r * (w * h - z * k) - x * (c * h - b * k) + sin * (c * z - b * w), m[3] = -(r * (w * d - z * f) - x * (c * d - b * f) + y * (c * z - b * w)), m[4] = -(next * (f * h - d * k) - j * (w * h - z * k) + a_first * (w * d - z * f)), m[5] = i * (f * h - d * k) - j * (c * h - b * k) + a_first * (c * d - b * f), m[6] = -(i * (w * h - z * k) - 
    next * (c * h - b * k) + a_first * (c * z - b * w)), m[7] = i * (w * d - z * f) - next * (c * d - b * f) + j * (c * z - b * w), m[8] = next * (y * h - d * sin) - j * (x * h - z * sin) + a_first * (x * d - z * y), m[9] = -(i * (y * h - d * sin) - j * (r * h - b * sin) + a_first * (r * d - b * y)), m[10] = i * (x * h - z * sin) - next * (r * h - b * sin) + a_first * (r * z - b * x), m[11] = -(i * (x * d - z * y) - next * (r * d - b * y) + j * (r * z - b * x)), m[12] = -(next * (y * k - f * sin) - 
    j * (x * k - w * sin) + a_first * (x * f - w * y)), m[13] = i * (y * k - f * sin) - j * (r * k - c * sin) + a_first * (r * f - c * y), m[14] = -(i * (x * k - w * sin) - next * (r * k - c * sin) + a_first * (r * w - c * x)), m[15] = i * (x * f - w * y) - next * (r * f - c * y) + j * (r * w - c * x), m;
  };
  /**
   * @param {!Array} data
   * @return {?}
   */
  mat4.determinant = function(data) {
    var w = data[0];
    var z = data[1];
    var x = data[2];
    var y = data[3];
    var sc = data[4];
    var z2 = data[5];
    var x2 = data[6];
    var y2 = data[7];
    var l = data[8];
    var o = data[9];
    var k = data[10];
    var m = data[11];
    var p = data[12];
    var r = data[13];
    var n = data[14];
    var s = data[15];
    return (w * z2 - z * sc) * (k * s - m * n) - (w * x2 - x * sc) * (o * s - m * r) + (w * y2 - y * sc) * (o * n - k * r) + (z * x2 - x * z2) * (l * s - m * p) - (z * y2 - y * z2) * (l * n - k * p) + (x * y2 - y * x2) * (l * r - o * p);
  };
  /**
   * @param {!Array} array
   * @param {!Array} results
   * @param {!Array} i
   * @return {?}
   */
  mat4.multiply = function(array, results, i) {
    var rs = results[0];
    var r1 = results[1];
    var cosDeltaGamma = results[2];
    var t = results[3];
    var cs = results[4];
    var d = results[5];
    var sinDeltaGamma = results[6];
    var u = results[7];
    var s = results[8];
    var channelCount = results[9];
    var r = results[10];
    var pos = results[11];
    var daysInterval = results[12];
    var videoUploadResult = results[13];
    var destCache = results[14];
    var daysToStart = results[15];
    var k = i[0];
    var j = i[1];
    var l = i[2];
    var mmCoreSecondsDay = i[3];
    return array[0] = k * rs + j * cs + l * s + mmCoreSecondsDay * daysInterval, array[1] = k * r1 + j * d + l * channelCount + mmCoreSecondsDay * videoUploadResult, array[2] = k * cosDeltaGamma + j * sinDeltaGamma + l * r + mmCoreSecondsDay * destCache, array[3] = k * t + j * u + l * pos + mmCoreSecondsDay * daysToStart, k = i[4], j = i[5], l = i[6], mmCoreSecondsDay = i[7], array[4] = k * rs + j * cs + l * s + mmCoreSecondsDay * daysInterval, array[5] = k * r1 + j * d + l * channelCount + mmCoreSecondsDay * 
    videoUploadResult, array[6] = k * cosDeltaGamma + j * sinDeltaGamma + l * r + mmCoreSecondsDay * destCache, array[7] = k * t + j * u + l * pos + mmCoreSecondsDay * daysToStart, k = i[8], j = i[9], l = i[10], mmCoreSecondsDay = i[11], array[8] = k * rs + j * cs + l * s + mmCoreSecondsDay * daysInterval, array[9] = k * r1 + j * d + l * channelCount + mmCoreSecondsDay * videoUploadResult, array[10] = k * cosDeltaGamma + j * sinDeltaGamma + l * r + mmCoreSecondsDay * destCache, array[11] = k * t + 
    j * u + l * pos + mmCoreSecondsDay * daysToStart, k = i[12], j = i[13], l = i[14], mmCoreSecondsDay = i[15], array[12] = k * rs + j * cs + l * s + mmCoreSecondsDay * daysInterval, array[13] = k * r1 + j * d + l * channelCount + mmCoreSecondsDay * videoUploadResult, array[14] = k * cosDeltaGamma + j * sinDeltaGamma + l * r + mmCoreSecondsDay * destCache, array[15] = k * t + j * u + l * pos + mmCoreSecondsDay * daysToStart, array;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  mat4.mul = mat4.multiply;
  /**
   * @param {!Array} data
   * @param {!Array} d
   * @param {!Array} p
   * @return {?}
   */
  mat4.translate = function(data, d, p) {
    var r;
    var y;
    var i;
    var u;
    var c;
    var x;
    var h;
    var o;
    var width;
    var height;
    var b;
    var x2;
    var w = p[0];
    var v = p[1];
    var t = p[2];
    return d === data ? (data[12] = d[0] * w + d[4] * v + d[8] * t + d[12], data[13] = d[1] * w + d[5] * v + d[9] * t + d[13], data[14] = d[2] * w + d[6] * v + d[10] * t + d[14], data[15] = d[3] * w + d[7] * v + d[11] * t + d[15]) : (r = d[0], y = d[1], i = d[2], u = d[3], c = d[4], x = d[5], h = d[6], o = d[7], width = d[8], height = d[9], b = d[10], x2 = d[11], data[0] = r, data[1] = y, data[2] = i, data[3] = u, data[4] = c, data[5] = x, data[6] = h, data[7] = o, data[8] = width, data[9] = height, 
    data[10] = b, data[11] = x2, data[12] = r * w + c * v + width * t + d[12], data[13] = y * w + x * v + height * t + d[13], data[14] = i * w + h * v + b * t + d[14], data[15] = u * w + o * v + x2 * t + d[15]), data;
  };
  /**
   * @param {!Array} out
   * @param {!Array} arr
   * @param {!Object} o
   * @return {?}
   */
  mat4.scale = function(out, arr, o) {
    var val = o[0];
    var tmp = o[1];
    var a = o[2];
    return out[0] = arr[0] * val, out[1] = arr[1] * val, out[2] = arr[2] * val, out[3] = arr[3] * val, out[4] = arr[4] * tmp, out[5] = arr[5] * tmp, out[6] = arr[6] * tmp, out[7] = arr[7] * tmp, out[8] = arr[8] * a, out[9] = arr[9] * a, out[10] = arr[10] * a, out[11] = arr[11] * a, out[12] = arr[12], out[13] = arr[13], out[14] = arr[14], out[15] = arr[15], out;
  };
  /**
   * @param {!Array} el
   * @param {!Array} p
   * @param {?} i
   * @param {!Array} v
   * @return {?}
   */
  mat4.rotate = function(el, p, i, v) {
    var y2;
    var delta;
    var x2;
    var dot1;
    var a;
    var lb;
    var la;
    var dot2;
    var c;
    var ld;
    var lc;
    var value;
    var m;
    var x;
    var h;
    var w2;
    var h2;
    var r;
    var w0;
    var h0;
    var k;
    var w1;
    var h1;
    var scale;
    var v0 = v[0];
    var v1 = v[1];
    var y1 = v[2];
    /** @type {number} */
    var height = Math.sqrt(v0 * v0 + v1 * v1 + y1 * y1);
    return Math.abs(height) < 1e-6 ? null : (height = 1 / height, v0 = v0 * height, v1 = v1 * height, y1 = y1 * height, y2 = Math.sin(i), delta = Math.cos(i), x2 = 1 - delta, dot1 = p[0], a = p[1], lb = p[2], la = p[3], dot2 = p[4], c = p[5], ld = p[6], lc = p[7], value = p[8], m = p[9], x = p[10], h = p[11], w2 = v0 * v0 * x2 + delta, h2 = v1 * v0 * x2 + y1 * y2, r = y1 * v0 * x2 - v1 * y2, w0 = v0 * v1 * x2 - y1 * y2, h0 = v1 * v1 * x2 + delta, k = y1 * v1 * x2 + v0 * y2, w1 = v0 * y1 * x2 + v1 * 
    y2, h1 = v1 * y1 * x2 - v0 * y2, scale = y1 * y1 * x2 + delta, el[0] = dot1 * w2 + dot2 * h2 + value * r, el[1] = a * w2 + c * h2 + m * r, el[2] = lb * w2 + ld * h2 + x * r, el[3] = la * w2 + lc * h2 + h * r, el[4] = dot1 * w0 + dot2 * h0 + value * k, el[5] = a * w0 + c * h0 + m * k, el[6] = lb * w0 + ld * h0 + x * k, el[7] = la * w0 + lc * h0 + h * k, el[8] = dot1 * w1 + dot2 * h1 + value * scale, el[9] = a * w1 + c * h1 + m * scale, el[10] = lb * w1 + ld * h1 + x * scale, el[11] = la * w1 + 
    lc * h1 + h * scale, p !== el && (el[12] = p[12], el[13] = p[13], el[14] = p[14], el[15] = p[15]), el);
  };
  /**
   * @param {!Array} dest
   * @param {!Array} mat
   * @param {?} angle
   * @return {?}
   */
  mat4.rotateX = function(dest, mat, angle) {
    /** @type {number} */
    var s = Math.sin(angle);
    /** @type {number} */
    var c = Math.cos(angle);
    var a10 = mat[4];
    var m12 = mat[5];
    var b = mat[6];
    var y = mat[7];
    var a20 = mat[8];
    var m22 = mat[9];
    var a = mat[10];
    var focal = mat[11];
    return mat !== dest && (dest[0] = mat[0], dest[1] = mat[1], dest[2] = mat[2], dest[3] = mat[3], dest[12] = mat[12], dest[13] = mat[13], dest[14] = mat[14], dest[15] = mat[15]), dest[4] = a10 * c + a20 * s, dest[5] = m12 * c + m22 * s, dest[6] = b * c + a * s, dest[7] = y * c + focal * s, dest[8] = a20 * c - a10 * s, dest[9] = m22 * c - m12 * s, dest[10] = a * c - b * s, dest[11] = focal * c - y * s, dest;
  };
  /**
   * @param {!Array} dest
   * @param {!Array} mat
   * @param {?} angle
   * @return {?}
   */
  mat4.rotateY = function(dest, mat, angle) {
    /** @type {number} */
    var s = Math.sin(angle);
    /** @type {number} */
    var c = Math.cos(angle);
    var a10 = mat[0];
    var m21 = mat[1];
    var ox1 = mat[2];
    var x = mat[3];
    var a20 = mat[8];
    var m22 = mat[9];
    var oy2 = mat[10];
    var y = mat[11];
    return mat !== dest && (dest[4] = mat[4], dest[5] = mat[5], dest[6] = mat[6], dest[7] = mat[7], dest[12] = mat[12], dest[13] = mat[13], dest[14] = mat[14], dest[15] = mat[15]), dest[0] = a10 * c - a20 * s, dest[1] = m21 * c - m22 * s, dest[2] = ox1 * c - oy2 * s, dest[3] = x * c - y * s, dest[8] = a10 * s + a20 * c, dest[9] = m21 * s + m22 * c, dest[10] = ox1 * s + oy2 * c, dest[11] = x * s + y * c, dest;
  };
  /**
   * @param {!Array} dest
   * @param {!Array} mat
   * @param {?} angle
   * @return {?}
   */
  mat4.rotateZ = function(dest, mat, angle) {
    /** @type {number} */
    var s = Math.sin(angle);
    /** @type {number} */
    var c = Math.cos(angle);
    var a10 = mat[0];
    var m12 = mat[1];
    var b = mat[2];
    var y = mat[3];
    var a20 = mat[4];
    var m22 = mat[5];
    var a = mat[6];
    var focal = mat[7];
    return mat !== dest && (dest[8] = mat[8], dest[9] = mat[9], dest[10] = mat[10], dest[11] = mat[11], dest[12] = mat[12], dest[13] = mat[13], dest[14] = mat[14], dest[15] = mat[15]), dest[0] = a10 * c + a20 * s, dest[1] = m12 * c + m22 * s, dest[2] = b * c + a * s, dest[3] = y * c + focal * s, dest[4] = a20 * c - a10 * s, dest[5] = m22 * c - m12 * s, dest[6] = a * c - b * s, dest[7] = focal * c - y * s, dest;
  };
  /**
   * @param {!Array} result
   * @param {!Array} data
   * @param {!Array} dest
   * @return {?}
   */
  mat4.fromRotationTranslation = function(result, data, dest) {
    var i = data[0];
    var r = data[1];
    var h = data[2];
    var height = data[3];
    var size = i + i;
    var y = r + r;
    var scale = h + h;
    /** @type {number} */
    var s = i * size;
    /** @type {number} */
    var z = i * y;
    /** @type {number} */
    var dy = i * scale;
    /** @type {number} */
    var d = r * y;
    /** @type {number} */
    var x = r * scale;
    /** @type {number} */
    var w = h * scale;
    /** @type {number} */
    var offset = height * size;
    /** @type {number} */
    var sy = height * y;
    /** @type {number} */
    var v = height * scale;
    return result[0] = 1 - (d + w), result[1] = z + v, result[2] = dy - sy, result[3] = 0, result[4] = z - v, result[5] = 1 - (s + w), result[6] = x + offset, result[7] = 0, result[8] = dy + sy, result[9] = x - offset, result[10] = 1 - (s + d), result[11] = 0, result[12] = dest[0], result[13] = dest[1], result[14] = dest[2], result[15] = 1, result;
  };
  /**
   * @param {!Array} data
   * @param {!Array} o
   * @return {?}
   */
  mat4.fromQuat = function(data, o) {
    var h = o[0];
    var r = o[1];
    var i = o[2];
    var t = o[3];
    var size = h + h;
    var y = r + r;
    var s = i + i;
    /** @type {number} */
    var start = h * size;
    /** @type {number} */
    var tmp13p2 = h * y;
    /** @type {number} */
    var sy = h * s;
    /** @type {number} */
    var d = r * y;
    /** @type {number} */
    var tmp10p2 = r * s;
    /** @type {number} */
    var z = i * s;
    /** @type {number} */
    var tmp11p2 = t * size;
    /** @type {number} */
    var ty = t * y;
    /** @type {number} */
    var z1p2 = t * s;
    return data[0] = 1 - (d + z), data[1] = tmp13p2 + z1p2, data[2] = sy - ty, data[3] = 0, data[4] = tmp13p2 - z1p2, data[5] = 1 - (start + z), data[6] = tmp10p2 + tmp11p2, data[7] = 0, data[8] = sy + ty, data[9] = tmp10p2 - tmp11p2, data[10] = 1 - (start + d), data[11] = 0, data[12] = 0, data[13] = 0, data[14] = 0, data[15] = 1, data;
  };
  /**
   * @param {!Array} out
   * @param {string} previous
   * @param {string} current
   * @param {string} i
   * @param {string} d
   * @param {number} c
   * @param {number} b
   * @return {?}
   */
  mat4.frustum = function(out, previous, current, i, d, c, b) {
    /** @type {number} */
    var a = 1 / (current - previous);
    /** @type {number} */
    var scale = 1 / (d - i);
    /** @type {number} */
    var k = 1 / (c - b);
    return out[0] = 2 * c * a, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = 2 * c * scale, out[6] = 0, out[7] = 0, out[8] = (current + previous) * a, out[9] = (d + i) * scale, out[10] = (b + c) * k, out[11] = -1, out[12] = 0, out[13] = 0, out[14] = b * c * 2 * k, out[15] = 0, out;
  };
  /**
   * @param {!Array} out
   * @param {number} fovy
   * @param {number} aspect
   * @param {number} near
   * @param {number} far
   * @return {?}
   */
  mat4.perspective = function(out, fovy, aspect, near, far) {
    /** @type {number} */
    var f = 1 / Math.tan(fovy / 2);
    /** @type {number} */
    var nf = 1 / (near - far);
    return out[0] = f / aspect, out[1] = 0, out[2] = 0, out[3] = 0, out[4] = 0, out[5] = f, out[6] = 0, out[7] = 0, out[8] = 0, out[9] = 0, out[10] = (far + near) * nf, out[11] = -1, out[12] = 0, out[13] = 0, out[14] = 2 * far * near * nf, out[15] = 0, out;
  };
  /**
   * @param {!Array} left
   * @param {string} top
   * @param {string} bottom
   * @param {string} width
   * @param {string} i
   * @param {string} c
   * @param {string} s
   * @return {?}
   */
  mat4.ortho = function(left, top, bottom, width, i, c, s) {
    /** @type {number} */
    var bt = 1 / (top - bottom);
    /** @type {number} */
    var height = 1 / (width - i);
    /** @type {number} */
    var t = 1 / (c - s);
    return left[0] = -2 * bt, left[1] = 0, left[2] = 0, left[3] = 0, left[4] = 0, left[5] = -2 * height, left[6] = 0, left[7] = 0, left[8] = 0, left[9] = 0, left[10] = 2 * t, left[11] = 0, left[12] = (top + bottom) * bt, left[13] = (i + width) * height, left[14] = (s + c) * t, left[15] = 1, left;
  };
  /**
   * @param {!Array} out
   * @param {!Array} array
   * @param {!Array} args
   * @param {!Array} data
   * @return {?}
   */
  mat4.lookAt = function(out, array, args, data) {
    var c;
    var d;
    var z;
    var g;
    var s;
    var dx;
    var b;
    var a;
    var w;
    var f;
    var x = array[0];
    var y = array[1];
    var l = array[2];
    var h = data[0];
    var i = data[1];
    var r = data[2];
    var min = args[0];
    var step = args[1];
    var x1 = args[2];
    return Math.abs(x - min) < 1e-6 && Math.abs(y - step) < 1e-6 && Math.abs(l - x1) < 1e-6 ? mat4.identity(out) : (b = x - min, a = y - step, w = l - x1, f = 1 / Math.sqrt(b * b + a * a + w * w), b = b * f, a = a * f, w = w * f, c = i * w - r * a, d = r * b - h * w, z = h * a - i * b, f = Math.sqrt(c * c + d * d + z * z), f ? (f = 1 / f, c = c * f, d = d * f, z = z * f) : (c = 0, d = 0, z = 0), g = a * z - w * d, s = w * c - b * z, dx = b * d - a * c, f = Math.sqrt(g * g + s * s + dx * dx), f ? 
    (f = 1 / f, g = g * f, s = s * f, dx = dx * f) : (g = 0, s = 0, dx = 0), out[0] = c, out[1] = g, out[2] = b, out[3] = 0, out[4] = d, out[5] = s, out[6] = a, out[7] = 0, out[8] = z, out[9] = dx, out[10] = w, out[11] = 0, out[12] = -(c * x + d * y + z * l), out[13] = -(g * x + s * y + dx * l), out[14] = -(b * x + a * y + w * l), out[15] = 1, out);
  };
  /**
   * @param {!Array} min
   * @return {?}
   */
  mat4.str = function(min) {
    return "mat4(" + min[0] + ", " + min[1] + ", " + min[2] + ", " + min[3] + ", " + min[4] + ", " + min[5] + ", " + min[6] + ", " + min[7] + ", " + min[8] + ", " + min[9] + ", " + min[10] + ", " + min[11] + ", " + min[12] + ", " + min[13] + ", " + min[14] + ", " + min[15] + ")";
  };
  var mat3 = {};
  /**
   * @return {?}
   */
  mat3.create = function() {
    var message6 = new Message(9);
    return message6[0] = 1, message6[1] = 0, message6[2] = 0, message6[3] = 0, message6[4] = 1, message6[5] = 0, message6[6] = 0, message6[7] = 0, message6[8] = 1, message6;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  mat3.fromMat4 = function(out, a) {
    return out[0] = a[0], out[1] = a[1], out[2] = a[2], out[3] = a[4], out[4] = a[5], out[5] = a[6], out[6] = a[8], out[7] = a[9], out[8] = a[10], out;
  };
  /**
   * @param {!Array} o
   * @return {?}
   */
  mat3.clone = function(o) {
    var msg = new Message(9);
    return msg[0] = o[0], msg[1] = o[1], msg[2] = o[2], msg[3] = o[3], msg[4] = o[4], msg[5] = o[5], msg[6] = o[6], msg[7] = o[7], msg[8] = o[8], msg;
  };
  /**
   * @param {!Array} oldDot
   * @param {!Array} newDot
   * @return {?}
   */
  mat3.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot[2] = newDot[2], oldDot[3] = newDot[3], oldDot[4] = newDot[4], oldDot[5] = newDot[5], oldDot[6] = newDot[6], oldDot[7] = newDot[7], oldDot[8] = newDot[8], oldDot;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  mat3.identity = function(a) {
    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, a[8] = 1, a;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  mat3.transpose = function(out, a) {
    if (out === a) {
      var a1 = a[1];
      var n = a[2];
      var az = a[5];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a1;
      out[5] = a[7];
      out[6] = n;
      out[7] = az;
    } else {
      out[0] = a[0];
      out[1] = a[3];
      out[2] = a[6];
      out[3] = a[1];
      out[4] = a[4];
      out[5] = a[7];
      out[6] = a[2];
      out[7] = a[5];
      out[8] = a[8];
    }
    return out;
  };
  /**
   * @param {!Array} dest
   * @param {!Array} a
   * @return {?}
   */
  mat3.invert = function(dest, a) {
    var a12 = a[0];
    var a22 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a20 = a[4];
    var a00 = a[5];
    var a11 = a[6];
    var a21 = a[7];
    var a01 = a[8];
    /** @type {number} */
    var x = a01 * a20 - a00 * a21;
    /** @type {number} */
    var y = -a01 * a10 + a00 * a11;
    /** @type {number} */
    var z = a21 * a10 - a20 * a11;
    /** @type {number} */
    var len = a12 * x + a22 * y + a02 * z;
    return len ? (len = 1 / len, dest[0] = x * len, dest[1] = (-a01 * a22 + a02 * a21) * len, dest[2] = (a00 * a22 - a02 * a20) * len, dest[3] = y * len, dest[4] = (a01 * a12 - a02 * a11) * len, dest[5] = (-a00 * a12 + a02 * a10) * len, dest[6] = z * len, dest[7] = (-a21 * a12 + a22 * a11) * len, dest[8] = (a20 * a12 - a22 * a10) * len, dest) : null;
  };
  /**
   * @param {!Array} a
   * @param {!Array} _vertices
   * @return {?}
   */
  mat3.adjoint = function(a, _vertices) {
    var v4y = _vertices[0];
    var v4z = _vertices[1];
    var v4x = _vertices[2];
    var v1y = _vertices[3];
    var v1z = _vertices[4];
    var v1x = _vertices[5];
    var v2y = _vertices[6];
    var v2z = _vertices[7];
    var v2x = _vertices[8];
    return a[0] = v1z * v2x - v1x * v2z, a[1] = v4x * v2z - v4z * v2x, a[2] = v4z * v1x - v4x * v1z, a[3] = v1x * v2y - v1y * v2x, a[4] = v4y * v2x - v4x * v2y, a[5] = v4x * v1y - v4y * v1x, a[6] = v1y * v2z - v1z * v2y, a[7] = v4z * v2y - v4y * v2z, a[8] = v4y * v1z - v4z * v1y, a;
  };
  /**
   * @param {!Array} data
   * @return {?}
   */
  mat3.determinant = function(data) {
    var relev = data[0];
    var score = data[1];
    var passid = data[2];
    var x = data[3];
    var c = data[4];
    var b = data[5];
    var y = data[6];
    var s = data[7];
    var a = data[8];
    return relev * (a * c - b * s) + score * (-a * x + b * y) + passid * (s * x - c * y);
  };
  /**
   * @param {!Array} matrix
   * @param {!Array} args
   * @param {!Array} d
   * @return {?}
   */
  mat3.multiply = function(matrix, args, d) {
    var x1 = args[0];
    var x = args[1];
    var s = args[2];
    var x2 = args[3];
    var cos = args[4];
    var c = args[5];
    var r = args[6];
    var scale = args[7];
    var radius = args[8];
    var a21 = d[0];
    var a22 = d[1];
    var dx = d[2];
    var a11 = d[3];
    var a12 = d[4];
    var height = d[5];
    var w = d[6];
    var y = d[7];
    var dy = d[8];
    return matrix[0] = a21 * x1 + a22 * x2 + dx * r, matrix[1] = a21 * x + a22 * cos + dx * scale, matrix[2] = a21 * s + a22 * c + dx * radius, matrix[3] = a11 * x1 + a12 * x2 + height * r, matrix[4] = a11 * x + a12 * cos + height * scale, matrix[5] = a11 * s + a12 * c + height * radius, matrix[6] = w * x1 + y * x2 + dy * r, matrix[7] = w * x + y * cos + dy * scale, matrix[8] = w * s + y * c + dy * radius, matrix;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  mat3.mul = mat3.multiply;
  /**
   * @param {!Array} m
   * @param {!Array} body
   * @param {!Object} x
   * @return {?}
   */
  mat3.translate = function(m, body, x) {
    var b = body[0];
    var cos = body[1];
    var C = body[2];
    var c = body[3];
    var sin = body[4];
    var y = body[5];
    var attach = body[6];
    var m31 = body[7];
    var m32 = body[8];
    var a = x[0];
    var h = x[1];
    return m[0] = b, m[1] = cos, m[2] = C, m[3] = c, m[4] = sin, m[5] = y, m[6] = a * b + h * c + attach, m[7] = a * cos + h * sin + m31, m[8] = a * C + h * y + m32, m;
  };
  /**
   * @param {!Array} delta
   * @param {!Array} data
   * @param {?} i
   * @return {?}
   */
  mat3.rotate = function(delta, data, i) {
    var h = data[0];
    var c = data[1];
    var f = data[2];
    var g = data[3];
    var s = data[4];
    var d = data[5];
    var value = data[6];
    var type = data[7];
    var val = data[8];
    /** @type {number} */
    var a = Math.sin(i);
    /** @type {number} */
    var b = Math.cos(i);
    return delta[0] = b * h + a * g, delta[1] = b * c + a * s, delta[2] = b * f + a * d, delta[3] = b * g - a * h, delta[4] = b * s - a * c, delta[5] = b * d - a * f, delta[6] = value, delta[7] = type, delta[8] = val, delta;
  };
  /**
   * @param {!Array} p
   * @param {!Array} v
   * @param {!Object} n
   * @return {?}
   */
  mat3.scale = function(p, v, n) {
    var r = n[0];
    var i = n[1];
    return p[0] = r * v[0], p[1] = r * v[1], p[2] = r * v[2], p[3] = i * v[3], p[4] = i * v[4], p[5] = i * v[5], p[6] = v[6], p[7] = v[7], p[8] = v[8], p;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  mat3.fromMat2d = function(out, a) {
    return out[0] = a[0], out[1] = a[1], out[2] = 0, out[3] = a[2], out[4] = a[3], out[5] = 0, out[6] = a[4], out[7] = a[5], out[8] = 1, out;
  };
  /**
   * @param {!Array} data
   * @param {!Array} o
   * @return {?}
   */
  mat3.fromQuat = function(data, o) {
    var h = o[0];
    var r = o[1];
    var i = o[2];
    var t = o[3];
    var size = h + h;
    var y = r + r;
    var s = i + i;
    /** @type {number} */
    var start = h * size;
    /** @type {number} */
    var tmp13p2 = h * y;
    /** @type {number} */
    var sy = h * s;
    /** @type {number} */
    var d = r * y;
    /** @type {number} */
    var tmp10p2 = r * s;
    /** @type {number} */
    var z = i * s;
    /** @type {number} */
    var tmp11p2 = t * size;
    /** @type {number} */
    var ty = t * y;
    /** @type {number} */
    var z1p2 = t * s;
    return data[0] = 1 - (d + z), data[3] = tmp13p2 + z1p2, data[6] = sy - ty, data[1] = tmp13p2 - z1p2, data[4] = 1 - (start + z), data[7] = tmp10p2 + tmp11p2, data[2] = sy + ty, data[5] = tmp10p2 - tmp11p2, data[8] = 1 - (start + d), data;
  };
  /**
   * @param {!Array} out
   * @param {!Array} args
   * @return {?}
   */
  mat3.normalFromMat4 = function(out, args) {
    var z = args[0];
    var width = args[1];
    var targetWidth = args[2];
    var x = args[3];
    var n = args[4];
    var s = args[5];
    var length = args[6];
    var r = args[7];
    var x2 = args[8];
    var x1 = args[9];
    var y2 = args[10];
    var y = args[11];
    var c = args[12];
    var a = args[13];
    var b = args[14];
    var w = args[15];
    /** @type {number} */
    var aspectRatio = z * s - width * n;
    /** @type {number} */
    var mult = z * length - targetWidth * n;
    /** @type {number} */
    var i = z * r - x * n;
    /** @type {number} */
    var k = width * length - targetWidth * s;
    /** @type {number} */
    var g = width * r - x * s;
    /** @type {number} */
    var h = targetWidth * r - x * length;
    /** @type {number} */
    var l = x2 * a - x1 * c;
    /** @type {number} */
    var base = x2 * b - y2 * c;
    /** @type {number} */
    var t = x2 * w - y * c;
    /** @type {number} */
    var scale = x1 * b - y2 * a;
    /** @type {number} */
    var targetHeight = x1 * w - y * a;
    /** @type {number} */
    var height = y2 * w - y * b;
    /** @type {number} */
    var det = aspectRatio * height - mult * targetHeight + i * scale + k * t - g * base + h * l;
    return det ? (det = 1 / det, out[0] = (s * height - length * targetHeight + r * scale) * det, out[1] = (length * t - n * height - r * base) * det, out[2] = (n * targetHeight - s * t + r * l) * det, out[3] = (targetWidth * targetHeight - width * height - x * scale) * det, out[4] = (z * height - targetWidth * t + x * base) * det, out[5] = (width * t - z * targetHeight - x * l) * det, out[6] = (a * h - b * g + w * k) * det, out[7] = (b * i - c * h - w * mult) * det, out[8] = (c * g - a * i + w * 
    aspectRatio) * det, out) : null;
  };
  /**
   * @param {!Array} min
   * @return {?}
   */
  mat3.str = function(min) {
    return "mat3(" + min[0] + ", " + min[1] + ", " + min[2] + ", " + min[3] + ", " + min[4] + ", " + min[5] + ", " + min[6] + ", " + min[7] + ", " + min[8] + ")";
  };
  var vec3 = {};
  /**
   * @return {?}
   */
  vec3.create = function() {
    var message6 = new Message(3);
    return message6[0] = 0, message6[1] = 0, message6[2] = 0, message6;
  };
  /**
   * @param {!Object} o
   * @return {?}
   */
  vec3.clone = function(o) {
    var msg = new Message(3);
    return msg[0] = o[0], msg[1] = o[1], msg[2] = o[2], msg;
  };
  /**
   * @param {number} x
   * @param {number} w
   * @param {number} r
   * @return {?}
   */
  vec3.fromValues = function(x, w, r) {
    var o = new Message(3);
    return o[0] = x, o[1] = w, o[2] = r, o;
  };
  /**
   * @param {!Array} oldDot
   * @param {!Array} newDot
   * @return {?}
   */
  vec3.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot[2] = newDot[2], oldDot;
  };
  /**
   * @param {string} h
   * @param {number} o
   * @param {number} f
   * @param {number} r
   * @return {?}
   */
  vec3.set = function(h, o, f, r) {
    return h[0] = o, h[1] = f, h[2] = r, h;
  };
  /**
   * @param {string} name
   * @param {!Array} t
   * @param {!Array} u
   * @return {?}
   */
  vec3.add = function(name, t, u) {
    return name[0] = t[0] + u[0], name[1] = t[1] + u[1], name[2] = t[2] + u[2], name;
  };
  /**
   * @param {!Array} substraction
   * @param {!Array} subtractor
   * @param {!Array} subtractee
   * @return {?}
   */
  vec3.subtract = function(substraction, subtractor, subtractee) {
    return substraction[0] = subtractor[0] - subtractee[0], substraction[1] = subtractor[1] - subtractee[1], substraction[2] = subtractor[2] - subtractee[2], substraction;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  vec3.sub = vec3.subtract;
  /**
   * @param {!Array} transform
   * @param {!Array} matrix
   * @param {!Array} x
   * @return {?}
   */
  vec3.multiply = function(transform, matrix, x) {
    return transform[0] = matrix[0] * x[0], transform[1] = matrix[1] * x[1], transform[2] = matrix[2] * x[2], transform;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  vec3.mul = vec3.multiply;
  /**
   * @param {!Array} value
   * @param {!Array} vecA
   * @param {!Array} vecB
   * @return {?}
   */
  vec3.divide = function(value, vecA, vecB) {
    return value[0] = vecA[0] / vecB[0], value[1] = vecA[1] / vecB[1], value[2] = vecA[2] / vecB[2], value;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  vec3.div = vec3.divide;
  /**
   * @param {!Object} post
   * @param {!Object} x
   * @param {!Array} arr
   * @return {?}
   */
  vec3.min = function(post, x, arr) {
    return post[0] = Math.min(x[0], arr[0]), post[1] = Math.min(x[1], arr[1]), post[2] = Math.min(x[2], arr[2]), post;
  };
  /**
   * @param {?} elem
   * @param {?} array
   * @param {!Array} limit
   * @return {?}
   */
  vec3.max = function(elem, array, limit) {
    return elem[0] = Math.max(array[0], limit[0]), elem[1] = Math.max(array[1], limit[1]), elem[2] = Math.max(array[2], limit[2]), elem;
  };
  /**
   * @param {!Array} target
   * @param {!Array} a
   * @param {!Object} scalar
   * @return {?}
   */
  vec3.scale = function(target, a, scalar) {
    return target[0] = a[0] * scalar, target[1] = a[1] * scalar, target[2] = a[2] * scalar, target;
  };
  /**
   * @param {!Array} a
   * @param {!Array} out
   * @param {!Array} v1
   * @param {?} v2
   * @return {?}
   */
  vec3.scaleAndAdd = function(a, out, v1, v2) {
    return a[0] = out[0] + v1[0] * v2, a[1] = out[1] + v1[1] * v2, a[2] = out[2] + v1[2] * v2, a;
  };
  /**
   * @param {!Array} touchTrackA
   * @param {!Array} touchTrackB
   * @return {?}
   */
  vec3.distance = function(touchTrackA, touchTrackB) {
    /** @type {number} */
    var lightI = touchTrackB[0] - touchTrackA[0];
    /** @type {number} */
    var lightJ = touchTrackB[1] - touchTrackA[1];
    /** @type {number} */
    var ab1 = touchTrackB[2] - touchTrackA[2];
    return Math.sqrt(lightI * lightI + lightJ * lightJ + ab1 * ab1);
  };
  /** @type {function(!Array, !Array): ?} */
  vec3.dist = vec3.distance;
  /**
   * @param {!Array} a
   * @param {!Array} b
   * @return {?}
   */
  vec3.squaredDistance = function(a, b) {
    /** @type {number} */
    var lightI = b[0] - a[0];
    /** @type {number} */
    var lightJ = b[1] - a[1];
    /** @type {number} */
    var ab1 = b[2] - a[2];
    return lightI * lightI + lightJ * lightJ + ab1 * ab1;
  };
  /** @type {function(!Array, !Array): ?} */
  vec3.sqrDist = vec3.squaredDistance;
  /**
   * @param {!Object} s
   * @return {?}
   */
  vec3.length = function(s) {
    var lightI = s[0];
    var lightJ = s[1];
    var n = s[2];
    return Math.sqrt(lightI * lightI + lightJ * lightJ + n * n);
  };
  /** @type {function(!Object): ?} */
  vec3.len = vec3.length;
  /**
   * @param {!Array} a
   * @return {?}
   */
  vec3.squaredLength = function(a) {
    var lightI = a[0];
    var lightJ = a[1];
    var c2 = a[2];
    return lightI * lightI + lightJ * lightJ + c2 * c2;
  };
  /** @type {function(!Array): ?} */
  vec3.sqrLen = vec3.squaredLength;
  /**
   * @param {!Array} fn
   * @param {!Array} a
   * @return {?}
   */
  vec3.negate = function(fn, a) {
    return fn[0] = -a[0], fn[1] = -a[1], fn[2] = -a[2], fn;
  };
  /**
   * @param {!Object} data
   * @param {!Array} value
   * @return {?}
   */
  vec3.normalize = function(data, value) {
    var c = value[0];
    var d = value[1];
    var tempValue = value[2];
    /** @type {number} */
    var n = c * c + d * d + tempValue * tempValue;
    return n > 0 && (n = 1 / Math.sqrt(n), data[0] = value[0] * n, data[1] = value[1] * n, data[2] = value[2] * n), data;
  };
  /**
   * @param {!Array} quat_1
   * @param {!Array} quat_2
   * @return {?}
   */
  vec3.dot = function(quat_1, quat_2) {
    return quat_1[0] * quat_2[0] + quat_1[1] * quat_2[1] + quat_1[2] * quat_2[2];
  };
  /**
   * @param {!Array} cell
   * @param {!Array} v
   * @param {!Array} vec2
   * @return {?}
   */
  vec3.cross = function(cell, v, vec2) {
    var z = v[0];
    var y = v[1];
    var x = v[2];
    var z2 = vec2[0];
    var y2 = vec2[1];
    var x2 = vec2[2];
    return cell[0] = y * x2 - x * y2, cell[1] = x * z2 - z * x2, cell[2] = z * y2 - y * z2, cell;
  };
  /**
   * @param {!Array} result
   * @param {!Array} r
   * @param {!Array} p
   * @param {number} t
   * @return {?}
   */
  vec3.lerp = function(result, r, p, t) {
    var y = r[0];
    var x = r[1];
    var s = r[2];
    return result[0] = y + t * (p[0] - y), result[1] = x + t * (p[1] - x), result[2] = s + t * (p[2] - s), result;
  };
  /**
   * @param {!Array} out
   * @param {number} scale
   * @return {?}
   */
  vec3.random = function(out, scale) {
    scale = scale || 1;
    /** @type {number} */
    var rads = 2 * parseFloat() * Math.PI;
    /** @type {number} */
    var y = 2 * parseFloat() - 1;
    /** @type {number} */
    var x = Math.sqrt(1 - y * y) * scale;
    return out[0] = Math.cos(rads) * x, out[1] = Math.sin(rads) * x, out[2] = y * scale, out;
  };
  /**
   * @param {!Array} m
   * @param {!Array} offset
   * @param {!Array} out
   * @return {?}
   */
  vec3.transformMat4 = function(m, offset, out) {
    var ox = offset[0];
    var oy = offset[1];
    var oz = offset[2];
    return m[0] = out[0] * ox + out[4] * oy + out[8] * oz + out[12], m[1] = out[1] * ox + out[5] * oy + out[9] * oz + out[13], m[2] = out[2] * ox + out[6] * oy + out[10] * oz + out[14], m;
  };
  /**
   * @param {!Array} _wid_attr
   * @param {!Array} data
   * @param {!Array} weights
   * @return {?}
   */
  vec3.transformMat3 = function(_wid_attr, data, weights) {
    var score = data[0];
    var el = data[1];
    var availSpace = data[2];
    return _wid_attr[0] = score * weights[0] + el * weights[3] + availSpace * weights[6], _wid_attr[1] = score * weights[1] + el * weights[4] + availSpace * weights[7], _wid_attr[2] = score * weights[2] + el * weights[5] + availSpace * weights[8], _wid_attr;
  };
  /**
   * @param {!Array} q
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  vec3.transformQuat = function(q, out, a) {
    var t = out[0];
    var s = out[1];
    var sin = out[2];
    var y = a[0];
    var x = a[1];
    var h = a[2];
    var w = a[3];
    /** @type {number} */
    var i = w * t + x * sin - h * s;
    /** @type {number} */
    var r = w * s + h * t - y * sin;
    /** @type {number} */
    var Y = w * sin + y * s - x * t;
    /** @type {number} */
    var c = -y * t - x * s - h * sin;
    return q[0] = i * w + c * -y + r * -h - Y * -x, q[1] = r * w + c * -x + Y * -y - i * -h, q[2] = Y * w + c * -h + i * -x - r * -y, q;
  };
  vec3.forEach = function() {
    var o = vec3.create();
    return function(data, i, margin, limit, n, s) {
      var x;
      var end;
      if (!i) {
        /** @type {number} */
        i = 3;
      }
      if (!margin) {
        /** @type {number} */
        margin = 0;
      }
      end = limit ? Math.min(limit * i + margin, data.length) : data.length;
      /** @type {number} */
      x = margin;
      for (; x < end; x = x + i) {
        o[0] = data[x];
        o[1] = data[x + 1];
        o[2] = data[x + 2];
        n(o, o, s);
        data[x] = o[0];
        data[x + 1] = o[1];
        data[x + 2] = o[2];
      }
      return data;
    };
  }();
  /**
   * @param {!Array} min
   * @return {?}
   */
  vec3.str = function(min) {
    return "vec3(" + min[0] + ", " + min[1] + ", " + min[2] + ")";
  };
  /**
   * @param {!Array} out
   * @param {!Array} v
   * @param {?} s
   * @return {?}
   */
  vec3.multiplyScalar = function(out, v, s) {
    return out[0] = v[0] * s, out[1] = v[1] * s, out[2] = v[2] * s, out;
  };
  /**
   * @param {!Object} name
   * @return {?}
   */
  vec3.clear = function(name) {
    return name[0] = 0, name[1] = 0, name[2] = 0, name;
  };
  /**
   * @param {!Array} name
   * @param {!Array} data
   * @param {?} value
   * @param {?} rel
   * @param {?} title
   * @return {?}
   */
  vec3.addXYZ = function(name, data, value, rel, title) {
    return name[0] = data[0] + value, name[1] = data[1] + rel, name[2] = data[2] + title, name;
  };
  var vec4 = {};
  /**
   * @return {?}
   */
  vec4.create = function() {
    var message6 = new Message(4);
    return message6[0] = 0, message6[1] = 0, message6[2] = 0, message6[3] = 0, message6;
  };
  /**
   * @param {!Object} o
   * @return {?}
   */
  vec4.clone = function(o) {
    var msg = new Message(4);
    return msg[0] = o[0], msg[1] = o[1], msg[2] = o[2], msg[3] = o[3], msg;
  };
  /**
   * @param {number} w
   * @param {number} r
   * @param {number} s
   * @param {?} x
   * @return {?}
   */
  vec4.fromValues = function(w, r, s, x) {
    var dst = new Message(4);
    return dst[0] = w, dst[1] = r, dst[2] = s, dst[3] = x, dst;
  };
  /**
   * @param {!Array} oldDot
   * @param {!Array} newDot
   * @return {?}
   */
  vec4.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot[2] = newDot[2], oldDot[3] = newDot[3], oldDot;
  };
  /**
   * @param {string} h
   * @param {number} o
   * @param {number} f
   * @param {number} r
   * @param {?} g
   * @return {?}
   */
  vec4.set = function(h, o, f, r, g) {
    return h[0] = o, h[1] = f, h[2] = r, h[3] = g, h;
  };
  /**
   * @param {string} name
   * @param {!Array} t
   * @param {!Array} u
   * @return {?}
   */
  vec4.add = function(name, t, u) {
    return name[0] = t[0] + u[0], name[1] = t[1] + u[1], name[2] = t[2] + u[2], name[3] = t[3] + u[3], name;
  };
  /**
   * @param {!Array} substraction
   * @param {!Array} subtractor
   * @param {!Array} subtractee
   * @return {?}
   */
  vec4.subtract = function(substraction, subtractor, subtractee) {
    return substraction[0] = subtractor[0] - subtractee[0], substraction[1] = subtractor[1] - subtractee[1], substraction[2] = subtractor[2] - subtractee[2], substraction[3] = subtractor[3] - subtractee[3], substraction;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  vec4.sub = vec4.subtract;
  /**
   * @param {!Array} transform
   * @param {!Array} matrix
   * @param {!Array} x
   * @return {?}
   */
  vec4.multiply = function(transform, matrix, x) {
    return transform[0] = matrix[0] * x[0], transform[1] = matrix[1] * x[1], transform[2] = matrix[2] * x[2], transform[3] = matrix[3] * x[3], transform;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  vec4.mul = vec4.multiply;
  /**
   * @param {!Array} value
   * @param {!Array} vecA
   * @param {!Array} vecB
   * @return {?}
   */
  vec4.divide = function(value, vecA, vecB) {
    return value[0] = vecA[0] / vecB[0], value[1] = vecA[1] / vecB[1], value[2] = vecA[2] / vecB[2], value[3] = vecA[3] / vecB[3], value;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  vec4.div = vec4.divide;
  /**
   * @param {!Object} post
   * @param {!Object} x
   * @param {!Array} arr
   * @return {?}
   */
  vec4.min = function(post, x, arr) {
    return post[0] = Math.min(x[0], arr[0]), post[1] = Math.min(x[1], arr[1]), post[2] = Math.min(x[2], arr[2]), post[3] = Math.min(x[3], arr[3]), post;
  };
  /**
   * @param {!Object} elem
   * @param {!Object} array
   * @param {!Array} limit
   * @return {?}
   */
  vec4.max = function(elem, array, limit) {
    return elem[0] = Math.max(array[0], limit[0]), elem[1] = Math.max(array[1], limit[1]), elem[2] = Math.max(array[2], limit[2]), elem[3] = Math.max(array[3], limit[3]), elem;
  };
  /**
   * @param {!Array} target
   * @param {!Array} a
   * @param {!Object} scalar
   * @return {?}
   */
  vec4.scale = function(target, a, scalar) {
    return target[0] = a[0] * scalar, target[1] = a[1] * scalar, target[2] = a[2] * scalar, target[3] = a[3] * scalar, target;
  };
  /**
   * @param {!Array} a
   * @param {!Array} out
   * @param {!Array} v1
   * @param {?} v2
   * @return {?}
   */
  vec4.scaleAndAdd = function(a, out, v1, v2) {
    return a[0] = out[0] + v1[0] * v2, a[1] = out[1] + v1[1] * v2, a[2] = out[2] + v1[2] * v2, a[3] = out[3] + v1[3] * v2, a;
  };
  /**
   * @param {!Array} touchTrackA
   * @param {!Array} touchTrackB
   * @return {?}
   */
  vec4.distance = function(touchTrackA, touchTrackB) {
    /** @type {number} */
    var lightI = touchTrackB[0] - touchTrackA[0];
    /** @type {number} */
    var lightJ = touchTrackB[1] - touchTrackA[1];
    /** @type {number} */
    var ab1 = touchTrackB[2] - touchTrackA[2];
    /** @type {number} */
    var sxy = touchTrackB[3] - touchTrackA[3];
    return Math.sqrt(lightI * lightI + lightJ * lightJ + ab1 * ab1 + sxy * sxy);
  };
  /** @type {function(!Array, !Array): ?} */
  vec4.dist = vec4.distance;
  /**
   * @param {!Array} a
   * @param {!Array} b
   * @return {?}
   */
  vec4.squaredDistance = function(a, b) {
    /** @type {number} */
    var lightI = b[0] - a[0];
    /** @type {number} */
    var lightJ = b[1] - a[1];
    /** @type {number} */
    var ab1 = b[2] - a[2];
    /** @type {number} */
    var sxy = b[3] - a[3];
    return lightI * lightI + lightJ * lightJ + ab1 * ab1 + sxy * sxy;
  };
  /** @type {function(!Array, !Array): ?} */
  vec4.sqrDist = vec4.squaredDistance;
  /**
   * @param {!Object} vec
   * @return {?}
   */
  vec4.length = function(vec) {
    var lightI = vec[0];
    var lightJ = vec[1];
    var y = vec[2];
    var z = vec[3];
    return Math.sqrt(lightI * lightI + lightJ * lightJ + y * y + z * z);
  };
  /** @type {function(!Object): ?} */
  vec4.len = vec4.length;
  /**
   * @param {!Array} a
   * @return {?}
   */
  vec4.squaredLength = function(a) {
    var lightI = a[0];
    var lightJ = a[1];
    var c2 = a[2];
    var c1 = a[3];
    return lightI * lightI + lightJ * lightJ + c2 * c2 + c1 * c1;
  };
  /** @type {function(!Array): ?} */
  vec4.sqrLen = vec4.squaredLength;
  /**
   * @param {!Array} fn
   * @param {!Array} a
   * @return {?}
   */
  vec4.negate = function(fn, a) {
    return fn[0] = -a[0], fn[1] = -a[1], fn[2] = -a[2], fn[3] = -a[3], fn;
  };
  /**
   * @param {string} a
   * @param {!Array} m
   * @return {?}
   */
  vec4.normalize = function(a, m) {
    var w = m[0];
    var x = m[1];
    var Y = m[2];
    var a4 = m[3];
    /** @type {number} */
    var f = w * w + x * x + Y * Y + a4 * a4;
    return f > 0 && (f = 1 / Math.sqrt(f), a[0] = m[0] * f, a[1] = m[1] * f, a[2] = m[2] * f, a[3] = m[3] * f), a;
  };
  /**
   * @param {!Array} quat_1
   * @param {!Array} quat_2
   * @return {?}
   */
  vec4.dot = function(quat_1, quat_2) {
    return quat_1[0] * quat_2[0] + quat_1[1] * quat_2[1] + quat_1[2] * quat_2[2] + quat_1[3] * quat_2[3];
  };
  /**
   * @param {!Array} result
   * @param {!Array} r
   * @param {!Array} p
   * @param {number} v
   * @return {?}
   */
  vec4.lerp = function(result, r, p, v) {
    var i = r[0];
    var b = r[1];
    var s = r[2];
    var y = r[3];
    return result[0] = i + v * (p[0] - i), result[1] = b + v * (p[1] - b), result[2] = s + v * (p[2] - s), result[3] = y + v * (p[3] - y), result;
  };
  /**
   * @param {!Array} v
   * @param {!Object} n
   * @return {?}
   */
  vec4.random = function(v, n) {
    return n = n || 1, v[0] = parseFloat(), v[1] = parseFloat(), v[2] = parseFloat(), v[3] = parseFloat(), vec4.normalize(v, v), vec4.scale(v, v, n), v;
  };
  /**
   * @param {!Array} a
   * @param {!Array} m
   * @param {!Array} out
   * @return {?}
   */
  vec4.transformMat4 = function(a, m, out) {
    var ox = m[0];
    var oy = m[1];
    var x = m[2];
    var newVersion = m[3];
    return a[0] = out[0] * ox + out[4] * oy + out[8] * x + out[12] * newVersion, a[1] = out[1] * ox + out[5] * oy + out[9] * x + out[13] * newVersion, a[2] = out[2] * ox + out[6] * oy + out[10] * x + out[14] * newVersion, a[3] = out[3] * ox + out[7] * oy + out[11] * x + out[15] * newVersion, a;
  };
  /**
   * @param {!Array} q
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  vec4.transformQuat = function(q, out, a) {
    var t = out[0];
    var s = out[1];
    var sin = out[2];
    var y = a[0];
    var x = a[1];
    var h = a[2];
    var w = a[3];
    /** @type {number} */
    var i = w * t + x * sin - h * s;
    /** @type {number} */
    var r = w * s + h * t - y * sin;
    /** @type {number} */
    var Y = w * sin + y * s - x * t;
    /** @type {number} */
    var c = -y * t - x * s - h * sin;
    return q[0] = i * w + c * -y + r * -h - Y * -x, q[1] = r * w + c * -x + Y * -y - i * -h, q[2] = Y * w + c * -h + i * -x - r * -y, q;
  };
  vec4.forEach = function() {
    var o = vec4.create();
    return function(data, i, margin, limit, n, s) {
      var x;
      var end;
      if (!i) {
        /** @type {number} */
        i = 4;
      }
      if (!margin) {
        /** @type {number} */
        margin = 0;
      }
      end = limit ? Math.min(limit * i + margin, data.length) : data.length;
      /** @type {number} */
      x = margin;
      for (; x < end; x = x + i) {
        o[0] = data[x];
        o[1] = data[x + 1];
        o[2] = data[x + 2];
        o[3] = data[x + 3];
        n(o, o, s);
        data[x] = o[0];
        data[x + 1] = o[1];
        data[x + 2] = o[2];
        data[x + 3] = o[3];
      }
      return data;
    };
  }();
  /**
   * @param {!Array} min
   * @return {?}
   */
  vec4.str = function(min) {
    return "vec4(" + min[0] + ", " + min[1] + ", " + min[2] + ", " + min[3] + ")";
  };
  var quat = {};
  /**
   * @return {?}
   */
  quat.create = function() {
    var message6 = new Message(4);
    return message6[0] = 0, message6[1] = 0, message6[2] = 0, message6[3] = 1, message6;
  };
  quat.rotationTo = function() {
    var v = vec3.create();
    var result = vec3.fromValues(1, 0, 0);
    var norm = vec3.fromValues(0, 1, 0);
    return function(out, b, dir) {
      var val = vec3.dot(b, dir);
      return val < -.999999 ? (vec3.cross(v, result, b), vec3.length(v) < 1e-6 && vec3.cross(v, norm, b), vec3.normalize(v, v), quat.setAxisAngle(out, v, Math.PI), out) : val > .999999 ? (out[0] = 0, out[1] = 0, out[2] = 0, out[3] = 1, out) : (vec3.cross(v, b, dir), out[0] = v[0], out[1] = v[1], out[2] = v[2], out[3] = 1 + val, quat.normalize(out, out));
    };
  }();
  quat.setAxes = function() {
    var initial = mat3.create();
    return function(out, originalStyle, ruleMap, buses) {
      return initial[0] = ruleMap[0], initial[3] = ruleMap[1], initial[6] = ruleMap[2], initial[1] = buses[0], initial[4] = buses[1], initial[7] = buses[2], initial[2] = originalStyle[0], initial[5] = originalStyle[1], initial[8] = originalStyle[2], quat.normalize(out, quat.fromMat3(out, initial));
    };
  }();
  /** @type {function(!Object): ?} */
  quat.clone = vec4.clone;
  /** @type {function(number, number, number, ?): ?} */
  quat.fromValues = vec4.fromValues;
  /** @type {function(!Array, !Array): ?} */
  quat.copy = vec4.copy;
  /** @type {function(string, number, number, number, ?): ?} */
  quat.set = vec4.set;
  /**
   * @param {!Array} a
   * @return {?}
   */
  quat.identity = function(a) {
    return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
  };
  /**
   * @param {!Array} out
   * @param {!Array} axis
   * @param {number} rad
   * @return {?}
   */
  quat.setAxisAngle = function(out, axis, rad) {
    /** @type {number} */
    rad = rad * .5;
    /** @type {number} */
    var s = Math.sin(rad);
    return out[0] = s * axis[0], out[1] = s * axis[1], out[2] = s * axis[2], out[3] = Math.cos(rad), out;
  };
  /** @type {function(string, !Array, !Array): ?} */
  quat.add = vec4.add;
  /**
   * @param {!Array} str
   * @param {!Array} e
   * @param {!Array} x
   * @return {?}
   */
  quat.multiply = function(str, e, x) {
    var b = e[0];
    var r = e[1];
    var y = e[2];
    var a = e[3];
    var d = x[0];
    var f = x[1];
    var s = x[2];
    var c = x[3];
    return str[0] = b * c + a * d + r * s - y * f, str[1] = r * c + a * f + y * d - b * s, str[2] = y * c + a * s + b * f - r * d, str[3] = a * c - b * d - r * f - y * s, str;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  quat.mul = quat.multiply;
  /** @type {function(!Array, !Array, !Object): ?} */
  quat.scale = vec4.scale;
  /**
   * @param {!Array} m
   * @param {!Array} a
   * @param {number} n
   * @return {?}
   */
  quat.rotateX = function(m, a, n) {
    /** @type {number} */
    n = n * .5;
    var a10 = a[0];
    var y = a[1];
    var x = a[2];
    var a20 = a[3];
    /** @type {number} */
    var s = Math.sin(n);
    /** @type {number} */
    var c = Math.cos(n);
    return m[0] = a10 * c + a20 * s, m[1] = y * c + x * s, m[2] = x * c - y * s, m[3] = a20 * c - a10 * s, m;
  };
  /**
   * @param {!Array} dest
   * @param {!Array} mat
   * @param {number} angle
   * @return {?}
   */
  quat.rotateY = function(dest, mat, angle) {
    /** @type {number} */
    angle = angle * .5;
    var a10 = mat[0];
    var a21 = mat[1];
    var a00 = mat[2];
    var a20 = mat[3];
    /** @type {number} */
    var s = Math.sin(angle);
    /** @type {number} */
    var c = Math.cos(angle);
    return dest[0] = a10 * c - a00 * s, dest[1] = a21 * c + a20 * s, dest[2] = a00 * c + a10 * s, dest[3] = a20 * c - a21 * s, dest;
  };
  /**
   * @param {!Array} dest
   * @param {!Array} mat
   * @param {number} angle
   * @return {?}
   */
  quat.rotateZ = function(dest, mat, angle) {
    /** @type {number} */
    angle = angle * .5;
    var a10 = mat[0];
    var a20 = mat[1];
    var a00 = mat[2];
    var a01 = mat[3];
    /** @type {number} */
    var s = Math.sin(angle);
    /** @type {number} */
    var c = Math.cos(angle);
    return dest[0] = a10 * c + a20 * s, dest[1] = a20 * c - a10 * s, dest[2] = a00 * c + a01 * s, dest[3] = a01 * c - a00 * s, dest;
  };
  /**
   * @param {!Array} a
   * @param {!Array} out
   * @return {?}
   */
  quat.calculateW = function(a, out) {
    var e = out[0];
    var n = out[1];
    var t = out[2];
    return a[0] = e, a[1] = n, a[2] = t, a[3] = -Math.sqrt(Math.abs(1 - e * e - n * n - t * t)), a;
  };
  /** @type {function(!Array, !Array): ?} */
  quat.dot = vec4.dot;
  /** @type {function(!Array, !Array, !Array, number): ?} */
  quat.lerp = vec4.lerp;
  /**
   * @param {!Array} end
   * @param {!Array} result
   * @param {!Array} data
   * @param {number} r
   * @return {?}
   */
  quat.slerp = function(end, result, data, r) {
    var f;
    var val;
    var g;
    var a;
    var b;
    var x = result[0];
    var e = result[1];
    var p = result[2];
    var c = result[3];
    var y = data[0];
    var z = data[1];
    var q = data[2];
    var d = data[3];
    return val = x * y + e * z + p * q + c * d, val < 0 && (val = -val, y = -y, z = -z, q = -q, d = -d), 1 - val > 1e-6 ? (f = Math.acos(val), g = Math.sin(f), a = Math.sin((1 - r) * f) / g, b = Math.sin(r * f) / g) : (a = 1 - r, b = r), end[0] = a * x + b * y, end[1] = a * e + b * z, end[2] = a * p + b * q, end[3] = a * c + b * d, end;
  };
  /**
   * @param {!Array} array
   * @param {!Array} value
   * @return {?}
   */
  quat.invert = function(array, value) {
    var lightI = value[0];
    var lightJ = value[1];
    var tempValue = value[2];
    var x = value[3];
    /** @type {number} */
    var width = lightI * lightI + lightJ * lightJ + tempValue * tempValue + x * x;
    /** @type {number} */
    var sx = width ? 1 / width : 0;
    return array[0] = -lightI * sx, array[1] = -lightJ * sx, array[2] = -tempValue * sx, array[3] = x * sx, array;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  quat.conjugate = function(out, a) {
    return out[0] = -a[0], out[1] = -a[1], out[2] = -a[2], out[3] = a[3], out;
  };
  /** @type {function(!Object): ?} */
  quat.length = vec4.length;
  /** @type {function(!Object): ?} */
  quat.len = quat.length;
  /** @type {function(!Array): ?} */
  quat.squaredLength = vec4.squaredLength;
  /** @type {function(!Array): ?} */
  quat.sqrLen = quat.squaredLength;
  /** @type {function(string, !Array): ?} */
  quat.normalize = vec4.normalize;
  /**
   * @param {!Array} out
   * @param {!Array} x
   * @return {?}
   */
  quat.fromMat3 = function(out, x) {
    var det;
    var xLen = x[0] + x[4] + x[8];
    if (xLen > 0) {
      /** @type {number} */
      det = Math.sqrt(xLen + 1);
      /** @type {number} */
      out[3] = .5 * det;
      /** @type {number} */
      det = .5 / det;
      /** @type {number} */
      out[0] = (x[7] - x[5]) * det;
      /** @type {number} */
      out[1] = (x[2] - x[6]) * det;
      /** @type {number} */
      out[2] = (x[3] - x[1]) * det;
    } else {
      /** @type {number} */
      var b = 0;
      if (x[4] > x[0]) {
        /** @type {number} */
        b = 1;
      }
      if (x[8] > x[3 * b + b]) {
        /** @type {number} */
        b = 2;
      }
      /** @type {number} */
      var t = (b + 1) % 3;
      /** @type {number} */
      var a = (b + 2) % 3;
      /** @type {number} */
      det = Math.sqrt(x[3 * b + b] - x[3 * t + t] - x[3 * a + a] + 1);
      /** @type {number} */
      out[b] = .5 * det;
      /** @type {number} */
      det = .5 / det;
      /** @type {number} */
      out[3] = (x[3 * a + t] - x[3 * t + a]) * det;
      /** @type {number} */
      out[t] = (x[3 * t + b] + x[3 * b + t]) * det;
      /** @type {number} */
      out[a] = (x[3 * a + b] + x[3 * b + a]) * det;
    }
    return out;
  };
  /**
   * @param {!Array} min
   * @return {?}
   */
  quat.str = function(min) {
    return "quat(" + min[0] + ", " + min[1] + ", " + min[2] + ", " + min[3] + ")";
  };
  var url = function() {
    /**
     * @return {undefined}
     */
    function update() {
      callback(this, update);
      this.position = vec3.create();
      this.rotation = vec3.create();
      this.scale = vec3.set(vec3.create(), 1, 1, 1);
      this.up = vec3.set(vec3.create(), 0, 1, 0);
      /** @type {null} */
      this.lookAt = null;
      this.matrix = mat4.create();
      this.worldMatrix = mat4.create();
      /** @type {null} */
      this.quaternion = null;
      this._quaternion = quat.create();
      this.inverseWorldMatrix = mat4.create();
    }
    return _createClass(update, [{
      key : "render",
      value : function() {
        this.updateMatrix();
        this.updateWorldMatrix();
      }
    }, {
      key : "updateMatrix",
      value : function() {
        mat4.identity(this.matrix);
        var m = mat4.create();
        if (this.quaternion ? mat4.fromRotationTranslation(this.matrix, this.quaternion, this.position) : (mat4.translate(this.matrix, this.matrix, this.position), mat4.rotateX(m, m, this.rotation[0]), mat4.rotateY(m, m, this.rotation[1]), mat4.rotateZ(m, m, this.rotation[2])), null !== this.lookAt) {
          var transform = mat4.create();
          mat4.lookAt(transform, this.position, this.lookAt, this.up);
          var out = mat3.create();
          mat3.normalFromMat4(out, transform);
          quat.fromMat3(this._quaternion, out);
          var r = mat4.create();
          mat4.invert(r, transform);
          mat4.multiply(m, m, r);
        }
        mat4.multiply(this.matrix, this.matrix, m);
        mat4.scale(this.matrix, this.matrix, this.scale);
      }
    }, {
      key : "updateWorldMatrix",
      value : function() {
        if (this.parent) {
          mat4.multiply(this.worldMatrix, this.matrix, this.parent.worldMatrix);
        } else {
          this.worldMatrix = this.matrix;
        }
        mat4.invert(this.inverseWorldMatrix, this.worldMatrix);
      }
    }]), update;
  }();
  var html = function(t) {
    /**
     * @return {?}
     */
    function e() {
      callback(this, e);
      var parent = $(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return parent.visible = true, parent.parent = null, parent.children = [], parent;
    }
    return _inherits(e, t), _createClass(e, [{
      key : "add",
      value : function(name) {
        /** @type {number} */
        var i = 0;
        var l = this.children.length;
        for (; i < l && this.children[i] != name; i++) {
        }
        this.children.push(name);
        name.parent = this;
      }
    }, {
      key : "removeChild",
      value : function(name) {
        /** @type {number} */
        var i = 0;
        var l = this.children.length;
        for (; i < l; i++) {
          if (this.children[i] == name) {
            /** @type {null} */
            name.parent = null;
            this.children.splice(i, 1);
            break;
          }
        }
      }
    }, {
      key : "destroy",
      value : function() {
        /** @type {number} */
        var l = 0;
        var i = this.children.length;
        for (; l < i; l++) {
          this.children[l].destroy();
        }
        if (null !== this.parent) {
          this.parent.removeChild(this);
        }
      }
    }, {
      key : "render",
      value : function(name) {
        spinnerModifer(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this);
        /** @type {number} */
        var l = 0;
        var i = this.children.length;
        for (; l < i; l++) {
          if (this.children[l].visible) {
            this.children[l].render(name);
          }
        }
      }
    }]), e;
  }(url);
  var H = function(t) {
    /**
     * @param {!Object} opts
     * @return {?}
     */
    function e(opts) {
      callback(this, e);
      var self = $(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return self.material = null, self.geometry = null, self.options = opts || {}, self._viewMatrix = mat4.create(), self._modelViewMatrix = mat4.create(), self;
    }
    return _inherits(e, t), _createClass(e, [{
      key : "render",
      value : function(name) {
        spinnerModifer(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this, name);
        if (this.material && this.geometry && this.visible) {
          if (this.options.beforeRender) {
            this.options.beforeRender();
          }
          mat4.invert(this._viewMatrix, name.worldMatrix);
          mat4.multiply(this._modelViewMatrix, this._viewMatrix, this.worldMatrix);
          if (void 0 !== this.material.uniforms.uMMatrix) {
            this.material.uniforms.uMMatrix.value = this.worldMatrix;
          }
          if (void 0 !== this.material.uniforms.uMVMatrix) {
            this.material.uniforms.uMVMatrix.value = this._modelViewMatrix;
          }
          if (void 0 !== this.material.uniforms.uPMatrix) {
            this.material.uniforms.uPMatrix.value = name.projectionMatrix;
          }
          this.material.draw(this.geometry);
        }
      }
    }]), e;
  }(html);
  var Renderer = function() {
    /**
     * @param {!Object} options
     * @return {undefined}
     */
    function init(options) {
      callback(this, init);
      this.canvas = options && options.canvas || document.createElement("canvas");
      /** @type {string} */
      this.canvas.style.transformOrigin = "0 0";
      /** @type {!Object} */
      this.contextAttributes = Object.assign({}, {
        alpha : false,
        depth : true,
        stencil : true,
        antialias : false,
        premultipliedAlpha : true,
        preserveDrawingBuffer : false,
        failIfMajorPerformanceCaveat : false
      }, options || {});
      /** @type {number} */
      this._pixelRatio = 1;
      this.gl = this.canvas.getContext("experimental-webgl", this.contextAttributes);
      this.handleContextLost = this.handleContextLost.bind(this);
      this.handleContextRestored = this.handleContextRestored.bind(this);
      this.canvas.addEventListener("webglcontextlost", this.handleContextLost, false);
      this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored, false);
    }
    return _createClass(init, [{
      key : "handleContextLost",
      value : function(name) {
        name.preventDefault();
      }
    }, {
      key : "handleContextRestored",
      value : function() {
      }
    }, {
      key : "handleContextRestored",
      value : function() {
      }
    }, {
      key : "render",
      value : function(name, search, server) {
        search.update();
        if (server) {
          server.bindFrame();
          name.render(search);
          server.unbind();
        } else {
          this.gl.viewport(0, 0, this._width * this._pixelRatio, this._height * this._pixelRatio);
          name.render(search);
        }
      }
    }, {
      key : "resize",
      value : function(name, value) {
        /** @type {string} */
        this._width = name;
        /** @type {number} */
        this._height = value;
        /** @type {number} */
        this.canvas.width = this._width * this._pixelRatio;
        /** @type {number} */
        this.canvas.height = this._height * this._pixelRatio;
        /** @type {string} */
        this.canvas.style.transform = "scale(" + 1 / this._pixelRatio + ") translateZ(0)";
        this.gl.viewport(0, 0, this._width * this._pixelRatio, this._height * this._pixelRatio);
      }
    }, {
      key : "clearColor",
      value : function(name, color, type, a) {
        this.gl.clearColor(name, color, type, a);
      }
    }, {
      key : "clear",
      value : function(name, index, dt) {
        /** @type {number} */
        var clear = 0;
        if (void 0 === name || name) {
          /** @type {number} */
          clear = clear | this.gl.COLOR_BUFFER_BIT;
        }
        if (void 0 === index || index) {
          /** @type {number} */
          clear = clear | this.gl.DEPTH_BUFFER_BIT;
        }
        if (void 0 === dt || dt) {
          /** @type {number} */
          clear = clear | this.gl.STENCIL_BUFFER_BIT;
        }
        this.gl.clear(clear);
      }
    }, {
      key : "setPixelRatio",
      value : function(name) {
        /** @type {string} */
        this._pixelRatio = name;
        this.resize(this._width, this._height);
      }
    }]), init;
  }();
  /** @type {boolean} */
  var hasTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
  /** @type {boolean} */
  var isW3CTouchEnabled = !!window.navigator.pointerEnabled;
  /** @type {boolean} */
  var isMSTouchEnabled = !!window.navigator.msPointerEnabled;
  /** @type {string} */
  var START_EV = hasTouch ? "touchstart" : isW3CTouchEnabled ? "pointerdown" : isMSTouchEnabled ? "MSPointerDown" : "mousedown";
  /** @type {string} */
  var MOVE_EV = hasTouch ? "touchmove" : isW3CTouchEnabled ? "pointermove" : isMSTouchEnabled ? "MSPointerMove" : "mousemove";
  /** @type {string} */
  var END_EV = hasTouch ? "touchend" : isW3CTouchEnabled ? "pointerup" : isMSTouchEnabled ? "MSPointerUp" : "mouseup";
  var Camera = function(e) {
    /**
     * @param {!Object} properties
     * @return {?}
     */
    function update(properties) {
      callback(this, update);
      var c = $(this, (update.__proto__ || Object.getPrototypeOf(update)).call(this));
      return properties = Object.assign({}, {
        fov : 45,
        aspect : window.innerWidth / window.innerHeight,
        near : 10,
        far : 1e3,
        type : "perspective",
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        orbitControl : false
      }, properties), c.fov = properties.fov, c.aspect = properties.aspect, c.near = properties.near, c.far = properties.far, c.type = properties.type, c.left = properties.left, c.right = properties.right, c.top = properties.top, c.bottom = properties.bottom, c.orbitControl = properties.orbitControl, c.projectionMatrix = mat4.create(), c.updateProjectionMatrix(), 1 == properties.orbitControl && (c.lookAt || (c.lookAt = vec3.create(), vec3.set(c.lookAt, 0, 0, 0)), c._initPointerEvents()), c;
    }
    return _inherits(update, e), _createClass(update, [{
      key : "updateProjectionMatrix",
      value : function() {
        if ("perspective" == this.type) {
          mat4.perspective(this.projectionMatrix, this.fov * Math.PI / 180, this.aspect, this.near, this.far);
        } else {
          if ("ortho" == this.type) {
            mat4.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
          }
        }
      }
    }, {
      key : "_initPointerEvents",
      value : function() {
        /** @type {number} */
        this.winWidth = window.innerWidth;
        /** @type {number} */
        this.winHeight = window.innerHeight;
        /** @type {boolean} */
        this._isPointerDown = false;
        /** @type {boolean} */
        this.isRightClick = false;
        /** @type {number} */
        this.pointerXMove = 0;
        /** @type {number} */
        this.pointerYMove = 0;
        this._cameraDistance = this.position[2];
        /** @type {number} */
        this.pointerX = 0;
        /** @type {number} */
        this.pointerY = 0;
        /** @type {number} */
        this.pointerZ = 0;
        /** @type {number} */
        this.lastPointerX = 0;
        /** @type {number} */
        this.lastPointerY = 0;
        /** @type {number} */
        this.lastPointerZ = 0;
        /** @type {number} */
        this.theta = 0;
        /** @type {number} */
        this.phi = 0;
        /** @type {number} */
        this.thetaDown = 0;
        /** @type {number} */
        this.phiDown = 0;
        /** @type {number} */
        this.currTheta = 0;
        /** @type {number} */
        this.currPhi = 0;
        /** @type {number} */
        this._minPolarAngle = -.5 * Math.PI;
        /** @type {number} */
        this._maxPolarAngle = .5 * Math.PI;
        this._onPointerDown = this._onPointerDown.bind(this);
        this._onPointerMove = this._onPointerMove.bind(this);
        this._onPointerUp = this._onPointerUp.bind(this);
        this._onMouseWheel = this._onMouseWheel.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
        document.addEventListener(START_EV, this._onPointerDown, false);
        document.addEventListener(MOVE_EV, this._onPointerMove, false);
        document.addEventListener(END_EV, this._onPointerUp, false);
        document.addEventListener("DOMMouseScroll", this._onMouseWheel, false);
        document.addEventListener("mousewheel", this._onMouseWheel, false);
        document.addEventListener("contextmenu", this.onContextMenu, false);
      }
    }, {
      key : "onContextMenu",
      value : function(name) {
        event.preventDefault();
      }
    }, {
      key : "_onMouseWheel",
      value : function(e) {
        e.preventDefault();
        var lastDelta;
        if (e.wheelDelta) {
          lastDelta = e.wheelDelta;
        } else {
          if (e.detail) {
            /** @type {number} */
            lastDelta = 40 * -e.detail;
          } else {
            if (e.wheelDeltaX) {
              /** @type {number} */
              lastDelta = e.wheelDeltaY / 12;
              e.wheelDeltaX;
            } else {
              if (void 0 !== e.axis && e.axis === e.HORIZONTAL_AXIS) {
                /** @type {number} */
                lastDelta = 0;
              } else {
                /** @type {number} */
                lastDelta = 0;
              }
            }
          }
        }
        this._cameraDistance += -1 * lastDelta * .01;
      }
    }, {
      key : "_onPointerDown",
      value : function(key) {
        if (3 == key.which) {
          /** @type {boolean} */
          this.isRightClick = true;
          key.preventDefault();
          key.stopPropagation();
        }
        /** @type {boolean} */
        this._isPointerDown = true;
        this.touchEvent = hasTouch ? key.touches[0] || key.changedTouches[0] : key;
        this.touchEventPageX = this.touchEvent.pageX;
        this.touchEventPageY = this.touchEvent.pageY;
        this.touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft;
        this.touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop;
        this.pointerXDown = this.touchEventPageX;
        this.pointerYDown = this.touchEventPageY;
        if (this.isRightClick) {
          this.startPointerX = this.pointerXMove;
          this.startPointerY = this.pointerYMove;
        }
        this.thetaDown = this.theta;
        this.phiDown = this.phi;
      }
    }, {
      key : "_onPointerMove",
      value : function(name) {
        if (this._isPointerDown) {
          name.preventDefault();
          this.touchEvent = hasTouch ? name.touches[0] || name.changedTouches[0] : name;
          this.touchEventPageX = this.touchEvent.pageX;
          this.touchEventPageY = this.touchEvent.pageY;
          this.touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft;
          this.touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop;
          if (this.isRightClick) {
            this.pointerXMove = this.startPointerX + (this.touchEventPageX - this.pointerXDown);
            this.pointerYMove = this.startPointerY + (this.touchEventPageY - this.pointerYDown);
          } else {
            /** @type {number} */
            this.pointerXOrbiter = this.pointerXDown - this.touchEventPageX;
            /** @type {number} */
            this.pointerYOrbiter = this.pointerYDown - this.touchEventPageY;
            this.theta = this.thetaDown + this.pointerXOrbiter / this.winWidth * 2 * Math.PI;
            this.phi = this.phiDown + this.pointerYOrbiter / this.winHeight * 2 * Math.PI * -1;
            /** @type {number} */
            this.phi = Math.max(this._minPolarAngle, Math.min(this._maxPolarAngle, this.phi));
          }
        }
      }
    }, {
      key : "_onPointerUp",
      value : function() {
        /** @type {boolean} */
        this._isPointerDown = false;
        /** @type {boolean} */
        this.isRightClick = false;
      }
    }, {
      key : "update",
      value : function() {
        spinnerModifer(update.prototype.__proto__ || Object.getPrototypeOf(update.prototype), "render", this).call(this);
        if (this.orbitControl) {
          this.currTheta += .1 * (this.theta - this.currTheta);
          this.currPhi += .1 * (this.phi - this.currPhi);
          /** @type {number} */
          this.position[0] = Math.sin(this.currTheta) * Math.cos(this.currPhi) * this._cameraDistance;
          /** @type {number} */
          this.position[1] = Math.sin(this.currPhi) * this._cameraDistance;
          /** @type {number} */
          this.position[2] = Math.cos(this.currTheta) * Math.cos(this.currPhi) * this._cameraDistance;
          /** @type {number} */
          this.lookAt[0] = this.pointerXMove / -100;
          /** @type {number} */
          this.lookAt[1] = this.pointerYMove / 100;
        }
      }
    }]), update;
  }(url);
  var FrameBuffer = function() {
    /**
     * @param {!WebGLRenderingContext} gl
     * @param {?} options
     * @return {undefined}
     */
    function init(gl, options) {
      var webGL = this;
      if (callback(this, init), this.options = Object.assign({}, {
        format : gl.RGBA,
        type : gl.UNSIGNED_BYTE,
        linear : true,
        mipmap : false,
        mipmapLinear : false,
        wrapS : gl.CLAMP_TO_EDGE,
        wrapT : gl.CLAMP_TO_EDGE,
        useDepthTexture : false,
        depthTexture : null
      }, options), this.gl = gl, this.width = this.options.width, this.height = this.options.height, this.format = this.options.format, this.type = this.options.type, this.linear = this.options.linear, this.mipmap = this.options.mipmap, this.mipmapLinear = this.options.mipmapLinear, this.type == gl.FLOAT) {
        var extensionTextureFloat = gl.getExtension("OES_texture_float");
        gl.getExtension("OES_texture_float_linear");
        if (!extensionTextureFloat) {
          throw "trying to create a FrameBuffer of with gl.FLOAT type but theres no floating point texture support";
        }
      }
      if ("HALF_FLOAT" == this.type) {
        var ext = gl.getExtension("OES_texture_half_float");
        gl.getExtension("OES_texture_half_float_linear");
        if (!ext) {
          throw "trying to create a texture of with gl.HALF_FLOAT type but theres no half floating point texture support";
        }
        this.type = ext.HALF_FLOAT_OES;
      }
      this._colorTexture = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture);
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, null);
      Object.defineProperty(this, "wrapS", {
        set : function(value) {
          webGL.gl.bindTexture(webGL.gl.TEXTURE_2D, webGL._colorTexture);
          webGL.gl.texParameteri(webGL.gl.TEXTURE_2D, webGL.gl.TEXTURE_WRAP_S, value);
        }
      });
      Object.defineProperty(this, "wrapT", {
        set : function(value) {
          webGL.gl.bindTexture(webGL.gl.TEXTURE_2D, webGL._colorTexture);
          webGL.gl.texParameteri(webGL.gl.TEXTURE_2D, webGL.gl.TEXTURE_WRAP_T, value);
        }
      });
      this.wrapS = this.options.wrapS;
      this.wrapT = this.options.wrapT;
      if (!(isZero(this.width) && isZero(this.height))) {
        this.wrapS = gl.CLAMP_TO_EDGE;
        this.wrapT = gl.CLAMP_TO_EDGE;
        /** @type {boolean} */
        this.mipmap = false;
        /** @type {boolean} */
        this.mipmapLinear = false;
      }
      this.setFilter(this.linear, this.mipmap, this.mipmapLinear);
      if (!this.options.depthTexture) {
        this.renderbuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height);
      }
      this.fbo = this.gl.createFramebuffer();
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
      this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorTexture, 0);
      if (this.options.depthTexture) {
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.options.depthTexture._texture, 0);
      } else {
        this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.renderbuffer);
      }
      this.unbind();
    }
    return _createClass(init, [{
      key : "setFilter",
      value : function(name, index, dt) {
        var gl = this.gl;
        var minFilter = paramThreeToGL(!!name, !!index, !!dt);
        gl.bindTexture(gl.TEXTURE_2D, this._colorTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, paramThreeToGL(!!name, false, false));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
      }
    }, {
      key : "resize",
      value : function(name, height) {
        if (!(this.width === name && this.height === height)) {
          /** @type {number} */
          this.width = 0 | name;
          /** @type {number} */
          this.height = 0 | height;
        }
        if (!(isZero(this.width) && isZero(this.height))) {
          this.wrapS = this.gl.CLAMP_TO_EDGE;
          this.wrapT = this.gl.CLAMP_TO_EDGE;
          /** @type {boolean} */
          this.mipmap = false;
          /** @type {boolean} */
          this.mipmapLinear = false;
          this.setFilter(this.linear, this.mipmap, this.mipmapLinear);
        }
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, null);
        if (this.options.depthTexture) {
          this.depthTexture.resize(this.width, this.height);
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorTexture, 0);
        if (this.options.depthTexture) {
          this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.options.depthTexture._texture, 0);
        } else {
          this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer);
          this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height);
          this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.renderbuffer);
        }
        this.unbind();
      }
    }, {
      key : "bindFrame",
      value : function() {
        this.gl.viewport(0, 0, this.width, this.height);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
        if (!this.options.depthTexture) {
          this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer);
        }
        this.clear();
      }
    }, {
      key : "bind",
      value : function(name) {
        if (void 0 !== name) {
          this.gl.activeTexture(this.gl.TEXTURE0 + (0 | name));
        }
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture);
      }
    }, {
      key : "unbind",
      value : function() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        if (!this.options.depthTexture) {
          this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
        }
      }
    }, {
      key : "clear",
      value : function(name, index, dt) {
        /** @type {number} */
        var clear = 0;
        if (void 0 === name || name) {
          /** @type {number} */
          clear = clear | this.gl.COLOR_BUFFER_BIT;
        }
        if (void 0 === index || index) {
          /** @type {number} */
          clear = clear | this.gl.DEPTH_BUFFER_BIT;
        }
        if (void 0 === dt || dt) {
          /** @type {number} */
          clear = clear | this.gl.STENCIL_BUFFER_BIT;
        }
        this.gl.clear(clear);
      }
    }, {
      key : "dispose",
      value : function() {
        this.gl.deleteFramebuffer(this.fbo);
        /** @type {null} */
        this.fbo = null;
        /** @type {null} */
        this.gl = null;
      }
    }]), init;
  }();
  var loader = {
    cache : {},
    loadImage : function(name, cb) {
      var sfx = this;
      if (void 0 !== this.cache[name]) {
        return void cb(this.cache[name]);
      }
      /** @type {!Image} */
      var d = new Image;
      /**
       * @return {undefined}
       */
      d.onload = function() {
        /** @type {null} */
        d.onload = null;
        /** @type {null} */
        d.onerror = null;
        /** @type {!Image} */
        sfx.cache[name] = d;
        cb(d);
      };
      /**
       * @return {undefined}
       */
      d.onerror = function() {
        /** @type {null} */
        d.onload = null;
        /** @type {null} */
        d.onerror = null;
        console.warn("Cannot load image :" + name);
      };
      /** @type {string} */
      d.src = name;
    }
  };
  var TextEditor = function(e) {
    /**
     * @param {?} el
     * @param {!Object} properties
     * @return {?}
     */
    function Model(el, properties) {
      callback(this, Model);
      var geometry = $(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, el, 4));
      return properties = Object.assign({}, {
        width : 1e3,
        height : 1e3,
        widthSegments : 1,
        heightSegments : 1
      }, properties), geometry.width = properties.width, geometry.height = properties.height, geometry.widthSegments = properties.widthSegments, geometry.heightSegments = properties.heightSegments, geometry._build(), geometry.addAttribute("index", new Uint16Array(geometry.indices), 1), geometry.addAttribute("position", new Float32Array(geometry.vertices), 3), geometry.addAttribute("color", new Float32Array(geometry.colors), 3), geometry.addAttribute("normal", new Float32Array(geometry.normals), 3), 
      geometry.addAttribute("uv", new Float32Array(geometry.uvs), 2, "Plane"), geometry;
    }
    return _inherits(Model, e), _createClass(Model, [{
      key : "update",
      value : function() {
        this._build();
        this.attributes.index.update(new Uint16Array(this.indices), 1);
        this.attributes.position.update(new Float32Array(this.vertices), 3);
        this.attributes.color.update(new Float32Array(this.colors), 3);
        this.attributes.normal.update(new Float32Array(this.normals), 3);
        this.attributes.uv.update(new Float32Array(this.uvs), 2, "Plane");
      }
    }, {
      key : "_build",
      value : function() {
        /** @type {!Array} */
        this.indices = [];
        /** @type {!Array} */
        this.vertices = [];
        /** @type {!Array} */
        this.normals = [];
        /** @type {!Array} */
        this.colors = [];
        /** @type {!Array} */
        this.uvs = [];
        var j;
        var i;
        /** @type {number} */
        var offset = .5 * this.width;
        /** @type {number} */
        var y = .5 * this.height;
        /** @type {number} */
        var width = this.widthSegments >> 0;
        /** @type {number} */
        var height = this.heightSegments >> 0;
        /** @type {number} */
        var nx = width + 1;
        /** @type {number} */
        var h = height + 1;
        /** @type {number} */
        var ratio = this.width / width;
        /** @type {number} */
        var scaleY = this.height / height;
        /** @type {number} */
        i = 0;
        for (; i < h; i++) {
          /** @type {number} */
          var z = i * scaleY - y;
          /** @type {number} */
          j = 0;
          for (; j < nx; j++) {
            /** @type {number} */
            var step = j * ratio - offset;
            this.vertices.push(step, -z, 0);
            this.normals.push(0, 0, 1);
            this.colors.push(0, 0, 0);
            this.uvs.push(j / width);
            this.uvs.push(1 - i / height);
          }
        }
        /** @type {number} */
        i = 0;
        for (; i < height; i++) {
          /** @type {number} */
          j = 0;
          for (; j < width; j++) {
            /** @type {number} */
            var index = j + nx * i;
            /** @type {number} */
            var c = j + nx * (i + 1);
            /** @type {number} */
            var boundKeyRangeLower = j + 1 + nx * (i + 1);
            /** @type {number} */
            var lenDiffStr = j + 1 + nx * i;
            this.indices.push(index, c, lenDiffStr);
            this.indices.push(c, boundKeyRangeLower, lenDiffStr);
          }
        }
        /** @type {number} */
        this.length = this.vertices.length / 3;
      }
    }]), Model;
  }(Point);
  var Sprite = function(e) {
    /**
     * @param {!WebGLRenderingContext} context
     * @param {string} url
     * @return {?}
     */
    function init(context, url) {
      callback(this, init);
      var self = $(this, (init.__proto__ || Object.getPrototypeOf(init)).call(this));
      return self.gl = context, loader.loadImage(url, function(width) {
        self.texture = Texture.fromImage(self.gl, width);
        self.material = new Vis(self.gl, {
          blend : true
        });
        self.material.map = self.texture;
        self.geometry = new TextEditor(self.gl, {
          width : Math.floor(width.width / 10),
          height : Math.floor(width.height / 10)
        });
      }), self;
    }
    return _inherits(init, e), init;
  }(H);
  /** @type {string} */
  var materialVertexShaderRow = "\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\nattribute float vertexIndex;\nattribute float particleIndex;\n\n\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n// uniform float pointSize;\n\nvarying vec2 vUv;\nvarying vec3 vColor;\n\n\nvoid main() {\n\n    vUv = uv;\n    vColor = color;\n\n    vec3 newPosition = position;\n\n    if (vertexIndex == 0.0) {\n      newPosition += vec3(-1.,1.,0.);\n    }\n    else if (vertexIndex == 1.0) {\n      newPosition += vec3(1.,1.,0.);\n    }\n    else if (vertexIndex == 2.0) {\n      newPosition += vec3(-1.,-1.,0.);\n    }\n    else if (vertexIndex == 3.0) {\n      newPosition += vec3(1.,-1.,0.);\n    }\n\n    newPosition *= 10.;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4( newPosition, 1.0 );\n\n}";
  /** @type {string} */
  var minkowskiFrag = "precision highp float;\n\n\nvarying vec2 vUv;\nvarying vec3 vColor;\n\n\nvoid main(void) {\n\n  vec4 color = vec4(1., 0., 0., 1.0);\n\n\n    gl_FragColor = color;\n\n}";
  var index = function(t) {
    /**
     * @param {!WebGLRenderingContext} gl
     * @param {!Object} options
     * @return {?}
     */
    function init(gl, options) {
      callback(this, init);
      var self = $(this, (init.__proto__ || Object.getPrototypeOf(init)).call(this));
      /** @type {!WebGLRenderingContext} */
      self.gl = gl;
      /** @type {!Object} */
      options = Object.assign({}, {
        width : 10,
        height : 10,
        depth : 10,
        map : null,
        count : 100
      }, options);
      self.count = options.count;
      self.width = options.width;
      self.heigth = options.heigth;
      self.depth = options.depth;
      self.material = new Vis(self.gl, {
        blend : true,
        map : options.map,
        vertexShader : materialVertexShaderRow,
        fragmentShader : minkowskiFrag
      });
      /** @type {!Array} */
      self.indices = [];
      /** @type {!Array} */
      self.vertices = [];
      /** @type {!Array} */
      self.normals = [];
      /** @type {!Array} */
      self.colors = [];
      /** @type {!Array} */
      self.uvs = [];
      /** @type {!Array} */
      self.vertexIndices = [];
      /** @type {!Array} */
      self.particleIndices = [];
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      var falseySection = 0;
      /** @type {number} */
      var i = 0;
      var cols = self.count;
      for (; i < cols; i++) {
        self.vertices.push(Math.random() * self.width - self.width / 2);
        self.vertices.push(Math.random() * self.heigth - self.heigth / 2);
        self.vertices.push(Math.random() * self.depth - self.depth / 2);
        self.normals.push(0);
        self.normals.push(1);
        self.normals.push(1);
        self.colors.push(1);
        self.colors.push(1);
        self.colors.push(1);
        self.vertexIndices.push(n);
        self.particleIndices.push(falseySection);
        if (++n > 3) {
          /** @type {number} */
          n = 0;
          falseySection++;
        }
      }
      /** @type {number} */
      var k = 0;
      /** @type {number} */
      var count = 0;
      for (; count < self.count; k = k + 6, count = count + 4) {
        self.indices.push(count + 0);
        self.indices.push(count + 2);
        self.indices.push(count + 1);
        self.indices.push(count + 2);
        self.indices.push(count + 3);
        self.indices.push(count + 1);
        self.uvs.push(0);
        self.uvs.push(1);
        self.uvs.push(1);
        self.uvs.push(1);
        self.uvs.push(0);
        self.uvs.push(0);
        self.uvs.push(1);
        self.uvs.push(0);
      }
      return self.geometry = new Point(self.gl, self.count), self.geometry.addAttribute("index", new Uint16Array(self.indices), 1), self.geometry.addAttribute("position", new Float32Array(self.vertices), 3), self.geometry.addAttribute("color", new Float32Array(self.colors), 3), self.geometry.addAttribute("normal", new Float32Array(self.normals), 3), self.geometry.addAttribute("uv", new Float32Array(self.uvs), 2, "ParticleSystem"), self.geometry.addAttribute("particleIndex", new Float32Array(self.particleIndices), 
      1), self.geometry.addAttribute("vertexIndex", new Float32Array(self.vertexIndices), 1), self.geometry.length = self.vertexIndices.length, self;
    }
    return _inherits(init, t), _createClass(init, [{
      key : "render",
      value : function(name) {
      }
    }]), init;
  }(H);
  var vec2 = {};
  /**
   * @return {?}
   */
  vec2.create = function() {
    var message6 = new Message(2);
    return message6[0] = 0, message6[1] = 0, message6;
  };
  /**
   * @param {!Object} o
   * @return {?}
   */
  vec2.clone = function(o) {
    var msg = new Message(2);
    return msg[0] = o[0], msg[1] = o[1], msg;
  };
  /**
   * @param {number} w
   * @param {number} r
   * @return {?}
   */
  vec2.fromValues = function(w, r) {
    var o = new Message(2);
    return o[0] = w, o[1] = r, o;
  };
  /**
   * @param {!Object} oldDot
   * @param {!Object} newDot
   * @return {?}
   */
  vec2.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot;
  };
  /**
   * @param {string} val
   * @param {number} key
   * @param {number} value
   * @return {?}
   */
  vec2.set = function(val, key, value) {
    return val[0] = key, val[1] = value, val;
  };
  /**
   * @param {string} name
   * @param {!Object} t
   * @param {!Object} u
   * @return {?}
   */
  vec2.add = function(name, t, u) {
    return name[0] = t[0] + u[0], name[1] = t[1] + u[1], name;
  };
  /**
   * @param {!Object} substraction
   * @param {!Object} subtractor
   * @param {!Object} subtractee
   * @return {?}
   */
  vec2.subtract = function(substraction, subtractor, subtractee) {
    return substraction[0] = subtractor[0] - subtractee[0], substraction[1] = subtractor[1] - subtractee[1], substraction;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  vec2.sub = vec2.subtract;
  /**
   * @param {!Object} transform
   * @param {!Object} matrix
   * @param {!Object} x
   * @return {?}
   */
  vec2.multiply = function(transform, matrix, x) {
    return transform[0] = matrix[0] * x[0], transform[1] = matrix[1] * x[1], transform;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  vec2.mul = vec2.multiply;
  /**
   * @param {!Object} value
   * @param {!Object} vecA
   * @param {!Object} vecB
   * @return {?}
   */
  vec2.divide = function(value, vecA, vecB) {
    return value[0] = vecA[0] / vecB[0], value[1] = vecA[1] / vecB[1], value;
  };
  /** @type {function(!Object, !Object, !Object): ?} */
  vec2.div = vec2.divide;
  /**
   * @param {number} post
   * @param {number} x
   * @param {!Object} arr
   * @return {?}
   */
  vec2.min = function(post, x, arr) {
    return post[0] = Math.min(x[0], arr[0]), post[1] = Math.min(x[1], arr[1]), post;
  };
  /**
   * @param {number} elem
   * @param {number} array
   * @param {!Object} limit
   * @return {?}
   */
  vec2.max = function(elem, array, limit) {
    return elem[0] = Math.max(array[0], limit[0]), elem[1] = Math.max(array[1], limit[1]), elem;
  };
  /**
   * @param {!Object} data
   * @param {!Object} p
   * @param {!Object} scale
   * @return {?}
   */
  vec2.scale = function(data, p, scale) {
    return data[0] = p[0] * scale, data[1] = p[1] * scale, data;
  };
  /**
   * @param {!Object} a
   * @param {!Object} out
   * @param {!Object} v1
   * @param {?} v2
   * @return {?}
   */
  vec2.scaleAndAdd = function(a, out, v1, v2) {
    return a[0] = out[0] + v1[0] * v2, a[1] = out[1] + v1[1] * v2, a;
  };
  /**
   * @param {!Object} touchTrackA
   * @param {!Object} touchTrackB
   * @return {?}
   */
  vec2.distance = function(touchTrackA, touchTrackB) {
    /** @type {number} */
    var lightI = touchTrackB[0] - touchTrackA[0];
    /** @type {number} */
    var lightJ = touchTrackB[1] - touchTrackA[1];
    return Math.sqrt(lightI * lightI + lightJ * lightJ);
  };
  /** @type {function(!Object, !Object): ?} */
  vec2.dist = vec2.distance;
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {?}
   */
  vec2.squaredDistance = function(a, b) {
    /** @type {number} */
    var lightI = b[0] - a[0];
    /** @type {number} */
    var lightJ = b[1] - a[1];
    return lightI * lightI + lightJ * lightJ;
  };
  /** @type {function(!Object, !Object): ?} */
  vec2.sqrDist = vec2.squaredDistance;
  /**
   * @param {number} n
   * @return {?}
   */
  vec2.length = function(n) {
    var lightI = n[0];
    var lightJ = n[1];
    return Math.sqrt(lightI * lightI + lightJ * lightJ);
  };
  /** @type {function(number): ?} */
  vec2.len = vec2.length;
  /**
   * @param {!Object} a
   * @return {?}
   */
  vec2.squaredLength = function(a) {
    var lightI = a[0];
    var lightJ = a[1];
    return lightI * lightI + lightJ * lightJ;
  };
  /** @type {function(!Object): ?} */
  vec2.sqrLen = vec2.squaredLength;
  /**
   * @param {!Object} fn
   * @param {!Object} a
   * @return {?}
   */
  vec2.negate = function(fn, a) {
    return fn[0] = -a[0], fn[1] = -a[1], fn;
  };
  /**
   * @param {!Object} target
   * @param {!Object} dir
   * @return {?}
   */
  vec2.normalize = function(target, dir) {
    var c = dir[0];
    var d = dir[1];
    /** @type {number} */
    var scale = c * c + d * d;
    return scale > 0 && (scale = 1 / Math.sqrt(scale), target[0] = dir[0] * scale, target[1] = dir[1] * scale), target;
  };
  /**
   * @param {!Object} quat_1
   * @param {!Object} quat_2
   * @return {?}
   */
  vec2.dot = function(quat_1, quat_2) {
    return quat_1[0] * quat_2[0] + quat_1[1] * quat_2[1];
  };
  /**
   * @param {!Array} resource
   * @param {!Object} opts
   * @param {!Object} action
   * @return {?}
   */
  vec2.cross = function(resource, opts, action) {
    /** @type {number} */
    var id = opts[0] * action[1] - opts[1] * action[0];
    return resource[0] = resource[1] = 0, resource[2] = id, resource;
  };
  /**
   * @param {!Object} minIn
   * @param {!Object} maxIn
   * @param {!Object} minOut
   * @param {number} alpha
   * @return {?}
   */
  vec2.lerp = function(minIn, maxIn, minOut, alpha) {
    var currentSamplingIntervalMs = maxIn[0];
    var fps = maxIn[1];
    return minIn[0] = currentSamplingIntervalMs + alpha * (minOut[0] - currentSamplingIntervalMs), minIn[1] = fps + alpha * (minOut[1] - fps), minIn;
  };
  /**
   * @param {!Object} type
   * @param {number} callback
   * @return {?}
   */
  vec2.random = function(type, callback) {
    callback = callback || 1;
    /** @type {number} */
    var bearingRad = 2 * parseFloat() * Math.PI;
    return type[0] = Math.cos(bearingRad) * callback, type[1] = Math.sin(bearingRad) * callback, type;
  };
  /**
   * @param {!Object} a
   * @param {!Object} m
   * @param {!Array} box
   * @return {?}
   */
  vec2.transformMat2 = function(a, m, box) {
    var lcs_len = m[0];
    var prefix = m[1];
    return a[0] = box[0] * lcs_len + box[2] * prefix, a[1] = box[1] * lcs_len + box[3] * prefix, a;
  };
  /**
   * @param {!Object} box
   * @param {!Object} mat
   * @param {!Array} src
   * @return {?}
   */
  vec2.transformMat2d = function(box, mat, src) {
    var a10 = mat[0];
    var a20 = mat[1];
    return box[0] = src[0] * a10 + src[2] * a20 + src[4], box[1] = src[1] * a10 + src[3] * a20 + src[5], box;
  };
  /**
   * @param {!Object} _wid_attr
   * @param {!Object} data
   * @param {!Array} matrix
   * @return {?}
   */
  vec2.transformMat3 = function(_wid_attr, data, matrix) {
    var r = data[0];
    var g = data[1];
    return _wid_attr[0] = matrix[0] * r + matrix[3] * g + matrix[6], _wid_attr[1] = matrix[1] * r + matrix[4] * g + matrix[7], _wid_attr;
  };
  /**
   * @param {!Object} a
   * @param {!Object} m
   * @param {!Array} out
   * @return {?}
   */
  vec2.transformMat4 = function(a, m, out) {
    var ox = m[0];
    var oy = m[1];
    return a[0] = out[0] * ox + out[4] * oy + out[12], a[1] = out[1] * ox + out[5] * oy + out[13], a;
  };
  vec2.forEach = function() {
    var o = vec2.create();
    return function(data, i, margin, limit, n, s) {
      var x;
      var end;
      if (!i) {
        /** @type {number} */
        i = 2;
      }
      if (!margin) {
        /** @type {number} */
        margin = 0;
      }
      end = limit ? Math.min(limit * i + margin, data.length) : data.length;
      /** @type {number} */
      x = margin;
      for (; x < end; x = x + i) {
        o[0] = data[x];
        o[1] = data[x + 1];
        n(o, o, s);
        data[x] = o[0];
        data[x + 1] = o[1];
      }
      return data;
    };
  }();
  /**
   * @param {!Object} min
   * @return {?}
   */
  vec2.str = function(min) {
    return "vec2(" + min[0] + ", " + min[1] + ")";
  };
  /**
   * @param {!Object} out
   * @param {!Object} v
   * @param {?} s
   * @return {?}
   */
  vec2.multiplyScalar = function(out, v, s) {
    return out[0] = v[0] * s, out[1] = v[1] * s, out;
  };
  /**
   * @param {number} name
   * @return {?}
   */
  vec2.clear = function(name) {
    return name[0] = 0, name[1] = 0, name;
  };
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {?} type
   * @param {?} c
   * @return {?}
   */
  vec2.addXY = function(a, b, type, c) {
    return a[0] = b[0] + type, a[1] = b[1] + c, a;
  };
  var mat2 = {};
  /**
   * @return {?}
   */
  mat2.create = function() {
    var message6 = new Message(4);
    return message6[0] = 1, message6[1] = 0, message6[2] = 0, message6[3] = 1, message6;
  };
  /**
   * @param {!Object} o
   * @return {?}
   */
  mat2.clone = function(o) {
    var msg = new Message(4);
    return msg[0] = o[0], msg[1] = o[1], msg[2] = o[2], msg[3] = o[3], msg;
  };
  /**
   * @param {!Array} oldDot
   * @param {!Array} newDot
   * @return {?}
   */
  mat2.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot[2] = newDot[2], oldDot[3] = newDot[3], oldDot;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  mat2.identity = function(a) {
    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  mat2.transpose = function(out, a) {
    if (out === a) {
      var a1 = a[1];
      out[1] = a[2];
      out[2] = a1;
    } else {
      out[0] = a[0];
      out[1] = a[2];
      out[2] = a[1];
      out[3] = a[3];
    }
    return out;
  };
  /**
   * @param {!Array} r
   * @param {!Array} a
   * @return {?}
   */
  mat2.invert = function(r, a) {
    var i = a[0];
    var dir = a[1];
    var j = a[2];
    var k = a[3];
    /** @type {number} */
    var width = i * k - j * dir;
    return width ? (width = 1 / width, r[0] = k * width, r[1] = -dir * width, r[2] = -j * width, r[3] = i * width, r) : null;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @return {?}
   */
  mat2.adjoint = function(out, a) {
    var a1 = a[0];
    return out[0] = a[3], out[1] = -a[1], out[2] = -a[2], out[3] = a1, out;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  mat2.determinant = function(a) {
    return a[0] * a[3] - a[2] * a[1];
  };
  /**
   * @param {!Array} h
   * @param {!Array} c
   * @param {!Array} m
   * @return {?}
   */
  mat2.multiply = function(h, c, m) {
    var r = c[0];
    var g = c[1];
    var temp16 = c[2];
    var temp12 = c[3];
    var m14 = m[0];
    var m15 = m[1];
    var m6 = m[2];
    var m16 = m[3];
    return h[0] = r * m14 + g * m6, h[1] = r * m15 + g * m16, h[2] = temp16 * m14 + temp12 * m6, h[3] = temp16 * m15 + temp12 * m16, h;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  mat2.mul = mat2.multiply;
  /**
   * @param {!Array} z
   * @param {!Array} s
   * @param {?} i
   * @return {?}
   */
  mat2.rotate = function(z, s, i) {
    var a = s[0];
    var f = s[1];
    var c = s[2];
    var t = s[3];
    /** @type {number} */
    var b = Math.sin(i);
    /** @type {number} */
    var d = Math.cos(i);
    return z[0] = a * d + f * b, z[1] = a * -b + f * d, z[2] = c * d + t * b, z[3] = c * -b + t * d, z;
  };
  /**
   * @param {!Array} values
   * @param {!Array} f
   * @param {!Object} args
   * @return {?}
   */
  mat2.scale = function(values, f, args) {
    var n = f[0];
    var z = f[1];
    var i = f[2];
    var y = f[3];
    var angle = args[0];
    var len = args[1];
    return values[0] = n * angle, values[1] = z * len, values[2] = i * angle, values[3] = y * len, values;
  };
  /**
   * @param {!Array} min
   * @return {?}
   */
  mat2.str = function(min) {
    return "mat2(" + min[0] + ", " + min[1] + ", " + min[2] + ", " + min[3] + ")";
  };
  var p = {};
  /**
   * @return {?}
   */
  p.create = function() {
    var message6 = new Message(6);
    return message6[0] = 1, message6[1] = 0, message6[2] = 0, message6[3] = 1, message6[4] = 0, message6[5] = 0, message6;
  };
  /**
   * @param {!Array} o
   * @return {?}
   */
  p.clone = function(o) {
    var msg = new Message(6);
    return msg[0] = o[0], msg[1] = o[1], msg[2] = o[2], msg[3] = o[3], msg[4] = o[4], msg[5] = o[5], msg;
  };
  /**
   * @param {!Array} oldDot
   * @param {!Array} newDot
   * @return {?}
   */
  p.copy = function(oldDot, newDot) {
    return oldDot[0] = newDot[0], oldDot[1] = newDot[1], oldDot[2] = newDot[2], oldDot[3] = newDot[3], oldDot[4] = newDot[4], oldDot[5] = newDot[5], oldDot;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  p.identity = function(a) {
    return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a;
  };
  /**
   * @param {!Array} r
   * @param {!Array} b
   * @return {?}
   */
  p.invert = function(r, b) {
    var i = b[0];
    var j = b[1];
    var y = b[2];
    var k = b[3];
    var c = b[4];
    var l = b[5];
    /** @type {number} */
    var s = i * k - j * y;
    return s ? (s = 1 / s, r[0] = k * s, r[1] = -j * s, r[2] = -y * s, r[3] = i * s, r[4] = (y * l - k * c) * s, r[5] = (j * c - i * l) * s, r) : null;
  };
  /**
   * @param {!Array} a
   * @return {?}
   */
  p.determinant = function(a) {
    return a[0] * a[3] - a[1] * a[2];
  };
  /**
   * @param {!Array} matrix
   * @param {!Array} data
   * @param {!Array} r
   * @return {?}
   */
  p.multiply = function(matrix, data, r) {
    var cy = data[0];
    var sy = data[1];
    var x0 = data[2];
    var y0 = data[3];
    var x = data[4];
    var y = data[5];
    var a = r[0];
    var b = r[1];
    var c = r[2];
    var d = r[3];
    var newScale = r[4];
    var obj = r[5];
    return matrix[0] = cy * a + sy * c, matrix[1] = cy * b + sy * d, matrix[2] = x0 * a + y0 * c, matrix[3] = x0 * b + y0 * d, matrix[4] = a * x + c * y + newScale, matrix[5] = b * x + d * y + obj, matrix;
  };
  /** @type {function(!Array, !Array, !Array): ?} */
  p.mul = p.multiply;
  /**
   * @param {!Array} z
   * @param {!Array} s
   * @param {?} i
   * @return {?}
   */
  p.rotate = function(z, s, i) {
    var x0 = s[0];
    var t = s[1];
    var a = s[2];
    var c = s[3];
    var f = s[4];
    var e = s[5];
    /** @type {number} */
    var d = Math.sin(i);
    /** @type {number} */
    var b = Math.cos(i);
    return z[0] = x0 * b + t * d, z[1] = -x0 * d + t * b, z[2] = a * b + c * d, z[3] = -a * d + b * c, z[4] = b * f + d * e, z[5] = b * e - d * f, z;
  };
  /**
   * @param {!Array} out
   * @param {!Array} a
   * @param {!Object} x
   * @return {?}
   */
  p.scale = function(out, a, x) {
    var y = x[0];
    var s = x[1];
    return out[0] = a[0] * y, out[1] = a[1] * s, out[2] = a[2] * y, out[3] = a[3] * s, out[4] = a[4] * y, out[5] = a[5] * s, out;
  };
  /**
   * @param {!Array} defaultReplacers
   * @param {!Array} optionalReplacers
   * @param {!Object} formattingOrContext
   * @return {?}
   */
  p.translate = function(defaultReplacers, optionalReplacers, formattingOrContext) {
    return defaultReplacers[0] = optionalReplacers[0], defaultReplacers[1] = optionalReplacers[1], defaultReplacers[2] = optionalReplacers[2], defaultReplacers[3] = optionalReplacers[3], defaultReplacers[4] = optionalReplacers[4] + formattingOrContext[0], defaultReplacers[5] = optionalReplacers[5] + formattingOrContext[1], defaultReplacers;
  };
  /**
   * @param {!Array} min
   * @return {?}
   */
  p.str = function(min) {
    return "mat2d(" + min[0] + ", " + min[1] + ", " + min[2] + ", " + min[3] + ", " + min[4] + ", " + min[5] + ")";
  };
  var GetFlashVars = function(_Point) {
    /**
     * @param {?} attrs
     * @return {?}
     */
    function Model(attrs) {
      callback(this, Model);
      var geometry = $(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, attrs, 3));
      return geometry.addAttribute("position", new Float32Array([-1, -1, 0, 0, 1, 0, 1, -1, 0]), 3), geometry.addAttribute("color", new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), 3), geometry.addAttribute("uv", new Float32Array([0, 0, .5, 1, 1, 0]), 2, "triangle"), geometry;
    }
    return _inherits(Model, _Point), Model;
  }(Point);
  var BetterInterface = function(_Point) {
    /**
     * @param {?} attrs
     * @param {!Object} options
     * @return {?}
     */
    function init(attrs, options) {
      /**
       * @param {number} i
       * @param {number} name
       * @param {number} id
       * @param {number} size
       * @param {number} value
       * @param {number} d
       * @param {number} p
       * @param {number} val
       * @param {number} max
       * @param {number} x
       * @return {undefined}
       */
      function format(i, name, id, size, value, d, p, val, max, x) {
        /** @type {number} */
        lengthSum = 0;
        var len;
        var y;
        /** @type {number} */
        var scale = d / max;
        /** @type {number} */
        var tileHeight = p / x;
        /** @type {number} */
        var h = d / 2;
        /** @type {number} */
        var dy = p / 2;
        /** @type {number} */
        var n = val / 2;
        var size = max + 1;
        var blockCountY = x + 1;
        var data = vec3.create();
        /** @type {number} */
        y = 0;
        for (; y < blockCountY; y++) {
          /** @type {number} */
          var sign = y * tileHeight - dy;
          /** @type {number} */
          len = 0;
          for (; len < size; len++) {
            /** @type {number} */
            var r = len * scale - h;
            /** @type {number} */
            data[i] = r * size;
            /** @type {number} */
            data[name] = sign * value;
            /** @type {number} */
            data[id] = n;
            color.push(data[0], data[1], data[2]);
            /** @type {number} */
            data[i] = 1;
            /** @type {number} */
            data[name] = 1;
            /** @type {number} */
            data[id] = 1;
            colors.push(0, 0, 0);
            /** @type {number} */
            data[i] = 0;
            /** @type {number} */
            data[name] = 0;
            /** @type {number} */
            data[id] = val > 0 ? 1 : -1;
            normals.push(data[0], data[1], data[2]);
            positions.push(len / max);
            positions.push(1 - y / x);
            /** @type {number} */
            lengthSum = lengthSum + 1;
          }
        }
        /** @type {number} */
        y = 0;
        for (; y < x; y++) {
          /** @type {number} */
          len = 0;
          for (; len < max; len++) {
            var exampleStep = offset + len + size * y;
            var i = offset + len + size * (y + 1);
            var cursorY = offset + (len + 1) + size * (y + 1);
            var writeMethodDocs = offset + (len + 1) + size * y;
            steps.push(exampleStep, i, writeMethodDocs);
            steps.push(i, cursorY, writeMethodDocs);
          }
        }
        offset = offset + lengthSum;
      }
      callback(this, init);
      var geometry = $(this, (init.__proto__ || Object.getPrototypeOf(init)).call(this, attrs, 4));
      /** @type {!Object} */
      options = Object.assign({}, {
        width : 10,
        height : 10,
        depth : 10,
        widthSegments : 1,
        heightSegments : 1,
        depthSegments : 1
      }, options);
      /** @type {!Array} */
      var steps = [];
      /** @type {!Array} */
      var color = [];
      /** @type {!Array} */
      var normals = [];
      /** @type {!Array} */
      var positions = [];
      /** @type {!Array} */
      var colors = [];
      /** @type {number} */
      var offset = 0;
      /** @type {number} */
      var lengthSum = 0;
      return format(2, 1, 0, -1, -1, options.depth, options.height, options.width, Math.floor(options.depthSegments), Math.floor(options.heightSegments)), format(2, 1, 0, 1, -1, options.depth, options.height, -options.width, Math.floor(options.depthSegments), Math.floor(options.heightSegments)), format(0, 2, 1, 1, 1, options.width, options.depth, options.height, Math.floor(options.widthSegments), Math.floor(options.depthSegments)), format(0, 2, 1, 1, -1, options.width, options.depth, -options.height, 
      Math.floor(options.widthSegments), Math.floor(options.depthSegments)), format(0, 1, 2, 1, -1, options.width, options.height, options.depth, Math.floor(options.widthSegments), Math.floor(options.heightSegments)), format(0, 1, 2, -1, -1, options.width, options.height, -options.depth, Math.floor(options.widthSegments), Math.floor(options.heightSegments)), geometry.length = offset, geometry.addAttribute("index", new Uint16Array(steps), 1), geometry.addAttribute("position", new Float32Array(color), 
      3), geometry.addAttribute("color", new Float32Array(colors), 3), geometry.addAttribute("normal", new Float32Array(normals), 3), geometry.addAttribute("uv", new Float32Array(positions), 2, "box"), geometry;
    }
    return _inherits(init, _Point), init;
  }(Point);
  var Cursor = function(_Point) {
    /**
     * @param {?} attrs
     * @param {!Object} options
     * @return {?}
     */
    function init(attrs, options) {
      callback(this, init);
      var geometry = $(this, (init.__proto__ || Object.getPrototypeOf(init)).call(this, attrs, 0));
      /** @type {!Object} */
      options = Object.assign({}, {
        radius : 50,
        widthSegments : 8,
        heightSegments : 6,
        phiStart : 0,
        phiLength : 2 * Math.PI,
        thetaStart : 0,
        thetaLength : Math.PI
      }, options);
      var j;
      var i;
      var h = options.radius || 50;
      /** @type {number} */
      var n = Math.max(3, Math.floor(options.widthSegments) || 8);
      /** @type {number} */
      var l = Math.max(2, Math.floor(options.heightSegments) || 6);
      var d = void 0 !== d ? options.phiStart : 0;
      var k = void 0 !== k ? options.phiLength : 2 * Math.PI;
      var x = void 0 !== x ? options.thetaStart : 0;
      var size = void 0 !== size ? options.thetaLength : Math.PI;
      var a = x + size;
      /** @type {number} */
      var regexGroupCount = 0;
      /** @type {!Array} */
      var allEdges = [];
      var origin = vec3.create();
      var p = vec3.create();
      /** @type {!Array} */
      var indices_array = [];
      /** @type {!Array} */
      var buffer = [];
      /** @type {!Array} */
      var tmp = [];
      /** @type {!Array} */
      var colors = [];
      /** @type {!Array} */
      var vertices = [];
      /** @type {number} */
      i = 0;
      for (; i <= l; i++) {
        /** @type {!Array} */
        var e = [];
        /** @type {number} */
        var y = i / l;
        /** @type {number} */
        j = 0;
        for (; j <= n; j++) {
          /** @type {number} */
          var b = j / n;
          /** @type {number} */
          origin[0] = -h * Math.cos(d + b * k) * Math.sin(x + y * size);
          /** @type {number} */
          origin[1] = h * Math.cos(x + y * size);
          /** @type {number} */
          origin[2] = h * Math.sin(d + b * k) * Math.sin(x + y * size);
          buffer.push(origin[0], origin[1], origin[2]);
          vec3.set(p, origin[0], origin[1], origin[2]);
          vec3.normalize(p, p);
          tmp.push(p[0], p[1], p[2]);
          vertices.push(b, 1 - y);
          colors.push(1, 1, 1);
          e.push(regexGroupCount++);
        }
        allEdges.push(e);
      }
      /** @type {number} */
      i = 0;
      for (; i < l; i++) {
        /** @type {number} */
        j = 0;
        for (; j < n; j++) {
          var falseySection = allEdges[i][j + 1];
          var thisOp = allEdges[i][j];
          var boundKeyRangeLower = allEdges[i + 1][j];
          var lenDiffStr = allEdges[i + 1][j + 1];
          if (0 !== i || x > 0) {
            indices_array.push(falseySection, thisOp, lenDiffStr);
          }
          if (i !== l - 1 || a < Math.PI) {
            indices_array.push(thisOp, boundKeyRangeLower, lenDiffStr);
          }
        }
      }
      return geometry.length = buffer.length / 3, geometry.addAttribute("index", new Uint16Array(indices_array), 1), geometry.addAttribute("position", new Float32Array(buffer), 3), geometry.addAttribute("color", new Float32Array(colors), 3), geometry.addAttribute("normal", new Float32Array(tmp), 3), geometry.addAttribute("uv", new Float32Array(vertices), 2, "Sphere"), geometry;
    }
    return _inherits(init, _Point), init;
  }(Point);
  exports.Program = noop;
  exports.ArrayBuffer = AssociationCollection;
  exports.GeometryBuffer = Point;
  exports.Material = Vis;
  exports.Texture = Texture;
  exports.Container = html;
  exports.Mesh = H;
  exports.Renderer = Renderer;
  exports.Camera = Camera;
  exports.Object3d = url;
  exports.FrameBuffer = FrameBuffer;
  exports.Sprite = Sprite;
  exports.ParticleSystem = index;
  exports.vec2 = vec2;
  exports.vec3 = vec3;
  exports.vec4 = vec4;
  exports.mat2 = mat2;
  exports.mat2d = p;
  exports.mat3 = mat3;
  exports.mat4 = mat4;
  exports.quat = quat;
  exports.TriangleGeometryBuffer = GetFlashVars;
  exports.PlaneGeometryBuffer = TextEditor;
  exports.BoxGeometryBuffer = BetterInterface;
  exports.SphereGeometryBuffer = Cursor;
}, function(mixin, canCreateDiscussions, __webpack_require__) {
  /**
   * @param {!NodeList} styles
   * @param {!Object} options
   * @return {undefined}
   */
  function addStylesToDom(styles, options) {
    /** @type {number} */
    var i = 0;
    for (; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];
      if (domStyle) {
        domStyle.refs++;
        /** @type {number} */
        var j = 0;
        for (; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
        for (; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j], options));
        }
      } else {
        /** @type {!Array} */
        var parts = [];
        /** @type {number} */
        j = 0;
        for (; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j], options));
        }
        stylesInDom[item.id] = {
          id : item.id,
          refs : 1,
          parts : parts
        };
      }
    }
  }
  /**
   * @param {!NodeList} data
   * @param {!Object} options
   * @return {?}
   */
  function load(data, options) {
    /** @type {!Array} */
    var csub = [];
    var newStyles = {};
    /** @type {number} */
    var i = 0;
    for (; i < data.length; i++) {
      var item = data[i];
      var id = options.base ? item[0] + options.base : item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = {
        css : css,
        media : media,
        sourceMap : sourceMap
      };
      if (newStyles[id]) {
        newStyles[id].parts.push(part);
      } else {
        csub.push(newStyles[id] = {
          id : id,
          parts : [part]
        });
      }
    }
    return csub;
  }
  /**
   * @param {!Object} options
   * @param {!Node} style
   * @return {undefined}
   */
  function insertStyleElement(options, style) {
    var target = getElement(options.insertInto);
    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    }
    var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
    if ("top" === options.insertAt) {
      if (lastStyleElementInsertedAtTop) {
        if (lastStyleElementInsertedAtTop.nextSibling) {
          target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
        } else {
          target.appendChild(style);
        }
      } else {
        target.insertBefore(style, target.firstChild);
      }
      stylesInsertedAtTop.push(style);
    } else {
      if ("bottom" === options.insertAt) {
        target.appendChild(style);
      } else {
        if ("object" != typeof options.insertAt || !options.insertAt.before) {
          throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        }
        var el = getElement(options.insertInto + " " + options.insertAt.before);
        target.insertBefore(style, el);
      }
    }
  }
  /**
   * @param {!Element} style
   * @return {?}
   */
  function callback(style) {
    if (null === style.parentNode) {
      return false;
    }
    style.parentNode.removeChild(style);
    /** @type {number} */
    var idx = stylesInsertedAtTop.indexOf(style);
    if (idx >= 0) {
      stylesInsertedAtTop.splice(idx, 1);
    }
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function createStyleElement(options) {
    /** @type {!Element} */
    var style = document.createElement("style");
    return void 0 === options.attrs.type && (options.attrs.type = "text/css"), addAttrs(style, options.attrs), insertStyleElement(options, style), style;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function createLinkElement(options) {
    /** @type {!Element} */
    var link = document.createElement("link");
    return void 0 === options.attrs.type && (options.attrs.type = "text/css"), options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), insertStyleElement(options, link), link;
  }
  /**
   * @param {!Element} el
   * @param {!Object} attrs
   * @return {undefined}
   */
  function addAttrs(el, attrs) {
    Object.keys(attrs).forEach(function(att) {
      el.setAttribute(att, attrs[att]);
    });
  }
  /**
   * @param {!Function} obj
   * @param {!Object} options
   * @return {?}
   */
  function addStyle(obj, options) {
    var style;
    var update;
    var remove;
    var dim;
    if (options.transform && obj.css) {
      if (!(dim = options.transform(obj.css))) {
        return function() {
        };
      }
      obj.css = dim;
    }
    if (options.singleton) {
      /** @type {number} */
      var styleIndex = singletonCounter++;
      style = singleton || (singleton = createStyleElement(options));
      update = applyToSingletonTag.bind(null, style, styleIndex, false);
      remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
      if (obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa) {
        style = createLinkElement(options);
        update = updateLink.bind(null, style, options);
        /**
         * @return {undefined}
         */
        remove = function() {
          callback(style);
          if (style.href) {
            URL.revokeObjectURL(style.href);
          }
        };
      } else {
        style = createStyleElement(options);
        update = applyToTag.bind(null, style);
        /**
         * @return {undefined}
         */
        remove = function() {
          callback(style);
        };
      }
    }
    return update(obj), function(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
          return;
        }
        update(obj = newObj);
      } else {
        remove();
      }
    };
  }
  /**
   * @param {!Node} styleElement
   * @param {?} index
   * @param {number} remove
   * @param {!Object} obj
   * @return {undefined}
   */
  function applyToSingletonTag(styleElement, index, remove, obj) {
    var css = remove ? "" : obj.css;
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = replaceText(index, css);
    } else {
      /** @type {!Text} */
      var text = document.createTextNode(css);
      var childNodes = styleElement.childNodes;
      if (childNodes[index]) {
        styleElement.removeChild(childNodes[index]);
      }
      if (childNodes.length) {
        styleElement.insertBefore(text, childNodes[index]);
      } else {
        styleElement.appendChild(text);
      }
    }
  }
  /**
   * @param {!Node} styleElement
   * @param {!Object} obj
   * @return {undefined}
   */
  function applyToTag(styleElement, obj) {
    var css = obj.css;
    var media = obj.media;
    if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      for (; styleElement.firstChild;) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }
  /**
   * @param {!Object} link
   * @param {?} options
   * @param {!Object} target
   * @return {undefined}
   */
  function updateLink(link, options, target) {
    var data = target.css;
    var map = target.sourceMap;
    var autoFixUrls = void 0 === options.convertToAbsoluteUrls && map;
    if (options.convertToAbsoluteUrls || autoFixUrls) {
      data = parse(data);
    }
    if (map) {
      /** @type {string} */
      data = data + ("\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(map)))) + " */");
    }
    /** @type {!Blob} */
    var blob = new Blob([data], {
      type : "text/css"
    });
    var url = link.href;
    /** @type {string} */
    link.href = URL.createObjectURL(blob);
    if (url) {
      URL.revokeObjectURL(url);
    }
  }
  var stylesInDom = {};
  var isOldIE = function(CropAreaRectangle) {
    var _ref12;
    return function() {
      return void 0 === _ref12 && (_ref12 = CropAreaRectangle.apply(this, arguments)), _ref12;
    };
  }(function() {
    return window && document && document.all && !window.atob;
  });
  /**
   * @param {?} nodeOrSelector
   * @return {?}
   */
  var getNode = function(nodeOrSelector) {
    return document.querySelector(nodeOrSelector);
  };
  var getElement = function(canCreateDiscussions) {
    var meta = {};
    return function(name) {
      if ("function" == typeof name) {
        return name();
      }
      if (void 0 === meta[name]) {
        var el = getNode.call(this, name);
        if (window.HTMLIFrameElement && el instanceof window.HTMLIFrameElement) {
          try {
            el = el.contentDocument.head;
          } catch (e) {
            /** @type {null} */
            el = null;
          }
        }
        meta[name] = el;
      }
      return meta[name];
    };
  }();
  /** @type {null} */
  var singleton = null;
  /** @type {number} */
  var singletonCounter = 0;
  /** @type {!Array} */
  var stylesInsertedAtTop = [];
  var parse = __webpack_require__(52);
  /**
   * @param {(Node|NodeList|string)} css
   * @param {!Object} options
   * @return {?}
   */
  mixin.exports = function(css, options) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) {
      throw new Error("The style-loader cannot be used in a non-browser environment");
    }
    options = options || {};
    options.attrs = "object" == typeof options.attrs ? options.attrs : {};
    if (!(options.singleton || "boolean" == typeof options.singleton)) {
      options.singleton = isOldIE();
    }
    if (!options.insertInto) {
      /** @type {string} */
      options.insertInto = "head";
    }
    if (!options.insertAt) {
      /** @type {string} */
      options.insertAt = "bottom";
    }
    var styles = load(css, options);
    return addStylesToDom(styles, options), function(compiled) {
      /** @type {!Array} */
      var targets = [];
      /** @type {number} */
      var i = 0;
      for (; i < styles.length; i++) {
        var item = styles[i];
        var node = stylesInDom[item.id];
        node.refs--;
        targets.push(node);
      }
      if (compiled) {
        addStylesToDom(load(compiled, options), options);
      }
      /** @type {number} */
      i = 0;
      for (; i < targets.length; i++) {
        node = targets[i];
        if (0 === node.refs) {
          /** @type {number} */
          var i = 0;
          for (; i < node.parts.length; i++) {
            node.parts[i]();
          }
          delete stylesInDom[node.id];
        }
      }
    };
  };
  var replaceText = function() {
    /** @type {!Array} */
    var scripts = [];
    return function(name, new_script) {
      return scripts[name] = new_script, scripts.filter(Boolean).join("\n");
    };
  }();
}, function(canCreateDiscussions, exports, i) {
  /**
   * @param {number} r
   * @param {number} radius
   * @param {number} l
   * @param {number} range
   * @param {number} cell
   * @return {?}
   */
  function render(r, radius, l, range, cell) {
    /** @type {!Array} */
    var c = [l / r, range / radius];
    return c = cell ? Math.min(c[0], c[1]) : Math.max(c[0], c[1]), {
      width : r * c,
      height : radius * c
    };
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  /** @type {function(number, number, number, number, number): ?} */
  exports.default = render;
}, function(module, gen34_options, moment) {
  (function(genConfig) {
    !function(addedRenderer, factory) {
      module.exports = factory();
    }(0, function() {
      /**
       * @param {!Object} val
       * @return {?}
       */
      function parse(val) {
        var m;
        /** @type {!Array} */
        var tokens = [];
        /** @type {number} */
        var key = 0;
        /** @type {number} */
        var i = 0;
        /** @type {string} */
        var s = "";
        for (; null != (m = nameParse.exec(val));) {
          /** @type {string} */
          var c = m[0];
          /** @type {string} */
          var e = m[1];
          /** @type {number} */
          var n = m.index;
          if (s = s + val.slice(i, n), i = n + c.length, e) {
            s = s + e[1];
          } else {
            if (s) {
              tokens.push(s);
              /** @type {string} */
              s = "";
            }
            /** @type {string} */
            var prefix = m[2];
            /** @type {string} */
            var name = m[3];
            /** @type {string} */
            var type = m[4];
            /** @type {string} */
            var lasttype = m[5];
            /** @type {string} */
            var tag = m[6];
            /** @type {string} */
            var onlyBlock = m[7];
            /** @type {boolean} */
            var repeat = "+" === tag || "*" === tag;
            /** @type {boolean} */
            var optional = "?" === tag || "*" === tag;
            /** @type {string} */
            var delimiter = prefix || "/";
            /** @type {string} */
            var regex = type || lasttype || (onlyBlock ? ".*" : "[^" + delimiter + "]+?");
            tokens.push({
              name : name || key++,
              prefix : prefix || "",
              delimiter : delimiter,
              optional : optional,
              repeat : repeat,
              pattern : clone(regex)
            });
          }
        }
        return i < val.length && (s = s + val.substr(i)), s && tokens.push(s), tokens;
      }
      /**
       * @param {!Object} str
       * @return {?}
       */
      function compile(str) {
        return tokensToFunction(parse(str));
      }
      /**
       * @param {!NodeList} tokens
       * @return {?}
       */
      function tokensToFunction(tokens) {
        /** @type {!Array} */
        var array_from = new Array(tokens.length);
        /** @type {number} */
        var i = 0;
        for (; i < tokens.length; i++) {
          if ("object" == typeof tokens[i]) {
            /** @type {!RegExp} */
            array_from[i] = new RegExp("^" + tokens[i].pattern + "$");
          }
        }
        return function(_data) {
          /** @type {string} */
          var path = "";
          var data = _data || {};
          /** @type {number} */
          var i = 0;
          for (; i < tokens.length; i++) {
            var token = tokens[i];
            if ("string" != typeof token) {
              var value;
              var val = data[token.name];
              if (null == val) {
                if (token.optional) {
                  continue;
                }
                throw new TypeError('Expected "' + token.name + '" to be defined');
              }
              if (isFunction(val)) {
                if (!token.repeat) {
                  throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + val + '"');
                }
                if (0 === val.length) {
                  if (token.optional) {
                    continue;
                  }
                  throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                /** @type {number} */
                var j = 0;
                for (; j < val.length; j++) {
                  if (value = encodeURIComponent(val[j]), !array_from[i].test(value)) {
                    throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + value + '"');
                  }
                  /** @type {string} */
                  path = path + ((0 === j ? token.prefix : token.delimiter) + value);
                }
              } else {
                if (value = encodeURIComponent(val), !array_from[i].test(value)) {
                  throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + value + '"');
                }
                /** @type {string} */
                path = path + (token.prefix + value);
              }
            } else {
              /** @type {string} */
              path = path + token;
            }
          }
          return path;
        };
      }
      /**
       * @param {string} path
       * @return {?}
       */
      function buildUrl(path) {
        return path.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1");
      }
      /**
       * @param {string} regex
       * @return {?}
       */
      function clone(regex) {
        return regex.replace(/([=!:$\/()])/g, "\\$1");
      }
      /**
       * @param {!Object} obj
       * @param {!Object} name
       * @return {?}
       */
      function callback(obj, name) {
        return obj.keys = name, obj;
      }
      /**
       * @param {!Object} options
       * @return {?}
       */
      function flags(options) {
        return options.sensitive ? "" : "i";
      }
      /**
       * @param {!Object} o
       * @param {!Object} keys
       * @return {?}
       */
      function get(o, keys) {
        var hourBtns = o.source.match(/\((?!\?)/g);
        if (hourBtns) {
          /** @type {number} */
          var h = 0;
          for (; h < hourBtns.length; h++) {
            keys.push({
              name : h,
              prefix : null,
              delimiter : null,
              optional : false,
              repeat : false,
              pattern : null
            });
          }
        }
        return callback(o, keys);
      }
      /**
       * @param {!Object} array
       * @param {number} text
       * @param {number} options
       * @return {?}
       */
      function update(array, text, options) {
        /** @type {!Array} */
        var defaultParts = [];
        /** @type {number} */
        var i = 0;
        for (; i < array.length; i++) {
          defaultParts.push(render(array[i], text, options).source);
        }
        return callback(new RegExp("(?:" + defaultParts.join("|") + ")", flags(options)), text);
      }
      /**
       * @param {!Object} f
       * @param {!Object} obj
       * @param {?} options
       * @return {?}
       */
      function extend(f, obj, options) {
        var a = parse(f);
        var re = tokensToRegExp(a, options);
        /** @type {number} */
        var i = 0;
        for (; i < a.length; i++) {
          if ("string" != typeof a[i]) {
            obj.push(a[i]);
          }
        }
        return callback(re, obj);
      }
      /**
       * @param {!Array} args
       * @param {!Object} options
       * @return {?}
       */
      function tokensToRegExp(args, options) {
        options = options || {};
        var strict = options.strict;
        /** @type {boolean} */
        var end = false !== options.end;
        /** @type {string} */
        var path = "";
        var arg = args[args.length - 1];
        /** @type {boolean} */
        var endsWithSlash = "string" == typeof arg && /\/$/.test(arg);
        /** @type {number} */
        var index = 0;
        for (; index < args.length; index++) {
          var options = args[index];
          if ("string" == typeof options) {
            /** @type {string} */
            path = path + buildUrl(options);
          } else {
            var query = buildUrl(options.prefix);
            var url = options.pattern;
            if (options.repeat) {
              /** @type {string} */
              url = url + ("(?:" + query + url + ")*");
            }
            /** @type {string} */
            url = options.optional ? query ? "(?:" + query + "(" + url + "))?" : "(" + url + ")?" : query + "(" + url + ")";
            /** @type {string} */
            path = path + url;
          }
        }
        return strict || (path = (endsWithSlash ? path.slice(0, -2) : path) + "(?:\\/(?=$))?"), path = path + (end ? "$" : strict && endsWithSlash ? "" : "(?=\\/|$)"), new RegExp("^" + path, flags(options));
      }
      /**
       * @param {!Object} value
       * @param {number} key
       * @param {number} options
       * @return {?}
       */
      function render(value, key, options) {
        return key = key || [], isFunction(key) ? options || (options = {}) : (options = key, key = []), value instanceof RegExp ? get(value, key, options) : isFunction(value) ? update(value, key, options) : extend(value, key, options);
      }
      /**
       * @param {string} path
       * @param {string} fn
       * @return {?}
       */
      function page(path, fn) {
        if ("function" == typeof path) {
          return page("*", path);
        }
        if ("function" == typeof fn) {
          var route = new Route(path);
          /** @type {number} */
          var i = 1;
          for (; i < arguments.length; ++i) {
            page.callbacks.push(route.middleware(arguments[i]));
          }
        } else {
          if ("string" == typeof path) {
            page["string" == typeof fn ? "redirect" : "show"](path, fn);
          } else {
            page.start(path);
          }
        }
      }
      /**
       * @param {?} ctx
       * @return {undefined}
       */
      function unhandled(ctx) {
        if (!ctx.handled) {
          var omIn;
          omIn = hashbang ? b && resolve() + win.location.hash.replace("#!", "") : b && win.location.pathname + win.location.search;
          if (omIn !== ctx.canonicalPath) {
            page.stop();
            /** @type {boolean} */
            ctx.handled = false;
            if (b) {
              win.location.href = ctx.canonicalPath;
            }
          }
        }
      }
      /**
       * @param {string} val
       * @return {?}
       */
      function decodeURLEncodedURIComponent(val) {
        return "string" != typeof val ? val : matches ? decodeURIComponent(val.replace(/\+/g, " ")) : val;
      }
      /**
       * @param {string} path
       * @param {!Object} state
       * @return {undefined}
       */
      function Context(path, state) {
        var base = resolve();
        if ("/" === path[0] && 0 !== path.indexOf(base)) {
          /** @type {string} */
          path = base + (hashbang ? "#!" : "") + path;
        }
        var i = path.indexOf("?");
        if (this.canonicalPath = path, this.path = path.replace(base, "") || "/", hashbang && (this.path = this.path.replace("#!", "") || "/"), this.title = doc && win.document.title, this.state = state || {}, this.state.path = path, this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : "", this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path), this.params = {}, this.hash = "", !hashbang) {
          if (!~this.path.indexOf("#")) {
            return;
          }
          var m = this.path.split("#");
          this.path = this.pathname = m[0];
          this.hash = decodeURLEncodedURIComponent(m[1]) || "";
          this.querystring = this.querystring.split("#")[0];
        }
      }
      /**
       * @param {string} path
       * @param {!Object} options
       * @return {undefined}
       */
      function Route(path, options) {
        options = options || {};
        options.strict = options.strict || view;
        this.path = "*" === path ? "(.*)" : path;
        /** @type {string} */
        this.method = "GET";
        this.regexp = index(this.path, this.keys = [], options);
      }
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      function handler(e) {
        if (1 === isNotLeftButton(e) && !(e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)) {
          var el = e.target;
          var els = e.path || (e.composedPath ? e.composedPath() : null);
          if (els) {
            /** @type {number} */
            var i = 0;
            for (; i < els.length; i++) {
              if (els[i].nodeName && "A" === els[i].nodeName.toUpperCase() && els[i].href) {
                el = els[i];
                break;
              }
            }
          }
          for (; el && "A" !== el.nodeName.toUpperCase();) {
            el = el.parentNode;
          }
          if (el && "A" === el.nodeName.toUpperCase()) {
            /** @type {boolean} */
            var corsAvailable = "object" == typeof el.href && "SVGAnimatedString" === el.href.constructor.name;
            if (!el.hasAttribute("download") && "external" !== el.getAttribute("rel")) {
              var mask = el.getAttribute("href");
              if ((hashbang || !scoreNextPageLinkCandidate(el) || !el.hash && "#" !== mask) && !(mask && mask.indexOf("mailto:") > -1) && (corsAvailable ? !el.target.baseVal : !el.target) && (corsAvailable || sameOrigin(el.href))) {
                var url = corsAvailable ? el.href.baseVal : el.pathname + el.search + (el.hash || "");
                url = "/" !== url[0] ? "/" + url : url;
                if (CMD_REQUIRES_CONFIG && url.match(/^\/[a-zA-Z]:\//)) {
                  url = url.replace(/^\/[a-zA-Z]:\//, "/");
                }
                var id = url;
                var exclude = resolve();
                if (0 === url.indexOf(exclude)) {
                  url = url.substr(path.length);
                }
                if (hashbang) {
                  url = url.replace("#!", "");
                }
                if (!(exclude && id === url)) {
                  e.preventDefault();
                  page.show(id);
                }
              }
            }
          }
        }
      }
      /**
       * @param {!Object} e
       * @return {?}
       */
      function isNotLeftButton(e) {
        return e = e || data && window.event, null == e.which ? e.button : e.which;
      }
      /**
       * @param {!Object} value
       * @return {?}
       */
      function copy(value) {
        if ("function" == typeof URL && b) {
          return new URL(value, location.toString());
        }
        if (doc) {
          /** @type {!Element} */
          var elem = document.createElement("a");
          return elem.href = value, elem;
        }
      }
      /**
       * @param {!Object} a
       * @return {?}
       */
      function sameOrigin(a) {
        if (!a || !b) {
          return false;
        }
        var location = copy(a);
        var url = win.location;
        return url.protocol === location.protocol && url.hostname === location.hostname && url.port === location.port;
      }
      /**
       * @param {!Location} link
       * @return {?}
       */
      function scoreNextPageLinkCandidate(link) {
        if (!b) {
          return false;
        }
        var referenceLocation = win.location;
        return link.pathname === referenceLocation.pathname && link.search === referenceLocation.search;
      }
      /**
       * @return {?}
       */
      function resolve() {
        if (path) {
          return path;
        }
        var URIObj = data && win && win.location;
        return data && hashbang && URIObj && "file:" === URIObj.protocol ? URIObj.pathname : path;
      }
      /** @type {function(*): boolean} */
      var isFunction = Array.isArray || function(obj) {
        return "[object Array]" == Object.prototype.toString.call(obj);
      };
      /** @type {function(!Object, number, number): ?} */
      var index = render;
      /** @type {function(!Object): ?} */
      var parse_1 = parse;
      /** @type {function(!Object): ?} */
      var compile_1 = compile;
      /** @type {function(!NodeList): ?} */
      var tokensToFunction_1 = tokensToFunction;
      /** @type {function(!Array, !Object): ?} */
      var tokensToRegExp_1 = tokensToRegExp;
      /** @type {!RegExp} */
      var nameParse = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
      /** @type {function(!Object): ?} */
      index.parse = parse_1;
      /** @type {function(!Object): ?} */
      index.compile = compile_1;
      /** @type {function(!NodeList): ?} */
      index.tokensToFunction = tokensToFunction_1;
      /** @type {function(!Array, !Object): ?} */
      index.tokensToRegExp = tokensToRegExp_1;
      /** @type {function(string, string): ?} */
      var _page = page;
      /** @type {function(string, string): ?} */
      page.default = page;
      /** @type {function(string, !Object): undefined} */
      page.Context = Context;
      /** @type {function(string, !Object): undefined} */
      page.Route = Route;
      /** @type {function(!Object): ?} */
      page.sameOrigin = sameOrigin;
      var A;
      var config;
      var win;
      /** @type {boolean} */
      var doc = "undefined" != typeof document;
      /** @type {boolean} */
      var data = "undefined" != typeof window;
      /** @type {boolean} */
      var refresh = "undefined" != typeof history;
      /** @type {boolean} */
      var CMD_REQUIRES_CONFIG = void 0 !== genConfig;
      /** @type {string} */
      var actionEvent = doc && document.ontouchstart ? "touchstart" : "click";
      /** @type {boolean} */
      var b = data && !(!window.history.location && !window.location);
      /** @type {boolean} */
      var dispatch = true;
      /** @type {boolean} */
      var matches = true;
      /** @type {string} */
      var path = "";
      /** @type {boolean} */
      var view = false;
      /** @type {boolean} */
      var hashbang = false;
      /** @type {!Array} */
      page.callbacks = [];
      /** @type {!Array} */
      page.exits = [];
      /** @type {string} */
      page.current = "";
      /** @type {number} */
      page.len = 0;
      /**
       * @param {!Object} name
       * @return {?}
       */
      page.base = function(name) {
        if (0 === arguments.length) {
          return path;
        }
        /** @type {!Object} */
        path = name;
      };
      /**
       * @param {boolean} name
       * @return {?}
       */
      page.strict = function(name) {
        if (0 === arguments.length) {
          return view;
        }
        /** @type {boolean} */
        view = name;
      };
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      page.start = function(options) {
        if (options = options || {}, !A && (A = true, win = options.window || data && window, false === options.dispatch && (dispatch = false), false === options.decodeURLComponents && (matches = false), false !== options.popstate && data && win.addEventListener("popstate", focusHandler, false), false !== options.click && doc && win.document.addEventListener(actionEvent, handler, false), hashbang = !!options.hashbang, hashbang && data && !refresh && win.addEventListener("hashchange", focusHandler, 
        false), dispatch)) {
          var t;
          if (b) {
            var loc = win.location;
            t = hashbang && ~loc.hash.indexOf("#!") ? loc.hash.substr(2) + loc.search : hashbang ? loc.search + loc.hash : loc.pathname + loc.search + loc.hash;
          }
          page.replace(t, null, true, dispatch);
        }
      };
      /**
       * @return {undefined}
       */
      page.stop = function() {
        if (A) {
          /** @type {string} */
          page.current = "";
          /** @type {number} */
          page.len = 0;
          /** @type {boolean} */
          A = false;
          if (doc) {
            win.document.removeEventListener(actionEvent, handler, false);
          }
          if (data) {
            win.removeEventListener("popstate", focusHandler, false);
          }
          if (data) {
            win.removeEventListener("hashchange", focusHandler, false);
          }
        }
      };
      /**
       * @param {?} path
       * @param {boolean} state
       * @param {!Object} i
       * @param {boolean} eof
       * @return {?}
       */
      page.show = function(path, state, i, eof) {
        var ctx = new Context(path, state);
        var x = config;
        return config = ctx, page.current = ctx.path, false !== i && page.dispatch(ctx, x), false !== ctx.handled && false !== eof && ctx.pushState(), ctx;
      };
      /**
       * @param {?} path
       * @param {boolean} state
       * @return {undefined}
       */
      page.back = function(path, state) {
        if (page.len > 0) {
          if (refresh) {
            win.history.back();
          }
          page.len--;
        } else {
          if (path) {
            setTimeout(function() {
              page.show(path, state);
            });
          } else {
            setTimeout(function() {
              page.show(resolve(), state);
            });
          }
        }
      };
      /**
       * @param {undefined} to
       * @param {!Array} url
       * @return {undefined}
       */
      page.redirect = function(to, url) {
        if ("string" == typeof to && "string" == typeof url) {
          page(to, function(canCreateDiscussions) {
            setTimeout(function() {
              page.replace(url);
            }, 0);
          });
        }
        if ("string" == typeof to && void 0 === url) {
          setTimeout(function() {
            page.replace(to);
          }, 0);
        }
      };
      /**
       * @param {!Object} type
       * @param {string} data
       * @param {boolean} init
       * @param {boolean} dispatch
       * @return {?}
       */
      page.replace = function(type, data, init, dispatch) {
        var ctx = new Context(type, data);
        var x = config;
        return config = ctx, page.current = ctx.path, ctx.init = init, ctx.save(), false !== dispatch && page.dispatch(ctx, x), ctx;
      };
      /**
       * @param {!Request} ctx
       * @param {?} a
       * @return {undefined}
       */
      page.dispatch = function(ctx, a) {
        /**
         * @return {?}
         */
        function nextExit() {
          var fn = page.exits[j++];
          if (!fn) {
            return nextEnter();
          }
          fn(a, nextExit);
        }
        /**
         * @return {?}
         */
        function nextEnter() {
          var fn = page.callbacks[i++];
          return ctx.path !== page.current ? void(ctx.handled = false) : fn ? void fn(ctx, nextEnter) : unhandled(ctx);
        }
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var j = 0;
        if (a) {
          nextExit();
        } else {
          nextEnter();
        }
      };
      /**
       * @param {string} data
       * @param {string} state
       * @return {?}
       */
      page.exit = function(data, state) {
        if ("function" == typeof data) {
          return page.exit("*", data);
        }
        var r = new Route(data);
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; ++i) {
          page.exits.push(r.middleware(arguments[i]));
        }
      };
      /** @type {function(string, !Object): undefined} */
      page.Context = Context;
      /**
       * @return {undefined}
       */
      Context.prototype.pushState = function() {
        page.len++;
        if (refresh) {
          win.history.pushState(this.state, this.title, hashbang && "/" !== this.path ? "#!" + this.path : this.canonicalPath);
        }
      };
      /**
       * @return {undefined}
       */
      Context.prototype.save = function() {
        if (refresh && "file:" !== win.location.protocol) {
          win.history.replaceState(this.state, this.title, hashbang && "/" !== this.path ? "#!" + this.path : this.canonicalPath);
        }
      };
      /** @type {function(string, !Object): undefined} */
      page.Route = Route;
      /**
       * @param {?} cb
       * @return {?}
       */
      Route.prototype.middleware = function(cb) {
        var router = this;
        return function(route, diff) {
          if (router.match(route.path, route.params)) {
            return cb(route, diff);
          }
          diff();
        };
      };
      /**
       * @param {!Object} path
       * @param {!Object} obj
       * @return {?}
       */
      Route.prototype.match = function(path, obj) {
        var keys = this.keys;
        var qsIndex = path.indexOf("?");
        var pathname = ~qsIndex ? path.slice(0, qsIndex) : path;
        var parts = this.regexp.exec(decodeURIComponent(pathname));
        if (!parts) {
          return false;
        }
        /** @type {number} */
        var i = 1;
        var parts_length = parts.length;
        for (; i < parts_length; ++i) {
          var key = keys[i - 1];
          var val = decodeURLEncodedURIComponent(parts[i]);
          if (!(void 0 === val && hasOwnProperty.call(obj, key.name))) {
            obj[key.name] = val;
          }
        }
        return true;
      };
      var focusHandler = function() {
        /** @type {boolean} */
        var e = false;
        if (data) {
          return doc && "complete" === document.readyState ? e = true : window.addEventListener("load", function() {
            setTimeout(function() {
              /** @type {boolean} */
              e = true;
            }, 0);
          }), function(data) {
            if (e) {
              if (data.state) {
                var i = data.state.path;
                page.replace(i, data.state);
              } else {
                if (b) {
                  var loc = win.location;
                  page.show(loc.pathname + loc.hash, void 0, void 0, false);
                }
              }
            }
          };
        }
      }();
      return page.sameOrigin = sameOrigin, _page;
    });
  }).call(gen34_options, moment(8));
}, function(blob, canCreateDiscussions) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function type(obj) {
    return null != obj && "object" == typeof obj;
  }
  /** @type {function(?): ?} */
  blob.exports = type;
}, function(mixin, canCreateDiscussions) {
  /**
   * @return {?}
   */
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  /**
   * @return {?}
   */
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  /**
   * @param {!Function} fun
   * @return {?}
   */
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      return cachedSetTimeout = setTimeout, setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (t) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (t) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  /**
   * @param {?} marker
   * @return {?}
   */
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      return cachedClearTimeout = clearTimeout, clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (t) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (t) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function cleanUpNextTick() {
    if (f && currentQueue) {
      /** @type {boolean} */
      f = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        /** @type {number} */
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function drainQueue() {
    if (!f) {
      var timeout = runTimeout(cleanUpNextTick);
      /** @type {boolean} */
      f = true;
      var len = queue.length;
      for (; len;) {
        currentQueue = queue;
        /** @type {!Array} */
        queue = [];
        for (; ++queueIndex < len;) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        /** @type {number} */
        queueIndex = -1;
        /** @type {number} */
        len = queue.length;
      }
      /** @type {null} */
      currentQueue = null;
      /** @type {boolean} */
      f = false;
      runClearTimeout(timeout);
    }
  }
  /**
   * @param {(Object|string)} fun
   * @param {!Array} array
   * @return {undefined}
   */
  function Item(fun, array) {
    /** @type {(Object|string)} */
    this.fun = fun;
    /** @type {!Array} */
    this.array = array;
  }
  /**
   * @return {undefined}
   */
  function noop() {
  }
  var cachedSetTimeout;
  var cachedClearTimeout;
  var process = mixin.exports = {};
  !function() {
    try {
      /** @type {!Function} */
      cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
    } catch (e) {
      /** @type {function(): ?} */
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      /** @type {!Function} */
      cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
    } catch (e) {
      /** @type {function(): ?} */
      cachedClearTimeout = defaultClearTimeout;
    }
  }();
  var currentQueue;
  /** @type {!Array} */
  var queue = [];
  /** @type {boolean} */
  var f = false;
  /** @type {number} */
  var queueIndex = -1;
  /**
   * @param {!Function} fun
   * @return {undefined}
   */
  process.nextTick = function(fun) {
    /** @type {!Array} */
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (!(1 !== queue.length || f)) {
      runTimeout(drainQueue);
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  /** @type {string} */
  process.title = "browser";
  /** @type {boolean} */
  process.browser = true;
  process.env = {};
  /** @type {!Array} */
  process.argv = [];
  /** @type {string} */
  process.version = "";
  process.versions = {};
  /** @type {function(): undefined} */
  process.on = noop;
  /** @type {function(): undefined} */
  process.addListener = noop;
  /** @type {function(): undefined} */
  process.once = noop;
  /** @type {function(): undefined} */
  process.off = noop;
  /** @type {function(): undefined} */
  process.removeListener = noop;
  /** @type {function(): undefined} */
  process.removeAllListeners = noop;
  /** @type {function(): undefined} */
  process.emit = noop;
  /** @type {function(): undefined} */
  process.prependListener = noop;
  /** @type {function(): undefined} */
  process.prependOnceListener = noop;
  /**
   * @param {string} type
   * @return {?}
   */
  process.listeners = function(type) {
    return [];
  };
  /**
   * @param {?} name
   * @return {?}
   */
  process.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  /**
   * @return {?}
   */
  process.cwd = function() {
    return "/";
  };
  /**
   * @param {?} dir
   * @return {?}
   */
  process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  /**
   * @return {?}
   */
  process.umask = function() {
    return 0;
  };
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!AudioNode} sub
   * @param {!Function} type
   * @return {undefined}
   */
  function f(sub, type) {
    if (!(sub instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var computeOctave = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _deepAssign = __webpack_require__(2);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var offsetFromCenter = function() {
    /**
     * @param {!Object} o
     * @return {undefined}
     */
    function step(o) {
      f(this, step);
      this.step = o.step || function() {
      };
      this.end = o.end || function() {
      };
      this.direction = o.direction || 1;
      this.duration = o.duration || 1e3;
      this.easing = o.easing || [.55, .085, .68, .53];
      this.delay = o.delay || 0;
      /** @type {number} */
      this._progress = 0;
      /** @type {number} */
      this._easedProgress = 0;
      this.update();
    }
    return computeOctave(step, [{
      key : "play",
      value : function() {
        var self = this;
        clearTimeout(this._delayTimer);
        /** @type {number} */
        this._delayTimer = setTimeout(function() {
          /** @type {number} */
          self._progress = 1 == self.direction ? 0 : 1;
          /** @type {number} */
          self._easedProgress = 1 == self.direction ? 0 : 1;
          /** @type {boolean} */
          self.isPlaying = true;
        }, this.delay);
      }
    }, {
      key : "pause",
      value : function() {
        clearTimeout(this._delayTimer);
        /** @type {boolean} */
        this.isPlaying = false;
      }
    }, {
      key : "reset",
      value : function() {
        /** @type {number} */
        this._progress = 0;
      }
    }, {
      key : "update",
      value : function() {
        var prevPageButtonSprite = this;
        requestAnimationFrame(function() {
          prevPageButtonSprite.update();
        });
        if (this.isPlaying) {
          this._progress += 1 / (this.duration / (1e3 / 60)) * this.direction;
          this._easedProgress = (0, _deepAssign2.default)(this.easing[0], this.easing[1], this.easing[2], this.easing[3], Math.max(0, Math.min(1, this._progress)), 1);
          if (1 == this.direction && this._easedProgress < 1 || -1 == this.direction && this._easedProgress > 0) {
            this.step(this._easedProgress, this._progress);
          } else {
            /** @type {boolean} */
            this.isPlaying = false;
            /** @type {number} */
            this._progress = 1 == this.direction ? 1 : 0;
            /** @type {number} */
            this._easedProgress = 1 == this.direction ? 1 : 0;
            this.step(this._easedProgress, this._progress);
            this.end();
          }
        }
      }
    }]), step;
  }();
  t.default = offsetFromCenter;
}, function(module, canCreateDiscussions, i) {
  var storeMixin = function() {
    /**
     * @param {!Array} options
     * @return {undefined}
     */
    function Plugin(options) {
      var context = {
        callback : function() {
        },
        elem : document,
        preventMouse : true
      };
      /** @type {string} */
      this.eventWheel = "onwheel" in document ? "wheel" : "mousewheel";
      this._options = extend(context, options);
      /** @type {!Array} */
      this._deltaArray = [0, 0, 0];
      /** @type {boolean} */
      this._isAcceleration = false;
      /** @type {boolean} */
      this._isStopped = true;
      /** @type {string} */
      this._direction = "";
      /** @type {string} */
      this._timer = "";
      /** @type {boolean} */
      this._isWorking = true;
      var self = this;
      /**
       * @param {!Object} e
       * @return {undefined}
       */
      this._wheelHandler = function(e) {
        if (self._isWorking) {
          init.call(self, e);
          if (self._options.preventMouse) {
            preventDefault(e);
          }
        }
      };
      _init(this._options.elem, this.eventWheel, this._wheelHandler);
    }
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    function get(e) {
      e.direction = this._direction;
      this._options.callback.call(this, e);
    }
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    function preventDefault(event) {
      event = event || window.event;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        /** @type {boolean} */
        event.returnValue = false;
      }
    }
    /**
     * @param {!Object} index
     * @return {undefined}
     */
    function init(index) {
      var that = this;
      var delta = abs(index);
      if (0 !== delta) {
        var r;
        /** @type {string} */
        var direction = delta > 0 ? "down" : "up";
        var readersLength = that._deltaArray.length;
        /** @type {boolean} */
        var l = false;
        /** @type {number} */
        var diffY = 0;
        clearTimeout(that._timer);
        /** @type {number} */
        that._timer = setTimeout(function() {
          /** @type {!Array} */
          that._deltaArray = [0, 0, 0];
          /** @type {boolean} */
          that._isStopped = true;
          /** @type {string} */
          that._direction = direction;
        }, 150);
        /** @type {number} */
        r = 0;
        for (; r < readersLength; r++) {
          if (0 !== that._deltaArray[r]) {
            if (that._deltaArray[r] > 0) {
              ++diffY;
            } else {
              --diffY;
            }
          }
        }
        if (Math.abs(diffY) === readersLength && (diffY > 0 ? "down" : "up") !== that._direction) {
          /** @type {boolean} */
          l = true;
          /** @type {string} */
          that._direction = direction;
        }
        if (!that._isStopped) {
          if (l) {
            /** @type {boolean} */
            that._isAcceleration = true;
            get.call(this, index);
          } else {
            if (Math.abs(diffY) === readersLength) {
              filterInclusiveStart.call(this, index);
            }
          }
        }
        if (that._isStopped) {
          /** @type {boolean} */
          that._isStopped = false;
          /** @type {boolean} */
          that._isAcceleration = true;
          /** @type {string} */
          that._direction = direction;
          get.call(this, index);
        }
        that._deltaArray.shift();
        that._deltaArray.push(delta);
      }
    }
    /**
     * @param {!Object} index
     * @return {undefined}
     */
    function filterInclusiveStart(index) {
      /** @type {number} */
      var len = Math.abs(this._deltaArray[0]);
      /** @type {number} */
      var end = Math.abs(this._deltaArray[1]);
      /** @type {number} */
      var y = Math.abs(this._deltaArray[2]);
      /** @type {number} */
      var x = Math.abs(abs(index));
      if (x > y && y > end && end > len) {
        if (!this._isAcceleration) {
          get.call(this, index);
          /** @type {boolean} */
          this._isAcceleration = true;
        }
      }
      if (x < y && y <= end) {
        /** @type {boolean} */
        this._isAcceleration = false;
      }
    }
    /**
     * @param {!Object} canvas
     * @param {string} type
     * @param {!Function} handler
     * @return {undefined}
     */
    function _init(canvas, type, handler) {
      if (canvas.addEventListener) {
        canvas.addEventListener(type, handler, false);
      } else {
        if (canvas.attachEvent) {
          canvas.attachEvent("on" + type, handler);
        }
      }
    }
    /**
     * @param {!Element} elem
     * @param {string} type
     * @param {!Function} fn
     * @return {undefined}
     */
    function removeEvent(elem, type, fn) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, fn, false);
      } else {
        if (elem.detachEvent) {
          elem.detachEvent("on" + type, fn);
        }
      }
    }
    /**
     * @param {!Array} a
     * @param {!Array} obj
     * @return {?}
     */
    function extend(a, obj) {
      var key;
      var target = {};
      for (key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
          target[key] = a[key];
        }
      }
      for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          target[key] = obj[key];
        }
      }
      return target;
    }
    Plugin.prototype = {
      constructor : Plugin,
      turnOn : function() {
        return this._isWorking = true, this;
      },
      turnOff : function() {
        return this._isWorking = false, this;
      },
      setOptions : function(defaults) {
        return this._options = extend(this._options, defaults), this;
      },
      getOption : function(name) {
        var option = this._options[name];
        if (void 0 !== option) {
          return option;
        }
        throw new Error("Unknown option");
      },
      destroy : function() {
        return removeEvent(this._options.elem, this.eventWheel, this._wheelHandler), this;
      }
    };
    /**
     * @param {!Object} options
     * @return {?}
     */
    var abs = function(options) {
      return (abs = options.wheelDelta && !options.deltaY ? function(e) {
        return -1 * e.wheelDelta;
      } : function(template) {
        return template.deltaY;
      })(options);
    };
    return Plugin;
  }();
  module.exports = storeMixin;
}, function(canCreateDiscussions, t, saveNotifs) {
  /**
   * @param {!AudioNode} elem
   * @param {!Function} type
   * @return {undefined}
   */
  function on(elem, type) {
    if (!(elem instanceof type)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var debug = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var FeatureMoveInteraction = saveNotifs(0);
  var offsetFromCenter = function() {
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    function show(data) {
      on(this, show);
      /** @type {!Object} */
      data = Object.assign({}, {
        elem : document,
        callback : function() {
        },
        maxDelta : 50,
        preventMouse : true
      }, data);
      this.elem = data.elem;
      this.callback = data.callback;
      this.maxDelta = data.maxDelta;
      this.preventMouse = data.preventMouse;
      this._onPointerDown = this._onPointerDown.bind(this);
      this._onPointerMove = this._onPointerMove.bind(this);
      this._onPointerUp = this._onPointerUp.bind(this);
      this.elem.addEventListener(FeatureMoveInteraction.support.pointerdown, this._onPointerDown, {
        passive : false
      });
      document.addEventListener(FeatureMoveInteraction.support.pointermove, this._onPointerMove, {
        passive : false
      });
      document.addEventListener(FeatureMoveInteraction.support.pointerup, this._onPointerUp, {
        passive : false
      });
      /** @type {boolean} */
      this._isPointerDown = false;
    }
    return debug(show, [{
      key : "destroy",
      value : function() {
        this.elem.removeEventListener(FeatureMoveInteraction.support.pointerdown, this._onPointerDown);
        document.removeEventListener(FeatureMoveInteraction.support.pointermove, this._onPointerMove);
        document.removeEventListener(FeatureMoveInteraction.support.pointerup, this._onPointerUp);
      }
    }, {
      key : "_onPointerDown",
      value : function(name) {
        /** @type {boolean} */
        this._isPointerDown = true;
        /** @type {number} */
        this._moveDelta = 0;
        this._pointerStartEvent = FeatureMoveInteraction.support.touch && "mousemove" != name.type ? name.touches[0] || name.changedTouches[0] : name;
        /** @type {number} */
        this._pointerStart = this._pointerStartEvent.pageY - (window.pageYOffset || document.documentElement.scrollTop);
      }
    }, {
      key : "_onPointerMove",
      value : function(name) {
        if (this._isPointerDown) {
          if (this.preventMouse) {
            name.preventDefault();
            /** @type {string} */
            document.documentElement.style.touchAction = "none";
          }
          var evt = FeatureMoveInteraction.support.touch && "mousemove" != name.type ? name.touches[0] || name.changedTouches[0] : name;
          /** @type {number} */
          var curY = evt.pageY - (window.pageYOffset || document.documentElement.scrollTop);
          /** @type {number} */
          this._moveDelta = curY - this._pointerStartEvent.pageY;
        }
      }
    }, {
      key : "_onPointerUp",
      value : function(name) {
        if (this._isPointerDown) {
          /** @type {boolean} */
          this._isPointerDown = false;
          if (Math.abs(this._moveDelta) > this.maxDelta) {
            this.callback({
              direction : this._moveDelta > 0 ? "up" : "down"
            });
          }
          if (this.preventMouse) {
            /** @type {string} */
            document.documentElement.style.touchAction = "auto";
          }
        }
      }
    }]), show;
  }();
  t.default = offsetFromCenter;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\n\nuniform mat4 uMMatrix;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\n\n\nvarying vec3 vColor;\nvarying vec2 vUv;\nvarying vec3 vPos;\nvarying vec3 vViewPosition;\nvarying vec3 vViewNormal;\n\n\nuniform float billboard;\n\n\n\n\n\nuniform int useNormalMap;\n\n// #ifdef USE_NORMALMAP\n\tvarying vec4 Vertex_Normal;\n\tvarying vec4 Vertex_LightDir;\n\tvarying vec4 Vertex_EyeVec;\n\tuniform vec3 lightPos;\n// #endif\n\n\n\nvoid main(void) {\n\n\tvColor = color;\n\tvUv = uv;\n\n\tvec3 newPosition = position;\n\n\tvPos = (uMMatrix * vec4(newPosition, 1.0)).rgb;\n\n  \tvViewPosition = (uMVMatrix * vec4( newPosition, 1.0 )).xyz;\n\n  \tvViewNormal   = (uMVMatrix * vec4( vec3(0.,0.,1.), 1.0 )).xyz;\n\n\nif (useNormalMap == 1) {\n\tVertex_Normal = uMVMatrix  * vec4( vec3(0.,0.,1.), 1.0 );\n    vec4 view_vertex = uMVMatrix * vec4( newPosition, 1.0 );\n    Vertex_LightDir = vec4( lightPos, 1.0 ) - view_vertex;\n    Vertex_EyeVec = view_vertex;\n}\n\n\n\tif (billboard == 1.) {\n\t\tmat4 billboardMVMatrix = uMVMatrix;\n\n\t\tfloat sx = length(vec3(billboardMVMatrix[0][0], billboardMVMatrix[0][1], billboardMVMatrix[0][2]));\n\t\tfloat sy = length(vec3(billboardMVMatrix[1][0], billboardMVMatrix[1][1], billboardMVMatrix[1][2]));\n\t\tfloat sz = length(vec3(billboardMVMatrix[2][0], billboardMVMatrix[2][1], billboardMVMatrix[2][2]));\n\n\t\tbillboardMVMatrix[0][0] = sx; \n\t\tbillboardMVMatrix[0][1] = 0.0; \n\t\tbillboardMVMatrix[0][2] = 0.0; \n\n\t\tbillboardMVMatrix[1][0] = 0.0; \n\t\tbillboardMVMatrix[1][1] = sy;\n\t\tbillboardMVMatrix[1][2] = 0.0; \n\n\t\tbillboardMVMatrix[2][0] = 0.0; \n\t\tbillboardMVMatrix[2][1] = 0.0; \n\t\tbillboardMVMatrix[2][2] = sz;\n\n\t\tgl_Position = uPMatrix * billboardMVMatrix * vec4(newPosition, 1.0);\n\n\t}\n\telse {\n\t    gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);\n\t}\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\n\n#ifdef USE_DISPLACE\n\tuniform sampler2D tDisplace;\n#endif\n\n\nvoid main(void) {\n\n\tvUv = uv;\n\n\tvec3 newpos = position;\n\n\t#ifdef USE_DISPLACE\n\t\tnewpos.z += texture2D(tDisplace, vUv).r * 200.; \n\t#endif\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(newpos, 1.0);\n\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "precision highp float;\n\nuniform sampler2D tAlpha;\nvarying vec2 vUv;\n\n\nuniform vec2 alphaFrameUvs; \nuniform vec2 alphaFrameSize;\nuniform vec2 alphaAtlasSize;\n\t\t\nuniform int useTexture;\n\nvoid main() {\n\n\tif (useTexture==1) {\n\t\tvec2 alphaUvs =  (vec2(vUv.x,1.-vUv.y) * alphaFrameSize) / alphaAtlasSize\n\t\t\t\t\t\t\t+ vec2(alphaFrameUvs.x, alphaFrameUvs.y) / alphaAtlasSize;\n\n\t\talphaUvs = vec2(alphaUvs.x, 1.-alphaUvs.y);\n\n\t\tif (texture2D(tAlpha, alphaUvs).r < 0.5 ) {\n\t\t\tdiscard;\n\t\t}\n\t}\n\n\tgl_FragColor = vec4(vec3(gl_FragCoord.z), 1.);\n\t\n}";
}, function(canCreateDiscussions, isSlidingUp, require) {
  require(16);
  require(17);
  require(23);
  require(25);
  require(26);
  require(28);
  require(29);
  require(33);
  require(35);
  require(37);
  require(39);
  require(40);
  require(41);
  require(44);
  require(48);
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then(function(canCreateDiscussions) {
    }).catch(function(canCreateDiscussions) {
    });
  }
  if ("function" != typeof Object.assign) {
    /**
     * @param {!Object} object
     * @param {...(Object|null)} callback
     * @return {!Object}
     */
    Object.assign = function(object, callback) {
      if (null == object) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      /** @type {!Object} */
      var obj = Object(object);
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var array = arguments[i];
        if (null != array) {
          var i;
          for (i in array) {
            if (Object.prototype.hasOwnProperty.call(array, i)) {
              obj[i] = array[i];
            }
          }
        }
      }
      return obj;
    };
  }
  require(50);
  require(53);
  require(55);
  require(57).default();
  require(64).default();
}, function(canCreateDiscussions, isSlidingUp, i) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var m = i(0);
  var a = i(6);
  var link = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(a);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "attached",
      value : function() {
        link.default.base(this.props.base);
        var i;
        for (i in this.props.routes) {
          this.addRoute(i);
        }
        (0, link.default)("*", this.notFound.bind(this));
        link.default.start(this.props.options);
      }
    }, {
      key : "addRoute",
      value : function(name) {
        /**
         * @param {?} context
         * @param {?} next
         * @return {undefined}
         */
        var close = function(context, next) {
          this.onRoute(name, context, next);
        };
        (0, link.default)(name, close.bind(this));
      }
    }, {
      key : "onRoute",
      value : function(name, req, permissions) {
        this.props.oldLocation = null == this.props.location ? {
          path : null,
          componentId : null
        } : this.props.location;
        this.props.location = {
          regexp : name,
          path : req.pathname,
          componentId : this.props.routes[name].componentId,
          params : req.params,
          query : req.querystring,
          completePath : req.path
        };
        this.props.onRouteChange(this.props.location, this.props.oldLocation);
      }
    }, {
      key : "notFound",
      value : function() {
        setTimeout(function() {
          (0, link.default)("/404");
        }, 10);
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          routes : {
            type : "json",
            value : null
          },
          options : {
            type : "json",
            value : null
          },
          base : "",
          location : null,
          oldLocation : null,
          onRouteChange : {
            type : "func",
            value : function() {
            }
          },
          onOpenPopin : {
            type : "func",
            value : function() {
            }
          }
        };
      }
    }]), Agent;
  }(m.Component);
  (0, m.register)("core-route", artistTrack);
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var root = __webpack_require__(0);
  var _superagent = __webpack_require__(18);
  var _superagent2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_superagent);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "_onReload",
      value : function() {
        if (this.props.reload) {
          this.load();
        }
      }
    }, {
      key : "ready",
      value : function() {
        if (this.props.auto && null != this.props.src && "null" != this.props.src) {
          this.load();
        }
      }
    }, {
      key : "onSrcChange",
      value : function() {
        if (this.props.sendOnSrcChange) {
          this.load();
        }
      }
    }, {
      key : "onDataChange",
      value : function() {
        if (this.props.sendOnDataChange) {
          this.load();
        }
      }
    }, {
      key : "load",
      value : function() {
        var that = this;
        if (this.props.headers.Token = root.EventDispatcher.request("token:get"), this.props.src && "get" == this.props.method.toLowerCase()) {
          var _ = _superagent2.default.get(this.props.src);
          var i;
          for (i in this.props.data) {
            if (this.props.data.hasOwnProperty(i)) {
              if ("[object Array]" === Object.prototype.toString.call(this.props.data[i])) {
                /** @type {number} */
                var j = 0;
                for (; j < this.props.data[i].length; j++) {
                  var o = {};
                  o[i + "[]"] = this.props.data[i][j];
                  _.query(o);
                }
              } else {
                var n = {};
                n[i] = this.props.data[i];
                _.query(n);
              }
            }
          }
          _.set(this.props.headers).end(function(exception, _relativePath) {
            requestAnimationFrame(function() {
              if (exception) {
                that.props.onError(exception);
              } else {
                that.props.onSuccess(_relativePath);
              }
            });
          });
        } else {
          if (!this.props.src) {
            return;
          }
          var self = _superagent2.default.post(this.props.src);
          if ("multipart/form-data" !== this.props.contentType) {
            self.type(this.props.contentType);
            var key;
            for (key in this.props.data) {
              if ("[object Array]" === Object.prototype.toString.call(this.props.data[key])) {
                var errors = {};
                errors[key + "[]"] = this.props.data[key];
                self.send(errors);
              } else {
                var p = {};
                p[key] = this.props.data[key];
                self.send(p);
              }
            }
          } else {
            for (key in this.props.data) {
              if (this.props.data[key] instanceof File) {
                self.attach(key, this.props.data[key], this.props.data[key].name);
              } else {
                if ("[object Array]" === Object.prototype.toString.call(this.props.data[key])) {
                  /** @type {number} */
                  var i = 0;
                  for (; i < this.props.data[key].length; i++) {
                    var models = {};
                    models[key + "[]"] = this.props.data[key][i];
                    self.field(key + "[]", this.props.data[key][i]);
                  }
                } else {
                  self.field(key, this.props.data[key]);
                }
              }
            }
          }
          self.set(this.props.headers).end(function(exception, e) {
            if (!e.body) {
              try {
                JSON.parse(e.text);
              } catch (t) {
                return void that.props.onError("internal server error");
              }
            }
            requestAnimationFrame(function() {
              if (exception) {
                that.props.onError(exception);
              } else {
                that.props.onSuccess(e);
              }
            });
          });
        }
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          src : {
            value : null,
            change : "onSrcChange"
          },
          method : "get",
          data : {
            type : "json",
            value : null,
            change : "onDataChange"
          },
          onSuccess : {
            type : "func",
            value : function() {
            }
          },
          onError : {
            type : "func",
            value : function() {
            }
          },
          contentType : {
            type : "string",
            value : "application/json"
          },
          auto : {
            type : "bool",
            value : true
          },
          headers : {
            type : "json",
            value : {}
          },
          reload : {
            type : "bool",
            value : false,
            change : "_onReload"
          },
          sendOnSrcChange : {
            type : "bool",
            value : true
          },
          sendOnDataChange : {
            type : "bool",
            value : true
          }
        };
      }
    }]), Agent;
  }(root.Component);
  (0, root.register)("core-ajax", artistTrack);
}, function(module, canCreateDiscussions, require) {
  /**
   * @return {undefined}
   */
  function noop() {
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function isHost(obj) {
    switch({}.toString.call(obj)) {
      case "[object File]":
      case "[object Blob]":
      case "[object FormData]":
        return true;
      default:
        return false;
    }
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function serialize(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    /** @type {!Array} */
    var passedValue1 = [];
    var name;
    for (name in obj) {
      if (null != obj[name]) {
        f(passedValue1, name, obj[name]);
      }
    }
    return passedValue1.join("&");
  }
  /**
   * @param {!Array} b
   * @param {string} res
   * @param {!Object} name
   * @return {?}
   */
  function f(b, res, name) {
    if (Array.isArray(name)) {
      return name.forEach(function(O) {
        f(b, res, O);
      });
    }
    b.push(encodeURIComponent(res) + "=" + encodeURIComponent(name));
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function parseString(s) {
    var parsedQR;
    var propValue;
    var obj = {};
    var o = s.split("&");
    /** @type {number} */
    var p = 0;
    var pos = o.length;
    for (; p < pos; ++p) {
      propValue = o[p];
      parsedQR = propValue.split("=");
      /** @type {string} */
      obj[decodeURIComponent(parsedQR[0])] = decodeURIComponent(parsedQR[1]);
    }
    return obj;
  }
  /**
   * @param {string} headerStr
   * @return {?}
   */
  function parseHeader(headerStr) {
    var eq;
    var param;
    var signedTransactionsCounter;
    var signedTxHex;
    var patches = headerStr.split(/\r?\n/);
    var signedTransactions = {};
    patches.pop();
    /** @type {number} */
    var i = 0;
    var patchLen = patches.length;
    for (; i < patchLen; ++i) {
      param = patches[i];
      eq = param.indexOf(":");
      signedTransactionsCounter = param.slice(0, eq).toLowerCase();
      signedTxHex = readAttributeTypes(param.slice(eq + 1));
      signedTransactions[signedTransactionsCounter] = signedTxHex;
    }
    return signedTransactions;
  }
  /**
   * @param {!Object} file
   * @return {?}
   */
  function isJSON(file) {
    return /[\/+]json\b/.test(file);
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function type(val) {
    return val.split(/ *; */).shift();
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function params(str) {
    return reduce(str.split(/ *; */), function(outArray, clusterShardData) {
      var _sizeAnimateTimeStamps = clusterShardData.split(/ *= */);
      var i = _sizeAnimateTimeStamps.shift();
      var g = _sizeAnimateTimeStamps.shift();
      return i && g && (outArray[i] = g), outArray;
    }, {});
  }
  /**
   * @param {!Object} xhr
   * @param {number} url
   * @return {undefined}
   */
  function Response(xhr, url) {
    url = url || {};
    /** @type {!Object} */
    this.req = xhr;
    this.xhr = this.req.xhr;
    this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null;
    this.statusText = this.req.xhr.statusText;
    this.setStatusProperties(this.xhr.status);
    this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
    this.header["content-type"] = this.xhr.getResponseHeader("content-type");
    this.setHeaderProperties(this.header);
    this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null;
  }
  /**
   * @param {string} method
   * @param {string} url
   * @return {undefined}
   */
  function Request(method, url) {
    var self = this;
    this._query = this._query || [];
    /** @type {string} */
    this.method = method;
    /** @type {string} */
    this.url = url;
    this.header = {};
    this._header = {};
    this.on("end", function() {
      /** @type {null} */
      var err = null;
      /** @type {null} */
      var res = null;
      try {
        res = new Response(self);
      } catch (str) {
        return err = new Error("Parser is unable to parse the response"), err.parse = true, err.original = str, err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null, err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null, self.callback(err);
      }
      if (self.emit("response", res), err) {
        return self.callback(err, res);
      }
      if (res.status >= 200 && res.status < 300) {
        return self.callback(err, res);
      }
      /** @type {!Error} */
      var new_err = new Error(res.statusText || "Unsuccessful HTTP response");
      /** @type {null} */
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    });
  }
  /**
   * @param {?} url
   * @param {!Function} fn
   * @return {?}
   */
  function del(url, fn) {
    var req = request("DELETE", url);
    return fn && req.end(fn), req;
  }
  var win;
  var Emitter = require(19);
  var reduce = require(20);
  var goodies = require(21);
  var isObject = require(7);
  win = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
  var request = module.exports = require(22).bind(null, Request);
  /**
   * @return {?}
   */
  request.getXHR = function() {
    if (!(!win.XMLHttpRequest || win.location && "file:" == win.location.protocol && win.ActiveXObject)) {
      return new XMLHttpRequest;
    }
    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
    }
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {
    }
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {
    }
    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    }
    return false;
  };
  /** @type {function(!Object): ?} */
  var readAttributeTypes = "".trim ? function(commentToCheck) {
    return commentToCheck.trim();
  } : function(aShortcut) {
    return aShortcut.replace(/(^\s*|\s*$)/g, "");
  };
  /** @type {function(string): ?} */
  request.serializeObject = serialize;
  /** @type {function(string): ?} */
  request.parseString = parseString;
  request.types = {
    html : "text/html",
    json : "application/json",
    xml : "application/xml",
    urlencoded : "application/x-www-form-urlencoded",
    form : "application/x-www-form-urlencoded",
    "form-data" : "application/x-www-form-urlencoded"
  };
  request.serialize = {
    "application/x-www-form-urlencoded" : serialize,
    "application/json" : JSON.stringify
  };
  request.parse = {
    "application/x-www-form-urlencoded" : parseString,
    "application/json" : JSON.parse
  };
  /**
   * @param {string} e
   * @return {?}
   */
  Response.prototype.get = function(e) {
    return this.header[e.toLowerCase()];
  };
  /**
   * @param {?} header
   * @return {undefined}
   */
  Response.prototype.setHeaderProperties = function(header) {
    var ct = this.header["content-type"] || "";
    this.type = type(ct);
    var obj = params(ct);
    var prop;
    for (prop in obj) {
      this[prop] = obj[prop];
    }
  };
  /**
   * @param {number} str
   * @return {?}
   */
  Response.prototype.parseBody = function(str) {
    var parse = request.parse[this.type];
    return !parse && isJSON(this.type) && (parse = request.parse["application/json"]), parse && str && (str.length || str instanceof Object) ? parse(str) : null;
  };
  /**
   * @param {number} status
   * @return {undefined}
   */
  Response.prototype.setStatusProperties = function(status) {
    if (1223 === status) {
      /** @type {number} */
      status = 204;
    }
    /** @type {number} */
    var type = status / 100 | 0;
    this.status = this.statusCode = status;
    /** @type {number} */
    this.statusType = type;
    /** @type {boolean} */
    this.info = 1 == type;
    /** @type {boolean} */
    this.ok = 2 == type;
    /** @type {boolean} */
    this.clientError = 4 == type;
    /** @type {boolean} */
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type) && this.toError();
    /** @type {boolean} */
    this.accepted = 202 == status;
    /** @type {boolean} */
    this.noContent = 204 == status;
    /** @type {boolean} */
    this.badRequest = 400 == status;
    /** @type {boolean} */
    this.unauthorized = 401 == status;
    /** @type {boolean} */
    this.notAcceptable = 406 == status;
    /** @type {boolean} */
    this.notFound = 404 == status;
    /** @type {boolean} */
    this.forbidden = 403 == status;
  };
  /**
   * @return {?}
   */
  Response.prototype.toError = function() {
    var req = this.req;
    var method = req.method;
    var url = req.url;
    /** @type {string} */
    var errMsg = "cannot " + method + " " + url + " (" + this.status + ")";
    /** @type {!Error} */
    var err = new Error(errMsg);
    return err.status = this.status, err.method = method, err.url = url, err;
  };
  /** @type {function(!Object, number): undefined} */
  request.Response = Response;
  Emitter(Request.prototype);
  var i;
  for (i in goodies) {
    Request.prototype[i] = goodies[i];
  }
  /**
   * @return {?}
   */
  Request.prototype.abort = function() {
    if (!this.aborted) {
      return this.aborted = true, this.xhr && this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this;
    }
  };
  /**
   * @param {string} name
   * @return {?}
   */
  Request.prototype.type = function(name) {
    return this.set("Content-Type", request.types[name] || name), this;
  };
  /**
   * @param {string} val
   * @return {?}
   */
  Request.prototype.responseType = function(val) {
    return this._responseType = val, this;
  };
  /**
   * @param {?} type
   * @return {?}
   */
  Request.prototype.accept = function(type) {
    return this.set("Accept", request.types[type] || type), this;
  };
  /**
   * @param {string} user
   * @param {string} pass
   * @param {!Object} token
   * @return {?}
   */
  Request.prototype.auth = function(user, pass, token) {
    switch(token || (token = {
      type : "basic"
    }), token.type) {
      case "basic":
        /** @type {string} */
        var str = btoa(user + ":" + pass);
        this.set("Authorization", "Basic " + str);
        break;
      case "auto":
        /** @type {string} */
        this.username = user;
        /** @type {string} */
        this.password = pass;
    }
    return this;
  };
  /**
   * @param {string} name
   * @return {?}
   */
  Request.prototype.query = function(name) {
    return "string" != typeof name && (name = serialize(name)), name && this._query.push(name), this;
  };
  /**
   * @param {string} ast
   * @param {!Object} file
   * @param {string} filename
   * @return {?}
   */
  Request.prototype.attach = function(ast, file, filename) {
    return this._getFormData().append(ast, file, filename || file.name), this;
  };
  /**
   * @return {?}
   */
  Request.prototype._getFormData = function() {
    return this._formData || (this._formData = new win.FormData), this._formData;
  };
  /**
   * @param {string} data
   * @return {?}
   */
  Request.prototype.send = function(data) {
    var obj = isObject(data);
    var type = this._header["content-type"];
    if (obj && isObject(this._data)) {
      var i;
      for (i in data) {
        this._data[i] = data[i];
      }
    } else {
      if ("string" == typeof data) {
        if (!type) {
          this.type("form");
        }
        type = this._header["content-type"];
        /** @type {string} */
        this._data = "application/x-www-form-urlencoded" == type ? this._data ? this._data + "&" + data : data : (this._data || "") + data;
      } else {
        /** @type {string} */
        this._data = data;
      }
    }
    return !obj || isHost(data) ? this : (type || this.type("json"), this);
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  Response.prototype.parse = function(obj) {
    return win.console && console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"), this.serialize(obj), this;
  };
  /**
   * @param {!Object} fn
   * @return {?}
   */
  Response.prototype.serialize = function(fn) {
    return this._parser = fn, this;
  };
  /**
   * @param {?} err
   * @param {!Object} result
   * @return {undefined}
   */
  Request.prototype.callback = function(err, result) {
    var c = this._callback;
    this.clearTimeout();
    c(err, result);
  };
  /**
   * @return {undefined}
   */
  Request.prototype.crossDomainError = function() {
    /** @type {!Error} */
    var err = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
    /** @type {boolean} */
    err.crossDomain = true;
    err.status = this.status;
    err.method = this.method;
    err.url = this.url;
    this.callback(err);
  };
  /**
   * @return {undefined}
   */
  Request.prototype.timeoutError = function() {
    var timeout = this._timeout;
    /** @type {!Error} */
    var err = new Error("timeout of " + timeout + "ms exceeded");
    err.timeout = timeout;
    this.callback(err);
  };
  /**
   * @return {?}
   */
  Request.prototype.withCredentials = function() {
    return this._withCredentials = true, this;
  };
  /**
   * @param {!Function} fn
   * @return {?}
   */
  Request.prototype.end = function(fn) {
    var self = this;
    var xhr = this.xhr = request.getXHR();
    var query = this._query.join("&");
    var timeout = this._timeout;
    var data = this._formData || this._data;
    this._callback = fn || noop;
    /**
     * @return {?}
     */
    xhr.onreadystatechange = function() {
      if (4 == xhr.readyState) {
        var ref;
        try {
          ref = xhr.status;
        } catch (t) {
          /** @type {number} */
          ref = 0;
        }
        if (0 == ref) {
          if (self.timedout) {
            return self.timeoutError();
          }
          if (self.aborted) {
            return;
          }
          return self.crossDomainError();
        }
        self.emit("end");
      }
    };
    /**
     * @param {!Object} e
     * @return {undefined}
     */
    var handleProgress = function(e) {
      if (e.total > 0) {
        /** @type {number} */
        e.percent = e.loaded / e.total * 100;
      }
      /** @type {string} */
      e.direction = "download";
      self.emit("progress", e);
    };
    if (this.hasListeners("progress")) {
      /** @type {function(!Object): undefined} */
      xhr.onprogress = handleProgress;
    }
    try {
      if (xhr.upload && this.hasListeners("progress")) {
        /** @type {function(!Object): undefined} */
        xhr.upload.onprogress = handleProgress;
      }
    } catch (e) {
    }
    if (timeout && !this._timer && (this._timer = setTimeout(function() {
      /** @type {boolean} */
      self.timedout = true;
      self.abort();
    }, timeout)), query && (query = request.serializeObject(query), this.url += ~this.url.indexOf("?") ? "&" + query : "?" + query), this.username && this.password ? xhr.open(this.method, this.url, true, this.username, this.password) : xhr.open(this.method, this.url, true), this._withCredentials && (xhr.withCredentials = true), "GET" != this.method && "HEAD" != this.method && "string" != typeof data && !isHost(data)) {
      var contentType = this._header["content-type"];
      var serialize = this._parser || request.serialize[contentType ? contentType.split(";")[0] : ""];
      if (!serialize && isJSON(contentType)) {
        serialize = request.serialize["application/json"];
      }
      if (serialize) {
        data = serialize(data);
      }
    }
    var i;
    for (i in this.header) {
      if (null != this.header[i]) {
        xhr.setRequestHeader(i, this.header[i]);
      }
    }
    return this._responseType && (xhr.responseType = this._responseType), this.emit("request", this), xhr.send(void 0 !== data ? data : null), this;
  };
  /** @type {function(string, string): undefined} */
  request.Request = Request;
  /**
   * @param {?} headers
   * @param {string} n
   * @param {string} t
   * @return {?}
   */
  request.get = function(headers, n, t) {
    var req = request("GET", headers);
    return "function" == typeof n && (t = n, n = null), n && req.query(n), t && req.end(t), req;
  };
  /**
   * @param {?} fn
   * @param {string} t
   * @param {string} n
   * @return {?}
   */
  request.head = function(fn, t, n) {
    var res = request("HEAD", fn);
    return "function" == typeof t && (n = t, t = null), t && res.send(t), n && res.end(n), res;
  };
  /** @type {function(?, !Function): ?} */
  request.del = del;
  /** @type {function(?, !Function): ?} */
  request.delete = del;
  /**
   * @param {?} response
   * @param {string} t
   * @param {string} n
   * @return {?}
   */
  request.patch = function(response, t, n) {
    var req = request("PATCH", response);
    return "function" == typeof t && (n = t, t = null), t && req.send(t), n && req.end(n), req;
  };
  /**
   * @param {?} headers
   * @param {string} n
   * @param {string} t
   * @return {?}
   */
  request.post = function(headers, n, t) {
    var result = request("POST", headers);
    return "function" == typeof n && (t = n, n = null), n && result.send(n), t && result.end(t), result;
  };
  /**
   * @param {?} url
   * @param {string} s
   * @param {string} i
   * @return {?}
   */
  request.put = function(url, s, i) {
    var req = request("PUT", url);
    return "function" == typeof s && (i = s, s = null), s && req.send(s), i && req.end(i), req;
  };
}, function(module, canCreateDiscussions, i) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function Emitter(obj) {
    if (obj) {
      return mixin(obj);
    }
  }
  /**
   * @param {!Object} object
   * @return {?}
   */
  function mixin(object) {
    var key;
    for (key in Emitter.prototype) {
      object[key] = Emitter.prototype[key];
    }
    return object;
  }
  /** @type {function(!Object): ?} */
  module.exports = Emitter;
  /** @type {function(string, !Function): ?} */
  Emitter.prototype.on = Emitter.prototype.addEventListener = function(type, listener) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + type] = this._callbacks["$" + type] || []).push(listener), this;
  };
  /**
   * @param {string} name
   * @param {!Function} e
   * @return {?}
   */
  Emitter.prototype.once = function(name, e) {
    /**
     * @return {undefined}
     */
    function n() {
      this.off(name, n);
      e.apply(this, arguments);
    }
    return n.fn = e, this.on(name, n), this;
  };
  /** @type {function(string, !Function): ?} */
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, listener) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) {
      return this._callbacks = {}, this;
    }
    var callbacks = this._callbacks["$" + event];
    if (!callbacks) {
      return this;
    }
    if (1 == arguments.length) {
      return delete this._callbacks["$" + event], this;
    }
    var cb;
    /** @type {number} */
    var i = 0;
    for (; i < callbacks.length; i++) {
      if ((cb = callbacks[i]) === listener || cb.fn === listener) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };
  /**
   * @param {string} event
   * @return {?}
   */
  Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    /** @type {!Array<?>} */
    var cmd_args = [].slice.call(arguments, 1);
    var callbacks = this._callbacks["$" + event];
    if (callbacks) {
      callbacks = callbacks.slice(0);
      /** @type {number} */
      var len = 0;
      var i = callbacks.length;
      for (; len < i; ++len) {
        callbacks[len].apply(this, cmd_args);
      }
    }
    return this;
  };
  /**
   * @param {string} event
   * @return {?}
   */
  Emitter.prototype.listeners = function(event) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + event] || [];
  };
  /**
   * @param {string} event
   * @return {?}
   */
  Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {!Array} rows
   * @param {!Function} fn
   * @param {(Element|!Function)} value
   * @return {?}
   */
  mixin.exports = function(rows, fn, value) {
    /** @type {number} */
    var i = 0;
    var rowsNum = rows.length;
    var data = 3 == arguments.length ? value : rows[i++];
    for (; i < rowsNum;) {
      data = fn.call(null, data, rows[i], ++i, rows);
    }
    return data;
  };
}, function(canCreateDiscussions, exports, saveNotifs) {
  var _parent_label_lookup = saveNotifs(7);
  /**
   * @return {?}
   */
  exports.clearTimeout = function() {
    return this._timeout = 0, clearTimeout(this._timer), this;
  };
  /**
   * @param {!Object} fn
   * @return {?}
   */
  exports.parse = function(fn) {
    return this._parser = fn, this;
  };
  /**
   * @param {number} ms
   * @return {?}
   */
  exports.timeout = function(ms) {
    return this._timeout = ms, this;
  };
  /**
   * @param {!Function} callback
   * @param {!Function} defer
   * @return {?}
   */
  exports.then = function(callback, defer) {
    return this.end(function(callback, identifierPositions) {
      if (callback) {
        defer(callback);
      } else {
        callback(identifierPositions);
      }
    });
  };
  /**
   * @param {?} create_content
   * @return {?}
   */
  exports.use = function(create_content) {
    return create_content(this), this;
  };
  /**
   * @param {string} e
   * @return {?}
   */
  exports.get = function(e) {
    return this._header[e.toLowerCase()];
  };
  /** @type {function(string): ?} */
  exports.getHeader = exports.get;
  /**
   * @param {string} field
   * @param {string} val
   * @return {?}
   */
  exports.set = function(field, val) {
    if (_parent_label_lookup(field)) {
      var name;
      for (name in field) {
        this.set(name, field[name]);
      }
      return this;
    }
    return this._header[field.toLowerCase()] = val, this.header[field] = val, this;
  };
  /**
   * @param {string} field
   * @return {?}
   */
  exports.unset = function(field) {
    return delete this._header[field.toLowerCase()], delete this.header[field], this;
  };
  /**
   * @param {string} obj
   * @param {?} options
   * @return {?}
   */
  exports.field = function(obj, options) {
    return this._getFormData().append(obj, options), this;
  };
}, function(module, canCreateDiscussions) {
  /**
   * @param {!Function} Request
   * @param {string} method
   * @param {!Function} callback
   * @return {?}
   */
  function exports(Request, method, callback) {
    return "function" == typeof callback ? (new Request("GET", method)).end(callback) : 2 == arguments.length ? new Request("GET", method) : new Request(method, callback);
  }
  /** @type {function(!Function, string, !Function): ?} */
  module.exports = exports;
}, function(canCreateDiscussions, isSlidingUp, require) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /** @type {function(!Object): ?} */
  var extend = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(hackerspace) {
    return typeof hackerspace;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _require = require(0);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "_onForceSubmitChange",
      value : function() {
        if (this.props.forceSubmit) {
          this.onSubmit();
        }
      }
    }, {
      key : "checkFields",
      value : function() {
        this.$requiredField = this.querySelectorAll(".js-required");
        this.$emailFields = this.querySelectorAll(".js-email");
        this.$regFields = this.querySelectorAll("[data-regex]");
        var last_v = this.props.onCustomCheck();
        /** @type {number} */
        var t = 0;
        var styleDefLen = this.$requiredField.length;
        for (; t < styleDefLen; t++) {
          if ("radio" === this.$requiredField[t].type) {
            /** @type {boolean} */
            var r = false;
            /** @type {number} */
            var j = 0;
            var imagesLen = this.$requiredField.length;
            for (; j < imagesLen; j++) {
              if ("radio" == this.$requiredField[j].type && this.$requiredField[t].name == this.$requiredField[j].name && this.$requiredField[j].checked) {
                /** @type {boolean} */
                r = true;
                break;
              }
            }
            if (r) {
              this.$requiredField[t].classList.remove("is-error");
              this.$requiredField[t].classList.add("is-success");
            } else {
              /** @type {boolean} */
              last_v = false;
              this.$requiredField[t].classList.add("is-error");
              this.$requiredField[t].classList.remove("is-success");
            }
          } else {
            if (!this.$requiredField[t].value && "checkbox" !== this.$requiredField[t].type || "" == this.$requiredField[t].value && "checkbox" !== this.$requiredField[t].type || "checkbox" == this.$requiredField[t].type && !this.$requiredField[t].checked) {
              if ("file" == this.$requiredField[t].type && this.$requiredField[t].getAttribute("value") && "" !== this.$requiredField[t].getAttribute("value")) {
                this.$requiredField[t].classList.remove("is-error");
                this.$requiredField[t].classList.add("is-success");
              } else {
                /** @type {boolean} */
                last_v = false;
                this.$requiredField[t].classList.add("is-error");
                this.$requiredField[t].classList.remove("is-success");
              }
            } else {
              this.$requiredField[t].classList.remove("is-error");
              this.$requiredField[t].classList.add("is-success");
            }
          }
        }
        /** @type {number} */
        var s = 0;
        var solidsLength = this.$emailFields.length;
        for (; s < solidsLength; s++) {
          if (this.$emailFields[s].value && "" != this.$emailFields[s].value && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.$emailFields[s].value)) {
            this.$emailFields[s].classList.remove("is-error");
            this.$emailFields[s].classList.add("is-success");
          } else {
            /** @type {boolean} */
            last_v = false;
            this.$emailFields[s].classList.add("is-error");
            this.$emailFields[s].classList.remove("is-success");
          }
        }
        /** @type {number} */
        var l = 0;
        var nlist = this.$regFields.length;
        for (; l < nlist; l++) {
          if ((new RegExp(this.$regFields[l].getAttribute("data-regex"), "ig")).test(this.$regFields[l].value)) {
            this.$regFields[l].classList.remove("is-error");
            this.$regFields[l].classList.add("is-success");
          } else {
            /** @type {boolean} */
            last_v = false;
            this.$regFields[l].classList.add("is-error");
            this.$regFields[l].classList.remove("is-success");
          }
        }
        return last_v;
      }
    }, {
      key : "onSubmit",
      value : function(name) {
        var d = this;
        if (name) {
          name.preventDefault();
        }
        if (this.checkFields()) {
          this.props.formData = this.serialize(this.querySelector(".js-form"));
          this.props.onSend();
          if (this.props.useEmailjs) {
            emailjs.send(this.props.emailjsId, this.props.emailjsTemplate, this.props.formData).then(function(_relativePath) {
              if (d.props.onSuccess(_relativePath), d.props.reset) {
                var oForm = d.querySelector(".js-form");
                oForm.reset();
                var numActivities = oForm.elements.length;
                /** @type {number} */
                var i = numActivities - 1;
                for (; i >= 0; i--) {
                  if (document.createEventObject) {
                    var e = document.createEventObject();
                    oForm.elements[i].fireEvent("onchange", e);
                  } else {
                    /** @type {(Event|null)} */
                    e = document.createEvent("HTMLEvents");
                    e.initEvent("change", true, true);
                    oForm.elements[i].dispatchEvent(e);
                  }
                  if (document.createEventObject) {
                    e = document.createEventObject();
                    oForm.elements[i].fireEvent("onreset", e);
                  } else {
                    /** @type {(Event|null)} */
                    e = document.createEvent("HTMLEvents");
                    e.initEvent("reset", true, true);
                    oForm.elements[i].dispatchEvent(e);
                  }
                }
              }
            }, function(canCreateDiscussions) {
            });
          }
        }
      }
    }, {
      key : "serialize",
      value : function(name) {
        var item = void 0;
        var data = {};
        if ("object" == (void 0 === name ? "undefined" : extend(name)) && "FORM" == name.nodeName) {
          var ld = name.elements.length;
          /** @type {number} */
          var id = 0;
          for (; id < ld; id++) {
            if (item = name.elements[id], item.name && !item.disable && "file" != item.type && "reset" != item.type && "submit" != item.type && "button" != item.type) {
              if ("select-multiple" == item.type) {
                /** @type {number} */
                j = name.elements[id].options.length - 1;
                for (; j >= 0; j--) {
                  if (item.options[j].selected) {
                    /** @type {string} */
                    data[item.name] = encodeURIComponent(item.options[j].value);
                  }
                }
              } else {
                if ("checkbox" != item.type && "radio" != item.type || item.checked) {
                  if (void 0 !== data[item.name]) {
                    if ("[object Array]" !== Object.prototype.toString.call(data[item.name])) {
                      /** @type {!Array} */
                      data[item.name] = new Array(data[item.name]);
                    }
                    data[item.name].push(encodeURIComponent(item.value));
                  } else {
                    /** @type {string} */
                    data[item.name] = encodeURIComponent(item.value);
                  }
                }
              }
            }
            if ("file" == item.type) {
              var i;
              for (i in item.files) {
                if (item.files.hasOwnProperty(i) && item.files[i] instanceof File) {
                  data[item.name] = item.files[i];
                }
              }
            }
          }
        }
        return data;
      }
    }, {
      key : "onAjaxSuccess",
      value : function(name) {
        if (name && "object" !== (void 0 === name ? "undefined" : extend(name)) && (name = JSON.parse(name)), this.props.onSuccess(name), this.props.reset) {
          var element = this.querySelector(".js-form");
          element.reset();
          var int_settings_count = element.elements.length;
          /** @type {number} */
          var i = int_settings_count - 1;
          for (; i >= 0; i--) {
            if (document.createEventObject) {
              var e = document.createEventObject();
              element.elements[i].fireEvent("onchange", e);
            } else {
              /** @type {(Event|null)} */
              e = document.createEvent("HTMLEvents");
              e.initEvent("change", true, true);
              element.elements[i].dispatchEvent(e);
            }
            if (document.createEventObject) {
              e = document.createEventObject();
              element.elements[i].fireEvent("onreset", e);
            } else {
              /** @type {(Event|null)} */
              e = document.createEvent("HTMLEvents");
              e.initEvent("reset", true, true);
              element.elements[i].dispatchEvent(e);
            }
          }
        }
      }
    }, {
      key : "onAjaxError",
      value : function(name) {
        this.props.onError(name);
      }
    }, {
      key : "template",
      get : function() {
        return require(24);
      }
    }, {
      key : "events",
      get : function() {
        return {
          submit : "onSubmit"
        };
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          onSuccess : {
            type : "func",
            value : function() {
            }
          },
          onError : {
            type : "func",
            value : function() {
            }
          },
          onSend : {
            type : "func",
            value : function() {
            }
          },
          action : window.location.href,
          method : "post",
          enctype : "application/x-www-form-urlencoded",
          formData : {
            value : null
          },
          classForm : "",
          headers : {
            type : "json",
            value : null
          },
          onCustomCheck : {
            type : "fn",
            value : function() {
              return true;
            }
          },
          forceSubmit : {
            type : "bool",
            value : false,
            change : "_onForceSubmitChange"
          },
          reset : {
            type : "bool",
            value : true
          },
          sendOnSrcChange : {
            type : "bool",
            value : true
          },
          useEmailjs : {
            type : "bool",
            value : false
          },
          emailjsId : "",
          emailjsTemplate : ""
        };
      }
    }]), Agent;
  }(_require.Component);
  (0, _require.register)("core-ajax-form", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<form enctype="{{enctype}}" method="{{method}}" action="{{action}}" class="js-form {{classForm}}">    <content></content></form><template is="light-core-template" if="{{!useEmailjs}}" remove-nodes=\u00e9true\u00e9>\t<core-ajax src="{{action}}" method="{{method}}" send-on-src-change="{{sendOnSrcChange}}" content-type="{{enctype}}"  data="{{formData}}" on-success="onAjaxSuccess" on-error="onAjaxError" auto="false" headers="{{headers}}"></core-ajax></template>';
}, function(canCreateDiscussions, isSlidingUp, NFA) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {number} height
   * @param {number} value
   * @param {number} i
   * @param {number} input
   * @param {number} result
   * @return {?}
   */
  function max(height, value, i, input, result) {
    /** @type {!Array} */
    var c = [i / height, input / value];
    return c = result ? Math.min(c[0], c[1]) : Math.max(c[0], c[1]), {
      width : height * c,
      height : value * c
    };
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var m = NFA(0);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "attached",
      value : function() {
        /** @type {boolean} */
        this.aspect = "cover" != this.props.type;
        this.resize();
      }
    }, {
      key : "detached",
      value : function() {
        if (this.$img && null !== this.$img) {
          /** @type {null} */
          this.$img.onload = null;
        }
      }
    }, {
      key : "ready",
      value : function() {
        this.$img = this.querySelector(".js-img");
        if (null !== this.$img) {
          this.bindMethods(["forceImageLoad"]);
          this.forceImageLoad();
        }
      }
    }, {
      key : "forceImageLoad",
      value : function() {
        var tabstrip = this;
        /** @type {!Image} */
        var oImage = new Image;
        /**
         * @return {undefined}
         */
        oImage.onload = function() {
          /** @type {null} */
          this.onload = null;
          /** @type {null} */
          this.onerror = null;
          tabstrip.props.width = this.width;
          tabstrip.props.height = this.height;
          tabstrip.resize();
        };
        /**
         * @return {undefined}
         */
        oImage.onerror = function() {
          /** @type {null} */
          this.onload = null;
          /** @type {null} */
          this.onerror = null;
        };
        oImage.src = this.$img.src;
      }
    }, {
      key : "resize",
      value : function() {
        if (void 0 !== this.parentNode) {
          this.parentWidth = this.parentNode.clientWidth;
          this.parentHeight = this.parentNode.clientHeight;
          this.computedSize = max(this.props.width, this.props.height, this.parentWidth, this.parentHeight, this.aspect);
          /** @type {number} */
          this.offsetX = .5 * Math.round(this.parentWidth - this.computedSize.width);
          /** @type {number} */
          this.offsetY = .5 * Math.round(this.parentHeight - this.computedSize.height);
          /** @type {string} */
          this.style.position = "absolute";
          /** @type {string} */
          this.style.width = Math.round(this.computedSize.width) + "px";
          /** @type {string} */
          this.style.height = Math.round(this.computedSize.height) + "px";
          if (this.offsetX || this.offsetY) {
            /** @type {string} */
            this.style.left = this.offsetX + "px";
            /** @type {string} */
            this.style.top = this.offsetY + "px";
          }
        }
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          width : {
            type : "float",
            value : 0,
            change : "resize"
          },
          height : {
            type : "float",
            value : 0,
            change : "resize"
          },
          type : {
            type : "str",
            value : "cover"
          }
        };
      }
    }]), Agent;
  }(m.Component);
  (0, m.register)("core-object-fit", artistTrack);
}, function(canCreateDiscussions, isSlidingUp, require) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _require = require(0);
  var aliases = {};
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "created",
      value : function() {
        /** @type {boolean} */
        this._isLoaded = false;
        /** @type {!Array} */
        this._sources = [];
      }
    }, {
      key : "ready",
      value : function() {
        this.$parent = this.parentNode;
        for (; this.$parent;) {
          if ("SCROLL-OBJECT" == this.$parent.tagName && this.props.lazy) {
            this.preventLoad();
            this.$parent._img = this;
            break;
          }
          this.$parent = this.$parent.parentNode;
        }
        /** @type {boolean} */
        this._isInDom = true;
      }
    }, {
      key : "load",
      value : function() {
        var e = this;
        if (!(this._prevent && this._isInDom)) {
          /** @type {boolean} */
          this._isLoading = true;
          /** @type {boolean} */
          this._isLoaded = false;
          /** @type {number} */
          this._loadTimer = setTimeout(function() {
            e.getSrcFromSources();
          }, 100);
        }
      }
    }, {
      key : "allowLoad",
      value : function() {
        /** @type {boolean} */
        this._prevent = false;
        if (!this._isLoading) {
          this.load();
        }
      }
    }, {
      key : "preventLoad",
      value : function() {
        /** @type {boolean} */
        this._prevent = true;
        clearTimeout(this._loadTimer);
        /** @type {boolean} */
        this._isLoading = false;
      }
    }, {
      key : "getSrcFromSources",
      value : function() {
        var self = this;
        /** @type {boolean} */
        var t = false;
        /** @type {number} */
        var i = 0;
        for (; i < this._sources.length; i++) {
          if ("break" === function(i) {
            var query = self._sources[i].query;
            var name = self._sources[i].src;
            if (window.matchMedia(query).matches) {
              if (t = true, void 0 == aliases[name]) {
                /** @type {!Image} */
                var e = new Image;
                /**
                 * @return {undefined}
                 */
                e.onload = function() {
                  /** @type {null} */
                  e.onload = null;
                  /** @type {null} */
                  e = null;
                  /** @type {boolean} */
                  self._isLoaded = true;
                  /** @type {boolean} */
                  self._isLoading = false;
                  self.props.hdSrc = name;
                  /** @type {boolean} */
                  self.props.isReady = true;
                  aliases[name] = name;
                };
                e.src = name;
                console.log("new HAS MATCH", name, aliases[name]);
              } else {
                /** @type {boolean} */
                self._isLoaded = true;
                self.props.hdSrc = name;
                /** @type {boolean} */
                self.props.isReady = true;
                /** @type {boolean} */
                self._isLoading = false;
              }
              return "break";
            }
          }(i)) {
            break;
          }
        }
        if (!t) {
          console.warn("no query match found for specified source:", this._sources);
        }
      }
    }, {
      key : "addSource",
      value : function(name, searchTerm) {
        return this._sources.push({
          query : searchTerm,
          src : name
        }), this._sources.length - 1;
      }
    }, {
      key : "updateSource",
      value : function(name, source, extension) {
        if (void 0 !== this._sources[name]) {
          /** @type {string} */
          this._sources[name].src = source;
          /** @type {string} */
          this._sources[name].query = extension;
        }
      }
    }, {
      key : "resize",
      value : function() {
        this.load();
      }
    }, {
      key : "update",
      value : function() {
        if (this._isLoaded) {
          /** @type {number} */
          this.props.alpha = 1;
        }
      }
    }, {
      key : "template",
      get : function() {
        return require(27);
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          alt : "",
          src : "",
          hdSrc : "",
          alpha : {
            type : "f",
            value : 0
          },
          imgClass : "u-fit-w",
          onLoaded : {
            type : "fn",
            value : function() {
            }
          },
          backgroundSize : "",
          backgroundPosition : "center center",
          width : 1,
          height : 1,
          cover : {
            type : "bool",
            value : false
          },
          debug : {
            type : "bool",
            value : false
          },
          lazy : {
            type : "bool",
            value : false
          },
          fallback : null
        };
      }
    }]), Agent;
  }(_require.Component);
  (0, _require.register)("core-img", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<content></content><template is="light-core-template" if="{{cover || backgroundSize !==\'\'}}" remove-nodes="true">\t\t<div class="u-absolute u-fit u-pos-tl"\t\t\t $style="background-size: {{backgroundSize==\'\'?\'cover\':backgroundSize}}; \t\t\t\t\t background-position: {{backgroundPosition}};\t\t\t\t\t background-repeat: no-repeat;\t\t\t\t\t background-image: url(\'{{isReady?hdSrc:fallback}}\')"></div></template><template is="light-core-template" if="{{!cover && !backgroundSize}}" remove-nodes="true">\t<img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\' viewBox%3D\'0 0 {{width}} {{height}}\'%2F%3E" alt="{{alt}}" class="{{imgClass}}" style="; backface-visibility: hidden;visibility: hidden;"/>\t<template is="light-core-template" if="{{fallback}}">\t\t<img $src="{{fallback}}" aria-hidden="true" class="{{imgClass}} u-pos-tl u-absolute"\t\t\t\t$style="opacity:1; transition: opacity 1s; will-change: opacity; transform: translateZ(0); backface-visibility: hidden;"/>\t</template>\t<img $src="{{hdSrc}}" alt="{{alt}}" class="{{imgClass}} u-pos-tl u-absolute" $style="opacity: {{alpha}}; transition: opacity 1s; will-change: opacity; transform: translateZ(0); backface-visibility: hidden;"/></template>';
}, function(canCreateDiscussions, isSlidingUp, NFA) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var m = NFA(0);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "resize",
      value : function() {
        /** @type {number} */
        this._winWidth = window.innerWidth;
      }
    }, {
      key : "getSrc",
      value : function() {
        /** @type {null} */
        var s = null;
        return s = null !== this.props.wpSrc ? this._winWidth <= 1280 ? this.props.wpSrc.sizes.medium_large : this._winWidth <= 1920 ? this.props.wpSrc.sizes.large : this.props.wpSrc.url : this.props.src, s = s.replace("https://kooxcoukeu.cluster020.hosting.ovh.net/", "https://koox.co.uk/");
      }
    }, {
      key : "ready",
      value : function() {
        this.resize();
        this.$parent = this.parentNode;
        for (; this.$parent;) {
          if ("CORE-IMG" == this.$parent.tagName) {
            this._parentNode = this.$parent;
            this._index = this.$parent.addSource(this.getSrc(), this.props.query);
            break;
          }
          this.$parent = this.$parent.parentNode;
        }
        this._updateSource();
      }
    }, {
      key : "_updateSource",
      value : function() {
        if (this._parentNode) {
          this._parentNode.updateSource(this._index, this.getSrc(), this.props.query);
        }
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          src : {
            type : "string",
            value : null,
            change : "_updateSource"
          },
          wpSrc : {
            type : "json",
            value : null,
            change : "_updateSource"
          },
          query : {
            type : "string",
            value : null,
            change : "_updateSource"
          }
        };
      }
    }]), Agent;
  }(m.Component);
  (0, m.register)("core-img-source", artistTrack);
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var component = __webpack_require__(0);
  var _normalizeDataUri = __webpack_require__(1);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var _prepareStyleProperties = __webpack_require__(2);
  var _UiIcon = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(3), __webpack_require__(31));
  var _classlist = (_interopRequireDefault(_UiIcon), __webpack_require__(32));
  var artistTrack = (_interopRequireDefault(_classlist), function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "_onForceUpdateChange",
      value : function() {
        if (this.props.forceUpdate) {
          this.resize();
        }
      }
    }, {
      key : "created",
      value : function() {
        /** @type {number} */
        this._direction = 1;
        /** @type {number} */
        this._smoothedScroll = 0;
        /** @type {!Array} */
        this._offset = [0, 0];
        /** @type {!Array} */
        this._position = [0, 0];
        /** @type {!Array} */
        this._translate = [0, 0];
        /** @type {!Array} */
        this._worldPosition = [0, 0];
        /** @type {!Array} */
        this._screenPosition = [0, 0];
        /** @type {!Array} */
        this._lastScreenPosition = [0, 0];
        /** @type {!Array} */
        this._smoothedPosition = [0, 0];
        /** @type {number} */
        this._alpha = 1;
        /** @type {number} */
        this._delta = 0;
        /** @type {boolean} */
        this._updateObject = true;
        /** @type {!Array} */
        this._scrollChildObject = [];
      }
    }, {
      key : "enableObject",
      value : function() {
        if (!this._updateObject) {
          /** @type {boolean} */
          this._updateObject = true;
          /** @type {number} */
          var layer_i = 0;
          for (; layer_i < this._scrollChildObject.length; layer_i++) {
            this._scrollChildObject[layer_i].enableObject();
          }
        }
      }
    }, {
      key : "disableObject",
      value : function() {
        if (this._updateObject) {
          /** @type {boolean} */
          this._updateObject = false;
          /** @type {number} */
          this.style.opacity = 0;
          /** @type {string} */
          this.style.visibility = "hidden";
          /** @type {string} */
          this.style[component.support.transform] = "none";
          /** @type {number} */
          var layer_i = 0;
          for (; layer_i < this._scrollChildObject.length; layer_i++) {
            this._scrollChildObject[layer_i].disableObject();
          }
        }
      }
    }, {
      key : "add",
      value : function(name) {
        /** @type {boolean} */
        var t = false;
        /** @type {number} */
        var i = 0;
        for (; i < this._scrollChildObject.length; i++) {
          if (this._scrollChildObject[i] == name) {
            /** @type {boolean} */
            t = true;
            break;
          }
        }
        if (!t) {
          this._scrollChildObject.push(name);
        }
      }
    }, {
      key : "_removeChild",
      value : function(name) {
        /** @type {number} */
        var i = 0;
        for (; i < this._scrollChildObject.length; i++) {
          if (this._scrollChildObject[i] == name) {
            this._scrollChildObject.splice(i, 1);
            break;
          }
        }
      }
    }, {
      key : "detached",
      value : function() {
        if (this._scrollParent && this._scrollParent._removeChild) {
          this._scrollParent._removeChild(this);
        }
      }
    }, {
      key : "ready",
      value : function() {
        this._scrollParent = this._getScrollParent();
        if (this._scrollParent) {
          this._scrollParent.add(this);
        }
      }
    }, {
      key : "_getScrollParent",
      value : function() {
        var node = this.parentNode;
        for (; node;) {
          if ("SCROLL-OBJECT" == node.tagName) {
            return node;
          }
          node = node.parentNode;
        }
        return null;
      }
    }, {
      key : "update",
      value : function() {
        var dayEle = this;
        if (!this._updateObject) {
          return void(this._img && this._img.preventLoad());
        }
        /** @type {number} */
        this._worldPosition[0] = 0;
        /** @type {number} */
        this._worldPosition[1] = 0;
        if (this._scrollParent) {
          this._worldPosition[0] = this._scrollParent._worldPosition[0];
          this._worldPosition[1] = this._scrollParent._worldPosition[1];
        }
        this._worldPosition[0] += this._offsetLeft;
        this._worldPosition[1] += this._offsetTop;
        /** @type {number} */
        this._position[0] = 0;
        /** @type {number} */
        this._position[1] = 0;
        this._worldPosition[0] += this.props.position[0];
        this._worldPosition[1] += this.props.position[1];
        this._worldPosition[0] += this.props.translate[0] * this._width / 100;
        this._worldPosition[1] += this.props.translate[1] * this._height / 100;
        this._smoothedPosition[0] += (this._worldPosition[0] - this._smoothedPosition[0]) * this.props.ratio;
        this._smoothedPosition[1] += (this._worldPosition[1] - this._smoothedPosition[1]) * this.props.ratio;
        this._position[0] += this._smoothedPosition[0] - this._worldPosition[0];
        this._position[1] += this._smoothedPosition[1] - this._worldPosition[1];
        /** @type {number} */
        var t = this._screenPosition[1] + .5 * this._height - .5 * this._winHeight;
        this._position[1] += t / this._winHeight * .5 * this.props.z;
        this._worldPosition[0] += this._position[0];
        this._worldPosition[1] += this._position[1];
        this._position[0] += this.props.position[0];
        this._position[1] += this.props.position[1];
        this._position[0] += this.props.translate[0] * this._width / 100;
        this._position[1] += this.props.translate[1] * this._height / 100;
        this._screenPosition[0] = this._smoothedPosition[0];
        this._screenPosition[1] = this._smoothedPosition[1];
        if (this._screenPosition[1] > this._lastScreenPosition[1]) {
          /** @type {number} */
          this._direction = 1;
        } else {
          if (this._screenPosition[1] < this._lastScreenPosition[1]) {
            /** @type {number} */
            this._direction = -1;
          }
        }
        this._lastScreenPosition[1] = this._screenPosition[1];
        /** @type {string} */
        var style = "";
        if (this._screenPosition[1] > 10 - this._height && this._screenPosition[1] < this._winHeight - 10) {
          if (style = style + (" translate(" + this._position[0] + "px, " + this._position[1] + "px) translateZ(0)"), 0 !== this.props.rotation && (style = style + (" rotate(" + this.props.rotation + "deg)")), 1 === this.props.scale && 1 === this._zoom || (style = style + (" scale(" + this.props.scale + ")")), this.style.visibility = "visible", this.style.opacity = 1, this.props.disableChildren) {
            /** @type {number} */
            var layer_i = 0;
            for (; layer_i < this._scrollChildObject.length; layer_i++) {
              this._scrollChildObject[layer_i].enableObject();
            }
          }
          /** @type {string} */
          this.style[component.support.transform] = style;
          if (this._screenPosition[1] < this._winDeltas) {
            if (!this._isActive) {
              /** @type {boolean} */
              this._isActive = true;
              if (this.props.setActive) {
                setTimeout(function() {
                  dayEle.classList.add("is-active");
                }, 300);
              }
            }
            if (this._img) {
              this._img.allowLoad();
            }
          } else {
            if (this._img) {
              this._img.preventLoad();
            }
          }
        } else {
          if (this._isActive = false, this.props.setActive && (clearTimeout(this._setActiveTimer), this.classList.remove("is-active")), this.style[component.support.transform] = "none", this.style.visibility = "hidden", this.style.opacity = 0, this._img && this._img.preventLoad(), this.props.disableChildren) {
            /** @type {number} */
            var layer_i = 0;
            for (; layer_i < this._scrollChildObject.length; layer_i++) {
              this._scrollChildObject[layer_i].disableObject();
            }
          }
        }
      }
    }, {
      key : "resize",
      value : function() {
        this._height = this.clientHeight;
        this._width = this.clientWidth;
        this._offsetTop = (0, _normalizeDataUri2.default)(this, this._scrollParent || document).top;
        this._offsetLeft = (0, _normalizeDataUri2.default)(this, this._scrollParent || document).left;
        /** @type {number} */
        this._winDeltas = window.innerHeight;
        /** @type {number} */
        this._winHeight = window.innerHeight;
        /** @type {number} */
        this._winWidth = window.innerWidth;
        /** @type {boolean} */
        this._isMobile = window.innerWidth < 768;
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          forceUpdate : {
            type : "bool",
            value : false,
            change : "_onForceUpdateChange"
          },
          scroll : {
            type : "float",
            value : 0
          },
          ratio : {
            type : "float",
            value : 1
          },
          debug : {
            type : "bool",
            value : false
          },
          position : {
            type : "arr",
            value : [0, 0]
          },
          translate : {
            type : "arr",
            value : [0, 0]
          },
          rotation : {
            type : "f",
            value : 0
          },
          z : {
            type : "f",
            value : 0
          },
          setActive : {
            type : "bool",
            value : true
          },
          scale : {
            type : "f",
            value : 1
          },
          delay : {
            type : "f",
            value : 0
          },
          disableChildren : {
            type : "bool",
            value : false
          }
        };
      }
    }]), Agent;
  }(component.Component));
  (0, component.register)("scroll-object", artistTrack);
}, function(canCreateDiscussions, t, i) {
  /**
   * @param {!Object} element
   * @param {string} styleName
   * @return {?}
   */
  function getAppliedStyle(element, styleName) {
    var style;
    return element.currentStyle ? style = element.currentStyle[styleName] : window.getComputedStyle && (style = document.defaultView.getComputedStyle(element, null).getPropertyValue(styleName)), style;
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  /** @type {function(!Object, string): ?} */
  t.default = getAppliedStyle;
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "precision highp float;\n\nuniform float alpha;\nvarying vec2  vUv;\nuniform vec2  offset;\nuniform vec2  scale;\n\nuniform sampler2D tMap;\n\nvoid main(void) {\n\n    float _alpha = alpha;\n\n    vec2 _scale = 1./scale;\n    vec2 transformOrigin = vec2(0.5, 0.5);\n    vec2 scaledUvs = (vUv - transformOrigin) * _scale  + transformOrigin;\n    vec4 color;\n\n    if (scaledUvs.x + offset.x > 2.) {//debug\n        color = vec4(1.,0.,0., 1.);\n    }\n    else {\n        color = texture2D(tMap, scaledUvs + offset);\n    }\n\n    \n    \n    _alpha *= color.a;\n\n    gl_FragColor = vec4(color.rgb, _alpha);\n    \n}";
}, function(canCreateDiscussions, isSlidingUp, require) {
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {!Object} value
   * @return {?}
   */
  function test(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
      value : value,
      enumerable : true,
      configurable : true,
      writable : true
    }) : obj[key] = value, obj;
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  /**
   * @param {number} height
   * @param {number} s
   * @param {number} h
   * @param {number} r
   * @param {boolean} defaultsToAny
   * @return {?}
   */
  function parse(height, s, h, r, defaultsToAny) {
    /** @type {!Array} */
    var size = [h / height, r / s];
    return size = Math.max(size[0], size[1]), {
      width : height * size,
      height : s * size
    };
  }
  /**
   * @param {string} t
   * @param {number} m
   * @return {?}
   */
  function f(t, m) {
    var pseudoNames = t.split("-");
    return 8 * (pseudoNames[1] - pseudoNames[0]) / m;
  }
  var requestFullscreen;
  var prefixHidden;
  var name;
  var getNamedFlows;
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var $ = require(0);
  /** @type {number} */
  var oidStr = 0;
  /** @type {!Array} */
  var vendors = ["moz", "webkit", "", "ms", "o"];
  /** @type {number} */
  var i = vendors.length;
  if (void 0 !== document.cancelFullscreen) {
    /** @type {string} */
    requestFullscreen = "requestFullscreen";
    /** @type {string} */
    prefixHidden = "exitFullscreen";
    /** @type {string} */
    name = "fullscreenchange";
  } else {
    for (; i--;) {
      if (!("moz" == vendors[i] && !document.mozFullScreenEnabled || void 0 === document[vendors[i] + "CancelFullScreen"])) {
        /** @type {string} */
        requestFullscreen = vendors[i] + "RequestFullScreen";
        /** @type {string} */
        prefixHidden = vendors[i] + "CancelFullScreen";
        /** @type {string} */
        name = vendors[i] + "fullscreenchange";
        /** @type {string} */
        getNamedFlows = "webkit" == vendors[i] ? vendors[i] + "IsFullScreen" : vendors[i] + "FullScreen";
      }
    }
  }
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "detached",
      value : function() {
        this.stopProgress();
        document.removeEventListener(name, this.onFullScrenChange);
        if (this.HTMLplayer) {
          this.HTMLplayer.removeEventListener("loadedmetadata", this.onPlayerReady, false);
          this.HTMLplayer.removeEventListener("play", this.onPlayerStateChange, false);
          this.HTMLplayer.removeEventListener("pause", this.onPlayerStateChange, false);
          this.HTMLplayer.removeEventListener("ended", this.onPlayerStateChange, false);
          this.HTMLplayer.removeEventListener("progress", this.onPlayerStateChange, false);
          this.HTMLplayer.removeEventListener("error", this.onPlayerError, false);
        }
        /** @type {null} */
        this.HTMLplayer = null;
        /** @type {null} */
        this.$content = null;
        /** @type {null} */
        this.$volumeHandler = null;
      }
    }, {
      key : "onCurrentTimeChange",
      value : function() {
        if (-1 !== this.props.currentTime) {
          this.seek(this.props.currentTime);
        }
      }
    }, {
      key : "created",
      value : function() {
        oidStr++;
        /** @type {null} */
        this.paused = null;
        /** @type {boolean} */
        this.enabled = true;
        this.classList.add("c-video-player");
        /** @type {boolean} */
        this.paused = true;
        /** @type {boolean} */
        this.muted = false;
        /** @type {boolean} */
        this.seeksliding = false;
        /** @type {number} */
        this.duration = 0;
        /** @type {number} */
        this.currentTime = 0;
        /** @type {boolean} */
        this.isFullScreen = false;
        /** @type {null} */
        this.progressTimer = null;
        /** @type {boolean} */
        this.isFirstPlay = true;
        /** @type {null} */
        this.mouseMoveTimer = null;
        /** @type {boolean} */
        this.isControlsHidden = false;
        this.onFullScrenChange = this.onFullScrenChange.bind(this);
        this.onPlayerReady = this.onPlayerReady.bind(this);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
        this.onPlayerError = this.onPlayerError.bind(this);
      }
    }, {
      key : "disable",
      value : function() {
        /** @type {boolean} */
        this.enabled = false;
        this.pause();
        if (document.getElementById(this.props.uuid + "-video")) {
          /** @type {string} */
          document.getElementById(this.props.uuid + "-video").style.display = "none";
        }
      }
    }, {
      key : "enable",
      value : function() {
        /** @type {boolean} */
        this.enabled = true;
        if (this.props.autoplay) {
          this.play();
        }
        if (document.getElementById(this.props.uuid + "-video")) {
          /** @type {string} */
          document.getElementById(this.props.uuid + "-video").style.display = "block";
        }
      }
    }, {
      key : "_onVolumeDown",
      value : function(name) {
        if (!this.props.controls) {
          return true;
        }
        /** @type {boolean} */
        this.isPointerDown = true;
        var data = $.support.touch ? name.touches[0].pageX || name.changedTouches[0].pageX : name.clientX;
        var type = $.support.touch ? name.touches[0].pageY || name.changedTouches[0].pageY : name.clientY;
        this.track(data, type);
      }
    }, {
      key : "_onPointerMove",
      value : function(name) {
        if (this.props.autoHideControls && this.toggleControls(), this.isPointerDown) {
          if (name) {
            name.preventDefault();
          }
          var data = $.support.touch ? name.touches[0].pageX || name.changedTouches[0].pageX : name.clientX;
          var type = $.support.touch ? name.touches[0].pageY || name.changedTouches[0].pageY : name.clientY;
          this.track(data, type);
        }
      }
    }, {
      key : "_onPointerUp",
      value : function() {
        if (this.isPointerDown) {
          /** @type {boolean} */
          this.isPointerDown = false;
        }
      }
    }, {
      key : "track",
      value : function(name, t) {
        /** @type {number} */
        var value = name - this.volumeOffset.x;
        /** @type {number} */
        value = Math.min(this.volumeHandlerWidth, Math.max(0, value));
        /** @type {number} */
        this.props.volume = value / this.volumeHandlerWidth;
        /** @type {number} */
        this.HTMLplayer.volume = this.props.volume;
      }
    }, {
      key : "ready",
      value : function() {
        if (this.$content = this.querySelector(".js-content"), this.$volumeHandler = this.querySelector(".js-volume"), null === this.props.src) {
          return void this.props.onReady(this);
        }
        if (requestFullscreen) {
          this.classList.add("is-support-fullscreen");
        }
        this._onSrcChange();
        this.props.onReady(this);
      }
    }, {
      key : "resize",
      value : function() {
        if ($.support.ipad && this.classList.add("is-ipad"), $.support.iphone && this.classList.add("is-iphone"), $.support.touch && this.classList.add("is-touch"), this.props.cover && (this._parentWidth = this.parentNode.clientWidth, this._parentHeight = this.parentNode.clientHeight, this._computedSize = parse(1280, 720, this._parentWidth, this._parentHeight, false), this._offsetX = .5 * Math.round(this._parentWidth - this._computedSize.width), this._offsetY = .5 * Math.round(this._parentHeight - 
        this._computedSize.height), this.$content.style.width = Math.round(this._computedSize.width) + "px", this.$content.style.height = Math.round(this._computedSize.height) + "px", (this._offsetX || this._offsetY) && (this.$content.style[$.support.transform] = "translate(" + this._offsetX + "px, " + this._offsetY + "px) " + $.support.translateZ)), this.props.controls && null !== this.$volumeHandler) {
          this.volumeHandlerWidth = this.$volumeHandler.clientWidth;
          this.volumeHandlerHeight = this.$volumeHandler.clientHeight;
          /** @type {number} */
          this.volumeHandlerHalfWidth = this.volumeHandlerWidth >> 1;
          /** @type {number} */
          this.volumeHandlerHalfHeight = this.volumeHandlerHeight >> 1;
          this.getBoundingClientRect();
          this.volumeOffset = this.volumeOffset || {};
          /** @type {number} */
          this.volumeOffset.x = 0;
          /** @type {number} */
          this.volumeOffset.y = 0;
          var e = this.$volumeHandler;
          for (; e;) {
            if (e.offsetLeft) {
              this.volumeOffset.x += e.offsetLeft;
              this.volumeOffset.y += e.offsetTop;
            }
            e = e.parentNode;
          }
        }
      }
    }, {
      key : "_onSrcChange",
      value : function() {
        var speedDial = this;
        if (null !== this.props.src) {
          setTimeout(function() {
            speedDial.HTMLplayer = speedDial.querySelector(".js-native-video");
            speedDial.createHTML5Player();
            speedDial.classList.add("is-native");
          }, 100);
        }
      }
    }, {
      key : "onSliderSlide",
      value : function(name) {
        /** @type {boolean} */
        this.seeksliding = true;
        this.stopProgress();
      }
    }, {
      key : "onSliderStop",
      value : function(name) {
        /** @type {boolean} */
        this.seeksliding = false;
        this.seek(name * this.duration);
        this.startProgress();
      }
    }, {
      key : "getDashParams",
      value : function(name) {
        try {
          var fileForSourceMap = name.querySelectorAll("BaseURL")[0].textContent.toString();
          var allImgTags = name.querySelectorAll("Representation");
          var itemType = allImgTags[0].getAttribute("mimeType");
          var codecs = allImgTags[0].getAttribute("codecs");
          var eventWidth = allImgTags[0].getAttribute("width");
          var diagramHeight = allImgTags[0].getAttribute("height");
          var bandwidth = allImgTags[0].getAttribute("bandwidth");
          var $marks = name.querySelectorAll("Initialization");
          var range = $marks[0].getAttribute("range");
          var hexNodes = (name.querySelectorAll("SegmentURL"), name.querySelectorAll("Period"));
          hexNodes[0].getAttribute("duration");
          name.querySelectorAll("SegmentList");
          return {
            file : fileForSourceMap,
            type : itemType,
            codecs : codecs,
            width : eventWidth,
            height : diagramHeight,
            bandwidth : bandwidth,
            range : range,
            segmentLength : 0,
            duration : 0
          };
        } catch (deprecationWarning) {
          return void console.warn(deprecationWarning);
        }
      }
    }, {
      key : "setupDashVideo",
      value : function() {
      }
    }, {
      key : "_onDashVideoSourceUpdate",
      value : function() {
      }
    }, {
      key : "_dashGetStarted",
      value : function() {
      }
    }, {
      key : "initDashVideo",
      value : function() {
        var self = this;
        /** @type {!XMLHttpRequest} */
        var request = new XMLHttpRequest;
        if (!this._dashParams.range && !this._dashParams.file) {
          return void console.warn('cannot init dash video because no "range" or "file" was found in dashParams');
        }
        request.open("GET", this._dashParams.file);
        /** @type {string} */
        this._dashSegCheck = (.8 * f(this._dashParams.range, this._dashParams.bandwidth)).toFixed(3);
        request.send();
        /** @type {string} */
        request.responseType = "arraybuffer";
        try {
          request.addEventListener("readystatechange", function() {
            if (request.readyState == request.DONE) {
              try {
                self._dashVideoSource.appendBuffer(new Uint8Array(request.response));
                self._onDashVideoSourceUpdate = self._onDashVideoSourceUpdate.bind(self);
                self._dashVideoSource.addEventListener("update", self._onDashVideoSourceUpdate, false);
              } catch (e) {
              }
            }
          }, false);
        } catch (deprecationWarning) {
          console.warn(deprecationWarning);
        }
      }
    }, {
      key : "clearDashVars",
      value : function() {
      }
    }, {
      key : "createHTML5Player",
      value : function() {
        var me = this;
        if (/\.mpd$/g.test(this.props.src)) {
          console.warn("Dash MPEG4 detected " + this.props.src, this._dashPlayer);
          var val = this.props.src;
          if ("" !== val) {
            /** @type {!XMLHttpRequest} */
            var xhr = new XMLHttpRequest;
            xhr.open("GET", val, true);
            /** @type {string} */
            xhr.responseType = "text";
            xhr.send();
            /**
             * @return {undefined}
             */
            xhr.onreadystatechange = function() {
              if (xhr.readyState == xhr.DONE) {
                /** @type {(Object|null|string)} */
                var html = xhr.response;
                /** @type {!DOMParser} */
                var domParser = new DOMParser;
                /** @type {(Document|null)} */
                var dom = domParser.parseFromString(html, "text/xml", 0);
                me._dashParams = me.getDashParams(dom);
                me._dashParams.file = me.props.src.replace(/[^\/]*\.mpd$/g, "") + me._dashParams.file;
                me.setupDashVideo();
                me.clearDashVars();
              }
            };
            xhr.addEventListener("error", function(canCreateDiscussions) {
              log("Error: " + canCreateDiscussions + " Could not load url.");
            }, false);
          }
        } else {
          this.props.currentSrc = this.props.src;
          if (this.HTMLplayer) {
            this.HTMLplayer.removeEventListener("loadedmetadata", this.onPlayerReady, false);
            this.HTMLplayer.removeEventListener("play", this.onPlayerStateChange, false);
            this.HTMLplayer.removeEventListener("pause", this.onPlayerStateChange, false);
            this.HTMLplayer.removeEventListener("ended", this.onPlayerStateChange, false);
            this.HTMLplayer.removeEventListener("progress", this.onPlayerStateChange, false);
            this.HTMLplayer.removeEventListener("error", this.onPlayerError, false);
            this.HTMLplayer.addEventListener("loadedmetadata", this.onPlayerReady, false);
            this.HTMLplayer.addEventListener("play", this.onPlayerStateChange, false);
            this.HTMLplayer.addEventListener("pause", this.onPlayerStateChange, false);
            this.HTMLplayer.addEventListener("ended", this.onPlayerStateChange, false);
            this.HTMLplayer.addEventListener("progress", this.onPlayerStateChange, false);
            this.HTMLplayer.addEventListener("error", this.onPlayerError, false);
          }
        }
      }
    }, {
      key : "onPlayerReady",
      value : function() {
        this.classList.add("is-ready");
        this.duration = this.getDuration();
        /** @type {number} */
        var newAudioDescriptorPreset = this.duration / 60 >> 0;
        /** @type {number} */
        var newAudioDescriptor = this.duration - 60 * newAudioDescriptorPreset >> 0;
        if (newAudioDescriptor < 10) {
          /** @type {string} */
          newAudioDescriptor = "0" + newAudioDescriptor;
        }
        /** @type {string} */
        this.props.formatedDuration = newAudioDescriptorPreset + "'" + newAudioDescriptor;
        this.addListenners();
        this.fire("ready");
        if (!($.support.touch && $.support.smallscreen || $.support.ipad)) {
          if (this.props.autoplay && false !== this.paused && this.enabled) {
            this.play();
          }
          if (this.props.preload) {
            /** @type {boolean} */
            this._isPreload = true;
            this.play();
          }
        }
      }
    }, {
      key : "onPlayerError",
      value : function(name) {
        if (void 0 !== name.target.error) {
          switch(name.target.error.code) {
            case name.target.error.MEDIA_ERR_ABORTED:
              console.warn("You aborted the video playback.");
              break;
            case name.target.error.MEDIA_ERR_NETWORK:
              console.warn("A network error caused the video download to fail part-way.");
              break;
            case name.target.error.MEDIA_ERR_DECODE:
              console.warn("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
              break;
            case name.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
              console.warn("The video could not be loaded, either because the server or network failed or because the format is not supported.");
              break;
            default:
              console.warn("An unknown error occurred.");
          }
          this.fire("error");
        }
      }
    }, {
      key : "onPlayerStateChange",
      value : function(name) {
        if (this.ischangingQuality) {
          return void this.classList.add("is-loading");
        }
        if (1 == this.props.mute) {
          this.mute();
        }
        if (!("ended" != name.type && 0 != name.data)) {
          this.onPlayerEnded();
        }
        if (!("play" != name.type && 1 != name.data)) {
          this.onPlayerPlay();
        }
        if (!("pause" != name.type && 2 != name.data)) {
          this.onPlayerPause();
        }
        if ("progress" == name.type) {
          this.onPlayerBuffer();
        }
      }
    }, {
      key : "onPlayerBuffer",
      value : function() {
        this.fire("buffer");
        this.classList.add("is-loading");
      }
    }, {
      key : "addListenners",
      value : function() {
        if (this.props.controls) {
          $.EventDispatcher.on("key:escape", this.cancelFullScreen, this);
        }
      }
    }, {
      key : "toggleControls",
      value : function() {
        var dayEle = this;
        clearTimeout(this.mouseMoveTimer);
        if (this.isControlsHidden) {
          /** @type {boolean} */
          this.isControlsHidden = false;
          this.classList.remove("is-no-controls");
        }
        /** @type {number} */
        this.mouseMoveTimer = setTimeout(function() {
          /** @type {boolean} */
          dayEle.isControlsHidden = true;
          dayEle.classList.add("is-no-controls");
        }, 2e3);
      }
    }, {
      key : "toggleSound",
      value : function(name) {
        if (this.muted) {
          this.unmute();
        } else {
          this.mute();
        }
      }
    }, {
      key : "onPlayerPlay",
      value : function(name) {
        var new_link_node = this;
        this.duration = this.getDuration();
        this.classList.add("is-playing");
        this.classList.remove("is-paused");
        /** @type {number} */
        this._loadingTimer = setTimeout(function() {
          new_link_node.classList.remove("is-loading");
        }, 0);
        /** @type {boolean} */
        this.props.isPlaying = true;
        /** @type {boolean} */
        this.paused = false;
        this.startProgress();
        if (this.props.controls) {
          this.toggleControls();
        }
        if (this.isFirstPlay) {
          /** @type {boolean} */
          this.isFirstPlay = false;
          this.duration = this.getDuration();
        }
        this.classList.add("has-started");
        this.props.onStart(this);
        if (this._isPreload && !this.props.autoplay) {
          /** @type {boolean} */
          this._isPreload = false;
          this.pause();
        }
        this.fire("play");
      }
    }, {
      key : "onPlayerPause",
      value : function() {
        this.classList.remove("is-playing");
        this.classList.add("is-paused");
        /** @type {boolean} */
        this.paused = true;
        /** @type {boolean} */
        this.props.isPlaying = false;
        this.stopProgress();
        this.fire("pause");
        clearTimeout(this.mouseMoveTimer);
        if (this.isControlsHidden) {
          /** @type {boolean} */
          this.isControlsHidden = false;
          this.classList.remove("is-no-controls");
        }
      }
    }, {
      key : "onPlayerEnded",
      value : function() {
        var e = this;
        this.fire("ended");
        this.props.onEnded(this);
        setTimeout(function() {
          e.onPlayerPause();
        }, 40);
      }
    }, {
      key : "togglePlay",
      value : function() {
        this[this.paused ? "play" : "pause"]();
      }
    }, {
      key : "toggleFullScreen",
      value : function() {
        if (this.isFullScreen) {
          this.cancelFullScreen();
        } else {
          this.requestFullScreen();
        }
      }
    }, {
      key : "requestFullScreen",
      value : function() {
        var previewPlayer = this;
        /** @type {boolean} */
        this.isFullScreen = true;
        this.isPausedBeforeFullScreen = this.paused;
        this.pause();
        this.classList.add("is-fullscreen");
        $.EventDispatcher.fire("video:enterfullscreen");
        var e = this;
        for (; e.parentNode && e.parentNode.getAttribute;) {
          e.parentNode.classList.add("is-branch");
          e = e.parentNode;
        }
        if (requestFullscreen) {
          document.addEventListener(name, this.onFullScrenChange);
          this[requestFullscreen]();
        } else {
          setTimeout(function() {
            if (1 == previewPlayer.isPausedBeforeFullScreen) {
              previewPlayer.pause();
            } else {
              previewPlayer.play();
            }
          }, 0);
        }
        document.getElementsByTagName("body")[0].classList.add("is-fullscreen");
      }
    }, {
      key : "onFullScrenChange",
      value : function() {
        if (!document[getNamedFlows]) {
          document.removeEventListener(name, this.onFullScrenChange);
          if (this.isFullScreen) {
            this.cancelFullScreen();
          }
        }
        if (1 == this.isPausedBeforeFullScreen) {
          this.pause();
        } else {
          this.play();
        }
      }
    }, {
      key : "cancelFullScreen",
      value : function() {
        var previewPlayer = this;
        /** @type {boolean} */
        this.isFullScreen = false;
        this.isPausedBeforeFullScreen = this.paused;
        this.pause();
        this.classList.remove("is-fullscreen");
        var e = this;
        for (; e.parentNode && e.parentNode.getAttribute;) {
          e.parentNode.classList.remove("is-branch");
          e = e.parentNode;
        }
        if (prefixHidden) {
          document[prefixHidden]();
        } else {
          setTimeout(function() {
            if (1 == previewPlayer.isPausedBeforeFullScreen) {
              previewPlayer.pause();
            } else {
              previewPlayer.play();
            }
          }, 0);
        }
        document.getElementsByTagName("body")[0].classList.remove("is-fullscreen");
        $.EventDispatcher.fire("video:leavefullscreen");
      }
    }, {
      key : "play",
      value : function() {
        if (void 0 !== this._dashPlayer) {
          this._dashPlayer.play();
        } else {
          if (this.HTMLplayer) {
            this.HTMLplayer.play();
          }
        }
      }
    }, {
      key : "pause",
      value : function() {
        if (!this.paused) {
          if (void 0 !== this._dashPlayer) {
            this._dashPlayer.pause();
          } else {
            if (this.HTMLplayer) {
              this.stopProgress();
              this.HTMLplayer.pause();
            }
          }
        }
      }
    }, {
      key : "onActiveChange",
      value : function() {
        if (this.props.active) {
          this.seek(0, false);
          this.play();
        } else {
          this.pause();
          this.seek(0);
        }
      }
    }, {
      key : "onForceStop",
      value : function() {
        var qMain = this;
        if (this.props.forceStop) {
          this.seek(0, true);
          setTimeout(function() {
            qMain.pause();
          }, 4);
        }
      }
    }, {
      key : "onSeekChange",
      value : function() {
        this.seek(this.props.seekTo);
      }
    }, {
      key : "changePoster",
      value : function(name) {
        /** @type {string} */
        this.props.poster = name;
      }
    }, {
      key : "unmute",
      value : function() {
        if (this.HTMLplayer) {
          /** @type {boolean} */
          this.HTMLplayer.muted = false;
          /** @type {boolean} */
          this.muted = false;
          this.classList.remove("is-muted");
        }
      }
    }, {
      key : "mute",
      value : function() {
        if (this.HTMLplayer) {
          /** @type {boolean} */
          this.HTMLplayer.muted = true;
          /** @type {boolean} */
          this.muted = true;
          this.classList.add("is-muted");
        }
      }
    }, {
      key : "seek",
      value : function(name, t) {
        if (void 0 !== this._dashPlayer) {
          this._dashPlayer.seek(name);
        } else {
          if (this.HTMLplayer) {
            /** @type {string} */
            this.HTMLplayer.currentTime = name;
          }
        }
      }
    }, {
      key : "startProgress",
      value : function() {
        clearTimeout(this.progressTimer);
        this.updateTime();
      }
    }, {
      key : "stopProgress",
      value : function() {
        clearTimeout(this.progressTimer);
        /** @type {null} */
        this.progressTimer = null;
      }
    }, {
      key : "updateTime",
      value : function(name, t) {
        var pointSize = this;
        this.currentTime = this.getCurrentTime();
        /** @type {number} */
        var relation = (this.duration - this.currentTime) / 60 >> 0;
        /** @type {number} */
        var distance = this.duration - this.currentTime - 60 * relation >> 0;
        if (distance < 10) {
          /** @type {string} */
          distance = "0" + distance;
        }
        /** @type {string} */
        this.props.currentTime = relation + "'" + distance;
        if (this.props.controls) {
          /** @type {number} */
          this.props.timelineValue = this.currentTime / this.duration;
        }
        /** @type {number} */
        this.progressTimer = setTimeout(function() {
          pointSize.updateTime();
        }, 100);
        if (this.props.loop && this.currentTime >= this.duration - .5) {
          this.seek(0);
        }
        this.props.onTimeupdate(this, this.currentTime);
      }
    }, {
      key : "setTimeCount",
      value : function() {
        this.formatTime(1e3 * this.currentTime);
        this.formatTime(1e3 * this.duration);
      }
    }, {
      key : "formatTime",
      value : function(name) {
        /** @type {number} */
        var i = name / 1e3 / 60 << 0;
        /** @type {number} */
        var minute = name / 1e3 % 60 << 0;
        /** @type {string} */
        var t = "";
        return t = t + (i < 10 ? "0" : ""), t = t + (i + ":"), t = t + (minute < 10 ? "0" : ""), t = t + minute;
      }
    }, {
      key : "getCurrentTime",
      value : function() {
        return this.HTMLplayer.currentTime;
      }
    }, {
      key : "getDuration",
      value : function() {
        return this.HTMLplayer.duration;
      }
    }, {
      key : "destroy",
      value : function() {
        $.EventDispatcher.off("key:escape", this.cancelFullScreen, this);
      }
    }, {
      key : "template",
      get : function() {
        return require(34);
      }
    }, {
      key : "events",
      get : function() {
        return {
          "click .js-video-big-play" : "togglePlay",
          "click .js-video-play" : "togglePlay",
          "click .js-video-fullscreen" : "toggleFullScreen",
          "pointerdown .js-volume" : "_onVolumeDown",
          pointermove : "_onPointerMove",
          pointerup : "_onPointerUp"
        };
      }
    }, {
      key : "defaultProps",
      get : function() {
        return test({
          src : {
            type : "string",
            value : null,
            change : "_onSrcChange"
          },
          currentSrc : {
            type : "string",
            value : null
          },
          poster : {
            type : "string",
            value : ""
          },
          wmode : {
            type : "string",
            value : "transparent"
          },
          active : {
            type : "bool",
            value : true,
            change : "onActiveChange"
          },
          forceStop : {
            type : "bool",
            value : false,
            change : "onForceStop"
          },
          controls : {
            type : "bool",
            value : true
          },
          showBigPlay : {
            type : "bool",
            value : true
          },
          autoHideControls : {
            type : "bool",
            value : true
          },
          autoplay : {
            type : "bool",
            value : false
          },
          mute : {
            type : "bool",
            value : false
          },
          loop : {
            type : "bool",
            value : false
          },
          showinfo : {
            type : "bool",
            value : false
          },
          rel : {
            type : "int",
            value : 0
          },
          uuid : {
            type : "string",
            value : "yt-" + oidStr
          },
          quality : "auto",
          timelineValue : {
            type : "float",
            value : null
          },
          onReady : {
            type : "func",
            value : function() {
            }
          },
          onEnded : {
            type : "fn",
            value : function() {
            }
          },
          onPlay : {
            type : "fn",
            value : function() {
            }
          },
          onStart : {
            type : "fn",
            value : function() {
            }
          },
          onTimeupdate : {
            type : "fn",
            value : function() {
            }
          },
          currentTime : {
            type : "float",
            value : 0,
            change : "onCurrentTimeChange"
          },
          isPlaying : {
            type : "bool",
            value : false
          },
          preload : {
            type : "bool",
            value : false
          },
          load : {
            type : "bool",
            value : true
          },
          cover : {
            type : "bool",
            value : false
          },
          useStripe : {
            type : "bool",
            value : true
          },
          stripeColor : "#000000",
          volume : {
            type : "f",
            value : 1
          },
          title : "",
          formatedDuration : ""
        }, "currentTime", {
          type : "f",
          value : 1
        });
      }
    }]), Agent;
  }($.Component);
  (0, $.register)("core-video", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<div class="js-content">        <template is="light-core-template" if="{{load}}" remove-nodes="true">        <template is="light-core-template" if="{{useNative && src !== null}}" remove-nodes="true">            <video class="o-wrapper--panel u-fit js-native-video" $src="{{src}}" syle="width:=100%; height: auto;"></video>        </template>        <template is="light-core-template" if="{{!useNative}}" remove-nodes="true">            <div class="o-wrapper--panel u-fit c-video__yt-wrapper" id="{{uuid}}-video" ></div>        </template>    </template>        <template is="light-core-template" if="{{poster!==\'\' && poster!==null && poster!==\'null\'}}">        <div aria-hidden="true" class="u-absolute u-pos-tl c-video-player__poster u-fit u-bg-cover u-pos-tl"             $style="transform: translateZ(0); z-index: 1;background-image:url(\'{{poster}}\');">        </div>    </template>    <div aria-hidden="true" style="padding-top: 56.25%;"></div>    <template is="light-core-template" if="{{showBigPlay && controls}}" remove-nodes="true">        <button class="u-pos-tl c-btn c-text--sm c-video__big-playo-wrapper--panel o-wrapper--valign u-align-center u-fit js-video-big-play"         style="background-color: rgba(0,0,0,0.5); z-index: 2; position: absolute;">            <span class="c-text--sm u-color--white  u-inline-block u-valign-middle">                Play            </span>        </button>    </template>    <template is="light-core-template" if="{{controls}}">        <div class="c-video-player__controls u-pad-x-vw1of18 u-absolute u-pos-bl u-align-center u-w2of2 u-pad-b-xs " style="z-index: 3">            <core-slider aria-hidden="true" active="{{active}}" class="c-video-player__progressbar u-inline-block u-valign-middle u-overflow-h" on-slide="onSliderSlide" on-stop="onSliderStop" value="{{timelineValue}}">                <div class="js-handler c-video-player__track u-fit-h u-relative"></div>            </core-slider>            <div class="u-flex u-justify-space-between">                <button aria-label="{{isPlaying?\'Pause\':\'Play\'}}" href="javascript:void(0);" class="c-btn u-color--white c-text--xs u-inline-block u-valign-middle js-video-play">                    {{isPlaying?\'Pause\':\'Play\'}}                </button>                <span class="u-inline-block u-color--white c-text--xs">                    {{currentTime}}                </span>                <button aria-label="toggle fullscreen" class="c-btn c-btn u-color--white c-text--xs u-inline-block u-valign-middle js-video-fullscreen">                    Fullscreen                </button >            </div>        </div>    </template></div>';
}, function(canCreateDiscussions, isSlidingUp, require) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _require = require(0);
  var Base64 = require(1);
  var artistTrack = (function(exports) {
    if (exports) {
      exports.__esModule;
    }
  }(Base64), function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "created",
      value : function() {
        /** @type {number} */
        this._lastWinWidth = 0;
        /** @type {number} */
        this._winWidth = window.innerWidth;
      }
    }, {
      key : "ready",
      value : function() {
        var blurFBO = this;
        /** @type {!Array} */
        this._lines = [];
        /** @type {!Array} */
        this._words = [];
        this.$placeholder = this.querySelector(".js-placeholder");
        this.originalContent = this.querySelector(".js-content").innerText.replace("-", "&#8209;");
        /** @type {!Array} */
        this._words = [];
        this.originalContent = this.originalContent.replace(/<\s?br\s?\/>/g, " br ");
        this.originalContent = this.originalContent.replace(/(\n|\r)/g, " br ");
        var parts = this.originalContent.replace(/\s+/g, " ").split(" ");
        /** @type {number} */
        var i = 0;
        for (; i < parts.length; i++) {
          /** @type {!Element} */
          var a = document.createElement("span");
          if (/\*/g.test(parts[i])) {
            /** @type {!Element} */
            var o = document.createElement("span");
            o.innerHTML = parts[i].replace(/\*/g, "");
            o.classList.add("u-underline");
            a.appendChild(o);
          } else {
            if ("br" === parts[i]) {
              /** @type {!Element} */
              var b = document.createElement("br");
              a.appendChild(b);
            } else {
              a.innerHTML = parts[i];
            }
          }
          if (a.classList.add(this.props.wordClass), this._words.push(a), i < parts.length - 1) {
            /** @type {!Element} */
            var s = document.createElement("span");
            /** @type {string} */
            s.innerHTML = " ";
            this._words.push(s);
          }
        }
        setTimeout(function() {
          blurFBO.resize(true);
        }, 1e3);
      }
    }, {
      key : "resize",
      value : function(name) {
        /** @type {number} */
        this._winWidth = window.innerWidth;
        /** @type {boolean} */
        this._isMobile = this._winWidth < 768;
        /** @type {!Array} */
        var t = [];
        if (name || this._isMobile && this._winWidth !== this._lastWinWidth || !this._isMobile) {
          /** @type {number} */
          this._lastWinWidth = this._winWidth;
          /** @type {!Array} */
          this._words = [];
          var parts = this.originalContent.replace(/(\n|\r)/g, " ").replace(/\s+/g, " ").split(" ");
          /** @type {number} */
          var j = 0;
          for (; j < parts.length; j++) {
            /** @type {!Element} */
            var tag = document.createElement("span");
            if (/\*/g.test(parts[j])) {
              /** @type {!Element} */
              var n = document.createElement("span");
              n.innerHTML = parts[j].replace(/\*/g, "");
              n.classList.add("u-underline");
              tag.appendChild(n);
            } else {
              if ("br" === parts[j]) {
                /** @type {!Element} */
                var node = document.createElement("br");
                tag.appendChild(node);
              } else {
                tag.innerHTML = parts[j];
              }
            }
            if (this._words.push(tag), j < parts.length - 1) {
              /** @type {!Element} */
              var a = document.createElement("span");
              /** @type {string} */
              a.innerHTML = " ";
              this._words.push(a);
            }
          }
          /** @type {string} */
          this.$placeholder.innerHTML = "";
          /** @type {number} */
          var aaWidth = 0;
          /** @type {string} */
          var id = "";
          /** @type {!DocumentFragment} */
          var frag = document.createDocumentFragment();
          /** @type {number} */
          var _n = 0;
          for (; _n < this._words.length; _n++) {
            frag.appendChild(this._words[_n]);
          }
          this.$placeholder.appendChild(frag);
          /** @type {number} */
          var i = 0;
          for (; i < this._words.length; i++) {
            var w = this._words[i].getBoundingClientRect().top;
            if (0 == aaWidth) {
              aaWidth = w;
            }
            if (w > aaWidth) {
              if ("" !== id && " " !== id && "&nbsp;" !== id) {
                t.push(id);
              }
              /** @type {string} */
              id = "";
            }
            /** @type {string} */
            id = id + this._words[i].innerHTML;
            aaWidth = w;
          }
          if ("" !== id && " " !== id && "&nbsp;" !== id) {
            t.push(id);
          }
          this.props.lines.splice(0, this.props.lines.length);
          Array.prototype.push.apply(this.props.lines, t);
        }
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          delay : {
            type : "f",
            value : 0
          },
          lines : {
            type : "arr",
            value : []
          },
          minRatio : {
            type : "f",
            value : 0
          },
          direction : {
            type : "i",
            value : 1
          },
          useRatio : {
            type : "bool",
            value : true
          },
          useMask : {
            type : "bool",
            value : false
          },
          debug : {
            type : "bool",
            value : false
          },
          wordClass : ""
        };
      }
    }, {
      key : "template",
      get : function() {
        return require(36);
      }
    }]), Agent;
  }(_require.Component));
  (0, _require.register)("app-multiline", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<div class="{{wordClass}} js-content" style="opacity: 0">\t<content></content></div><div class="u-vacuum u-absolute u-pos-tl u-fit-w | js-placeholder"      style="opacity: 0;"></div><div class="u-vacuum  u-absolute u-pos-tl u-fit-w">\t<template is="light-core-template" repeat="{{line in lines}}" remove-nodes="true">\t\t<span class="{{wordClass}} u-inline-block u-relative c-anim c-anim--slide-y u-fit-w" \t\t\t\tstyle="transition-delay:{{direction==1?$index*0.1+delay:(lines.length-1-$index)*0.1+delay}}s">\t\t\t{{@line}}\t\t</span>\t</template></div>';
}, function(canCreateDiscussions, isSlidingUp, f) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var ns = f(0);
  var _deepAssign = f(1);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "_onPointerEnter",
      value : function() {
        /** @type {boolean} */
        this.props.isPointerHover = true;
      }
    }, {
      key : "_onPointerLeave",
      value : function() {
        /** @type {boolean} */
        this.props.isPointerHover = false;
      }
    }, {
      key : "_onBulletDown",
      value : function(name) {
        /** @type {!Object} */
        this.props.currentIndex = name;
      }
    }, {
      key : "created",
      value : function() {
        /** @type {!Array} */
        this._items = [];
        /** @type {boolean} */
        this._isPointerDown = false;
        /** @type {number} */
        this._oldIndex = 0;
        /** @type {number} */
        this._direction = 1;
        /** @type {!Array} */
        this._pointer = [0, 0];
        /** @type {!Array} */
        this._cursor = [0, 0];
        /** @type {number} */
        this._acc = 0;
        this._onPointerMove = this._onPointerMove.bind(this);
        this._onPointerUp = this._onPointerUp.bind(this);
        /** @type {boolean} */
        this._canChange = true;
      }
    }, {
      key : "attached",
      value : function() {
        /** @type {number} */
        this._lastTime = Date.now();
        /** @type {number} */
        this._timeProgress = 0;
      }
    }, {
      key : "detached",
      value : function() {
        this.removeEventListener(ns.support.pointerdown, this._onPointerDown, false);
        document.removeEventListener(ns.support.pointermove, this._onPointerMove, false);
        document.removeEventListener(ns.support.pointerup, this._onPointerUp, false);
      }
    }, {
      key : "ready",
      value : function() {
        this.addEventListener(ns.support.pointerdown, this._onPointerDown, false);
        document.addEventListener(ns.support.pointermove, this._onPointerMove, false);
        document.addEventListener(ns.support.pointerup, this._onPointerUp, false);
      }
    }, {
      key : "_onPointerDown",
      value : function(name) {
        if (this._canChange) {
          if (1 == this.props.cursorDirection) {
            this._next();
          } else {
            this._prev();
          }
        }
      }
    }, {
      key : "_onPointerMove",
      value : function(name) {
        var evt = ns.support.touch ? name.touches[0] || name.changedTouches[0] : name;
        var x = evt.pageX;
        var y = evt.pageY;
        /** @type {number} */
        x = x - (window.pageXOffset || document.documentElement.scrollLeft);
        /** @type {number} */
        y = y - (window.pageYOffset || document.documentElement.scrollTop);
        if (!window.pageYOffset) {
          document.documentElement.scrollTop;
        }
        /** @type {number} */
        this._cursor[0] = x - this._left;
        /** @type {number} */
        this._cursor[1] = y - this._top;
        /** @type {number} */
        this.props.cursorDirection = this._cursor[0] < this._width / 2 ? -1 : 1;
      }
    }, {
      key : "_onPointerUp",
      value : function(name) {
      }
    }, {
      key : "resize",
      value : function() {
        this._width = this.clientWidth;
        this._height = this.clientHeight;
        var el = (0, _deepAssign2.default)(this, document);
        this._left = el.left;
        /** @type {number} */
        this._top = window.innerWidth < 700 ? 30 : 90;
      }
    }, {
      key : "update",
      value : function() {
        if (this.props.autoplay) {
          this._timeProgress += Date.now() - this._lastTime;
          /** @type {number} */
          this._lastTime = Date.now();
          if (this._timeProgress > this.props.delay) {
            this._next();
          }
        }
        if (this.props.bulletNav) {
          this.props.currentProgIndex = this.props.currentIndex + this._timeProgress / this.props.delay;
        }
        this.props.cursor[0] += .5 * (this._cursor[0] - this.props.cursor[0]);
        this.props.cursor[1] += .5 * (this._cursor[1] - this.props.cursor[1]);
        this.props.hasTouch = ns.support.touch;
      }
    }, {
      key : "_next",
      value : function() {
        if (this._canChange) {
          /** @type {number} */
          this._timeProgress = 0;
          if (++this.props.currentIndex > this._items.length - 1) {
            /** @type {number} */
            this.props.currentIndex = this.props.loop ? 0 : this._items.length - 1;
          }
        }
      }
    }, {
      key : "_prev",
      value : function() {
        if (this._canChange) {
          /** @type {number} */
          this._timeProgress = 0;
          if (--this.props.currentIndex < 0) {
            /** @type {number} */
            this.props.currentIndex = this.props.loop ? this._items.length - 1 : 0;
          }
        }
      }
    }, {
      key : "_onCurrentIndexChange",
      value : function() {
        var e = this;
        if (this._canChange = false, setTimeout(function() {
          /** @type {boolean} */
          e._canChange = true;
        }, 700), this._items) {
          this.props.onCurrentIndexChange(this.props.currentIndex, this._oldIndex);
          /** @type {number} */
          this._direction = this._oldIndex < this.props.currentIndex ? 1 : -1;
          if (this._oldIndex == this._items.length - 1 && 0 == this.props.currentIndex) {
            /** @type {number} */
            this._direction = 1;
          }
          if (0 == this._oldIndex && this.props.currentIndex == this._items.length - 1) {
            /** @type {number} */
            this._direction = -1;
          }
          /** @type {number} */
          var i = 0;
          var length = this._items.length;
          for (; i < length; i++) {
            this._items[i].props.oldIndex = this._oldIndex;
            this._items[i].props.currentIndex = this.props.currentIndex;
            /** @type {number} */
            this._items[i].props.direction = this._direction;
          }
          this._oldIndex = this.props.currentIndex;
        }
      }
    }, {
      key : "addItem",
      value : function(name, index, value) {
        name.props.currentIndex = this.props.currentIndex;
        if (index) {
          /** @type {!Object} */
          this._items[index] = name;
          this.props.slides.splice(index, 0, {
            title : value || name.getAttribute("data-title") || ""
          });
        } else {
          name.props.index = this._items.length;
          this._items.push(name);
          this.props.slides.push({
            title : value || name.getAttribute("data-title") || ""
          });
        }
      }
    }, {
      key : "removeItem",
      value : function(name, position) {
        this._items.splice(position, 1);
        this.props.slides.splice(position, 1);
        /** @type {number} */
        var i = 0;
        var length = this._items.length;
        for (; i < length; i++) {
          /** @type {number} */
          this._items[i].props.index = i;
        }
      }
    }, {
      key : "events",
      get : function() {
        return {
          "pointerenter .js-slideshow-content" : "_onPointerEnter",
          "pointerleave .js-slideshow-content" : "_onPointerLeave"
        };
      }
    }, {
      key : "template",
      get : function() {
        return f(38);
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          autoplay : {
            type : "bool",
            value : false
          },
          active : {
            type : "bool",
            value : false
          },
          currentIndex : {
            type : "int",
            value : 0,
            change : "_onCurrentIndexChange"
          },
          currentProgIndex : {
            type : "f",
            value : 0
          },
          items : {
            type : "array",
            value : []
          },
          controls : {
            type : "bool",
            value : true
          },
          useBackArrow : {
            type : "bool",
            value : true
          },
          loop : {
            type : "bool",
            value : true
          },
          bulletNav : {
            type : "bool",
            value : false
          },
          delay : {
            type : "f",
            value : 2e3
          },
          debug : {
            type : "bool",
            value : false
          },
          force : {
            type : "bool",
            value : false
          },
          forceTheme : "dark",
          bulletNavClass : "u-inline-block u-relative u-valign-middle",
          slides : {
            type : "arr",
            value : []
          },
          cursor : {
            type : "arr",
            value : [0, 0]
          },
          isPointerDown : {
            type : "bool",
            value : false
          },
          isTouch : {
            type : "bool",
            value : ns.support.touch
          },
          prevent : {
            type : "bool",
            value : false
          },
          direction : {
            type : "f",
            value : 1
          },
          cursorDirection : {
            type : "f",
            value : 1
          },
          isPointerHover : {
            type : "bool",
            value : false
          },
          onCurrentIndexChange : {
            type : "fn",
            value : function() {
            }
          },
          hasTouch : {
            type : "bool",
            value : ns.support.touch
          }
        };
      }
    }]), Agent;
  }(ns.Component);
  (0, ns.register)("app-slideshow", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<div aria-hidden="true" class="no-cursor js-slideshow-content u-relative u-fit u-overflow-h">\t<content></content>\t\x3c!-- <svg class="c-slideshow__arrow is-left u-absolute u-pos-tl {{hasTouch?\'is-active\':\'\'}}" viewBox="0 0 48 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\t\tstyle="top: 50%;">\t\t<g fill="#fff" transform="translate(24.000000, 42.000000) rotate(-90.000000) translate(-24.000000, -42.000000) translate(-18.000000, 18.000000)">\t\t\t<polygon points="0.5 42.4 5.5 47.6 42 10.7 78.5 47.6 83.5 42.4 42 0.4"></polygon>\t\t</g>\t</svg>\t<svg class="c-slideshow__arrow is-right u-absolute u-pos-tr {{hasTouch?\'is-active\':\'\'}}" viewBox="0 0 48 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\t\t\tstyle="top: 50%;">\t\t<g fill="#fff" transform="translate(24.000000, 42.000000) rotate(-90.000000) translate(-24.000000, -42.000000) translate(-18.000000, 18.000000)">\t\t\t<polygon points="0.5 42.4 5.5 47.6 42 10.7 78.5 47.6 83.5 42.4 42 0.4"></polygon>\t\t</g>\t</svg> --\x3e</div><h3 class="c-text--small u-color--light u-absolute u-fit-w u-align-center" \tstyle="left: 0; top: 50%; transform: translateY(-50%) translateZ(0); z-index: 10;">\t{{currentIndex+1 < 10 ? \'0\' + (currentIndex+1) : currentIndex+1}} / {{currentIndex+1 < 10 ? \'0\' + (slides.length) : slides.length}}</h3>\x3c!-- <div class="u-pointer-none u-absolute u-fit u-pos-tl " style="z-index: 11;">\t<button on-click="_prev" role="prev" class="u-marg-l-vw2of18 c-btn u-pointer-auto c-slidehsow-btn__prev"></button>\t<button on-click="_next" role="next" class="u-marg-r-vw2of18 c-btn u-pointer-auto c-slidehsow-btn__next"></button></div> --\x3e<div class="u-pointer-none u-absolute  c-slideshow__cursor\t\t\t| {{isPointerHover && !hasTouch?\'is-active\':\'\'}} {{cursorDirection == -1?\'is-left\':\'is-right\'}}\t\t\t| u-hide@sm" \t $style="transform: translate({{cursor[0]}}px, {{cursor[1]}}px) translateZ(0)">\t<div class="c-slideshow__cursor__inner">\t</div></div>\t';
}, function(canCreateDiscussions, isSlidingUp, NFA) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var m = NFA(0);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "ready",
      value : function() {
        this.$parent = this.parentNode;
        for (; this.$parent;) {
          if ("APP-SLIDESHOW" == this.$parent.tagName) {
            this.$parent.addItem(this, this.props.index, this.props.title);
            break;
          }
          this.$parent = this.$parent.parentNode;
        }
        this._focusSlide();
      }
    }, {
      key : "detached",
      value : function() {
        if (this.$parent) {
          this.$parent.removeItem(this, this.props.index);
        }
      }
    }, {
      key : "_focusSlide",
      value : function() {
        var _this = this;
        this.classList.add("has-no-transition");
        clearTimeout(this._timer);
        /** @type {number} */
        this._timer = setTimeout(function() {
          if (_this.props.index == _this.props.oldIndex) {
            _this.classList.remove("is-next", "is-prev");
            _this.classList.add("is-active");
            setTimeout(function() {
              _this.classList.remove("has-no-transition");
              _this.classList.remove("is-active");
              _this.classList.add(1 == _this.props.direction || _this.props.invert ? "is-prev" : "is-next");
              /** @type {number} */
              _this._timer = setTimeout(function() {
                /** @type {string} */
                _this.style.visibility = "hidden";
                _this.classList.add("has-no-transition");
              }, 1200);
            }, 100);
          } else {
            if (_this.props.index == _this.props.currentIndex) {
              /** @type {string} */
              _this.style.visibility = "visible";
              _this.classList.remove("is-active", "is-next", "is-prev");
              _this.classList.add(1 == _this.props.direction || _this.props.invert ? "is-next" : "is-prev");
              setTimeout(function() {
                _this.classList.remove("has-no-transition");
                _this.classList.add("is-active");
                _this.classList.remove("is-next", "is-prev");
                /** @type {number} */
                _this._timer = setTimeout(function() {
                  _this.classList.add("has-no-transition");
                }, 1200);
              }, 100);
            } else {
              _this.classList.remove("is-active", "is-next", "is-prev");
              /** @type {string} */
              _this.style.visibility = "hidden";
              _this.classList.add("has-no-transition");
            }
          }
        }, 50);
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          index : {
            type : "int",
            value : 0
          },
          currentIndex : {
            type : "int",
            value : 0,
            change : "_focusSlide"
          },
          oldIndex : {
            type : "int",
            value : -1
          },
          direction : {
            type : "int",
            value : 1
          },
          invert : {
            type : "bool",
            value : false
          },
          title : "",
          debug : {
            type : "bool",
            value : false
          }
        };
      }
    }]), Agent;
  }(m.Component);
  (0, m.register)("app-slide", artistTrack);
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _this = __webpack_require__(0);
  var _deepAssign = __webpack_require__(1);
  var _deepAssign2 = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(_deepAssign);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "created",
      value : function() {
        /** @type {!Array} */
        this._vect = [0, 0];
        /** @type {number} */
        this._vectLength = 0;
        /** @type {number} */
        this._pointerX = 0;
        /** @type {number} */
        this._pointerY = 0;
        /** @type {number} */
        this._x = 0;
        /** @type {number} */
        this._y = 0;
        /** @type {number} */
        this._progress = 0;
        /** @type {!Array} */
        this._offset = [0, 0];
        this.bindMethods(["_onPointerMove"]);
      }
    }, {
      key : "ready",
      value : function() {
        /** @type {number} */
        this._radiusSqrtSmall = this.props.radius * this.props.radius;
        /** @type {number} */
        this._radiusSqrtLarge = 4 * this._radiusSqrtSmall;
        /** @type {number} */
        this._radiusSqrt = this._radiusSqrtSmall;
        this.$triggerParallax = this.querySelectorAll(".js-trigger-parallax");
        /** @type {!Array} */
        this.triggerParallaxRatio = [];
        /** @type {number} */
        var i = 0;
        for (; i < this.$triggerParallax.length; i++) {
          /** @type {number} */
          this.triggerParallaxRatio[i] = Number(this.$triggerParallax[i].getAttribute("ratio"));
        }
      }
    }, {
      key : "detached",
      value : function() {
        document.removeEventListener(_this.support.pointermove, this._onPointerMove, false);
      }
    }, {
      key : "attached",
      value : function() {
        if (!_this.support.touch) {
          document.addEventListener(_this.support.pointermove, this._onPointerMove, false);
        }
      }
    }, {
      key : "resize",
      value : function() {
        var anchorBoundingBoxViewport = (0, _deepAssign2.default)(this);
        this._offset[0] = anchorBoundingBoxViewport.left + this.clientWidth / 2;
        this._offset[1] = anchorBoundingBoxViewport.top + this.clientHeight / 2;
        this.setAttribute("offset", "[" + this._offset[0] + "," + this._offset[1] + "]");
      }
    }, {
      key : "_onPointerMove",
      value : function(name) {
        this._touchEvent = _this.support.touch ? name.touches[0] || name.changedTouches[0] : name;
        this._pointerX = this._touchEvent.pageX;
        this._pointerY = this._touchEvent.pageY;
        this._pointerY -= window.pageYOffset || document.documentElement.scrollTop;
      }
    }, {
      key : "update",
      value : function() {
        if (this.props.active) {
          if (this._vect[0] = this._offset[0] - this._pointerX, this._vect[1] = this._offset[1] - this._pointerY, this._vectLength = this._vect[0] * this._vect[0] + this._vect[1] * this._vect[1], this._vectLength < this._radiusSqrt && !_this.support.touch) {
            /** @type {boolean} */
            this._isActive = true;
            this.classList.add("is-focused");
            this._radiusSqrt = this._radiusSqrtLarge;
            this._x += .25 * (this._pointerX - this._x - this._offset[0] + this.props.marginLeft);
            this._y += .25 * (this._pointerY - this._y - this._offset[1] + this.props.marginTop);
            this._progress += .3 * (1 - this._progress);
            this._vectLength;
            this._radiusSqrt;
          } else {
            this._x += .2 * (0 - this._x);
            this._y += .2 * (0 - this._y);
            this._progress += .3 * (0 - this._progress);
            if (this._isActive) {
              /** @type {boolean} */
              this._isActive = false;
              _this.EventDispatcher.fire("cursor:unfocus");
              this.classList.remove("is-focused");
              this._radiusSqrt = this._radiusSqrtSmall;
            }
          }
          /** @type {number} */
          this._x = Math.round(1e3 * this._x) / 1e3;
          /** @type {number} */
          this._y = Math.round(1e3 * this._y) / 1e3;
          /** @type {number} */
          var i = 0;
          for (; i < this.$triggerParallax.length; i++) {
            /** @type {string} */
            this.$triggerParallax[i].style[_this.support.transform] = "translate(" + this._x * this.triggerParallaxRatio[i] + "px, " + this._y * this.triggerParallaxRatio[i] + "px)" + _this.support.translateZ;
          }
        }
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          marginLeft : {
            type : "float",
            value : 0
          },
          marginTop : {
            type : "float",
            value : 0
          },
          radius : {
            type : "float",
            value : 100
          },
          active : {
            type : "bool",
            value : true
          },
          iconName : ""
        };
      }
    }]), Agent;
  }(_this.Component);
  (0, _this.register)("app-trigger", artistTrack);
}, function(canCreateDiscussions, isSlidingUp, i) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var m = i(0);
  var b = i(1);
  var originalB = function(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }(b);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "onPageChange",
      value : function() {
        var id = this.props.pageComponentId.replace("page-", "");
        /** @type {number} */
        var index = 0;
        for (; index < this.props.links.length; index++) {
          if (this.props.links[index].name == id) {
            /** @type {number} */
            this._currentIndex = index;
            break;
          }
        }
      }
    }, {
      key : "_onLinkDown",
      value : function(name) {
        /** @type {number} */
        this._currentIndex = name.currentTarget.getAttribute("data-index") >> 0;
      }
    }, {
      key : "_onLinkEnter",
      value : function(name) {
        /** @type {number} */
        this._hoverIndex = Number(name.currentTarget.getAttribute("data-index"));
      }
    }, {
      key : "_onPointerEnter",
      value : function() {
        /** @type {boolean} */
        this._isHoverHeader = true;
        this.resize();
      }
    }, {
      key : "_onPointerLeave",
      value : function() {
        /** @type {boolean} */
        this._isHoverHeader = false;
        this._hoverIndex = this._currentIndex;
      }
    }, {
      key : "created",
      value : function() {
        /** @type {number} */
        this._currentIndex = 0;
        /** @type {number} */
        this._hoverIndex = 0;
        /** @type {boolean} */
        this._isHoverHeader = false;
      }
    }, {
      key : "ready",
      value : function() {
        var element = this;
        /** @type {!Array} */
        this._links = [];
        setTimeout(function() {
          element._$links = element.querySelectorAll(".js-link");
          /** @type {number} */
          var ki$13 = 0;
          for (; ki$13 < element._$links.length; ki$13++) {
            element._links.push({
              position : 0,
              width : 0
            });
          }
          element.resize();
        }, 500);
      }
    }, {
      key : "resize",
      value : function() {
        /** @type {number} */
        var i = 0;
        for (; i < this._links.length; i++) {
          this._links[i].position = (0, originalB.default)(this._$links[i]);
          this._links[i].width = this._$links[i].clientWidth;
        }
      }
    }, {
      key : "update",
      value : function() {
        var i = this._currentIndex;
        if (this._isHoverHeader) {
          i = this._hoverIndex;
        }
        if (this._links[i]) {
          this.props.linePosition += .2 * (this._links[i].position.left - this.props.linePosition);
          this.props.lineScale += .2 * (this._links[i].width / 100 - this.props.lineScale);
          this.props.linePosition2 += .12 * (this._links[i].position.left - this.props.linePosition2);
          this.props.lineScale2 += .12 * (this._links[i].width / 100 - this.props.lineScale2);
        }
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          links : {
            type : "arr",
            value : i(42)
          },
          linePosition : {
            type : "f",
            value : 0
          },
          lineScale : {
            type : "f",
            value : 0
          },
          linePosition2 : {
            type : "f",
            value : 0
          },
          lineScale2 : {
            type : "f",
            value : 0
          },
          active : {
            type : "bool",
            value : true
          },
          pageComponentId : {
            type : "string",
            value : "",
            change : "onPageChange"
          }
        };
      }
    }, {
      key : "template",
      get : function() {
        return i(43);
      }
    }, {
      key : "events",
      get : function() {
        return {
          "pointerenter .js-link" : "_onLinkEnter",
          "pointerenter .js-content" : "_onPointerEnter",
          "pointerleave .js-content" : "_onPointerLeave"
        };
      }
    }]), Agent;
  }(m.Component);
  (0, m.register)("app-header", artistTrack, "header");
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array} */
  mixin.exports = [{
    title : "Home",
    name : "home"
  }, {
    title : "Food",
    name : "food"
  }, {
    title : "About",
    name : "about"
  }, {
    title : "Order",
    name : "order"
  }];
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<div class="c-header__outter {{active?\'is-active\':\'\'}}">\t<div class="c-header__inner">\t\t\t\t<div class="u-align-right u-fit-h o-wrapper--valign js-content ">\t\t\t\t\t\t<nav role="navigation" class="u-valign-middle u-inline-block u-align-center u-w2of4">\t\t\t\t<template is="light-core-template" repeat="{{link in links}}">\t\t\t\t\t<a  on-click="_onLinkDown" href="/{{link.name}}"  \t\t\t\t\t\tclass="js-link c-header__link  c-link--primary u-inline-block" title="{{link.title}}"\t\t\t\t\t\tdata-index="{{$index}}">\t\t\t\t\t\t{{link.title}}\t\t\t\t\t</a>\t\t\t\t</template>\t\t\t</nav>\t\t\t<div class="u-valign-middle u-inline-block u-w1of4 ">\t\t\t\t<a href="https://www.facebook.com/KOOX.LONDON/" class="c-link u-inline-block u-vacuum u-marg-r-sm " title="follow us on facebook">\t\t\t\t\t<svg class="u-inline-block c-icon--facebook"\t\t\t\t\t\t version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t\t\t\t\t\t viewBox="0 0 257.7 257.7" >\t\t\t\t\t\t<path d="M243.5,0H14.2C6.4,0,0,6.4,0,14.2v229.3c0,7.9,6.4,14.2,14.2,14.2h123.4v-99.8h-33.6V119h33.6V90.3 c0-33.3,20.3-51.4,50-51.4c14.2,0,26.5,1.1,30,1.5v34.8l-20.6,0c-16.1,0-19.3,7.7-19.3,18.9V119h38.5l-5,38.9h-33.5v99.8h65.7 c7.9,0,14.2-6.4,14.2-14.2V14.2C257.7,6.4,251.3,0,243.5,0z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t<a href="https://www.instagram.com/koox.london/" class="c-link u-inline-block u-vacuum u-marg-r-sm " title="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--instagram" \t\t\t\t\t\t version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \t\t\t\t\t\t x="0px" y="0px" viewBox="0 0 23.9 23.9"  >\t\t\t\t\t\t<path d="M11.9,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,11.9,2.2 \tM11.9,0C8.7,0,8.3,0,7,0.1C5.7,0.1,4.9,0.3,4.1,0.6C3.3,0.9,2.7,1.3,2,2C1.3,2.7,0.9,3.3,0.6,4.1C0.3,4.9,0.1,5.7,0.1,7 C0,8.3,0,8.7,0,11.9c0,3.2,0,3.6,0.1,4.9c0.1,1.3,0.3,2.1,0.6,2.9c0.3,0.8,0.7,1.5,1.4,2.1c0.7,0.7,1.3,1.1,2.1,1.4 c0.8,0.3,1.6,0.5,2.9,0.6c1.3,0.1,1.7,0.1,4.9,0.1s3.6,0,4.9-0.1c1.3-0.1,2.1-0.3,2.9-0.6c0.8-0.3,1.5-0.7,2.1-1.4 c0.7-0.7,1.1-1.3,1.4-2.1c0.3-0.8,0.5-1.6,0.6-2.9c0.1-1.3,0.1-1.7,0.1-4.9s0-3.6-0.1-4.9c-0.1-1.3-0.3-2.1-0.6-2.9 c-0.3-0.8-0.7-1.5-1.4-2.1c-0.7-0.7-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.9-0.6C15.6,0,15.2,0,11.9,0L11.9,0z"/>\t\t\t\t\t\t<path d="M11.9,5.8c-3.4,0-6.1,2.7-6.1,6.1s2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1S15.3,5.8,11.9,5.8z M11.9,15.9c-2.2,0-4-1.8-4-4 s1.8-4,4-4c2.2,0,4,1.8,4,4S14.1,15.9,11.9,15.9z"/>\t\t\t\t\t\t<circle cx="18.3" cy="5.6" r="1.4"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t<a href="https://twitter.com/koox_london" class="c-link u-inline-block u-vacuum " title="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--twitter"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\t\t\t\t\t\t<path class="cls-1" d="M13.32,34.63c13.59,0,21-11.26,21-21,0-.32,0-.64,0-1A15,15,0,0,0,38,8.83,14.74,14.74,0,0,1,33.76,10,7.41,7.41,0,0,0,37,5.91,14.8,14.8,0,0,1,32.32,7.7a7.39,7.39,0,0,0-12.59,6.74A21,21,0,0,1,4.51,6.72a7.39,7.39,0,0,0,2.29,9.86,7.33,7.33,0,0,1-3.35-.92s0,.06,0,.09A7.39,7.39,0,0,0,9.37,23,7.37,7.37,0,0,1,6,23.12a7.39,7.39,0,0,0,6.9,5.13,14.82,14.82,0,0,1-9.17,3.16A15,15,0,0,1,2,31.31a20.91,20.91,0,0,0,11.32,3.32"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t\t\t\t</div>\t\t</div>\t\t<div class="c-header__line-wrapper {{active?\'is-active\':\'\'}}">\t\t\t<div class="">\t\t\t\t<div class="c-header__line" style="transform: translateX({{linePosition}}px) scaleX({{lineScale}}) translateZ(0)"></div>\t\t\t\t<div class="c-header__line" style="transform: translateX({{linePosition2}}px) scaleX({{lineScale2}}) translateZ(0)"></div>\t\t\t</div>\t\t</div>\t\t\t</div></div>';
}, function(canCreateDiscussions, isSlidingUp, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var component = __webpack_require__(0);
  var _prepareStyleProperties = __webpack_require__(5);
  var _prepareStyleProperties2 = _interopRequireDefault(_prepareStyleProperties);
  var exports = __webpack_require__(3);
  var _normalizeDataUri = __webpack_require__(45);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var _UiIcon = __webpack_require__(46);
  var _UiIcon2 = _interopRequireDefault(_UiIcon);
  var artistTrack = function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "created",
      value : function() {
        /** @type {number} */
        this._scroll = 0;
        /** @type {!Array} */
        this._clearColor = [238 / 255, 238 / 255, 238 / 255];
        /** @type {!Array} */
        this._currClearColor = [238 / 255, 238 / 255, 238 / 255];
        /** @type {number} */
        this._frameSize = 90;
      }
    }, {
      key : "_onScroll",
      value : function(name) {
      }
    }, {
      key : "_onClearColorChange",
      value : function(name, index, dt) {
        /** @type {string} */
        this._clearColor[0] = name;
        this._clearColor[1] = index;
        this._clearColor[2] = dt;
      }
    }, {
      key : "_onShowFrame",
      value : function() {
        /** @type {number} */
        this._frameSize = 90;
        /** @type {boolean} */
        this.props.isFrameActive = true;
      }
    }, {
      key : "_onHideFrame",
      value : function() {
        /** @type {number} */
        this._frameSize = 30;
        /** @type {boolean} */
        this.props.isFrameActive = false;
      }
    }, {
      key : "ready",
      value : function() {
        var that = this;
        this.$scene = this.querySelector(".js-scene");
        component.EventDispatcher.on("background:scroll", this._onScroll, this);
        component.EventDispatcher.on("background:clearcolor", this._onClearColorChange, this);
        component.EventDispatcher.on("showframe", this._onShowFrame, this);
        component.EventDispatcher.on("hideframe", this._onHideFrame, this);
        this._renderer = new exports.Renderer({
          alpha : true
        });
        this._scene = new exports.Container;
        this._maskScene = new exports.Container;
        this._camera = new exports.Camera({
          fov : 45,
          aspect : window.innerWidth / window.innerHeight,
          near : 1,
          far : 1e4,
          left : -window.innerWidth / 2,
          right : window.innerWidth / 2,
          top : window.innerHeight / 2,
          bottom : -window.innerHeight / 2,
          type : "ortho",
          orbitControl : false
        });
        this._camera.lookAt = exports.vec3.create();
        exports.vec3.set(this._camera.lookAt, 0, 0, 0);
        /** @type {number} */
        this._camera.position[2] = 1e3;
        this._renderer.setPixelRatio(1);
        this.$scene.appendChild(this._renderer.canvas);
        var bg = new exports.Mesh;
        bg.geometry = new exports.PlaneGeometryBuffer(this._renderer.gl, {
          width : 1440,
          height : 900
        });
        var i = exports.Texture.fromUrl(this._renderer.gl, "./assets/images/pattern-256x256.png");
        bg.material = new exports.Material(this._renderer.gl, {
          uniforms : {
            margin : 45,
            aColor : this._currClearColor,
            tInput : i,
            resolution : [1 * window.innerWidth, 1 * window.innerHeight]
          },
          vertexShader : _normalizeDataUri2.default,
          fragmentShader : _UiIcon2.default,
          blend : true,
          defines : {
            USE_MASK_TOP : true,
            USE_MASK_BOTTOM : true
          },
          depthTest : false
        });
        /** @type {number} */
        bg.position[2] = -305;
        this._scene.add(bg);
        this.bg = bg;
        setTimeout(function() {
          /** @type {boolean} */
          that._prevent = true;
        }, 2e3);
      }
    }, {
      key : "detached",
      value : function() {
      }
    }, {
      key : "resize",
      value : function() {
        /** @type {number} */
        this.props.width = window.innerWidth;
        /** @type {number} */
        this.props.height = window.innerHeight;
        /** @type {number} */
        this._parentWidth = this.props.width;
        /** @type {number} */
        this._parentHeight = this.props.height;
        this._computedSize = (0, _prepareStyleProperties2.default)(1440, 900, this._parentWidth, this._parentHeight, false);
        /** @type {number} */
        this._scene.scale[0] = this._scene.scale[1] = this._scene.scale[2] = this._computedSize.height / 900;
        this._renderer.resize(window.innerWidth, window.innerHeight);
        /** @type {number} */
        this._camera.position[2] = 450 / Math.tan(45 * Math.PI / 180);
        /** @type {number} */
        this._camera.left = -window.innerWidth / 2;
        /** @type {number} */
        this._camera.right = window.innerWidth / 2;
        /** @type {number} */
        this._camera.top = window.innerHeight / 2;
        /** @type {number} */
        this._camera.bottom = -window.innerHeight / 2;
        this._camera.updateProjectionMatrix();
      }
    }, {
      key : "update",
      value : function() {
        if (!this._prevent) {
          this.bg.position[1] += .1 * (this._scroll - this.bg.position[1]);
          this.bg.quaternion = this._camera._quaternion;
          this._currClearColor[0] += .1 * (this._clearColor[0] - this._currClearColor[0]);
          this._currClearColor[1] += .1 * (this._clearColor[1] - this._currClearColor[1]);
          this._currClearColor[2] += .1 * (this._clearColor[2] - this._currClearColor[2]);
          this._renderer.clearColor(1, 1, 1, 0);
          this._renderer.clear();
          this._renderer.render(this._scene, this._camera);
        }
      }
    }, {
      key : "template",
      get : function() {
        return __webpack_require__(47);
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          height : {
            type : "int",
            value : window.innerHeight
          },
          width : {
            type : "int",
            value : window.innerWidth
          },
          position : {
            type : "arr",
            value : [0, 0]
          },
          scale : {
            type : "arr",
            value : [0, 0]
          },
          isFrameActive : {
            type : "bool",
            value : true
          }
        };
      }
    }]), Agent;
  }(component.Component);
  (0, component.register)("app-background", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "precision highp float;\n\n\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvColor = color;\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "precision highp float;\n\nuniform sampler2D tInput;\n\nvarying vec2 vUv;\n\nuniform vec2 resolution;\nuniform vec3 aColor;\nuniform float margin;\n\n\nvoid main() {\n\n\n\tgl_FragColor = mix( vec4(1.), vec4(aColor, 1.0), (texture2D(tInput, vUv).r) );\n\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<div class="u-fixed u-pos-tl u-viewport-fit js-scene">\t</div><div class="u-fixed u-pos-tl u-viewport-fit u-pointer-none c-frame {{isFrameActive ? \'is-active\' : \'\'}}">    <div class="u-absolute c-frame__border c-frame__border--top"></div>    <div class="u-absolute c-frame__border c-frame__border--right"></div>    <div class="u-absolute c-frame__border c-frame__border--bottom"></div>    <div class="u-absolute c-frame__border c-frame__border--left"></div></div>';
}, function(canCreateDiscussions, isSlidingUp, callback) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var exports = callback(0);
  var View = _interopRequireDefault(exports);
  var value = callback(2);
  var _normalizeDataUri = (_interopRequireDefault(value), callback(1));
  var _UiIcon = (_interopRequireDefault(_normalizeDataUri), callback(6));
  var artistTrack = (_interopRequireDefault(_UiIcon), function(_EventEmitter) {
    /**
     * @return {?}
     */
    function Agent() {
      return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
    }
    return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
      key : "_showVideo",
      value : function() {
        /** @type {boolean} */
        this.props.showVideo = true;
      }
    }, {
      key : "_hideVideo",
      value : function() {
        /** @type {boolean} */
        this.props.showVideo = false;
      }
    }, {
      key : "created",
      value : function() {
        /** @type {null} */
        this._oldLocation = null;
        /** @type {number} */
        this._scrollTop = 0;
        this._onScroll = this._onScroll.bind(this);
        /** @type {number} */
        this._formScrollTop = 0;
      }
    }, {
      key : "attached",
      value : function() {
        document.addEventListener("scroll", this._onScroll, false);
        this._onScroll();
        if (View.default.touch) {
          document.getElementsByTagName("html")[0].classList.add("has-touch");
        } else {
          document.getElementsByTagName("html")[0].classList.add("has-not-touch");
        }
      }
    }, {
      key : "_onScroll",
      value : function() {
        if (this._lastScroll > this.props.scrollTop) {
          /** @type {number} */
          this.props.direction = -1;
        }
        if (this._lastScroll < this.props.scrollTop) {
          /** @type {number} */
          this.props.direction = 1;
        }
        this._lastScroll = this.props.scrollTop;
        /** @type {number} */
        this._scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      }
    }, {
      key : "ready",
      value : function() {
        this.props.globalDataUrl = this.props.wsRoot.replace("{lang}", this.props.lang) + "global/" + this.props.wsExtension;
        this.onKeyDown = this.onKeyDown.bind(this);
        document.addEventListener("keydown", this.onKeyDown, false);
        exports.EventDispatcher.on("showframe", this._showFrame, this);
        exports.EventDispatcher.on("hideframe", this._hideFrame, this);
        exports.EventDispatcher.on("video:show", this._showVideo, this);
        exports.EventDispatcher.on("video:hide", this._hideVideo, this);
        /** @type {boolean} */
        this.props.isNavActive = true;
      }
    }, {
      key : "_onContentChange",
      value : function(name) {
        /** @type {string} */
        this.querySelector(".js-fake-scroll").style.height = name + "px";
      }
    }, {
      key : "_showFrame",
      value : function() {
        /** @type {boolean} */
        this.props.isNavActive = true;
      }
    }, {
      key : "_hideFrame",
      value : function() {
        /** @type {boolean} */
        this.props.isNavActive = false;
      }
    }, {
      key : "onKeyDown",
      value : function(name) {
        if (72 == name.which) {
          /** @type {boolean} */
          this.props.showGuides = !this.props.showGuides;
        }
      }
    }, {
      key : "update",
      value : function() {
        this.props.scrollTop += (this._scrollTop - this.props.scrollTop) * (this.props.isMobile ? 1 : .1);
      }
    }, {
      key : "resize",
      value : function() {
        /** @type {number} */
        this.props.winHeight = window.innerHeight;
        /** @type {number} */
        this.props.winWidth = window.innerWidth;
        /** @type {boolean} */
        this.props.isMobile = window.innerWidth < 768;
        /** @type {boolean} */
        this.props.isLarge = window.innerWidth > 700 && (window.innerWidth >= 1920 || window.devicePixelRatio > 1);
        /** @type {number} */
        this.props.width = window.innerWidth;
        /** @type {number} */
        this.props.height = window.innerHeight;
      }
    }, {
      key : "onRouteChange",
      value : function(name, parent) {
        if (void 0 === name.params.page) {
          /** @type {string} */
          name.params.page = "home";
          /** @type {string} */
          name.completePath = "/home/";
          /** @type {string} */
          name.path = "/home/";
        }
        if (name.path == parent.path) {
          return this.props.showMenu = false, void(this.props.showCredits = false);
        }
        this._loadPage(name);
      }
    }, {
      key : "_loadPage",
      value : function(name) {
        var that = this;
        /** @type {string} */
        this._oldLocation = name;
        /** @type {boolean} */
        this.props.isPageLoading = true;
        this.props.overlayClass = "is-active has-no-transition" == this.props.overlayClass ? this.props.overlayClass : "is-prev has-no-transition";
        if ("undefined" != typeof ga) {
          ga("set", "page", name.path);
          ga("send", "pageview");
        }
        if (this.props.isMobile) {
          /** @type {boolean} */
          this.props.showMenu = false;
          /** @type {boolean} */
          this.props.showCredits = false;
        }
        setTimeout(function() {
          /** @type {string} */
          that.props.overlayClass = "is-active";
          setTimeout(function() {
            /** @type {boolean} */
            that.props.showMenu = false;
            /** @type {boolean} */
            that.props.showCredits = false;
            window.scrollTo(0, 0);
            /** @type {number} */
            that._scrollTop = 0;
            /** @type {number} */
            that.props.scrollTop = 0;
            /** @type {null} */
            that.props.pageComponentId = null;
            /** @type {null} */
            that.props.pageDataUrl = null;
            requestAnimationFrame(function() {
              that.props.pageDataUrl = that.props.wsRoot + name.path.replace(/^\//, "") + that.props.wsExtension;
              /** @type {boolean} */
              that._hasLoadedOnce = true;
            });
          }, that._hasLoadedOnce ? 800 : 0);
        }, this._hasLoadedOnce ? 100 : 0);
      }
    }, {
      key : "_onPageDataLoaded",
      value : function(name) {
        if ("page-home" == name.body["page-template"] || "page-404" == name.body["page-template"]) {
          this.props.pageContent = name.body.content;
          this.props.pageComponentId = name.body["page-template"];
        } else {
          /**
           * @param {!Object} a
           * @return {undefined}
           */
          var run = function(a) {
            a.default();
            this.props.pageContent = name.body.content;
            this.props.pageComponentId = name.body["page-template"];
          };
          run = run.bind(this);
          if ("page-about" == name.body["page-template"]) {
            (new Promise(function(ref) {
              callback.e(1).then(function(canCreateDiscussions) {
                ref(callback(66));
              }.bind(null, callback)).catch(callback.oe);
            })).then(run);
          }
          if ("page-order" == name.body["page-template"]) {
            (new Promise(function(ref) {
              callback.e(2).then(function(canCreateDiscussions) {
                ref(callback(67));
              }.bind(null, callback)).catch(callback.oe);
            })).then(run);
          }
          if ("page-food" == name.body["page-template"]) {
            (new Promise(function(ref) {
              callback.e(0).then(function(canCreateDiscussions) {
                ref(callback(68));
              }.bind(null, callback)).catch(callback.oe);
            })).then(run);
          }
          if ("page-legals" == name.body["page-template"]) {
            (new Promise(function(ref) {
              callback.e(3).then(function(canCreateDiscussions) {
                ref(callback(69));
              }.bind(null, callback)).catch(callback.oe);
            })).then(run);
          }
        }
      }
    }, {
      key : "_onPageReady",
      value : function() {
        var self = this;
        setTimeout(function() {
          /** @type {boolean} */
          self.props.isReady = true;
          /** @type {string} */
          self.props.overlayClass = "is-next";
        }, 300);
      }
    }, {
      key : "_onDataError",
      value : function() {
        console.warn("Page Data Error: 404");
      }
    }, {
      key : "_onGlobalDataLoaded",
      value : function(name) {
        this.props.globalContent = name.body;
      }
    }, {
      key : "_onMenuDown",
      value : function() {
        /** @type {boolean} */
        this.props.showMenu = !this.props.showMenu;
        /** @type {boolean} */
        this.props.showCredits = false;
      }
    }, {
      key : "_onCreditsDown",
      value : function() {
        /** @type {boolean} */
        this.props.showCredits = !this.props.showCredits;
        /** @type {boolean} */
        this.props.showMenu = false;
      }
    }, {
      key : "events",
      get : function() {
        return {};
      }
    }, {
      key : "template",
      get : function() {
        return callback(49);
      }
    }, {
      key : "defaultProps",
      get : function() {
        return {
          overlayClass : "is-active has-no-transition",
          winHeight : {
            type : "int",
            value : 0
          },
          winWidth : {
            type : "int",
            value : 0
          },
          wsRoot : "",
          cdnRoot : "",
          lang : {
            type : "string",
            value : "en"
          },
          pageComponentId : null,
          pageDataUrl : null,
          pageContent : {
            type : "json",
            value : null
          },
          globalDataUrl : null,
          globalContent : {
            type : "json",
            value : null
          },
          baseUrl : "",
          routeOptions : {
            type : "json",
            value : {
              hashbang : false,
              click : true
            }
          },
          routes : {
            "/" : {},
            "/404" : {},
            "/:page/*" : {},
            "/:page" : {}
          },
          wsExtension : "",
          isNavActive : {
            type : "bool",
            value : true
          },
          scrollTop : {
            type : "f",
            value : 0
          },
          showMenu : {
            type : "bool",
            value : false
          },
          showCredits : {
            type : "bool",
            value : false
          },
          showVideo : {
            type : "bool",
            value : false
          },
          isReady : {
            type : "bool",
            value : false
          }
        };
      }
    }]), Agent;
  }(exports.Component));
  (0, exports.register)("x-application", artistTrack);
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<core-route aria-hidden="true" routes="{{routes}}" base="{{baseUrl}}" options="{{routeOptions}}" on-route-change="onRouteChange" class="u-hide"></core-route><core-ajax aria-hidden="true"src="{{globalDataUrl}}" on-success="_onGlobalDataLoaded" on-error="_onDataError"></core-ajax><template is="light-core-template" if="{{pageDataUrl !== null}}" remove-nodes>\t<core-ajax aria-hidden="true" src="{{pageDataUrl}}" on-success="_onPageDataLoaded" on-error="_onDataError"></core-ajax></template>\x3c!-- LOADER --\x3e<div    role="presentation" \t\tclass="u-pointer-none u-block u-fixed u-pos-tl u-viewport-fit {{overlayClass}}" \t\t$style="z-index:99997; height:{{winHeight}}px">\t<div class="u-overflow-h c-loader__white-bg u-absolute u-pos-tr u-bg--white u-fit"\t\t style="background: #fff">\t\t<div class="c-loader__white-bg__inner u-relative u-fit o-wrapper--valign">\t\t\t<svg style="fill:#225733;" width="160" height="54" enable-background="new 0 0 366.9 127.6" version="1.1" viewBox="0 0 373.00001 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(6.1 .4)" points="31.6 44.6 25.3 51 38 63.8 25.3 76.6 31.6 82.9 47.4 67 47.4 60.6"/><polygon transform="translate(6.1 .4)" points="0 63.8 63.2 0 75.9 0 12.6 63.8 75.9 127.6 63.2 127.6"/><path d="m221.2 0.4h-6.3l-38 38.3-38-38.3h-6.3l-60.1 60.6v6.4l60.1 60.6h6.3l38-38.3 38 38.3h6.3l60.1-60.6v-6.4zm-85.5 118-53.7-54.2 53.8-54.2 34.9 35.1-15.9 15.9v6.4l15.8 16zm41.2-66.9 12.7 12.7-12.7 12.8-12.6-12.8zm41.1 66.9-34.8-35 15.8-16v-6.4l-15.9-15.9 34.9-35.1 53.8 54.2z"/><path d="m284.4 128 60.1-60.6v-6.4l-60.1-60.6h-12.7l63.4 63.8-63.3 63.8z"/><path d="m373 128-63.3-63.8 63.3-63.8h-12.6l-60.1 60.6v6.4l60.1 60.6z"/><rect width="9.5" height="127.6"/></svg>\t\t</div>\t</div></div><header is="app-header" role="header" active="{{isNavActive && isReady}}" \t\t\tpage-component-id="{{pageComponentId}}"\t\tstyle="z-index: 99999"\t\tclass="u-block u-force-3d u-fixed u-pos-tl u-fit-w c-header u-fix-repaint\t\t\t | u-hide@sm"></header>\x3c!-- KOOX Logo --\x3e<a href="/" class="u-block c-link u-fixed c-logo u-pad-a-md {{isNavActive && isReady ? \'is-active\' : \'\'}}"   style="z-index:99999;font-size:0;">   Koox   <svg class="u-inline-block u-valign-middle u-fit-w" style="fill:#fff;" enable-background="new 0 0 366.9 127.6" version="1.1" viewBox="0 0 373.00001 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(6.1 .4)" points="31.6 44.6 25.3 51 38 63.8 25.3 76.6 31.6 82.9 47.4 67 47.4 60.6"/><polygon transform="translate(6.1 .4)" points="0 63.8 63.2 0 75.9 0 12.6 63.8 75.9 127.6 63.2 127.6"/><path d="m221.2 0.4h-6.3l-38 38.3-38-38.3h-6.3l-60.1 60.6v6.4l60.1 60.6h6.3l38-38.3 38 38.3h6.3l60.1-60.6v-6.4zm-85.5 118-53.7-54.2 53.8-54.2 34.9 35.1-15.9 15.9v6.4l15.8 16zm41.2-66.9 12.7 12.7-12.7 12.8-12.6-12.8zm41.1 66.9-34.8-35 15.8-16v-6.4l-15.9-15.9 34.9-35.1 53.8 54.2z"/><path d="m284.4 128 60.1-60.6v-6.4l-60.1-60.6h-12.7l63.4 63.8-63.3 63.8z"/><path d="m373 128-63.3-63.8 63.3-63.8h-12.6l-60.1 60.6v6.4l60.1 60.6z"/><rect width="9.5" height="127.6"/></svg></a>\t\x3c!-- MENU BUTTON --\x3e<button type="button" aria-controls="menu" aria-expanded="{{showMenu}}"\t\taria-label="{{showMenu?\'Open menu\':\'Close menu\'}}"\t\tclass="c-btn c-menu-btn  {{ isNavActive && isReady ? \'is-active\' : \'\'}} {{showMenu?\'is-closed\':\'\'}}" on-click="_onMenuDown"        style="z-index:99999">    <span class="c-menu-btn__line"></span>    <span class="c-menu-btn__line"></span>    <span class="c-menu-btn__line"></span></button><div class="js-fake-scroll"></div>\x3c!-- PAGE WRAPPER --\x3e<main id="main" role="main" class="u-fixed u-pos-tl">\t<template is="light-core-template" if="{{pageComponentId !== null}}" remove-nodes="true">\t        <div is="{{pageComponentId}}" content="{{pageContent}}" global-content="{{globalContent}}"\t\t\t  on-ready="_onPageReady" on-content-change="_onContentChange" \t\t\t  show-frame="{{isNavActive && isReady}}" scroll="{{scrollTop}}"\t\t\t  cdn-root="{{cdnRoot}}"></div>\t</template></main>\x3c!-- MENU --\x3e<div id="menu" aria-hidden="{{!showMenu}}" \t style="z-index:99998"\t\tclass="u-align-center c-menu u-pos-tl u-fixed u-fit {{showMenu ? \'is-active\' : \'is-next\'}}">\t<div class="c-menu__inner u-fit o-wrapper--valign u-align-center u-bg--light ">\t\t<nav class="u-align-center u-inline-block u-valign-middle | u-hide@sm">\t\t\t<template is="light-core-template" repeat="{{cat in globalContent.menu}}">\t\t\t\t<a href="/food#{{cat.slug}}" tabindex="{{showMenu?1:-1}}"\t\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?$index+1:globalContent.menu.length-1-$index}}">\t\t\t\t\t<span class="u-valign-top">{{cat.name}}</span><sup class="u-valign-top">{{cat.products<10?\'0\'+cat.products:cat.products}}</sup>\t\t\t\t</a><br/>\t\t\t</template>\t\t</nav>\t\t<nav    class="u-hide u-align-center u-inline-block u-valign-middle | u-inline-block@sm"\t\t\t\tstyle="margin-bottom:60px;margin-top:60px;">\t\t\t<a href="/about" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?1:globalContent.menu.length-1+5}}\t\t\t\t\t| u-marg-b-vh1of36@sm">\t\t\t\t<span class="u-valign-top">about</span>\t\t\t</a><br/>\t\t\t<a href="/food" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?2:globalContent.menu.length-1+4}}\t\t\t\t\t| u-marg-b-vh1of36@sm">\t\t\t\t<span class="u-valign-top">food</span>\t\t\t</a> <br/>\t\t\t<template is="light-core-template" repeat="{{cat in globalContent.menu}}">\t\t\t\t<a href="/food#{{cat.slug}}" tabindex="{{showMenu?1:-1}}"\t\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--md c-anim--slide-y c-anim--{{showMenu?$index+3:globalContent.menu.length-1-$index+3}}\t\t\t\t\t\t| u-marg-b-xs">\t\t\t\t\t<span class="u-valign-top">{{cat.name}}</span>\t\t\t\t</a> <br/>\t\t\t</template>\t\t\t<a href="/order" tabindex="{{showMenu?1:-1}}"\t\t\t\tclass="u-color--brand c-btn u-inline-block c-link--large c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+1:3}}\t\t\t\t\t| u-marg-b-vh1of18@sm">\t\t\t\t<span class="u-valign-top">order</span>\t\t\t</a>\t\t\t<div class="u-block u-valign-middle u-marg-b-sm c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+2:2}}">\t\t\t\t<a href="https://www.facebook.com/KOOX.LONDON/" class="c-link u-inline-block u-vacuum u-marg-r-sm" aria-label="follow us on facebook">\t\t\t\t\t<svg class="u-inline-block c-icon--facebook"\t\t\t\t\t\t\tversion="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t\t\t\t\t\t\tviewBox="0 0 257.7 257.7" >\t\t\t\t\t\t<path d="M243.5,0H14.2C6.4,0,0,6.4,0,14.2v229.3c0,7.9,6.4,14.2,14.2,14.2h123.4v-99.8h-33.6V119h33.6V90.3 c0-33.3,20.3-51.4,50-51.4c14.2,0,26.5,1.1,30,1.5v34.8l-20.6,0c-16.1,0-19.3,7.7-19.3,18.9V119h38.5l-5,38.9h-33.5v99.8h65.7 c7.9,0,14.2-6.4,14.2-14.2V14.2C257.7,6.4,251.3,0,243.5,0z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t<a href="https://www.instagram.com/koox.london/" class="c-link u-inline-block u-vacuum u-marg-r-sm" aria-label="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--instagram" \t\t\t\t\t\t\tversion="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \t\t\t\t\t\t\tx="0px" y="0px" viewBox="0 0 23.9 23.9"  >\t\t\t\t\t\t<path d="M11.9,2.2c3.2,0,3.6,0,4.8,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.8c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.8,0.1s-3.6,0-4.8-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.8s0-3.6,0.1-4.8 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,11.9,2.2 \tM11.9,0C8.7,0,8.3,0,7,0.1C5.7,0.1,4.9,0.3,4.1,0.6C3.3,0.9,2.7,1.3,2,2C1.3,2.7,0.9,3.3,0.6,4.1C0.3,4.9,0.1,5.7,0.1,7 C0,8.3,0,8.7,0,11.9c0,3.2,0,3.6,0.1,4.9c0.1,1.3,0.3,2.1,0.6,2.9c0.3,0.8,0.7,1.5,1.4,2.1c0.7,0.7,1.3,1.1,2.1,1.4 c0.8,0.3,1.6,0.5,2.9,0.6c1.3,0.1,1.7,0.1,4.9,0.1s3.6,0,4.9-0.1c1.3-0.1,2.1-0.3,2.9-0.6c0.8-0.3,1.5-0.7,2.1-1.4 c0.7-0.7,1.1-1.3,1.4-2.1c0.3-0.8,0.5-1.6,0.6-2.9c0.1-1.3,0.1-1.7,0.1-4.9s0-3.6-0.1-4.9c-0.1-1.3-0.3-2.1-0.6-2.9 c-0.3-0.8-0.7-1.5-1.4-2.1c-0.7-0.7-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.9-0.6C15.6,0,15.2,0,11.9,0L11.9,0z"/>\t\t\t\t\t\t<path d="M11.9,5.8c-3.4,0-6.1,2.7-6.1,6.1s2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1S15.3,5.8,11.9,5.8z M11.9,15.9c-2.2,0-4-1.8-4-4 s1.8-4,4-4c2.2,0,4,1.8,4,4S14.1,15.9,11.9,15.9z"/>\t\t\t\t\t\t<circle cx="18.3" cy="5.6" r="1.4"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t\t<a href="https://twitter.com/koox_london" class="c-link u-inline-block u-vacuum" aria-label="follow us on instragram">\t\t\t\t\t<svg class="u-inline-block c-icon--twitter"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\t\t\t\t\t\t<path class="cls-1" d="M13.32,34.63c13.59,0,21-11.26,21-21,0-.32,0-.64,0-1A15,15,0,0,0,38,8.83,14.74,14.74,0,0,1,33.76,10,7.41,7.41,0,0,0,37,5.91,14.8,14.8,0,0,1,32.32,7.7a7.39,7.39,0,0,0-12.59,6.74A21,21,0,0,1,4.51,6.72a7.39,7.39,0,0,0,2.29,9.86,7.33,7.33,0,0,1-3.35-.92s0,.06,0,.09A7.39,7.39,0,0,0,9.37,23,7.37,7.37,0,0,1,6,23.12a7.39,7.39,0,0,0,6.9,5.13,14.82,14.82,0,0,1-9.17,3.16A15,15,0,0,1,2,31.31a20.91,20.91,0,0,0,11.32,3.32"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</div>\t\t\t<div class="c-text--small c-anim--slide-y c-anim--{{showMenu?globalContent.menu.length+3+2:1}}">\t\t\t\t<div class="u-marg-b-sm">\t\t\t\t\t<button on-click="_onCreditsDown" tabindex="{{showMenu?1:-1}}"\t\t\t\t\t\t\tclass="u-color--grey u-inline-block c-btn u-underline" aria-label="Credits">Credits</button>\t\t\t\t\t&nbsp;\u2022&nbsp;\t\t\t\t\t<a href="/about#contact" tabindex="{{showMenu?1:-1}}"\t\t\t\t\t   class="c-btn u-color--grey u-inline-block u-underline" aria-label="Contact">Contact</a>\t\t\t\t\t&nbsp;\u2022&nbsp;\t\t\t\t\t<a href="/legals" tabindex="{{showMenu?1:-1}}"\t\t\t\t\t   class="c-btn u-color--grey c-text--small u-inline-block u-underline" aria-label="legals">Legals</a>\t\t\t\t</div>\t\t\t\t<div class="u-inline-block">\t\t\t\t\t<span tabindex="{{showMenu?1:-1}}" class="u-color--grey u-inline-block">{{globalContent.footer.copyrights}}</span>\t\t\t\t</div>\t\t\t</div>\t\t\t</nav>\t</div></div>\x3c!-- CREDITS --\x3e<div aria-hidden="{{!showCredits}}" class="u-align-center c-menu u-pos-tl u-fixed u-fit {{showCredits ? \'is-active\' : \'is-next\'}}">\t<div class="c-menu__inner u-fit o-wrapper--valign u-align-center u-bg--light \t\t\t\tu-pad-x-vw1of12@sm">\t\t<div class="u-inline-block u-valign-middle">\t\t\t<h2 class="u-color--brand c-title-credits u-bold c-anim--slide-y c-anim--{{showCredits?1:7}}" style="margin-bottom:50px;font-size: 10vw;line-height: 1;">credits</h2>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?2:6}}" style="margin-bottom:20px;letter-spacing:0.1em;">Identity</h3>\t\t\t<p class="u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?3:5}}" style="margin-bottom:40px; color: #7c7c7c;">\t\t\t\t<a target="_blank"  tabindex="{{showCredits?1:-1}}" class="c-link--none u-color--grey" href="http://www.bluecheese.studio/">Blue Cheese studio</a> &amp; Nabil Duval\t\t\t</p>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?4:4}}" style="margin-bottom:20px;letter-spacing:0.1em;">Conception, Art direction &amp; Development</h3>\t\t\t<p class="u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?5:3}}" style="margin-bottom:40px; color: #7c7c7c;">\t\t\t\t<a target="_blank" tabindex="{{showCredits?1:-1}}" class="c-link--none u-color--grey" href="http://www.bluecheese.studio/">Blue Cheese studio</a> &amp; \t\t\t\t<a target="_blank" tabindex="{{showCredits?1:-1}}" class="c-link--none u-color--grey" href="https://twitter.com/@twodelab">Nicolas Riciotti</a>\t\t\t</p>\t\t\t<h3 class="u-color--brand c-text--large u-bold c-anim--slide-y c-anim--{{showCredits?6:2}}" style="margin-bottom:20px;letter-spacing:0.1em;">illustrations</h3>\t\t\t<div>\t\t\t\t<span class="c-link--none u-color--grey c-text--regular u-inline-block c-anim--slide-y c-anim--{{showCredits?7:1}}"\t\t\t\t\t   style="color: #7c7c7c;">Jeanne Morel  &amp;</span>\t\t\t\t<a target="_blank" tabindex="{{showCredits?1:-1}}" href="https://www.behance.net/tristan-gion"\t\t\t\t\tclass="c-link--none u-inline-block u-color--grey c-text--regular c-anim--slide-y c-anim--{{showCredits?7:1}}"\t\t\t\t\tstyle="color: #7c7c7c;">Tristan Dion</a>\t\t\t</div>\t\t</div>\t</div>\t<button aria-hidden="{{!showCredits}}" rel="close" role="button" aria-label="close credits"\t\t\tclass="u-hide c-btn u-fixed c-losange c-product__close {{showCredits ? \'is-active\':\'\'}}\t\t\t\t  | u-inline-block@sm"                        on-click="_onCreditsDown">        <div class="u-inline-block u-fit u-relative o-wrapper--valign">            <div class="c-losange__shape"></div>            <div class="o-wrapper--valign u-absolute u-fit u-pos-tl">                            <span class="c-losange__cross u-inline-block u-valign-middle"></span>                </div>        </div>\t</button>\t</div>\x3c!--<div class="u-align-center c-menu u-pos-tl u-fixed u-fit {{showVideo ? \'is-active\' : \'is-next\'}}"\tstyle="z-index:9999">\t<div class="c-menu__inner u-overflow-h u-fit o-wrapper--valign u-align-center u-bg--light ">\t\t<div class="u-absolute u-fit u-pos-tl" on-click="_hideVideo"></div>\t\t<button aria-label="close video" on-click="_hideVideo" \t\t\tclass="{{showVideo?\'u-pointer-auto\':\'u-pointer-none\'}} c-btn u-absolute c-close-btn u-offset-l-vw1of18 | u-hide@sm"\t\t\tstyle="top: 50%; padding-right: 0; transform: translateY(-50%)">\t\t\t<span class="c-close-btn__line"></span>\t\t\t<span class="c-close-btn__line"></span>\t\t</button>\t\t<button aria-hidden="true" on-click="_hideVideo" class="u-offset-r-vw3of36 u-offset-t-sm u-hide u-block@sm {{{{showVideo?\'u-pointer-auto\':\'u-pointer-none\'}} c-btn u-absolute c-close-btn"\t\t\tstyle="padding-right: 0; ">\t\t\t<span class="c-close-btn__line"></span>\t\t\t<span class="c-close-btn__line"></span>\t\t</button>\t\t \t\t\t<core-video on-start="_onVideoStart" on-ended="_onVideoEnd" active="{{showVideo}}" autoplay="false" preload="false" controls="true" loop="false"\t\t\tsrc="./assets/videos/site.mp4"\t\t\tposter="./assets/poster.jpg"\t\t\tclass="u-relative u-vw14of18 u-inline-block u-valign-middle u-bg--black | u-fit-w@sm" >\t\t</core-video> \t</div></div>--\x3e<footer style="z-index:999"\t\tclass="u-block u-force-3d  u-fixed  u-pos-bl u-fit-w c-footer u-vacuum\t\t\t\t| {{isNavActive && isReady ? \'is-active\':\'\'}}\t\t\t   | u-hide@sm">\t<div class="c-footer__outter">\t\t<div class="c-footer__inner">\t\t\t\t<div class="u-w1of2 u-inline-block">\t\t\t\t<span   class="u-color--grey  c-text--small u-inline-block">{{globalContent.footer.copyrights}}&nbsp;\u2022&nbsp;</span>\t\t\t\t<button on-click="_onCreditsDown" class="c-btn u-color--grey c-link--none  c-text--small u-inline-block" title="credits">Credits</button>\t\t\t\t<a href="/legals" class="u-color--grey c-link--none c-text--small">&nbsp;\u2022&nbsp;Legals</a>\t\t\t\t</div>\t\t\t<div class="u-w1of2 u-inline-block u-align-right">\t\t\t\t<a href="/about#contact" class="u-color--grey c-link--none  c-text--small u-inline-block" title="Contact">Contact</a>\t\t\t</div>\t\t\t</div>\t\t</div>\t\t\t\t\t\t</footer>\x3c!-- <div class="u-fixed u-viewport-fit u-pos-tl u-pointer-none" style="z-index: 2000">\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 0px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 45px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 90px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 135px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; left: 180px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 180px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 135px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 90px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 45px; width: 1px; background: #00ffff;"></div>\t<div class="u-block u-absolute u-fit-h" style="top: 0; right: 0;    width: 1px; background: #00ffff;"></div></div>  --\x3e';
}, function(module, canCreateDiscussions, require) {
  var content = require(51);
  if ("string" == typeof content) {
    /** @type {!Array} */
    content = [[module.i, content, ""]];
  }
  var ext = {
    hmr : true
  };
  ext.transform = void 0;
  ext.insertInto = void 0;
  require(4)(content, ext);
  if (content.locals) {
    module.exports = content.locals;
  }
}, function(canCreateDiscussions, isSlidingUp) {
}, function(mixin, canCreateDiscussions) {
  /**
   * @param {string} url
   * @return {?}
   */
  mixin.exports = function(url) {
    /** @type {(Location|boolean)} */
    var parsedPath = "undefined" != typeof window && window.location;
    if (!parsedPath) {
      throw new Error("fixUrls requires window.location");
    }
    if (!url || "string" != typeof url) {
      return url;
    }
    /** @type {string} */
    var message = parsedPath.protocol + "//" + parsedPath.host;
    /** @type {string} */
    var content = message + parsedPath.pathname.replace(/\/[^\/]*$/, "/");
    return url.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(deferredImports, commentToCheck) {
      var o = commentToCheck.trim().replace(/^"(.*)"$/, function(canCreateDiscussions, isSlidingUp) {
        return isSlidingUp;
      }).replace(/^'(.*)'$/, function(canCreateDiscussions, isSlidingUp) {
        return isSlidingUp;
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)) {
        return deferredImports;
      }
      var target;
      return target = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? message + o : content + o.replace(/^\.\//, ""), "url(" + JSON.stringify(target) + ")";
    });
  };
}, function(module, canCreateDiscussions, require) {
  var content = require(54);
  if ("string" == typeof content) {
    /** @type {!Array} */
    content = [[module.i, content, ""]];
  }
  var ext = {
    hmr : true
  };
  ext.transform = void 0;
  ext.insertInto = void 0;
  require(4)(content, ext);
  if (content.locals) {
    module.exports = content.locals;
  }
}, function(canCreateDiscussions, isSlidingUp) {
}, function(module, canCreateDiscussions, require) {
  var content = require(56);
  if ("string" == typeof content) {
    /** @type {!Array} */
    content = [[module.i, content, ""]];
  }
  var ext = {
    hmr : true
  };
  ext.transform = void 0;
  ext.insertInto = void 0;
  require(4)(content, ext);
  if (content.locals) {
    module.exports = content.locals;
  }
}, function(canCreateDiscussions, isSlidingUp) {
}, function(canCreateDiscussions, t, __webpack_require__) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default : obj
    };
  }
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var ns = __webpack_require__(0);
  var _normalizeDataUri = __webpack_require__(5);
  var _normalizeDataUri2 = _interopRequireDefault(_normalizeDataUri);
  var _prepareStyleProperties = __webpack_require__(2);
  var _UiIcon = (_interopRequireDefault(_prepareStyleProperties), __webpack_require__(9));
  var _UiIcon2 = _interopRequireDefault(_UiIcon);
  var _menu = __webpack_require__(10);
  var _menu2 = _interopRequireDefault(_menu);
  var _deepAssign = __webpack_require__(11);
  var _deepAssign2 = _interopRequireDefault(_deepAssign);
  var exports = __webpack_require__(3);
  var _classlist = __webpack_require__(12);
  var _classlist2 = _interopRequireDefault(_classlist);
  var _noframeworkWaypoints = __webpack_require__(58);
  var _noframeworkWaypoints2 = _interopRequireDefault(_noframeworkWaypoints);
  /** @type {number} */
  var ratio = window.devicePixelRatio;
  var sun = {
    shadowBias : 3e-4
  };
  /**
   * @return {undefined}
   */
  t.default = function() {
    var e = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "_onCurrentIndexchange",
        value : function() {
          this.props.currentSlideLabel = this.props.slides[this.props.currentSlideIndex].imgAlt;
        }
      }, {
        key : "_handleOrientation",
        value : function(name) {
          console.log("event", name);
          /** @type {number} */
          this.props.pointerRatio[0] = Math.max(-90, Math.min(90, name.gamma / 1)) / 6;
          /** @type {number} */
          this.props.pointerRatio[1] = Math.max(-10, Math.min(10, name.beta - 45)) / 10;
          /** @type {number} */
          this.props.pointer[0] = (name.gamma / 30 + 1) / 2 * this.props.width;
          /** @type {number} */
          this.props.pointer[1] = (name.beta / 30 + 1) / 2 * this.props.height;
        }
      }, {
        key : "created",
        value : function() {
          this._onPointerMove = this._onPointerMove.bind(this);
          this._onMouseWheel = this._onMouseWheel.bind(this);
          this._onKeyDown = this._onKeyDown.bind(this);
          this._handleOrientation = this._handleOrientation.bind(this);
          /** @type {number} */
          this._deltaY = 0;
          /** @type {number} */
          this._scroll = 0;
          /** @type {!Array} */
          this._meshes = [];
          /** @type {number} */
          this._time = 0;
          /** @type {number} */
          this._scale = 0;
          /** @type {number} */
          this._fullScale = 0;
          /** @type {!Array} */
          this._backgroundColor = [239, 243, 240];
          /** @type {number} */
          this._preload = 0;
        }
      }, {
        key : "ready",
        value : function() {
          var that = this;
          document.addEventListener("keydown", this._onKeyDown, false);
          if (!ns.support.touch) {
            document.addEventListener(ns.support.pointermove, this._onPointerMove, false);
          }
          window.addEventListener("deviceorientation", this._handleOrientation);
          this._indicator = new _menu2.default({
            elem : document,
            callback : this._onMouseWheel,
            preventMouse : true
          });
          this._indicator.turnOff();
          this._indicator.turnOn();
          if (ns.support.touch) {
            this._swipeIndicator = new _deepAssign2.default({
              elem : document,
              callback : this._onMouseWheel
            });
          }
          this._productAnim = new _UiIcon2.default({
            duration : 600,
            delay : 0,
            easing : [.68, 0, .265, 1],
            step : function(framesToGo) {
              that._scroll = that._startWheel + framesToGo * (that.props.currentSlideIndex * that.props.height - that._startWheel);
            },
            end : function() {
              /** @type {boolean} */
              that._isScrolling = false;
            }
          });
          this.preload();
        }
      }, {
        key : "preload",
        value : function() {
          var plugin = this;
          if (window.innerWidth <= 720 && 1 == window.devicePixelRatio) {
            this.tiles = __webpack_require__(59);
          } else {
            if (window.innerWidth <= 1440 && 1 == window.devicePixelRatio || window.innerWidth <= 720 && window.devicePixelRatio > 1) {
              this.tiles = __webpack_require__(60);
            } else {
              this.tiles = __webpack_require__(61);
            }
          }
          this._build3dScene();
          this.resize();
          requestAnimationFrame(function() {
            plugin.props.onReady();
            plugin.querySelector(".js-loader").classList.remove("is-active");
            plugin._onCurrentIndexchange();
          });
        }
      }, {
        key : "_build3dScene",
        value : function() {
          var _this = this;
          this.$sceneWrapper = this.querySelector(".js-scene");
          this._renderer = new exports.Renderer({
            alpha : true
          });
          this._supportsDerivativeExtention = this._renderer.gl.getExtension("OES_standard_derivatives");
          this._depthMaterial = new exports.Material(this._renderer.gl, {
            uniforms : {},
            vertexShader : __webpack_require__(13),
            fragmentShader : __webpack_require__(14),
            blend : false,
            depthTest : false
          });
          this._spriteMaterial = new exports.Material(this._renderer.gl, {
            type : this._renderer.gl.TRIANGLES,
            uniforms : {},
            vertexShader : _classlist2.default,
            fragmentShader : _noframeworkWaypoints2.default,
            blend : true
          });
          var comps = {};
          var images = {};
          /** @type {number} */
          var l = 0;
          for (; l < this.tiles.length; l++) {
            var i;
            for (i in this.tiles[l].frames) {
              if (void 0 == images[this.tiles[l].meta.image]) {
                images[this.tiles[l].meta.image] = {
                  width : this.tiles[l].meta.size.w,
                  height : this.tiles[l].meta.size.h,
                  image : exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + this.tiles[l].meta._image),
                  alpha : exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + this.tiles[l].meta._alpha)
                };
              }
              if (void 0 == comps[i]) {
                comps[i] = {
                  base : this.tiles[l].meta.image,
                  x : this.tiles[l].frames[i].frame.x,
                  y : this.tiles[l].frames[i].frame.y,
                  width : this.tiles[l].frames[i].frame.w,
                  height : this.tiles[l].frames[i].frame.h
                };
              }
            }
          }
          var pgTexture = exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + "/assets/images/home/grain.png");
          var a = exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + "/assets/images/home/grain-0.png");
          var h = exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + "/assets/images/home/grain-1.png");
          var idx = exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + "/assets/images/home/grain-2.png");
          var u = exports.Texture.fromUrl(this._renderer.gl, this.props.cdnRoot + "/assets/images/home/grain-3.png");
          this._scene = new exports.Container;
          this._camera = new exports.Camera({
            fov : 45,
            aspect : window.innerWidth / window.innerHeight,
            near : 1,
            far : 1e4,
            left : -window.innerWidth / 2,
            right : window.innerWidth / 2,
            top : window.innerHeight / 2,
            bottom : -window.innerHeight / 2,
            type : "ortho",
            orbitControl : false
          });
          this._camera.lookAt = exports.vec3.create();
          exports.vec3.set(this._camera.lookAt, 0, 0, 0);
          /** @type {number} */
          this._camera.position[2] = 1e3;
          this._renderer.setPixelRatio(ratio);
          this.$sceneWrapper.appendChild(this._renderer.canvas);
          this._shadowCamera = new exports.Camera({
            near : 1,
            far : 5e3,
            aspect : window.innerWidth / window.innerHeight,
            left : -window.innerWidth,
            right : window.innerWidth,
            top : window.innerHeight,
            bottom : -window.innerHeight,
            type : "ortho",
            orbitControl : false
          });
          /** @type {number} */
          this._shadowCamera.position[2] = 1e3;
          this._shadowCamera.lookAt = exports.vec3.create();
          this._shadowRenderTarget = new exports.FrameBuffer(this._renderer.gl, {
            type : this._renderer.gl.FLOAT
          });
          this._shadowRenderTarget.resize(window.innerWidth / ratio, window.innerHeight / ratio);
          var point = new exports.PlaneGeometryBuffer(this._renderer.gl, {
            width : 1,
            height : 1,
            widthSegments : 1,
            heightSegments : 1
          });
          this.props.slides[0].color[0];
          this.props.slides[0].color[1];
          this.props.slides[0].color[2];
          this._meshWrapper = new exports.Container;
          this._scene.add(this._meshWrapper);
          /** @type {number} */
          var imageSectionForm = 0;
          /** @type {number} */
          var index = 0;
          for (; index < this.props.slides.length; index++) {
            /** @type {number} */
            var i = 0;
            for (; i < this.props.slides[index].children.length; i++) {
              !function() {
                var name = void 0;
                var val = void 0;
                var el = void 0;
                var f = imageSectionForm;
                var mesh = new exports.Mesh({
                  beforeRender : function() {
                    _this._updateMeshUniforms(f);
                  }
                });
                mesh.geometry = point;
                var options = {
                  color : [1, 0, 0],
                  width : _this.props.slides[index].children[i].width,
                  height : _this.props.slides[index].children[i].height,
                  margin : (_this.props.isMobile ? 30 : 90) * ratio,
                  tShadow : _this._shadowRenderTarget,
                  resolution : [window.innerWidth * ratio, window.innerHeight * ratio],
                  rsmCameraProjectionMatrix : _this._shadowCamera.projectionMatrix,
                  rsmCameraModelViewMatrix : _this._shadowCamera.inverseWorldMatrix,
                  billboard : _this.props.slides[index].children[i].billboard ? 1 : 0,
                  tNoise : pgTexture,
                  tNoise0 : a,
                  tNoise1 : h,
                  tNoise2 : idx,
                  tNoise3 : u,
                  pixelRatio : window.devicePixelRatio,
                  useTexture : 0,
                  useShadingColor : 0,
                  useNormalMap : 0,
                  receiveShadow : 0,
                  useMaskTop : 0,
                  maskHorizontal : 0,
                  useMaskBottom : 0,
                  uBias : 0,
                  lightPos : [0, 0, 0],
                  cameraPos : [0, 0, 0]
                };
                if (_this.props.slides[index].children[i].texture && (options.useTexture = 1, name = _this.props.slides[index].children[i].texture, val = comps[name], val.base, el = images[val.base], options.tInput = el.image, options.tAlpha = el.alpha, options.frameUvs = [val.x, val.y], options.frameSize = [val.width, val.height], options.atlasSize = [el.width, el.height]), _this.props.slides[index].children[i].maskTop && (options.useMaskTop = 1), _this.props.slides[index].children[i].maskHorizontal && 
                (options.maskHorizontal = 1), _this.props.slides[index].children[i].maskBottom && (options.useMaskBottom = 1), !_this.props.slides[index].children[i].receiveShadow && void 0 !== _this.props.slides[index].children[i].receiveShadow || _this.props.isMobile || (options.receiveShadow = 1), void 0 !== _this.props.slides[index].children[i].normal && _this._supportsDerivativeExtention) {
                  var id = _this.props.slides[index].children[i].normal;
                  var data = comps[id];
                  var result = images[data.base];
                  /** @type {number} */
                  options.useNormalMap = 1;
                  options.normalScale = exports.vec2.create();
                  /** @type {number} */
                  options.normalScale[0] = options.normalScale[1] = 50;
                  options.lightPos = exports.vec3.create();
                  options.cameraPos = exports.vec3.create();
                  options.tNormal = result.image;
                  /** @type {!Array} */
                  options.normalFrameUvs = [data.x, data.y];
                  /** @type {!Array} */
                  options.normalFrameSize = [data.width, data.height];
                  /** @type {!Array} */
                  options.normalAtlasSize = [result.width, result.height];
                }
                if (void 0 !== _this.props.slides[index].children[i].shadingColor) {
                  /** @type {number} */
                  options.useShadingColor = 1;
                  options.uShadingColor = _this.props.slides[index].children[i].shadingColor;
                }
                mesh.position[2] = i;
                _this._meshWrapper.add(mesh);
                var pattern = {
                  alpha : 1,
                  rsmCameraModelViewMatrix : null,
                  rsmCameraProjectionMatrix : null
                };
                if (1 == options.useTexture) {
                  pattern = {
                    useTexture : 1,
                    tAlpha : el.alpha,
                    alphaFrameUvs : [val.x, val.y],
                    alphaFrameSize : [val.width, val.height],
                    alphaAtlasSize : [el.width, el.height]
                  };
                }
                _this._meshes.push({
                  shadowUniforms : pattern,
                  uniforms : options,
                  type : _this.props.slides[index].type,
                  reverse : _this.props.slides[index].children[i].reverse,
                  width : _this.props.slides[index].children[i].width,
                  height : _this.props.slides[index].children[i].height,
                  friction : _this.props.slides[index].children[i].friction,
                  x : _this.props.slides[index].children[i].x,
                  y : _this.props.slides[index].children[i].y,
                  z : _this.props.slides[index].children[i].z,
                  rotation : _this.props.slides[index].children[i].rotation,
                  deltaY : 0,
                  mesh : mesh,
                  slideIndex : index
                });
                imageSectionForm++;
              }();
            }
          }
        }
      }, {
        key : "_onMouseWheel",
        value : function(name) {
          if (!this._isScrolling && !this._isLoading) {
            var height = this.props.currentSlideIndex;
            height = height + ("down" == name.direction ? 1 : -1);
            /** @type {number} */
            height = Math.max(0, Math.min(this.props.slides.length - 1, height));
            if (height !== this.props.currentSlideIndex) {
              this._autoScroll(height);
            }
          }
        }
      }, {
        key : "_onKeyDown",
        value : function(key) {
          if (!(this._isScrolling || this._isLoading || 40 != key.which && 38 != key.which)) {
            var ballSize = this.props.currentSlideIndex;
            key.preventDefault();
            key.stopPropagation();
            /** @type {number} */
            ballSize = 0;
            if (40 == key.which) {
              ballSize = ballSize + (this.props.currentSlideIndex + 1);
              /** @type {number} */
              this.props.direction = 1;
            }
            if (38 == key.which) {
              ballSize = ballSize + (this.props.currentSlideIndex - 1);
              /** @type {number} */
              this.props.direction = -1;
            }
            this._autoScroll(ballSize);
          }
        }
      }, {
        key : "_autoScroll",
        value : function(name) {
          if (!(this._isLoading || this._isScrolling || name === this.props.currentSlideIndex)) {
            /** @type {number} */
            this.props.selectedSlideIndex = -1;
            /** @type {number} */
            this.props.direction = name > this.props.currentSlideIndex ? 1 : -1;
            this._productAnim.pause();
            /** @type {number} */
            this._startWheel = this.props.currentSlideIndex * this.props.height;
            /** @type {string} */
            this.props.currentSlideIndex = name;
            /** @type {boolean} */
            this._isScrolling = true;
            this._productAnim.play();
            this._backgroundColor[0] = this.props.slides[this.props.currentSlideIndex].color[0];
            this._backgroundColor[1] = this.props.slides[this.props.currentSlideIndex].color[1];
            this._backgroundColor[2] = this.props.slides[this.props.currentSlideIndex].color[2];
          }
        }
      }, {
        key : "_onBulletDown",
        value : function(name) {
          clearTimeout(this._autoplayTimer);
          /** @type {number} */
          var heightInches = Number(name.currentTarget.getAttribute("data-index"));
          this._autoScroll(heightInches);
        }
      }, {
        key : "detached",
        value : function() {
          if (void 0 !== this._indicator) {
            this._indicator.destroy();
          }
          if (void 0 !== this._swipeIndicator) {
            this._swipeIndicator.destroy();
          }
          document.removeEventListener(ns.support.pointermove, this._onPointerMove, false);
          document.removeEventListener("keydown", this._onKeyDown, false);
          window.removeEventListener("deviceorientation", this._handleOrientation);
        }
      }, {
        key : "resize",
        value : function() {
          if (this.props.width = window.innerWidth, this.props.height = window.innerHeight, this.props.winHeight = window.innerHeight, this.props.winWidth = window.innerWidth, this._parentWidth = this.props.width, this._parentHeight = this.props.height, this.props.isMobile = window.innerWidth < 700, this.props.isMobile ? (this._computedSize = (0, _normalizeDataUri2.default)(1440, 900, this._parentWidth, this._parentHeight / 3 * 2, false), this._computedSize2 = (0, _normalizeDataUri2.default)(1440, 
          900, this._parentWidth, this._parentHeight, false)) : (this._computedSize = (0, _normalizeDataUri2.default)(1440, 900, this._parentWidth, this._parentHeight, false), this._computedSize2 = (0, _normalizeDataUri2.default)(1440, 900, this._parentWidth, this._parentHeight, false)), this._scale = this._computedSize.height / 900, this._fullScale = this._computedSize2.height / 900, this.$sceneWrapper) {
            if (!this.props.isMobile) {
              /** @type {number} */
              this._shadowCamera.left = -window.innerWidth / 2;
              /** @type {number} */
              this._shadowCamera.right = window.innerWidth / 2;
              /** @type {number} */
              this._shadowCamera.top = window.innerHeight / 2;
              /** @type {number} */
              this._shadowCamera.bottom = -window.innerHeight / 2;
              this._shadowRenderTarget.resize(window.innerWidth, window.innerHeight);
            }
            this._renderer.resize(window.innerWidth, window.innerHeight);
            /** @type {number} */
            this._camera.position[2] = 3e3;
            /** @type {number} */
            this._camera.aspect = window.innerWidth / window.innerHeight;
            /** @type {number} */
            this._camera.left = -window.innerWidth / 2;
            /** @type {number} */
            this._camera.right = window.innerWidth / 2;
            /** @type {number} */
            this._camera.top = window.innerHeight / 2;
            /** @type {number} */
            this._camera.bottom = -window.innerHeight / 2;
            this._camera.updateProjectionMatrix();
            /** @type {number} */
            var i = 0;
            for (; i < this._meshes.length; i++) {
              /** @type {number} */
              this._meshes[i].uniforms.margin = (this.props.isMobile ? 30 : 90) * ratio;
              /** @type {!Array} */
              this._meshes[i].uniforms.resolution = [window.innerWidth * ratio, window.innerHeight * ratio];
            }
            this.props.onContentChange(0);
          }
        }
      }, {
        key : "_onPointerMove",
        value : function(name) {
          this._pointerEvent = ns.support.touch && "mousemove" != event.type ? event.touches[0] || event.changedTouches[0] : event;
          this.props.pointer[0] = this._pointerEvent.pageX;
          this.props.pointer[1] = this._pointerEvent.pageY;
          /** @type {number} */
          this.props.pointerRatio[0] = 2 * (this.props.pointer[0] / this.props.width - .5);
          /** @type {number} */
          this.props.pointerRatio[1] = 2 * (this.props.pointer[1] / this.props.height - .5);
        }
      }, {
        key : "update",
        value : function() {
          if (this.props.progress += .1 * (this._scroll / (this.props.height * (this.props.slides.length - 1)) - this.props.progress), this.props.preload += .05 * (this._preload - this.props.preload), this._time += .01, this.props.deltaY += .1 * (this._scroll / this.props.height * -this.props.winHeight - this.props.deltaY), this.props.scroll += .1 * (this._scroll - this.props.scroll), this.$sceneWrapper) {
            /** @type {number} */
            var i = 0;
            for (; i < this._meshes.length; i++) {
              var data = this._meshes[i];
              if (data.reverse && this.props.deltaY < -this.props.winHeight) {
                var height = this.props.deltaY + this.props.winHeight;
                data.deltaY += (this.props.deltaY + -1 * height - height - data.deltaY) * (7 * data.friction);
              } else {
                data.deltaY += (this.props.deltaY - data.deltaY) * (7 * data.friction);
              }
              if (this.props.isMobile && "small" === data.type) {
                data.mesh.position[0] += (data.x + 200) * this._scale - data.mesh.position[0];
                data.mesh.position[1] += (data.y - .4 * this.props.winHeight) * this._scale - this.props.winHeight * data.slideIndex - data.deltaY - data.mesh.position[1];
              } else {
                data.mesh.position[0] += data.x * this._fullScale - data.mesh.position[0];
                data.mesh.position[1] += data.y * this._fullScale - this.props.winHeight * data.slideIndex - data.deltaY - data.mesh.position[1];
              }
              data.mesh.position[2] = data.z;
              /** @type {number} */
              data.mesh.scale[0] = data.width * this._scale;
              /** @type {number} */
              data.mesh.scale[1] = data.height * this._scale;
              if (void 0 !== data.rotation) {
                data.mesh.rotation[0] = data.rotation[0];
                data.mesh.rotation[1] = data.rotation[1];
                data.mesh.rotation[2] = data.rotation[2];
              }
              if (data.mesh.position[1] + data.mesh.height / 2 < -this.props.winHeight / 2 || data.mesh.position[1] - data.mesh.height / 2 > this.props.winHeight / 2) {
                /** @type {boolean} */
                data.mesh.visible = false;
              } else {
                /** @type {boolean} */
                data.mesh.visible = true;
              }
              if (void 0 !== data.uniforms.lightPos) {
                data.uniforms.lightPos[0] = this._shadowCamera.position[0];
                data.uniforms.lightPos[1] = this._shadowCamera.position[1];
                data.uniforms.lightPos[2] = this._shadowCamera.position[2];
                if (data.uniforms.cameraPos) {
                  data.uniforms.cameraPos[0] = this._camera.position[0];
                  data.uniforms.cameraPos[1] = this._camera.position[1];
                  data.uniforms.cameraPos[2] = this._camera.position[2];
                }
              }
              /** @type {number} */
              data.uniforms.uBias = sun.shadowBias;
              /** @type {number} */
              data.shadowUniforms.uBias = sun.shadowBias;
              data.shadowUniforms.rsmCameraProjectionMatrix = this._shadowCamera.projectionMatrix;
              data.shadowUniforms.rsmCameraModelViewMatrix = this._shadowCamera.inverseWorldMatrix;
              data.uniforms.rsmCameraProjectionMatrix = this._shadowCamera.projectionMatrix;
              data.uniforms.rsmCameraModelViewMatrix = this._shadowCamera.inverseWorldMatrix;
            }
            /** @type {number} */
            var r = this.props.isMobile ? 500 : 1e3;
            if (this._shadowCamera.position[0] += .05 * (((this.props.isMobile ? 400 : 200) + Math.cos(this.props.pointer[0] / this.props.width + .5) * r) / 2 - this._shadowCamera.position[0]), this._shadowCamera.position[1] += .05 * (Math.sin(this.props.pointer[1] / this.props.height) * r / 2 - this._shadowCamera.position[1]), this._shadowCamera.position[2] += .05 * (Math.sin(this.props.pointer[0] / this.props.width + .5) * r / 2 - this._shadowCamera.position[2]), exports.vec3.set(this._shadowCamera.lookAt, 
            0, 0, 0), this._camera.position[0] += (this.props.pointerRatio[0] * this.props.winWidth / -2 - this._camera.position[0]) * (this.props.isMobile ? .5 : .1), this._camera.position[1] += (this.props.pointerRatio[1] * this.props.winHeight / 2 - this._camera.position[1]) * (this.props.isMobile ? .5 : .1), exports.vec3.set(this._camera.lookAt, 0, 0, 0), this.props.backgroundColor[0] += .05 * (this._backgroundColor[0] - this.props.backgroundColor[0]), this.props.backgroundColor[1] += .05 * (this._backgroundColor[1] - 
            this.props.backgroundColor[1]), this.props.backgroundColor[2] += .05 * (this._backgroundColor[2] - this.props.backgroundColor[2]), !this.props.isMobile) {
              /** @type {number} */
              i = 0;
              for (; i < this._meshes.length; i++) {
                this._meshes[i].mesh.material = this._depthMaterial;
              }
              this._renderer.gl.colorMask(true, false, false, false);
              this._renderer.clearColor(1, 1, 1, 1);
              this._renderer.clear();
              this._renderer.render(this._scene, this._shadowCamera, this._shadowRenderTarget);
              this._renderer.gl.colorMask(true, true, true, true);
            }
            /** @type {number} */
            i = 0;
            for (; i < this._meshes.length; i++) {
              this._meshes[i].mesh.material = this._spriteMaterial;
            }
            this._renderer.clearColor(0, 0, 0, 0);
            this._renderer.clear();
            this._renderer.render(this._scene, this._camera);
          }
        }
      }, {
        key : "_selectSlide",
        value : function(name) {
          /** @type {number} */
          var label = +name.currentTarget.getAttribute("data-index");
          /** @type {number} */
          this.props.selectedSlideIndex = this.props.selectedSlideIndex == label ? -1 : label;
        }
      }, {
        key : "_updateMeshUniforms",
        value : function(name) {
          if (!this._meshes[name]) {
            return void console.warn("oups, no mesh found, please check mesh i:", name);
          }
          if (this._meshes[name].mesh.material == this._depthMaterial) {
            var i;
            for (i in this._meshes[name].shadowUniforms) {
              if (void 0 !== this._meshes[name].mesh.material.uniforms[i]) {
                this._meshes[name].mesh.material.uniforms[i].value = this._meshes[name].shadowUniforms[i];
              }
            }
          }
          if (this._meshes[name].mesh.material == this._spriteMaterial) {
            var property;
            for (property in this._meshes[name].uniforms) {
              if (void 0 !== this._meshes[name].mesh.material.uniforms[property]) {
                this._meshes[name].mesh.material.uniforms[property].value = this._meshes[name].uniforms[property];
              }
            }
          }
        }
      }, {
        key : "template",
        get : function() {
          return __webpack_require__(62);
        }
      }, {
        key : "defaultProps",
        get : function() {
          return {
            height : {
              type : "f",
              value : window.innerHeight
            },
            width : {
              type : "f",
              value : window.innerWidth
            },
            winHeight : {
              type : "f",
              value : window.innerHeight
            },
            winWidth : {
              type : "f",
              value : window.innerWidth
            },
            position : {
              type : "arr",
              value : [0, 0]
            },
            scale : {
              type : "arr",
              value : [0, 0]
            },
            pointer : {
              type : "arr",
              value : [0, 0]
            },
            pointerRatio : {
              type : "arr",
              value : [0, 0]
            },
            currPointerRatio : {
              type : "arr",
              value : [0, 0]
            },
            deltaY : {
              type : "f",
              value : 0
            },
            slides : {
              type : "arr",
              value : __webpack_require__(63)
            },
            currentSlideIndex : {
              type : "i",
              value : 0,
              change : "_onCurrentIndexchange"
            },
            selectedSlideIndex : {
              type : "i",
              value : -1
            },
            direction : {
              type : "i",
              value : 1
            },
            progress : {
              type : "f",
              value : 0
            },
            scroll : {
              type : "f",
              value : 0
            },
            onContentChange : {
              type : "fn",
              value : function() {
              }
            },
            onReady : {
              type : "fn",
              value : function() {
              }
            },
            globalContent : {
              type : "json",
              value : null
            },
            content : {
              type : "json",
              value : null
            },
            preload : {
              type : "f",
              value : 0
            },
            isMobile : {
              type : "f",
              value : window.innerWidth < 700
            },
            backgroundColor : {
              type : "arr",
              value : [239, 243, 240]
            },
            currentSlideLabel : "",
            cdnRoot : ""
          };
        }
      }]), Agent;
    }(ns.Component);
    (0, ns.register)("page-home", e);
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = "#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\n\n\n\nuniform sampler2D tShadow;\nuniform sampler2D tNoise;\nuniform sampler2D tNoise0;\nuniform sampler2D tNoise1;\nuniform sampler2D tNoise2;\nuniform sampler2D tNoise3;\nuniform sampler2D tShadowColor;\n\nuniform sampler2D tInput;\nuniform sampler2D tAlpha;\nuniform sampler2D tNormal;\n\nuniform vec2 resolution;\nuniform float margin;\nuniform float useDepth;\nuniform mat4 rsmCameraModelViewMatrix;\nuniform mat4 rsmCameraProjectionMatrix;\nuniform int receiveShadow;\nuniform float width;\nuniform float height;\nuniform int useNormalMap;\nuniform vec2 normalScale;\nuniform vec3 lightPos;\nuniform vec3 cameraPos;\nuniform int useMaskTop;\nuniform int useMaskBottom;\nuniform int maskHorizontal;\n\n\nuniform vec2 frameUvs;\nuniform vec2 frameSize;\nuniform vec2 atlasSize;\n\nuniform vec2 normalFrameUvs; \nuniform vec2 normalFrameSize;\nuniform vec2 normalAtlasSize;\n\n\nuniform int useShadingColor;\nuniform vec3 uShadingColor;\n\nvarying vec4 Vertex_Normal;\nvarying vec4 Vertex_LightDir;\nvarying vec4 Vertex_EyeVec;\nvarying vec3 vViewPosition;\nvarying vec3 vViewNormal;\nvarying vec3 vPos;\nvarying vec2 vUv;\n\nuniform float uBias;\n\n\nfloat texture2DCompare(vec2 uv, float compare){\n    float shadowMapDepth = texture2D(tShadow, uv).r;\n    return step(compare, shadowMapDepth);\n}\n\nfloat texture2DCompareLinear(vec2 uv, float compare, vec2 size) {\n    vec2 pixelPos = uv * size + .5;\n    vec2 fractPart = fract(pixelPos);\n    vec2 startTexel = (pixelPos - fractPart) / size;\n    float blTexel = texture2DCompare(startTexel, compare);\n    float brTexel = texture2DCompare(startTexel + vec2(1./size.x, 0.), compare);\n    float tlTexel = texture2DCompare(startTexel + vec2(0., 1./size.y), compare);\n    float trTexel = texture2DCompare(startTexel + vec2(1./size.x, 1./size.y), compare);\n    float mixA = mix(blTexel, tlTexel, fractPart.y);\n    float mixB = mix(brTexel, trTexel, fractPart.y);\n    return mix( mixA, mixB, fractPart.x ); \n}\n\n// http://www.thetenthplanet.de/archives/1180\nmat3 cotangent_frame(vec3 N, vec3 p, vec2 uv)\n{\n\t// get edge vectors of the pixel triangle\n\tvec3 dp1 = dFdx( p );\n\tvec3 dp2 = dFdy( p );\n\tvec2 duv1 = dFdx( uv );\n\tvec2 duv2 = dFdy( uv );\n\t\n\t// solve the linear system\n\tvec3 dp2perp = cross( dp2, N );\n\tvec3 dp1perp = cross( N, dp1 );\n\tvec3 T = dp2perp * duv1.x + dp1perp * duv2.x;\n\tvec3 B = dp2perp * duv1.y + dp1perp * duv2.y;\n\t\n\t// construct a scale-invariant frame \n\tfloat invmax = inversesqrt( max( dot(T,T), dot(B,B) ) );\n\treturn mat3( T * invmax, B * invmax, N );\n}\n\nvec3 perturb_normal( vec3 N, vec3 V, vec2 texcoord )\n{\n\t// assume N, the interpolated vertex normal and \n\t// V, the view vector (vertex to eye)\n\tvec3 map = texture2D(tNormal, texcoord ).xyz;\n\tmap = map * 255./127. - 128./127.;\n\tmat3 TBN = cotangent_frame(N, -V, texcoord);\n\treturn normalize(TBN * map);\n}\n\n\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\tvec2 st1 = dFdy( vUv.st );\n\n\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\tvec3 N = normalize( surf_norm );\n\n\tvec3 mapN = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy = normalScale * mapN.xy;\n\tmat3 tsn = mat3( S, T, N );\n\treturn normalize( tsn * mapN );\n}\n\n\n\n// float rand(vec2 co){\n//     return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n// }\n\nhighp float rand(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nuniform int useTexture;\nuniform float pixelRatio;\n\nvoid main() {\n\n\tvec2 screenCoords   = gl_FragCoord.xy / resolution;\n\n\tfloat vMarginRatio = margin  / resolution.y;\n\tfloat hMarginRatio = margin  / resolution.x;\n\n\tif (useMaskTop == 1) {\n\t\tif ( screenCoords.y > 1. - vMarginRatio ) {\n\t\t\tdiscard;\n\t\t}\n\t}\n\t\t\n\tif (useMaskBottom == 1) {\n\t\tif ( screenCoords.y < vMarginRatio ) {\n\t\t\tdiscard;\n\t\t}\n\t}\n\n\tif ( maskHorizontal == 1 && (screenCoords.x < hMarginRatio || screenCoords.x > 1. - hMarginRatio) ) {\n\t\tdiscard;\n\t}\n\n\n\tfloat shadow;\n\tif (receiveShadow == 1) {\n\t\tvec4 worldToClip = rsmCameraProjectionMatrix * rsmCameraModelViewMatrix * vec4( vPos, 1.) ;\n\t\tvec3 clipToScreen = ( vec3( worldToClip.xyz ) / ( worldToClip.w * 2. ) );\n\t\tfloat depth = ( (worldToClip.xyz/worldToClip.w).z + 1.) / 2.; \n\t\tvec2 screenToUV = 0.5 - vec2( clipToScreen.xy ) * -1.0;\n\t\tshadow = texture2DCompare( screenToUV, depth - uBias);\n\t}\n\telse {\n\t\tshadow = 1.0;\n\t}\n\n\n\tvec4 outColor  = vec4(0.,0.,0.,0.);\n\n\tif (useTexture == 1) {\n\t\tvec2 off = (vec2(vUv.x,1.-vUv.y) * frameSize) / atlasSize\n\t\t\t\t+ vec2(frameUvs.x, frameUvs.y) / atlasSize;\n\t\t    outColor   = texture2D(tInput, vec2(off.x, 1.-off.y));\n\t\t\toutColor.a = texture2D(tAlpha, vec2(off.x, 1.-off.y)).r;\n\t}\n\n\tfloat noiseTexWidth  = 128./pixelRatio;\n\tfloat noiseTexHeight = 128./pixelRatio;\n\tvec2 offset = vec2(\n\t\t   mod(vUv.x * width, noiseTexWidth) / (noiseTexWidth),\n\t\t  (mod(vUv.y * height, noiseTexHeight)) / (noiseTexHeight)\n\t);\n\n\n\tif (useNormalMap == 1) {\n\n\t\t// vec3 _normal = normalize(Vertex_Normal.xyz); \n\t\t// _normal = perturbNormal2Arb( normalize(Vertex_EyeVec.xyz), _normal );\n\n\t\tvec2 normalUvs =  (vec2(vUv.x,1.-vUv.y) * normalFrameSize) / normalAtlasSize\n\t\t\t\t\t     + vec2(normalFrameUvs.x, normalFrameUvs.y) / normalAtlasSize;\n\n\t\tnormalUvs = vec2(normalUvs.x, 1.-normalUvs.y);\n\t\t\n\t\tvec3 _normal = (texture2D(tNormal, normalUvs).rgb*2.0 - 1.0);\n\n\t\t// compute tangent T and bitangent B\n\t\tvec3 Q1 = dFdx(vPos);\n\t\tvec3 Q2 = dFdy(-vPos);\n\t\tvec2 st1 = dFdx(vUv);\n\t\tvec2 st2 = dFdy(vUv);\n\t \n\t\tvec3 T = normalize(Q1*st2.t - Q2*st1.t);\n\t\tvec3 B = normalize(-Q1*st2.s + Q2*st1.s);\n\t \n\t\t// the transpose of texture-to-eye space matrix\n\t\tmat3 TBN = mat3(T, B, vec3(0.,0.,1.) );\n\t \n\t\t// transform the normal to eye space \n\t\t_normal = _normal*TBN;\n\n\t\tfloat cosTerm = max(0., dot(_normal, normalize(lightPos - vPos)) );\n\n\t\tvec3 diffuseColor = outColor.rgb;\n\n\n\t\tvec3 shadedColor = useShadingColor == 1 \n\t\t\t\t\t\t\t\t? uShadingColor\n\t\t\t\t\t\t\t\t: outColor.rgb * vec3(217./255.,214./255.,225./255.);\n\n\t\t// if (cosTerm < 0.3) {\n\t\t// \tvec2 noise_offset = vec2(\n\t\t// \t\tmod(vUv.x * width, (1.-cosTerm/0.3)*256.) / (256.),\n\t\t// \t\t(mod(vUv.y * height, 256.)) / (256.)\n\t\t// \t);\n\t\t// \tfloat noise = texture2D(tNoise, noise_offset).r;\n\t\t// \tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t// }\n\t\n\t\tif (cosTerm < 0.05) {\n\t\t\tfloat noise = texture2D(tNoise0, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\telse if (cosTerm < 0.125) {\n\t\t\tfloat noise = texture2D(tNoise1, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\telse if (cosTerm < 0.2) {\n\t\t\tfloat noise = texture2D(tNoise2, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\telse if (cosTerm < 0.3) {\n\t\t\tfloat noise = texture2D(tNoise3, offset ).r;\n\t\t\tdiffuseColor = mix(outColor.rgb, shadedColor, noise);\n\t\t}\n\t\t\n\n\t\tif (shadow < 1.) {\n\t\t\tfloat shadowNoise = texture2D(tNoise0, offset ).r;\n\t\t\tdiffuseColor *= mix(vec3(1.), vec3(217./255.,214./255.,225./255.), 0.3 + shadowNoise*0.7 ); \n\t\t}\n\n\t\tgl_FragColor = vec4( diffuseColor.rgb, outColor.a);\n\t\t\t\n\n\t}\n\telse if (useTexture==1) {\n\t\tfloat noise = texture2D(tNoise0, offset ).r;\n\n\t\tif (shadow < 1.) {\n\t\t\tgl_FragColor =vec4( mix(outColor.rgb, outColor.rgb * vec3(217./255.,214./255.,225./255.), 0.4 + 0.6*noise ), outColor.a);\n\t\t}\n\t\telse {\n\t\t\tgl_FragColor = vec4( outColor.rgb, outColor.a);\n\t\t}\n\t}\n\telse {\n\n\t\tfloat noise = texture2D(tNoise0, offset ).r;\n\n\t\tgl_FragColor = vec4( vec3(191./255.,169./255.,166./255.), (1.-shadow)*0.4*noise);\n\t}\n\t\n\n\t\n}";
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array} */
  mixin.exports = [{
    frames : {
      "about/branch-1.png" : {
        frame : {
          x : 830,
          y : 203,
          w : 114,
          h : 98
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 114,
          h : 98
        },
        sourceSize : {
          w : 114,
          h : 98
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/branch-2.png" : {
        frame : {
          x : 161,
          y : 203,
          w : 75,
          h : 92
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 75,
          h : 92
        },
        sourceSize : {
          w : 75,
          h : 92
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/branch-3.png" : {
        frame : {
          x : 270,
          y : 301,
          w : 102,
          h : 109
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 102,
          h : 109
        },
        sourceSize : {
          w : 102,
          h : 109
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/leaf-1.png" : {
        frame : {
          x : 176,
          y : 0,
          w : 28,
          h : 24
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 28,
          h : 24
        },
        sourceSize : {
          w : 28,
          h : 24
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/leaf-2.png" : {
        frame : {
          x : 244,
          y : 129,
          w : 61,
          h : 66
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 61,
          h : 66
        },
        sourceSize : {
          w : 61,
          h : 66
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-background-leaf.png" : {
        frame : {
          x : 390,
          y : 203,
          w : 119,
          h : 97
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 119,
          h : 97
        },
        sourceSize : {
          w : 119,
          h : 97
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf-flat.png" : {
        frame : {
          x : 605,
          y : 31,
          w : 53,
          h : 39
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 53,
          h : 39
        },
        sourceSize : {
          w : 53,
          h : 39
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf-normal.png" : {
        frame : {
          x : 696,
          y : 31,
          w : 53,
          h : 39
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 53,
          h : 39
        },
        sourceSize : {
          w : 53,
          h : 39
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf.png" : {
        frame : {
          x : 207,
          y : 73,
          w : 60,
          h : 45
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 60,
          h : 45
        },
        sourceSize : {
          w : 60,
          h : 45
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-normal.png" : {
        frame : {
          x : 372,
          y : 301,
          w : 115,
          h : 112
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 115,
          h : 112
        },
        sourceSize : {
          w : 115,
          h : 112
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple.png" : {
        frame : {
          x : 180,
          y : 417,
          w : 126,
          h : 122
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 126,
          h : 122
        },
        sourceSize : {
          w : 126,
          h : 122
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/background.png" : {
        frame : {
          x : 447,
          y : 31,
          w : 158,
          h : 38
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 158,
          h : 38
        },
        sourceSize : {
          w : 158,
          h : 38
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/cloud-1.png" : {
        frame : {
          x : 562,
          y : 0,
          w : 276,
          h : 31
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 276,
          h : 31
        },
        sourceSize : {
          w : 276,
          h : 31
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/cloud-2.png" : {
        frame : {
          x : 0,
          y : 31,
          w : 276,
          h : 31
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 276,
          h : 31
        },
        sourceSize : {
          w : 276,
          h : 31
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/glow.png" : {
        frame : {
          x : 487,
          y : 301,
          w : 224,
          h : 114
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 224,
          h : 114
        },
        sourceSize : {
          w : 224,
          h : 114
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/hand-flat.png" : {
        frame : {
          x : 450,
          y : 580,
          w : 193,
          h : 232
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 193,
          h : 232
        },
        sourceSize : {
          w : 193,
          h : 232
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/hand-normal.png" : {
        frame : {
          x : 643,
          y : 580,
          w : 193,
          h : 232
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 193,
          h : 232
        },
        sourceSize : {
          w : 193,
          h : 232
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-1.png" : {
        frame : {
          x : 140,
          y : 0,
          w : 20,
          h : 16
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 20,
          h : 16
        },
        sourceSize : {
          w : 20,
          h : 16
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-2.png" : {
        frame : {
          x : 787,
          y : 31,
          w : 137,
          h : 40
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 137,
          h : 40
        },
        sourceSize : {
          w : 137,
          h : 40
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-3.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 24,
          h : 4
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 24,
          h : 4
        },
        sourceSize : {
          w : 24,
          h : 4
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-4.png" : {
        frame : {
          x : 35,
          y : 0,
          w : 23,
          h : 9
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 23,
          h : 9
        },
        sourceSize : {
          w : 23,
          h : 9
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-5.png" : {
        frame : {
          x : 66,
          y : 0,
          w : 23,
          h : 9
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 23,
          h : 9
        },
        sourceSize : {
          w : 23,
          h : 9
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-6.png" : {
        frame : {
          x : 24,
          y : 0,
          w : 11,
          h : 5
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 11,
          h : 5
        },
        sourceSize : {
          w : 11,
          h : 5
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-7.png" : {
        frame : {
          x : 120,
          y : 0,
          w : 20,
          h : 16
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 20,
          h : 16
        },
        sourceSize : {
          w : 20,
          h : 16
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-8.png" : {
        frame : {
          x : 100,
          y : 0,
          w : 20,
          h : 15
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 20,
          h : 15
        },
        sourceSize : {
          w : 20,
          h : 15
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-9.png" : {
        frame : {
          x : 160,
          y : 0,
          w : 16,
          h : 19
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 16,
          h : 19
        },
        sourceSize : {
          w : 16,
          h : 19
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/3roundleafs.png" : {
        frame : {
          x : 785,
          y : 301,
          w : 83,
          h : 116
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 83,
          h : 116
        },
        sourceSize : {
          w : 83,
          h : 116
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/5leafs-branche.png" : {
        frame : {
          x : 509,
          y : 203,
          w : 144,
          h : 97
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 144,
          h : 97
        },
        sourceSize : {
          w : 144,
          h : 97
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/balls-red-green.png" : {
        frame : {
          x : 283,
          y : 0,
          w : 54,
          h : 25
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 54,
          h : 25
        },
        sourceSize : {
          w : 54,
          h : 25
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/branch-ball.png" : {
        frame : {
          x : 379,
          y : 129,
          w : 74,
          h : 68
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 74,
          h : 68
        },
        sourceSize : {
          w : 74,
          h : 68
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/casserole.png" : {
        frame : {
          x : 128,
          y : 301,
          w : 142,
          h : 106
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 142,
          h : 106
        },
        sourceSize : {
          w : 142,
          h : 106
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/long-leaf.png" : {
        frame : {
          x : 48,
          y : 203,
          w : 113,
          h : 90
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 113,
          h : 90
        },
        sourceSize : {
          w : 113,
          h : 90
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/mini-leaf-orange.png" : {
        frame : {
          x : 425,
          y : 0,
          w : 70,
          h : 29
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 70,
          h : 29
        },
        sourceSize : {
          w : 70,
          h : 29
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/mini-leaf.png" : {
        frame : {
          x : 495,
          y : 0,
          w : 30,
          h : 31
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 30,
          h : 31
        },
        sourceSize : {
          w : 30,
          h : 31
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/red-ball.png" : {
        frame : {
          x : 204,
          y : 0,
          w : 43,
          h : 25
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 43,
          h : 25
        },
        sourceSize : {
          w : 43,
          h : 25
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/spoon.png" : {
        frame : {
          x : 607,
          y : 417,
          w : 150,
          h : 158
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 150,
          h : 158
        },
        sourceSize : {
          w : 150,
          h : 158
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/tomato.png" : {
        frame : {
          x : 349,
          y : 31,
          w : 43,
          h : 35
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 43,
          h : 35
        },
        sourceSize : {
          w : 43,
          h : 35
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/5leaf-branch.png" : {
        frame : {
          x : 686,
          y : 203,
          w : 144,
          h : 97
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 144,
          h : 97
        },
        sourceSize : {
          w : 144,
          h : 97
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/ail.png" : {
        frame : {
          x : 0,
          y : 73,
          w : 50,
          h : 45
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 50,
          h : 45
        },
        sourceSize : {
          w : 50,
          h : 45
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/branch-olive.png" : {
        frame : {
          x : 453,
          y : 129,
          w : 83,
          h : 68
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 83,
          h : 68
        },
        sourceSize : {
          w : 83,
          h : 68
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/houx.png" : {
        frame : {
          x : 183,
          y : 129,
          w : 61,
          h : 66
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 61,
          h : 66
        },
        sourceSize : {
          w : 61,
          h : 66
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/left-mini-leaf.png" : {
        frame : {
          x : 0,
          y : 129,
          w : 116,
          h : 65
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 116,
          h : 65
        },
        sourceSize : {
          w : 116,
          h : 65
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/medium-leaf.png" : {
        frame : {
          x : 707,
          y : 73,
          w : 63,
          h : 52
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 63,
          h : 52
        },
        sourceSize : {
          w : 63,
          h : 52
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/mini-leaf.png" : {
        frame : {
          x : 414,
          y : 73,
          w : 149,
          h : 46
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 149,
          h : 46
        },
        sourceSize : {
          w : 149,
          h : 46
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/oignon.png" : {
        frame : {
          x : 236,
          y : 203,
          w : 60,
          h : 93
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 60,
          h : 93
        },
        sourceSize : {
          w : 60,
          h : 93
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/olive.png" : {
        frame : {
          x : 967,
          y : 31,
          w : 37,
          h : 42
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 37,
          h : 42
        },
        sourceSize : {
          w : 37,
          h : 42
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/orange.png" : {
        frame : {
          x : 865,
          y : 129,
          w : 97,
          h : 74
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 97,
          h : 74
        },
        sourceSize : {
          w : 97,
          h : 74
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/persil.png" : {
        frame : {
          x : 636,
          y : 73,
          w : 71,
          h : 51
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 71,
          h : 51
        },
        sourceSize : {
          w : 71,
          h : 51
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/twig.png" : {
        frame : {
          x : 204,
          y : 580,
          w : 246,
          h : 176
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 246,
          h : 176
        },
        sourceSize : {
          w : 246,
          h : 176
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/dots.png" : {
        frame : {
          x : 89,
          y : 0,
          w : 11,
          h : 13
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 11,
          h : 13
        },
        sourceSize : {
          w : 11,
          h : 13
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-1.png" : {
        frame : {
          x : 525,
          y : 0,
          w : 37,
          h : 31
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 37,
          h : 31
        },
        sourceSize : {
          w : 37,
          h : 31
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-2.png" : {
        frame : {
          x : 384,
          y : 0,
          w : 41,
          h : 28
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 41,
          h : 28
        },
        sourceSize : {
          w : 41,
          h : 28
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-3.png" : {
        frame : {
          x : 247,
          y : 0,
          w : 36,
          h : 25
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 36,
          h : 25
        },
        sourceSize : {
          w : 36,
          h : 25
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-4.png" : {
        frame : {
          x : 337,
          y : 0,
          w : 31,
          h : 26
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 31,
          h : 26
        },
        sourceSize : {
          w : 31,
          h : 26
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta.png" : {
        frame : {
          x : 267,
          y : 73,
          w : 147,
          h : 46
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 147,
          h : 46
        },
        sourceSize : {
          w : 147,
          h : 46
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/glow.png" : {
        frame : {
          x : 757,
          y : 417,
          w : 197,
          h : 163
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 197,
          h : 163
        },
        sourceSize : {
          w : 197,
          h : 163
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-1.png" : {
        frame : {
          x : 563,
          y : 73,
          w : 56,
          h : 46
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 56,
          h : 46
        },
        sourceSize : {
          w : 56,
          h : 46
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-2.png" : {
        frame : {
          x : 116,
          y : 129,
          w : 67,
          h : 65
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 67,
          h : 65
        },
        sourceSize : {
          w : 67,
          h : 65
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-3.png" : {
        frame : {
          x : 330,
          y : 31,
          w : 19,
          h : 32
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 19,
          h : 32
        },
        sourceSize : {
          w : 19,
          h : 32
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-4.png" : {
        frame : {
          x : 58,
          y : 0,
          w : 8,
          h : 9
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 8,
          h : 9
        },
        sourceSize : {
          w : 8,
          h : 9
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaves.png" : {
        frame : {
          x : 392,
          y : 31,
          w : 55,
          h : 36
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 55,
          h : 36
        },
        sourceSize : {
          w : 55,
          h : 36
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-1-face.png" : {
        frame : {
          x : 475,
          y : 417,
          w : 132,
          h : 157
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 132,
          h : 157
        },
        sourceSize : {
          w : 132,
          h : 157
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-1.png" : {
        frame : {
          x : 306,
          y : 417,
          w : 111,
          h : 133
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 111,
          h : 133
        },
        sourceSize : {
          w : 111,
          h : 133
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-2.png" : {
        frame : {
          x : 0,
          y : 301,
          w : 128,
          h : 104
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 128,
          h : 104
        },
        sourceSize : {
          w : 128,
          h : 104
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-slices.png" : {
        frame : {
          x : 830,
          y : 73,
          w : 159,
          h : 56
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 159,
          h : 56
        },
        sourceSize : {
          w : 159,
          h : 56
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/glow.png" : {
        frame : {
          x : 0,
          y : 580,
          w : 204,
          h : 169
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 204,
          h : 169
        },
        sourceSize : {
          w : 204,
          h : 169
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/knife-flat.png" : {
        frame : {
          x : 836,
          y : 580,
          w : 49,
          h : 291
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 49,
          h : 291
        },
        sourceSize : {
          w : 49,
          h : 291
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/knife-normal.png" : {
        frame : {
          x : 885,
          y : 580,
          w : 49,
          h : 291
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 49,
          h : 291
        },
        sourceSize : {
          w : 49,
          h : 291
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-1.png" : {
        frame : {
          x : 619,
          y : 73,
          w : 17,
          h : 49
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 17,
          h : 49
        },
        sourceSize : {
          w : 17,
          h : 49
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-2.png" : {
        frame : {
          x : 368,
          y : 0,
          w : 16,
          h : 26
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 16,
          h : 26
        },
        sourceSize : {
          w : 16,
          h : 26
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-left.png" : {
        frame : {
          x : 653,
          y : 203,
          w : 33,
          h : 97
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 33,
          h : 97
        },
        sourceSize : {
          w : 33,
          h : 97
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-right.png" : {
        frame : {
          x : 0,
          y : 203,
          w : 48,
          h : 89
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 48,
          h : 89
        },
        sourceSize : {
          w : 48,
          h : 89
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-foreground.png" : {
        frame : {
          x : 276,
          y : 31,
          w : 54,
          h : 32
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 54,
          h : 32
        },
        sourceSize : {
          w : 54,
          h : 32
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-middleground.png" : {
        frame : {
          x : 417,
          y : 417,
          w : 58,
          h : 140
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 58,
          h : 140
        },
        sourceSize : {
          w : 58,
          h : 140
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-background-1.png" : {
        frame : {
          x : 924,
          y : 31,
          w : 43,
          h : 40
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 43,
          h : 40
        },
        sourceSize : {
          w : 43,
          h : 40
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-background-2.png" : {
        frame : {
          x : 305,
          y : 129,
          w : 74,
          h : 66
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 74,
          h : 66
        },
        sourceSize : {
          w : 74,
          h : 66
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-foreground.png" : {
        frame : {
          x : 50,
          y : 73,
          w : 157,
          h : 45
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 157,
          h : 45
        },
        sourceSize : {
          w : 157,
          h : 45
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-middleground.png" : {
        frame : {
          x : 296,
          y : 203,
          w : 94,
          h : 93
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 94,
          h : 93
        },
        sourceSize : {
          w : 94,
          h : 93
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-leaf-normal.png" : {
        frame : {
          x : 749,
          y : 31,
          w : 38,
          h : 39
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 38,
          h : 39
        },
        sourceSize : {
          w : 38,
          h : 39
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-leaf.png" : {
        frame : {
          x : 658,
          y : 31,
          w : 38,
          h : 39
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 38,
          h : 39
        },
        sourceSize : {
          w : 38,
          h : 39
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-normal.png" : {
        frame : {
          x : 783,
          y : 129,
          w : 82,
          h : 72
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 82,
          h : 72
        },
        sourceSize : {
          w : 82,
          h : 72
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background.png" : {
        frame : {
          x : 701,
          y : 129,
          w : 82,
          h : 72
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 82,
          h : 72
        },
        sourceSize : {
          w : 82,
          h : 72
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/ail.png" : {
        frame : {
          x : 770,
          y : 73,
          w : 60,
          h : 55
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 60,
          h : 55
        },
        sourceSize : {
          w : 60,
          h : 55
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/leaves.png" : {
        frame : {
          x : 0,
          y : 417,
          w : 180,
          h : 119
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 180,
          h : 119
        },
        sourceSize : {
          w : 180,
          h : 119
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/oignon.png" : {
        frame : {
          x : 711,
          y : 301,
          w : 74,
          h : 115
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 74,
          h : 115
        },
        sourceSize : {
          w : 74,
          h : 115
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/olive.png" : {
        frame : {
          x : 536,
          y : 129,
          w : 62,
          h : 71
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 62,
          h : 71
        },
        sourceSize : {
          w : 62,
          h : 71
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/orange.png" : {
        frame : {
          x : 598,
          y : 129,
          w : 103,
          h : 71
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 103,
          h : 71
        },
        sourceSize : {
          w : 103,
          h : 71
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-0-720.png",
      format : "RGBA8888",
      size : {
        w : 1004,
        h : 871
      },
      scale : "0.25",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-0-720.jpg",
      _alpha : "/assets/images/textures/atlas-0-720-alpha.jpg"
    }
  }, {
    frames : {
      "home/pepper/ground.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 374,
          h : 374
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 374,
          h : 374
        },
        sourceSize : {
          w : 374,
          h : 374
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/ground.png" : {
        frame : {
          x : 374,
          y : 0,
          w : 374,
          h : 374
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 374,
          h : 374
        },
        sourceSize : {
          w : 374,
          h : 374
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-1-720.png",
      format : "RGBA8888",
      size : {
        w : 748,
        h : 374
      },
      scale : "0.25",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-1-720.jpg",
      _alpha : "/assets/images/textures/atlas-1-720-alpha.jpg"
    }
  }];
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array} */
  mixin.exports = [{
    frames : {
      "about/branch-1.png" : {
        frame : {
          x : 0,
          y : 588,
          w : 228,
          h : 197
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 228,
          h : 197
        },
        sourceSize : {
          w : 228,
          h : 197
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/branch-2.png" : {
        frame : {
          x : 678,
          y : 394,
          w : 150,
          h : 183
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 150,
          h : 183
        },
        sourceSize : {
          w : 150,
          h : 183
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/branch-3.png" : {
        frame : {
          x : 768,
          y : 588,
          w : 204,
          h : 218
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 204,
          h : 218
        },
        sourceSize : {
          w : 204,
          h : 218
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/leaf-1.png" : {
        frame : {
          x : 349,
          y : 0,
          w : 56,
          h : 49
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 56,
          h : 49
        },
        sourceSize : {
          w : 56,
          h : 49
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/leaf-2.png" : {
        frame : {
          x : 685,
          y : 250,
          w : 121,
          h : 133
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 121,
          h : 133
        },
        sourceSize : {
          w : 121,
          h : 133
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-background-leaf.png" : {
        frame : {
          x : 1712,
          y : 394,
          w : 238,
          h : 194
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 238,
          h : 194
        },
        sourceSize : {
          w : 238,
          h : 194
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf-flat.png" : {
        frame : {
          x : 1342,
          y : 61,
          w : 106,
          h : 78
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 106,
          h : 78
        },
        sourceSize : {
          w : 106,
          h : 78
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf-normal.png" : {
        frame : {
          x : 1602,
          y : 61,
          w : 106,
          h : 78
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 106,
          h : 78
        },
        sourceSize : {
          w : 106,
          h : 78
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf.png" : {
        frame : {
          x : 347,
          y : 140,
          w : 121,
          h : 89
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 121,
          h : 89
        },
        sourceSize : {
          w : 121,
          h : 89
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-normal.png" : {
        frame : {
          x : 972,
          y : 588,
          w : 230,
          h : 224
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 230,
          h : 224
        },
        sourceSize : {
          w : 230,
          h : 224
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple.png" : {
        frame : {
          x : 360,
          y : 820,
          w : 251,
          h : 244
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 251,
          h : 244
        },
        sourceSize : {
          w : 251,
          h : 244
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/background.png" : {
        frame : {
          x : 1026,
          y : 61,
          w : 316,
          h : 76
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 316,
          h : 76
        },
        sourceSize : {
          w : 316,
          h : 76
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/cloud-1.png" : {
        frame : {
          x : 988,
          y : 0,
          w : 552,
          h : 61
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 552,
          h : 61
        },
        sourceSize : {
          w : 552,
          h : 61
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/cloud-2.png" : {
        frame : {
          x : 0,
          y : 61,
          w : 552,
          h : 61
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 552,
          h : 61
        },
        sourceSize : {
          w : 552,
          h : 61
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/glow.png" : {
        frame : {
          x : 1202,
          y : 588,
          w : 448,
          h : 228
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 448,
          h : 228
        },
        sourceSize : {
          w : 448,
          h : 228
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/hand-flat.png" : {
        frame : {
          x : 898,
          y : 1146,
          w : 386,
          h : 465
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 386,
          h : 465
        },
        sourceSize : {
          w : 386,
          h : 465
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/hand-normal.png" : {
        frame : {
          x : 1284,
          y : 1146,
          w : 386,
          h : 465
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 386,
          h : 465
        },
        sourceSize : {
          w : 386,
          h : 465
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-1.png" : {
        frame : {
          x : 239,
          y : 0,
          w : 39,
          h : 32
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 39,
          h : 32
        },
        sourceSize : {
          w : 39,
          h : 32
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-2.png" : {
        frame : {
          x : 0,
          y : 140,
          w : 274,
          h : 80
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 274,
          h : 80
        },
        sourceSize : {
          w : 274,
          h : 80
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-3.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 48,
          h : 9
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 48,
          h : 9
        },
        sourceSize : {
          w : 48,
          h : 9
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-4.png" : {
        frame : {
          x : 69,
          y : 0,
          w : 47,
          h : 19
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 47,
          h : 19
        },
        sourceSize : {
          w : 47,
          h : 19
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-5.png" : {
        frame : {
          x : 116,
          y : 0,
          w : 47,
          h : 19
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 47,
          h : 19
        },
        sourceSize : {
          w : 47,
          h : 19
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-6.png" : {
        frame : {
          x : 48,
          y : 0,
          w : 21,
          h : 10
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 21,
          h : 10
        },
        sourceSize : {
          w : 21,
          h : 10
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-7.png" : {
        frame : {
          x : 278,
          y : 0,
          w : 39,
          h : 32
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 39,
          h : 32
        },
        sourceSize : {
          w : 39,
          h : 32
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-8.png" : {
        frame : {
          x : 200,
          y : 0,
          w : 39,
          h : 30
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 39,
          h : 30
        },
        sourceSize : {
          w : 39,
          h : 30
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-9.png" : {
        frame : {
          x : 317,
          y : 0,
          w : 32,
          h : 38
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 32,
          h : 38
        },
        sourceSize : {
          w : 32,
          h : 38
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/3roundleafs.png" : {
        frame : {
          x : 1799,
          y : 588,
          w : 165,
          h : 232
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 165,
          h : 232
        },
        sourceSize : {
          w : 165,
          h : 232
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/5leafs-branche.png" : {
        frame : {
          x : 1136,
          y : 394,
          w : 288,
          h : 193
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 288,
          h : 193
        },
        sourceSize : {
          w : 288,
          h : 193
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/balls-red-green.png" : {
        frame : {
          x : 562,
          y : 0,
          w : 108,
          h : 50
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 108,
          h : 50
        },
        sourceSize : {
          w : 108,
          h : 50
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/branch-ball.png" : {
        frame : {
          x : 1243,
          y : 250,
          w : 148,
          h : 136
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 148,
          h : 136
        },
        sourceSize : {
          w : 148,
          h : 136
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/casserole.png" : {
        frame : {
          x : 485,
          y : 588,
          w : 283,
          h : 211
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 283,
          h : 211
        },
        sourceSize : {
          w : 283,
          h : 211
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/long-leaf.png" : {
        frame : {
          x : 452,
          y : 394,
          w : 226,
          h : 179
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 226,
          h : 179
        },
        sourceSize : {
          w : 226,
          h : 179
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/mini-leaf-orange.png" : {
        frame : {
          x : 847,
          y : 0,
          w : 141,
          h : 59
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 141,
          h : 59
        },
        sourceSize : {
          w : 141,
          h : 59
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/mini-leaf.png" : {
        frame : {
          x : 552,
          y : 61,
          w : 59,
          h : 62
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 59,
          h : 62
        },
        sourceSize : {
          w : 59,
          h : 62
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/red-ball.png" : {
        frame : {
          x : 476,
          y : 0,
          w : 86,
          h : 50
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 86,
          h : 50
        },
        sourceSize : {
          w : 86,
          h : 50
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/spoon.png" : {
        frame : {
          x : 949,
          y : 820,
          w : 300,
          h : 315
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 300,
          h : 315
        },
        sourceSize : {
          w : 300,
          h : 315
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/tomato.png" : {
        frame : {
          x : 831,
          y : 61,
          w : 86,
          h : 71
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 86,
          h : 71
        },
        sourceSize : {
          w : 86,
          h : 71
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/5leaf-branch.png" : {
        frame : {
          x : 1424,
          y : 394,
          w : 288,
          h : 193
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 288,
          h : 193
        },
        sourceSize : {
          w : 288,
          h : 193
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/ail.png" : {
        frame : {
          x : 783,
          y : 140,
          w : 99,
          h : 91
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 99,
          h : 91
        },
        sourceSize : {
          w : 99,
          h : 91
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/branch-olive.png" : {
        frame : {
          x : 1076,
          y : 250,
          w : 167,
          h : 136
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 167,
          h : 136
        },
        sourceSize : {
          w : 167,
          h : 136
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/houx.png" : {
        frame : {
          x : 806,
          y : 250,
          w : 121,
          h : 133
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 121,
          h : 133
        },
        sourceSize : {
          w : 121,
          h : 133
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/left-mini-leaf.png" : {
        frame : {
          x : 319,
          y : 250,
          w : 232,
          h : 131
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 232,
          h : 131
        },
        sourceSize : {
          w : 232,
          h : 131
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/medium-leaf.png" : {
        frame : {
          x : 1765,
          y : 140,
          w : 126,
          h : 104
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 126,
          h : 104
        },
        sourceSize : {
          w : 126,
          h : 104
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/mini-leaf.png" : {
        frame : {
          x : 1289,
          y : 140,
          w : 298,
          h : 92
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 298,
          h : 92
        },
        sourceSize : {
          w : 298,
          h : 92
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/oignon.png" : {
        frame : {
          x : 828,
          y : 394,
          w : 120,
          h : 186
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 120,
          h : 186
        },
        sourceSize : {
          w : 120,
          h : 186
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/olive.png" : {
        frame : {
          x : 274,
          y : 140,
          w : 73,
          h : 84
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 73,
          h : 84
        },
        sourceSize : {
          w : 73,
          h : 84
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/orange.png" : {
        frame : {
          x : 163,
          y : 394,
          w : 194,
          h : 149
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 194,
          h : 149
        },
        sourceSize : {
          w : 194,
          h : 149
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/persil.png" : {
        frame : {
          x : 1622,
          y : 140,
          w : 143,
          h : 101
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 143,
          h : 101
        },
        sourceSize : {
          w : 143,
          h : 101
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/twig.png" : {
        frame : {
          x : 407,
          y : 1146,
          w : 491,
          h : 351
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 491,
          h : 351
        },
        sourceSize : {
          w : 491,
          h : 351
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/dots.png" : {
        frame : {
          x : 179,
          y : 0,
          w : 21,
          h : 26
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 21,
          h : 26
        },
        sourceSize : {
          w : 21,
          h : 26
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-1.png" : {
        frame : {
          x : 611,
          y : 61,
          w : 74,
          h : 62
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 74,
          h : 62
        },
        sourceSize : {
          w : 74,
          h : 62
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-2.png" : {
        frame : {
          x : 765,
          y : 0,
          w : 82,
          h : 56
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 82,
          h : 56
        },
        sourceSize : {
          w : 82,
          h : 56
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-3.png" : {
        frame : {
          x : 405,
          y : 0,
          w : 71,
          h : 50
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 71,
          h : 50
        },
        sourceSize : {
          w : 71,
          h : 50
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-4.png" : {
        frame : {
          x : 670,
          y : 0,
          w : 63,
          h : 52
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 63,
          h : 52
        },
        sourceSize : {
          w : 63,
          h : 52
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta.png" : {
        frame : {
          x : 882,
          y : 140,
          w : 294,
          h : 92
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 294,
          h : 92
        },
        sourceSize : {
          w : 294,
          h : 92
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/glow.png" : {
        frame : {
          x : 1513,
          y : 820,
          w : 394,
          h : 326
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 394,
          h : 326
        },
        sourceSize : {
          w : 394,
          h : 326
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-1.png" : {
        frame : {
          x : 1176,
          y : 140,
          w : 113,
          h : 92
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 113,
          h : 92
        },
        sourceSize : {
          w : 113,
          h : 92
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-2.png" : {
        frame : {
          x : 551,
          y : 250,
          w : 134,
          h : 131
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 134,
          h : 131
        },
        sourceSize : {
          w : 134,
          h : 131
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-3.png" : {
        frame : {
          x : 793,
          y : 61,
          w : 38,
          h : 64
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 38,
          h : 64
        },
        sourceSize : {
          w : 38,
          h : 64
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-4.png" : {
        frame : {
          x : 163,
          y : 0,
          w : 16,
          h : 19
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 16,
          h : 19
        },
        sourceSize : {
          w : 16,
          h : 19
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaves.png" : {
        frame : {
          x : 917,
          y : 61,
          w : 109,
          h : 72
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 109,
          h : 72
        },
        sourceSize : {
          w : 109,
          h : 72
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-1-face.png" : {
        frame : {
          x : 1249,
          y : 820,
          w : 264,
          h : 315
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 264,
          h : 315
        },
        sourceSize : {
          w : 264,
          h : 315
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-1.png" : {
        frame : {
          x : 611,
          y : 820,
          w : 222,
          h : 265
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 222,
          h : 265
        },
        sourceSize : {
          w : 222,
          h : 265
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-2.png" : {
        frame : {
          x : 228,
          y : 588,
          w : 257,
          h : 208
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 257,
          h : 208
        },
        sourceSize : {
          w : 257,
          h : 208
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-slices.png" : {
        frame : {
          x : 0,
          y : 250,
          w : 319,
          h : 112
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 319,
          h : 112
        },
        sourceSize : {
          w : 319,
          h : 112
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/glow.png" : {
        frame : {
          x : 0,
          y : 1146,
          w : 407,
          h : 337
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 407,
          h : 337
        },
        sourceSize : {
          w : 407,
          h : 337
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/knife-flat.png" : {
        frame : {
          x : 1670,
          y : 1146,
          w : 98,
          h : 581
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 98,
          h : 581
        },
        sourceSize : {
          w : 98,
          h : 581
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/knife-normal.png" : {
        frame : {
          x : 1768,
          y : 1146,
          w : 98,
          h : 581
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 98,
          h : 581
        },
        sourceSize : {
          w : 98,
          h : 581
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-1.png" : {
        frame : {
          x : 1587,
          y : 140,
          w : 35,
          h : 99
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 35,
          h : 99
        },
        sourceSize : {
          w : 35,
          h : 99
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-2.png" : {
        frame : {
          x : 733,
          y : 0,
          w : 32,
          h : 53
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 32,
          h : 53
        },
        sourceSize : {
          w : 32,
          h : 53
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-left.png" : {
        frame : {
          x : 1950,
          y : 394,
          w : 67,
          h : 194
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 67,
          h : 194
        },
        sourceSize : {
          w : 67,
          h : 194
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-right.png" : {
        frame : {
          x : 357,
          y : 394,
          w : 95,
          h : 178
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 95,
          h : 178
        },
        sourceSize : {
          w : 95,
          h : 178
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-foreground.png" : {
        frame : {
          x : 685,
          y : 61,
          w : 108,
          h : 64
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 108,
          h : 64
        },
        sourceSize : {
          w : 108,
          h : 64
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-middleground.png" : {
        frame : {
          x : 833,
          y : 820,
          w : 116,
          h : 280
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 116,
          h : 280
        },
        sourceSize : {
          w : 116,
          h : 280
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-background-1.png" : {
        frame : {
          x : 1708,
          y : 61,
          w : 85,
          h : 79
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 85,
          h : 79
        },
        sourceSize : {
          w : 85,
          h : 79
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-background-2.png" : {
        frame : {
          x : 927,
          y : 250,
          w : 149,
          h : 133
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 149,
          h : 133
        },
        sourceSize : {
          w : 149,
          h : 133
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-foreground.png" : {
        frame : {
          x : 468,
          y : 140,
          w : 315,
          h : 89
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 315,
          h : 89
        },
        sourceSize : {
          w : 315,
          h : 89
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-middleground.png" : {
        frame : {
          x : 948,
          y : 394,
          w : 188,
          h : 186
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 188,
          h : 186
        },
        sourceSize : {
          w : 188,
          h : 186
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-leaf-normal.png" : {
        frame : {
          x : 1525,
          y : 61,
          w : 77,
          h : 78
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 77,
          h : 78
        },
        sourceSize : {
          w : 77,
          h : 78
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-leaf.png" : {
        frame : {
          x : 1448,
          y : 61,
          w : 77,
          h : 78
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 77,
          h : 78
        },
        sourceSize : {
          w : 77,
          h : 78
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-normal.png" : {
        frame : {
          x : 0,
          y : 394,
          w : 163,
          h : 144
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 163,
          h : 144
        },
        sourceSize : {
          w : 163,
          h : 144
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background.png" : {
        frame : {
          x : 1722,
          y : 250,
          w : 163,
          h : 144
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 163,
          h : 144
        },
        sourceSize : {
          w : 163,
          h : 144
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/ail.png" : {
        frame : {
          x : 1891,
          y : 140,
          w : 120,
          h : 110
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 120,
          h : 110
        },
        sourceSize : {
          w : 120,
          h : 110
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/leaves.png" : {
        frame : {
          x : 0,
          y : 820,
          w : 360,
          h : 237
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 360,
          h : 237
        },
        sourceSize : {
          w : 360,
          h : 237
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/oignon.png" : {
        frame : {
          x : 1650,
          y : 588,
          w : 149,
          h : 230
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 149,
          h : 230
        },
        sourceSize : {
          w : 149,
          h : 230
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/olive.png" : {
        frame : {
          x : 1391,
          y : 250,
          w : 125,
          h : 143
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 125,
          h : 143
        },
        sourceSize : {
          w : 125,
          h : 143
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/orange.png" : {
        frame : {
          x : 1516,
          y : 250,
          w : 206,
          h : 143
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 206,
          h : 143
        },
        sourceSize : {
          w : 206,
          h : 143
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-0-1440.png",
      format : "RGBA8888",
      size : {
        w : 2017,
        h : 1727
      },
      scale : "0.5",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-0-1440.jpg",
      _alpha : "/assets/images/textures/atlas-0-1440-alpha.jpg"
    }
  }, {
    frames : {
      "home/pepper/ground.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 747,
          h : 748
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 747,
          h : 748
        },
        sourceSize : {
          w : 747,
          h : 748
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/ground.png" : {
        frame : {
          x : 747,
          y : 0,
          w : 747,
          h : 748
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 747,
          h : 748
        },
        sourceSize : {
          w : 747,
          h : 748
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-1-1440.png",
      format : "RGBA8888",
      size : {
        w : 1494,
        h : 748
      },
      scale : "0.5",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-1-1440.jpg",
      _alpha : "/assets/images/textures/atlas-1-1440-alpha.jpg"
    }
  }];
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array} */
  mixin.exports = [{
    frames : {
      "about/branch-1.png" : {
        frame : {
          x : 476,
          y : 2233,
          w : 456,
          h : 393
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 456,
          h : 393
        },
        sourceSize : {
          w : 456,
          h : 393
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/branch-2.png" : {
        frame : {
          x : 1681,
          y : 1480,
          w : 300,
          h : 366
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 300,
          h : 366
        },
        sourceSize : {
          w : 300,
          h : 366
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/branch-3.png" : {
        frame : {
          x : 0,
          y : 2655,
          w : 407,
          h : 436
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 407,
          h : 436
        },
        sourceSize : {
          w : 407,
          h : 436
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/leaf-1.png" : {
        frame : {
          x : 695,
          y : 0,
          w : 112,
          h : 97
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 112,
          h : 97
        },
        sourceSize : {
          w : 112,
          h : 97
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "about/leaf-2.png" : {
        frame : {
          x : 0,
          y : 1195,
          w : 242,
          h : 265
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 242,
          h : 265
        },
        sourceSize : {
          w : 242,
          h : 265
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-background-leaf.png" : {
        frame : {
          x : 0,
          y : 2233,
          w : 476,
          h : 387
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 476,
          h : 387
        },
        sourceSize : {
          w : 476,
          h : 387
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf-flat.png" : {
        frame : {
          x : 1156,
          y : 380,
          w : 212,
          h : 156
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 212,
          h : 156
        },
        sourceSize : {
          w : 212,
          h : 156
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf-normal.png" : {
        frame : {
          x : 1368,
          y : 380,
          w : 212,
          h : 156
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 212,
          h : 156
        },
        sourceSize : {
          w : 212,
          h : 156
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-leaf.png" : {
        frame : {
          x : 1322,
          y : 538,
          w : 241,
          h : 178
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 241,
          h : 178
        },
        sourceSize : {
          w : 241,
          h : 178
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple-normal.png" : {
        frame : {
          x : 407,
          y : 2655,
          w : 460,
          h : 447
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 460,
          h : 447
        },
        sourceSize : {
          w : 460,
          h : 447
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/apple.png" : {
        frame : {
          x : 1347,
          y : 3111,
          w : 502,
          h : 488
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 502,
          h : 488
        },
        sourceSize : {
          w : 502,
          h : 488
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/background.png" : {
        frame : {
          x : 218,
          y : 380,
          w : 632,
          h : 152
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 632,
          h : 152
        },
        sourceSize : {
          w : 632,
          h : 152
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/cloud-1.png" : {
        frame : {
          x : 0,
          y : 117,
          w : 1103,
          h : 122
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 1103,
          h : 122
        },
        sourceSize : {
          w : 1103,
          h : 122
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/cloud-2.png" : {
        frame : {
          x : 0,
          y : 239,
          w : 1103,
          h : 122
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 1103,
          h : 122
        },
        sourceSize : {
          w : 1103,
          h : 122
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/glow.png" : {
        frame : {
          x : 867,
          y : 2655,
          w : 895,
          h : 456
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 895,
          h : 456
        },
        sourceSize : {
          w : 895,
          h : 456
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-1.png" : {
        frame : {
          x : 475,
          y : 0,
          w : 78,
          h : 63
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 78,
          h : 63
        },
        sourceSize : {
          w : 78,
          h : 63
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-2.png" : {
        frame : {
          x : 0,
          y : 538,
          w : 547,
          h : 160
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 547,
          h : 160
        },
        sourceSize : {
          w : 547,
          h : 160
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-3.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 96,
          h : 17
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 96,
          h : 17
        },
        sourceSize : {
          w : 96,
          h : 17
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-4.png" : {
        frame : {
          x : 138,
          y : 0,
          w : 93,
          h : 37
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 93,
          h : 37
        },
        sourceSize : {
          w : 93,
          h : 37
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-5.png" : {
        frame : {
          x : 262,
          y : 0,
          w : 93,
          h : 37
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 93,
          h : 37
        },
        sourceSize : {
          w : 93,
          h : 37
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-6.png" : {
        frame : {
          x : 96,
          y : 0,
          w : 42,
          h : 19
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 42,
          h : 19
        },
        sourceSize : {
          w : 42,
          h : 19
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-7.png" : {
        frame : {
          x : 553,
          y : 0,
          w : 78,
          h : 63
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 78,
          h : 63
        },
        sourceSize : {
          w : 78,
          h : 63
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-8.png" : {
        frame : {
          x : 397,
          y : 0,
          w : 78,
          h : 59
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 78,
          h : 59
        },
        sourceSize : {
          w : 78,
          h : 59
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/leaf-9.png" : {
        frame : {
          x : 631,
          y : 0,
          w : 64,
          h : 75
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 64,
          h : 75
        },
        sourceSize : {
          w : 64,
          h : 75
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/3roundleafs.png" : {
        frame : {
          x : 297,
          y : 3111,
          w : 330,
          h : 464
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 330,
          h : 464
        },
        sourceSize : {
          w : 330,
          h : 464
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/5leafs-branche.png" : {
        frame : {
          x : 1191,
          y : 1846,
          w : 576,
          h : 386
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 576,
          h : 386
        },
        sourceSize : {
          w : 576,
          h : 386
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/balls-red-green.png" : {
        frame : {
          x : 978,
          y : 0,
          w : 215,
          h : 100
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 215,
          h : 100
        },
        sourceSize : {
          w : 215,
          h : 100
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/branch-ball.png" : {
        frame : {
          x : 539,
          y : 1195,
          w : 295,
          h : 271
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 295,
          h : 271
        },
        sourceSize : {
          w : 295,
          h : 271
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/casserole.png" : {
        frame : {
          x : 1445,
          y : 2233,
          w : 566,
          h : 422
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 566,
          h : 422
        },
        sourceSize : {
          w : 566,
          h : 422
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/long-leaf.png" : {
        frame : {
          x : 1230,
          y : 1480,
          w : 451,
          h : 358
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 451,
          h : 358
        },
        sourceSize : {
          w : 451,
          h : 358
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/mini-leaf-orange.png" : {
        frame : {
          x : 1686,
          y : 0,
          w : 281,
          h : 117
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 281,
          h : 117
        },
        sourceSize : {
          w : 281,
          h : 117
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/mini-leaf.png" : {
        frame : {
          x : 1103,
          y : 239,
          w : 118,
          h : 124
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 118,
          h : 124
        },
        sourceSize : {
          w : 118,
          h : 124
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/red-ball.png" : {
        frame : {
          x : 807,
          y : 0,
          w : 171,
          h : 99
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 171,
          h : 99
        },
        sourceSize : {
          w : 171,
          h : 99
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/tomato.png" : {
        frame : {
          x : 1660,
          y : 239,
          w : 171,
          h : 141
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 171,
          h : 141
        },
        sourceSize : {
          w : 171,
          h : 141
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/5leaf-branch.png" : {
        frame : {
          x : 615,
          y : 1846,
          w : 576,
          h : 386
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 576,
          h : 386
        },
        sourceSize : {
          w : 576,
          h : 386
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/ail.png" : {
        frame : {
          x : 1563,
          y : 538,
          w : 198,
          h : 181
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 198,
          h : 181
        },
        sourceSize : {
          w : 198,
          h : 181
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/branch-olive.png" : {
        frame : {
          x : 834,
          y : 1195,
          w : 333,
          h : 272
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 333,
          h : 272
        },
        sourceSize : {
          w : 333,
          h : 272
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/houx.png" : {
        frame : {
          x : 1608,
          y : 930,
          w : 242,
          h : 265
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 242,
          h : 265
        },
        sourceSize : {
          w : 242,
          h : 265
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/left-mini-leaf.png" : {
        frame : {
          x : 877,
          y : 930,
          w : 463,
          h : 261
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 463,
          h : 261
        },
        sourceSize : {
          w : 463,
          h : 261
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/medium-leaf.png" : {
        frame : {
          x : 1536,
          y : 722,
          w : 251,
          h : 208
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 251,
          h : 208
        },
        sourceSize : {
          w : 251,
          h : 208
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/mini-leaf.png" : {
        frame : {
          x : 0,
          y : 722,
          w : 595,
          h : 184
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 595,
          h : 184
        },
        sourceSize : {
          w : 595,
          h : 184
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/oignon.png" : {
        frame : {
          x : 0,
          y : 1846,
          w : 239,
          h : 371
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 239,
          h : 371
        },
        sourceSize : {
          w : 239,
          h : 371
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/olive.png" : {
        frame : {
          x : 547,
          y : 538,
          w : 146,
          h : 167
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 146,
          h : 167
        },
        sourceSize : {
          w : 146,
          h : 167
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/orange.png" : {
        frame : {
          x : 652,
          y : 1480,
          w : 388,
          h : 297
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 388,
          h : 297
        },
        sourceSize : {
          w : 388,
          h : 297
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/persil.png" : {
        frame : {
          x : 1251,
          y : 722,
          w : 285,
          h : 202
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 285,
          h : 202
        },
        sourceSize : {
          w : 285,
          h : 202
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/dots.png" : {
        frame : {
          x : 355,
          y : 0,
          w : 42,
          h : 52
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 42,
          h : 52
        },
        sourceSize : {
          w : 42,
          h : 52
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-1.png" : {
        frame : {
          x : 1221,
          y : 239,
          w : 148,
          h : 124
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 148,
          h : 124
        },
        sourceSize : {
          w : 148,
          h : 124
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-2.png" : {
        frame : {
          x : 1523,
          y : 0,
          w : 163,
          h : 112
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 163,
          h : 112
        },
        sourceSize : {
          w : 163,
          h : 112
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-3.png" : {
        frame : {
          x : 1193,
          y : 0,
          w : 142,
          h : 100
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 142,
          h : 100
        },
        sourceSize : {
          w : 142,
          h : 100
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta-slice-4.png" : {
        frame : {
          x : 1335,
          y : 0,
          w : 125,
          h : 103
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 125,
          h : 103
        },
        sourceSize : {
          w : 125,
          h : 103
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/feta.png" : {
        frame : {
          x : 595,
          y : 722,
          w : 587,
          h : 184
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 587,
          h : 184
        },
        sourceSize : {
          w : 587,
          h : 184
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-1.png" : {
        frame : {
          x : 1761,
          y : 538,
          w : 225,
          h : 184
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 225,
          h : 184
        },
        sourceSize : {
          w : 225,
          h : 184
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-2.png" : {
        frame : {
          x : 1340,
          y : 930,
          w : 268,
          h : 261
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 268,
          h : 261
        },
        sourceSize : {
          w : 268,
          h : 261
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-3.png" : {
        frame : {
          x : 1584,
          y : 239,
          w : 76,
          h : 128
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 76,
          h : 128
        },
        sourceSize : {
          w : 76,
          h : 128
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaf-4.png" : {
        frame : {
          x : 231,
          y : 0,
          w : 31,
          h : 37
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 31,
          h : 37
        },
        sourceSize : {
          w : 31,
          h : 37
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/leaves.png" : {
        frame : {
          x : 0,
          y : 380,
          w : 218,
          h : 143
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 218,
          h : 143
        },
        sourceSize : {
          w : 218,
          h : 143
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-2.png" : {
        frame : {
          x : 932,
          y : 2233,
          w : 513,
          h : 415
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 513,
          h : 415
        },
        sourceSize : {
          w : 513,
          h : 415
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-slices.png" : {
        frame : {
          x : 240,
          y : 930,
          w : 637,
          h : 223
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 637,
          h : 223
        },
        sourceSize : {
          w : 637,
          h : 223
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-1.png" : {
        frame : {
          x : 1182,
          y : 722,
          w : 69,
          h : 197
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 69,
          h : 197
        },
        sourceSize : {
          w : 69,
          h : 197
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-2.png" : {
        frame : {
          x : 1460,
          y : 0,
          w : 63,
          h : 105
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 63,
          h : 105
        },
        sourceSize : {
          w : 63,
          h : 105
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-left.png" : {
        frame : {
          x : 1767,
          y : 1846,
          w : 133,
          h : 387
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 133,
          h : 387
        },
        sourceSize : {
          w : 133,
          h : 387
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-background-right.png" : {
        frame : {
          x : 1040,
          y : 1480,
          w : 190,
          h : 356
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 190,
          h : 356
        },
        sourceSize : {
          w : 190,
          h : 356
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-foreground.png" : {
        frame : {
          x : 1369,
          y : 239,
          w : 215,
          h : 127
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 215,
          h : 127
        },
        sourceSize : {
          w : 215,
          h : 127
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-background-1.png" : {
        frame : {
          x : 1580,
          y : 380,
          w : 170,
          h : 158
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 170,
          h : 158
        },
        sourceSize : {
          w : 170,
          h : 158
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-background-2.png" : {
        frame : {
          x : 242,
          y : 1195,
          w : 297,
          h : 265
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 297,
          h : 265
        },
        sourceSize : {
          w : 297,
          h : 265
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-foreground.png" : {
        frame : {
          x : 693,
          y : 538,
          w : 629,
          h : 178
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 629,
          h : 178
        },
        sourceSize : {
          w : 629,
          h : 178
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-tomatoes-middleground.png" : {
        frame : {
          x : 239,
          y : 1846,
          w : 376,
          h : 372
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 376,
          h : 372
        },
        sourceSize : {
          w : 376,
          h : 372
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-leaf-normal.png" : {
        frame : {
          x : 1003,
          y : 380,
          w : 153,
          h : 156
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 153,
          h : 156
        },
        sourceSize : {
          w : 153,
          h : 156
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-leaf.png" : {
        frame : {
          x : 850,
          y : 380,
          w : 153,
          h : 156
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 153,
          h : 156
        },
        sourceSize : {
          w : 153,
          h : 156
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background-normal.png" : {
        frame : {
          x : 0,
          y : 1480,
          w : 326,
          h : 288
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 326,
          h : 288
        },
        sourceSize : {
          w : 326,
          h : 288
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/tomatoes-background.png" : {
        frame : {
          x : 326,
          y : 1480,
          w : 326,
          h : 288
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 326,
          h : 288
        },
        sourceSize : {
          w : 326,
          h : 288
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/ail.png" : {
        frame : {
          x : 0,
          y : 930,
          w : 240,
          h : 219
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 240,
          h : 219
        },
        sourceSize : {
          w : 240,
          h : 219
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/leaves.png" : {
        frame : {
          x : 627,
          y : 3111,
          w : 720,
          h : 474
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 720,
          h : 474
        },
        sourceSize : {
          w : 720,
          h : 474
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/oignon.png" : {
        frame : {
          x : 0,
          y : 3111,
          w : 297,
          h : 459
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 297,
          h : 459
        },
        sourceSize : {
          w : 297,
          h : 459
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/olive.png" : {
        frame : {
          x : 1167,
          y : 1195,
          w : 249,
          h : 285
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 249,
          h : 285
        },
        sourceSize : {
          w : 249,
          h : 285
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "order/orange.png" : {
        frame : {
          x : 1416,
          y : 1195,
          w : 411,
          h : 285
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 411,
          h : 285
        },
        sourceSize : {
          w : 411,
          h : 285
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-0-2880.png",
      format : "RGBA8888",
      size : {
        w : 2011,
        h : 3599
      },
      scale : "1",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-0-2880.jpg",
      _alpha : "/assets/images/textures/atlas-0-2880-alpha.jpg"
    }
  }, {
    frames : {
      "home/apple/hand-flat.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 771,
          h : 929
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 771,
          h : 929
        },
        sourceSize : {
          w : 771,
          h : 929
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/apple/hand-normal.png" : {
        frame : {
          x : 771,
          y : 0,
          w : 771,
          h : 929
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 771,
          h : 929
        },
        sourceSize : {
          w : 771,
          h : 929
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/intro/spoon.png" : {
        frame : {
          x : 0,
          y : 929,
          w : 600,
          h : 630
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 600,
          h : 630
        },
        sourceSize : {
          w : 600,
          h : 630
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/menu/twig.png" : {
        frame : {
          x : 600,
          y : 929,
          w : 982,
          h : 702
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 982,
          h : 702
        },
        sourceSize : {
          w : 982,
          h : 702
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/glow.png" : {
        frame : {
          x : 0,
          y : 1631,
          w : 787,
          h : 652
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 787,
          h : 652
        },
        sourceSize : {
          w : 787,
          h : 652
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-1-face.png" : {
        frame : {
          x : 787,
          y : 1631,
          w : 527,
          h : 629
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 527,
          h : 629
        },
        sourceSize : {
          w : 527,
          h : 629
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/pepper/pepper-1.png" : {
        frame : {
          x : 1314,
          y : 1631,
          w : 443,
          h : 530
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 443,
          h : 530
        },
        sourceSize : {
          w : 443,
          h : 530
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/glow.png" : {
        frame : {
          x : 0,
          y : 2283,
          w : 814,
          h : 674
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 814,
          h : 674
        },
        sourceSize : {
          w : 814,
          h : 674
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/knife-flat.png" : {
        frame : {
          x : 814,
          y : 2283,
          w : 195,
          h : 1162
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 195,
          h : 1162
        },
        sourceSize : {
          w : 195,
          h : 1162
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/knife-normal.png" : {
        frame : {
          x : 1009,
          y : 2283,
          w : 195,
          h : 1162
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 195,
          h : 1162
        },
        sourceSize : {
          w : 195,
          h : 1162
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/slide-3-leaves-middleground.png" : {
        frame : {
          x : 1204,
          y : 2283,
          w : 231,
          h : 560
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 231,
          h : 560
        },
        sourceSize : {
          w : 231,
          h : 560
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-1-2880.png",
      format : "RGBA8888",
      size : {
        w : 1757,
        h : 3445
      },
      scale : "1",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-1-2880.jpg",
      _alpha : "/assets/images/textures/atlas-1-2880-alpha.jpg"
    }
  }, {
    frames : {
      "home/pepper/ground.png" : {
        frame : {
          x : 0,
          y : 0,
          w : 1494,
          h : 1496
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 1494,
          h : 1496
        },
        sourceSize : {
          w : 1494,
          h : 1496
        },
        pivot : {
          x : .5,
          y : .5
        }
      },
      "home/tomatoes/ground.png" : {
        frame : {
          x : 0,
          y : 1496,
          w : 1494,
          h : 1496
        },
        rotated : false,
        trimmed : false,
        spriteSourceSize : {
          x : 0,
          y : 0,
          w : 1494,
          h : 1496
        },
        sourceSize : {
          w : 1494,
          h : 1496
        },
        pivot : {
          x : .5,
          y : .5
        }
      }
    },
    meta : {
      app : "https://www.codeandweb.com/texturepacker",
      version : "1.0",
      image : "atlas-2-2880.png",
      format : "RGBA8888",
      size : {
        w : 1494,
        h : 2992
      },
      scale : "1",
      smartupdate : "$TexturePacker:SmartUpdate:04bed886b6248ad00e1ab3e00a12a555:bd3462b1fe591804692788c6e434f3cb:d452727b3b7d02918ab36511f0fe877b$",
      _image : "/assets/images/textures/atlas-2-2880.jpg",
      _alpha : "/assets/images/textures/atlas-2-2880-alpha.jpg"
    }
  }];
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '    <div id="progress-bar" aria-hidden="true" class="u-fixed u-pointer-none c-frame__content">     <div class="u-absolute u-fit u-pos-tl"            style="backface-visibility:hidden; transform: translateZ(0); background-color:rgba({{Math.round(backgroundColor[0])}},{{Math.round(backgroundColor[1])}},{{Math.round(backgroundColor[2])}},1)">        <div class="u-fit" style="opacity: 0.4; background: url(\'{{cdnRoot}}/assets/images/bg-pattern.png\') 0 0"></div>    </div>    <div class="c-progress-bar-bg u-hide@sm"></div>    <div class="c-progress-bar u-hide@sm" style="transform: scaleX({{progress}}) translateZ(0)"></div> </div><div id="webgl-container" role="img" aria-label="{{currentSlideLabel}}"      class="u-pointer-none u-fixed u-pos-tl  u-viewport-fit js-scene"     $style="height:{{winHeight}}px"></div><div id="dom-container" class=" u-fixed u-viewport-fit u-pos-tl js-content"            $style="height:{{winHeight}}px">    <div current-index="{{currentSlideIndex}}"                 class="u-block u-force-3d u-absolute c-frame__content"                 selector-class="u-block u-force-3d u-fit-h">        <template is="light-core-template" repeat="{{i, slide in slides}}">                        <template is="light-core-template" if="{{slide.type === \'medium\'}}">                <div class="{{currentSlideIndex==$index?\'is-active is-home\':currentSlideIndex<$index?\'is-next\':\'is-prev\'}} u-align-center c-slide u-block u-align-center u-absolute u-fit-h u-fit-w u-pos-tl o-wrapper--valign u-align-center"  style="transform: translateZ(0); z-index: {{$index}}">                    <div class="u-inline-block u-valign-middle">                        <h2 class="u-vacuum  u-color--brand u-marg-b-md "                             style="padding: {{isMobile?\'30px 15px\':0}}">                            <app-multiline delay="{{$index==currentSlideIndex?0.3:0.0}}"                                             direction="{{direction}}" class="u-block u-relative"                                            word-class="c-title-intro">                                {{@content[0].intro_title}}                            </app-multiline>                        </h2>                    </div>                </div>            </template>            <template is="light-core-template" if="{{slide.type === \'large\'}}">                <div class="{{currentSlideIndex==$index?\'is-active is-home\':currentSlideIndex<$index?\'is-next\':\'is-prev\'}}                             u-align-center c-slide u-block u-align-center u-absolute u-fit-h u-fit-w u-pos-tl o-wrapper--valign u-align-center"                          style="transform: translateZ(0); z-index: {{$index}};padding:{{isMobile?\'30px 15px\':0}}">                    <div class="u-inline-block u-relative  u-valign-middle">                        <h2 class="c-title-giga u-color--brand u-marg-b-md c-anim--slide-y c-anim--{{direction==1?0:3}}"                            style="line-height: 0.7">                            {{@content[0].menu_title}}                        </h2>                                                <a href="/food" class="c-link " >                            <span class="u-inline-block c-text--small u-color--brand c-anim--slide-y c-anim--2 u-marg-b-xs                                        | u-marg-b-sm@sm">Discover now</span>                            <span class="u-block u-relative u-align-center u-fit-w c-anim--slide-y c-anim--{{direction==1?3:1}}">                                <span class="u-relative  u-inline-block c-losange c-product__number o-wrapper--valign">                                    <app-trigger active="{{currentSlideIndex==$index}}" class="u-inline-block u-fit u-relative o-wrapper--valign">                                        <div   ratio="0.3" class="c-losange__shape js-trigger-parallax"></div>                                        <span  ratio="0.2" class="c-losange__plus u-inline-block u-valign-middle js-trigger-parallax">                                    </app-trigger>                                </span>                            </span>                        </a>                    </div>                </div>            </template>            <template is="light-core-template" if="{{slide.type === \'small\'}}">                <div  class="c-slide u-pos-tr u-w1of2 u-block u-force-3d u-h10of10 u-absolute o-wrapper--valign u-align-center                             | u-fit-w@sm u-h5of10@sm                             | {{currentSlideIndex==$index?\'is-active is-home\':currentSlideIndex<$index?\'is-next\':\'is-prev\'}}"                        style="transform: translateZ(0); z-index: {{$index}}; padding:{{isMobile?\'30px 15px\':0}}">                    <div class="c-link u-inline-block u-valign-middle u-w3of4 u-relative                                | u-fit-w@sm" >                        <div class="c-home__panel-background"></div>                        <scroll-object  set-active="false" class="u-block u-relative"                                         _position="{{[0, i * height - scroll]}}">                            <scroll-object  set-active="false" ratio="{{direction == 1 ? 0.25 : 0.15}}"                                             class="u-inline-block u-marg-b-sm u-relative">                                <h3 class="c-text--small u-color--brand c-anim--slide-y c-anim--{{direction==1?0:3}}">. 0{{$index+1}} .</h3>                            </scroll-object>                            <br/>                            <scroll-object class="u-relative u-block" set-active="false"                                           ratio="{{direction == 1 ? 0.2 : 0.2}}" >                                <h2 class="u-relative u-vacuum u-color--brand u-marg-b-md">                                    <app-multiline delay="{{$index==currentSlideIndex?0.3:0.0}}"                                                    direction="{{direction}}" class="u-block u-relative"                                                   word-class="c-title--3">                                        {{@content[0].slides[$index-1].title}}                                    </app-multiline>                                </h2>                            </scroll-object>                            <scroll-object  set-active="false" ratio="{{direction == 1 ? 0.15 : 0.25}}"                                             class="u-inline-block u-relative">                                <div class="c-scroll-btn__square c-anim--slide-y c-anim--{{direction==1?5:0}}"></div>                            </scroll-object>                        </scroll-object>                    </div>                </div>            </template>        </template>    </div>        </div>        <div class="c-scroll-btn">    <div class="c-scroll-btn__label c-text--small | u-hide@sm">Scroll to discover</div><br/>    <button class="c-btn">        <div class="c-scroll-btn__square"></div><br/>        <div class="c-scroll-btn__arrow"></div>    </button></button><div $style="height:{{winHeight}}px"     class="u-pointer-none u-fixed u-pos-tl u-align-center u-viewport-fit c-overlay is-active u-bg--light o-wrapper--valign            js-loader">     <div class="u-inline-block"      style="height: 3px; width: 100px; background: rgba(0,0,0,0.1) ">        <div class="u-fit u-bg--brand" $style="transform-origin: 0 0; transform: scaleX({{preload}}) translateZ(0)"></div>    </div></div>';
}, function(mixin, canCreateDiscussions) {
  /** @type {!Array} */
  mixin.exports = [{
    color : [239, 243, 240],
    type : "medium",
    title : "London's<br/>First Take Away<br/>created with Michelin<br/>Star Chefs",
    imgAlt : "illustration of a cup, a coffee bean, a wooden spoon and leaves",
    children : [{
      x : 0,
      y : 0,
      width : 1440,
      height : 900,
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : true,
      z : -11,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 556,
      y : -264,
      width : 301,
      height : 316,
      texture : "home/intro/spoon.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 479,
      y : 189,
      width : 184,
      height : 247,
      texture : "home/intro/3roundleafs.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .15
    }, {
      x : 400,
      y : -41,
      width : 76,
      height : 46,
      texture : "home/intro/red-ball.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .05
    }, {
      x : 98,
      y : -243,
      width : 80,
      height : 72,
      texture : "home/intro/tomato.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 15,
      position : [0, 0],
      deltaY : 0,
      friction : .03
    }, {
      x : 0,
      y : -170,
      width : 120,
      height : 57,
      texture : "home/intro/balls-red-green.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      x : -231,
      y : -233,
      width : 260,
      height : 179,
      texture : "home/intro/5leafs-branche.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      x : -540,
      y : -220,
      width : 279,
      height : 211,
      texture : "home/intro/casserole.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : -10,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -438,
      y : 0,
      width : 118,
      height : 124,
      texture : "home/intro/mini-leaf.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -423,
      y : 266,
      width : 295,
      height : 255,
      texture : "home/intro/long-leaf.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -133,
      y : 257,
      width : 124,
      height : 55,
      texture : "home/intro/mini-leaf-orange.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 203,
      y : 233,
      width : 178,
      height : 168,
      texture : "home/intro/branch-ball.png",
      billboard : true,
      receiveShadow : true,
      maskTop : false,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }]
  }, {
    type : "small",
    subtitle : "handcrafted",
    title : "menu created with Michelin star chefs",
    imgAlt : "illustration of a hand grabbing an apple",
    color : [245, 242, 241],
    link : {
      label : "Know more",
      closeLabel : "Close",
      href : ""
    },
    children : [{
      billboard : true,
      receiveShadow : false,
      texture : "home/apple/glow.png",
      maskTop : true,
      maskBottom : true,
      maskHorizontal : true,
      reverse : true,
      x : -240,
      y : -250,
      z : -100,
      width : 895,
      height : 456,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : true,
      receiveShadow : false,
      texture : "home/apple/cloud-1.png",
      maskHorizontal : true,
      maskTop : true,
      maskBottom : true,
      x : -265,
      y : 225,
      z : -150,
      width : 540,
      height : 60,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      billboard : true,
      receiveShadow : false,
      texture : "home/apple/cloud-2.png",
      maskHorizontal : true,
      maskTop : true,
      maskBottom : true,
      x : -185,
      y : 133,
      z : -125,
      width : 540,
      height : 60,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      billboard : true,
      receiveShadow : false,
      texture : "home/apple/apple-background-leaf.png",
      maskTop : true,
      maskBottom : true,
      x : -215,
      y : 200,
      z : -40,
      width : 248,
      height : 200,
      position : [0, 0],
      deltaY : 0,
      friction : .06
    }, {
      billboard : true,
      texture : "home/apple/apple.png",
      normal : "home/apple/apple-normal.png",
      shadingColor : [.9568627451, .3490196078, .137254902],
      maskTop : true,
      receiveShadow : true,
      maskBottom : true,
      x : -205,
      y : 25,
      z : -40,
      width : 248,
      height : 240,
      position : [0, 0],
      deltaY : 0,
      friction : .06
    }, {
      billboard : false,
      receiveShadow : true,
      leaf : true,
      texture : "home/apple/apple-leaf.png",
      shading : "home/apple/apple-leaf-shading.png",
      shadingColor : [.231372549, .4980392157, .5137254902],
      maskTop : true,
      maskBottom : true,
      x : -175,
      y : 100,
      z : -30,
      width : 114,
      height : 85,
      position : [0, 0],
      rotation : [-.1, -.1, 0],
      deltaY : 0,
      friction : .06
    }, {
      billboard : true,
      reverse : true,
      receiveShadow : false,
      texture : "home/apple/hand-flat.png",
      normal : "home/apple/hand-normal.png",
      shading : "home/apple/hand-shading.png",
      shadingColor : [.9803921569, .7843137255, .6941176471],
      maskTop : true,
      x : -185,
      y : -240,
      z : 0,
      scale : .8,
      width : 411,
      height : 493,
      position : [0, 0],
      deltaY : 0,
      friction : .05
    }, {
      billboard : true,
      texture : "home/apple/leaf-1.png",
      maskTop : true,
      maskBottom : true,
      x : -126,
      y : 370,
      z : 10,
      width : 42,
      height : 34,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : true,
      texture : "home/apple/leaf-2.png",
      maskTop : true,
      maskBottom : true,
      x : -330,
      y : -196,
      z : 20,
      width : 215,
      height : 62,
      position : [0, 0],
      deltaY : 0,
      friction : .04
    }, {
      billboard : true,
      texture : "home/apple/leaf-3.png",
      maskTop : true,
      maskBottom : true,
      x : -256,
      y : 303,
      z : 10,
      width : 51,
      height : 9,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : true,
      texture : "home/apple/leaf-4.png",
      maskTop : true,
      maskBottom : true,
      x : -99,
      y : 237,
      z : 20,
      width : 42,
      height : 34,
      position : [0, 0],
      deltaY : 0,
      friction : .01
    }, {
      billboard : true,
      texture : "home/apple/leaf-5.png",
      maskTop : true,
      maskBottom : true,
      x : -434,
      y : 147,
      z : 30,
      width : 50,
      height : 20,
      position : [0, 0],
      deltaY : 0,
      friction : .03
    }, {
      billboard : true,
      texture : "home/apple/leaf-6.png",
      maskTop : true,
      maskBottom : true,
      x : -373,
      y : 67,
      z : -80,
      width : 23,
      height : 10,
      position : [0, 0],
      deltaY : 0,
      friction : .03
    }, {
      billboard : true,
      texture : "home/apple/leaf-7.png",
      maskTop : true,
      maskBottom : true,
      x : -307,
      y : 70,
      z : -20,
      width : 47,
      height : 34,
      position : [0, 0],
      deltaY : 0,
      friction : .04
    }, {
      billboard : true,
      texture : "home/apple/leaf-8.png",
      maskTop : true,
      maskBottom : true,
      x : -60,
      y : 80,
      z : 5,
      width : 42,
      height : 32,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : true,
      texture : "home/apple/leaf-9.png",
      maskTop : true,
      maskBottom : true,
      x : -87,
      y : -232,
      z : 30,
      width : 34,
      height : 39,
      position : [0, 0],
      deltaY : 0,
      friction : .01
    }]
  }, {
    type : "small",
    subtitle : "products",
    color : [248, 245, 243],
    title : "Direct supply from the finest producers",
    imgAlt : "illustration of two red peppers, feta and floating leaves on a wooden table",
    link : {
      label : "Know more",
      closeLabel : "Close",
      href : ""
    },
    children : [{
      billboard : true,
      receiveShadow : false,
      texture : "home/pepper/glow.png",
      maskTop : true,
      maskBottom : true,
      maskHorizontal : true,
      x : -187,
      y : -90,
      z : -200,
      width : 787,
      height : 652,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : false,
      texture : "home/pepper/ground.png",
      maskTop : true,
      maskBottom : true,
      x : -180,
      y : -200,
      z : -75,
      width : 600,
      height : 500,
      position : [0, 0],
      deltaY : 0,
      friction : .02,
      rotation : [-1.22173, 0, 0]
    }, {
      billboard : true,
      texture : "home/pepper/pepper-2.png",
      maskTop : true,
      maskBottom : true,
      x : -380,
      y : -100,
      z : -70,
      width : 268,
      height : 216,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/pepper-1.png",
      maskTop : true,
      maskBottom : true,
      x : -205,
      y : -30,
      z : -55,
      width : 274,
      height : 327,
      position : [0, 0],
      deltaY : 0,
      friction : .03
    }, {
      billboard : true,
      texture : "home/pepper/pepper-1-face.png",
      maskTop : true,
      maskBottom : true,
      x : -200,
      y : -30,
      z : -50,
      width : 274,
      height : 327,
      position : [0, 0],
      deltaY : 0,
      friction : .03
    }, {
      billboard : true,
      texture : "home/pepper/pepper-slices.png",
      maskTop : true,
      maskBottom : false,
      x : -30,
      y : -230,
      z : 40,
      width : 320,
      height : 112,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/feta.png",
      maskTop : true,
      maskBottom : true,
      x : -380,
      y : -210,
      z : -20,
      width : 292,
      height : 91,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/feta-slice-3.png",
      maskTop : true,
      maskBottom : false,
      x : -490,
      y : -240,
      z : 15,
      width : 70,
      height : 49,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/feta-slice-4.png",
      maskTop : true,
      maskBottom : false,
      x : -550,
      y : -250,
      z : 30,
      width : 61,
      height : 50,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/feta-slice-2.png",
      maskTop : true,
      maskBottom : false,
      x : -406,
      y : -260,
      z : 30,
      width : 80,
      height : 56,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/feta-slice-1.png",
      maskTop : true,
      maskBottom : false,
      x : -496,
      y : -275,
      z : 30,
      width : 74,
      height : 61,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/leaves.png",
      maskTop : true,
      maskBottom : true,
      x : -200,
      y : -220,
      z : 50,
      width : 115,
      height : 76,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/leaf-1.png",
      maskTop : false,
      maskBottom : true,
      x : -394,
      y : 188,
      z : 50,
      width : 121,
      height : 82,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/leaf-2.png",
      maskTop : false,
      maskBottom : true,
      x : -31,
      y : 146,
      z : 20,
      width : 63,
      height : 59,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/leaf-3.png",
      maskTop : false,
      maskBottom : true,
      x : -286,
      y : 300,
      z : -20,
      width : 38,
      height : 63,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/leaf-4.png",
      maskTop : false,
      maskBottom : true,
      x : -148,
      y : 260,
      z : -70,
      width : 20,
      height : 24,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/pepper/dots.png",
      maskTop : false,
      maskBottom : true,
      x : -500,
      y : 125,
      z : -90,
      width : 20,
      height : 30,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }]
  }, {
    type : "small",
    subtitle : "homemade",
    color : [247, 246, 243],
    title : "menu created by top chefs",
    imgAlt : "illustration of tomatoes, leaves and a knife on a wooden table",
    link : {
      label : "Know more",
      closeLabel : "Close",
      href : ""
    },
    children : [{
      billboard : true,
      receiveShadow : false,
      texture : "home/tomatoes/glow.png",
      maskTop : true,
      maskBottom : true,
      maskHorizontal : true,
      x : -200,
      y : 150,
      z : -300,
      width : 787,
      height : 652,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : false,
      texture : "home/tomatoes/ground.png",
      maskTop : true,
      maskBottom : true,
      x : -120,
      y : -200,
      z : -75,
      width : 700,
      height : 500,
      position : [0, 0],
      deltaY : 0,
      friction : .02,
      rotation : [-1.22173, 0, 0]
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-leaves-background-left.png",
      maskTop : true,
      maskBottom : true,
      x : -280,
      y : 0,
      z : -160,
      scale : 1.2,
      width : 69,
      height : 198,
      position : [0, 0],
      deltaY : 0,
      friction : .06
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-leaves-background-right.png",
      maskTop : true,
      maskBottom : true,
      x : -130,
      y : -40,
      z : -130,
      scale : 1.2,
      width : 97,
      height : 182,
      position : [0, 0],
      deltaY : 0,
      friction : .06
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-tomatoes-background-2.png",
      maskTop : true,
      maskBottom : true,
      x : -230,
      y : -100,
      z : -150,
      width : 140,
      height : 140,
      position : [0, 0],
      deltaY : 0,
      scale : 1.3,
      friction : .06
    }, {
      billboard : true,
      texture : "home/tomatoes/tomatoes-background.png",
      normal : "home/tomatoes/tomatoes-background-normal.png",
      shadingColor : [.9568627451, .3490196078, .137254902],
      maskTop : true,
      maskBottom : true,
      x : -335,
      y : -100,
      z : -140,
      width : 166,
      height : 149,
      position : [0, 0],
      deltaY : 0,
      scale : 1.15,
      friction : .06
    }, {
      billboard : true,
      texture : "home/tomatoes/tomatoes-background-leaf.png",
      normal : "home/tomatoes/tomatoes-background-leaf-normal.png",
      shading : "home/tomatoes/tomatoes-background-leaf-shading.png",
      shadow : "home/tomatoes/tomatoes-background-leaf-shadow.png",
      maskTop : true,
      maskBottom : true,
      x : -380,
      y : -95,
      z : -140,
      width : 79,
      height : 79,
      position : [0, 0],
      deltaY : 0,
      scale : 1.15,
      friction : .06
    }, {
      billboard : true,
      texture : "home/tomatoes/knife-flat.png",
      normal : "home/tomatoes/knife-normal.png",
      shadingColor : [.8901960784, .8509803922, .8235294118],
      maskBottom : true,
      x : -200,
      y : 110,
      z : -110,
      width : 99,
      height : 592,
      position : [0, 0],
      deltaY : 0,
      scale : 1.3,
      friction : .05
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-leaves-middleground.png",
      maskTop : true,
      maskBottom : true,
      x : 0,
      y : -70,
      z : -70,
      width : 119,
      height : 187,
      position : [0, 0],
      deltaY : 0,
      friction : .035
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-tomatoes-middleground.png",
      maskTop : true,
      maskBottom : true,
      x : -100,
      y : -110,
      z : -50,
      width : 187,
      height : 191,
      position : [0, 0],
      deltaY : 0,
      friction : .03
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-tomatoes-foreground.png",
      maskTop : true,
      maskBottom : true,
      x : 0,
      y : -198,
      z : 45,
      width : 320,
      height : 90,
      position : [0, 0],
      deltaY : 0,
      friction : .02
    }, {
      billboard : true,
      texture : "home/tomatoes/slide-3-leaves-foreground.png",
      maskTop : true,
      maskBottom : true,
      x : -205,
      y : -225,
      z : 80,
      width : 110,
      height : 65,
      position : [0, 0],
      deltaY : 0,
      friction : .04
    }]
  }, {
    color : [239, 243, 240],
    type : "large",
    subtitle : "Have a look to our",
    title : "menu",
    imgAlt : "illustration of an orange slice, garlic, onion, chives, parsley and berries",
    link : {
      label : "Know more",
      closeLabel : "Close",
      href : ""
    },
    children : [{
      x : 0,
      y : 0,
      width : 1440,
      height : 900,
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : true,
      z : -11,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 255,
      y : -207,
      width : 261,
      height : 240,
      texture : "home/menu/5leaf-branch.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -137,
      y : -210,
      width : 178,
      height : 146,
      texture : "home/menu/branch-olive.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 507,
      y : 263,
      width : 147,
      height : 160,
      texture : "home/menu/houx.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -412,
      y : -169,
      width : 113,
      height : 256,
      texture : "home/menu/left-mini-leaf.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 487,
      y : 0,
      width : 134,
      height : 111,
      texture : "home/menu/medium-leaf.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 166,
      y : 254,
      width : 319,
      height : 99,
      texture : "home/menu/mini-leaf.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : 486,
      y : -209,
      width : 128,
      height : 199,
      texture : "home/menu/oignon.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -372,
      y : 57,
      width : 78,
      height : 89,
      texture : "home/menu/olive.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -469,
      y : 211,
      width : 208,
      height : 159,
      texture : "home/menu/orange.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -197,
      y : 258,
      width : 153,
      height : 108,
      texture : "home/menu/persil.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -411,
      y : -298,
      width : 526,
      height : 338,
      texture : "home/menu/twig.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }, {
      x : -361,
      y : -133,
      width : 106,
      height : 97,
      texture : "home/menu/ail.png",
      billboard : true,
      receiveShadow : true,
      maskTop : true,
      maskBottom : false,
      z : 0,
      position : [0, 0],
      deltaY : 0,
      friction : .08
    }]
  }];
}, function(canCreateDiscussions, t, require) {
  /**
   * @param {!AudioNode} instance
   * @param {!Function} Constructor
   * @return {undefined}
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {string} self
   * @param {string} call
   * @return {?}
   */
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return !call || "object" != typeof call && "function" != typeof call ? self : call;
  }
  /**
   * @param {!Object} subClass
   * @param {!Object} superClass
   * @return {undefined}
   */
  function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    /** @type {!Object} */
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor : {
        value : subClass,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (superClass) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(subClass, superClass);
      } else {
        /** @type {!Object} */
        subClass.__proto__ = superClass;
      }
    }
  }
  Object.defineProperty(t, "__esModule", {
    value : true
  });
  var _createClass = function() {
    /**
     * @param {!Function} d
     * @param {string} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    return function(p, n, a) {
      return n && t(p.prototype, n), a && t(p, a), p;
    };
  }();
  var _require = require(0);
  /**
   * @return {undefined}
   */
  t.default = function() {
    var e = function(_EventEmitter) {
      /**
       * @return {?}
       */
      function Agent() {
        return _classCallCheck(this, Agent), _possibleConstructorReturn(this, (Agent.__proto__ || Object.getPrototypeOf(Agent)).apply(this, arguments));
      }
      return _inherits(Agent, _EventEmitter), _createClass(Agent, [{
        key : "ready",
        value : function() {
          this.props.onReady();
        }
      }, {
        key : "update",
        value : function() {
          this.props.scroll += .1 * (this._scroll - this.props.scroll);
        }
      }, {
        key : "resize",
        value : function() {
          this.props.onContentChange(0);
        }
      }, {
        key : "template",
        get : function() {
          return require(65);
        }
      }, {
        key : "defaultProps",
        get : function() {
          return {
            onContentChange : {
              type : "fn",
              value : function() {
              }
            },
            onReady : {
              type : "fn",
              value : function() {
              }
            },
            globalContent : {
              type : "json",
              value : null
            },
            content : {
              type : "json",
              value : null
            },
            cdnRoot : ""
          };
        }
      }]), Agent;
    }(_require.Component);
    (0, _require.register)("page-404", e);
  };
}, function(mixin, canCreateDiscussions) {
  /** @type {string} */
  mixin.exports = '<div class="u-fixed u-pos-tl u-viewport-fit u-align-center u-relative o-wrapper--valign c-fill-frame">    <div class="u-inline-block u-fit-w  u-valign-middle o-wrapper--valign">        <h1 style="line-height:1"            class="c-title-giga u-marg-b-xs  u-color--brand u-relative">                                404        </h1>        <h1 class="u-pad-l-xs u-marg-b-md c-title--2 u-color--brand u-relative">                                Page not found        </h1>        <a href="/" class="c-link c-text--xlarge u-color--grey u-bold">Back to home</a>    </div></div>';
}]);
