! function (t) {
    var e = {};

    function i(s) {
        if (e[s]) return e[s].exports;
        var o = e[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function (t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(s, o, function (e) {
                return t[e]
            }.bind(null, o));
        return s
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i(i.s = 41)
}({
    41: function (t, e, i) {
        i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), t.exports = i(54)
    },
    42: function (t, e) {
        void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
            function (t, e, i) {
                function s(i) {
                    var s = e.console;
                    n[i] || (n[i] = !0, t.migrateWarnings.push(i), s && s.warn && !t.migrateMute && (s.warn("JQMIGRATE: " + i), t.migrateTrace && s.trace && s.trace()))
                }

                function o(e, o, n, r) {
                    if (Object.defineProperty) try {
                        return Object.defineProperty(e, o, {
                            configurable: !0,
                            enumerable: !0,
                            get: function () {
                                return s(r), n
                            },
                            set: function (t) {
                                s(r), n = t
                            }
                        }), i
                    } catch (t) {}
                    t._definePropertyBroken = !0, e[o] = n
                }
                var n = {};
                t.migrateWarnings = [], !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function () {
                    n = {}, t.migrateWarnings.length = 0
                }, "BackCompat" === document.compatMode && s("jQuery is not compatible with Quirks Mode");
                var r = t("<input/>", {
                        size: 1
                    }).attr("size") && t.attrFn,
                    a = t.attr,
                    c = t.attrHooks.value && t.attrHooks.value.get || function () {
                        return null
                    },
                    l = t.attrHooks.value && t.attrHooks.value.set || function () {
                        return i
                    },
                    p = /^(?:input|button)$/i,
                    u = /^[238]$/,
                    d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                    f = /^(?:checked|selected)$/i;
                o(t, "attrFn", r || {}, "jQuery.attrFn is deprecated"), t.attr = function (e, o, n, c) {
                    var l = o.toLowerCase(),
                        h = e && e.nodeType;
                    return c && (4 > a.length && s("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(h) && (r ? o in r : t.isFunction(t.fn[o]))) ? t(e)[o](n) : ("type" === o && n !== i && p.test(e.nodeName) && e.parentNode && s("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[l] && d.test(l) && (t.attrHooks[l] = {
                        get: function (e, s) {
                            var o, n = t.prop(e, s);
                            return !0 === n || "boolean" != typeof n && (o = e.getAttributeNode(s)) && !1 !== o.nodeValue ? s.toLowerCase() : i
                        },
                        set: function (e, i, s) {
                            var o;
                            return !1 === i ? t.removeAttr(e, s) : ((o = t.propFix[s] || s) in e && (e[o] = !0), e.setAttribute(s, s.toLowerCase())), s
                        }
                    }, f.test(l) && s("jQuery.fn.attr('" + l + "') may use property instead of attribute")), a.call(t, e, o, n))
                }, t.attrHooks.value = {
                    get: function (t, e) {
                        var i = (t.nodeName || "").toLowerCase();
                        return "button" === i ? c.apply(this, arguments) : ("input" !== i && "option" !== i && s("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
                    },
                    set: function (t, e) {
                        var o = (t.nodeName || "").toLowerCase();
                        return "button" === o ? l.apply(this, arguments) : ("input" !== o && "option" !== o && s("jQuery.fn.attr('value', val) no longer sets properties"), t.value = e, i)
                    }
                };
                var h, g, m = t.fn.init,
                    v = t.parseJSON,
                    _ = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
                t.fn.init = function (e, i, o) {
                    var n;
                    return e && "string" == typeof e && !t.isPlainObject(i) && (n = _.exec(t.trim(e))) && n[0] && ("<" !== e.charAt(0) && s("$(html) HTML strings must start with '<' character"), n[3] && s("$(html) HTML text after last tag is ignored"), "#" === n[0].charAt(0) && (s("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? m.call(this, t.parseHTML(n[2], i, !0), i, o) : m.apply(this, arguments)
                }, t.fn.init.prototype = t.fn, t.parseJSON = function (t) {
                    return t || null === t ? v.apply(this, arguments) : (s("jQuery.parseJSON requires a valid JSON string"), null)
                }, t.uaMatch = function (t) {
                    t = t.toLowerCase();
                    var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
                    return {
                        browser: e[1] || "",
                        version: e[2] || "0"
                    }
                }, t.browser || (g = {}, (h = t.uaMatch(navigator.userAgent)).browser && (g[h.browser] = !0, g.version = h.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), t.browser = g), o(t, "browser", t.browser, "jQuery.browser is deprecated"), t.sub = function () {
                    function e(t, i) {
                        return new e.fn.init(t, i)
                    }
                    t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (s, o) {
                        return o && o instanceof t && !(o instanceof e) && (o = e(o)), t.fn.init.call(this, s, o, i)
                    }, e.fn.init.prototype = e.fn;
                    var i = e(document);
                    return s("jQuery.sub() is deprecated"), e
                }, t.ajaxSetup({
                    converters: {
                        "text json": t.parseJSON
                    }
                });
                var b = t.fn.data;
                t.fn.data = function (e) {
                    var o, n, r = this[0];
                    return !r || "events" !== e || 1 !== arguments.length || (o = t.data(r, e), n = t._data(r, e), o !== i && o !== n || n === i) ? b.apply(this, arguments) : (s("Use of jQuery.fn.data('events') is deprecated"), n)
                };
                var w = /\/(java|ecma)script/i,
                    y = t.fn.andSelf || t.fn.addBack;
                t.fn.andSelf = function () {
                    return s("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), y.apply(this, arguments)
                }, t.clean || (t.clean = function (e, o, n, r) {
                    o = (o = !(o = o || document).nodeType && o[0] || o).ownerDocument || o, s("jQuery.clean() is deprecated");
                    var a, c, l, p, u = [];
                    if (t.merge(u, t.buildFragment(e, o).childNodes), n)
                        for (l = function (t) {
                                return !t.type || w.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : n.appendChild(t) : i
                            }, a = 0; null != (c = u[a]); a++) t.nodeName(c, "script") && l(c) || (n.appendChild(c), c.getElementsByTagName !== i && (p = t.grep(t.merge([], c.getElementsByTagName("script")), l), u.splice.apply(u, [a + 1, 0].concat(p)), a += p.length));
                    return u
                });
                var $ = t.event.add,
                    x = t.event.remove,
                    C = t.event.trigger,
                    S = t.fn.toggle,
                    k = t.fn.live,
                    P = t.fn.die,
                    T = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
                    j = RegExp("\\b(?:" + T + ")\\b"),
                    I = /(?:^|\s)hover(\.\S+|)\b/,
                    E = function (e) {
                        return "string" != typeof e || t.event.special.hover ? e : (I.test(e) && s("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(I, "mouseenter$1 mouseleave$1"))
                    };
                t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && o(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function (t, e, i, o, n) {
                    t !== document && j.test(e) && s("AJAX events should be attached to document: " + e), $.call(this, t, E(e || ""), i, o, n)
                }, t.event.remove = function (t, e, i, s, o) {
                    x.call(this, t, E(e) || "", i, s, o)
                }, t.fn.error = function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return s("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
                }, t.fn.toggle = function (e, i) {
                    if (!t.isFunction(e) || !t.isFunction(i)) return S.apply(this, arguments);
                    s("jQuery.fn.toggle(handler, handler...) is deprecated");
                    var o = arguments,
                        n = e.guid || t.guid++,
                        r = 0,
                        a = function (i) {
                            var s = (t._data(this, "lastToggle" + e.guid) || 0) % r;
                            return t._data(this, "lastToggle" + e.guid, s + 1), i.preventDefault(), o[s].apply(this, arguments) || !1
                        };
                    for (a.guid = n; o.length > r;) o[r++].guid = n;
                    return this.click(a)
                }, t.fn.live = function (e, i, o) {
                    return s("jQuery.fn.live() is deprecated"), k ? k.apply(this, arguments) : (t(this.context).on(e, this.selector, i, o), this)
                }, t.fn.die = function (e, i) {
                    return s("jQuery.fn.die() is deprecated"), P ? P.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
                }, t.event.trigger = function (t, e, i, o) {
                    return i || j.test(t) || s("Global events are undocumented and deprecated"), C.call(this, t, e, i || document, o)
                }, t.each(T.split("|"), function (e, i) {
                    t.event.special[i] = {
                        setup: function () {
                            var e = this;
                            return e !== document && (t.event.add(document, i + "." + t.guid, function () {
                                t.event.trigger(i, null, e, !0)
                            }), t._data(this, i, t.guid++)), !1
                        },
                        teardown: function () {
                            return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
                        }
                    }
                })
            }(jQuery, window)
    },
    43: function (t, e) {
        jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function (t, e, i, s, o) {
                return jQuery.easing[jQuery.easing.def](t, e, i, s, o)
            },
            easeInQuad: function (t, e, i, s, o) {
                return s * (e /= o) * e + i
            },
            easeOutQuad: function (t, e, i, s, o) {
                return -s * (e /= o) * (e - 2) + i
            },
            easeInOutQuad: function (t, e, i, s, o) {
                return (e /= o / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
            },
            easeInCubic: function (t, e, i, s, o) {
                return s * (e /= o) * e * e + i
            },
            easeOutCubic: function (t, e, i, s, o) {
                return s * ((e = e / o - 1) * e * e + 1) + i
            },
            easeInOutCubic: function (t, e, i, s, o) {
                return (e /= o / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
            },
            easeInQuart: function (t, e, i, s, o) {
                return s * (e /= o) * e * e * e + i
            },
            easeOutQuart: function (t, e, i, s, o) {
                return -s * ((e = e / o - 1) * e * e * e - 1) + i
            },
            easeInOutQuart: function (t, e, i, s, o) {
                return (e /= o / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
            },
            easeInQuint: function (t, e, i, s, o) {
                return s * (e /= o) * e * e * e * e + i
            },
            easeOutQuint: function (t, e, i, s, o) {
                return s * ((e = e / o - 1) * e * e * e * e + 1) + i
            },
            easeInOutQuint: function (t, e, i, s, o) {
                return (e /= o / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
            },
            easeInSine: function (t, e, i, s, o) {
                return -s * Math.cos(e / o * (Math.PI / 2)) + s + i
            },
            easeOutSine: function (t, e, i, s, o) {
                return s * Math.sin(e / o * (Math.PI / 2)) + i
            },
            easeInOutSine: function (t, e, i, s, o) {
                return -s / 2 * (Math.cos(Math.PI * e / o) - 1) + i
            },
            easeInExpo: function (t, e, i, s, o) {
                return 0 == e ? i : s * Math.pow(2, 10 * (e / o - 1)) + i
            },
            easeOutExpo: function (t, e, i, s, o) {
                return e == o ? i + s : s * (1 - Math.pow(2, -10 * e / o)) + i
            },
            easeInOutExpo: function (t, e, i, s, o) {
                return 0 == e ? i : e == o ? i + s : (e /= o / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (2 - Math.pow(2, -10 * --e)) + i
            },
            easeInCirc: function (t, e, i, s, o) {
                return -s * (Math.sqrt(1 - (e /= o) * e) - 1) + i
            },
            easeOutCirc: function (t, e, i, s, o) {
                return s * Math.sqrt(1 - (e = e / o - 1) * e) + i
            },
            easeInOutCirc: function (t, e, i, s, o) {
                return (e /= o / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
            },
            easeInElastic: function (t, e, i, s, o) {
                var n = 1.70158,
                    r = 0,
                    a = s;
                if (0 == e) return i;
                if (1 == (e /= o)) return i + s;
                if (r || (r = .3 * o), a < Math.abs(s)) {
                    a = s;
                    n = r / 4
                } else n = r / (2 * Math.PI) * Math.asin(s / a);
                return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - n) * (2 * Math.PI) / r) + i
            },
            easeOutElastic: function (t, e, i, s, o) {
                var n = 1.70158,
                    r = 0,
                    a = s;
                if (0 == e) return i;
                if (1 == (e /= o)) return i + s;
                if (r || (r = .3 * o), a < Math.abs(s)) {
                    a = s;
                    n = r / 4
                } else n = r / (2 * Math.PI) * Math.asin(s / a);
                return a * Math.pow(2, -10 * e) * Math.sin((e * o - n) * (2 * Math.PI) / r) + s + i
            },
            easeInOutElastic: function (t, e, i, s, o) {
                var n = 1.70158,
                    r = 0,
                    a = s;
                if (0 == e) return i;
                if (2 == (e /= o / 2)) return i + s;
                if (r || (r = o * (.3 * 1.5)), a < Math.abs(s)) {
                    a = s;
                    n = r / 4
                } else n = r / (2 * Math.PI) * Math.asin(s / a);
                return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - n) * (2 * Math.PI) / r) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - n) * (2 * Math.PI) / r) * .5 + s + i
            },
            easeInBack: function (t, e, i, s, o, n) {
                return null == n && (n = 1.70158), s * (e /= o) * e * ((n + 1) * e - n) + i
            },
            easeOutBack: function (t, e, i, s, o, n) {
                return null == n && (n = 1.70158), s * ((e = e / o - 1) * e * ((n + 1) * e + n) + 1) + i
            },
            easeInOutBack: function (t, e, i, s, o, n) {
                return null == n && (n = 1.70158), (e /= o / 2) < 1 ? s / 2 * (e * e * ((1 + (n *= 1.525)) * e - n)) + i : s / 2 * ((e -= 2) * e * ((1 + (n *= 1.525)) * e + n) + 2) + i
            },
            easeInBounce: function (t, e, i, s, o) {
                return s - jQuery.easing.easeOutBounce(t, o - e, 0, s, o) + i
            },
            easeOutBounce: function (t, e, i, s, o) {
                return (e /= o) < 1 / 2.75 ? s * (7.5625 * e * e) + i : e < 2 / 2.75 ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            },
            easeInOutBounce: function (t, e, i, s, o) {
                return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, s, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, s, o) + .5 * s + i
            }
        })
    },
    44: function (t, e) {
        ! function (t) {
            t.fn.superfish = function (e) {
                var i = t.fn.superfish,
                    s = i.c,
                    o = t(['<span class="', s.arrowClass, '"> &#187;</span>'].join("")),
                    n = function () {
                        var e = t(this),
                            i = a(e);
                        clearTimeout(i.sfTimer), e.showSuperfishUl().siblings().hideSuperfishUl()
                    },
                    r = function () {
                        var e = t(this),
                            s = a(e),
                            o = i.op;
                        clearTimeout(s.sfTimer), s.sfTimer = setTimeout(function () {
                            o.retainPath = t.inArray(e[0], o.$path) > -1, e.hideSuperfishUl(), o.$path.length && e.parents(["li.", o.hoverClass].join("")).length < 1 && n.call(o.$path)
                        }, o.delay)
                    },
                    a = function (t) {
                        var e = t.parents(["ul.", s.menuClass, ":first"].join(""))[0];
                        return i.op = i.o[e.serial], e
                    };
                return this.each(function () {
                    var a = this.serial = i.o.length,
                        c = t.extend({}, i.defaults, e);
                    c.$path = t("li." + c.pathClass, this).slice(0, c.pathLevels).each(function () {
                        t(this).addClass([c.hoverClass, s.bcClass].join(" ")).filter("li:has(ul)").removeClass(c.pathClass)
                    }), i.o[a] = i.op = c, t("li:has(ul)", this)[t.fn.hoverIntent && !c.disableHI ? "hoverIntent" : "hover"](n, r).each(function () {
                        c.autoArrows && function (t) {
                            t.addClass(s.anchorClass).append(o.clone())
                        }(t(">a:first-child", this))
                    }).not("." + s.bcClass).hideSuperfishUl();
                    var l = t("a", this);
                    l.each(function (t) {
                        l.eq(t).parents("li")
                    }), c.onInit.call(this)
                }).each(function () {
                    var e = [s.menuClass];
                    !i.op.dropShadows || t.browser.msie && t.browser.version < 7 || e.push(s.shadowClass), t(this).addClass(e.join(" "))
                })
            };
            var e = t.fn.superfish;
            e.o = [], e.op = {}, e.IE7fix = function () {
                var i = e.op;
                t.browser.msie && t.browser.version > 6 && i.dropShadows && null != i.animation.opacity && this.toggleClass(e.c.shadowClass + "-off")
            }, e.c = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                arrowClass: "sf-sub-indicator",
                shadowClass: "sf-shadow"
            }, e.defaults = {
                hoverClass: "sfHover",
                pathClass: "overideThisToUse",
                pathLevels: 2,
                delay: 800,
                animation: {
                    height: "show"
                },
                speed: "normal",
                autoArrows: !1,
                dropShadows: !1,
                disableHI: !1,
                onInit: function () {},
                onBeforeShow: function () {},
                onShow: function () {},
                onHide: function () {}
            }, t.fn.extend({
                hideSuperfishUl: function () {
                    var i = e.op,
                        s = !0 === i.retainPath ? i.$path : "";
                    i.retainPath = !1;
                    var o = t(["li.", i.hoverClass].join(""), this).add(this).not(s).removeClass(i.hoverClass).find(">ul").hide();
                    return i.onHide.call(o), this
                },
                showSuperfishUl: function () {
                    var t = e.op,
                        i = (e.c.shadowClass, this.not(".accorChild").addClass(t.hoverClass).find(">ul:hidden"));
                    return e.IE7fix.call(i), t.onBeforeShow.call(i), i.animate(t.animation, t.speed, function () {
                        e.IE7fix.call(i), t.onShow.call(i)
                    }), this
                }
            })
        }(jQuery), $(function () {
            $(".sf-menu").superfish()
        })
    },
    45: function (t, e) {
        var i;
        (i = jQuery).fn.yjsgroundprogress = function (t) {
            var e = i.extend({
                starting: this.data("start"),
                ending: this.data("end"),
                percentage: !0,
                color: this.css("border-top-color"),
                lineWidth: this.data("border"),
                timer: this.data("speed"),
                fontStyle: this.css("font-family"),
                fontSize: this.css("font-size"),
                fontColor: this.css("color"),
                backgroundColor: this.css("border-bottom-color"),
                callback: function () {}
            }, t);
            e.starting || (e.starting = 0), e.ending || (e.ending = 100), void 0 !== this.data("percent") && (e.percentage = this.data("percent")), e.timer || (e.timer = 10), e.lineWidth || (e.lineWidth = 5);
            var s = Math.random();
            this.empty().append("<canvas height =" + this.height() + " width=" + this.width() + " id='my-canvas-" + s + "'/ ></canvas>");
            var o = document.getElementById("my-canvas-" + s),
                n = o.width / 2,
                r = o.height / 2,
                a = this.width() / 2 - e.lineWidth,
                c = o.getContext("2d");
            if (e.backgroundColor) {
                var l = o.getContext("2d");
                l.arc(n, r, a, 0, 2 * Math.PI, !1), l.strokeStyle = e.backgroundColor, l.lineWidth = e.lineWidth, l.stroke()
            }
            var p = e.ending - e.starting,
                u = e.starting,
                d = setInterval(function () {
                    var t;
                    t = e.percentage ? u + "%" : u;
                    var i = (1.5 + u / 50) * Math.PI,
                        s = (++u / 50 + 1.5) * Math.PI;
                    c.beginPath(), c.arc(n, r, a, i, s, !1), c.lineWidth = e.lineWidth, c.strokeStyle = e.color, c.stroke(), c.font = e.fontSize + " " + e.fontStyle, c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = e.fontColor, c.clearRect(n - 1.5 * parseInt(e.fontSize), r - parseInt(e.fontSize) / 2, 3 * parseInt(e.fontSize), parseInt(e.fontSize)), c.fillText(t, n, r), u >= p && (window.clearInterval(d), t = e.percentage ? u + "%" : u, c.clearRect(n - 1.5 * parseInt(e.fontSize), r - parseInt(e.fontSize) / 2, 3 * parseInt(e.fontSize), parseInt(e.fontSize)), c.fillText(t, n, r), "function" == typeof e.callback && e.callback.call(this))
                }, e.timer)
        }, jQuery(function () {
            jQuery("[data-yjsg-round-progress]").each(function () {
                jQuery(this).yjsgroundprogress()
            })
        })
    },
    46: function (t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }! function (t) {
            var e = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    className: "is-sticky",
                    wrapperClassName: "sticky-wrapper",
                    center: !1,
                    getWidthFrom: "",
                    responsiveWidth: !1
                },
                s = t(window),
                o = t(document),
                n = [],
                r = s.height(),
                a = function () {
                    for (var e = s.scrollTop(), i = o.height(), a = i - r, c = e > a ? a - e : 0, l = 0; l < n.length; l++) {
                        var p = n[l];
                        if (e <= p.stickyWrapper.offset().top - p.topSpacing - c) null !== p.currentTop && (p.stickyElement.css("width", "").css("position", "").css("top", ""), p.stickyElement.trigger("sticky-end", [p]).parent().removeClass(p.className), p.currentTop = null);
                        else {
                            var u = i - p.stickyElement.outerHeight() - p.topSpacing - p.bottomSpacing - e - c;
                            u < 0 ? u += p.topSpacing : u = p.topSpacing, p.currentTop != u && (p.stickyElement.css("width", p.stickyElement.width()).css("position", "fixed").css("top", u), void 0 !== p.getWidthFrom && p.stickyElement.css("width", t(p.getWidthFrom).width()), p.stickyElement.trigger("sticky-start", [p]).parent().addClass(p.className), p.currentTop = u)
                        }
                    }
                },
                c = function () {
                    r = s.height();
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e];
                        void 0 !== i.getWidthFrom && !0 === i.responsiveWidth && i.stickyElement.css("width", t(i.getWidthFrom).width())
                    }
                },
                l = {
                    init: function (i) {
                        var s = t.extend({}, e, i);
                        return this.each(function () {
                            var e = t(this),
                                i = e.attr("id"),
                                o = t("<div></div>").attr("id", i + "-sticky-wrapper").addClass(s.wrapperClassName);
                            e.wrapAll(o), s.center && e.parent().css({
                                width: e.outerWidth(),
                                marginLeft: "auto",
                                marginRight: "auto"
                            }), "right" == e.css("float") && e.css({
                                float: "none"
                            }).parent().css({
                                float: "right"
                            });
                            var r = e.parent();
                            r.css("height", e.outerHeight()), n.push({
                                topSpacing: s.topSpacing,
                                bottomSpacing: s.bottomSpacing,
                                stickyElement: e,
                                currentTop: null,
                                stickyWrapper: r,
                                className: s.className,
                                getWidthFrom: s.getWidthFrom,
                                responsiveWidth: s.responsiveWidth
                            })
                        })
                    },
                    update: a,
                    unstick: function (e) {
                        return this.each(function () {
                            for (var e = t(this), i = -1, s = 0; s < n.length; s++) n[s].stickyElement.get(0) == e.get(0) && (i = s); - 1 != i && (n.splice(i, 1), e.unwrap(), e.removeAttr("style"))
                        })
                    }
                };
            window.addEventListener ? (window.addEventListener("scroll", a, !1), window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", a), window.attachEvent("onresize", c)), t.fn.sticky = function (e) {
                return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== i(e) && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : l.init.apply(this, arguments)
            }, t.fn.unstick = function (e) {
                return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== i(e) && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : l.unstick.apply(this, arguments)
            }, t(function () {
                setTimeout(a, 0)
            })
        }(jQuery)
    },
    47: function (t, e) {
        ! function (t) {
            t.fn.appear = function (e, i) {
                var s = t.extend({
                    one: !0
                }, i);
                return this.each(function () {
                    var i = t(this);
                    if (i.appeared = !1, e) {
                        var o = t(window),
                            n = function () {
                                if (i.is(":visible")) {
                                    var t = o.scrollLeft(),
                                        e = o.scrollTop(),
                                        n = i.offset(),
                                        r = n.left,
                                        a = n.top;
                                    a + i.height() >= e && a <= e + o.height() && r + i.width() >= t && r <= t + o.width() ? i.appeared || i.trigger("appear", s.data) : i.appeared = !1
                                } else i.appeared = !1
                            },
                            r = function () {
                                if (i.appeared = !0, s.one) {
                                    o.unbind("scroll", n);
                                    var r = t.inArray(n, t.fn.appear.checks);
                                    r >= 0 && t.fn.appear.checks.splice(r, 1)
                                }
                                e.apply(this, arguments)
                            };
                        s.one ? i.one("appear", s.data, r) : i.bind("appear", s.data, r), o.scroll(n), t.fn.appear.checks.push(n), n()
                    } else i.trigger("appear", s.data)
                })
            }, t.extend(t.fn.appear, {
                checks: [],
                timeout: null,
                checkAll: function () {
                    var e = t.fn.appear.checks.length;
                    if (e > 0)
                        for (; e--;) t.fn.appear.checks[e]()
                },
                run: function () {
                    t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
                }
            }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (e, i) {
                var s = t.fn[i];
                s && (t.fn[i] = function () {
                    var e = s.apply(this, arguments);
                    return t.fn.appear.run(), e
                })
            })
        }(jQuery)
    },
    48: function (module, exports) {
        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }! function ($) {
            function sc_setScroll(t, e, i) {
                return "transition" == i.transition && "swing" == e && (e = "ease"), {
                    anims: [],
                    duration: t,
                    orgDuration: t,
                    easing: e,
                    startTime: getTime()
                }
            }

            function sc_startScroll(t, e) {
                for (var i = 0, s = t.anims.length; i < s; i++) {
                    var o = t.anims[i];
                    o && o[0][e.transition](o[1], t.duration, t.easing, o[2])
                }
            }

            function sc_stopScroll(t, e) {
                is_boolean(e) || (e = !0), is_object(t.pre) && sc_stopScroll(t.pre, e);
                for (var i = 0, s = t.anims.length; i < s; i++) {
                    var o = t.anims[i];
                    o[0].stop(!0), e && (o[0].css(o[1]), is_function(o[2]) && o[2]())
                }
                is_object(t.post) && sc_stopScroll(t.post, e)
            }

            function sc_afterScroll(t, e, i) {
                switch (e && e.remove(), i.fx) {
                    case "fade":
                    case "crossfade":
                    case "cover-fade":
                    case "uncover-fade":
                        t.css("opacity", 1), t.css("filter", "")
                }
            }

            function sc_fireCallbacks(t, e, i, s, o) {
                if (e[i] && e[i].call(t, s), o[i].length)
                    for (var n = 0, r = o[i].length; n < r; n++) o[i][n].call(t, s);
                return []
            }

            function sc_fireQueue(t, e, i) {
                return e.length && (t.trigger(cf_e(e[0][0], i), e[0][1]), e.shift()), e
            }

            function sc_hideHiddenItems(t) {
                t.each(function () {
                    var t = $(this);
                    t.data("_cfs_isHidden", t.is(":hidden")).hide()
                })
            }

            function sc_showHiddenItems(t) {
                t && t.each(function () {
                    var t = $(this);
                    t.data("_cfs_isHidden") || t.show()
                })
            }

            function sc_clearTimers(t) {
                return t.auto && clearTimeout(t.auto), t.progress && clearInterval(t.progress), t
            }

            function sc_mapCallbackArguments(t, e, i, s, o, n, r) {
                return {
                    width: r.width,
                    height: r.height,
                    items: {
                        old: t,
                        skipped: e,
                        visible: i
                    },
                    scroll: {
                        items: s,
                        direction: o,
                        duration: n
                    }
                }
            }

            function sc_getDuration(t, e, i, s) {
                var o = t.duration;
                return "none" == t.fx ? 0 : ("auto" == o ? o = e.scroll.duration / e.scroll.items * i : o < 10 && (o = s / o), o < 1 ? 0 : ("fade" == t.fx && (o /= 2), Math.round(o)))
            }

            function nv_showNavi(t, e, i) {
                var s = is_number(t.items.minimum) ? t.items.minimum : t.items.visible + 1;
                if ("show" == e || "hide" == e) var o = e;
                else if (s > e) {
                    debug(i, "Not enough items (" + e + " total, " + s + " needed): Hiding navigation.");
                    o = "hide"
                } else o = "show";
                var n = "show" == o ? "removeClass" : "addClass",
                    r = cf_c("hidden", i);
                t.auto.button && t.auto.button[o]()[n](r), t.prev.button && t.prev.button[o]()[n](r), t.next.button && t.next.button[o]()[n](r), t.pagination.container && t.pagination.container[o]()[n](r)
            }

            function nv_enableNavi(t, e, i) {
                if (!t.circular && !t.infinite) {
                    var s = ("removeClass" == e || "addClass" == e) && e,
                        o = cf_c("disabled", i);
                    if (t.auto.button && s && t.auto.button[s](o), t.prev.button) {
                        var n = s || 0 == e ? "addClass" : "removeClass";
                        t.prev.button[n](o)
                    }
                    if (t.next.button) {
                        n = s || e == t.items.visible ? "addClass" : "removeClass";
                        t.next.button[n](o)
                    }
                }
            }

            function go_getObject(t, e) {
                return is_function(e) ? e = e.call(t) : is_undefined(e) && (e = {}), e
            }

            function go_getItemsObject(t, e) {
                return is_number(e = go_getObject(t, e)) ? e = {
                    visible: e
                } : "variable" == e ? e = {
                    visible: e,
                    width: e,
                    height: e
                } : is_object(e) || (e = {}), e
            }

            function go_getScrollObject(t, e) {
                return is_number(e = go_getObject(t, e)) ? e = e <= 50 ? {
                    items: e
                } : {
                    duration: e
                } : is_string(e) ? e = {
                    easing: e
                } : is_object(e) || (e = {}), e
            }

            function go_getNaviObject(t, e) {
                if (is_string(e = go_getObject(t, e))) {
                    var i = cf_getKeyCode(e);
                    e = -1 == i ? $(e) : i
                }
                return e
            }

            function go_getAutoObject(t, e) {
                return is_jquery(e = go_getNaviObject(t, e)) ? e = {
                    button: e
                } : is_boolean(e) ? e = {
                    play: e
                } : is_number(e) && (e = {
                    timeoutDuration: e
                }), e.progress && (is_string(e.progress) || is_jquery(e.progress)) && (e.progress = {
                    bar: e.progress
                }), e
            }

            function go_complementAutoObject(t, e) {
                return is_function(e.button) && (e.button = e.button.call(t)), is_string(e.button) && (e.button = $(e.button)), is_boolean(e.play) || (e.play = !0), is_number(e.delay) || (e.delay = 0), is_undefined(e.pauseOnEvent) && (e.pauseOnEvent = !0), is_boolean(e.pauseOnResize) || (e.pauseOnResize = !0), is_number(e.timeoutDuration) || (e.timeoutDuration = e.duration < 10 ? 2500 : 5 * e.duration), e.progress && (is_function(e.progress.bar) && (e.progress.bar = e.progress.bar.call(t)), is_string(e.progress.bar) && (e.progress.bar = $(e.progress.bar)), e.progress.bar ? (is_function(e.progress.updater) || (e.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(e.progress.interval) || (e.progress.interval = 50)) : e.progress = !1), e
            }

            function go_getPrevNextObject(t, e) {
                return is_jquery(e = go_getNaviObject(t, e)) ? e = {
                    button: e
                } : is_number(e) && (e = {
                    key: e
                }), e
            }

            function go_complementPrevNextObject(t, e) {
                return is_function(e.button) && (e.button = e.button.call(t)), is_string(e.button) && (e.button = $(e.button)), is_string(e.key) && (e.key = cf_getKeyCode(e.key)), e
            }

            function go_getPaginationObject(t, e) {
                return is_jquery(e = go_getNaviObject(t, e)) ? e = {
                    container: e
                } : is_boolean(e) && (e = {
                    keys: e
                }), e
            }

            function go_complementPaginationObject(t, e) {
                return is_function(e.container) && (e.container = e.container.call(t)), is_string(e.container) && (e.container = $(e.container)), is_number(e.items) || (e.items = !1), is_boolean(e.keys) || (e.keys = !1), is_function(e.anchorBuilder) || is_false(e.anchorBuilder) || (e.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(e.deviation) || (e.deviation = 0), e
            }

            function go_getSwipeObject(t, e) {
                return is_function(e) && (e = e.call(t)), is_undefined(e) && (e = {
                    onTouch: !1
                }), is_true(e) ? e = {
                    onTouch: e
                } : is_number(e) && (e = {
                    items: e
                }), e
            }

            function go_complementSwipeObject(t, e) {
                return is_boolean(e.onTouch) || (e.onTouch = !0), is_boolean(e.onMouse) || (e.onMouse = !1), is_object(e.options) || (e.options = {}), is_boolean(e.options.triggerOnTouchEnd) || (e.options.triggerOnTouchEnd = !1), e
            }

            function go_getMousewheelObject(t, e) {
                return is_function(e) && (e = e.call(t)), is_true(e) ? e = {} : is_number(e) ? e = {
                    items: e
                } : is_undefined(e) && (e = !1), e
            }

            function go_complementMousewheelObject(t, e) {
                return e
            }

            function gn_getItemIndex(t, e, i, s, o) {
                if (is_string(t) && (t = $(t, o)), is_object(t) && (t = $(t, o)), is_jquery(t) ? (t = o.children().index(t), is_boolean(i) || (i = !1)) : is_boolean(i) || (i = !0), is_number(t) || (t = 0), is_number(e) || (e = 0), i && (t += s.first), t += e, s.total > 0) {
                    for (; t >= s.total;) t -= s.total;
                    for (; t < 0;) t += s.total
                }
                return t
            }

            function gn_getVisibleItemsPrev(t, e, i) {
                for (var s = 0, o = 0, n = i; n >= 0; n--) {
                    var r = t.eq(n);
                    if ((s += r.is(":visible") ? r[e.d.outerWidth](!0) : 0) > e.maxDimension) return o;
                    0 == n && (n = t.length), o++
                }
            }

            function gn_getVisibleItemsPrevFilter(t, e, i) {
                return gn_getItemsPrevFilter(t, e.items.filter, e.items.visibleConf.org, i)
            }

            function gn_getScrollItemsPrevFilter(t, e, i, s) {
                return gn_getItemsPrevFilter(t, e.items.filter, s, i)
            }

            function gn_getItemsPrevFilter(t, e, i, s) {
                for (var o = 0, n = 0, r = s, a = t.length; r >= 0; r--) {
                    if (++n == a) return n;
                    if (t.eq(r).is(e) && ++o == i) return n;
                    0 == r && (r = a)
                }
            }

            function gn_getVisibleOrg(t, e) {
                return e.items.visibleConf.org || t.children().slice(0, e.items.visible).filter(e.items.filter).length
            }

            function gn_getVisibleItemsNext(t, e, i) {
                for (var s = 0, o = 0, n = i, r = t.length - 1; n <= r; n++) {
                    var a = t.eq(n);
                    if ((s += a.is(":visible") ? a[e.d.outerWidth](!0) : 0) > e.maxDimension) return o;
                    if (++o == r + 1) return o;
                    n == r && (n = -1)
                }
            }

            function gn_getVisibleItemsNextTestCircular(t, e, i, s) {
                var o = gn_getVisibleItemsNext(t, e, i);
                return e.circular || i + o > s && (o = s - i), o
            }

            function gn_getVisibleItemsNextFilter(t, e, i) {
                return gn_getItemsNextFilter(t, e.items.filter, e.items.visibleConf.org, i, e.circular)
            }

            function gn_getScrollItemsNextFilter(t, e, i, s) {
                return gn_getItemsNextFilter(t, e.items.filter, s + 1, i, e.circular) - 1
            }

            function gn_getItemsNextFilter(t, e, i, s, o) {
                for (var n = 0, r = 0, a = s, c = t.length - 1; a <= c; a++) {
                    if (++r >= c) return r;
                    if (t.eq(a).is(e) && ++n == i) return r;
                    a == c && (a = -1)
                }
            }

            function gi_getCurrentItems(t, e) {
                return t.slice(0, e.items.visible)
            }

            function gi_getOldItemsPrev(t, e, i) {
                return t.slice(i, e.items.visibleConf.old + i)
            }

            function gi_getNewItemsPrev(t, e) {
                return t.slice(0, e.items.visible)
            }

            function gi_getOldItemsNext(t, e) {
                return t.slice(0, e.items.visibleConf.old)
            }

            function gi_getNewItemsNext(t, e, i) {
                return t.slice(i, e.items.visible + i)
            }

            function sz_storeMargin(t, e, i) {
                e.usePadding && (is_string(i) || (i = "_cfs_origCssMargin"), t.each(function () {
                    var t = $(this),
                        s = parseInt(t.css(e.d.marginRight), 10);
                    is_number(s) || (s = 0), t.data(i, s)
                }))
            }

            function sz_resetMargin(t, e, i) {
                if (e.usePadding) {
                    var s = !!is_boolean(i) && i;
                    is_number(i) || (i = 0), sz_storeMargin(t, e, "_cfs_tempCssMargin"), t.each(function () {
                        var t = $(this);
                        t.css(e.d.marginRight, s ? t.data("_cfs_tempCssMargin") : i + t.data("_cfs_origCssMargin"))
                    })
                }
            }

            function sz_storeOrigCss(t) {
                t.each(function () {
                    var t = $(this);
                    t.data("_cfs_origCss", t.attr("style") || "")
                })
            }

            function sz_restoreOrigCss(t) {
                t.each(function () {
                    var t = $(this);
                    t.attr("style", t.data("_cfs_origCss") || "")
                })
            }

            function sz_setResponsiveSizes(t, e) {
                t.items.visible;
                var i = t.items[t.d.width],
                    s = t[t.d.height],
                    o = is_percentage(s);
                e.each(function () {
                    var e = $(this),
                        n = i - ms_getPaddingBorderMargin(e, t, "Width");
                    e[t.d.width](n), o && e[t.d.height](ms_getPercentage(n, s))
                })
            }

            function sz_setSizes(t, e) {
                var i = t.parent(),
                    s = t.children(),
                    o = gi_getCurrentItems(s, e),
                    n = cf_mapWrapperSizes(ms_getSizes(o, e, !0), e, !1);
                if (i.css(n), e.usePadding) {
                    var r = e.padding,
                        a = r[e.d[1]];
                    e.align && a < 0 && (a = 0);
                    var c = o.last();
                    c.css(e.d.marginRight, c.data("_cfs_origCssMargin") + a), t.css(e.d.top, r[e.d[0]]), t.css(e.d.left, r[e.d[3]])
                }
                return t.css(e.d.width, n[e.d.width] + 2 * ms_getTotalSize(s, e, "width")), t.css(e.d.height, ms_getLargestSize(s, e, "height")), n
            }

            function ms_getSizes(t, e, i) {
                return [ms_getTotalSize(t, e, "width", i), ms_getLargestSize(t, e, "height", i)]
            }

            function ms_getLargestSize(t, e, i, s) {
                return is_boolean(s) || (s = !1), is_number(e[e.d[i]]) && s ? e[e.d[i]] : is_number(e.items[e.d[i]]) ? e.items[e.d[i]] : ms_getTrueLargestSize(t, e, i = i.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight")
            }

            function ms_getTrueLargestSize(t, e, i) {
                for (var s = 0, o = 0, n = t.length; o < n; o++) {
                    var r = t.eq(o),
                        a = r.is(":visible") ? r[e.d[i]](!0) : 0;
                    s < a && (s = a)
                }
                return s
            }

            function ms_getTotalSize(t, e, i, s) {
                if (is_boolean(s) || (s = !1), is_number(e[e.d[i]]) && s) return e[e.d[i]];
                if (is_number(e.items[e.d[i]])) return e.items[e.d[i]] * t.length;
                for (var o = i.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", n = 0, r = 0, a = t.length; r < a; r++) {
                    var c = t.eq(r);
                    n += c.is(":visible") ? c[e.d[o]](!0) : 0
                }
                return n
            }

            function ms_getParentSize(t, e, i) {
                var s = t.is(":visible");
                s && t.hide();
                var o = t.parent()[e.d[i]]();
                return s && t.show(), o
            }

            function ms_getMaxDimension(t, e) {
                return is_number(t[t.d.width]) ? t[t.d.width] : e
            }

            function ms_hasVariableSizes(t, e, i) {
                for (var s = !1, o = !1, n = 0, r = t.length; n < r; n++) {
                    var a = t.eq(n),
                        c = a.is(":visible") ? a[e.d[i]](!0) : 0;
                    !1 === s ? s = c : s != c && (o = !0), 0 == s && (o = !0)
                }
                return o
            }

            function ms_getPaddingBorderMargin(t, e, i) {
                return t[e.d["outer" + i]](!0) - t[e.d[i.toLowerCase()]]()
            }

            function ms_getPercentage(t, e) {
                if (is_percentage(e)) {
                    if (!is_number(e = parseInt(e.slice(0, -1), 10))) return t;
                    t *= e / 100
                }
                return t
            }

            function cf_e(t, e, i, s, o) {
                return is_boolean(i) || (i = !0), is_boolean(s) || (s = !0), is_boolean(o) || (o = !1), i && (t = e.events.prefix + t), s && (t = t + "." + e.events.namespace), s && o && (t += e.serialNumber), t
            }

            function cf_c(t, e) {
                return is_string(e.classnames[t]) ? e.classnames[t] : t
            }

            function cf_mapWrapperSizes(t, e, i) {
                is_boolean(i) || (i = !0);
                var s = e.usePadding && i ? e.padding : [0, 0, 0, 0],
                    o = {};
                return o[e.d.width] = t[0] + s[1] + s[3], o[e.d.height] = t[1] + s[0] + s[2], o
            }

            function cf_sortParams(t, e) {
                for (var i = [], s = 0, o = t.length; s < o; s++)
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n].indexOf(_typeof(t[s])) > -1 && is_undefined(i[n])) {
                            i[n] = t[s];
                            break
                        } return i
            }

            function cf_getPadding(t) {
                if (is_undefined(t)) return [0, 0, 0, 0];
                if (is_number(t)) return [t, t, t, t];
                if (is_string(t) && (t = t.split("px").join("").split("em").join("").split(" ")), !is_array(t)) return [0, 0, 0, 0];
                for (var e = 0; e < 4; e++) t[e] = parseInt(t[e], 10);
                switch (t.length) {
                    case 0:
                        return [0, 0, 0, 0];
                    case 1:
                        return [t[0], t[0], t[0], t[0]];
                    case 2:
                        return [t[0], t[1], t[0], t[1]];
                    case 3:
                        return [t[0], t[1], t[2], t[1]];
                    default:
                        return [t[0], t[1], t[2], t[3]]
                }
            }

            function cf_getAlignPadding(t, e) {
                var i = is_number(e[e.d.width]) ? Math.ceil(e[e.d.width] - ms_getTotalSize(t, e, "width")) : 0;
                switch (e.align) {
                    case "left":
                        return [0, i];
                    case "right":
                        return [i, 0];
                    case "center":
                    default:
                        return [Math.ceil(i / 2), Math.floor(i / 2)]
                }
            }

            function cf_getDimensions(t) {
                for (var e = [
                        ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                        ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
                    ], i = e[0].length, s = "right" == t.direction || "left" == t.direction ? 0 : 1, o = {}, n = 0; n < i; n++) o[e[0][n]] = e[s][n];
                return o
            }

            function cf_getAdjust(t, e, i, s) {
                var o = t;
                if (is_function(i)) o = i.call(s, o);
                else if (is_string(i)) {
                    var n = i.split("+"),
                        r = i.split("-");
                    if (r.length > n.length) var a = !0,
                        c = r[0],
                        l = r[1];
                    else a = !1, c = n[0], l = n[1];
                    switch (c) {
                        case "even":
                            o = t % 2 == 1 ? t - 1 : t;
                            break;
                        case "odd":
                            o = t % 2 == 0 ? t - 1 : t;
                            break;
                        default:
                            o = t
                    }
                    is_number(l = parseInt(l, 10)) && (a && (l = -l), o += l)
                }
                return (!is_number(o) || o < 1) && (o = 1), o
            }

            function cf_getItemsAdjust(t, e, i, s) {
                return cf_getItemAdjustMinMax(cf_getAdjust(t, e, i, s), e.items.visibleConf)
            }

            function cf_getItemAdjustMinMax(t, e) {
                return is_number(e.min) && t < e.min && (t = e.min), is_number(e.max) && t > e.max && (t = e.max), t < 1 && (t = 1), t
            }

            function cf_getSynchArr(t) {
                is_array(t) || (t = [
                    [t]
                ]), is_array(t[0]) || (t = [t]);
                for (var e = 0, i = t.length; e < i; e++) is_string(t[e][0]) && (t[e][0] = $(t[e][0])), is_boolean(t[e][1]) || (t[e][1] = !0), is_boolean(t[e][2]) || (t[e][2] = !0), is_number(t[e][3]) || (t[e][3] = 0);
                return t
            }

            function cf_getKeyCode(t) {
                return "right" == t ? 39 : "left" == t ? 37 : "up" == t ? 38 : "down" == t ? 40 : -1
            }

            function cf_setCookie(t, e, i) {
                if (t) {
                    var s = e.triggerHandler(cf_e("currentPosition", i));
                    $.fn.carouFredSel.cookie.set(t, s)
                }
            }

            function cf_getCookie(t) {
                var e = $.fn.carouFredSel.cookie.get(t);
                return "" == e ? 0 : e
            }

            function in_mapCss(t, e) {
                for (var i = {}, s = 0, o = e.length; s < o; s++) i[e[s]] = t.css(e[s]);
                return i
            }

            function in_complementItems(t, e, i, s) {
                return is_object(t.visibleConf) || (t.visibleConf = {}), is_object(t.sizesConf) || (t.sizesConf = {}), 0 == t.start && is_number(s) && (t.start = s), is_object(t.visible) ? (t.visibleConf.min = t.visible.min, t.visibleConf.max = t.visible.max, t.visible = !1) : is_string(t.visible) ? ("variable" == t.visible ? t.visibleConf.variable = !0 : t.visibleConf.adjust = t.visible, t.visible = !1) : is_function(t.visible) && (t.visibleConf.adjust = t.visible, t.visible = !1), is_string(t.filter) || (t.filter = i.filter(":hidden").length > 0 ? ":visible" : "*"), t[e.d.width] || (e.responsive ? (debug(!0, "Set a " + e.d.width + " for the items!"), t[e.d.width] = ms_getTrueLargestSize(i, e, "outerWidth")) : t[e.d.width] = ms_hasVariableSizes(i, e, "outerWidth") ? "variable" : i[e.d.outerWidth](!0)), t[e.d.height] || (t[e.d.height] = ms_hasVariableSizes(i, e, "outerHeight") ? "variable" : i[e.d.outerHeight](!0)), t.sizesConf.width = t.width, t.sizesConf.height = t.height, t
            }

            function in_complementVisibleItems(t, e) {
                return "variable" == t.items[t.d.width] && (t.items.visibleConf.variable = !0), t.items.visibleConf.variable || (is_number(t[t.d.width]) ? t.items.visible = Math.floor(t[t.d.width] / t.items[t.d.width]) : (t.items.visible = Math.floor(e / t.items[t.d.width]), t[t.d.width] = t.items.visible * t.items[t.d.width], t.items.visibleConf.adjust || (t.align = !1)), ("Infinity" == t.items.visible || t.items.visible < 1) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), t.items.visibleConf.variable = !0)), t
            }

            function in_complementPrimarySize(t, e, i) {
                return "auto" == t && (t = ms_getTrueLargestSize(i, e, "outerWidth")), t
            }

            function in_complementSecondarySize(t, e, i) {
                return "auto" == t && (t = ms_getTrueLargestSize(i, e, "outerHeight")), t || (t = e.items[e.d.height]), t
            }

            function in_getAlignPadding(t, e) {
                var i = cf_getAlignPadding(gi_getCurrentItems(e, t), t);
                return t.padding[t.d[1]] = i[1], t.padding[t.d[3]] = i[0], t
            }

            function in_getResponsiveValues(t, e, i) {
                var s = cf_getItemAdjustMinMax(Math.ceil(t[t.d.width] / t.items[t.d.width]), t.items.visibleConf);
                s > e.length && (s = e.length);
                var o = Math.floor(t[t.d.width] / s);
                return t.items.visible = s, t.items[t.d.width] = o, t[t.d.width] = s * o, t
            }

            function bt_pauseOnHoverConfig(t) {
                if (is_string(t)) var e = t.indexOf("immediate") > -1,
                    i = t.indexOf("resume") > -1;
                else e = i = !1;
                return [e, i]
            }

            function bt_mousesheelNumber(t) {
                return is_number(t) ? t : null
            }

            function is_null(t) {
                return null === t
            }

            function is_undefined(t) {
                return is_null(t) || void 0 === t || "" === t || "undefined" === t
            }

            function is_array(t) {
                return t instanceof Array
            }

            function is_jquery(t) {
                return t instanceof jQuery
            }

            function is_object(t) {
                return (t instanceof Object || "object" == _typeof(t)) && !is_null(t) && !is_jquery(t) && !is_array(t) && !is_function(t)
            }

            function is_number(t) {
                return (t instanceof Number || "number" == typeof t) && !isNaN(t)
            }

            function is_string(t) {
                return (t instanceof String || "string" == typeof t) && !is_undefined(t) && !is_true(t) && !is_false(t)
            }

            function is_function(t) {
                return t instanceof Function || "function" == typeof t
            }

            function is_boolean(t) {
                return t instanceof Boolean || "boolean" == typeof t || is_true(t) || is_false(t)
            }

            function is_true(t) {
                return !0 === t || "true" === t
            }

            function is_false(t) {
                return !1 === t || "false" === t
            }

            function is_percentage(t) {
                return is_string(t) && "%" == t.slice(-1)
            }

            function getTime() {
                return (new Date).getTime()
            }

            function deprecated(t, e) {
                debug(!0, t + " is DEPRECATED, support for it will be removed. Use " + e + " instead.")
            }

            function debug(t, e) {
                if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
                    if (is_object(t)) {
                        var i = " (" + t.selector + ")";
                        t = t.debug
                    } else i = "";
                    if (!t) return !1;
                    e = is_string(e) ? "carouFredSel" + i + ": " + e : ["carouFredSel" + i + ":", e], window.console.log(e)
                }
                return !1
            }
            $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function (options, configs) {
                if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
                if (this.length > 1) return this.each(function () {
                    $(this).carouFredSel(options, configs)
                });
                var $cfs = this,
                    $tt0 = this[0],
                    starting_position = !1;
                $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
                var FN = {
                    _init: function (t, e, i) {
                        (t = go_getObject($tt0, t)).items = go_getItemsObject($tt0, t.items), t.scroll = go_getScrollObject($tt0, t.scroll), t.auto = go_getAutoObject($tt0, t.auto), t.prev = go_getPrevNextObject($tt0, t.prev), t.next = go_getPrevNextObject($tt0, t.next), t.pagination = go_getPaginationObject($tt0, t.pagination), t.swipe = go_getSwipeObject($tt0, t.swipe), t.mousewheel = go_getMousewheelObject($tt0, t.mousewheel), e && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, t)), (opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, t)).d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
                        var s = $cfs.children(),
                            o = ms_getParentSize($wrp, opts, "width");
                        if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, o), opts.items = in_complementItems(opts.items, opts, s, i), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, s), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, s), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(o, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, o)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = !!is_number(opts[opts.d.width]) && "center"), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(s, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(s, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, s, o);
                        else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                            case "center":
                            case "left":
                            case "right":
                                "variable" != opts[opts.d.width] && ((opts = in_getAlignPadding(opts, s)).usePadding = !0);
                                break;
                            default:
                                opts.align = !1, opts.usePadding = 0 != opts.padding[0] || 0 != opts.padding[1] || 0 != opts.padding[2] || 0 != opts.padding[3]
                        }
                        is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
                    },
                    _build: function () {
                        $cfs.data("_cfs_isCarousel", !0);
                        var t = $cfs.children(),
                            e = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                            i = "relative";
                        switch (e.position) {
                            case "absolute":
                            case "fixed":
                                i = e.position
                        }
                        "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(e), $wrp.css({
                            overflow: "hidden",
                            position: i
                        }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", e.zIndex), $cfs.css({
                            textAlign: "left",
                            float: "none",
                            position: "absolute",
                            top: 0,
                            right: "auto",
                            bottom: "auto",
                            left: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0
                        }), sz_storeMargin(t, opts), sz_storeOrigCss(t), opts.responsive && sz_setResponsiveSizes(opts, t)
                    },
                    _bind_events: function () {
                        FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function (t, e) {
                            return t.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), e)), !0
                        }), $cfs.bind(cf_e("finish", conf), function (t) {
                            return t.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
                        }), $cfs.bind(cf_e("pause", conf), function (t, e, i) {
                            if (t.stopPropagation(), tmrs = sc_clearTimers(tmrs), e && crsl.isScrolling) {
                                scrl.isStopped = !0;
                                var s = getTime() - scrl.startTime;
                                scrl.duration -= s, scrl.pre && (scrl.pre.duration -= s), scrl.post && (scrl.post.duration -= s), sc_stopScroll(scrl, !1)
                            }
                            if (crsl.isPaused || crsl.isScrolling || i && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                                var o = opts.auto.timeoutDuration - tmrs.timePassed,
                                    n = 100 - Math.ceil(100 * o / opts.auto.timeoutDuration);
                                opts.auto.onTimeoutPause.call($tt0, n, o)
                            }
                            return !0
                        }), $cfs.bind(cf_e("play", conf), function (t, e, i, s) {
                            t.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                            var o = cf_sortParams([e, i, s], ["string", "number", "boolean"]);
                            if (e = o[0], i = o[1], s = o[2], "prev" != e && "next" != e && (e = crsl.direction), is_number(i) || (i = 0), is_boolean(s) || (s = !1), s && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return t.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
                            crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                            var n = opts.auto.timeoutDuration + i;
                            return dur2 = n - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / n), opts.auto.progress && (tmrs.progress = setInterval(function () {
                                var t = getTime() - tmrs.startTime + tmrs.timePassed,
                                    e = Math.ceil(100 * t / n);
                                opts.auto.progress.updater.call(opts.auto.progress.bar[0], e)
                            }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function () {
                                opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), e) : $cfs.trigger(cf_e(e, conf), opts.auto)
                            }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
                        }), $cfs.bind(cf_e("resume", conf), function (t) {
                            return t.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
                        }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function (t, e, i, s, o) {
                            if (t.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return t.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
                            var n = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                            if (n > itms.total) return t.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + n + " needed): Not scrolling.");
                            e = (c = cf_sortParams([e, i, s, o], ["object", "number/string", "function", "boolean"]))[0], i = c[1], s = c[2], o = c[3];
                            var r = t.type.slice(conf.events.prefix.length);
                            if (is_object(e) || (e = {}), is_function(s) && (e.onAfter = s), is_boolean(o) && (e.queue = o), (e = $.extend(!0, {}, opts[r], e)).conditions && !e.conditions.call($tt0, r)) return t.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
                            if (!is_number(i)) {
                                if ("*" != opts.items.filter) i = "visible";
                                else
                                    for (var a = [i, e.items, opts[r].items], c = 0, l = a.length; c < l; c++)
                                        if (is_number(a[c]) || "page" == a[c] || "visible" == a[c]) {
                                            i = a[c];
                                            break
                                        } switch (i) {
                                    case "page":
                                        return t.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(r + "Page", conf), [e, s]);
                                    case "visible":
                                        opts.items.visibleConf.variable || "*" != opts.items.filter || (i = opts.items.visible)
                                }
                            }
                            if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [r, [e, i, s]]), t.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
                            if (e.duration > 0 && crsl.isScrolling) return e.queue && ("last" == e.queue && (queu = []), "first" == e.queue && 0 != queu.length || $cfs.trigger(cf_e("queue", conf), [r, [e, i, s]])), t.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
                            if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + r, conf), [e, i]), opts.synchronise) {
                                var p = opts.synchronise,
                                    u = [e, i],
                                    d = 0;
                                for (l = p.length; d < l; d++) {
                                    var f = r;
                                    p[d][2] || (f = "prev" == f ? "next" : "prev"), p[d][1] || (u[0] = p[d][0].triggerHandler("_cfs_triggerEvent", ["configuration", f])), u[1] = i + p[d][3], p[d][0].trigger("_cfs_triggerEvent", ["slide_" + f, u])
                                }
                            }
                            return !0
                        }), $cfs.bind(cf_e("slide_prev", conf), function (t, e, i) {
                            t.stopPropagation();
                            var s = $cfs.children();
                            if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), t.stopImmediatePropagation();
                            if (sz_resetMargin(s, opts), !is_number(i)) {
                                if (opts.items.visibleConf.variable) i = gn_getVisibleItemsPrev(s, opts, itms.total - 1);
                                else if ("*" != opts.items.filter) {
                                    var o = is_number(e.items) ? e.items : gn_getVisibleOrg($cfs, opts);
                                    i = gn_getScrollItemsPrevFilter(s, opts, itms.total - 1, o)
                                } else i = opts.items.visible;
                                i = cf_getAdjust(i, opts, e.items, $tt0)
                            }
                            if (opts.circular || itms.total - i < itms.first && (i = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                                var n = cf_getItemsAdjust(gn_getVisibleItemsNext(s, opts, itms.total - i), opts, opts.items.visibleConf.adjust, $tt0);
                                opts.items.visible + i <= n && i < itms.total && (i++, n = cf_getItemsAdjust(gn_getVisibleItemsNext(s, opts, itms.total - i), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = n
                            } else if ("*" != opts.items.filter) {
                                n = gn_getVisibleItemsNextFilter(s, opts, itms.total - i);
                                opts.items.visible = cf_getItemsAdjust(n, opts, opts.items.visibleConf.adjust, $tt0)
                            }
                            if (sz_resetMargin(s, opts, !0), 0 == i) return t.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                            for (debug(conf, "Scrolling " + i + " items backward."), itms.first += i; itms.first >= itms.total;) itms.first -= itms.total;
                            opts.circular || (0 == itms.first && e.onEnd && e.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - i, itms.total).prependTo($cfs), itms.total < opts.items.visible + i && $cfs.children().slice(0, opts.items.visible + i - itms.total).clone(!0).appendTo($cfs);
                            var r = gi_getOldItemsPrev(s = $cfs.children(), opts, i),
                                a = gi_getNewItemsPrev(s, opts),
                                c = s.eq(i - 1),
                                l = r.last(),
                                p = a.last();
                            sz_resetMargin(s, opts);
                            var u = 0,
                                d = 0;
                            if (opts.align) {
                                var f = cf_getAlignPadding(a, opts);
                                u = f[0], d = f[1]
                            }
                            var h = u < 0 ? opts.padding[opts.d[3]] : 0,
                                g = !1,
                                m = $();
                            if (opts.items.visible < i && (m = s.slice(opts.items.visibleConf.old, i), "directscroll" == e.fx)) {
                                var v = opts.items[opts.d.width];
                                c = p, sc_hideHiddenItems(g = m), opts.items[opts.d.width] = "variable"
                            }
                            var _ = !1,
                                b = ms_getTotalSize(s.slice(0, i), opts, "width"),
                                w = cf_mapWrapperSizes(ms_getSizes(a, opts, !0), opts, !opts.usePadding),
                                y = 0,
                                x = {},
                                C = {},
                                S = {},
                                k = {},
                                P = {},
                                T = {},
                                j = {},
                                I = sc_getDuration(e, opts, i, b);
                            switch (e.fx) {
                                case "cover":
                                case "cover-fade":
                                    y = ms_getTotalSize(s.slice(0, opts.items.visible), opts, "width")
                            }
                            g && (opts.items[opts.d.width] = v), sz_resetMargin(s, opts, !0), d >= 0 && sz_resetMargin(l, opts, opts.padding[opts.d[1]]), u >= 0 && sz_resetMargin(c, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = d, opts.padding[opts.d[3]] = u), T[opts.d.left] = -(b - h), j[opts.d.left] = -(y - h), C[opts.d.left] = w[opts.d.width];
                            var E, O, M, z = function () {},
                                D = function () {},
                                N = function () {},
                                A = function () {},
                                H = function () {},
                                W = function () {},
                                F = function () {},
                                R = function () {};
                            switch (e.fx) {
                                case "crossfade":
                                case "cover":
                                case "cover-fade":
                                case "uncover":
                                case "uncover-fade":
                                    _ = $cfs.clone(!0).appendTo($wrp)
                            }
                            switch (e.fx) {
                                case "crossfade":
                                case "uncover":
                                case "uncover-fade":
                                    _.children().slice(0, i).remove(), _.children().slice(opts.items.visibleConf.old).remove();
                                    break;
                                case "cover":
                                case "cover-fade":
                                    _.children().slice(opts.items.visible).remove(), _.css(j)
                            }
                            if ($cfs.css(T), scrl = sc_setScroll(I, e.easing, conf), x[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, "variable" != opts[opts.d.width] && "variable" != opts[opts.d.height] || (z = function () {
                                    $wrp.css(w)
                                }, D = function () {
                                    scrl.anims.push([$wrp, w])
                                }), opts.usePadding) {
                                switch (p.not(c).length && (S[opts.d.marginRight] = c.data("_cfs_origCssMargin"), u < 0 ? c.css(S) : (F = function () {
                                    c.css(S)
                                }, R = function () {
                                    scrl.anims.push([c, S])
                                })), e.fx) {
                                    case "cover":
                                    case "cover-fade":
                                        _.children().eq(i - 1).css(S)
                                }
                                p.not(l).length && (k[opts.d.marginRight] = l.data("_cfs_origCssMargin"), N = function () {
                                    l.css(k)
                                }, A = function () {
                                    scrl.anims.push([l, k])
                                }), d >= 0 && (P[opts.d.marginRight] = p.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], H = function () {
                                    p.css(P)
                                }, W = function () {
                                    scrl.anims.push([p, P])
                                })
                            }
                            M = function () {
                                $cfs.css(x)
                            };
                            var L = opts.items.visible + i - itms.total;
                            O = function () {
                                if (L > 0 && ($cfs.children().slice(itms.total).remove(), r = $($cfs.children().slice(itms.total - (opts.items.visible - L)).get().concat($cfs.children().slice(0, L).get()))), sc_showHiddenItems(g), opts.usePadding) {
                                    var t = $cfs.children().eq(opts.items.visible + i - 1);
                                    t.css(opts.d.marginRight, t.data("_cfs_origCssMargin"))
                                }
                            };
                            var Q = sc_mapCallbackArguments(r, m, a, i, "prev", I, w);
                            switch (E = function () {
                                sc_afterScroll($cfs, _, e), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, e, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                            }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, e, "onBefore", Q, clbk), e.fx) {
                                case "none":
                                    $cfs.css(x), z(), N(), H(), F(), M(), O(), E();
                                    break;
                                case "fade":
                                    scrl.anims.push([$cfs, {
                                        opacity: 0
                                    }, function () {
                                        z(), N(), H(), F(), M(), O(), (scrl = sc_setScroll(I, e.easing, conf)).anims.push([$cfs, {
                                            opacity: 1
                                        }, E]), sc_startScroll(scrl, conf)
                                    }]);
                                    break;
                                case "crossfade":
                                    $cfs.css({
                                        opacity: 0
                                    }), scrl.anims.push([_, {
                                        opacity: 0
                                    }]), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }, E]), D(), N(), H(), F(), M(), O();
                                    break;
                                case "cover":
                                    scrl.anims.push([_, x, function () {
                                        N(), H(), F(), M(), O(), E()
                                    }]), D();
                                    break;
                                case "cover-fade":
                                    scrl.anims.push([$cfs, {
                                        opacity: 0
                                    }]), scrl.anims.push([_, x, function () {
                                        N(), H(), F(), M(), O(), E()
                                    }]), D();
                                    break;
                                case "uncover":
                                    scrl.anims.push([_, C, E]), D(), N(), H(), F(), M(), O();
                                    break;
                                case "uncover-fade":
                                    $cfs.css({
                                        opacity: 0
                                    }), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }]), scrl.anims.push([_, C, E]), D(), N(), H(), F(), M(), O();
                                    break;
                                default:
                                    scrl.anims.push([$cfs, x, function () {
                                        O(), E()
                                    }]), D(), A(), W(), R()
                            }
                            return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, w]), !0
                        }), $cfs.bind(cf_e("slide_next", conf), function (t, e, i) {
                            t.stopPropagation();
                            var s = $cfs.children();
                            if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), t.stopImmediatePropagation();
                            if (sz_resetMargin(s, opts), !is_number(i)) {
                                if ("*" != opts.items.filter) {
                                    var o = is_number(e.items) ? e.items : gn_getVisibleOrg($cfs, opts);
                                    i = gn_getScrollItemsNextFilter(s, opts, 0, o)
                                } else i = opts.items.visible;
                                i = cf_getAdjust(i, opts, e.items, $tt0)
                            }
                            var n = 0 == itms.first ? itms.total : itms.first;
                            if (!opts.circular) {
                                if (opts.items.visibleConf.variable) {
                                    var r = gn_getVisibleItemsNext(s, opts, i);
                                    o = gn_getVisibleItemsPrev(s, opts, n - 1)
                                } else r = opts.items.visible, o = opts.items.visible;
                                i + r > n && (i = n - o)
                            }
                            if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                                for (r = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(s, opts, i, n), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - i >= r && i < itms.total;) r = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(s, opts, ++i, n), opts, opts.items.visibleConf.adjust, $tt0);
                                opts.items.visible = r
                            } else if ("*" != opts.items.filter) {
                                r = gn_getVisibleItemsNextFilter(s, opts, i);
                                opts.items.visible = cf_getItemsAdjust(r, opts, opts.items.visibleConf.adjust, $tt0)
                            }
                            if (sz_resetMargin(s, opts, !0), 0 == i) return t.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                            for (debug(conf, "Scrolling " + i + " items forward."), itms.first -= i; itms.first < 0;) itms.first += itms.total;
                            opts.circular || (itms.first == opts.items.visible && e.onEnd && e.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + i && $cfs.children().slice(0, opts.items.visible + i - itms.total).clone(!0).appendTo($cfs);
                            var a = gi_getOldItemsNext(s = $cfs.children(), opts),
                                c = gi_getNewItemsNext(s, opts, i),
                                l = s.eq(i - 1),
                                p = a.last(),
                                u = c.last();
                            sz_resetMargin(s, opts);
                            var d = 0,
                                f = 0;
                            if (opts.align) {
                                var h = cf_getAlignPadding(c, opts);
                                d = h[0], f = h[1]
                            }
                            var g = !1,
                                m = $();
                            if (opts.items.visibleConf.old < i && (m = s.slice(opts.items.visibleConf.old, i), "directscroll" == e.fx)) {
                                var v = opts.items[opts.d.width];
                                l = p, sc_hideHiddenItems(g = m), opts.items[opts.d.width] = "variable"
                            }
                            var _ = !1,
                                b = ms_getTotalSize(s.slice(0, i), opts, "width"),
                                w = cf_mapWrapperSizes(ms_getSizes(c, opts, !0), opts, !opts.usePadding),
                                y = 0,
                                x = {},
                                C = {},
                                S = {},
                                k = {},
                                P = {},
                                T = sc_getDuration(e, opts, i, b);
                            switch (e.fx) {
                                case "uncover":
                                case "uncover-fade":
                                    y = ms_getTotalSize(s.slice(0, opts.items.visibleConf.old), opts, "width")
                            }
                            g && (opts.items[opts.d.width] = v), opts.align && opts.padding[opts.d[1]] < 0 && (opts.padding[opts.d[1]] = 0), sz_resetMargin(s, opts, !0), sz_resetMargin(p, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = f, opts.padding[opts.d[3]] = d), P[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                            var j, I, E, O = function () {},
                                M = function () {},
                                z = function () {},
                                D = function () {},
                                N = function () {},
                                A = function () {};
                            switch (e.fx) {
                                case "crossfade":
                                case "cover":
                                case "cover-fade":
                                case "uncover":
                                case "uncover-fade":
                                    (_ = $cfs.clone(!0).appendTo($wrp)).children().slice(opts.items.visibleConf.old).remove()
                            }
                            switch (e.fx) {
                                case "crossfade":
                                case "cover":
                                case "cover-fade":
                                    $cfs.css("zIndex", 1), _.css("zIndex", 0)
                            }
                            if (scrl = sc_setScroll(T, e.easing, conf), x[opts.d.left] = -b, C[opts.d.left] = -y, d < 0 && (x[opts.d.left] += d), "variable" != opts[opts.d.width] && "variable" != opts[opts.d.height] || (O = function () {
                                    $wrp.css(w)
                                }, M = function () {
                                    scrl.anims.push([$wrp, w])
                                }), opts.usePadding) {
                                var H = u.data("_cfs_origCssMargin");
                                f >= 0 && (H += opts.padding[opts.d[1]]), u.css(opts.d.marginRight, H), l.not(p).length && (k[opts.d.marginRight] = p.data("_cfs_origCssMargin")), z = function () {
                                    p.css(k)
                                }, D = function () {
                                    scrl.anims.push([p, k])
                                };
                                var W = l.data("_cfs_origCssMargin");
                                d > 0 && (W += opts.padding[opts.d[3]]), S[opts.d.marginRight] = W, N = function () {
                                    l.css(S)
                                }, A = function () {
                                    scrl.anims.push([l, S])
                                }
                            }
                            E = function () {
                                $cfs.css(P)
                            };
                            var F = opts.items.visible + i - itms.total;
                            I = function () {
                                F > 0 && $cfs.children().slice(itms.total).remove();
                                var t = $cfs.children().slice(0, i).appendTo($cfs).last();
                                if (F > 0 && (c = gi_getCurrentItems(s, opts)), sc_showHiddenItems(g), opts.usePadding) {
                                    if (itms.total < opts.items.visible + i) {
                                        var e = $cfs.children().eq(opts.items.visible - 1);
                                        e.css(opts.d.marginRight, e.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                                    }
                                    t.css(opts.d.marginRight, t.data("_cfs_origCssMargin"))
                                }
                            };
                            var R = sc_mapCallbackArguments(a, m, c, i, "next", T, w);
                            switch (j = function () {
                                $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, _, e), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, e, "onAfter", R, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                            }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, e, "onBefore", R, clbk), e.fx) {
                                case "none":
                                    $cfs.css(x), O(), z(), N(), E(), I(), j();
                                    break;
                                case "fade":
                                    scrl.anims.push([$cfs, {
                                        opacity: 0
                                    }, function () {
                                        O(), z(), N(), E(), I(), (scrl = sc_setScroll(T, e.easing, conf)).anims.push([$cfs, {
                                            opacity: 1
                                        }, j]), sc_startScroll(scrl, conf)
                                    }]);
                                    break;
                                case "crossfade":
                                    $cfs.css({
                                        opacity: 0
                                    }), scrl.anims.push([_, {
                                        opacity: 0
                                    }]), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }, j]), M(), z(), N(), E(), I();
                                    break;
                                case "cover":
                                    $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, P, j]), M(), z(), N(), I();
                                    break;
                                case "cover-fade":
                                    $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([_, {
                                        opacity: 0
                                    }]), scrl.anims.push([$cfs, P, j]), M(), z(), N(), I();
                                    break;
                                case "uncover":
                                    scrl.anims.push([_, C, j]), M(), z(), N(), E(), I();
                                    break;
                                case "uncover-fade":
                                    $cfs.css({
                                        opacity: 0
                                    }), scrl.anims.push([$cfs, {
                                        opacity: 1
                                    }]), scrl.anims.push([_, C, j]), M(), z(), N(), E(), I();
                                    break;
                                default:
                                    scrl.anims.push([$cfs, x, function () {
                                        E(), I(), j()
                                    }]), M(), D(), A()
                            }
                            return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, w]), !0
                        }), $cfs.bind(cf_e("slideTo", conf), function (t, e, i, s, o, n, r) {
                            t.stopPropagation();
                            var a = cf_sortParams([e, i, s, o, n, r], ["string/number/object", "number", "boolean", "object", "string", "function"]);
                            return o = a[3], n = a[4], r = a[5], 0 != (e = gn_getItemIndex(a[0], a[1], a[2], itms, $cfs)) && (is_object(o) || (o = !1), "prev" != n && "next" != n && (n = opts.circular ? e <= itms.total / 2 ? "next" : "prev" : 0 == itms.first || itms.first > e ? "next" : "prev"), "prev" == n && (e = itms.total - e), $cfs.trigger(cf_e(n, conf), [o, e, r]), !0)
                        }), $cfs.bind(cf_e("prevPage", conf), function (t, e, i) {
                            t.stopPropagation();
                            var s = $cfs.triggerHandler(cf_e("currentPage", conf));
                            return $cfs.triggerHandler(cf_e("slideToPage", conf), [s - 1, e, "prev", i])
                        }), $cfs.bind(cf_e("nextPage", conf), function (t, e, i) {
                            t.stopPropagation();
                            var s = $cfs.triggerHandler(cf_e("currentPage", conf));
                            return $cfs.triggerHandler(cf_e("slideToPage", conf), [s + 1, e, "next", i])
                        }), $cfs.bind(cf_e("slideToPage", conf), function (t, e, i, s, o) {
                            t.stopPropagation(), is_number(e) || (e = $cfs.triggerHandler(cf_e("currentPage", conf)));
                            var n = opts.pagination.items || opts.items.visible,
                                r = Math.ceil(itms.total / n) - 1;
                            return e < 0 && (e = r), e > r && (e = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [e * n, 0, !0, i, s, o])
                        }), $cfs.bind(cf_e("jumpToStart", conf), function (t, e) {
                            if (t.stopPropagation(), e = e ? gn_getItemIndex(e, 0, !0, itms, $cfs) : 0, 0 != (e += itms.first)) {
                                if (itms.total > 0)
                                    for (; e > itms.total;) e -= itms.total;
                                $cfs.prepend($cfs.children().slice(e, itms.total))
                            }
                            return !0
                        }), $cfs.bind(cf_e("synchronise", conf), function (t, e) {
                            if (t.stopPropagation(), e) e = cf_getSynchArr(e);
                            else {
                                if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
                                e = opts.synchronise
                            }
                            for (var i = $cfs.triggerHandler(cf_e("currentPosition", conf)), s = !0, o = 0, n = e.length; o < n; o++) e[o][0].triggerHandler(cf_e("slideTo", conf), [i, e[o][3], !0]) || (s = !1);
                            return s
                        }), $cfs.bind(cf_e("queue", conf), function (t, e, i) {
                            return t.stopPropagation(), is_function(e) ? e.call($tt0, queu) : is_array(e) ? queu = e : is_undefined(e) || queu.push([e, i]), queu
                        }), $cfs.bind(cf_e("insertItem", conf), function (t, e, i, s, o) {
                            t.stopPropagation();
                            var n = cf_sortParams([e, i, s, o], ["string/object", "string/number/object", "boolean", "number"]);
                            if (e = n[0], i = n[1], s = n[2], o = n[3], is_object(e) && !is_jquery(e) ? e = $(e) : is_string(e) && (e = $(e)), !is_jquery(e) || 0 == e.length) return debug(conf, "Not a valid object.");
                            is_undefined(i) && (i = "end"), sz_storeMargin(e, opts), sz_storeOrigCss(e);
                            var r = i,
                                a = "before";
                            "end" == i ? s ? (0 == itms.first ? (i = itms.total - 1, a = "after") : (i = itms.first, itms.first += e.length), i < 0 && (i = 0)) : (i = itms.total - 1, a = "after") : i = gn_getItemIndex(i, o, s, itms, $cfs);
                            var c = $cfs.children().eq(i);
                            return c.length ? c[a](e) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(e)), "end" == r || s || i < itms.first && (itms.first += e.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
                        }), $cfs.bind(cf_e("removeItem", conf), function (t, e, i, s) {
                            t.stopPropagation();
                            var o = cf_sortParams([e, i, s], ["string/number/object", "boolean", "number"]);
                            e = o[0], i = o[1], s = o[2];
                            if (e instanceof $ && e.length > 1) return n = $(), e.each(function (t, e) {
                                var o = $cfs.trigger(cf_e("removeItem", conf), [$(this), i, s]);
                                o && (n = n.add(o))
                            }), n;
                            if (is_undefined(e) || "end" == e) n = $cfs.children().last();
                            else {
                                e = gn_getItemIndex(e, s, i, itms, $cfs);
                                var n = $cfs.children().eq(e);
                                n.length && e < itms.first && (itms.first -= n.length)
                            }
                            return n && n.length && (n.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), n
                        }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function (t, e) {
                            t.stopPropagation();
                            var i = t.type.slice(conf.events.prefix.length);
                            return is_array(e) && (clbk[i] = e), is_function(e) && clbk[i].push(e), clbk[i]
                        }), $cfs.bind(cf_e("currentPosition", conf), function (t, e) {
                            if (t.stopPropagation(), 0 == itms.first) var i = 0;
                            else i = itms.total - itms.first;
                            return is_function(e) && e.call($tt0, i), i
                        }), $cfs.bind(cf_e("currentPage", conf), function (t, e) {
                            t.stopPropagation();
                            var i, s = opts.pagination.items || opts.items.visible,
                                o = Math.ceil(itms.total / s - 1);
                            return (i = 0 == itms.first ? 0 : itms.first < itms.total % s ? 0 : itms.first != s || opts.circular ? Math.round((itms.total - itms.first) / s) : o) < 0 && (i = 0), i > o && (i = o), is_function(e) && e.call($tt0, i), i
                        }), $cfs.bind(cf_e("currentVisible", conf), function (t, e) {
                            t.stopPropagation();
                            var i = gi_getCurrentItems($cfs.children(), opts);
                            return is_function(e) && e.call($tt0, i), i
                        }), $cfs.bind(cf_e("slice", conf), function (t, e, i, s) {
                            if (t.stopPropagation(), 0 == itms.total) return !1;
                            var o = cf_sortParams([e, i, s], ["number", "number", "function"]);
                            if (e = is_number(o[0]) ? o[0] : 0, i = is_number(o[1]) ? o[1] : itms.total, s = o[2], e += itms.first, i += itms.first, items.total > 0) {
                                for (; e > itms.total;) e -= itms.total;
                                for (; i > itms.total;) i -= itms.total;
                                for (; e < 0;) e += itms.total;
                                for (; i < 0;) i += itms.total
                            }
                            var n, r = $cfs.children();
                            return n = i > e ? r.slice(e, i) : $(r.slice(e, itms.total).get().concat(r.slice(0, i).get())), is_function(s) && s.call($tt0, n), n
                        }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function (t, e) {
                            t.stopPropagation();
                            var i = t.type.slice(conf.events.prefix.length),
                                s = crsl[i];
                            return is_function(e) && e.call($tt0, s), s
                        }), $cfs.bind(cf_e("configuration", conf), function (e, a, b, c) {
                            e.stopPropagation();
                            var reInit = !1;
                            if (is_function(a)) a.call($tt0, opts);
                            else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), !1 !== b ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                            else if (!is_undefined(a))
                                if (is_function(b)) {
                                    var val = eval("opts." + a);
                                    is_undefined(val) && (val = ""), b.call($tt0, val)
                                } else {
                                    if (is_undefined(b)) return eval("opts." + a);
                                    "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), !1 !== c ? reInit = !0 : eval("opts." + a + " = b")
                                } if (reInit) {
                                sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                                var sz = sz_setSizes($cfs, opts);
                                $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                            }
                            return opts
                        }), $cfs.bind(cf_e("linkAnchors", conf), function (t, e, i) {
                            return t.stopPropagation(), is_undefined(e) ? e = $("body") : is_string(e) && (e = $(e)), is_jquery(e) && 0 != e.length ? (is_string(i) || (i = "a.caroufredsel"), e.find(i).each(function () {
                                var t = this.hash || "";
                                t.length > 0 && -1 != $cfs.children().index($(t)) && $(this).unbind("click").click(function (e) {
                                    e.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), t)
                                })
                            }), !0) : debug(conf, "Not a valid object.")
                        }), $cfs.bind(cf_e("updatePageStatus", conf), function (t, e, i) {
                            if (t.stopPropagation(), opts.pagination.container) {
                                var s = opts.pagination.items || opts.items.visible,
                                    o = Math.ceil(itms.total / s);
                                e && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function () {
                                    for (var t = 0; t < o; t++) {
                                        var e = $cfs.children().eq(gn_getItemIndex(t * s, 0, !0, itms, $cfs));
                                        $(this).append(opts.pagination.anchorBuilder.call(e[0], t + 1))
                                    }
                                })), opts.pagination.container.each(function () {
                                    $(this).children().unbind(opts.pagination.event).each(function (t) {
                                        $(this).bind(opts.pagination.event, function (e) {
                                            e.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [t * s, -opts.pagination.deviation, !0, opts.pagination])
                                        })
                                    })
                                }));
                                var n = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                                return n >= o && (n = 0), n < 0 && (n = o - 1), opts.pagination.container.each(function () {
                                    $(this).children().removeClass(cf_c("selected", conf)).eq(n).addClass(cf_c("selected", conf))
                                }), !0
                            }
                        }), $cfs.bind(cf_e("updateSizes", conf), function (t) {
                            var e = opts.items.visible,
                                i = $cfs.children(),
                                s = ms_getParentSize($wrp, opts, "width");
                            if (itms.total = i.length, crsl.primarySizePercentage ? (opts.maxDimension = s, opts[opts.d.width] = ms_getPercentage(s, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, s), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, e = (opts = in_getResponsiveValues(opts, i, s)).items.visible, sz_setResponsiveSizes(opts, i)) : opts.items.visibleConf.variable ? e = gn_getVisibleItemsNext(i, opts, 0) : "*" != opts.items.filter && (e = gn_getVisibleItemsNextFilter(i, opts, 0)), !opts.circular && 0 != itms.first && e > itms.first) {
                                if (opts.items.visibleConf.variable) var o = gn_getVisibleItemsPrev(i, opts, itms.first) - itms.first;
                                else if ("*" != opts.items.filter) o = gn_getVisibleItemsPrevFilter(i, opts, itms.first) - itms.first;
                                else o = opts.items.visible - itms.first;
                                debug(conf, "Preventing non-circular: sliding " + o + " items backward."), $cfs.trigger(cf_e("prev", conf), o)
                            }
                            opts.items.visible = cf_getItemsAdjust(e, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, i);
                            var n = sz_setSizes($cfs, opts);
                            return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, n]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), n
                        }), $cfs.bind(cf_e("destroy", conf), function (t, e) {
                            return t.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), e && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
                        }), $cfs.bind(cf_e("debug", conf), function (t) {
                            return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
                        }), $cfs.bind("_cfs_triggerEvent", function (t, e, i) {
                            return t.stopPropagation(), $cfs.triggerHandler(cf_e(e, conf), i)
                        })
                    },
                    _unbind_events: function () {
                        $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
                    },
                    _bind_buttons: function () {
                        if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                            var t = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                            $wrp.bind(cf_e("mouseenter", conf, !1), function () {
                                $cfs.trigger(cf_e("pause", conf), t)
                            }).bind(cf_e("mouseleave", conf, !1), function () {
                                $cfs.trigger(cf_e("resume", conf))
                            })
                        }
                        if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function (t) {
                                t.preventDefault();
                                var e = !1,
                                    i = null;
                                crsl.isPaused ? e = "play" : opts.auto.pauseOnEvent && (e = "pause", i = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), e && $cfs.trigger(cf_e(e, conf), i)
                            }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function (t) {
                                t.preventDefault(), $cfs.trigger(cf_e("prev", conf))
                            }), opts.prev.pauseOnHover)) {
                            t = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                            opts.prev.button.bind(cf_e("mouseenter", conf, !1), function () {
                                $cfs.trigger(cf_e("pause", conf), t)
                            }).bind(cf_e("mouseleave", conf, !1), function () {
                                $cfs.trigger(cf_e("resume", conf))
                            })
                        }
                        if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function (t) {
                                t.preventDefault(), $cfs.trigger(cf_e("next", conf))
                            }), opts.next.pauseOnHover)) {
                            t = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                            opts.next.button.bind(cf_e("mouseenter", conf, !1), function () {
                                $cfs.trigger(cf_e("pause", conf), t)
                            }).bind(cf_e("mouseleave", conf, !1), function () {
                                $cfs.trigger(cf_e("resume", conf))
                            })
                        }
                        if (opts.pagination.container && opts.pagination.pauseOnHover) {
                            t = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                            opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function () {
                                $cfs.trigger(cf_e("pause", conf), t)
                            }).bind(cf_e("mouseleave", conf, !1), function () {
                                $cfs.trigger(cf_e("resume", conf))
                            })
                        }
                        if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (t) {
                                var e = t.keyCode;
                                e == opts.next.key && (t.preventDefault(), $cfs.trigger(cf_e("next", conf))), e == opts.prev.key && (t.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
                            }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (t) {
                                var e = t.keyCode;
                                e >= 49 && e < 58 && (e = (e - 49) * opts.items.visible) <= itms.total && (t.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [e, 0, !0, opts.pagination]))
                            }), $.fn.swipe) {
                            var e = "ontouchstart" in window;
                            if (e && opts.swipe.onTouch || !e && opts.swipe.onMouse) {
                                var i = $.extend(!0, {}, opts.prev, opts.swipe),
                                    s = $.extend(!0, {}, opts.next, opts.swipe),
                                    o = function () {
                                        $cfs.trigger(cf_e("prev", conf), [i])
                                    },
                                    n = function () {
                                        $cfs.trigger(cf_e("next", conf), [s])
                                    };
                                switch (opts.direction) {
                                    case "up":
                                    case "down":
                                        opts.swipe.options.swipeUp = n, opts.swipe.options.swipeDown = o;
                                        break;
                                    default:
                                        opts.swipe.options.swipeLeft = n, opts.swipe.options.swipeRight = o
                                }
                                crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                            }
                        }
                        if ($.fn.mousewheel && opts.mousewheel) {
                            var r = $.extend(!0, {}, opts.prev, opts.mousewheel),
                                a = $.extend(!0, {}, opts.next, opts.mousewheel);
                            crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function (t, e) {
                                t.preventDefault(), e > 0 ? $cfs.trigger(cf_e("prev", conf), [r]) : $cfs.trigger(cf_e("next", conf), [a])
                            }), crsl.mousewheel = !0
                        }
                        if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                            var c = function (t) {
                                    $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                                },
                                l = $(window),
                                p = null;
                            if ($.debounce && "debounce" == conf.onWindowResize) p = $.debounce(200, c);
                            else if ($.throttle && "throttle" == conf.onWindowResize) p = $.throttle(300, c);
                            else {
                                var u = 0,
                                    d = 0;
                                p = function () {
                                    var t = l.width(),
                                        e = l.height();
                                    t == u && e == d || (c(), u = t, d = e)
                                }
                            }
                            l.bind(cf_e("resize", conf, !1, !0, !0), p)
                        }
                    },
                    _unbind_buttons: function () {
                        cf_e("", conf);
                        var t = cf_e("", conf, !1);
                        ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(t), opts.auto.button && opts.auto.button.unbind(t), opts.prev.button && opts.prev.button.unbind(t), opts.next.button && opts.next.button.unbind(t), opts.pagination.container && (opts.pagination.container.unbind(t), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
                    }
                };
                is_boolean(configs) && (configs = {
                    debug: configs
                });
                var crsl = {
                        direction: "next",
                        isPaused: !0,
                        isScrolling: !1,
                        isStopped: !1,
                        mousewheel: !1,
                        swipe: !1
                    },
                    itms = {
                        total: $cfs.children().length,
                        first: 0
                    },
                    tmrs = {
                        auto: null,
                        progress: null,
                        startTime: getTime(),
                        timePassed: 0
                    },
                    scrl = {
                        isStopped: !1,
                        duration: 0,
                        startTime: 0,
                        easing: "",
                        anims: []
                    },
                    clbk = {
                        onBefore: [],
                        onAfter: []
                    },
                    queu = [],
                    conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
                    opts = {},
                    opts_orig = $.extend(!0, {}, options),
                    $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
                if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
                else {
                    var start_arr = [];
                    0 != opts.items.start && start_arr.push(opts.items.start)
                }
                if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
                    for (var a = 0, l = start_arr.length; a < l; a++) {
                        var s = start_arr[a];
                        if (0 != s) {
                            if (!0 === s) {
                                if (s = window.location.hash, s.length < 1) continue
                            } else "random" === s && (s = Math.floor(Math.random() * itms.total));
                            if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                                    fx: "none"
                                }])) break
                        }
                    }
                var siz = sz_setSizes($cfs, opts),
                    itm = gi_getCurrentItems($cfs.children(), opts);
                return opts.onCreate && opts.onCreate.call($tt0, {
                    width: siz.width,
                    height: siz.height,
                    items: itm
                }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
            }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
                synchronise: !1,
                infinite: !0,
                circular: !0,
                responsive: !1,
                direction: "left",
                items: {
                    start: 0
                },
                scroll: {
                    easing: "swing",
                    duration: 500,
                    pauseOnHover: !1,
                    event: "click",
                    queue: !1
                }
            }, $.fn.carouFredSel.configs = {
                debug: !1,
                transition: !1,
                onWindowResize: "throttle",
                events: {
                    prefix: "",
                    namespace: "cfs"
                },
                wrapper: {
                    element: "div",
                    classname: "caroufredsel_wrapper"
                },
                classnames: {}
            }, $.fn.carouFredSel.pageAnchorBuilder = function (t) {
                return '<a href="#"><span>' + t + "</span></a>"
            }, $.fn.carouFredSel.progressbarUpdater = function (t) {
                $(this).css("width", t + "%")
            }, $.fn.carouFredSel.cookie = {
                get: function (t) {
                    t += "=";
                    for (var e = document.cookie.split(";"), i = 0, s = e.length; i < s; i++) {
                        for (var o = e[i];
                            " " == o.charAt(0);) o = o.slice(1);
                        if (0 == o.indexOf(t)) return o.slice(t.length)
                    }
                    return 0
                },
                set: function (t, e, i) {
                    var s = "";
                    if (i) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3), s = "; expires=" + o.toGMTString()
                    }
                    document.cookie = t + "=" + e + s + "; path=/"
                },
                remove: function (t) {
                    $.fn.carouFredSel.cookie.set(t, "", -1)
                }
            }, $.extend($.easing, {
                quadratic: function (t) {
                    var e = t * t;
                    return t * (-e * t + 4 * e - 6 * t + 4)
                },
                cubic: function (t) {
                    return t * (4 * t * t - 9 * t + 6)
                },
                elastic: function (t) {
                    var e = t * t;
                    return t * (33 * e * e - 106 * e * t + 126 * e - 67 * t + 15)
                }
            }))
        }(jQuery)
    },
    49: function (t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }! function (t) {
            function e(e) {
                return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = c), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
                    var i = t(this),
                        o = i.data(_);
                    o || (o = new s(this, e), i.data(_, o))
                })
            }

            function s(e, i) {
                var s, b, w, y;

                function $(t) {
                    t = t.originalEvent;
                    var e, o = v ? t.touches[0] : t;
                    if (F = f, v ? R = t.touches.length : t.preventDefault(), N = 0, A = null, H = 0, v && R !== i.fingers && i.fingers !== d ? S() : (w = s = o.pageX, y = b = o.pageY, L = (new Date).getTime(), i.swipeStatus && (e = k(t, F))), !1 === e) return k(t, F = m), e;
                    W.bind(M, x), W.bind(z, C)
                }

                function x(t) {
                    if (t = t.originalEvent, F !== g && F !== m) {
                        var e, f = v ? t.touches[0] : t;
                        s = f.pageX, b = f.pageY, Q = (new Date).getTime(), A = j(), v && (R = t.touches.length), F = h;
                        f = t;
                        var _ = A;
                        if (i.allowPageScroll === c) f.preventDefault();
                        else {
                            var w = i.allowPageScroll === l;
                            switch (_) {
                                case o:
                                    (i.swipeLeft && w || !w && i.allowPageScroll != p) && f.preventDefault();
                                    break;
                                case n:
                                    (i.swipeRight && w || !w && i.allowPageScroll != p) && f.preventDefault();
                                    break;
                                case r:
                                    (i.swipeUp && w || !w && i.allowPageScroll != u) && f.preventDefault();
                                    break;
                                case a:
                                    (i.swipeDown && w || !w && i.allowPageScroll != u) && f.preventDefault()
                            }
                        }
                        R !== i.fingers && i.fingers !== d && v ? k(t, F = m) : (N = T(), H = Q - L, i.swipeStatus && (e = k(t, F)), i.triggerOnTouchEnd || (f = !(!i.maxTimeThreshold || !(H >= i.maxTimeThreshold)), !0 === P() ? e = k(t, F = g) : f && k(t, F = m))), !1 === e && k(t, F = m)
                    }
                }

                function C(t) {
                    if ((t = t.originalEvent).preventDefault(), Q = (new Date).getTime(), N = T(), A = j(), H = Q - L, i.triggerOnTouchEnd || !1 === i.triggerOnTouchEnd && F === h)
                        if (F = g, R !== i.fingers && i.fingers !== d && v || 0 === s) k(t, F = m);
                        else {
                            var e = !(!i.maxTimeThreshold || !(H >= i.maxTimeThreshold));
                            !0 !== P() && null !== P() || e ? (e || !1 === P()) && k(t, F = m) : k(t, F)
                        }
                    else F === h && k(t, F = m);
                    W.unbind(M, x, !1), W.unbind(z, C, !1)
                }

                function S() {
                    L = Q = b = s = y = w = R = 0
                }

                function k(t, e) {
                    var s = void 0;
                    if (i.swipeStatus && (s = i.swipeStatus.call(W, t, e, A || null, N || 0, H || 0, R)), e !== m || !i.click || 1 !== R && v || !isNaN(N) && 0 !== N || (s = i.click.call(W, t, t.target)), e == g) switch (i.swipe && (s = i.swipe.call(W, t, A, N, H, R)), A) {
                        case o:
                            i.swipeLeft && (s = i.swipeLeft.call(W, t, A, N, H, R));
                            break;
                        case n:
                            i.swipeRight && (s = i.swipeRight.call(W, t, A, N, H, R));
                            break;
                        case r:
                            i.swipeUp && (s = i.swipeUp.call(W, t, A, N, H, R));
                            break;
                        case a:
                            i.swipeDown && (s = i.swipeDown.call(W, t, A, N, H, R))
                    }
                    return (e === m || e === g) && S(), s
                }

                function P() {
                    return null !== i.threshold ? N >= i.threshold : null
                }

                function T() {
                    return Math.round(Math.sqrt(Math.pow(s - w, 2) + Math.pow(b - y, 2)))
                }

                function j() {
                    var t;
                    return t = Math.atan2(b - y, w - s), 0 > (t = Math.round(180 * t / Math.PI)) && (t = 360 - Math.abs(t)), 45 >= t && 0 <= t ? o : 360 >= t && 315 <= t ? o : 135 <= t && 225 >= t ? n : 45 < t && 135 > t ? a : r
                }

                function I() {
                    W.unbind(O, $), W.unbind(D, S), W.unbind(M, x), W.unbind(z, C)
                }
                var E = v || !i.fallbackToMouseEvents,
                    O = E ? "touchstart" : "mousedown",
                    M = E ? "touchmove" : "mousemove",
                    z = E ? "touchend" : "mouseup",
                    D = "touchcancel",
                    N = 0,
                    A = null,
                    H = 0,
                    W = t(e),
                    F = "start",
                    R = 0,
                    L = b = s = y = w = 0,
                    Q = 0;
                try {
                    W.bind(O, $), W.bind(D, S)
                } catch (e) {
                    t.error("events not supported " + O + "," + D + " on jQuery.swipe")
                }
                this.enable = function () {
                    return W.bind(O, $), W.bind(D, S), W
                }, this.disable = function () {
                    return I(), W
                }, this.destroy = function () {
                    return I(), W.data(_, null), W
                }
            }
            var o = "left",
                n = "right",
                r = "up",
                a = "down",
                c = "none",
                l = "auto",
                p = "horizontal",
                u = "vertical",
                d = "all",
                f = "start",
                h = "move",
                g = "end",
                m = "cancel",
                v = "ontouchstart" in window,
                _ = "TouchSwipe";
            t.fn.swipe = function (s) {
                var o = t(this),
                    n = o.data(_);
                if (n && "string" == typeof s) {
                    if (n[s]) return n[s].apply(this, Array.prototype.slice.call(arguments, 1));
                    t.error("Method " + s + " does not exist on jQuery.swipe")
                } else if (!(n || "object" !== i(s) && s)) return e.apply(this, arguments);
                return o
            }, t.fn.swipe.defaults = {
                fingers: 1,
                threshold: 75,
                maxTimeThreshold: null,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                click: null,
                triggerOnTouchEnd: !0,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0
            }, t.fn.swipe.phases = {
                PHASE_START: f,
                PHASE_MOVE: h,
                PHASE_END: g,
                PHASE_CANCEL: m
            }, t.fn.swipe.directions = {
                LEFT: o,
                RIGHT: n,
                UP: r,
                DOWN: a
            }, t.fn.swipe.pageScroll = {
                NONE: c,
                HORIZONTAL: p,
                VERTICAL: u,
                AUTO: l
            }, t.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                ALL: d
            }
        }(jQuery)
    },
    50: function (t, e) {
        ! function (t) {
            var e = t(window),
                i = e.height();
            e.resize(function () {
                i = e.height()
            }), t.fn.parallax = function (s, o, n) {
                var r, a, c = t(this);

                function l() {
                    c.each(function () {
                        a = c.offset().top
                    }), r = n ? function (t) {
                        return t.outerHeight(!0)
                    } : function (t) {
                        return t.height()
                    }, (arguments.length < 1 || null === s) && (s = "50%"), (arguments.length < 2 || null === o) && (o = .5), (arguments.length < 3 || null === n) && (n = !0);
                    var l = e.scrollTop();
                    c.each(function () {
                        var e = t(this),
                            n = e.offset().top;
                        n + r(e) < l || n > l + i || c.css("backgroundPosition", s + " " + Math.round((a - l) * o) + "px")
                    })
                }
                e.bind("scroll", l).resize(l), l()
            }
        }(jQuery)
    },
    51: function (t, e, i) {
        var s;
        ! function () {
            var o, n, r, a, c = {
                    frameRate: 150,
                    animationTime: 400,
                    stepSize: 100,
                    pulseAlgorithm: !0,
                    pulseScale: 4,
                    pulseNormalize: 1,
                    accelerationDelta: 50,
                    accelerationMax: 3,
                    keyboardSupport: !0,
                    arrowScroll: 50,
                    fixedBackground: !0,
                    excluded: ""
                },
                l = c,
                p = !1,
                u = !1,
                d = {
                    x: 0,
                    y: 0
                },
                f = !1,
                h = document.documentElement,
                g = [],
                m = /^Mac/.test(navigator.platform),
                v = {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    spacebar: 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36
                },
                _ = {
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1
                };

            function b() {
                if (!f && document.body) {
                    f = !0;
                    var t = document.body,
                        e = document.documentElement,
                        i = window.innerHeight,
                        s = t.scrollHeight;
                    if (h = 0 <= document.compatMode.indexOf("CSS") ? e : t, o = t, l.keyboardSupport && W("keydown", S), top != self) u = !0;
                    else if (it && i < s && (t.offsetHeight <= i || e.offsetHeight <= i)) {
                        var a, c = document.createElement("div");
                        if (c.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + h.scrollHeight + "px", document.body.appendChild(c), r = function () {
                                a || (a = setTimeout(function () {
                                    p || (c.style.height = "0", c.style.height = h.scrollHeight + "px", a = null)
                                }, 500))
                            }, setTimeout(r, 10), W("resize", r), (n = new V(r)).observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !1
                            }), h.offsetHeight <= i) {
                            var d = document.createElement("div");
                            d.style.clear = "both", t.appendChild(d)
                        }
                    }
                    l.fixedBackground || p || (t.style.backgroundAttachment = "scroll", e.style.backgroundAttachment = "scroll")
                }
            }
            var w = [],
                y = !1,
                $ = Date.now();

            function x(t, e, i) {
                var s, o;
                if (s = 0 < (s = e) ? 1 : -1, o = 0 < (o = i) ? 1 : -1, (d.x !== s || d.y !== o) && (d.x = s, d.y = o, w = [], $ = 0), 1 != l.accelerationMax) {
                    var n = Date.now() - $;
                    if (n < l.accelerationDelta) {
                        var r = (1 + 50 / n) / 2;
                        1 < r && (r = Math.min(r, l.accelerationMax), e *= r, i *= r)
                    }
                    $ = Date.now()
                }
                if (w.push({
                        x: e,
                        y: i,
                        lastX: e < 0 ? .99 : -.99,
                        lastY: i < 0 ? .99 : -.99,
                        start: Date.now()
                    }), !y) {
                    var a = U(),
                        c = t === a || t === document.body;
                    null == t.$scrollBehavior && function (t) {
                        var e = j(t);
                        if (null == O[e]) {
                            var i = getComputedStyle(t, "")["scroll-behavior"];
                            O[e] = "smooth" == i
                        }
                        return O[e]
                    }(t) && (t.$scrollBehavior = t.style.scrollBehavior, t.style.scrollBehavior = "auto");
                    q(function s(o) {
                        for (var n = Date.now(), r = 0, a = 0, p = 0; p < w.length; p++) {
                            var u = w[p],
                                d = n - u.start,
                                f = d >= l.animationTime,
                                h = f ? 1 : d / l.animationTime;
                            l.pulseAlgorithm && (h = X(h));
                            var g = u.x * h - u.lastX >> 0,
                                m = u.y * h - u.lastY >> 0;
                            r += g, a += m, u.lastX += g, u.lastY += m, f && (w.splice(p, 1), p--)
                        }
                        c ? window.scrollBy(r, a) : (r && (t.scrollLeft += r), a && (t.scrollTop += a)), e || i || (w = []), w.length ? q(s, t, 1e3 / l.frameRate + 1) : (y = !1, null != t.$scrollBehavior && (t.style.scrollBehavior = t.$scrollBehavior, t.$scrollBehavior = null))
                    }, t, 0), y = !0
                }
            }

            function C(t) {
                f || b();
                var e = t.target;
                if (t.defaultPrevented || t.ctrlKey) return !0;
                if (R(o, "embed") || R(e, "embed") && /\.pdf/i.test(e.src) || R(o, "object") || e.shadowRoot) return !0;
                var i = -t.wheelDeltaX || t.deltaX || 0,
                    s = -t.wheelDeltaY || t.deltaY || 0;
                m && (t.wheelDeltaX && L(t.wheelDeltaX, 120) && (i = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && L(t.wheelDeltaY, 120) && (s = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), i || s || (s = -t.wheelDelta || 0), 1 === t.deltaMode && (i *= 40, s *= 40);
                var n = D(e);
                return n ? !! function (t) {
                    if (t) {
                        g.length || (g = [t, t, t]), t = Math.abs(t), g.push(t), g.shift(), clearTimeout(a), a = setTimeout(function () {
                            try {
                                localStorage.SS_deltaBuffer = g.join(",")
                            } catch (t) {}
                        }, 1e3);
                        var e = 120 < t && Q(t);
                        return !Q(120) && !Q(100) && !e
                    }
                }(s) || (1.2 < Math.abs(i) && (i *= l.stepSize / 120), 1.2 < Math.abs(s) && (s *= l.stepSize / 120), x(n, i, s), t.preventDefault(), void M()) : !u || !K || (Object.defineProperty(t, "target", {
                    value: window.frameElement
                }), parent.wheel(t))
            }

            function S(t) {
                var e = t.target,
                    i = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== v.spacebar;
                document.body.contains(o) || (o = document.activeElement);
                var s = /^(button|submit|radio|checkbox|file|color|image)$/i;
                if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(e.nodeName) || R(e, "input") && !s.test(e.type) || R(o, "video") || function (t) {
                        var e = t.target,
                            i = !1;
                        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                            do {
                                if (i = e.classList && e.classList.contains("html5-video-controls")) break
                            } while (e = e.parentNode);
                        return i
                    }(t) || e.isContentEditable || i) return !0;
                if ((R(e, "button") || R(e, "input") && s.test(e.type)) && t.keyCode === v.spacebar) return !0;
                if (R(e, "input") && "radio" == e.type && _[t.keyCode]) return !0;
                var n = 0,
                    r = 0,
                    a = D(o);
                if (!a) return !u || !K || parent.keydown(t);
                var c = a.clientHeight;
                switch (a == document.body && (c = window.innerHeight), t.keyCode) {
                    case v.up:
                        r = -l.arrowScroll;
                        break;
                    case v.down:
                        r = l.arrowScroll;
                        break;
                    case v.spacebar:
                        r = -(t.shiftKey ? 1 : -1) * c * .9;
                        break;
                    case v.pageup:
                        r = .9 * -c;
                        break;
                    case v.pagedown:
                        r = .9 * c;
                        break;
                    case v.home:
                        a == document.body && document.scrollingElement && (a = document.scrollingElement), r = -a.scrollTop;
                        break;
                    case v.end:
                        var p = a.scrollHeight - a.scrollTop - c;
                        r = 0 < p ? p + 10 : 0;
                        break;
                    case v.left:
                        n = -l.arrowScroll;
                        break;
                    case v.right:
                        n = l.arrowScroll;
                        break;
                    default:
                        return !0
                }
                x(a, n, r), t.preventDefault(), M()
            }

            function k(t) {
                o = t.target
            }
            var P, T, j = (P = 0, function (t) {
                    return t.uniqueID || (t.uniqueID = P++)
                }),
                I = {},
                E = {},
                O = {};

            function M() {
                clearTimeout(T), T = setInterval(function () {
                    I = E = O = {}
                }, 1e3)
            }

            function z(t, e, i) {
                for (var s = i ? I : E, o = t.length; o--;) s[j(t[o])] = e;
                return e
            }

            function D(t) {
                var e = [],
                    i = document.body,
                    s = h.scrollHeight;
                do {
                    var o = E[j(t)];
                    if (o) return z(e, o);
                    if (e.push(t), s === t.scrollHeight) {
                        var n = A(h) && A(i) || H(h);
                        if (u && N(h) || !u && n) return z(e, U())
                    } else if (N(t) && H(t)) return z(e, t)
                } while (t = t.parentElement)
            }

            function N(t) {
                return t.clientHeight + 10 < t.scrollHeight
            }

            function A(t) {
                return "hidden" !== getComputedStyle(t, "").getPropertyValue("overflow-y")
            }

            function H(t) {
                var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
                return "scroll" === e || "auto" === e
            }

            function W(t, e, i) {
                window.addEventListener(t, e, i || !1)
            }

            function F(t, e, i) {
                window.removeEventListener(t, e, i || !1)
            }

            function R(t, e) {
                return t && (t.nodeName || "").toLowerCase() === e.toLowerCase()
            }
            if (window.localStorage && localStorage.SS_deltaBuffer) try {
                g = localStorage.SS_deltaBuffer.split(",")
            } catch (C) {}

            function L(t, e) {
                return Math.floor(t / e) == t / e
            }

            function Q(t) {
                return L(g[0], t) && L(g[1], t) && L(g[2], t)
            }
            var B, q = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t, e, i) {
                    window.setTimeout(t, i || 1e3 / 60)
                },
                V = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                U = (B = document.scrollingElement, function () {
                    if (!B) {
                        var t = document.createElement("div");
                        t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                        var e = document.body.scrollTop;
                        document.documentElement.scrollTop, window.scrollBy(0, 3), B = document.body.scrollTop != e ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
                    }
                    return B
                });

            function G(t) {
                var e;
                return ((t *= l.pulseScale) < 1 ? t - (1 - Math.exp(-t)) : (t -= 1, (e = Math.exp(-1)) + (1 - Math.exp(-t)) * (1 - e))) * l.pulseNormalize
            }

            function X(t) {
                return 1 <= t ? 1 : t <= 0 ? 0 : (1 == l.pulseNormalize && (l.pulseNormalize /= G(1)), G(t))
            }
            var Y = window.navigator.userAgent,
                J = /Edge/.test(Y),
                K = /chrome/i.test(Y) && !J,
                Z = /safari/i.test(Y) && !J,
                tt = /mobile/i.test(Y),
                et = /Windows NT 6.1/i.test(Y) && /rv:11/i.test(Y),
                it = Z && (/Version\/8/i.test(Y) || /Version\/9/i.test(Y)),
                st = (K || Z || et) && !tt,
                ot = !1;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function () {
                        ot = !0
                    }
                }))
            } catch (C) {}
            var nt = !!ot && {
                    passive: !1
                },
                rt = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

            function at(t) {
                for (var e in t) c.hasOwnProperty(e) && (l[e] = t[e])
            }
            rt && st && (W(rt, C, nt), W("mousedown", k), W("load", b)), at.destroy = function () {
                n && n.disconnect(), F(rt, C), F("mousedown", k), F("keydown", S), F("resize", r), F("load", b)
            }, window.SmoothScrollOptions && at(window.SmoothScrollOptions), void 0 === (s = function () {
                return at
            }.call(e, i, e, t)) || (t.exports = s)
        }()
    },
    52: function (t, e) {
        ! function (t) {
            function e() {
                var t = location.href;
                return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
            }

            function s() {
                "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
            }

            function o(t, e) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                return null == i ? "" : i[1]
            }
            t.prettyPhoto = {
                version: "3.1.6"
            }, t.fn.prettyPhoto = function (n) {
                function r() {
                    t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (C / 2 - g.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                        height: g.contentHeight,
                        width: g.contentWidth
                    }, settings.animation_speed), $pp_pic_holder.animate({
                        top: projectedTop,
                        left: S / 2 - g.containerWidth / 2 < 0 ? 0 : S / 2 - g.containerWidth / 2,
                        width: g.containerWidth
                    }, settings.animation_speed, function () {
                        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(g.height).width(g.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == u(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (g.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || y || m || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), m = !0
                    }), isSet && settings.overlay_gallery && "image" == u(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((g.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"), n.ajaxcallback()
                }

                function a(e) {
                    $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
                        t(".pp_loaderIcon").show(), e()
                    })
                }

                function c(e) {
                    e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
                }

                function l(t, e) {
                    if (resized = !1, p(t, e), imageWidth = t, imageHeight = e, (w > S || b > C) && doresize && settings.allow_resize && !x) {
                        for (resized = !0, fitting = !1; !fitting;) w > S ? (imageWidth = S - 200, imageHeight = e / t * imageWidth) : b > C ? (imageHeight = C - 200, imageWidth = t / e * imageHeight) : fitting = !0, b = imageHeight, w = imageWidth;
                        (w > S || b > C) && l(w, b), p(imageWidth, imageHeight)
                    }
                    return {
                        width: Math.floor(imageWidth),
                        height: Math.floor(imageHeight),
                        containerHeight: Math.floor(b),
                        containerWidth: Math.floor(w) + 2 * settings.horizontal_padding,
                        contentHeight: Math.floor(v),
                        contentWidth: Math.floor(_),
                        resized: resized
                    }
                }

                function p(e, i) {
                    e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                        position: "absolute",
                        top: -1e4
                    }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                        position: "absolute",
                        top: -1e4
                    }), titleHeight += $pp_title.height(), $pp_title.remove(), v = i + detailsHeight, _ = e, b = v + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), w = e
                }

                function u(t) {
                    return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
                }

                function d() {
                    if (doresize && "undefined" != typeof $pp_pic_holder) {
                        if (scroll_pos = f(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = C / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > C) return;
                        $pp_pic_holder.css({
                            top: projectedTop,
                            left: S / 2 + scroll_pos.scrollLeft - contentwidth / 2
                        })
                    }
                }

                function f() {
                    return self.pageYOffset ? {
                        scrollTop: self.pageYOffset,
                        scrollLeft: self.pageXOffset
                    } : document.documentElement && document.documentElement.scrollTop ? {
                        scrollTop: document.documentElement.scrollTop,
                        scrollLeft: document.documentElement.scrollLeft
                    } : document.body ? {
                        scrollTop: document.body.scrollTop,
                        scrollLeft: document.body.scrollLeft
                    } : void 0
                }

                function h() {
                    if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                        currentGalleryPage = 0, toInject = "";
                        for (var e = 0; e < pp_images.length; e++) pp_images[e].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[e]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
                            return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                        }), $pp_gallery.find(".pp_arrow_previous").click(function () {
                            return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                        }), $pp_pic_holder.find(".pp_content").hover(function () {
                            $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                        }, function () {
                            $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                        }), itemWidth = 57, $pp_gallery_li.each(function (e) {
                            t(this).find("a").click(function () {
                                return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                            })
                        })
                    }
                    settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
                        return t.prettyPhoto.startSlideshow(), !1
                    })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                        opacity: 0,
                        height: t(document).height(),
                        width: t(window).width()
                    }).bind("click", function () {
                        settings.modal || t.prettyPhoto.close()
                    }), t("a.pp_close").bind("click", function () {
                        return t.prettyPhoto.close(), !1
                    }), settings.allow_expand && t("a.pp_expand").bind("click", function () {
                        return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), a(function () {
                            t.prettyPhoto.open()
                        }), !1
                    }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
                        return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
                    }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
                        return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
                    }), d()
                }
                n = jQuery.extend({
                    hook: "rel",
                    animation_speed: "fast",
                    ajaxcallback: function () {},
                    slideshow: 5e3,
                    autoplay_slideshow: !1,
                    opacity: .8,
                    show_title: !0,
                    allow_resize: !0,
                    allow_expand: !0,
                    default_width: 500,
                    default_height: 344,
                    counter_separator_label: "/",
                    theme: "pp_default",
                    horizontal_padding: 20,
                    hideflash: !1,
                    wmode: "opaque",
                    autoplay: !0,
                    modal: !1,
                    deeplinking: !0,
                    overlay_gallery: !0,
                    overlay_gallery_max: 30,
                    keyboard_shortcuts: !0,
                    changepicturecallback: function () {},
                    callback: function () {},
                    ie6_fallback: !0,
                    markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
                    gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
                    image_markup: '<img id="fullResImage" src="{path}" />',
                    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                    inline_markup: '<div class="pp_inline">{content}</div>',
                    custom_markup: "",
                    social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
                }, n);
                var g, m, v, _, b, w, y, $ = this,
                    x = !1,
                    C = t(window).height(),
                    S = t(window).width();
                return doresize = !0, scroll_pos = f(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
                    d(), C = t(window).height(), S = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(S)
                }), n.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (e) {
                    if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                        case 37:
                            t.prettyPhoto.changePage("previous"), e.preventDefault();
                            break;
                        case 39:
                            t.prettyPhoto.changePage("next"), e.preventDefault();
                            break;
                        case 27:
                            settings.modal || t.prettyPhoto.close(), e.preventDefault()
                    }
                }), t.prettyPhoto.initialize = function () {
                    return settings = n, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map($, function (e) {
                        return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("href") : void 0
                    }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map($, function (e) {
                        return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : "" : void 0
                    }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map($, function (e) {
                        return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("title") ? t(e).attr("title") : "" : void 0
                    }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), h(), settings.allow_resize && t(window).bind("scroll.prettyphoto", function () {
                        d()
                    }), t.prettyPhoto.open(), !1
                }, t.prettyPhoto.open = function (e) {
                    return "undefined" == typeof settings && (settings = n, pp_images = t.makeArray(arguments[0]), pp_titles = t.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = t.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, h(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), c(t(pp_images).size()), t(".pp_loaderIcon").show(), settings.deeplinking && s(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), x = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), x = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), x = !0), $pp_pic_holder.fadeIn(function () {
                        switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, u(pp_images[set_position])) {
                            case "image":
                                imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
                                    g = l(imgPreloader.width, imgPreloader.height), r()
                                }, imgPreloader.onerror = function () {
                                    alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                                }, imgPreloader.src = pp_images[set_position];
                                break;
                            case "youtube":
                                g = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, g.width).replace(/{height}/g, g.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                                break;
                            case "vimeo":
                                g = l(movie_width, movie_height), movie_id = pp_images[set_position];
                                var e = movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);
                                movie = "http://player.vimeo.com/video/" + e[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = g.width + "/embed/?moog_width=" + g.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, g.height).replace(/{path}/g, movie);
                                break;
                            case "quicktime":
                                (g = l(movie_width, movie_height)).height += 15, g.contentHeight += 15, g.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, g.width).replace(/{height}/g, g.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                                break;
                            case "flash":
                                g = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, g.width).replace(/{height}/g, g.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                                break;
                            case "iframe":
                                g = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, g.width).replace(/{height}/g, g.height).replace(/{path}/g, frame_url);
                                break;
                            case "ajax":
                                doresize = !1, g = l(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function (t) {
                                    toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, r()
                                });
                                break;
                            case "custom":
                                g = l(movie_width, movie_height), toInject = settings.custom_markup;
                                break;
                            case "inline":
                                myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                    width: settings.default_width
                                }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, g = l(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                        }
                        imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, r())
                    }), !1
                }, t.prettyPhoto.changePage = function (e) {
                    currentGalleryPage = 0, "previous" == e ? (set_position--, set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++, set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), a(function () {
                        t.prettyPhoto.open()
                    })
                }, t.prettyPhoto.changeGalleryPage = function (t) {
                    "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                        left: -slide_to
                    }, slide_speed)
                }, t.prettyPhoto.startSlideshow = function () {
                    void 0 === y ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
                        return t.prettyPhoto.stopSlideshow(), !1
                    }), y = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
                }, t.prettyPhoto.stopSlideshow = function () {
                    $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
                        return t.prettyPhoto.startSlideshow(), !1
                    }), clearInterval(y), y = void 0
                }, t.prettyPhoto.close = function () {
                    $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
                        t(this).remove()
                    }), $pp_overlay.fadeOut(settings.animation_speed, function () {
                        settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto"), settings.callback(), doresize = !0, m = !1
                    }))
                }, !i && e() && (i = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
                    t("a[" + n.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
                }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
            }
        }(jQuery);
        var i = !1
    },
    53: function (t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
        ! function (t) {
            "use strict";
            t.fn.emulateTransitionEnd = function (e) {
                var i = !1,
                    s = this;
                t(this).one("bsTransitionEnd", function () {
                    i = !0
                });
                return setTimeout(function () {
                    i || t(s).trigger(t.support.transition.end)
                }, e), this
            }, t(function () {
                t.support.transition = function () {
                    var t = document.createElement("bootstrap"),
                        e = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (var i in e)
                        if (void 0 !== t.style[i]) return {
                            end: e[i]
                        };
                    return !1
                }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                    bindType: t.support.transition.end,
                    delegateType: t.support.transition.end,
                    handle: function (e) {
                        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                    }
                })
            })
        }(jQuery),
        function (t) {
            "use strict";
            var e = '[data-dismiss="alert"]',
                i = function (i) {
                    t(i).on("click", e, this.close)
                };
            i.VERSION = "3.2.0", i.prototype.close = function (e) {
                function i() {
                    n.detach().trigger("closed.bs.alert").remove()
                }
                var s = t(this),
                    o = s.attr("data-target");
                o || (o = (o = s.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
                var n = t(o);
                e && e.preventDefault(), n.length || (n = s.hasClass("alert") ? s : s.parent()), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
            };
            var s = t.fn.alert;
            t.fn.alert = function (e) {
                return this.each(function () {
                    var s = t(this),
                        o = s.data("bs.alert");
                    o || s.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(s)
                })
            }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
                return t.fn.alert = s, this
            }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
        }(jQuery),
        function (t) {
            "use strict";

            function e(e) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.button"),
                        r = "object" == i(e) && e;
                    n || o.data("bs.button", n = new s(this, r)), "toggle" == e ? n.toggle() : e && n.setState(e)
                })
            }
            var s = function e(i, s) {
                this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, s), this.isLoading = !1
            };
            s.VERSION = "3.2.0", s.DEFAULTS = {
                loadingText: "loading..."
            }, s.prototype.setState = function (e) {
                var i = "disabled",
                    s = this.$element,
                    o = s.is("input") ? "val" : "html",
                    n = s.data();
                e += "Text", null == n.resetText && s.data("resetText", s[o]()), s[o](null == n[e] ? this.options[e] : n[e]), setTimeout(t.proxy(function () {
                    "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i))
                }, this), 0)
            }, s.prototype.toggle = function () {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
                }
                t && this.$element.toggleClass("active")
            };
            var o = t.fn.button;
            t.fn.button = e, t.fn.button.Constructor = s, t.fn.button.noConflict = function () {
                return t.fn.button = o, this
            }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
                var s = t(i.target);
                s.hasClass("btn") || (s = s.closest(".btn")), e.call(s, "toggle"), i.preventDefault()
            })
        }(jQuery),
        function (t) {
            "use strict";

            function e(e) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.carousel"),
                        r = t.extend({}, s.DEFAULTS, o.data(), "object" == i(e) && e),
                        a = "string" == typeof e ? e : r.slide;
                    n || o.data("bs.carousel", n = new s(this, r)), "number" == typeof e ? n.to(e) : a ? n[a]() : r.interval && n.pause().cycle()
                })
            }
            var s = function (e, i) {
                this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
            };
            s.VERSION = "3.2.0", s.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0
            }, s.prototype.keydown = function (t) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }, s.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
            }, s.prototype.getItemIndex = function (t) {
                return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
            }, s.prototype.to = function (e) {
                var i = this,
                    s = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    i.to(e)
                }) : s == e ? this.pause().cycle() : this.slide(e > s ? "next" : "prev", t(this.$items[e]))
            }, s.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, s.prototype.next = function () {
                return this.sliding ? void 0 : this.slide("next")
            }, s.prototype.prev = function () {
                return this.sliding ? void 0 : this.slide("prev")
            }, s.prototype.slide = function (e, i) {
                var s = this.$element.find(".item.active"),
                    o = i || s[e](),
                    n = this.interval,
                    r = "next" == e ? "left" : "right",
                    a = "next" == e ? "first" : "last",
                    c = this;
                if (!o.length) {
                    if (!this.options.wrap) return;
                    o = this.$element.find(".item")[a]()
                }
                if (o.hasClass("active")) return this.sliding = !1;
                var l = o[0],
                    p = t.Event("slide.bs.carousel", {
                        relatedTarget: l,
                        direction: r
                    });
                if (this.$element.trigger(p), !p.isDefaultPrevented()) {
                    if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                        u && u.addClass("active")
                    }
                    var d = t.Event("slid.bs.carousel", {
                        relatedTarget: l,
                        direction: r
                    });
                    return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function () {
                        o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), c.sliding = !1, setTimeout(function () {
                            c.$element.trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(1e3 * s.css("transition-duration").slice(0, -1))) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this
                }
            };
            var o = t.fn.carousel;
            t.fn.carousel = e, t.fn.carousel.Constructor = s, t.fn.carousel.noConflict = function () {
                return t.fn.carousel = o, this
            }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (i) {
                var s, o = t(this),
                    n = t(o.attr("data-target") || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
                if (n.hasClass("carousel")) {
                    var r = t.extend({}, n.data(), o.data()),
                        a = o.attr("data-slide-to");
                    a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault()
                }
            }), t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var i = t(this);
                    e.call(i, i.data())
                })
            })
        }(jQuery),
        function (t) {
            "use strict";

            function e(e) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.collapse"),
                        r = t.extend({}, s.DEFAULTS, o.data(), "object" == i(e) && e);
                    !n && r.toggle && "show" == e && (e = !e), n || o.data("bs.collapse", n = new s(this, r)), "string" == typeof e && n[e]()
                })
            }
            var s = function e(i, s) {
                this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, s), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
            };
            s.VERSION = "3.2.0", s.DEFAULTS = {
                toggle: !0
            }, s.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height"
            }, s.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var i = t.Event("show.bs.collapse");
                    if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                        var s = this.$parent && this.$parent.find("> .panel > .in");
                        if (s && s.length) {
                            var o = s.data("bs.collapse");
                            if (o && o.transitioning) return;
                            e.call(s, "hide"), o || s.data("bs.collapse", null)
                        }
                        var n = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[n](0), this.transitioning = 1;
                        var r = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return r.call(this);
                        var a = t.camelCase(["scroll", n].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[n](this.$element[0][a])
                    }
                }
            }, s.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                        var s = function () {
                            this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                        };
                        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350) : s.call(this)
                    }
                }
            }, s.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            };
            var o = t.fn.collapse;
            t.fn.collapse = e, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
                return t.fn.collapse = o, this
            }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
                var s, o = t(this),
                    n = o.attr("data-target") || i.preventDefault() || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""),
                    r = t(n),
                    a = r.data("bs.collapse"),
                    c = a ? "toggle" : o.data(),
                    l = o.attr("data-parent"),
                    p = l && t(l);
                a && a.transitioning || (p && p.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(o).addClass("collapsed"), o[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(r, c)
            })
        }(jQuery),
        function (t) {
            "use strict";

            function e(e) {
                e && 3 === e.which || (t(s).remove(), t(o).each(function () {
                    var s = i(t(this)),
                        o = {
                            relatedTarget: this
                        };
                    s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || s.removeClass("open").trigger("hidden.bs.dropdown", o))
                }))
            }

            function i(e) {
                var i = e.attr("data-target");
                i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                var s = i && t(i);
                return s && s.length ? s : e.parent()
            }
            var s = ".dropdown-backdrop",
                o = '[data-toggle="dropdown"]',
                n = function (e) {
                    t(e).on("click.bs.dropdown", this.toggle)
                };
            n.VERSION = "3.2.0", n.prototype.toggle = function (s) {
                var o = t(this);
                if (!o.is(".disabled, :disabled")) {
                    var n = i(o),
                        r = n.hasClass("open");
                    if (e(), !r) {
                        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                        var a = {
                            relatedTarget: this
                        };
                        if (n.trigger(s = t.Event("show.bs.dropdown", a)), s.isDefaultPrevented()) return;
                        o.trigger("focus"), n.toggleClass("open").trigger("shown.bs.dropdown", a)
                    }
                    return !1
                }
            }, n.prototype.keydown = function (e) {
                if (/(38|40|27)/.test(e.keyCode)) {
                    var s = t(this);
                    if (e.preventDefault(), e.stopPropagation(), !s.is(".disabled, :disabled")) {
                        var n = i(s),
                            r = n.hasClass("open");
                        if (!r || r && 27 == e.keyCode) return 27 == e.which && n.find(o).trigger("focus"), s.trigger("click");
                        var a = " li:not(.divider):visible a",
                            c = n.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                        if (c.length) {
                            var l = c.index(c.filter(":focus"));
                            38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < c.length - 1 && l++, ~l || (l = 0), c.eq(l).trigger("focus")
                        }
                    }
                }
            };
            var r = t.fn.dropdown;
            t.fn.dropdown = function (e) {
                return this.each(function () {
                    var i = t(this),
                        s = i.data("bs.dropdown");
                    s || i.data("bs.dropdown", s = new n(this)), "string" == typeof e && s[e].call(i)
                })
            }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function () {
                return t.fn.dropdown = r, this
            }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, n.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', n.prototype.keydown)
        }(jQuery),
        function (t) {
            "use strict";

            function e(e, o) {
                return this.each(function () {
                    var n = t(this),
                        r = n.data("bs.modal"),
                        a = t.extend({}, s.DEFAULTS, n.data(), "object" == i(e) && e);
                    r || n.data("bs.modal", r = new s(this, a)), "string" == typeof e ? r[e](o) : a.show && r.show(o)
                })
            }
            var s = function (e, i) {
                this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            };
            s.VERSION = "3.2.0", s.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, s.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t)
            }, s.prototype.show = function (e) {
                var i = this,
                    s = t.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
                    var s = t.support.transition && i.$element.hasClass("fade");
                    i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), s && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
                    var o = t.Event("shown.bs.modal", {
                        relatedTarget: e
                    });
                    s ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                        i.$element.trigger("focus").trigger(o)
                    }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(o)
                }))
            }, s.prototype.hide = function (e) {
                e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
            }, s.prototype.enforceFocus = function () {
                t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                    this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }, s.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
                    27 == t.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
            }, s.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(), this.backdrop(function () {
                    t.$element.trigger("hidden.bs.modal")
                })
            }, s.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, s.prototype.backdrop = function (e) {
                var i = this,
                    s = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = t.support.transition && s;
                    if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                            t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                    o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var n = function () {
                        i.removeBackdrop(), e && e()
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n()
                } else e && e()
            }, s.prototype.checkScrollbar = function () {
                document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
            }, s.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
            }, s.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", "")
            }, s.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e
            };
            var o = t.fn.modal;
            t.fn.modal = e, t.fn.modal.Constructor = s, t.fn.modal.noConflict = function () {
                return t.fn.modal = o, this
            }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
                var s = t(this),
                    o = s.attr("href"),
                    n = t(s.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                    r = n.data("bs.modal") ? "toggle" : t.extend({
                        remote: !/#/.test(o) && o
                    }, n.data(), s.data());
                s.is("a") && i.preventDefault(), n.one("show.bs.modal", function (t) {
                    t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
                        s.is(":visible") && s.trigger("focus")
                    })
                }), e.call(n, r, this)
            })
        }(jQuery),
        function (t) {
            "use strict";
            var e = function (t, e) {
                this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
            };
            e.VERSION = "3.2.0", e.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            }, e.prototype.init = function (e, i, s) {
                this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
                for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
                    var r = o[n];
                    if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != r) {
                        var a = "hover" == r ? "mouseenter" : "focusin",
                            c = "hover" == r ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(c + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, e.prototype.getDefaults = function () {
                return e.DEFAULTS
            }, e.prototype.getOptions = function (e) {
                return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            }, e.prototype.getDelegateOptions = function () {
                var e = {},
                    i = this.getDefaults();
                return this._options && t.each(this._options, function (t, s) {
                    i[t] != s && (e[t] = s)
                }), e
            }, e.prototype.enter = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show()
                }, i.options.delay.show)) : i.show()
            }, e.prototype.leave = function (e) {
                var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide()
                }, i.options.delay.hide)) : i.hide()
            }, e.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var i = t.contains(document.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !i) return;
                    var s = this,
                        o = this.tip(),
                        n = this.getUID(this.type);
                    this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
                    var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                        a = /\s?auto?\s?/i,
                        c = a.test(r);
                    c && (r = r.replace(a, "") || "top"), o.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
                    var l = this.getPosition(),
                        p = o[0].offsetWidth,
                        u = o[0].offsetHeight;
                    if (c) {
                        var d = r,
                            f = this.$element.parent(),
                            h = this.getPosition(f);
                        r = "bottom" == r && l.top + l.height + u - h.scroll > h.height ? "top" : "top" == r && l.top - h.scroll - u < 0 ? "bottom" : "right" == r && l.right + p > h.width ? "left" : "left" == r && l.left - p < h.left ? "right" : r, o.removeClass(d).addClass(r)
                    }
                    var g = this.getCalculatedOffset(r, l, p, u);
                    this.applyPlacement(g, r);
                    var m = function () {
                        s.$element.trigger("shown.bs." + s.type), s.hoverState = null
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
                }
            }, e.prototype.applyPlacement = function (e, i) {
                var s = this.tip(),
                    o = s[0].offsetWidth,
                    n = s[0].offsetHeight,
                    r = parseInt(s.css("margin-top"), 10),
                    a = parseInt(s.css("margin-left"), 10);
                isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top = e.top + r, e.left = e.left + a, t.offset.setOffset(s[0], t.extend({
                    using: function (t) {
                        s.css({
                            top: Math.round(t.top),
                            left: Math.round(t.left)
                        })
                    }
                }, e), 0), s.addClass("in");
                var c = s[0].offsetWidth,
                    l = s[0].offsetHeight;
                "top" == i && l != n && (e.top = e.top + n - l);
                var p = this.getViewportAdjustedDelta(i, e, c, l);
                p.left ? e.left += p.left : e.top += p.top;
                var u = p.left ? 2 * p.left - o + c : 2 * p.top - n + l,
                    d = p.left ? "left" : "top",
                    f = p.left ? "offsetWidth" : "offsetHeight";
                s.offset(e), this.replaceArrow(u, s[0][f], d)
            }, e.prototype.replaceArrow = function (t, e, i) {
                this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
            }, e.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            }, e.prototype.hide = function () {
                function e() {
                    "in" != i.hoverState && s.detach(), i.$element.trigger("hidden.bs." + i.type)
                }
                var i = this,
                    s = this.tip(),
                    o = t.Event("hide.bs." + this.type);
                return this.$element.removeAttr("aria-describedby"), this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
            }, e.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }, e.prototype.hasContent = function () {
                return this.getTitle()
            }, e.prototype.getPosition = function (e) {
                var i = (e = e || this.$element)[0],
                    s = "BODY" == i.tagName;
                return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
                    scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
                    width: s ? t(window).width() : e.outerWidth(),
                    height: s ? t(window).height() : e.outerHeight()
                }, s ? {
                    top: 0,
                    left: 0
                } : e.offset())
            }, e.prototype.getCalculatedOffset = function (t, e, i, s) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - i / 2
                } : "top" == t ? {
                    top: e.top - s,
                    left: e.left + e.width / 2 - i / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - s / 2,
                    left: e.left - i
                } : {
                    top: e.top + e.height / 2 - s / 2,
                    left: e.left + e.width
                }
            }, e.prototype.getViewportAdjustedDelta = function (t, e, i, s) {
                var o = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) return o;
                var n = this.options.viewport && this.options.viewport.padding || 0,
                    r = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var a = e.top - n - r.scroll,
                        c = e.top + n - r.scroll + s;
                    a < r.top ? o.top = r.top - a : c > r.top + r.height && (o.top = r.top + r.height - c)
                } else {
                    var l = e.left - n,
                        p = e.left + n + i;
                    l < r.left ? o.left = r.left - l : p > r.width && (o.left = r.left + r.width - p)
                }
                return o
            }, e.prototype.getTitle = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            }, e.prototype.getUID = function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, e.prototype.tip = function () {
                return this.$tip = this.$tip || t(this.options.template)
            }, e.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, e.prototype.validate = function () {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            }, e.prototype.enable = function () {
                this.enabled = !0
            }, e.prototype.disable = function () {
                this.enabled = !1
            }, e.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }, e.prototype.toggle = function (e) {
                var i = this;
                e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
            }, e.prototype.destroy = function () {
                clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
            };
            var s = t.fn.tooltip;
            t.fn.tooltip = function (s) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.tooltip"),
                        r = "object" == i(s) && s;
                    (n || "destroy" != s) && (n || o.data("bs.tooltip", n = new e(this, r)), "string" == typeof s && n[s]())
                })
            }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
                return t.fn.tooltip = s, this
            }
        }(jQuery),
        function (t) {
            "use strict";
            var e = function (t, e) {
                this.init("popover", t, e)
            };
            if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
            e.VERSION = "3.2.0", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
                return e.DEFAULTS
            }, e.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    i = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
            }, e.prototype.hasContent = function () {
                return this.getTitle() || this.getContent()
            }, e.prototype.getContent = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }, e.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }, e.prototype.tip = function () {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip
            };
            var s = t.fn.popover;
            t.fn.popover = function (s) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.popover"),
                        r = "object" == i(s) && s;
                    (n || "destroy" != s) && (n || o.data("bs.popover", n = new e(this, r)), "string" == typeof s && n[s]())
                })
            }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
                return t.fn.popover = s, this
            }
        }(jQuery),
        function (t) {
            "use strict";

            function e(i, s) {
                var o = t.proxy(this.process, this);
                this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
            }

            function s(s) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.scrollspy"),
                        r = "object" == i(s) && s;
                    n || o.data("bs.scrollspy", n = new e(this, r)), "string" == typeof s && n[s]()
                })
            }
            e.VERSION = "3.2.0", e.DEFAULTS = {
                offset: 10
            }, e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }, e.prototype.refresh = function () {
                var e = "offset",
                    i = 0;
                t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
                var s = this;
                this.$body.find(this.selector).map(function () {
                    var s = t(this),
                        o = s.data("target") || s.attr("href"),
                        n = /^#./.test(o) && t(o);
                    return n && n.length && n.is(":visible") && [
                        [n[e]().top + i, o]
                    ] || null
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).each(function () {
                    s.offsets.push(this[0]), s.targets.push(this[1])
                })
            }, e.prototype.process = function () {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                    i = this.getScrollHeight(),
                    s = this.options.offset + i - this.$scrollElement.height(),
                    o = this.offsets,
                    n = this.targets,
                    r = this.activeTarget;
                if (this.scrollHeight != i && this.refresh(), e >= s) return r != (t = n[n.length - 1]) && this.activate(t);
                if (r && e <= o[0]) return r != (t = n[0]) && this.activate(t);
                for (t = o.length; t--;) r != n[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(n[t])
            }, e.prototype.activate = function (e) {
                this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    s = t(i).parents("li").addClass("active");
                s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
            };
            var o = t.fn.scrollspy;
            t.fn.scrollspy = s, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
                return t.fn.scrollspy = o, this
            }, t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    s.call(e, e.data())
                })
            })
        }(jQuery),
        function (t) {
            "use strict";

            function e(e) {
                return this.each(function () {
                    var s = t(this),
                        o = s.data("bs.tab");
                    o || s.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
                })
            }
            var i = function (e) {
                this.element = t(e)
            };
            i.VERSION = "3.2.0", i.prototype.show = function () {
                var e = this.element,
                    i = e.closest("ul:not(.dropdown-menu)"),
                    s = e.data("target");
                if (s || (s = (s = e.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                    var o = i.find(".active:last a")[0],
                        n = t.Event("show.bs.tab", {
                            relatedTarget: o
                        });
                    if (e.trigger(n), !n.isDefaultPrevented()) {
                        var r = t(s);
                        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                            e.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: o
                            })
                        })
                    }
                }
            }, i.prototype.activate = function (e, i, s) {
                function o() {
                    n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), s && s()
                }
                var n = i.find("> .active"),
                    r = s && t.support.transition && n.hasClass("fade");
                r ? n.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o(), n.removeClass("in")
            };
            var s = t.fn.tab;
            t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
                return t.fn.tab = s, this
            }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (i) {
                i.preventDefault(), e.call(t(this), "show")
            })
        }(jQuery),
        function (t) {
            "use strict";

            function e(e) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("bs.affix"),
                        r = "object" == i(e) && e;
                    n || o.data("bs.affix", n = new s(this, r)), "string" == typeof e && n[e]()
                })
            }
            var s = function e(i, s) {
                this.options = t.extend({}, e.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
            };
            s.VERSION = "3.2.0", s.RESET = "affix affix-top affix-bottom", s.DEFAULTS = {
                offset: 0,
                target: window
            }, s.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(s.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return this.pinnedOffset = e.top - t
            }, s.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1)
            }, s.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = t(document).height(),
                        o = this.$target.scrollTop(),
                        n = this.$element.offset(),
                        r = this.options.offset,
                        a = r.top,
                        c = r.bottom;
                    "object" != i(r) && (c = a = r), "function" == typeof a && (a = r.top(this.$element)), "function" == typeof c && (c = r.bottom(this.$element));
                    var l = !(null != this.unpin && o + this.unpin <= n.top) && (null != c && n.top + this.$element.height() >= e - c ? "bottom" : null != a && a >= o && "top");
                    if (this.affixed !== l) {
                        null != this.unpin && this.$element.css("top", "");
                        var p = "affix" + (l ? "-" + l : ""),
                            u = t.Event(p + ".bs.affix");
                        this.$element.trigger(u), u.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(s.RESET).addClass(p).trigger(t.Event(p.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                            top: e - this.$element.height() - c
                        }))
                    }
                }
            };
            var o = t.fn.affix;
            t.fn.affix = e, t.fn.affix.Constructor = s, t.fn.affix.noConflict = function () {
                return t.fn.affix = o, this
            }, t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var i = t(this),
                        s = i.data();
                    s.offset = s.offset || {}, s.offsetBottom && (s.offset.bottom = s.offsetBottom), s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
                })
            })
        }(jQuery)
    },
    54: function (t, e) {
        $(function () {
            "use strict";
            var t = {
                    Android: function () {
                        return navigator.userAgent.match(/Android/i)
                    },
                    BlackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i)
                    },
                    iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                    },
                    Opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i)
                    },
                    Windows: function () {
                        return navigator.userAgent.match(/IEMobile/i)
                    },
                    any: function () {
                        return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
                    }
                },
                e = $(window);
            $(document).ready(function () {
                var t, e, i = (t = new Date("2017-07-01"), e = (new Date - t) / 864e5, Math.round(e)),
                    s = 3 * i,
                    o = Math.round(i / 30 * 2),
                    n = Math.round(i / 365 * 6);
                $(".cupOfTea").text(s), $(".gamesPlayed").text(o), $(".tastyTreats").text(n)
            }), $(document).on("ready", function () {
                var i = $("#mission").find(".carousel.main ul"),
                    s = $("#tweets").find(".carousel.main ul");

                function o() {
                    i.trigger("updateSizes"), s.trigger("updateSizes")
                }

                function n() {
                    null == t.any() && $(".parallax .bg1").addClass("bg-fixed").parallax("50%", .5)
                }
                $(".front #top").height(e.height()), null == t.any() && $("body").addClass("support-fixed"), i.carouFredSel({
                    auto: {
                        timeoutDuration: 8e3
                    },
                    responsive: !0,
                    prev: ".mission_prev",
                    next: ".mission_next",
                    width: "100%",
                    scroll: {
                        items: 1,
                        duration: 1e3,
                        easing: "easeOutExpo"
                    },
                    items: {
                        width: "2000",
                        height: "variable",
                        visible: {
                            min: 1,
                            max: 1
                        }
                    },
                    mousewheel: !1,
                    swipe: {
                        onMouse: !0,
                        onTouch: !0
                    }
                }), s.carouFredSel({
                    auto: {
                        timeoutDuration: 8e3
                    },
                    responsive: !0,
                    pagination: ".tweets_pag",
                    width: "100%",
                    scroll: {
                        items: 1,
                        duration: 1e3,
                        easing: "easeOutExpo"
                    },
                    items: {
                        width: "2000",
                        height: "variable",
                        visible: {
                            min: 1,
                            max: 1
                        }
                    },
                    mousewheel: !1,
                    swipe: {
                        onMouse: !0,
                        onTouch: !0
                    }
                }), e.on("resize", o).on("load", o), o(), $("#top2").sticky({
                    topSpacing: 0,
                    getWidthFrom: "body",
                    responsiveWidth: !0
                }), e.on("load", function () {
                    n()
                }), n(), $("a[rel^='prettyPhoto']").prettyPhoto({
                    animation_speed: "normal",
                    theme: "facebook",
                    social_tools: !1,
                    allow_resize: !0,
                    default_width: 500,
                    default_height: 344
                }), $(document).on("click", ".navbar_ .nav a, .menu_bot a, .scroll-to, .footer-nav a", function (t) {
                    if (-1 === $(this).attr("href").toLocaleLowerCase().indexOf("http")) {
                        var e = $("#top2").outerHeight(),
                            i = $("html, body");
                        "#home" === $(this).attr("href") ? (console.log("inner if"), i.animate({
                            scrollTop: $($(this).attr("href")).offset().top + "px"
                        }, {
                            duration: 1200,
                            easing: "easeInOutExpo"
                        })) : "javascript:void(0)" !== $(this).attr("href") && i.animate({
                            scrollTop: $($(this).attr("href")).offset().top - e + "px"
                        }, {
                            duration: 1200,
                            easing: "easeInOutExpo"
                        }), t.preventDefault()
                    }
                }), $(".animated").appear(function () {
                    var t = $(this),
                        e = t.data("animation");
                    if (!t.hasClass("visible")) {
                        var i = t.data("animation-delay");
                        i ? setTimeout(function () {
                            t.addClass(e + " visible")
                        }, i) : t.addClass(e + " visible")
                    }
                }), $(".yjsg-round-progress").appear(function () {
                    var t = $(this),
                        e = t.data("animation-delay");
                    e ? setTimeout(function () {
                        $(t).yjsgroundprogress()
                    }, e) : $(t).yjsgroundprogress()
                }), $(".animated-number").appear(function () {
                    var t = $(this),
                        e = t.text(),
                        i = t.data("duration"),
                        s = t.data("animation-delay");
                    s || (s = 0), t.text("0"), setTimeout(function () {
                        t.animate({
                            num: e
                        }, {
                            duration: i,
                            step: function (t) {
                                this.innerHTML = t.toFixed(0)
                            }
                        })
                    }, s)
                })
            }), e.on("load", function () {
                $("#load").fadeOut(200, function () {
                    $(this).remove()
                })
            })
        })
    }
});