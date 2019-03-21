! function(e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var i = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var i in e) n.d(o, i, function(t) {
        return e[t]
      }.bind(null, i));
    return o
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 5)
}([function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setOpacity = function(e, t) {
    e.style.opacity = t, e.style.filter = "alpha(opacity=" + (100 * t | 0) + "})"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.remove = function(e) {
    if (!e) return;
    if (!e.parentNode) return;
    e.parentNode.removeChild(e)
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.config = {
    disqus_shortname: "{{.Site.DisqusShortname}}",
    cookie: {
      name: "cookieconsent_status",
      path: "/",
      domain: "",
      expiryDays: 365,
      secure: !1
    },
    cookie_consent_url: "/privacy-policy#cookies-and-web-beacons"
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fadeOut = function(e) {
    var t = 1;
    (0, i.setOpacity)(e, t);
    var n = +new Date;
    ! function r() {
      t -= (new Date - n) / 400, (0, i.setOpacity)(e, t), n = +new Date, t > 0 ? window.requestAnimationFrame && requestAnimationFrame(r) || setTimeout(r, 16) : t <= 0 && (0, o.remove)(e)
    }()
  };
  var o = n(1),
    i = n(0)
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.addEventListener = function(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
  }
}, function(e, t, n) {
  e.exports = n(6)
}, function(e, t, n) {
  "use strict";
  var o = n(7),
    i = n(8),
    r = n(12),
    a = n(13);
  (0, o.ready)(function() {
    (0, i.embedClipboardJS)(), (0, r.onButtonLoadDisqusClicked)(), (0, r.loadDisqusCommentCount)(), (0, a.embedCookieConsent)()
  })
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ready = function(e) {
    "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function() {
      "loading" !== document.readyState && e()
    })
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.embedClipboardJS = void 0;
  var o = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(n(9)),
    i = n(1),
    r = n(10),
    a = n(11);
  t.embedClipboardJS = function() {
    if (o.default.isSupported()) new o.default(".btn-clipboard", {
      target: function(e) {
        return e.nextElementSibling
      }
    }).on("success", function(e) {
      e.clearSelection();
      var t = e.trigger.querySelector(".msg-clipboard");
      t && (t.getAttribute("data-cbtimer") && clearTimeout(parseInt(t.getAttribute("data-cbtimer"), 10)), (0, r.addClass)(t, "msg-clipboard--active"), t.innerHTML = "Copied to clipboard", t.setAttribute("data-cbtimer", setTimeout(function() {
        (0, a.removeClass)(t, "msg-clipboard--active"), t.setAttribute("data-cbtimer", "")
      }, 2e3).toString()))
    });
    else {
      var e = document.querySelectorAll(".highlight > .btn-clipboard");
      Array.prototype.forEach.call(e, function(e, t) {
        (0, i.remove)(e)
      })
    }
  }
}, function(e, t, n) {
  /*!
   * clipboard.js v2.0.4
   * https://zenorocha.github.io/clipboard.js
   * 
   * Licensed MIT © Zeno Rocha
   */
  ! function(t, n) {
    e.exports = n()
  }(0, function() {
    return function(e) {
      var t = {};

      function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
      }
      return n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: o
        })
      }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e)
          for (var i in e) n.d(o, i, function(t) {
            return e[t]
          }.bind(null, i));
        return o
      }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e.default
        } : function() {
          return e
        };
        return n.d(t, "a", t), t
      }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
      "use strict";
      var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        }(),
        r = u(n(1)),
        a = u(n(3)),
        c = u(n(4));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function(e) {
        function t(e, n) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var o = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return o.resolveOptions(n), o.listenClick(e), o
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, a.default), i(t, [{
          key: "resolveOptions",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === o(e.container) ? e.container : document.body
          }
        }, {
          key: "listenClick",
          value: function(e) {
            var t = this;
            this.listener = (0, c.default)(e, "click", function(e) {
              return t.onClick(e)
            })
          }
        }, {
          key: "onClick",
          value: function(e) {
            var t = e.delegateTarget || e.currentTarget;
            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new r.default({
              action: this.action(t),
              target: this.target(t),
              text: this.text(t),
              container: this.container,
              trigger: t,
              emitter: this
            })
          }
        }, {
          key: "defaultAction",
          value: function(e) {
            return l("action", e)
          }
        }, {
          key: "defaultTarget",
          value: function(e) {
            var t = l("target", e);
            if (t) return document.querySelector(t)
          }
        }, {
          key: "defaultText",
          value: function(e) {
            return l("text", e)
          }
        }, {
          key: "destroy",
          value: function() {
            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
          }
        }], [{
          key: "isSupported",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
              t = "string" == typeof e ? [e] : e,
              n = !!document.queryCommandSupported;
            return t.forEach(function(e) {
              n = n && !!document.queryCommandSupported(e)
            }), n
          }
        }]), t
      }();

      function l(e, t) {
        var n = "data-clipboard-" + e;
        if (t.hasAttribute(n)) return t.getAttribute(n)
      }
      e.exports = s
    }, function(e, t, n) {
      "use strict";
      var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        }(),
        r = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }(n(2));
      var a = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.resolveOptions(t), this.initSelection()
        }
        return i(e, [{
          key: "resolveOptions",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
          }
        }, {
          key: "initSelection",
          value: function() {
            this.text ? this.selectFake() : this.target && this.selectTarget()
          }
        }, {
          key: "selectFake",
          value: function() {
            var e = this,
              t = "rtl" == document.documentElement.getAttribute("dir");
            this.removeFake(), this.fakeHandlerCallback = function() {
              return e.removeFake()
            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
            var n = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r.default)(this.fakeElem), this.copyText()
          }
        }, {
          key: "removeFake",
          value: function() {
            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
          }
        }, {
          key: "selectTarget",
          value: function() {
            this.selectedText = (0, r.default)(this.target), this.copyText()
          }
        }, {
          key: "copyText",
          value: function() {
            var e = void 0;
            try {
              e = document.execCommand(this.action)
            } catch (t) {
              e = !1
            }
            this.handleResult(e)
          }
        }, {
          key: "handleResult",
          value: function(e) {
            this.emitter.emit(e ? "success" : "error", {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            })
          }
        }, {
          key: "clearSelection",
          value: function() {
            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
          }
        }, {
          key: "destroy",
          value: function() {
            this.removeFake()
          }
        }, {
          key: "action",
          set: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
          },
          get: function() {
            return this._action
          }
        }, {
          key: "target",
          set: function(e) {
            if (void 0 !== e) {
              if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
              if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
              if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
              this._target = e
            }
          },
          get: function() {
            return this._target
          }
        }]), e
      }();
      e.exports = a
    }, function(e, t) {
      e.exports = function(e) {
        var t;
        if ("SELECT" === e.nodeName) e.focus(), t = e.value;
        else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
          var n = e.hasAttribute("readonly");
          n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
        } else {
          e.hasAttribute("contenteditable") && e.focus();
          var o = window.getSelection(),
            i = document.createRange();
          i.selectNodeContents(e), o.removeAllRanges(), o.addRange(i), t = o.toString()
        }
        return t
      }
    }, function(e, t) {
      function n() {}
      n.prototype = {
        on: function(e, t, n) {
          var o = this.e || (this.e = {});
          return (o[e] || (o[e] = [])).push({
            fn: t,
            ctx: n
          }), this
        },
        once: function(e, t, n) {
          var o = this;

          function i() {
            o.off(e, i), t.apply(n, arguments)
          }
          return i._ = t, this.on(e, i, n)
        },
        emit: function(e) {
          for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, i = n.length; o < i; o++) n[o].fn.apply(n[o].ctx, t);
          return this
        },
        off: function(e, t) {
          var n = this.e || (this.e = {}),
            o = n[e],
            i = [];
          if (o && t)
            for (var r = 0, a = o.length; r < a; r++) o[r].fn !== t && o[r].fn._ !== t && i.push(o[r]);
          return i.length ? n[e] = i : delete n[e], this
        }
      }, e.exports = n
    }, function(e, t, n) {
      var o = n(5),
        i = n(6);
      e.exports = function(e, t, n) {
        if (!e && !t && !n) throw new Error("Missing required arguments");
        if (!o.string(t)) throw new TypeError("Second argument must be a String");
        if (!o.fn(n)) throw new TypeError("Third argument must be a Function");
        if (o.node(e)) return function(e, t, n) {
          return e.addEventListener(t, n), {
            destroy: function() {
              e.removeEventListener(t, n)
            }
          }
        }(e, t, n);
        if (o.nodeList(e)) return function(e, t, n) {
          return Array.prototype.forEach.call(e, function(e) {
            e.addEventListener(t, n)
          }), {
            destroy: function() {
              Array.prototype.forEach.call(e, function(e) {
                e.removeEventListener(t, n)
              })
            }
          }
        }(e, t, n);
        if (o.string(e)) return function(e, t, n) {
          return i(document.body, e, t, n)
        }(e, t, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
      }
    }, function(e, t) {
      t.node = function(e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
      }, t.nodeList = function(e) {
        var n = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
      }, t.string = function(e) {
        return "string" == typeof e || e instanceof String
      }, t.fn = function(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
      }
    }, function(e, t, n) {
      var o = n(7);

      function i(e, t, n, i, r) {
        var a = function(e, t, n, i) {
          return function(n) {
            n.delegateTarget = o(n.target, t), n.delegateTarget && i.call(e, n)
          }
        }.apply(this, arguments);
        return e.addEventListener(n, a, r), {
          destroy: function() {
            e.removeEventListener(n, a, r)
          }
        }
      }
      e.exports = function(e, t, n, o, r) {
        return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
          return i(e, t, n, o, r)
        }))
      }
    }, function(e, t) {
      var n = 9;
      if ("undefined" != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
      }
      e.exports = function(e, t) {
        for (; e && e.nodeType !== n;) {
          if ("function" == typeof e.matches && e.matches(t)) return e;
          e = e.parentNode
        }
      }
    }])
  })
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.addClass = function(e, t) {
    e.classList ? e.classList.add(t) : e.className += " " + t
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.removeClass = function(e, t) {
    e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.loadDisqusCommentCount = t.onButtonLoadDisqusClicked = void 0;
  var o = n(2),
    i = n(3),
    r = n(4),
    a = document,
    c = o.config.disqus_shortname,
    u = a.getElementById("disqus_thread");
  t.onButtonLoadDisqusClicked = function() {
    var e = a.getElementById("btn_load_disqus_thread");
    e && (0, r.addEventListener)(e, "click", function() {
      c && u && function() {
        var e = a.createElement("script");
        e.src = "https://" + c + ".disqus.com/embed.js", e.setAttribute("data-timestamp", +new Date), (a.head || a.body).appendChild(e)
      }(), (0, i.fadeOut)(e)
    })
  }, t.loadDisqusCommentCount = function() {
    c && u && function() {
      var e = a.createElement("script");
      e.type = "text/javascript", e.async = !0, e.src = "https://" + c + ".disqus.com/count.js", e.id = "dsq-count-scr", (a.body || a.head).appendChild(e)
    }()
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.embedCookieConsent = void 0;
  var o = n(2),
    i = n(0),
    r = n(4),
    a = n(3),
    c = n(14),
    u = '<div class="navbar-fixed-bottom navbar-cookie">\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-sm-10 col-md-11">\n        <p class="navbar-text">This website uses cookies to ensure you get the best experience on our website.\n          <a href="' + o.config.cookie_consent_url + '" aria-label="learn more about cookies" role="button" tabindex="0" rel="noopener noreferrer nofollow" target="_blank" class="lined-link">Learn more</a>\n        </p>\n      </div>\n      <div class="col-sm-2 col-md-1">\n        <button id="btnAcceptCookie" type="button" class="btn btn-default btn-primary navbar-btn btn-block" aria-label="dismiss cookie message" role="button">\n          Got It!\n        </button>\n      </div>\n    </div>\n  </div>\n</div>',
    s = document;

  function l() {
    var e = function(e) {
      var t = document.createElement("div");
      return t.innerHTML = e.trim(), t.firstChild
    }(u);
    (0, i.setOpacity)(e, 0), s.body.appendChild(e), (0, c.fadeIn)(e), (0, r.addEventListener)(document.getElementById("btnAcceptCookie"), "click", function() {
      ! function(e, t, n, o, i, r) {
        var a = new Date;
        a.setDate(a.getDate() + (n || 365));
        var c = [e + "=" + t, "expires=" + a.toUTCString(), "path=" + (i || "/")];
        o && c.push("domain=" + o), r && c.push("secure"), document.cookie = c.join(";")
      }(o.config.cookie.name, "dismiss", o.config.cookie.expiryDays, o.config.cookie.domain, o.config.cookie.path, o.config.cookie.secure), (0, a.fadeOut)(e)
    })
  }
  t.embedCookieConsent = function() {
    s.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/) || l()
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.fadeIn = function(e) {
    var t = 0;
    (0, o.setOpacity)(e, t);
    var n = +new Date;
    ! function i() {
      t += (new Date - n) / 400, (0, o.setOpacity)(e, t), n = +new Date, t < 1 ? window.requestAnimationFrame && requestAnimationFrame(i) || setTimeout(i, 16) : t >= 1 && (0, o.setOpacity)(e, 1)
    }()
  };
  var o = n(0)
}]);