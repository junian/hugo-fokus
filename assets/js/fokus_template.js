/*! For license information please see fokus_template.js.LICENSE.txt */ ! function() {
  var t = {
      576: function(t) {
        var e;
        e = function() {
          return function() {
            var t = {
                686: function(t, e, n) {
                  "use strict";
                  n.d(e, {
                    default: function() {
                      return w
                    }
                  });
                  var o = n(279),
                    r = n.n(o),
                    i = n(370),
                    c = n.n(i),
                    a = n(817),
                    u = n.n(a);

                  function s(t) {
                    try {
                      return document.execCommand(t)
                    } catch (t) {
                      return !1
                    }
                  }
                  var l = function(t) {
                      var e = u()(t);
                      return s("cut"), e
                    },
                    f = function(t, e) {
                      var n = function(t) {
                        var e = "rtl" === document.documentElement.getAttribute("dir"),
                          n = document.createElement("textarea");
                        n.style.fontSize = "12pt", n.style.border = "0", n.style.padding = "0", n.style.margin = "0", n.style.position = "absolute", n.style[e ? "right" : "left"] = "-9999px";
                        var o = window.pageYOffset || document.documentElement.scrollTop;
                        return n.style.top = "".concat(o, "px"), n.setAttribute("readonly", ""), n.value = t, n
                      }(t);
                      e.container.appendChild(n);
                      var o = u()(n);
                      return s("copy"), n.remove(), o
                    },
                    d = function(t) {
                      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                          container: document.body
                        },
                        n = "";
                      return "string" == typeof t ? n = f(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = f(t.value, e) : (n = u()(t), s("copy")), n
                    };

                  function p(t) {
                    return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                      return typeof t
                    } : function(t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, p(t)
                  }

                  function y(t) {
                    return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                      return typeof t
                    } : function(t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, y(t)
                  }

                  function m(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var o = e[n];
                      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                    }
                  }

                  function v(t, e) {
                    return v = Object.setPrototypeOf || function(t, e) {
                      return t.__proto__ = e, t
                    }, v(t, e)
                  }

                  function b(t) {
                    return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                    }, b(t)
                  }

                  function h(t, e) {
                    var n = "data-clipboard-".concat(t);
                    if (e.hasAttribute(n)) return e.getAttribute(n)
                  }
                  var g = function(t) {
                      ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                          }
                        }), e && v(t, e)
                      }(u, t);
                      var e, n, o, r, i, a = (r = u, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                          return !1
                        }
                      }(), function() {
                        var t, e, n = b(r);
                        if (i) {
                          var o = b(this).constructor;
                          t = Reflect.construct(n, arguments, o)
                        } else t = n.apply(this, arguments);
                        return !(e = t) || "object" !== y(e) && "function" != typeof e ? function(t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t
                        }(this) : e
                      });

                      function u(t, e) {
                        var n;
                        return function(t, e) {
                          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (n = a.call(this)).resolveOptions(e), n.listenClick(t), n
                      }
                      return e = u, n = [{
                        key: "resolveOptions",
                        value: function() {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                          this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === y(t.container) ? t.container : document.body
                        }
                      }, {
                        key: "listenClick",
                        value: function(t) {
                          var e = this;
                          this.listener = c()(t, "click", (function(t) {
                            return e.onClick(t)
                          }))
                        }
                      }, {
                        key: "onClick",
                        value: function(t) {
                          var e = t.delegateTarget || t.currentTarget,
                            n = this.action(e) || "copy",
                            o = function() {
                              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.action,
                                n = void 0 === e ? "copy" : e,
                                o = t.container,
                                r = t.target,
                                i = t.text;
                              if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                              if (void 0 !== r) {
                                if (!r || "object" !== p(r) || 1 !== r.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === n && r.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === n && (r.hasAttribute("readonly") || r.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                              }
                              return i ? d(i, {
                                container: o
                              }) : r ? "cut" === n ? l(r) : d(r, {
                                container: o
                              }) : void 0
                            }({
                              action: n,
                              container: this.container,
                              target: this.target(e),
                              text: this.text(e)
                            });
                          this.emit(o ? "success" : "error", {
                            action: n,
                            text: o,
                            trigger: e,
                            clearSelection: function() {
                              e && e.focus(), window.getSelection().removeAllRanges()
                            }
                          })
                        }
                      }, {
                        key: "defaultAction",
                        value: function(t) {
                          return h("action", t)
                        }
                      }, {
                        key: "defaultTarget",
                        value: function(t) {
                          var e = h("target", t);
                          if (e) return document.querySelector(e)
                        }
                      }, {
                        key: "defaultText",
                        value: function(t) {
                          return h("text", t)
                        }
                      }, {
                        key: "destroy",
                        value: function() {
                          this.listener.destroy()
                        }
                      }], o = [{
                        key: "copy",
                        value: function(t) {
                          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                          };
                          return d(t, e)
                        }
                      }, {
                        key: "cut",
                        value: function(t) {
                          return l(t)
                        }
                      }, {
                        key: "isSupported",
                        value: function() {
                          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            e = "string" == typeof t ? [t] : t,
                            n = !!document.queryCommandSupported;
                          return e.forEach((function(t) {
                            n = n && !!document.queryCommandSupported(t)
                          })), n
                        }
                      }], n && m(e.prototype, n), o && m(e, o), u
                    }(r()),
                    w = g
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
                438: function(t, e, n) {
                  var o = n(828);

                  function r(t, e, n, o, r) {
                    var c = i.apply(this, arguments);
                    return t.addEventListener(n, c, r), {
                      destroy: function() {
                        t.removeEventListener(n, c, r)
                      }
                    }
                  }

                  function i(t, e, n, r) {
                    return function(n) {
                      n.delegateTarget = o(n.target, e), n.delegateTarget && r.call(t, n)
                    }
                  }
                  t.exports = function(t, e, n, o, i) {
                    return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
                      return r(t, e, n, o, i)
                    })))
                  }
                },
                879: function(t, e) {
                  e.node = function(t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                  }, e.nodeList = function(t) {
                    var n = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
                  }, e.string = function(t) {
                    return "string" == typeof t || t instanceof String
                  }, e.fn = function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                  }
                },
                370: function(t, e, n) {
                  var o = n(879),
                    r = n(438);
                  t.exports = function(t, e, n) {
                    if (!t && !e && !n) throw new Error("Missing required arguments");
                    if (!o.string(e)) throw new TypeError("Second argument must be a String");
                    if (!o.fn(n)) throw new TypeError("Third argument must be a Function");
                    if (o.node(t)) return function(t, e, n) {
                      return t.addEventListener(e, n), {
                        destroy: function() {
                          t.removeEventListener(e, n)
                        }
                      }
                    }(t, e, n);
                    if (o.nodeList(t)) return function(t, e, n) {
                      return Array.prototype.forEach.call(t, (function(t) {
                        t.addEventListener(e, n)
                      })), {
                        destroy: function() {
                          Array.prototype.forEach.call(t, (function(t) {
                            t.removeEventListener(e, n)
                          }))
                        }
                      }
                    }(t, e, n);
                    if (o.string(t)) return function(t, e, n) {
                      return r(document.body, t, e, n)
                    }(t, e, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                  }
                },
                817: function(t) {
                  t.exports = function(t) {
                    var e;
                    if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                      var n = t.hasAttribute("readonly");
                      n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                    } else {
                      t.hasAttribute("contenteditable") && t.focus();
                      var o = window.getSelection(),
                        r = document.createRange();
                      r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
                    }
                    return e
                  }
                },
                279: function(t) {
                  function e() {}
                  e.prototype = {
                    on: function(t, e, n) {
                      var o = this.e || (this.e = {});
                      return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                      }), this
                    },
                    once: function(t, e, n) {
                      var o = this;

                      function r() {
                        o.off(t, r), e.apply(n, arguments)
                      }
                      return r._ = e, this.on(t, r, n)
                    },
                    emit: function(t) {
                      for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                      return this
                    },
                    off: function(t, e) {
                      var n = this.e || (this.e = {}),
                        o = n[t],
                        r = [];
                      if (o && e)
                        for (var i = 0, c = o.length; i < c; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                      return r.length ? n[t] = r : delete n[t], this
                    }
                  }, t.exports = e, t.exports.TinyEmitter = e
                }
              },
              e = {};

            function n(o) {
              if (e[o]) return e[o].exports;
              var r = e[o] = {
                exports: {}
              };
              return t[o](r, r.exports, n), r.exports
            }
            return n.n = function(t) {
              var e = t && t.__esModule ? function() {
                return t.default
              } : function() {
                return t
              };
              return n.d(e, {
                a: e
              }), e
            }, n.d = function(t, e) {
              for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
              })
            }, n.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }, n(686)
          }().default
        }, t.exports = e()
      }
    },
    e = {};

  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = e[o] = {
      exports: {}
    };
    return t[o].call(i.exports, i, i.exports, n), i.exports
  }
  n.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return n.d(e, {
        a: e
      }), e
    }, n.d = function(t, e) {
      for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
        enumerable: !0,
        get: e[o]
      })
    }, n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    function() {
      "use strict";
      var t = n(576),
        e = n.n(t);

      function o(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
      }
      var r = {
          name: "cookieconsent_status",
          path: "/",
          domain: "",
          expiryDays: 365,
          secure: !1
        },
        i = "/privacy-policy#cookies-and-web-beacons";

      function c(t, e) {
        t.style.opacity = e, t.style.filter = `alpha(opacity=${100*e|0}})`
      }

      function a(t) {
        let e = 1;
        c(t, e);
        let n = +new Date;
        const r = () => {
          e -= (new Date - n) / 400, c(t, e), n = +new Date, e > 0 ? window.requestAnimationFrame && requestAnimationFrame(r) || setTimeout(r, 16) : e <= 0 && o(t)
        };
        r()
      }

      function u(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
      }
      const s = document,
        l = "{{.Site.Config.Services.Disqus.Shortname}}",
        f = s.getElementById("disqus_thread");
      const d = `<div class="navbar-fixed-bottom navbar-cookie">\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-sm-10 col-md-11">\n        <p class="navbar-text">This website uses cookies to ensure you get the best experience on our website.\n          <a href="${i}" aria-label="learn more about cookies" role="button" tabindex="0" rel="noopener noreferrer nofollow" target="_blank" class="lined-link">Learn more</a>\n        </p>\n      </div>\n      <div class="col-sm-2 col-md-1">\n        <button id="btnAcceptCookie" type="button" class="btn btn-default btn-primary navbar-btn btn-block" aria-label="dismiss cookie message" role="button">\n          Got It!\n        </button>\n      </div>\n    </div>\n  </div>\n</div>`,
        p = document;
      var y;
      y = () => {
        (function() {
          if (e().isSupported()) new(e())(".btn-clipboard", {
            target: t => t.nextElementSibling
          }).on("success", (t => {
            t.clearSelection();
            const e = t.trigger.querySelector(".msg-clipboard");
            var n, o;
            e && (e.getAttribute("data-cbtimer") && clearTimeout(parseInt(e.getAttribute("data-cbtimer"), 10)), o = "msg-clipboard--active", (n = e).classList ? n.classList.add(o) : n.className += " " + o, e.innerHTML = "Copied", e.setAttribute("data-cbtimer", setTimeout((() => {
              ! function(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
              }(e, "msg-clipboard--active"), e.setAttribute("data-cbtimer", "")
            }), 2e3).toString()))
          }));
          else {
            const t = document.querySelectorAll(".highlight > .btn-clipboard");
            Array.prototype.forEach.call(t, ((t, e) => {
              o(t)
            }))
          }
        })(),
        function() {
          const t = s.getElementById("btn_load_disqus_thread");
          t && u(t, "click", (() => {
            l && f && (() => {
              const t = s.createElement("script");
              t.src = "https://" + l + ".disqus.com/embed.js", t.setAttribute("data-timestamp", +new Date), (s.head || s.body).appendChild(t)
            })(), a(t)
          }))
        }(), l && f && (() => {
          const t = s.createElement("script");
          t.type = "text/javascript", t.async = !0, t.src = "https://" + l + ".disqus.com/count.js", t.id = "dsq-count-scr", (s.body || s.head).appendChild(t)
        })(), p.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/) || function() {
          const t = (e = d, (n = document.createElement("div")).innerHTML = e.trim(), n.firstChild);
          var e, n;
          c(t, 0), p.body.appendChild(t),
            function(t) {
              let e = 0;
              c(t, e);
              let n = +new Date;
              const o = () => {
                e += (new Date - n) / 400, c(t, e), n = +new Date, e < 1 ? window.requestAnimationFrame && requestAnimationFrame(o) || setTimeout(o, 16) : e >= 1 && c(t, 1)
              };
              o()
            }(t), u(document.getElementById("btnAcceptCookie"), "click", (() => {
              ! function(t, e, n, o, r, i) {
                var c = new Date;
                c.setDate(c.getDate() + (n || 365));
                var a = [t + "=dismiss", "expires=" + c.toUTCString(), "path=" + (r || "/")];
                o && a.push("domain=" + o), i && a.push("secure"), document.cookie = a.join(";")
              }(r.name, 0, r.expiryDays, r.domain, r.path, r.secure), a(t)
            }))
        }()
      }, "loading" !== document.readyState ? y() : document.addEventListener ? document.addEventListener("DOMContentLoaded", y) : document.attachEvent("onreadystatechange", (() => {
        "loading" !== document.readyState && y()
      }))
    }()
}();