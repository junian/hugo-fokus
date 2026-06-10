/*! For license information please see fokus_template.js.LICENSE.txt */ ! function() {
  var t = {
      576: function(t) {
        var e;
        e = function() {
          return function() {
            var t = {
                686: function(t, e, i) {
                  "use strict";
                  i.d(e, {
                    default: function() {
                      return y
                    }
                  });
                  var s = i(279),
                    o = i.n(s),
                    n = i(370),
                    r = i.n(n),
                    l = i(817),
                    a = i.n(l);

                  function h(t) {
                    try {
                      return document.execCommand(t)
                    } catch (t) {
                      return !1
                    }
                  }
                  var d = function(t) {
                      var e = a()(t);
                      return h("cut"), e
                    },
                    c = function(t, e) {
                      var i = function(t) {
                        var e = "rtl" === document.documentElement.getAttribute("dir"),
                          i = document.createElement("textarea");
                        i.style.fontSize = "12pt", i.style.border = "0", i.style.padding = "0", i.style.margin = "0", i.style.position = "absolute", i.style[e ? "right" : "left"] = "-9999px";
                        var s = window.pageYOffset || document.documentElement.scrollTop;
                        return i.style.top = "".concat(s, "px"), i.setAttribute("readonly", ""), i.value = t, i
                      }(t);
                      e.container.appendChild(i);
                      var s = a()(i);
                      return h("copy"), i.remove(), s
                    },
                    u = function(t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                          container: document.body
                        },
                        i = "";
                      return "string" == typeof t ? i = c(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? i = c(t.value, e) : (i = a()(t), h("copy")), i
                    };

                  function m(t) {
                    return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                      return typeof t
                    } : function(t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, m(t)
                  }

                  function p(t) {
                    return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                      return typeof t
                    } : function(t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, p(t)
                  }

                  function g(t, e) {
                    for (var i = 0; i < e.length; i++) {
                      var s = e[i];
                      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                  }

                  function f(t, e) {
                    return f = Object.setPrototypeOf || function(t, e) {
                      return t.__proto__ = e, t
                    }, f(t, e)
                  }

                  function b(t) {
                    return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                    }, b(t)
                  }

                  function v(t, e) {
                    var i = "data-clipboard-".concat(t);
                    if (e.hasAttribute(i)) return e.getAttribute(i)
                  }
                  var w = function(t) {
                      ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                          }
                        }), e && f(t, e)
                      }(a, t);
                      var e, i, s, o, n, l = (o = a, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (t) {
                          return !1
                        }
                      }(), function() {
                        var t, e, i = b(o);
                        if (n) {
                          var s = b(this).constructor;
                          t = Reflect.construct(i, arguments, s)
                        } else t = i.apply(this, arguments);
                        return !(e = t) || "object" !== p(e) && "function" != typeof e ? function(t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t
                        }(this) : e
                      });

                      function a(t, e) {
                        var i;
                        return function(t, e) {
                          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (i = l.call(this)).resolveOptions(e), i.listenClick(t), i
                      }
                      return e = a, i = [{
                        key: "resolveOptions",
                        value: function() {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === p(t.container) ? t.container : document.body
                        }
                      }, {
                        key: "listenClick",
                        value: function(t) {
                          var e = this;
                          this.listener = r()(t, "click", function(t) {
                            return e.onClick(t)
                          })
                        }
                      }, {
                        key: "onClick",
                        value: function(t) {
                          var e = t.delegateTarget || t.currentTarget,
                            i = this.action(e) || "copy",
                            s = function() {
                              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.action,
                                i = void 0 === e ? "copy" : e,
                                s = t.container,
                                o = t.target,
                                n = t.text;
                              if ("copy" !== i && "cut" !== i) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                              if (void 0 !== o) {
                                if (!o || "object" !== m(o) || 1 !== o.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === i && o.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === i && (o.hasAttribute("readonly") || o.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                              }
                              return n ? u(n, {
                                container: s
                              }) : o ? "cut" === i ? d(o) : u(o, {
                                container: s
                              }) : void 0
                            }({
                              action: i,
                              container: this.container,
                              target: this.target(e),
                              text: this.text(e)
                            });
                          this.emit(s ? "success" : "error", {
                            action: i,
                            text: s,
                            trigger: e,
                            clearSelection: function() {
                              e && e.focus(), window.getSelection().removeAllRanges()
                            }
                          })
                        }
                      }, {
                        key: "defaultAction",
                        value: function(t) {
                          return v("action", t)
                        }
                      }, {
                        key: "defaultTarget",
                        value: function(t) {
                          var e = v("target", t);
                          if (e) return document.querySelector(e)
                        }
                      }, {
                        key: "defaultText",
                        value: function(t) {
                          return v("text", t)
                        }
                      }, {
                        key: "destroy",
                        value: function() {
                          this.listener.destroy()
                        }
                      }], s = [{
                        key: "copy",
                        value: function(t) {
                          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                          };
                          return u(t, e)
                        }
                      }, {
                        key: "cut",
                        value: function(t) {
                          return d(t)
                        }
                      }, {
                        key: "isSupported",
                        value: function() {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            e = "string" == typeof t ? [t] : t,
                            i = !!document.queryCommandSupported;
                          return e.forEach(function(t) {
                            i = i && !!document.queryCommandSupported(t)
                          }), i
                        }
                      }], i && g(e.prototype, i), s && g(e, s), a
                    }(o()),
                    y = w
                },
                828: function(t) {
                  if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var e = Element.prototype;
                    e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                  }
                  t.exports = function(t, e) {
                    for (; t && 9 !== t.nodeType;) {
                      if ("function" == typeof t.matches && t.matches(e)) return t;
                      t = t.parentNode
                    }
                  }
                },
                438: function(t, e, i) {
                  var s = i(828);

                  function o(t, e, i, s, o) {
                    var r = n.apply(this, arguments);
                    return t.addEventListener(i, r, o), {
                      destroy: function() {
                        t.removeEventListener(i, r, o)
                      }
                    }
                  }

                  function n(t, e, i, o) {
                    return function(i) {
                      i.delegateTarget = s(i.target, e), i.delegateTarget && o.call(t, i)
                    }
                  }
                  t.exports = function(t, e, i, s, n) {
                    return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof i ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                      return o(t, e, i, s, n)
                    }))
                  }
                },
                879: function(t, e) {
                  e.node = function(t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                  }, e.nodeList = function(t) {
                    var i = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === i || "[object HTMLCollection]" === i) && "length" in t && (0 === t.length || e.node(t[0]))
                  }, e.string = function(t) {
                    return "string" == typeof t || t instanceof String
                  }, e.fn = function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                  }
                },
                370: function(t, e, i) {
                  var s = i(879),
                    o = i(438);
                  t.exports = function(t, e, i) {
                    if (!t && !e && !i) throw new Error("Missing required arguments");
                    if (!s.string(e)) throw new TypeError("Second argument must be a String");
                    if (!s.fn(i)) throw new TypeError("Third argument must be a Function");
                    if (s.node(t)) return function(t, e, i) {
                      return t.addEventListener(e, i), {
                        destroy: function() {
                          t.removeEventListener(e, i)
                        }
                      }
                    }(t, e, i);
                    if (s.nodeList(t)) return function(t, e, i) {
                      return Array.prototype.forEach.call(t, function(t) {
                        t.addEventListener(e, i)
                      }), {
                        destroy: function() {
                          Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, i)
                          })
                        }
                      }
                    }(t, e, i);
                    if (s.string(t)) return function(t, e, i) {
                      return o(document.body, t, e, i)
                    }(t, e, i);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                  }
                },
                817: function(t) {
                  t.exports = function(t) {
                    var e;
                    if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                      var i = t.hasAttribute("readonly");
                      i || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), i || t.removeAttribute("readonly"), e = t.value
                    } else {
                      t.hasAttribute("contenteditable") && t.focus();
                      var s = window.getSelection(),
                        o = document.createRange();
                      o.selectNodeContents(t), s.removeAllRanges(), s.addRange(o), e = s.toString()
                    }
                    return e
                  }
                },
                279: function(t) {
                  function e() {}
                  e.prototype = {
                    on: function(t, e, i) {
                      var s = this.e || (this.e = {});
                      return (s[t] || (s[t] = [])).push({
                        fn: e,
                        ctx: i
                      }), this
                    },
                    once: function(t, e, i) {
                      var s = this;

                      function o() {
                        s.off(t, o), e.apply(i, arguments)
                      }
                      return o._ = e, this.on(t, o, i)
                    },
                    emit: function(t) {
                      for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, o = i.length; s < o; s++) i[s].fn.apply(i[s].ctx, e);
                      return this
                    },
                    off: function(t, e) {
                      var i = this.e || (this.e = {}),
                        s = i[t],
                        o = [];
                      if (s && e)
                        for (var n = 0, r = s.length; n < r; n++) s[n].fn !== e && s[n].fn._ !== e && o.push(s[n]);
                      return o.length ? i[t] = o : delete i[t], this
                    }
                  }, t.exports = e, t.exports.TinyEmitter = e
                }
              },
              e = {};

            function i(s) {
              if (e[s]) return e[s].exports;
              var o = e[s] = {
                exports: {}
              };
              return t[s](o, o.exports, i), o.exports
            }
            return i.n = function(t) {
              var e = t && t.__esModule ? function() {
                return t.default
              } : function() {
                return t
              };
              return i.d(e, {
                a: e
              }), e
            }, i.d = function(t, e) {
              for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: e[s]
              })
            }, i.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }, i(686)
          }().default
        }, t.exports = e()
      }
    },
    e = {};

  function i(s) {
    var o = e[s];
    if (void 0 !== o) return o.exports;
    var n = e[s] = {
      exports: {}
    };
    return t[s].call(n.exports, n, n.exports, i), n.exports
  }
  i.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return i.d(e, {
        a: e
      }), e
    }, i.d = function(t, e) {
      for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
        enumerable: !0,
        get: e[s]
      })
    }, i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    function() {
      "use strict";
      var t = i(576),
        e = i.n(t);

      function s(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
      }
      var o = {
        disqus_shortname: "{{.Site.Config.Services.Disqus.Shortname}}",
        base_url: "{{.Site.BaseURL}}",
        is_redirect_to_canonical: "{{.Site.Params.IsRedirectToCanonical}}",
        cookie: {
          name: "cookieconsent_status",
          path: "/",
          domain: "",
          expiryDays: 365,
          secure: !1
        },
        cookie_consent_url: "{{.Site.Params.CookieConsent.Url}}",
        is_cookie_consent_enabled: "{{.Site.Params.CookieConsent.IsEnabled}}"
      };

      function n(t, e) {
        t.style.opacity = e, t.style.filter = `alpha(opacity=${100*e|0}})`
      }

      function r(t) {
        let e = 1;
        n(t, e);
        let i = +new Date;
        const o = () => {
          e -= (new Date - i) / 400, n(t, e), i = +new Date, e > 0 ? window.requestAnimationFrame && requestAnimationFrame(o) || setTimeout(o, 16) : e <= 0 && s(t)
        };
        o()
      }

      function l(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
      }
      const a = document,
        h = o.disqus_shortname,
        d = a.getElementById("disqus_thread");
      const c = `<div class="navbar-fixed-bottom navbar-cookie">\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-sm-10 col-md-11">\n        <p class="navbar-text">This website uses cookies to ensure you get the best experience on our website.\n          <a href="${o.cookie_consent_url}" aria-label="learn more about cookies" role="button" tabindex="0" rel="noopener noreferrer nofollow" target="_blank" class="lined-link">Learn more</a>\n        </p>\n      </div>\n      <div class="col-sm-2 col-md-1">\n        <button id="btnAcceptCookie" type="button" class="btn btn-default btn-primary navbar-btn btn-block" aria-label="dismiss cookie message" role="button">\n          Got It!\n        </button>\n      </div>\n    </div>\n  </div>\n</div>`,
        u = document;
      class m {
        constructor(t) {
          this.table = t
        }
        reloadData(t, e, i) {
          return this.table.dataLoader.load(t, void 0, void 0, void 0, e, i)
        }
        langText() {
          return this.table.modules.localize.getText(...arguments)
        }
        langBind() {
          return this.table.modules.localize.bind(...arguments)
        }
        langLocale() {
          return this.table.modules.localize.getLocale(...arguments)
        }
        commsConnections() {
          return this.table.modules.comms.getConnections(...arguments)
        }
        commsSend() {
          return this.table.modules.comms.send(...arguments)
        }
        layoutMode() {
          return this.table.modules.layout.getMode()
        }
        layoutRefresh(t) {
          return this.table.modules.layout.layout(t)
        }
        subscribe() {
          return this.table.eventBus.subscribe(...arguments)
        }
        unsubscribe() {
          return this.table.eventBus.unsubscribe(...arguments)
        }
        subscribed(t) {
          return this.table.eventBus.subscribed(t)
        }
        subscriptionChange() {
          return this.table.eventBus.subscriptionChange(...arguments)
        }
        dispatch() {
          return this.table.eventBus.dispatch(...arguments)
        }
        chain() {
          return this.table.eventBus.chain(...arguments)
        }
        confirm() {
          return this.table.eventBus.confirm(...arguments)
        }
        dispatchExternal() {
          return this.table.externalEvents.dispatch(...arguments)
        }
        subscribedExternal(t) {
          return this.table.externalEvents.subscribed(t)
        }
        subscriptionChangeExternal() {
          return this.table.externalEvents.subscriptionChange(...arguments)
        }
        options(t) {
          return this.table.options[t]
        }
        setOption(t, e) {
          return void 0 !== e && (this.table.options[t] = e), this.table.options[t]
        }
        deprecationCheck(t, e, i) {
          return this.table.deprecationAdvisor.check(t, e, i)
        }
        deprecationCheckMsg(t, e) {
          return this.table.deprecationAdvisor.checkMsg(t, e)
        }
        deprecationMsg(t) {
          return this.table.deprecationAdvisor.msg(t)
        }
        module(t) {
          return this.table.module(t)
        }
      }
      class p {
        static elVisible(t) {
          return !(t.offsetWidth <= 0 && t.offsetHeight <= 0)
        }
        static elOffset(t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top + window.pageYOffset - document.documentElement.clientTop,
            left: e.left + window.pageXOffset - document.documentElement.clientLeft
          }
        }
        static retrieveNestedData(t, e, i) {
          var s, o = t ? e.split(t) : [e],
            n = o.length;
          for (let t = 0; t < n && (s = i = i[o[t]], i); t++);
          return s
        }
        static deepClone(t, e, i = []) {
          var s = {}.__proto__,
            o = [].__proto__;
          for (var n in e || (e = Object.assign(Array.isArray(t) ? [] : {}, t)), t) {
            let r, l, a = t[n];
            null == a || "object" != typeof a || a.__proto__ !== s && a.__proto__ !== o || (r = i.findIndex(t => t.subject === a), r > -1 ? e[n] = i[r].copy : (l = Object.assign(Array.isArray(a) ? [] : {}, a), i.unshift({
              subject: a,
              copy: l
            }), e[n] = this.deepClone(a, l, i)))
          }
          return e
        }
      }
      let g = class t extends m {
        constructor(t, e, i) {
          super(t), this.element = e, this.container = this._lookupContainer(), this.parent = i, this.reversedX = !1, this.childPopup = null, this.blurable = !1, this.blurCallback = null, this.blurEventsBound = !1, this.renderedCallback = null, this.visible = !1, this.hideable = !0, this.element.classList.add("tabulator-popup-container"), this.blurEvent = this.hide.bind(this, !1), this.escEvent = this._escapeCheck.bind(this), this.destroyBinding = this.tableDestroyed.bind(this), this.destroyed = !1
        }
        tableDestroyed() {
          this.destroyed = !0, this.hide(!0)
        }
        _lookupContainer() {
          var t = this.table.options.popupContainer;
          return "string" == typeof t ? (t = document.querySelector(t)) || console.warn("Menu Error - no container element found matching selector:", this.table.options.popupContainer, "(defaulting to document body)") : !0 === t && (t = this.table.element), t && !this._checkContainerIsParent(t) && (t = !1, console.warn("Menu Error - container element does not contain this table:", this.table.options.popupContainer, "(defaulting to document body)")), t || (t = document.body), t
        }
        _checkContainerIsParent(t, e = this.table.element) {
          return t === e || !!e.parentNode && this._checkContainerIsParent(t, e.parentNode)
        }
        renderCallback(t) {
          this.renderedCallback = t
        }
        containerEventCoords(t) {
          var e = !(t instanceof MouseEvent),
            i = e ? t.touches[0].pageX : t.pageX,
            s = e ? t.touches[0].pageY : t.pageY;
          if (this.container !== document.body) {
            let t = p.elOffset(this.container);
            i -= t.left, s -= t.top
          }
          return {
            x: i,
            y: s
          }
        }
        elementPositionCoords(t, e = "right") {
          var i, s, o, n = p.elOffset(t);
          switch (this.container !== document.body && (i = p.elOffset(this.container), n.left -= i.left, n.top -= i.top), e) {
            case "right":
              s = n.left + t.offsetWidth, o = n.top - 1;
              break;
            case "bottom":
              s = n.left, o = n.top + t.offsetHeight;
              break;
            case "left":
              s = n.left, o = n.top - 1;
              break;
            case "top":
              s = n.left, o = n.top;
              break;
            case "center":
              s = n.left + t.offsetWidth / 2, o = n.top + t.offsetHeight / 2
          }
          return {
            x: s,
            y: o,
            offset: n
          }
        }
        show(t, e) {
          var i, s, o, n, r;
          return this.destroyed || this.table.destroyed || (t instanceof HTMLElement ? (o = t, n = (r = this.elementPositionCoords(t, e)).offset, i = r.x, s = r.y) : "number" == typeof t ? (n = {
            top: 0,
            left: 0
          }, i = t, s = e) : (i = (r = this.containerEventCoords(t)).x, s = r.y, this.reversedX = !1), this.element.style.top = s + "px", this.element.style.left = i + "px", this.container.appendChild(this.element), "function" == typeof this.renderedCallback && this.renderedCallback(), this._fitToScreen(i, s, o, n, e), this.visible = !0, this.subscribe("table-destroy", this.destroyBinding), this.element.addEventListener("mousedown", t => {
            t.stopPropagation()
          })), this
        }
        _fitToScreen(t, e, i, s, o) {
          var n = this.container === document.body ? document.documentElement.scrollTop : this.container.scrollTop;
          (t + this.element.offsetWidth >= this.container.offsetWidth || this.reversedX) && (this.element.style.left = "", this.element.style.right = i ? this.container.offsetWidth - s.left + "px" : this.container.offsetWidth - t + "px", this.reversedX = !0);
          let r = Math.max(this.container.offsetHeight, n ? this.container.scrollHeight : 0);
          e + this.element.offsetHeight > r && (i ? this.element.style.top = "bottom" === o ? parseInt(this.element.style.top) - this.element.offsetHeight - i.offsetHeight - 1 + "px" : parseInt(this.element.style.top) - this.element.offsetHeight + i.offsetHeight + 1 + "px" : this.element.style.height = r + "px")
        }
        isVisible() {
          return this.visible
        }
        hideOnBlur(t) {
          return this.blurable = !0, this.visible && (setTimeout(() => {
            this.visible && (this.table.rowManager.element.addEventListener("scroll", this.blurEvent), this.subscribe("cell-editing", this.blurEvent), document.body.addEventListener("click", this.blurEvent), document.body.addEventListener("contextmenu", this.blurEvent), document.body.addEventListener("mousedown", this.blurEvent), window.addEventListener("resize", this.blurEvent), document.body.addEventListener("keydown", this.escEvent), this.blurEventsBound = !0)
          }, 100), this.blurCallback = t), this
        }
        _escapeCheck(t) {
          27 == t.key && this.hide()
        }
        blockHide() {
          this.hideable = !1
        }
        restoreHide() {
          this.hideable = !0
        }
        hide(t = !1) {
          return this.visible && this.hideable && (this.blurable && this.blurEventsBound && (document.body.removeEventListener("keydown", this.escEvent), document.body.removeEventListener("click", this.blurEvent), document.body.removeEventListener("contextmenu", this.blurEvent), document.body.removeEventListener("mousedown", this.blurEvent), window.removeEventListener("resize", this.blurEvent), this.table.rowManager.element.removeEventListener("scroll", this.blurEvent), this.unsubscribe("cell-editing", this.blurEvent), this.blurEventsBound = !1), this.childPopup && this.childPopup.hide(), this.parent && (this.parent.childPopup = null), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.visible = !1, this.blurCallback && !t && this.blurCallback(), this.unsubscribe("table-destroy", this.destroyBinding)), this
        }
        child(e) {
          return this.childPopup && this.childPopup.hide(), this.childPopup = new t(this.table, e, this), this.childPopup
        }
      };
      class f extends m {
        constructor(t, e) {
          super(t), this._handler = null
        }
        initialize() {}
        registerTableOption(t, e) {
          this.table.optionsList.register(t, e)
        }
        registerColumnOption(t, e) {
          this.table.columnManager.optionsList.register(t, e)
        }
        registerTableFunction(t, e) {
          void 0 === this.table[t] ? this.table[t] = (...i) => (this.table.initGuard(t), e(...i)) : console.warn("Unable to bind table function, name already in use", t)
        }
        registerComponentFunction(t, e, i) {
          return this.table.componentFunctionBinder.bind(t, e, i)
        }
        registerDataHandler(t, e) {
          this.table.rowManager.registerDataPipelineHandler(t, e), this._handler = t
        }
        registerDisplayHandler(t, e) {
          this.table.rowManager.registerDisplayPipelineHandler(t, e), this._handler = t
        }
        displayRows(t) {
          var e, i = this.table.rowManager.displayRows.length - 1;
          if (this._handler && (e = this.table.rowManager.displayPipeline.findIndex(t => t.handler === this._handler)) > -1 && (i = e), t && (i += t), this._handler) return i > -1 ? this.table.rowManager.getDisplayRows(i) : this.activeRows()
        }
        activeRows() {
          return this.table.rowManager.activeRows
        }
        refreshData(t, e) {
          e || (e = this._handler), e && this.table.rowManager.refreshActiveData(e, !1, t)
        }
        footerAppend(t) {
          return this.table.footerManager.append(t)
        }
        footerPrepend(t) {
          return this.table.footerManager.prepend(t)
        }
        footerRemove(t) {
          return this.table.footerManager.remove(t)
        }
        popup(t, e) {
          return new g(this.table, t, e)
        }
        alert(t, e) {
          return this.table.alertManager.alert(t, e)
        }
        clearAlert() {
          return this.table.alertManager.clear()
        }
      }
      class b {
        constructor(t) {
          return this._cell = t, new Proxy(this, {
            get: function(t, e, i) {
              return void 0 !== t[e] ? t[e] : t._cell.table.componentFunctionBinder.handle("cell", t._cell, e)
            }
          })
        }
        getValue() {
          return this._cell.getValue()
        }
        getOldValue() {
          return this._cell.getOldValue()
        }
        getInitialValue() {
          return this._cell.initialValue
        }
        getElement() {
          return this._cell.getElement()
        }
        getRow() {
          return this._cell.row.getComponent()
        }
        getData(t) {
          return this._cell.row.getData(t)
        }
        getType() {
          return "cell"
        }
        getField() {
          return this._cell.column.getField()
        }
        getColumn() {
          return this._cell.column.getComponent()
        }
        setValue(t, e) {
          void 0 === e && (e = !0), this._cell.setValue(t, e)
        }
        restoreOldValue() {
          this._cell.setValueActual(this._cell.getOldValue())
        }
        restoreInitialValue() {
          this._cell.setValueActual(this._cell.initialValue)
        }
        checkHeight() {
          this._cell.checkHeight()
        }
        getTable() {
          return this._cell.table
        }
        _getSelf() {
          return this._cell
        }
      }
      class v extends m {
        constructor(t, e) {
          super(t.table), this.table = t.table, this.column = t, this.row = e, this.element = null, this.value = null, this.initialValue, this.oldValue = null, this.modules = {}, this.height = null, this.width = null, this.minWidth = null, this.component = null, this.loaded = !1, this.build()
        }
        build() {
          this.generateElement(), this.setWidth(), this._configureCell(), this.setValueActual(this.column.getFieldValue(this.row.data)), this.initialValue = this.value
        }
        generateElement() {
          this.element = document.createElement("div"), this.element.className = "tabulator-cell", this.element.setAttribute("role", "gridcell"), this.column.isRowHeader && this.element.classList.add("tabulator-row-header")
        }
        _configureCell() {
          var t = this.element,
            e = this.column.getField();
          t.style.textAlign = this.column.hozAlign, this.column.vertAlign && (t.style.display = "inline-flex", t.style.alignItems = {
            top: "flex-start",
            bottom: "flex-end",
            middle: "center"
          } [this.column.vertAlign] || "", this.column.hozAlign && (t.style.justifyContent = {
            left: "flex-start",
            right: "flex-end",
            center: "center"
          } [this.column.hozAlign] || "")), e && t.setAttribute("tabulator-field", e), this.column.definition.cssClass && this.column.definition.cssClass.split(" ").forEach(e => {
            t.classList.add(e)
          }), this.dispatch("cell-init", this), this.column.visible || this.hide()
        }
        _generateContents() {
          var t;
          switch (typeof(t = this.chain("cell-format", this, null, () => this.element.innerHTML = this.value))) {
            case "object":
              if (t instanceof Node) {
                for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                this.element.appendChild(t)
              } else this.element.innerHTML = "", null != t && console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", t);
              break;
            case "undefined":
              this.element.innerHTML = "";
              break;
            default:
              this.element.innerHTML = t
          }
        }
        cellRendered() {
          this.dispatch("cell-rendered", this)
        }
        getElement(t) {
          return this.loaded || (this.loaded = !0, t || this.layoutElement()), this.element
        }
        getValue() {
          return this.value
        }
        getOldValue() {
          return this.oldValue
        }
        setValue(t, e, i) {
          this.setValueProcessData(t, e, i) && (this.dispatch("cell-value-updated", this), this.cellRendered(), this.column.definition.cellEdited && this.column.definition.cellEdited.call(this.table, this.getComponent()), this.dispatchExternal("cellEdited", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()))
        }
        setValueProcessData(t, e, i) {
          var s = !1;
          return (this.value !== t || i) && (s = !0, e && (t = this.chain("cell-value-changing", [this, t], null, t))), this.setValueActual(t), s && this.dispatch("cell-value-changed", this), s
        }
        setValueActual(t) {
          this.oldValue = this.value, this.value = t, this.dispatch("cell-value-save-before", this), this.column.setFieldValue(this.row.data, t), this.dispatch("cell-value-save-after", this), this.loaded && this.layoutElement()
        }
        layoutElement() {
          this._generateContents(), this.dispatch("cell-layout", this)
        }
        setWidth() {
          this.width = this.column.width, this.element.style.width = this.column.widthStyled
        }
        clearWidth() {
          this.width = "", this.element.style.width = ""
        }
        getWidth() {
          return this.width || this.element.offsetWidth
        }
        setMinWidth() {
          this.minWidth = this.column.minWidth, this.element.style.minWidth = this.column.minWidthStyled
        }
        setMaxWidth() {
          this.maxWidth = this.column.maxWidth, this.element.style.maxWidth = this.column.maxWidthStyled
        }
        checkHeight() {
          this.row.reinitializeHeight()
        }
        clearHeight() {
          this.element.style.height = "", this.height = null, this.dispatch("cell-height", this, "")
        }
        setHeight() {
          this.height = this.row.height, this.element.style.height = this.row.heightStyled, this.dispatch("cell-height", this, this.row.heightStyled)
        }
        getHeight() {
          return this.height || this.element.offsetHeight
        }
        show() {
          this.element.style.display = this.column.vertAlign ? "inline-flex" : ""
        }
        hide() {
          this.element.style.display = "none"
        }
        delete() {
          this.dispatch("cell-delete", this), !this.table.rowManager.redrawBlock && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.column.deleteCell(this), this.row.deleteCell(this), this.calcs = {}
        }
        getIndex() {
          return this.row.getCellIndex(this)
        }
        getComponent() {
          return this.component || (this.component = new b(this)), this.component
        }
      }
      class w {
        constructor(t) {
          return this._column = t, this.type = "ColumnComponent", new Proxy(this, {
            get: function(t, e, i) {
              return void 0 !== t[e] ? t[e] : t._column.table.componentFunctionBinder.handle("column", t._column, e)
            }
          })
        }
        getElement() {
          return this._column.getElement()
        }
        getDefinition() {
          return this._column.getDefinition()
        }
        getField() {
          return this._column.getField()
        }
        getTitleDownload() {
          return this._column.getTitleDownload()
        }
        getCells() {
          var t = [];
          return this._column.cells.forEach(function(e) {
            t.push(e.getComponent())
          }), t
        }
        isVisible() {
          return this._column.visible
        }
        show() {
          this._column.isGroup ? this._column.columns.forEach(function(t) {
            t.show()
          }) : this._column.show()
        }
        hide() {
          this._column.isGroup ? this._column.columns.forEach(function(t) {
            t.hide()
          }) : this._column.hide()
        }
        toggle() {
          this._column.visible ? this.hide() : this.show()
        }
        delete() {
          return this._column.delete()
        }
        getSubColumns() {
          var t = [];
          return this._column.columns.length && this._column.columns.forEach(function(e) {
            t.push(e.getComponent())
          }), t
        }
        getParentColumn() {
          return this._column.getParentComponent()
        }
        _getSelf() {
          return this._column
        }
        scrollTo(t, e) {
          return this._column.table.columnManager.scrollToColumn(this._column, t, e)
        }
        getTable() {
          return this._column.table
        }
        move(t, e) {
          var i = this._column.table.columnManager.findColumn(t);
          i ? this._column.table.columnManager.moveColumn(this._column, i, e) : console.warn("Move Error - No matching column found:", i)
        }
        getNextColumn() {
          var t = this._column.nextColumn();
          return !!t && t.getComponent()
        }
        getPrevColumn() {
          var t = this._column.prevColumn();
          return !!t && t.getComponent()
        }
        updateDefinition(t) {
          return this._column.updateDefinition(t)
        }
        getWidth() {
          return this._column.getWidth()
        }
        setWidth(t) {
          var e;
          return e = !0 === t ? this._column.reinitializeWidth(!0) : this._column.setWidth(t), this._column.table.columnManager.rerenderColumns(!0), e
        }
      }
      var y = {
        title: void 0,
        field: void 0,
        columns: void 0,
        visible: void 0,
        hozAlign: void 0,
        vertAlign: void 0,
        width: void 0,
        minWidth: 40,
        maxWidth: void 0,
        maxInitialWidth: void 0,
        cssClass: void 0,
        variableHeight: void 0,
        headerVertical: void 0,
        headerHozAlign: void 0,
        headerWordWrap: !1,
        editableTitle: void 0
      };
      class C extends m {
        static defaultOptionList = y;
        constructor(t, e, i) {
          super(e.table), this.definition = t, this.parent = e, this.type = "column", this.columns = [], this.cells = [], this.isGroup = !1, this.isRowHeader = i, this.element = this.createElement(), this.contentElement = !1, this.titleHolderElement = !1, this.titleElement = !1, this.groupElement = this.createGroupElement(), this.hozAlign = "", this.vertAlign = "", this.field = "", this.fieldStructure = "", this.getFieldValue = "", this.setFieldValue = "", this.titleDownload = null, this.titleFormatterRendered = !1, this.mapDefinitions(), this.setField(this.definition.field), this.modules = {}, this.width = null, this.widthStyled = "", this.maxWidth = null, this.maxWidthStyled = "", this.maxInitialWidth = null, this.minWidth = null, this.minWidthStyled = "", this.widthFixed = !1, this.visible = !0, this.component = null, this.definition.columns ? (this.isGroup = !0, this.definition.columns.forEach((t, e) => {
            var i = new C(t, this);
            this.attachColumn(i)
          }), this.checkColumnVisibility()) : e.registerColumnField(this), this._initialize()
        }
        createElement() {
          var t = document.createElement("div");
          switch (t.classList.add("tabulator-col"), t.setAttribute("role", "columnheader"), t.setAttribute("aria-sort", "none"), this.isRowHeader && t.classList.add("tabulator-row-header"), this.table.options.columnHeaderVertAlign) {
            case "middle":
              t.style.justifyContent = "center";
              break;
            case "bottom":
              t.style.justifyContent = "flex-end"
          }
          return t
        }
        createGroupElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-col-group-cols"), t
        }
        mapDefinitions() {
          var t = this.table.options.columnDefaults;
          if (t)
            for (let e in t) void 0 === this.definition[e] && (this.definition[e] = t[e]);
          this.definition = this.table.columnManager.optionsList.generate(C.defaultOptionList, this.definition)
        }
        checkDefinition() {
          Object.keys(this.definition).forEach(t => {
            -1 === C.defaultOptionList.indexOf(t) && console.warn("Invalid column definition option in '" + (this.field || this.definition.title) + "' column:", t)
          })
        }
        setField(t) {
          this.field = t, this.fieldStructure = t ? this.table.options.nestedFieldSeparator ? t.split(this.table.options.nestedFieldSeparator) : [t] : [], this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData, this.setFieldValue = this.fieldStructure.length > 1 ? this._setNestedData : this._setFlatData
        }
        registerColumnPosition(t) {
          this.parent.registerColumnPosition(t)
        }
        registerColumnField(t) {
          this.parent.registerColumnField(t)
        }
        reRegisterPosition() {
          this.isGroup ? this.columns.forEach(function(t) {
            t.reRegisterPosition()
          }) : this.registerColumnPosition(this)
        }
        _initialize() {
          for (var t = this.definition; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
          t.headerVertical && (this.element.classList.add("tabulator-col-vertical"), "flip" === t.headerVertical && this.element.classList.add("tabulator-col-vertical-flip")), this.contentElement = this._buildColumnHeaderContent(), this.element.appendChild(this.contentElement), this.isGroup ? this._buildGroupHeader() : this._buildColumnHeader(), this.dispatch("column-init", this)
        }
        _buildColumnHeader() {
          var t = this.definition;
          this.dispatch("column-layout", this), void 0 !== t.visible && (t.visible ? this.show(!0) : this.hide(!0)), t.cssClass && t.cssClass.split(" ").forEach(t => {
            this.element.classList.add(t)
          }), t.field && this.element.setAttribute("tabulator-field", t.field), this.setMinWidth(parseInt(t.minWidth)), t.maxInitialWidth && (this.maxInitialWidth = parseInt(t.maxInitialWidth)), t.maxWidth && this.setMaxWidth(parseInt(t.maxWidth)), this.reinitializeWidth(), this.hozAlign = this.definition.hozAlign, this.vertAlign = this.definition.vertAlign, this.titleElement.style.textAlign = this.definition.headerHozAlign
        }
        _buildColumnHeaderContent() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-col-content"), this.titleHolderElement = document.createElement("div"), this.titleHolderElement.classList.add("tabulator-col-title-holder"), t.appendChild(this.titleHolderElement), this.titleElement = this._buildColumnHeaderTitle(), this.titleHolderElement.appendChild(this.titleElement), t
        }
        _buildColumnHeaderTitle() {
          var t = this.definition,
            e = document.createElement("div");
          if (e.classList.add("tabulator-col-title"), t.headerWordWrap && e.classList.add("tabulator-col-title-wrap"), t.editableTitle) {
            var i = document.createElement("input");
            i.classList.add("tabulator-title-editor"), i.addEventListener("click", t => {
              t.stopPropagation(), i.focus()
            }), i.addEventListener("mousedown", t => {
              t.stopPropagation()
            }), i.addEventListener("change", () => {
              t.title = i.value, this.dispatchExternal("columnTitleChanged", this.getComponent())
            }), e.appendChild(i), t.field ? this.langBind("columns|" + t.field, e => {
              i.value = e || t.title || "&nbsp;"
            }) : i.value = t.title || "&nbsp;"
          } else t.field ? this.langBind("columns|" + t.field, i => {
            this._formatColumnHeaderTitle(e, i || t.title || "&nbsp;")
          }) : this._formatColumnHeaderTitle(e, t.title || "&nbsp;");
          return e
        }
        _formatColumnHeaderTitle(t, e) {
          var i = this.chain("column-format", [this, e, t], null, () => e);
          switch (typeof i) {
            case "object":
              i instanceof Node ? t.appendChild(i) : (t.innerHTML = "", console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", i));
              break;
            case "undefined":
              t.innerHTML = "";
              break;
            default:
              t.innerHTML = i
          }
        }
        _buildGroupHeader() {
          this.element.classList.add("tabulator-col-group"), this.element.setAttribute("role", "columngroup"), this.element.setAttribute("aria-title", this.definition.title), this.definition.cssClass && this.definition.cssClass.split(" ").forEach(t => {
            this.element.classList.add(t)
          }), this.titleElement.style.textAlign = this.definition.headerHozAlign, this.element.appendChild(this.groupElement)
        }
        _getFlatData(t) {
          return t[this.field]
        }
        _getNestedData(t) {
          var e, i = t,
            s = this.fieldStructure,
            o = s.length;
          for (let t = 0; t < o && (e = i = i[s[t]], i); t++);
          return e
        }
        _setFlatData(t, e) {
          this.field && (t[this.field] = e)
        }
        _setNestedData(t, e) {
          var i = t,
            s = this.fieldStructure,
            o = s.length;
          for (let t = 0; t < o; t++)
            if (t == o - 1) i[s[t]] = e;
            else {
              if (!i[s[t]]) {
                if (void 0 === e) break;
                i[s[t]] = {}
              }
              i = i[s[t]]
            }
        }
        attachColumn(t) {
          this.groupElement ? (this.columns.push(t), this.groupElement.appendChild(t.getElement()), t.columnRendered()) : console.warn("Column Warning - Column being attached to another column instead of column group")
        }
        verticalAlign(t, e) {
          var i = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : e || this.parent.getHeadersElement().clientHeight;
          this.element.style.height = i + "px", this.dispatch("column-height", this, this.element.style.height), this.isGroup && (this.groupElement.style.minHeight = i - this.contentElement.offsetHeight + "px"), this.columns.forEach(function(e) {
            e.verticalAlign(t)
          })
        }
        clearVerticalAlign() {
          this.element.style.paddingTop = "", this.element.style.height = "", this.element.style.minHeight = "", this.groupElement.style.minHeight = "", this.columns.forEach(function(t) {
            t.clearVerticalAlign()
          }), this.dispatch("column-height", this, "")
        }
        getElement() {
          return this.element
        }
        getGroupElement() {
          return this.groupElement
        }
        getField() {
          return this.field
        }
        getTitleDownload() {
          return this.titleDownload
        }
        getFirstColumn() {
          return this.isGroup ? !!this.columns.length && this.columns[0].getFirstColumn() : this
        }
        getLastColumn() {
          return this.isGroup ? !!this.columns.length && this.columns[this.columns.length - 1].getLastColumn() : this
        }
        getColumns(t) {
          var e = [];
          return t ? this.columns.forEach(t => {
            e.push(t), e = e.concat(t.getColumns(!0))
          }) : e = this.columns, e
        }
        getCells() {
          return this.cells
        }
        getTopColumn() {
          return this.parent.isGroup ? this.parent.getTopColumn() : this
        }
        getDefinition(t) {
          var e = [];
          return this.isGroup && t && (this.columns.forEach(function(t) {
            e.push(t.getDefinition(!0))
          }), this.definition.columns = e), this.definition
        }
        checkColumnVisibility() {
          var t = !1;
          this.columns.forEach(function(e) {
            e.visible && (t = !0)
          }), t ? (this.show(), this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1)) : this.hide()
        }
        show(t, e) {
          this.visible || (this.visible = !0, this.element.style.display = "", this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach(function(t) {
            t.show()
          }), this.isGroup || null !== this.width || this.reinitializeWidth(), this.table.columnManager.verticalAlignHeaders(), this.dispatch("column-show", this, e), t || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !0), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.rerenderColumns())
        }
        hide(t, e) {
          this.visible && (this.visible = !1, this.element.style.display = "none", this.table.columnManager.verticalAlignHeaders(), this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach(function(t) {
            t.hide()
          }), this.dispatch("column-hide", this, e), t || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.rerenderColumns())
        }
        matchChildWidths() {
          var t = 0;
          this.contentElement && this.columns.length && (this.columns.forEach(function(e) {
            e.visible && (t += e.getWidth())
          }), this.contentElement.style.maxWidth = t - 1 + "px", this.table.initialized && (this.element.style.width = t + "px"), this.parent.isGroup && this.parent.matchChildWidths())
        }
        removeChild(t) {
          var e = this.columns.indexOf(t);
          e > -1 && this.columns.splice(e, 1), this.columns.length || this.delete()
        }
        setWidth(t) {
          this.widthFixed = !0, this.setWidthActual(t)
        }
        setWidthActual(t) {
          isNaN(t) && (t = Math.floor(this.table.element.clientWidth / 100 * parseInt(t))), t = Math.max(this.minWidth, t), this.maxWidth && (t = Math.min(this.maxWidth, t)), this.width = t, this.widthStyled = t ? t + "px" : "", this.element.style.width = this.widthStyled, this.isGroup || this.cells.forEach(function(t) {
            t.setWidth()
          }), this.parent.isGroup && this.parent.matchChildWidths(), this.dispatch("column-width", this), this.subscribedExternal("columnWidth") && this.dispatchExternal("columnWidth", this.getComponent())
        }
        checkCellHeights() {
          var t = [];
          this.cells.forEach(function(e) {
            e.row.heightInitialized && (null !== e.row.getElement().offsetParent ? (t.push(e.row), e.row.clearCellHeight()) : e.row.heightInitialized = !1)
          }), t.forEach(function(t) {
            t.calcHeight()
          }), t.forEach(function(t) {
            t.setCellHeight()
          })
        }
        getWidth() {
          var t = 0;
          return this.isGroup ? this.columns.forEach(function(e) {
            e.visible && (t += e.getWidth())
          }) : t = this.width, t
        }
        getLeftOffset() {
          var t = this.element.offsetLeft;
          return this.parent.isGroup && (t += this.parent.getLeftOffset()), t
        }
        getHeight() {
          return Math.ceil(this.element.getBoundingClientRect().height)
        }
        setMinWidth(t) {
          this.maxWidth && t > this.maxWidth && (t = this.maxWidth, console.warn("the minWidth (" + t + "px) for column '" + this.field + "' cannot be bigger that its maxWidth (" + this.maxWidthStyled + ")")), this.minWidth = t, this.minWidthStyled = t ? t + "px" : "", this.element.style.minWidth = this.minWidthStyled, this.cells.forEach(function(t) {
            t.setMinWidth()
          })
        }
        setMaxWidth(t) {
          this.minWidth && t < this.minWidth && (t = this.minWidth, console.warn("the maxWidth (" + t + "px) for column '" + this.field + "' cannot be smaller that its minWidth (" + this.minWidthStyled + ")")), this.maxWidth = t, this.maxWidthStyled = t ? t + "px" : "", this.element.style.maxWidth = this.maxWidthStyled, this.cells.forEach(function(t) {
            t.setMaxWidth()
          })
        }
        delete() {
          return new Promise((t, e) => {
            this.isGroup && this.columns.forEach(function(t) {
              t.delete()
            }), this.dispatch("column-delete", this);
            var i = this.cells.length;
            for (let t = 0; t < i; t++) this.cells[0].delete();
            this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.contentElement = !1, this.titleElement = !1, this.groupElement = !1, this.parent.isGroup && this.parent.removeChild(this), this.table.columnManager.deregisterColumn(this), this.table.columnManager.rerenderColumns(!0), this.dispatch("column-deleted", this), t()
          })
        }
        columnRendered() {
          this.titleFormatterRendered && this.titleFormatterRendered(), this.dispatch("column-rendered", this)
        }
        generateCell(t) {
          var e = new v(this, t);
          return this.cells.push(e), e
        }
        nextColumn() {
          var t = this.table.columnManager.findColumnIndex(this);
          return t > -1 && this._nextVisibleColumn(t + 1)
        }
        _nextVisibleColumn(t) {
          var e = this.table.columnManager.getColumnByIndex(t);
          return !e || e.visible ? e : this._nextVisibleColumn(t + 1)
        }
        prevColumn() {
          var t = this.table.columnManager.findColumnIndex(this);
          return t > -1 && this._prevVisibleColumn(t - 1)
        }
        _prevVisibleColumn(t) {
          var e = this.table.columnManager.getColumnByIndex(t);
          return !e || e.visible ? e : this._prevVisibleColumn(t - 1)
        }
        reinitializeWidth(t) {
          this.widthFixed = !1, void 0 === this.definition.width || t || this.setWidth(this.definition.width), this.dispatch("column-width-fit-before", this), this.fitToData(t), this.dispatch("column-width-fit-after", this)
        }
        fitToData(t) {
          if (!this.isGroup) {
            this.widthFixed || (this.element.style.width = "", this.cells.forEach(t => {
              t.clearWidth()
            }));
            var e = this.element.offsetWidth;
            if ((!this.width || !this.widthFixed) && (this.cells.forEach(t => {
                var i = t.getWidth();
                i > e && (e = i)
              }), e)) {
              var i = e + 1;
              t ? this.setWidth(i) : (this.maxInitialWidth && !t && (i = Math.min(i, this.maxInitialWidth)), this.setWidthActual(i))
            }
          }
        }
        updateDefinition(t) {
          var e;
          return this.isGroup || this.parent.isGroup ? (console.error("Column Update Error - The updateDefinition function is only available on ungrouped columns"), Promise.reject("Column Update Error - The updateDefinition function is only available on columns, not column groups")) : (e = Object.assign({}, this.getDefinition()), e = Object.assign(e, t), this.table.columnManager.addColumn(e, !1, this).then(t => (e.field == this.field && (this.field = !1), this.delete().then(() => t.getComponent()))))
        }
        deleteCell(t) {
          var e = this.cells.indexOf(t);
          e > -1 && this.cells.splice(e, 1)
        }
        getComponent() {
          return this.component || (this.component = new w(this)), this.component
        }
        getPosition() {
          return this.table.columnManager.getVisibleColumnsByIndex().indexOf(this) + 1
        }
        getParentComponent() {
          return this.parent instanceof C && this.parent.getComponent()
        }
      }
      class E {
        constructor(t) {
          return this._row = t, new Proxy(this, {
            get: function(t, e, i) {
              return void 0 !== t[e] ? t[e] : t._row.table.componentFunctionBinder.handle("row", t._row, e)
            }
          })
        }
        getData(t) {
          return this._row.getData(t)
        }
        getElement() {
          return this._row.getElement()
        }
        getCells() {
          var t = [];
          return this._row.getCells().forEach(function(e) {
            t.push(e.getComponent())
          }), t
        }
        getCell(t) {
          var e = this._row.getCell(t);
          return !!e && e.getComponent()
        }
        getIndex() {
          return this._row.getData("data")[this._row.table.options.index]
        }
        getPosition() {
          return this._row.getPosition()
        }
        watchPosition(t) {
          return this._row.watchPosition(t)
        }
        delete() {
          return this._row.delete()
        }
        scrollTo(t, e) {
          return this._row.table.rowManager.scrollToRow(this._row, t, e)
        }
        move(t, e) {
          this._row.moveToRow(t, e)
        }
        update(t) {
          return this._row.updateData(t)
        }
        normalizeHeight() {
          this._row.normalizeHeight(!0)
        }
        _getSelf() {
          return this._row
        }
        reformat() {
          return this._row.reinitialize()
        }
        getTable() {
          return this._row.table
        }
        getNextRow() {
          var t = this._row.nextRow();
          return t ? t.getComponent() : t
        }
        getPrevRow() {
          var t = this._row.prevRow();
          return t ? t.getComponent() : t
        }
      }
      class x extends m {
        constructor(t, e, i = "row") {
          super(e.table), this.parent = e, this.data = {}, this.type = i, this.element = !1, this.modules = {}, this.cells = [], this.height = 0, this.heightStyled = "", this.manualHeight = !1, this.outerHeight = 0, this.initialized = !1, this.heightInitialized = !1, this.position = 0, this.positionWatchers = [], this.component = null, this.created = !1, this.setData(t)
        }
        create() {
          this.created || (this.created = !0, this.generateElement())
        }
        createElement() {
          var t = document.createElement("div");
          t.classList.add("tabulator-row"), t.setAttribute("role", "row"), this.element = t
        }
        getElement() {
          return this.create(), this.element
        }
        detachElement() {
          this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element)
        }
        generateElement() {
          this.createElement(), this.dispatch("row-init", this)
        }
        generateCells() {
          this.cells = this.table.columnManager.generateCells(this)
        }
        initialize(t, e) {
          if (this.create(), !this.initialized || t) {
            for (this.deleteCells(); this.element.firstChild;) this.element.removeChild(this.element.firstChild);
            this.dispatch("row-layout-before", this), this.generateCells(), this.initialized = !0, this.table.columnManager.renderer.renderRowCells(this, e), t && this.normalizeHeight(), this.dispatch("row-layout", this), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent()), this.dispatch("row-layout-after", this)
          } else this.table.columnManager.renderer.rerenderRowCells(this, e)
        }
        rendered() {
          this.cells.forEach(t => {
            t.cellRendered()
          })
        }
        reinitializeHeight() {
          this.heightInitialized = !1, this.element && null !== this.element.offsetParent && this.normalizeHeight(!0)
        }
        deinitialize() {
          this.initialized = !1
        }
        deinitializeHeight() {
          this.heightInitialized = !1
        }
        reinitialize(t) {
          this.initialized = !1, this.heightInitialized = !1, this.manualHeight || (this.height = 0, this.heightStyled = ""), this.element && null !== this.element.offsetParent && this.initialize(!0), this.dispatch("row-relayout", this)
        }
        calcHeight(t) {
          var e = 0,
            i = 0;
          this.table.options.rowHeight ? this.height = this.table.options.rowHeight : (i = this.calcMinHeight(), e = this.calcMaxHeight(), this.height = t ? Math.max(e, i) : this.manualHeight ? this.height : Math.max(e, i)), this.heightStyled = this.height ? this.height + "px" : "", this.outerHeight = this.element.offsetHeight
        }
        calcMinHeight() {
          return this.table.options.resizableRows ? this.element.clientHeight : 0
        }
        calcMaxHeight() {
          var t = 0;
          return this.cells.forEach(function(e) {
            var i = e.getHeight();
            i > t && (t = i)
          }), t
        }
        setCellHeight() {
          this.cells.forEach(function(t) {
            t.setHeight()
          }), this.heightInitialized = !0
        }
        clearCellHeight() {
          this.cells.forEach(function(t) {
            t.clearHeight()
          })
        }
        normalizeHeight(t) {
          t && !this.table.options.rowHeight && this.clearCellHeight(), this.calcHeight(t), this.setCellHeight()
        }
        setHeight(t, e) {
          (this.height != t || e) && (this.manualHeight = !0, this.height = t, this.heightStyled = t ? t + "px" : "", this.setCellHeight(), this.outerHeight = this.element.offsetHeight, this.subscribedExternal("rowHeight") && this.dispatchExternal("rowHeight", this.getComponent()))
        }
        getHeight() {
          return this.outerHeight
        }
        getWidth() {
          return this.element.offsetWidth
        }
        deleteCell(t) {
          var e = this.cells.indexOf(t);
          e > -1 && this.cells.splice(e, 1)
        }
        setData(t) {
          this.data = this.chain("row-data-init-before", [this, t], void 0, t), this.dispatch("row-data-init-after", this)
        }
        updateData(t) {
          var e, i = this.element && p.elVisible(this.element),
            s = {};
          return new Promise((o, n) => {
            "string" == typeof t && (t = JSON.parse(t)), this.dispatch("row-data-save-before", this), this.subscribed("row-data-changing") && (s = Object.assign(s, this.data), s = Object.assign(s, t)), e = this.chain("row-data-changing", [this, s, t], null, t);
            const r = [];
            for (let i in t) this.table.columnManager.getColumnsByFieldRoot(i).forEach(t => {
              let i = this.getCell(t.getField());
              if (i) {
                let s = t.getFieldValue(e);
                i.getValue() !== s && r.push([i, s])
              }
            });
            for (let t in e) this.data[t] = e[t];
            this.dispatch("row-data-save-after", this), r.forEach(([t, e]) => {
              t.setValueProcessData(e), i && t.cellRendered()
            }), i ? (this.normalizeHeight(!0), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent())) : (this.initialized = !1, this.height = 0, this.heightStyled = ""), this.dispatch("row-data-changed", this, i, t), this.dispatchExternal("rowUpdated", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), o()
          })
        }
        getData(t) {
          return t ? this.chain("row-data-retrieve", [this, t], null, this.data) : this.data
        }
        getCell(t) {
          return t = this.table.columnManager.findColumn(t), this.initialized || 0 !== this.cells.length || this.generateCells(), this.cells.find(function(e) {
            return e.column === t
          })
        }
        getCellIndex(t) {
          return this.cells.findIndex(function(e) {
            return e === t
          })
        }
        findCell(t) {
          return this.cells.find(e => e.element === t)
        }
        getCells() {
          return this.initialized || 0 !== this.cells.length || this.generateCells(), this.cells
        }
        nextRow() {
          return this.table.rowManager.nextDisplayRow(this, !0) || !1
        }
        prevRow() {
          return this.table.rowManager.prevDisplayRow(this, !0) || !1
        }
        moveToRow(t, e) {
          var i = this.table.rowManager.findRow(t);
          i ? (this.table.rowManager.moveRowActual(this, i, !e), this.table.rowManager.refreshActiveData("display", !1, !0)) : console.warn("Move Error - No matching row found:", t)
        }
        delete() {
          return this.dispatch("row-delete", this), this.deleteActual(), Promise.resolve()
        }
        deleteActual(t) {
          this.detachModules(), this.table.rowManager.deleteRow(this, t), this.deleteCells(), this.initialized = !1, this.heightInitialized = !1, this.element = !1, this.dispatch("row-deleted", this)
        }
        detachModules() {
          this.dispatch("row-deleting", this)
        }
        deleteCells() {
          var t = this.cells.length;
          for (let e = 0; e < t; e++) this.cells[0].delete()
        }
        wipe() {
          if (this.detachModules(), this.deleteCells(), this.element) {
            for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
            this.element.parentNode && this.element.parentNode.removeChild(this.element)
          }
          this.element = !1, this.modules = {}
        }
        isDisplayed() {
          return this.table.rowManager.getDisplayRows().includes(this)
        }
        getPosition() {
          return !!this.isDisplayed() && this.position
        }
        setPosition(t) {
          t != this.position && (this.position = t, this.positionWatchers.forEach(t => {
            t(this.position)
          }))
        }
        watchPosition(t) {
          this.positionWatchers.push(t), t(this.position)
        }
        getGroup() {
          return this.modules.group || !1
        }
        getComponent() {
          return this.component || (this.component = new E(this)), this.component
        }
      }
      class R extends f {
        static moduleName = "htmlTableImport";
        constructor(t) {
          super(t), this.fieldIndex = [], this.hasIndex = !1
        }
        initialize() {
          this.tableElementCheck()
        }
        tableElementCheck() {
          this.table.originalElement && "TABLE" === this.table.originalElement.tagName && (this.table.originalElement.childNodes.length ? this.parseTable() : console.warn("Unable to parse data from empty table tag, Tabulator should be initialized on a div tag unless importing data from a table element."))
        }
        parseTable() {
          var t = this.table.originalElement,
            e = this.table.options,
            i = t.getElementsByTagName("th"),
            s = t.getElementsByTagName("tbody")[0],
            o = [];
          this.hasIndex = !1, this.dispatchExternal("htmlImporting"), s = s ? s.getElementsByTagName("tr") : [], this._extractOptions(t, e), i.length ? this._extractHeaders(i, s) : this._generateBlankHeaders(i, s);
          for (var n = 0; n < s.length; n++) {
            var r = s[n].getElementsByTagName("td"),
              l = {};
            this.hasIndex || (l[e.index] = n);
            for (var a = 0; a < r.length; a++) {
              var h = r[a];
              void 0 !== this.fieldIndex[a] && (l[this.fieldIndex[a]] = h.innerHTML)
            }
            o.push(l)
          }
          e.data = o, this.dispatchExternal("htmlImported")
        }
        _extractOptions(t, e, i) {
          var s = t.attributes,
            o = i ? Object.keys(i) : Object.keys(e),
            n = {};
          for (var r in o.forEach(t => {
              n[t.toLowerCase()] = t
            }), s) {
            var l, a = s[r];
            a && "object" == typeof a && a.name && 0 === a.name.indexOf("tabulator-") && (l = a.name.replace("tabulator-", ""), void 0 !== n[l] && (e[n[l]] = this._attribValue(a.value)))
          }
        }
        _attribValue(t) {
          return "true" === t || "false" !== t && t
        }
        _findCol(t) {
          return this.table.options.columns.find(e => e.title === t) || !1
        }
        _extractHeaders(t, e) {
          for (var i = 0; i < t.length; i++) {
            var s, o = t[i],
              n = !1,
              r = this._findCol(o.textContent);
            r ? n = !0 : r = {
              title: o.textContent.trim()
            }, r.field || (r.field = o.textContent.trim().toLowerCase().replaceAll(" ", "_")), (s = o.getAttribute("width")) && !r.width && (r.width = s), this._extractOptions(o, r, this.table.columnManager.optionsList.registeredDefaults), this.fieldIndex[i] = r.field, r.field == this.table.options.index && (this.hasIndex = !0), n || this.table.options.columns.push(r)
          }
        }
        _generateBlankHeaders(t, e) {
          for (var i = 0; i < t.length; i++) {
            var s = t[i],
              o = {
                title: "",
                field: "col" + i
              };
            this.fieldIndex[i] = o.field;
            var n = s.getAttribute("width");
            n && (o.width = n), this.table.options.columns.push(o)
          }
        }
      }

      function M(t, e, i, s, o, n, r) {
        var l = this.table.dependencyRegistry.lookup(["luxon", "DateTime"], "DateTime"),
          a = r.format || "dd/MM/yyyy HH:mm:ss",
          h = r.alignEmptyValues,
          d = 0;
        if (void 0 !== l) {
          if (l.isDateTime(t) || (t = "iso" === a ? l.fromISO(String(t)) : l.fromFormat(String(t), a)), l.isDateTime(e) || (e = "iso" === a ? l.fromISO(String(e)) : l.fromFormat(String(e), a)), t.isValid) {
            if (e.isValid) return t - e;
            d = 1
          } else d = e.isValid ? -1 : 0;
          return ("top" === h && "desc" === n || "bottom" === h && "asc" === n) && (d *= -1), d
        }
        console.error("Sort Error - 'datetime' sorter is dependant on luxon.js")
      }
      var D = {
        number: function(t, e, i, s, o, n, r) {
          var l = r.alignEmptyValues,
            a = r.decimalSeparator,
            h = r.thousandSeparator,
            d = 0;
          if (t = String(t), e = String(e), h && (t = t.split(h).join(""), e = e.split(h).join("")), a && (t = t.split(a).join("."), e = e.split(a).join(".")), t = parseFloat(t), e = parseFloat(e), isNaN(t)) d = isNaN(e) ? 0 : -1;
          else {
            if (!isNaN(e)) return t - e;
            d = 1
          }
          return ("top" === l && "desc" === n || "bottom" === l && "asc" === n) && (d *= -1), d
        },
        string: function(t, e, i, s, o, n, r) {
          var l, a = r.alignEmptyValues,
            h = 0;
          if (t) {
            if (e) {
              switch (typeof r.locale) {
                case "boolean":
                  r.locale && (l = this.langLocale());
                  break;
                case "string":
                  l = r.locale
              }
              return String(t).toLowerCase().localeCompare(String(e).toLowerCase(), l)
            }
            h = 1
          } else h = e ? -1 : 0;
          return ("top" === a && "desc" === n || "bottom" === a && "asc" === n) && (h *= -1), h
        },
        date: function(t, e, i, s, o, n, r) {
          return r.format || (r.format = "dd/MM/yyyy"), M.call(this, t, e, i, s, o, n, r)
        },
        time: function(t, e, i, s, o, n, r) {
          return r.format || (r.format = "HH:mm"), M.call(this, t, e, i, s, o, n, r)
        },
        datetime: M,
        boolean: function(t, e, i, s, o, n, r) {
          return (!0 === t || "true" === t || "True" === t || 1 === t ? 1 : 0) - (!0 === e || "true" === e || "True" === e || 1 === e ? 1 : 0)
        },
        array: function(t, e, i, s, o, n, r) {
          var l, a = r.type || "length",
            h = r.alignEmptyValues,
            d = 0,
            c = this.table;

          function u(t) {
            var e;
            switch (l && (t = l(t)), a) {
              case "length":
                e = t.length;
                break;
              case "sum":
                e = t.reduce(function(t, e) {
                  return t + e
                });
                break;
              case "max":
                e = Math.max.apply(null, t);
                break;
              case "min":
                e = Math.min.apply(null, t);
                break;
              case "avg":
                e = t.reduce(function(t, e) {
                  return t + e
                }) / t.length;
                break;
              case "string":
                e = t.join("")
            }
            return e
          }
          if (r.valueMap && (l = "string" == typeof r.valueMap ? function(t) {
              return t.map(t => p.retrieveNestedData(c.options.nestedFieldSeparator, r.valueMap, t))
            } : r.valueMap), Array.isArray(t)) {
            if (Array.isArray(e)) return "string" === a ? String(u(t)).toLowerCase().localeCompare(String(u(e)).toLowerCase()) : u(e) - u(t);
            d = 1
          } else d = Array.isArray(e) ? -1 : 0;
          return ("top" === h && "desc" === n || "bottom" === h && "asc" === n) && (d *= -1), d
        },
        exists: function(t, e, i, s, o, n, r) {
          return (void 0 === t ? 0 : 1) - (void 0 === e ? 0 : 1)
        },
        alphanum: function(t, e, i, s, o, n, r) {
          var l, a, h, d, c, u = 0,
            m = /(\d+)|(\D+)/g,
            p = /\d/,
            g = r.alignEmptyValues,
            f = 0;
          if (t || 0 === t) {
            if (e || 0 === e) {
              if (isFinite(t) && isFinite(e)) return t - e;
              if ((l = String(t).toLowerCase()) === (a = String(e).toLowerCase())) return 0;
              if (!p.test(l) || !p.test(a)) return l > a ? 1 : -1;
              for (l = l.match(m), a = a.match(m), c = l.length > a.length ? a.length : l.length; u < c;)
                if ((h = l[u]) !== (d = a[u++])) return isFinite(h) && isFinite(d) ? ("0" === h.charAt(0) && (h = "." + h), "0" === d.charAt(0) && (d = "." + d), h - d) : h > d ? 1 : -1;
              return l.length > a.length
            }
            f = 1
          } else f = e || 0 === e ? -1 : 0;
          return ("top" === g && "desc" === n || "bottom" === g && "asc" === n) && (f *= -1), f
        }
      };
      class T extends f {
        static moduleName = "sort";
        static sorters = D;
        constructor(t) {
          super(t), this.sortList = [], this.changed = !1, this.registerTableOption("sortMode", "local"), this.registerTableOption("initialSort", !1), this.registerTableOption("columnHeaderSortMulti", !0), this.registerTableOption("sortOrderReverse", !1), this.registerTableOption("headerSortElement", "<div class='tabulator-arrow'></div>"), this.registerTableOption("headerSortClickElement", "header"), this.registerColumnOption("sorter"), this.registerColumnOption("sorterParams"), this.registerColumnOption("headerSort", !0), this.registerColumnOption("headerSortStartingDir"), this.registerColumnOption("headerSortTristate")
        }
        initialize() {
          this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), this.registerDataHandler(this.sort.bind(this), 20), this.registerTableFunction("setSort", this.userSetSort.bind(this)), this.registerTableFunction("getSorters", this.getSort.bind(this)), this.registerTableFunction("clearSort", this.clearSort.bind(this)), "remote" === this.table.options.sortMode && this.subscribe("data-params", this.remoteSortParams.bind(this))
        }
        tableBuilt() {
          this.table.options.initialSort && this.setSort(this.table.options.initialSort)
        }
        remoteSortParams(t, e, i, s) {
          var o = this.getSort();
          return o.forEach(t => {
            delete t.column
          }), s.sort = o, s
        }
        userSetSort(t, e) {
          this.setSort(t, e), this.refreshSort()
        }
        clearSort() {
          this.clear(), this.refreshSort()
        }
        initializeColumn(t) {
          var e, i, s = !1;
          switch (typeof t.definition.sorter) {
            case "string":
              T.sorters[t.definition.sorter] ? s = T.sorters[t.definition.sorter] : console.warn("Sort Error - No such sorter found: ", t.definition.sorter);
              break;
            case "function":
              s = t.definition.sorter
          }
          if (t.modules.sort = {
              sorter: s,
              dir: "none",
              params: t.definition.sorterParams || {},
              startingDir: t.definition.headerSortStartingDir || "asc",
              tristate: t.definition.headerSortTristate
            }, !1 !== t.definition.headerSort) {
            switch ((e = t.getElement()).classList.add("tabulator-sortable"), (i = document.createElement("div")).classList.add("tabulator-col-sorter"), "icon" === this.table.options.headerSortClickElement ? i.classList.add("tabulator-col-sorter-element") : e.classList.add("tabulator-col-sorter-element"), this.table.options.headerSortElement) {
              case "function":
                break;
              case "object":
                i.appendChild(this.table.options.headerSortElement);
                break;
              default:
                i.innerHTML = this.table.options.headerSortElement
            }
            t.titleHolderElement.appendChild(i), t.modules.sort.element = i, this.setColumnHeaderSortIcon(t, "none"), "icon" === this.table.options.headerSortClickElement && i.addEventListener("mousedown", t => {
              t.stopPropagation()
            }), ("icon" === this.table.options.headerSortClickElement ? i : e).addEventListener("click", e => {
              var i = "",
                s = [],
                o = !1;
              if (t.modules.sort) {
                if (t.modules.sort.tristate) i = "none" == t.modules.sort.dir ? t.modules.sort.startingDir : t.modules.sort.dir == t.modules.sort.startingDir ? "asc" == t.modules.sort.dir ? "desc" : "asc" : "none";
                else switch (t.modules.sort.dir) {
                  case "asc":
                    i = "desc";
                    break;
                  case "desc":
                    i = "asc";
                    break;
                  default:
                    i = t.modules.sort.startingDir
                }
                this.table.options.columnHeaderSortMulti && (e.shiftKey || e.ctrlKey) ? (o = (s = this.getSort()).findIndex(e => e.field === t.getField()), o > -1 ? (s[o].dir = i, o = s.splice(o, 1)[0], "none" != i && s.push(o)) : "none" != i && s.push({
                  column: t,
                  dir: i
                }), this.setSort(s)) : "none" == i ? this.clear() : this.setSort(t, i), this.refreshSort()
              }
            })
          }
        }
        refreshSort() {
          "remote" === this.table.options.sortMode ? this.reloadData(null, !1, !1) : this.refreshData(!0)
        }
        hasChanged() {
          var t = this.changed;
          return this.changed = !1, t
        }
        getSort() {
          var t = [];
          return this.sortList.forEach(function(e) {
            e.column && t.push({
              column: e.column.getComponent(),
              field: e.column.getField(),
              dir: e.dir
            })
          }), t
        }
        setSort(t, e) {
          var i = this,
            s = [];
          Array.isArray(t) || (t = [{
            column: t,
            dir: e
          }]), t.forEach(function(t) {
            var e;
            (e = i.table.columnManager.findColumn(t.column)) ? (t.column = e, s.push(t), i.changed = !0) : console.warn("Sort Warning - Sort field does not exist and is being ignored: ", t.column)
          }), i.sortList = s, this.dispatch("sort-changed")
        }
        clear() {
          this.setSort([])
        }
        findSorter(t) {
          var e, i = this.table.rowManager.activeRows[0],
            s = "string";
          if (i && (i = i.getData(), t.getField())) switch (typeof(e = t.getFieldValue(i))) {
            case "undefined":
              s = "string";
              break;
            case "boolean":
              s = "boolean";
              break;
            default:
              isNaN(e) || "" === e ? e.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) && (s = "alphanum") : s = "number"
          }
          return T.sorters[s]
        }
        sort(t, e) {
          var i = this,
            s = this.table.options.sortOrderReverse ? i.sortList.slice().reverse() : i.sortList,
            o = [],
            n = [];
          return this.subscribedExternal("dataSorting") && this.dispatchExternal("dataSorting", i.getSort()), e || i.clearColumnHeaders(), "remote" !== this.table.options.sortMode ? (s.forEach(function(t, s) {
            var n;
            t.column && ((n = t.column.modules.sort) && (n.sorter || (n.sorter = i.findSorter(t.column)), t.params = "function" == typeof n.params ? n.params(t.column.getComponent(), t.dir) : n.params, o.push(t)), e || i.setColumnHeader(t.column, t.dir))
          }), o.length && i._sortItems(t, o)) : e || s.forEach(function(t, e) {
            i.setColumnHeader(t.column, t.dir)
          }), this.subscribedExternal("dataSorted") && (t.forEach(t => {
            n.push(t.getComponent())
          }), this.dispatchExternal("dataSorted", i.getSort(), n)), t
        }
        clearColumnHeaders() {
          this.table.columnManager.getRealColumns().forEach(t => {
            t.modules.sort && (t.modules.sort.dir = "none", t.getElement().setAttribute("aria-sort", "none"), this.setColumnHeaderSortIcon(t, "none"))
          })
        }
        setColumnHeader(t, e) {
          t.modules.sort.dir = e, t.getElement().setAttribute("aria-sort", "asc" === e ? "ascending" : "descending"), this.setColumnHeaderSortIcon(t, e)
        }
        setColumnHeaderSortIcon(t, e) {
          var i, s = t.modules.sort.element;
          if (t.definition.headerSort && "function" == typeof this.table.options.headerSortElement) {
            for (; s.firstChild;) s.removeChild(s.firstChild);
            "object" == typeof(i = this.table.options.headerSortElement.call(this.table, t.getComponent(), e)) ? s.appendChild(i): s.innerHTML = i
          }
        }
        _sortItems(t, e) {
          var i = e.length - 1;
          t.sort((t, s) => {
            for (var o, n = i; n >= 0; n--) {
              let i = e[n];
              if (0 !== (o = this._sortRow(t, s, i.column, i.dir, i.params))) break
            }
            return o
          })
        }
        _sortRow(t, e, i, s, o) {
          var n, r, l = "asc" == s ? t : e,
            a = "asc" == s ? e : t;
          return t = void 0 !== (t = i.getFieldValue(l.getData())) ? t : "", e = void 0 !== (e = i.getFieldValue(a.getData())) ? e : "", n = l.getComponent(), r = a.getComponent(), i.modules.sort.sorter.call(this, t, e, n, r, i.getComponent(), s, o)
        }
      }
      var H = {
        debugEventsExternal: !1,
        debugEventsInternal: !1,
        debugInvalidOptions: !0,
        debugInvalidComponentFuncs: !0,
        debugInitialization: !0,
        debugDeprecation: !0,
        height: !1,
        minHeight: !1,
        maxHeight: !1,
        columnHeaderVertAlign: "top",
        popupContainer: !1,
        columns: [],
        columnDefaults: {},
        rowHeader: !1,
        data: !1,
        autoColumns: !1,
        autoColumnsDefinitions: !1,
        nestedFieldSeparator: ".",
        footerElement: !1,
        index: "id",
        textDirection: "auto",
        addRowPos: "bottom",
        headerVisible: !0,
        renderVertical: "virtual",
        renderHorizontal: "basic",
        renderVerticalBuffer: 0,
        scrollToRowPosition: "top",
        scrollToRowIfVisible: !0,
        scrollToColumnPosition: "left",
        scrollToColumnIfVisible: !0,
        rowFormatter: !1,
        rowFormatterPrint: null,
        rowFormatterClipboard: null,
        rowFormatterHtmlOutput: null,
        rowHeight: null,
        placeholder: !1,
        dataLoader: !0,
        dataLoaderLoading: !1,
        dataLoaderError: !1,
        dataLoaderErrorTimeout: 3e3,
        dataSendParams: {},
        dataReceiveParams: {},
        dependencies: {}
      };
      class _ {
        constructor(t, e, i = {}) {
          this.table = t, this.msgType = e, this.registeredDefaults = Object.assign({}, i)
        }
        register(t, e) {
          this.registeredDefaults[t] = e
        }
        generate(t, e = {}) {
          var i = Object.assign({}, this.registeredDefaults),
            s = this.table.options.debugInvalidOptions || !0 === e.debugInvalidOptions;
          Object.assign(i, t);
          for (let t in e) i.hasOwnProperty(t) || (s && console.warn("Invalid " + this.msgType + " option:", t), i[t] = e.key);
          for (let t in i) t in e ? i[t] = e[t] : Array.isArray(i[t]) ? i[t] = Object.assign([], i[t]) : "object" == typeof i[t] && null !== i[t] ? i[t] = Object.assign({}, i[t]) : void 0 === i[t] && delete i[t];
          return i
        }
      }
      class L extends m {
        constructor(t) {
          super(t), this.elementVertical = t.rowManager.element, this.elementHorizontal = t.columnManager.element, this.tableElement = t.rowManager.tableElement, this.verticalFillMode = "fit"
        }
        initialize() {}
        clearRows() {}
        clearColumns() {}
        reinitializeColumnWidths(t) {}
        renderRows() {}
        renderColumns() {}
        rerenderRows(t) {
          t && t()
        }
        rerenderColumns(t, e) {}
        renderRowCells(t) {}
        rerenderRowCells(t, e) {}
        scrollColumns(t, e) {}
        scrollRows(t, e) {}
        resize() {}
        scrollToRow(t) {}
        scrollToRowNearestTop(t) {}
        visibleRows(t) {
          return []
        }
        rows() {
          return this.table.rowManager.getDisplayRows()
        }
        styleRow(t, e) {
          var i = t.getElement();
          e % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"))
        }
        clear() {
          this.clearRows(), this.clearColumns()
        }
        render() {
          this.renderRows(), this.renderColumns()
        }
        rerender(t) {
          this.rerenderRows(), this.rerenderColumns()
        }
        scrollToRowPosition(t, e, i) {
          var s = this.rows().indexOf(t),
            o = t.getElement(),
            n = 0;
          return new Promise((r, l) => {
            if (s > -1) {
              if (void 0 === i && (i = this.table.options.scrollToRowIfVisible), !i && p.elVisible(o) && (n = p.elOffset(o).top - p.elOffset(this.elementVertical).top) > 0 && n < this.elementVertical.clientHeight - o.offsetHeight) return r(), !1;
              switch (void 0 === e && (e = this.table.options.scrollToRowPosition), "nearest" === e && (e = this.scrollToRowNearestTop(t) ? "top" : "bottom"), this.scrollToRow(t), e) {
                case "middle":
                case "center":
                  this.elementVertical.scrollHeight - this.elementVertical.scrollTop == this.elementVertical.clientHeight ? this.elementVertical.scrollTop = this.elementVertical.scrollTop + (o.offsetTop - this.elementVertical.scrollTop) - (this.elementVertical.scrollHeight - o.offsetTop) / 2 : this.elementVertical.scrollTop = this.elementVertical.scrollTop - this.elementVertical.clientHeight / 2;
                  break;
                case "bottom":
                  this.elementVertical.scrollHeight - this.elementVertical.scrollTop == this.elementVertical.clientHeight ? this.elementVertical.scrollTop = this.elementVertical.scrollTop - (this.elementVertical.scrollHeight - o.offsetTop) + o.offsetHeight : this.elementVertical.scrollTop = this.elementVertical.scrollTop - this.elementVertical.clientHeight + o.offsetHeight;
                  break;
                case "top":
                  this.elementVertical.scrollTop = o.offsetTop
              }
              r()
            } else console.warn("Scroll Error - Row not visible"), l("Scroll Error - Row not visible")
          })
        }
      }
      class P extends L {
        constructor(t) {
          super(t)
        }
        renderRowCells(t, e) {
          const i = document.createDocumentFragment();
          t.cells.forEach(t => {
            i.appendChild(t.getElement())
          }), t.element.appendChild(i), e || t.cells.forEach(t => {
            t.cellRendered()
          })
        }
        reinitializeColumnWidths(t) {
          t.forEach(function(t) {
            t.reinitializeWidth()
          })
        }
      }
      class S extends L {
        constructor(t) {
          super(t), this.leftCol = 0, this.rightCol = 0, this.scrollLeft = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0, this.fitDataColAvg = 0, this.windowBuffer = 200, this.visibleRows = null, this.initialized = !1, this.isFitData = !1, this.columns = []
        }
        initialize() {
          this.compatibilityCheck(), this.layoutCheck(), this.vertScrollListen()
        }
        compatibilityCheck() {
          "fitDataTable" == this.options("layout") && console.warn("Horizontal Virtual DOM is not compatible with fitDataTable layout mode"), this.options("responsiveLayout") && console.warn("Horizontal Virtual DOM is not compatible with responsive columns"), this.options("rtl") && console.warn("Horizontal Virtual DOM is not currently compatible with RTL text direction")
        }
        layoutCheck() {
          this.isFitData = this.options("layout").startsWith("fitData")
        }
        vertScrollListen() {
          this.subscribe("scroll-vertical", this.clearVisRowCache.bind(this)), this.subscribe("data-refreshed", this.clearVisRowCache.bind(this))
        }
        clearVisRowCache() {
          this.visibleRows = null
        }
        renderColumns(t, e) {
          this.dataChange()
        }
        scrollColumns(t, e) {
          this.scrollLeft != t && (this.scrollLeft = t, this.scroll(t - (this.vDomScrollPosLeft + this.windowBuffer)))
        }
        calcWindowBuffer() {
          var t = this.elementVertical.clientWidth;
          this.table.columnManager.columnsByIndex.forEach(e => {
            if (e.visible) {
              var i = e.getWidth();
              i > t && (t = i)
            }
          }), this.windowBuffer = 2 * t
        }
        rerenderColumns(t, e) {
          var i = {
              cols: this.columns,
              leftCol: this.leftCol,
              rightCol: this.rightCol
            },
            s = 0;
          t && !this.initialized || (this.clear(), this.calcWindowBuffer(), this.scrollLeft = this.elementVertical.scrollLeft, this.vDomScrollPosLeft = this.scrollLeft - this.windowBuffer, this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, this.table.columnManager.columnsByIndex.forEach(t => {
            var e, i = {};
            t.visible && (t.modules.frozen || (e = t.getWidth(), i.leftPos = s, i.rightPos = s + e, i.width = e, this.isFitData && (i.fitDataCheck = !t.modules.vdomHoz || t.modules.vdomHoz.fitDataCheck), s + e > this.vDomScrollPosLeft && s < this.vDomScrollPosRight ? (-1 == this.leftCol && (this.leftCol = this.columns.length, this.vDomPadLeft = s), this.rightCol = this.columns.length) : -1 !== this.leftCol && (this.vDomPadRight += e), this.columns.push(t), t.modules.vdomHoz = i, s += e))
          }), this.tableElement.style.paddingLeft = this.vDomPadLeft + "px", this.tableElement.style.paddingRight = this.vDomPadRight + "px", this.initialized = !0, e || t && !this.reinitChanged(i) || this.reinitializeRows(), this.elementVertical.scrollLeft = this.scrollLeft)
        }
        renderRowCells(t) {
          if (this.initialized) this.initializeRow(t);
          else {
            const e = document.createDocumentFragment();
            t.cells.forEach(t => {
              e.appendChild(t.getElement())
            }), t.element.appendChild(e), t.cells.forEach(t => {
              t.cellRendered()
            })
          }
        }
        rerenderRowCells(t, e) {
          this.reinitializeRow(t, e)
        }
        reinitializeColumnWidths(t) {
          for (let t = this.leftCol; t <= this.rightCol; t++) {
            let e = this.columns[t];
            e && e.reinitializeWidth()
          }
        }
        deinitialize() {
          this.initialized = !1
        }
        clear() {
          this.columns = [], this.leftCol = -1, this.rightCol = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0
        }
        dataChange() {
          var t, e, i = !1;
          if (this.isFitData) {
            if (this.table.columnManager.columnsByIndex.forEach(t => {
                !t.definition.width && t.visible && (i = !0)
              }), i && this.table.rowManager.getDisplayRows().length && (this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, t = this.chain("rows-sample", [1], [], () => this.table.rowManager.getDisplayRows())[0])) {
              e = t.getElement(), t.generateCells(), this.tableElement.appendChild(e);
              for (let i = 0; i < t.cells.length; i++) {
                let s = t.cells[i];
                e.appendChild(s.getElement()), s.column.reinitializeWidth()
              }
              e.parentNode.removeChild(e), this.rerenderColumns(!1, !0)
            }
          } else "fitColumns" === this.options("layout") && (this.layoutRefresh(), this.rerenderColumns(!1, !0))
        }
        reinitChanged(t) {
          var e = !0;
          return t.cols.length !== this.columns.length || t.leftCol !== this.leftCol || t.rightCol !== this.rightCol || (t.cols.forEach((t, i) => {
            t !== this.columns[i] && (e = !1)
          }), !e)
        }
        reinitializeRows() {
          var t = this.getVisibleRows(),
            e = this.table.rowManager.getRows().filter(e => !t.includes(e));
          t.forEach(t => {
            this.reinitializeRow(t, !0)
          }), e.forEach(t => {
            t.deinitialize()
          })
        }
        getVisibleRows() {
          return this.visibleRows || (this.visibleRows = this.table.rowManager.getVisibleRows()), this.visibleRows
        }
        scroll(t) {
          this.vDomScrollPosLeft += t, this.vDomScrollPosRight += t, Math.abs(t) > this.windowBuffer / 2 ? this.rerenderColumns() : t > 0 ? (this.addColRight(), this.removeColLeft()) : (this.addColLeft(), this.removeColRight())
        }
        colPositionAdjust(t, e, i) {
          for (let s = t; s < e; s++) {
            let t = this.columns[s];
            t.modules.vdomHoz.leftPos += i, t.modules.vdomHoz.rightPos += i
          }
        }
        addColRight() {
          for (var t = !1, e = !0; e;) {
            let i = this.columns[this.rightCol + 1];
            i && i.modules.vdomHoz.leftPos <= this.vDomScrollPosRight ? (t = !0, this.getVisibleRows().forEach(t => {
              if ("group" !== t.type) {
                var e = t.getCell(i);
                t.getElement().insertBefore(e.getElement(), t.getCell(this.columns[this.rightCol]).getElement().nextSibling), e.cellRendered()
              }
            }), this.fitDataColActualWidthCheck(i), this.rightCol++, this.getVisibleRows().forEach(t => {
              "group" !== t.type && (t.modules.vdomHoz.rightCol = this.rightCol)
            }), this.rightCol >= this.columns.length - 1 ? this.vDomPadRight = 0 : this.vDomPadRight -= i.getWidth()) : e = !1
          }
          t && (this.tableElement.style.paddingRight = this.vDomPadRight + "px")
        }
        addColLeft() {
          for (var t = !1, e = !0; e;) {
            let i = this.columns[this.leftCol - 1];
            if (i)
              if (i.modules.vdomHoz.rightPos >= this.vDomScrollPosLeft) {
                t = !0, this.getVisibleRows().forEach(t => {
                  if ("group" !== t.type) {
                    var e = t.getCell(i);
                    t.getElement().insertBefore(e.getElement(), t.getCell(this.columns[this.leftCol]).getElement()), e.cellRendered()
                  }
                }), this.leftCol--, this.getVisibleRows().forEach(t => {
                  "group" !== t.type && (t.modules.vdomHoz.leftCol = this.leftCol)
                }), this.leftCol <= 0 ? this.vDomPadLeft = 0 : this.vDomPadLeft -= i.getWidth();
                let e = this.fitDataColActualWidthCheck(i);
                e && (this.scrollLeft = this.elementVertical.scrollLeft = this.elementVertical.scrollLeft + e, this.vDomPadRight -= e)
              } else e = !1;
            else e = !1
          }
          t && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px")
        }
        removeColRight() {
          for (var t = !1, e = !0; e;) {
            let i = this.columns[this.rightCol];
            i && i.modules.vdomHoz.leftPos > this.vDomScrollPosRight ? (t = !0, this.getVisibleRows().forEach(t => {
              if ("group" !== t.type) {
                var e = t.getCell(i);
                try {
                  t.getElement().removeChild(e.getElement())
                } catch (t) {
                  console.warn("Could not removeColRight", t.message)
                }
              }
            }), this.vDomPadRight += i.getWidth(), this.rightCol--, this.getVisibleRows().forEach(t => {
              "group" !== t.type && (t.modules.vdomHoz.rightCol = this.rightCol)
            })) : e = !1
          }
          t && (this.tableElement.style.paddingRight = this.vDomPadRight + "px")
        }
        removeColLeft() {
          for (var t = !1, e = !0; e;) {
            let i = this.columns[this.leftCol];
            i && i.modules.vdomHoz.rightPos < this.vDomScrollPosLeft ? (t = !0, this.getVisibleRows().forEach(t => {
              if ("group" !== t.type) {
                var e = t.getCell(i);
                try {
                  t.getElement().removeChild(e.getElement())
                } catch (t) {
                  console.warn("Could not removeColLeft", t.message)
                }
              }
            }), this.vDomPadLeft += i.getWidth(), this.leftCol++, this.getVisibleRows().forEach(t => {
              "group" !== t.type && (t.modules.vdomHoz.leftCol = this.leftCol)
            })) : e = !1
          }
          t && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px")
        }
        fitDataColActualWidthCheck(t) {
          var e, i;
          return t.modules.vdomHoz.fitDataCheck && (t.reinitializeWidth(), (i = (e = t.getWidth()) - t.modules.vdomHoz.width) && (t.modules.vdomHoz.rightPos += i, t.modules.vdomHoz.width = e, this.colPositionAdjust(this.columns.indexOf(t) + 1, this.columns.length, i)), t.modules.vdomHoz.fitDataCheck = !1), i
        }
        initializeRow(t) {
          if ("group" !== t.type) {
            t.modules.vdomHoz = {
              leftCol: this.leftCol,
              rightCol: this.rightCol
            }, this.table.modules.frozenColumns && this.table.modules.frozenColumns.leftColumns.forEach(e => {
              this.appendCell(t, e)
            });
            for (let e = this.leftCol; e <= this.rightCol; e++) this.appendCell(t, this.columns[e]);
            this.table.modules.frozenColumns && this.table.modules.frozenColumns.rightColumns.forEach(e => {
              this.appendCell(t, e)
            })
          }
        }
        appendCell(t, e) {
          if (e && e.visible) {
            let i = t.getCell(e);
            t.getElement().appendChild(i.getElement()), i.cellRendered()
          }
        }
        reinitializeRow(t, e) {
          if ("group" !== t.type && (e || !t.modules.vdomHoz || t.modules.vdomHoz.leftCol !== this.leftCol || t.modules.vdomHoz.rightCol !== this.rightCol)) {
            for (var i = t.getElement(); i.firstChild;) i.removeChild(i.firstChild);
            this.initializeRow(t)
          }
        }
      }
      class k extends m {
        constructor(t) {
          super(t), this.blockHozScrollEvent = !1, this.headersElement = null, this.contentsElement = null, this.rowHeader = null, this.element = null, this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.scrollLeft = 0, this.optionsList = new _(this.table, "column definition", y), this.redrawBlock = !1, this.redrawBlockUpdate = null, this.renderer = null
        }
        initialize() {
          this.initializeRenderer(), this.headersElement = this.createHeadersElement(), this.contentsElement = this.createHeaderContentsElement(), this.element = this.createHeaderElement(), this.contentsElement.insertBefore(this.headersElement, this.contentsElement.firstChild), this.element.insertBefore(this.contentsElement, this.element.firstChild), this.initializeScrollWheelWatcher(), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("scrollbar-vertical", this.padVerticalScrollbar.bind(this))
        }
        padVerticalScrollbar(t) {
          this.table.rtl ? this.headersElement.style.marginLeft = t + "px" : this.headersElement.style.marginRight = t + "px"
        }
        initializeRenderer() {
          var t, e = {
            virtual: S,
            basic: P
          };
          (t = "string" == typeof this.table.options.renderHorizontal ? e[this.table.options.renderHorizontal] : this.table.options.renderHorizontal) ? (this.renderer = new t(this.table, this.element, this.tableElement), this.renderer.initialize()) : console.error("Unable to find matching renderer:", this.table.options.renderHorizontal)
        }
        createHeadersElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-headers"), t.setAttribute("role", "row"), t
        }
        createHeaderContentsElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-header-contents"), t
        }
        createHeaderElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-header"), t.setAttribute("role", "rowgroup"), this.table.options.headerVisible || t.classList.add("tabulator-header-hidden"), t
        }
        getElement() {
          return this.element
        }
        getContentsElement() {
          return this.contentsElement
        }
        getHeadersElement() {
          return this.headersElement
        }
        scrollHorizontal(t) {
          this.contentsElement.scrollLeft = t, this.scrollLeft = t, this.renderer.scrollColumns(t)
        }
        initializeScrollWheelWatcher() {
          this.contentsElement.addEventListener("wheel", t => {
            var e;
            t.deltaX && (e = this.contentsElement.scrollLeft + t.deltaX, this.table.rowManager.scrollHorizontal(e), this.table.columnManager.scrollHorizontal(e))
          })
        }
        generateColumnsFromRowData(t) {
          var e = [],
            i = {},
            s = "full" === this.table.options.autoColumns ? t : [t[0]],
            o = this.table.options.autoColumnsDefinitions;
          if (t && t.length) {
            if (s.forEach(t => {
                Object.keys(t).forEach((s, o) => {
                  let n, r = t[s];
                  i[s] ? !0 !== i[s] && void 0 !== r && (i[s].sorter = this.calculateSorterFromValue(r), i[s] = !0) : (n = {
                    field: s,
                    title: s,
                    sorter: this.calculateSorterFromValue(r)
                  }, e.splice(o, 0, n), i[s] = void 0 !== r || n)
                })
              }), o) switch (typeof o) {
              case "function":
                this.table.options.columns = o.call(this.table, e);
                break;
              case "object":
                Array.isArray(o) ? e.forEach(t => {
                  var e = o.find(e => e.field === t.field);
                  e && Object.assign(t, e)
                }) : e.forEach(t => {
                  o[t.field] && Object.assign(t, o[t.field])
                }), this.table.options.columns = e
            } else this.table.options.columns = e;
            this.setColumns(this.table.options.columns)
          }
        }
        calculateSorterFromValue(t) {
          var e;
          switch (typeof t) {
            case "undefined":
              e = "string";
              break;
            case "boolean":
              e = "boolean";
              break;
            case "number":
              e = "number";
              break;
            case "object":
              e = Array.isArray(t) ? "array" : "string";
              break;
            default:
              e = isNaN(t) || "" === t ? t.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) ? "alphanum" : "string" : "number"
          }
          return e
        }
        setColumns(t, e) {
          for (; this.headersElement.firstChild;) this.headersElement.removeChild(this.headersElement.firstChild);
          this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.dispatch("columns-loading"), this.dispatchExternal("columnsLoading"), this.table.options.rowHeader && (this.rowHeader = new C(!0 === this.table.options.rowHeader ? {} : this.table.options.rowHeader, this, !0), this.columns.push(this.rowHeader), this.headersElement.appendChild(this.rowHeader.getElement()), this.rowHeader.columnRendered()), t.forEach((t, e) => {
            this._addColumn(t)
          }), this._reIndexColumns(), this.dispatch("columns-loaded"), this.subscribedExternal("columnsLoaded") && this.dispatchExternal("columnsLoaded", this.getComponents()), this.rerenderColumns(!1, !0), this.redraw(!0)
        }
        _addColumn(t, e, i) {
          var s = new C(t, this),
            o = s.getElement(),
            n = i ? this.findColumnIndex(i) : i;
          if (!e || !this.rowHeader || i && i !== this.rowHeader || (e = !1, i = this.rowHeader, n = 0), i && n > -1) {
            var r = i.getTopColumn(),
              l = this.columns.indexOf(r),
              a = r.getElement();
            e ? (this.columns.splice(l, 0, s), a.parentNode.insertBefore(o, a)) : (this.columns.splice(l + 1, 0, s), a.parentNode.insertBefore(o, a.nextSibling))
          } else e ? (this.columns.unshift(s), this.headersElement.insertBefore(s.getElement(), this.headersElement.firstChild)) : (this.columns.push(s), this.headersElement.appendChild(s.getElement()));
          return s.columnRendered(), s
        }
        registerColumnField(t) {
          t.definition.field && (this.columnsByField[t.definition.field] = t)
        }
        registerColumnPosition(t) {
          this.columnsByIndex.push(t)
        }
        _reIndexColumns() {
          this.columnsByIndex = [], this.columns.forEach(function(t) {
            t.reRegisterPosition()
          })
        }
        verticalAlignHeaders() {
          var t = 0;
          this.redrawBlock || (this.headersElement.style.height = "", this.columns.forEach(t => {
            t.clearVerticalAlign()
          }), this.columns.forEach(e => {
            var i = e.getHeight();
            i > t && (t = i)
          }), this.headersElement.style.height = t + "px", this.columns.forEach(e => {
            e.verticalAlign(this.table.options.columnHeaderVertAlign, t)
          }), this.table.rowManager.adjustTableSize())
        }
        findColumn(t) {
          var e;
          return "object" != typeof t ? this.columnsByField[t] || !1 : t instanceof C ? t : t instanceof w ? t._getSelf() || !1 : "undefined" != typeof HTMLElement && t instanceof HTMLElement && (e = [], this.columns.forEach(t => {
            e.push(t), e = e.concat(t.getColumns(!0))
          }), e.find(e => e.element === t) || !1)
        }
        getColumnByField(t) {
          return this.columnsByField[t]
        }
        getColumnsByFieldRoot(t) {
          var e = [];
          return Object.keys(this.columnsByField).forEach(i => {
            (this.table.options.nestedFieldSeparator ? i.split(this.table.options.nestedFieldSeparator)[0] : i) === t && e.push(this.columnsByField[i])
          }), e
        }
        getColumnByIndex(t) {
          return this.columnsByIndex[t]
        }
        getFirstVisibleColumn() {
          var t = this.columnsByIndex.findIndex(t => t.visible);
          return t > -1 && this.columnsByIndex[t]
        }
        getVisibleColumnsByIndex() {
          return this.columnsByIndex.filter(t => t.visible)
        }
        getColumns() {
          return this.columns
        }
        findColumnIndex(t) {
          return this.columnsByIndex.findIndex(e => t === e)
        }
        getRealColumns() {
          return this.columnsByIndex
        }
        traverse(t) {
          this.columnsByIndex.forEach((e, i) => {
            t(e, i)
          })
        }
        getDefinitions(t) {
          var e = [];
          return this.columnsByIndex.forEach(i => {
            (!t || t && i.visible) && e.push(i.getDefinition())
          }), e
        }
        getDefinitionTree() {
          var t = [];
          return this.columns.forEach(e => {
            t.push(e.getDefinition(!0))
          }), t
        }
        getComponents(t) {
          var e = [];
          return (t ? this.columns : this.columnsByIndex).forEach(t => {
            e.push(t.getComponent())
          }), e
        }
        getWidth() {
          var t = 0;
          return this.columnsByIndex.forEach(e => {
            e.visible && (t += e.getWidth())
          }), t
        }
        moveColumn(t, e, i) {
          e.element.parentNode.insertBefore(t.element, e.element), i && e.element.parentNode.insertBefore(e.element, t.element), this.moveColumnActual(t, e, i), this.verticalAlignHeaders(), this.table.rowManager.reinitialize()
        }
        moveColumnActual(t, e, i) {
          t.parent.isGroup ? this._moveColumnInArray(t.parent.columns, t, e, i) : this._moveColumnInArray(this.columns, t, e, i), this._moveColumnInArray(this.columnsByIndex, t, e, i, !0), this.rerenderColumns(!0), this.dispatch("column-moved", t, e, i), this.subscribedExternal("columnMoved") && this.dispatchExternal("columnMoved", t.getComponent(), this.table.columnManager.getComponents())
        }
        _moveColumnInArray(t, e, i, s, o) {
          var n, r = t.indexOf(e);
          r > -1 && (t.splice(r, 1), (n = t.indexOf(i)) > -1 ? s && (n += 1) : n = r, t.splice(n, 0, e), o && (this.chain("column-moving-rows", [e, i, s], null, []) || []).concat(this.table.rowManager.rows).forEach(function(t) {
            if (t.cells.length) {
              var e = t.cells.splice(r, 1)[0];
              t.cells.splice(n, 0, e)
            }
          }))
        }
        scrollToColumn(t, e, i) {
          var s = 0,
            o = t.getLeftOffset(),
            n = 0,
            r = t.getElement();
          return new Promise((l, a) => {
            if (void 0 === e && (e = this.table.options.scrollToColumnPosition), void 0 === i && (i = this.table.options.scrollToColumnIfVisible), t.visible) {
              switch (e) {
                case "middle":
                case "center":
                  n = -this.element.clientWidth / 2;
                  break;
                case "right":
                  n = r.clientWidth - this.headersElement.clientWidth
              }
              if (!i && o > 0 && o + r.offsetWidth < this.element.clientWidth) return !1;
              s = o + n, s = Math.max(Math.min(s, this.table.rowManager.element.scrollWidth - this.table.rowManager.element.clientWidth), 0), this.table.rowManager.scrollHorizontal(s), this.scrollHorizontal(s), l()
            } else console.warn("Scroll Error - Column not visible"), a("Scroll Error - Column not visible")
          })
        }
        generateCells(t) {
          var e = [];
          return this.columnsByIndex.forEach(i => {
            e.push(i.generateCell(t))
          }), e
        }
        getFlexBaseWidth() {
          var t = this.table.element.clientWidth,
            e = 0;
          return this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (t -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), this.columnsByIndex.forEach(function(i) {
            var s, o, n;
            i.visible && (s = i.definition.width || 0, o = parseInt(i.minWidth), n = "string" == typeof s ? s.indexOf("%") > -1 ? t / 100 * parseInt(s) : parseInt(s) : s, e += n > o ? n : o)
          }), e
        }
        addColumn(t, e, i) {
          return new Promise((s, o) => {
            var n = this._addColumn(t, e, i);
            this._reIndexColumns(), this.dispatch("column-add", t, e, i), "fitColumns" != this.layoutMode() && n.reinitializeWidth(), this.redraw(!0), this.table.rowManager.reinitialize(), this.rerenderColumns(), s(n)
          })
        }
        deregisterColumn(t) {
          var e, i = t.getField();
          i && delete this.columnsByField[i], (e = this.columnsByIndex.indexOf(t)) > -1 && this.columnsByIndex.splice(e, 1), (e = this.columns.indexOf(t)) > -1 && this.columns.splice(e, 1), this.verticalAlignHeaders(), this.redraw()
        }
        rerenderColumns(t, e) {
          this.redrawBlock ? (!1 === t || !0 === t && null === this.redrawBlockUpdate) && (this.redrawBlockUpdate = t) : this.renderer.rerenderColumns(t, e)
        }
        blockRedraw() {
          this.redrawBlock = !0, this.redrawBlockUpdate = null
        }
        restoreRedraw() {
          this.redrawBlock = !1, this.verticalAlignHeaders(), this.renderer.rerenderColumns(this.redrawBlockUpdate)
        }
        redraw(t) {
          p.elVisible(this.element) && this.verticalAlignHeaders(), t && (this.table.rowManager.resetScroll(), this.table.rowManager.reinitialize()), this.confirm("table-redrawing", t) || this.layoutRefresh(t), this.dispatch("table-redraw", t), this.table.footerManager.redraw()
        }
      }
      class z extends L {
        constructor(t) {
          super(t), this.verticalFillMode = "fill", this.scrollTop = 0, this.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0
        }
        clearRows() {
          for (var t = this.tableElement; t.firstChild;) t.removeChild(t.firstChild);
          t.scrollTop = 0, t.scrollLeft = 0, t.style.minWidth = "", t.style.minHeight = "", t.style.display = "", t.style.visibility = ""
        }
        renderRows() {
          var t = this.tableElement,
            e = !0,
            i = document.createDocumentFragment(),
            s = this.rows();
          s.forEach((t, s) => {
            this.styleRow(t, s), t.initialize(!1, !0), "group" !== t.type && (e = !1), i.appendChild(t.getElement())
          }), t.appendChild(i), s.forEach(t => {
            t.rendered(), t.heightInitialized || t.calcHeight(!0)
          }), s.forEach(t => {
            t.heightInitialized || t.setCellHeight()
          }), t.style.minWidth = e ? this.table.columnManager.getWidth() + "px" : ""
        }
        rerenderRows(t) {
          this.clearRows(), t && t(), this.renderRows(), this.rows().length || this.table.rowManager.tableEmpty()
        }
        scrollToRowNearestTop(t) {
          var e = p.elOffset(t.getElement()).top;
          return !(Math.abs(this.elementVertical.scrollTop - e) > Math.abs(this.elementVertical.scrollTop + this.elementVertical.clientHeight - e))
        }
        scrollToRow(t) {
          var e = t.getElement();
          this.elementVertical.scrollTop = p.elOffset(e).top - p.elOffset(this.elementVertical).top + this.elementVertical.scrollTop
        }
        visibleRows(t) {
          return this.rows()
        }
      }
      class B extends L {
        constructor(t) {
          super(t), this.verticalFillMode = "fill", this.scrollTop = 0, this.scrollLeft = 0, this.vDomRowHeight = 20, this.vDomTop = 0, this.vDomBottom = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomMaxRenderChain = 90, this.vDomWindowBuffer = 0, this.vDomWindowMinTotalRows = 20, this.vDomWindowMinMarginRows = 5, this.vDomTopNewRows = [], this.vDomBottomNewRows = []
        }
        clearRows() {
          for (var t = this.tableElement; t.firstChild;) t.removeChild(t.firstChild);
          t.style.paddingTop = "", t.style.paddingBottom = "", t.style.minHeight = "", t.style.display = "", t.style.visibility = "", this.elementVertical.scrollTop = 0, this.elementVertical.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0, this.vDomTop = 0, this.vDomBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0
        }
        renderRows() {
          this._virtualRenderFill()
        }
        rerenderRows(t) {
          for (var e = this.elementVertical.scrollTop, i = !1, s = !1, o = this.table.rowManager.scrollLeft, n = this.rows(), r = this.vDomTop; r <= this.vDomBottom; r++)
            if (n[r]) {
              var l = e - n[r].getElement().offsetTop;
              if (!(!1 === s || Math.abs(l) < s)) break;
              s = l, i = r
            } n.forEach(t => {
            t.deinitializeHeight()
          }), t && t(), this.rows().length ? this._virtualRenderFill(!1 === i ? this.rows.length - 1 : i, !0, s || 0) : (this.clear(), this.table.rowManager.tableEmpty()), this.scrollColumns(o)
        }
        scrollColumns(t) {
          this.table.rowManager.scrollHorizontal(t)
        }
        scrollRows(t, e) {
          var i = t - this.vDomScrollPosTop,
            s = t - this.vDomScrollPosBottom,
            o = 2 * this.vDomWindowBuffer,
            n = this.rows();
          if (this.scrollTop = t, -i > o || s > o) {
            var r = this.table.rowManager.scrollLeft;
            this._virtualRenderFill(Math.floor(this.elementVertical.scrollTop / this.elementVertical.scrollHeight * n.length)), this.scrollColumns(r)
          } else e ? (i < 0 && this._addTopRow(n, -i), s < 0 && (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer ? this._removeBottomRow(n, -s) : this.vDomScrollPosBottom = this.scrollTop)) : (s >= 0 && this._addBottomRow(n, s), i >= 0 && (this.scrollTop > this.vDomWindowBuffer ? this._removeTopRow(n, i) : this.vDomScrollPosTop = this.scrollTop))
        }
        resize() {
          this.vDomWindowBuffer = this.table.options.renderVerticalBuffer || this.elementVertical.clientHeight
        }
        scrollToRowNearestTop(t) {
          var e = this.rows().indexOf(t);
          return !(Math.abs(this.vDomTop - e) > Math.abs(this.vDomBottom - e))
        }
        scrollToRow(t) {
          var e = this.rows().indexOf(t);
          e > -1 && this._virtualRenderFill(e, !0)
        }
        visibleRows(t) {
          var e = this.elementVertical.scrollTop,
            i = this.elementVertical.clientHeight + e,
            s = !1,
            o = 0,
            n = 0,
            r = this.rows();
          if (t) o = this.vDomTop, n = this.vDomBottom;
          else
            for (var l = this.vDomTop; l <= this.vDomBottom; l++)
              if (r[l])
                if (s) {
                  if (!(i - r[l].getElement().offsetTop >= 0)) break;
                  n = l
                } else if (e - r[l].getElement().offsetTop >= 0) o = l;
          else {
            if (s = !0, !(i - r[l].getElement().offsetTop >= 0)) break;
            n = l
          }
          return r.slice(o, n + 1)
        }
        _virtualRenderFill(t, e, i) {
          var s, o, n = this.tableElement,
            r = this.elementVertical,
            l = 0,
            a = 0,
            h = 0,
            d = 0,
            c = 0,
            u = 0,
            m = this.rows(),
            g = m.length,
            f = 0,
            b = [],
            v = 0,
            w = 0,
            y = this.table.rowManager.fixedHeight,
            C = this.elementVertical.clientHeight,
            E = this.table.options.rowHeight,
            x = !0;
          if (i = i || 0, t = t || 0) {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            (d = (g - t + 1) * this.vDomRowHeight) < C && (t -= Math.ceil((C - d) / this.vDomRowHeight)) < 0 && (t = 0), t -= l = Math.min(Math.max(Math.floor(this.vDomWindowBuffer / this.vDomRowHeight), this.vDomWindowMinMarginRows), t)
          } else this.clear();
          if (g && p.elVisible(this.elementVertical)) {
            for (this.vDomTop = t, this.vDomBottom = t - 1, y || this.table.options.maxHeight ? (E && (w = C / E + this.vDomWindowBuffer / E), w = Math.max(this.vDomWindowMinTotalRows, Math.ceil(w))) : w = g;
              (w == g || a <= C + this.vDomWindowBuffer || v < this.vDomWindowMinTotalRows) && this.vDomBottom < g - 1;) {
              for (b = [], o = document.createDocumentFragment(), u = 0; u < w && this.vDomBottom < g - 1;) s = m[f = this.vDomBottom + 1], this.styleRow(s, f), s.initialize(!1, !0), s.heightInitialized || this.table.options.rowHeight || s.clearCellHeight(), o.appendChild(s.getElement()), b.push(s), this.vDomBottom++, u++;
              if (!b.length) break;
              n.appendChild(o), b.forEach(t => {
                t.rendered()
              });
              const t = [];
              b.forEach(e => {
                e.heightInitialized || (e.calcHeight(!0), t.push(e))
              }), t.forEach(t => {
                t.setCellHeight()
              }), b.forEach(t => {
                h = t.getHeight(), v < l ? c += h : a += h, h > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * h), v++
              }), x = this.table.rowManager.adjustTableSize(), C = this.elementVertical.clientHeight, x && (y || this.table.options.maxHeight) && (E = a / v, w = Math.max(this.vDomWindowMinTotalRows, Math.ceil(C / E + this.vDomWindowBuffer / E)))
            }
            t ? (this.vDomTopPad = e ? this.vDomRowHeight * this.vDomTop + i : this.scrollTop - c, this.vDomBottomPad = this.vDomBottom == g - 1 ? 0 : Math.max(this.vDomScrollHeight - this.vDomTopPad - a - c, 0)) : (this.vDomTopPad = 0, this.vDomRowHeight = Math.floor((a + c) / v), this.vDomBottomPad = this.vDomRowHeight * (g - this.vDomBottom - 1), this.vDomScrollHeight = c + a + this.vDomBottomPad - C), n.style.paddingTop = this.vDomTopPad + "px", n.style.paddingBottom = this.vDomBottomPad + "px", e && (this.scrollTop = this.vDomTopPad + c + i - (this.elementVertical.scrollWidth > this.elementVertical.clientWidth ? this.elementVertical.offsetHeight - C : 0)), this.scrollTop = Math.min(this.scrollTop, this.elementVertical.scrollHeight - C), this.elementVertical.scrollWidth > this.elementVertical.clientWidth && e && (this.scrollTop += this.elementVertical.offsetHeight - C), this.vDomScrollPosTop = this.scrollTop, this.vDomScrollPosBottom = this.scrollTop, r.scrollTop = this.scrollTop, this.dispatch("render-virtual-fill")
          }
        }
        _addTopRow(t, e) {
          for (var i = this.tableElement, s = [], o = 0, n = this.vDomTop - 1, r = 0, l = !0; l;)
            if (this.vDomTop) {
              let a, h, d = t[n];
              d && r < this.vDomMaxRenderChain ? (a = d.getHeight() || this.vDomRowHeight, h = d.initialized, e >= a ? (this.styleRow(d, n), i.insertBefore(d.getElement(), i.firstChild), d.initialized && d.heightInitialized || s.push(d), d.initialize(), h || (a = d.getElement().offsetHeight, a > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * a)), e -= a, o += a, this.vDomTop--, n--, r++) : l = !1) : l = !1
            } else l = !1;
          for (let t of s) t.clearCellHeight();
          this._quickNormalizeRowHeight(s), o && (this.vDomTopPad -= o, this.vDomTopPad < 0 && (this.vDomTopPad = n * this.vDomRowHeight), n < 1 && (this.vDomTopPad = 0), i.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop -= o)
        }
        _removeTopRow(t, e) {
          for (var i = [], s = 0, o = 0, n = !0; n;) {
            let r, l = t[this.vDomTop];
            l && o < this.vDomMaxRenderChain ? (r = l.getHeight() || this.vDomRowHeight, e >= r ? (this.vDomTop++, e -= r, s += r, i.push(l), o++) : n = !1) : n = !1
          }
          for (let t of i) {
            let e = t.getElement();
            e.parentNode && e.parentNode.removeChild(e)
          }
          s && (this.vDomTopPad += s, this.tableElement.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop += this.vDomTop ? s : s + this.vDomWindowBuffer)
        }
        _addBottomRow(t, e) {
          for (var i = this.tableElement, s = [], o = 0, n = this.vDomBottom + 1, r = 0, l = !0; l;) {
            let a, h, d = t[n];
            d && r < this.vDomMaxRenderChain ? (a = d.getHeight() || this.vDomRowHeight, h = d.initialized, e >= a ? (this.styleRow(d, n), i.appendChild(d.getElement()), d.initialized && d.heightInitialized || s.push(d), d.initialize(), h || (a = d.getElement().offsetHeight, a > this.vDomWindowBuffer && (this.vDomWindowBuffer = 2 * a)), e -= a, o += a, this.vDomBottom++, n++, r++) : l = !1) : l = !1
          }
          for (let t of s) t.clearCellHeight();
          this._quickNormalizeRowHeight(s), o && (this.vDomBottomPad -= o, (this.vDomBottomPad < 0 || n == t.length - 1) && (this.vDomBottomPad = 0), i.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom += o)
        }
        _removeBottomRow(t, e) {
          for (var i = [], s = 0, o = 0, n = !0; n;) {
            let r, l = t[this.vDomBottom];
            l && o < this.vDomMaxRenderChain ? (r = l.getHeight() || this.vDomRowHeight, e >= r ? (this.vDomBottom--, e -= r, s += r, i.push(l), o++) : n = !1) : n = !1
          }
          for (let t of i) {
            let e = t.getElement();
            e.parentNode && e.parentNode.removeChild(e)
          }
          s && (this.vDomBottomPad += s, this.vDomBottomPad < 0 && (this.vDomBottomPad = 0), this.tableElement.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom -= s)
        }
        _quickNormalizeRowHeight(t) {
          for (let e of t) e.calcHeight();
          for (let e of t) e.setCellHeight()
        }
      }
      class A extends m {
        constructor(t) {
          super(t), this.element = this.createHolderElement(), this.tableElement = this.createTableElement(), this.heightFixer = this.createTableElement(), this.placeholder = null, this.placeholderContents = null, this.firstRender = !1, this.renderMode = "virtual", this.fixedHeight = !1, this.rows = [], this.activeRowsPipeline = [], this.activeRows = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0, this.scrollTop = 0, this.scrollLeft = 0, this.redrawBlock = !1, this.redrawBlockRestoreConfig = !1, this.redrawBlockRenderInPosition = !1, this.dataPipeline = [], this.displayPipeline = [], this.scrollbarWidth = 0, this.renderer = null
        }
        createHolderElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-tableholder"), t.setAttribute("tabindex", 0), t
        }
        createTableElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-table"), t.setAttribute("role", "rowgroup"), t.setAttribute("id", "tabulator-table-body"), t
        }
        initializePlaceholder() {
          var t = this.table.options.placeholder;
          if ("function" == typeof t && (t = t.call(this.table)), t = this.chain("placeholder", [t], t, t) || t) {
            let e = document.createElement("div");
            if (e.classList.add("tabulator-placeholder"), "string" == typeof t) {
              let i = document.createElement("div");
              i.classList.add("tabulator-placeholder-contents"), i.innerHTML = t, e.appendChild(i), this.placeholderContents = i
            } else "undefined" != typeof HTMLElement && t instanceof HTMLElement ? (e.appendChild(t), this.placeholderContents = t) : (console.warn("Invalid placeholder provided, must be string or HTML Element", t), this.el = null);
            this.placeholder = e
          }
        }
        getElement() {
          return this.element
        }
        getTableElement() {
          return this.tableElement
        }
        initialize() {
          this.initializePlaceholder(), this.initializeRenderer(), this.element.appendChild(this.tableElement), this.firstRender = !0, this.element.addEventListener("scroll", () => {
            var t = this.element.scrollLeft,
              e = this.scrollLeft > t,
              i = this.element.scrollTop,
              s = this.scrollTop > i;
            this.scrollLeft != t && (this.scrollLeft = t, this.dispatch("scroll-horizontal", t, e), this.dispatchExternal("scrollHorizontal", t, e), this._positionPlaceholder()), this.scrollTop != i && (this.scrollTop = i, this.renderer.scrollRows(i, s), this.dispatch("scroll-vertical", i, s), this.dispatchExternal("scrollVertical", i, s))
          })
        }
        findRow(t) {
          return "object" != typeof t ? void 0 !== t && (this.rows.find(e => e.data[this.table.options.index] == t) || !1) : t instanceof x ? t : t instanceof E ? t._getSelf() || !1 : "undefined" != typeof HTMLElement && t instanceof HTMLElement && this.rows.find(e => e.getElement() === t) || !1
        }
        getRowFromDataObject(t) {
          return this.rows.find(e => e.data === t) || !1
        }
        getRowFromPosition(t) {
          return this.getDisplayRows().find(e => "row" === e.type && e.getPosition() === t && e.isDisplayed())
        }
        scrollToRow(t, e, i) {
          return this.renderer.scrollToRowPosition(t, e, i)
        }
        setData(t, e, i) {
          return new Promise((s, o) => {
            e && this.getDisplayRows().length ? this.table.options.pagination ? this._setDataActual(t, !0) : this.reRenderInPosition(() => {
              this._setDataActual(t)
            }) : (this.table.options.autoColumns && i && this.table.initialized && this.table.columnManager.generateColumnsFromRowData(t), this.resetScroll(), this._setDataActual(t)), s()
          })
        }
        _setDataActual(t, e) {
          this.dispatchExternal("dataProcessing", t), this._wipeElements(), Array.isArray(t) ? (this.dispatch("data-processing", t), t.forEach((t, e) => {
            if (t && "object" == typeof t) {
              var i = new x(t, this);
              this.rows.push(i)
            } else console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", t)
          }), this.refreshActiveData(!1, !1, e), this.dispatch("data-processed", t), this.dispatchExternal("dataProcessed", t)) : console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ", typeof t, "\nData:     ", t)
        }
        _wipeElements() {
          this.dispatch("rows-wipe"), this.destroy(), this.adjustTableSize(), this.dispatch("rows-wiped")
        }
        destroy() {
          this.rows.forEach(t => {
            t.wipe()
          }), this.rows = [], this.activeRows = [], this.activeRowsPipeline = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0
        }
        deleteRow(t, e) {
          var i = this.rows.indexOf(t),
            s = this.activeRows.indexOf(t);
          s > -1 && this.activeRows.splice(s, 1), i > -1 && this.rows.splice(i, 1), this.setActiveRows(this.activeRows), this.displayRowIterator(e => {
            var i = e.indexOf(t);
            i > -1 && e.splice(i, 1)
          }), e || this.reRenderInPosition(), this.regenerateRowPositions(), this.dispatchExternal("rowDeleted", t.getComponent()), this.displayRowsCount || this.tableEmpty(), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.getData())
        }
        addRow(t, e, i, s) {
          return this.addRowActual(t, e, i, s)
        }
        addRows(t, e, i, s) {
          var o = [];
          return new Promise((n, r) => {
            e = this.findAddRowPos(e), Array.isArray(t) || (t = [t]), (void 0 === i && e || void 0 !== i && !e) && t.reverse(), t.forEach((t, s) => {
              var n = this.addRow(t, e, i, !0);
              o.push(n), this.dispatch("row-added", n, t, e, i)
            }), this.refreshActiveData(!!s && "displayPipeline", !1, !0), this.regenerateRowPositions(), this.displayRowsCount && this._clearPlaceholder(), n(o)
          })
        }
        findAddRowPos(t) {
          return void 0 === t && (t = this.table.options.addRowPos), "pos" === t && (t = !0), "bottom" === t && (t = !1), t
        }
        addRowActual(t, e, i, s) {
          var o, n, r = t instanceof x ? t : new x(t || {}, this),
            l = this.findAddRowPos(e),
            a = -1;
          return i || (n = this.chain("row-adding-position", [r, l], null, {
            index: i,
            top: l
          }), i = n.index, l = n.top), void 0 !== i && (i = this.findRow(i)), (i = this.chain("row-adding-index", [r, i, l], null, i)) && (a = this.rows.indexOf(i)), i && a > -1 ? (o = this.activeRows.indexOf(i), this.displayRowIterator(function(t) {
            var e = t.indexOf(i);
            e > -1 && t.splice(l ? e : e + 1, 0, r)
          }), o > -1 && this.activeRows.splice(l ? o : o + 1, 0, r), this.rows.splice(l ? a : a + 1, 0, r)) : l ? (this.displayRowIterator(function(t) {
            t.unshift(r)
          }), this.activeRows.unshift(r), this.rows.unshift(r)) : (this.displayRowIterator(function(t) {
            t.push(r)
          }), this.activeRows.push(r), this.rows.push(r)), this.setActiveRows(this.activeRows), this.dispatchExternal("rowAdded", r.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), s || this.reRenderInPosition(), r
        }
        moveRow(t, e, i) {
          this.dispatch("row-move", t, e, i), this.moveRowActual(t, e, i), this.regenerateRowPositions(), this.dispatch("row-moved", t, e, i), this.dispatchExternal("rowMoved", t.getComponent())
        }
        moveRowActual(t, e, i) {
          this.moveRowInArray(this.rows, t, e, i), this.moveRowInArray(this.activeRows, t, e, i), this.displayRowIterator(s => {
            this.moveRowInArray(s, t, e, i)
          }), this.dispatch("row-moving", t, e, i)
        }
        moveRowInArray(t, e, i, s) {
          var o, n, r;
          if (e !== i && ((o = t.indexOf(e)) > -1 && (t.splice(o, 1), (n = t.indexOf(i)) > -1 ? s ? t.splice(n + 1, 0, e) : t.splice(n, 0, e) : t.splice(o, 0, e)), t === this.getDisplayRows())) {
            r = n > o ? n : o + 1;
            for (let e = o < n ? o : n; e <= r; e++) t[e] && this.styleRow(t[e], e)
          }
        }
        clearData() {
          this.setData([])
        }
        getRowIndex(t) {
          return this.findRowIndex(t, this.rows)
        }
        getDisplayRowIndex(t) {
          var e = this.getDisplayRows().indexOf(t);
          return e > -1 && e
        }
        nextDisplayRow(t, e) {
          var i = this.getDisplayRowIndex(t),
            s = !1;
          return !1 !== i && i < this.displayRowsCount - 1 && (s = this.getDisplayRows()[i + 1]), !s || s instanceof x && "row" == s.type ? s : this.nextDisplayRow(s, e)
        }
        prevDisplayRow(t, e) {
          var i = this.getDisplayRowIndex(t),
            s = !1;
          return i && (s = this.getDisplayRows()[i - 1]), !e || !s || s instanceof x && "row" == s.type ? s : this.prevDisplayRow(s, e)
        }
        findRowIndex(t, e) {
          var i;
          return !!((t = this.findRow(t)) && (i = e.indexOf(t)) > -1) && i
        }
        getData(t, e) {
          var i = [];
          return this.getRows(t).forEach(function(t) {
            "row" == t.type && i.push(t.getData(e || "data"))
          }), i
        }
        getComponents(t) {
          var e = [];
          return this.getRows(t).forEach(function(t) {
            e.push(t.getComponent())
          }), e
        }
        getDataCount(t) {
          return this.getRows(t).length
        }
        scrollHorizontal(t) {
          this.scrollLeft = t, this.element.scrollLeft = t, this.dispatch("scroll-horizontal", t)
        }
        registerDataPipelineHandler(t, e) {
          void 0 !== e ? (this.dataPipeline.push({
            handler: t,
            priority: e
          }), this.dataPipeline.sort((t, e) => t.priority - e.priority)) : console.error("Data pipeline handlers must have a priority in order to be registered")
        }
        registerDisplayPipelineHandler(t, e) {
          void 0 !== e ? (this.displayPipeline.push({
            handler: t,
            priority: e
          }), this.displayPipeline.sort((t, e) => t.priority - e.priority)) : console.error("Display pipeline handlers must have a priority in order to be registered")
        }
        refreshActiveData(t, e, i) {
          var s = this.table,
            o = "",
            n = 0,
            r = ["all", "dataPipeline", "display", "displayPipeline", "end"];
          if (!this.table.destroyed) {
            if ("function" == typeof t)
              if ((n = this.dataPipeline.findIndex(e => e.handler === t)) > -1) o = "dataPipeline", e && (n == this.dataPipeline.length - 1 ? o = "display" : n++);
              else {
                if (!((n = this.displayPipeline.findIndex(e => e.handler === t)) > -1)) return void console.error("Unable to refresh data, invalid handler provided", t);
                o = "displayPipeline", e && (n == this.displayPipeline.length - 1 ? o = "end" : n++)
              }
            else o = t || "all", n = 0;
            if (this.redrawBlock) return void((!this.redrawBlockRestoreConfig || this.redrawBlockRestoreConfig && (this.redrawBlockRestoreConfig.stage === o && n < this.redrawBlockRestoreConfig.index || r.indexOf(o) < r.indexOf(this.redrawBlockRestoreConfig.stage))) && (this.redrawBlockRestoreConfig = {
              handler: t,
              skipStage: e,
              renderInPosition: i,
              stage: o,
              index: n
            }));
            p.elVisible(this.element) ? i ? this.reRenderInPosition(this.refreshPipelines.bind(this, t, o, n, i)) : (this.refreshPipelines(t, o, n, i), t || this.table.columnManager.renderer.renderColumns(), this.renderTable(), s.options.layoutColumnsOnNewData && this.table.columnManager.redraw(!0)) : this.refreshPipelines(t, o, n, i), this.dispatch("data-refreshed")
          }
        }
        refreshPipelines(t, e, i, s) {
          switch (this.dispatch("data-refreshing"), t && this.activeRowsPipeline[0] || (this.activeRowsPipeline[0] = this.rows.slice(0)), e) {
            case "all":
            case "dataPipeline":
              for (let t = i; t < this.dataPipeline.length; t++) {
                let e = this.dataPipeline[t].handler(this.activeRowsPipeline[t].slice(0));
                this.activeRowsPipeline[t + 1] = e || this.activeRowsPipeline[t].slice(0)
              }
              this.setActiveRows(this.activeRowsPipeline[this.dataPipeline.length]);
            case "display":
              i = 0, this.resetDisplayRows();
            case "displayPipeline":
              for (let t = i; t < this.displayPipeline.length; t++) {
                let e = this.displayPipeline[t].handler((t ? this.getDisplayRows(t - 1) : this.activeRows).slice(0), s);
                this.setDisplayRows(e || this.getDisplayRows(t - 1).slice(0), t)
              }
            case "end":
              this.regenerateRowPositions()
          }
          this.getDisplayRows().length && this._clearPlaceholder()
        }
        regenerateRowPositions() {
          var t = this.getDisplayRows(),
            e = 1;
          t.forEach(t => {
            "row" === t.type && (t.setPosition(e), e++)
          })
        }
        setActiveRows(t) {
          this.activeRows = this.activeRows = Object.assign([], t), this.activeRowsCount = this.activeRows.length
        }
        resetDisplayRows() {
          this.displayRows = [], this.displayRows.push(this.activeRows.slice(0)), this.displayRowsCount = this.displayRows[0].length
        }
        setDisplayRows(t, e) {
          this.displayRows[e] = t, e == this.displayRows.length - 1 && (this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length)
        }
        getDisplayRows(t) {
          return void 0 === t ? this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [] : this.displayRows[t] || []
        }
        getVisibleRows(t, e) {
          var i = Object.assign([], this.renderer.visibleRows(!e));
          return t && (i = this.chain("rows-visible", [e], i, i)), i
        }
        displayRowIterator(t) {
          this.activeRowsPipeline.forEach(t), this.displayRows.forEach(t), this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length
        }
        getRows(t) {
          var e = [];
          switch (t) {
            case "active":
              e = this.activeRows;
              break;
            case "display":
              e = this.table.rowManager.getDisplayRows();
              break;
            case "visible":
              e = this.getVisibleRows(!1, !0);
              break;
            default:
              e = this.chain("rows-retrieve", t, null, this.rows) || this.rows
          }
          return e
        }
        reRenderInPosition(t) {
          this.redrawBlock ? t ? t() : this.redrawBlockRenderInPosition = !0 : (this.dispatchExternal("renderStarted"), this.renderer.rerenderRows(t), this.fixedHeight || this.adjustTableSize(), this.scrollBarCheck(), this.dispatchExternal("renderComplete"))
        }
        scrollBarCheck() {
          var t = 0;
          this.element.scrollHeight > this.element.clientHeight && (t = this.element.offsetWidth - this.element.clientWidth), t !== this.scrollbarWidth && (this.scrollbarWidth = t, this.dispatch("scrollbar-vertical", t))
        }
        initializeRenderer() {
          var t, e = {
            virtual: B,
            basic: z
          };
          (t = "string" == typeof this.table.options.renderVertical ? e[this.table.options.renderVertical] : this.table.options.renderVertical) ? (this.renderMode = this.table.options.renderVertical, this.renderer = new t(this.table, this.element, this.tableElement), this.renderer.initialize(), !this.table.element.clientHeight && !this.table.options.height || this.table.options.minHeight && this.table.options.maxHeight ? this.fixedHeight = !1 : this.fixedHeight = !0) : console.error("Unable to find matching renderer:", this.table.options.renderVertical)
        }
        getRenderMode() {
          return this.renderMode
        }
        renderTable() {
          this.dispatchExternal("renderStarted"), this.element.scrollTop = 0, this._clearTable(), this.displayRowsCount ? (this.renderer.renderRows(), this.firstRender && (this.firstRender = !1, this.fixedHeight || this.adjustTableSize(), this.layoutRefresh(!0))) : this.renderEmptyScroll(), this.fixedHeight || this.adjustTableSize(), this.dispatch("table-layout"), this.displayRowsCount || this._showPlaceholder(), this.scrollBarCheck(), this.dispatchExternal("renderComplete")
        }
        renderEmptyScroll() {
          this.placeholder ? this.tableElement.style.display = "none" : this.tableElement.style.minWidth = this.table.columnManager.getWidth() + "px"
        }
        _clearTable() {
          this._clearPlaceholder(), this.scrollTop = 0, this.scrollLeft = 0, this.renderer.clearRows()
        }
        tableEmpty() {
          this.renderEmptyScroll(), this._showPlaceholder()
        }
        checkPlaceholder() {
          this.displayRowsCount ? this._clearPlaceholder() : this.tableEmpty()
        }
        _showPlaceholder() {
          this.placeholder && (this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder), this.initializePlaceholder(), this.placeholder.setAttribute("tabulator-render-mode", this.renderMode), this.getElement().appendChild(this.placeholder), this._positionPlaceholder(), this.adjustTableSize())
        }
        _clearPlaceholder() {
          this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder), this.tableElement.style.minWidth = "", this.tableElement.style.display = ""
        }
        _positionPlaceholder() {
          this.placeholder && this.placeholder.parentNode && (this.placeholder.style.width = this.table.columnManager.getWidth() + "px", this.placeholderContents.style.width = this.table.rowManager.element.clientWidth + "px", this.placeholderContents.style.marginLeft = this.scrollLeft + "px")
        }
        styleRow(t, e) {
          var i = t.getElement();
          e % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"))
        }
        normalizeHeight(t) {
          this.activeRows.forEach(function(e) {
            e.normalizeHeight(t)
          })
        }
        adjustTableSize() {
          let t, e = this.element.clientHeight,
            i = !1;
          if ("fill" === this.renderer.verticalFillMode) {
            let s = Math.floor(this.table.columnManager.getElement().getBoundingClientRect().height + (this.table.footerManager && this.table.footerManager.active && !this.table.footerManager.external ? this.table.footerManager.getElement().getBoundingClientRect().height : 0));
            if (this.fixedHeight) {
              t = isNaN(this.table.options.minHeight) ? this.table.options.minHeight : this.table.options.minHeight + "px";
              const e = "calc(100% - " + s + "px)";
              this.element.style.minHeight = t || "calc(100% - " + s + "px)", this.element.style.height = e, this.element.style.maxHeight = e
            } else this.element.style.height = "", this.element.style.height = this.table.element.clientHeight - s + "px", this.element.scrollTop = this.scrollTop;
            this.renderer.resize(), this.fixedHeight || e == this.element.clientHeight || (i = !0, this.redrawing || (this.redrawing = !0, this.subscribed("table-resize") ? this.dispatch("table-resize") : this.redraw(), this.redrawing = !1)), this.scrollBarCheck()
          }
          return this._positionPlaceholder(), i
        }
        reinitialize() {
          this.rows.forEach(function(t) {
            t.reinitialize(!0)
          })
        }
        blockRedraw() {
          this.redrawBlock = !0, this.redrawBlockRestoreConfig = !1
        }
        restoreRedraw() {
          this.redrawBlock = !1, this.redrawBlockRestoreConfig ? (this.refreshActiveData(this.redrawBlockRestoreConfig.handler, this.redrawBlockRestoreConfig.skipStage, this.redrawBlockRestoreConfig.renderInPosition), this.redrawBlockRestoreConfig = !1) : this.redrawBlockRenderInPosition && this.reRenderInPosition(), this.redrawBlockRenderInPosition = !1
        }
        redraw(t) {
          this.adjustTableSize(), this.table.tableWidth = this.table.element.clientWidth, t ? this.renderTable() : (this.reRenderInPosition(), this.scrollHorizontal(this.scrollLeft))
        }
        resetScroll() {
          if (this.element.scrollLeft = 0, this.element.scrollTop = 0, "ie" === this.table.browser) {
            var t = document.createEvent("Event");
            t.initEvent("scroll", !1, !0), this.element.dispatchEvent(t)
          } else this.element.dispatchEvent(new Event("scroll"))
        }
      }
      class W extends m {
        constructor(t) {
          super(t), this.active = !1, this.element = this.createElement(), this.containerElement = this.createContainerElement(), this.external = !1
        }
        initialize() {
          this.initializeElement()
        }
        createElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-footer"), t
        }
        createContainerElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-footer-contents"), this.element.appendChild(t), t
        }
        initializeElement() {
          this.table.options.footerElement && ("string" == typeof this.table.options.footerElement ? "<" === this.table.options.footerElement[0] ? this.containerElement.innerHTML = this.table.options.footerElement : (this.external = !0, this.containerElement = document.querySelector(this.table.options.footerElement)) : this.element = this.table.options.footerElement)
        }
        getElement() {
          return this.element
        }
        append(t) {
          this.activate(), this.containerElement.appendChild(t), this.table.rowManager.adjustTableSize()
        }
        prepend(t) {
          this.activate(), this.element.insertBefore(t, this.element.firstChild), this.table.rowManager.adjustTableSize()
        }
        remove(t) {
          t.parentNode.removeChild(t), this.deactivate()
        }
        deactivate(t) {
          this.element.firstChild && !t || (this.external || this.element.parentNode.removeChild(this.element), this.active = !1)
        }
        activate() {
          this.active || (this.active = !0, this.external || (this.table.element.appendChild(this.getElement()), this.table.element.style.display = ""))
        }
        redraw() {
          this.dispatch("footer-redraw")
        }
      }
      class I extends m {
        constructor(t) {
          super(t), this.el = null, this.abortClasses = ["tabulator-headers", "tabulator-table"], this.previousTargets = {}, this.listeners = ["click", "dblclick", "contextmenu", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousemove", "mouseup", "mousedown", "touchstart", "touchend"], this.componentMap = {
            "tabulator-cell": "cell",
            "tabulator-row": "row",
            "tabulator-group": "group",
            "tabulator-col": "column"
          }, this.pseudoTrackers = {
            row: {
              subscriber: null,
              target: null
            },
            cell: {
              subscriber: null,
              target: null
            },
            group: {
              subscriber: null,
              target: null
            },
            column: {
              subscriber: null,
              target: null
            }
          }, this.pseudoTracking = !1
        }
        initialize() {
          this.el = this.table.element, this.buildListenerMap(), this.bindSubscriptionWatchers()
        }
        buildListenerMap() {
          var t = {};
          this.listeners.forEach(e => {
            t[e] = {
              handler: null,
              components: []
            }
          }), this.listeners = t
        }
        bindPseudoEvents() {
          Object.keys(this.pseudoTrackers).forEach(t => {
            this.pseudoTrackers[t].subscriber = this.pseudoMouseEnter.bind(this, t), this.subscribe(t + "-mouseover", this.pseudoTrackers[t].subscriber)
          }), this.pseudoTracking = !0
        }
        pseudoMouseEnter(t, e, i) {
          this.pseudoTrackers[t].target !== i && (this.pseudoTrackers[t].target && this.dispatch(t + "-mouseleave", e, this.pseudoTrackers[t].target), this.pseudoMouseLeave(t, e), this.pseudoTrackers[t].target = i, this.dispatch(t + "-mouseenter", e, i))
        }
        pseudoMouseLeave(t, e) {
          var i = Object.keys(this.pseudoTrackers),
            s = {
              row: ["cell"],
              cell: ["row"]
            };
          (i = i.filter(e => {
            var i = s[t];
            return e !== t && (!i || i && !i.includes(e))
          })).forEach(t => {
            var i = this.pseudoTrackers[t].target;
            this.pseudoTrackers[t].target && (this.dispatch(t + "-mouseleave", e, i), this.pseudoTrackers[t].target = null)
          })
        }
        bindSubscriptionWatchers() {
          var t = Object.keys(this.listeners),
            e = Object.values(this.componentMap);
          for (let i of e)
            for (let e of t) {
              let t = i + "-" + e;
              this.subscriptionChange(t, this.subscriptionChanged.bind(this, i, e))
            }
          this.subscribe("table-destroy", this.clearWatchers.bind(this))
        }
        subscriptionChanged(t, e, i) {
          var s = this.listeners[e].components,
            o = s.indexOf(t),
            n = !1;
          i ? -1 === o && (s.push(t), n = !0) : this.subscribed(t + "-" + e) || o > -1 && (s.splice(o, 1), n = !0), "mouseenter" !== e && "mouseleave" !== e || this.pseudoTracking || this.bindPseudoEvents(), n && this.updateEventListeners()
        }
        updateEventListeners() {
          for (let t in this.listeners) {
            let e = this.listeners[t];
            e.components.length ? e.handler || (e.handler = this.track.bind(this, t), this.el.addEventListener(t, e.handler)) : e.handler && (this.el.removeEventListener(t, e.handler), e.handler = null)
          }
        }
        track(t, e) {
          var i = e.composedPath && e.composedPath() || e.path,
            s = this.findTargets(i);
          s = this.bindComponents(t, s), this.triggerEvents(t, e, s), !this.pseudoTracking || "mouseover" != t && "mouseleave" != t || Object.keys(s).length || this.pseudoMouseLeave("none", e)
        }
        findTargets(t) {
          var e = {};
          let i = Object.keys(this.componentMap);
          for (let s of t) {
            let t = s.classList ? [...s.classList] : [];
            if (t.filter(t => this.abortClasses.includes(t)).length) break;
            let o = t.filter(t => i.includes(t));
            for (let t of o) e[this.componentMap[t]] || (e[this.componentMap[t]] = s)
          }
          return e.group && e.group === e.row && delete e.row, e
        }
        bindComponents(t, e) {
          var i = Object.keys(e).reverse(),
            s = this.listeners[t],
            o = {},
            n = {},
            r = {};
          for (let t of i) {
            let i, n = e[t],
              l = this.previousTargets[t];
            if (l && l.target === n) i = l.component;
            else switch (t) {
              case "row":
              case "group":
                (s.components.includes("row") || s.components.includes("cell") || s.components.includes("group")) && (i = this.table.rowManager.getVisibleRows(!0).find(t => t.getElement() === n), e.row && e.row.parentNode && e.row.parentNode.closest(".tabulator-row") && (e[t] = !1));
                break;
              case "column":
                s.components.includes("column") && (i = this.table.columnManager.findColumn(n));
                break;
              case "cell":
                s.components.includes("cell") && (o.row instanceof x ? i = o.row.findCell(n) : e.row && console.warn("Event Target Lookup Error - The row this cell is attached to cannot be found, has the table been reinitialized without being destroyed first?"))
            }
            i && (o[t] = i, r[t] = {
              target: n,
              component: i
            })
          }
          return this.previousTargets = r, Object.keys(e).forEach(t => {
            let e = o[t];
            n[t] = e
          }), n
        }
        triggerEvents(t, e, i) {
          var s = this.listeners[t];
          for (let o in i) i[o] && s.components.includes(o) && this.dispatch(o + "-" + t, e, i[o])
        }
        clearWatchers() {
          for (let t in this.listeners) {
            let e = this.listeners[t];
            e.handler && (this.el.removeEventListener(t, e.handler), e.handler = null)
          }
        }
      }
      class O {
        constructor(t) {
          this.table = t, this.bindings = {}
        }
        bind(t, e, i) {
          this.bindings[t] || (this.bindings[t] = {}), this.bindings[t][e] ? console.warn("Unable to bind component handler, a matching function name is already bound", t, e, i) : this.bindings[t][e] = i
        }
        handle(t, e, i) {
          if (this.bindings[t] && this.bindings[t][i] && "function" == typeof this.bindings[t][i].bind) return this.bindings[t][i].bind(null, e);
          "then" === i || "string" != typeof i || i.startsWith("_") || this.table.options.debugInvalidComponentFuncs && console.error("The " + t + " component does not have a " + i + " function, have you checked that you have the correct Tabulator module installed?")
        }
      }
      class V extends m {
        constructor(t) {
          super(t), this.requestOrder = 0, this.loading = !1
        }
        initialize() {}
        load(t, e, i, s, o, n) {
          var r = ++this.requestOrder;
          return this.table.destroyed ? Promise.resolve() : (this.dispatchExternal("dataLoading", t), !t || 0 != t.indexOf("{") && 0 != t.indexOf("[") || (t = JSON.parse(t)), this.confirm("data-loading", [t, e, i, o]) ? (this.loading = !0, o || this.alertLoader(), e = this.chain("data-params", [t, i, o], e || {}, e || {}), e = this.mapParams(e, this.table.options.dataSendParams), this.chain("data-load", [t, e, i, o], !1, Promise.resolve([])).then(t => {
            if (this.table.destroyed) console.warn("Data Load Response Blocked - Table has been destroyed");
            else {
              Array.isArray(t) || "object" != typeof t || (t = this.mapParams(t, this.objectInvert(this.table.options.dataReceiveParams)));
              var e = this.chain("data-loaded", [t], null, t);
              r == this.requestOrder ? (this.clearAlert(), !1 !== e && (this.dispatchExternal("dataLoaded", e), this.table.rowManager.setData(e, s, void 0 === n ? !s : n))) : console.warn("Data Load Response Blocked - An active data load request was blocked by an attempt to change table data while the request was being made")
            }
          }).catch(t => {
            console.error("Data Load Error: ", t), this.dispatchExternal("dataLoadError", t), o || this.alertError(), setTimeout(() => {
              this.clearAlert()
            }, this.table.options.dataLoaderErrorTimeout)
          }).finally(() => {
            this.loading = !1
          })) : (this.dispatchExternal("dataLoaded", t), t || (t = []), this.table.rowManager.setData(t, s, void 0 === n ? !s : n), Promise.resolve()))
        }
        mapParams(t, e) {
          var i = {};
          for (let s in t) i[e.hasOwnProperty(s) ? e[s] : s] = t[s];
          return i
        }
        objectInvert(t) {
          var e = {};
          for (let i in t) e[t[i]] = i;
          return e
        }
        blockActiveLoad() {
          this.requestOrder++
        }
        alertLoader() {
          ("function" == typeof this.table.options.dataLoader ? this.table.options.dataLoader() : this.table.options.dataLoader) && this.table.alertManager.alert(this.table.options.dataLoaderLoading || this.langText("data|loading"))
        }
        alertError() {
          this.table.alertManager.alert(this.table.options.dataLoaderError || this.langText("data|error"), "error")
        }
        clearAlert() {
          this.table.alertManager.clear()
        }
      }
      class N {
        constructor(t, e, i) {
          this.table = t, this.events = {}, this.optionsList = e || {}, this.subscriptionNotifiers = {}, this.dispatch = i ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.debug = i
        }
        subscriptionChange(t, e) {
          this.subscriptionNotifiers[t] || (this.subscriptionNotifiers[t] = []), this.subscriptionNotifiers[t].push(e), this.subscribed(t) && this._notifySubscriptionChange(t, !0)
        }
        subscribe(t, e) {
          this.events[t] || (this.events[t] = []), this.events[t].push(e), this._notifySubscriptionChange(t, !0)
        }
        unsubscribe(t, e) {
          var i;
          if (this.events[t]) {
            if (e) {
              if (!((i = this.events[t].findIndex(t => t === e)) > -1)) return void console.warn("Cannot remove event, no matching event found:", t, e);
              this.events[t].splice(i, 1)
            } else delete this.events[t];
            this._notifySubscriptionChange(t, !1)
          } else console.warn("Cannot remove event, no events set on:", t)
        }
        subscribed(t) {
          return this.events[t] && this.events[t].length
        }
        _notifySubscriptionChange(t, e) {
          var i = this.subscriptionNotifiers[t];
          i && i.forEach(t => {
            t(e)
          })
        }
        _dispatch() {
          var t, e = Array.from(arguments),
            i = e.shift();
          return this.events[i] && this.events[i].forEach((i, s) => {
            let o = i.apply(this.table, e);
            s || (t = o)
          }), t
        }
        _debugDispatch() {
          var t = Array.from(arguments),
            e = t[0];
          return t[0] = "ExternalEvent:" + t[0], (!0 === this.debug || this.debug.includes(e)) && console.log(...t), this._dispatch(...arguments)
        }
      }
      class F {
        constructor(t) {
          this.events = {}, this.subscriptionNotifiers = {}, this.dispatch = t ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.chain = t ? this._debugChain.bind(this) : this._chain.bind(this), this.confirm = t ? this._debugConfirm.bind(this) : this._confirm.bind(this), this.debug = t
        }
        subscriptionChange(t, e) {
          this.subscriptionNotifiers[t] || (this.subscriptionNotifiers[t] = []), this.subscriptionNotifiers[t].push(e), this.subscribed(t) && this._notifySubscriptionChange(t, !0)
        }
        subscribe(t, e, i = 1e4) {
          this.events[t] || (this.events[t] = []), this.events[t].push({
            callback: e,
            priority: i
          }), this.events[t].sort((t, e) => t.priority - e.priority), this._notifySubscriptionChange(t, !0)
        }
        unsubscribe(t, e) {
          var i;
          if (this.events[t]) {
            if (e) {
              if (!((i = this.events[t].findIndex(t => t.callback === e)) > -1)) return void console.warn("Cannot remove event, no matching event found:", t, e);
              this.events[t].splice(i, 1)
            }
            this._notifySubscriptionChange(t, !1)
          } else console.warn("Cannot remove event, no events set on:", t)
        }
        subscribed(t) {
          return this.events[t] && this.events[t].length
        }
        _chain(t, e, i, s) {
          var o = i;
          return Array.isArray(e) || (e = [e]), this.subscribed(t) ? (this.events[t].forEach((t, i) => {
            o = t.callback.apply(this, e.concat([o]))
          }), o) : "function" == typeof s ? s() : s
        }
        _confirm(t, e) {
          var i = !1;
          return Array.isArray(e) || (e = [e]), this.subscribed(t) && this.events[t].forEach((t, s) => {
            t.callback.apply(this, e) && (i = !0)
          }), i
        }
        _notifySubscriptionChange(t, e) {
          var i = this.subscriptionNotifiers[t];
          i && i.forEach(t => {
            t(e)
          })
        }
        _dispatch() {
          var t = Array.from(arguments),
            e = t.shift();
          this.events[e] && this.events[e].forEach(e => {
            e.callback.apply(this, t)
          })
        }
        _debugDispatch() {
          var t = Array.from(arguments),
            e = t[0];
          return t[0] = "InternalEvent:" + e, (!0 === this.debug || this.debug.includes(e)) && console.log(...t), this._dispatch(...arguments)
        }
        _debugChain() {
          var t = Array.from(arguments),
            e = t[0];
          return t[0] = "InternalEvent:" + e, (!0 === this.debug || this.debug.includes(e)) && console.log(...t), this._chain(...arguments)
        }
        _debugConfirm() {
          var t = Array.from(arguments),
            e = t[0];
          return t[0] = "InternalEvent:" + e, (!0 === this.debug || this.debug.includes(e)) && console.log(...t), this._confirm(...arguments)
        }
      }
      class j extends m {
        constructor(t) {
          super(t)
        }
        _warnUser() {
          this.options("debugDeprecation") && console.warn(...arguments)
        }
        check(t, e, i) {
          var s = "";
          return void 0 === this.options(t) || (s = "Deprecated Setup Option - Use of the %c" + t + "%c option is now deprecated", e ? (s = s + ", Please use the %c" + e + "%c option instead", this._warnUser(s, "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;"), i && (this.table.options[e] = this.table.options[t])) : this._warnUser(s, "font-weight: bold;", "font-weight: normal;"), !1)
        }
        checkMsg(t, e) {
          return void 0 === this.options(t) || (this._warnUser("%cDeprecated Setup Option - Use of the %c" + t + " %c option is now deprecated, " + e, "font-weight: normal;", "font-weight: bold;", "font-weight: normal;"), !1)
        }
        msg(t) {
          this._warnUser(t)
        }
      }
      class G extends m {
        constructor(t) {
          super(t), this.deps = {}, this.props = {}
        }
        initialize() {
          this.deps = Object.assign({}, this.options("dependencies"))
        }
        lookup(t, e, i) {
          if (!Array.isArray(t)) return e ? this.lookupProp(t, e, i) : this.lookupKey(t, i);
          for (const i of t) {
            var s = this.lookup(i, e, !0);
            if (s) break
          }
          if (s) return s;
          this.error(t)
        }
        lookupProp(t, e, i) {
          var s;
          return this.props[t] && this.props[t][e] ? this.props[t][e] : (s = this.lookupKey(t, i)) ? (this.props[t] || (this.props[t] = {}), this.props[t][e] = s[e] || s, this.props[t][e]) : void 0
        }
        lookupKey(t, e) {
          var i;
          return this.deps[t] ? i = this.deps[t] : window[t] ? (this.deps[t] = window[t], i = this.deps[t]) : e || this.error(t), i
        }
        error(t) {
          console.error("Unable to find dependency", t, "Please check documentation and ensure you have imported the required library into your project")
        }
      }

      function U(t, e) {
        t.forEach(function(t) {
          t.reinitializeWidth()
        }), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update()
      }
      var q = {
        fitData: function(t, e) {
          e && this.table.columnManager.renderer.reinitializeColumnWidths(t), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update()
        },
        fitDataFill: U,
        fitDataTable: U,
        fitDataStretch: function(t, e) {
          var i = 0,
            s = this.table.rowManager.element.clientWidth,
            o = 0,
            n = !1;
          t.forEach((t, e) => {
            t.widthFixed || t.reinitializeWidth(), (this.table.options.responsiveLayout ? t.modules.responsive.visible : t.visible) && (n = t), t.visible && (i += t.getWidth())
          }), n ? (o = s - i + n.getWidth(), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && (n.setWidth(0), this.table.modules.responsiveLayout.update()), o > 0 ? n.setWidth(o) : n.reinitializeWidth()) : this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update()
        },
        fitColumns: function(t, e) {
          var i, s, o = this.table.rowManager.element.getBoundingClientRect().width,
            n = 0,
            r = 0,
            l = 0,
            a = [],
            h = [],
            d = 0,
            c = 0;

          function u(t) {
            return "string" == typeof t ? t.indexOf("%") > -1 ? o / 100 * parseInt(t) : parseInt(t) : t
          }

          function m(t, e, i, s) {
            var o = [],
              n = 0,
              r = 0,
              a = 0,
              h = l,
              d = 0,
              c = 0,
              p = [];

            function g(t) {
              return i * (t.column.definition.widthGrow || 1)
            }

            function f(t) {
              return u(t.width) - i * (t.column.definition.widthShrink || 0)
            }
            return t.forEach(function(t, n) {
              var r = s ? f(t) : g(t);
              t.column.minWidth >= r ? o.push(t) : t.column.maxWidth && t.column.maxWidth < r ? (t.width = t.column.maxWidth, e -= t.column.maxWidth, (h -= s ? t.column.definition.widthShrink || 1 : t.column.definition.widthGrow || 1) && (i = Math.floor(e / h))) : (p.push(t), c += s ? t.column.definition.widthShrink || 1 : t.column.definition.widthGrow || 1)
            }), o.length ? (o.forEach(function(t) {
              n += s ? t.width - t.column.minWidth : t.column.minWidth, t.width = t.column.minWidth
            }), r = e - n, a = c ? Math.floor(r / c) : r, d = m(p, r, a, s)) : (d = c ? e - Math.floor(e / c) * c : e, p.forEach(function(t) {
              t.width = s ? f(t) : g(t)
            })), d
          }
          this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update(), this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (o -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), t.forEach(function(t) {
            var e, i, s;
            t.visible && (e = t.definition.width, i = parseInt(t.minWidth), e ? (s = u(e), n += s > i ? s : i, t.definition.widthShrink && (h.push({
              column: t,
              width: s > i ? s : i
            }), d += t.definition.widthShrink)) : (a.push({
              column: t,
              width: 0
            }), l += t.definition.widthGrow || 1))
          }), r = o - n, i = Math.floor(r / l), c = m(a, r, i, !1), a.length && c > 0 && (a[a.length - 1].width += c), a.forEach(function(t) {
            r -= t.width
          }), (s = Math.abs(c) + r) > 0 && d && (c = m(h, s, Math.floor(s / d), !0)), c && h.length && (h[h.length - 1].width -= c), a.forEach(function(t) {
            t.column.setWidth(t.width)
          }), h.forEach(function(t) {
            t.column.setWidth(t.width)
          })
        }
      };
      class X extends f {
        static moduleName = "layout";
        static modes = q;
        constructor(t) {
          super(t, "layout"), this.mode = null, this.registerTableOption("layout", "fitData"), this.registerTableOption("layoutColumnsOnNewData", !1), this.registerColumnOption("widthGrow"), this.registerColumnOption("widthShrink")
        }
        initialize() {
          var t = this.table.options.layout;
          X.modes[t] ? this.mode = t : (console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + t), this.mode = "fitData"), this.table.element.setAttribute("tabulator-layout", this.mode), this.subscribe("column-init", this.initializeColumn.bind(this))
        }
        initializeColumn(t) {
          t.definition.widthGrow && (t.definition.widthGrow = Number(t.definition.widthGrow)), t.definition.widthShrink && (t.definition.widthShrink = Number(t.definition.widthShrink))
        }
        getMode() {
          return this.mode
        }
        layout(t) {
          var e = this.table.columnManager.columnsByIndex.find(t => t.definition.variableHeight || "textarea" === t.definition.formatter);
          this.dispatch("layout-refreshing"), X.modes[this.mode].call(this, this.table.columnManager.columnsByIndex, t), e && this.table.rowManager.normalizeHeight(!0), this.dispatch("layout-refreshed")
        }
      }
      var J = {
        default: {
          groups: {
            item: "item",
            items: "items"
          },
          columns: {},
          data: {
            loading: "Loading",
            error: "Error"
          },
          pagination: {
            page_size: "Page Size",
            page_title: "Show Page",
            first: "First",
            first_title: "First Page",
            last: "Last",
            last_title: "Last Page",
            prev: "Prev",
            prev_title: "Prev Page",
            next: "Next",
            next_title: "Next Page",
            all: "All",
            counter: {
              showing: "Showing",
              of: "of",
              rows: "rows",
              pages: "pages"
            }
          },
          headerFilters: {
            default: "filter column...",
            columns: {}
          }
        }
      };
      class $ extends f {
        static moduleName = "localize";
        static langs = J;
        constructor(t) {
          super(t), this.locale = "default", this.lang = !1, this.bindings = {}, this.langList = {}, this.registerTableOption("locale", !1), this.registerTableOption("langs", {})
        }
        initialize() {
          this.langList = p.deepClone($.langs), !1 !== this.table.options.columnDefaults.headerFilterPlaceholder && this.setHeaderFilterPlaceholder(this.table.options.columnDefaults.headerFilterPlaceholder);
          for (let t in this.table.options.langs) this.installLang(t, this.table.options.langs[t]);
          this.setLocale(this.table.options.locale), this.registerTableFunction("setLocale", this.setLocale.bind(this)), this.registerTableFunction("getLocale", this.getLocale.bind(this)), this.registerTableFunction("getLang", this.getLang.bind(this))
        }
        setHeaderFilterPlaceholder(t) {
          this.langList.default.headerFilters.default = t
        }
        installLang(t, e) {
          this.langList[t] ? this._setLangProp(this.langList[t], e) : this.langList[t] = e
        }
        _setLangProp(t, e) {
          for (let i in e) t[i] && "object" == typeof t[i] ? this._setLangProp(t[i], e[i]) : t[i] = e[i]
        }
        setLocale(t) {
          if (!0 === (t = t || "default") && navigator.language && (t = navigator.language.toLowerCase()), t && !this.langList[t]) {
            let e = t.split("-")[0];
            this.langList[e] ? (console.warn("Localization Error - Exact matching locale not found, using closest match: ", t, e), t = e) : (console.warn("Localization Error - Matching locale not found, using default: ", t), t = "default")
          }
          this.locale = t, this.lang = p.deepClone(this.langList.default || {}), "default" != t && function t(e, i) {
            for (var s in e) "object" == typeof e[s] ? (i[s] || (i[s] = {}), t(e[s], i[s])) : i[s] = e[s]
          }(this.langList[t], this.lang), this.dispatchExternal("localized", this.locale, this.lang), this._executeBindings()
        }
        getLocale(t) {
          return this.locale
        }
        getLang(t) {
          return t ? this.langList[t] : this.lang
        }
        getText(t, e) {
          var i = (e ? t + "|" + e : t).split("|");
          return this._getLangElement(i, this.locale) || ""
        }
        _getLangElement(t, e) {
          var i = this.lang;
          return t.forEach(function(t) {
            var e;
            i && (e = i[t], i = void 0 !== e && e)
          }), i
        }
        bind(t, e) {
          this.bindings[t] || (this.bindings[t] = []), this.bindings[t].push(e), e(this.getText(t), this.lang)
        }
        _executeBindings() {
          for (let t in this.bindings) this.bindings[t].forEach(e => {
            e(this.getText(t), this.lang)
          })
        }
      }
      var K = Object.freeze({
        __proto__: null,
        CommsModule: class extends f {
          static moduleName = "comms";
          constructor(t) {
            super(t)
          }
          initialize() {
            this.registerTableFunction("tableComms", this.receive.bind(this))
          }
          getConnections(t) {
            var e = [];
            return this.table.constructor.registry.lookupTable(t).forEach(t => {
              this.table !== t && e.push(t)
            }), e
          }
          send(t, e, i, s) {
            var o = this.getConnections(t);
            o.forEach(t => {
              t.tableComms(this.table.element, e, i, s)
            }), !o.length && t && console.warn("Table Connection Error - No tables matching selector found", t)
          }
          receive(t, e, i, s) {
            if (this.table.modExists(e)) return this.table.modules[e].commsReceived(t, i, s);
            console.warn("Inter-table Comms Error - no such module:", e)
          }
        },
        LayoutModule: X,
        LocalizeModule: $
      });
      class Y {
        static registry = {
          tables: [],
          register(t) {
            Y.registry.tables.push(t)
          },
          deregister(t) {
            var e = Y.registry.tables.indexOf(t);
            e > -1 && Y.registry.tables.splice(e, 1)
          },
          lookupTable(t, e) {
            var i, s, o = [];
            if ("string" == typeof t) {
              if ((i = document.querySelectorAll(t)).length)
                for (var n = 0; n < i.length; n++)(s = Y.registry.matchElement(i[n])) && o.push(s)
            } else "undefined" != typeof HTMLElement && t instanceof HTMLElement || t instanceof Y ? (s = Y.registry.matchElement(t)) && o.push(s) : Array.isArray(t) ? t.forEach(function(t) {
              o = o.concat(Y.registry.lookupTable(t))
            }) : e || console.warn("Table Connection Error - Invalid Selector", t);
            return o
          },
          matchElement(t) {
            return Y.registry.tables.find(function(e) {
              return t instanceof Y ? e === t : e.element === t
            })
          }
        };
        static findTable(t) {
          var e = Y.registry.lookupTable(t, !0);
          return !(Array.isArray(e) && !e.length) && e
        }
      }
      class Q extends Y {
        static moduleBindings = {};
        static moduleExtensions = {};
        static modulesRegistered = !1;
        static defaultModules = !1;
        constructor() {
          super()
        }
        static initializeModuleBinder(t) {
          Q.modulesRegistered || (Q.modulesRegistered = !0, Q._registerModules(K, !0), t && Q._registerModules(t))
        }
        static _extendModule(t, e, i) {
          if (Q.moduleBindings[t]) {
            var s = Q.moduleBindings[t][e];
            if (s)
              if ("object" == typeof i)
                for (let t in i) s[t] = i[t];
              else console.warn("Module Error - Invalid value type, it must be an object");
            else console.warn("Module Error - property does not exist:", e)
          } else console.warn("Module Error - module does not exist:", t)
        }
        static _registerModules(t, e) {
          var i = Object.values(t);
          e && i.forEach(t => {
            t.prototype.moduleCore = !0
          }), Q._registerModule(i)
        }
        static _registerModule(t) {
          Array.isArray(t) || (t = [t]), t.forEach(t => {
            Q._registerModuleBinding(t), Q._registerModuleExtensions(t)
          })
        }
        static _registerModuleBinding(t) {
          t.moduleName ? Q.moduleBindings[t.moduleName] = t : console.error("Unable to bind module, no moduleName defined", t.moduleName)
        }
        static _registerModuleExtensions(t) {
          var e = t.moduleExtensions;
          if (t.moduleExtensions)
            for (let t in e) {
              let i = e[t];
              if (Q.moduleBindings[t])
                for (let e in i) Q._extendModule(t, e, i[e]);
              else {
                Q.moduleExtensions[t] || (Q.moduleExtensions[t] = {});
                for (let e in i) Q.moduleExtensions[t][e] || (Q.moduleExtensions[t][e] = {}), Object.assign(Q.moduleExtensions[t][e], i[e])
              }
            }
          Q._extendModuleFromQueue(t)
        }
        static _extendModuleFromQueue(t) {
          var e = Q.moduleExtensions[t.moduleName];
          if (e)
            for (let i in e) Q._extendModule(t.moduleName, i, e[i])
        }
        _bindModules() {
          var t = [],
            e = [],
            i = [];
          for (var s in this.modules = {}, Q.moduleBindings) {
            let o = Q.moduleBindings[s],
              n = new o(this);
            this.modules[s] = n, o.prototype.moduleCore ? this.modulesCore.push(n) : o.moduleInitOrder ? o.moduleInitOrder < 0 ? t.push(n) : e.push(n) : i.push(n)
          }
          t.sort((t, e) => t.moduleInitOrder > e.moduleInitOrder ? 1 : -1), e.sort((t, e) => t.moduleInitOrder > e.moduleInitOrder ? 1 : -1), this.modulesRegular = t.concat(i.concat(e))
        }
      }
      class Z extends m {
        constructor(t) {
          super(t), this.element = this._createAlertElement(), this.msgElement = this._createMsgElement(), this.type = null, this.element.appendChild(this.msgElement)
        }
        _createAlertElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-alert"), t
        }
        _createMsgElement() {
          var t = document.createElement("div");
          return t.classList.add("tabulator-alert-msg"), t.setAttribute("role", "alert"), t
        }
        _typeClass() {
          return "tabulator-alert-state-" + this.type
        }
        alert(t, e = "msg") {
          if (t) {
            for (this.clear(), this.dispatch("alert-show", e), this.type = e; this.msgElement.firstChild;) this.msgElement.removeChild(this.msgElement.firstChild);
            this.msgElement.classList.add(this._typeClass()), "function" == typeof t && (t = t()), t instanceof HTMLElement ? this.msgElement.appendChild(t) : this.msgElement.innerHTML = t, this.table.element.appendChild(this.element)
          }
        }
        clear() {
          this.dispatch("alert-hide", this.type), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.msgElement.classList.remove(this._typeClass())
        }
      }
      class tt extends Q {
        static defaultOptions = H;
        static extendModule() {
          tt.initializeModuleBinder(), tt._extendModule(...arguments)
        }
        static registerModule() {
          tt.initializeModuleBinder(), tt._registerModule(...arguments)
        }
        constructor(t, e, i) {
          super(), tt.initializeModuleBinder(i), this.options = {}, this.columnManager = null, this.rowManager = null, this.footerManager = null, this.alertManager = null, this.vdomHoz = null, this.externalEvents = null, this.eventBus = null, this.interactionMonitor = !1, this.browser = "", this.browserSlow = !1, this.browserMobile = !1, this.rtl = !1, this.originalElement = null, this.componentFunctionBinder = new O(this), this.dataLoader = !1, this.modules = {}, this.modulesCore = [], this.modulesRegular = [], this.deprecationAdvisor = new j(this), this.optionsList = new _(this, "table constructor"), this.dependencyRegistry = new G(this), this.initialized = !1, this.destroyed = !1, this.initializeElement(t) && (this.initializeCoreSystems(e), setTimeout(() => {
            this._create()
          })), this.constructor.registry.register(this)
        }
        initializeElement(t) {
          return "undefined" != typeof HTMLElement && t instanceof HTMLElement ? (this.element = t, !0) : "string" == typeof t ? (this.element = document.querySelector(t), !!this.element || (console.error("Tabulator Creation Error - no element found matching selector: ", t), !1)) : (console.error("Tabulator Creation Error - Invalid element provided:", t), !1)
        }
        initializeCoreSystems(t) {
          this.columnManager = new k(this), this.rowManager = new A(this), this.footerManager = new W(this), this.dataLoader = new V(this), this.alertManager = new Z(this), this._bindModules(), this.options = this.optionsList.generate(tt.defaultOptions, t), this._clearObjectPointers(), this._mapDeprecatedFunctionality(), this.externalEvents = new N(this, this.options, this.options.debugEventsExternal), this.eventBus = new F(this.options.debugEventsInternal), this.interactionMonitor = new I(this), this.dataLoader.initialize(), this.footerManager.initialize(), this.dependencyRegistry.initialize()
        }
        _mapDeprecatedFunctionality() {}
        _clearSelection() {
          this.element.classList.add("tabulator-block-select"), window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty(), this.element.classList.remove("tabulator-block-select")
        }
        _create() {
          this.externalEvents.dispatch("tableBuilding"), this.eventBus.dispatch("table-building"), this._rtlCheck(), this._buildElement(), this._initializeTable(), this.initialized = !0, this._loadInitialData().finally(() => {
            this.eventBus.dispatch("table-initialized"), this.externalEvents.dispatch("tableBuilt")
          })
        }
        _rtlCheck() {
          var t = window.getComputedStyle(this.element);
          switch (this.options.textDirection) {
            case "auto":
              if ("rtl" !== t.direction) break;
            case "rtl":
              this.element.classList.add("tabulator-rtl"), this.rtl = !0;
              break;
            case "ltr":
              this.element.classList.add("tabulator-ltr");
            default:
              this.rtl = !1
          }
        }
        _clearObjectPointers() {
          this.options.columns = this.options.columns.slice(0), Array.isArray(this.options.data) && !this.options.reactiveData && (this.options.data = this.options.data.slice(0))
        }
        _buildElement() {
          var t, e = this.element,
            i = this.options;
          if ("TABLE" === e.tagName) {
            this.originalElement = this.element, t = document.createElement("div");
            var s = e.attributes;
            for (var o in s) "object" == typeof s[o] && t.setAttribute(s[o].name, s[o].value);
            e.parentNode.replaceChild(t, e), this.element = e = t
          }
          for (e.classList.add("tabulator"), e.setAttribute("role", "grid"), e.setAttribute("aria-owns", "tabulator-table-body"); e.firstChild;) e.removeChild(e.firstChild);
          i.height && (i.height = isNaN(i.height) ? i.height : i.height + "px", e.style.height = i.height), !1 !== i.minHeight && (i.minHeight = isNaN(i.minHeight) ? i.minHeight : i.minHeight + "px", e.style.minHeight = i.minHeight), !1 !== i.maxHeight && (i.maxHeight = isNaN(i.maxHeight) ? i.maxHeight : i.maxHeight + "px", e.style.maxHeight = i.maxHeight)
        }
        _initializeTable() {
          var t = this.element,
            e = this.options;
          this.interactionMonitor.initialize(), this.columnManager.initialize(), this.rowManager.initialize(), this._detectBrowser(), this.modulesCore.forEach(t => {
            t.initialize()
          }), t.appendChild(this.columnManager.getElement()), t.appendChild(this.rowManager.getElement()), e.footerElement && this.footerManager.activate(), e.autoColumns && e.data && this.columnManager.generateColumnsFromRowData(this.options.data), this.modulesRegular.forEach(t => {
            t.initialize()
          }), this.columnManager.setColumns(e.columns), this.eventBus.dispatch("table-built")
        }
        _loadInitialData() {
          return this.dataLoader.load(this.options.data).finally(() => {
            this.columnManager.verticalAlignHeaders()
          })
        }
        destroy() {
          var t = this.element;
          for (this.destroyed = !0, this.constructor.registry.deregister(this), this.eventBus.dispatch("table-destroy"), this.rowManager.destroy(); t.firstChild;) t.removeChild(t.firstChild);
          t.classList.remove("tabulator"), t.removeAttribute("tabulator-layout"), this.externalEvents.dispatch("tableDestroyed")
        }
        _detectBrowser() {
          var t = navigator.userAgent || navigator.vendor || window.opera;
          t.indexOf("Trident") > -1 ? (this.browser = "ie", this.browserSlow = !0) : t.indexOf("Edge") > -1 ? (this.browser = "edge", this.browserSlow = !0) : t.indexOf("Firefox") > -1 ? (this.browser = "firefox", this.browserSlow = !1) : t.indexOf("Mac OS") > -1 ? (this.browser = "safari", this.browserSlow = !1) : (this.browser = "other", this.browserSlow = !1), this.browserMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.slice(0, 4))
        }
        initGuard(t, e) {
          var i, s;
          return this.options.debugInitialization && !this.initialized && (t || (t = " " == (s = "Error" == (i = (new Error).stack.split("\n"))[0] ? i[2] : i[1])[0] ? s.trim().split(" ")[1].split(".")[1] : s.trim().split("@")[0]), console.warn("Table Not Initialized - Calling the " + t + " function before the table is initialized may result in inconsistent behavior, Please wait for the `tableBuilt` event before calling this function." + (e ? " " + e : ""))), this.initialized
        }
        blockRedraw() {
          this.initGuard(), this.eventBus.dispatch("redraw-blocking"), this.rowManager.blockRedraw(), this.columnManager.blockRedraw(), this.eventBus.dispatch("redraw-blocked")
        }
        restoreRedraw() {
          this.initGuard(), this.eventBus.dispatch("redraw-restoring"), this.rowManager.restoreRedraw(), this.columnManager.restoreRedraw(), this.eventBus.dispatch("redraw-restored")
        }
        setData(t, e, i) {
          return this.initGuard(!1, "To set initial data please use the 'data' property in the table constructor."), this.dataLoader.load(t, e, i, !1)
        }
        clearData() {
          this.initGuard(), this.dataLoader.blockActiveLoad(), this.rowManager.clearData()
        }
        getData(t) {
          return this.rowManager.getData(t)
        }
        getDataCount(t) {
          return this.rowManager.getDataCount(t)
        }
        replaceData(t, e, i) {
          return this.initGuard(), this.dataLoader.load(t, e, i, !0, !0)
        }
        updateData(t) {
          var e = 0;
          return this.initGuard(), new Promise((i, s) => {
            this.dataLoader.blockActiveLoad(), "string" == typeof t && (t = JSON.parse(t)), t && t.length > 0 ? t.forEach(t => {
              var o = this.rowManager.findRow(t[this.options.index]);
              o ? (e++, o.updateData(t).then(() => {
                --e || i()
              }).catch(e => {
                s("Update Error - Unable to update row", t, e)
              })) : s("Update Error - Unable to find row", t)
            }) : (console.warn("Update Error - No data provided"), s("Update Error - No data provided"))
          })
        }
        addData(t, e, i) {
          return this.initGuard(), new Promise((s, o) => {
            this.dataLoader.blockActiveLoad(), "string" == typeof t && (t = JSON.parse(t)), t ? this.rowManager.addRows(t, e, i).then(t => {
              var e = [];
              t.forEach(function(t) {
                e.push(t.getComponent())
              }), s(e)
            }) : (console.warn("Update Error - No data provided"), o("Update Error - No data provided"))
          })
        }
        updateOrAddData(t) {
          var e = [],
            i = 0;
          return this.initGuard(), new Promise((s, o) => {
            this.dataLoader.blockActiveLoad(), "string" == typeof t && (t = JSON.parse(t)), t && t.length > 0 ? t.forEach(t => {
              var o = this.rowManager.findRow(t[this.options.index]);
              i++, o ? o.updateData(t).then(() => {
                i--, e.push(o.getComponent()), i || s(e)
              }) : this.rowManager.addRows(t).then(t => {
                i--, e.push(t[0].getComponent()), i || s(e)
              })
            }) : (console.warn("Update Error - No data provided"), o("Update Error - No data provided"))
          })
        }
        getRow(t) {
          var e = this.rowManager.findRow(t);
          return e ? e.getComponent() : (console.warn("Find Error - No matching row found:", t), !1)
        }
        getRowFromPosition(t) {
          var e = this.rowManager.getRowFromPosition(t);
          return e ? e.getComponent() : (console.warn("Find Error - No matching row found:", t), !1)
        }
        deleteRow(t) {
          var e = [];
          this.initGuard(), Array.isArray(t) || (t = [t]);
          for (let i of t) {
            let t = this.rowManager.findRow(i, !0);
            if (!t) return console.error("Delete Error - No matching row found:", i), Promise.reject("Delete Error - No matching row found");
            e.push(t)
          }
          return e.sort((t, e) => this.rowManager.rows.indexOf(t) > this.rowManager.rows.indexOf(e) ? 1 : -1), e.forEach(t => {
            t.delete()
          }), this.rowManager.reRenderInPosition(), Promise.resolve()
        }
        addRow(t, e, i) {
          return this.initGuard(), "string" == typeof t && (t = JSON.parse(t)), this.rowManager.addRows(t, e, i, !0).then(t => t[0].getComponent())
        }
        updateOrAddRow(t, e) {
          var i = this.rowManager.findRow(t);
          return this.initGuard(), "string" == typeof e && (e = JSON.parse(e)), i ? i.updateData(e).then(() => i.getComponent()) : this.rowManager.addRows(e).then(t => t[0].getComponent())
        }
        updateRow(t, e) {
          var i = this.rowManager.findRow(t);
          return this.initGuard(), "string" == typeof e && (e = JSON.parse(e)), i ? i.updateData(e).then(() => Promise.resolve(i.getComponent())) : (console.warn("Update Error - No matching row found:", t), Promise.reject("Update Error - No matching row found"))
        }
        scrollToRow(t, e, i) {
          var s = this.rowManager.findRow(t);
          return s ? this.rowManager.scrollToRow(s, e, i) : (console.warn("Scroll Error - No matching row found:", t), Promise.reject("Scroll Error - No matching row found"))
        }
        moveRow(t, e, i) {
          var s = this.rowManager.findRow(t);
          this.initGuard(), s ? s.moveToRow(e, i) : console.warn("Move Error - No matching row found:", t)
        }
        getRows(t) {
          return this.rowManager.getComponents(t)
        }
        getRowPosition(t) {
          var e = this.rowManager.findRow(t);
          return e ? e.getPosition() : (console.warn("Position Error - No matching row found:", t), !1)
        }
        setColumns(t) {
          this.initGuard(!1, "To set initial columns please use the 'columns' property in the table constructor"), this.columnManager.setColumns(t)
        }
        getColumns(t) {
          return this.columnManager.getComponents(t)
        }
        getColumn(t) {
          var e = this.columnManager.findColumn(t);
          return e ? e.getComponent() : (console.warn("Find Error - No matching column found:", t), !1)
        }
        getColumnDefinitions() {
          return this.columnManager.getDefinitionTree()
        }
        showColumn(t) {
          var e = this.columnManager.findColumn(t);
          if (this.initGuard(), !e) return console.warn("Column Show Error - No matching column found:", t), !1;
          e.show()
        }
        hideColumn(t) {
          var e = this.columnManager.findColumn(t);
          if (this.initGuard(), !e) return console.warn("Column Hide Error - No matching column found:", t), !1;
          e.hide()
        }
        toggleColumn(t) {
          var e = this.columnManager.findColumn(t);
          if (this.initGuard(), !e) return console.warn("Column Visibility Toggle Error - No matching column found:", t), !1;
          e.visible ? e.hide() : e.show()
        }
        addColumn(t, e, i) {
          var s = this.columnManager.findColumn(i);
          return this.initGuard(), this.columnManager.addColumn(t, e, s).then(t => t.getComponent())
        }
        deleteColumn(t) {
          var e = this.columnManager.findColumn(t);
          return this.initGuard(), e ? e.delete() : (console.warn("Column Delete Error - No matching column found:", t), Promise.reject())
        }
        updateColumnDefinition(t, e) {
          var i = this.columnManager.findColumn(t);
          return this.initGuard(), i ? i.updateDefinition(e) : (console.warn("Column Update Error - No matching column found:", t), Promise.reject())
        }
        moveColumn(t, e, i) {
          var s = this.columnManager.findColumn(t),
            o = this.columnManager.findColumn(e);
          this.initGuard(), s ? o ? this.columnManager.moveColumn(s, o, i) : console.warn("Move Error - No matching column found:", o) : console.warn("Move Error - No matching column found:", t)
        }
        scrollToColumn(t, e, i) {
          return new Promise((s, o) => {
            var n = this.columnManager.findColumn(t);
            return n ? this.columnManager.scrollToColumn(n, e, i) : (console.warn("Scroll Error - No matching column found:", t), Promise.reject("Scroll Error - No matching column found"))
          })
        }
        redraw(t) {
          this.initGuard(), this.columnManager.redraw(t), this.rowManager.redraw(t)
        }
        setHeight(t) {
          this.options.height = isNaN(t) ? t : t + "px", this.element.style.height = this.options.height, this.rowManager.initializeRenderer(), this.rowManager.redraw(!0)
        }
        setMaxHeight(t) {
          this.options.maxHeight = isNaN(t) ? t : t + "px", this.element.style.maxHeight = this.options.maxHeight, this.rowManager.initializeRenderer(), this.rowManager.redraw(!0)
        }
        setMinHeight(t) {
          this.options.minHeight = isNaN(t) ? t : t + "px", this.element.style.minHeight = this.options.minHeight, this.rowManager.initializeRenderer(), this.rowManager.redraw(!0)
        }
        on(t, e) {
          this.externalEvents.subscribe(t, e)
        }
        off(t, e) {
          this.externalEvents.unsubscribe(t, e)
        }
        dispatchEvent() {
          Array.from(arguments).shift(), this.externalEvents.dispatch(...arguments)
        }
        alert(t, e) {
          this.initGuard(), this.alertManager.alert(t, e)
        }
        clearAlert() {
          this.initGuard(), this.alertManager.clear()
        }
        modExists(t, e) {
          return !!this.modules[t] || (e && console.error("Tabulator Module Not Installed: " + t), !1)
        }
        module(t) {
          var e = this.modules[t];
          return e || console.error("Tabulator module not installed: " + t), e
        }
      }
      const et = document;
      var it;
      it = () => {
        ! function() {
          if ("true" === o.is_redirect_to_canonical.toString().trim().toLowerCase()) {
            var t = new URL(o.base_url),
              e = t.hostname,
              i = window.location.hostname,
              s = "localhost" === i || "127.0.0.1" === i || -1 !== i.indexOf("192.168.");
            i === e || s || window.location.replace(t.origin + window.location.pathname + window.location.search)
          }
        }(),
        function() {
          if (!e().isSupported()) {
            const t = document.querySelectorAll(".highlight > .btn-clipboard");
            return void Array.prototype.forEach.call(t, (t, e) => {
              s(t)
            })
          }
          new(e())(".btn-clipboard", {
            target: t => t.nextElementSibling
          }).on("success", t => {
            t.clearSelection();
            const e = t.trigger.querySelector(".msg-clipboard");
            var i, s;
            e && (e.getAttribute("data-cbtimer") && clearTimeout(parseInt(e.getAttribute("data-cbtimer"), 10)), s = "msg-clipboard--active", (i = e).classList ? i.classList.add(s) : i.className += " " + s, e.innerHTML = "Copied", e.setAttribute("data-cbtimer", setTimeout(() => {
              ! function(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
              }(e, "msg-clipboard--active"), e.setAttribute("data-cbtimer", "")
            }, 2e3).toString()))
          })
        }(),
        function() {
          const t = a.getElementById("btn_load_disqus_thread");
          t && l(t, "click", () => {
            h && d && (() => {
              const t = a.createElement("script");
              t.src = "https://" + h + ".disqus.com/embed.js", t.setAttribute("data-timestamp", +new Date), (a.head || a.body).appendChild(t)
            })(), r(t)
          })
        }(), h && d && (() => {
            const t = a.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = "https://" + h + ".disqus.com/count.js", t.id = "dsq-count-scr", (a.body || a.head).appendChild(t)
          })(), "true" === o.is_cookie_consent_enabled.toString().trim().toLowerCase() && (u.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/) || function() {
            const t = (e = c, (i = document.createElement("div")).innerHTML = e.trim(), i.firstChild);
            var e, i;
            n(t, 0), u.body.appendChild(t),
              function(t) {
                let e = 0;
                n(t, e);
                let i = +new Date;
                const s = () => {
                  e += (new Date - i) / 400, n(t, e), i = +new Date, e < 1 ? window.requestAnimationFrame && requestAnimationFrame(s) || setTimeout(s, 16) : e >= 1 && n(t, 1)
                };
                s()
              }(t), l(document.getElementById("btnAcceptCookie"), "click", () => {
                ! function(t, e, i, s, o, n) {
                  var r = new Date;
                  r.setDate(r.getDate() + (i || 365));
                  var l = [t + "=dismiss", "expires=" + r.toUTCString(), "path=" + (o || "/")];
                  s && l.push("domain=" + s), n && l.push("secure"), document.cookie = l.join(";")
                }(o.cookie.name, 0, o.cookie.expiryDays, o.cookie.domain, o.cookie.path, o.cookie.secure), r(t)
              })
          }()),
          function() {
            tt.registerModule([R, T]);
            const t = et.querySelectorAll(".e-content table");
            for (const e of t) new tt(e, {
              importTable: !0,
              layout: "fitColumns",
              columnDefaults: {
                formatter: "html"
              }
            })
          }()
      }, "loading" !== document.readyState ? it() : document.addEventListener ? document.addEventListener("DOMContentLoaded", it) : document.attachEvent("onreadystatechange", () => {
        "loading" !== document.readyState && it()
      })
    }()
}();