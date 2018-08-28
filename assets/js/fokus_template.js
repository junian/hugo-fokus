! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
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
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
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
    }, n.p = "/", n(n.s = 3)
}([function(e, t, n) {
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
        cookie_consent_css: "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css",
        cookie_consent_js: "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js",
        cookie_consent_url: "/privacy-policy#cookies-and-web-beacons"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addEventListener = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    }
}, function(e, t, n) {
    e.exports = n(4)
}, function(e, t, n) {
    "use strict";
    var o = n(5),
        r = n(6),
        i = n(10),
        a = n(12);
    (0, o.ready)(function() {
        (0, r.embedClipboardJS)(), (0, i.onButtonLoadDisqusClicked)(), (0, i.loadDisqusCommentCount)(), (0, a.embedCookieConsent)()
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
        }(n(7)),
        r = n(0),
        i = n(8),
        a = n(9);
    t.embedClipboardJS = function() {
        if (o.default.isSupported()) new o.default(".btn-clipboard", {
            target: function(e) {
                return e.nextElementSibling
            }
        }).on("success", function(e) {
            e.clearSelection();
            var t = e.trigger.querySelector(".msg-clipboard");
            t && (t.getAttribute("data-cbtimer") && clearTimeout(parseInt(t.getAttribute("data-cbtimer"), 10)), (0, i.addClass)(t, "msg-clipboard--active"), t.innerHTML = "Copied to clipboard", t.setAttribute("data-cbtimer", setTimeout(function() {
                (0, a.removeClass)(t, "msg-clipboard--active"), t.setAttribute("data-cbtimer", "")
            }, 2e3).toString()))
        });
        else {
            var e = document.querySelectorAll(".highlight > .btn-clipboard");
            Array.prototype.forEach.call(e, function(e, t) {
                (0, r.remove)(e)
            })
        }
    }
}, function(e, t, n) {
    /*!
     * clipboard.js v2.0.1
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
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = e, n.c = t, n.i = function(e) {
                return e
            }, n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: o
                })
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 3)
        }([function(e, t, n) {
            var o, r, i;
            r = [e, n(7)], void 0 === (i = "function" == typeof(o = function(e, t) {
                "use strict";
                var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(t),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    r = function() {
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
                    i = function() {
                        function e(t) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return r(e, [{
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
                                var o = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = o + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, n.default)(this.target), this.copyText()
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
                e.exports = i
            }) ? o.apply(t, r) : o) || (e.exports = i)
        }, function(e, t, n) {
            var o = n(6),
                r = n(5);
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
                    return r(document.body, e, t, n)
                }(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
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

                    function r() {
                        o.off(e, r), t.apply(n, arguments)
                    }
                    return r._ = t, this.on(e, r, n)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        o = n[e],
                        r = [];
                    if (o && t)
                        for (var i = 0, a = o.length; i < a; i++) o[i].fn !== t && o[i].fn._ !== t && r.push(o[i]);
                    return r.length ? n[e] = r : delete n[e], this
                }
            }, e.exports = n
        }, function(e, t, n) {
            var o, r, i;
            r = [e, n(0), n(2), n(1)], void 0 === (i = "function" == typeof(o = function(e, t, n, o) {
                "use strict";
                var r = c(t),
                    i = c(n),
                    a = c(o);

                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    s = function() {
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
                    l = function(e) {
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
                        }(t, e), s(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === u(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(e) {
                                var t = this;
                                this.listener = (0, a.default)(e, "click", function(e) {
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
                                return f("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(e) {
                                var t = f("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function(e) {
                                return f("text", e)
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
                    }(i.default);

                function f(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                e.exports = l
            }) ? o.apply(t, r) : o) || (e.exports = i)
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
        }, function(e, t, n) {
            var o = n(4);

            function r(e, t, n, r, i) {
                var a = function(e, t, n, r) {
                    return function(n) {
                        n.delegateTarget = o(n.target, t), n.delegateTarget && r.call(e, n)
                    }
                }.apply(this, arguments);
                return e.addEventListener(n, a, i), {
                    destroy: function() {
                        e.removeEventListener(n, a, i)
                    }
                }
            }
            e.exports = function(e, t, n, o, i) {
                return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                    return r(e, t, n, o, i)
                }))
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
                        r = document.createRange();
                    r.selectNodeContents(e), o.removeAllRanges(), o.addRange(r), t = o.toString()
                }
                return t
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
    var o = n(1),
        r = n(11),
        i = n(2),
        a = document,
        c = o.config.disqus_shortname,
        u = a.getElementById("disqus_thread");
    t.onButtonLoadDisqusClicked = function() {
        var e = a.getElementById("btn_load_disqus_thread");
        e && (0, i.addEventListener)(e, "click", function() {
            c && u && function() {
                var e = a.createElement("script");
                e.src = "https://" + c + ".disqus.com/embed.js", e.setAttribute("data-timestamp", +new Date), (a.head || a.body).appendChild(e)
            }(), (0, r.fadeOut)(e)
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
    }), t.fadeOut = function(e) {
        var t = 1;
        e.style.opacity = 1, e.style.filter = "";
        var n = +new Date;
        ! function r() {
            t -= (new Date - n) / 400, e.style.opacity = t, e.style.filter = "alpha(opacity=" + 100 * t | "0)", n = +new Date, t > 0 ? window.requestAnimationFrame && requestAnimationFrame(r) || setTimeout(r, 16) : t <= 0 && (0, o.remove)(e)
        }()
    };
    var o = n(0)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.embedCookieConsent = void 0;
    var o = n(1),
        r = n(2),
        i = document;

    function a() {
        window.cookieconsent.initialise({
            palette: {
                popup: {
                    background: "#edeff5",
                    text: "#4F4F4F"
                },
                button: {
                    background: "#004e92"
                }
            },
            content: {
                href: o.config.cookie_consent_url
            }
        })
    }
    t.embedCookieConsent = function() {
        i.cookie.match(/^(.*;)?\s*cookieconsent_status\s*=\s*[^;]+(.*)?$/) || function() {
            var e = i.createElement("link");
            e.rel = "stylesheet", e.type = "text/css", e.href = o.config.cookie_consent_css, (0, r.addEventListener)(e, "load", function() {
                var e = i.createElement("script");
                e.src = o.config.cookie_consent_js, (0, r.addEventListener)(e, "load", a), (i.head || i.body).appendChild(e)
            }), (i.head || i.body).appendChild(e)
        }()
    }
}]);