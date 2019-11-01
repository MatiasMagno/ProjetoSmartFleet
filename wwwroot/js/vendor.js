! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (hb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = ob[a] = {};
        return _.each(a.match(nb) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ub, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : tb.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sb.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Kb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (rb.hasData(a) && (f = rb.access(a), g = rb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sb.hasData(a) && (h = sb.access(a), i = _.extend({}, h), sb.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && yb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Ob[a];
        return c || (c = t(a, b), "none" !== c && c || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Nb[0].contentDocument, b.write(), b.close(), c = t(a, b), Nb.detach()), Ob[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Rb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qb.test(g) && Pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--;)
            if (b = Xb[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wb[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wb[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wb[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Rb(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qb.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = rb.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xb(d) && (f[g] = rb.access(d, "olddisplay", u(d.nodeName)))) : (e = xb(d), "none" === c && e || rb.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && xb(a),
            p = rb.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? rb.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $b.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = rb.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                rb.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bc.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Yb || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Yb || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(nb) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === tc;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.3",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bb = /^-ms-/,
        cb = /-([\da-z])/gi,
        db = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return ab(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            ab = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            cb = "[\\x20\\t\\r\\n\\f]",
            db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            eb = db.replace("w", "w#"),
            fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]",
            gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)",
            hb = new RegExp(cb + "+", "g"),
            ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"),
            jb = new RegExp("^" + cb + "*," + cb + "*"),
            kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"),
            lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"),
            mb = new RegExp(gb),
            nb = new RegExp("^" + eb + "$"),
            ob = {
                ID: new RegExp("^#(" + db + ")"),
                CLASS: new RegExp("^\\.(" + db + ")"),
                TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fb),
                PSEUDO: new RegExp("^" + gb),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + bb + ")$", "i"),
                needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")
            },
            pb = /^(?:input|select|textarea|button)$/i,
            qb = /^h\d$/i,
            rb = /^[^{]+\{\s*\[native \w/,
            sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tb = /[+~]/,
            ub = /'|\\/g,
            vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"),
            wb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xb = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (yb) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", gb)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = ab(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(vb, wb),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qb.test(a.nodeName)
                },
                input: function(a) {
                    return pb.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = ob[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(bb, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext,
        gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fb.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        kb = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : jb.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ib).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), gb.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ib.ready ? ib.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/,
        mb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (mb[a] || _.unique(e), lb.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var nb = /\S+/g,
        ob = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pb;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(b)
    }, _.ready.promise();
    var qb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(nb) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var rb = new h,
        sb = new h,
        tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ub = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sb.hasData(a) || rb.hasData(a)
        },
        data: function(a, b, c) {
            return sb.access(a, b, c)
        },
        removeData: function(a, b) {
            sb.remove(a, b)
        },
        _data: function(a, b, c) {
            return rb.access(a, b, c)
        },
        _removeData: function(a, b) {
            rb.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sb.get(f), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    rb.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sb.set(this, a)
            }) : qb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sb.get(f, a), void 0 !== c) return c;
                    if (c = sb.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sb.get(this, d);
                    sb.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sb.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sb.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = rb.get(a, b), c && (!d || _.isArray(c) ? d = rb.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return rb.get(a, c) || rb.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = rb.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wb = ["Top", "Right", "Bottom", "Left"],
        xb = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        yb = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/,
        Bb = /^(?:mouse|pointer|contextmenu)|click/,
        Cb = /^(?:focusinfocus|focusoutblur)$/,
        Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== zb && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(nb) || [""], j = b.length; j--;) h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = rb.hasData(a) && rb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(nb) || [""], j = b.length; j--;)
                    if (h = Db.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Cb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (rb.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = rb.access(d, b);
                e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = rb.access(d, b) - 1;
                e ? rb.access(d, b, e) : (d.removeEventListener(a, c, !0), rb.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fb = /<([\w:]+)/,
        Gb = /<|&#?\w+;/,
        Hb = /<(?:script|style|link)/i,
        Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jb = /^$|\/(?:java|ecma)script/i,
        Kb = /^true\/(.*)/,
        Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Gb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fb.exec(e) || ["", ""])[1].toLowerCase(), h = Mb[g] || Mb._default, f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Jb.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[rb.expando], e && (b = rb.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    rb.cache[e] && delete rb.cache[e]
                }
                delete sb.cache[c[sb.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qb(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Hb.test(a) && !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Eb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ib.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Jb.test(g.type || "") && !rb.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(Lb, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Nb, Ob = {},
        Pb = /^margin/,
        Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
        Rb = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sb = /^(none|table(?!-c[ea]).+)/,
        Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
        Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
        Vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ub.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wb && (e = Wb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sb.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Vb, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Rb(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pb.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qb(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = Rb(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/,
        _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
        ac = /queueHooks$/,
        bc = [G],
        cc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _b.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _b.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cc[c] = cc[c] || [], cc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bc.unshift(a) : bc.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xb).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || rb.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = rb.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = rb.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Yb = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Yb = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Zb), Zb = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qb(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === zb ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? ec : dc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(nb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), ec = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fc[b] || _.find.attr;
        fc[b] = function(a, b, d) {
            var e, f;
            return d || (f = fc[b], fc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fc[b] = f), e
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qb(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(nb) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hc, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(nb) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === zb || "boolean" === c) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : rb.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jc = _.now(),
        kc = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lc = /#.*$/,
        mc = /([?&])_=[^&]*/,
        nc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        oc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pc = /^(?:GET|HEAD)$/,
        qc = /^\/\//,
        rc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sc = {},
        tc = {},
        uc = "*/".concat("*"),
        vc = a.location.href,
        wc = rc.exec(vc.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vc,
            type: "GET",
            isLocal: oc.test(wc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": uc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sc),
        ajaxTransport: J(tc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nc.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vc) + "").replace(lc, "").replace(qc, wc[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(nb) || [""], null == l.crossDomain && (i = rc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wc[1] && i[2] === wc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wc[3] || ("http:" === wc[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sc, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pc.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kc.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mc.test(e) ? e.replace(mc, "$1_=" + jc++) : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + uc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(tc, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xc = /%20/g,
        yc = /\[\]$/,
        zc = /\r?\n/g,
        Ac = /^(?:submit|button|image|reset|file)$/i,
        Bc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xc, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !yb.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zc, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cc = 0,
        Dc = {},
        Ec = {
            0: 200,
            1223: 204
        },
        Fc = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Dc) Dc[a]()
    }), Y.cors = !!Fc && "withCredentials" in Fc, Y.ajax = Fc = !!Fc, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || _.expando + "_" + jc++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = gb.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ic = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== zb && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jc; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jc
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qb.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kc = a.jQuery,
        Lc = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lc), b && a.jQuery === _ && (a.jQuery = Kc), _
    }, typeof b === zb && (a.jQuery = a.$ = _), _
}), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(),
                d = this.$target.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: b - this.$element.height() - h
                }))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.2.0", d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, c.prototype.keydown = function(a) {
        switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        a.preventDefault()
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.to = function(b) {
        var c = this,
            d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        toggle: !0
    }, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this),
            f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
            g = a(f),
            h = g.data("bs.collapse"),
            i = h ? "toggle" : e.data(),
            j = e.attr("data-parent"),
            k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.2.0", c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
        c.preventDefault(), b.call(a(this), "show")
    })
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.2.0", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset",
            c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + c, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var c = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        } else b && b()
    }, c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
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
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c) return;
            var d = this,
                e = this.tip(),
                f = this.getUID(this.type);
            this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
                h = /\s?auto?\s?/i,
                i = h.test(g);
            i && (g = g.replace(h, "") || "top"), e.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(),
                k = e[0].offsetWidth,
                l = e[0].offsetHeight;
            if (i) {
                var m = g,
                    n = this.$element.parent(),
                    o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type), d.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
            m = k.left ? "left" : "top",
            n = k.left ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(l, d[0][n], m)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName;
        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        }, d ? {
            top: 0,
            left: 0
        } : b.offset())
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery || window.Zepto)
}(function(a) {
    "use strict";
    var b = function(b, c, d) {
            var e, f, g = this;
            b = a(b), c = "function" == typeof c ? c(b.val(), void 0, b, d) : c;
            var h = {
                getCaret: function() {
                    try {
                        var a, c = 0,
                            d = b.get(0),
                            e = document.selection,
                            f = d.selectionStart;
                        return e && !~navigator.appVersion.indexOf("MSIE 10") ? (a = e.createRange(), a.moveStart("character", b.is("input") ? -b.val().length : -b.text().length), c = a.text.length) : (f || "0" === f) && (c = f), c
                    } catch (g) {}
                },
                setCaret: function(a) {
                    try {
                        if (b.is(":focus")) {
                            var c, d = b.get(0);
                            d.setSelectionRange ? d.setSelectionRange(a, a) : d.createTextRange && (c = d.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select())
                        }
                    } catch (e) {}
                },
                events: function() {
                    b.on("keydown.mask", function() {
                        e = h.val()
                    }).on("keyup.mask", h.behaviour).on("paste.mask drop.mask", function() {
                        setTimeout(function() {
                            b.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function() {
                        b.data("changed", !0)
                    }).on("blur.mask", function() {
                        e === b.val() || b.data("changed") || b.trigger("change"), b.data("changed", !1)
                    }).on("focusout.mask", function() {
                        d.clearIfNotMatch && !f.test(h.val()) && h.val("")
                    })
                },
                getRegexMask: function() {
                    for (var a, b, d, e, f, h, i = [], j = 0; j < c.length; j++) a = g.translation[c[j]], a ? (b = a.pattern.toString().replace(/.{1}$|^.{1}/g, ""), d = a.optional, e = a.recursive, e ? (i.push(c[j]), f = {
                        digit: c[j],
                        pattern: b
                    }) : i.push(d || e ? b + "?" : b)) : i.push(c[j].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return h = i.join(""), f && (h = h.replace(new RegExp("(" + f.digit + "(.*" + f.digit + ")?)"), "($1)?").replace(new RegExp(f.digit, "g"), f.pattern)), new RegExp(h)
                },
                destroyEvents: function() {
                    b.off(["keydown", "keyup", "paste", "drop", "change", "blur", "focusout", "DOMNodeInserted", ""].join(".mask ")).removeData("changed")
                },
                val: function(a) {
                    var c = b.is("input");
                    return arguments.length > 0 ? c ? b.val(a) : b.text(a) : c ? b.val() : b.text()
                },
                getMCharsBeforeCount: function(a, b) {
                    for (var d = 0, e = 0, f = c.length; f > e && a > e; e++) g.translation[c.charAt(e)] || (a = b ? a + 1 : a, d++);
                    return d
                },
                caretPos: function(a, b, d, e) {
                    var f = g.translation[c.charAt(Math.min(a - 1, c.length - 1))];
                    return f ? Math.min(a + d - b - e, d) : h.caretPos(a + 1, b, d, e)
                },
                behaviour: function(b) {
                    b = b || window.event;
                    var c = b.keyCode || b.which;
                    if (-1 === a.inArray(c, g.byPassKeys)) {
                        var d = h.getCaret(),
                            e = h.val(),
                            f = e.length,
                            i = f > d,
                            j = h.getMasked(),
                            k = j.length,
                            l = h.getMCharsBeforeCount(k - 1) - h.getMCharsBeforeCount(f - 1);
                        return j !== e && h.val(j), !i || 65 === c && b.ctrlKey || (8 !== c && 46 !== c && (d = h.caretPos(d, f, k, l)), h.setCaret(d)), h.callbacks(b)
                    }
                },
                getMasked: function(a) {
                    var b, e, f = [],
                        i = h.val(),
                        j = 0,
                        k = c.length,
                        l = 0,
                        m = i.length,
                        n = 1,
                        o = "push",
                        p = -1;
                    for (d.reverse ? (o = "unshift", n = -1, b = 0, j = k - 1, l = m - 1, e = function() {
                            return j > -1 && l > -1
                        }) : (b = k - 1, e = function() {
                            return k > j && m > l
                        }); e();) {
                        var q = c.charAt(j),
                            r = i.charAt(l),
                            s = g.translation[q];
                        s ? (r.match(s.pattern) ? (f[o](r), s.recursive && (-1 === p ? p = j : j === b && (j = p - n), b === p && (j -= n)), j += n) : s.optional && (j += n, l -= n), l += n) : (a || f[o](q), r === q && (l += n), j += n)
                    }
                    var t = c.charAt(b);
                    return k !== m + 1 || g.translation[t] || f.push(t), f.join("")
                },
                callbacks: function(a) {
                    var f = h.val(),
                        g = f !== e;
                    g === !0 && "function" == typeof d.onChange && d.onChange(f, a, b, d), g === !0 && "function" == typeof d.onKeyPress && d.onKeyPress(f, a, b, d), "function" == typeof d.onComplete && f.length === c.length && d.onComplete(f, a, b, d)
                }
            };
            g.mask = c, g.options = d, g.remove = function() {
                var a;
                return h.destroyEvents(), h.val(g.getCleanVal()).removeAttr("maxlength"), a = h.getCaret(), h.setCaret(a - h.getMCharsBeforeCount(a)), b
            }, g.getCleanVal = function() {
                return h.getMasked(!0)
            }, g.init = function() {
                d = d || {}, g.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], g.translation = {
                    0: {
                        pattern: /\d/
                    },
                    9: {
                        pattern: /\d/,
                        optional: !0
                    },
                    "#": {
                        pattern: /\d/,
                        recursive: !0
                    },
                    A: {
                        pattern: /[a-zA-Z0-9]/
                    },
                    S: {
                        pattern: /[a-zA-Z]/
                    }
                }, g.translation = a.extend({}, g.translation, d.translation), g = a.extend(!0, {}, g, d), f = h.getRegexMask(), d.maxlength !== !1 && b.attr("maxlength", c.length), d.placeholder && b.attr("placeholder", d.placeholder), b.attr("autocomplete", "off"), h.destroyEvents(), h.events();
                var e = h.getCaret();
                h.val(h.getMasked()), h.setCaret(e + h.getMCharsBeforeCount(e, !0))
            }()
        },
        c = {},
        d = "DOMNodeInserted.mask",
        e = function() {
            var b = a(this),
                c = {},
                d = "data-mask-";
            b.attr(d + "reverse") && (c.reverse = !0), "false" === b.attr(d + "maxlength") && (c.maxlength = !1), b.attr(d + "clearifnotmatch") && (c.clearIfNotMatch = !0), b.mask(b.attr("data-mask"), c)
        };
    a.fn.mask = function(e, f) {
        var g = this.selector,
            h = function() {
                try {
                    var c = a(this).data("mask"),
                        d = JSON.stringify;
                    if ("object" != typeof c || d(c.options) !== d(f) || c.mask !== e) return a(this).data("mask", new b(this, e, f))
                } catch (g) {}
            };
        this.each(h), g && !c[g] && (c[g] = !0, setTimeout(function() {
            a(document).on(d, g, h)
        }, 500))
    }, a.fn.unmask = function() {
        try {
            return this.each(function() {
                a(this).data("mask").remove().removeData("mask")
            })
        } catch (b) {}
    }, a.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }, a("*[data-mask]").each(e), a(document).on(d, "*[data-mask]", e)
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
}),
function(a) {
    a.fn.extend({
        slimScroll: function(b) {
            var c = a.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, b);
            return this.each(function() {
                function d(b) {
                    if (j) {
                        b = b || window.event;
                        var d = 0;
                        b.wheelDelta && (d = -b.wheelDelta / 120), b.detail && (d = b.detail / 3), a(b.target || b.srcTarget || b.srcElement).closest("." + c.wrapperClass).is(s.parent()) && e(d, !0), b.preventDefault && !r && b.preventDefault(), r || (b.returnValue = !1)
                    }
                }

                function e(a, b, d) {
                    r = !1;
                    var e = a,
                        f = s.outerHeight() - v.outerHeight();
                    b && (e = parseInt(v.css("top")) + a * parseInt(c.wheelStep) / 100 * v.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), v.css({
                        top: e + "px"
                    })), p = parseInt(v.css("top")) / (s.outerHeight() - v.outerHeight()), e = p * (s[0].scrollHeight - s.outerHeight()), d && (e = a, a = e / s[0].scrollHeight * s.outerHeight(), a = Math.min(Math.max(a, 0), f), v.css({
                        top: a + "px"
                    })), s.scrollTop(e), s.trigger("slimscrolling", ~~e), h(), i()
                }

                function f() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", d, !1), this.addEventListener("mousewheel", d, !1)) : document.attachEvent("onmousewheel", d)
                }

                function g() {
                    o = Math.max(s.outerHeight() / s[0].scrollHeight * s.outerHeight(), 30), v.css({
                        height: o + "px"
                    });
                    var a = o == s.outerHeight() ? "none" : "block";
                    v.css({
                        display: a
                    })
                }

                function h() {
                    g(), clearTimeout(m), p == ~~p ? (r = c.allowPageScroll, q != p && s.trigger("slimscroll", 0 == ~~p ? "top" : "bottom")) : r = !1, q = p, o >= s.outerHeight() ? r = !0 : (v.stop(!0, !0).fadeIn("fast"), c.railVisible && w.stop(!0, !0).fadeIn("fast"))
                }

                function i() {
                    c.alwaysVisible || (m = setTimeout(function() {
                        c.disableFadeOut && j || k || l || (v.fadeOut("slow"), w.fadeOut("slow"))
                    }, 1e3))
                }
                var j, k, l, m, n, o, p, q, r = !1,
                    s = a(this);
                if (s.parent().hasClass(c.wrapperClass)) {
                    var u = s.scrollTop(),
                        v = s.parent().find("." + c.barClass),
                        w = s.parent().find("." + c.railClass);
                    if (g(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            s.parent().css("height", "auto"), s.css("height", "auto");
                            var x = s.parent().parent().height();
                            s.parent().css("height", x), s.css("height", x)
                        }
                        if ("scrollTo" in b) u = parseInt(c.scrollTo);
                        else if ("scrollBy" in b) u += parseInt(c.scrollBy);
                        else if ("destroy" in b) return v.remove(), w.remove(), void s.unwrap();
                        e(u, !1, !0)
                    }
                } else if (!(a.isPlainObject(b) && "destroy" in b)) {
                    c.height = "auto" == c.height ? s.parent().height() : c.height, u = a("<div></div>").addClass(c.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: c.width,
                        height: c.height
                    }), s.css({
                        overflow: "hidden",
                        width: c.width,
                        height: c.height
                    });
                    var w = a("<div></div>").addClass(c.railClass).css({
                            width: c.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: c.alwaysVisible && c.railVisible ? "block" : "none",
                            "border-radius": c.railBorderRadius,
                            background: c.railColor,
                            opacity: c.railOpacity,
                            zIndex: 90
                        }),
                        v = a("<div></div>").addClass(c.barClass).css({
                            background: c.color,
                            width: c.size,
                            position: "absolute",
                            top: 0,
                            opacity: c.opacity,
                            display: c.alwaysVisible ? "block" : "none",
                            "border-radius": c.borderRadius,
                            BorderRadius: c.borderRadius,
                            MozBorderRadius: c.borderRadius,
                            WebkitBorderRadius: c.borderRadius,
                            zIndex: 99
                        }),
                        x = "right" == c.position ? {
                            right: c.distance
                        } : {
                            left: c.distance
                        };
                    w.css(x), v.css(x), s.wrap(u), s.parent().append(v), s.parent().append(w), c.railDraggable && v.bind("mousedown", function(b) {
                        var c = a(document);
                        return l = !0, t = parseFloat(v.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function(a) {
                            currTop = t + a.pageY - pageY, v.css("top", currTop), e(0, v.position().top, !1)
                        }), c.bind("mouseup.slimscroll", function() {
                            l = !1, i(), c.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(a) {
                        return a.stopPropagation(), a.preventDefault(), !1
                    }), w.hover(function() {
                        h()
                    }, function() {
                        i()
                    }), v.hover(function() {
                        k = !0
                    }, function() {
                        k = !1
                    }), s.hover(function() {
                        j = !0, h(), i()
                    }, function() {
                        j = !1, i()
                    }), s.bind("touchstart", function(a) {
                        a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY)
                    }), s.bind("touchmove", function(a) {
                        r || a.originalEvent.preventDefault(), a.originalEvent.touches.length && (e((n - a.originalEvent.touches[0].pageY) / c.touchScrollStep, !0), n = a.originalEvent.touches[0].pageY)
                    }), g(), "bottom" === c.start ? (v.css({
                        top: s.outerHeight() - v.outerHeight()
                    }), e(0, !0)) : "top" !== c.start && (e(a(c.start).position().top, null, !0), c.alwaysVisible || v.hide()), f()
                }
            }), this
        }
    }), a.fn.extend({
        slimscroll: a.fn.slimScroll
    })
}(jQuery),
function(a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function e(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }

    function f(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }
        var e, f = a(b).data(),
            g = {},
            h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
        return g
    }

    function g(b) {
        var c = {};
        if (o[b] || (b = b.split("-")[0], o[b])) {
            var d = o[b];
            return a.each(n, function(a, b) {
                b in d && (c[b] = d[b])
            }), c
        }
    }
    var h = a(window),
        i = function() {
            var b = {
                get: function(a) {
                    return this.slice(a)[0]
                },
                contains: function(a) {
                    for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)
                        if (this[c].valueOf() === b) return c;
                    return -1
                },
                remove: function(a) {
                    this.splice(a, 1)
                },
                replace: function(b) {
                    b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var a = new i;
                    return a.replace(this), a
                }
            };
            return function() {
                var c = [];
                return c.push.apply(c, arguments), a.extend(c, b), c
            }
        }(),
        j = function(b, c) {
            this.dates = new i, this.viewDate = d(), this.focusDate = null, this._process_options(c), this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(p.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today, tfoot th.clear").attr("colspan", function(a, b) {
                return parseInt(b) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    j.prototype = {
        constructor: j,
        _process_options: function(b) {
            this._o = a.extend({}, this._o, b);
            var c = this.o = a.extend({}, this._o),
                d = c.language;
            switch (o[d] || (d = d.split("-")[0], o[d] || (d = m.language)), c.language = d, c.startView) {
                case 2:
                case "decade":
                    c.startView = 2;
                    break;
                case 1:
                case "year":
                    c.startView = 1;
                    break;
                default:
                    c.startView = 0
            }
            switch (c.minViewMode) {
                case 1:
                case "months":
                    c.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    c.minViewMode = 2;
                    break;
                default:
                    c.minViewMode = 0
            }
            c.startView = Math.max(c.startView, c.minViewMode), c.multidate !== !0 && (c.multidate = Number(c.multidate) || !1, c.multidate = c.multidate !== !1 ? Math.max(0, c.multidate) : 1), c.multidateSeparator = String(c.multidateSeparator), c.weekStart %= 7, c.weekEnd = (c.weekStart + 6) % 7;
            var e = p.parseFormat(c.format);
            c.startDate !== -1 / 0 && (c.startDate = c.startDate ? c.startDate instanceof Date ? this._local_to_utc(this._zero_time(c.startDate)) : p.parseDate(c.startDate, e, c.language) : -1 / 0), 1 / 0 !== c.endDate && (c.endDate = c.endDate ? c.endDate instanceof Date ? this._local_to_utc(this._zero_time(c.endDate)) : p.parseDate(c.endDate, e, c.language) : 1 / 0), c.daysOfWeekDisabled = c.daysOfWeekDisabled || [], a.isArray(c.daysOfWeekDisabled) || (c.daysOfWeekDisabled = c.daysOfWeekDisabled.split(/[,\s]*/)), c.daysOfWeekDisabled = a.map(c.daysOfWeekDisabled, function(a) {
                return parseInt(a, 10)
            });
            var f = String(c.orientation).toLowerCase().split(/\s+/g),
                g = c.orientation.toLowerCase();
            if (f = a.grep(f, function(a) {
                    return /^auto|left|right|top|bottom$/.test(a)
                }), c.orientation = {
                    x: "auto",
                    y: "auto"
                }, g && "auto" !== g)
                if (1 === f.length) switch (f[0]) {
                    case "top":
                    case "bottom":
                        c.orientation.y = f[0];
                        break;
                    case "left":
                    case "right":
                        c.orientation.x = f[0]
                } else g = a.grep(f, function(a) {
                    return /^left|right$/.test(a)
                }), c.orientation.x = g[0] || "auto", g = a.grep(f, function(a) {
                    return /^top|bottom$/.test(a)
                }), c.orientation.y = g[0] || "auto";
                else;
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d)
        },
        _unapplyEvents: function(a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e)
        },
        _buildEvents: function() {
            this.isInput ? this._events = [
                [this.element, {
                    focus: a.proxy(this.show, this),
                    keyup: a.proxy(function(b) {
                        -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: a.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), {
                    focus: a.proxy(this.show, this),
                    keyup: a.proxy(function(b) {
                        -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: a.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: a.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: a.proxy(this.show, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function(a) {
                    this._focused_from = a.target
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: a.proxy(this.click, this)
                }],
                [a(window), {
                    resize: a.proxy(this.place, this)
                }],
                [a(document), {
                    "mousedown touchstart": a.proxy(function(a) {
                        this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(b, c) {
            var d = c || this.dates.get(-1),
                e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function(a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
                    var c = this.dates.get(a);
                    return p.formatDate(c, b, this.o.language)
                }, this)
            })
        },
        show: function() {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
        },
        hide: function() {
            this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        },
        remove: function() {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
        },
        _utc_to_local: function(a) {
            return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
        },
        _local_to_utc: function(a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        },
        _zero_time: function(a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        },
        _zero_utc_time: function(a) {
            return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
        },
        getDates: function() {
            return a.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return a.map(this.dates, function(a) {
                return new Date(a)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            return new Date(this.dates.get(-1))
        },
        setDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, b), this._trigger("changeDate"), this.setValue()
        },
        setUTCDates: function() {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
        },
        setDate: e("setDates"),
        setUTCDate: e("setUTCDates"),
        setValue: function() {
            var a = this.getFormattedDate();
            this.isInput ? this.element.val(a).change() : this.component && this.element.find("input").val(a).change()
        },
        getFormattedDate: function(c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function(a) {
                return p.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(a) {
            this._process_options({
                startDate: a
            }), this.update(), this.updateNavArrows()
        },
        setEndDate: function(a) {
            this._process_options({
                endDate: a
            }), this.update(), this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(a) {
            this._process_options({
                daysOfWeekDisabled: a
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var b = this.picker.outerWidth(),
                    c = this.picker.outerHeight(),
                    d = 10,
                    e = h.width(),
                    f = h.height(),
                    g = h.scrollTop(),
                    i = [];
                this.element.parents().each(function() {
                    var b = a(this).css("z-index");
                    "auto" !== b && 0 !== b && i.push(parseInt(b))
                });
                var j = Math.max.apply(Math, i) + 10,
                    k = this.component ? this.component.parent().offset() : this.element.offset(),
                    l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    n = k.left,
                    o = k.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : (this.picker.addClass("datepicker-orient-left"), k.left < 0 ? n -= k.left - d : k.left + b > e && (n = e - b - d));
                var p, q, r = this.o.orientation.y;
                "auto" === r && (p = -g + k.top - c, q = g + f - (k.top + l + c), r = Math.max(p, q) === q ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + r), "top" === r ? o += l : o -= c + parseInt(this.picker.css("padding-top")), this.picker.css({
                    top: o,
                    left: n,
                    zIndex: j
                })
            }
        },
        _allow_update: !0,
        update: function() {
            if (this._allow_update) {
                var b = this.dates.copy(),
                    c = [],
                    d = !1;
                arguments.length ? (a.each(arguments, a.proxy(function(a, b) {
                    b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
                }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function(a) {
                    return p.parseDate(a, this.o.format, this.o.language)
                }, this)), c = a.grep(c, a.proxy(function(a) {
                    return a < this.o.startDate || a > this.o.endDate || !a
                }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill()
            }
        },
        fillDow: function() {
            var a = this.o.weekStart,
                b = "<tr>";
            if (this.o.calendarWeeks) {
                var c = '<th class="cw">&nbsp;</th>';
                b += c, this.picker.find(".datepicker-days thead tr:first-child").prepend(c)
            }
            for (; a < this.o.weekStart + 7;) b += '<th class="dow">' + o[this.o.language].daysMin[a++ % 7] + "</th>";
            b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
        },
        fillMonths: function() {
            for (var a = "", b = 0; 12 > b;) a += '<span class="month">' + o[this.o.language].monthsShort[b++] + "</span>";
            this.picker.find(".datepicker-months td").html(a)
        },
        setRange: function(b) {
            b && b.length ? this.range = a.map(b, function(a) {
                return a.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function(b) {
            var c = [],
                d = this.viewDate.getUTCFullYear(),
                e = this.viewDate.getUTCMonth(),
                f = new Date;
            return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > e) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === f.getFullYear() && b.getUTCMonth() === f.getMonth() && b.getUTCDate() === f.getDate() && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), (b.valueOf() < this.o.startDate || b.valueOf() > this.o.endDate || -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled)) && c.push("disabled"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected")), c
        },
        fill: function() {
            var d, e = new Date(this.viewDate),
                f = e.getUTCFullYear(),
                g = e.getUTCMonth(),
                h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                i = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                j = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                k = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                l = o[this.o.language].today || o.en.today || "",
                m = o[this.o.language].clear || o.en.clear || "";
            if (!isNaN(f) && !isNaN(g)) {
                this.picker.find(".datepicker-days thead th.datepicker-switch").text(o[this.o.language].months[g] + " " + f), this.picker.find("tfoot th.today").text(l).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(m).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var n = c(f, g - 1, 28),
                    q = p.getDaysInMonth(n.getUTCFullYear(), n.getUTCMonth());
                n.setUTCDate(q), n.setUTCDate(q - (n.getUTCDay() - this.o.weekStart + 7) % 7);
                var r = new Date(n);
                r.setUTCDate(r.getUTCDate() + 42), r = r.valueOf();
                for (var s, t = []; n.valueOf() < r;) {
                    if (n.getUTCDay() === this.o.weekStart && (t.push("<tr>"), this.o.calendarWeeks)) {
                        var u = new Date(+n + (this.o.weekStart - n.getUTCDay() - 7) % 7 * 864e5),
                            v = new Date(Number(u) + (11 - u.getUTCDay()) % 7 * 864e5),
                            w = new Date(Number(w = c(v.getUTCFullYear(), 0, 1)) + (11 - w.getUTCDay()) % 7 * 864e5),
                            x = (v - w) / 864e5 / 7 + 1;
                        t.push('<td class="cw">' + x + "</td>")
                    }
                    if (s = this.getClassNames(n), s.push("day"), this.o.beforeShowDay !== a.noop) {
                        var y = this.o.beforeShowDay(this._utc_to_local(n));
                        y === b ? y = {} : "boolean" == typeof y ? y = {
                            enabled: y
                        } : "string" == typeof y && (y = {
                            classes: y
                        }), y.enabled === !1 && s.push("disabled"), y.classes && (s = s.concat(y.classes.split(/\s+/))), y.tooltip && (d = y.tooltip)
                    }
                    s = a.unique(s), t.push('<td class="' + s.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + n.getUTCDate() + "</td>"), d = null, n.getUTCDay() === this.o.weekEnd && t.push("</tr>"), n.setUTCDate(n.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(t.join(""));
                var z = this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active");
                a.each(this.dates, function(a, b) {
                    b.getUTCFullYear() === f && z.eq(b.getUTCMonth()).addClass("active")
                }), (h > f || f > j) && z.addClass("disabled"), f === h && z.slice(0, i).addClass("disabled"), f === j && z.slice(k + 1).addClass("disabled"), t = "", f = 10 * parseInt(f / 10, 10);
                var A = this.picker.find(".datepicker-years").find("th:eq(1)").text(f + "-" + (f + 9)).end().find("td");
                f -= 1;
                for (var B, C = a.map(this.dates, function(a) {
                        return a.getUTCFullYear()
                    }), D = -1; 11 > D; D++) B = ["year"], -1 === D ? B.push("old") : 10 === D && B.push("new"), -1 !== a.inArray(f, C) && B.push("active"), (h > f || f > j) && B.push("disabled"), t += '<span class="' + B.join(" ") + '">' + f + "</span>", f += 1;
                A.html(t)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var a = new Date(this.viewDate),
                    b = a.getUTCFullYear(),
                    c = a.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        }), this.picker.find(".next").css(1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && b <= this.o.startDate.getUTCFullYear() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        }), this.picker.find(".next").css(1 / 0 !== this.o.endDate && b >= this.o.endDate.getUTCFullYear() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(b) {
            b.preventDefault();
            var d, e, f, g = a(b.target).closest("span, td, th");
            if (1 === g.length) switch (g[0].nodeName.toLowerCase()) {
                case "th":
                    switch (g[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var h = p.modes[this.viewMode].navStep * ("prev" === g[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            var i = new Date;
                            i = c(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0), this.showMode(-2);
                            var j = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(i, j);
                            break;
                        case "clear":
                            var k;
                            this.isInput ? k = this.element : this.component && (k = this.element.find("input")), k && k.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                    }
                    break;
                case "span":
                    g.is(".disabled") || (this.viewDate.setUTCDate(1), g.is(".month") ? (f = 1, e = g.parent().find("span").index(g), d = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(e), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(c(d, e, f))) : (f = 1, e = 0, d = parseInt(g.text(), 10) || 0, this.viewDate.setUTCFullYear(d), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(c(d, e, f))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    g.is(".day") && !g.is(".disabled") && (f = parseInt(g.text(), 10) || 1, d = this.viewDate.getUTCFullYear(), e = this.viewDate.getUTCMonth(), g.is(".old") ? 0 === e ? (e = 11, d -= 1) : e -= 1 : g.is(".new") && (11 === e ? (e = 0, d += 1) : e += 1), this._setDate(c(d, e, f)))
            }
            this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function(a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(), 1 === this.o.multidate && 0 === b || (-1 !== b ? this.dates.remove(b) : this.dates.push(a)), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), this._trigger("changeDate");
            var c;
            this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.change(), !this.o.autoclose || b && "date" !== b || this.hide()
        },
        moveMonth: function(a, c) {
            if (!a) return b;
            if (!c) return a;
            var d, e, f = new Date(a.valueOf()),
                g = f.getUTCDate(),
                h = f.getUTCMonth(),
                i = Math.abs(c);
            if (c = c > 0 ? 1 : -1, 1 === i) e = -1 === c ? function() {
                return f.getUTCMonth() === h
            } : function() {
                return f.getUTCMonth() !== d
            }, d = h + c, f.setUTCMonth(d), (0 > d || d > 11) && (d = (d + 12) % 12);
            else {
                for (var j = 0; i > j; j++) f = this.moveMonth(f, c);
                d = f.getUTCMonth(), f.setUTCDate(g), e = function() {
                    return d !== f.getUTCMonth()
                }
            }
            for (; e();) f.setUTCDate(--g), f.setUTCMonth(d);
            return f
        },
        moveYear: function(a, b) {
            return this.moveMonth(a, 12 * b)
        },
        dateWithinRange: function(a) {
            return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function(a) {
            if (this.picker.is(":not(:visible)")) return void(27 === a.keyCode && this.show());
            var b, c, e, f = !1,
                g = this.focusDate || this.viewDate;
            switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    b = 37 === a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.dates.get(-1) || d(), b), e = this.moveYear(g, b), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveMonth(this.dates.get(-1) || d(), b), e = this.moveMonth(g, b), this._trigger("changeMonth", this.viewDate)) : (c = new Date(this.dates.get(-1) || d()), c.setUTCDate(c.getUTCDate() + b), e = new Date(g), e.setUTCDate(g.getUTCDate() + b)), this.dateWithinRange(c) && (this.focusDate = this.viewDate = e, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    b = 38 === a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveYear(this.dates.get(-1) || d(), b), e = this.moveYear(g, b), this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveMonth(this.dates.get(-1) || d(), b), e = this.moveMonth(g, b), this._trigger("changeMonth", this.viewDate)) : (c = new Date(this.dates.get(-1) || d()), c.setUTCDate(c.getUTCDate() + 7 * b), e = new Date(g), e.setUTCDate(g.getUTCDate() + 7 * b)), this.dateWithinRange(c) && (this.focusDate = this.viewDate = e, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    g = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(g), f = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (f) {
                this._trigger(this.dates.length ? "changeDate" : "clearDate");
                var h;
                this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.change()
            }
        },
        showMode: function(a) {
            a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + a))), this.picker.find(">div").hide().filter(".datepicker-" + p.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };
    var k = function(b, c) {
        this.element = a(b), this.inputs = a.map(c.inputs, function(a) {
            return a.jquery ? a[0] : a
        }), delete c.inputs, a(this.inputs).datepicker(c).bind("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) {
            return a(b).data("datepicker")
        }), this.updateDates()
    };
    k.prototype = {
        updateDates: function() {
            this.dates = a.map(this.pickers, function(a) {
                return a.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function() {
            var b = a.map(this.dates, function(a) {
                return a.valueOf()
            });
            a.each(this.pickers, function(a, c) {
                c.setRange(b)
            })
        },
        dateUpdated: function(b) {
            if (!this.updating) {
                this.updating = !0;
                var c = a(b.target).data("datepicker"),
                    d = c.getUTCDate(),
                    e = a.inArray(b.target, this.inputs),
                    f = this.inputs.length;
                if (-1 !== e) {
                    if (a.each(this.pickers, function(a, b) {
                            b.getUTCDate() || b.setUTCDate(d)
                        }), d < this.dates[e])
                        for (; e >= 0 && d < this.dates[e];) this.pickers[e--].setUTCDate(d);
                    else if (d > this.dates[e])
                        for (; f > e && d > this.dates[e];) this.pickers[e++].setUTCDate(d);
                    this.updateDates(), delete this.updating
                }
            }
        },
        remove: function() {
            a.map(this.pickers, function(a) {
                a.remove()
            }), delete this.element.data().datepicker
        }
    };
    var l = a.fn.datepicker;
    a.fn.datepicker = function(c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        return this.each(function() {
            var h = a(this),
                i = h.data("datepicker"),
                l = "object" == typeof c && c;
            if (!i) {
                var n = f(this, "date"),
                    o = a.extend({}, m, n, l),
                    p = g(o.language),
                    q = a.extend({}, m, p, n, l);
                if (h.is(".input-daterange") || q.inputs) {
                    var r = {
                        inputs: q.inputs || h.find("input").toArray()
                    };
                    h.data("datepicker", i = new k(this, a.extend(q, r)))
                } else h.data("datepicker", i = new j(this, q))
            }
            return "string" == typeof c && "function" == typeof i[c] && (e = i[c].apply(i, d), e !== b) ? !1 : void 0
        }), e !== b ? e : this
    };
    var m = a.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: a.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            daysOfWeekDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0
        },
        n = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = j;
    var o = a.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear"
            }
        },
        p = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            },
            getDaysInMonth: function(a, b) {
                return [31, p.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function(a) {
                var b = a.replace(this.validParts, "\x00").split("\x00"),
                    c = a.match(this.validParts);
                if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
                return {
                    separators: b,
                    parts: c
                }
            },
            parseDate: function(d, e, f) {
                function g() {
                    var a = this.slice(0, m[k].length),
                        b = m[k].slice(0, a.length);
                    return a === b
                }
                if (!d) return b;
                if (d instanceof Date) return d;
                "string" == typeof e && (e = p.parseFormat(e));
                var h, i, k, l = /([\-+]\d+)([dmwy])/,
                    m = d.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)) {
                    for (d = new Date, k = 0; k < m.length; k++) switch (h = l.exec(m[k]), i = parseInt(h[1]), h[2]) {
                        case "d":
                            d.setUTCDate(d.getUTCDate() + i);
                            break;
                        case "m":
                            d = j.prototype.moveMonth.call(j.prototype, d, i);
                            break;
                        case "w":
                            d.setUTCDate(d.getUTCDate() + 7 * i);
                            break;
                        case "y":
                            d = j.prototype.moveYear.call(j.prototype, d, i)
                    }
                    return c(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0)
                }
                m = d && d.match(this.nonpunctuation) || [], d = new Date;
                var n, q, r = {},
                    s = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    t = {
                        yyyy: function(a, b) {
                            return a.setUTCFullYear(b)
                        },
                        yy: function(a, b) {
                            return a.setUTCFullYear(2e3 + b)
                        },
                        m: function(a, b) {
                            if (isNaN(a)) return a;
                            for (b -= 1; 0 > b;) b += 12;
                            for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1);
                            return a
                        },
                        d: function(a, b) {
                            return a.setUTCDate(b)
                        }
                    };
                t.M = t.MM = t.mm = t.m, t.dd = t.d, d = c(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
                var u = e.parts.slice();
                if (m.length !== u.length && (u = a(u).filter(function(b, c) {
                        return -1 !== a.inArray(c, s)
                    }).toArray()), m.length === u.length) {
                    var v;
                    for (k = 0, v = u.length; v > k; k++) {
                        if (n = parseInt(m[k], 10), h = u[k], isNaN(n)) switch (h) {
                            case "MM":
                                q = a(o[f].months).filter(g), n = a.inArray(q[0], o[f].months) + 1;
                                break;
                            case "M":
                                q = a(o[f].monthsShort).filter(g), n = a.inArray(q[0], o[f].monthsShort) + 1
                        }
                        r[h] = n
                    }
                    var w, x;
                    for (k = 0; k < s.length; k++) x = s[k], x in r && !isNaN(r[x]) && (w = new Date(d), t[x](w, r[x]), isNaN(w) || (d = w))
                }
                return d
            },
            formatDate: function(b, c, d) {
                if (!b) return "";
                "string" == typeof c && (c = p.parseFormat(c));
                var e = {
                    d: b.getUTCDate(),
                    D: o[d].daysShort[b.getUTCDay()],
                    DD: o[d].days[b.getUTCDay()],
                    m: b.getUTCMonth() + 1,
                    M: o[d].monthsShort[b.getUTCMonth()],
                    MM: o[d].months[b.getUTCMonth()],
                    yy: b.getUTCFullYear().toString().substring(2),
                    yyyy: b.getUTCFullYear()
                };
                e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
                for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
                return b.join("")
            },
            headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    p.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + p.headTemplate + "<tbody></tbody>" + p.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + p.headTemplate + p.contTemplate + p.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = p, a.fn.datepicker.noConflict = function() {
        return a.fn.datepicker = l, this
    }, a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), c.datepicker("show"))
    }), a(function() {
        a('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery),
function(a) {
    a.fn.datepicker.dates["pt-BR"] = {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        clear: "Limpar"
    }
}(jQuery),
function(a) {
    function b(b) {
        if ("string" == typeof b.data) {
            var c = b.handler,
                d = b.data.toLowerCase().split(" ");
            b.handler = function(b) {
                if (this === b.target || !/textarea|select/i.test(b.target.nodeName) && "text" !== b.target.type) {
                    var e = "keypress" !== b.type && a.hotkeys.specialKeys[b.which],
                        f = String.fromCharCode(b.which).toLowerCase(),
                        g = "",
                        h = {};
                    b.altKey && "alt" !== e && (g += "alt+"), b.ctrlKey && "ctrl" !== e && (g += "ctrl+"), b.metaKey && !b.ctrlKey && "meta" !== e && (g += "meta+"), b.shiftKey && "shift" !== e && (g += "shift+"), e ? h[g + e] = !0 : (h[g + f] = !0, h[g + a.hotkeys.shiftNums[f]] = !0, "shift+" === g && (h[a.hotkeys.shiftNums[f]] = !0));
                    for (var i = 0, j = d.length; j > i; i++)
                        if (h[d[i]]) return c.apply(this, arguments)
                }
            }
        }
    }
    a.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta"
        },
        shiftNums: {
            "`": "~",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    }, a.each(["keydown", "keyup", "keypress"], function() {
        a.event.special[this] = {
            add: b
        }
    })
}(jQuery),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery)
}(this, function a(b, c) {
    "use strict";

    function d(a) {
        var b = q[o.locale];
        return b ? b[a] : q.en[a]
    }

    function e(a, c, d) {
        a.stopPropagation(), a.preventDefault();
        var e = b.isFunction(d) && d(a) === !1;
        e || c.modal("hide")
    }

    function f(a) {
        var b, c = 0;
        for (b in a) c++;
        return c
    }

    function g(a, c) {
        var d = 0;
        b.each(a, function(a, b) {
            c(a, b, d++)
        })
    }

    function h(a) {
        var c, d;
        if ("object" != typeof a) throw new Error("Please supply an object of options");
        if (!a.message) throw new Error("Please specify a message");
        return a = b.extend({}, o, a), a.buttons || (a.buttons = {}), a.backdrop = a.backdrop ? "static" : !1, c = a.buttons, d = f(c), g(c, function(a, e, f) {
            if (b.isFunction(e) && (e = c[a] = {
                    callback: e
                }), "object" !== b.type(e)) throw new Error("button with key " + a + " must be an object");
            e.label || (e.label = a), e.className || (e.className = 2 >= d && f === d - 1 ? "btn-primary" : "btn-default")
        }), a
    }

    function i(a, b) {
        var c = a.length,
            d = {};
        if (1 > c || c > 2) throw new Error("Invalid argument length");
        return 2 === c || "string" == typeof a[0] ? (d[b[0]] = a[0], d[b[1]] = a[1]) : d = a[0], d
    }

    function j(a, c, d) {
        return b.extend(!0, {}, a, i(c, d))
    }

    function k(a, b, c, d) {
        var e = {
            className: "bootbox-" + a,
            buttons: l.apply(null, b)
        };
        return m(j(e, d, c), b)
    }

    function l() {
        for (var a = {}, b = 0, c = arguments.length; c > b; b++) {
            var e = arguments[b],
                f = e.toLowerCase(),
                g = e.toUpperCase();
            a[f] = {
                label: d(g)
            }
        }
        return a
    }

    function m(a, b) {
        var d = {};
        return g(b, function(a, b) {
            d[b] = !0
        }), g(a.buttons, function(a) {
            if (d[a] === c) throw new Error("button key " + a + " is not allowed (options are " + b.join("\n") + ")")
        }), a
    }
    var n = {
            dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
            header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
            footer: "<div class='modal-footer'></div>",
            closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
            form: "<form class='bootbox-form'></form>",
            inputs: {
                text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
                textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
                email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
                select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
                checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
                date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
                time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
                number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
                password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
            }
        },
        o = {
            locale: "en",
            backdrop: !0,
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        },
        p = {};
    p.alert = function() {
        var a;
        if (a = k("alert", ["ok"], ["message", "callback"], arguments), a.callback && !b.isFunction(a.callback)) throw new Error("alert requires callback property to be a function when provided");
        return a.buttons.ok.callback = a.onEscape = function() {
            return b.isFunction(a.callback) ? a.callback() : !0
        }, p.dialog(a)
    }, p.confirm = function() {
        var a;
        if (a = k("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), a.buttons.cancel.callback = a.onEscape = function() {
                return a.callback(!1)
            }, a.buttons.confirm.callback = function() {
                return a.callback(!0)
            }, !b.isFunction(a.callback)) throw new Error("confirm requires a callback");
        return p.dialog(a)
    }, p.prompt = function() {
        var a, d, e, f, h, i, k;
        if (f = b(n.form), d = {
                className: "bootbox-prompt",
                buttons: l("cancel", "confirm"),
                value: "",
                inputType: "text"
            }, a = m(j(d, arguments, ["title", "callback"]), ["cancel", "confirm"]), i = a.show === c ? !0 : a.show, a.message = f, a.buttons.cancel.callback = a.onEscape = function() {
                return a.callback(null)
            }, a.buttons.confirm.callback = function() {
                var c;
                switch (a.inputType) {
                    case "text":
                    case "textarea":
                    case "email":
                    case "select":
                    case "date":
                    case "time":
                    case "number":
                    case "password":
                        c = h.val();
                        break;
                    case "checkbox":
                        var d = h.find("input:checked");
                        c = [], g(d, function(a, d) {
                            c.push(b(d).val())
                        })
                }
                return a.callback(c)
            }, a.show = !1, !a.title) throw new Error("prompt requires a title");
        if (!b.isFunction(a.callback)) throw new Error("prompt requires a callback");
        if (!n.inputs[a.inputType]) throw new Error("invalid prompt type");
        switch (h = b(n.inputs[a.inputType]), a.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                h.val(a.value);
                break;
            case "select":
                var o = {};
                if (k = a.inputOptions || [], !k.length) throw new Error("prompt with select requires options");
                g(k, function(a, d) {
                    var e = h;
                    if (d.value === c || d.text === c) throw new Error("given options in wrong format");
                    d.group && (o[d.group] || (o[d.group] = b("<optgroup/>").attr("label", d.group)), e = o[d.group]), e.append("<option value='" + d.value + "'>" + d.text + "</option>")
                }), g(o, function(a, b) {
                    h.append(b)
                }), h.val(a.value);
                break;
            case "checkbox":
                var q = b.isArray(a.value) ? a.value : [a.value];
                if (k = a.inputOptions || [], !k.length) throw new Error("prompt with checkbox requires options");
                if (!k[0].value || !k[0].text) throw new Error("given options in wrong format");
                h = b("<div/>"), g(k, function(c, d) {
                    var e = b(n.inputs[a.inputType]);
                    e.find("input").attr("value", d.value), e.find("label").append(d.text), g(q, function(a, b) {
                        b === d.value && e.find("input").prop("checked", !0)
                    }), h.append(e)
                })
        }
        return a.placeholder && h.attr("placeholder", a.placeholder), a.pattern && h.attr("pattern", a.pattern), f.append(h), f.on("submit", function(a) {
            a.preventDefault(), a.stopPropagation(), e.find(".btn-primary").click()
        }), e = p.dialog(a), e.off("shown.bs.modal"), e.on("shown.bs.modal", function() {
            h.focus()
        }), i === !0 && e.modal("show"), e
    }, p.dialog = function(a) {
        a = h(a);
        var c = b(n.dialog),
            d = c.find(".modal-dialog"),
            f = c.find(".modal-body"),
            i = a.buttons,
            j = "",
            k = {
                onEscape: a.onEscape
            };
        if (g(i, function(a, b) {
                j += "<button data-bb-handler='" + a + "' type='button' class='btn " + b.className + "'>" + b.label + "</button>", k[a] = b.callback
            }), f.find(".bootbox-body").html(a.message), a.animate === !0 && c.addClass("fade"), a.className && c.addClass(a.className), "large" === a.size && d.addClass("modal-lg"), "small" === a.size && d.addClass("modal-sm"), a.title && f.before(n.header), a.closeButton) {
            var l = b(n.closeButton);
            a.title ? c.find(".modal-header").prepend(l) : l.css("margin-top", "-10px").prependTo(f)
        }
        return a.title && c.find(".modal-title").html(a.title), j.length && (f.after(n.footer), c.find(".modal-footer").html(j)), c.on("hidden.bs.modal", function(a) {
            a.target === this && c.remove()
        }), c.on("shown.bs.modal", function() {
            c.find(".btn-primary:first").focus()
        }), c.on("escape.close.bb", function(a) {
            k.onEscape && e(a, c, k.onEscape)
        }), c.on("click", ".modal-footer button", function(a) {
            var d = b(this).data("bb-handler");
            e(a, c, k[d])
        }), c.on("click", ".bootbox-close-button", function(a) {
            e(a, c, k.onEscape)
        }), c.on("keyup", function(a) {
            27 === a.which && c.trigger("escape.close.bb")
        }), b(a.container).append(c), c.modal({
            backdrop: a.backdrop,
            keyboard: !1,
            show: !1
        }), a.show && c.modal("show"), c
    }, p.setDefaults = function() {
        var a = {};
        2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0], b.extend(o, a)
    }, p.hideAll = function() {
        return b(".bootbox").modal("hide"), p
    };
    var q = {
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };
    return p.init = function(c) {
        return a(c || b)
    }, p
}), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
    var b = {
            attr: function(a, b, c) {
                var d, e = {},
                    f = this.msieversion(),
                    g = new RegExp("^" + b, "i");
                if ("undefined" == typeof a || "undefined" == typeof a[0]) return {};
                for (var h in a[0].attributes)
                    if (d = a[0].attributes[h], "undefined" != typeof d && null !== d && (!f || f >= 8 || d.specified) && g.test(d.name)) {
                        if ("undefined" != typeof c && new RegExp(c + "$", "i").test(d.name)) return !0;
                        e[this.camelize(d.name.replace(b, ""))] = this.deserializeValue(d.value)
                    }
                return "undefined" == typeof c ? e : !1
            },
            setAttr: function(a, b, c, d) {
                a[0].setAttribute(this.dasherize(b + c), String(d))
            },
            get: function(a, b) {
                for (var c = 0, d = (b || "").split("."); this.isObject(a) || this.isArray(a);)
                    if (a = a[d[c++]], c === d.length) return a;
                return void 0
            },
            hash: function(a) {
                return String(Math.random()).substring(2, a ? a + 2 : 9)
            },
            isArray: function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            isObject: function(a) {
                return a === Object(a)
            },
            deserializeValue: function(b) {
                var c;
                try {
                    return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
                } catch (d) {
                    return b
                }
            },
            camelize: function(a) {
                return a.replace(/-+(.)?/g, function(a, b) {
                    return b ? b.toUpperCase() : ""
                })
            },
            dasherize: function(a) {
                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            msieversion: function() {
                var a = window.navigator.userAgent,
                    b = a.indexOf("MSIE ");
                return b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : 0
            }
        },
        c = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function() {},
            errorsContainer: function() {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        d = function() {};
    d.prototype = {
        asyncSupport: !1,
        actualizeOptions: function() {
            return this.options = this.OptionsFactory.get(this), this
        },
        validateThroughValidator: function(a, b, c) {
            return window.ParsleyValidator.validate(a, b, c)
        },
        subscribe: function(b, c) {
            return a.listenTo(this, b.toLowerCase(), c), this
        },
        unsubscribe: function(b) {
            return a.unsubscribeTo(this, b.toLowerCase()), this
        },
        reset: function() {
            if ("ParsleyForm" !== this.__class__) return a.emit("parsley:field:reset", this);
            for (var b = 0; b < this.fields.length; b++) a.emit("parsley:field:reset", this.fields[b]);
            a.emit("parsley:form:reset", this)
        },
        destroy: function() {
            if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void a.emit("parsley:field:destroy", this);
            for (var b = 0; b < this.fields.length; b++) this.fields[b].destroy();
            this.$element.removeData("Parsley"), a.emit("parsley:form:destroy", this)
        }
    };
    var e = function() {
        var a = {},
            b = function(a) {
                this.__class__ = "Validator", this.__version__ = "1.0.1", this.options = a || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
            };
        b.prototype = {
            constructor: b,
            validate: function(a, b, c) {
                if ("string" != typeof a && "object" != typeof a) throw new Error("You must validate an object or a string");
                return "string" == typeof a || g(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
            },
            bind: function(a, b) {
                if ("object" != typeof a) throw new Error("Must bind a Constraint to an object");
                return a[this.bindingKey] = new c(b), this
            },
            unbind: function(a) {
                return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
            },
            isBinded: function(a) {
                return "undefined" != typeof a[this.bindingKey]
            },
            getBinded: function(a) {
                return this.isBinded(a) ? a[this.bindingKey] : null
            },
            _validateString: function(a, b, c) {
                var f, h = [];
                g(b) || (b = [b]);
                for (var i = 0; i < b.length; i++) {
                    if (!(b[i] instanceof e)) throw new Error("You must give an Assert or an Asserts array to validate a string");
                    f = b[i].check(a, c), f instanceof d && h.push(f)
                }
                return h.length ? h : !0
            },
            _validateObject: function(a, b, d) {
                if ("object" != typeof b) throw new Error("You must give a constraint to validate an object");
                return b instanceof c ? b.check(a, d) : new c(b).check(a, d)
            },
            _validateBindedObject: function(a, b) {
                return a[this.bindingKey].check(a, b)
            }
        }, b.errorCode = {
            must_be_a_string: "must_be_a_string",
            must_be_an_array: "must_be_an_array",
            must_be_a_number: "must_be_a_number",
            must_be_a_string_or_array: "must_be_a_string_or_array"
        };
        var c = function(a, b) {
            if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a) try {
                this._bootstrap(a)
            } catch (c) {
                throw new Error("Should give a valid mapping object to Constraint", c, a)
            }
        };
        c.prototype = {
            constructor: c,
            check: function(a, b) {
                var c, d = {};
                for (var h in this.nodes) {
                    for (var i = !1, j = this.get(h), k = g(j) ? j : [j], l = k.length - 1; l >= 0; l--) "Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
                    if (this.has(h, a) || this.options.strict || i) try {
                        this.has(h, this.options.strict || i ? a : void 0) || (new e).HaveProperty(h).validate(a), c = this._check(h, a[h], b), (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c)
                    } catch (m) {
                        d[h] = m
                    }
                }
                return f(d) ? !0 : d
            },
            add: function(a, b) {
                if (b instanceof e || g(b) && b[0] instanceof e) return this.nodes[a] = b, this;
                if ("object" == typeof b && !g(b)) return this.nodes[a] = b instanceof c ? b : new c(b), this;
                throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
            },
            has: function(a, b) {
                return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
            },
            get: function(a, b) {
                return this.has(a) ? this.nodes[a] : b || null
            },
            remove: function(a) {
                var b = [];
                for (var c in this.nodes) c !== a && (b[c] = this.nodes[c]);
                return this.nodes = b, this
            },
            _bootstrap: function(a) {
                if (a instanceof c) return this.nodes = a.nodes;
                for (var b in a) this.add(b, a[b])
            },
            _check: function(a, b, d) {
                if (this.nodes[a] instanceof e) return this._checkAsserts(b, [this.nodes[a]], d);
                if (g(this.nodes[a])) return this._checkAsserts(b, this.nodes[a], d);
                if (this.nodes[a] instanceof c) return this.nodes[a].check(b, d);
                throw new Error("Invalid node", this.nodes[a])
            },
            _checkAsserts: function(a, b, c) {
                for (var d, e = [], f = 0; f < b.length; f++) d = b[f].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
                return e
            }
        };
        var d = function(a, b, c) {
            if (this.__class__ = "Violation", !(a instanceof e)) throw new Error("Should give an assertion implementing the Assert interface");
            this.assert = a, this.value = b, "undefined" != typeof c && (this.violation = c)
        };
        d.prototype = {
            show: function() {
                var a = {
                    assert: this.assert.__class__,
                    value: this.value
                };
                return this.violation && (a.violation = this.violation), a
            },
            __toString: function() {
                return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
            },
            getViolation: function() {
                var a, b;
                for (a in this.violation) b = this.violation[a];
                return {
                    constraint: a,
                    expected: b
                }
            }
        };
        var e = function(a) {
            this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof a && this.addGroup(a)
        };
        e.prototype = {
            construct: e,
            requiresValidation: function(a) {
                return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
            },
            check: function(a, b) {
                if (this.requiresValidation(b)) try {
                    return this.validate(a, b)
                } catch (c) {
                    return c
                }
            },
            hasGroup: function(a) {
                return g(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
            },
            hasOneOf: function(a) {
                for (var b = 0; b < a.length; b++)
                    if (this.hasGroup(a[b])) return !0;
                return !1
            },
            hasGroups: function() {
                return this.groups.length > 0
            },
            addGroup: function(a) {
                return g(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
            },
            removeGroup: function(a) {
                for (var b = [], c = 0; c < this.groups.length; c++) a !== this.groups[c] && b.push(this.groups[c]);
                return this.groups = b, this
            },
            addGroups: function(a) {
                for (var b = 0; b < a.length; b++) this.addGroup(a[b]);
                return this
            },
            HaveProperty: function(a) {
                return this.__class__ = "HaveProperty", this.node = a, this.validate = function(a) {
                    if ("undefined" == typeof a[this.node]) throw new d(this, a, {
                        value: this.node
                    });
                    return !0
                }, this
            },
            Blank: function() {
                return this.__class__ = "Blank", this.validate = function(a) {
                    if ("string" != typeof a) throw new d(this, a, {
                        value: b.errorCode.must_be_a_string
                    });
                    if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
                    return !0
                }, this
            },
            Callback: function(a) {
                if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a) throw new Error("Callback must be instanciated with a function");
                return this.fn = a, this.validate = function(a) {
                    var b = this.fn.apply(this, [a].concat(this.arguments));
                    if (!0 !== b) throw new d(this, a, {
                        result: b
                    });
                    return !0
                }, this
            },
            Choice: function(a) {
                if (this.__class__ = "Choice", !g(a) && "function" != typeof a) throw new Error("Choice must be instanciated with an array or a function");
                return this.list = a, this.validate = function(a) {
                    for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
                        if (a === b[c]) return !0;
                    throw new d(this, a, {
                        choices: b
                    })
                }, this
            },
            Collection: function(a) {
                return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1, this.validate = function(a, c) {
                    var e, h = new b,
                        i = 0,
                        j = {},
                        k = this.groups.length ? this.groups : c;
                    if (!g(a)) throw new d(this, a, {
                        value: b.errorCode.must_be_an_array
                    });
                    for (var l = 0; l < a.length; l++) e = this.constraint ? h.validate(a[l], this.constraint, k) : h.validate(a[l], k), f(e) || (j[i] = e), i++;
                    return f(j) ? !0 : j
                }, this
            },
            Count: function(a) {
                return this.__class__ = "Count", this.count = a, this.validate = function(a) {
                    if (!g(a)) throw new d(this, a, {
                        value: b.errorCode.must_be_an_array
                    });
                    var c = "function" == typeof this.count ? this.count(a) : this.count;
                    if (isNaN(Number(c))) throw new Error("Count must be a valid interger", c);
                    if (c !== a.length) throw new d(this, a, {
                        count: c
                    });
                    return !0
                }, this
            },
            Email: function() {
                return this.__class__ = "Email", this.validate = function(a) {
                    var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                    if ("string" != typeof a) throw new d(this, a, {
                        value: b.errorCode.must_be_a_string
                    });
                    if (!c.test(a)) throw new d(this, a);
                    return !0
                }, this
            },
            EqualTo: function(a) {
                if (this.__class__ = "EqualTo", "undefined" == typeof a) throw new Error("EqualTo must be instanciated with a value or a function");
                return this.reference = a, this.validate = function(a) {
                    var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
                    if (b !== a) throw new d(this, a, {
                        value: b
                    });
                    return !0
                }, this
            },
            GreaterThan: function(a) {
                if (this.__class__ = "GreaterThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
                return this.threshold = a, this.validate = function(a) {
                    if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                        value: b.errorCode.must_be_a_number
                    });
                    if (this.threshold >= a) throw new d(this, a, {
                        threshold: this.threshold
                    });
                    return !0
                }, this
            },
            GreaterThanOrEqual: function(a) {
                if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
                return this.threshold = a, this.validate = function(a) {
                    if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                        value: b.errorCode.must_be_a_number
                    });
                    if (this.threshold > a) throw new d(this, a, {
                        threshold: this.threshold
                    });
                    return !0
                }, this
            },
            InstanceOf: function(a) {
                if (this.__class__ = "InstanceOf", "undefined" == typeof a) throw new Error("InstanceOf must be instanciated with a value");
                return this.classRef = a, this.validate = function(a) {
                    if (!0 != a instanceof this.classRef) throw new d(this, a, {
                        classRef: this.classRef
                    });
                    return !0
                }, this
            },
            Length: function(a) {
                if (this.__class__ = "Length", !a.min && !a.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                return this.min = a.min, this.max = a.max, this.validate = function(a) {
                    if ("string" != typeof a && !g(a)) throw new d(this, a, {
                        value: b.errorCode.must_be_a_string_or_array
                    });
                    if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min) throw new d(this, a, {
                        min: this.min,
                        max: this.max
                    });
                    if ("undefined" != typeof this.max && a.length > this.max) throw new d(this, a, {
                        max: this.max
                    });
                    if ("undefined" != typeof this.min && a.length < this.min) throw new d(this, a, {
                        min: this.min
                    });
                    return !0
                }, this
            },
            LessThan: function(a) {
                if (this.__class__ = "LessThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
                return this.threshold = a, this.validate = function(a) {
                    if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                        value: b.errorCode.must_be_a_number
                    });
                    if (this.threshold <= a) throw new d(this, a, {
                        threshold: this.threshold
                    });
                    return !0
                }, this
            },
            LessThanOrEqual: function(a) {
                if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
                return this.threshold = a, this.validate = function(a) {
                    if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                        value: b.errorCode.must_be_a_number
                    });
                    if (this.threshold < a) throw new d(this, a, {
                        threshold: this.threshold
                    });
                    return !0
                }, this
            },
            NotNull: function() {
                return this.__class__ = "NotNull", this.validate = function(a) {
                    if (null === a || "undefined" == typeof a) throw new d(this, a);
                    return !0
                }, this
            },
            NotBlank: function() {
                return this.__class__ = "NotBlank", this.validate = function(a) {
                    if ("string" != typeof a) throw new d(this, a, {
                        value: b.errorCode.must_be_a_string
                    });
                    if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
                    return !0
                }, this
            },
            Null: function() {
                return this.__class__ = "Null", this.validate = function(a) {
                    if (null !== a) throw new d(this, a);
                    return !0
                }, this
            },
            Range: function(a, b) {
                if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b) throw new Error("Range assert expects min and max values");
                return this.min = a, this.max = b, this.validate = function(a) {
                    try {
                        return "string" == typeof a && isNaN(Number(a)) || g(a) ? (new e).Length({
                            min: this.min,
                            max: this.max
                        }).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
                    } catch (b) {
                        throw new d(this, a, b.violation)
                    }
                    return !0
                }, this
            },
            Regexp: function(a, c) {
                if (this.__class__ = "Regexp", "undefined" == typeof a) throw new Error("You must give a regexp");
                return this.regexp = a, this.flag = c || "", this.validate = function(a) {
                    if ("string" != typeof a) throw new d(this, a, {
                        value: b.errorCode.must_be_a_string
                    });
                    if (!new RegExp(this.regexp, this.flag).test(a)) throw new d(this, a, {
                        regexp: this.regexp,
                        flag: this.flag
                    });
                    return !0
                }, this
            },
            Required: function() {
                return this.__class__ = "Required", this.validate = function(a) {
                    if ("undefined" == typeof a) throw new d(this, a);
                    try {
                        "string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === g(a) && (new e).Length({
                            min: 1
                        }).validate(a)
                    } catch (b) {
                        throw new d(this, a)
                    }
                    return !0
                }, this
            },
            Unique: function(a) {
                return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function(a) {
                    var c, e = [];
                    if (!g(a)) throw new d(this, a, {
                        value: b.errorCode.must_be_an_array
                    });
                    for (var f = 0; f < a.length; f++)
                        if (c = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof c) {
                            if (-1 !== e.indexOf(c)) throw new d(this, a, {
                                value: c
                            });
                            e.push(c)
                        }
                    return !0
                }, this
            }
        }, a.Assert = e, a.Validator = b, a.Violation = d, a.Constraint = c, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            if (null === this) throw new TypeError;
            var b = Object(this),
                c = b.length >>> 0;
            if (0 === c) return -1;
            var d = 0;
            if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
            for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                if (e in b && b[e] === a) return e;
            return -1
        });
        var f = function(a) {
                for (var b in a) return !1;
                return !0
            },
            g = function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            };
        return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
            return a
        }) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a, a
    }();
    e = "undefined" != typeof e ? e : "undefined" != typeof module ? module.exports : null;
    var f = function(a, b) {
        this.__class__ = "ParsleyValidator", this.Validator = e, this.locale = "en", this.init(a || {}, b || {})
    };
    f.prototype = {
        init: function(b, c) {
            this.catalog = c;
            for (var d in b) this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
            a.emit("parsley:validator:init")
        },
        setLocale: function(a) {
            if ("undefined" == typeof this.catalog[a]) throw new Error(a + " is not available in the catalog");
            return this.locale = a, this
        },
        addCatalog: function(a, b, c) {
            return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
        },
        addMessage: function(a, b, c) {
            return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
        },
        validate: function() {
            return (new this.Validator.Validator).validate.apply(new e.Validator, arguments)
        },
        addValidator: function(b, c, d, f) {
            return this.validators[b.toLowerCase()] = function(b) {
                return a.extend((new e.Assert).Callback(c, b), {
                    priority: d,
                    requirementsTransformer: f
                })
            }, this
        },
        updateValidator: function(a, b, c, d) {
            return this.addValidator(a, b, c, d)
        },
        removeValidator: function(a) {
            return delete this.validators[a], this
        },
        getErrorMessage: function(a) {
            var b;
            return b = "type" === a.name ? this.catalog[this.locale][a.name][a.requirements] : this.formatMessage(this.catalog[this.locale][a.name], a.requirements), "" !== b ? b : this.catalog[this.locale].defaultMessage
        },
        formatMessage: function(a, b) {
            if ("object" == typeof b) {
                for (var c in b) a = this.formatMessage(a, b[c]);
                return a
            }
            return "string" == typeof a ? a.replace(new RegExp("%s", "i"), b) : ""
        },
        validators: {
            notblank: function() {
                return a.extend((new e.Assert).NotBlank(), {
                    priority: 2
                })
            },
            required: function() {
                return a.extend((new e.Assert).Required(), {
                    priority: 512
                })
            },
            type: function(b) {
                var c;
                switch (b) {
                    case "email":
                        c = (new e.Assert).Email();
                        break;
                    case "range":
                    case "number":
                        c = (new e.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                        break;
                    case "integer":
                        c = (new e.Assert).Regexp("^-?\\d+$");
                        break;
                    case "digits":
                        c = (new e.Assert).Regexp("^\\d+$");
                        break;
                    case "alphanum":
                        c = (new e.Assert).Regexp("^\\w+$", "i");
                        break;
                    case "url":
                        c = (new e.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,24}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
                        break;
                    default:
                        throw new Error("validator type `" + b + "` is not supported")
                }
                return a.extend(c, {
                    priority: 256
                })
            },
            pattern: function(b) {
                var c = "";
                return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), a.extend((new e.Assert).Regexp(b, c), {
                    priority: 64
                })
            },
            minlength: function(b) {
                return a.extend((new e.Assert).Length({
                    min: b
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            maxlength: function(b) {
                return a.extend((new e.Assert).Length({
                    max: b
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            length: function(b) {
                return a.extend((new e.Assert).Length({
                    min: b[0],
                    max: b[1]
                }), {
                    priority: 32
                })
            },
            mincheck: function(a) {
                return this.minlength(a)
            },
            maxcheck: function(a) {
                return this.maxlength(a)
            },
            check: function(a) {
                return this.length(a)
            },
            min: function(b) {
                return a.extend((new e.Assert).GreaterThanOrEqual(b), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            max: function(b) {
                return a.extend((new e.Assert).LessThanOrEqual(b), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
                    }
                })
            },
            range: function(b) {
                return a.extend((new e.Assert).Range(b[0], b[1]), {
                    priority: 32,
                    requirementsTransformer: function() {
                        for (var a = 0; a < b.length; a++) b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
                        return b
                    }
                })
            },
            equalto: function(b) {
                return a.extend((new e.Assert).EqualTo(b), {
                    priority: 256,
                    requirementsTransformer: function() {
                        return a(b).length ? a(b).val() : b
                    }
                })
            }
        }
    };
    var g = function() {
        this.__class__ = "ParsleyUI"
    };
    g.prototype = {
        listen: function() {
            return a.listen("parsley:form:init", this, this.setupForm), a.listen("parsley:field:init", this, this.setupField), a.listen("parsley:field:validated", this, this.reflow), a.listen("parsley:form:validated", this, this.focus), a.listen("parsley:field:reset", this, this.reset), a.listen("parsley:form:destroy", this, this.destroy), a.listen("parsley:field:destroy", this, this.destroy), this
        },
        reflow: function(a) {
            if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
                var b = this._diff(a.validationResult, a._ui.lastValidationResult);
                a._ui.lastValidationResult = a.validationResult, a._ui.validatedOnce = !0, this.manageStatusClass(a), this.manageErrorsMessages(a, b), this.actualizeTriggers(a), (b.kept.length || b.added.length) && "undefined" == typeof a._ui.failedOnce && this.manageFailingFieldTrigger(a)
            }
        },
        getErrorsMessages: function(a) {
            if (!0 === a.validationResult) return [];
            for (var b = [], c = 0; c < a.validationResult.length; c++) b.push(this._getErrorMessage(a, a.validationResult[c].assert));
            return b
        },
        manageStatusClass: function(a) {
            !0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
        },
        manageErrorsMessages: function(b, c) {
            if ("undefined" == typeof b.options.errorsMessagesDisabled) {
                if ("undefined" != typeof b.options.errorMessage) return c.added.length || c.kept.length ? (0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var d = 0; d < c.removed.length; d++) this.removeError(b, c.removed[d].assert.name, !0);
                for (d = 0; d < c.added.length; d++) this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
                for (d = 0; d < c.kept.length; d++) this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
            }
        },
        addError: function(b, c, d, e, f) {
            b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))), !0 !== f && this._errorClass(b)
        },
        updateError: function(a, b, c, d, e) {
            a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)), !0 !== e && this._errorClass(a)
        },
        removeError: function(a, b, c) {
            a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(), !0 !== c && this.manageStatusClass(a)
        },
        focus: function(a) {
            if (!0 === a.validationResult || "none" === a.options.focus) return a._focusedField = null;
            a._focusedField = null;
            for (var b = 0; b < a.fields.length; b++)
                if (!0 !== a.fields[b].validationResult && a.fields[b].validationResult.length > 0 && "undefined" == typeof a.fields[b].options.noFocus) {
                    if ("first" === a.options.focus) return a._focusedField = a.fields[b].$element, a._focusedField.focus();
                    a._focusedField = a.fields[b].$element
                }
            return null === a._focusedField ? null : a._focusedField.focus()
        },
        _getErrorMessage: function(a, b) {
            var c = b.name + "Message";
            return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
        },
        _diff: function(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length; f++) {
                for (var g = !1, h = 0; h < b.length; h++)
                    if (a[f].assert.name === b[h].assert.name) {
                        g = !0;
                        break
                    }
                g ? e.push(a[f]) : d.push(a[f])
            }
            return {
                kept: e,
                added: d,
                removed: c ? [] : this._diff(b, a, !0).added
            }
        },
        setupForm: function(b) {
            b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)), !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
        },
        setupField: function(b) {
            var c = {
                active: !1
            };
            !1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + ("undefined" != typeof b.options.multiple ? "multiple-" + b.options.multiple : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, b.$element.is(b.options.excluded) || this._insertErrorWrapper(b), this.actualizeTriggers(b))
        },
        _manageClassHandler: function(b) {
            if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length) return a(b.options.classHandler);
            var c = b.options.classHandler(b);
            return "undefined" != typeof c && c.length ? c : "undefined" == typeof b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
        },
        _insertErrorWrapper: function(b) {
            var c;
            if ("string" == typeof b.options.errorsContainer) {
                if (a(b.options.errorsContainer).length) return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
                window.console && window.console.warn && window.console.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
            } else "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
            return "undefined" != typeof c && c.length ? c.append(b._ui.$errorsWrapper) : "undefined" == typeof b.options.multiple ? b.$element.after(b._ui.$errorsWrapper) : b.$element.parent().after(b._ui.$errorsWrapper)
        },
        actualizeTriggers: function(b) {
            var c = b.$element;
            if (b.options.multiple && (c = a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]')), c.off(".Parsley"), !1 !== b.options.trigger) {
                var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                "" !== d && c.on(d.split(" ").join(".Parsley ") + ".Parsley", a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b))
            }
        },
        eventValidate: function(a) {
            new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
        },
        manageFailingFieldTrigger: function(b) {
            return b._ui.failedOnce = !0, b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
                return new RegExp("change", "i").test(a(this).parsley().options.trigger || "") ? void 0 : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
            }), b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup", "i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
        },
        reset: function(a) {
            a.$element.off(".Parsley"), a.$element.off(".ParsleyFailedOnce"), "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(a), a._ui.validatedOnce = !1, a._ui.lastValidationResult = [], a._ui.validationInformationVisible = !1)
        },
        destroy: function(a) {
            this.reset(a), "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
        },
        _successClass: function(a) {
            a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
        },
        _errorClass: function(a) {
            a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
        },
        _resetClass: function(a) {
            a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
        }
    };
    var h = function(c, d, e, f) {
        this.__class__ = "OptionsFactory", this.__id__ = b.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = a.extend(!0, {}, c, d, e, {
            namespace: f
        })
    };
    h.prototype = {
        get: function(a) {
            if ("undefined" == typeof a.__class__) throw new Error("Parsley Instance expected");
            switch (a.__class__) {
                case "Parsley":
                    return this.staticOptions;
                case "ParsleyForm":
                    return this.getFormOptions(a);
                case "ParsleyField":
                case "ParsleyFieldMultiple":
                    return this.getFieldOptions(a);
                default:
                    throw new Error("Instance " + a.__class__ + " is not supported")
            }
        },
        getFormOptions: function(c) {
            return this.formOptions = b.attr(c.$element, this.staticOptions.namespace), a.extend({}, this.staticOptions, this.formOptions)
        },
        getFieldOptions: function(c) {
            return this.fieldOptions = b.attr(c.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof c.parent && (this.formOptions = this.getFormOptions(c.parent)), a.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
        }
    };
    var i = function(c, d) {
        if (this.__class__ = "ParsleyForm", this.__id__ = b.hash(4), "OptionsFactory" !== b.get(d, "__class__")) throw new Error("You must give an OptionsFactory instance");
        this.OptionsFactory = d, this.$element = a(c), this.validationResult = null, this.options = this.OptionsFactory.get(this)
    };
    i.prototype = {
        onSubmitValidate: function(b) {
            return this.validate(void 0, void 0, b), !1 === this.validationResult && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()), this
        },
        validate: function(b, c, d) {
            this.submitEvent = d, this.validationResult = !0;
            var e = [];
            a.emit("parsley:form:validate", this), this._refreshFields();
            for (var f = 0; f < this.fields.length; f++)(!b || this._isFieldInGroup(this.fields[f], b)) && (e = this.fields[f].validate(c), !0 !== e && e.length > 0 && this.validationResult && (this.validationResult = !1));
            return a.emit("parsley:form:" + (this.validationResult ? "success" : "error"), this), a.emit("parsley:form:validated", this), this.validationResult
        },
        isValid: function(a, b) {
            this._refreshFields();
            for (var c = 0; c < this.fields.length; c++)
                if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b)) return !1;
            return !0
        },
        _isFieldInGroup: function(c, d) {
            return b.isArray(c.options.group) ? -1 !== a.inArray(d, c.options.group) : c.options.group === d
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var a = this;
            return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
                var b = new window.Parsley(this, {}, a);
                "ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || b.$element.is(b.options.excluded) || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ + "-" + b.__id__] = b, a.fields.push(b))
            }), this
        }
    };
    var j = function(c, d, e, f, g) {
            var h = {};
            if (!new RegExp("ParsleyField").test(b.get(c, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
            if ("function" == typeof window.ParsleyValidator.validators[d] && (h = window.ParsleyValidator.validators[d](e)), "Assert" !== h.__parentClass__) throw new Error("Valid validator expected");
            var i = function() {
                return "undefined" != typeof c.options[d + "Priority"] ? c.options[d + "Priority"] : b.get(h, "priority") || 2
            };
            return f = f || i(), "function" == typeof h.requirementsTransformer && (e = h.requirementsTransformer(), h = window.ParsleyValidator.validators[d](e)), a.extend(h, {
                name: d,
                requirements: e,
                priority: f,
                groups: [f],
                isDomConstraint: g || b.attr(c.$element, c.options.namespace, d)
            })
        },
        k = function(c, d, e) {
            this.__class__ = "ParsleyField", this.__id__ = b.hash(4), this.$element = a(c), "undefined" != typeof e ? (this.parent = e, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = d, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
        };
    k.prototype = {
        validate: function(b) {
            return this.value = this.getValue(), a.emit("parsley:field:validate", this), a.emit("parsley:field:" + (this.isValid(b, this.value) ? "success" : "error"), this), a.emit("parsley:field:validated", this), this.validationResult
        },
        isValid: function(a, b) {
            this.refreshConstraints();
            var c = this._getConstraintsSortedPriorities();
            if (0 === c.length) return this.validationResult = [];
            if (("undefined" == typeof b || null === b) && (b = this.getValue()), !b.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== a) return this.validationResult = [];
            if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(b, this.constraints, "Any"));
            for (var d = 0; d < c.length; d++)
                if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d]))) return !1;
            return !0
        },
        getValue: function() {
            var a;
            return a = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
        },
        refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function(a, b, c, d) {
            if (a = a.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[a]) {
                var e = new j(this, a, b, c, d);
                "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
            }
            return this
        },
        removeConstraint: function(a) {
            for (var b = 0; b < this.constraints.length; b++)
                if (a === this.constraints[b].name) {
                    this.constraints.splice(b, 1);
                    break
                }
            return delete this.constraintsByName[a], this
        },
        updateConstraint: function(a, b, c) {
            return this.removeConstraint(a).addConstraint(a, b, c)
        },
        _bindConstraints: function() {
            for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), b[this.constraints[c].name] = this.constraints[c]);
            this.constraints = a, this.constraintsByName = b;
            for (var d in this.options) this.addConstraint(d, this.options[d]);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var a = this.$element.attr("type");
            return "undefined" == typeof a ? this : "number" === a ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : new RegExp(a, "i").test("email url range") ? this.addConstraint("type", a, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _getConstraintsSortedPriorities: function() {
            for (var a = [], b = 0; b < this.constraints.length; b++) - 1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
            return a.sort(function(a, b) {
                return b - a
            }), a
        }
    };
    var l = function() {
        this.__class__ = "ParsleyFieldMultiple"
    };
    l.prototype = {
        addElement: function(a) {
            return this.$elements.push(a), this
        },
        refreshConstraints: function() {
            var b;
            if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
            for (var c = 0; c < this.$elements.length; c++)
                if (a("html").has(this.$elements[c]).length) {
                    b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var d = 0; d < b.length; d++) this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
                } else this.$elements.splice(c, 1);
            return this
        },
        getValue: function() {
            if ("undefined" != typeof this.options.value) return this.options.value;
            if (this.$element.is("input[type=radio]")) return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var b = [];
                return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
                    b.push(a(this).val())
                }), b.length ? b : []
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function(a) {
            return this.$elements = [this.$element], this.options.multiple = a, this
        }
    };
    var m = a({}),
        n = {};
    a.listen = function(a) {
        if ("undefined" == typeof n[a] && (n[a] = []), "function" == typeof arguments[1]) return n[a].push({
            fn: arguments[1]
        });
        if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return n[a].push({
            fn: arguments[2],
            ctxt: arguments[1]
        });
        throw new Error("Wrong parameters")
    }, a.listenTo = function(a, b, c) {
        if ("undefined" == typeof n[b] && (n[b] = []), !(a instanceof k || a instanceof i)) throw new Error("Must give Parsley instance");
        if ("string" != typeof b || "function" != typeof c) throw new Error("Wrong parameters");
        n[b].push({
            instance: a,
            fn: c
        })
    }, a.unsubscribe = function(a, b) {
        if ("undefined" != typeof n[a]) {
            if ("string" != typeof a || "function" != typeof b) throw new Error("Wrong arguments");
            for (var c = 0; c < n[a].length; c++)
                if (n[a][c].fn === b) return n[a].splice(c, 1)
        }
    }, a.unsubscribeTo = function(a, b) {
        if ("undefined" != typeof n[b]) {
            if (!(a instanceof k || a instanceof i)) throw new Error("Must give Parsley instance");
            for (var c = 0; c < n[b].length; c++)
                if ("undefined" != typeof n[b][c].instance && n[b][c].instance.__id__ === a.__id__) return n[b].splice(c, 1)
        }
    }, a.unsubscribeAll = function(a) {
        "undefined" != typeof n[a] && delete n[a]
    }, a.emit = function(a, b) {
        if ("undefined" != typeof n[a])
            for (var c = 0; c < n[a].length; c++)
                if ("undefined" != typeof n[a][c].instance) {
                    if (b instanceof k || b instanceof i)
                        if (n[a][c].instance.__id__ !== b.__id__) {
                            if (n[a][c].instance instanceof i && b instanceof k)
                                for (var d = 0; d < n[a][c].instance.fields.length; d++)
                                    if (n[a][c].instance.fields[d].__id__ === b.__id__) {
                                        n[a][c].fn.apply(m, Array.prototype.slice.call(arguments, 1));
                                        continue
                                    }
                        } else n[a][c].fn.apply(m, Array.prototype.slice.call(arguments, 1))
                } else n[a][c].fn.apply("undefined" != typeof n[a][c].ctxt ? n[a][c].ctxt : m, Array.prototype.slice.call(arguments, 1))
    }, a.subscribed = function() {
        return n
    }, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = a.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var o = function(c, d, e) {
        if (this.__class__ = "Parsley", this.__version__ = "2.0.6", this.__id__ = b.hash(4), "undefined" == typeof c) throw new Error("You must give an element");
        if ("undefined" != typeof e && "ParsleyForm" !== e.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
        return this.init(a(c), d, e)
    };
    o.prototype = {
        init: function(a, d, e) {
            if (!a.length) throw new Error("You must bind Parsley on an existing element.");
            if (this.$element = a, this.$element.data("Parsley")) {
                var f = this.$element.data("Parsley");
                return "undefined" != typeof e && (f.parent = e), f
            }
            return this.OptionsFactory = new h(c, b.get(window, "ParsleyConfig") || {}, d, this.getNamespace(d)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || b.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(e) : this.bind("parsleyField", e) : this
        },
        isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function(c) {
            var d, e, f, g = this;
            if (this.options = a.extend(this.options, c ? c.OptionsFactory.get(c) : {}, b.attr(this.$element, this.options.namespace)), this.options.multiple ? e = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? e = d = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (e = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", c, e || this.__id__);
            if ("undefined" == typeof e) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            if (e = e.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof d && a('input[name="' + d + '"]').each(function() {
                    a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(g.options.namespace + "multiple", e)
                }), a("[" + this.options.namespace + "multiple=" + e + "]").length)
                for (var h = 0; h < a("[" + this.options.namespace + "multiple=" + e + "]").length; h++)
                    if ("undefined" != typeof a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley")) {
                        f = a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (f.addElement(this.$element), this.$element.attr(this.options.namespace + "id", f.__id__));
                        break
                    }
            return this.bind("parsleyField", c, e, !0), f || this.bind("parsleyFieldMultiple", c, e)
        },
        getNamespace: function(a) {
            return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof b.get(a, "namespace") ? a.namespace : "undefined" != typeof b.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : c.namespace
        },
        bind: function(c, e, f, g) {
            var h;
            switch (c) {
                case "parsleyForm":
                    h = a.extend(new i(this.$element, this.OptionsFactory), new d, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    h = a.extend(new k(this.$element, this.OptionsFactory, e), new d, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    h = a.extend(new k(this.$element, this.OptionsFactory, e), new d, new l, window.ParsleyExtend)._init(f);
                    break;
                default:
                    throw new Error(c + "is not a supported Parsley type")
            }
            return "undefined" != typeof f && b.setAttr(this.$element, this.options.namespace, "multiple", f), "undefined" != typeof g ? (this.$element.data("ParsleyFieldMultiple", h), h) : (new RegExp("ParsleyF", "i").test(h.__class__) && (this.$element.data("Parsley", h), a.emit("parsley:" + ("parsleyForm" === c ? "form" : "field") + ":init", h)), h)
        }
    }, a.fn.parsley = a.fn.psly = function(b) {
        if (this.length > 1) {
            var c = [];
            return this.each(function() {
                c.push(a(this).parsley(b))
            }), c
        }
        return a(this).length ? new o(this, b) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
    }, window.ParsleyUI = "function" == typeof b.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new g).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = o, window.ParsleyUtils = b, window.ParsleyValidator = new f(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== b.get(window, "ParsleyConfig.autoBind") && a(function() {
        a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
    })
}), window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n["pt-br"] = $.extend(window.ParsleyConfig.i18n["pt-br"] || {}, {
        defaultMessage: "Este valor parece ser inválido.",
        type: {
            email: "Este campo deve ser um email válido.",
            url: "Este campo deve ser um URL válida.",
            number: "Este campo deve ser um número válido.",
            integer: "Este campo deve ser um inteiro válido.",
            digits: "Este campo deve conter apenas dígitos.",
            alphanum: "Este campo deve ser alfa numérico."
        },
        notblank: "Este campo não pode ficar vazio.",
        required: "Este campo é obrigatório.",
        pattern: "Este campo parece estar inválido.",
        min: "Este campo deve ser maior ou igual a %s.",
        max: "Este campo deve ser menor ou igual a %s.",
        range: "Este campo deve estar entre %s e %s.",
        minlength: "Este campo é pequeno demais. Ele deveria ter %s caracteres ou mais.",
        maxlength: "Este campo é grande demais. Ele deveria ter %s caracteres ou menos.",
        length: "O tamanho deste campo é inválido. Ele deveria ter entre %s e %s caracteres.",
        mincheck: "Você deve escolher pelo menos %s opções.",
        maxcheck: "Você deve escolher %s opções ou mais",
        check: "Você deve escolher entre %s e %s opções.",
        equalto: "Este valor deveria ser igual."
    }), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("pt-br", window.ParsleyConfig.i18n["pt-br"], !0),
    function(a) {
        a.fn.calendar = function(b) {
            var c = a.extend({}, a.fn.calendar.defaults, b);
            return this.each(function() {
                function b() {
                    n = a('<table class="daysmonth table table">'), e();
                    var b = new Date,
                        c = x.val();
                    if ("" != c && j(c)) {
                        var g = c.split("/");
                        2 == g[2].length && ("0" == g[2].charAt(0) && (g[2] = g[2].substring(1)), g[2] = parseInt(g[2]), g[2] < 50 && (g[2] += 2e3)), b = new Date(g[2], g[1] - 1, g[0])
                    }
                    var h = b.getMonth(),
                        i = b.getFullYear();
                    f(h, i);
                    var l = a('<td><i class="icon-arrow-right"></i></td>');
                    l.click(function(a) {
                        a.stopPropagation(), a.preventDefault(), h = (h + 1) % 12, 0 == h && i++, d(h, i)
                    });
                    var o = a('<td><i class="icon-arrow-left"></i></td>');
                    o.click(function(a) {
                        a.stopPropagation(), a.preventDefault(), h -= 1, -1 == h && (i--, h = 11), d(h, i)
                    }), a(".icon-arrow-left").css("cursor", "pointer"), a(".icon-arrow-right").css("cursor", "pointer");
                    var r = a('<table class="table header"><tr></tr></table>'),
                        s = a('<td colspan=5 class="year span6"></td>');
                    r.append(o), r.append(s), r.append(l), s.append(p), m = a('<div class="calendar" id="' + q + '" ></div>'), m.prepend(r), m.append(n), x.append(m), k(h, i)
                }

                function d(a, b) {
                    n.empty(), e(), f(a, b), k(a, b)
                }

                function e() {
                    if (0 != t) {
                        var b = a('<tr class="week_days" >'),
                            c = "";
                        a(o).each(function(a, b) {
                            c += "<td", 0 == a && (c += ' class="first"'), 6 == a && (c += ' class="last"'), c += ">" + b + "</td>"
                        }), c += "</tr>", b.append(c), n.append(b)
                    }
                }

                function f(a, b) {
                    p.text(s[a] + " " + b);
                    for (var c = 1, d = g(1, a, b), e = i(a, b), f = a + 1, h = "", j = 0; 7 > j; j++) {
                        if (d > j) {
                            var k = "";
                            0 == j && (k += "<tr>"), k += '<td class="invalid', 0 == j && (k += " first"), k += '"></td>'
                        } else {
                            var k = "";
                            0 == j && (k += "<tr>"), k += '<td id="' + q + "_" + c + "_" + f + "_" + b + '" ', 0 == j && (k += ' class="first"'), 6 == j && (k += ' class="last"'), k += "><a>" + c + "</a></span>", 6 == j && (k += "</tr>"), c++
                        }
                        h += k
                    }
                    for (var l = 1; e >= c;) {
                        var k = "";
                        l % 7 == 1 && (k += "<tr>"), k += '<td id="' + q + "_" + c + "_" + f + "_" + b + '" ', l % 7 == 1 && (k += ' class="first"'), l % 7 == 0 && (k += ' class="last"'), k += "><a>" + c + "</a></td>", l % 7 == 0 && (k += "</tr>"), c++, l++, h += k
                    }
                    if (l--, l % 7 != 0) {
                        k = "";
                        for (var j = l % 7 + 1; 7 >= j; j++) {
                            var k = "";
                            k += '<td class="invalid', 7 == j && (k += " last"), k += '"></td>', 7 == j && (k += "</tr>"), h += k
                        }
                    }
                    n.append(h)
                }

                function g(a, b, c) {
                    var d = new Date(c, b, a),
                        e = d.getDay();
                    return e
                }

                function h(a, b, c) {
                    return a > 0 && 13 > a && c > 0 && 32768 > c && b > 0 && b <= new Date(c, a, 0).getDate()
                }

                function i(a, b) {
                    for (var c = 28; h(a + 1, c + 1, b);) c++;
                    return c
                }

                function j(a) {
                    var b = a.split("/");
                    return 3 != b.length ? !1 : h(b[1], b[0], b[2])
                }

                function k(b, c) {
                    0 != w ? a.ajax({
                        type: w.type,
                        url: w.url,
                        data: {
                            month: b + 1,
                            year: c
                        },
                        dataType: "json"
                    }).done(function(d) {
                        r = [], a.each(d, function(a) {
                            r.push(d[a])
                        }), l(b, c)
                    }) : l(b, c)
                }

                function l(b, c) {
                    for (var d = b + 1, e = 0; e < r.length; e++) r[e][0].split("/")[1] == d && r[e][0].split("/")[2] == c && (a("#" + q + "_" + r[e][0].replace(/\//g, "_")).addClass("event"), a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("data-original-title", r[e][1]), r[e][3] && a("#" + q + "_" + r[e][0].replace(/\//g, "_")).css("background", r[e][3]), "" == r[e][2] || "#" == r[e][2] ? "" != r[e][4] ? (a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("data-trigger", "manual"), a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").addClass("manual_popover")) : a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("href", "javascript:false;") : a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("href", r[e][2]), r[e][4] ? (a("#" + q + "_" + r[e][0].replace(/\//g, "_")).addClass("event_popover"), a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("rel", "popover"), a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("data-content", r[e][4])) : (a("#" + q + "_" + r[e][0].replace(/\//g, "_")).addClass("event_tooltip"), a("#" + q + "_" + r[e][0].replace(/\//g, "_") + " a").attr("rel", "tooltip")));
                    a("#" + q + " .event_tooltip a").tooltip(v), a("#" + q + " .event_popover a").popover(u), a(".manual_popover").click(function() {
                        a(this).popover("toggle")
                    })
                }
                var m, n, o, p = a('<div class="visualmonthyear"></div>'),
                    q = "cal_" + Math.floor(99999 * Math.random()).toString(36),
                    r = c.events;
                o = "undefined" != typeof c.days ? c.days : ["S", "M", "T", "W", "T", "F", "S"];
                var s;
                s = "undefined" != typeof c.months ? c.months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var t;
                t = "undefined" != typeof c.show_days ? c.show_days : !0;
                var u;
                u = "undefined" != c.popover_options ? c.popover_options : {
                    placement: "top"
                };
                var v;
                v = "undefined" != typeof c.tooltip_options ? c.tooltip_options : {
                    placement: "top"
                };
                var w;
                w = "undefined" != typeof c.req_ajax ? c.req_ajax : !1;
                var x = a(this);
                b()
            }), this
        }
    }(jQuery),
    function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = c, this.$elementFilestyle = [], this.$element = a(b)
        };
        b.prototype = {
            clear: function() {
                this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
            },
            destroy: function() {
                this.$element.removeAttr("style").removeData("filestyle").val(""), this.$elementFilestyle.remove()
            },
            disabled: function(a) {
                if (a === !0) this.options.disabled || (this.$element.attr("disabled", "true"), this.$elementFilestyle.find("label").attr("disabled", "true"), this.options.disabled = !0);
                else {
                    if (a !== !1) return this.options.disabled;
                    this.options.disabled && (this.$element.removeAttr("disabled"), this.$elementFilestyle.find("label").removeAttr("disabled"), this.options.disabled = !1)
                }
            },
            buttonBefore: function(a) {
                if (a === !0) this.options.buttonBefore || (this.options.buttonBefore = !0, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()));
                else {
                    if (a !== !1) return this.options.buttonBefore;
                    this.options.buttonBefore && (this.options.buttonBefore = !1, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
                }
            },
            icon: function(a) {
                if (a === !0) this.options.icon || (this.options.icon = !0, this.$elementFilestyle.find("label").prepend(this.htmlIcon()));
                else {
                    if (a !== !1) return this.options.icon;
                    this.options.icon && (this.options.icon = !1, this.$elementFilestyle.find(".glyphicon").remove())
                }
            },
            input: function(a) {
                if (a === !0) this.options.input || (this.options.input = !0, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.$elementFilestyle.find(".badge").remove(), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));
                else {
                    if (a !== !1) return this.options.input;
                    if (this.options.input) {
                        this.options.input = !1, this.$elementFilestyle.find(":text").remove();
                        var b = this.pushNameFiles();
                        b.length > 0 && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + b.length + "</span>"), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                    }
                }
            },
            size: function(a) {
                if (void 0 === a) return this.options.size;
                var b = this.$elementFilestyle.find("label"),
                    c = this.$elementFilestyle.find("input");
                b.removeClass("btn-lg btn-sm"), c.removeClass("input-lg input-sm"), "nr" != a && (b.addClass("btn-" + a), c.addClass("input-" + a))
            },
            buttonText: function(a) {
                return void 0 === a ? this.options.buttonText : (this.options.buttonText = a, void this.$elementFilestyle.find("label span").html(this.options.buttonText))
            },
            buttonName: function(a) {
                return void 0 === a ? this.options.buttonName : (this.options.buttonName = a, void this.$elementFilestyle.find("label").attr({
                    "class": "btn " + this.options.buttonName
                }))
            },
            iconName: function(a) {
                return void 0 === a ? this.options.iconName : void this.$elementFilestyle.find(".glyphicon").attr({
                    "class": ".glyphicon " + this.options.iconName
                })
            },
            htmlIcon: function() {
                return this.options.icon ? '<span class="glyphicon ' + this.options.iconName + '"></span> ' : ""
            },
            htmlInput: function() {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" disabled> ' : ""
            },
            pushNameFiles: function() {
                var a = "",
                    b = [];
                void 0 === this.$element[0].files ? b[0] = {
                    name: this.$element[0] && this.$element[0].value
                } : b = this.$element[0].files;
                for (var c = 0; c < b.length; c++) a += b[c].name.split("\\").pop() + ", ";
                return this.$elementFilestyle.find(":text").val("" !== a ? a.replace(/\, $/g, "") : ""), b
            },
            constructor: function() {
                var b = this,
                    c = "",
                    d = b.$element.attr("id"),
                    e = "";
                "" !== d && d || (d = "filestyle-" + a(".bootstrap-filestyle").length, b.$element.attr({
                    id: d
                })), e = '<span class="group-span-filestyle ' + (b.options.input ? "input-group-btn" : "") + '"><label for="' + d + '" class="btn ' + b.options.buttonName + " " + ("nr" == b.options.size ? "" : "btn-" + b.options.size) + '" ' + (b.options.disabled ? 'disabled="true"' : "") + ">" + b.htmlIcon() + b.options.buttonText + "</label></span>", c = b.options.buttonBefore ? e + b.htmlInput() : b.htmlInput() + e, b.$elementFilestyle = a('<div class="bootstrap-filestyle input-group">' + c + "</div>"), b.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function(a) {
                    return 13 === a.keyCode || 32 === a.charCode ? (b.$elementFilestyle.find("label").click(), !1) : void 0
                }), b.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(b.$elementFilestyle), b.options.disabled && b.$element.attr("disabled", "true"), b.$element.change(function() {
                    var a = b.pushNameFiles();
                    0 == b.options.input && b.options.badge ? 0 == b.$elementFilestyle.find(".badge").length ? b.$elementFilestyle.find("label").append(' <span class="badge">' + a.length + "</span>") : 0 == a.length ? b.$elementFilestyle.find(".badge").remove() : b.$elementFilestyle.find(".badge").html(a.length) : b.$elementFilestyle.find(".badge").remove()
                }), window.navigator.userAgent.search(/firefox/i) > -1 && b.$elementFilestyle.find("label").click(function() {
                    return b.$element.click(), !1
                })
            }
        };
        var c = a.fn.filestyle;
        a.fn.filestyle = function(c, d) {
            var e = "",
                f = this.each(function() {
                    if ("file" === a(this).attr("type")) {
                        var f = a(this),
                            g = f.data("filestyle"),
                            h = a.extend({}, a.fn.filestyle.defaults, c, "object" == typeof c && c);
                        g || (f.data("filestyle", g = new b(this, h)), g.constructor()), "string" == typeof c && (e = g[c](d))
                    }
                });
            return void 0 !== typeof e ? e : f
        }, a.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1
        }, a.fn.filestyle.noConflict = function() {
            return a.fn.filestyle = c, this
        }, a(function() {
            a(".filestyle").each(function() {
                var b = a(this),
                    c = {
                        input: "false" === b.attr("data-input") ? !1 : !0,
                        icon: "false" === b.attr("data-icon") ? !1 : !0,
                        buttonBefore: "true" === b.attr("data-buttonBefore") ? !0 : !1,
                        disabled: "true" === b.attr("data-disabled") ? !0 : !1,
                        size: b.attr("data-size"),
                        buttonText: b.attr("data-buttonText"),
                        buttonName: b.attr("data-buttonName"),
                        iconName: b.attr("data-iconName"),
                        badge: "false" === b.attr("data-badge") ? !1 : !0
                    };
                b.filestyle(c)
            })
        })
    }(window.jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
    }(function(a) {
        "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(a, b) {
            var c, d, e = this.length >>> 0,
                f = !1;
            for (1 < arguments.length && (d = b, f = !0), c = 0; e > c; ++c) this.hasOwnProperty(c) && (f ? d = a(d, this[c], c, this) : (d = this[c], f = !0));
            if (!f) throw new TypeError("Reduce of empty array with no initial value");
            return d
        }), "function" != typeof Array.prototype.filter && (Array.prototype.filter = function(a) {
            if (void 0 === this || null === this) throw new TypeError;
            var b = Object(this),
                c = b.length >>> 0;
            if ("function" != typeof a) throw new TypeError;
            for (var d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++)
                if (f in b) {
                    var g = b[f];
                    a.call(e, g, f, b) && d.push(g)
                }
            return d
        });
        var b, c = "function" == typeof define && define.amd,
            d = function(b) {
                var c = "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS",
                    d = a("<div>").css({
                        position: "absolute",
                        left: "-9999px",
                        top: "-9999px",
                        fontSize: "200px"
                    }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                    e = d.css("fontFamily", c).width(),
                    f = d.css("fontFamily", b + "," + c).width();
                return d.remove(), e !== f
            },
            e = {
                isMac: navigator.appVersion.indexOf("Mac") > -1,
                isMSIE: navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1,
                isFF: navigator.userAgent.indexOf("Firefox") > -1,
                jqueryVersion: parseFloat(a.fn.jquery),
                isSupportAmd: c,
                hasCodeMirror: c ? require.specified("CodeMirror") : !!window.CodeMirror,
                isFontInstalled: d,
                isW3CRangeSupport: !!document.createRange
            },
            f = function() {
                var b = function(a) {
                        return function(b) {
                            return a === b
                        }
                    },
                    c = function(a, b) {
                        return a === b
                    },
                    d = function(a) {
                        return function(b, c) {
                            return b[a] === c[a]
                        }
                    },
                    e = function() {
                        return !0
                    },
                    f = function() {
                        return !1
                    },
                    g = function(a) {
                        return function() {
                            return !a.apply(a, arguments)
                        }
                    },
                    h = function(a, b) {
                        return function(c) {
                            return a(c) && b(c)
                        }
                    },
                    i = function(a) {
                        return a
                    },
                    j = 0,
                    k = function(a) {
                        var b = ++j + "";
                        return a ? a + b : b
                    },
                    l = function(b) {
                        var c = a(document);
                        return {
                            top: b.top + c.scrollTop(),
                            left: b.left + c.scrollLeft(),
                            width: b.right - b.left,
                            height: b.bottom - b.top
                        }
                    },
                    m = function(a) {
                        var b = {};
                        for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
                        return b
                    };
                return {
                    eq: b,
                    eq2: c,
                    peq2: d,
                    ok: e,
                    fail: f,
                    self: i,
                    not: g,
                    and: h,
                    uniqueId: k,
                    rect2bnd: l,
                    invertObject: m
                }
            }(),
            g = function() {
                var b = function(a) {
                        return a[0]
                    },
                    c = function(a) {
                        return a[a.length - 1]
                    },
                    d = function(a) {
                        return a.slice(0, a.length - 1)
                    },
                    e = function(a) {
                        return a.slice(1)
                    },
                    g = function(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) {
                            var e = a[c];
                            if (b(e)) return e
                        }
                    },
                    h = function(a, b) {
                        for (var c = 0, d = a.length; d > c; c++)
                            if (!b(a[c])) return !1;
                        return !0
                    },
                    i = function(b, c) {
                        return -1 !== a.inArray(c, b)
                    },
                    j = function(a, b) {
                        return b = b || f.self, a.reduce(function(a, c) {
                            return a + b(c)
                        }, 0)
                    },
                    k = function(a) {
                        for (var b = [], c = -1, d = a.length; ++c < d;) b[c] = a[c];
                        return b
                    },
                    l = function(a, d) {
                        if (!a.length) return [];
                        var f = e(a);
                        return f.reduce(function(a, b) {
                            var e = c(a);
                            return d(c(e), b) ? e[e.length] = b : a[a.length] = [b], a
                        }, [
                            [b(a)]
                        ])
                    },
                    m = function(a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) a[c] && b.push(a[c]);
                        return b
                    },
                    n = function(a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) i(b, a[c]) || b.push(a[c]);
                        return b
                    };
                return {
                    head: b,
                    last: c,
                    initial: d,
                    tail: e,
                    find: g,
                    contains: i,
                    all: h,
                    sum: j,
                    from: k,
                    clusterBy: l,
                    compact: m,
                    unique: n
                }
            }(),
            h = String.fromCharCode(160),
            i = "﻿",
            j = function() {
                var b = function(b) {
                        return b && a(b).hasClass("note-editable")
                    },
                    c = function(b) {
                        return b && a(b).hasClass("note-control-sizing")
                    },
                    d = function(b) {
                        var c;
                        if (b.hasClass("note-air-editor")) {
                            var d = g.last(b.attr("id").split("-"));
                            return c = function(b) {
                                return function() {
                                    return a(b + d)
                                }
                            }, {
                                editor: function() {
                                    return b
                                },
                                editable: function() {
                                    return b
                                },
                                popover: c("#note-popover-"),
                                handle: c("#note-handle-"),
                                dialog: c("#note-dialog-")
                            }
                        }
                        return c = function(a) {
                            return function() {
                                return b.find(a)
                            }
                        }, {
                            editor: function() {
                                return b
                            },
                            dropzone: c(".note-dropzone"),
                            toolbar: c(".note-toolbar"),
                            editable: c(".note-editable"),
                            codable: c(".note-codable"),
                            statusbar: c(".note-statusbar"),
                            popover: c(".note-popover"),
                            handle: c(".note-handle"),
                            dialog: c(".note-dialog")
                        }
                    },
                    k = function(a) {
                        return a = a.toUpperCase(),
                            function(b) {
                                return b && b.nodeName.toUpperCase() === a
                            }
                    },
                    l = function(a) {
                        return a && 3 === a.nodeType
                    },
                    m = function(a) {
                        return a && /^BR|^IMG|^HR/.test(a.nodeName.toUpperCase())
                    },
                    n = function(a) {
                        return b(a) ? !1 : a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase())
                    },
                    o = k("LI"),
                    p = function(a) {
                        return n(a) && !o(a)
                    },
                    q = function(a) {
                        return !u(a) && !r(a) && !n(a)
                    },
                    r = function(a) {
                        return a && /^UL|^OL/.test(a.nodeName.toUpperCase())
                    },
                    s = function(a) {
                        return a && /^TD|^TH/.test(a.nodeName.toUpperCase())
                    },
                    t = k("BLOCKQUOTE"),
                    u = function(a) {
                        return s(a) || t(a) || b(a)
                    },
                    v = k("A"),
                    w = function(a) {
                        return q(a) && !!D(a, n)
                    },
                    x = function(a) {
                        return q(a) && !D(a, n)
                    },
                    y = k("BODY"),
                    z = e.isMSIE ? "&nbsp;" : "<br>",
                    A = function(a) {
                        return l(a) ? a.nodeValue.length : a.childNodes.length
                    },
                    B = function(a) {
                        var b = A(a);
                        return 0 === b ? !0 : j.isText(a) || 1 !== b || a.innerHTML !== z ? !1 : !0
                    },
                    C = function(a) {
                        m(a) || A(a) || (a.innerHTML = z)
                    },
                    D = function(a, c) {
                        for (; a;) {
                            if (c(a)) return a;
                            if (b(a)) break;
                            a = a.parentNode
                        }
                        return null
                    },
                    E = function(a, c) {
                        c = c || f.fail;
                        var d = [];
                        return D(a, function(a) {
                            return b(a) || d.push(a), c(a)
                        }), d
                    },
                    F = function(a, b) {
                        var c = E(a);
                        return g.last(c.filter(b))
                    },
                    G = function(b, c) {
                        for (var d = E(b), e = c; e; e = e.parentNode)
                            if (a.inArray(e, d) > -1) return e;
                        return null
                    },
                    H = function(a, b) {
                        b = b || f.fail;
                        for (var c = []; a && !b(a);) c.push(a), a = a.previousSibling;
                        return c
                    },
                    I = function(a, b) {
                        b = b || f.fail;
                        for (var c = []; a && !b(a);) c.push(a), a = a.nextSibling;
                        return c
                    },
                    J = function(a, b) {
                        var c = [];
                        return b = b || f.ok,
                            function d(e) {
                                a !== e && b(e) && c.push(e);
                                for (var f = 0, g = e.childNodes.length; g > f; f++) d(e.childNodes[f])
                            }(a), c
                    },
                    K = function(b, c) {
                        var d = b.parentNode,
                            e = a("<" + c + ">")[0];
                        return d.insertBefore(e, b), e.appendChild(b), e
                    },
                    L = function(a, b) {
                        var c = b.nextSibling,
                            d = b.parentNode;
                        return c ? d.insertBefore(a, c) : d.appendChild(a), a
                    },
                    M = function(b, c) {
                        return a.each(c, function(a, c) {
                            b.appendChild(c)
                        }), b
                    },
                    N = function(a) {
                        return 0 === a.offset
                    },
                    O = function(a) {
                        return a.offset === A(a.node)
                    },
                    P = function(a) {
                        return N(a) || O(a)
                    },
                    Q = function(a, b) {
                        for (; a && a !== b;) {
                            if (0 !== S(a)) return !1;
                            a = a.parentNode
                        }
                        return !0
                    },
                    R = function(a, b) {
                        for (; a && a !== b;) {
                            if (S(a) !== A(a.parentNode) - 1) return !1;
                            a = a.parentNode
                        }
                        return !0
                    },
                    S = function(a) {
                        for (var b = 0; a = a.previousSibling;) b += 1;
                        return b
                    },
                    T = function(a) {
                        return !!(a && a.childNodes && a.childNodes.length)
                    },
                    U = function(a, c) {
                        var d, e;
                        if (0 === a.offset) {
                            if (b(a.node)) return null;
                            d = a.node.parentNode, e = S(a.node)
                        } else T(a.node) ? (d = a.node.childNodes[a.offset - 1], e = A(d)) : (d = a.node, e = c ? 0 : a.offset - 1);
                        return {
                            node: d,
                            offset: e
                        }
                    },
                    V = function(a, c) {
                        var d, e;
                        if (A(a.node) === a.offset) {
                            if (b(a.node)) return null;
                            d = a.node.parentNode, e = S(a.node) + 1
                        } else T(a.node) ? (d = a.node.childNodes[a.offset], e = 0) : (d = a.node, e = c ? A(a.node) : a.offset + 1);
                        return {
                            node: d,
                            offset: e
                        }
                    },
                    W = function(a, b) {
                        return a.node === b.node && a.offset === b.offset
                    },
                    X = function(a) {
                        if (l(a.node) || !T(a.node) || B(a.node)) return !0;
                        var b = a.node.childNodes[a.offset - 1],
                            c = a.node.childNodes[a.offset];
                        return b && !m(b) || c && !m(c) ? !1 : !0
                    },
                    Y = function(a, b) {
                        for (; a;) {
                            if (b(a)) return a;
                            a = U(a)
                        }
                        return null
                    },
                    Z = function(a, b) {
                        for (; a;) {
                            if (b(a)) return a;
                            a = V(a)
                        }
                        return null
                    },
                    $ = function(a, b, c, d) {
                        for (var e = a; e && (c(e), !W(e, b));) {
                            var f = d && a.node !== e.node && b.node !== e.node;
                            e = V(e, f)
                        }
                    },
                    _ = function(b, c) {
                        var d = E(c, f.eq(b));
                        return a.map(d, S).reverse()
                    },
                    ab = function(a, b) {
                        for (var c = a, d = 0, e = b.length; e > d; d++) c = c.childNodes.length <= b[d] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[d]];
                        return c
                    },
                    bb = function(a, b) {
                        if (l(a.node)) return N(a) ? a.node : O(a) ? a.node.nextSibling : a.node.splitText(a.offset);
                        var c = a.node.childNodes[a.offset],
                            d = L(a.node.cloneNode(!1), a.node);
                        return M(d, I(c)), b || (C(a.node), C(d)), d
                    },
                    cb = function(a, b, c) {
                        var d = E(b.node, f.eq(a));
                        return d.length ? 1 === d.length ? bb(b, c) : d.reduce(function(a, d) {
                            var e = L(d.cloneNode(!1), d);
                            return a === b.node && (a = bb(b, c)), M(e, I(a)), c || (C(d), C(e)), e
                        }) : null
                    },
                    db = function(a) {
                        return document.createElement(a)
                    },
                    eb = function(a) {
                        return document.createTextNode(a)
                    },
                    fb = function(a, b) {
                        if (a && a.parentNode) {
                            if (a.removeNode) return a.removeNode(b);
                            var c = a.parentNode;
                            if (!b) {
                                var d, e, f = [];
                                for (d = 0, e = a.childNodes.length; e > d; d++) f.push(a.childNodes[d]);
                                for (d = 0, e = f.length; e > d; d++) c.insertBefore(f[d], a)
                            }
                            c.removeChild(a)
                        }
                    },
                    gb = function(a, c) {
                        for (; a && !b(a) && c(a);) {
                            var d = a.parentNode;
                            fb(a), a = d
                        }
                    },
                    hb = function(a, b) {
                        if (a.nodeName.toUpperCase() === b.toUpperCase()) return a;
                        var c = db(b);
                        return a.style.cssText && (c.style.cssText = a.style.cssText), M(c, g.from(a.childNodes)), L(c, a), fb(a), c
                    },
                    ib = k("TEXTAREA"),
                    jb = function(b, c) {
                        var d = ib(b[0]) ? b.val() : b.html();
                        if (c) {
                            var e = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                            d = d.replace(e, function(a, b, c) {
                                c = c.toUpperCase();
                                var d = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b,
                                    e = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                                return a + (d || e ? "\n" : "")
                            }), d = a.trim(d)
                        }
                        return d
                    },
                    kb = function(a) {
                        var b = a.val();
                        return b.replace(/[\n\r]/g, "")
                    };
                return {
                    NBSP_CHAR: h,
                    ZERO_WIDTH_NBSP_CHAR: i,
                    blank: z,
                    emptyPara: "<p>" + z + "</p>",
                    isEditable: b,
                    isControlSizing: c,
                    buildLayoutInfo: d,
                    isText: l,
                    isPara: n,
                    isPurePara: p,
                    isInline: q,
                    isBodyInline: x,
                    isBody: y,
                    isParaInline: w,
                    isList: r,
                    isTable: k("TABLE"),
                    isCell: s,
                    isBlockquote: t,
                    isBodyContainer: u,
                    isAnchor: v,
                    isDiv: k("DIV"),
                    isLi: o,
                    isSpan: k("SPAN"),
                    isB: k("B"),
                    isU: k("U"),
                    isS: k("S"),
                    isI: k("I"),
                    isImg: k("IMG"),
                    isTextarea: ib,
                    isEmpty: B,
                    isEmptyAnchor: f.and(v, B),
                    nodeLength: A,
                    isLeftEdgePoint: N,
                    isRightEdgePoint: O,
                    isEdgePoint: P,
                    isLeftEdgeOf: Q,
                    isRightEdgeOf: R,
                    prevPoint: U,
                    nextPoint: V,
                    isSamePoint: W,
                    isVisiblePoint: X,
                    prevPointUntil: Y,
                    nextPointUntil: Z,
                    walkPoint: $,
                    ancestor: D,
                    listAncestor: E,
                    lastAncestor: F,
                    listNext: I,
                    listPrev: H,
                    listDescendant: J,
                    commonAncestor: G,
                    wrap: K,
                    insertAfter: L,
                    appendChildNodes: M,
                    position: S,
                    hasChildren: T,
                    makeOffsetPath: _,
                    fromOffsetPath: ab,
                    splitTree: cb,
                    create: db,
                    createText: eb,
                    remove: fb,
                    removeWhile: gb,
                    replace: hb,
                    html: jb,
                    value: kb
                }
            }(),
            k = {
                version: "0.5.10",
                options: {
                    width: null,
                    height: null,
                    minHeight: null,
                    maxHeight: null,
                    focus: !1,
                    tabsize: 4,
                    styleWithSpan: !0,
                    disableLinkTarget: !1,
                    disableDragAndDrop: !1,
                    disableResizeEditor: !1,
                    codemirror: {
                        mode: "text/html",
                        htmlMode: !0,
                        lineNumbers: !0
                    },
                    lang: "en-US",
                    direction: null,
                    toolbar: [
                        ["style", ["style"]],
                        ["font", ["bold", "italic", "underline", "superscript", "subscript", "strikethrough", "clear"]],
                        ["fontname", ["fontname"]],
                        ["color", ["color"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["height", ["height"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture", "video", "hr"]],
                        ["view", ["fullscreen", "codeview"]],
                        ["help", ["help"]]
                    ],
                    airMode: !1,
                    airPopover: [
                        ["color", ["color"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["para", ["ul", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture"]]
                    ],
                    styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                    defaultFontName: "Helvetica Neue",
                    fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                    colors: [
                        ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                        ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                        ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                        ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                        ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                        ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                        ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                        ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
                    ],
                    fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                    lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                    insertTableMaxSize: {
                        col: 10,
                        row: 10
                    },
                    oninit: null,
                    onfocus: null,
                    onblur: null,
                    onenter: null,
                    onkeyup: null,
                    onkeydown: null,
                    onImageUpload: null,
                    onImageUploadError: null,
                    onToolbarClick: null,
                    onCreateLink: function(a) {
                        return -1 !== a.indexOf("@") && -1 === a.indexOf(":") ? a = "mailto:" + a : -1 === a.indexOf("://") && (a = "http://" + a), a
                    },
                    keyMap: {
                        pc: {
                            ENTER: "insertParagraph",
                            "CTRL+Z": "undo",
                            "CTRL+Y": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CTRL+B": "bold",
                            "CTRL+I": "italic",
                            "CTRL+U": "underline",
                            "CTRL+SHIFT+S": "strikethrough",
                            "CTRL+BACKSLASH": "removeFormat",
                            "CTRL+SHIFT+L": "justifyLeft",
                            "CTRL+SHIFT+E": "justifyCenter",
                            "CTRL+SHIFT+R": "justifyRight",
                            "CTRL+SHIFT+J": "justifyFull",
                            "CTRL+SHIFT+NUM7": "insertUnorderedList",
                            "CTRL+SHIFT+NUM8": "insertOrderedList",
                            "CTRL+LEFTBRACKET": "outdent",
                            "CTRL+RIGHTBRACKET": "indent",
                            "CTRL+NUM0": "formatPara",
                            "CTRL+NUM1": "formatH1",
                            "CTRL+NUM2": "formatH2",
                            "CTRL+NUM3": "formatH3",
                            "CTRL+NUM4": "formatH4",
                            "CTRL+NUM5": "formatH5",
                            "CTRL+NUM6": "formatH6",
                            "CTRL+ENTER": "insertHorizontalRule",
                            "CTRL+K": "showLinkDialog"
                        },
                        mac: {
                            ENTER: "insertParagraph",
                            "CMD+Z": "undo",
                            "CMD+SHIFT+Z": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CMD+B": "bold",
                            "CMD+I": "italic",
                            "CMD+U": "underline",
                            "CMD+SHIFT+S": "strikethrough",
                            "CMD+BACKSLASH": "removeFormat",
                            "CMD+SHIFT+L": "justifyLeft",
                            "CMD+SHIFT+E": "justifyCenter",
                            "CMD+SHIFT+R": "justifyRight",
                            "CMD+SHIFT+J": "justifyFull",
                            "CMD+SHIFT+NUM7": "insertUnorderedList",
                            "CMD+SHIFT+NUM8": "insertOrderedList",
                            "CMD+LEFTBRACKET": "outdent",
                            "CMD+RIGHTBRACKET": "indent",
                            "CMD+NUM0": "formatPara",
                            "CMD+NUM1": "formatH1",
                            "CMD+NUM2": "formatH2",
                            "CMD+NUM3": "formatH3",
                            "CMD+NUM4": "formatH4",
                            "CMD+NUM5": "formatH5",
                            "CMD+NUM6": "formatH6",
                            "CMD+ENTER": "insertHorizontalRule",
                            "CMD+K": "showLinkDialog"
                        }
                    }
                },
                lang: {
                    "en-US": {
                        font: {
                            bold: "Bold",
                            italic: "Italic",
                            underline: "Underline",
                            strikethrough: "Strikethrough",
                            subscript: "Subscript",
                            superscript: "Superscript",
                            clear: "Remove Font Style",
                            height: "Line Height",
                            name: "Font Family",
                            size: "Font Size"
                        },
                        image: {
                            image: "Picture",
                            insert: "Insert Image",
                            resizeFull: "Resize Full",
                            resizeHalf: "Resize Half",
                            resizeQuarter: "Resize Quarter",
                            floatLeft: "Float Left",
                            floatRight: "Float Right",
                            floatNone: "Float None",
                            shapeRounded: "Shape: Rounded",
                            shapeCircle: "Shape: Circle",
                            shapeThumbnail: "Shape: Thumbnail",
                            shapeNone: "Shape: None",
                            dragImageHere: "Drag an image here",
                            selectFromFiles: "Select from files",
                            url: "Image URL",
                            remove: "Remove Image"
                        },
                        link: {
                            link: "Link",
                            insert: "Insert Link",
                            unlink: "Unlink",
                            edit: "Edit",
                            textToDisplay: "Text to display",
                            url: "To what URL should this link go?",
                            openInNewWindow: "Open in new window"
                        },
                        video: {
                            video: "Video",
                            videoLink: "Video Link",
                            insert: "Insert Video",
                            url: "Video URL?",
                            providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                        },
                        table: {
                            table: "Table"
                        },
                        hr: {
                            insert: "Insert Horizontal Rule"
                        },
                        style: {
                            style: "Style",
                            normal: "Normal",
                            blockquote: "Quote",
                            pre: "Code",
                            h1: "Header 1",
                            h2: "Header 2",
                            h3: "Header 3",
                            h4: "Header 4",
                            h5: "Header 5",
                            h6: "Header 6"
                        },
                        lists: {
                            unordered: "Unordered list",
                            ordered: "Ordered list"
                        },
                        options: {
                            help: "Help",
                            fullscreen: "Full Screen",
                            codeview: "Code View"
                        },
                        paragraph: {
                            paragraph: "Paragraph",
                            outdent: "Outdent",
                            indent: "Indent",
                            left: "Align left",
                            center: "Align center",
                            right: "Align right",
                            justify: "Justify full"
                        },
                        color: {
                            recent: "Recent Color",
                            more: "More Color",
                            background: "Background Color",
                            foreground: "Foreground Color",
                            transparent: "Transparent",
                            setTransparent: "Set transparent",
                            reset: "Reset",
                            resetToDefault: "Reset to default"
                        },
                        shortcut: {
                            shortcuts: "Keyboard shortcuts",
                            close: "Close",
                            textFormatting: "Text formatting",
                            action: "Action",
                            paragraphFormatting: "Paragraph formatting",
                            documentStyle: "Document Style"
                        },
                        history: {
                            undo: "Undo",
                            redo: "Redo"
                        }
                    }
                }
            },
            l = function() {
                var b = function(b) {
                        return a.Deferred(function(c) {
                            a.extend(new FileReader, {
                                onload: function(a) {
                                    var b = a.target.result;
                                    c.resolve(b)
                                },
                                onerror: function() {
                                    c.reject(this)
                                }
                            }).readAsDataURL(b)
                        }).promise()
                    },
                    c = function(b, c) {
                        return a.Deferred(function(d) {
                            a("<img>").one("load", function() {
                                d.resolve(a(this))
                            }).one("error abort", function() {
                                d.reject(a(this))
                            }).css({
                                display: "none"
                            }).appendTo(document.body).attr("src", b).attr("data-filename", c)
                        }).promise()
                    };
                return {
                    readFileAsDataURL: b,
                    createImage: c
                }
            }(),
            m = {
                isEdit: function(a) {
                    return g.contains([8, 9, 13, 32], a)
                },
                nameFromCode: {
                    8: "BACKSPACE",
                    9: "TAB",
                    13: "ENTER",
                    32: "SPACE",
                    48: "NUM0",
                    49: "NUM1",
                    50: "NUM2",
                    51: "NUM3",
                    52: "NUM4",
                    53: "NUM5",
                    54: "NUM6",
                    55: "NUM7",
                    56: "NUM8",
                    66: "B",
                    69: "E",
                    73: "I",
                    74: "J",
                    75: "K",
                    76: "L",
                    82: "R",
                    83: "S",
                    85: "U",
                    89: "Y",
                    90: "Z",
                    191: "SLASH",
                    219: "LEFTBRACKET",
                    220: "BACKSLASH",
                    221: "RIGHTBRACKET"
                }
            },
            n = function() {
                var b = function(b, c) {
                    if (e.jqueryVersion < 1.9) {
                        var d = {};
                        return a.each(c, function(a, c) {
                            d[c] = b.css(c)
                        }), d
                    }
                    return b.css.call(b, c)
                };
                this.stylePara = function(b, c) {
                    a.each(b.nodes(j.isPara, {
                        includeAncestor: !0
                    }), function(b, d) {
                        a(d).css(c)
                    })
                }, this.current = function(c, d) {
                    var e = a(j.isText(c.sc) ? c.sc.parentNode : c.sc),
                        f = ["font-family", "font-size", "text-align", "list-style-type", "line-height"],
                        g = b(e, f) || {};
                    if (g["font-size"] = parseInt(g["font-size"], 10), g["font-bold"] = document.queryCommandState("bold") ? "bold" : "normal", g["font-italic"] = document.queryCommandState("italic") ? "italic" : "normal", g["font-underline"] = document.queryCommandState("underline") ? "underline" : "normal", g["font-strikethrough"] = document.queryCommandState("strikeThrough") ? "strikethrough" : "normal", g["font-superscript"] = document.queryCommandState("superscript") ? "superscript" : "normal", g["font-subscript"] = document.queryCommandState("subscript") ? "subscript" : "normal", c.isOnList()) {
                        var h = ["circle", "disc", "disc-leading-zero", "square"],
                            i = a.inArray(g["list-style-type"], h) > -1;
                        g["list-style"] = i ? "unordered" : "ordered"
                    } else g["list-style"] = "none";
                    var k = j.ancestor(c.sc, j.isPara);
                    if (k && k.style["line-height"]) g["line-height"] = k.style.lineHeight;
                    else {
                        var l = parseInt(g["line-height"], 10) / parseInt(g["font-size"], 10);
                        g["line-height"] = l.toFixed(1)
                    }
                    return g.image = j.isImg(d) && d, g.anchor = c.isOnAnchor() && j.ancestor(c.sc, j.isAnchor), g.ancestors = j.listAncestor(c.sc, j.isEditable), g.range = c, g
                }
            },
            o = function() {
                var b = function(a, b) {
                        var c, d, e = a.parentElement(),
                            f = document.body.createTextRange(),
                            h = g.from(e.childNodes);
                        for (c = 0; c < h.length; c++)
                            if (!j.isText(h[c])) {
                                if (f.moveToElementText(h[c]), f.compareEndPoints("StartToStart", a) >= 0) break;
                                d = h[c]
                            }
                        if (0 !== c && j.isText(h[c - 1])) {
                            var i = document.body.createTextRange(),
                                k = null;
                            i.moveToElementText(d || e), i.collapse(!d), k = d ? d.nextSibling : e.firstChild;
                            var l = a.duplicate();
                            l.setEndPoint("StartToStart", i);
                            for (var m = l.text.replace(/[\r\n]/g, "").length; m > k.nodeValue.length && k.nextSibling;) m -= k.nodeValue.length, k = k.nextSibling; {
                                k.nodeValue
                            }
                            b && k.nextSibling && j.isText(k.nextSibling) && m === k.nodeValue.length && (m -= k.nodeValue.length, k = k.nextSibling), e = k, c = m
                        }
                        return {
                            cont: e,
                            offset: c
                        }
                    },
                    c = function(a) {
                        var b = function(a, c) {
                                var d, e;
                                if (j.isText(a)) {
                                    var h = j.listPrev(a, f.not(j.isText)),
                                        i = g.last(h).previousSibling;
                                    d = i || a.parentNode, c += g.sum(g.tail(h), j.nodeLength), e = !i
                                } else {
                                    if (d = a.childNodes[c] || a, j.isText(d)) return b(d, 0);
                                    c = 0, e = !1
                                }
                                return {
                                    node: d,
                                    collapseToStart: e,
                                    offset: c
                                }
                            },
                            c = document.body.createTextRange(),
                            d = b(a.node, a.offset);
                        return c.moveToElementText(d.node), c.collapse(d.collapseToStart), c.moveStart("character", d.offset), c
                    },
                    d = function(b, h, i, k) {
                        this.sc = b, this.so = h, this.ec = i, this.eo = k;
                        var l = function() {
                            if (e.isW3CRangeSupport) {
                                var a = document.createRange();
                                return a.setStart(b, h), a.setEnd(i, k), a
                            }
                            var d = c({
                                node: b,
                                offset: h
                            });
                            return d.setEndPoint("EndToEnd", c({
                                node: i,
                                offset: k
                            })), d
                        };
                        this.getPoints = function() {
                            return {
                                sc: b,
                                so: h,
                                ec: i,
                                eo: k
                            }
                        }, this.getStartPoint = function() {
                            return {
                                node: b,
                                offset: h
                            }
                        }, this.getEndPoint = function() {
                            return {
                                node: i,
                                offset: k
                            }
                        }, this.select = function() {
                            var a = l();
                            if (e.isW3CRangeSupport) {
                                var b = document.getSelection();
                                b.rangeCount > 0 && b.removeAllRanges(), b.addRange(a)
                            } else a.select()
                        }, this.normalize = function() {
                            var a = function(a) {
                                    return j.isVisiblePoint(a) || (j.isLeftEdgePoint(a) ? a = j.nextPointUntil(a, j.isVisiblePoint) : j.isRightEdgePoint(a) && (a = j.prevPointUntil(a, j.isVisiblePoint))), a
                                },
                                b = a(this.getStartPoint()),
                                c = a(this.getStartPoint());
                            return new d(b.node, b.offset, c.node, c.offset)
                        }, this.nodes = function(a, b) {
                            a = a || f.ok;
                            var c = b && b.includeAncestor,
                                d = b && b.fullyContains,
                                e = this.getStartPoint(),
                                h = this.getEndPoint(),
                                i = [],
                                k = [];
                            return j.walkPoint(e, h, function(b) {
                                if (!j.isEditable(b.node)) {
                                    var e;
                                    d ? (j.isLeftEdgePoint(b) && k.push(b.node), j.isRightEdgePoint(b) && g.contains(k, b.node) && (e = b.node)) : e = c ? j.ancestor(b.node, a) : b.node, e && a(e) && i.push(e)
                                }
                            }, !0), g.unique(i)
                        }, this.commonAncestor = function() {
                            return j.commonAncestor(b, i)
                        }, this.expand = function(a) {
                            var c = j.ancestor(b, a),
                                e = j.ancestor(i, a);
                            if (!c && !e) return new d(b, h, i, k);
                            var f = this.getPoints();
                            return c && (f.sc = c, f.so = 0), e && (f.ec = e, f.eo = j.nodeLength(e)), new d(f.sc, f.so, f.ec, f.eo)
                        }, this.collapse = function(a) {
                            return a ? new d(b, h, b, h) : new d(i, k, i, k)
                        }, this.splitText = function() {
                            var a = b === i,
                                c = this.getPoints();
                            return j.isText(i) && !j.isEdgePoint(this.getEndPoint()) && i.splitText(k), j.isText(b) && !j.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(h), c.so = 0, a && (c.ec = c.sc, c.eo = k - h)), new d(c.sc, c.so, c.ec, c.eo)
                        }, this.deleteContents = function() {
                            if (this.isCollapsed()) return this;
                            var b = this.splitText(),
                                c = b.nodes(null, {
                                    fullyContains: !0
                                }),
                                e = j.prevPointUntil(b.getStartPoint(), function(a) {
                                    return !g.contains(c, a.node)
                                }),
                                f = [];
                            return a.each(c, function(a, b) {
                                var c = b.parentNode;
                                e.node !== c && 1 === j.nodeLength(c) && f.push(c), j.remove(b, !1)
                            }), a.each(f, function(a, b) {
                                j.remove(b, !1)
                            }), new d(e.node, e.offset, e.node, e.offset)
                        };
                        var m = function(a) {
                            return function() {
                                var c = j.ancestor(b, a);
                                return !!c && c === j.ancestor(i, a)
                            }
                        };
                        this.isOnEditable = m(j.isEditable), this.isOnList = m(j.isList), this.isOnAnchor = m(j.isAnchor), this.isOnCell = m(j.isCell), this.isLeftEdgeOf = function(a) {
                            if (!j.isLeftEdgePoint(this.getStartPoint())) return !1;
                            var b = j.ancestor(this.sc, a);
                            return b && j.isLeftEdgeOf(this.sc, b)
                        }, this.isCollapsed = function() {
                            return b === i && h === k
                        }, this.wrapBodyInlineWithPara = function() {
                            if (j.isBodyContainer(b) && j.isEmpty(b)) return b.innerHTML = j.emptyPara, new d(b.firstChild, 0);
                            if (!j.isInline(b) || j.isParaInline(b)) return this;
                            var a = j.listAncestor(b, f.not(j.isInline)),
                                c = g.last(a);
                            j.isInline(c) || (c = a[a.length - 2] || b.childNodes[h]);
                            var e = j.listPrev(c, j.isParaInline).reverse();
                            if (e = e.concat(j.listNext(c.nextSibling, j.isParaInline)), e.length) {
                                var i = j.wrap(g.head(e), "p");
                                j.appendChildNodes(i, g.tail(e))
                            }
                            return this
                        }, this.insertNode = function(a, b) {
                            var c, d, e, f = this.wrapBodyInlineWithPara(),
                                h = f.getStartPoint();
                            if (b) d = j.isPara(h.node) ? h.node : h.node.parentNode, e = j.isPara(h.node) ? h.node.childNodes[h.offset] : j.splitTree(h.node, h);
                            else {
                                var i = j.listAncestor(h.node, j.isBodyContainer),
                                    k = g.last(i) || h.node;
                                j.isBodyContainer(k) ? (c = i[i.length - 2], d = k) : (c = k, d = c.parentNode), e = c && j.splitTree(c, h)
                            }
                            return e ? e.parentNode.insertBefore(a, e) : d.appendChild(a), a
                        }, this.toString = function() {
                            var a = l();
                            return e.isW3CRangeSupport ? a.toString() : a.text
                        }, this.bookmark = function(a) {
                            return {
                                s: {
                                    path: j.makeOffsetPath(a, b),
                                    offset: h
                                },
                                e: {
                                    path: j.makeOffsetPath(a, i),
                                    offset: k
                                }
                            }
                        }, this.getClientRects = function() {
                            var a = l();
                            return a.getClientRects()
                        }
                    };
                return {
                    create: function(a, c, f, g) {
                        if (arguments.length) 2 === arguments.length && (f = a, g = c);
                        else if (e.isW3CRangeSupport) {
                            var h = document.getSelection();
                            if (0 === h.rangeCount) return null;
                            if (j.isBody(h.anchorNode)) return null;
                            var i = h.getRangeAt(0);
                            a = i.startContainer, c = i.startOffset, f = i.endContainer, g = i.endOffset
                        } else {
                            var k = document.selection.createRange(),
                                l = k.duplicate();
                            l.collapse(!1);
                            var m = k;
                            m.collapse(!0);
                            var n = b(m, !0),
                                o = b(l, !1);
                            j.isText(n.node) && j.isLeftEdgePoint(n) && j.isTextNode(o.node) && j.isRightEdgePoint(o) && o.node.nextSibling === n.node && (n = o), a = n.cont, c = n.offset, f = o.cont, g = o.offset
                        }
                        return new d(a, c, f, g)
                    },
                    createFromNode: function(a) {
                        return this.create(a, 0, a, 1)
                    },
                    createFromBookmark: function(a, b) {
                        var c = j.fromOffsetPath(a, b.s.path),
                            e = b.s.offset,
                            f = j.fromOffsetPath(a, b.e.path),
                            g = b.e.offset;
                        return new d(c, e, f, g)
                    }
                }
            }(),
            p = function() {
                this.insertTab = function(a, b, c) {
                    var d = j.createText(new Array(c + 1).join(j.NBSP_CHAR));
                    b = b.deleteContents(), b.insertNode(d, !0), b = o.create(d, c), b.select()
                }, this.insertParagraph = function() {
                    var b = o.create();
                    b = b.deleteContents(), b = b.wrapBodyInlineWithPara();
                    var c, d = j.ancestor(b.sc, j.isPara);
                    if (d) {
                        c = j.splitTree(d, b.getStartPoint());
                        var e = j.listDescendant(d, j.isEmptyAnchor);
                        e = e.concat(j.listDescendant(c, j.isEmptyAnchor)), a.each(e, function(a, b) {
                            j.remove(b)
                        })
                    } else {
                        var f = b.sc.childNodes[b.so];
                        c = a(j.emptyPara)[0], f ? b.sc.insertBefore(c, f) : b.sc.appendChild(c)
                    }
                    o.create(c, 0).normalize().select()
                }
            },
            q = function() {
                this.tab = function(a, b) {
                    var c = j.ancestor(a.commonAncestor(), j.isCell),
                        d = j.ancestor(c, j.isTable),
                        e = j.listDescendant(d, j.isCell),
                        f = g[b ? "prev" : "next"](e, c);
                    f && o.create(f, 0).select()
                }, this.createTable = function(b, c) {
                    for (var d, e = [], f = 0; b > f; f++) e.push("<td>" + j.blank + "</td>");
                    d = e.join("");
                    for (var g, h = [], i = 0; c > i; i++) h.push("<tr>" + d + "</tr>");
                    return g = h.join(""), a('<table class="table table-bordered">' + g + "</table>")[0]
                }
            },
            r = function() {
                this.insertOrderedList = function() {
                    this.toggleList("OL")
                }, this.insertUnorderedList = function() {
                    this.toggleList("UL")
                }, this.indent = function() {
                    var b = this,
                        c = o.create().wrapBodyInlineWithPara(),
                        d = c.nodes(j.isPara, {
                            includeAncestor: !0
                        }),
                        e = g.clusterBy(d, f.peq2("parentNode"));
                    a.each(e, function(c, d) {
                        var e = g.head(d);
                        j.isLi(e) ? b.wrapList(d, e.parentNode.nodeName) : a.each(d, function(b, c) {
                            a(c).css("marginLeft", function(a, b) {
                                return (parseInt(b, 10) || 0) + 25
                            })
                        })
                    }), c.select()
                }, this.outdent = function() {
                    var b = this,
                        c = o.create().wrapBodyInlineWithPara(),
                        d = c.nodes(j.isPara, {
                            includeAncestor: !0
                        }),
                        e = g.clusterBy(d, f.peq2("parentNode"));
                    a.each(e, function(c, d) {
                        var e = g.head(d);
                        j.isLi(e) ? b.releaseList([d]) : a.each(d, function(b, c) {
                            a(c).css("marginLeft", function(a, b) {
                                return b = parseInt(b, 10) || 0, b > 25 ? b - 25 : ""
                            })
                        })
                    }), c.select()
                }, this.toggleList = function(b) {
                    var c = this,
                        d = o.create().wrapBodyInlineWithPara(),
                        e = d.nodes(j.isPara, {
                            includeAncestor: !0
                        }),
                        h = g.clusterBy(e, f.peq2("parentNode"));
                    if (g.find(e, j.isPurePara)) a.each(h, function(a, d) {
                        c.wrapList(d, b)
                    });
                    else {
                        var i = d.nodes(j.isList, {
                            includeAncestor: !0
                        }).filter(function(c) {
                            return !a.nodeName(c, b)
                        });
                        i.length ? a.each(i, function(a, c) {
                            j.replace(c, b)
                        }) : this.releaseList(h, !0)
                    }
                    d.select()
                }, this.wrapList = function(b, c) {
                    var d = g.head(b),
                        e = g.last(b),
                        f = j.isList(d.previousSibling) && d.previousSibling,
                        h = j.isList(e.nextSibling) && e.nextSibling,
                        i = f || j.insertAfter(j.create(c || "UL"), e);
                    b = a.map(b, function(a) {
                        return j.isPurePara(a) ? j.replace(a, "LI") : a
                    }), j.appendChildNodes(i, b), h && (j.appendChildNodes(i, g.from(h.childNodes)), j.remove(h))
                }, this.releaseList = function(b, c) {
                    var d = [];
                    return a.each(b, function(b, e) {
                        var f = g.head(e),
                            h = g.last(e),
                            i = c ? j.lastAncestor(f, j.isList) : f.parentNode,
                            k = i.childNodes.length > 1 ? j.splitTree(i, {
                                node: h.parentNode,
                                offset: j.position(h) + 1
                            }, !0) : null,
                            l = j.splitTree(i, {
                                node: f.parentNode,
                                offset: j.position(f)
                            }, !0);
                        e = c ? j.listDescendant(l, j.isLi) : g.from(l.childNodes).filter(j.isLi), (c || !j.isList(i.parentNode)) && (e = a.map(e, function(a) {
                            return j.replace(a, "P")
                        })), a.each(g.from(e).reverse(), function(a, b) {
                            j.insertAfter(b, i)
                        });
                        var m = g.compact([i, l, k]);
                        a.each(m, function(b, c) {
                            var d = [c].concat(j.listDescendant(c, j.isList));
                            a.each(d.reverse(), function(a, b) {
                                j.nodeLength(b) || j.remove(b, !0)
                            })
                        }), d = d.concat(e)
                    }), d
                }
            },
            s = function() {
                var b = new n,
                    c = new q,
                    d = new p,
                    f = new r;
                this.saveRange = function(a, b) {
                    a.focus(), a.data("range", o.create()), b && o.create().collapse().select()
                }, this.restoreRange = function(a) {
                    var b = a.data("range");
                    b && (b.select(), a.focus())
                }, this.currentStyle = function(a) {
                    var c = o.create();
                    return c ? c.isOnEditable() && b.current(c, a) : !1
                };
                var h = this.triggerOnChange = function(a) {
                    var b = a.data("callbacks").onChange;
                    b && b(a.html(), a)
                };
                this.undo = function(a) {
                    a.data("NoteHistory").undo(), h(a)
                }, this.redo = function(a) {
                    a.data("NoteHistory").redo(), h(a)
                };
                for (var i = this.afterCommand = function(a) {
                        a.data("NoteHistory").recordUndo(), h(a)
                    }, k = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "insertHorizontalRule", "fontName"], m = 0, s = k.length; s > m; m++) this[k[m]] = function(a) {
                    return function(b, c) {
                        document.execCommand(a, !1, c), i(b)
                    }
                }(k[m]);
                this.tab = function(a, b) {
                    var e = o.create();
                    e.isCollapsed() && e.isOnCell() ? c.tab(e) : (d.insertTab(a, e, b.tabsize), i(a))
                }, this.untab = function() {
                    var a = o.create();
                    a.isCollapsed() && a.isOnCell() && c.tab(a, !0)
                }, this.insertParagraph = function(a) {
                    d.insertParagraph(a), i(a)
                }, this.insertOrderedList = function(a) {
                    f.insertOrderedList(a), i(a)
                }, this.insertUnorderedList = function(a) {
                    f.insertUnorderedList(a), i(a)
                }, this.indent = function(a) {
                    f.indent(a), i(a)
                }, this.outdent = function(a) {
                    f.outdent(a), i(a)
                }, this.insertImage = function(a, b, c) {
                    l.createImage(b, c).then(function(b) {
                        b.css({
                            display: "",
                            width: Math.min(a.width(), b.width())
                        }), o.create().insertNode(b[0]), i(a)
                    }).fail(function() {
                        var b = a.data("callbacks");
                        b.onImageUploadError && b.onImageUploadError()
                    })
                }, this.insertVideo = function(b, c) {
                    var d, e = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                        f = c.match(e),
                        g = /\/\/instagram.com\/p\/(.[a-zA-Z0-9]*)/,
                        h = c.match(g),
                        j = /\/\/vine.co\/v\/(.[a-zA-Z0-9]*)/,
                        k = c.match(j),
                        l = /\/\/(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/,
                        m = c.match(l),
                        n = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
                        p = c.match(n),
                        q = /\/\/v\.youku\.com\/v_show\/id_(\w+)\.html/,
                        r = c.match(q);
                    if (f && 11 === f[2].length) {
                        var s = f[2];
                        d = a("<iframe>").attr("src", "//www.youtube.com/embed/" + s).attr("width", "640").attr("height", "360")
                    } else h && h[0].length ? d = a("<iframe>").attr("src", h[0] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true") : k && k[0].length ? d = a("<iframe>").attr("src", k[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed") : m && m[3].length ? d = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("src", "//player.vimeo.com/video/" + m[3]).attr("width", "640").attr("height", "360") : p && p[2].length ? d = a("<iframe>").attr("src", "//www.dailymotion.com/embed/video/" + p[2]).attr("width", "640").attr("height", "360") : r && r[1].length && (d = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + r[1]));
                    d && (d.attr("frameborder", 0), o.create().insertNode(d[0]), i(b))
                }, this.formatBlock = function(a, b) {
                    b = e.isMSIE ? "<" + b + ">" : b, document.execCommand("FormatBlock", !1, b), i(a)
                }, this.formatPara = function(a) {
                    this.formatBlock(a, "P"), i(a)
                };
                for (var m = 1; 6 >= m; m++) this["formatH" + m] = function(a) {
                    return function(b) {
                        this.formatBlock(b, "H" + a)
                    }
                }(m);
                this.fontSize = function(a, b) {
                    document.execCommand("fontSize", !1, 3), e.isFF ? a.find("font[size=3]").removeAttr("size").css("font-size", b + "px") : a.find("span").filter(function() {
                        return "medium" === this.style.fontSize
                    }).css("font-size", b + "px"), i(a)
                }, this.lineHeight = function(a, c) {
                    b.stylePara(o.create(), {
                        lineHeight: c
                    }), i(a)
                }, this.unlink = function(a) {
                    var b = o.create();
                    if (b.isOnAnchor()) {
                        var c = j.ancestor(b.sc, j.isAnchor);
                        b = o.createFromNode(c), b.select(), document.execCommand("unlink"), i(a)
                    }
                }, this.createLink = function(b, c, d) {
                    var e = c.url,
                        f = c.text,
                        g = c.newWindow,
                        h = c.range;
                    d.onCreateLink && (e = d.onCreateLink(e)), h = h.deleteContents();
                    var j = h.insertNode(a("<A>" + f + "</A>")[0], !0);
                    a(j).attr({
                        href: e,
                        target: g ? "_blank" : ""
                    }), o.createFromNode(j).select(), i(b)
                }, this.getLinkInfo = function(b) {
                    b.focus();
                    var c = o.create().expand(j.isAnchor),
                        d = a(g.head(c.nodes(j.isAnchor)));
                    return {
                        range: c,
                        text: c.toString(),
                        isNewWindow: d.length ? "_blank" === d.attr("target") : !0,
                        url: d.length ? d.attr("href") : ""
                    }
                }, this.getVideoInfo = function(a) {
                    a.focus();
                    var b = o.create();
                    if (b.isOnAnchor()) {
                        var c = j.ancestor(b.sc, j.isAnchor);
                        b = o.createFromNode(c)
                    }
                    return {
                        text: b.toString()
                    }
                }, this.color = function(a, b) {
                    var c = JSON.parse(b),
                        d = c.foreColor,
                        e = c.backColor;
                    d && document.execCommand("foreColor", !1, d), e && document.execCommand("backColor", !1, e), i(a)
                }, this.insertTable = function(a, b) {
                    var d = b.split("x"),
                        e = o.create();
                    e = e.deleteContents(), e.insertNode(c.createTable(d[0], d[1])), i(a)
                }, this.floatMe = function(a, b, c) {
                    c.css("float", b), i(a)
                }, this.imageShape = function(a, b, c) {
                    c.removeClass("img-rounded img-circle img-thumbnail"), b && c.addClass(b)
                }, this.resize = function(a, b, c) {
                    c.css({
                        width: 100 * b + "%",
                        height: ""
                    }), i(a)
                }, this.resizeTo = function(a, b, c) {
                    var d;
                    if (c) {
                        var e = a.y / a.x,
                            f = b.data("ratio");
                        d = {
                            width: f > e ? a.x : a.y / f,
                            height: f > e ? a.x * f : a.y
                        }
                    } else d = {
                        width: a.x,
                        height: a.y
                    };
                    b.css(d)
                }, this.removeMedia = function(a, b, c) {
                    c.detach(), i(a)
                }
            },
            t = function(a) {
                var b = [],
                    c = -1,
                    d = a[0],
                    e = function() {
                        var b = o.create(),
                            c = {
                                s: {
                                    path: [0],
                                    offset: 0
                                },
                                e: {
                                    path: [0],
                                    offset: 0
                                }
                            };
                        return {
                            contents: a.html(),
                            bookmark: b ? b.bookmark(d) : c
                        }
                    },
                    f = function(b) {
                        null !== b.contents && a.html(b.contents), null !== b.bookmark && o.createFromBookmark(d, b.bookmark).select()
                    };
                this.undo = function() {
                    c > 0 && (c--, f(b[c]))
                }, this.redo = function() {
                    b.length - 1 > c && (c++, f(b[c]))
                }, this.recordUndo = function() {
                    c++, b.length > c && (b = b.slice(0, c)), b.push(e())
                }, this.recordUndo()
            },
            u = function() {
                this.update = function(b, c) {
                    var d = function(b, c) {
                            b.find(".dropdown-menu li a").each(function() {
                                var b = a(this).data("value") + "" == c + "";
                                this.className = b ? "checked" : ""
                            })
                        },
                        e = function(a, c) {
                            var d = b.find(a);
                            d.toggleClass("active", c())
                        },
                        f = b.find(".note-fontname");
                    if (f.length) {
                        var h = c["font-family"];
                        h && (h = g.head(h.split(",")), h = h.replace(/\'/g, ""), f.find(".note-current-fontname").text(h), d(f, h))
                    }
                    var i = b.find(".note-fontsize");
                    i.find(".note-current-fontsize").text(c["font-size"]), d(i, parseFloat(c["font-size"]));
                    var j = b.find(".note-height");
                    d(j, parseFloat(c["line-height"])), e('button[data-event="bold"]', function() {
                        return "bold" === c["font-bold"]
                    }), e('button[data-event="italic"]', function() {
                        return "italic" === c["font-italic"]
                    }), e('button[data-event="underline"]', function() {
                        return "underline" === c["font-underline"]
                    }), e('button[data-event="strikethrough"]', function() {
                        return "strikethrough" === c["font-strikethrough"]
                    }), e('button[data-event="superscript"]', function() {
                        return "superscript" === c["font-superscript"]
                    }), e('button[data-event="subscript"]', function() {
                        return "subscript" === c["font-subscript"]
                    }), e('button[data-event="justifyLeft"]', function() {
                        return "left" === c["text-align"] || "start" === c["text-align"]
                    }), e('button[data-event="justifyCenter"]', function() {
                        return "center" === c["text-align"]
                    }), e('button[data-event="justifyRight"]', function() {
                        return "right" === c["text-align"]
                    }), e('button[data-event="justifyFull"]', function() {
                        return "justify" === c["text-align"]
                    }), e('button[data-event="insertUnorderedList"]', function() {
                        return "unordered" === c["list-style"]
                    }), e('button[data-event="insertOrderedList"]', function() {
                        return "ordered" === c["list-style"]
                    })
                }, this.updateRecentColor = function(b, c, d) {
                    var e = a(b).closest(".note-color"),
                        f = e.find(".note-recent-color"),
                        g = JSON.parse(f.attr("data-value"));
                    g[c] = d, f.attr("data-value", JSON.stringify(g));
                    var h = "backColor" === c ? "background-color" : "color";
                    f.find("i").css(h, d)
                }
            },
            v = function() {
                var a = new u;
                this.update = function(b, c) {
                    a.update(b, c)
                }, this.updateRecentColor = function(b, c, d) {
                    a.updateRecentColor(b, c, d)
                }, this.activate = function(a) {
                    a.find("button").not('button[data-event="codeview"]').removeClass("disabled")
                }, this.deactivate = function(a) {
                    a.find("button").not('button[data-event="codeview"]').addClass("disabled")
                }, this.updateFullscreen = function(a, b) {
                    var c = a.find('button[data-event="fullscreen"]');
                    c.toggleClass("active", b)
                }, this.updateCodeview = function(a, b) {
                    var c = a.find('button[data-event="codeview"]');
                    c.toggleClass("active", b)
                }
            },
            w = function() {
                var b = new u,
                    c = function(b, c) {
                        var d = a(b),
                            e = c ? d.offset() : d.position(),
                            f = d.outerHeight(!0);
                        return {
                            left: e.left,
                            top: e.top + f
                        }
                    },
                    d = function(a, b) {
                        a.css({
                            display: "block",
                            left: b.left,
                            top: b.top
                        })
                    },
                    e = 20;
                this.update = function(h, i, j) {
                    b.update(h, i);
                    var k = h.find(".note-link-popover");
                    if (i.anchor) {
                        var l = k.find("a"),
                            m = a(i.anchor).attr("href");
                        l.attr("href", m).html(m), d(k, c(i.anchor, j))
                    } else k.hide();
                    var n = h.find(".note-image-popover");
                    i.image ? d(n, c(i.image, j)) : n.hide();
                    var o = h.find(".note-air-popover");
                    if (j && !i.range.isCollapsed()) {
                        var p = f.rect2bnd(g.last(i.range.getClientRects()));
                        d(o, {
                            left: Math.max(p.left + p.width / 2 - e, 0),
                            top: p.top + p.height
                        })
                    } else o.hide()
                }, this.updateRecentColor = function(a, b, c) {
                    a.updateRecentColor(a, b, c)
                }, this.hide = function(a) {
                    a.children().hide()
                }
            },
            x = function() {
                this.update = function(b, c, d) {
                    var e = b.find(".note-control-selection");
                    if (c.image) {
                        var f = a(c.image),
                            g = d ? f.offset() : f.position(),
                            h = {
                                w: f.outerWidth(!0),
                                h: f.outerHeight(!0)
                            };
                        e.css({
                            display: "block",
                            left: g.left,
                            top: g.top,
                            width: h.w,
                            height: h.h
                        }).data("target", c.image);
                        var i = h.w + "x" + h.h;
                        e.find(".note-control-selection-info").text(i)
                    } else e.hide()
                }, this.hide = function(a) {
                    a.children().hide()
                }
            },
            y = function() {
                var b = function(a, b) {
                    a.toggleClass("disabled", !b), a.attr("disabled", !b)
                };
                this.showImageDialog = function(c, d) {
                    return a.Deferred(function(a) {
                        var c = d.find(".note-image-dialog"),
                            e = d.find(".note-image-input"),
                            f = d.find(".note-image-url"),
                            g = d.find(".note-image-btn");
                        c.one("shown.bs.modal", function() {
                            e.replaceWith(e.clone().on("change", function() {
                                a.resolve(this.files), c.modal("hide")
                            }).val("")), g.click(function(b) {
                                b.preventDefault(), a.resolve(f.val()), c.modal("hide")
                            }), f.on("keyup paste", function(a) {
                                var c;
                                c = "paste" === a.type ? a.originalEvent.clipboardData.getData("text") : f.val(), b(g, c)
                            }).val("").trigger("focus")
                        }).one("hidden.bs.modal", function() {
                            e.off("change"), f.off("keyup paste"), g.off("click"), "pending" === a.state() && a.reject()
                        }).modal("show")
                    })
                }, this.showVideoDialog = function(c, d, e) {
                    return a.Deferred(function(a) {
                        var c = d.find(".note-video-dialog"),
                            f = c.find(".note-video-url"),
                            g = c.find(".note-video-btn");
                        c.one("shown.bs.modal", function() {
                            f.val(e.text).keyup(function() {
                                b(g, f.val())
                            }).trigger("keyup").trigger("focus"), g.click(function(b) {
                                b.preventDefault(), a.resolve(f.val()), c.modal("hide")
                            })
                        }).one("hidden.bs.modal", function() {
                            f.off("keyup"), g.off("click"), "pending" === a.state() && a.reject()
                        }).modal("show")
                    })
                }, this.showLinkDialog = function(c, d, e) {
                    return a.Deferred(function(a) {
                        var c = d.find(".note-link-dialog"),
                            f = c.find(".note-link-text"),
                            g = c.find(".note-link-url"),
                            h = c.find(".note-link-btn"),
                            i = c.find("input[type=checkbox]");
                        c.one("shown.bs.modal", function() {
                            f.val(e.text), f.keyup(function() {
                                e.text = f.val()
                            }), e.url || (e.url = e.text, b(h, e.text)), g.keyup(function() {
                                b(h, g.val()), e.text || f.val(g.val())
                            }).val(e.url).trigger("focus").trigger("select"), i.prop("checked", e.newWindow), h.one("click", function(b) {
                                b.preventDefault(), a.resolve({
                                    range: e.range,
                                    url: g.val(),
                                    text: f.val(),
                                    newWindow: i.is(":checked")
                                }), c.modal("hide")
                            })
                        }).one("hidden.bs.modal", function() {
                            f.off("keyup"), g.off("keyup"), h.off("click"), "pending" === a.state() && a.reject()
                        }).modal("show")
                    }).promise()
                }, this.showHelpDialog = function(b, c) {
                    return a.Deferred(function(a) {
                        var b = c.find(".note-help-dialog");
                        b.one("hidden.bs.modal", function() {
                            a.resolve()
                        }).modal("show")
                    }).promise()
                }
            };
        e.hasCodeMirror && (e.isSupportAmd ? require(["CodeMirror"], function(a) {
            b = a
        }) : b = window.CodeMirror);
        var z = function() {
                var c = a(window),
                    d = a(document),
                    f = a("html, body"),
                    h = new s,
                    i = new v,
                    k = new w,
                    n = new x,
                    o = new y,
                    p = function(b) {
                        var c = a(b).closest(".note-editor, .note-air-editor, .note-air-layout");
                        if (!c.length) return null;
                        var d;
                        return d = c.is(".note-editor, .note-air-editor") ? c : a("#note-editor-" + g.last(c.attr("id").split("-"))), j.buildLayoutInfo(d)
                    },
                    q = function(b, c) {
                        var d = b.data("callbacks");
                        d.onImageUpload ? d.onImageUpload(c, h, b) : a.each(c, function(a, c) {
                            var e = c.name;
                            l.readFileAsDataURL(c).then(function(a) {
                                h.insertImage(b, a, e)
                            }).fail(function() {
                                d.onImageUploadError && d.onImageUploadError()
                            })
                        })
                    },
                    r = {
                        showLinkDialog: function(a) {
                            var b = a.editor(),
                                c = a.dialog(),
                                d = a.editable(),
                                e = h.getLinkInfo(d),
                                f = b.data("options");
                            h.saveRange(d), o.showLinkDialog(d, c, e).then(function(b) {
                                h.restoreRange(d), h.createLink(d, b, f), k.hide(a.popover())
                            }).fail(function() {
                                h.restoreRange(d)
                            })
                        },
                        showImageDialog: function(a) {
                            var b = a.dialog(),
                                c = a.editable();
                            h.saveRange(c), o.showImageDialog(c, b).then(function(a) {
                                h.restoreRange(c), "string" == typeof a ? h.insertImage(c, a) : q(c, a)
                            }).fail(function() {
                                h.restoreRange(c)
                            })
                        },
                        showVideoDialog: function(a) {
                            var b = a.dialog(),
                                c = a.editable(),
                                d = h.getVideoInfo(c);
                            h.saveRange(c), o.showVideoDialog(c, b, d).then(function(a) {
                                h.restoreRange(c), h.insertVideo(c, a)
                            }).fail(function() {
                                h.restoreRange(c)
                            })
                        },
                        showHelpDialog: function(a) {
                            var b = a.dialog(),
                                c = a.editable();
                            h.saveRange(c, !0), o.showHelpDialog(c, b).then(function() {
                                h.restoreRange(c)
                            })
                        },
                        fullscreen: function(a) {
                            var b = a.editor(),
                                d = a.toolbar(),
                                e = a.editable(),
                                g = a.codable(),
                                h = b.data("options"),
                                j = function(a) {
                                    b.css("width", a.w), e.css("height", a.h), g.css("height", a.h), g.data("cmeditor") && g.data("cmeditor").setsize(null, a.h)
                                };
                            b.toggleClass("fullscreen");
                            var k = b.hasClass("fullscreen");
                            k ? (e.data("orgheight", e.css("height")), c.on("resize", function() {
                                j({
                                    w: c.width(),
                                    h: c.height() - d.outerHeight()
                                })
                            }).trigger("resize"), f.css("overflow", "hidden")) : (c.off("resize"), j({
                                w: h.width || "",
                                h: e.data("orgheight")
                            }), f.css("overflow", "visible")), i.updateFullscreen(d, k)
                        },
                        codeview: function(a) {
                            var c, d, f = a.editor(),
                                g = a.toolbar(),
                                h = a.editable(),
                                l = a.codable(),
                                m = a.popover(),
                                n = f.data("options");
                            f.toggleClass("codeview");
                            var o = f.hasClass("codeview");
                            o ? (l.val(j.html(h, !0)), l.height(h.height()), i.deactivate(g), k.hide(m), l.focus(), e.hasCodeMirror && (c = b.fromTextArea(l[0], n.codemirror), n.codemirror.tern && (d = new b.TernServer(n.codemirror.tern), c.ternServer = d, c.on("cursorActivity", function(a) {
                                d.updateArgHints(a)
                            })), c.setSize(null, h.outerHeight()), l.data("cmEditor", c))) : (e.hasCodeMirror && (c = l.data("cmEditor"), l.val(c.getValue()), c.toTextArea()), h.html(j.value(l) || j.emptyPara), h.height(n.height ? l.height() : "auto"), i.activate(g), h.focus()), i.updateCodeview(a.toolbar(), o)
                        }
                    },
                    u = function(a) {
                        j.isImg(a.target) && a.preventDefault()
                    },
                    z = function(a) {
                        setTimeout(function() {
                            var b = p(a.currentTarget || a.target),
                                c = h.currentStyle(a.target);
                            if (c) {
                                var d = b.editor().data("options").airMode;
                                d || i.update(b.toolbar(), c), k.update(b.popover(), c, d), n.update(b.handle(), c, d)
                            }
                        }, 0)
                    },
                    A = function(a) {
                        var b = p(a.currentTarget || a.target);
                        k.hide(b.popover()), n.hide(b.handle())
                    },
                    B = function(a) {
                        var b = a.originalEvent.clipboardData;
                        if (b && b.items && b.items.length) {
                            var c = p(a.currentTarget || a.target),
                                d = c.editable(),
                                e = g.head(b.items),
                                f = "file" === e.kind && -1 !== e.type.indexOf("image/");
                            f && q(d, [e.getAsFile()]), h.afterCommand(d)
                        }
                    },
                    C = function(b) {
                        if (j.isControlSizing(b.target)) {
                            b.preventDefault(), b.stopPropagation();
                            var c = p(b.target),
                                e = c.handle(),
                                f = c.popover(),
                                g = c.editable(),
                                i = c.editor(),
                                l = e.find(".note-control-selection").data("target"),
                                m = a(l),
                                o = m.offset(),
                                q = d.scrollTop(),
                                r = i.data("options").airMode;
                            d.on("mousemove", function(a) {
                                h.resizeTo({
                                    x: a.clientX - o.left,
                                    y: a.clientY - (o.top - q)
                                }, m, !a.shiftKey), n.update(e, {
                                    image: l
                                }, r), k.update(f, {
                                    image: l
                                }, r)
                            }).one("mouseup", function() {
                                d.off("mousemove")
                            }), m.data("ratio") || m.data("ratio", m.height() / m.width()), h.afterCommand(g)
                        }
                    },
                    D = function(b) {
                        var c = a(b.target).closest("[data-event]");
                        c.length && b.preventDefault()
                    },
                    E = function(b) {
                        var c = a(b.target).closest("[data-event]");
                        if (c.length) {
                            var d = c.attr("data-event"),
                                e = c.attr("data-value"),
                                f = c.attr("data-hide"),
                                j = p(b.target);
                            b.preventDefault();
                            var l;
                            if (-1 !== a.inArray(d, ["resize", "floatMe", "removeMedia", "imageShape"])) {
                                var m = j.handle().find(".note-control-selection");
                                l = a(m.data("target"))
                            }
                            if (f && c.parents(".popover").hide(), h[d]) {
                                var n = j.editable();
                                n.trigger("focus"), h[d](n, e, l)
                            } else r[d] && r[d].call(this, j);
                            if (-1 !== a.inArray(d, ["backColor", "foreColor"])) {
                                var o = j.editor().data("options", o),
                                    q = o.airMode ? k : i;
                                q.updateRecentColor(g.head(c), d, e)
                            }
                            z(b)
                        }
                    },
                    F = 24,
                    G = function(a) {
                        a.preventDefault(), a.stopPropagation();
                        var b = p(a.target).editable(),
                            c = b.offset().top - d.scrollTop(),
                            e = p(a.currentTarget || a.target),
                            f = e.editor().data("options");
                        d.on("mousemove", function(a) {
                            var d = a.clientY - (c + F);
                            d = f.minHeight > 0 ? Math.max(d, f.minHeight) : d, d = f.maxHeight > 0 ? Math.min(d, f.maxHeight) : d, b.height(d)
                        }).one("mouseup", function() {
                            d.off("mousemove")
                        })
                    },
                    H = 18,
                    I = function(b, c) {
                        var d, e = a(b.target.parentNode),
                            f = e.next(),
                            g = e.find(".note-dimension-picker-mousecatcher"),
                            h = e.find(".note-dimension-picker-highlighted"),
                            i = e.find(".note-dimension-picker-unhighlighted");
                        if (void 0 === b.offsetX) {
                            var j = a(b.target).offset();
                            d = {
                                x: b.pageX - j.left,
                                y: b.pageY - j.top
                            }
                        } else d = {
                            x: b.offsetX,
                            y: b.offsetY
                        };
                        var k = {
                            c: Math.ceil(d.x / H) || 1,
                            r: Math.ceil(d.y / H) || 1
                        };
                        h.css({
                            width: k.c + "em",
                            height: k.r + "em"
                        }), g.attr("data-value", k.c + "x" + k.r), 3 < k.c && k.c < c.insertTableMaxSize.col && i.css({
                            width: k.c + 1 + "em"
                        }), 3 < k.r && k.r < c.insertTableMaxSize.row && i.css({
                            height: k.r + 1 + "em"
                        }), f.html(k.c + " x " + k.r)
                    },
                    J = function(a, b) {
                        b ? d.on("drop", function(a) {
                            a.preventDefault()
                        }) : K(a)
                    },
                    K = function(b) {
                        var c = a(),
                            e = b.dropzone,
                            f = b.dropzone.find(".note-dropzone-message");
                        d.on("dragenter", function(a) {
                            var d = b.editor.hasClass("codeview");
                            d || c.length || (b.editor.addClass("dragover"), e.width(b.editor.width()), e.height(b.editor.height()), f.text("Drag Image Here")), c = c.add(a.target)
                        }).on("dragleave", function(a) {
                            c = c.not(a.target), c.length || b.editor.removeClass("dragover")
                        }).on("drop", function() {
                            c = a(), b.editor.removeClass("dragover")
                        }), e.on("dragenter", function() {
                            e.addClass("hover"), f.text("Drop Image")
                        }).on("dragleave", function() {
                            e.removeClass("hover"), f.text("Drag Image Here")
                        }), e.on("drop", function(a) {
                            a.preventDefault();
                            var b = a.originalEvent.dataTransfer;
                            if (b && b.files) {
                                var c = p(a.currentTarget || a.target);
                                c.editable().focus(), q(c.editable(), b.files)
                            }
                        }).on("dragover", !1)
                    };
                this.bindKeyMap = function(a, b) {
                    var c = a.editor,
                        d = a.editable;
                    a = p(d), d.on("keydown", function(e) {
                        var f = [];
                        e.metaKey && f.push("CMD"), e.ctrlKey && !e.altKey && f.push("CTRL"), e.shiftKey && f.push("SHIFT");
                        var g = m.nameFromCode[e.keyCode];
                        g && f.push(g);
                        var i = b[f.join("+")];
                        i ? (e.preventDefault(), h[i] ? h[i](d, c.data("options")) : r[i] && r[i].call(this, a)) : m.isEdit(e.keyCode) && h.afterCommand(d)
                    })
                }, this.attach = function(a, b) {
                    this.bindKeyMap(a, b.keyMap[e.isMac ? "mac" : "pc"]), a.editable.on("mousedown", u), a.editable.on("keyup mouseup", z), a.editable.on("scroll", A), a.editable.on("paste", B), a.handle.on("mousedown", C), a.popover.on("click", E), a.popover.on("mousedown", D), b.airMode || (J(a, b.disableDragAndDrop), a.toolbar.on("click", E), a.toolbar.on("mousedown", D), b.disableResizeEditor || a.statusbar.on("mousedown", G));
                    var c = b.airMode ? a.popover : a.toolbar,
                        d = c.find(".note-dimension-picker-mousecatcher");
                    d.css({
                        width: b.insertTableMaxSize.col + "em",
                        height: b.insertTableMaxSize.row + "em"
                    }).on("mousemove", function(a) {
                        I(a, b)
                    }), a.editor.data("options", b), b.styleWithSpan && !e.isMSIE && setTimeout(function() {
                        document.execCommand("styleWithCSS", 0, !0)
                    }, 0);
                    var f = new t(a.editable);
                    if (a.editable.data("NoteHistory", f), b.onenter && a.editable.keypress(function(a) {
                            a.keyCode === m.ENTER && b.onenter(a)
                        }), b.onfocus && a.editable.focus(b.onfocus), b.onblur && a.editable.blur(b.onblur), b.onkeyup && a.editable.keyup(b.onkeyup), b.onkeydown && a.editable.keydown(b.onkeydown), b.onpaste && a.editable.on("paste", b.onpaste), b.onToolbarClick && a.toolbar.click(b.onToolbarClick), b.onChange) {
                        var g = function() {
                            h.triggerOnChange(a.editable)
                        };
                        if (e.isMSIE) {
                            var i = "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted";
                            a.editable.on(i, g)
                        } else a.editable.on("input", g)
                    }
                    a.editable.data("callbacks", {
                        onChange: b.onChange,
                        onAutoSave: b.onAutoSave,
                        onImageUpload: b.onImageUpload,
                        onImageUploadError: b.onImageUploadError,
                        onFileUpload: b.onFileUpload,
                        onFileUploadError: b.onFileUpload
                    })
                }, this.dettach = function(a, b) {
                    a.editable.off(), a.popover.off(), a.handle.off(), a.dialog.off(), b.airMode || (a.dropzone.off(), a.toolbar.off(), a.statusbar.off())
                }
            },
            A = function() {
                var b = function(a, b) {
                        var c = b.event,
                            d = b.value,
                            e = b.title,
                            f = b.className,
                            g = b.dropdown,
                            h = b.hide;
                        return '<button type="button" class="btn btn-default btn-sm btn-small' + (f ? " " + f : "") + (g ? " dropdown-toggle" : "") + '"' + (g ? ' data-toggle="dropdown"' : "") + (e ? ' title="' + e + '"' : "") + (c ? ' data-event="' + c + '"' : "") + (d ? " data-value='" + d + "'" : "") + (h ? " data-hide='" + h + "'" : "") + ' tabindex="-1">' + a + (g ? ' <span class="caret"></span>' : "") + "</button>" + (g || "")
                    },
                    c = function(a, c) {
                        var d = '<i class="' + a + '"></i>';
                        return b(d, c)
                    },
                    d = function(a, b) {
                        return '<div class="' + a + ' popover bottom in" style="display: none;"><div class="arrow"></div><div class="popover-content">' + b + "</div></div>"
                    },
                    g = function(a, b, c, d) {
                        return '<div class="' + a + ' modal" aria-hidden="false"><div class="modal-dialog"><div class="modal-content">' + (b ? '<div class="modal-header"><button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button><h4 class="modal-title">' + b + "</h4></div>" : "") + '<form class="note-modal-form"><div class="modal-body"><div class="row-fluid">' + c + "</div></div>" + (d ? '<div class="modal-footer">' + d + "</div>" : "") + "</form></div></div></div>"
                    },
                    h = {
                        picture: function(a) {
                            return c("fa fa-picture-o icon-picture", {
                                event: "showImageDialog",
                                title: a.image.image,
                                hide: !0
                            })
                        },
                        link: function(a) {
                            return c("fa fa-link icon-link", {
                                event: "showLinkDialog",
                                title: a.link.link,
                                hide: !0
                            })
                        },
                        video: function(a) {
                            return c("fa fa-youtube-play icon-play", {
                                event: "showVideoDialog",
                                title: a.video.video,
                                hide: !0
                            })
                        },
                        table: function(a) {
                            var b = '<ul class="note-table dropdown-menu"><div class="note-dimension-picker"><div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div><div class="note-dimension-picker-highlighted"></div><div class="note-dimension-picker-unhighlighted"></div></div><div class="note-dimension-display"> 1 x 1 </div></ul>';
                            return c("fa fa-table icon-table", {
                                title: a.table.table,
                                dropdown: b
                            })
                        },
                        style: function(a, b) {
                            var d = b.styleTags.reduce(function(b, c) {
                                var d = a.style["p" === c ? "normal" : c];
                                return b + '<li><a data-event="formatBlock" href="#" data-value="' + c + '">' + ("p" === c || "pre" === c ? d : "<" + c + ">" + d + "</" + c + ">") + "</a></li>"
                            }, "");
                            return c("fa fa-magic icon-magic", {
                                title: a.style.style,
                                dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                            })
                        },
                        fontname: function(a, c) {
                            var d = c.fontNames.reduce(function(a, b) {
                                    return e.isFontInstalled(b) ? a + '<li><a data-event="fontName" href="#" data-value="' + b + '"><i class="fa fa-check icon-ok"></i> ' + b + "</a></li>" : a
                                }, ""),
                                f = '<span class="note-current-fontname">' + c.defaultFontName + "</span>";
                            return b(f, {
                                title: a.font.name,
                                dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                            })
                        },
                        fontsize: function(a, c) {
                            var d = c.fontSizes.reduce(function(a, b) {
                                    return a + '<li><a data-event="fontSize" href="#" data-value="' + b + '"><i class="fa fa-check icon-ok"></i> ' + b + "</a></li>"
                                }, ""),
                                e = '<span class="note-current-fontsize">11</span>';
                            return b(e, {
                                title: a.font.size,
                                dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                            })
                        },
                        color: function(a) {
                            var c = '<i class="fa fa-font icon-font" style="color:black;background-color:yellow;"></i>',
                                d = b(c, {
                                    className: "note-recent-color",
                                    title: a.color.recent,
                                    event: "color",
                                    value: '{"backColor":"yellow"}'
                                }),
                                e = '<ul class="dropdown-menu"><li><div class="btn-group"><div class="note-palette-title">' + a.color.background + '</div><div class="note-color-reset" data-event="backColor" data-value="inherit" title="' + a.color.transparent + '">' + a.color.setTransparent + '</div><div class="note-color-palette" data-target-event="backColor"></div></div><div class="btn-group"><div class="note-palette-title">' + a.color.foreground + '</div><div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + a.color.reset + '">' + a.color.resetToDefault + '</div><div class="note-color-palette" data-target-event="foreColor"></div></div></li></ul>',
                                f = b("", {
                                    title: a.color.more,
                                    dropdown: e
                                });
                            return d + f
                        },
                        bold: function(a) {
                            return c("fa fa-bold icon-bold", {
                                event: "bold",
                                title: a.font.bold
                            })
                        },
                        italic: function(a) {
                            return c("fa fa-italic icon-italic", {
                                event: "italic",
                                title: a.font.italic
                            })
                        },
                        underline: function(a) {
                            return c("fa fa-underline icon-underline", {
                                event: "underline",
                                title: a.font.underline
                            })
                        },
                        strikethrough: function(a) {
                            return c("fa fa-strikethrough icon-strikethrough", {
                                event: "strikethrough",
                                title: a.font.strikethrough
                            })
                        },
                        superscript: function(a) {
                            return c("fa fa-superscript icon-superscript", {
                                event: "superscript",
                                title: a.font.superscript
                            })
                        },
                        subscript: function(a) {
                            return c("fa fa-subscript icon-subscript", {
                                event: "subscript",
                                title: a.font.subscript
                            })
                        },
                        clear: function(a) {
                            return c("fa fa-eraser icon-eraser", {
                                event: "removeFormat",
                                title: a.font.clear
                            })
                        },
                        ul: function(a) {
                            return c("fa fa-list-ul icon-list-ul", {
                                event: "insertUnorderedList",
                                title: a.lists.unordered
                            })
                        },
                        ol: function(a) {
                            return c("fa fa-list-ol icon-list-ol", {
                                event: "insertOrderedList",
                                title: a.lists.ordered
                            })
                        },
                        paragraph: function(a) {
                            var b = c("fa fa-align-left icon-align-left", {
                                    title: a.paragraph.left,
                                    event: "justifyLeft"
                                }),
                                d = c("fa fa-align-center icon-align-center", {
                                    title: a.paragraph.center,
                                    event: "justifyCenter"
                                }),
                                e = c("fa fa-align-right icon-align-right", {
                                    title: a.paragraph.right,
                                    event: "justifyRight"
                                }),
                                f = c("fa fa-align-justify icon-align-justify", {
                                    title: a.paragraph.justify,
                                    event: "justifyFull"
                                }),
                                g = c("fa fa-outdent icon-indent-left", {
                                    title: a.paragraph.outdent,
                                    event: "outdent"
                                }),
                                h = c("fa fa-indent icon-indent-right", {
                                    title: a.paragraph.indent,
                                    event: "indent"
                                }),
                                i = '<div class="dropdown-menu"><div class="note-align btn-group">' + b + d + e + f + '</div><div class="note-list btn-group">' + h + g + "</div></div>";
                            return c("fa fa-align-left icon-align-left", {
                                title: a.paragraph.paragraph,
                                dropdown: i
                            })
                        },
                        height: function(a, b) {
                            var d = b.lineHeights.reduce(function(a, b) {
                                return a + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(b) + '"><i class="fa fa-check icon-ok"></i> ' + b + "</a></li>"
                            }, "");
                            return c("fa fa-text-height icon-text-height", {
                                title: a.font.height,
                                dropdown: '<ul class="dropdown-menu">' + d + "</ul>"
                            })
                        },
                        help: function(a) {
                            return c("fa fa-question icon-question", {
                                event: "showHelpDialog",
                                title: a.options.help,
                                hide: !0
                            })
                        },
                        fullscreen: function(a) {
                            return c("fa fa-arrows-alt icon-fullscreen", {
                                event: "fullscreen",
                                title: a.options.fullscreen
                            })
                        },
                        codeview: function(a) {
                            return c("fa fa-code icon-code", {
                                event: "codeview",
                                title: a.options.codeview
                            })
                        },
                        undo: function(a) {
                            return c("fa fa-undo icon-undo", {
                                event: "undo",
                                title: a.history.undo
                            })
                        },
                        redo: function(a) {
                            return c("fa fa-repeat icon-repeat", {
                                event: "redo",
                                title: a.history.redo
                            })
                        },
                        hr: function(a) {
                            return c("fa fa-minus icon-hr", {
                                event: "insertHorizontalRule",
                                title: a.hr.insert
                            })
                        }
                    },
                    i = function(a, e) {
                        var f = function() {
                                var b = c("fa fa-edit icon-edit", {
                                        title: a.link.edit,
                                        event: "showLinkDialog",
                                        hide: !0
                                    }),
                                    e = c("fa fa-unlink icon-unlink", {
                                        title: a.link.unlink,
                                        event: "unlink"
                                    }),
                                    f = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;<div class="note-insert btn-group">' + b + e + "</div>";
                                return d("note-link-popover", f)
                            },
                            g = function() {
                                var e = b('<span class="note-fontsize-10">100%</span>', {
                                        title: a.image.resizeFull,
                                        event: "resize",
                                        value: "1"
                                    }),
                                    f = b('<span class="note-fontsize-10">50%</span>', {
                                        title: a.image.resizeHalf,
                                        event: "resize",
                                        value: "0.5"
                                    }),
                                    g = b('<span class="note-fontsize-10">25%</span>', {
                                        title: a.image.resizeQuarter,
                                        event: "resize",
                                        value: "0.25"
                                    }),
                                    h = c("fa fa-align-left icon-align-left", {
                                        title: a.image.floatLeft,
                                        event: "floatMe",
                                        value: "left"
                                    }),
                                    i = c("fa fa-align-right icon-align-right", {
                                        title: a.image.floatRight,
                                        event: "floatMe",
                                        value: "right"
                                    }),
                                    j = c("fa fa-align-justify icon-align-justify", {
                                        title: a.image.floatNone,
                                        event: "floatMe",
                                        value: "none"
                                    }),
                                    k = c("fa fa-square icon-unchecked", {
                                        title: a.image.shapeRounded,
                                        event: "imageShape",
                                        value: "img-rounded"
                                    }),
                                    l = c("fa fa-circle-o icon-circle-blank", {
                                        title: a.image.shapeCircle,
                                        event: "imageShape",
                                        value: "img-circle"
                                    }),
                                    m = c("fa fa-picture-o icon-picture", {
                                        title: a.image.shapeThumbnail,
                                        event: "imageShape",
                                        value: "img-thumbnail"
                                    }),
                                    n = c("fa fa-times icon-times", {
                                        title: a.image.shapeNone,
                                        event: "imageShape",
                                        value: ""
                                    }),
                                    o = c("fa fa-trash-o icon-trash", {
                                        title: a.image.remove,
                                        event: "removeMedia",
                                        value: "none"
                                    }),
                                    p = '<div class="btn-group">' + e + f + g + '</div><div class="btn-group">' + h + i + j + '</div><div class="btn-group">' + k + l + m + n + '</div><div class="btn-group">' + o + "</div>";
                                return d("note-image-popover", p)
                            },
                            i = function() {
                                for (var b = "", c = 0, f = e.airPopover.length; f > c; c++) {
                                    var g = e.airPopover[c];
                                    b += '<div class="note-' + g[0] + ' btn-group">';
                                    for (var i = 0, j = g[1].length; j > i; i++) b += h[g[1][i]](a, e);
                                    b += "</div>"
                                }
                                return d("note-air-popover", b)
                            };
                        return '<div class="note-popover">' + f() + g() + (e.airMode ? i() : "") + "</div>"
                    },
                    k = function() {
                        return '<div class="note-handle"><div class="note-control-selection"><div class="note-control-selection-bg"></div><div class="note-control-holder note-control-nw"></div><div class="note-control-holder note-control-ne"></div><div class="note-control-holder note-control-sw"></div><div class="note-control-sizing note-control-se"></div><div class="note-control-selection-info"></div></div></div>'
                    },
                    l = function(a, b) {
                        return '<table class="note-shortcut"><thead><tr><th></th><th>' + a + "</th></tr></thead><tbody>" + b + "</tbody></table>"
                    },
                    m = function(a) {
                        var b = "<tr><td>⌘ + B</td><td>" + a.font.bold + "</td></tr><tr><td>⌘ + I</td><td>" + a.font.italic + "</td></tr><tr><td>⌘ + U</td><td>" + a.font.underline + "</td></tr><tr><td>⌘ + ⇧ + S</td><td>" + a.font.strikethrough + "</td></tr><tr><td>⌘ + \\</td><td>" + a.font.clear + "</td></tr>";
                        return l(a.shortcut.textFormatting, b)
                    },
                    n = function(a) {
                        var b = "<tr><td>⌘ + Z</td><td>" + a.history.undo + "</td></tr><tr><td>⌘ + ⇧ + Z</td><td>" + a.history.redo + "</td></tr><tr><td>⌘ + ]</td><td>" + a.paragraph.indent + "</td></tr><tr><td>⌘ + [</td><td>" + a.paragraph.outdent + "</td></tr><tr><td>⌘ + ENTER</td><td>" + a.hr.insert + "</td></tr>";
                        return l(a.shortcut.action, b)
                    },
                    o = function(a) {
                        var b = "<tr><td>⌘ + ⇧ + L</td><td>" + a.paragraph.left + "</td></tr><tr><td>⌘ + ⇧ + E</td><td>" + a.paragraph.center + "</td></tr><tr><td>⌘ + ⇧ + R</td><td>" + a.paragraph.right + "</td></tr><tr><td>⌘ + ⇧ + J</td><td>" + a.paragraph.justify + "</td></tr><tr><td>⌘ + ⇧ + NUM7</td><td>" + a.lists.ordered + "</td></tr><tr><td>⌘ + ⇧ + NUM8</td><td>" + a.lists.unordered + "</td></tr>";
                        return l(a.shortcut.paragraphFormatting, b)
                    },
                    p = function(a) {
                        var b = "<tr><td>⌘ + NUM0</td><td>" + a.style.normal + "</td></tr><tr><td>⌘ + NUM1</td><td>" + a.style.h1 + "</td></tr><tr><td>⌘ + NUM2</td><td>" + a.style.h2 + "</td></tr><tr><td>⌘ + NUM3</td><td>" + a.style.h3 + "</td></tr><tr><td>⌘ + NUM4</td><td>" + a.style.h4 + "</td></tr><tr><td>⌘ + NUM5</td><td>" + a.style.h5 + "</td></tr><tr><td>⌘ + NUM6</td><td>" + a.style.h6 + "</td></tr>";
                        return l(a.shortcut.documentStyle, b)
                    },
                    q = function(a, b) {
                        var c = b.extraKeys,
                            d = "";
                        for (var e in c) c.hasOwnProperty(e) && (d += "<tr><td>" + e + "</td><td>" + c[e] + "</td></tr>");
                        return l(a.shortcut.extraKeys, d)
                    },
                    r = function(a, b) {
                        var c = '<table class="note-shortcut-layout"><tbody><tr><td>' + n(a, b) + "</td><td>" + m(a, b) + "</td></tr><tr><td>" + p(a, b) + "</td><td>" + o(a, b) + "</td></tr>";
                        return b.extraKeys && (c += '<tr><td colspan="2">' + q(a, b) + "</td></tr>"), c += "</tbody></table>"
                    },
                    s = function(a) {
                        return a.replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift")
                    },
                    t = function(a, b) {
                        var c = function() {
                                var b = '<div class="note-group-select-from-files"><h5>' + a.image.selectFromFiles + '</h5><input class="note-image-input" type="file" name="files" accept="image/*" /></div><h5>' + a.image.url + '</h5><input class="note-image-url form-control span12" type="text" />',
                                    c = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + a.image.insert + "</button>";
                                return g("note-image-dialog", a.image.insert, b, c)
                            },
                            d = function() {
                                var c = '<div class="form-group"><label>' + a.link.textToDisplay + '</label><input class="note-link-text form-control span12" type="text" /></div><div class="form-group"><label>' + a.link.url + '</label><input class="note-link-url form-control span12" type="text" /></div>' + (b.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + a.link.openInNewWindow + "</label></div>"),
                                    d = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + a.link.insert + "</button>";
                                return g("note-link-dialog", a.link.insert, c, d)
                            },
                            f = function() {
                                var b = '<div class="form-group"><label>' + a.video.url + '</label>&nbsp;<small class="text-muted">' + a.video.providers + '</small><input class="note-video-url form-control span12" type="text" /></div>',
                                    c = '<button href="#" class="btn btn-primary note-video-btn disabled" disabled>' + a.video.insert + "</button>";
                                return g("note-video-dialog", a.video.insert, b, c)
                            },
                            h = function() {
                                var c = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + a.shortcut.close + '</a><div class="title">' + a.shortcut.shortcuts + "</div>" + (e.isMac ? r(a, b) : s(r(a, b))) + '<p class="text-center"><a href="//hackerwins.github.io/summernote/" target="_blank">Summernote 0.5.10</a> · <a href="//github.com/HackerWins/summernote" target="_blank">Project</a> · <a href="//github.com/HackerWins/summernote/issues" target="_blank">Issues</a></p>';
                                return g("note-help-dialog", "", c, "")
                            };
                        return '<div class="note-dialog">' + c() + d() + f() + h() + "</div>"
                    },
                    u = function() {
                        return '<div class="note-resizebar"><div class="note-icon-bar"></div><div class="note-icon-bar"></div><div class="note-icon-bar"></div></div>'
                    },
                    v = function(a) {
                        return e.isMac && (a = a.replace("CMD", "⌘").replace("SHIFT", "⇧")), a.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")
                    },
                    w = function(b, c, d) {
                        var e = f.invertObject(c),
                            g = b.find("button");
                        g.each(function(b, c) {
                            var d = a(c),
                                f = e[d.data("event")];
                            f && d.attr("title", function(a, b) {
                                return b + " (" + v(f) + ")"
                            })
                        }).tooltip({
                            container: "body",
                            trigger: "hover",
                            placement: d || "top"
                        }).on("click", function() {
                            a(this).tooltip("hide")
                        })
                    },
                    x = function(b, c) {
                        var d = c.colors;
                        b.find(".note-color-palette").each(function() {
                            for (var b = a(this), c = b.attr("data-target-event"), e = [], f = 0, g = d.length; g > f; f++) {
                                for (var h = d[f], i = [], j = 0, k = h.length; k > j; j++) {
                                    var l = h[j];
                                    i.push(['<button type="button" class="note-color-btn" style="background-color:', l, ';" data-event="', c, '" data-value="', l, '" title="', l, '" data-toggle="button" tabindex="-1"></button>'].join(""))
                                }
                                e.push('<div class="note-color-row">' + i.join("") + "</div>")
                            }
                            b.html(e.join(""))
                        })
                    };
                this.createLayoutByAirMode = function(b, c) {
                    var d = c.keyMap[e.isMac ? "mac" : "pc"],
                        g = a.extend(a.summernote.lang["en-US"], a.summernote.lang[c.lang]),
                        h = f.uniqueId();
                    b.addClass("note-air-editor note-editable"), b.attr({
                        id: "note-editor-" + h,
                        contentEditable: !0
                    });
                    var j = document.body,
                        l = a(i(g, c));
                    l.addClass("note-air-layout"), l.attr("id", "note-popover-" + h), l.appendTo(j), w(l, d), x(l, c);
                    var m = a(k());
                    m.addClass("note-air-layout"), m.attr("id", "note-handle-" + h), m.appendTo(j);
                    var n = a(t(g, c));
                    n.addClass("note-air-layout"), n.attr("id", "note-dialog-" + h), n.find("button.close, a.modal-close").click(function() {
                        a(this).closest(".modal").modal("hide")
                    }), n.appendTo(j)
                }, this.createLayoutByFrame = function(b, c) {
                    var d = a('<div class="note-editor"></div>');
                    c.width && d.width(c.width), c.height > 0 && a('<div class="note-statusbar">' + (c.disableResizeEditor ? "" : u()) + "</div>").prependTo(d);
                    var f = !b.is(":disabled"),
                        g = a('<div class="note-editable" contentEditable="' + f + '"></div>').prependTo(d);
                    c.height && g.height(c.height), c.direction && g.attr("dir", c.direction), g.html(j.html(b) || j.emptyPara), a('<textarea class="note-codable"></textarea>').prependTo(d);
                    for (var l = a.extend(a.summernote.lang["en-US"], a.summernote.lang[c.lang]), m = "", n = 0, o = c.toolbar.length; o > n; n++) {
                        var p = c.toolbar[n][0],
                            q = c.toolbar[n][1];
                        m += '<div class="note-' + p + ' btn-group">';
                        for (var r = 0, s = q.length; s > r; r++) a.isFunction(h[q[r]]) && (m += h[q[r]](l, c));
                        m += "</div>"
                    }
                    m = '<div class="note-toolbar btn-toolbar">' + m + "</div>";
                    var v = a(m).prependTo(d),
                        y = c.keyMap[e.isMac ? "mac" : "pc"];
                    x(v, c), w(v, y, "bottom");
                    var z = a(i(l, c)).prependTo(d);
                    x(z, c), w(z, y), a(k()).prependTo(d);
                    var A = a(t(l, c)).prependTo(d);
                    A.find("button.close, a.modal-close").click(function() {
                        a(this).closest(".modal").modal("hide")
                    }), a('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo(d), d.insertAfter(b), b.hide()
                }, this.noteEditorFromHolder = function(b) {
                    return b.hasClass("note-air-editor") ? b : b.next().hasClass("note-editor") ? b.next() : a()
                }, this.createLayout = function(a, b) {
                    this.noteEditorFromHolder(a).length || (b.airMode ? this.createLayoutByAirMode(a, b) : this.createLayoutByFrame(a, b))
                }, this.layoutInfoFromHolder = function(a) {
                    var b = this.noteEditorFromHolder(a);
                    if (b.length) {
                        var c = j.buildLayoutInfo(b);
                        for (var d in c) c.hasOwnProperty(d) && (c[d] = c[d].call());
                        return c
                    }
                }, this.removeLayout = function(a, b, c) {
                    c.airMode ? (a.removeClass("note-air-editor note-editable").removeAttr("id contentEditable"), b.popover.remove(), b.handle.remove(), b.dialog.remove()) : (a.html(b.editable.html()), b.editor.remove(), a.show())
                }
            };
        a.summernote = a.summernote || {}, a.extend(a.summernote, k);
        var B = new A,
            C = new z;
        a.fn.extend({
            summernote: function(b) {
                if (b = a.extend({}, a.summernote.options, b), this.each(function(c, d) {
                        var e = a(d);
                        B.createLayout(e, b);
                        var f = B.layoutInfoFromHolder(e);
                        C.attach(f, b), j.isTextarea(e[0]) && e.closest("form").submit(function() {
                            e.val(e.code())
                        })
                    }), this.first().length && b.focus) {
                    var c = B.layoutInfoFromHolder(this.first());
                    c.editable.focus()
                }
                return this.length && b.oninit && b.oninit(), this
            },
            code: function(b) {
                if (void 0 === b) {
                    var c = this.first();
                    if (!c.length) return;
                    var d = B.layoutInfoFromHolder(c);
                    if (d && d.editable) {
                        var f = d.editor.hasClass("codeview");
                        return f && e.hasCodeMirror && d.codable.data("cmEditor").save(), f ? d.codable.val() : d.editable.html()
                    }
                    return j.isTextarea(c[0]) ? c.val() : c.html()
                }
                return this.each(function(c, d) {
                    var e = B.layoutInfoFromHolder(a(d));
                    e && e.editable && e.editable.html(b)
                }), this
            },
            destroy: function() {
                return this.each(function(b, c) {
                    var d = a(c),
                        e = B.layoutInfoFromHolder(d);
                    if (e && e.editable) {
                        var f = e.editor.data("options");
                        C.dettach(e, f), B.removeLayout(d, e, f)
                    }
                }), this
            }
        })
    }),
    function(a) {
        a.extend(a.summernote.lang, {
            "pt-BR": {
                font: {
                    bold: "Negrito",
                    italic: "Itálico",
                    underline: "Sublinhado",
                    strikethrough: "Riscado",
                    clear: "Remover estilo da fonte",
                    height: "Altura da linha",
                    size: "Tamanho da fonte"
                },
                image: {
                    image: "Imagem",
                    insert: "Inserir imagem",
                    resizeFull: "Resize Full",
                    resizeHalf: "Resize Half",
                    resizeQuarter: "Resize Quarter",
                    floatLeft: "Float Left",
                    floatRight: "Float Right",
                    floatNone: "Float None",
                    dragImageHere: "Arraste uma imagem para cá",
                    selectFromFiles: "Selecione a partir dos arquivos",
                    url: "URL da image"
                },
                link: {
                    link: "Link",
                    insert: "Inserir link",
                    unlink: "Remover link",
                    edit: "Editar",
                    textToDisplay: "Texto para exibir",
                    url: "Para qual URL esse link leva?",
                    openInNewWindow: "Abrir em uma nova janela"
                },
                video: {
                    video: "Vídeo",
                    videoLink: "Link para vídeo",
                    insert: "Inserir vídeo",
                    url: "URL do vídeo?",
                    providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion, ou Youku)"
                },
                table: {
                    table: "Tabela"
                },
                hr: {
                    insert: "Inserir linha horizontal"
                },
                style: {
                    style: "Estilo",
                    normal: "Normal",
                    blockquote: "Citação",
                    pre: "Código",
                    h1: "Título 1",
                    h2: "Título 2",
                    h3: "Título 3",
                    h4: "Título 4",
                    h5: "Título 5",
                    h6: "Título 6"
                },
                lists: {
                    unordered: "Lista com marcadores",
                    ordered: "Lista numerada"
                },
                options: {
                    help: "Ajuda",
                    fullscreen: "Tela cheia",
                    codeview: "Ver código-fonte"
                },
                paragraph: {
                    paragraph: "Parágrafo",
                    outdent: "Menor tabulação",
                    indent: "Maior tabulação",
                    left: "Alinhar à esquerda",
                    center: "Alinhar ao centro",
                    right: "Alinha à direita",
                    justify: "Justificado"
                },
                color: {
                    recent: "Cor recente",
                    more: "Mais cores",
                    background: "Fundo",
                    foreground: "Fonte",
                    transparent: "Transparente",
                    setTransparent: "Fundo transparente",
                    reset: "Restaurar",
                    resetToDefault: "Restaurar padrão"
                },
                shortcut: {
                    shortcuts: "Atalhos do teclado",
                    close: "Fechar",
                    textFormatting: "Formatação de texto",
                    action: "Ação",
                    paragraphFormatting: "Formatação de parágrafo",
                    documentStyle: "Estilo de documento"
                },
                history: {
                    undo: "Desfazer",
                    redo: "Refazer"
                }
            }
        })
    }(jQuery),
    function(a, b) {
        var c = {
            version: "2.2.0",
            areas: {},
            apis: {},
            inherit: function(a, b) {
                for (var c in a) b.hasOwnProperty(c) || (b[c] = a[c]);
                return b
            },
            stringify: function(a) {
                return void 0 === a || "function" == typeof a ? a + "" : JSON.stringify(a)
            },
            parse: function(a) {
                try {
                    return JSON.parse(a)
                } catch (b) {
                    return a
                }
            },
            fn: function(a, b) {
                c.storeAPI[a] = b;
                for (var d in c.apis) c.apis[d][a] = b
            },
            get: function(a, b) {
                return a.getItem(b)
            },
            set: function(a, b, c) {
                a.setItem(b, c)
            },
            remove: function(a, b) {
                a.removeItem(b)
            },
            key: function(a, b) {
                return a.key(b)
            },
            length: function(a) {
                return a.length
            },
            clear: function(a) {
                a.clear()
            },
            Store: function(a, b, d) {
                var e = c.inherit(c.storeAPI, function(a, b, c) {
                    return 0 === arguments.length ? e.getAll() : void 0 !== b ? e.set(a, b, c) : "string" == typeof a ? e.get(a) : a ? e.setAll(a, b) : e.clear()
                });
                return e._id = a, e._area = b || c.inherit(c.storageAPI, {
                    items: {},
                    name: "fake"
                }), e._ns = d || "", c.areas[a] || (c.areas[a] = e._area), c.apis[e._ns + e._id] || (c.apis[e._ns + e._id] = e), e
            },
            storeAPI: {
                area: function(a, b) {
                    var d = this[a];
                    return d && d.area || (d = c.Store(a, b, this._ns), this[a] || (this[a] = d)), d
                },
                namespace: function(a, b) {
                    if (!a) return this._ns ? this._ns.substring(0, this._ns.length - 1) : "";
                    var d = a,
                        e = this[d];
                    return e && e.namespace || (e = c.Store(this._id, this._area, this._ns + d + "."), this[d] || (this[d] = e), b || e.area("session", c.areas.session)), e
                },
                isFake: function() {
                    return "fake" === this._area.name
                },
                toString: function() {
                    return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]"
                },
                has: function(a) {
                    return this._area.has ? this._area.has(this._in(a)) : !!(this._in(a) in this._area)
                },
                size: function() {
                    return this.keys().length
                },
                each: function(a, b) {
                    for (var d = 0, e = c.length(this._area); e > d; d++) {
                        var f = this._out(c.key(this._area, d));
                        if (void 0 !== f && a.call(this, f, b || this.get(f)) === !1) break;
                        e > c.length(this._area) && (e--, d--)
                    }
                    return b || this
                },
                keys: function() {
                    return this.each(function(a, b) {
                        b.push(a)
                    }, [])
                },
                get: function(a, b) {
                    var d = c.get(this._area, this._in(a));
                    return null !== d ? c.parse(d) : b || d
                },
                getAll: function() {
                    return this.each(function(a, b) {
                        b[a] = this.get(a)
                    }, {})
                },
                set: function(a, b, d) {
                    var e = this.get(a);
                    return null != e && d === !1 ? b : c.set(this._area, this._in(a), c.stringify(b), d) || e
                },
                setAll: function(a, b) {
                    var c, d;
                    for (var e in a) d = a[e], this.set(e, d, b) !== d && (c = !0);
                    return c
                },
                remove: function(a) {
                    var b = this.get(a);
                    return c.remove(this._area, this._in(a)), b
                },
                clear: function() {
                    return this._ns ? this.each(function(a) {
                        c.remove(this._area, this._in(a))
                    }, 1) : c.clear(this._area), this
                },
                clearAll: function() {
                    var a = this._area;
                    for (var b in c.areas) c.areas.hasOwnProperty(b) && (this._area = c.areas[b], this.clear());
                    return this._area = a, this
                },
                _in: function(a) {
                    return "string" != typeof a && (a = c.stringify(a)), this._ns ? this._ns + a : a
                },
                _out: function(a) {
                    return this._ns ? a && 0 === a.indexOf(this._ns) ? a.substring(this._ns.length) : void 0 : a
                }
            },
            storageAPI: {
                length: 0,
                has: function(a) {
                    return this.items.hasOwnProperty(a)
                },
                key: function(a) {
                    var b = 0;
                    for (var c in this.items)
                        if (this.has(c) && a === b++) return c
                },
                setItem: function(a, b) {
                    this.has(a) || this.length++, this.items[a] = b
                },
                removeItem: function(a) {
                    this.has(a) && (delete this.items[a], this.length--)
                },
                getItem: function(a) {
                    return this.has(a) ? this.items[a] : null
                },
                clear: function() {
                    for (var a in this.list) this.removeItem(a)
                },
                toString: function() {
                    return this.length + " items in " + this.name + "Storage"
                }
            }
        };
        a.store && (c.conflict = a.store);
        var d = c.Store("local", function() {
            try {
                return localStorage
            } catch (a) {}
        }());
        d.local = d, d._ = c, d.area("session", function() {
            try {
                return sessionStorage
            } catch (a) {}
        }()), "function" == typeof b && void 0 !== b.amd ? b(function() {
            return d
        }) : "undefined" != typeof module && module.exports ? module.exports = d : a.store = d
    }(window, window.define),
    function(a, b) {
        "use strict";

        function c(b, c) {
            var f = this;
            f.element = b, f.options = a.extend({}, e, c), f._defaults = e, f._name = d, f.init()
        }
        var d = "rvFontsize",
            e = {
                targetSection: "body",
                store: !1,
                storeIsDefined: !("undefined" == typeof store),
                variations: 7,
                controllers: {
                    append: !0,
                    appendTo: "body",
                    showResetButton: !1,
                    template: ""
                }
            };
        c.prototype = {
            init: function() {
                var a = this,
                    b = function() {
                        a.defineElements(), a.getDefaultFontSize()
                    };
                b(), a.options.store !== !0 || a.options.storeIsDefined || a.dependencyWarning()
            },
            dependencyWarning: function() {
                console.warn('When you difine "store: true", store script is required (https://github.com/ramonvictor/rv-jquery-fontsize/blob/master/js/store.min.js)')
            },
            bindControlerHandlers: function() {
                var b = this;
                b.$decreaseButton = a(".rvfs-decrease"), b.$decreaseButton.length > 0 && b.$decreaseButton.on("click", function(c) {
                    c.preventDefault();
                    var d = a(this);
                    if (!d.hasClass("disabled")) {
                        var e = b.getCurrentVariation();
                        e > 1 && (b.$target.removeClass("rvfs-" + e), b.$target.attr("data-rvfs", e - 1), b.options.store === !0 && b.storeCurrentSize(), b.fontsizeChanged())
                    }
                }), b.$increaseButton = a(".rvfs-increase"), b.$increaseButton.length > 0 && b.$increaseButton.on("click", function(c) {
                    c.preventDefault();
                    var d = a(this);
                    if (!d.hasClass("disabled")) {
                        var e = b.getCurrentVariation();
                        e < b.options.variations && (b.$target.removeClass("rvfs-" + e), b.$target.attr("data-rvfs", e + 1), b.options.store === !0 && b.storeCurrentSize(), b.fontsizeChanged())
                    }
                }), b.$resetButton = a(".rvfs-reset"), b.$resetButton.length > 0 && b.$resetButton.on("click", function(c) {
                    c.preventDefault();
                    var d = a(this);
                    if (!d.hasClass("disabled")) {
                        var e = b.getCurrentVariation();
                        b.$target.removeClass("rvfs-" + e), b.$target.attr("data-rvfs", b.defaultFontsize), b.options.store === !0 && b.storeCurrentSize(), b.fontsizeChanged()
                    }
                })
            },
            defineElements: function() {
                var b = this;
                if (b.$target = a(b.options.targetSection), b.options.controllers.append !== !1) {
                    var c = b.options.controllers.showResetButton ? '<a href="#" class="rvfs-reset btn" title="Default font size">A</a>' : "",
                        d = b.options.controllers.template,
                        e = "";
                    b.$appendTo = a(b.options.controllers.appendTo), e = a.trim(d).length > 0 ? d : '<div class="btn-group"><a href="#" class="rvfs-decrease btn" title="Decrease font size">A-</a></li>' + c + '<a href="#" class="rvfs-increase btn" title="Increase font size">A+</a></li></div>', b.$appendTo.html(e), b.bindControlerHandlers()
                }
            },
            getDefaultFontSize: function() {
                var a = this,
                    b = a.options.variations;
                a.defaultFontsize = 0, a.defaultFontsize = b % 2 === 0 ? b / 2 + 1 : parseInt(b / 2 + 1, 10), a.setDefaultFontSize()
            },
            setDefaultFontSize: function() {
                var a = this;
                if (a.options.store === !0 && a.options.storeIsDefined) {
                    var b = store.get("rvfs") || a.defaultFontsize;
                    a.$target.attr("data-rvfs", b)
                } else a.$target.attr("data-rvfs", a.defaultFontsize);
                a.fontsizeChanged()
            },
            storeCurrentSize: function() {
                var a = this;
                a.options.storeIsDefined ? store.set("rvfs", a.$target.attr("data-rvfs")) : a.dependencyWarning()
            },
            getCurrentVariation: function() {
                return parseInt(this.$target.attr("data-rvfs"), 10)
            },
            fontsizeChanged: function() {
                var a = this,
                    b = a.getCurrentVariation();
                a.$target.addClass("rvfs-" + b), b === a.defaultFontsize ? a.$resetButton.addClass("disabled") : a.$resetButton.removeClass("disabled"), b === a.options.variations ? a.$increaseButton.addClass("disabled") : a.$increaseButton.removeClass("disabled"), 1 === b ? a.$decreaseButton.addClass("disabled") : a.$decreaseButton.removeClass("disabled")
            }
        }, a.fn[d] = function(b) {
            var e = this;
            return e.each(function() {
                a.data(e, "plugin_" + d) || a.data(e, "plugin_" + d, new c(e, b))
            })
        }, a[d] = function() {
            var c = a(b);
            return c.rvFontsize.apply(c, Array.prototype.slice.call(arguments, 0))
        }
    }(jQuery, window, document),
    function() {
        ! function(a) {
            var b = this || (0, eval)("this"),
                c = b.document,
                d = b.navigator,
                e = b.jQuery,
                f = b.JSON;
            ! function(a) {
                "function" == typeof require && "object" == typeof exports && "object" == typeof module ? a(module.exports || exports, require) : "function" == typeof define && define.amd ? define(["exports", "require"], a) : a(b.ko = {})
            }(function(g, h) {
                function i(a, b) {
                    return null === a || typeof a in n ? a === b : !1
                }

                function j(b, c) {
                    var d;
                    return function() {
                        d || (d = setTimeout(function() {
                            d = a, b()
                        }, c))
                    }
                }

                function k(a, b) {
                    var c;
                    return function() {
                        clearTimeout(c), c = setTimeout(a, b)
                    }
                }

                function l(a, b, c, d) {
                    m.d[a] = {
                        init: function(a, e, f, g, h) {
                            var i, j;
                            return m.s(function() {
                                var f = m.a.c(e()),
                                    g = !c != !f,
                                    k = !j;
                                (k || b || g !== i) && (k && m.Y.la() && (j = m.a.ia(m.f.childNodes(a), !0)), g ? (k || m.f.T(a, m.a.ia(j)), m.Ca(d ? d(h, f) : h, a)) : m.f.ja(a), i = g)
                            }, null, {
                                o: a
                            }), {
                                controlsDescendantBindings: !0
                            }
                        }
                    }, m.h.ha[a] = !1, m.f.Q[a] = !0
                }
                var m = "undefined" != typeof g ? g : {};
                m.b = function(a, b) {
                        for (var c = a.split("."), d = m, e = 0; e < c.length - 1; e++) d = d[c[e]];
                        d[c[c.length - 1]] = b
                    }, m.A = function(a, b, c) {
                        a[b] = c
                    }, m.version = "3.2.0", m.b("version", m.version), m.a = function() {
                        function g(a, b) {
                            for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
                        }

                        function h(a, b) {
                            if (b)
                                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                            return a
                        }

                        function i(a, b) {
                            return a.__proto__ = b, a
                        }
                        var j = {
                            __proto__: []
                        }
                        instanceof Array, k = {}, l = {};
                        k[d && /Firefox\/2/i.test(d.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], k.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "), g(k, function(a, b) {
                            if (b.length)
                                for (var c = 0, d = b.length; d > c; c++) l[b[c]] = a
                        });
                        var n = {
                                propertychange: !0
                            },
                            o = c && function() {
                                for (var b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", e[0];);
                                return b > 4 ? b : a
                            }();
                        return {
                            vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            u: function(a, b) {
                                for (var c = 0, d = a.length; d > c; c++) b(a[c], c)
                            },
                            m: function(a, b) {
                                if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                                for (var c = 0, d = a.length; d > c; c++)
                                    if (a[c] === b) return c;
                                return -1
                            },
                            qb: function(a, b, c) {
                                for (var d = 0, e = a.length; e > d; d++)
                                    if (b.call(c, a[d], d)) return a[d];
                                return null
                            },
                            ua: function(a, b) {
                                var c = m.a.m(a, b);
                                c > 0 ? a.splice(c, 1) : 0 === c && a.shift()
                            },
                            rb: function(a) {
                                a = a || [];
                                for (var b = [], c = 0, d = a.length; d > c; c++) 0 > m.a.m(b, a[c]) && b.push(a[c]);
                                return b
                            },
                            Da: function(a, b) {
                                a = a || [];
                                for (var c = [], d = 0, e = a.length; e > d; d++) c.push(b(a[d], d));
                                return c
                            },
                            ta: function(a, b) {
                                a = a || [];
                                for (var c = [], d = 0, e = a.length; e > d; d++) b(a[d], d) && c.push(a[d]);
                                return c
                            },
                            ga: function(a, b) {
                                if (b instanceof Array) a.push.apply(a, b);
                                else
                                    for (var c = 0, d = b.length; d > c; c++) a.push(b[c]);
                                return a
                            },
                            ea: function(a, b, c) {
                                var d = m.a.m(m.a.Xa(a), b);
                                0 > d ? c && a.push(b) : c || a.splice(d, 1)
                            },
                            xa: j,
                            extend: h,
                            za: i,
                            Aa: j ? i : h,
                            G: g,
                            na: function(a, b) {
                                if (!a) return a;
                                var c, d = {};
                                for (c in a) a.hasOwnProperty(c) && (d[c] = b(a[c], c, a));
                                return d
                            },
                            Ka: function(a) {
                                for (; a.firstChild;) m.removeNode(a.firstChild)
                            },
                            oc: function(a) {
                                a = m.a.S(a);
                                for (var b = c.createElement("div"), d = 0, e = a.length; e > d; d++) b.appendChild(m.R(a[d]));
                                return b
                            },
                            ia: function(a, b) {
                                for (var c = 0, d = a.length, e = []; d > c; c++) {
                                    var f = a[c].cloneNode(!0);
                                    e.push(b ? m.R(f) : f)
                                }
                                return e
                            },
                            T: function(a, b) {
                                if (m.a.Ka(a), b)
                                    for (var c = 0, d = b.length; d > c; c++) a.appendChild(b[c])
                            },
                            Lb: function(a, b) {
                                var c = a.nodeType ? [a] : a;
                                if (0 < c.length) {
                                    for (var d = c[0], e = d.parentNode, f = 0, g = b.length; g > f; f++) e.insertBefore(b[f], d);
                                    for (f = 0, g = c.length; g > f; f++) m.removeNode(c[f])
                                }
                            },
                            ka: function(a, b) {
                                if (a.length) {
                                    for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.shift();
                                    if (1 < a.length) {
                                        var c = a[0],
                                            d = a[a.length - 1];
                                        for (a.length = 0; c !== d;)
                                            if (a.push(c), c = c.nextSibling, !c) return;
                                        a.push(d)
                                    }
                                }
                                return a
                            },
                            Nb: function(a, b) {
                                7 > o ? a.setAttribute("selected", b) : a.selected = b
                            },
                            cb: function(b) {
                                return null === b || b === a ? "" : b.trim ? b.trim() : b.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            vc: function(a, b) {
                                return a = a || "", b.length > a.length ? !1 : a.substring(0, b.length) === b
                            },
                            cc: function(a, b) {
                                if (a === b) return !0;
                                if (11 === a.nodeType) return !1;
                                if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                                if (b.compareDocumentPosition) return 16 == (16 & b.compareDocumentPosition(a));
                                for (; a && a != b;) a = a.parentNode;
                                return !!a
                            },
                            Ja: function(a) {
                                return m.a.cc(a, a.ownerDocument.documentElement)
                            },
                            ob: function(a) {
                                return !!m.a.qb(a, m.a.Ja)
                            },
                            t: function(a) {
                                return a && a.tagName && a.tagName.toLowerCase()
                            },
                            n: function(a, b, c) {
                                var d = o && n[b];
                                if (!d && e) e(a).bind(b, c);
                                else if (d || "function" != typeof a.addEventListener) {
                                    if ("undefined" == typeof a.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                                    var f = function(b) {
                                            c.call(a, b)
                                        },
                                        g = "on" + b;
                                    a.attachEvent(g, f), m.a.w.da(a, function() {
                                        a.detachEvent(g, f)
                                    })
                                } else a.addEventListener(b, c, !1)
                            },
                            oa: function(a, d) {
                                if (!a || !a.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                var f;
                                if ("input" === m.a.t(a) && a.type && "click" == d.toLowerCase() ? (f = a.type, f = "checkbox" == f || "radio" == f) : f = !1, e && !f) e(a).trigger(d);
                                else if ("function" == typeof c.createEvent) {
                                    if ("function" != typeof a.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                    f = c.createEvent(l[d] || "HTMLEvents"), f.initEvent(d, !0, !0, b, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(f)
                                } else if (f && a.click) a.click();
                                else {
                                    if ("undefined" == typeof a.fireEvent) throw Error("Browser doesn't support triggering events");
                                    a.fireEvent("on" + d)
                                }
                            },
                            c: function(a) {
                                return m.C(a) ? a() : a
                            },
                            Xa: function(a) {
                                return m.C(a) ? a.v() : a
                            },
                            Ba: function(a, b, c) {
                                if (b) {
                                    var d = /\S+/g,
                                        e = a.className.match(d) || [];
                                    m.a.u(b.match(d), function(a) {
                                        m.a.ea(e, a, c)
                                    }), a.className = e.join(" ")
                                }
                            },
                            bb: function(b, c) {
                                var d = m.a.c(c);
                                (null === d || d === a) && (d = "");
                                var e = m.f.firstChild(b);
                                !e || 3 != e.nodeType || m.f.nextSibling(e) ? m.f.T(b, [b.ownerDocument.createTextNode(d)]) : e.data = d, m.a.fc(b)
                            },
                            Mb: function(a, b) {
                                if (a.name = b, 7 >= o) try {
                                    a.mergeAttributes(c.createElement("<input name='" + a.name + "'/>"), !1)
                                } catch (d) {}
                            },
                            fc: function(a) {
                                o >= 9 && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                            },
                            dc: function(a) {
                                if (o) {
                                    var b = a.style.width;
                                    a.style.width = 0, a.style.width = b
                                }
                            },
                            sc: function(a, b) {
                                a = m.a.c(a), b = m.a.c(b);
                                for (var c = [], d = a; b >= d; d++) c.push(d);
                                return c
                            },
                            S: function(a) {
                                for (var b = [], c = 0, d = a.length; d > c; c++) b.push(a[c]);
                                return b
                            },
                            yc: 6 === o,
                            zc: 7 === o,
                            L: o,
                            xb: function(a, b) {
                                for (var c = m.a.S(a.getElementsByTagName("input")).concat(m.a.S(a.getElementsByTagName("textarea"))), d = "string" == typeof b ? function(a) {
                                        return a.name === b
                                    } : function(a) {
                                        return b.test(a.name)
                                    }, e = [], f = c.length - 1; f >= 0; f--) d(c[f]) && e.push(c[f]);
                                return e
                            },
                            pc: function(a) {
                                return "string" == typeof a && (a = m.a.cb(a)) ? f && f.parse ? f.parse(a) : new Function("return " + a)() : null
                            },
                            eb: function(a, b, c) {
                                if (!f || !f.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return f.stringify(m.a.c(a), b, c)
                            },
                            qc: function(a, b, d) {
                                d = d || {};
                                var e = d.params || {},
                                    f = d.includeFields || this.vb,
                                    h = a;
                                if ("object" == typeof a && "form" === m.a.t(a))
                                    for (var h = a.action, i = f.length - 1; i >= 0; i--)
                                        for (var j = m.a.xb(a, f[i]), k = j.length - 1; k >= 0; k--) e[j[k].name] = j[k].value;
                                b = m.a.c(b);
                                var l = c.createElement("form");
                                l.style.display = "none", l.action = h, l.method = "post";
                                for (var n in b) a = c.createElement("input"), a.type = "hidden", a.name = n, a.value = m.a.eb(m.a.c(b[n])), l.appendChild(a);
                                g(e, function(a, b) {
                                    var d = c.createElement("input");
                                    d.type = "hidden", d.name = a, d.value = b, l.appendChild(d)
                                }), c.body.appendChild(l), d.submitter ? d.submitter(l) : l.submit(), setTimeout(function() {
                                    l.parentNode.removeChild(l)
                                }, 0)
                            }
                        }
                    }(), m.b("utils", m.a), m.b("utils.arrayForEach", m.a.u), m.b("utils.arrayFirst", m.a.qb), m.b("utils.arrayFilter", m.a.ta), m.b("utils.arrayGetDistinctValues", m.a.rb), m.b("utils.arrayIndexOf", m.a.m), m.b("utils.arrayMap", m.a.Da), m.b("utils.arrayPushAll", m.a.ga), m.b("utils.arrayRemoveItem", m.a.ua), m.b("utils.extend", m.a.extend), m.b("utils.fieldsIncludedWithJsonPost", m.a.vb), m.b("utils.getFormFields", m.a.xb), m.b("utils.peekObservable", m.a.Xa), m.b("utils.postJson", m.a.qc), m.b("utils.parseJson", m.a.pc), m.b("utils.registerEventHandler", m.a.n), m.b("utils.stringifyJson", m.a.eb), m.b("utils.range", m.a.sc), m.b("utils.toggleDomNodeCssClass", m.a.Ba), m.b("utils.triggerEvent", m.a.oa), m.b("utils.unwrapObservable", m.a.c), m.b("utils.objectForEach", m.a.G), m.b("utils.addOrRemoveItem", m.a.ea), m.b("unwrap", m.a.c), Function.prototype.bind || (Function.prototype.bind = function(a) {
                        var b = this,
                            c = Array.prototype.slice.call(arguments);
                        return a = c.shift(),
                            function() {
                                return b.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                            }
                    }), m.a.e = new function() {
                        function b(b, f) {
                            var g = b[d];
                            if (!g || "null" === g || !e[g]) {
                                if (!f) return a;
                                g = b[d] = "ko" + c++, e[g] = {}
                            }
                            return e[g]
                        }
                        var c = 0,
                            d = "__ko__" + (new Date).getTime(),
                            e = {};
                        return {
                            get: function(c, d) {
                                var e = b(c, !1);
                                return e === a ? a : e[d]
                            },
                            set: function(c, d, e) {
                                (e !== a || b(c, !1) !== a) && (b(c, !0)[d] = e)
                            },
                            clear: function(a) {
                                var b = a[d];
                                return b ? (delete e[b], a[d] = null, !0) : !1
                            },
                            F: function() {
                                return c++ + d
                            }
                        }
                    }, m.b("utils.domData", m.a.e), m.b("utils.domData.clear", m.a.e.clear), m.a.w = new function() {
                        function b(b, c) {
                            var e = m.a.e.get(b, d);
                            return e === a && c && (e = [], m.a.e.set(b, d, e)), e
                        }

                        function c(a) {
                            var d = b(a, !1);
                            if (d)
                                for (var d = d.slice(0), e = 0; e < d.length; e++) d[e](a);
                            if (m.a.e.clear(a), m.a.w.cleanExternalData(a), g[a.nodeType])
                                for (d = a.firstChild; a = d;) d = a.nextSibling, 8 === a.nodeType && c(a)
                        }
                        var d = m.a.e.F(),
                            f = {
                                1: !0,
                                8: !0,
                                9: !0
                            },
                            g = {
                                1: !0,
                                9: !0
                            };
                        return {
                            da: function(a, c) {
                                if ("function" != typeof c) throw Error("Callback must be a function");
                                b(a, !0).push(c)
                            },
                            Kb: function(c, e) {
                                var f = b(c, !1);
                                f && (m.a.ua(f, e), 0 == f.length && m.a.e.set(c, d, a))
                            },
                            R: function(a) {
                                if (f[a.nodeType] && (c(a), g[a.nodeType])) {
                                    var b = [];
                                    m.a.ga(b, a.getElementsByTagName("*"));
                                    for (var d = 0, e = b.length; e > d; d++) c(b[d])
                                }
                                return a
                            },
                            removeNode: function(a) {
                                m.R(a), a.parentNode && a.parentNode.removeChild(a)
                            },
                            cleanExternalData: function(a) {
                                e && "function" == typeof e.cleanData && e.cleanData([a])
                            }
                        }
                    }, m.R = m.a.w.R, m.removeNode = m.a.w.removeNode, m.b("cleanNode", m.R), m.b("removeNode", m.removeNode), m.b("utils.domNodeDisposal", m.a.w), m.b("utils.domNodeDisposal.addDisposeCallback", m.a.w.da), m.b("utils.domNodeDisposal.removeDisposeCallback", m.a.w.Kb),
                    function() {
                        m.a.ba = function(a) {
                            var d;
                            if (e) {
                                if (e.parseHTML) d = e.parseHTML(a) || [];
                                else if ((d = e.clean([a])) && d[0]) {
                                    for (a = d[0]; a.parentNode && 11 !== a.parentNode.nodeType;) a = a.parentNode;
                                    a.parentNode && a.parentNode.removeChild(a)
                                }
                            } else {
                                var f = m.a.cb(a).toLowerCase();
                                for (d = c.createElement("div"), f = f.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !f.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!f.indexOf("<td") || !f.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""], a = "ignored<div>" + f[1] + a + f[2] + "</div>", "function" == typeof b.innerShiv ? d.appendChild(b.innerShiv(a)) : d.innerHTML = a; f[0]--;) d = d.lastChild;
                                d = m.a.S(d.lastChild.childNodes)
                            }
                            return d
                        }, m.a.$a = function(b, c) {
                            if (m.a.Ka(b), c = m.a.c(c), null !== c && c !== a)
                                if ("string" != typeof c && (c = c.toString()), e) e(b).html(c);
                                else
                                    for (var d = m.a.ba(c), f = 0; f < d.length; f++) b.appendChild(d[f])
                        }
                    }(), m.b("utils.parseHtmlFragment", m.a.ba), m.b("utils.setHtml", m.a.$a), m.D = function() {
                        function b(a, c) {
                            if (a)
                                if (8 == a.nodeType) {
                                    var d = m.D.Gb(a.nodeValue);
                                    null != d && c.push({
                                        bc: a,
                                        mc: d
                                    })
                                } else if (1 == a.nodeType)
                                for (var d = 0, e = a.childNodes, f = e.length; f > d; d++) b(e[d], c)
                        }
                        var c = {};
                        return {
                            Ua: function(a) {
                                if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                                return c[b] = a, "<!--[ko_memo:" + b + "]-->"
                            },
                            Rb: function(b, d) {
                                var e = c[b];
                                if (e === a) throw Error("Couldn't find any memo with ID " + b + ". Perhaps it's already been unmemoized.");
                                try {
                                    return e.apply(null, d || []), !0
                                } finally {
                                    delete c[b]
                                }
                            },
                            Sb: function(a, c) {
                                var d = [];
                                b(a, d);
                                for (var e = 0, f = d.length; f > e; e++) {
                                    var g = d[e].bc,
                                        h = [g];
                                    c && m.a.ga(h, c), m.D.Rb(d[e].mc, h), g.nodeValue = "", g.parentNode && g.parentNode.removeChild(g)
                                }
                            },
                            Gb: function(a) {
                                return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                            }
                        }
                    }(), m.b("memoization", m.D), m.b("memoization.memoize", m.D.Ua), m.b("memoization.unmemoize", m.D.Rb), m.b("memoization.parseMemoText", m.D.Gb), m.b("memoization.unmemoizeDomNodeAndDescendants", m.D.Sb), m.La = {
                        throttle: function(a, b) {
                            a.throttleEvaluation = b;
                            var c = null;
                            return m.j({
                                read: a,
                                write: function(d) {
                                    clearTimeout(c), c = setTimeout(function() {
                                        a(d)
                                    }, b)
                                }
                            })
                        },
                        rateLimit: function(a, b) {
                            var c, d, e;
                            "number" == typeof b ? c = b : (c = b.timeout, d = b.method), e = "notifyWhenChangesStop" == d ? k : j, a.Ta(function(a) {
                                return e(a, c)
                            })
                        },
                        notify: function(a, b) {
                            a.equalityComparer = "always" == b ? null : i
                        }
                    };
                var n = {
                    undefined: 1,
                    "boolean": 1,
                    number: 1,
                    string: 1
                };
                m.b("extenders", m.La), m.Pb = function(a, b, c) {
                    this.target = a, this.wa = b, this.ac = c, this.Cb = !1, m.A(this, "dispose", this.K)
                }, m.Pb.prototype.K = function() {
                    this.Cb = !0, this.ac()
                }, m.P = function() {
                    m.a.Aa(this, m.P.fn), this.M = {}
                };
                var o = "change",
                    p = {
                        U: function(a, b, c) {
                            var d = this;
                            c = c || o;
                            var e = new m.Pb(d, b ? a.bind(b) : a, function() {
                                m.a.ua(d.M[c], e), d.nb && d.nb()
                            });
                            return d.va && d.va(c), d.M[c] || (d.M[c] = []), d.M[c].push(e), e
                        },
                        notifySubscribers: function(a, b) {
                            if (b = b || o, this.Ab(b)) try {
                                m.k.Ea();
                                for (var c, d = this.M[b].slice(0), e = 0; c = d[e]; ++e) c.Cb || c.wa(a)
                            } finally {
                                m.k.end()
                            }
                        },
                        Ta: function(a) {
                            var b, c, d, e = this,
                                f = m.C(e);
                            e.qa || (e.qa = e.notifySubscribers, e.notifySubscribers = function(a, b) {
                                b && b !== o ? "beforeChange" === b ? e.kb(a) : e.qa(a, b) : e.lb(a)
                            });
                            var g = a(function() {
                                f && d === e && (d = e()), b = !1, e.Pa(c, d) && e.qa(c = d)
                            });
                            e.lb = function(a) {
                                b = !0, d = a, g()
                            }, e.kb = function(a) {
                                b || (c = a, e.qa(a, "beforeChange"))
                            }
                        },
                        Ab: function(a) {
                            return this.M[a] && this.M[a].length
                        },
                        yb: function() {
                            var a = 0;
                            return m.a.G(this.M, function(b, c) {
                                a += c.length
                            }), a
                        },
                        Pa: function(a, b) {
                            return !this.equalityComparer || !this.equalityComparer(a, b)
                        },
                        extend: function(a) {
                            var b = this;
                            return a && m.a.G(a, function(a, c) {
                                var d = m.La[a];
                                "function" == typeof d && (b = d(b, c) || b)
                            }), b
                        }
                    };
                m.A(p, "subscribe", p.U), m.A(p, "extend", p.extend), m.A(p, "getSubscriptionsCount", p.yb), m.a.xa && m.a.za(p, Function.prototype), m.P.fn = p, m.Db = function(a) {
                    return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers
                }, m.b("subscribable", m.P), m.b("isSubscribable", m.Db), m.Y = m.k = function() {
                    function a(a) {
                        d.push(c), c = a
                    }

                    function b() {
                        c = d.pop()
                    }
                    var c, d = [],
                        e = 0;
                    return {
                        Ea: a,
                        end: b,
                        Jb: function(a) {
                            if (c) {
                                if (!m.Db(a)) throw Error("Only subscribable things can act as dependencies");
                                c.wa(a, a.Vb || (a.Vb = ++e))
                            }
                        },
                        B: function(c, d, e) {
                            try {
                                return a(), c.apply(d, e || [])
                            } finally {
                                b()
                            }
                        },
                        la: function() {
                            return c ? c.s.la() : void 0
                        },
                        ma: function() {
                            return c ? c.ma : void 0
                        }
                    }
                }(), m.b("computedContext", m.Y), m.b("computedContext.getDependenciesCount", m.Y.la), m.b("computedContext.isInitial", m.Y.ma), m.b("computedContext.isSleeping", m.Y.Ac), m.p = function(a) {
                    function b() {
                        return 0 < arguments.length ? (b.Pa(c, arguments[0]) && (b.X(), c = arguments[0], b.W()), this) : (m.k.Jb(b), c)
                    }
                    var c = a;
                    return m.P.call(b), m.a.Aa(b, m.p.fn), b.v = function() {
                        return c
                    }, b.W = function() {
                        b.notifySubscribers(c)
                    }, b.X = function() {
                        b.notifySubscribers(c, "beforeChange")
                    }, m.A(b, "peek", b.v), m.A(b, "valueHasMutated", b.W), m.A(b, "valueWillMutate", b.X), b
                }, m.p.fn = {
                    equalityComparer: i
                };
                var q = m.p.rc = "__ko_proto__";
                m.p.fn[q] = m.p, m.a.xa && m.a.za(m.p.fn, m.P.fn), m.Ma = function(b, c) {
                    return null === b || b === a || b[q] === a ? !1 : b[q] === c ? !0 : m.Ma(b[q], c)
                }, m.C = function(a) {
                    return m.Ma(a, m.p)
                }, m.Ra = function(a) {
                    return "function" == typeof a && a[q] === m.p || "function" == typeof a && a[q] === m.j && a.hc ? !0 : !1
                }, m.b("observable", m.p), m.b("isObservable", m.C), m.b("isWriteableObservable", m.Ra), m.b("isWritableObservable", m.Ra), m.aa = function(a) {
                    if (a = a || [], "object" != typeof a || !("length" in a)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                    return a = m.p(a), m.a.Aa(a, m.aa.fn), a.extend({
                        trackArrayChanges: !0
                    })
                }, m.aa.fn = {
                    remove: function(a) {
                        for (var b = this.v(), c = [], d = "function" != typeof a || m.C(a) ? function(b) {
                                return b === a
                            } : a, e = 0; e < b.length; e++) {
                            var f = b[e];
                            d(f) && (0 === c.length && this.X(), c.push(f), b.splice(e, 1), e--)
                        }
                        return c.length && this.W(), c
                    },
                    removeAll: function(b) {
                        if (b === a) {
                            var c = this.v(),
                                d = c.slice(0);
                            return this.X(), c.splice(0, c.length), this.W(), d
                        }
                        return b ? this.remove(function(a) {
                            return 0 <= m.a.m(b, a)
                        }) : []
                    },
                    destroy: function(a) {
                        var b = this.v(),
                            c = "function" != typeof a || m.C(a) ? function(b) {
                                return b === a
                            } : a;
                        this.X();
                        for (var d = b.length - 1; d >= 0; d--) c(b[d]) && (b[d]._destroy = !0);
                        this.W()
                    },
                    destroyAll: function(b) {
                        return b === a ? this.destroy(function() {
                            return !0
                        }) : b ? this.destroy(function(a) {
                            return 0 <= m.a.m(b, a)
                        }) : []
                    },
                    indexOf: function(a) {
                        var b = this();
                        return m.a.m(b, a)
                    },
                    replace: function(a, b) {
                        var c = this.indexOf(a);
                        c >= 0 && (this.X(), this.v()[c] = b, this.W())
                    }
                }, m.a.u("pop push reverse shift sort splice unshift".split(" "), function(a) {
                    m.aa.fn[a] = function() {
                        var b = this.v();
                        return this.X(), this.sb(b, a, arguments), b = b[a].apply(b, arguments), this.W(), b
                    }
                }), m.a.u(["slice"], function(a) {
                    m.aa.fn[a] = function() {
                        var b = this();
                        return b[a].apply(b, arguments)
                    }
                }), m.a.xa && m.a.za(m.aa.fn, m.p.fn), m.b("observableArray", m.aa);
                var r = "arrayChange";
                m.La.trackArrayChanges = function(a) {
                        function b() {
                            if (!c) {
                                c = !0;
                                var b = a.notifySubscribers;
                                a.notifySubscribers = function(a, c) {
                                    return c && c !== o || ++e, b.apply(this, arguments)
                                };
                                var f = [].concat(a.v() || []);
                                d = null, a.U(function(b) {
                                    if (b = [].concat(b || []), a.Ab(r)) {
                                        var c;
                                        (!d || e > 1) && (d = m.a.Fa(f, b, {
                                            sparse: !0
                                        })), c = d, c.length && a.notifySubscribers(c, r)
                                    }
                                    f = b, d = null, e = 0
                                })
                            }
                        }
                        if (!a.sb) {
                            var c = !1,
                                d = null,
                                e = 0,
                                f = a.U;
                            a.U = a.subscribe = function(a, c, d) {
                                return d === r && b(), f.apply(this, arguments)
                            }, a.sb = function(a, b, f) {
                                function g(a, b, c) {
                                    return h[h.length] = {
                                        status: a,
                                        value: b,
                                        index: c
                                    }
                                }
                                if (c && !e) {
                                    var h = [],
                                        i = a.length,
                                        j = f.length,
                                        k = 0;
                                    switch (b) {
                                        case "push":
                                            k = i;
                                        case "unshift":
                                            for (b = 0; j > b; b++) g("added", f[b], k + b);
                                            break;
                                        case "pop":
                                            k = i - 1;
                                        case "shift":
                                            i && g("deleted", a[k], k);
                                            break;
                                        case "splice":
                                            b = Math.min(Math.max(0, 0 > f[0] ? i + f[0] : f[0]), i);
                                            for (var i = 1 === j ? i : Math.min(b + (f[1] || 0), i), j = b + j - 2, k = Math.max(i, j), l = [], n = [], o = 2; k > b; ++b, ++o) i > b && n.push(g("deleted", a[b], b)), j > b && l.push(g("added", f[o], b));
                                            m.a.wb(n, l);
                                            break;
                                        default:
                                            return
                                    }
                                    d = h
                                }
                            }
                        }
                    }, m.s = m.j = function(b, c, d) {
                        function e() {
                            m.a.G(z, function(a, b) {
                                b.K()
                            }), z = {}
                        }

                        function f() {
                            e(), A = 0, q = !0, n = !1
                        }

                        function g() {
                            var a = i.throttleEvaluation;
                            a && a >= 0 ? (clearTimeout(B), B = setTimeout(h, a)) : i.ib ? i.ib() : h()
                        }

                        function h(b) {
                            if (o) {
                                if (s) throw Error("A 'pure' computed must not be called recursively")
                            } else if (!q) {
                                if (x && x()) {
                                    if (!p) return void y()
                                } else p = !1;
                                if (o = !0, t) try {
                                    var d = {};
                                    m.k.Ea({
                                        wa: function(a, b) {
                                            d[b] || (d[b] = 1, ++A)
                                        },
                                        s: i,
                                        ma: a
                                    }), A = 0, l = r.call(c)
                                } finally {
                                    m.k.end(), o = !1
                                } else try {
                                    var e = z,
                                        f = A;
                                    m.k.Ea({
                                        wa: function(a, b) {
                                            q || (f && e[b] ? (z[b] = e[b], ++A, delete e[b], --f) : z[b] || (z[b] = a.U(g), ++A))
                                        },
                                        s: i,
                                        ma: s ? a : !A
                                    }), z = {}, A = 0;
                                    try {
                                        var h = c ? r.call(c) : r()
                                    } finally {
                                        m.k.end(), f && m.a.G(e, function(a, b) {
                                            b.K()
                                        }), n = !1
                                    }
                                    i.Pa(l, h) && (i.notifySubscribers(l, "beforeChange"), l = h, !0 !== b && i.notifySubscribers(l))
                                } finally {
                                    o = !1
                                }
                                A || y()
                            }
                        }

                        function i() {
                            if (0 < arguments.length) {
                                if ("function" != typeof u) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return u.apply(c, arguments), this
                            }
                            return m.k.Jb(i), n && h(!0), l
                        }

                        function j() {
                            return n && !A && h(!0), l
                        }

                        function k() {
                            return n || A > 0
                        }
                        var l, n = !0,
                            o = !1,
                            p = !1,
                            q = !1,
                            r = b,
                            s = !1,
                            t = !1;
                        if (r && "object" == typeof r ? (d = r, r = d.read) : (d = d || {}, r || (r = d.read)), "function" != typeof r) throw Error("Pass a function that returns the value of the ko.computed");
                        var u = d.write,
                            v = d.disposeWhenNodeIsRemoved || d.o || null,
                            w = d.disposeWhen || d.Ia,
                            x = w,
                            y = f,
                            z = {},
                            A = 0,
                            B = null;
                        c || (c = d.owner), m.P.call(i), m.a.Aa(i, m.j.fn), i.v = j, i.la = function() {
                            return A
                        }, i.hc = "function" == typeof d.write, i.K = function() {
                            y()
                        }, i.Z = k;
                        var C = i.Ta;
                        return i.Ta = function(a) {
                            C.call(i, a), i.ib = function() {
                                i.kb(l), n = !0, i.lb(i)
                            }
                        }, d.pure ? (t = s = !0, i.va = function() {
                            t && (t = !1, h(!0))
                        }, i.nb = function() {
                            i.yb() || (e(), t = n = !0)
                        }) : d.deferEvaluation && (i.va = function() {
                            j(), delete i.va
                        }), m.A(i, "peek", i.v), m.A(i, "dispose", i.K), m.A(i, "isActive", i.Z), m.A(i, "getDependenciesCount", i.la), v && (p = !0, v.nodeType && (x = function() {
                            return !m.a.Ja(v) || w && w()
                        })), t || d.deferEvaluation || h(), v && k() && v.nodeType && (y = function() {
                            m.a.w.Kb(v, y), f()
                        }, m.a.w.da(v, y)), i
                    }, m.jc = function(a) {
                        return m.Ma(a, m.j)
                    }, p = m.p.rc, m.j[p] = m.p, m.j.fn = {
                        equalityComparer: i
                    }, m.j.fn[p] = m.j, m.a.xa && m.a.za(m.j.fn, m.P.fn), m.b("dependentObservable", m.j), m.b("computed", m.j), m.b("isComputed", m.jc), m.Ib = function(a, b) {
                        return "function" == typeof a ? m.s(a, b, {
                            pure: !0
                        }) : (a = m.a.extend({}, a), a.pure = !0, m.s(a, b))
                    }, m.b("pureComputed", m.Ib),
                    function() {
                        function b(e, f, g) {
                            if (g = g || new d, e = f(e), "object" != typeof e || null === e || e === a || e instanceof Date || e instanceof String || e instanceof Number || e instanceof Boolean) return e;
                            var h = e instanceof Array ? [] : {};
                            return g.save(e, h), c(e, function(c) {
                                var d = f(e[c]);
                                switch (typeof d) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        h[c] = d;
                                        break;
                                    case "object":
                                    case "undefined":
                                        var i = g.get(d);
                                        h[c] = i !== a ? i : b(d, f, g)
                                }
                            }), h
                        }

                        function c(a, b) {
                            if (a instanceof Array) {
                                for (var c = 0; c < a.length; c++) b(c);
                                "function" == typeof a.toJSON && b("toJSON")
                            } else
                                for (c in a) b(c)
                        }

                        function d() {
                            this.keys = [], this.hb = []
                        }
                        m.Qb = function(a) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return b(a, function(a) {
                                for (var b = 0; m.C(a) && 10 > b; b++) a = a();
                                return a
                            })
                        }, m.toJSON = function(a, b, c) {
                            return a = m.Qb(a), m.a.eb(a, b, c)
                        }, d.prototype = {
                            save: function(a, b) {
                                var c = m.a.m(this.keys, a);
                                c >= 0 ? this.hb[c] = b : (this.keys.push(a), this.hb.push(b))
                            },
                            get: function(b) {
                                return b = m.a.m(this.keys, b), b >= 0 ? this.hb[b] : a
                            }
                        }
                    }(), m.b("toJS", m.Qb), m.b("toJSON", m.toJSON),
                    function() {
                        m.i = {
                            q: function(b) {
                                switch (m.a.t(b)) {
                                    case "option":
                                        return !0 === b.__ko__hasDomDataOptionValue__ ? m.a.e.get(b, m.d.options.Va) : 7 >= m.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                                    case "select":
                                        return 0 <= b.selectedIndex ? m.i.q(b.options[b.selectedIndex]) : a;
                                    default:
                                        return b.value
                                }
                            },
                            ca: function(b, c, d) {
                                switch (m.a.t(b)) {
                                    case "option":
                                        switch (typeof c) {
                                            case "string":
                                                m.a.e.set(b, m.d.options.Va, a), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c;
                                                break;
                                            default:
                                                m.a.e.set(b, m.d.options.Va, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" == typeof c ? c : ""
                                        }
                                        break;
                                    case "select":
                                        ("" === c || null === c) && (c = a);
                                        for (var e, f = -1, g = 0, h = b.options.length; h > g; ++g)
                                            if (e = m.i.q(b.options[g]), e == c || "" == e && c === a) {
                                                f = g;
                                                break
                                            }(d || f >= 0 || c === a && 1 < b.size) && (b.selectedIndex = f);
                                        break;
                                    default:
                                        (null === c || c === a) && (c = ""), b.value = c
                                }
                            }
                        }
                    }(), m.b("selectExtensions", m.i), m.b("selectExtensions.readValue", m.i.q), m.b("selectExtensions.writeValue", m.i.ca), m.h = function() {
                        function a(a) {
                            a = m.a.cb(a), 123 === a.charCodeAt(0) && (a = a.slice(1, -1));
                            var b, c, g = [],
                                h = a.match(d),
                                i = 0;
                            if (h) {
                                h.push(",");
                                for (var j, k = 0; j = h[k]; ++k) {
                                    var l = j.charCodeAt(0);
                                    if (44 === l) {
                                        if (0 >= i) {
                                            b && g.push(c ? {
                                                key: b,
                                                value: c.join("")
                                            } : {
                                                unknown: b
                                            }), b = c = i = 0;
                                            continue
                                        }
                                    } else if (58 === l) {
                                        if (!c) continue
                                    } else if (47 === l && k && 1 < j.length)(l = h[k - 1].match(e)) && !f[l[0]] && (a = a.substr(a.indexOf(j) + 1), h = a.match(d), h.push(","), k = -1, j = "/");
                                    else if (40 === l || 123 === l || 91 === l) ++i;
                                    else if (41 === l || 125 === l || 93 === l) --i;
                                    else if (!b && !c) {
                                        b = 34 === l || 39 === l ? j.slice(1, -1) : j;
                                        continue
                                    }
                                    c ? c.push(j) : c = [j]
                                }
                            }
                            return g
                        }
                        var b = ["true", "false", "null", "undefined"],
                            c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            d = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                            e = /[\])"'A-Za-z0-9_$]+$/,
                            f = {
                                "in": 1,
                                "return": 1,
                                "typeof": 1
                            },
                            g = {};
                        return {
                            ha: [],
                            V: g,
                            Wa: a,
                            ya: function(d, e) {
                                function f(a, d) {
                                    var e;
                                    if (!k) {
                                        var l = m.getBindingHandler(a);
                                        if (l && l.preprocess && !(d = l.preprocess(d, a, f))) return;
                                        (l = g[a]) && (e = d, 0 <= m.a.m(b, e) ? e = !1 : (l = e.match(c), e = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : e), l = e), l && i.push("'" + a + "':function(_z){" + e + "=_z}")
                                    }
                                    j && (d = "function(){return " + d + " }"), h.push("'" + a + "':" + d)
                                }
                                e = e || {};
                                var h = [],
                                    i = [],
                                    j = e.valueAccessors,
                                    k = e.bindingParams,
                                    l = "string" == typeof d ? a(d) : d;
                                return m.a.u(l, function(a) {
                                    f(a.key || a.unknown, a.value)
                                }), i.length && f("_ko_property_writers", "{" + i.join(",") + " }"), h.join(",")
                            },
                            lc: function(a, b) {
                                for (var c = 0; c < a.length; c++)
                                    if (a[c].key == b) return !0;
                                return !1
                            },
                            pa: function(a, b, c, d, e) {
                                a && m.C(a) ? !m.Ra(a) || e && a.v() === d || a(d) : (a = b.get("_ko_property_writers")) && a[c] && a[c](d)
                            }
                        }
                    }(), m.b("expressionRewriting", m.h), m.b("expressionRewriting.bindingRewriteValidators", m.h.ha), m.b("expressionRewriting.parseObjectLiteral", m.h.Wa), m.b("expressionRewriting.preProcessBindings", m.h.ya), m.b("expressionRewriting._twoWayBindings", m.h.V), m.b("jsonExpressionRewriting", m.h), m.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", m.h.ya),
                    function() {
                        function a(a) {
                            return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
                        }

                        function b(a) {
                            return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue)
                        }

                        function d(c, d) {
                            for (var e = c, f = 1, g = []; e = e.nextSibling;) {
                                if (b(e) && (f--, 0 === f)) return g;
                                g.push(e), a(e) && f++
                            }
                            if (!d) throw Error("Cannot find closing comment tag to match: " + c.nodeValue);
                            return null
                        }

                        function e(a, b) {
                            var c = d(a, b);
                            return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                        }
                        var f = c && "<!--test-->" === c.createComment("test").text,
                            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            i = {
                                ul: !0,
                                ol: !0
                            };
                        m.f = {
                            Q: {},
                            childNodes: function(b) {
                                return a(b) ? d(b) : b.childNodes
                            },
                            ja: function(b) {
                                if (a(b)) {
                                    b = m.f.childNodes(b);
                                    for (var c = 0, d = b.length; d > c; c++) m.removeNode(b[c])
                                } else m.a.Ka(b)
                            },
                            T: function(b, c) {
                                if (a(b)) {
                                    m.f.ja(b);
                                    for (var d = b.nextSibling, e = 0, f = c.length; f > e; e++) d.parentNode.insertBefore(c[e], d)
                                } else m.a.T(b, c)
                            },
                            Hb: function(b, c) {
                                a(b) ? b.parentNode.insertBefore(c, b.nextSibling) : b.firstChild ? b.insertBefore(c, b.firstChild) : b.appendChild(c)
                            },
                            Bb: function(b, c, d) {
                                d ? a(b) ? b.parentNode.insertBefore(c, d.nextSibling) : d.nextSibling ? b.insertBefore(c, d.nextSibling) : b.appendChild(c) : m.f.Hb(b, c)
                            },
                            firstChild: function(c) {
                                return a(c) ? !c.nextSibling || b(c.nextSibling) ? null : c.nextSibling : c.firstChild
                            },
                            nextSibling: function(c) {
                                return a(c) && (c = e(c)), c.nextSibling && b(c.nextSibling) ? null : c.nextSibling
                            },
                            gc: a,
                            xc: function(a) {
                                return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null
                            },
                            Fb: function(c) {
                                if (i[m.a.t(c)]) {
                                    var d = c.firstChild;
                                    if (d)
                                        do
                                            if (1 === d.nodeType) {
                                                var f;
                                                f = d.firstChild;
                                                var g = null;
                                                if (f)
                                                    do
                                                        if (g) g.push(f);
                                                        else if (a(f)) {
                                                    var h = e(f, !0);
                                                    h ? f = h : g = [f]
                                                } else b(f) && (g = [f]);
                                                while (f = f.nextSibling);
                                                if (f = g)
                                                    for (g = d.nextSibling, h = 0; h < f.length; h++) g ? c.insertBefore(f[h], g) : c.appendChild(f[h])
                                            }
                                    while (d = d.nextSibling)
                                }
                            }
                        }
                    }(), m.b("virtualElements", m.f), m.b("virtualElements.allowedBindings", m.f.Q), m.b("virtualElements.emptyNode", m.f.ja), m.b("virtualElements.insertAfter", m.f.Bb), m.b("virtualElements.prepend", m.f.Hb), m.b("virtualElements.setDomNodeChildren", m.f.T),
                    function() {
                        m.J = function() {
                            this.Yb = {}
                        }, m.a.extend(m.J.prototype, {
                            nodeHasBindings: function(a) {
                                switch (a.nodeType) {
                                    case 1:
                                        return null != a.getAttribute("data-bind") || m.g.getComponentNameForNode(a);
                                    case 8:
                                        return m.f.gc(a);
                                    default:
                                        return !1
                                }
                            },
                            getBindings: function(a, b) {
                                var c = this.getBindingsString(a, b),
                                    c = c ? this.parseBindingsString(c, b, a) : null;
                                return m.g.mb(c, a, b, !1)
                            },
                            getBindingAccessors: function(a, b) {
                                var c = this.getBindingsString(a, b),
                                    c = c ? this.parseBindingsString(c, b, a, {
                                        valueAccessors: !0
                                    }) : null;
                                return m.g.mb(c, a, b, !0)
                            },
                            getBindingsString: function(a) {
                                switch (a.nodeType) {
                                    case 1:
                                        return a.getAttribute("data-bind");
                                    case 8:
                                        return m.f.xc(a);
                                    default:
                                        return null
                                }
                            },
                            parseBindingsString: function(a, b, c, d) {
                                try {
                                    var e, f = this.Yb,
                                        g = a + (d && d.valueAccessors || "");
                                    if (!(e = f[g])) {
                                        var h, i = "with($context){with($data||{}){return{" + m.h.ya(a, d) + "}}}";
                                        h = new Function("$context", "$element", i), e = f[g] = h
                                    }
                                    return e(b, c)
                                } catch (j) {
                                    throw j.message = "Unable to parse bindings.\nBindings value: " + a + "\nMessage: " + j.message, j
                                }
                            }
                        }), m.J.instance = new m.J
                    }(), m.b("bindingProvider", m.J),
                    function() {
                        function c(a) {
                            return function() {
                                return a
                            }
                        }

                        function d(a) {
                            return a()
                        }

                        function f(a) {
                            return m.a.na(m.k.B(a), function(b, c) {
                                return function() {
                                    return a()[c]
                                }
                            })
                        }

                        function g(a, b) {
                            return f(this.getBindings.bind(this, a, b))
                        }

                        function h(a, b, c) {
                            var d, e = m.f.firstChild(b),
                                f = m.J.instance,
                                g = f.preprocessNode;
                            if (g) {
                                for (; d = e;) e = m.f.nextSibling(d), g.call(f, d);
                                e = m.f.firstChild(b)
                            }
                            for (; d = e;) e = m.f.nextSibling(d), i(a, d, c)
                        }

                        function i(a, b, c) {
                            var d = !0,
                                e = 1 === b.nodeType;
                            e && m.f.Fb(b), (e && c || m.J.instance.nodeHasBindings(b)) && (d = k(b, null, a, c).shouldBindDescendants), d && !n[m.a.t(b)] && h(a, b, !e)
                        }

                        function j(a) {
                            var b = [],
                                c = {},
                                d = [];
                            return m.a.G(a, function e(f) {
                                if (!c[f]) {
                                    var g = m.getBindingHandler(f);
                                    g && (g.after && (d.push(f), m.a.u(g.after, function(b) {
                                        if (a[b]) {
                                            if (-1 !== m.a.m(d, b)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + d.join(", "));
                                            e(b)
                                        }
                                    }), d.length--), b.push({
                                        key: f,
                                        zb: g
                                    })), c[f] = !0
                                }
                            }), b
                        }

                        function k(b, c, e, f) {
                            var h = m.a.e.get(b, o);
                            if (!c) {
                                if (h) throw Error("You cannot apply bindings multiple times to the same element.");
                                m.a.e.set(b, o, !0)
                            }!h && f && m.Ob(b, e);
                            var i;
                            if (c && "function" != typeof c) i = c;
                            else {
                                var k = m.J.instance,
                                    l = k.getBindingAccessors || g,
                                    n = m.j(function() {
                                        return (i = c ? c(e, b) : l.call(k, b, e)) && e.I && e.I(), i
                                    }, null, {
                                        o: b
                                    });
                                i && n.Z() || (n = null)
                            }
                            var p;
                            if (i) {
                                var q = n ? function(a) {
                                        return function() {
                                            return d(n()[a])
                                        }
                                    } : function(a) {
                                        return i[a]
                                    },
                                    r = function() {
                                        return m.a.na(n ? n() : i, d)
                                    };
                                r.get = function(a) {
                                    return i[a] && d(q(a))
                                }, r.has = function(a) {
                                    return a in i
                                }, f = j(i), m.a.u(f, function(c) {
                                    var d = c.zb.init,
                                        f = c.zb.update,
                                        g = c.key;
                                    if (8 === b.nodeType && !m.f.Q[g]) throw Error("The binding '" + g + "' cannot be used with virtual elements");
                                    try {
                                        "function" == typeof d && m.k.B(function() {
                                            var c = d(b, q(g), r, e.$data, e);
                                            if (c && c.controlsDescendantBindings) {
                                                if (p !== a) throw Error("Multiple bindings (" + p + " and " + g + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                p = g
                                            }
                                        }), "function" == typeof f && m.j(function() {
                                            f(b, q(g), r, e.$data, e)
                                        }, null, {
                                            o: b
                                        })
                                    } catch (h) {
                                        throw h.message = 'Unable to process binding "' + g + ": " + i[g] + '"\nMessage: ' + h.message, h
                                    }
                                })
                            }
                            return {
                                shouldBindDescendants: p === a
                            }
                        }

                        function l(a) {
                            return a && a instanceof m.N ? a : new m.N(a)
                        }
                        m.d = {};
                        var n = {
                            script: !0
                        };
                        m.getBindingHandler = function(a) {
                            return m.d[a]
                        }, m.N = function(b, c, d, e) {
                            var f, g = this,
                                h = "function" == typeof b && !m.C(b),
                                i = m.j(function() {
                                    var a = h ? b() : b,
                                        f = m.a.c(a);
                                    return c ? (c.I && c.I(), m.a.extend(g, c), i && (g.I = i)) : (g.$parents = [], g.$root = f, g.ko = m), g.$rawData = a, g.$data = f, d && (g[d] = f), e && e(g, c, f), g.$data
                                }, null, {
                                    Ia: function() {
                                        return f && !m.a.ob(f)
                                    },
                                    o: !0
                                });
                            i.Z() && (g.I = i, i.equalityComparer = null, f = [], i.Tb = function(b) {
                                f.push(b), m.a.w.da(b, function(b) {
                                    m.a.ua(f, b), f.length || (i.K(), g.I = i = a)
                                })
                            })
                        }, m.N.prototype.createChildContext = function(a, b, c) {
                            return new m.N(a, this, b, function(a, b) {
                                a.$parentContext = b, a.$parent = b.$data, a.$parents = (b.$parents || []).slice(0), a.$parents.unshift(a.$parent), c && c(a)
                            })
                        }, m.N.prototype.extend = function(a) {
                            return new m.N(this.I || this.$data, this, null, function(b, c) {
                                b.$rawData = c.$rawData, m.a.extend(b, "function" == typeof a ? a() : a)
                            })
                        };
                        var o = m.a.e.F(),
                            p = m.a.e.F();
                        m.Ob = function(a, b) {
                            return 2 != arguments.length ? m.a.e.get(a, p) : (m.a.e.set(a, p, b), void(b.I && b.I.Tb(a)))
                        }, m.ra = function(a, b, c) {
                            return 1 === a.nodeType && m.f.Fb(a), k(a, b, l(c), !0)
                        }, m.Wb = function(a, b, d) {
                            return d = l(d), m.ra(a, "function" == typeof b ? f(b.bind(null, d, a)) : m.a.na(b, c), d)
                        }, m.Ca = function(a, b) {
                            1 !== b.nodeType && 8 !== b.nodeType || h(l(a), b, !0)
                        }, m.pb = function(a, c) {
                            if (!e && b.jQuery && (e = b.jQuery), c && 1 !== c.nodeType && 8 !== c.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            c = c || b.document.body, i(l(a), c, !0)
                        }, m.Ha = function(b) {
                            switch (b.nodeType) {
                                case 1:
                                case 8:
                                    var c = m.Ob(b);
                                    if (c) return c;
                                    if (b.parentNode) return m.Ha(b.parentNode)
                            }
                            return a
                        }, m.$b = function(b) {
                            return (b = m.Ha(b)) ? b.$data : a
                        }, m.b("bindingHandlers", m.d), m.b("applyBindings", m.pb), m.b("applyBindingsToDescendants", m.Ca), m.b("applyBindingAccessorsToNode", m.ra), m.b("applyBindingsToNode", m.Wb), m.b("contextFor", m.Ha), m.b("dataFor", m.$b)
                    }(),
                    function(a) {
                        function b(b, d) {
                            var g, h = e.hasOwnProperty(b) ? e[b] : a;
                            h || (h = e[b] = new m.P, c(b, function(a) {
                                f[b] = a, delete e[b], g ? h.notifySubscribers(a) : setTimeout(function() {
                                    h.notifySubscribers(a)
                                }, 0)
                            }), g = !0), h.U(d)
                        }

                        function c(a, b) {
                            d("getConfig", [a], function(c) {
                                c ? d("loadComponent", [a, c], function(a) {
                                    b(a)
                                }) : b(null)
                            })
                        }

                        function d(b, c, e, f) {
                            f || (f = m.g.loaders.slice(0));
                            var g = f.shift();
                            if (g) {
                                var h = g[b];
                                if (h) {
                                    var i = !1;
                                    if (h.apply(g, c.concat(function(a) {
                                            i ? e(null) : null !== a ? e(a) : d(b, c, e, f)
                                        })) !== a && (i = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                                } else d(b, c, e, f)
                            } else e(null)
                        }
                        var e = {},
                            f = {};
                        m.g = {
                            get: function(c, d) {
                                var e = f.hasOwnProperty(c) ? f[c] : a;
                                e ? setTimeout(function() {
                                    d(e)
                                }, 0) : b(c, d)
                            },
                            tb: function(a) {
                                delete f[a]
                            },
                            jb: d
                        }, m.g.loaders = [], m.b("components", m.g), m.b("components.get", m.g.get), m.b("components.clearCachedDefinition", m.g.tb)
                    }(),
                    function() {
                        function a(a, b, c, d) {
                            function e() {
                                0 === --h && d(f)
                            }
                            var f = {},
                                h = 2,
                                i = c.template;
                            c = c.viewModel, i ? g(b, i, function(b) {
                                m.g.jb("loadTemplate", [a, b], function(a) {
                                    f.template = a, e()
                                })
                            }) : e(), c ? g(b, c, function(b) {
                                m.g.jb("loadViewModel", [a, b], function(a) {
                                    f[k] = a, e()
                                })
                            }) : e()
                        }

                        function d(a, b, c) {
                            if ("function" == typeof b) c(function(a) {
                                return new b(a)
                            });
                            else if ("function" == typeof b[k]) c(b[k]);
                            else if ("instance" in b) {
                                var e = b.instance;
                                c(function() {
                                    return e
                                })
                            } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b)
                        }

                        function e(a) {
                            switch (m.a.t(a)) {
                                case "script":
                                    return m.a.ba(a.text);
                                case "textarea":
                                    return m.a.ba(a.value);
                                case "template":
                                    if (f(a.content)) return m.a.ia(a.content.childNodes)
                            }
                            return m.a.ia(a.childNodes)
                        }

                        function f(a) {
                            return b.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
                        }

                        function g(a, c, d) {
                            "string" == typeof c.require ? h || b.require ? (h || b.require)([c.require], d) : a("Uses require, but no AMD loader is present") : d(c)
                        }

                        function i(a) {
                            return function(b) {
                                throw Error("Component '" + a + "': " + b)
                            }
                        }
                        var j = {};
                        m.g.tc = function(a, b) {
                            if (!b) throw Error("Invalid configuration for " + a);
                            if (m.g.Qa(a)) throw Error("Component " + a + " is already registered");
                            j[a] = b
                        }, m.g.Qa = function(a) {
                            return a in j
                        }, m.g.wc = function(a) {
                            delete j[a], m.g.tb(a)
                        }, m.g.ub = {
                            getConfig: function(a, b) {
                                b(j.hasOwnProperty(a) ? j[a] : null)
                            },
                            loadComponent: function(b, c, d) {
                                var e = i(b);
                                g(e, c, function(c) {
                                    a(b, e, c, d)
                                })
                            },
                            loadTemplate: function(a, d, g) {
                                if (a = i(a), "string" == typeof d) g(m.a.ba(d));
                                else if (d instanceof Array) g(d);
                                else if (f(d)) g(m.a.S(d.childNodes));
                                else if (d.element)
                                    if (d = d.element, b.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) g(e(d));
                                    else if ("string" == typeof d) {
                                    var h = c.getElementById(d);
                                    h ? g(e(h)) : a("Cannot find element with ID " + d)
                                } else a("Unknown element type: " + d);
                                else a("Unknown template value: " + d)
                            },
                            loadViewModel: function(a, b, c) {
                                d(i(a), b, c)
                            }
                        };
                        var k = "createViewModel";
                        m.b("components.register", m.g.tc), m.b("components.isRegistered", m.g.Qa), m.b("components.unregister", m.g.wc), m.b("components.defaultLoader", m.g.ub), m.g.loaders.push(m.g.ub), m.g.Ub = j
                    }(),
                    function() {
                        function a(a, c) {
                            var d = a.getAttribute("params");
                            if (d) {
                                var d = b.parseBindingsString(d, c, a, {
                                        valueAccessors: !0,
                                        bindingParams: !0
                                    }),
                                    d = m.a.na(d, function(b) {
                                        return m.s(b, null, {
                                            o: a
                                        })
                                    }),
                                    e = m.a.na(d, function(b) {
                                        return b.Z() ? m.s(function() {
                                            return m.a.c(b())
                                        }, null, {
                                            o: a
                                        }) : b.v()
                                    });
                                return e.hasOwnProperty("$raw") || (e.$raw = d), e
                            }
                            return {
                                $raw: {}
                            }
                        }
                        m.g.getComponentNameForNode = function(a) {
                            return a = m.a.t(a), m.g.Qa(a) && a
                        }, m.g.mb = function(b, c, d, e) {
                            if (1 === c.nodeType) {
                                var f = m.g.getComponentNameForNode(c);
                                if (f) {
                                    if (b = b || {}, b.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                    var g = {
                                        name: f,
                                        params: a(c, d)
                                    };
                                    b.component = e ? function() {
                                        return g
                                    } : g
                                }
                            }
                            return b
                        };
                        var b = new m.J;
                        9 > m.a.L && (m.g.register = function(a) {
                            return function(b) {
                                return c.createElement(b), a.apply(this, arguments)
                            }
                        }(m.g.register), c.createDocumentFragment = function(a) {
                            return function() {
                                var b, c = a(),
                                    d = m.g.Ub;
                                for (b in d) d.hasOwnProperty(b) && c.createElement(b);
                                return c
                            }
                        }(c.createDocumentFragment))
                    }(),
                    function() {
                        var a = 0;
                        m.d.component = {
                            init: function(b, c, d, e, f) {
                                function g() {
                                    var a = h && h.dispose;
                                    "function" == typeof a && a.call(h), i = null
                                }
                                var h, i;
                                return m.a.w.da(b, g), m.s(function() {
                                    var d, e, j = m.a.c(c());
                                    if ("string" == typeof j ? d = j : (d = m.a.c(j.name), e = m.a.c(j.params)), !d) throw Error("No component name specified");
                                    var k = i = ++a;
                                    m.g.get(d, function(a) {
                                        if (i === k) {
                                            if (g(), !a) throw Error("Unknown component '" + d + "'");
                                            var c = a.template;
                                            if (!c) throw Error("Component '" + d + "' has no template");
                                            c = m.a.ia(c), m.f.T(b, c);
                                            var c = e,
                                                j = a.createViewModel;
                                            a = j ? j.call(a, c, {
                                                element: b
                                            }) : c, c = f.createChildContext(a), h = a, m.Ca(c, b)
                                        }
                                    })
                                }, null, {
                                    o: b
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        }, m.f.Q.component = !0
                    }();
                var s = {
                    "class": "className",
                    "for": "htmlFor"
                };
                m.d.attr = {
                        update: function(b, c) {
                            var d = m.a.c(c()) || {};
                            m.a.G(d, function(c, d) {
                                d = m.a.c(d);
                                var e = !1 === d || null === d || d === a;
                                e && b.removeAttribute(c), 8 >= m.a.L && c in s ? (c = s[c], e ? b.removeAttribute(c) : b[c] = d) : e || b.setAttribute(c, d.toString()), "name" === c && m.a.Mb(b, e ? "" : d.toString())
                            })
                        }
                    },
                    function() {
                        m.d.checked = {
                            after: ["value", "attr"],
                            init: function(b, c, d) {
                                function e() {
                                    var a = b.checked,
                                        e = l ? g() : a;
                                    if (!m.Y.ma() && (!i || a)) {
                                        var f = m.k.B(c);
                                        j ? k !== e ? (a && (m.a.ea(f, e, !0), m.a.ea(f, k, !1)), k = e) : m.a.ea(f, e, a) : m.h.pa(f, d, "checked", e, !0)
                                    }
                                }

                                function f() {
                                    var a = m.a.c(c());
                                    b.checked = j ? 0 <= m.a.m(a, g()) : h ? a : g() === a
                                }
                                var g = m.Ib(function() {
                                        return d.has("checkedValue") ? m.a.c(d.get("checkedValue")) : d.has("value") ? m.a.c(d.get("value")) : b.value
                                    }),
                                    h = "checkbox" == b.type,
                                    i = "radio" == b.type;
                                if (h || i) {
                                    var j = h && m.a.c(c()) instanceof Array,
                                        k = j ? g() : a,
                                        l = i || j;
                                    i && !b.name && m.d.uniqueName.init(b, function() {
                                        return !0
                                    }), m.s(e, null, {
                                        o: b
                                    }), m.a.n(b, "click", e), m.s(f, null, {
                                        o: b
                                    })
                                }
                            }
                        }, m.h.V.checked = !0, m.d.checkedValue = {
                            update: function(a, b) {
                                a.value = m.a.c(b())
                            }
                        }
                    }(), m.d.css = {
                        update: function(a, b) {
                            var c = m.a.c(b());
                            "object" == typeof c ? m.a.G(c, function(b, c) {
                                c = m.a.c(c), m.a.Ba(a, b, c)
                            }) : (c = String(c || ""), m.a.Ba(a, a.__ko__cssValue, !1), a.__ko__cssValue = c, m.a.Ba(a, c, !0))
                        }
                    }, m.d.enable = {
                        update: function(a, b) {
                            var c = m.a.c(b());
                            c && a.disabled ? a.removeAttribute("disabled") : c || a.disabled || (a.disabled = !0)
                        }
                    }, m.d.disable = {
                        update: function(a, b) {
                            m.d.enable.update(a, function() {
                                return !m.a.c(b())
                            })
                        }
                    }, m.d.event = {
                        init: function(a, b, c, d, e) {
                            var f = b() || {};
                            m.a.G(f, function(f) {
                                "string" == typeof f && m.a.n(a, f, function(a) {
                                    var g, h = b()[f];
                                    if (h) {
                                        try {
                                            var i = m.a.S(arguments);
                                            d = e.$data, i.unshift(d), g = h.apply(d, i)
                                        } finally {
                                            !0 !== g && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                                        }!1 === c.get(f + "Bubble") && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation())
                                    }
                                })
                            })
                        }
                    }, m.d.foreach = {
                        Eb: function(a) {
                            return function() {
                                var b = a(),
                                    c = m.a.Xa(b);
                                return c && "number" != typeof c.length ? (m.a.c(b), {
                                    foreach: c.data,
                                    as: c.as,
                                    includeDestroyed: c.includeDestroyed,
                                    afterAdd: c.afterAdd,
                                    beforeRemove: c.beforeRemove,
                                    afterRender: c.afterRender,
                                    beforeMove: c.beforeMove,
                                    afterMove: c.afterMove,
                                    templateEngine: m.O.Oa
                                }) : {
                                    foreach: b,
                                    templateEngine: m.O.Oa
                                }
                            }
                        },
                        init: function(a, b) {
                            return m.d.template.init(a, m.d.foreach.Eb(b))
                        },
                        update: function(a, b, c, d, e) {
                            return m.d.template.update(a, m.d.foreach.Eb(b), c, d, e)
                        }
                    }, m.h.ha.foreach = !1, m.f.Q.foreach = !0, m.d.hasfocus = {
                        init: function(a, b, c) {
                            function d(d) {
                                a.__ko_hasfocusUpdating = !0;
                                var e = a.ownerDocument;
                                if ("activeElement" in e) {
                                    var f;
                                    try {
                                        f = e.activeElement
                                    } catch (g) {
                                        f = e.body
                                    }
                                    d = f === a
                                }
                                e = b(), m.h.pa(e, c, "hasfocus", d, !0), a.__ko_hasfocusLastValue = d, a.__ko_hasfocusUpdating = !1
                            }
                            var e = d.bind(null, !0),
                                f = d.bind(null, !1);
                            m.a.n(a, "focus", e), m.a.n(a, "focusin", e), m.a.n(a, "blur", f), m.a.n(a, "focusout", f)
                        },
                        update: function(a, b) {
                            var c = !!m.a.c(b());
                            a.__ko_hasfocusUpdating || a.__ko_hasfocusLastValue === c || (c ? a.focus() : a.blur(), m.k.B(m.a.oa, null, [a, c ? "focusin" : "focusout"]))
                        }
                    }, m.h.V.hasfocus = !0, m.d.hasFocus = m.d.hasfocus, m.h.V.hasFocus = !0, m.d.html = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(a, b) {
                            m.a.$a(a, b())
                        }
                    }, l("if"), l("ifnot", !1, !0), l("with", !0, !1, function(a, b) {
                        return a.createChildContext(b)
                    });
                var t = {};
                m.d.options = {
                        init: function(a) {
                            if ("select" !== m.a.t(a)) throw Error("options binding applies only to SELECT elements");
                            for (; 0 < a.length;) a.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(b, c, d) {
                            function e() {
                                return m.a.ta(b.options, function(a) {
                                    return a.selected
                                })
                            }

                            function f(a, b, c) {
                                var d = typeof b;
                                return "function" == d ? b(a) : "string" == d ? a[b] : c
                            }

                            function g(a, c) {
                                if (l.length) {
                                    var d = 0 <= m.a.m(l, m.i.q(c[0]));
                                    m.a.Nb(c[0], d), n && !d && m.k.B(m.a.oa, null, [b, "change"])
                                }
                            }
                            var h = 0 != b.length && b.multiple ? b.scrollTop : null,
                                i = m.a.c(c()),
                                j = d.get("optionsIncludeDestroyed");
                            c = {};
                            var k, l;
                            l = b.multiple ? m.a.Da(e(), m.i.q) : 0 <= b.selectedIndex ? [m.i.q(b.options[b.selectedIndex])] : [], i && ("undefined" == typeof i.length && (i = [i]), k = m.a.ta(i, function(b) {
                                return j || b === a || null === b || !m.a.c(b._destroy)
                            }), d.has("optionsCaption") && (i = m.a.c(d.get("optionsCaption")), null !== i && i !== a && k.unshift(t)));
                            var n = !1;
                            c.beforeRemove = function(a) {
                                b.removeChild(a)
                            }, i = g, d.has("optionsAfterRender") && (i = function(b, c) {
                                g(0, c), m.k.B(d.get("optionsAfterRender"), null, [c[0], b !== t ? b : a])
                            }), m.a.Za(b, k, function(c, e, g) {
                                return g.length && (l = g[0].selected ? [m.i.q(g[0])] : [], n = !0), e = b.ownerDocument.createElement("option"), c === t ? (m.a.bb(e, d.get("optionsCaption")), m.i.ca(e, a)) : (g = f(c, d.get("optionsValue"), c), m.i.ca(e, m.a.c(g)), c = f(c, d.get("optionsText"), g), m.a.bb(e, c)), [e]
                            }, c, i), m.k.B(function() {
                                d.get("valueAllowUnset") && d.has("value") ? m.i.ca(b, m.a.c(d.get("value")), !0) : (b.multiple ? l.length && e().length < l.length : l.length && 0 <= b.selectedIndex ? m.i.q(b.options[b.selectedIndex]) !== l[0] : l.length || 0 <= b.selectedIndex) && m.a.oa(b, "change")
                            }), m.a.dc(b), h && 20 < Math.abs(h - b.scrollTop) && (b.scrollTop = h)
                        }
                    }, m.d.options.Va = m.a.e.F(), m.d.selectedOptions = {
                        after: ["options", "foreach"],
                        init: function(a, b, c) {
                            m.a.n(a, "change", function() {
                                var d = b(),
                                    e = [];
                                m.a.u(a.getElementsByTagName("option"), function(a) {
                                    a.selected && e.push(m.i.q(a))
                                }), m.h.pa(d, c, "selectedOptions", e)
                            })
                        },
                        update: function(a, b) {
                            if ("select" != m.a.t(a)) throw Error("values binding applies only to SELECT elements");
                            var c = m.a.c(b());
                            c && "number" == typeof c.length && m.a.u(a.getElementsByTagName("option"), function(a) {
                                var b = 0 <= m.a.m(c, m.i.q(a));
                                m.a.Nb(a, b)
                            })
                        }
                    }, m.h.V.selectedOptions = !0, m.d.style = {
                        update: function(b, c) {
                            var d = m.a.c(c() || {});
                            m.a.G(d, function(c, d) {
                                d = m.a.c(d), (null === d || d === a || !1 === d) && (d = ""), b.style[c] = d
                            })
                        }
                    }, m.d.submit = {
                        init: function(a, b, c, d, e) {
                            if ("function" != typeof b()) throw Error("The value for a submit binding must be a function");
                            m.a.n(a, "submit", function(c) {
                                var d, f = b();
                                try {
                                    d = f.call(e.$data, a)
                                } finally {
                                    !0 !== d && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
                                }
                            })
                        }
                    }, m.d.text = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(a, b) {
                            m.a.bb(a, b())
                        }
                    }, m.f.Q.text = !0,
                    function() {
                        if (b && b.navigator) var c = function(a) {
                                return a ? parseFloat(a[1]) : void 0
                            },
                            d = b.opera && b.opera.version && parseInt(b.opera.version()),
                            e = b.navigator.userAgent,
                            f = c(e.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                            g = c(e.match(/Firefox\/([^ ]*)/));
                        if (10 > m.a.L) var h = m.a.e.F(),
                            i = m.a.e.F(),
                            j = function(a) {
                                var b = this.activeElement;
                                (b = b && m.a.e.get(b, i)) && b(a)
                            },
                            k = function(a, b) {
                                var c = a.ownerDocument;
                                m.a.e.get(c, h) || (m.a.e.set(c, h, !0), m.a.n(c, "selectionchange", j)), m.a.e.set(a, i, b)
                            };
                        m.d.textInput = {
                            init: function(b, c, e) {
                                function h(a, c) {
                                    m.a.n(b, a, c)
                                }

                                function i() {
                                    var d = m.a.c(c());
                                    (null === d || d === a) && (d = ""), o !== a && d === o ? setTimeout(i, 4) : b.value !== d && (p = d, b.value = d)
                                }

                                function j() {
                                    n || (o = b.value, n = setTimeout(l, 4))
                                }

                                function l() {
                                    clearTimeout(n), o = n = a;
                                    var d = b.value;
                                    p !== d && (p = d, m.h.pa(c(), e, "textInput", d))
                                }
                                var n, o, p = b.value;
                                10 > m.a.L ? (h("propertychange", function(a) {
                                    "value" === a.propertyName && l()
                                }), 8 == m.a.L && (h("keyup", l), h("keydown", l)), 8 <= m.a.L && (k(b, l), h("dragend", j))) : (h("input", l), 5 > f && "textarea" === m.a.t(b) ? (h("keydown", j), h("paste", j), h("cut", j)) : 11 > d ? h("keydown", j) : 4 > g && (h("DOMAutoComplete", l), h("dragdrop", l), h("drop", l))), h("change", l), m.s(i, null, {
                                    o: b
                                })
                            }
                        }, m.h.V.textInput = !0, m.d.textinput = {
                            preprocess: function(a, b, c) {
                                c("textInput", a)
                            }
                        }
                    }(), m.d.uniqueName = {
                        init: function(a, b) {
                            if (b()) {
                                var c = "ko_unique_" + ++m.d.uniqueName.Zb;
                                m.a.Mb(a, c)
                            }
                        }
                    }, m.d.uniqueName.Zb = 0, m.d.value = {
                        after: ["options", "foreach"],
                        init: function(a, b, c) {
                            if ("input" != a.tagName.toLowerCase() || "checkbox" != a.type && "radio" != a.type) {
                                var d = ["change"],
                                    e = c.get("valueUpdate"),
                                    f = !1,
                                    g = null;
                                e && ("string" == typeof e && (e = [e]), m.a.ga(d, e), d = m.a.rb(d));
                                var h = function() {
                                    g = null, f = !1;
                                    var d = b(),
                                        e = m.i.q(a);
                                    m.h.pa(d, c, "value", e)
                                };
                                !m.a.L || "input" != a.tagName.toLowerCase() || "text" != a.type || "off" == a.autocomplete || a.form && "off" == a.form.autocomplete || -1 != m.a.m(d, "propertychange") || (m.a.n(a, "propertychange", function() {
                                    f = !0
                                }), m.a.n(a, "focus", function() {
                                    f = !1
                                }), m.a.n(a, "blur", function() {
                                    f && h()
                                })), m.a.u(d, function(b) {
                                    var c = h;
                                    m.a.vc(b, "after") && (c = function() {
                                        g = m.i.q(a), setTimeout(h, 0)
                                    }, b = b.substring(5)), m.a.n(a, b, c)
                                });
                                var i = function() {
                                    var d = m.a.c(b()),
                                        e = m.i.q(a);
                                    if (null !== g && d === g) setTimeout(i, 0);
                                    else if (d !== e)
                                        if ("select" === m.a.t(a)) {
                                            var f = c.get("valueAllowUnset"),
                                                e = function() {
                                                    m.i.ca(a, d, f)
                                                };
                                            e(), f || d === m.i.q(a) ? setTimeout(e, 0) : m.k.B(m.a.oa, null, [a, "change"])
                                        } else m.i.ca(a, d)
                                };
                                m.s(i, null, {
                                    o: a
                                })
                            } else m.ra(a, {
                                checkedValue: b
                            })
                        },
                        update: function() {}
                    }, m.h.V.value = !0, m.d.visible = {
                        update: function(a, b) {
                            var c = m.a.c(b()),
                                d = "none" != a.style.display;
                            c && !d ? a.style.display = "" : !c && d && (a.style.display = "none")
                        }
                    },
                    function(a) {
                        m.d[a] = {
                            init: function(b, c, d, e, f) {
                                return m.d.event.init.call(this, b, function() {
                                    var b = {};
                                    return b[a] = c(), b
                                }, d, e, f)
                            }
                        }
                    }("click"), m.H = function() {}, m.H.prototype.renderTemplateSource = function() {
                        throw Error("Override renderTemplateSource")
                    }, m.H.prototype.createJavaScriptEvaluatorBlock = function() {
                        throw Error("Override createJavaScriptEvaluatorBlock")
                    }, m.H.prototype.makeTemplateSource = function(a, b) {
                        if ("string" == typeof a) {
                            b = b || c;
                            var d = b.getElementById(a);
                            if (!d) throw Error("Cannot find template with ID " + a);
                            return new m.r.l(d)
                        }
                        if (1 == a.nodeType || 8 == a.nodeType) return new m.r.fa(a);
                        throw Error("Unknown template type: " + a)
                    }, m.H.prototype.renderTemplate = function(a, b, c, d) {
                        return a = this.makeTemplateSource(a, d), this.renderTemplateSource(a, b, c)
                    }, m.H.prototype.isTemplateRewritten = function(a, b) {
                        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, b).data("isRewritten")
                    }, m.H.prototype.rewriteTemplate = function(a, b, c) {
                        a = this.makeTemplateSource(a, c), b = b(a.text()), a.text(b), a.data("isRewritten", !0)
                    }, m.b("templateEngine", m.H), m.fb = function() {
                        function a(a, b, c, d) {
                            a = m.h.Wa(a);
                            for (var e = m.h.ha, f = 0; f < a.length; f++) {
                                var g = a[f].key;
                                if (e.hasOwnProperty(g)) {
                                    var h = e[g];
                                    if ("function" == typeof h) {
                                        if (g = h(a[f].value)) throw Error(g)
                                    } else if (!h) throw Error("This template engine does not support the '" + g + "' binding within its templates")
                                }
                            }
                            return c = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + m.h.ya(a, {
                                valueAccessors: !0
                            }) + " } })()},'" + c.toLowerCase() + "')", d.createJavaScriptEvaluatorBlock(c) + b
                        }
                        var b = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            ec: function(a, b, c) {
                                b.isTemplateRewritten(a, c) || b.rewriteTemplate(a, function(a) {
                                    return m.fb.nc(a, b)
                                }, c)
                            },
                            nc: function(d, e) {
                                return d.replace(b, function(b, c, d, f, g) {
                                    return a(g, c, d, e)
                                }).replace(c, function(b, c) {
                                    return a(c, "<!-- ko -->", "#comment", e)
                                })
                            },
                            Xb: function(a, b) {
                                return m.D.Ua(function(c, d) {
                                    var e = c.nextSibling;
                                    e && e.nodeName.toLowerCase() === b && m.ra(e, a, d)
                                })
                            }
                        }
                    }(), m.b("__tr_ambtns", m.fb.Xb),
                    function() {
                        m.r = {}, m.r.l = function(a) {
                            this.l = a
                        }, m.r.l.prototype.text = function() {
                            var a = m.a.t(this.l),
                                a = "script" === a ? "text" : "textarea" === a ? "value" : "innerHTML";
                            if (0 == arguments.length) return this.l[a];
                            var b = arguments[0];
                            "innerHTML" === a ? m.a.$a(this.l, b) : this.l[a] = b
                        };
                        var b = m.a.e.F() + "_";
                        m.r.l.prototype.data = function(a) {
                            return 1 === arguments.length ? m.a.e.get(this.l, b + a) : void m.a.e.set(this.l, b + a, arguments[1])
                        };
                        var c = m.a.e.F();
                        m.r.fa = function(a) {
                            this.l = a
                        }, m.r.fa.prototype = new m.r.l, m.r.fa.prototype.text = function() {
                            if (0 == arguments.length) {
                                var b = m.a.e.get(this.l, c) || {};
                                return b.gb === a && b.Ga && (b.gb = b.Ga.innerHTML), b.gb
                            }
                            m.a.e.set(this.l, c, {
                                gb: arguments[0]
                            })
                        }, m.r.l.prototype.nodes = function() {
                            return 0 == arguments.length ? (m.a.e.get(this.l, c) || {}).Ga : void m.a.e.set(this.l, c, {
                                Ga: arguments[0]
                            })
                        }, m.b("templateSources", m.r), m.b("templateSources.domElement", m.r.l), m.b("templateSources.anonymousTemplate", m.r.fa)
                    }(),
                    function() {
                        function b(a, b, c) {
                            var d;
                            for (b = m.f.nextSibling(b); a && (d = a) !== b;) a = m.f.nextSibling(d), c(d, a)
                        }

                        function c(a, c) {
                            if (a.length) {
                                var d = a[0],
                                    e = a[a.length - 1],
                                    f = d.parentNode,
                                    g = m.J.instance,
                                    h = g.preprocessNode;
                                if (h) {
                                    if (b(d, e, function(a, b) {
                                            var c = a.previousSibling,
                                                f = h.call(g, a);
                                            f && (a === d && (d = f[0] || b), a === e && (e = f[f.length - 1] || c))
                                        }), a.length = 0, !d) return;
                                    d === e ? a.push(d) : (a.push(d, e), m.a.ka(a, f))
                                }
                                b(d, e, function(a) {
                                    1 !== a.nodeType && 8 !== a.nodeType || m.pb(c, a)
                                }), b(d, e, function(a) {
                                    1 !== a.nodeType && 8 !== a.nodeType || m.D.Sb(a, [c])
                                }), m.a.ka(a, f)
                            }
                        }

                        function d(a) {
                            return a.nodeType ? a : 0 < a.length ? a[0] : null
                        }

                        function e(a, b, e, g, h) {
                            h = h || {};
                            var i = a && d(a),
                                i = i && i.ownerDocument,
                                j = h.templateEngine || f;
                            if (m.fb.ec(e, j, i), e = j.renderTemplate(e, g, h, i), "number" != typeof e.length || 0 < e.length && "number" != typeof e[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                            switch (i = !1, b) {
                                case "replaceChildren":
                                    m.f.T(a, e), i = !0;
                                    break;
                                case "replaceNode":
                                    m.a.Lb(a, e), i = !0;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + b)
                            }
                            return i && (c(e, g), h.afterRender && m.k.B(h.afterRender, null, [e, g.$data])), e
                        }
                        var f;
                        m.ab = function(b) {
                            if (b != a && !(b instanceof m.H)) throw Error("templateEngine must inherit from ko.templateEngine");
                            f = b
                        }, m.Ya = function(b, c, g, h, i) {
                            if (g = g || {}, (g.templateEngine || f) == a) throw Error("Set a template engine before calling renderTemplate");
                            if (i = i || "replaceChildren", h) {
                                var j = d(h);
                                return m.j(function() {
                                    var a = c && c instanceof m.N ? c : new m.N(m.a.c(c)),
                                        f = m.C(b) ? b() : "function" == typeof b ? b(a.$data, a) : b,
                                        a = e(h, i, f, a, g);
                                    "replaceNode" == i && (h = a, j = d(h))
                                }, null, {
                                    Ia: function() {
                                        return !j || !m.a.Ja(j)
                                    },
                                    o: j && "replaceNode" == i ? j.parentNode : j
                                })
                            }
                            return m.D.Ua(function(a) {
                                m.Ya(b, c, g, a, "replaceNode")
                            })
                        }, m.uc = function(b, d, f, g, h) {
                            function i(a, b) {
                                c(b, k), f.afterRender && f.afterRender(b, a)
                            }

                            function j(a, c) {
                                k = h.createChildContext(a, f.as, function(a) {
                                    a.$index = c
                                });
                                var d = m.C(b) ? b() : "function" == typeof b ? b(a, k) : b;
                                return e(null, "ignoreTargetNode", d, k, f)
                            }
                            var k;
                            return m.j(function() {
                                var b = m.a.c(d) || [];
                                "undefined" == typeof b.length && (b = [b]), b = m.a.ta(b, function(b) {
                                    return f.includeDestroyed || b === a || null === b || !m.a.c(b._destroy)
                                }), m.k.B(m.a.Za, null, [g, b, j, f, i])
                            }, null, {
                                o: g
                            })
                        };
                        var g = m.a.e.F();
                        m.d.template = {
                            init: function(a, b) {
                                var c = m.a.c(b());
                                return "string" == typeof c || c.name ? m.f.ja(a) : (c = m.f.childNodes(a), c = m.a.oc(c), new m.r.fa(a).nodes(c)), {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(b, c, d, e, f) {
                                var h, i = c();
                                c = m.a.c(i), d = !0, e = null, "string" == typeof c ? c = {} : (i = c.name, "if" in c && (d = m.a.c(c["if"])), d && "ifnot" in c && (d = !m.a.c(c.ifnot)), h = m.a.c(c.data)), "foreach" in c ? e = m.uc(i || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(h, c.as) : f, e = m.Ya(i || b, f, c, b)) : m.f.ja(b), f = e, (h = m.a.e.get(b, g)) && "function" == typeof h.K && h.K(), m.a.e.set(b, g, f && f.Z() ? f : a)
                            }
                        }, m.h.ha.template = function(a) {
                            return a = m.h.Wa(a), 1 == a.length && a[0].unknown || m.h.lc(a, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }, m.f.Q.template = !0
                    }(), m.b("setTemplateEngine", m.ab), m.b("renderTemplate", m.Ya), m.a.wb = function(a, b, c) {
                        if (a.length && b.length) {
                            var d, e, f, g, h;
                            for (d = e = 0;
                                (!c || c > d) && (g = a[e]); ++e) {
                                for (f = 0; h = b[f]; ++f)
                                    if (g.value === h.value) {
                                        g.moved = h.index, h.moved = g.index, b.splice(f, 1), d = f = 0;
                                        break
                                    }
                                d += f
                            }
                        }
                    }, m.a.Fa = function() {
                        function a(a, b, c, d, e) {
                            var f, g, h, i, j, k = Math.min,
                                l = Math.max,
                                n = [],
                                o = a.length,
                                p = b.length,
                                q = p - o || 1,
                                r = o + p + 1;
                            for (f = 0; o >= f; f++)
                                for (i = h, n.push(h = []), j = k(p, f + q), g = l(0, f - 1); j >= g; g++) h[g] = g ? f ? a[f - 1] === b[g - 1] ? i[g - 1] : k(i[g] || r, h[g - 1] || r) + 1 : g + 1 : f + 1;
                            for (k = [], l = [], q = [], f = o, g = p; f || g;) p = n[f][g] - 1, g && p === n[f][g - 1] ? l.push(k[k.length] = {
                                status: c,
                                value: b[--g],
                                index: g
                            }) : f && p === n[f - 1][g] ? q.push(k[k.length] = {
                                status: d,
                                value: a[--f],
                                index: f
                            }) : (--g, --f, e.sparse || k.push({
                                status: "retained",
                                value: b[g]
                            }));
                            return m.a.wb(l, q, 10 * o), k.reverse()
                        }
                        return function(b, c, d) {
                            return d = "boolean" == typeof d ? {
                                dontLimitMoves: d
                            } : d || {}, b = b || [], c = c || [], b.length <= c.length ? a(b, c, "added", "deleted", d) : a(c, b, "deleted", "added", d)
                        }
                    }(), m.b("utils.compareArrays", m.a.Fa),
                    function() {
                        function b(b, c, d, e, f) {
                            var g = [],
                                h = m.j(function() {
                                    var a = c(d, f, m.a.ka(g, b)) || [];
                                    0 < g.length && (m.a.Lb(g, a), e && m.k.B(e, null, [d, a, f])), g.length = 0, m.a.ga(g, a)
                                }, null, {
                                    o: b,
                                    Ia: function() {
                                        return !m.a.ob(g)
                                    }
                                });
                            return {
                                $: g,
                                j: h.Z() ? h : a
                            }
                        }
                        var c = m.a.e.F();
                        m.a.Za = function(d, e, f, g, h) {
                            function i(a, b) {
                                u = l[b], r !== b && (x[a] = u), u.Na(r++), m.a.ka(u.$, d), p.push(u), t.push(u)
                            }

                            function j(a, b) {
                                if (a)
                                    for (var c = 0, d = b.length; d > c; c++) b[c] && m.a.u(b[c].$, function(d) {
                                        a(d, c, b[c].sa)
                                    })
                            }
                            e = e || [], g = g || {};
                            var k = m.a.e.get(d, c) === a,
                                l = m.a.e.get(d, c) || [],
                                n = m.a.Da(l, function(a) {
                                    return a.sa
                                }),
                                o = m.a.Fa(n, e, g.dontLimitMoves),
                                p = [],
                                q = 0,
                                r = 0,
                                s = [],
                                t = [];
                            e = [];
                            for (var u, v, w, x = [], n = [], y = 0; v = o[y]; y++) switch (w = v.moved, v.status) {
                                case "deleted":
                                    w === a && (u = l[q], u.j && u.j.K(), s.push.apply(s, m.a.ka(u.$, d)), g.beforeRemove && (e[y] = u, t.push(u))), q++;
                                    break;
                                case "retained":
                                    i(y, q++);
                                    break;
                                case "added":
                                    w !== a ? i(y, w) : (u = {
                                        sa: v.value,
                                        Na: m.p(r++)
                                    }, p.push(u), t.push(u), k || (n[y] = u))
                            }
                            j(g.beforeMove, x), m.a.u(s, g.beforeRemove ? m.R : m.removeNode);
                            for (var z, y = 0, k = m.f.firstChild(d); u = t[y]; y++) {
                                for (u.$ || m.a.extend(u, b(d, f, u.sa, h, u.Na)), q = 0; o = u.$[q]; k = o.nextSibling, z = o, q++) o !== k && m.f.Bb(d, o, z);
                                !u.ic && h && (h(u.sa, u.$, u.Na), u.ic = !0)
                            }
                            j(g.beforeRemove, e), j(g.afterMove, x), j(g.afterAdd, n), m.a.e.set(d, c, p)
                        }
                    }(), m.b("utils.setDomNodeChildrenFromArrayMapping", m.a.Za), m.O = function() {
                        this.allowTemplateRewriting = !1
                    }, m.O.prototype = new m.H, m.O.prototype.renderTemplateSource = function(a) {
                        var b = (9 > m.a.L ? 0 : a.nodes) ? a.nodes() : null;
                        return b ? m.a.S(b.cloneNode(!0).childNodes) : (a = a.text(), m.a.ba(a))
                    }, m.O.Oa = new m.O, m.ab(m.O.Oa), m.b("nativeTemplateEngine", m.O),
                    function() {
                        m.Sa = function() {
                            var a = this.kc = function() {
                                if (!e || !e.tmpl) return 0;
                                try {
                                    if (0 <= e.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                                } catch (a) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(b, d, f) {
                                if (f = f || {}, 2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var g = b.data("precompiled");
                                return g || (g = b.text() || "", g = e.template(null, "{{ko_with $item.koBindingContext}}" + g + "{{/ko_with}}"), b.data("precompiled", g)), b = [d.$data], d = e.extend({
                                    koBindingContext: d
                                }, f.templateOptions), d = e.tmpl(g, b, d), d.appendTo(c.createElement("div")), e.fragments = {}, d
                            }, this.createJavaScriptEvaluatorBlock = function(a) {
                                return "{{ko_code ((function() { return " + a + " })()) }}"
                            }, this.addTemplate = function(a, b) {
                                c.write("<script type='text/html' id='" + a + "'>" + b + "</script>")
                            }, a > 0 && (e.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, e.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }, m.Sa.prototype = new m.H;
                        var a = new m.Sa;
                        0 < a.kc && m.ab(a), m.b("jqueryTmplTemplateEngine", m.Sa)
                    }()
            })
        }()
    }(),
    function(a) {
        a(["jquery"], function(a) {
            return function() {
                function b(a, b, c) {
                    return o({
                        type: v.error,
                        iconClass: p().iconClasses.error,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function c(b, c) {
                    return b || (b = p()), r = a("#" + b.containerId), r.length ? r : (c && (r = l(b)), r)
                }

                function d(a, b, c) {
                    return o({
                        type: v.info,
                        iconClass: p().iconClasses.info,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function e(a) {
                    s = a
                }

                function f(a, b, c) {
                    return o({
                        type: v.success,
                        iconClass: p().iconClasses.success,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function g(a, b, c) {
                    return o({
                        type: v.warning,
                        iconClass: p().iconClasses.warning,
                        message: a,
                        optionsOverride: c,
                        title: b
                    })
                }

                function h(a) {
                    var b = p();
                    r || c(b), k(a, b) || j(b)
                }

                function i(b) {
                    var d = p();
                    return r || c(d), b && 0 === a(":focus", b).length ? void q(b) : void(r.children().length && r.remove())
                }

                function j(b) {
                    for (var c = r.children(), d = c.length - 1; d >= 0; d--) k(a(c[d]), b)
                }

                function k(b, c) {
                    return b && 0 === a(":focus", b).length ? (b[c.hideMethod]({
                        duration: c.hideDuration,
                        easing: c.hideEasing,
                        complete: function() {
                            q(b)
                        }
                    }), !0) : !1
                }

                function l(b) {
                    return r = a("<div/>").attr("id", b.containerId).addClass(b.positionClass).attr("aria-live", "polite").attr("role", "alert"), r.appendTo(a(b.target)), r
                }

                function m() {
                    return {
                        tapToDismiss: !0,
                        toastClass: "toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "toast-error",
                            info: "toast-info",
                            success: "toast-success",
                            warning: "toast-warning"
                        },
                        iconClass: "toast-info",
                        positionClass: "toast-top-right",
                        timeOut: 5e3,
                        titleClass: "toast-title",
                        messageClass: "toast-message",
                        target: "body",
                        closeHtml: "<button>&times;</button>",
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }
                }

                function n(a) {
                    s && s(a)
                }

                function o(b) {
                    function d(b) {
                        return !a(":focus", k).length || b ? (clearTimeout(v.intervalId), k[h.hideMethod]({
                            duration: h.hideDuration,
                            easing: h.hideEasing,
                            complete: function() {
                                q(k), h.onHidden && "hidden" !== w.state && h.onHidden(), w.state = "hidden", w.endTime = new Date, n(w)
                            }
                        })) : void 0
                    }

                    function e() {
                        (h.timeOut > 0 || h.extendedTimeOut > 0) && (j = setTimeout(d, h.extendedTimeOut), v.maxHideTime = parseFloat(h.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                    }

                    function f() {
                        clearTimeout(j), v.hideEta = 0, k.stop(!0, !0)[h.showMethod]({
                            duration: h.showDuration,
                            easing: h.showEasing
                        })
                    }

                    function g() {
                        var a = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                        o.width(a + "%")
                    }
                    var h = p(),
                        i = b.iconClass || h.iconClass;
                    if (h.preventDuplicates) {
                        if (b.message === t) return;
                        t = b.message
                    }
                    "undefined" != typeof b.optionsOverride && (h = a.extend(h, b.optionsOverride), i = b.optionsOverride.iconClass || i), u++, r = c(h, !0);
                    var j = null,
                        k = a("<div/>"),
                        l = a("<div/>"),
                        m = a("<div/>"),
                        o = a("<div/>"),
                        s = a(h.closeHtml),
                        v = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null
                        },
                        w = {
                            toastId: u,
                            state: "visible",
                            startTime: new Date,
                            options: h,
                            map: b
                        };
                    return b.iconClass && k.addClass(h.toastClass).addClass(i), b.title && (l.append(b.title).addClass(h.titleClass), k.append(l)), b.message && (m.append(b.message).addClass(h.messageClass), k.append(m)), h.closeButton && (s.addClass("toast-close-button").attr("role", "button"), k.prepend(s)), h.progressBar && (o.addClass("toast-progress"), k.prepend(o)), k.hide(), h.newestOnTop ? r.prepend(k) : r.append(k), k[h.showMethod]({
                        duration: h.showDuration,
                        easing: h.showEasing,
                        complete: h.onShown
                    }), h.timeOut > 0 && (j = setTimeout(d, h.timeOut), v.maxHideTime = parseFloat(h.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, h.progressBar && (v.intervalId = setInterval(g, 10))), k.hover(f, e), !h.onclick && h.tapToDismiss && k.click(d), h.closeButton && s && s.click(function(a) {
                        a.stopPropagation ? a.stopPropagation() : void 0 !== a.cancelBubble && a.cancelBubble !== !0 && (a.cancelBubble = !0), d(!0)
                    }), h.onclick && k.click(function() {
                        h.onclick(), d()
                    }), n(w), h.debug && console && console.log(w), k
                }

                function p() {
                    return a.extend({}, m(), w.options)
                }

                function q(a) {
                    r || (r = c()), a.is(":visible") || (a.remove(), a = null, 0 === r.children().length && r.remove())
                }
                var r, s, t, u = 0,
                    v = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    w = {
                        clear: h,
                        remove: i,
                        error: b,
                        getContainer: c,
                        info: d,
                        options: {},
                        subscribe: e,
                        success: f,
                        version: "2.1.0",
                        warning: g
                    };
                return w
            }()
        })
    }("function" == typeof define && define.amd ? define : function(a, b) {
        "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : window.toastr = b(window.jQuery)
    }),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a, b) {
        "use strict";
        if (!a.jstree) {
            var c, d, e = 0,
                f = !1,
                g = !1,
                h = !1,
                i = [],
                j = a("script:last").attr("src"),
                k = document,
                l = k.createElement("LI");
            l.setAttribute("role", "treeitem"), c = k.createElement("I"), c.className = "jstree-icon jstree-ocl", c.setAttribute("role", "presentation"), l.appendChild(c), c = k.createElement("A"), c.className = "jstree-anchor", c.setAttribute("href", "#"), c.setAttribute("tabindex", "-1"), d = k.createElement("I"), d.className = "jstree-icon jstree-themeicon", d.setAttribute("role", "presentation"), c.appendChild(d), l.appendChild(c), c = d = null, a.jstree = {
                version: "3.0.9",
                defaults: {
                    plugins: []
                },
                plugins: {},
                path: j && -1 !== j.indexOf("/") ? j.replace(/\/[^\/]+$/, "") : "",
                idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g
            }, a.jstree.create = function(b, c) {
                var d = new a.jstree.core(++e),
                    f = c;
                return c = a.extend(!0, {}, a.jstree.defaults, c), f && f.plugins && (c.plugins = f.plugins), a.each(c.plugins, function(a, b) {
                    "core" !== a && (d = d.plugin(b, c[b]))
                }), d.init(b, c), d
            }, a.jstree.destroy = function() {
                a(".jstree:jstree").jstree("destroy"), a(document).off(".jstree")
            }, a.jstree.core = function(a) {
                this._id = a, this._cnt = 0, this._wrk = null, this._data = {
                    core: {
                        themes: {
                            name: !1,
                            dots: !1,
                            icons: !1
                        },
                        selected: [],
                        last_error: {},
                        working: !1,
                        worker_queue: [],
                        focused: null
                    }
                }
            }, a.jstree.reference = function(b) {
                var c = null,
                    d = null;
                if (b && b.id && (b = b.id), !d || !d.length) try {
                    d = a(b)
                } catch (e) {}
                if (!d || !d.length) try {
                    d = a("#" + b.replace(a.jstree.idregex, "\\$&"))
                } catch (e) {}
                return d && d.length && (d = d.closest(".jstree")).length && (d = d.data("jstree")) ? c = d : a(".jstree").each(function() {
                    var d = a(this).data("jstree");
                    return d && d._model.data[b] ? (c = d, !1) : void 0
                }), c
            }, a.fn.jstree = function(c) {
                var d = "string" == typeof c,
                    e = Array.prototype.slice.call(arguments, 1),
                    f = null;
                return c !== !0 || this.length ? (this.each(function() {
                    var g = a.jstree.reference(this),
                        h = d && g ? g[c] : null;
                    return f = d && h ? h.apply(g, e) : null, g || d || c !== b && !a.isPlainObject(c) || a(this).data("jstree", new a.jstree.create(this, c)), (g && !d || c === !0) && (f = g || !1), null !== f && f !== b ? !1 : void 0
                }), null !== f && f !== b ? f : this) : !1
            }, a.expr[":"].jstree = a.expr.createPseudo(function() {
                return function(c) {
                    return a(c).hasClass("jstree") && a(c).data("jstree") !== b
                }
            }), a.jstree.defaults.core = {
                data: !1,
                strings: !1,
                check_callback: !1,
                error: a.noop,
                animation: 200,
                multiple: !0,
                themes: {
                    name: !1,
                    url: !1,
                    dir: !1,
                    dots: !0,
                    icons: !0,
                    stripes: !1,
                    variant: !1,
                    responsive: !1
                },
                expand_selected_onload: !0,
                worker: !0,
                force_text: !1,
                dblclick_toggle: !0
            }, a.jstree.core.prototype = {
                plugin: function(b, c) {
                    var d = a.jstree.plugins[b];
                    return d ? (this._data[b] = {}, d.prototype = this, new d(c, this)) : this
                },
                init: function(b, c) {
                    this._model = {
                        data: {
                            "#": {
                                id: "#",
                                parent: null,
                                parents: [],
                                children: [],
                                children_d: [],
                                state: {
                                    loaded: !1
                                }
                            }
                        },
                        changed: [],
                        force_full_redraw: !1,
                        redraw_timeout: !1,
                        default_state: {
                            loaded: !0,
                            opened: !1,
                            selected: !1,
                            disabled: !1
                        }
                    }, this.element = a(b).addClass("jstree jstree-" + this._id), this.settings = c, this._data.core.ready = !1, this._data.core.loaded = !1, this._data.core.rtl = "rtl" === this.element.css("direction"), this.element[this._data.core.rtl ? "addClass" : "removeClass"]("jstree-rtl"), this.element.attr("role", "tree"), this.settings.core.multiple && this.element.attr("aria-multiselectable", !0), this.element.attr("tabindex") || this.element.attr("tabindex", "0"), this.bind(), this.trigger("init"), this._data.core.original_container_html = this.element.find(" > ul > li").clone(!0), this._data.core.original_container_html.find("li").addBack().contents().filter(function() {
                        return 3 === this.nodeType && (!this.nodeValue || /^\s+$/.test(this.nodeValue))
                    }).remove(), this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='tree-item'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading"), this._data.core.li_height = this.get_container_ul().children("li").first().height() || 24, this.trigger("loading"), this.load_node("#")
                },
                destroy: function(a) {
                    if (this._wrk) try {
                        window.URL.revokeObjectURL(this._wrk), this._wrk = null
                    } catch (b) {}
                    a || this.element.empty(), this.teardown()
                },
                teardown: function() {
                    this.unbind(), this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function() {
                        return this.className.replace(/jstree[^ ]*|$/gi, "")
                    }), this.element = null
                },
                bind: function() {
                    var b = "",
                        c = null,
                        d = 0;
                    this.element.on("dblclick.jstree", function() {
                        if (document.selection && document.selection.empty) document.selection.empty();
                        else if (window.getSelection) {
                            var a = window.getSelection();
                            try {
                                a.removeAllRanges(), a.collapse()
                            } catch (b) {}
                        }
                    }).on("mousedown.jstree", a.proxy(function(a) {
                        a.target === this.element[0] && (a.preventDefault(), d = +new Date)
                    }, this)).on("mousedown.jstree", ".jstree-ocl", function(a) {
                        a.preventDefault()
                    }).on("click.jstree", ".jstree-ocl", a.proxy(function(a) {
                        this.toggle_node(a.target)
                    }, this)).on("dblclick.jstree", ".jstree-anchor", a.proxy(function(a) {
                        this.settings.core.dblclick_toggle && this.toggle_node(a.target)
                    }, this)).on("click.jstree", ".jstree-anchor", a.proxy(function(b) {
                        b.preventDefault(), b.currentTarget !== document.activeElement && a(b.currentTarget).focus(), this.activate_node(b.currentTarget, b)
                    }, this)).on("keydown.jstree", ".jstree-anchor", a.proxy(function(b) {
                        if ("INPUT" === b.target.tagName) return !0;
                        var c = null;
                        switch (this._data.core.rtl && (37 === b.which ? b.which = 39 : 39 === b.which && (b.which = 37)), b.which) {
                            case 32:
                                b.ctrlKey && (b.type = "click", a(b.currentTarget).trigger(b));
                                break;
                            case 13:
                                b.type = "click", a(b.currentTarget).trigger(b);
                                break;
                            case 37:
                                b.preventDefault(), this.is_open(b.currentTarget) ? this.close_node(b.currentTarget) : (c = this.get_parent(b.currentTarget), c && "#" !== c.id && this.get_node(c, !0).children(".jstree-anchor").focus());
                                break;
                            case 38:
                                b.preventDefault(), c = this.get_prev_dom(b.currentTarget), c && c.length && c.children(".jstree-anchor").focus();
                                break;
                            case 39:
                                b.preventDefault(), this.is_closed(b.currentTarget) ? this.open_node(b.currentTarget, function(a) {
                                    this.get_node(a, !0).children(".jstree-anchor").focus()
                                }) : this.is_open(b.currentTarget) && (c = this.get_node(b.currentTarget, !0).children(".jstree-children")[0], c && a(this._firstChild(c)).children(".jstree-anchor").focus());
                                break;
                            case 40:
                                b.preventDefault(), c = this.get_next_dom(b.currentTarget), c && c.length && c.children(".jstree-anchor").focus();
                                break;
                            case 106:
                                this.open_all();
                                break;
                            case 36:
                                b.preventDefault(), c = this._firstChild(this.get_container_ul()[0]), c && a(c).children(".jstree-anchor").filter(":visible").focus();
                                break;
                            case 35:
                                b.preventDefault(), this.element.find(".jstree-anchor").filter(":visible").last().focus()
                        }
                    }, this)).on("load_node.jstree", a.proxy(function(b, c) {
                        c.status && ("#" !== c.node.id || this._data.core.loaded || (this._data.core.loaded = !0, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.trigger("loaded")), this._data.core.ready || setTimeout(a.proxy(function() {
                            if (!this.get_container_ul().find(".jstree-loading").length) {
                                if (this._data.core.ready = !0, this._data.core.selected.length) {
                                    if (this.settings.core.expand_selected_onload) {
                                        var b, c, d = [];
                                        for (b = 0, c = this._data.core.selected.length; c > b; b++) d = d.concat(this._model.data[this._data.core.selected[b]].parents);
                                        for (d = a.vakata.array_unique(d), b = 0, c = d.length; c > b; b++) this.open_node(d[b], !1, 0)
                                    }
                                    this.trigger("changed", {
                                        action: "ready",
                                        selected: this._data.core.selected
                                    })
                                }
                                this.trigger("ready")
                            }
                        }, this), 0))
                    }, this)).on("keypress.jstree", a.proxy(function(d) {
                        if ("INPUT" === d.target.tagName) return !0;
                        c && clearTimeout(c), c = setTimeout(function() {
                            b = ""
                        }, 500);
                        var e = String.fromCharCode(d.which).toLowerCase(),
                            f = this.element.find(".jstree-anchor").filter(":visible"),
                            g = f.index(document.activeElement) || 0,
                            h = !1;
                        if (b += e, b.length > 1) {
                            if (f.slice(g).each(a.proxy(function(c, d) {
                                    return 0 === a(d).text().toLowerCase().indexOf(b) ? (a(d).focus(), h = !0, !1) : void 0
                                }, this)), h) return;
                            if (f.slice(0, g).each(a.proxy(function(c, d) {
                                    return 0 === a(d).text().toLowerCase().indexOf(b) ? (a(d).focus(), h = !0, !1) : void 0
                                }, this)), h) return
                        }
                        if (new RegExp("^" + e + "+$").test(b)) {
                            if (f.slice(g + 1).each(a.proxy(function(b, c) {
                                    return a(c).text().toLowerCase().charAt(0) === e ? (a(c).focus(), h = !0, !1) : void 0
                                }, this)), h) return;
                            if (f.slice(0, g + 1).each(a.proxy(function(b, c) {
                                    return a(c).text().toLowerCase().charAt(0) === e ? (a(c).focus(), h = !0, !1) : void 0
                                }, this)), h) return
                        }
                    }, this)).on("init.jstree", a.proxy(function() {
                        var a = this.settings.core.themes;
                        this._data.core.themes.dots = a.dots, this._data.core.themes.stripes = a.stripes, this._data.core.themes.icons = a.icons, this.set_theme(a.name || "default", a.url), this.set_theme_variant(a.variant)
                    }, this)).on("loading.jstree", a.proxy(function() {
                        this[this._data.core.themes.dots ? "show_dots" : "hide_dots"](), this[this._data.core.themes.icons ? "show_icons" : "hide_icons"](), this[this._data.core.themes.stripes ? "show_stripes" : "hide_stripes"]()
                    }, this)).on("blur.jstree", ".jstree-anchor", a.proxy(function(b) {
                        this._data.core.focused = null, a(b.currentTarget).filter(".jstree-hovered").mouseleave(), this.element.attr("tabindex", "0")
                    }, this)).on("focus.jstree", ".jstree-anchor", a.proxy(function(b) {
                        var c = this.get_node(b.currentTarget);
                        c && c.id && (this._data.core.focused = c.id), this.element.find(".jstree-hovered").not(b.currentTarget).mouseleave(), a(b.currentTarget).mouseenter(), this.element.attr("tabindex", "-1")
                    }, this)).on("focus.jstree", a.proxy(function() {
                        +new Date - d > 500 && !this._data.core.focused && (d = 0, this.get_node(this.element.attr("aria-activedescendant"), !0).find("> .jstree-anchor").focus())
                    }, this)).on("mouseenter.jstree", ".jstree-anchor", a.proxy(function(a) {
                        this.hover_node(a.currentTarget)
                    }, this)).on("mouseleave.jstree", ".jstree-anchor", a.proxy(function(a) {
                        this.dehover_node(a.currentTarget)
                    }, this))
                },
                unbind: function() {
                    this.element.off(".jstree"), a(document).off(".jstree-" + this._id)
                },
                trigger: function(a, b) {
                    b || (b = {}), b.instance = this, this.element.triggerHandler(a.replace(".jstree", "") + ".jstree", b)
                },
                get_container: function() {
                    return this.element
                },
                get_container_ul: function() {
                    return this.element.children(".jstree-children").first()
                },
                get_string: function(b) {
                    var c = this.settings.core.strings;
                    return a.isFunction(c) ? c.call(this, b) : c && c[b] ? c[b] : b
                },
                _firstChild: function(a) {
                    for (a = a ? a.firstChild : null; null !== a && 1 !== a.nodeType;) a = a.nextSibling;
                    return a
                },
                _nextSibling: function(a) {
                    for (a = a ? a.nextSibling : null; null !== a && 1 !== a.nodeType;) a = a.nextSibling;
                    return a
                },
                _previousSibling: function(a) {
                    for (a = a ? a.previousSibling : null; null !== a && 1 !== a.nodeType;) a = a.previousSibling;
                    return a
                },
                get_node: function(b, c) {
                    b && b.id && (b = b.id);
                    var d;
                    try {
                        if (this._model.data[b]) b = this._model.data[b];
                        else if ("string" == typeof b && this._model.data[b.replace(/^#/, "")]) b = this._model.data[b.replace(/^#/, "")];
                        else if ("string" == typeof b && (d = a("#" + b.replace(a.jstree.idregex, "\\$&"), this.element)).length && this._model.data[d.closest(".jstree-node").attr("id")]) b = this._model.data[d.closest(".jstree-node").attr("id")];
                        else if ((d = a(b, this.element)).length && this._model.data[d.closest(".jstree-node").attr("id")]) b = this._model.data[d.closest(".jstree-node").attr("id")];
                        else {
                            if (!(d = a(b, this.element)).length || !d.hasClass("jstree")) return !1;
                            b = this._model.data["#"]
                        }
                        return c && (b = "#" === b.id ? this.element : a("#" + b.id.replace(a.jstree.idregex, "\\$&"), this.element)), b
                    } catch (e) {
                        return !1
                    }
                },
                get_path: function(a, b, c) {
                    if (a = a.parents ? a : this.get_node(a), !a || "#" === a.id || !a.parents) return !1;
                    var d, e, f = [];
                    for (f.push(c ? a.id : a.text), d = 0, e = a.parents.length; e > d; d++) f.push(c ? a.parents[d] : this.get_text(a.parents[d]));
                    return f = f.reverse().slice(1), b ? f.join(b) : f
                },
                get_next_dom: function(b, c) {
                    var d;
                    if (b = this.get_node(b, !0), b[0] === this.element[0]) {
                        for (d = this._firstChild(this.get_container_ul()[0]); d && 0 === d.offsetHeight;) d = this._nextSibling(d);
                        return d ? a(d) : !1
                    }
                    if (!b || !b.length) return !1;
                    if (c) {
                        d = b[0];
                        do d = this._nextSibling(d); while (d && 0 === d.offsetHeight);
                        return d ? a(d) : !1
                    }
                    if (b.hasClass("jstree-open")) {
                        for (d = this._firstChild(b.children(".jstree-children")[0]); d && 0 === d.offsetHeight;) d = this._nextSibling(d);
                        if (null !== d) return a(d)
                    }
                    d = b[0];
                    do d = this._nextSibling(d); while (d && 0 === d.offsetHeight);
                    return null !== d ? a(d) : b.parentsUntil(".jstree", ".jstree-node").next(".jstree-node:visible").first()
                },
                get_prev_dom: function(b, c) {
                    var d;
                    if (b = this.get_node(b, !0), b[0] === this.element[0]) {
                        for (d = this.get_container_ul()[0].lastChild; d && 0 === d.offsetHeight;) d = this._previousSibling(d);
                        return d ? a(d) : !1
                    }
                    if (!b || !b.length) return !1;
                    if (c) {
                        d = b[0];
                        do d = this._previousSibling(d); while (d && 0 === d.offsetHeight);
                        return d ? a(d) : !1
                    }
                    d = b[0];
                    do d = this._previousSibling(d); while (d && 0 === d.offsetHeight);
                    if (null !== d) {
                        for (b = a(d); b.hasClass("jstree-open");) b = b.children(".jstree-children").first().children(".jstree-node:visible:last");
                        return b
                    }
                    return d = b[0].parentNode.parentNode, d && d.className && -1 !== d.className.indexOf("jstree-node") ? a(d) : !1
                },
                get_parent: function(a) {
                    return a = this.get_node(a), a && "#" !== a.id ? a.parent : !1
                },
                get_children_dom: function(a) {
                    return a = this.get_node(a, !0), a[0] === this.element[0] ? this.get_container_ul().children(".jstree-node") : a && a.length ? a.children(".jstree-children").children(".jstree-node") : !1
                },
                is_parent: function(a) {
                    return a = this.get_node(a), a && (a.state.loaded === !1 || a.children.length > 0)
                },
                is_loaded: function(a) {
                    return a = this.get_node(a), a && a.state.loaded
                },
                is_loading: function(a) {
                    return a = this.get_node(a), a && a.state && a.state.loading
                },
                is_open: function(a) {
                    return a = this.get_node(a), a && a.state.opened
                },
                is_closed: function(a) {
                    return a = this.get_node(a), a && this.is_parent(a) && !a.state.opened
                },
                is_leaf: function(a) {
                    return !this.is_parent(a)
                },
                load_node: function(b, c) {
                    var d, e, f, g, h;
                    if (a.isArray(b)) return this._load_nodes(b.slice(), c), !0;
                    if (b = this.get_node(b), !b) return c && c.call(this, b, !1), !1;
                    if (b.state.loaded) {
                        for (b.state.loaded = !1, d = 0, e = b.children_d.length; e > d; d++) {
                            for (f = 0, g = b.parents.length; g > f; f++) this._model.data[b.parents[f]].children_d = a.vakata.array_remove_item(this._model.data[b.parents[f]].children_d, b.children_d[d]);
                            this._model.data[b.children_d[d]].state.selected && (h = !0, this._data.core.selected = a.vakata.array_remove_item(this._data.core.selected, b.children_d[d])), delete this._model.data[b.children_d[d]]
                        }
                        b.children = [], b.children_d = [], h && this.trigger("changed", {
                            action: "load_node",
                            node: b,
                            selected: this._data.core.selected
                        })
                    }
                    return b.state.loading = !0, this.get_node(b, !0).addClass("jstree-loading").attr("aria-busy", !0), this._load_node(b, a.proxy(function(a) {
                        b = this._model.data[b.id], b.state.loading = !1, b.state.loaded = a;
                        var d = this.get_node(b, !0);
                        b.state.loaded && !b.children.length && d && d.length && !d.hasClass("jstree-leaf") && d.removeClass("jstree-closed jstree-open").addClass("jstree-leaf"), d.removeClass("jstree-loading").attr("aria-busy", !1), this.trigger("load_node", {
                            node: b,
                            status: a
                        }), c && c.call(this, b, a)
                    }, this)), !0
                },
                _load_nodes: function(a, b, c) {
                    var d, e, f = !0,
                        g = function() {
                            this._load_nodes(a, b, !0)
                        },
                        h = this._model.data;
                    for (d = 0, e = a.length; e > d; d++) !h[a[d]] || h[a[d]].state.loaded && c || (this.is_loading(a[d]) || this.load_node(a[d], g), f = !1);
                    f && b && !b.done && (b.call(this, a), b.done = !0)
                },
                load_all: function(a, b) {
                    if (a || (a = "#"), a = this.get_node(a), !a) return !1;
                    var c, d, e = [],
                        f = this._model.data,
                        g = f[a.id].children_d;
                    for (a.state && !a.state.loaded && e.push(a.id), c = 0, d = g.length; d > c; c++) f[g[c]] && f[g[c]].state && !f[g[c]].state.loaded && e.push(g[c]);
                    e.length ? this._load_nodes(e, function() {
                        this.load_all(a, b)
                    }) : (b && b.call(this, a), this.trigger("load_all", {
                        node: a
                    }))
                },
                _load_node: function(b, c) {
                    var d, e = this.settings.core.data;
                    return e ? a.isFunction(e) ? e.call(this, b, a.proxy(function(d) {
                        d === !1 && c.call(this, !1), this["string" == typeof d ? "_append_html_data" : "_append_json_data"](b, "string" == typeof d ? a(d) : d, function(a) {
                            c.call(this, a)
                        })
                    }, this)) : "object" == typeof e ? e.url ? (e = a.extend(!0, {}, e), a.isFunction(e.url) && (e.url = e.url.call(this, b)), a.isFunction(e.data) && (e.data = e.data.call(this, b)), a.ajax(e).done(a.proxy(function(d, e, f) {
                        var g = f.getResponseHeader("Content-Type");
                        return -1 !== g.indexOf("json") || "object" == typeof d ? this._append_json_data(b, d, function(a) {
                            c.call(this, a)
                        }) : -1 !== g.indexOf("html") || "string" == typeof d ? this._append_html_data(b, a(d), function(a) {
                            c.call(this, a)
                        }) : (this._data.core.last_error = {
                            error: "ajax",
                            plugin: "core",
                            id: "core_04",
                            reason: "Could not load node",
                            data: JSON.stringify({
                                id: b.id,
                                xhr: f
                            })
                        }, this.settings.core.error.call(this, this._data.core.last_error), c.call(this, !1))
                    }, this)).fail(a.proxy(function(a) {
                        c.call(this, !1), this._data.core.last_error = {
                            error: "ajax",
                            plugin: "core",
                            id: "core_04",
                            reason: "Could not load node",
                            data: JSON.stringify({
                                id: b.id,
                                xhr: a
                            })
                        }, this.settings.core.error.call(this, this._data.core.last_error)
                    }, this))) : (d = a.isArray(e) || a.isPlainObject(e) ? JSON.parse(JSON.stringify(e)) : e, "#" === b.id ? this._append_json_data(b, d, function(a) {
                        c.call(this, a)
                    }) : (this._data.core.last_error = {
                        error: "nodata",
                        plugin: "core",
                        id: "core_05",
                        reason: "Could not load node",
                        data: JSON.stringify({
                            id: b.id
                        })
                    }, this.settings.core.error.call(this, this._data.core.last_error), c.call(this, !1))) : "string" == typeof e ? "#" === b.id ? this._append_html_data(b, a(e), function(a) {
                        c.call(this, a)
                    }) : (this._data.core.last_error = {
                        error: "nodata",
                        plugin: "core",
                        id: "core_06",
                        reason: "Could not load node",
                        data: JSON.stringify({
                            id: b.id
                        })
                    }, this.settings.core.error.call(this, this._data.core.last_error), c.call(this, !1)) : c.call(this, !1) : "#" === b.id ? this._append_html_data(b, this._data.core.original_container_html.clone(!0), function(a) {
                        c.call(this, a)
                    }) : c.call(this, !1)
                },
                _node_changed: function(a) {
                    a = this.get_node(a), a && this._model.changed.push(a.id)
                },
                _append_html_data: function(b, c, d) {
                    b = this.get_node(b), b.children = [], b.children_d = [];
                    var e, f, g, h = c.is("ul") ? c.children() : c,
                        i = b.id,
                        j = [],
                        k = [],
                        l = this._model.data,
                        m = l[i],
                        n = this._data.core.selected.length;
                    for (h.each(a.proxy(function(b, c) {
                            e = this._parse_model_from_html(a(c), i, m.parents.concat()), e && (j.push(e), k.push(e), l[e].children_d.length && (k = k.concat(l[e].children_d)))
                        }, this)), m.children = j, m.children_d = k, f = 0, g = m.parents.length; g > f; f++) l[m.parents[f]].children_d = l[m.parents[f]].children_d.concat(k);
                    this.trigger("model", {
                        nodes: k,
                        parent: i
                    }), "#" !== i ? (this._node_changed(i), this.redraw()) : (this.get_container_ul().children(".jstree-initial-node").remove(), this.redraw(!0)), this._data.core.selected.length !== n && this.trigger("changed", {
                        action: "model",
                        selected: this._data.core.selected
                    }), d.call(this, !0)
                },
                _append_json_data: function(b, c, d, e) {
                    b = this.get_node(b), b.children = [], b.children_d = [], c.d && (c = c.d, "string" == typeof c && (c = JSON.parse(c))), a.isArray(c) || (c = [c]);
                    var f = null,
                        g = {
                            df: this._model.default_state,
                            dat: c,
                            par: b.id,
                            m: this._model.data,
                            t_id: this._id,
                            t_cnt: this._cnt,
                            sel: this._data.core.selected
                        },
                        h = function(a, b) {
                            a.data && (a = a.data);
                            var c, d, e, f, g = a.dat,
                                h = a.par,
                                i = [],
                                j = [],
                                k = [],
                                l = a.df,
                                m = a.t_id,
                                n = a.t_cnt,
                                o = a.m,
                                p = o[h],
                                q = a.sel,
                                r = function(a, c, d) {
                                    d = d ? d.concat() : [], c && d.unshift(c);
                                    var e, f, g, h, i = a.id.toString(),
                                        j = {
                                            id: i,
                                            text: a.text || "",
                                            icon: a.icon !== b ? a.icon : !0,
                                            parent: c,
                                            parents: d,
                                            children: a.children || [],
                                            children_d: a.children_d || [],
                                            data: a.data,
                                            state: {},
                                            li_attr: {
                                                id: !1
                                            },
                                            a_attr: {
                                                href: "#"
                                            },
                                            original: !1
                                        };
                                    for (e in l) l.hasOwnProperty(e) && (j.state[e] = l[e]);
                                    if (a && a.data && a.data.jstree && a.data.jstree.icon && (j.icon = a.data.jstree.icon), a && a.data && (j.data = a.data, a.data.jstree))
                                        for (e in a.data.jstree) a.data.jstree.hasOwnProperty(e) && (j.state[e] = a.data.jstree[e]);
                                    if (a && "object" == typeof a.state)
                                        for (e in a.state) a.state.hasOwnProperty(e) && (j.state[e] = a.state[e]);
                                    if (a && "object" == typeof a.li_attr)
                                        for (e in a.li_attr) a.li_attr.hasOwnProperty(e) && (j.li_attr[e] = a.li_attr[e]);
                                    if (j.li_attr.id || (j.li_attr.id = i), a && "object" == typeof a.a_attr)
                                        for (e in a.a_attr) a.a_attr.hasOwnProperty(e) && (j.a_attr[e] = a.a_attr[e]);
                                    for (a && a.children && a.children === !0 && (j.state.loaded = !1, j.children = [], j.children_d = []), o[j.id] = j, e = 0, f = j.children.length; f > e; e++) g = r(o[j.children[e]], j.id, d), h = o[g], j.children_d.push(g), h.children_d.length && (j.children_d = j.children_d.concat(h.children_d));
                                    return delete a.data, delete a.children, o[j.id].original = a, j.state.selected && k.push(j.id), j.id
                                },
                                s = function(a, c, d) {
                                    d = d ? d.concat() : [], c && d.unshift(c);
                                    var e, f, g, h, i, j = !1;
                                    do j = "j" + m + "_" + ++n; while (o[j]);
                                    i = {
                                        id: !1,
                                        text: "string" == typeof a ? a : "",
                                        icon: "object" == typeof a && a.icon !== b ? a.icon : !0,
                                        parent: c,
                                        parents: d,
                                        children: [],
                                        children_d: [],
                                        data: null,
                                        state: {},
                                        li_attr: {
                                            id: !1
                                        },
                                        a_attr: {
                                            href: "#"
                                        },
                                        original: !1
                                    };
                                    for (e in l) l.hasOwnProperty(e) && (i.state[e] = l[e]);
                                    if (a && a.id && (i.id = a.id.toString()), a && a.text && (i.text = a.text), a && a.data && a.data.jstree && a.data.jstree.icon && (i.icon = a.data.jstree.icon), a && a.data && (i.data = a.data, a.data.jstree))
                                        for (e in a.data.jstree) a.data.jstree.hasOwnProperty(e) && (i.state[e] = a.data.jstree[e]);
                                    if (a && "object" == typeof a.state)
                                        for (e in a.state) a.state.hasOwnProperty(e) && (i.state[e] = a.state[e]);
                                    if (a && "object" == typeof a.li_attr)
                                        for (e in a.li_attr) a.li_attr.hasOwnProperty(e) && (i.li_attr[e] = a.li_attr[e]);
                                    if (i.li_attr.id && !i.id && (i.id = i.li_attr.id.toString()), i.id || (i.id = j), i.li_attr.id || (i.li_attr.id = i.id), a && "object" == typeof a.a_attr)
                                        for (e in a.a_attr) a.a_attr.hasOwnProperty(e) && (i.a_attr[e] = a.a_attr[e]);
                                    if (a && a.children && a.children.length) {
                                        for (e = 0, f = a.children.length; f > e; e++) g = s(a.children[e], i.id, d), h = o[g], i.children.push(g), h.children_d.length && (i.children_d = i.children_d.concat(h.children_d));
                                        i.children_d = i.children_d.concat(i.children)
                                    }
                                    return a && a.children && a.children === !0 && (i.state.loaded = !1, i.children = [], i.children_d = []), delete a.data, delete a.children, i.original = a, o[i.id] = i, i.state.selected && k.push(i.id), i.id
                                };
                            if (g.length && g[0].id !== b && g[0].parent !== b) {
                                for (d = 0, e = g.length; e > d; d++) g[d].children || (g[d].children = []), o[g[d].id.toString()] = g[d];
                                for (d = 0, e = g.length; e > d; d++) o[g[d].parent.toString()].children.push(g[d].id.toString()), p.children_d.push(g[d].id.toString());
                                for (d = 0, e = p.children.length; e > d; d++) c = r(o[p.children[d]], h, p.parents.concat()), j.push(c), o[c].children_d.length && (j = j.concat(o[c].children_d));
                                for (d = 0, e = p.parents.length; e > d; d++) o[p.parents[d]].children_d = o[p.parents[d]].children_d.concat(j);
                                f = {
                                    cnt: n,
                                    mod: o,
                                    sel: q,
                                    par: h,
                                    dpc: j,
                                    add: k
                                }
                            } else {
                                for (d = 0, e = g.length; e > d; d++) c = s(g[d], h, p.parents.concat()), c && (i.push(c), j.push(c), o[c].children_d.length && (j = j.concat(o[c].children_d)));
                                for (p.children = i, p.children_d = j, d = 0, e = p.parents.length; e > d; d++) o[p.parents[d]].children_d = o[p.parents[d]].children_d.concat(j);
                                f = {
                                    cnt: n,
                                    mod: o,
                                    sel: q,
                                    par: h,
                                    dpc: j,
                                    add: k
                                }
                            }
                            return "undefined" != typeof window && "undefined" != typeof window.document ? f : void postMessage(f)
                        },
                        i = function(b, c) {
                            if (this._cnt = b.cnt, this._model.data = b.mod, c) {
                                var e, f, g = b.add,
                                    h = b.sel,
                                    i = this._data.core.selected.slice(),
                                    j = this._model.data;
                                if (h.length !== i.length || a.vakata.array_unique(h.concat(i)).length !== h.length) {
                                    for (e = 0, f = h.length; f > e; e++) - 1 === a.inArray(h[e], g) && -1 === a.inArray(h[e], i) && (j[h[e]].state.selected = !1);
                                    for (e = 0, f = i.length; f > e; e++) - 1 === a.inArray(i[e], h) && (j[i[e]].state.selected = !0)
                                }
                            }
                            b.add.length && (this._data.core.selected = this._data.core.selected.concat(b.add)), this.trigger("model", {
                                nodes: b.dpc,
                                parent: b.par
                            }), "#" !== b.par ? (this._node_changed(b.par), this.redraw()) : this.redraw(!0), b.add.length && this.trigger("changed", {
                                action: "model",
                                selected: this._data.core.selected
                            }), d.call(this, !0)
                        };
                    if (this.settings.core.worker && window.Blob && window.URL && window.Worker) try {
                        null === this._wrk && (this._wrk = window.URL.createObjectURL(new window.Blob(["self.onmessage = " + h.toString()], {
                            type: "text/javascript"
                        }))), !this._data.core.working || e ? (this._data.core.working = !0, f = new window.Worker(this._wrk), f.onmessage = a.proxy(function(a) {
                            i.call(this, a.data, !0);
                            try {
                                f.terminate(), f = null
                            } catch (b) {}
                            this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1
                        }, this), g.par ? f.postMessage(g) : this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1) : this._data.core.worker_queue.push([b, c, d, !0])
                    } catch (j) {
                        i.call(this, h(g), !1), this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1
                    } else i.call(this, h(g), !1)
                },
                _parse_model_from_html: function(b, c, d) {
                    d = d ? [].concat(d) : [], c && d.unshift(c);
                    var e, f, g, h, i, j = this._model.data,
                        k = {
                            id: !1,
                            text: !1,
                            icon: !0,
                            parent: c,
                            parents: d,
                            children: [],
                            children_d: [],
                            data: null,
                            state: {},
                            li_attr: {
                                id: !1
                            },
                            a_attr: {
                                href: "#"
                            },
                            original: !1
                        };
                    for (g in this._model.default_state) this._model.default_state.hasOwnProperty(g) && (k.state[g] = this._model.default_state[g]);
                    if (h = a.vakata.attributes(b, !0), a.each(h, function(b, c) {
                            return c = a.trim(c), c.length ? (k.li_attr[b] = c, void("id" === b && (k.id = c.toString()))) : !0
                        }), h = b.children("a").first(), h.length && (h = a.vakata.attributes(h, !0), a.each(h, function(b, c) {
                            c = a.trim(c), c.length && (k.a_attr[b] = c)
                        })), h = b.children("a").first().length ? b.children("a").first().clone() : b.clone(), h.children("ins, i, ul").remove(), h = h.html(), h = a("<div />").html(h), k.text = this.settings.core.force_text ? h.text() : h.html(), h = b.data(), k.data = h ? a.extend(!0, {}, h) : null, k.state.opened = b.hasClass("jstree-open"), k.state.selected = b.children("a").hasClass("jstree-clicked"), k.state.disabled = b.children("a").hasClass("jstree-disabled"), k.data && k.data.jstree)
                        for (g in k.data.jstree) k.data.jstree.hasOwnProperty(g) && (k.state[g] = k.data.jstree[g]);
                    h = b.children("a").children(".jstree-themeicon"), h.length && (k.icon = h.hasClass("jstree-themeicon-hidden") ? !1 : h.attr("rel")), k.state.icon && (k.icon = k.state.icon), h = b.children("ul").children("li");
                    do i = "j" + this._id + "_" + ++this._cnt; while (j[i]);
                    return k.id = k.li_attr.id ? k.li_attr.id.toString() : i, h.length ? (h.each(a.proxy(function(b, c) {
                        e = this._parse_model_from_html(a(c), k.id, d), f = this._model.data[e], k.children.push(e), f.children_d.length && (k.children_d = k.children_d.concat(f.children_d))
                    }, this)), k.children_d = k.children_d.concat(k.children)) : b.hasClass("jstree-closed") && (k.state.loaded = !1), k.li_attr["class"] && (k.li_attr["class"] = k.li_attr["class"].replace("jstree-closed", "").replace("jstree-open", "")), k.a_attr["class"] && (k.a_attr["class"] = k.a_attr["class"].replace("jstree-clicked", "").replace("jstree-disabled", "")), j[k.id] = k, k.state.selected && this._data.core.selected.push(k.id), k.id
                },
                _parse_model_from_flat_json: function(a, c, d) {
                    d = d ? d.concat() : [], c && d.unshift(c);
                    var e, f, g, h, i = a.id.toString(),
                        j = this._model.data,
                        k = this._model.default_state,
                        l = {
                            id: i,
                            text: a.text || "",
                            icon: a.icon !== b ? a.icon : !0,
                            parent: c,
                            parents: d,
                            children: a.children || [],
                            children_d: a.children_d || [],
                            data: a.data,
                            state: {},
                            li_attr: {
                                id: !1
                            },
                            a_attr: {
                                href: "#"
                            },
                            original: !1
                        };
                    for (e in k) k.hasOwnProperty(e) && (l.state[e] = k[e]);
                    if (a && a.data && a.data.jstree && a.data.jstree.icon && (l.icon = a.data.jstree.icon), a && a.data && (l.data = a.data, a.data.jstree))
                        for (e in a.data.jstree) a.data.jstree.hasOwnProperty(e) && (l.state[e] = a.data.jstree[e]);
                    if (a && "object" == typeof a.state)
                        for (e in a.state) a.state.hasOwnProperty(e) && (l.state[e] = a.state[e]);
                    if (a && "object" == typeof a.li_attr)
                        for (e in a.li_attr) a.li_attr.hasOwnProperty(e) && (l.li_attr[e] = a.li_attr[e]);
                    if (l.li_attr.id || (l.li_attr.id = i), a && "object" == typeof a.a_attr)
                        for (e in a.a_attr) a.a_attr.hasOwnProperty(e) && (l.a_attr[e] = a.a_attr[e]);
                    for (a && a.children && a.children === !0 && (l.state.loaded = !1, l.children = [], l.children_d = []), j[l.id] = l, e = 0, f = l.children.length; f > e; e++) g = this._parse_model_from_flat_json(j[l.children[e]], l.id, d), h = j[g], l.children_d.push(g), h.children_d.length && (l.children_d = l.children_d.concat(h.children_d));
                    return delete a.data, delete a.children, j[l.id].original = a, l.state.selected && this._data.core.selected.push(l.id), l.id
                },
                _parse_model_from_json: function(a, c, d) {
                    d = d ? d.concat() : [], c && d.unshift(c);
                    var e, f, g, h, i, j = !1,
                        k = this._model.data,
                        l = this._model.default_state;
                    do j = "j" + this._id + "_" + ++this._cnt; while (k[j]);
                    i = {
                        id: !1,
                        text: "string" == typeof a ? a : "",
                        icon: "object" == typeof a && a.icon !== b ? a.icon : !0,
                        parent: c,
                        parents: d,
                        children: [],
                        children_d: [],
                        data: null,
                        state: {},
                        li_attr: {
                            id: !1
                        },
                        a_attr: {
                            href: "#"
                        },
                        original: !1
                    };
                    for (e in l) l.hasOwnProperty(e) && (i.state[e] = l[e]);
                    if (a && a.id && (i.id = a.id.toString()), a && a.text && (i.text = a.text), a && a.data && a.data.jstree && a.data.jstree.icon && (i.icon = a.data.jstree.icon), a && a.data && (i.data = a.data, a.data.jstree))
                        for (e in a.data.jstree) a.data.jstree.hasOwnProperty(e) && (i.state[e] = a.data.jstree[e]);
                    if (a && "object" == typeof a.state)
                        for (e in a.state) a.state.hasOwnProperty(e) && (i.state[e] = a.state[e]);
                    if (a && "object" == typeof a.li_attr)
                        for (e in a.li_attr) a.li_attr.hasOwnProperty(e) && (i.li_attr[e] = a.li_attr[e]);
                    if (i.li_attr.id && !i.id && (i.id = i.li_attr.id.toString()), i.id || (i.id = j), i.li_attr.id || (i.li_attr.id = i.id), a && "object" == typeof a.a_attr)
                        for (e in a.a_attr) a.a_attr.hasOwnProperty(e) && (i.a_attr[e] = a.a_attr[e]);
                    if (a && a.children && a.children.length) {
                        for (e = 0, f = a.children.length; f > e; e++) g = this._parse_model_from_json(a.children[e], i.id, d), h = k[g], i.children.push(g), h.children_d.length && (i.children_d = i.children_d.concat(h.children_d));
                        i.children_d = i.children_d.concat(i.children)
                    }
                    return a && a.children && a.children === !0 && (i.state.loaded = !1, i.children = [], i.children_d = []), delete a.data, delete a.children, i.original = a, k[i.id] = i, i.state.selected && this._data.core.selected.push(i.id), i.id
                },
                _redraw: function() {
                    var a, b, c, d = this._model.force_full_redraw ? this._model.data["#"].children.concat([]) : this._model.changed.concat([]),
                        e = document.createElement("UL"),
                        f = this._data.core.focused;
                    for (b = 0, c = d.length; c > b; b++) a = this.redraw_node(d[b], !0, this._model.force_full_redraw), a && this._model.force_full_redraw && e.appendChild(a);
                    this._model.force_full_redraw && (e.className = this.get_container_ul()[0].className, e.setAttribute("role", "group"), this.element.empty().append(e)), null !== f && (a = this.get_node(f, !0), a && a.length && a.children(".jstree-anchor")[0] !== document.activeElement ? a.children(".jstree-anchor").focus() : this._data.core.focused = null), this._model.force_full_redraw = !1, this._model.changed = [], this.trigger("redraw", {
                        nodes: d
                    })
                },
                redraw: function(a) {
                    a && (this._model.force_full_redraw = !0), this._redraw()
                },
                draw_children: function(a) {
                    var b = this.get_node(a),
                        c = !1,
                        d = !1,
                        e = !1,
                        f = document;
                    if (!b) return !1;
                    if ("#" === b.id) return this.redraw(!0);
                    if (a = this.get_node(a, !0), !a || !a.length) return !1;
                    if (a.children(".jstree-children").remove(), a = a[0], b.children.length && b.state.loaded) {
                        for (e = f.createElement("UL"), e.setAttribute("role", "group"), e.className = "jstree-children", c = 0, d = b.children.length; d > c; c++) e.appendChild(this.redraw_node(b.children[c], !0, !0));
                        a.appendChild(e)
                    }
                },
                redraw_node: function(b, c, d, e) {
                    var f = this.get_node(b),
                        g = !1,
                        h = !1,
                        i = !1,
                        j = !1,
                        k = !1,
                        m = !1,
                        n = "",
                        o = document,
                        p = this._model.data,
                        q = !1,
                        r = null,
                        s = 0,
                        t = 0;
                    if (!f) return !1;
                    if ("#" === f.id) return this.redraw(!0);
                    if (c = c || 0 === f.children.length, b = document.querySelector ? this.element[0].querySelector("#" + (-1 !== "0123456789".indexOf(f.id[0]) ? "\\3" + f.id[0] + " " + f.id.substr(1).replace(a.jstree.idregex, "\\$&") : f.id.replace(a.jstree.idregex, "\\$&"))) : document.getElementById(f.id)) b = a(b), d || (g = b.parent().parent()[0], g === this.element[0] && (g = null), h = b.index()), c || !f.children.length || b.children(".jstree-children").length || (c = !0), c || (i = b.children(".jstree-children")[0]), q = b.children(".jstree-anchor")[0] === document.activeElement, b.remove();
                    else if (c = !0, !d) {
                        if (g = "#" !== f.parent ? a("#" + f.parent.replace(a.jstree.idregex, "\\$&"), this.element)[0] : null, !(null === g || g && p[f.parent].state.opened)) return !1;
                        h = a.inArray(f.id, null === g ? p["#"].children : p[f.parent].children)
                    }
                    b = l.cloneNode(!0), n = "jstree-node ";
                    for (j in f.li_attr)
                        if (f.li_attr.hasOwnProperty(j)) {
                            if ("id" === j) continue;
                            "class" !== j ? b.setAttribute(j, f.li_attr[j]) : n += f.li_attr[j]
                        }
                    f.a_attr.id || (f.a_attr.id = f.id + "_anchor"), b.setAttribute("aria-selected", !!f.state.selected), b.setAttribute("aria-level", f.parents.length), b.setAttribute("aria-labelledby", f.a_attr.id), f.state.disabled && b.setAttribute("aria-disabled", !0), f.state.loaded && !f.children.length ? n += " jstree-leaf" : (n += f.state.opened && f.state.loaded ? " jstree-open" : " jstree-closed", b.setAttribute("aria-expanded", f.state.opened && f.state.loaded)), null !== f.parent && p[f.parent].children[p[f.parent].children.length - 1] === f.id && (n += " jstree-last"), b.id = f.id, b.className = n, n = (f.state.selected ? " jstree-clicked" : "") + (f.state.disabled ? " jstree-disabled" : "");
                    for (k in f.a_attr)
                        if (f.a_attr.hasOwnProperty(k)) {
                            if ("href" === k && "#" === f.a_attr[k]) continue;
                            "class" !== k ? b.childNodes[1].setAttribute(k, f.a_attr[k]) : n += " " + f.a_attr[k]
                        }
                    if (n.length && (b.childNodes[1].className = "jstree-anchor " + n), (f.icon && f.icon !== !0 || f.icon === !1) && (f.icon === !1 ? b.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden" : -1 === f.icon.indexOf("/") && -1 === f.icon.indexOf(".") ? b.childNodes[1].childNodes[0].className += " " + f.icon + " jstree-themeicon-custom" : (b.childNodes[1].childNodes[0].style.backgroundImage = "url(" + f.icon + ")", b.childNodes[1].childNodes[0].style.backgroundPosition = "center center", b.childNodes[1].childNodes[0].style.backgroundSize = "auto", b.childNodes[1].childNodes[0].className += " jstree-themeicon-custom")), this.settings.core.force_text ? b.childNodes[1].appendChild(o.createTextNode(f.text)) : b.childNodes[1].innerHTML += f.text, c && f.children.length && (f.state.opened || e) && f.state.loaded) {
                        for (m = o.createElement("UL"), m.setAttribute("role", "group"), m.className = "jstree-children", j = 0, k = f.children.length; k > j; j++) m.appendChild(this.redraw_node(f.children[j], c, !0));
                        b.appendChild(m)
                    }
                    if (i && b.appendChild(i), !d) {
                        for (g || (g = this.element[0]), j = 0, k = g.childNodes.length; k > j; j++)
                            if (g.childNodes[j] && g.childNodes[j].className && -1 !== g.childNodes[j].className.indexOf("jstree-children")) {
                                r = g.childNodes[j];
                                break
                            }
                        r || (r = o.createElement("UL"), r.setAttribute("role", "group"), r.className = "jstree-children", g.appendChild(r)), g = r, h < g.childNodes.length ? g.insertBefore(b, g.childNodes[h]) : g.appendChild(b), q && (s = this.element[0].scrollTop, t = this.element[0].scrollLeft, b.childNodes[1].focus(), this.element[0].scrollTop = s, this.element[0].scrollLeft = t)
                    }
                    return f.state.opened && !f.state.loaded && (f.state.opened = !1, setTimeout(a.proxy(function() {
                        this.open_node(f.id, !1, 0)
                    }, this), 0)), b
                },
                open_node: function(c, d, e) {
                    var f, g, h, i;
                    if (a.isArray(c)) {
                        for (c = c.slice(), f = 0, g = c.length; g > f; f++) this.open_node(c[f], d, e);
                        return !0
                    }
                    if (c = this.get_node(c), !c || "#" === c.id) return !1;
                    if (e = e === b ? this.settings.core.animation : e, !this.is_closed(c)) return d && d.call(this, c, !1), !1;
                    if (this.is_loaded(c)) h = this.get_node(c, !0), i = this, h.length && (e && h.children(".jstree-children").length && h.children(".jstree-children").stop(!0, !0), c.children.length && !this._firstChild(h.children(".jstree-children")[0]) && this.draw_children(c), e ? (this.trigger("before_open", {
                        node: c
                    }), h.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded", !0).children(".jstree-children").stop(!0, !0).slideDown(e, function() {
                        this.style.display = "", i.trigger("after_open", {
                            node: c
                        })
                    })) : (this.trigger("before_open", {
                        node: c
                    }), h[0].className = h[0].className.replace("jstree-closed", "jstree-open"), h[0].setAttribute("aria-expanded", !0))), c.state.opened = !0, d && d.call(this, c, !0), h.length || this.trigger("before_open", {
                        node: c
                    }), this.trigger("open_node", {
                        node: c
                    }), e && h.length || this.trigger("after_open", {
                        node: c
                    });
                    else {
                        if (this.is_loading(c)) return setTimeout(a.proxy(function() {
                            this.open_node(c, d, e)
                        }, this), 500);
                        this.load_node(c, function(a, b) {
                            return b ? this.open_node(a, d, e) : d ? d.call(this, a, !1) : !1
                        })
                    }
                },
                _open_to: function(b) {
                    if (b = this.get_node(b), !b || "#" === b.id) return !1;
                    var c, d, e = b.parents;
                    for (c = 0, d = e.length; d > c; c += 1) "#" !== c && this.open_node(e[c], !1, 0);
                    return a("#" + b.id.replace(a.jstree.idregex, "\\$&"), this.element)
                },
                close_node: function(c, d) {
                    var e, f, g, h;
                    if (a.isArray(c)) {
                        for (c = c.slice(), e = 0, f = c.length; f > e; e++) this.close_node(c[e], d);
                        return !0
                    }
                    return c = this.get_node(c), c && "#" !== c.id ? this.is_closed(c) ? !1 : (d = d === b ? this.settings.core.animation : d, g = this, h = this.get_node(c, !0), h.length && (d ? h.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded", !1).children(".jstree-children").stop(!0, !0).slideUp(d, function() {
                        this.style.display = "", h.children(".jstree-children").remove(), g.trigger("after_close", {
                            node: c
                        })
                    }) : (h[0].className = h[0].className.replace("jstree-open", "jstree-closed"), h.attr("aria-expanded", !1).children(".jstree-children").remove())), c.state.opened = !1, this.trigger("close_node", {
                        node: c
                    }), void(d && h.length || this.trigger("after_close", {
                        node: c
                    }))) : !1
                },
                toggle_node: function(b) {
                    var c, d;
                    if (a.isArray(b)) {
                        for (b = b.slice(), c = 0, d = b.length; d > c; c++) this.toggle_node(b[c]);
                        return !0
                    }
                    return this.is_closed(b) ? this.open_node(b) : this.is_open(b) ? this.close_node(b) : void 0
                },
                open_all: function(a, b, c) {
                    if (a || (a = "#"), a = this.get_node(a), !a) return !1;
                    var d, e, f, g = "#" === a.id ? this.get_container_ul() : this.get_node(a, !0);
                    if (!g.length) {
                        for (d = 0, e = a.children_d.length; e > d; d++) this.is_closed(this._model.data[a.children_d[d]]) && (this._model.data[a.children_d[d]].state.opened = !0);
                        return this.trigger("open_all", {
                            node: a
                        })
                    }
                    c = c || g, f = this, g = this.is_closed(a) ? g.find(".jstree-closed").addBack() : g.find(".jstree-closed"), g.each(function() {
                        f.open_node(this, function(a, d) {
                            d && this.is_parent(a) && this.open_all(a, b, c)
                        }, b || 0)
                    }), 0 === c.find(".jstree-closed").length && this.trigger("open_all", {
                        node: this.get_node(c)
                    })
                },
                close_all: function(b, c) {
                    if (b || (b = "#"), b = this.get_node(b), !b) return !1;
                    var d, e, f = "#" === b.id ? this.get_container_ul() : this.get_node(b, !0),
                        g = this;
                    if (!f.length) {
                        for (d = 0, e = b.children_d.length; e > d; d++) this._model.data[b.children_d[d]].state.opened = !1;
                        return this.trigger("close_all", {
                            node: b
                        })
                    }
                    f = this.is_open(b) ? f.find(".jstree-open").addBack() : f.find(".jstree-open"), a(f.get().reverse()).each(function() {
                        g.close_node(this, c || 0)
                    }), this.trigger("close_all", {
                        node: b
                    })
                },
                is_disabled: function(a) {
                    return a = this.get_node(a), a && a.state && a.state.disabled
                },
                enable_node: function(b) {
                    var c, d;
                    if (a.isArray(b)) {
                        for (b = b.slice(), c = 0, d = b.length; d > c; c++) this.enable_node(b[c]);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (b.state.disabled = !1, this.get_node(b, !0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", !1), void this.trigger("enable_node", {
                        node: b
                    })) : !1
                },
                disable_node: function(b) {
                    var c, d;
                    if (a.isArray(b)) {
                        for (b = b.slice(), c = 0, d = b.length; d > c; c++) this.disable_node(b[c]);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (b.state.disabled = !0, this.get_node(b, !0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", !0), void this.trigger("disable_node", {
                        node: b
                    })) : !1
                },
                activate_node: function(a, c) {
                    if (this.is_disabled(a)) return !1;
                    if (this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== b ? this.get_node(this._data.core.last_clicked.id) : null, this._data.core.last_clicked && !this._data.core.last_clicked.state.selected && (this._data.core.last_clicked = null), !this._data.core.last_clicked && this._data.core.selected.length && (this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1])), this.settings.core.multiple && (c.metaKey || c.ctrlKey || c.shiftKey) && (!c.shiftKey || this._data.core.last_clicked && this.get_parent(a) && this.get_parent(a) === this._data.core.last_clicked.parent))
                        if (c.shiftKey) {
                            var d, e, f = this.get_node(a).id,
                                g = this._data.core.last_clicked.id,
                                h = this.get_node(this._data.core.last_clicked.parent).children,
                                i = !1;
                            for (d = 0, e = h.length; e > d; d += 1) h[d] === f && (i = !i), h[d] === g && (i = !i), i || h[d] === f || h[d] === g ? this.select_node(h[d], !0, !1, c) : this.deselect_node(h[d], !0, c);
                            this.trigger("changed", {
                                action: "select_node",
                                node: this.get_node(a),
                                selected: this._data.core.selected,
                                event: c
                            })
                        } else this.is_selected(a) ? this.deselect_node(a, !1, c) : this.select_node(a, !1, !1, c);
                    else !this.settings.core.multiple && (c.metaKey || c.ctrlKey || c.shiftKey) && this.is_selected(a) ? this.deselect_node(a, !1, c) : (this.deselect_all(!0), this.select_node(a, !1, !1, c), this._data.core.last_clicked = this.get_node(a));
                    this.trigger("activate_node", {
                        node: this.get_node(a)
                    })
                },
                hover_node: function(a) {
                    if (a = this.get_node(a, !0), !a || !a.length || a.children(".jstree-hovered").length) return !1;
                    var b = this.element.find(".jstree-hovered"),
                        c = this.element;
                    b && b.length && this.dehover_node(b), a.children(".jstree-anchor").addClass("jstree-hovered"), this.trigger("hover_node", {
                        node: this.get_node(a)
                    }), setTimeout(function() {
                        c.attr("aria-activedescendant", a[0].id)
                    }, 0)
                },
                dehover_node: function(a) {
                    return a = this.get_node(a, !0), a && a.length && a.children(".jstree-hovered").length ? (a.children(".jstree-anchor").removeClass("jstree-hovered"), void this.trigger("dehover_node", {
                        node: this.get_node(a)
                    })) : !1
                },
                select_node: function(b, c, d, e) {
                    var f, g, h;
                    if (a.isArray(b)) {
                        for (b = b.slice(), g = 0, h = b.length; h > g; g++) this.select_node(b[g], c, d, e);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (f = this.get_node(b, !0), void(b.state.selected || (b.state.selected = !0, this._data.core.selected.push(b.id), d || (f = this._open_to(b)), f && f.length && f.attr("aria-selected", !0).children(".jstree-anchor").addClass("jstree-clicked"), this.trigger("select_node", {
                        node: b,
                        selected: this._data.core.selected,
                        event: e
                    }), c || this.trigger("changed", {
                        action: "select_node",
                        node: b,
                        selected: this._data.core.selected,
                        event: e
                    })))) : !1
                },
                deselect_node: function(b, c, d) {
                    var e, f, g;
                    if (a.isArray(b)) {
                        for (b = b.slice(), e = 0, f = b.length; f > e; e++) this.deselect_node(b[e], c, d);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (g = this.get_node(b, !0), void(b.state.selected && (b.state.selected = !1, this._data.core.selected = a.vakata.array_remove_item(this._data.core.selected, b.id), g.length && g.attr("aria-selected", !1).children(".jstree-anchor").removeClass("jstree-clicked"), this.trigger("deselect_node", {
                        node: b,
                        selected: this._data.core.selected,
                        event: d
                    }), c || this.trigger("changed", {
                        action: "deselect_node",
                        node: b,
                        selected: this._data.core.selected,
                        event: d
                    })))) : !1
                },
                select_all: function(a) {
                    var b, c, d = this._data.core.selected.concat([]);
                    for (this._data.core.selected = this._model.data["#"].children_d.concat(), b = 0, c = this._data.core.selected.length; c > b; b++) this._model.data[this._data.core.selected[b]] && (this._model.data[this._data.core.selected[b]].state.selected = !0);
                    this.redraw(!0), this.trigger("select_all", {
                        selected: this._data.core.selected
                    }), a || this.trigger("changed", {
                        action: "select_all",
                        selected: this._data.core.selected,
                        old_selection: d
                    })
                },
                deselect_all: function(a) {
                    var b, c, d = this._data.core.selected.concat([]);
                    for (b = 0, c = this._data.core.selected.length; c > b; b++) this._model.data[this._data.core.selected[b]] && (this._model.data[this._data.core.selected[b]].state.selected = !1);
                    this._data.core.selected = [], this.element.find(".jstree-clicked").removeClass("jstree-clicked").parent().attr("aria-selected", !1), this.trigger("deselect_all", {
                        selected: this._data.core.selected,
                        node: d
                    }), a || this.trigger("changed", {
                        action: "deselect_all",
                        selected: this._data.core.selected,
                        old_selection: d
                    })
                },
                is_selected: function(a) {
                    return a = this.get_node(a), a && "#" !== a.id ? a.state.selected : !1
                },
                get_selected: function(b) {
                    return b ? a.map(this._data.core.selected, a.proxy(function(a) {
                        return this.get_node(a)
                    }, this)) : this._data.core.selected.slice()
                },
                get_top_selected: function(b) {
                    var c, d, e, f, g = this.get_selected(!0),
                        h = {};
                    for (c = 0, d = g.length; d > c; c++) h[g[c].id] = g[c];
                    for (c = 0, d = g.length; d > c; c++)
                        for (e = 0, f = g[c].children_d.length; f > e; e++) h[g[c].children_d[e]] && delete h[g[c].children_d[e]];
                    g = [];
                    for (c in h) h.hasOwnProperty(c) && g.push(c);
                    return b ? a.map(g, a.proxy(function(a) {
                        return this.get_node(a)
                    }, this)) : g
                },
                get_bottom_selected: function(b) {
                    var c, d, e = this.get_selected(!0),
                        f = [];
                    for (c = 0, d = e.length; d > c; c++) e[c].children.length || f.push(e[c].id);
                    return b ? a.map(f, a.proxy(function(a) {
                        return this.get_node(a)
                    }, this)) : f
                },
                get_state: function() {
                    var a, b = {
                        core: {
                            open: [],
                            scroll: {
                                left: this.element.scrollLeft(),
                                top: this.element.scrollTop()
                            },
                            selected: []
                        }
                    };
                    for (a in this._model.data) this._model.data.hasOwnProperty(a) && "#" !== a && (this._model.data[a].state.opened && b.core.open.push(a), this._model.data[a].state.selected && b.core.selected.push(a));
                    return b
                },
                set_state: function(c, d) {
                    if (c) {
                        if (c.core) {
                            var e, f, g, h;
                            if (c.core.open) return a.isArray(c.core.open) ? (e = !0, f = !1, g = this, a.each(c.core.open.concat([]), function(b, h) {
                                f = g.get_node(h), f && (g.is_loaded(h) ? (g.is_closed(h) && g.open_node(h, !1, 0), c && c.core && c.core.open && a.vakata.array_remove_item(c.core.open, h)) : (g.is_loading(h) || g.open_node(h, a.proxy(function(b, e) {
                                    !e && c && c.core && c.core.open && a.vakata.array_remove_item(c.core.open, b.id), this.set_state(c, d)
                                }, g), 0), e = !1))
                            }), e && (delete c.core.open, this.set_state(c, d)), !1) : (delete c.core.open, this.set_state(c, d), !1);
                            if (c.core.scroll) return c.core.scroll && c.core.scroll.left !== b && this.element.scrollLeft(c.core.scroll.left), c.core.scroll && c.core.scroll.top !== b && this.element.scrollTop(c.core.scroll.top), delete c.core.scroll, this.set_state(c, d), !1;
                            if (c.core.selected) return h = this, this.deselect_all(), a.each(c.core.selected, function(a, b) {
                                h.select_node(b)
                            }), delete c.core.selected, this.set_state(c, d), !1;
                            if (a.isEmptyObject(c.core)) return delete c.core, this.set_state(c, d), !1
                        }
                        return a.isEmptyObject(c) ? (c = null, d && d.call(this), this.trigger("set_state"), !1) : !0
                    }
                    return !1
                },
                refresh: function(b, c) {
                    this._data.core.state = c === !0 ? {} : this.get_state(), c && a.isFunction(c) && (this._data.core.state = c.call(this, this._data.core.state)), this._cnt = 0, this._model.data = {
                        "#": {
                            id: "#",
                            parent: null,
                            parents: [],
                            children: [],
                            children_d: [],
                            state: {
                                loaded: !1
                            }
                        }
                    };
                    var d = this.get_container_ul()[0].className;
                    b || (this.element.html("<ul class='" + d + "' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='treeitem' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading")), this.load_node("#", function(b, c) {
                        c && (this.get_container_ul()[0].className = d, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.set_state(a.extend(!0, {}, this._data.core.state), function() {
                            this.trigger("refresh")
                        })), this._data.core.state = null
                    })
                },
                refresh_node: function(b) {
                    if (b = this.get_node(b), !b || "#" === b.id) return !1; {
                        var c = [],
                            d = [];
                        this._data.core.selected.concat([])
                    }
                    d.push(b.id), b.state.opened === !0 && c.push(b.id), this.get_node(b, !0).find(".jstree-open").each(function() {
                        c.push(this.id)
                    }), this._load_nodes(d, a.proxy(function(a) {
                        this.open_node(c, !1, 0), this.select_node(this._data.core.selected), this.trigger("refresh_node", {
                            node: b,
                            nodes: a
                        })
                    }, this))
                },
                set_id: function(b, c) {
                    if (b = this.get_node(b), !b || "#" === b.id) return !1;
                    var d, e, f = this._model.data;
                    for (c = c.toString(), f[b.parent].children[a.inArray(b.id, f[b.parent].children)] = c, d = 0, e = b.parents.length; e > d; d++) f[b.parents[d]].children_d[a.inArray(b.id, f[b.parents[d]].children_d)] = c;
                    for (d = 0, e = b.children.length; e > d; d++) f[b.children[d]].parent = c;
                    for (d = 0, e = b.children_d.length; e > d; d++) f[b.children_d[d]].parents[a.inArray(b.id, f[b.children_d[d]].parents)] = c;
                    return d = a.inArray(b.id, this._data.core.selected), -1 !== d && (this._data.core.selected[d] = c), d = this.get_node(b.id, !0), d && d.attr("id", c), delete f[b.id], b.id = c, f[c] = b, !0
                },
                get_text: function(a) {
                    return a = this.get_node(a), a && "#" !== a.id ? a.text : !1
                },
                set_text: function(b, c) {
                    var d, e;
                    if (a.isArray(b)) {
                        for (b = b.slice(), d = 0, e = b.length; e > d; d++) this.set_text(b[d], c);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (b.text = c, this.get_node(b, !0).length && this.redraw_node(b.id), this.trigger("set_text", {
                        obj: b,
                        text: c
                    }), !0) : !1
                },
                get_json: function(b, c, d) {
                    if (b = this.get_node(b || "#"), !b) return !1;
                    c && c.flat && !d && (d = []);
                    var e, f, g = {
                        id: b.id,
                        text: b.text,
                        icon: this.get_icon(b),
                        li_attr: a.extend(!0, {}, b.li_attr),
                        a_attr: a.extend(!0, {}, b.a_attr),
                        state: {},
                        data: c && c.no_data ? !1 : a.extend(!0, {}, b.data)
                    };
                    if (c && c.flat ? g.parent = b.parent : g.children = [], !c || !c.no_state)
                        for (e in b.state) b.state.hasOwnProperty(e) && (g.state[e] = b.state[e]);
                    if (c && c.no_id && (delete g.id, g.li_attr && g.li_attr.id && delete g.li_attr.id, g.a_attr && g.a_attr.id && delete g.a_attr.id), c && c.flat && "#" !== b.id && d.push(g), !c || !c.no_children)
                        for (e = 0, f = b.children.length; f > e; e++) c && c.flat ? this.get_json(b.children[e], c, d) : g.children.push(this.get_json(b.children[e], c));
                    return c && c.flat ? d : "#" === b.id ? g.children : g
                },
                create_node: function(c, d, e, f, g) {
                    if (null === c && (c = "#"), c = this.get_node(c), !c) return !1;
                    if (e = e === b ? "last" : e, !e.toString().match(/^(before|after)$/) && !g && !this.is_loaded(c)) return this.load_node(c, function() {
                        this.create_node(c, d, e, f, !0)
                    });
                    d || (d = {
                        text: this.get_string("New node")
                    }), "string" == typeof d && (d = {
                        text: d
                    }), d.text === b && (d.text = this.get_string("New node"));
                    var h, i, j, k;
                    switch ("#" === c.id && ("before" === e && (e = "first"), "after" === e && (e = "last")), e) {
                        case "before":
                            h = this.get_node(c.parent), e = a.inArray(c.id, h.children), c = h;
                            break;
                        case "after":
                            h = this.get_node(c.parent), e = a.inArray(c.id, h.children) + 1, c = h;
                            break;
                        case "inside":
                        case "first":
                            e = 0;
                            break;
                        case "last":
                            e = c.children.length;
                            break;
                        default:
                            e || (e = 0)
                    }
                    if (e > c.children.length && (e = c.children.length), d.id || (d.id = !0), !this.check("create_node", d, c, e)) return this.settings.core.error.call(this, this._data.core.last_error), !1;
                    if (d.id === !0 && delete d.id, d = this._parse_model_from_json(d, c.id, c.parents.concat()), !d) return !1;
                    for (h = this.get_node(d), i = [], i.push(d), i = i.concat(h.children_d), this.trigger("model", {
                            nodes: i,
                            parent: c.id
                        }), c.children_d = c.children_d.concat(i), j = 0, k = c.parents.length; k > j; j++) this._model.data[c.parents[j]].children_d = this._model.data[c.parents[j]].children_d.concat(i);
                    for (d = h, h = [], j = 0, k = c.children.length; k > j; j++) h[j >= e ? j + 1 : j] = c.children[j];
                    return h[e] = d.id, c.children = h, this.redraw_node(c, !0), f && f.call(this, this.get_node(d)), this.trigger("create_node", {
                        node: this.get_node(d),
                        parent: c.id,
                        position: e
                    }), d.id
                },
                rename_node: function(b, c) {
                    var d, e, f;
                    if (a.isArray(b)) {
                        for (b = b.slice(), d = 0, e = b.length; e > d; d++) this.rename_node(b[d], c);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (f = b.text, this.check("rename_node", b, this.get_parent(b), c) ? (this.set_text(b, c), this.trigger("rename_node", {
                        node: b,
                        text: c,
                        old: f
                    }), !0) : (this.settings.core.error.call(this, this._data.core.last_error), !1)) : !1
                },
                delete_node: function(b) {
                    var c, d, e, f, g, h, i, j, k, l;
                    if (a.isArray(b)) {
                        for (b = b.slice(), c = 0, d = b.length; d > c; c++) this.delete_node(b[c]);
                        return !0
                    }
                    if (b = this.get_node(b), !b || "#" === b.id) return !1;
                    if (e = this.get_node(b.parent), f = a.inArray(b.id, e.children), l = !1, !this.check("delete_node", b, e, f)) return this.settings.core.error.call(this, this._data.core.last_error), !1;
                    for (-1 !== f && (e.children = a.vakata.array_remove(e.children, f)), g = b.children_d.concat([]), g.push(b.id), j = 0, k = g.length; k > j; j++) {
                        for (h = 0, i = b.parents.length; i > h; h++) f = a.inArray(g[j], this._model.data[b.parents[h]].children_d), -1 !== f && (this._model.data[b.parents[h]].children_d = a.vakata.array_remove(this._model.data[b.parents[h]].children_d, f));
                        this._model.data[g[j]].state.selected && (l = !0, f = a.inArray(g[j], this._data.core.selected), -1 !== f && (this._data.core.selected = a.vakata.array_remove(this._data.core.selected, f)))
                    }
                    for (this.trigger("delete_node", {
                            node: b,
                            parent: e.id
                        }), l && this.trigger("changed", {
                            action: "delete_node",
                            node: b,
                            selected: this._data.core.selected,
                            parent: e.id
                        }), j = 0, k = g.length; k > j; j++) delete this._model.data[g[j]];
                    return this.redraw_node(e, !0), !0
                },
                check: function(b, c, d, e, f) {
                    c = c && c.id ? c : this.get_node(c), d = d && d.id ? d : this.get_node(d);
                    var g = b.match(/^move_node|copy_node|create_node$/i) ? d : c,
                        h = this.settings.core.check_callback;
                    return "move_node" !== b && "copy_node" !== b || f && f.is_multi || c.id !== d.id && a.inArray(c.id, d.children) !== e && -1 === a.inArray(d.id, c.children_d) ? (g && g.data && (g = g.data), g && g.functions && (g.functions[b] === !1 || g.functions[b] === !0) ? (g.functions[b] === !1 && (this._data.core.last_error = {
                        error: "check",
                        plugin: "core",
                        id: "core_02",
                        reason: "Node data prevents function: " + b,
                        data: JSON.stringify({
                            chk: b,
                            pos: e,
                            obj: c && c.id ? c.id : !1,
                            par: d && d.id ? d.id : !1
                        })
                    }), g.functions[b]) : h === !1 || a.isFunction(h) && h.call(this, b, c, d, e, f) === !1 || h && h[b] === !1 ? (this._data.core.last_error = {
                        error: "check",
                        plugin: "core",
                        id: "core_03",
                        reason: "User config for core.check_callback prevents function: " + b,
                        data: JSON.stringify({
                            chk: b,
                            pos: e,
                            obj: c && c.id ? c.id : !1,
                            par: d && d.id ? d.id : !1
                        })
                    }, !1) : !0) : (this._data.core.last_error = {
                        error: "check",
                        plugin: "core",
                        id: "core_01",
                        reason: "Moving parent inside child",
                        data: JSON.stringify({
                            chk: b,
                            pos: e,
                            obj: c && c.id ? c.id : !1,
                            par: d && d.id ? d.id : !1
                        })
                    }, !1)
                },
                last_error: function() {
                    return this._data.core.last_error
                },
                move_node: function(c, d, e, f, g, h) {
                    var i, j, k, l, m, n, o, p, q, r, s, t, u, v;
                    if (d = this.get_node(d), e = e === b ? 0 : e, !d) return !1;
                    if (!e.toString().match(/^(before|after)$/) && !g && !this.is_loaded(d)) return this.load_node(d, function() {
                        this.move_node(c, d, e, f, !0)
                    });
                    if (a.isArray(c)) {
                        for (c = c.slice(), i = 0, j = c.length; j > i; i++) this.move_node(c[i], d, e, f, g, !0) && (d = c[i], e = "after");
                        return this.redraw(), !0
                    }
                    if (c = c && c.id ? c : this.get_node(c), !c || "#" === c.id) return !1;
                    if (k = (c.parent || "#").toString(), m = e.toString().match(/^(before|after)$/) && "#" !== d.id ? this.get_node(d.parent) : d, n = c.instance ? c.instance : this._model.data[c.id] ? this : a.jstree.reference(c.id), o = !n || !n._id || this._id !== n._id, l = n && n._id && k && n._model.data[k] && n._model.data[k].children ? a.inArray(c.id, n._model.data[k].children) : -1, o) return this.copy_node(c, d, e, f, g) ? (n && n.delete_node(c), !0) : !1;
                    switch ("#" === d.id && ("before" === e && (e = "first"), "after" === e && (e = "last")), e) {
                        case "before":
                            e = a.inArray(d.id, m.children);
                            break;
                        case "after":
                            e = a.inArray(d.id, m.children) + 1;
                            break;
                        case "inside":
                        case "first":
                            e = 0;
                            break;
                        case "last":
                            e = m.children.length;
                            break;
                        default:
                            e || (e = 0)
                    }
                    if (e > m.children.length && (e = m.children.length), !this.check("move_node", c, m, e, {
                            core: !0,
                            is_multi: n && n._id && n._id !== this._id,
                            is_foreign: !n || !n._id
                        })) return this.settings.core.error.call(this, this._data.core.last_error), !1;
                    if (c.parent === m.id) {
                        for (p = m.children.concat(), q = a.inArray(c.id, p), -1 !== q && (p = a.vakata.array_remove(p, q), e > q && e--), q = [], r = 0, s = p.length; s > r; r++) q[r >= e ? r + 1 : r] = p[r];
                        q[e] = c.id, m.children = q, this._node_changed(m.id), this.redraw("#" === m.id)
                    } else {
                        for (q = c.children_d.concat(), q.push(c.id), r = 0, s = c.parents.length; s > r; r++) {
                            for (p = [], v = n._model.data[c.parents[r]].children_d, t = 0, u = v.length; u > t; t++) - 1 === a.inArray(v[t], q) && p.push(v[t]);
                            n._model.data[c.parents[r]].children_d = p
                        }
                        for (n._model.data[k].children = a.vakata.array_remove_item(n._model.data[k].children, c.id), r = 0, s = m.parents.length; s > r; r++) this._model.data[m.parents[r]].children_d = this._model.data[m.parents[r]].children_d.concat(q);
                        for (p = [], r = 0, s = m.children.length; s > r; r++) p[r >= e ? r + 1 : r] = m.children[r];
                        for (p[e] = c.id, m.children = p, m.children_d.push(c.id), m.children_d = m.children_d.concat(c.children_d), c.parent = m.id, q = m.parents.concat(), q.unshift(m.id), v = c.parents.length, c.parents = q, q = q.concat(), r = 0, s = c.children_d.length; s > r; r++) this._model.data[c.children_d[r]].parents = this._model.data[c.children_d[r]].parents.slice(0, -1 * v), Array.prototype.push.apply(this._model.data[c.children_d[r]].parents, q);
                        ("#" === k || "#" === m.id) && (this._model.force_full_redraw = !0), this._model.force_full_redraw || (this._node_changed(k), this._node_changed(m.id)), h || this.redraw()
                    }
                    return f && f.call(this, c, m, e), this.trigger("move_node", {
                        node: c,
                        parent: m.id,
                        position: e,
                        old_parent: k,
                        old_position: l,
                        is_multi: n && n._id && n._id !== this._id,
                        is_foreign: !n || !n._id,
                        old_instance: n,
                        new_instance: this
                    }), !0
                },
                copy_node: function(c, d, e, f, g, h) {
                    var i, j, k, l, m, n, o, p, q, r, s;
                    if (d = this.get_node(d), e = e === b ? 0 : e, !d) return !1;
                    if (!e.toString().match(/^(before|after)$/) && !g && !this.is_loaded(d)) return this.load_node(d, function() {
                        this.copy_node(c, d, e, f, !0)
                    });
                    if (a.isArray(c)) {
                        for (c = c.slice(), i = 0, j = c.length; j > i; i++) l = this.copy_node(c[i], d, e, f, g, !0), l && (d = l, e = "after");
                        return this.redraw(), !0
                    }
                    if (c = c && c.id ? c : this.get_node(c), !c || "#" === c.id) return !1;
                    switch (p = (c.parent || "#").toString(), q = e.toString().match(/^(before|after)$/) && "#" !== d.id ? this.get_node(d.parent) : d, r = c.instance ? c.instance : this._model.data[c.id] ? this : a.jstree.reference(c.id), s = !r || !r._id || this._id !== r._id, "#" === d.id && ("before" === e && (e = "first"), "after" === e && (e = "last")), e) {
                        case "before":
                            e = a.inArray(d.id, q.children);
                            break;
                        case "after":
                            e = a.inArray(d.id, q.children) + 1;
                            break;
                        case "inside":
                        case "first":
                            e = 0;
                            break;
                        case "last":
                            e = q.children.length;
                            break;
                        default:
                            e || (e = 0)
                    }
                    if (e > q.children.length && (e = q.children.length), !this.check("copy_node", c, q, e, {
                            core: !0,
                            is_multi: r && r._id && r._id !== this._id,
                            is_foreign: !r || !r._id
                        })) return this.settings.core.error.call(this, this._data.core.last_error), !1;
                    if (o = r ? r.get_json(c, {
                            no_id: !0,
                            no_data: !0,
                            no_state: !0
                        }) : c, !o) return !1;
                    if (o.id === !0 && delete o.id, o = this._parse_model_from_json(o, q.id, q.parents.concat()), !o) return !1;
                    for (l = this.get_node(o), c && c.state && c.state.loaded === !1 && (l.state.loaded = !1), k = [], k.push(o), k = k.concat(l.children_d), this.trigger("model", {
                            nodes: k,
                            parent: q.id
                        }), m = 0, n = q.parents.length; n > m; m++) this._model.data[q.parents[m]].children_d = this._model.data[q.parents[m]].children_d.concat(k);
                    for (k = [], m = 0, n = q.children.length; n > m; m++) k[m >= e ? m + 1 : m] = q.children[m];
                    return k[e] = l.id, q.children = k, q.children_d.push(l.id), q.children_d = q.children_d.concat(l.children_d), "#" === q.id && (this._model.force_full_redraw = !0), this._model.force_full_redraw || this._node_changed(q.id), h || this.redraw("#" === q.id), f && f.call(this, l, q, e), this.trigger("copy_node", {
                        node: l,
                        original: c,
                        parent: q.id,
                        position: e,
                        old_parent: p,
                        old_position: r && r._id && p && r._model.data[p] && r._model.data[p].children ? a.inArray(c.id, r._model.data[p].children) : -1,
                        is_multi: r && r._id && r._id !== this._id,
                        is_foreign: !r || !r._id,
                        old_instance: r,
                        new_instance: this
                    }), l.id
                },
                cut: function(b) {
                    if (b || (b = this._data.core.selected.concat()), a.isArray(b) || (b = [b]), !b.length) return !1;
                    var c, d, e, i = [];
                    for (d = 0, e = b.length; e > d; d++) c = this.get_node(b[d]), c && c.id && "#" !== c.id && i.push(c);
                    return i.length ? (f = i, h = this, g = "move_node", void this.trigger("cut", {
                        node: b
                    })) : !1
                },
                copy: function(b) {
                    if (b || (b = this._data.core.selected.concat()), a.isArray(b) || (b = [b]), !b.length) return !1;
                    var c, d, e, i = [];
                    for (d = 0, e = b.length; e > d; d++) c = this.get_node(b[d]), c && c.id && "#" !== c.id && i.push(c);
                    return i.length ? (f = i, h = this, g = "copy_node", void this.trigger("copy", {
                        node: b
                    })) : !1
                },
                get_buffer: function() {
                    return {
                        mode: g,
                        node: f,
                        inst: h
                    }
                },
                can_paste: function() {
                    return g !== !1 && f !== !1
                },
                paste: function(a, b) {
                    return a = this.get_node(a), a && g && g.match(/^(copy_node|move_node)$/) && f ? (this[g](f, a, b) && this.trigger("paste", {
                        parent: a.id,
                        node: f,
                        mode: g
                    }), f = !1, g = !1, void(h = !1)) : !1
                },
                clear_buffer: function() {
                    f = !1, g = !1, h = !1, this.trigger("clear_buffer")
                },
                edit: function(b, c) {
                    if (b = this.get_node(b), !b) return !1;
                    if (this.settings.core.check_callback === !1) return this._data.core.last_error = {
                        error: "check",
                        plugin: "core",
                        id: "core_07",
                        reason: "Could not edit node because of check_callback"
                    }, this.settings.core.error.call(this, this._data.core.last_error), !1;
                    c = "string" == typeof c ? c : b.text, this.set_text(b, ""), b = this._open_to(b);
                    var d = this._data.core.rtl,
                        e = this.element.width(),
                        f = b.children(".jstree-anchor"),
                        g = a("<span>"),
                        h = c,
                        i = a("<div />", {
                            css: {
                                position: "absolute",
                                top: "-200px",
                                left: d ? "0px" : "-1000px",
                                visibility: "hidden"
                            }
                        }).appendTo("body"),
                        j = a("<input />", {
                            value: h,
                            "class": "jstree-rename-input",
                            css: {
                                padding: "0",
                                border: "1px solid silver",
                                "box-sizing": "border-box",
                                display: "inline-block",
                                height: this._data.core.li_height + "px",
                                lineHeight: this._data.core.li_height + "px",
                                width: "150px"
                            },
                            blur: a.proxy(function() {
                                var c = g.children(".jstree-rename-input"),
                                    d = c.val();
                                "" === d && (d = h), i.remove(), g.replaceWith(f), g.remove(), this.set_text(b, h), this.rename_node(b, a("<div></div>").text(d)[this.settings.core.force_text ? "text" : "html"]()) === !1 && this.set_text(b, h)
                            }, this),
                            keydown: function(a) {
                                var b = a.which;
                                27 === b && (this.value = h), (27 === b || 13 === b || 37 === b || 38 === b || 39 === b || 40 === b || 32 === b) && a.stopImmediatePropagation(), (27 === b || 13 === b) && (a.preventDefault(), this.blur())
                            },
                            click: function(a) {
                                a.stopImmediatePropagation()
                            },
                            mousedown: function(a) {
                                a.stopImmediatePropagation()
                            },
                            keyup: function() {
                                j.width(Math.min(i.text("pW" + this.value).width(), e))
                            },
                            keypress: function(a) {
                                return 13 === a.which ? !1 : void 0
                            }
                        }),
                        k = {
                            fontFamily: f.css("fontFamily") || "",
                            fontSize: f.css("fontSize") || "",
                            fontWeight: f.css("fontWeight") || "",
                            fontStyle: f.css("fontStyle") || "",
                            fontStretch: f.css("fontStretch") || "",
                            fontVariant: f.css("fontVariant") || "",
                            letterSpacing: f.css("letterSpacing") || "",
                            wordSpacing: f.css("wordSpacing") || ""
                        };
                    g.attr("class", f.attr("class")).append(f.contents().clone()).append(j), f.replaceWith(g), i.css(k), j.css(k).width(Math.min(i.text("pW" + j[0].value).width(), e))[0].select()
                },
                set_theme: function(b, c) {
                    if (!b) return !1;
                    if (c === !0) {
                        var d = this.settings.core.themes.dir;
                        d || (d = a.jstree.path + "/themes"), c = d + "/" + b + "/style.css"
                    }
                    c && -1 === a.inArray(c, i) && (a("head").append('<link rel="stylesheet" href="' + c + '" type="text/css" />'), i.push(c)), this._data.core.themes.name && this.element.removeClass("jstree-" + this._data.core.themes.name), this._data.core.themes.name = b, this.element.addClass("jstree-" + b), this.element[this.settings.core.themes.responsive ? "addClass" : "removeClass"]("jstree-" + b + "-responsive"), this.trigger("set_theme", {
                        theme: b
                    })
                },
                get_theme: function() {
                    return this._data.core.themes.name
                },
                set_theme_variant: function(a) {
                    this._data.core.themes.variant && this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant), this._data.core.themes.variant = a, a && this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant)
                },
                get_theme_variant: function() {
                    return this._data.core.themes.variant
                },
                show_stripes: function() {
                    this._data.core.themes.stripes = !0, this.get_container_ul().addClass("jstree-striped")
                },
                hide_stripes: function() {
                    this._data.core.themes.stripes = !1, this.get_container_ul().removeClass("jstree-striped")
                },
                toggle_stripes: function() {
                    this._data.core.themes.stripes ? this.hide_stripes() : this.show_stripes()
                },
                show_dots: function() {
                    this._data.core.themes.dots = !0, this.get_container_ul().removeClass("jstree-no-dots")
                },
                hide_dots: function() {
                    this._data.core.themes.dots = !1, this.get_container_ul().addClass("jstree-no-dots")
                },
                toggle_dots: function() {
                    this._data.core.themes.dots ? this.hide_dots() : this.show_dots()
                },
                show_icons: function() {
                    this._data.core.themes.icons = !0, this.get_container_ul().removeClass("jstree-no-icons")
                },
                hide_icons: function() {
                    this._data.core.themes.icons = !1, this.get_container_ul().addClass("jstree-no-icons")
                },
                toggle_icons: function() {
                    this._data.core.themes.icons ? this.hide_icons() : this.show_icons()
                },
                set_icon: function(b, c) {
                    var d, e, f, g;
                    if (a.isArray(b)) {
                        for (b = b.slice(), d = 0, e = b.length; e > d; d++) this.set_icon(b[d], c);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (g = b.icon, b.icon = c, f = this.get_node(b, !0).children(".jstree-anchor").children(".jstree-themeicon"), c === !1 ? this.hide_icon(b) : c === !0 ? (f.removeClass("jstree-themeicon-custom " + g).css("background", "").removeAttr("rel"), g === !1 && this.show_icon(b)) : -1 === c.indexOf("/") && -1 === c.indexOf(".") ? (f.removeClass(g).css("background", ""), f.addClass(c + " jstree-themeicon-custom").attr("rel", c), g === !1 && this.show_icon(b)) : (f.removeClass(g).css("background", ""), f.addClass("jstree-themeicon-custom").css("background", "url('" + c + "') center center no-repeat").attr("rel", c), g === !1 && this.show_icon(b)), !0) : !1
                },
                get_icon: function(a) {
                    return a = this.get_node(a), a && "#" !== a.id ? a.icon : !1
                },
                hide_icon: function(b) {
                    var c, d;
                    if (a.isArray(b)) {
                        for (b = b.slice(), c = 0, d = b.length; d > c; c++) this.hide_icon(b[c]);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b ? (b.icon = !1, this.get_node(b, !0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"), !0) : !1
                },
                show_icon: function(b) {
                    var c, d, e;
                    if (a.isArray(b)) {
                        for (b = b.slice(), c = 0, d = b.length; d > c; c++) this.show_icon(b[c]);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b ? (e = this.get_node(b, !0), b.icon = e.length ? e.children(".jstree-anchor").children(".jstree-themeicon").attr("rel") : !0, b.icon || (b.icon = !0), e.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"), !0) : !1
                }
            }, a.vakata = {}, a.vakata.attributes = function(b, c) {
                b = a(b)[0];
                var d = c ? {} : [];
                return b && b.attributes && a.each(b.attributes, function(b, e) {
                    -1 === a.inArray(e.name.toLowerCase(), ["style", "contenteditable", "hasfocus", "tabindex"]) && null !== e.value && "" !== a.trim(e.value) && (c ? d[e.name] = e.value : d.push(e.name))
                }), d
            }, a.vakata.array_unique = function(a) {
                var b, c, d, e = [];
                for (b = 0, d = a.length; d > b; b++) {
                    for (c = 0; b >= c && a[b] !== a[c]; c++);
                    c === b && e.push(a[b])
                }
                return e
            }, a.vakata.array_remove = function(a, b, c) {
                var d = a.slice((c || b) + 1 || a.length);
                return a.length = 0 > b ? a.length + b : b, a.push.apply(a, d), a
            }, a.vakata.array_remove_item = function(b, c) {
                var d = a.inArray(c, b);
                return -1 !== d ? a.vakata.array_remove(b, d) : b
            };
            var m = document.createElement("I");
            m.className = "jstree-icon jstree-checkbox", m.setAttribute("role", "presentation"), a.jstree.defaults.checkbox = {
                visible: !0,
                three_state: !0,
                whole_node: !0,
                keep_selected_style: !0,
                cascade: "",
                tie_selection: !0
            }, a.jstree.plugins.checkbox = function(b, c) {
                this.bind = function() {
                    c.bind.call(this), this._data.checkbox.uto = !1, this._data.checkbox.selected = [], this.settings.checkbox.three_state && (this.settings.checkbox.cascade = "up+down+undetermined"), this.element.on("init.jstree", a.proxy(function() {
                        this._data.checkbox.visible = this.settings.checkbox.visible, this.settings.checkbox.keep_selected_style || this.element.addClass("jstree-checkbox-no-clicked"), this.settings.checkbox.tie_selection && this.element.addClass("jstree-checkbox-selection")
                    }, this)).on("loading.jstree", a.proxy(function() {
                        this[this._data.checkbox.visible ? "show_checkboxes" : "hide_checkboxes"]()
                    }, this)), -1 !== this.settings.checkbox.cascade.indexOf("undetermined") && this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", a.proxy(function() {
                        this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(a.proxy(this._undetermined, this), 50)
                    }, this)), this.settings.checkbox.tie_selection || this.element.on("model.jstree", a.proxy(function(a, b) {
                        var c, d, e = this._model.data,
                            f = (e[b.parent], b.nodes);
                        for (c = 0, d = f.length; d > c; c++) e[f[c]].state.checked = e[f[c]].original && e[f[c]].original.state && e[f[c]].original.state.checked, e[f[c]].state.checked && this._data.checkbox.selected.push(f[c])
                    }, this)), (-1 !== this.settings.checkbox.cascade.indexOf("up") || -1 !== this.settings.checkbox.cascade.indexOf("down")) && this.element.on("model.jstree", a.proxy(function(b, c) {
                        var d, e, f, g, h, i, j = this._model.data,
                            k = j[c.parent],
                            l = c.nodes,
                            m = [],
                            n = this.settings.checkbox.cascade,
                            o = this.settings.checkbox.tie_selection;
                        if (-1 !== n.indexOf("down"))
                            if (k.state[o ? "selected" : "checked"]) {
                                for (e = 0, f = l.length; f > e; e++) j[l[e]].state[o ? "selected" : "checked"] = !0;
                                this._data[o ? "core" : "checkbox"].selected = this._data[o ? "core" : "checkbox"].selected.concat(l)
                            } else
                                for (e = 0, f = l.length; f > e; e++)
                                    if (j[l[e]].state[o ? "selected" : "checked"]) {
                                        for (g = 0, h = j[l[e]].children_d.length; h > g; g++) j[j[l[e]].children_d[g]].state[o ? "selected" : "checked"] = !0;
                                        this._data[o ? "core" : "checkbox"].selected = this._data[o ? "core" : "checkbox"].selected.concat(j[l[e]].children_d)
                                    }
                        if (-1 !== n.indexOf("up")) {
                            for (e = 0, f = k.children_d.length; f > e; e++) j[k.children_d[e]].children.length || m.push(j[k.children_d[e]].parent);
                            for (m = a.vakata.array_unique(m), g = 0, h = m.length; h > g; g++)
                                for (k = j[m[g]]; k && "#" !== k.id;) {
                                    for (d = 0, e = 0, f = k.children.length; f > e; e++) d += j[k.children[e]].state[o ? "selected" : "checked"];
                                    if (d !== f) break;
                                    k.state[o ? "selected" : "checked"] = !0, this._data[o ? "core" : "checkbox"].selected.push(k.id), i = this.get_node(k, !0), i && i.length && i.attr("aria-selected", !0).children(".jstree-anchor").addClass(o ? "jstree-clicked" : "jstree-checked"), k = this.get_node(k.parent)
                                }
                        }
                        this._data[o ? "core" : "checkbox"].selected = a.vakata.array_unique(this._data[o ? "core" : "checkbox"].selected)
                    }, this)).on(this.settings.checkbox.tie_selection ? "select_node.jstree" : "check_node.jstree", a.proxy(function(b, c) {
                        var d, e, f, g, h = c.node,
                            i = this._model.data,
                            j = this.get_node(h.parent),
                            k = this.get_node(h, !0),
                            l = this.settings.checkbox.cascade,
                            m = this.settings.checkbox.tie_selection;
                        if (-1 !== l.indexOf("down"))
                            for (this._data[m ? "core" : "checkbox"].selected = a.vakata.array_unique(this._data[m ? "core" : "checkbox"].selected.concat(h.children_d)), d = 0, e = h.children_d.length; e > d; d++) g = i[h.children_d[d]], g.state[m ? "selected" : "checked"] = !0, g && g.original && g.original.state && g.original.state.undetermined && (g.original.state.undetermined = !1);
                        if (-1 !== l.indexOf("up"))
                            for (; j && "#" !== j.id;) {
                                for (f = 0, d = 0, e = j.children.length; e > d; d++) f += i[j.children[d]].state[m ? "selected" : "checked"];
                                if (f !== e) break;
                                j.state[m ? "selected" : "checked"] = !0, this._data[m ? "core" : "checkbox"].selected.push(j.id), g = this.get_node(j, !0), g && g.length && g.attr("aria-selected", !0).children(".jstree-anchor").addClass(m ? "jstree-clicked" : "jstree-checked"), j = this.get_node(j.parent)
                            } - 1 !== l.indexOf("down") && k.length && k.find(".jstree-anchor").addClass(m ? "jstree-clicked" : "jstree-checked").parent().attr("aria-selected", !0)
                    }, this)).on(this.settings.checkbox.tie_selection ? "deselect_all.jstree" : "uncheck_all.jstree", a.proxy(function() {
                        var a, b, c, d = this.get_node("#"),
                            e = this._model.data;
                        for (a = 0, b = d.children_d.length; b > a; a++) c = e[d.children_d[a]], c && c.original && c.original.state && c.original.state.undetermined && (c.original.state.undetermined = !1)
                    }, this)).on(this.settings.checkbox.tie_selection ? "deselect_node.jstree" : "uncheck_node.jstree", a.proxy(function(b, c) {
                        var d, e, f, g = c.node,
                            h = this.get_node(g, !0),
                            i = this.settings.checkbox.cascade,
                            j = this.settings.checkbox.tie_selection;
                        if (g && g.original && g.original.state && g.original.state.undetermined && (g.original.state.undetermined = !1), -1 !== i.indexOf("down"))
                            for (d = 0, e = g.children_d.length; e > d; d++) f = this._model.data[g.children_d[d]], f.state[j ? "selected" : "checked"] = !1, f && f.original && f.original.state && f.original.state.undetermined && (f.original.state.undetermined = !1);
                        if (-1 !== i.indexOf("up"))
                            for (d = 0, e = g.parents.length; e > d; d++) f = this._model.data[g.parents[d]], f.state[j ? "selected" : "checked"] = !1, f && f.original && f.original.state && f.original.state.undetermined && (f.original.state.undetermined = !1), f = this.get_node(g.parents[d], !0), f && f.length && f.attr("aria-selected", !1).children(".jstree-anchor").removeClass(j ? "jstree-clicked" : "jstree-checked");
                        for (f = [], d = 0, e = this._data[j ? "core" : "checkbox"].selected.length; e > d; d++) - 1 !== i.indexOf("down") && -1 !== a.inArray(this._data[j ? "core" : "checkbox"].selected[d], g.children_d) || -1 !== i.indexOf("up") && -1 !== a.inArray(this._data[j ? "core" : "checkbox"].selected[d], g.parents) || f.push(this._data[j ? "core" : "checkbox"].selected[d]);
                        this._data[j ? "core" : "checkbox"].selected = a.vakata.array_unique(f), -1 !== i.indexOf("down") && h.length && h.find(".jstree-anchor").removeClass(j ? "jstree-clicked" : "jstree-checked").parent().attr("aria-selected", !1)
                    }, this)), -1 !== this.settings.checkbox.cascade.indexOf("up") && this.element.on("delete_node.jstree", a.proxy(function(a, b) {
                        for (var c, d, e, f, g = this.get_node(b.parent), h = this._model.data, i = this.settings.checkbox.tie_selection; g && "#" !== g.id;) {
                            for (e = 0, c = 0, d = g.children.length; d > c; c++) e += h[g.children[c]].state[i ? "selected" : "checked"];
                            if (e !== d) break;
                            g.state[i ? "selected" : "checked"] = !0, this._data[i ? "core" : "checkbox"].selected.push(g.id), f = this.get_node(g, !0), f && f.length && f.attr("aria-selected", !0).children(".jstree-anchor").addClass(i ? "jstree-clicked" : "jstree-checked"), g = this.get_node(g.parent)
                        }
                    }, this)).on("move_node.jstree", a.proxy(function(b, c) {
                        var d, e, f, g, h, i = c.is_multi,
                            j = c.old_parent,
                            k = this.get_node(c.parent),
                            l = this._model.data,
                            m = this.settings.checkbox.tie_selection;
                        if (!i)
                            for (d = this.get_node(j); d && "#" !== d.id;) {
                                for (e = 0, f = 0, g = d.children.length; g > f; f++) e += l[d.children[f]].state[m ? "selected" : "checked"];
                                if (e !== g) break;
                                d.state[m ? "selected" : "checked"] = !0, this._data[m ? "core" : "checkbox"].selected.push(d.id), h = this.get_node(d, !0), h && h.length && h.attr("aria-selected", !0).children(".jstree-anchor").addClass(m ? "jstree-clicked" : "jstree-checked"), d = this.get_node(d.parent)
                            }
                        for (d = k; d && "#" !== d.id;) {
                            for (e = 0, f = 0, g = d.children.length; g > f; f++) e += l[d.children[f]].state[m ? "selected" : "checked"];
                            if (e === g) d.state[m ? "selected" : "checked"] || (d.state[m ? "selected" : "checked"] = !0, this._data[m ? "core" : "checkbox"].selected.push(d.id), h = this.get_node(d, !0), h && h.length && h.attr("aria-selected", !0).children(".jstree-anchor").addClass(m ? "jstree-clicked" : "jstree-checked"));
                            else {
                                if (!d.state[m ? "selected" : "checked"]) break;
                                d.state[m ? "selected" : "checked"] = !1, this._data[m ? "core" : "checkbox"].selected = a.vakata.array_remove_item(this._data[m ? "core" : "checkbox"].selected, d.id), h = this.get_node(d, !0), h && h.length && h.attr("aria-selected", !1).children(".jstree-anchor").removeClass(m ? "jstree-clicked" : "jstree-checked")
                            }
                            d = this.get_node(d.parent)
                        }
                    }, this))
                }, this._undetermined = function() {
                    var b, c, d = this._model.data,
                        e = this.settings.checkbox.tie_selection,
                        f = this._data[e ? "core" : "checkbox"].selected,
                        g = [],
                        h = this;
                    for (b = 0, c = f.length; c > b; b++) d[f[b]] && d[f[b]].parents && (g = g.concat(d[f[b]].parents));
                    for (this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function() {
                            var a, e = h.get_node(this);
                            if (e.state.loaded)
                                for (b = 0, c = e.children_d.length; c > b; b++) a = d[e.children_d[b]], !a.state.loaded && a.original && a.original.state && a.original.state.undetermined && a.original.state.undetermined === !0 && (g.push(a.id), g = g.concat(a.parents));
                            else e.original && e.original.state && e.original.state.undetermined && e.original.state.undetermined === !0 && (g.push(e.id), g = g.concat(e.parents))
                        }), g = a.vakata.array_unique(g), g = a.vakata.array_remove_item(g, "#"), this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"), b = 0, c = g.length; c > b; b++) d[g[b]].state[e ? "selected" : "checked"] || (f = this.get_node(g[b], !0), f && f.length && f.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined"))
                }, this.redraw_node = function(b, d, e) {
                    if (b = c.redraw_node.apply(this, arguments)) {
                        var f, g, h = null;
                        for (f = 0, g = b.childNodes.length; g > f; f++)
                            if (b.childNodes[f] && b.childNodes[f].className && -1 !== b.childNodes[f].className.indexOf("jstree-anchor")) {
                                h = b.childNodes[f];
                                break
                            }
                        h && (!this.settings.checkbox.tie_selection && this._model.data[b.id].state.checked && (h.className += " jstree-checked"), h.insertBefore(m.cloneNode(!1), h.childNodes[0]))
                    }
                    return e || -1 === this.settings.checkbox.cascade.indexOf("undetermined") || (this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(a.proxy(this._undetermined, this), 50)), b
                }, this.show_checkboxes = function() {
                    this._data.core.themes.checkboxes = !0, this.get_container_ul().removeClass("jstree-no-checkboxes")
                }, this.hide_checkboxes = function() {
                    this._data.core.themes.checkboxes = !1, this.get_container_ul().addClass("jstree-no-checkboxes")
                }, this.toggle_checkboxes = function() {
                    this._data.core.themes.checkboxes ? this.hide_checkboxes() : this.show_checkboxes()
                }, this.is_undetermined = function(b) {
                    b = this.get_node(b);
                    var c, d, e = this.settings.checkbox.cascade,
                        f = this.settings.checkbox.tie_selection,
                        g = this._data[f ? "core" : "checkbox"].selected,
                        h = this._model.data;
                    if (!b || b.state[f ? "selected" : "checked"] === !0 || -1 === e.indexOf("undetermined") || -1 === e.indexOf("down") && -1 === e.indexOf("up")) return !1;
                    if (!b.state.loaded && b.original.state.undetermined === !0) return !0;
                    for (c = 0, d = b.children_d.length; d > c; c++)
                        if (-1 !== a.inArray(b.children_d[c], g) || !h[b.children_d[c]].state.loaded && h[b.children_d[c]].original.state.undetermined) return !0;
                    return !1
                }, this.activate_node = function(b, d) {
                    return this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || a(d.target).hasClass("jstree-checkbox")) && (d.ctrlKey = !0), this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !a(d.target).hasClass("jstree-checkbox") ? c.activate_node.call(this, b, d) : this.is_disabled(b) ? !1 : (this.is_checked(b) ? this.uncheck_node(b, d) : this.check_node(b, d), void this.trigger("activate_node", {
                        node: this.get_node(b)
                    }))
                }, this.check_node = function(b, c) {
                    if (this.settings.checkbox.tie_selection) return this.select_node(b, !1, !0, c);
                    var d, e, f;
                    if (a.isArray(b)) {
                        for (b = b.slice(), e = 0, f = b.length; f > e; e++) this.check_node(b[e], c);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (d = this.get_node(b, !0), void(b.state.checked || (b.state.checked = !0, this._data.checkbox.selected.push(b.id), d && d.length && d.children(".jstree-anchor").addClass("jstree-checked"), this.trigger("check_node", {
                        node: b,
                        selected: this._data.checkbox.selected,
                        event: c
                    })))) : !1
                }, this.uncheck_node = function(b, c) {
                    if (this.settings.checkbox.tie_selection) return this.deselect_node(b, !1, c);
                    var d, e, f;
                    if (a.isArray(b)) {
                        for (b = b.slice(), d = 0, e = b.length; e > d; d++) this.uncheck_node(b[d], c);
                        return !0
                    }
                    return b = this.get_node(b), b && "#" !== b.id ? (f = this.get_node(b, !0), void(b.state.checked && (b.state.checked = !1, this._data.checkbox.selected = a.vakata.array_remove_item(this._data.checkbox.selected, b.id), f.length && f.children(".jstree-anchor").removeClass("jstree-checked"), this.trigger("uncheck_node", {
                        node: b,
                        selected: this._data.checkbox.selected,
                        event: c
                    })))) : !1
                }, this.check_all = function() {
                    if (this.settings.checkbox.tie_selection) return this.select_all(); {
                        var a, b;
                        this._data.checkbox.selected.concat([])
                    }
                    for (this._data.checkbox.selected = this._model.data["#"].children_d.concat(), a = 0, b = this._data.checkbox.selected.length; b > a; a++) this._model.data[this._data.checkbox.selected[a]] && (this._model.data[this._data.checkbox.selected[a]].state.checked = !0);
                    this.redraw(!0), this.trigger("check_all", {
                        selected: this._data.checkbox.selected
                    })
                }, this.uncheck_all = function() {
                    if (this.settings.checkbox.tie_selection) return this.deselect_all();
                    var a, b, c = this._data.checkbox.selected.concat([]);
                    for (a = 0, b = this._data.checkbox.selected.length; b > a; a++) this._model.data[this._data.checkbox.selected[a]] && (this._model.data[this._data.checkbox.selected[a]].state.checked = !1);
                    this._data.checkbox.selected = [], this.element.find(".jstree-checked").removeClass("jstree-checked"), this.trigger("uncheck_all", {
                        selected: this._data.checkbox.selected,
                        node: c
                    })
                }, this.is_checked = function(a) {
                    return this.settings.checkbox.tie_selection ? this.is_selected(a) : (a = this.get_node(a), a && "#" !== a.id ? a.state.checked : !1)
                }, this.get_checked = function(b) {
                    return this.settings.checkbox.tie_selection ? this.get_selected(b) : b ? a.map(this._data.checkbox.selected, a.proxy(function(a) {
                        return this.get_node(a)
                    }, this)) : this._data.checkbox.selected
                }, this.get_top_checked = function(b) {
                    if (this.settings.checkbox.tie_selection) return this.get_top_selected(b);
                    var c, d, e, f, g = this.get_checked(!0),
                        h = {};
                    for (c = 0, d = g.length; d > c; c++) h[g[c].id] = g[c];
                    for (c = 0, d = g.length; d > c; c++)
                        for (e = 0, f = g[c].children_d.length; f > e; e++) h[g[c].children_d[e]] && delete h[g[c].children_d[e]];
                    g = [];
                    for (c in h) h.hasOwnProperty(c) && g.push(c);
                    return b ? a.map(g, a.proxy(function(a) {
                        return this.get_node(a)
                    }, this)) : g
                }, this.get_bottom_checked = function(b) {
                    if (this.settings.checkbox.tie_selection) return this.get_bottom_selected(b);
                    var c, d, e = this.get_checked(!0),
                        f = [];
                    for (c = 0, d = e.length; d > c; c++) e[c].children.length || f.push(e[c].id);
                    return b ? a.map(f, a.proxy(function(a) {
                        return this.get_node(a)
                    }, this)) : f
                }, this.load_node = function(b) {
                    var d, e, f, g;
                    if (!a.isArray(b) && !this.settings.checkbox.tie_selection && (g = this.get_node(b), g && g.state.loaded))
                        for (d = 0, e = g.children_d.length; e > d; d++) this._model.data[g.children_d[d]].state.checked && (f = !0, this._data.checkbox.selected = a.vakata.array_remove_item(this._data.checkbox.selected, g.children_d[d]));
                    return c.load_node.apply(this, arguments)
                }, this.get_state = function() {
                    var a = c.get_state.apply(this, arguments);
                    return this.settings.checkbox.tie_selection ? a : (a.checkbox = this._data.checkbox.selected.slice(), a)
                }, this.set_state = function(b) {
                    var d = c.set_state.apply(this, arguments);
                    if (d && b.checkbox) {
                        if (!this.settings.checkbox.tie_selection) {
                            this.uncheck_all();
                            var e = this;
                            a.each(b.checkbox, function(a, b) {
                                e.check_node(b)
                            })
                        }
                        return delete b.checkbox, !1
                    }
                    return d
                }
            };
            var n, o, p = null;
            a.jstree.defaults.contextmenu = {
                    select_node: !0,
                    show_at_node: !0,
                    items: function() {
                        return {
                            create: {
                                separator_before: !1,
                                separator_after: !0,
                                _disabled: !1,
                                label: "Create",
                                action: function(b) {
                                    var c = a.jstree.reference(b.reference),
                                        d = c.get_node(b.reference);
                                    c.create_node(d, {}, "last", function(a) {
                                        setTimeout(function() {
                                            c.edit(a)
                                        }, 0)
                                    })
                                }
                            },
                            rename: {
                                separator_before: !1,
                                separator_after: !1,
                                _disabled: !1,
                                label: "Rename",
                                action: function(b) {
                                    var c = a.jstree.reference(b.reference),
                                        d = c.get_node(b.reference);
                                    c.edit(d)
                                }
                            },
                            remove: {
                                separator_before: !1,
                                icon: !1,
                                separator_after: !1,
                                _disabled: !1,
                                label: "Delete",
                                action: function(b) {
                                    var c = a.jstree.reference(b.reference),
                                        d = c.get_node(b.reference);
                                    c.delete_node(c.is_selected(d) ? c.get_selected() : d)
                                }
                            },
                            ccp: {
                                separator_before: !0,
                                icon: !1,
                                separator_after: !1,
                                label: "Edit",
                                action: !1,
                                submenu: {
                                    cut: {
                                        separator_before: !1,
                                        separator_after: !1,
                                        label: "Cut",
                                        action: function(b) {
                                            var c = a.jstree.reference(b.reference),
                                                d = c.get_node(b.reference);
                                            c.cut(c.is_selected(d) ? c.get_selected() : d)
                                        }
                                    },
                                    copy: {
                                        separator_before: !1,
                                        icon: !1,
                                        separator_after: !1,
                                        label: "Copy",
                                        action: function(b) {
                                            var c = a.jstree.reference(b.reference),
                                                d = c.get_node(b.reference);
                                            c.copy(c.is_selected(d) ? c.get_selected() : d)
                                        }
                                    },
                                    paste: {
                                        separator_before: !1,
                                        icon: !1,
                                        _disabled: function(b) {
                                            return !a.jstree.reference(b.reference).can_paste()
                                        },
                                        separator_after: !1,
                                        label: "Paste",
                                        action: function(b) {
                                            var c = a.jstree.reference(b.reference),
                                                d = c.get_node(b.reference);
                                            c.paste(d)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, a.jstree.plugins.contextmenu = function(c, d) {
                    this.bind = function() {
                        d.bind.call(this);
                        var b = 0;
                        this.element.on("contextmenu.jstree", ".jstree-anchor", a.proxy(function(a, c) {
                            a.preventDefault(), b = a.ctrlKey ? +new Date : 0, (c || p) && (b = +new Date + 1e4), p && clearTimeout(p), this.is_loading(a.currentTarget) || this.show_contextmenu(a.currentTarget, a.pageX, a.pageY, a)
                        }, this)).on("click.jstree", ".jstree-anchor", a.proxy(function() {
                            this._data.contextmenu.visible && (!b || +new Date - b > 250) && a.vakata.context.hide(), b = 0
                        }, this)).on("touchstart.jstree", ".jstree-anchor", function(b) {
                            b.originalEvent && b.originalEvent.changedTouches && b.originalEvent.changedTouches[0] && (n = b.pageX, o = b.pageY, p = setTimeout(function() {
                                a(b.currentTarget).trigger("contextmenu", !0)
                            }, 750))
                        }), a(document).on("context_hide.vakata.jstree", a.proxy(function() {
                            this._data.contextmenu.visible = !1
                        }, this))
                    }, this.teardown = function() {
                        this._data.contextmenu.visible && a.vakata.context.hide(), d.teardown.call(this)
                    }, this.show_contextmenu = function(c, d, e, f) {
                        if (c = this.get_node(c), !c || "#" === c.id) return !1;
                        var g = this.settings.contextmenu,
                            h = this.get_node(c, !0),
                            i = h.children(".jstree-anchor"),
                            j = !1,
                            k = !1;
                        (g.show_at_node || d === b || e === b) && (j = i.offset(), d = j.left, e = j.top + this._data.core.li_height), this.settings.contextmenu.select_node && !this.is_selected(c) && this.activate_node(c, f), k = g.items, a.isFunction(k) && (k = k.call(this, c, a.proxy(function(a) {
                            this._show_contextmenu(c, d, e, a)
                        }, this))), a.isPlainObject(k) && this._show_contextmenu(c, d, e, k)
                    }, this._show_contextmenu = function(b, c, d, e) {
                        var f = this.get_node(b, !0),
                            g = f.children(".jstree-anchor");
                        a(document).one("context_show.vakata.jstree", a.proxy(function(b, c) {
                            var d = "jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";
                            a(c.element).addClass(d)
                        }, this)), this._data.contextmenu.visible = !0, a.vakata.context.show(g, {
                            x: c,
                            y: d
                        }, e), this.trigger("show_contextmenu", {
                            node: b,
                            x: c,
                            y: d
                        })
                    }
                }, a(function() {
                    a(document).on("touchmove.vakata.jstree", function(a) {
                        p && a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] && (Math.abs(n - a.pageX) > 50 || Math.abs(o - a.pageY) > 50) && clearTimeout(p)
                    }).on("touchend.vakata.jstree", function() {
                        p && clearTimeout(p)
                    })
                }),
                function(a) {
                    var b = !1,
                        c = {
                            element: !1,
                            reference: !1,
                            position_x: 0,
                            position_y: 0,
                            items: [],
                            html: "",
                            is_visible: !1
                        };
                    a.vakata.context = {
                        settings: {
                            hide_onmouseleave: 0,
                            icons: !0
                        },
                        _trigger: function(b) {
                            a(document).triggerHandler("context_" + b + ".vakata", {
                                reference: c.reference,
                                element: c.element,
                                position: {
                                    x: c.position_x,
                                    y: c.position_y
                                }
                            })
                        },
                        _execute: function(b) {
                            return b = c.items[b], b && (!b._disabled || a.isFunction(b._disabled) && !b._disabled({
                                item: b,
                                reference: c.reference,
                                element: c.element
                            })) && b.action ? b.action.call(null, {
                                item: b,
                                reference: c.reference,
                                element: c.element,
                                position: {
                                    x: c.position_x,
                                    y: c.position_y
                                }
                            }) : !1
                        },
                        _parse: function(b, d) {
                            if (!b) return !1;
                            d || (c.html = "", c.items = []);
                            var e, f = "",
                                g = !1;
                            return d && (f += "<ul>"), a.each(b, function(b, d) {
                                return d ? (c.items.push(d), !g && d.separator_before && (f += "<li class='vakata-context-separator'><a href='#' " + (a.vakata.context.settings.icons ? "" : 'style="margin-left:0px;"') + ">&#160;</a></li>"), g = !1, f += "<li class='" + (d._class || "") + (d._disabled === !0 || a.isFunction(d._disabled) && d._disabled({
                                    item: d,
                                    reference: c.reference,
                                    element: c.element
                                }) ? " vakata-contextmenu-disabled " : "") + "' " + (d.shortcut ? " data-shortcut='" + d.shortcut + "' " : "") + ">", f += "<a href='#' rel='" + (c.items.length - 1) + "'>", a.vakata.context.settings.icons && (f += "<i ", d.icon && (f += -1 !== d.icon.indexOf("/") || -1 !== d.icon.indexOf(".") ? " style='background:url(\"" + d.icon + "\") center center no-repeat' " : " class='" + d.icon + "' "), f += "></i><span class='vakata-contextmenu-sep'>&#160;</span>"), f += (a.isFunction(d.label) ? d.label({
                                    item: b,
                                    reference: c.reference,
                                    element: c.element
                                }) : d.label) + (d.shortcut ? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' + d.shortcut + '">' + (d.shortcut_label || "") + "</span>" : "") + "</a>", d.submenu && (e = a.vakata.context._parse(d.submenu, !0), e && (f += e)), f += "</li>", void(d.separator_after && (f += "<li class='vakata-context-separator'><a href='#' " + (a.vakata.context.settings.icons ? "" : 'style="margin-left:0px;"') + ">&#160;</a></li>", g = !0))) : !0
                            }), f = f.replace(/<li class\='vakata-context-separator'\><\/li\>$/, ""), d && (f += "</ul>"), d || (c.html = f, a.vakata.context._trigger("parse")), f.length > 10 ? f : !1
                        },
                        _show_submenu: function(c) {
                            if (c = a(c), c.length && c.children("ul").length) {
                                var d = c.children("ul"),
                                    e = c.offset().left + c.outerWidth(),
                                    f = c.offset().top,
                                    g = d.width(),
                                    h = d.height(),
                                    i = a(window).width() + a(window).scrollLeft(),
                                    j = a(window).height() + a(window).scrollTop();
                                b ? c[e - (g + 10 + c.outerWidth()) < 0 ? "addClass" : "removeClass"]("vakata-context-left") : c[e + g + 10 > i ? "addClass" : "removeClass"]("vakata-context-right"), f + h + 10 > j && d.css("bottom", "-1px"), d.show()
                            }
                        },
                        show: function(d, e, f) {
                            var g, h, i, j, k, l, m, n, o = !0;
                            switch (c.element && c.element.length && c.element.width(""), o) {
                                case !e && !d:
                                    return !1;
                                case !!e && !!d:
                                    c.reference = d, c.position_x = e.x, c.position_y = e.y;
                                    break;
                                case !e && !!d:
                                    c.reference = d, g = d.offset(), c.position_x = g.left + d.outerHeight(), c.position_y = g.top;
                                    break;
                                case !!e && !d:
                                    c.position_x = e.x, c.position_y = e.y
                            }
                            d && !f && a(d).data("vakata_contextmenu") && (f = a(d).data("vakata_contextmenu")), a.vakata.context._parse(f) && c.element.html(c.html), c.items.length && (c.element.appendTo("body"), h = c.element, i = c.position_x, j = c.position_y, k = h.width(), l = h.height(), m = a(window).width() + a(window).scrollLeft(), n = a(window).height() + a(window).scrollTop(), b && (i -= h.outerWidth() - a(d).outerWidth(), i < a(window).scrollLeft() + 20 && (i = a(window).scrollLeft() + 20)), i + k + 20 > m && (i = m - (k + 20)), j + l + 20 > n && (j = n - (l + 20)), c.element.css({
                                left: i,
                                top: j
                            }).show().find("a").first().focus().parent().addClass("vakata-context-hover"), c.is_visible = !0, a.vakata.context._trigger("show"))
                        },
                        hide: function() {
                            c.is_visible && (c.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(), c.is_visible = !1, a.vakata.context._trigger("hide"))
                        }
                    }, a(function() {
                        b = "rtl" === a("body").css("direction");
                        var d = !1;
                        c.element = a("<ul class='vakata-context'></ul>"), c.element.on("mouseenter", "li", function(b) {
                            b.stopImmediatePropagation(), a.contains(this, b.relatedTarget) || (d && clearTimeout(d), c.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(), a(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover"), a.vakata.context._show_submenu(this))
                        }).on("mouseleave", "li", function(b) {
                            a.contains(this, b.relatedTarget) || a(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")
                        }).on("mouseleave", function() {
                            a(this).find(".vakata-context-hover").removeClass("vakata-context-hover"), a.vakata.context.settings.hide_onmouseleave && (d = setTimeout(function() {
                                return function() {
                                    a.vakata.context.hide()
                                }
                            }(this), a.vakata.context.settings.hide_onmouseleave))
                        }).on("click", "a", function(b) {
                            b.preventDefault(), a(this).blur().parent().hasClass("vakata-context-disabled") || a.vakata.context._execute(a(this).attr("rel")) === !1 || a.vakata.context.hide()
                        }).on("keydown", "a", function(b) {
                            var d = null;
                            switch (b.which) {
                                case 13:
                                case 32:
                                    b.type = "mouseup", b.preventDefault(), a(b.currentTarget).trigger(b);
                                    break;
                                case 37:
                                    c.is_visible && (c.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(), b.stopImmediatePropagation(), b.preventDefault());
                                    break;
                                case 38:
                                    c.is_visible && (d = c.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(), d.length || (d = c.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()), d.addClass("vakata-context-hover").children("a").focus(), b.stopImmediatePropagation(), b.preventDefault());
                                    break;
                                case 39:
                                    c.is_visible && (c.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(), b.stopImmediatePropagation(), b.preventDefault());
                                    break;
                                case 40:
                                    c.is_visible && (d = c.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(), d.length || (d = c.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()), d.addClass("vakata-context-hover").children("a").focus(), b.stopImmediatePropagation(), b.preventDefault());
                                    break;
                                case 27:
                                    a.vakata.context.hide(), b.preventDefault()
                            }
                        }).on("keydown", function(a) {
                            a.preventDefault();
                            var b = c.element.find(".vakata-contextmenu-shortcut-" + a.which).parent();
                            b.parent().not(".vakata-context-disabled") && b.click()
                        }), a(document).on("mousedown.vakata.jstree", function(b) {
                            c.is_visible && !a.contains(c.element[0], b.target) && a.vakata.context.hide()
                        }).on("context_show.vakata.jstree", function() {
                            c.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"), b && c.element.addClass("vakata-context-rtl").css("direction", "rtl"), c.element.find("ul").hide().end()
                        })
                    })
                }(a), a.jstree.defaults.dnd = {
                    copy: !0,
                    open_timeout: 500,
                    is_draggable: !0,
                    check_while_dragging: !0,
                    always_copy: !1,
                    inside_pos: 0,
                    drag_selection: !0,
                    touch: !0
                }, a.jstree.plugins.dnd = function(b, c) {
                    this.bind = function() {
                        c.bind.call(this), this.element.on("mousedown.jstree touchstart.jstree", ".jstree-anchor", a.proxy(function(b) {
                            if ("touchstart" === b.type && (!this.settings.dnd.touch || "selected" === this.settings.dnd.touch && !a(b.currentTarget).hasClass("jstree-clicked"))) return !0;
                            var c = this.get_node(b.target),
                                d = this.is_selected(c) && this.settings.drag_selection ? this.get_selected().length : 1,
                                e = d > 1 ? d + " " + this.get_string("nodes") : this.get_text(b.currentTarget);
                            return this.settings.core.force_text && (e = a("<div />").text(e).html()), c && c.id && "#" !== c.id && (1 === b.which || "touchstart" === b.type) && (this.settings.dnd.is_draggable === !0 || a.isFunction(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, d > 1 ? this.get_selected(!0) : [c])) ? (this.element.trigger("mousedown.jstree"), a.vakata.dnd.start(b, {
                                jstree: !0,
                                origin: this,
                                obj: this.get_node(c, !0),
                                nodes: d > 1 ? this.get_selected() : [c.id]
                            }, '<div id="jstree-dnd" class="jstree-' + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive ? " jstree-dnd-responsive" : "") + '"><i class="jstree-icon jstree-er"></i>' + e + '<ins class="jstree-copy" style="display:none;">+</ins></div>')) : void 0
                        }, this))
                    }
                }, a(function() {
                    var b = !1,
                        c = !1,
                        d = !1,
                        e = a('<div id="jstree-marker">&#160;</div>').hide();
                    a(document).on("dnd_start.vakata.jstree", function(a, c) {
                        b = !1, c && c.data && c.data.jstree && e.appendTo("body")
                    }).on("dnd_move.vakata.jstree", function(f, g) {
                        if (d && clearTimeout(d), g && g.data && g.data.jstree && (!g.event.target.id || "jstree-marker" !== g.event.target.id)) {
                            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a.jstree.reference(g.event.target),
                                w = !1,
                                x = !1,
                                y = !1;
                            if (v && v._data && v._data.dnd)
                                if (e.attr("class", "jstree-" + v.get_theme() + (v.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")), g.helper.children().attr("class", "jstree-" + v.get_theme() + " jstree-" + v.get_theme() + "-" + v.get_theme_variant() + " " + (v.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")).find(".jstree-copy").first()[g.data.origin && (g.data.origin.settings.dnd.always_copy || g.data.origin.settings.dnd.copy && (g.event.metaKey || g.event.ctrlKey)) ? "show" : "hide"](), g.event.target !== v.element[0] && g.event.target !== v.get_container_ul()[0] || 0 !== v.get_container_ul().children().length) {
                                    if (w = a(g.event.target).closest(".jstree-anchor"), w && w.length && w.parent().is(".jstree-closed, .jstree-open, .jstree-leaf") && (x = w.offset(), y = g.event.pageY - x.top, j = w.height(), m = j / 3 > y ? ["b", "i", "a"] : y > j - j / 3 ? ["a", "i", "b"] : y > j / 2 ? ["i", "a", "b"] : ["i", "b", "a"], a.each(m, function(f, y) {
                                            switch (y) {
                                                case "b":
                                                    h = x.left - 6, i = x.top, k = v.get_parent(w), l = w.parent().index();
                                                    break;
                                                case "i":
                                                    t = v.settings.dnd.inside_pos, u = v.get_node(w.parent()), h = x.left - 2, i = x.top + j / 2 + 1, k = u.id, l = "first" === t ? 0 : "last" === t ? u.children.length : Math.min(t, u.children.length);
                                                    break;
                                                case "a":
                                                    h = x.left - 6, i = x.top + j, k = v.get_parent(w), l = w.parent().index() + 1
                                            }
                                            for (n = !0, o = 0, p = g.data.nodes.length; p > o; o++)
                                                if (q = g.data.origin && (g.data.origin.settings.dnd.always_copy || g.data.origin.settings.dnd.copy && (g.event.metaKey || g.event.ctrlKey)) ? "copy_node" : "move_node", r = l, "move_node" === q && "a" === y && g.data.origin && g.data.origin === v && k === v.get_parent(g.data.nodes[o]) && (s = v.get_node(k), r > a.inArray(g.data.nodes[o], s.children) && (r -= 1)), n = n && (v && v.settings && v.settings.dnd && v.settings.dnd.check_while_dragging === !1 || v.check(q, g.data.origin && g.data.origin !== v ? g.data.origin.get_node(g.data.nodes[o]) : g.data.nodes[o], k, r, {
                                                        dnd: !0,
                                                        ref: v.get_node(w.parent()),
                                                        pos: y,
                                                        is_multi: g.data.origin && g.data.origin !== v,
                                                        is_foreign: !g.data.origin
                                                    })), !n) {
                                                    v && v.last_error && (c = v.last_error());
                                                    break
                                                }
                                            return "i" === y && w.parent().is(".jstree-closed") && v.settings.dnd.open_timeout && (d = setTimeout(function(a, b) {
                                                return function() {
                                                    a.open_node(b)
                                                }
                                            }(v, w), v.settings.dnd.open_timeout)), n ? (b = {
                                                ins: v,
                                                par: k,
                                                pos: "i" !== y || "last" !== t || 0 !== l || v.is_loaded(u) ? l : "last"
                                            }, e.css({
                                                left: h + "px",
                                                top: i + "px"
                                            }).show(), g.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), c = {}, m = !0, !1) : void 0
                                        }), m === !0)) return
                                } else {
                                    for (n = !0, o = 0, p = g.data.nodes.length; p > o && (n = n && v.check(g.data.origin && (g.data.origin.settings.dnd.always_copy || g.data.origin.settings.dnd.copy && (g.event.metaKey || g.event.ctrlKey)) ? "copy_node" : "move_node", g.data.origin && g.data.origin !== v ? g.data.origin.get_node(g.data.nodes[o]) : g.data.nodes[o], "#", "last", {
                                            dnd: !0,
                                            ref: v.get_node("#"),
                                            pos: "i",
                                            is_multi: g.data.origin && g.data.origin !== v,
                                            is_foreign: !g.data.origin
                                        }), n); o++);
                                    if (n) return b = {
                                        ins: v,
                                        par: "#",
                                        pos: "last"
                                    }, e.hide(), void g.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok")
                                }
                            b = !1, g.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"), e.hide()
                        }
                    }).on("dnd_scroll.vakata.jstree", function(a, c) {
                        c && c.data && c.data.jstree && (e.hide(), b = !1, c.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))
                    }).on("dnd_stop.vakata.jstree", function(f, g) {
                        if (d && clearTimeout(d), g && g.data && g.data.jstree) {
                            e.hide().detach();
                            var h, i, j = [];
                            if (b) {
                                for (h = 0, i = g.data.nodes.length; i > h; h++) j[h] = g.data.origin ? g.data.origin.get_node(g.data.nodes[h]) : g.data.nodes[h], g.data.origin && (j[h].instance = g.data.origin);
                                for (b.ins[g.data.origin && (g.data.origin.settings.dnd.always_copy || g.data.origin.settings.dnd.copy && (g.event.metaKey || g.event.ctrlKey)) ? "copy_node" : "move_node"](j, b.par, b.pos), h = 0, i = j.length; i > h; h++) j[h].instance && (j[h].instance = null)
                            } else h = a(g.event.target).closest(".jstree"), h.length && c && c.error && "check" === c.error && (h = h.jstree(!0), h && h.settings.core.error.call(this, c))
                        }
                    }).on("keyup.jstree keydown.jstree", function(b, c) {
                        c = a.vakata.dnd._get(), c && c.data && c.data.jstree && c.helper.find(".jstree-copy").first()[c.data.origin && (c.data.origin.settings.dnd.always_copy || c.data.origin.settings.dnd.copy && (b.metaKey || b.ctrlKey)) ? "show" : "hide"]()
                    })
                }),
                function(a) {
                    var b = {
                        element: !1,
                        target: !1,
                        is_down: !1,
                        is_drag: !1,
                        helper: !1,
                        helper_w: 0,
                        data: !1,
                        init_x: 0,
                        init_y: 0,
                        scroll_l: 0,
                        scroll_t: 0,
                        scroll_e: !1,
                        scroll_i: !1,
                        is_touch: !1
                    };
                    a.vakata.dnd = {
                        settings: {
                            scroll_speed: 10,
                            scroll_proximity: 20,
                            helper_left: 5,
                            helper_top: 10,
                            threshold: 5,
                            threshold_touch: 50
                        },
                        _trigger: function(b, c) {
                            var d = a.vakata.dnd._get();
                            d.event = c, a(document).triggerHandler("dnd_" + b + ".vakata", d)
                        },
                        _get: function() {
                            return {
                                data: b.data,
                                element: b.element,
                                helper: b.helper
                            }
                        },
                        _clean: function() {
                            b.helper && b.helper.remove(), b.scroll_i && (clearInterval(b.scroll_i), b.scroll_i = !1), b = {
                                element: !1,
                                target: !1,
                                is_down: !1,
                                is_drag: !1,
                                helper: !1,
                                helper_w: 0,
                                data: !1,
                                init_x: 0,
                                init_y: 0,
                                scroll_l: 0,
                                scroll_t: 0,
                                scroll_e: !1,
                                scroll_i: !1,
                                is_touch: !1
                            }, a(document).off("mousemove.vakata.jstree touchmove.vakata.jstree", a.vakata.dnd.drag), a(document).off("mouseup.vakata.jstree touchend.vakata.jstree", a.vakata.dnd.stop)
                        },
                        _scroll: function(c) {
                            if (!b.scroll_e || !b.scroll_l && !b.scroll_t) return b.scroll_i && (clearInterval(b.scroll_i), b.scroll_i = !1), !1;
                            if (!b.scroll_i) return b.scroll_i = setInterval(a.vakata.dnd._scroll, 100), !1;
                            if (c === !0) return !1;
                            var d = b.scroll_e.scrollTop(),
                                e = b.scroll_e.scrollLeft();
                            b.scroll_e.scrollTop(d + b.scroll_t * a.vakata.dnd.settings.scroll_speed), b.scroll_e.scrollLeft(e + b.scroll_l * a.vakata.dnd.settings.scroll_speed), (d !== b.scroll_e.scrollTop() || e !== b.scroll_e.scrollLeft()) && a.vakata.dnd._trigger("scroll", b.scroll_e)
                        },
                        start: function(c, d, e) {
                            "touchstart" === c.type && c.originalEvent && c.originalEvent.changedTouches && c.originalEvent.changedTouches[0] && (c.pageX = c.originalEvent.changedTouches[0].pageX, c.pageY = c.originalEvent.changedTouches[0].pageY, c.target = document.elementFromPoint(c.originalEvent.changedTouches[0].pageX - window.pageXOffset, c.originalEvent.changedTouches[0].pageY - window.pageYOffset)), b.is_drag && a.vakata.dnd.stop({});
                            try {
                                c.currentTarget.unselectable = "on", c.currentTarget.onselectstart = function() {
                                    return !1
                                }, c.currentTarget.style && (c.currentTarget.style.MozUserSelect = "none")
                            } catch (f) {}
                            return b.init_x = c.pageX, b.init_y = c.pageY, b.data = d, b.is_down = !0, b.element = c.currentTarget, b.target = c.target, b.is_touch = "touchstart" === c.type, e !== !1 && (b.helper = a("<div id='vakata-dnd'></div>").html(e).css({
                                display: "block",
                                margin: "0",
                                padding: "0",
                                position: "absolute",
                                top: "-2000px",
                                lineHeight: "16px",
                                zIndex: "10000"
                            })), a(document).on("mousemove.vakata.jstree touchmove.vakata.jstree", a.vakata.dnd.drag), a(document).on("mouseup.vakata.jstree touchend.vakata.jstree", a.vakata.dnd.stop), !1
                        },
                        drag: function(c) {
                            if ("touchmove" === c.type && c.originalEvent && c.originalEvent.changedTouches && c.originalEvent.changedTouches[0] && (c.pageX = c.originalEvent.changedTouches[0].pageX, c.pageY = c.originalEvent.changedTouches[0].pageY, c.target = document.elementFromPoint(c.originalEvent.changedTouches[0].pageX - window.pageXOffset, c.originalEvent.changedTouches[0].pageY - window.pageYOffset)), b.is_down) {
                                if (!b.is_drag) {
                                    if (!(Math.abs(c.pageX - b.init_x) > (b.is_touch ? a.vakata.dnd.settings.threshold_touch : a.vakata.dnd.settings.threshold) || Math.abs(c.pageY - b.init_y) > (b.is_touch ? a.vakata.dnd.settings.threshold_touch : a.vakata.dnd.settings.threshold))) return;
                                    b.helper && (b.helper.appendTo("body"), b.helper_w = b.helper.outerWidth()), b.is_drag = !0, a.vakata.dnd._trigger("start", c)
                                }
                                var d = !1,
                                    e = !1,
                                    f = !1,
                                    g = !1,
                                    h = !1,
                                    i = !1,
                                    j = !1,
                                    k = !1,
                                    l = !1,
                                    m = !1;
                                return b.scroll_t = 0, b.scroll_l = 0, b.scroll_e = !1, a(a(c.target).parentsUntil("body").addBack().get().reverse()).filter(function() {
                                    return /^auto|scroll$/.test(a(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth)
                                }).each(function() {
                                    var d = a(this),
                                        e = d.offset();
                                    return this.scrollHeight > this.offsetHeight && (e.top + d.height() - c.pageY < a.vakata.dnd.settings.scroll_proximity && (b.scroll_t = 1), c.pageY - e.top < a.vakata.dnd.settings.scroll_proximity && (b.scroll_t = -1)), this.scrollWidth > this.offsetWidth && (e.left + d.width() - c.pageX < a.vakata.dnd.settings.scroll_proximity && (b.scroll_l = 1), c.pageX - e.left < a.vakata.dnd.settings.scroll_proximity && (b.scroll_l = -1)), b.scroll_t || b.scroll_l ? (b.scroll_e = a(this), !1) : void 0
                                }), b.scroll_e || (d = a(document), e = a(window), f = d.height(), g = e.height(), h = d.width(), i = e.width(), j = d.scrollTop(), k = d.scrollLeft(), f > g && c.pageY - j < a.vakata.dnd.settings.scroll_proximity && (b.scroll_t = -1), f > g && g - (c.pageY - j) < a.vakata.dnd.settings.scroll_proximity && (b.scroll_t = 1), h > i && c.pageX - k < a.vakata.dnd.settings.scroll_proximity && (b.scroll_l = -1), h > i && i - (c.pageX - k) < a.vakata.dnd.settings.scroll_proximity && (b.scroll_l = 1), (b.scroll_t || b.scroll_l) && (b.scroll_e = d)), b.scroll_e && a.vakata.dnd._scroll(!0), b.helper && (l = parseInt(c.pageY + a.vakata.dnd.settings.helper_top, 10), m = parseInt(c.pageX + a.vakata.dnd.settings.helper_left, 10), f && l + 25 > f && (l = f - 50), h && m + b.helper_w > h && (m = h - (b.helper_w + 2)), b.helper.css({
                                    left: m + "px",
                                    top: l + "px"
                                })), a.vakata.dnd._trigger("move", c), !1
                            }
                        },
                        stop: function(c) {
                            if ("touchend" === c.type && c.originalEvent && c.originalEvent.changedTouches && c.originalEvent.changedTouches[0] && (c.pageX = c.originalEvent.changedTouches[0].pageX, c.pageY = c.originalEvent.changedTouches[0].pageY, c.target = document.elementFromPoint(c.originalEvent.changedTouches[0].pageX - window.pageXOffset, c.originalEvent.changedTouches[0].pageY - window.pageYOffset)), b.is_drag) a.vakata.dnd._trigger("stop", c);
                            else if ("touchend" === c.type && c.target === b.target) {
                                var d = setTimeout(function() {
                                    a(c.target).click()
                                }, 100);
                                a(c.target).one("click", function() {
                                    d && clearTimeout(d)
                                })
                            }
                            return a.vakata.dnd._clean(), !1
                        }
                    }
                }(a), a.jstree.defaults.search = {
                    ajax: !1,
                    fuzzy: !1,
                    case_sensitive: !1,
                    show_only_matches: !1,
                    close_opened_onclear: !0,
                    search_leaves_only: !1,
                    search_callback: !1
                }, a.jstree.plugins.search = function(c, d) {
                    this.bind = function() {
                        d.bind.call(this), this._data.search.str = "", this._data.search.dom = a(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = !1, this.element.on("before_open.jstree", a.proxy(function() {
                            var b, c, d = this._data.search.res,
                                e = [],
                                f = a();
                            if (d && d.length && (this._data.search.dom = a(this.element[0].querySelectorAll("#" + a.map(d, function(b) {
                                    return -1 !== "0123456789".indexOf(b[0]) ? "\\3" + b[0] + " " + b.substr(1).replace(a.jstree.idregex, "\\$&") : b.replace(a.jstree.idregex, "\\$&")
                                }).join(", #"))), this._data.search.dom.children(".jstree-anchor").addClass("jstree-search"), this._data.search.som && this._data.search.res.length)) {
                                for (b = 0, c = d.length; c > b; b++) e = e.concat(this.get_node(d[b]).parents);
                                e = a.vakata.array_remove_item(a.vakata.array_unique(e), "#"), f = e.length ? a(this.element[0].querySelectorAll("#" + a.map(e, function(b) {
                                    return -1 !== "0123456789".indexOf(b[0]) ? "\\3" + b[0] + " " + b.substr(1).replace(a.jstree.idregex, "\\$&") : b.replace(a.jstree.idregex, "\\$&")
                                }).join(", #"))) : a(), this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function() {
                                    return this.nextSibling
                                }).removeClass("jstree-last"), f = f.add(this._data.search.dom), f.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function() {
                                    a(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last")
                                })
                            }
                        }, this)).on("search.jstree", a.proxy(function(b, c) {
                            this._data.search.som && c.nodes.length && (this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function() {
                                return this.nextSibling
                            }).removeClass("jstree-last"), c.nodes.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function() {
                                a(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last")
                            }))
                        }, this)).on("clear_search.jstree", a.proxy(function(a, b) {
                            this._data.search.som && b.nodes.length && this.element.find(".jstree-node").css("display", "").filter(".jstree-last").filter(function() {
                                return this.nextSibling
                            }).removeClass("jstree-last")
                        }, this))
                    }, this.search = function(c, d, e) {
                        if (c === !1 || "" === a.trim(c.toString())) return this.clear_search();
                        c = c.toString();
                        var f = this.settings.search,
                            g = f.ajax ? f.ajax : !1,
                            h = null,
                            i = [],
                            j = [];
                        return this._data.search.res.length && this.clear_search(), e === b && (e = f.show_only_matches), d || g === !1 ? (this._data.search.str = c, this._data.search.dom = a(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = e, h = new a.vakata.search(c, !0, {
                            caseSensitive: f.case_sensitive,
                            fuzzy: f.fuzzy
                        }), a.each(this._model.data, function(a, b) {
                            b.text && (f.search_callback && f.search_callback.call(this, c, b) || !f.search_callback && h.search(b.text).isMatch) && (!f.search_leaves_only || b.state.loaded && 0 === b.children.length) && (i.push(a), j = j.concat(b.parents))
                        }), i.length && (j = a.vakata.array_unique(j), this._search_open(j), this._data.search.dom = a(this.element[0].querySelectorAll("#" + a.map(i, function(b) {
                            return -1 !== "0123456789".indexOf(b[0]) ? "\\3" + b[0] + " " + b.substr(1).replace(a.jstree.idregex, "\\$&") : b.replace(a.jstree.idregex, "\\$&")
                        }).join(", #"))), this._data.search.res = i, this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")), void this.trigger("search", {
                            nodes: this._data.search.dom,
                            str: c,
                            res: this._data.search.res,
                            show_only_matches: e
                        })) : a.isFunction(g) ? g.call(this, c, a.proxy(function(b) {
                            b && b.d && (b = b.d), this._load_nodes(a.isArray(b) ? a.vakata.array_unique(b) : [], function() {
                                this.search(c, !0, e)
                            }, !0)
                        }, this)) : (g = a.extend({}, g), g.data || (g.data = {}), g.data.str = c, a.ajax(g).fail(a.proxy(function() {
                            this._data.core.last_error = {
                                error: "ajax",
                                plugin: "search",
                                id: "search_01",
                                reason: "Could not load search parents",
                                data: JSON.stringify(g)
                            }, this.settings.core.error.call(this, this._data.core.last_error)
                        }, this)).done(a.proxy(function(b) {
                            b && b.d && (b = b.d), this._load_nodes(a.isArray(b) ? a.vakata.array_unique(b) : [], function() {
                                this.search(c, !0, e)
                            }, !0)
                        }, this)))
                    }, this.clear_search = function() {
                        this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search"), this.settings.search.close_opened_onclear && this.close_node(this._data.search.opn, 0), this.trigger("clear_search", {
                            nodes: this._data.search.dom,
                            str: this._data.search.str,
                            res: this._data.search.res
                        }), this._data.search.str = "", this._data.search.res = [], this._data.search.opn = [], this._data.search.dom = a()
                    }, this._search_open = function(b) {
                        var c = this;
                        a.each(b.concat([]), function(d, e) {
                            if ("#" === e) return !0;
                            try {
                                e = a("#" + e.replace(a.jstree.idregex, "\\$&"), c.element)
                            } catch (f) {}
                            e && e.length && c.is_closed(e) && (c._data.search.opn.push(e[0].id), c.open_node(e, function() {
                                c._search_open(b)
                            }, 0))
                        })
                    }
                },
                function(a) {
                    a.vakata.search = function(a, b, c) {
                        c = c || {}, c.fuzzy !== !1 && (c.fuzzy = !0), a = c.caseSensitive ? a : a.toLowerCase();
                        var d, e, f, g, h = c.location || 0,
                            i = c.distance || 100,
                            j = c.threshold || .6,
                            k = a.length;
                        return k > 32 && (c.fuzzy = !1), c.fuzzy && (d = 1 << k - 1, e = function() {
                            var b = {},
                                c = 0;
                            for (c = 0; k > c; c++) b[a.charAt(c)] = 0;
                            for (c = 0; k > c; c++) b[a.charAt(c)] |= 1 << k - c - 1;
                            return b
                        }(), f = function(a, b) {
                            var c = a / k,
                                d = Math.abs(h - b);
                            return i ? c + d / i : d ? 1 : c
                        }), g = function(b) {
                            if (b = c.caseSensitive ? b : b.toLowerCase(), a === b || -1 !== b.indexOf(a)) return {
                                isMatch: !0,
                                score: 0
                            };
                            if (!c.fuzzy) return {
                                isMatch: !1,
                                score: 1
                            };
                            var g, i, l, m, n, o, p, q, r, s = b.length,
                                t = j,
                                u = b.indexOf(a, h),
                                v = k + s,
                                w = 1,
                                x = [];
                            for (-1 !== u && (t = Math.min(f(0, u), t), u = b.lastIndexOf(a, h + k), -1 !== u && (t = Math.min(f(0, u), t))), u = -1, g = 0; k > g; g++) {
                                for (l = 0, m = v; m > l;) f(g, h + m) <= t ? l = m : v = m, m = Math.floor((v - l) / 2 + l);
                                for (v = m, o = Math.max(1, h - m + 1), p = Math.min(h + m, s) + k, q = new Array(p + 2), q[p + 1] = (1 << g) - 1, i = p; i >= o; i--)
                                    if (r = e[b.charAt(i - 1)], q[i] = 0 === g ? (q[i + 1] << 1 | 1) & r : (q[i + 1] << 1 | 1) & r | ((n[i + 1] | n[i]) << 1 | 1) | n[i + 1], q[i] & d && (w = f(g, i - 1), t >= w)) {
                                        if (t = w, u = i - 1, x.push(u), !(u > h)) break;
                                        o = Math.max(1, 2 * h - u)
                                    }
                                if (f(g + 1, h) > t) break;
                                n = q
                            }
                            return {
                                isMatch: u >= 0,
                                score: w
                            }
                        }, b === !0 ? {
                            search: g
                        } : g(b)
                    }
                }(a), a.jstree.defaults.sort = function(a, b) {
                    return this.get_text(a) > this.get_text(b) ? 1 : -1
                }, a.jstree.plugins.sort = function(b, c) {
                    this.bind = function() {
                        c.bind.call(this), this.element.on("model.jstree", a.proxy(function(a, b) {
                            this.sort(b.parent, !0)
                        }, this)).on("rename_node.jstree create_node.jstree", a.proxy(function(a, b) {
                            this.sort(b.parent || b.node.parent, !1), this.redraw_node(b.parent || b.node.parent, !0)
                        }, this)).on("move_node.jstree copy_node.jstree", a.proxy(function(a, b) {
                            this.sort(b.parent, !1), this.redraw_node(b.parent, !0)
                        }, this))
                    }, this.sort = function(b, c) {
                        var d, e;
                        if (b = this.get_node(b), b && b.children && b.children.length && (b.children.sort(a.proxy(this.settings.sort, this)), c))
                            for (d = 0, e = b.children_d.length; e > d; d++) this.sort(b.children_d[d], !1)
                    }
                };
            var q = !1;
            a.jstree.defaults.state = {
                    key: "jstree",
                    events: "changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",
                    ttl: !1,
                    filter: !1
                }, a.jstree.plugins.state = function(b, c) {
                    this.bind = function() {
                        c.bind.call(this);
                        var b = a.proxy(function() {
                            this.element.on(this.settings.state.events, a.proxy(function() {
                                q && clearTimeout(q), q = setTimeout(a.proxy(function() {
                                    this.save_state()
                                }, this), 100)
                            }, this)), this.trigger("state_ready")
                        }, this);
                        this.element.on("ready.jstree", a.proxy(function() {
                            this.element.one("restore_state.jstree", b), this.restore_state() || b()
                        }, this))
                    }, this.save_state = function() {
                        var b = {
                            state: this.get_state(),
                            ttl: this.settings.state.ttl,
                            sec: +new Date
                        };
                        a.vakata.storage.set(this.settings.state.key, JSON.stringify(b))
                    }, this.restore_state = function() {
                        var b = a.vakata.storage.get(this.settings.state.key);
                        if (b) try {
                            b = JSON.parse(b)
                        } catch (c) {
                            return !1
                        }
                        return b && b.ttl && b.sec && +new Date - b.sec > b.ttl ? !1 : (b && b.state && (b = b.state), b && a.isFunction(this.settings.state.filter) && (b = this.settings.state.filter.call(this, b)), b ? (this.element.one("set_state.jstree", function(c, d) {
                            d.instance.trigger("restore_state", {
                                state: a.extend(!0, {}, b)
                            })
                        }), this.set_state(b), !0) : !1)
                    }, this.clear_state = function() {
                        return a.vakata.storage.del(this.settings.state.key)
                    }
                },
                function(a) {
                    a.vakata.storage = {
                        set: function(a, b) {
                            return window.localStorage.setItem(a, b)
                        },
                        get: function(a) {
                            return window.localStorage.getItem(a)
                        },
                        del: function(a) {
                            return window.localStorage.removeItem(a)
                        }
                    }
                }(a), a.jstree.defaults.types = {
                    "#": {},
                    "default": {}
                }, a.jstree.plugins.types = function(c, d) {
                    this.init = function(a, c) {
                        var e, f;
                        if (c && c.types && c.types["default"])
                            for (e in c.types)
                                if ("default" !== e && "#" !== e && c.types.hasOwnProperty(e))
                                    for (f in c.types["default"]) c.types["default"].hasOwnProperty(f) && c.types[e][f] === b && (c.types[e][f] = c.types["default"][f]);
                        d.init.call(this, a, c), this._model.data["#"].type = "#"
                    }, this.refresh = function(a, b) {
                        d.refresh.call(this, a, b), this._model.data["#"].type = "#"
                    }, this.bind = function() {
                        this.element.on("model.jstree", a.proxy(function(a, c) {
                            var d, e, f = this._model.data,
                                g = c.nodes,
                                h = this.settings.types,
                                i = "default";
                            for (d = 0, e = g.length; e > d; d++) i = "default", f[g[d]].original && f[g[d]].original.type && h[f[g[d]].original.type] && (i = f[g[d]].original.type), f[g[d]].data && f[g[d]].data.jstree && f[g[d]].data.jstree.type && h[f[g[d]].data.jstree.type] && (i = f[g[d]].data.jstree.type), f[g[d]].type = i, f[g[d]].icon === !0 && h[i].icon !== b && (f[g[d]].icon = h[i].icon);
                            f["#"].type = "#"
                        }, this)), d.bind.call(this)
                    }, this.get_json = function(b, c, e) {
                        var f, g, h = this._model.data,
                            i = c ? a.extend(!0, {}, c, {
                                no_id: !1
                            }) : {},
                            j = d.get_json.call(this, b, i, e);
                        if (j === !1) return !1;
                        if (a.isArray(j))
                            for (f = 0, g = j.length; g > f; f++) j[f].type = j[f].id && h[j[f].id] && h[j[f].id].type ? h[j[f].id].type : "default", c && c.no_id && (delete j[f].id, j[f].li_attr && j[f].li_attr.id && delete j[f].li_attr.id, j[f].a_attr && j[f].a_attr.id && delete j[f].a_attr.id);
                        else j.type = j.id && h[j.id] && h[j.id].type ? h[j.id].type : "default", c && c.no_id && (j = this._delete_ids(j));
                        return j
                    }, this._delete_ids = function(b) {
                        if (a.isArray(b)) {
                            for (var c = 0, d = b.length; d > c; c++) b[c] = this._delete_ids(b[c]);
                            return b
                        }
                        return delete b.id, b.li_attr && b.li_attr.id && delete b.li_attr.id, b.a_attr && b.a_attr.id && delete b.a_attr.id, b.children && a.isArray(b.children) && (b.children = this._delete_ids(b.children)), b
                    }, this.check = function(c, e, f, g, h) {
                        if (d.check.call(this, c, e, f, g, h) === !1) return !1;
                        e = e && e.id ? e : this.get_node(e), f = f && f.id ? f : this.get_node(f);
                        var i, j, k, l, m = e && e.id ? a.jstree.reference(e.id) : null;
                        switch (m = m && m._model && m._model.data ? m._model.data : null, c) {
                            case "create_node":
                            case "move_node":
                            case "copy_node":
                                if ("move_node" !== c || -1 === a.inArray(e.id, f.children)) {
                                    if (i = this.get_rules(f), i.max_children !== b && -1 !== i.max_children && i.max_children === f.children.length) return this._data.core.last_error = {
                                        error: "check",
                                        plugin: "types",
                                        id: "types_01",
                                        reason: "max_children prevents function: " + c,
                                        data: JSON.stringify({
                                            chk: c,
                                            pos: g,
                                            obj: e && e.id ? e.id : !1,
                                            par: f && f.id ? f.id : !1
                                        })
                                    }, !1;
                                    if (i.valid_children !== b && -1 !== i.valid_children && -1 === a.inArray(e.type || "default", i.valid_children)) return this._data.core.last_error = {
                                        error: "check",
                                        plugin: "types",
                                        id: "types_02",
                                        reason: "valid_children prevents function: " + c,
                                        data: JSON.stringify({
                                            chk: c,
                                            pos: g,
                                            obj: e && e.id ? e.id : !1,
                                            par: f && f.id ? f.id : !1
                                        })
                                    }, !1;
                                    if (m && e.children_d && e.parents) {
                                        for (j = 0, k = 0, l = e.children_d.length; l > k; k++) j = Math.max(j, m[e.children_d[k]].parents.length);
                                        j = j - e.parents.length + 1
                                    }(0 >= j || j === b) && (j = 1);
                                    do {
                                        if (i.max_depth !== b && -1 !== i.max_depth && i.max_depth < j) return this._data.core.last_error = {
                                            error: "check",
                                            plugin: "types",
                                            id: "types_03",
                                            reason: "max_depth prevents function: " + c,
                                            data: JSON.stringify({
                                                chk: c,
                                                pos: g,
                                                obj: e && e.id ? e.id : !1,
                                                par: f && f.id ? f.id : !1
                                            })
                                        }, !1;
                                        f = this.get_node(f.parent), i = this.get_rules(f), j++
                                    } while (f)
                                }
                        }
                        return !0
                    }, this.get_rules = function(a) {
                        if (a = this.get_node(a), !a) return !1;
                        var c = this.get_type(a, !0);
                        return c.max_depth === b && (c.max_depth = -1), c.max_children === b && (c.max_children = -1), c.valid_children === b && (c.valid_children = -1), c
                    }, this.get_type = function(b, c) {
                        return b = this.get_node(b), b ? c ? a.extend({
                            type: b.type
                        }, this.settings.types[b.type]) : b.type : !1
                    }, this.set_type = function(c, d) {
                        var e, f, g, h, i;
                        if (a.isArray(c)) {
                            for (c = c.slice(), f = 0, g = c.length; g > f; f++) this.set_type(c[f], d);
                            return !0
                        }
                        return e = this.settings.types, c = this.get_node(c), e[d] && c ? (h = c.type, i = this.get_icon(c), c.type = d, (i === !0 || e[h] && e[h].icon !== b && i === e[h].icon) && this.set_icon(c, e[d].icon !== b ? e[d].icon : !0), !0) : !1
                    }
                }, a.jstree.defaults.unique = {
                    case_sensitive: !1,
                    duplicate: function(a, b) {
                        return a + " (" + b + ")"
                    }
                }, a.jstree.plugins.unique = function(c, d) {
                    this.check = function(b, c, e, f, g) {
                        if (d.check.call(this, b, c, e, f, g) === !1) return !1;
                        if (c = c && c.id ? c : this.get_node(c), e = e && e.id ? e : this.get_node(e), !e || !e.children) return !0;
                        var h, i, j = "rename_node" === b ? f : c.text,
                            k = [],
                            l = this.settings.unique.case_sensitive,
                            m = this._model.data;
                        for (h = 0, i = e.children.length; i > h; h++) k.push(l ? m[e.children[h]].text : m[e.children[h]].text.toLowerCase());
                        switch (l || (j = j.toLowerCase()), b) {
                            case "delete_node":
                                return !0;
                            case "rename_node":
                                return h = -1 === a.inArray(j, k) || c.text && c.text[l ? "toString" : "toLowerCase"]() === j, h || (this._data.core.last_error = {
                                    error: "check",
                                    plugin: "unique",
                                    id: "unique_01",
                                    reason: "Child with name " + j + " already exists. Preventing: " + b,
                                    data: JSON.stringify({
                                        chk: b,
                                        pos: f,
                                        obj: c && c.id ? c.id : !1,
                                        par: e && e.id ? e.id : !1
                                    })
                                }), h;
                            case "create_node":
                                return h = -1 === a.inArray(j, k), h || (this._data.core.last_error = {
                                    error: "check",
                                    plugin: "unique",
                                    id: "unique_04",
                                    reason: "Child with name " + j + " already exists. Preventing: " + b,
                                    data: JSON.stringify({
                                        chk: b,
                                        pos: f,
                                        obj: c && c.id ? c.id : !1,
                                        par: e && e.id ? e.id : !1
                                    })
                                }), h;
                            case "copy_node":
                                return h = -1 === a.inArray(j, k), h || (this._data.core.last_error = {
                                    error: "check",
                                    plugin: "unique",
                                    id: "unique_02",
                                    reason: "Child with name " + j + " already exists. Preventing: " + b,
                                    data: JSON.stringify({
                                        chk: b,
                                        pos: f,
                                        obj: c && c.id ? c.id : !1,
                                        par: e && e.id ? e.id : !1
                                    })
                                }), h;
                            case "move_node":
                                return h = c.parent === e.id || -1 === a.inArray(j, k), h || (this._data.core.last_error = {
                                    error: "check",
                                    plugin: "unique",
                                    id: "unique_03",
                                    reason: "Child with name " + j + " already exists. Preventing: " + b,
                                    data: JSON.stringify({
                                        chk: b,
                                        pos: f,
                                        obj: c && c.id ? c.id : !1,
                                        par: e && e.id ? e.id : !1
                                    })
                                }), h
                        }
                        return !0
                    }, this.create_node = function(c, e, f, g, h) {
                        if (!e || e.text === b) {
                            if (null === c && (c = "#"), c = this.get_node(c), !c) return d.create_node.call(this, c, e, f, g, h);
                            if (f = f === b ? "last" : f, !f.toString().match(/^(before|after)$/) && !h && !this.is_loaded(c)) return d.create_node.call(this, c, e, f, g, h);
                            e || (e = {});
                            var i, j, k, l, m, n = this._model.data,
                                o = this.settings.unique.case_sensitive,
                                p = this.settings.unique.duplicate;
                            for (j = i = this.get_string("New node"), k = [], l = 0, m = c.children.length; m > l; l++) k.push(o ? n[c.children[l]].text : n[c.children[l]].text.toLowerCase());
                            for (l = 1; - 1 !== a.inArray(o ? j : j.toLowerCase(), k);) j = p.call(this, i, ++l).toString();
                            e.text = j
                        }
                        return d.create_node.call(this, c, e, f, g, h)
                    }
                };
            var r = document.createElement("DIV");
            r.setAttribute("unselectable", "on"), r.setAttribute("role", "presentation"), r.className = "jstree-wholerow", r.innerHTML = "&#160;", a.jstree.plugins.wholerow = function(b, c) {
                    this.bind = function() {
                        c.bind.call(this), this.element.on("ready.jstree set_state.jstree", a.proxy(function() {
                            this.hide_dots()
                        }, this)).on("init.jstree loading.jstree ready.jstree", a.proxy(function() {
                            this.get_container_ul().addClass("jstree-wholerow-ul")
                        }, this)).on("deselect_all.jstree", a.proxy(function() {
                            this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")
                        }, this)).on("changed.jstree", a.proxy(function(a, b) {
                            this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
                            var c, d, e = !1;
                            for (c = 0, d = b.selected.length; d > c; c++) e = this.get_node(b.selected[c], !0), e && e.length && e.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")
                        }, this)).on("open_node.jstree", a.proxy(function(a, b) {
                            this.get_node(b.node, !0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")
                        }, this)).on("hover_node.jstree dehover_node.jstree", a.proxy(function(a, b) {
                            "hover_node" === a.type && this.is_disabled(b.node) || this.get_node(b.node, !0).children(".jstree-wholerow")["hover_node" === a.type ? "addClass" : "removeClass"]("jstree-wholerow-hovered")
                        }, this)).on("contextmenu.jstree", ".jstree-wholerow", a.proxy(function(b) {
                            b.preventDefault();
                            var c = a.Event("contextmenu", {
                                metaKey: b.metaKey,
                                ctrlKey: b.ctrlKey,
                                altKey: b.altKey,
                                shiftKey: b.shiftKey,
                                pageX: b.pageX,
                                pageY: b.pageY
                            });
                            a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c)
                        }, this)).on("click.jstree", ".jstree-wholerow", function(b) {
                            b.stopImmediatePropagation();
                            var c = a.Event("click", {
                                metaKey: b.metaKey,
                                ctrlKey: b.ctrlKey,
                                altKey: b.altKey,
                                shiftKey: b.shiftKey
                            });
                            a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()
                        }).on("click.jstree", ".jstree-leaf > .jstree-ocl", a.proxy(function(b) {
                            b.stopImmediatePropagation();
                            var c = a.Event("click", {
                                metaKey: b.metaKey,
                                ctrlKey: b.ctrlKey,
                                altKey: b.altKey,
                                shiftKey: b.shiftKey
                            });
                            a(b.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(c).focus()
                        }, this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", a.proxy(function(a) {
                            return a.stopImmediatePropagation(), this.is_disabled(a.currentTarget) || this.hover_node(a.currentTarget), !1
                        }, this)).on("mouseleave.jstree", ".jstree-node", a.proxy(function(a) {
                            this.dehover_node(a.currentTarget)
                        }, this))
                    }, this.teardown = function() {
                        this.settings.wholerow && this.element.find(".jstree-wholerow").remove(), c.teardown.call(this)
                    }, this.redraw_node = function(b) {
                        if (b = c.redraw_node.apply(this, arguments)) {
                            var d = r.cloneNode(!0); - 1 !== a.inArray(b.id, this._data.core.selected) && (d.className += " jstree-wholerow-clicked"), this._data.core.focused && this._data.core.focused === b.id && (d.className += " jstree-wholerow-hovered"), b.insertBefore(d, b.childNodes[0])
                        }
                        return b
                    }
                },
                function(a) {
                    if (document.registerElement && Object && Object.create) {
                        var b = Object.create(HTMLElement.prototype);
                        b.createdCallback = function() {
                            var b, c = {
                                core: {},
                                plugins: []
                            };
                            for (b in a.jstree.plugins) a.jstree.plugins.hasOwnProperty(b) && this.attributes[b] && (c.plugins.push(b), this.getAttribute(b) && JSON.parse(this.getAttribute(b)) && (c[b] = JSON.parse(this.getAttribute(b))));
                            for (b in a.jstree.defaults.core) a.jstree.defaults.core.hasOwnProperty(b) && this.attributes[b] && (c.core[b] = JSON.parse(this.getAttribute(b)) || this.getAttribute(b));
                            jQuery(this).jstree(c)
                        };
                        try {
                            document.registerElement("vakata-jstree", {
                                prototype: b
                            })
                        } catch (c) {}
                    }
                }(jQuery)
        }
    }),
    function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"),
                d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function d() {
            var a = t.elements;
            return "string" == typeof a ? a.split(" ") : a
        }

        function e(a, b) {
            var c = t.elements;
            "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b)
        }

        function f(a) {
            var b = s[a[q]];
            return b || (b = {}, r++, a[q] = r, s[r] = b), b
        }

        function g(a, c, d) {
            if (c || (c = b), l) return c.createElement(a);
            d || (d = f(c));
            var e;
            return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
        }

        function h(a, c) {
            if (a || (a = b), l) return a.createDocumentFragment();
            c = c || f(a);
            for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) e.createElement(h[g]);
            return e
        }

        function i(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return t.shivMethods ? g(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(t, b.frag)
        }

        function j(a) {
            a || (a = b);
            var d = f(a);
            return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a
        }
        var k, l, m = "3.7.2",
            n = a.html5 || {},
            o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            q = "_html5shiv",
            r = 0,
            s = {};
        ! function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                }()
            } catch (c) {
                k = !0, l = !0
            }
        }();
        var t = {
            elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: m,
            shivCSS: n.shivCSS !== !1,
            supportsUnknownElements: l,
            shivMethods: n.shivMethods !== !1,
            type: "default",
            shivDocument: j,
            createElement: g,
            createDocumentFragment: h,
            addElements: e
        };
        a.html5 = t, j(b)
    }(this, document),
    function(a) {
        "function" == typeof define && define.amd ? define(a) : window.purl = a()
    }(function() {
        function a(a, b) {
            for (var c = decodeURI(a), d = p[b ? "strict" : "loose"].exec(c), e = {
                    attr: {},
                    param: {},
                    seg: {}
                }, g = 14; g--;) e.attr[n[g]] = d[g] || "";
            return e.param.query = f(e.attr.query), e.param.fragment = f(e.attr.fragment), e.seg.path = e.attr.path.replace(/^\/+|\/+$/g, "").split("/"), e.seg.fragment = e.attr.fragment.replace(/^\/+|\/+$/g, "").split("/"), e.attr.base = e.attr.host ? (e.attr.protocol ? e.attr.protocol + "://" + e.attr.host : e.attr.host) + (e.attr.port ? ":" + e.attr.port : "") : "", e
        }

        function b(a) {
            var b = a.tagName;
            return "undefined" != typeof b ? m[b.toLowerCase()] : b
        }

        function c(a, b) {
            if (0 === a[b].length) return a[b] = {};
            var c = {};
            for (var d in a[b]) c[d] = a[b][d];
            return a[b] = c, c
        }

        function d(a, b, e, f) {
            var g = a.shift();
            if (g) {
                var h = b[e] = b[e] || [];
                "]" == g ? j(h) ? "" !== f && h.push(f) : "object" == typeof h ? h[k(h).length] = f : h = b[e] = [b[e], f] : ~g.indexOf("]") ? (g = g.substr(0, g.length - 1), !q.test(g) && j(h) && (h = c(b, e)), d(a, h, g, f)) : (!q.test(g) && j(h) && (h = c(b, e)), d(a, h, g, f))
            } else j(b[e]) ? b[e].push(f) : b[e] = "object" == typeof b[e] ? f : "undefined" == typeof b[e] ? f : [b[e], f]
        }

        function e(a, b, c) {
            if (~b.indexOf("]")) {
                var e = b.split("[");
                d(e, a, "base", c)
            } else {
                if (!q.test(b) && j(a.base)) {
                    var f = {};
                    for (var h in a.base) f[h] = a.base[h];
                    a.base = f
                }
                "" !== b && g(a.base, b, c)
            }
            return a
        }

        function f(a) {
            return i(String(a).split(/&|;/), function(a, b) {
                try {
                    b = decodeURIComponent(b.replace(/\+/g, " "))
                } catch (c) {}
                var d = b.indexOf("="),
                    f = h(b),
                    g = b.substr(0, f || d),
                    i = b.substr(f || d, b.length);
                return i = i.substr(i.indexOf("=") + 1, i.length), "" === g && (g = b, i = ""), e(a, g, i)
            }, {
                base: {}
            }).base
        }

        function g(a, b, c) {
            var d = a[b];
            "undefined" == typeof d ? a[b] = c : j(d) ? d.push(c) : a[b] = [d, c]
        }

        function h(a) {
            for (var b, c, d = a.length, e = 0; d > e; ++e)
                if (c = a[e], "]" == c && (b = !1), "[" == c && (b = !0), "=" == c && !b) return e
        }

        function i(a, b) {
            for (var c = 0, d = a.length >> 0, e = arguments[2]; d > c;) c in a && (e = b.call(void 0, e, a[c], c, a)), ++c;
            return e
        }

        function j(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function k(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b
        }

        function l(b, c) {
            return 1 === arguments.length && b === !0 && (c = !0, b = void 0), c = c || !1, b = b || window.location.toString(), {
                data: a(b, c),
                attr: function(a) {
                    return a = o[a] || a, "undefined" != typeof a ? this.data.attr[a] : this.data.attr
                },
                param: function(a) {
                    return "undefined" != typeof a ? this.data.param.query[a] : this.data.param.query
                },
                fparam: function(a) {
                    return "undefined" != typeof a ? this.data.param.fragment[a] : this.data.param.fragment
                },
                segment: function(a) {
                    return "undefined" == typeof a ? this.data.seg.path : (a = 0 > a ? this.data.seg.path.length + a : a - 1, this.data.seg.path[a])
                },
                fsegment: function(a) {
                    return "undefined" == typeof a ? this.data.seg.fragment : (a = 0 > a ? this.data.seg.fragment.length + a : a - 1, this.data.seg.fragment[a])
                }
            }
        }
        var m = {
                a: "href",
                img: "src",
                form: "action",
                base: "href",
                script: "src",
                iframe: "src",
                link: "href"
            },
            n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
            o = {
                anchor: "fragment"
            },
            p = {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            },
            q = /^[0-9]+$/;
        return l.jQuery = function(a) {
            null != a && (a.fn.url = function(c) {
                var d = "";
                return this.length && (d = a(this).attr(b(this[0])) || ""), l(d, c)
            }, a.url = l)
        }, l.jQuery(window.jQuery), l
    });