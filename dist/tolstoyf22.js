(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const T = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Map(), he = new window.MutationObserver((_) => {
  for (const e of _)
    if (e.type === "attributes") {
      const { target: t, attributeName: o, oldValue: l } = e;
      if (E.has(t)) {
        let [n, i] = E.get(t);
        if (i.includes(o) || i.length == 0) {
          const f = t.getAttribute(o);
          n(o, l, f, t);
        }
      }
    }
  T.forEach((e) => e());
});
he.observe(document, {
  attributes: !0,
  childList: !0,
  subtree: !0,
  attributeOldValue: !0
});
function ve(_, e) {
  setTimeout(t), T.add(t);
  function t() {
    document.querySelectorAll(_).forEach((o) => {
      if (!E.has(o)) {
        const { connected: l = () => {
        }, disconnected: n = () => {
        }, attributeChanged: i = () => {
        }, observedAttributes: f = [] } = e(o);
        E.set(o, [i, f]), l(), me(_, o, () => n());
      }
    });
  }
}
function me(_, e, t) {
  setTimeout(o), T.add(o);
  function o() {
    e && document.contains(e) && e.matches(_) || (E.delete(e), T.delete(o), t());
  }
}
var L, u, ee, S, _e, V, F = {}, te = [], ye = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(_, e) {
  for (var t in e)
    _[t] = e[t];
  return _;
}
function ne(_) {
  var e = _.parentNode;
  e && e.removeChild(_);
}
function oe(_, e, t) {
  var o, l, n, i = {};
  for (n in e)
    n == "key" ? o = e[n] : n == "ref" ? l = e[n] : i[n] = e[n];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? L.call(arguments, 2) : t), typeof _ == "function" && _.defaultProps != null)
    for (n in _.defaultProps)
      i[n] === void 0 && (i[n] = _.defaultProps[n]);
  return P(_, i, o, l, null);
}
function P(_, e, t, o, l) {
  var n = { type: _, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l ?? ++ee };
  return l == null && u.vnode != null && u.vnode(n), n;
}
function U(_) {
  return _.children;
}
function H(_, e) {
  this.props = _, this.context = e;
}
function C(_, e) {
  if (e == null)
    return _.__ ? C(_.__, _.__.__k.indexOf(_) + 1) : null;
  for (var t; e < _.__k.length; e++)
    if ((t = _.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof _.type == "function" ? C(_) : null;
}
function re(_) {
  var e, t;
  if ((_ = _.__) != null && _.__c != null) {
    for (_.__e = _.__c.base = null, e = 0; e < _.__k.length; e++)
      if ((t = _.__k[e]) != null && t.__e != null) {
        _.__e = _.__c.base = t.__e;
        break;
      }
    return re(_);
  }
}
function R(_) {
  (!_.__d && (_.__d = !0) && S.push(_) && !M.__r++ || V !== u.debounceRendering) && ((V = u.debounceRendering) || _e)(M);
}
function M() {
  for (var _; M.__r = S.length; )
    _ = S.sort(function(e, t) {
      return e.__v.__b - t.__v.__b;
    }), S = [], _.some(function(e) {
      var t, o, l, n, i, f;
      e.__d && (i = (n = (t = e).__v).__e, (f = t.__P) && (o = [], (l = k({}, n)).__v = n.__v + 1, q(f, n, l, t.__n, f.ownerSVGElement !== void 0, n.__h != null ? [i] : null, o, i ?? C(n), n.__h), ue(o, n), n.__e != i && re(n)));
    });
}
function le(_, e, t, o, l, n, i, f, d, p) {
  var r, h, s, c, a, $, v, m = o && o.__k || te, y = m.length;
  for (t.__k = [], r = 0; r < e.length; r++)
    if ((c = t.__k[r] = (c = e[r]) == null || typeof c == "boolean" ? null : typeof c == "string" || typeof c == "number" || typeof c == "bigint" ? P(null, c, null, null, c) : Array.isArray(c) ? P(U, { children: c }, null, null, null) : c.__b > 0 ? P(c.type, c.props, c.key, null, c.__v) : c) != null) {
      if (c.__ = t, c.__b = t.__b + 1, (s = m[r]) === null || s && c.key == s.key && c.type === s.type)
        m[r] = void 0;
      else
        for (h = 0; h < y; h++) {
          if ((s = m[h]) && c.key == s.key && c.type === s.type) {
            m[h] = void 0;
            break;
          }
          s = null;
        }
      q(_, c, s = s || F, l, n, i, f, d, p), a = c.__e, (h = c.ref) && s.ref != h && (v || (v = []), s.ref && v.push(s.ref, null, c), v.push(h, c.__c || a, c)), a != null ? ($ == null && ($ = a), typeof c.type == "function" && c.__k === s.__k ? c.__d = d = ie(c, d, _) : d = ce(_, c, s, m, a, d), typeof t.type == "function" && (t.__d = d)) : d && s.__e == d && d.parentNode != _ && (d = C(s));
    }
  for (t.__e = $, r = y; r--; )
    m[r] != null && (typeof t.type == "function" && m[r].__e != null && m[r].__e == t.__d && (t.__d = C(o, r + 1)), se(m[r], m[r]));
  if (v)
    for (r = 0; r < v.length; r++)
      fe(v[r], v[++r], v[++r]);
}
function ie(_, e, t) {
  for (var o, l = _.__k, n = 0; l && n < l.length; n++)
    (o = l[n]) && (o.__ = _, e = typeof o.type == "function" ? ie(o, e, t) : ce(t, o, o, l, o.__e, e));
  return e;
}
function ce(_, e, t, o, l, n) {
  var i, f, d;
  if (e.__d !== void 0)
    i = e.__d, e.__d = void 0;
  else if (t == null || l != n || l.parentNode == null)
    e:
      if (n == null || n.parentNode !== _)
        _.appendChild(l), i = null;
      else {
        for (f = n, d = 0; (f = f.nextSibling) && d < o.length; d += 2)
          if (f == l)
            break e;
        _.insertBefore(l, n), i = n;
      }
  return i !== void 0 ? i : l.nextSibling;
}
function be(_, e, t, o, l) {
  var n;
  for (n in t)
    n === "children" || n === "key" || n in e || N(_, n, null, t[n], o);
  for (n in e)
    l && typeof e[n] != "function" || n === "children" || n === "key" || n === "value" || n === "checked" || t[n] === e[n] || N(_, n, e[n], t[n], o);
}
function j(_, e, t) {
  e[0] === "-" ? _.setProperty(e, t) : _[e] = t == null ? "" : typeof t != "number" || ye.test(e) ? t : t + "px";
}
function N(_, e, t, o, l) {
  var n;
  e:
    if (e === "style")
      if (typeof t == "string")
        _.style.cssText = t;
      else {
        if (typeof o == "string" && (_.style.cssText = o = ""), o)
          for (e in o)
            t && e in t || j(_.style, e, "");
        if (t)
          for (e in t)
            o && t[e] === o[e] || j(_.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      n = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in _ ? e.toLowerCase().slice(2) : e.slice(2), _.l || (_.l = {}), _.l[e + n] = t, t ? o || _.addEventListener(e, n ? z : B, n) : _.removeEventListener(e, n ? z : B, n);
    else if (e !== "dangerouslySetInnerHTML") {
      if (l)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in _)
        try {
          _[e] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t != null && (t !== !1 || e[0] === "a" && e[1] === "r") ? _.setAttribute(e, t) : _.removeAttribute(e));
    }
}
function B(_) {
  this.l[_.type + !1](u.event ? u.event(_) : _);
}
function z(_) {
  this.l[_.type + !0](u.event ? u.event(_) : _);
}
function q(_, e, t, o, l, n, i, f, d) {
  var p, r, h, s, c, a, $, v, m, y, A, g = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (d = t.__h, f = e.__e = t.__e, e.__h = null, n = [f]), (p = u.__b) && p(e);
  try {
    e:
      if (typeof g == "function") {
        if (v = e.props, m = (p = g.contextType) && o[p.__c], y = p ? m ? m.props.value : p.__ : o, t.__c ? $ = (r = e.__c = t.__c).__ = r.__E : ("prototype" in g && g.prototype.render ? e.__c = r = new g(v, y) : (e.__c = r = new H(v, y), r.constructor = g, r.render = ke), m && m.sub(r), r.props = v, r.state || (r.state = {}), r.context = y, r.__n = o, h = r.__d = !0, r.__h = []), r.__s == null && (r.__s = r.state), g.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = k({}, r.__s)), k(r.__s, g.getDerivedStateFromProps(v, r.__s))), s = r.props, c = r.state, h)
          g.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && v !== s && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, y), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, y) === !1 || e.__v === t.__v) {
            r.props = v, r.state = r.__s, e.__v !== t.__v && (r.__d = !1), r.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(x) {
              x && (x.__ = e);
            }), r.__h.length && i.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, y), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(s, c, a);
          });
        }
        r.context = y, r.props = v, r.state = r.__s, (p = u.__r) && p(e), r.__d = !1, r.__v = e, r.__P = _, p = r.render(r.props, r.state, r.context), r.state = r.__s, r.getChildContext != null && (o = k(k({}, o), r.getChildContext())), h || r.getSnapshotBeforeUpdate == null || (a = r.getSnapshotBeforeUpdate(s, c)), A = p != null && p.type === U && p.key == null ? p.props.children : p, le(_, Array.isArray(A) ? A : [A], e, t, o, l, n, i, f, d), r.base = e.__e, e.__h = null, r.__h.length && i.push(r), $ && (r.__E = r.__ = null), r.__e = !1;
      } else
        n == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = ge(t.__e, e, t, o, l, n, i, d);
    (p = u.diffed) && p(e);
  } catch (x) {
    e.__v = null, (d || n != null) && (e.__e = f, e.__h = !!d, n[n.indexOf(f)] = null), u.__e(x, e, t);
  }
}
function ue(_, e) {
  u.__c && u.__c(e, _), _.some(function(t) {
    try {
      _ = t.__h, t.__h = [], _.some(function(o) {
        o.call(t);
      });
    } catch (o) {
      u.__e(o, t.__v);
    }
  });
}
function ge(_, e, t, o, l, n, i, f) {
  var d, p, r, h = t.props, s = e.props, c = e.type, a = 0;
  if (c === "svg" && (l = !0), n != null) {
    for (; a < n.length; a++)
      if ((d = n[a]) && "setAttribute" in d == !!c && (c ? d.localName === c : d.nodeType === 3)) {
        _ = d, n[a] = null;
        break;
      }
  }
  if (_ == null) {
    if (c === null)
      return document.createTextNode(s);
    _ = l ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, s.is && s), n = null, f = !1;
  }
  if (c === null)
    h === s || f && _.data === s || (_.data = s);
  else {
    if (n = n && L.call(_.childNodes), p = (h = t.props || F).dangerouslySetInnerHTML, r = s.dangerouslySetInnerHTML, !f) {
      if (n != null)
        for (h = {}, a = 0; a < _.attributes.length; a++)
          h[_.attributes[a].name] = _.attributes[a].value;
      (r || p) && (r && (p && r.__html == p.__html || r.__html === _.innerHTML) || (_.innerHTML = r && r.__html || ""));
    }
    if (be(_, s, h, l, f), r)
      e.__k = [];
    else if (a = e.props.children, le(_, Array.isArray(a) ? a : [a], e, t, o, l && c !== "foreignObject", n, i, n ? n[0] : t.__k && C(t, 0), f), n != null)
      for (a = n.length; a--; )
        n[a] != null && ne(n[a]);
    f || ("value" in s && (a = s.value) !== void 0 && (a !== _.value || c === "progress" && !a || c === "option" && a !== h.value) && N(_, "value", a, h.value, !1), "checked" in s && (a = s.checked) !== void 0 && a !== _.checked && N(_, "checked", a, h.checked, !1));
  }
  return _;
}
function fe(_, e, t) {
  try {
    typeof _ == "function" ? _(e) : _.current = e;
  } catch (o) {
    u.__e(o, t);
  }
}
function se(_, e, t) {
  var o, l;
  if (u.unmount && u.unmount(_), (o = _.ref) && (o.current && o.current !== _.__e || fe(o, null, e)), (o = _.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (n) {
        u.__e(n, e);
      }
    o.base = o.__P = null;
  }
  if (o = _.__k)
    for (l = 0; l < o.length; l++)
      o[l] && se(o[l], e, typeof _.type != "function");
  t || _.__e == null || ne(_.__e), _.__e = _.__d = void 0;
}
function ke(_, e, t) {
  return this.constructor(_, t);
}
function $e(_, e, t) {
  var o, l, n;
  u.__ && u.__(_, e), l = (o = typeof t == "function") ? null : t && t.__k || e.__k, n = [], q(e, _ = (!o && t || e).__k = oe(U, null, [_]), l || F, F, e.ownerSVGElement !== void 0, !o && t ? [t] : l ? null : e.firstChild ? L.call(e.childNodes) : null, n, !o && t ? t : l ? l.__e : e.firstChild, o), ue(n, _);
}
L = te.slice, u = { __e: function(_, e, t, o) {
  for (var l, n, i; e = e.__; )
    if ((l = e.__c) && !l.__)
      try {
        if ((n = l.constructor) && n.getDerivedStateFromError != null && (l.setState(n.getDerivedStateFromError(_)), i = l.__d), l.componentDidCatch != null && (l.componentDidCatch(_, o || {}), i = l.__d), i)
          return l.__E = l;
      } catch (f) {
        _ = f;
      }
  throw _;
} }, ee = 0, H.prototype.setState = function(_, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof _ == "function" && (_ = _(k({}, t), this.props)), _ && k(t, _), _ != null && this.__v && (e && this.__h.push(e), R(this));
}, H.prototype.forceUpdate = function(_) {
  this.__v && (this.__e = !0, _ && this.__h.push(_), R(this));
}, H.prototype.render = U, S = [], _e = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, M.__r = 0;
var ae, b, G, W = 0, de = [], J = u.__b, K = u.__r, Q = u.diffed, X = u.__c, Y = u.unmount;
function Ce(_, e) {
  u.__h && u.__h(b, _, W || e), W = 0;
  var t = b.__H || (b.__H = { __: [], __h: [] });
  return _ >= t.__.length && t.__.push({}), t.__[_];
}
function we(_) {
  return W = 1, Se(pe, _);
}
function Se(_, e, t) {
  var o = Ce(ae++, 2);
  return o.t = _, o.__c || (o.__ = [t ? t(e) : pe(void 0, e), function(l) {
    var n = o.t(o.__[0], l);
    o.__[0] !== n && (o.__ = [n, o.__[1]], o.__c.setState({}));
  }], o.__c = b), o.__;
}
function Ee() {
  for (var _; _ = de.shift(); )
    if (_.__P)
      try {
        _.__H.__h.forEach(D), _.__H.__h.forEach(I), _.__H.__h = [];
      } catch (e) {
        _.__H.__h = [], u.__e(e, _.__v);
      }
}
u.__b = function(_) {
  b = null, J && J(_);
}, u.__r = function(_) {
  K && K(_), ae = 0;
  var e = (b = _.__c).__H;
  e && (e.__h.forEach(D), e.__h.forEach(I), e.__h = []);
}, u.diffed = function(_) {
  Q && Q(_);
  var e = _.__c;
  e && e.__H && e.__H.__h.length && (de.push(e) !== 1 && G === u.requestAnimationFrame || ((G = u.requestAnimationFrame) || function(t) {
    var o, l = function() {
      clearTimeout(n), Z && cancelAnimationFrame(o), setTimeout(t);
    }, n = setTimeout(l, 100);
    Z && (o = requestAnimationFrame(l));
  })(Ee)), b = null;
}, u.__c = function(_, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(D), t.__h = t.__h.filter(function(o) {
        return !o.__ || I(o);
      });
    } catch (o) {
      e.some(function(l) {
        l.__h && (l.__h = []);
      }), e = [], u.__e(o, t.__v);
    }
  }), X && X(_, e);
}, u.unmount = function(_) {
  Y && Y(_);
  var e, t = _.__c;
  t && t.__H && (t.__H.__.forEach(function(o) {
    try {
      D(o);
    } catch (l) {
      e = l;
    }
  }), e && u.__e(e, t.__v));
};
var Z = typeof requestAnimationFrame == "function";
function D(_) {
  var e = b, t = _.__c;
  typeof t == "function" && (_.__c = void 0, t()), b = e;
}
function I(_) {
  var e = b;
  _.__c = _.__(), b = e;
}
function pe(_, e) {
  return typeof e == "function" ? e(_) : e;
}
const Ae = (_, e, t = [], o) => {
  const l = (n) => $e(oe(() => e(n)), n);
  ve(_, (n) => ({
    connected: () => l(n),
    disconnected: () => o && o(),
    attributeChanged: () => l(n),
    observedAttributes: t
  }));
};
var O;
function xe(_) {
  return _.children;
}
O = { __e: function(_, e, t, o) {
  for (var l, n, i; e = e.__; )
    if ((l = e.__c) && !l.__)
      try {
        if ((n = l.constructor) && n.getDerivedStateFromError != null && (l.setState(n.getDerivedStateFromError(_)), i = l.__d), l.componentDidCatch != null && (l.componentDidCatch(_, o || {}), i = l.__d), i)
          return l.__E = l;
      } catch (f) {
        _ = f;
      }
  throw _;
} };
var Pe = 0;
function w(_, e, t, o, l) {
  var n, i, f = {};
  for (i in e)
    i == "ref" ? n = e[i] : f[i] = e[i];
  var d = { type: _, props: f, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Pe, __source: l, __self: o };
  if (typeof _ == "function" && (n = _.defaultProps))
    for (i in n)
      f[i] === void 0 && (f[i] = n[i]);
  return O.vnode && O.vnode(d), d;
}
function He({
  count: _ = 0
}) {
  const [e, t] = we(_);
  return w(xe, {
    children: [w("div", {
      children: ["Counter: ", e]
    }), w("button", {
      onClick: () => t(e + 1),
      children: "Increment"
    }), w("button", {
      onClick: () => t(e - 1),
      children: "Decrement"
    })]
  });
}
Ae("my-counter", (_) => w(He, {
  count: parseInt(_.getAttribute("count") || "0")
}), ["count"], () => console.log("counter cleanup"));
