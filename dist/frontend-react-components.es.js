import * as $ from "react";
import Qe, { useRef as Ae, useState as Ze, useCallback as Ee, useContext as Ce, useMemo as qe, useEffect as je, useLayoutEffect as bl, useReducer as ac, createContext as oc, cloneElement as Ri, forwardRef as lc, useImperativeHandle as sc } from "react";
import Ut from "react-dom";
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var On = { exports: {} }, nn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function uc() {
  if (Ta) return nn;
  Ta = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var l in i)
        l !== "key" && (a[l] = i[l]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return nn.Fragment = t, nn.jsx = n, nn.jsxs = n, nn;
}
var rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function cc() {
  return Aa || (Aa = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === fe ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case w:
          return "Fragment";
        case S:
          return "Portal";
        case Q:
          return "Profiler";
        case M:
          return "StrictMode";
        case B:
          return "Suspense";
        case z:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case C:
            return (x.displayName || "Context") + ".Provider";
          case ne:
            return (x._context.displayName || "Context") + ".Consumer";
          case D:
            var U = x.render;
            return x = x.displayName, x || (x = U.displayName || U.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case L:
            return U = x.displayName || null, U !== null ? U : e(x.type) || "Memo";
          case q:
            U = x._payload, x = x._init;
            try {
              return e(x(U));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function n(x) {
      try {
        t(x);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var H = U.error, pe = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return H.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          pe
        ), t(x);
      }
    }
    function r() {
    }
    function i() {
      if (F === 0) {
        X = console.log, W = console.info, J = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, we = console.groupEnd;
        var x = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: x,
          log: x,
          warn: x,
          error: x,
          group: x,
          groupCollapsed: x,
          groupEnd: x
        });
      }
      F++;
    }
    function a() {
      if (F--, F === 0) {
        var x = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: R({}, x, { value: X }),
          info: R({}, x, { value: W }),
          warn: R({}, x, { value: J }),
          error: R({}, x, { value: ee }),
          group: R({}, x, { value: re }),
          groupCollapsed: R({}, x, { value: te }),
          groupEnd: R({}, x, { value: we })
        });
      }
      0 > F && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function o(x) {
      if (_ === void 0)
        try {
          throw Error();
        } catch (H) {
          var U = H.stack.trim().match(/\n( *(at )?)/);
          _ = U && U[1] || "", Oe = -1 < H.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < H.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + _ + x + Oe;
    }
    function l(x, U) {
      if (!x || Fe) return "";
      var H = he.get(x);
      if (H !== void 0) return H;
      Fe = !0, H = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var pe = null;
      pe = ve.H, ve.H = null, i();
      try {
        var Ie = {
          DetermineComponentFrameRoot: function() {
            try {
              if (U) {
                var Pe = function() {
                  throw Error();
                };
                if (Object.defineProperty(Pe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Pe, []);
                  } catch (De) {
                    var tt = De;
                  }
                  Reflect.construct(x, [], Pe);
                } else {
                  try {
                    Pe.call();
                  } catch (De) {
                    tt = De;
                  }
                  x.call(Pe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (De) {
                  tt = De;
                }
                (Pe = x()) && typeof Pe.catch == "function" && Pe.catch(function() {
                });
              }
            } catch (De) {
              if (De && tt && typeof De.stack == "string")
                return [De.stack, tt.stack];
            }
            return [null, null];
          }
        };
        Ie.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var T = Object.getOwnPropertyDescriptor(
          Ie.DetermineComponentFrameRoot,
          "name"
        );
        T && T.configurable && Object.defineProperty(
          Ie.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var O = Ie.DetermineComponentFrameRoot(), Y = O[0], oe = O[1];
        if (Y && oe) {
          var ie = Y.split(`
`), Ne = oe.split(`
`);
          for (O = T = 0; T < ie.length && !ie[T].includes(
            "DetermineComponentFrameRoot"
          ); )
            T++;
          for (; O < Ne.length && !Ne[O].includes(
            "DetermineComponentFrameRoot"
          ); )
            O++;
          if (T === ie.length || O === Ne.length)
            for (T = ie.length - 1, O = Ne.length - 1; 1 <= T && 0 <= O && ie[T] !== Ne[O]; )
              O--;
          for (; 1 <= T && 0 <= O; T--, O--)
            if (ie[T] !== Ne[O]) {
              if (T !== 1 || O !== 1)
                do
                  if (T--, O--, 0 > O || ie[T] !== Ne[O]) {
                    var He = `
` + ie[T].replace(
                      " at new ",
                      " at "
                    );
                    return x.displayName && He.includes("<anonymous>") && (He = He.replace("<anonymous>", x.displayName)), typeof x == "function" && he.set(x, He), He;
                  }
                while (1 <= T && 0 <= O);
              break;
            }
        }
      } finally {
        Fe = !1, ve.H = pe, a(), Error.prepareStackTrace = H;
      }
      return ie = (ie = x ? x.displayName || x.name : "") ? o(ie) : "", typeof x == "function" && he.set(x, ie), ie;
    }
    function s(x) {
      if (x == null) return "";
      if (typeof x == "function") {
        var U = x.prototype;
        return l(
          x,
          !(!U || !U.isReactComponent)
        );
      }
      if (typeof x == "string") return o(x);
      switch (x) {
        case B:
          return o("Suspense");
        case z:
          return o("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case D:
            return x = l(x.render, !1), x;
          case L:
            return s(x.type);
          case q:
            U = x._payload, x = x._init;
            try {
              return s(x(U));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var x = ve.A;
      return x === null ? null : x.getOwner();
    }
    function c(x) {
      if (h.call(x, "key")) {
        var U = Object.getOwnPropertyDescriptor(x, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function f(x, U) {
      function H() {
        lt || (lt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var x = e(this.type);
      return An[x] || (An[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function p(x, U, H, pe, Ie, T) {
      return H = T.ref, x = {
        $$typeof: N,
        type: x,
        key: U,
        props: T,
        _owner: Ie
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function y(x, U, H, pe, Ie, T) {
      if (typeof x == "string" || typeof x == "function" || x === w || x === Q || x === M || x === B || x === z || x === ae || typeof x == "object" && x !== null && (x.$$typeof === q || x.$$typeof === L || x.$$typeof === C || x.$$typeof === ne || x.$$typeof === D || x.$$typeof === G || x.getModuleId !== void 0)) {
        var O = U.children;
        if (O !== void 0)
          if (pe)
            if (m(O)) {
              for (pe = 0; pe < O.length; pe++)
                v(O[pe], x);
              Object.freeze && Object.freeze(O);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else v(O, x);
      } else
        O = "", (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), x === null ? pe = "null" : m(x) ? pe = "array" : x !== void 0 && x.$$typeof === N ? (pe = "<" + (e(x.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : pe = typeof x, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          pe,
          O
        );
      if (h.call(U, "key")) {
        O = e(x);
        var Y = Object.keys(U).filter(function(ie) {
          return ie !== "key";
        });
        pe = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", en[O + pe] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          pe,
          O,
          Y,
          O
        ), en[O + pe] = !0);
      }
      if (O = null, H !== void 0 && (n(H), O = "" + H), c(U) && (n(U.key), O = "" + U.key), "key" in U) {
        H = {};
        for (var oe in U)
          oe !== "key" && (H[oe] = U[oe]);
      } else H = U;
      return O && f(
        H,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), p(x, O, T, Ie, u(), H);
    }
    function v(x, U) {
      if (typeof x == "object" && x && x.$$typeof !== St) {
        if (m(x))
          for (var H = 0; H < x.length; H++) {
            var pe = x[H];
            k(pe) && b(pe, U);
          }
        else if (k(x))
          x._store && (x._store.validated = 1);
        else if (x === null || typeof x != "object" ? H = null : (H = ce && x[ce] || x["@@iterator"], H = typeof H == "function" ? H : null), typeof H == "function" && H !== x.entries && (H = H.call(x), H !== x))
          for (; !(x = H.next()).done; )
            k(x.value) && b(x.value, U);
      }
    }
    function k(x) {
      return typeof x == "object" && x !== null && x.$$typeof === N;
    }
    function b(x, U) {
      if (x._store && !x._store.validated && x.key == null && (x._store.validated = 1, U = A(U), !tn[U])) {
        tn[U] = !0;
        var H = "";
        x && x._owner != null && x._owner !== u() && (H = null, typeof x._owner.tag == "number" ? H = e(x._owner.type) : typeof x._owner.name == "string" && (H = x._owner.name), H = " It was passed a child from " + H + ".");
        var pe = ve.getCurrentStack;
        ve.getCurrentStack = function() {
          var Ie = s(x.type);
          return pe && (Ie += pe() || ""), Ie;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          U,
          H
        ), ve.getCurrentStack = pe;
      }
    }
    function A(x) {
      var U = "", H = u();
      return H && (H = e(H.type)) && (U = `

Check the render method of \`` + H + "`."), U || (x = e(x)) && (U = `

Check the top-level render call using <` + x + ">."), U;
    }
    var E = Qe, N = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), C = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), ce = Symbol.iterator, fe = Symbol.for("react.client.reference"), ve = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, R = Object.assign, G = Symbol.for("react.client.reference"), m = Array.isArray, F = 0, X, W, J, ee, re, te, we;
    r.__reactDisabledLog = !0;
    var _, Oe, Fe = !1, he = new (typeof WeakMap == "function" ? WeakMap : Map)(), St = Symbol.for("react.client.reference"), lt, An = {}, en = {}, tn = {};
    rn.Fragment = w, rn.jsx = function(x, U, H, pe, Ie) {
      return y(x, U, H, !1, pe, Ie);
    }, rn.jsxs = function(x, U, H, pe, Ie) {
      return y(x, U, H, !0, pe, Ie);
    };
  }()), rn;
}
var Oa;
function fc() {
  return Oa || (Oa = 1, process.env.NODE_ENV === "production" ? On.exports = uc() : On.exports = cc()), On.exports;
}
var g = fc(), gr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Na;
function dc() {
  return Na || (Na = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var l = arguments[o];
          l && (a = i(a, r(l)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var o = "";
        for (var l in a)
          t.call(a, l) && a[l] && (o = i(o, l));
        return o;
      }
      function i(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(gr)), gr.exports;
}
var pc = dc();
const Z = /* @__PURE__ */ vn(pc);
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Jr.apply(null, arguments);
}
function vl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Ia(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function hc(e) {
  var t = mc(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function mc(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function gc(e, t, n) {
  var r = Ae(e !== void 0), i = Ze(t), a = i[0], o = i[1], l = e !== void 0, s = r.current;
  return r.current = l, !l && s && a !== t && o(t), [l ? e : a, Ee(function(u) {
    for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++)
      f[d - 1] = arguments[d];
    n && n.apply(void 0, [u].concat(f)), o(u);
  }, [n])];
}
function kl(e, t) {
  return Object.keys(t).reduce(function(n, r) {
    var i, a = n, o = a[Ia(r)], l = a[r], s = vl(a, [Ia(r), r].map(hc)), u = t[r], c = gc(l, o, e[u]), f = c[0], d = c[1];
    return Jr({}, s, (i = {}, i[r] = f, i[u] = d, i));
  }, e);
}
function Zr(e, t) {
  return Zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Zr(e, t);
}
function yc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zr(e, t);
}
const xc = ["xxl", "xl", "lg", "md", "sm", "xs"], bc = "xs", er = /* @__PURE__ */ $.createContext({
  prefixes: {},
  breakpoints: xc,
  minBreakpoint: bc
}), {
  Consumer: mb,
  Provider: gb
} = er;
function se(e, t) {
  const {
    prefixes: n
  } = Ce(er);
  return e || n[t] || t;
}
function wl() {
  const {
    breakpoints: e
  } = Ce(er);
  return e;
}
function El() {
  const {
    minBreakpoint: e
  } = Ce(er);
  return e;
}
function ji(e) {
  return e && e.ownerDocument || document;
}
function vc(e) {
  var t = ji(e);
  return t && t.defaultView || window;
}
function kc(e, t) {
  return vc(e).getComputedStyle(e, t);
}
var wc = /([A-Z])/g;
function Ec(e) {
  return e.replace(wc, "-$1").toLowerCase();
}
var Cc = /^ms-/;
function Nn(e) {
  return Ec(e).replace(Cc, "-ms-");
}
var Sc = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Tc(e) {
  return !!(e && Sc.test(e));
}
function ft(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Nn(t)) || kc(e).getPropertyValue(Nn(t));
  Object.keys(t).forEach(function(i) {
    var a = t[i];
    !a && a !== 0 ? e.style.removeProperty(Nn(i)) : Tc(i) ? r += i + "(" + a + ") " : n += Nn(i) + ": " + a + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
var In = { exports: {} }, Pn = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Ac() {
  if (Pa) return me;
  Pa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (S = S.type, S) {
            case s:
            case u:
            case r:
            case a:
            case i:
            case f:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case c:
                case y:
                case p:
                case o:
                  return S;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function N(S) {
    return E(S) === u;
  }
  return me.AsyncMode = s, me.ConcurrentMode = u, me.ContextConsumer = l, me.ContextProvider = o, me.Element = t, me.ForwardRef = c, me.Fragment = r, me.Lazy = y, me.Memo = p, me.Portal = n, me.Profiler = a, me.StrictMode = i, me.Suspense = f, me.isAsyncMode = function(S) {
    return N(S) || E(S) === s;
  }, me.isConcurrentMode = N, me.isContextConsumer = function(S) {
    return E(S) === l;
  }, me.isContextProvider = function(S) {
    return E(S) === o;
  }, me.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, me.isForwardRef = function(S) {
    return E(S) === c;
  }, me.isFragment = function(S) {
    return E(S) === r;
  }, me.isLazy = function(S) {
    return E(S) === y;
  }, me.isMemo = function(S) {
    return E(S) === p;
  }, me.isPortal = function(S) {
    return E(S) === n;
  }, me.isProfiler = function(S) {
    return E(S) === a;
  }, me.isStrictMode = function(S) {
    return E(S) === i;
  }, me.isSuspense = function(S) {
    return E(S) === f;
  }, me.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === u || S === a || S === i || S === f || S === d || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === p || S.$$typeof === o || S.$$typeof === l || S.$$typeof === c || S.$$typeof === k || S.$$typeof === b || S.$$typeof === A || S.$$typeof === v);
  }, me.typeOf = E, me;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Oc() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function E(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === a || _ === i || _ === f || _ === d || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === p || _.$$typeof === o || _.$$typeof === l || _.$$typeof === c || _.$$typeof === k || _.$$typeof === b || _.$$typeof === A || _.$$typeof === v);
    }
    function N(_) {
      if (typeof _ == "object" && _ !== null) {
        var Oe = _.$$typeof;
        switch (Oe) {
          case t:
            var Fe = _.type;
            switch (Fe) {
              case s:
              case u:
              case r:
              case a:
              case i:
              case f:
                return Fe;
              default:
                var he = Fe && Fe.$$typeof;
                switch (he) {
                  case l:
                  case c:
                  case y:
                  case p:
                  case o:
                    return he;
                  default:
                    return Oe;
                }
            }
          case n:
            return Oe;
        }
      }
    }
    var S = s, w = u, M = l, Q = o, ne = t, C = c, D = r, B = y, z = p, L = n, q = a, ae = i, ce = f, fe = !1;
    function ve(_) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(_) || N(_) === s;
    }
    function h(_) {
      return N(_) === u;
    }
    function R(_) {
      return N(_) === l;
    }
    function G(_) {
      return N(_) === o;
    }
    function m(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function F(_) {
      return N(_) === c;
    }
    function X(_) {
      return N(_) === r;
    }
    function W(_) {
      return N(_) === y;
    }
    function J(_) {
      return N(_) === p;
    }
    function ee(_) {
      return N(_) === n;
    }
    function re(_) {
      return N(_) === a;
    }
    function te(_) {
      return N(_) === i;
    }
    function we(_) {
      return N(_) === f;
    }
    ge.AsyncMode = S, ge.ConcurrentMode = w, ge.ContextConsumer = M, ge.ContextProvider = Q, ge.Element = ne, ge.ForwardRef = C, ge.Fragment = D, ge.Lazy = B, ge.Memo = z, ge.Portal = L, ge.Profiler = q, ge.StrictMode = ae, ge.Suspense = ce, ge.isAsyncMode = ve, ge.isConcurrentMode = h, ge.isContextConsumer = R, ge.isContextProvider = G, ge.isElement = m, ge.isForwardRef = F, ge.isFragment = X, ge.isLazy = W, ge.isMemo = J, ge.isPortal = ee, ge.isProfiler = re, ge.isStrictMode = te, ge.isSuspense = we, ge.isValidElementType = E, ge.typeOf = N;
  }()), ge;
}
var ja;
function Cl() {
  return ja || (ja = 1, process.env.NODE_ENV === "production" ? Pn.exports = Ac() : Pn.exports = Oc()), Pn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var yr, _a;
function Nc() {
  if (_a) return yr;
  _a = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, l = 0; l < 10; l++)
        o["_" + String.fromCharCode(l)] = l;
      var s = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return yr = i() ? Object.assign : function(a, o) {
    for (var l, s = r(a), u, c = 1; c < arguments.length; c++) {
      l = Object(arguments[c]);
      for (var f in l)
        t.call(l, f) && (s[f] = l[f]);
      if (e) {
        u = e(l);
        for (var d = 0; d < u.length; d++)
          n.call(l, u[d]) && (s[u[d]] = l[u[d]]);
      }
    }
    return s;
  }, yr;
}
var xr, La;
function _i() {
  if (La) return xr;
  La = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xr = e, xr;
}
var br, Fa;
function Sl() {
  return Fa || (Fa = 1, br = Function.call.bind(Object.prototype.hasOwnProperty)), br;
}
var vr, Da;
function Ic() {
  if (Da) return vr;
  Da = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ _i(), n = {}, r = /* @__PURE__ */ Sl();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, l, s, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (r(a, c)) {
          var f;
          try {
            if (typeof a[c] != "function") {
              var d = Error(
                (s || "React class") + ": " + l + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[c](o, c, s, l, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (s || "React class") + ": type specification of " + l + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, vr = i, vr;
}
var kr, Ma;
function Pc() {
  if (Ma) return kr;
  Ma = 1;
  var e = Cl(), t = Nc(), n = /* @__PURE__ */ _i(), r = /* @__PURE__ */ Sl(), i = /* @__PURE__ */ Ic(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var s = "Warning: " + l;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return kr = function(l, s) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(h) {
      var R = h && (u && h[u] || h[c]);
      if (typeof R == "function")
        return R;
    }
    var d = "<<anonymous>>", p = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: A(),
      arrayOf: E,
      element: N(),
      elementType: S(),
      instanceOf: w,
      node: C(),
      objectOf: Q,
      oneOf: M,
      oneOfType: ne,
      shape: B,
      exact: z
    };
    function y(h, R) {
      return h === R ? h !== 0 || 1 / h === 1 / R : h !== h && R !== R;
    }
    function v(h, R) {
      this.message = h, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function k(h) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, G = 0;
      function m(X, W, J, ee, re, te, we) {
        if (ee = ee || d, te = te || J, we !== n) {
          if (s) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = ee + ":" + J;
            !R[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[Oe] = !0, G++);
          }
        }
        return W[J] == null ? X ? W[J] === null ? new v("The " + re + " `" + te + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new v("The " + re + " `" + te + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : h(W, J, ee, re, te);
      }
      var F = m.bind(null, !1);
      return F.isRequired = m.bind(null, !0), F;
    }
    function b(h) {
      function R(G, m, F, X, W, J) {
        var ee = G[m], re = ae(ee);
        if (re !== h) {
          var te = ce(ee);
          return new v(
            "Invalid " + X + " `" + W + "` of type " + ("`" + te + "` supplied to `" + F + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return k(R);
    }
    function A() {
      return k(o);
    }
    function E(h) {
      function R(G, m, F, X, W) {
        if (typeof h != "function")
          return new v("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var J = G[m];
        if (!Array.isArray(J)) {
          var ee = ae(J);
          return new v("Invalid " + X + " `" + W + "` of type " + ("`" + ee + "` supplied to `" + F + "`, expected an array."));
        }
        for (var re = 0; re < J.length; re++) {
          var te = h(J, re, F, X, W + "[" + re + "]", n);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return k(R);
    }
    function N() {
      function h(R, G, m, F, X) {
        var W = R[G];
        if (!l(W)) {
          var J = ae(W);
          return new v("Invalid " + F + " `" + X + "` of type " + ("`" + J + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(h);
    }
    function S() {
      function h(R, G, m, F, X) {
        var W = R[G];
        if (!e.isValidElementType(W)) {
          var J = ae(W);
          return new v("Invalid " + F + " `" + X + "` of type " + ("`" + J + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(h);
    }
    function w(h) {
      function R(G, m, F, X, W) {
        if (!(G[m] instanceof h)) {
          var J = h.name || d, ee = ve(G[m]);
          return new v("Invalid " + X + " `" + W + "` of type " + ("`" + ee + "` supplied to `" + F + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return k(R);
    }
    function M(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function R(G, m, F, X, W) {
        for (var J = G[m], ee = 0; ee < h.length; ee++)
          if (y(J, h[ee]))
            return null;
        var re = JSON.stringify(h, function(we, _) {
          var Oe = ce(_);
          return Oe === "symbol" ? String(_) : _;
        });
        return new v("Invalid " + X + " `" + W + "` of value `" + String(J) + "` " + ("supplied to `" + F + "`, expected one of " + re + "."));
      }
      return k(R);
    }
    function Q(h) {
      function R(G, m, F, X, W) {
        if (typeof h != "function")
          return new v("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var J = G[m], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + W + "` of type " + ("`" + ee + "` supplied to `" + F + "`, expected an object."));
        for (var re in J)
          if (r(J, re)) {
            var te = h(J, re, F, X, W + "." + re, n);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return k(R);
    }
    function ne(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var R = 0; R < h.length; R++) {
        var G = h[R];
        if (typeof G != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(G) + " at index " + R + "."
          ), o;
      }
      function m(F, X, W, J, ee) {
        for (var re = [], te = 0; te < h.length; te++) {
          var we = h[te], _ = we(F, X, W, J, ee, n);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && re.push(_.data.expectedType);
        }
        var Oe = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new v("Invalid " + J + " `" + ee + "` supplied to " + ("`" + W + "`" + Oe + "."));
      }
      return k(m);
    }
    function C() {
      function h(R, G, m, F, X) {
        return L(R[G]) ? null : new v("Invalid " + F + " `" + X + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return k(h);
    }
    function D(h, R, G, m, F) {
      return new v(
        (h || "React class") + ": " + R + " type `" + G + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function B(h) {
      function R(G, m, F, X, W) {
        var J = G[m], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + W + "` of type `" + ee + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var re in h) {
          var te = h[re];
          if (typeof te != "function")
            return D(F, X, W, re, ce(te));
          var we = te(J, re, F, X, W + "." + re, n);
          if (we)
            return we;
        }
        return null;
      }
      return k(R);
    }
    function z(h) {
      function R(G, m, F, X, W) {
        var J = G[m], ee = ae(J);
        if (ee !== "object")
          return new v("Invalid " + X + " `" + W + "` of type `" + ee + "` " + ("supplied to `" + F + "`, expected `object`."));
        var re = t({}, G[m], h);
        for (var te in re) {
          var we = h[te];
          if (r(h, te) && typeof we != "function")
            return D(F, X, W, te, ce(we));
          if (!we)
            return new v(
              "Invalid " + X + " `" + W + "` key `" + te + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(G[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var _ = we(J, te, F, X, W + "." + te, n);
          if (_)
            return _;
        }
        return null;
      }
      return k(R);
    }
    function L(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(L);
          if (h === null || l(h))
            return !0;
          var R = f(h);
          if (R) {
            var G = R.call(h), m;
            if (R !== h.entries) {
              for (; !(m = G.next()).done; )
                if (!L(m.value))
                  return !1;
            } else
              for (; !(m = G.next()).done; ) {
                var F = m.value;
                if (F && !L(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function q(h, R) {
      return h === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function ae(h) {
      var R = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : q(R, h) ? "symbol" : R;
    }
    function ce(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var R = ae(h);
      if (R === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function fe(h) {
      var R = ce(h);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function ve(h) {
      return !h.constructor || !h.constructor.name ? d : h.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, kr;
}
var wr, za;
function Rc() {
  if (za) return wr;
  za = 1;
  var e = /* @__PURE__ */ _i();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, wr = function() {
    function r(o, l, s, u, c, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, wr;
}
var Ba;
function jc() {
  if (Ba) return In.exports;
  if (Ba = 1, process.env.NODE_ENV !== "production") {
    var e = Cl(), t = !0;
    In.exports = /* @__PURE__ */ Pc()(e.isElement, t);
  } else
    In.exports = /* @__PURE__ */ Rc()();
  return In.exports;
}
var _c = /* @__PURE__ */ jc();
const j = /* @__PURE__ */ vn(_c), $a = {
  disabled: !1
};
var Lc = process.env.NODE_ENV !== "production" ? j.oneOfType([j.number, j.shape({
  enter: j.number,
  exit: j.number,
  appear: j.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && j.oneOfType([j.string, j.shape({
  enter: j.string,
  exit: j.string,
  active: j.string
}), j.shape({
  enter: j.string,
  enterDone: j.string,
  enterActive: j.string,
  exit: j.string,
  exitDone: j.string,
  exitActive: j.string
})]);
const Tl = Qe.createContext(null);
var Fc = function(t) {
  return t.scrollTop;
}, sn = "unmounted", vt = "exited", Je = "entering", ut = "entered", mn = "exiting", mt = /* @__PURE__ */ function(e) {
  yc(t, e);
  function t(r, i) {
    var a;
    a = e.call(this, r, i) || this;
    var o = i, l = o && !o.isMounting ? r.enter : r.appear, s;
    return a.appearStatus = null, r.in ? l ? (s = vt, a.appearStatus = Je) : s = ut : r.unmountOnExit || r.mountOnEnter ? s = sn : s = vt, a.state = {
      status: s
    }, a.nextCallback = null, a;
  }
  t.getDerivedStateFromProps = function(i, a) {
    var o = i.in;
    return o && a.status === sn ? {
      status: vt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var a = null;
    if (i !== this.props) {
      var o = this.state.status;
      this.props.in ? o !== Je && o !== ut && (a = Je) : (o === Je || o === ut) && (a = mn);
    }
    this.updateStatus(!1, a);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, a, o, l;
    return a = o = l = i, i != null && typeof i != "number" && (a = i.exit, o = i.enter, l = i.appear !== void 0 ? i.appear : o), {
      exit: a,
      enter: o,
      appear: l
    };
  }, n.updateStatus = function(i, a) {
    if (i === void 0 && (i = !1), a !== null)
      if (this.cancelNextCallback(), a === Je) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var o = this.props.nodeRef ? this.props.nodeRef.current : Ut.findDOMNode(this);
          o && Fc(o);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === vt && this.setState({
      status: sn
    });
  }, n.performEnter = function(i) {
    var a = this, o = this.props.enter, l = this.context ? this.context.isMounting : i, s = this.props.nodeRef ? [l] : [Ut.findDOMNode(this), l], u = s[0], c = s[1], f = this.getTimeouts(), d = l ? f.appear : f.enter;
    if (!i && !o || $a.disabled) {
      this.safeSetState({
        status: ut
      }, function() {
        a.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Je
    }, function() {
      a.props.onEntering(u, c), a.onTransitionEnd(d, function() {
        a.safeSetState({
          status: ut
        }, function() {
          a.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, a = this.props.exit, o = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Ut.findDOMNode(this);
    if (!a || $a.disabled) {
      this.safeSetState({
        status: vt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: mn
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(o.exit, function() {
        i.safeSetState({
          status: vt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, a) {
    a = this.setNextCallback(a), this.setState(i, a);
  }, n.setNextCallback = function(i) {
    var a = this, o = !0;
    return this.nextCallback = function(l) {
      o && (o = !1, a.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      o = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, a) {
    this.setNextCallback(a);
    var o = this.props.nodeRef ? this.props.nodeRef.current : Ut.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!o || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [o, this.nextCallback], u = s[0], c = s[1];
      this.props.addEndListener(u, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === sn)
      return null;
    var a = this.props, o = a.children;
    a.in, a.mountOnEnter, a.unmountOnExit, a.appear, a.enter, a.exit, a.timeout, a.addEndListener, a.onEnter, a.onEntering, a.onEntered, a.onExit, a.onExiting, a.onExited, a.nodeRef;
    var l = vl(a, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Qe.createElement(Tl.Provider, {
        value: null
      }, typeof o == "function" ? o(i, l) : Qe.cloneElement(Qe.Children.only(o), l))
    );
  }, t;
}(Qe.Component);
mt.contextType = Tl;
mt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: j.shape({
    current: typeof Element > "u" ? j.any : function(e, t, n, r, i, a) {
      var o = e[t];
      return j.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: j.oneOfType([j.func.isRequired, j.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: j.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: j.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: j.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: j.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: j.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: j.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Lc;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: j.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: j.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: j.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: j.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: j.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: j.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: j.func
} : {};
function Lt() {
}
mt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Lt,
  onEntering: Lt,
  onEntered: Lt,
  onExit: Lt,
  onExiting: Lt,
  onExited: Lt
};
mt.UNMOUNTED = sn;
mt.EXITED = vt;
mt.ENTERING = Je;
mt.ENTERED = ut;
mt.EXITING = mn;
function Dc(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
function Mc() {
  const e = $.version.split(".");
  return {
    major: +e[0],
    minor: +e[1],
    patch: +e[2]
  };
}
function Kt(e) {
  if (!e || typeof e == "function")
    return null;
  const {
    major: t
  } = Mc();
  return t >= 19 ? e.props.ref : e.ref;
}
const tr = !!(typeof window < "u" && window.document && window.document.createElement);
var ei = !1, ti = !1;
try {
  var Er = {
    get passive() {
      return ei = !0;
    },
    get once() {
      return ti = ei = !0;
    }
  };
  tr && (window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, !0));
} catch {
}
function zc(e, t, n, r) {
  if (r && typeof r != "boolean" && !ti) {
    var i = r.once, a = r.capture, o = n;
    !ti && i && (o = n.__once || function l(s) {
      this.removeEventListener(t, l, a), n.call(this, s);
    }, n.__once = o), e.addEventListener(t, o, ei ? r : a);
  }
  e.addEventListener(t, n, r);
}
function Bc(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i);
}
function Un(e, t, n, r) {
  return zc(e, t, n, r), function() {
    Bc(e, t, n, r);
  };
}
function $c(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Uc(e) {
  var t = ft(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Hc(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, i = setTimeout(function() {
    r || $c(e, "transitionend", !0);
  }, t + n), a = Un(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), a();
  };
}
function Wc(e, t, n, r) {
  n == null && (n = Uc(e) || 0);
  var i = Hc(e, n, r), a = Un(e, "transitionend", t);
  return function() {
    i(), a();
  };
}
function Ua(e, t) {
  const n = ft(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Li(e, t) {
  const n = Ua(e, "transitionDuration"), r = Ua(e, "transitionDelay"), i = Wc(e, (a) => {
    a.target === e && (i(), t(a));
  }, n + r);
}
function an(...e) {
  return e.filter((t) => t != null).reduce((t, n) => {
    if (typeof n != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return t === null ? n : function(...i) {
      t.apply(this, i), n.apply(this, i);
    };
  }, null);
}
function Al(e) {
  e.offsetHeight;
}
const Ha = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function Vc(e, t) {
  const n = Ha(e), r = Ha(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function qc(e, t) {
  return qe(() => Vc(e, t), [e, t]);
}
function Yc(e) {
  return e && "setState" in e ? Ut.findDOMNode(e) : e ?? null;
}
const Fi = /* @__PURE__ */ Qe.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  onExited: a,
  addEndListener: o,
  children: l,
  childRef: s,
  ...u
}, c) => {
  const f = Ae(null), d = qc(f, s), p = (w) => {
    d(Yc(w));
  }, y = (w) => (M) => {
    w && f.current && w(f.current, M);
  }, v = Ee(y(e), [e]), k = Ee(y(t), [t]), b = Ee(y(n), [n]), A = Ee(y(r), [r]), E = Ee(y(i), [i]), N = Ee(y(a), [a]), S = Ee(y(o), [o]);
  return /* @__PURE__ */ g.jsx(mt, {
    ref: c,
    ...u,
    onEnter: v,
    onEntered: b,
    onEntering: k,
    onExit: A,
    onExited: N,
    onExiting: E,
    addEndListener: S,
    nodeRef: f,
    children: typeof l == "function" ? (w, M) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      l(w, {
        ...M,
        ref: p
      })
    ) : /* @__PURE__ */ Qe.cloneElement(l, {
      ref: p
    })
  });
}), Gc = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function Kc(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`, r = t[n], i = Gc[e];
  return r + // @ts-ignore
  parseInt(ft(t, i[0]), 10) + // @ts-ignore
  parseInt(ft(t, i[1]), 10);
}
const Xc = {
  [vt]: "collapse",
  [mn]: "collapsing",
  [Je]: "collapsing",
  [ut]: "collapse show"
}, Qc = /* @__PURE__ */ Qe.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: n,
  onExit: r,
  onExiting: i,
  className: a,
  children: o,
  dimension: l = "height",
  in: s = !1,
  timeout: u = 300,
  mountOnEnter: c = !1,
  unmountOnExit: f = !1,
  appear: d = !1,
  getDimensionValue: p = Kc,
  ...y
}, v) => {
  const k = typeof l == "function" ? l() : l, b = qe(() => an((w) => {
    w.style[k] = "0";
  }, e), [k, e]), A = qe(() => an((w) => {
    const M = `scroll${k[0].toUpperCase()}${k.slice(1)}`;
    w.style[k] = `${w[M]}px`;
  }, t), [k, t]), E = qe(() => an((w) => {
    w.style[k] = null;
  }, n), [k, n]), N = qe(() => an((w) => {
    w.style[k] = `${p(k, w)}px`, Al(w);
  }, r), [r, p, k]), S = qe(() => an((w) => {
    w.style[k] = null;
  }, i), [k, i]);
  return /* @__PURE__ */ g.jsx(Fi, {
    ref: v,
    addEndListener: Li,
    ...y,
    "aria-expanded": y.role ? s : null,
    onEnter: b,
    onEntering: A,
    onEntered: E,
    onExit: N,
    onExiting: S,
    childRef: Kt(o),
    in: s,
    timeout: u,
    mountOnEnter: c,
    unmountOnExit: f,
    appear: d,
    children: (w, M) => /* @__PURE__ */ Qe.cloneElement(o, {
      ...M,
      className: Z(a, o.props.className, Xc[w], k === "width" && "collapse-horizontal")
    })
  });
});
function Jc(e) {
  const t = Ae(e);
  return je(() => {
    t.current = e;
  }, [e]), t;
}
function nr(e) {
  const t = Jc(e);
  return Ee(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
const Di = (e) => /* @__PURE__ */ $.forwardRef((t, n) => /* @__PURE__ */ g.jsx("div", {
  ...t,
  ref: n,
  className: Z(t.className, e)
}));
function Zc(e) {
  const t = Ae(e);
  return je(() => {
    t.current = e;
  }, [e]), t;
}
function ct(e) {
  const t = Zc(e);
  return Ee(function(...n) {
    return t.current && t.current(...n);
  }, [t]);
}
function ef() {
  const e = Ae(!0), t = Ae(() => e.current);
  return je(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function tf(e) {
  const t = Ae(null);
  return je(() => {
    t.current = e;
  }), t.current;
}
const nf = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", rf = typeof document < "u", Wa = rf || nf ? bl : je, af = ["as", "disabled"];
function of(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function lf(e) {
  return !e || e.trim() === "#";
}
function Mi({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: i,
  role: a,
  onClick: o,
  tabIndex: l = 0,
  type: s
}) {
  e || (n != null || r != null || i != null ? e = "a" : e = "button");
  const u = {
    tagName: e
  };
  if (e === "button")
    return [{
      type: s || "button",
      disabled: t
    }, u];
  const c = (d) => {
    if ((t || e === "a" && lf(n)) && d.preventDefault(), t) {
      d.stopPropagation();
      return;
    }
    o == null || o(d);
  }, f = (d) => {
    d.key === " " && (d.preventDefault(), c(d));
  };
  return e === "a" && (n || (n = "#"), t && (n = void 0)), [{
    role: a ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: t ? void 0 : l,
    href: n,
    target: e === "a" ? r : void 0,
    "aria-disabled": t || void 0,
    rel: e === "a" ? i : void 0,
    onClick: c,
    onKeyDown: f
  }, u];
}
const Ol = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    as: n,
    disabled: r
  } = e, i = of(e, af);
  const [a, {
    tagName: o
  }] = Mi(Object.assign({
    tagName: n,
    disabled: r
  }, i));
  return /* @__PURE__ */ g.jsx(o, Object.assign({}, i, a, {
    ref: t
  }));
});
Ol.displayName = "Button";
const sf = ["onKeyDown"];
function uf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function cf(e) {
  return !e || e.trim() === "#";
}
const zi = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    onKeyDown: n
  } = e, r = uf(e, sf);
  const [i] = Mi(Object.assign({
    tagName: "a"
  }, r)), a = ct((o) => {
    i.onKeyDown(o), n == null || n(o);
  });
  return cf(r.href) || r.role === "button" ? /* @__PURE__ */ g.jsx("a", Object.assign({
    ref: t
  }, r, i, {
    onKeyDown: a
  })) : /* @__PURE__ */ g.jsx("a", Object.assign({
    ref: t
  }, r, {
    onKeyDown: n
  }));
});
zi.displayName = "Anchor";
const ff = {
  [Je]: "show",
  [ut]: "show"
}, Nl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  children: t,
  transitionClasses: n = {},
  onEnter: r,
  ...i
}, a) => {
  const o = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...i
  }, l = Ee((s, u) => {
    Al(s), r == null || r(s, u);
  }, [r]);
  return /* @__PURE__ */ g.jsx(Fi, {
    ref: a,
    addEndListener: Li,
    ...o,
    onEnter: l,
    childRef: Kt(t),
    children: (s, u) => /* @__PURE__ */ $.cloneElement(t, {
      ...u,
      className: Z("fade", e, t.props.className, ff[s], n[s])
    })
  });
});
Nl.displayName = "Fade";
const df = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": j.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: j.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: j.oneOf(["white"])
}, Bi = /* @__PURE__ */ $.forwardRef(({
  className: e,
  variant: t,
  "aria-label": n = "Close",
  ...r
}, i) => /* @__PURE__ */ g.jsx("button", {
  ref: i,
  type: "button",
  className: Z("btn-close", t && `btn-close-${t}`, e),
  "aria-label": n,
  ...r
}));
Bi.displayName = "CloseButton";
Bi.propTypes = df;
const Rt = /* @__PURE__ */ $.forwardRef(({
  as: e,
  bsPrefix: t,
  variant: n = "primary",
  size: r,
  active: i = !1,
  disabled: a = !1,
  className: o,
  ...l
}, s) => {
  const u = se(t, "btn"), [c, {
    tagName: f
  }] = Mi({
    tagName: e,
    disabled: a,
    ...l
  }), d = f;
  return /* @__PURE__ */ g.jsx(d, {
    ...c,
    ...l,
    ref: s,
    disabled: a,
    className: Z(o, u, i && "active", n && `${u}-${n}`, r && `${u}-${r}`, l.href && a && "disabled")
  });
});
Rt.displayName = "Button";
const $i = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-body"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
$i.displayName = "CardBody";
const Il = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-footer"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Il.displayName = "CardFooter";
const Ui = /* @__PURE__ */ $.createContext(null);
Ui.displayName = "CardHeaderContext";
const Pl = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = se(e, "card-header"), o = qe(() => ({
    cardHeaderBsPrefix: a
  }), [a]);
  return /* @__PURE__ */ g.jsx(Ui.Provider, {
    value: o,
    children: /* @__PURE__ */ g.jsx(n, {
      ref: i,
      ...r,
      className: Z(t, a)
    })
  });
});
Pl.displayName = "CardHeader";
const Rl = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    variant: n,
    as: r = "img",
    ...i
  }, a) => {
    const o = se(e, "card-img");
    return /* @__PURE__ */ g.jsx(r, {
      ref: a,
      className: Z(n ? `${o}-${n}` : o, t),
      ...i
    });
  }
);
Rl.displayName = "CardImg";
const jl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "card-img-overlay"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
jl.displayName = "CardImgOverlay";
const _l = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "a",
  ...r
}, i) => (t = se(t, "card-link"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
_l.displayName = "CardLink";
const pf = Di("h6"), Ll = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = pf,
  ...r
}, i) => (t = se(t, "card-subtitle"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Ll.displayName = "CardSubtitle";
const Fl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "p",
  ...r
}, i) => (t = se(t, "card-text"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Fl.displayName = "CardText";
const hf = Di("h5"), Dl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = hf,
  ...r
}, i) => (t = se(t, "card-title"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Dl.displayName = "CardTitle";
const Ml = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  bg: n,
  text: r,
  border: i,
  body: a = !1,
  children: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "div",
  ...s
}, u) => {
  const c = se(e, "card");
  return /* @__PURE__ */ g.jsx(l, {
    ref: u,
    ...s,
    className: Z(t, c, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`),
    children: a ? /* @__PURE__ */ g.jsx($i, {
      children: o
    }) : o
  });
});
Ml.displayName = "Card";
const Me = Object.assign(Ml, {
  Img: Rl,
  Title: Dl,
  Subtitle: Ll,
  Body: $i,
  Link: _l,
  Text: Fl,
  Header: Pl,
  Footer: Il,
  ImgOverlay: jl
});
function mf(e, t) {
  return $.Children.toArray(e).some((n) => /* @__PURE__ */ $.isValidElement(n) && n.type === t);
}
function gf({
  as: e,
  bsPrefix: t,
  className: n,
  ...r
}) {
  t = se(t, "col");
  const i = wl(), a = El(), o = [], l = [];
  return i.forEach((s) => {
    const u = r[s];
    delete r[s];
    let c, f, d;
    typeof u == "object" && u != null ? {
      span: c,
      offset: f,
      order: d
    } = u : c = u;
    const p = s !== a ? `-${s}` : "";
    c && o.push(c === !0 ? `${t}${p}` : `${t}${p}-${c}`), d != null && l.push(`order${p}-${d}`), f != null && l.push(`offset${p}-${f}`);
  }), [{
    ...r,
    className: Z(n, ...o, ...l)
  }, {
    as: e,
    bsPrefix: t,
    spans: o
  }];
}
const ye = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (e, t) => {
    const [{
      className: n,
      ...r
    }, {
      as: i = "div",
      bsPrefix: a,
      spans: o
    }] = gf(e);
    return /* @__PURE__ */ g.jsx(i, {
      ...r,
      ref: t,
      className: Z(n, !o.length && a)
    });
  }
);
ye.displayName = "Col";
const $e = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  fluid: t = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  className: r,
  ...i
}, a) => {
  const o = se(e, "container"), l = typeof t == "string" ? `-${t}` : "-fluid";
  return /* @__PURE__ */ g.jsx(n, {
    ref: a,
    ...i,
    className: Z(r, t ? `${o}${l}` : o)
  });
});
$e.displayName = "Container";
var yf = Function.prototype.bind.call(Function.prototype.call, [].slice);
function At(e, t) {
  return yf(e.querySelectorAll(t));
}
function xf() {
  const [, e] = ac((t) => t + 1, 0);
  return e;
}
function Va(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition) return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var Cr, qa;
function bf() {
  if (qa) return Cr;
  qa = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var n = function(i, a) {
      var o = arguments.length;
      a = new Array(o > 1 ? o - 1 : 0);
      for (var l = 1; l < o; l++)
        a[l - 1] = arguments[l];
      var s = 0, u = "Warning: " + i.replace(/%s/g, function() {
        return a[s++];
      });
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
    t = function(r, i, a) {
      var o = arguments.length;
      a = new Array(o > 2 ? o - 2 : 0);
      for (var l = 2; l < o; l++)
        a[l - 2] = arguments[l];
      if (i === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      r || n.apply(null, [i].concat(a));
    };
  }
  return Cr = t, Cr;
}
var vf = bf();
const zl = /* @__PURE__ */ vn(vf), Hn = /* @__PURE__ */ $.createContext(null), Hi = (e, t = null) => e != null ? String(e) : t || null, Wi = /* @__PURE__ */ $.createContext(null);
Wi.displayName = "NavContext";
const kf = "data-rr-ui-", wf = "rrUi";
function rr(e) {
  return `${kf}${e}`;
}
function Ef(e) {
  return `${wf}${e}`;
}
const Bl = /* @__PURE__ */ oc(tr ? window : void 0);
Bl.Provider;
function Vi() {
  return Ce(Bl);
}
const Cf = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", Sf = typeof document < "u", Tf = Sf || Cf ? bl : je, Xt = /* @__PURE__ */ $.createContext(null);
Xt.displayName = "NavbarContext";
const Af = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: j.string,
  /** Display feedback as a tooltip. */
  tooltip: j.bool,
  as: j.elementType
}, ir = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: e = "div",
    className: t,
    type: n = "valid",
    tooltip: r = !1,
    ...i
  }, a) => /* @__PURE__ */ g.jsx(e, {
    ...i,
    ref: a,
    className: Z(t, `${n}-${r ? "tooltip" : "feedback"}`)
  })
);
ir.displayName = "Feedback";
ir.propTypes = Af;
const dt = /* @__PURE__ */ $.createContext({}), qi = /* @__PURE__ */ $.forwardRef(({
  id: e,
  bsPrefix: t,
  className: n,
  type: r = "checkbox",
  isValid: i = !1,
  isInvalid: a = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "input",
  ...l
}, s) => {
  const {
    controlId: u
  } = Ce(dt);
  return t = se(t, "form-check-input"), /* @__PURE__ */ g.jsx(o, {
    ...l,
    ref: s,
    type: r,
    id: e || u,
    className: Z(n, t, i && "is-valid", a && "is-invalid")
  });
});
qi.displayName = "FormCheckInput";
const Wn = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  htmlFor: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = Ce(dt);
  return e = se(e, "form-check-label"), /* @__PURE__ */ g.jsx("label", {
    ...r,
    ref: i,
    htmlFor: n || a,
    className: Z(t, e)
  });
});
Wn.displayName = "FormCheckLabel";
const $l = /* @__PURE__ */ $.forwardRef(({
  id: e,
  bsPrefix: t,
  bsSwitchPrefix: n,
  inline: r = !1,
  reverse: i = !1,
  disabled: a = !1,
  isValid: o = !1,
  isInvalid: l = !1,
  feedbackTooltip: s = !1,
  feedback: u,
  feedbackType: c,
  className: f,
  style: d,
  title: p = "",
  type: y = "checkbox",
  label: v,
  children: k,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: b = "input",
  ...A
}, E) => {
  t = se(t, "form-check"), n = se(n, "form-switch");
  const {
    controlId: N
  } = Ce(dt), S = qe(() => ({
    controlId: e || N
  }), [N, e]), w = !k && v != null && v !== !1 || mf(k, Wn), M = /* @__PURE__ */ g.jsx(qi, {
    ...A,
    type: y === "switch" ? "checkbox" : y,
    ref: E,
    isValid: o,
    isInvalid: l,
    disabled: a,
    as: b
  });
  return /* @__PURE__ */ g.jsx(dt.Provider, {
    value: S,
    children: /* @__PURE__ */ g.jsx("div", {
      style: d,
      className: Z(f, w && t, r && `${t}-inline`, i && `${t}-reverse`, y === "switch" && n),
      children: k || /* @__PURE__ */ g.jsxs(g.Fragment, {
        children: [M, w && /* @__PURE__ */ g.jsx(Wn, {
          title: p,
          children: v
        }), u && /* @__PURE__ */ g.jsx(ir, {
          type: c,
          tooltip: s,
          children: u
        })]
      })
    })
  });
});
$l.displayName = "FormCheck";
const Vn = Object.assign($l, {
  Input: qi,
  Label: Wn
}), Ul = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  type: t,
  size: n,
  htmlSize: r,
  id: i,
  className: a,
  isValid: o = !1,
  isInvalid: l = !1,
  plaintext: s,
  readOnly: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "input",
  ...f
}, d) => {
  const {
    controlId: p
  } = Ce(dt);
  return e = se(e, "form-control"), process.env.NODE_ENV !== "production" && zl(p == null || !i, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ g.jsx(c, {
    ...f,
    type: t,
    size: r,
    ref: d,
    readOnly: u,
    id: i || p,
    className: Z(a, s ? `${e}-plaintext` : e, n && `${e}-${n}`, t === "color" && `${e}-color`, o && "is-valid", l && "is-invalid")
  });
});
Ul.displayName = "FormControl";
const Of = Object.assign(Ul, {
  Feedback: ir
}), Hl = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "form-floating"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
Hl.displayName = "FormFloating";
const Yi = /* @__PURE__ */ $.forwardRef(({
  controlId: e,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: t = "div",
  ...n
}, r) => {
  const i = qe(() => ({
    controlId: e
  }), [e]);
  return /* @__PURE__ */ g.jsx(dt.Provider, {
    value: i,
    children: /* @__PURE__ */ g.jsx(t, {
      ...n,
      ref: r
    })
  });
});
Yi.displayName = "FormGroup";
const Wl = /* @__PURE__ */ $.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: e = "label",
  bsPrefix: t,
  column: n = !1,
  visuallyHidden: r = !1,
  className: i,
  htmlFor: a,
  ...o
}, l) => {
  const {
    controlId: s
  } = Ce(dt);
  t = se(t, "form-label");
  let u = "col-form-label";
  typeof n == "string" && (u = `${u} ${u}-${n}`);
  const c = Z(i, t, r && "visually-hidden", n && u);
  return process.env.NODE_ENV !== "production" && zl(s == null || !a, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), a = a || s, n ? /* @__PURE__ */ g.jsx(ye, {
    ref: l,
    as: "label",
    className: c,
    htmlFor: a,
    ...o
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ g.jsx(e, {
      ref: l,
      className: c,
      htmlFor: a,
      ...o
    })
  );
});
Wl.displayName = "FormLabel";
const Vl = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  id: n,
  ...r
}, i) => {
  const {
    controlId: a
  } = Ce(dt);
  return e = se(e, "form-range"), /* @__PURE__ */ g.jsx("input", {
    ...r,
    type: "range",
    ref: i,
    className: Z(t, e),
    id: n || a
  });
});
Vl.displayName = "FormRange";
const ql = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  size: t,
  htmlSize: n,
  className: r,
  isValid: i = !1,
  isInvalid: a = !1,
  id: o,
  ...l
}, s) => {
  const {
    controlId: u
  } = Ce(dt);
  return e = se(e, "form-select"), /* @__PURE__ */ g.jsx("select", {
    ...l,
    size: n,
    ref: s,
    className: Z(r, e, t && `${e}-${t}`, i && "is-valid", a && "is-invalid"),
    id: o || u
  });
});
ql.displayName = "FormSelect";
const Yl = /* @__PURE__ */ $.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    as: n = "small",
    muted: r,
    ...i
  }, a) => (e = se(e, "form-text"), /* @__PURE__ */ g.jsx(n, {
    ...i,
    ref: a,
    className: Z(t, e, r && "text-muted")
  }))
);
Yl.displayName = "FormText";
const Gl = /* @__PURE__ */ $.forwardRef((e, t) => /* @__PURE__ */ g.jsx(Vn, {
  ...e,
  ref: t,
  type: "switch"
}));
Gl.displayName = "Switch";
const Nf = Object.assign(Gl, {
  Input: Vn.Input,
  Label: Vn.Label
}), Kl = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  controlId: r,
  label: i,
  ...a
}, o) => (e = se(e, "form-floating"), /* @__PURE__ */ g.jsxs(Yi, {
  ref: o,
  className: Z(t, e),
  controlId: r,
  ...a,
  children: [n, /* @__PURE__ */ g.jsx("label", {
    htmlFor: r,
    children: i
  })]
})));
Kl.displayName = "FloatingLabel";
const If = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: j.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: j.bool,
  as: j.elementType
}, Gi = /* @__PURE__ */ $.forwardRef(({
  className: e,
  validated: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "form",
  ...r
}, i) => /* @__PURE__ */ g.jsx(n, {
  ...r,
  ref: i,
  className: Z(e, t && "was-validated")
}));
Gi.displayName = "Form";
Gi.propTypes = If;
const Ke = Object.assign(Gi, {
  Group: Yi,
  Control: Of,
  Floating: Hl,
  Check: Vn,
  Switch: Nf,
  Label: Wl,
  Text: Yl,
  Range: Vl,
  Select: ql,
  FloatingLabel: Kl
}), Ya = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function Pf(e, t) {
  const n = Ya(e), r = Ya(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function ar(e, t) {
  return qe(() => Pf(e, t), [e, t]);
}
const Xl = /* @__PURE__ */ $.createContext(null), Rf = ["as", "active", "eventKey"];
function jf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Ql({
  key: e,
  onClick: t,
  active: n,
  id: r,
  role: i,
  disabled: a
}) {
  const o = Ce(Hn), l = Ce(Wi), s = Ce(Xl);
  let u = n;
  const c = {
    role: i
  };
  if (l) {
    !i && l.role === "tablist" && (c.role = "tab");
    const f = l.getControllerId(e ?? null), d = l.getControlledId(e ?? null);
    c[rr("event-key")] = e, c.id = f || r, u = n == null && e != null ? l.activeKey === e : n, (u || !(s != null && s.unmountOnExit) && !(s != null && s.mountOnEnter)) && (c["aria-controls"] = d);
  }
  return c.role === "tab" && (c["aria-selected"] = u, u || (c.tabIndex = -1), a && (c.tabIndex = -1, c["aria-disabled"] = !0)), c.onClick = ct((f) => {
    a || (t == null || t(f), e != null && o && !f.isPropagationStopped() && o(e, f));
  }), [c, {
    isActive: u
  }];
}
const Jl = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    as: n = Ol,
    active: r,
    eventKey: i
  } = e, a = jf(e, Rf);
  const [o, l] = Ql(Object.assign({
    key: Hi(i, a.href),
    active: r
  }, a));
  return o[rr("active")] = l.isActive, /* @__PURE__ */ g.jsx(n, Object.assign({}, a, o, {
    ref: t
  }));
});
Jl.displayName = "NavItem";
const _f = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Lf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Ga = () => {
}, Ka = rr("event-key"), Zl = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: n = "div",
    onSelect: r,
    activeKey: i,
    role: a,
    onKeyDown: o
  } = e, l = Lf(e, _f);
  const s = xf(), u = Ae(!1), c = Ce(Hn), f = Ce(Xl);
  let d, p;
  f && (a = a || "tablist", i = f.activeKey, d = f.getControlledId, p = f.getControllerId);
  const y = Ae(null), v = (E) => {
    const N = y.current;
    if (!N) return null;
    const S = At(N, `[${Ka}]:not([aria-disabled=true])`), w = N.querySelector("[aria-selected=true]");
    if (!w || w !== document.activeElement) return null;
    const M = S.indexOf(w);
    if (M === -1) return null;
    let Q = M + E;
    return Q >= S.length && (Q = 0), Q < 0 && (Q = S.length - 1), S[Q];
  }, k = (E, N) => {
    E != null && (r == null || r(E, N), c == null || c(E, N));
  }, b = (E) => {
    if (o == null || o(E), !f)
      return;
    let N;
    switch (E.key) {
      case "ArrowLeft":
      case "ArrowUp":
        N = v(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        N = v(1);
        break;
      default:
        return;
    }
    N && (E.preventDefault(), k(N.dataset[Ef("EventKey")] || null, E), u.current = !0, s());
  };
  je(() => {
    if (y.current && u.current) {
      const E = y.current.querySelector(`[${Ka}][aria-selected=true]`);
      E == null || E.focus();
    }
    u.current = !1;
  });
  const A = ar(t, y);
  return /* @__PURE__ */ g.jsx(Hn.Provider, {
    value: k,
    children: /* @__PURE__ */ g.jsx(Wi.Provider, {
      value: {
        role: a,
        // used by NavLink to determine it's role
        activeKey: Hi(i),
        getControlledId: d || Ga,
        getControllerId: p || Ga
      },
      children: /* @__PURE__ */ g.jsx(n, Object.assign({}, l, {
        onKeyDown: b,
        ref: A,
        role: a
      }))
    })
  });
});
Zl.displayName = "Nav";
const Ff = Object.assign(Zl, {
  Item: Jl
});
function Sr(e) {
  e === void 0 && (e = ji());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Df(e) {
  const t = Ae(e);
  return t.current = e, t;
}
function Mf(e) {
  const t = Df(e);
  je(() => () => t.current(), []);
}
function zf(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Xa = rr("modal-open");
class Ki {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1
  } = {}) {
    this.handleContainerOverflow = n, this.isRTL = r, this.modals = [], this.ownerDocument = t;
  }
  getScrollbarWidth() {
    return zf(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {
  }
  removeModalAttributes(t) {
  }
  setContainerStyle(t) {
    const n = {
      overflow: "hidden"
    }, r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.getElement();
    t.style = {
      overflow: i.style.overflow,
      [r]: i.style[r]
    }, t.scrollBarWidth && (n[r] = `${parseInt(ft(i, r) || "0", 10) + t.scrollBarWidth}px`), i.setAttribute(Xa, ""), ft(i, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Xa), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return n !== -1 || (n = this.modals.length, this.modals.push(t), this.setModalAttributes(t), n !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n;
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Tr = (e, t) => tr ? e == null ? (t || ji()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Bf(e, t) {
  const n = Vi(), [r, i] = Ze(() => Tr(e, n == null ? void 0 : n.document));
  if (!r) {
    const a = Tr(e);
    a && i(a);
  }
  return je(() => {
  }, [t, r]), je(() => {
    const a = Tr(e);
    a !== r && i(a);
  }, [e, r]), r;
}
function $f({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i
}) {
  const a = Ae(null), o = Ae(t), l = ct(n);
  je(() => {
    t ? o.current = !0 : l(a.current);
  }, [t, l]);
  const s = ar(a, Kt(e)), u = /* @__PURE__ */ Ri(e, {
    ref: s
  });
  return t ? u : i || !o.current && r ? null : u;
}
const Uf = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function Hf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
function Wf(e) {
  let {
    onEnter: t,
    onEntering: n,
    onEntered: r,
    onExit: i,
    onExiting: a,
    onExited: o,
    addEndListener: l,
    children: s
  } = e, u = Hf(e, Uf);
  const c = Ae(null), f = ar(c, Kt(s)), d = (N) => (S) => {
    N && c.current && N(c.current, S);
  }, p = Ee(d(t), [t]), y = Ee(d(n), [n]), v = Ee(d(r), [r]), k = Ee(d(i), [i]), b = Ee(d(a), [a]), A = Ee(d(o), [o]), E = Ee(d(l), [l]);
  return Object.assign({}, u, {
    nodeRef: c
  }, t && {
    onEnter: p
  }, n && {
    onEntering: y
  }, r && {
    onEntered: v
  }, i && {
    onExit: k
  }, a && {
    onExiting: b
  }, o && {
    onExited: A
  }, l && {
    addEndListener: E
  }, {
    children: typeof s == "function" ? (N, S) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      s(N, Object.assign({}, S, {
        ref: f
      }))
    ) : /* @__PURE__ */ Ri(s, {
      ref: f
    })
  });
}
const Vf = ["component"];
function qf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
const Yf = /* @__PURE__ */ $.forwardRef((e, t) => {
  let {
    component: n
  } = e, r = qf(e, Vf);
  const i = Wf(r);
  return /* @__PURE__ */ g.jsx(n, Object.assign({
    ref: t
  }, i));
});
function Gf({
  in: e,
  onTransition: t
}) {
  const n = Ae(null), r = Ae(!0), i = ct(t);
  return Wa(() => {
    if (!n.current)
      return;
    let a = !1;
    return i({
      in: e,
      element: n.current,
      initial: r.current,
      isStale: () => a
    }), () => {
      a = !0;
    };
  }, [e, i]), Wa(() => (r.current = !1, () => {
    r.current = !0;
  }), []), n;
}
function Kf({
  children: e,
  in: t,
  onExited: n,
  onEntered: r,
  transition: i
}) {
  const [a, o] = Ze(!t);
  t && a && o(!1);
  const l = Gf({
    in: !!t,
    onTransition: (u) => {
      const c = () => {
        u.isStale() || (u.in ? r == null || r(u.element, u.initial) : (o(!0), n == null || n(u.element)));
      };
      Promise.resolve(i(u)).then(c, (f) => {
        throw u.in || o(!0), f;
      });
    }
  }), s = ar(l, Kt(e));
  return a && !t ? null : /* @__PURE__ */ Ri(e, {
    ref: s
  });
}
function Qa(e, t, n) {
  return e ? /* @__PURE__ */ g.jsx(Yf, Object.assign({}, n, {
    component: e
  })) : t ? /* @__PURE__ */ g.jsx(Kf, Object.assign({}, n, {
    transition: t
  })) : /* @__PURE__ */ g.jsx($f, Object.assign({}, n));
}
const Xf = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function Qf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
let Ar;
function Jf(e) {
  return Ar || (Ar = new Ki({
    ownerDocument: e == null ? void 0 : e.document
  })), Ar;
}
function Zf(e) {
  const t = Vi(), n = e || Jf(t), r = Ae({
    dialog: null,
    backdrop: null
  });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: Ee((i) => {
      r.current.dialog = i;
    }, []),
    setBackdropRef: Ee((i) => {
      r.current.backdrop = i;
    }, [])
  });
}
const es = /* @__PURE__ */ lc((e, t) => {
  let {
    show: n = !1,
    role: r = "dialog",
    className: i,
    style: a,
    children: o,
    backdrop: l = !0,
    keyboard: s = !0,
    onBackdropClick: u,
    onEscapeKeyDown: c,
    transition: f,
    runTransition: d,
    backdropTransition: p,
    runBackdropTransition: y,
    autoFocus: v = !0,
    enforceFocus: k = !0,
    restoreFocus: b = !0,
    restoreFocusOptions: A,
    renderDialog: E,
    renderBackdrop: N = (he) => /* @__PURE__ */ g.jsx("div", Object.assign({}, he)),
    manager: S,
    container: w,
    onShow: M,
    onHide: Q = () => {
    },
    onExit: ne,
    onExited: C,
    onExiting: D,
    onEnter: B,
    onEntering: z,
    onEntered: L
  } = e, q = Qf(e, Xf);
  const ae = Vi(), ce = Bf(w), fe = Zf(S), ve = ef(), h = tf(n), [R, G] = Ze(!n), m = Ae(null);
  sc(t, () => fe, [fe]), tr && !h && n && (m.current = Sr(ae == null ? void 0 : ae.document)), n && R && G(!1);
  const F = ct(() => {
    if (fe.add(), te.current = Un(document, "keydown", ee), re.current = Un(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(W),
      !0
    ), M && M(), v) {
      var he, St;
      const lt = Sr((he = (St = fe.dialog) == null ? void 0 : St.ownerDocument) != null ? he : ae == null ? void 0 : ae.document);
      fe.dialog && lt && !Va(fe.dialog, lt) && (m.current = lt, fe.dialog.focus());
    }
  }), X = ct(() => {
    if (fe.remove(), te.current == null || te.current(), re.current == null || re.current(), b) {
      var he;
      (he = m.current) == null || he.focus == null || he.focus(A), m.current = null;
    }
  });
  je(() => {
    !n || !ce || F();
  }, [
    n,
    ce,
    /* should never change: */
    F
  ]), je(() => {
    R && X();
  }, [R, X]), Mf(() => {
    X();
  });
  const W = ct(() => {
    if (!k || !ve() || !fe.isTopModal())
      return;
    const he = Sr(ae == null ? void 0 : ae.document);
    fe.dialog && he && !Va(fe.dialog, he) && fe.dialog.focus();
  }), J = ct((he) => {
    he.target === he.currentTarget && (u == null || u(he), l === !0 && Q());
  }), ee = ct((he) => {
    s && Dc(he) && fe.isTopModal() && (c == null || c(he), he.defaultPrevented || Q());
  }), re = Ae(), te = Ae(), we = (...he) => {
    G(!0), C == null || C(...he);
  };
  if (!ce)
    return null;
  const _ = Object.assign({
    role: r,
    ref: fe.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": r === "dialog" ? !0 : void 0
  }, q, {
    style: a,
    className: i,
    tabIndex: -1
  });
  let Oe = E ? E(_) : /* @__PURE__ */ g.jsx("div", Object.assign({}, _, {
    children: /* @__PURE__ */ $.cloneElement(o, {
      role: "document"
    })
  }));
  Oe = Qa(f, d, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: ne,
    onExiting: D,
    onExited: we,
    onEnter: B,
    onEntering: z,
    onEntered: L,
    children: Oe
  });
  let Fe = null;
  return l && (Fe = N({
    ref: fe.setBackdropRef,
    onClick: J
  }), Fe = Qa(p, y, {
    in: !!n,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: Fe
  })), /* @__PURE__ */ g.jsx(g.Fragment, {
    children: /* @__PURE__ */ Ut.createPortal(/* @__PURE__ */ g.jsxs(g.Fragment, {
      children: [Fe, Oe]
    }), ce)
  });
});
es.displayName = "Modal";
const ed = Object.assign(es, {
  Manager: Ki
});
function td(e, t) {
  return e.classList ? e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function nd(e, t) {
  e.classList ? e.classList.add(t) : td(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Ja(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function rd(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Ja(e.className, t) : e.setAttribute("class", Ja(e.className && e.className.baseVal || "", t));
}
const Ft = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class ts extends Ki {
  adjustAndStore(t, n, r) {
    const i = n.style[t];
    n.dataset[t] = i, ft(n, {
      [t]: `${parseFloat(ft(n, t)) + r}px`
    });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], ft(n, {
      [t]: r
    }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if (nd(n, "modal-open"), !t.scrollBarWidth) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    At(n, Ft.FIXED_CONTENT).forEach((a) => this.adjustAndStore(r, a, t.scrollBarWidth)), At(n, Ft.STICKY_CONTENT).forEach((a) => this.adjustAndStore(i, a, -t.scrollBarWidth)), At(n, Ft.NAVBAR_TOGGLER).forEach((a) => this.adjustAndStore(i, a, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    rd(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    At(n, Ft.FIXED_CONTENT).forEach((a) => this.restore(r, a)), At(n, Ft.STICKY_CONTENT).forEach((a) => this.restore(i, a)), At(n, Ft.NAVBAR_TOGGLER).forEach((a) => this.restore(i, a));
  }
}
let Or;
function id(e) {
  return Or || (Or = new ts(e)), Or;
}
const ns = /* @__PURE__ */ $.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), ad = /* @__PURE__ */ $.forwardRef(({
  closeLabel: e = "Close",
  closeVariant: t,
  closeButton: n = !1,
  onHide: r,
  children: i,
  ...a
}, o) => {
  const l = Ce(ns), s = nr(() => {
    l == null || l.onHide(), r == null || r();
  });
  return /* @__PURE__ */ g.jsxs("div", {
    ref: o,
    ...a,
    children: [i, n && /* @__PURE__ */ g.jsx(Bi, {
      "aria-label": e,
      variant: t,
      onClick: s
    })]
  });
}), rs = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "nav-item"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
rs.displayName = "NavItem";
const is = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n = zi,
  active: r,
  eventKey: i,
  disabled: a = !1,
  ...o
}, l) => {
  e = se(e, "nav-link");
  const [s, u] = Ql({
    key: Hi(i, o.href),
    active: r,
    disabled: a,
    ...o
  });
  return /* @__PURE__ */ g.jsx(n, {
    ...o,
    ...s,
    ref: l,
    disabled: a,
    className: Z(t, e, a && "disabled", u.isActive && "active")
  });
});
is.displayName = "NavLink";
const as = /* @__PURE__ */ $.forwardRef((e, t) => {
  const {
    as: n = "div",
    bsPrefix: r,
    variant: i,
    fill: a = !1,
    justify: o = !1,
    navbar: l,
    navbarScroll: s,
    className: u,
    activeKey: c,
    ...f
  } = kl(e, {
    activeKey: "onSelect"
  }), d = se(r, "nav");
  let p, y, v = !1;
  const k = Ce(Xt), b = Ce(Ui);
  return k ? (p = k.bsPrefix, v = l ?? !0) : b && ({
    cardHeaderBsPrefix: y
  } = b), /* @__PURE__ */ g.jsx(Ff, {
    as: n,
    ref: t,
    activeKey: c,
    className: Z(u, {
      [d]: !v,
      [`${p}-nav`]: v,
      [`${p}-nav-scroll`]: v && s,
      [`${y}-${i}`]: !!y,
      [`${d}-${i}`]: !!i,
      [`${d}-fill`]: a,
      [`${d}-justified`]: o
    }),
    ...f
  });
});
as.displayName = "Nav";
const Dt = Object.assign(as, {
  Item: rs,
  Link: is
}), os = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  as: n,
  ...r
}, i) => {
  e = se(e, "navbar-brand");
  const a = n || (r.href ? "a" : "span");
  return /* @__PURE__ */ g.jsx(a, {
    ...r,
    ref: i,
    className: Z(t, e)
  });
});
os.displayName = "NavbarBrand";
const ls = /* @__PURE__ */ $.forwardRef(({
  children: e,
  bsPrefix: t,
  ...n
}, r) => {
  t = se(t, "navbar-collapse");
  const i = Ce(Xt);
  return /* @__PURE__ */ g.jsx(Qc, {
    in: !!(i && i.expanded),
    ...n,
    children: /* @__PURE__ */ g.jsx("div", {
      ref: r,
      className: t,
      children: e
    })
  });
});
ls.displayName = "NavbarCollapse";
const ss = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  label: r = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: i = "button",
  onClick: a,
  ...o
}, l) => {
  e = se(e, "navbar-toggler");
  const {
    onToggle: s,
    expanded: u
  } = Ce(Xt) || {}, c = nr((f) => {
    a && a(f), s && s();
  });
  return i === "button" && (o.type = "button"), /* @__PURE__ */ g.jsx(i, {
    ...o,
    ref: l,
    onClick: c,
    "aria-label": r,
    className: Z(t, e, !u && "collapsed"),
    children: n || /* @__PURE__ */ g.jsx("span", {
      className: `${e}-icon`
    })
  });
});
ss.displayName = "NavbarToggle";
const ni = /* @__PURE__ */ new WeakMap(), Za = (e, t) => {
  if (!e || !t) return;
  const n = ni.get(t) || /* @__PURE__ */ new Map();
  ni.set(t, n);
  let r = n.get(e);
  return r || (r = t.matchMedia(e), r.refCount = 0, n.set(r.media, r)), r;
};
function od(e, t = typeof window > "u" ? void 0 : window) {
  const n = Za(e, t), [r, i] = Ze(() => n ? n.matches : !1);
  return Tf(() => {
    let a = Za(e, t);
    if (!a)
      return i(!1);
    let o = ni.get(t);
    const l = () => {
      i(a.matches);
    };
    return a.refCount++, a.addListener(l), l(), () => {
      a.removeListener(l), a.refCount--, a.refCount <= 0 && (o == null || o.delete(a.media)), a = void 0;
    };
  }, [e]), r;
}
function ld(e) {
  const t = Object.keys(e);
  function n(l, s) {
    return l === s ? s : l ? `${l} and ${s}` : s;
  }
  function r(l) {
    return t[Math.min(t.indexOf(l) + 1, t.length - 1)];
  }
  function i(l) {
    const s = r(l);
    let u = e[s];
    return typeof u == "number" ? u = `${u - 0.2}px` : u = `calc(${u} - 0.2px)`, `(max-width: ${u})`;
  }
  function a(l) {
    let s = e[l];
    return typeof s == "number" && (s = `${s}px`), `(min-width: ${s})`;
  }
  function o(l, s, u) {
    let c;
    typeof l == "object" ? (c = l, u = s, s = !0) : (s = s || !0, c = {
      [l]: s
    });
    let f = qe(() => Object.entries(c).reduce((d, [p, y]) => ((y === "up" || y === !0) && (d = n(d, a(p))), (y === "down" || y === !0) && (d = n(d, i(p))), d), ""), [JSON.stringify(c)]);
    return od(f, u);
  }
  return o;
}
const sd = ld({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}), us = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "div",
  ...r
}, i) => (t = se(t, "offcanvas-body"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
us.displayName = "OffcanvasBody";
const ud = {
  [Je]: "show",
  [ut]: "show"
}, cs = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  in: r = !1,
  mountOnEnter: i = !1,
  unmountOnExit: a = !1,
  appear: o = !1,
  ...l
}, s) => (e = se(e, "offcanvas"), /* @__PURE__ */ g.jsx(Fi, {
  ref: s,
  addEndListener: Li,
  in: r,
  mountOnEnter: i,
  unmountOnExit: a,
  appear: o,
  ...l,
  childRef: Kt(n),
  children: (u, c) => /* @__PURE__ */ $.cloneElement(n, {
    ...c,
    className: Z(t, n.props.className, (u === Je || u === mn) && `${e}-toggling`, ud[u])
  })
})));
cs.displayName = "OffcanvasToggling";
const fs = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  closeLabel: n = "Close",
  closeButton: r = !1,
  ...i
}, a) => (e = se(e, "offcanvas-header"), /* @__PURE__ */ g.jsx(ad, {
  ref: a,
  ...i,
  className: Z(t, e),
  closeLabel: n,
  closeButton: r
})));
fs.displayName = "OffcanvasHeader";
const cd = Di("h5"), ds = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = cd,
  ...r
}, i) => (t = se(t, "offcanvas-title"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ds.displayName = "OffcanvasTitle";
function fd(e) {
  return /* @__PURE__ */ g.jsx(cs, {
    ...e
  });
}
function dd(e) {
  return /* @__PURE__ */ g.jsx(Nl, {
    ...e
  });
}
const ps = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  children: n,
  "aria-labelledby": r,
  placement: i = "start",
  responsive: a,
  /* BaseModal props */
  show: o = !1,
  backdrop: l = !0,
  keyboard: s = !0,
  scroll: u = !1,
  onEscapeKeyDown: c,
  onShow: f,
  onHide: d,
  container: p,
  autoFocus: y = !0,
  enforceFocus: v = !0,
  restoreFocus: k = !0,
  restoreFocusOptions: b,
  onEntered: A,
  onExit: E,
  onExiting: N,
  onEnter: S,
  onEntering: w,
  onExited: M,
  backdropClassName: Q,
  manager: ne,
  renderStaticNode: C = !1,
  ...D
}, B) => {
  const z = Ae();
  e = se(e, "offcanvas");
  const [L, q] = Ze(!1), ae = nr(d), ce = sd(a || "xs", "up");
  je(() => {
    q(a ? o && !ce : o);
  }, [o, a, ce]);
  const fe = qe(() => ({
    onHide: ae
  }), [ae]);
  function ve() {
    return ne || (u ? (z.current || (z.current = new ts({
      handleContainerOverflow: !1
    })), z.current) : id());
  }
  const h = (F, ...X) => {
    F && (F.style.visibility = "visible"), S == null || S(F, ...X);
  }, R = (F, ...X) => {
    F && (F.style.visibility = ""), M == null || M(...X);
  }, G = Ee((F) => /* @__PURE__ */ g.jsx("div", {
    ...F,
    className: Z(`${e}-backdrop`, Q)
  }), [Q, e]), m = (F) => /* @__PURE__ */ g.jsx("div", {
    ...F,
    ...D,
    className: Z(t, a ? `${e}-${a}` : e, `${e}-${i}`),
    "aria-labelledby": r,
    children: n
  });
  return /* @__PURE__ */ g.jsxs(g.Fragment, {
    children: [!L && (a || C) && m({}), /* @__PURE__ */ g.jsx(ns.Provider, {
      value: fe,
      children: /* @__PURE__ */ g.jsx(ed, {
        show: L,
        ref: B,
        backdrop: l,
        container: p,
        keyboard: s,
        autoFocus: y,
        enforceFocus: v && !u,
        restoreFocus: k,
        restoreFocusOptions: b,
        onEscapeKeyDown: c,
        onShow: f,
        onHide: ae,
        onEnter: h,
        onEntering: w,
        onEntered: A,
        onExit: E,
        onExiting: N,
        onExited: R,
        manager: ve(),
        transition: fd,
        backdropTransition: dd,
        renderBackdrop: G,
        renderDialog: m
      })
    })]
  });
});
ps.displayName = "Offcanvas";
const pd = Object.assign(ps, {
  Body: us,
  Header: fs,
  Title: ds
}), hs = /* @__PURE__ */ $.forwardRef(({
  onHide: e,
  ...t
}, n) => {
  const r = Ce(Xt), i = nr(() => {
    r == null || r.onToggle == null || r.onToggle(), e == null || e();
  });
  return /* @__PURE__ */ g.jsx(pd, {
    ref: n,
    show: !!(r != null && r.expanded),
    ...t,
    renderStaticNode: !0,
    onHide: i
  });
});
hs.displayName = "NavbarOffcanvas";
const ms = /* @__PURE__ */ $.forwardRef(({
  className: e,
  bsPrefix: t,
  as: n = "span",
  ...r
}, i) => (t = se(t, "navbar-text"), /* @__PURE__ */ g.jsx(n, {
  ref: i,
  className: Z(e, t),
  ...r
})));
ms.displayName = "NavbarText";
const gs = /* @__PURE__ */ $.forwardRef((e, t) => {
  const {
    bsPrefix: n,
    expand: r = !0,
    variant: i = "light",
    bg: a,
    fixed: o,
    sticky: l,
    className: s,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: u = "nav",
    expanded: c,
    onToggle: f,
    onSelect: d,
    collapseOnSelect: p = !1,
    ...y
  } = kl(e, {
    expanded: "onToggle"
  }), v = se(n, "navbar"), k = Ee((...E) => {
    d == null || d(...E), p && c && (f == null || f(!1));
  }, [d, p, c, f]);
  y.role === void 0 && u !== "nav" && (y.role = "navigation");
  let b = `${v}-expand`;
  typeof r == "string" && (b = `${b}-${r}`);
  const A = qe(() => ({
    onToggle: () => f == null ? void 0 : f(!c),
    bsPrefix: v,
    expanded: !!c,
    expand: r
  }), [v, c, r, f]);
  return /* @__PURE__ */ g.jsx(Xt.Provider, {
    value: A,
    children: /* @__PURE__ */ g.jsx(Hn.Provider, {
      value: k,
      children: /* @__PURE__ */ g.jsx(u, {
        ref: t,
        ...y,
        className: Z(s, v, r && b, i && `${v}-${i}`, a && `bg-${a}`, l && `sticky-${l}`, o && `fixed-${o}`)
      })
    })
  });
});
gs.displayName = "Navbar";
const Rn = Object.assign(gs, {
  Brand: os,
  Collapse: ls,
  Offcanvas: hs,
  Text: ms,
  Toggle: ss
}), Xi = /* @__PURE__ */ $.forwardRef(({
  active: e = !1,
  disabled: t = !1,
  className: n,
  style: r,
  activeLabel: i = "(current)",
  children: a,
  linkStyle: o,
  linkClassName: l,
  as: s = zi,
  ...u
}, c) => {
  const f = e || t ? "span" : s;
  return /* @__PURE__ */ g.jsx("li", {
    ref: c,
    style: r,
    className: Z(n, "page-item", {
      active: e,
      disabled: t
    }),
    children: /* @__PURE__ */ g.jsxs(f, {
      className: Z("page-link", l),
      style: o,
      ...u,
      children: [a, e && i && /* @__PURE__ */ g.jsx("span", {
        className: "visually-hidden",
        children: i
      })]
    })
  });
});
Xi.displayName = "PageItem";
function kn(e, t, n = e) {
  const r = /* @__PURE__ */ $.forwardRef(({
    children: i,
    ...a
  }, o) => /* @__PURE__ */ g.jsxs(Xi, {
    ...a,
    ref: o,
    children: [/* @__PURE__ */ g.jsx("span", {
      "aria-hidden": "true",
      children: i || t
    }), /* @__PURE__ */ g.jsx("span", {
      className: "visually-hidden",
      children: n
    })]
  }));
  return r.displayName = e, r;
}
const hd = kn("First", "«"), md = kn("Prev", "‹", "Previous"), gd = kn("Ellipsis", "…", "More"), yd = kn("Next", "›"), xd = kn("Last", "»"), ys = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  size: n,
  ...r
}, i) => {
  const a = se(e, "pagination");
  return /* @__PURE__ */ g.jsx("ul", {
    ref: i,
    ...r,
    className: Z(t, a, n && `${a}-${n}`)
  });
});
ys.displayName = "Pagination";
const Mt = Object.assign(ys, {
  First: hd,
  Prev: md,
  Ellipsis: gd,
  Item: Xi,
  Next: yd,
  Last: xd
}), Te = /* @__PURE__ */ $.forwardRef(({
  bsPrefix: e,
  className: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "div",
  ...r
}, i) => {
  const a = se(e, "row"), o = wl(), l = El(), s = `${a}-cols`, u = [];
  return o.forEach((c) => {
    const f = r[c];
    delete r[c];
    let d;
    f != null && typeof f == "object" ? {
      cols: d
    } = f : d = f;
    const p = c !== l ? `-${c}` : "";
    d != null && u.push(`${s}${p}-${d}`);
  }), /* @__PURE__ */ g.jsx(n, {
    ref: i,
    ...r,
    className: Z(t, a, ...u)
  });
});
Te.displayName = "Row";
const yb = ({ image_link: e }) => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsx("img", { src: e, className: "img-fluid rounded mt-2 mb-2", alt: "Article" }) }) }) }), xb = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ g.jsxs(Me, { className: "", children: [
  /* @__PURE__ */ g.jsx(Me.Img, { className: "card-img-container p-3", variant: "top", src: t }),
  /* @__PURE__ */ g.jsxs(Me.Body, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ g.jsx(Me.Title, { children: r }) }),
    /* @__PURE__ */ g.jsx(Me.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ g.jsx("div", { className: "text-center", children: /* @__PURE__ */ g.jsx(Rt, { className: "button-custom-color", href: n, children: "Explore" }) })
  ] })
] }), bd = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ g.jsxs(Me, { className: "", children: [
  /* @__PURE__ */ g.jsx(Me.Img, { className: "card-img-container p-3 ", variant: "top", src: t }),
  /* @__PURE__ */ g.jsxs(Me.Body, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ g.jsx(Me.Title, { children: r }) }),
    /* @__PURE__ */ g.jsx(Me.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ g.jsx("div", { className: "text-center", children: /* @__PURE__ */ g.jsx(Rt, { className: "button-custom-color", href: n, children: "Explore" }) })
  ] })
] }), bb = ({ cardData: e }) => /* @__PURE__ */ g.jsx(Te, { children: e.map((t, n) => /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4, className: "mt-3", children: /* @__PURE__ */ g.jsx(
  bd,
  {
    card_title: t.card_title,
    card_para: t.card_para,
    img_src: t.img_src,
    card_url: t.card_url
  }
) }, n)) }), vb = ({ children: e }) => /* @__PURE__ */ g.jsx("div", { className: "custom-body", children: /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { children: /* @__PURE__ */ g.jsx(ye, { children: e }) }) }) }), kb = () => {
  const [e, t] = Ze(!1), n = (/* @__PURE__ */ new Date()).getFullYear(), r = (i) => {
    i.preventDefault(), i.currentTarget.checkValidity() || i.stopPropagation(), t(!0);
  };
  return /* @__PURE__ */ g.jsx($e, { fluid: !0, className: "footer-header-color ", children: /* @__PURE__ */ g.jsxs(Ke, { noValidate: !0, validated: e, onSubmit: r, children: [
    /* @__PURE__ */ g.jsx(Te, { id: "contact", className: "text-center", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsx("h1", { className: "bio-font font-color-class heading-responsive-font p-2 mt-3", children: "Contact Me" }) }) }),
    /* @__PURE__ */ g.jsxs(Te, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ g.jsxs(Ke.Group, { controlId: "validationName", children: [
        /* @__PURE__ */ g.jsx(
          Ke.Control,
          {
            required: !0,
            type: "text",
            placeholder: "Name",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ g.jsx(Ke.Control.Feedback, { type: "invalid", children: "Please provide your name." })
      ] }) }),
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ g.jsxs(Te, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ g.jsxs(Ke.Group, { controlId: "validationEmail", children: [
        /* @__PURE__ */ g.jsx(
          Ke.Control,
          {
            required: !0,
            type: "email",
            placeholder: "Email",
            className: "me-2 custom-border form-control custom-placeholder"
          }
        ),
        /* @__PURE__ */ g.jsx(Ke.Control.Feedback, { type: "invalid", children: "Please provide a valid email." })
      ] }) }),
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ g.jsxs(Te, { id: "contact", className: "text-center p-2", children: [
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4 }),
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4, children: /* @__PURE__ */ g.jsxs(Ke.Group, { controlId: "validationMessage", children: [
        /* @__PURE__ */ g.jsx(
          Ke.Control,
          {
            required: !0,
            as: "textarea",
            placeholder: "Message",
            className: "me-2 custom-border form-control custom-placeholder message-inp"
          }
        ),
        /* @__PURE__ */ g.jsx(Ke.Control.Feedback, { type: "invalid", children: "Please enter a message." })
      ] }) }),
      /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4 })
    ] }),
    /* @__PURE__ */ g.jsx(Te, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsx(Rt, { type: "submit", className: "button-custom-color", children: "Submit" }) }) }),
    /* @__PURE__ */ g.jsx(Te, { id: "contact", className: "text-center p-2", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsxs("div", { className: "mb-3 mt-3", children: [
      "© ",
      n,
      " Copyright:",
      /* @__PURE__ */ g.jsx("a", { className: "copyright", href: "https://meabhi.me/", children: " meabhi.me" })
    ] }) }) })
  ] }) });
}, wb = ({ title: e }) => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsx("h1", { className: "bio-font font-color-class heading-responsive-font m-0", children: e }) }) }) });
function vd(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const kd = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, wd = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ed = {};
function eo(e, t) {
  return (Ed.jsx ? wd : kd).test(e);
}
const Cd = /[ \t\n\f\r]/g;
function Sd(e) {
  return typeof e == "object" ? e.type === "text" ? to(e.value) : !1 : to(e);
}
function to(e) {
  return e.replace(Cd, "") === "";
}
class wn {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
wn.prototype.normal = {};
wn.prototype.property = {};
wn.prototype.space = void 0;
function xs(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new wn(n, r, t);
}
function ri(e) {
  return e.toLowerCase();
}
class Ue {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
Ue.prototype.attribute = "";
Ue.prototype.booleanish = !1;
Ue.prototype.boolean = !1;
Ue.prototype.commaOrSpaceSeparated = !1;
Ue.prototype.commaSeparated = !1;
Ue.prototype.defined = !1;
Ue.prototype.mustUseProperty = !1;
Ue.prototype.number = !1;
Ue.prototype.overloadedBoolean = !1;
Ue.prototype.property = "";
Ue.prototype.spaceSeparated = !1;
Ue.prototype.space = void 0;
let Td = 0;
const le = jt(), Se = jt(), bs = jt(), P = jt(), be = jt(), Vt = jt(), Ve = jt();
function jt() {
  return 2 ** ++Td;
}
const ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: le,
  booleanish: Se,
  commaOrSpaceSeparated: Ve,
  commaSeparated: Vt,
  number: P,
  overloadedBoolean: bs,
  spaceSeparated: be
}, Symbol.toStringTag, { value: "Module" })), Nr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(ii)
);
class Qi extends Ue {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let a = -1;
    if (super(t, n), no(this, "space", i), typeof r == "number")
      for (; ++a < Nr.length; ) {
        const o = Nr[a];
        no(this, Nr[a], (r & ii[o]) === ii[o]);
      }
  }
}
Qi.prototype.defined = !0;
function no(e, t, n) {
  n && (e[t] = n);
}
function Qt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const a = new Qi(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[ri(r)] = r, n[ri(a.attribute)] = r;
  }
  return new wn(t, n, e.space);
}
const vs = Qt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Se,
    ariaAutoComplete: null,
    ariaBusy: Se,
    ariaChecked: Se,
    ariaColCount: P,
    ariaColIndex: P,
    ariaColSpan: P,
    ariaControls: be,
    ariaCurrent: null,
    ariaDescribedBy: be,
    ariaDetails: null,
    ariaDisabled: Se,
    ariaDropEffect: be,
    ariaErrorMessage: null,
    ariaExpanded: Se,
    ariaFlowTo: be,
    ariaGrabbed: Se,
    ariaHasPopup: null,
    ariaHidden: Se,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: be,
    ariaLevel: P,
    ariaLive: null,
    ariaModal: Se,
    ariaMultiLine: Se,
    ariaMultiSelectable: Se,
    ariaOrientation: null,
    ariaOwns: be,
    ariaPlaceholder: null,
    ariaPosInSet: P,
    ariaPressed: Se,
    ariaReadOnly: Se,
    ariaRelevant: null,
    ariaRequired: Se,
    ariaRoleDescription: be,
    ariaRowCount: P,
    ariaRowIndex: P,
    ariaRowSpan: P,
    ariaSelected: Se,
    ariaSetSize: P,
    ariaSort: null,
    ariaValueMax: P,
    ariaValueMin: P,
    ariaValueNow: P,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function ks(e, t) {
  return t in e ? e[t] : t;
}
function ws(e, t) {
  return ks(e, t.toLowerCase());
}
const Ad = Qt({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Vt,
    acceptCharset: be,
    accessKey: be,
    action: null,
    allow: null,
    allowFullScreen: le,
    allowPaymentRequest: le,
    allowUserMedia: le,
    alt: null,
    as: null,
    async: le,
    autoCapitalize: null,
    autoComplete: be,
    autoFocus: le,
    autoPlay: le,
    blocking: be,
    capture: null,
    charSet: null,
    checked: le,
    cite: null,
    className: be,
    cols: P,
    colSpan: null,
    content: null,
    contentEditable: Se,
    controls: le,
    controlsList: be,
    coords: P | Vt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: le,
    defer: le,
    dir: null,
    dirName: null,
    disabled: le,
    download: bs,
    draggable: Se,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: le,
    formTarget: null,
    headers: be,
    height: P,
    hidden: le,
    high: P,
    href: null,
    hrefLang: null,
    htmlFor: be,
    httpEquiv: be,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: le,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: le,
    itemId: null,
    itemProp: be,
    itemRef: be,
    itemScope: le,
    itemType: be,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: le,
    low: P,
    manifest: null,
    max: null,
    maxLength: P,
    media: null,
    method: null,
    min: null,
    minLength: P,
    multiple: le,
    muted: le,
    name: null,
    nonce: null,
    noModule: le,
    noValidate: le,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: le,
    optimum: P,
    pattern: null,
    ping: be,
    placeholder: null,
    playsInline: le,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: le,
    referrerPolicy: null,
    rel: be,
    required: le,
    reversed: le,
    rows: P,
    rowSpan: P,
    sandbox: be,
    scope: null,
    scoped: le,
    seamless: le,
    selected: le,
    shadowRootClonable: le,
    shadowRootDelegatesFocus: le,
    shadowRootMode: null,
    shape: null,
    size: P,
    sizes: null,
    slot: null,
    span: P,
    spellCheck: Se,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: P,
    step: null,
    style: null,
    tabIndex: P,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: le,
    useMap: null,
    value: Se,
    width: P,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: be,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: P,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: P,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: le,
    // Lists. Use CSS to reduce space between items instead
    declare: le,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: P,
    // `<img>` and `<object>`
    leftMargin: P,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: P,
    // `<body>`
    marginWidth: P,
    // `<body>`
    noResize: le,
    // `<frame>`
    noHref: le,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: le,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: le,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: P,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Se,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: P,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: P,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: le,
    disableRemotePlayback: le,
    prefix: null,
    property: null,
    results: P,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ws
}), Od = Qt({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Ve,
    accentHeight: P,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: P,
    amplitude: P,
    arabicForm: null,
    ascent: P,
    attributeName: null,
    attributeType: null,
    azimuth: P,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: P,
    by: null,
    calcMode: null,
    capHeight: P,
    className: be,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: P,
    diffuseConstant: P,
    direction: null,
    display: null,
    dur: null,
    divisor: P,
    dominantBaseline: null,
    download: le,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: P,
    enableBackground: null,
    end: null,
    event: null,
    exponent: P,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: P,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Vt,
    g2: Vt,
    glyphName: Vt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: P,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: P,
    horizOriginX: P,
    horizOriginY: P,
    id: null,
    ideographic: P,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: P,
    k: P,
    k1: P,
    k2: P,
    k3: P,
    k4: P,
    kernelMatrix: Ve,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: P,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: P,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: P,
    overlineThickness: P,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: P,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: be,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: P,
    pointsAtY: P,
    pointsAtZ: P,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ve,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ve,
    rev: Ve,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ve,
    requiredFeatures: Ve,
    requiredFonts: Ve,
    requiredFormats: Ve,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: P,
    specularExponent: P,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: P,
    strikethroughThickness: P,
    string: null,
    stroke: null,
    strokeDashArray: Ve,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: P,
    strokeOpacity: P,
    strokeWidth: null,
    style: null,
    surfaceScale: P,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ve,
    tabIndex: P,
    tableValues: null,
    target: null,
    targetX: P,
    targetY: P,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ve,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: P,
    underlineThickness: P,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: P,
    values: null,
    vAlphabetic: P,
    vMathematical: P,
    vectorEffect: null,
    vHanging: P,
    vIdeographic: P,
    version: null,
    vertAdvY: P,
    vertOriginX: P,
    vertOriginY: P,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: P,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: ks
}), Es = Qt({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Cs = Qt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ws
}), Ss = Qt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Nd = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Id = /[A-Z]/g, ro = /-[a-z]/g, Pd = /^data[-\w.:]+$/i;
function Rd(e, t) {
  const n = ri(t);
  let r = t, i = Ue;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Pd.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(ro, _d);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!ro.test(a)) {
        let o = a.replace(Id, jd);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Qi;
  }
  return new i(r, t);
}
function jd(e) {
  return "-" + e.toLowerCase();
}
function _d(e) {
  return e.charAt(1).toUpperCase();
}
const Ld = xs([vs, Ad, Es, Cs, Ss], "html"), Ji = xs([vs, Od, Es, Cs, Ss], "svg");
function Fd(e) {
  return e.join(" ").trim();
}
var zt = {}, Ir, io;
function Dd() {
  if (io) return Ir;
  io = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, l = /^\s+|\s+$/g, s = `
`, u = "/", c = "*", f = "", d = "comment", p = "declaration";
  Ir = function(v, k) {
    if (typeof v != "string")
      throw new TypeError("First argument must be a string");
    if (!v) return [];
    k = k || {};
    var b = 1, A = 1;
    function E(z) {
      var L = z.match(t);
      L && (b += L.length);
      var q = z.lastIndexOf(s);
      A = ~q ? z.length - q : A + z.length;
    }
    function N() {
      var z = { line: b, column: A };
      return function(L) {
        return L.position = new S(z), Q(), L;
      };
    }
    function S(z) {
      this.start = z, this.end = { line: b, column: A }, this.source = k.source;
    }
    S.prototype.content = v;
    function w(z) {
      var L = new Error(
        k.source + ":" + b + ":" + A + ": " + z
      );
      if (L.reason = z, L.filename = k.source, L.line = b, L.column = A, L.source = v, !k.silent) throw L;
    }
    function M(z) {
      var L = z.exec(v);
      if (L) {
        var q = L[0];
        return E(q), v = v.slice(q.length), L;
      }
    }
    function Q() {
      M(n);
    }
    function ne(z) {
      var L;
      for (z = z || []; L = C(); )
        L !== !1 && z.push(L);
      return z;
    }
    function C() {
      var z = N();
      if (!(u != v.charAt(0) || c != v.charAt(1))) {
        for (var L = 2; f != v.charAt(L) && (c != v.charAt(L) || u != v.charAt(L + 1)); )
          ++L;
        if (L += 2, f === v.charAt(L - 1))
          return w("End of comment missing");
        var q = v.slice(2, L - 2);
        return A += 2, E(q), v = v.slice(L), A += 2, z({
          type: d,
          comment: q
        });
      }
    }
    function D() {
      var z = N(), L = M(r);
      if (L) {
        if (C(), !M(i)) return w("property missing ':'");
        var q = M(a), ae = z({
          type: p,
          property: y(L[0].replace(e, f)),
          value: q ? y(q[0].replace(e, f)) : f
        });
        return M(o), ae;
      }
    }
    function B() {
      var z = [];
      ne(z);
      for (var L; L = D(); )
        L !== !1 && (z.push(L), ne(z));
      return z;
    }
    return Q(), B();
  };
  function y(v) {
    return v ? v.replace(l, f) : f;
  }
  return Ir;
}
var ao;
function Md() {
  if (ao) return zt;
  ao = 1;
  var e = zt && zt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(zt, "__esModule", { value: !0 }), zt.default = n;
  var t = e(Dd());
  function n(r, i) {
    var a = null;
    if (!r || typeof r != "string")
      return a;
    var o = (0, t.default)(r), l = typeof i == "function";
    return o.forEach(function(s) {
      if (s.type === "declaration") {
        var u = s.property, c = s.value;
        l ? i(u, c, s) : c && (a = a || {}, a[u] = c);
      }
    }), a;
  }
  return zt;
}
var zd = Md();
const oo = /* @__PURE__ */ vn(zd), Bd = oo.default || oo, Ts = As("end"), Zi = As("start");
function As(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function $d(e) {
  const t = Zi(e), n = Ts(e);
  if (t && n)
    return { start: t, end: n };
}
function cn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? lo(e.position) : "start" in e || "end" in e ? lo(e) : "line" in e || "column" in e ? ai(e) : "";
}
function ai(e) {
  return so(e && e.line) + ":" + so(e && e.column);
}
function lo(e) {
  return ai(e && e.start) + "-" + ai(e && e.end);
}
function so(e) {
  return e && typeof e == "number" ? e : 1;
}
class Le extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", a = {}, o = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? i = t : !a.cause && t && (o = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? a.ruleId = r : (a.source = r.slice(0, s), a.ruleId = r.slice(s + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const s = a.ancestors[a.ancestors.length - 1];
      s && (a.place = s.position);
    }
    const l = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = l ? l.line : void 0, this.name = cn(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Le.prototype.file = "";
Le.prototype.name = "";
Le.prototype.reason = "";
Le.prototype.message = "";
Le.prototype.stack = "";
Le.prototype.column = void 0;
Le.prototype.line = void 0;
Le.prototype.ancestors = void 0;
Le.prototype.cause = void 0;
Le.prototype.fatal = void 0;
Le.prototype.place = void 0;
Le.prototype.ruleId = void 0;
Le.prototype.source = void 0;
const ea = {}.hasOwnProperty, Ud = /* @__PURE__ */ new Map(), Hd = /[A-Z]/g, Wd = /-([a-z])/g, Vd = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), qd = /* @__PURE__ */ new Set(["td", "th"]), Os = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Yd(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = tp(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = ep(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Ji : Ld,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Ns(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Ns(e, t, n) {
  if (t.type === "element")
    return Gd(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Kd(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Qd(e, t, n);
  if (t.type === "mdxjsEsm")
    return Xd(e, t);
  if (t.type === "root")
    return Jd(e, t, n);
  if (t.type === "text")
    return Zd(e, t);
}
function Gd(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Ji, e.schema = i), e.ancestors.push(t);
  const a = Ps(e, t.tagName, !1), o = np(e, t);
  let l = na(e, t);
  return Vd.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !Sd(s) : !0;
  })), Is(e, o, a, t), ta(o, l), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Kd(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  gn(e, t.position);
}
function Xd(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  gn(e, t.position);
}
function Qd(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Ji, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Ps(e, t.name, !0), o = rp(e, t), l = na(e, t);
  return Is(e, o, a, t), ta(o, l), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Jd(e, t, n) {
  const r = {};
  return ta(r, na(e, t)), e.create(t, e.Fragment, r, n);
}
function Zd(e, t) {
  return t.value;
}
function Is(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function ta(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function ep(e, t, n) {
  return r;
  function r(i, a, o, l) {
    const u = Array.isArray(o.children) ? n : t;
    return l ? u(a, o, l) : u(a, o);
  }
}
function tp(e, t) {
  return n;
  function n(r, i, a, o) {
    const l = Array.isArray(a.children), s = Zi(r);
    return t(
      i,
      a,
      o,
      l,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function np(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ea.call(t.properties, i)) {
      const a = ip(e, i, t.properties[i]);
      if (a) {
        const [o, l] = a;
        e.tableCellAlignToStyle && o === "align" && typeof l == "string" && qd.has(t.tagName) ? r = l : n[o] = l;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function rp(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const o = a.expression;
        o.type;
        const l = o.properties[0];
        l.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(l.argument)
        );
      } else
        gn(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, a = e.evaluater.evaluateExpression(l.expression);
        } else
          gn(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function na(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Ud;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let o;
    if (e.passKeys) {
      const s = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        o = s + "-" + u, i.set(s, u + 1);
      }
    }
    const l = Ns(e, a, o);
    l !== void 0 && n.push(l);
  }
  return n;
}
function ip(e, t, n) {
  const r = Rd(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? vd(n) : Fd(n)), r.property === "style") {
      let i = typeof n == "object" ? n : ap(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = op(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Nd[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function ap(e, t) {
  const n = {};
  try {
    Bd(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        i
      ), o = new Le("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw o.file = e.filePath || void 0, o.url = Os + "#cannot-parse-style-attribute", o;
    }
  }
  return n;
  function r(i, a) {
    let o = i;
    o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), o = o.replace(Wd, sp)), n[o] = a;
  }
}
function Ps(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, o;
    for (; ++a < i.length; ) {
      const l = eo(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: l,
        computed: !!(a && l.type === "Literal"),
        optional: !1
      } : l;
    }
    r = o;
  } else
    r = eo(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return ea.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  gn(e);
}
function gn(e, t) {
  const n = new Le(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Os + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function op(e) {
  const t = {};
  let n;
  for (n in e)
    ea.call(e, n) && (t[lp(n)] = e[n]);
  return t;
}
function lp(e) {
  let t = e.replace(Hd, up);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function sp(e, t) {
  return t.toUpperCase();
}
function up(e) {
  return "-" + e.toLowerCase();
}
const Pr = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, cp = {};
function ra(e, t) {
  const n = cp, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Rs(e, r, i);
}
function Rs(e, t, n) {
  if (fp(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return uo(e.children, t, n);
  }
  return Array.isArray(e) ? uo(e, t, n) : "";
}
function uo(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Rs(e[i], t, n);
  return r.join("");
}
function fp(e) {
  return !!(e && typeof e == "object");
}
const co = document.createElement("i");
function ia(e) {
  const t = "&" + e + ";";
  co.innerHTML = t;
  const n = co.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ye(e, t, n, r) {
  const i = e.length;
  let a = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); a < r.length; )
      o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Xe(e, t) {
  return e.length > 0 ? (Ye(e, e.length, 0, t), e) : t;
}
const fo = {}.hasOwnProperty;
function js(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    dp(t, e[n]);
  return t;
}
function dp(e, t) {
  let n;
  for (n in t) {
    const i = (fo.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let o;
    if (a)
      for (o in a) {
        fo.call(i, o) || (i[o] = []);
        const l = a[o];
        pp(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function pp(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ye(e, 0, 0, r);
}
function _s(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function et(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ze = Ct(/[A-Za-z]/), Re = Ct(/[\dA-Za-z]/), hp = Ct(/[#-'*+\--9=?A-Z^-~]/);
function qn(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const oi = Ct(/\d/), mp = Ct(/[\dA-Fa-f]/), gp = Ct(/[!-/:-@[-`{-~]/);
function K(e) {
  return e !== null && e < -2;
}
function xe(e) {
  return e !== null && (e < 0 || e === 32);
}
function ue(e) {
  return e === -2 || e === -1 || e === 32;
}
const or = Ct(new RegExp("\\p{P}|\\p{S}", "u")), Nt = Ct(/\s/);
function Ct(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Jt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let o = "";
    if (a === 37 && Re(e.charCodeAt(n + 1)) && Re(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const l = e.charCodeAt(n + 1);
      a < 56320 && l > 56319 && l < 57344 ? (o = String.fromCharCode(a, l), i = 1) : o = "�";
    } else
      o = String.fromCharCode(a);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function de(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return o;
  function o(s) {
    return ue(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return ue(s) && a++ < i ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const yp = {
  tokenize: xp
};
function xp(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), de(e, t, "linePrefix");
  }
  function i(l) {
    return e.enter("paragraph"), a(l);
  }
  function a(l) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, o(l);
  }
  function o(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return K(l) ? (e.consume(l), e.exit("chunkText"), a) : (e.consume(l), o);
  }
}
const bp = {
  tokenize: vp
}, po = {
  tokenize: kp
};
function vp(e) {
  const t = this, n = [];
  let r = 0, i, a, o;
  return l;
  function l(E) {
    if (r < n.length) {
      const N = n[r];
      return t.containerState = N[1], e.attempt(N[0].continuation, s, u)(E);
    }
    return u(E);
  }
  function s(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && A();
      const N = t.events.length;
      let S = N, w;
      for (; S--; )
        if (t.events[S][0] === "exit" && t.events[S][1].type === "chunkFlow") {
          w = t.events[S][1].end;
          break;
        }
      b(r);
      let M = N;
      for (; M < t.events.length; )
        t.events[M][1].end = {
          ...w
        }, M++;
      return Ye(t.events, S + 1, 0, t.events.slice(N)), t.events.length = M, u(E);
    }
    return l(E);
  }
  function u(E) {
    if (r === n.length) {
      if (!i)
        return d(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(po, c, f)(E);
  }
  function c(E) {
    return i && A(), b(r), d(E);
  }
  function f(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, y(E);
  }
  function d(E) {
    return t.containerState = {}, e.attempt(po, p, y)(E);
  }
  function p(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(E);
  }
  function y(E) {
    if (E === null) {
      i && A(), b(0), e.consume(E);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), v(E);
  }
  function v(E) {
    if (E === null) {
      k(e.exit("chunkFlow"), !0), b(0), e.consume(E);
      return;
    }
    return K(E) ? (e.consume(E), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(E), v);
  }
  function k(E, N) {
    const S = t.sliceStream(E);
    if (N && S.push(null), E.previous = a, a && (a.next = E), a = E, i.defineSkip(E.start), i.write(S), t.parser.lazy[E.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const M = t.events.length;
      let Q = M, ne, C;
      for (; Q--; )
        if (t.events[Q][0] === "exit" && t.events[Q][1].type === "chunkFlow") {
          if (ne) {
            C = t.events[Q][1].end;
            break;
          }
          ne = !0;
        }
      for (b(r), w = M; w < t.events.length; )
        t.events[w][1].end = {
          ...C
        }, w++;
      Ye(t.events, Q + 1, 0, t.events.slice(M)), t.events.length = w;
    }
  }
  function b(E) {
    let N = n.length;
    for (; N-- > E; ) {
      const S = n[N];
      t.containerState = S[1], S[0].exit.call(t, e);
    }
    n.length = E;
  }
  function A() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function kp(e, t, n) {
  return de(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Yt(e) {
  if (e === null || xe(e) || Nt(e))
    return 1;
  if (or(e))
    return 2;
}
function lr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const li = {
  name: "attention",
  resolveAll: wp,
  tokenize: Ep
};
function wp(e, t) {
  let n = -1, r, i, a, o, l, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, d = {
            ...e[n][1].start
          };
          ho(f, -s), ho(d, s), o = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: d
          }, a = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...l.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[n][1].start = {
            ...l.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Xe(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = Xe(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", a, t]]), u = Xe(u, lr(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Xe(u, [["exit", a, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = Xe(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Ye(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Ep(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Yt(r);
  let a;
  return o;
  function o(s) {
    return a = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === a)
      return e.consume(s), l;
    const u = e.exit("attentionSequence"), c = Yt(s), f = !c || c === 2 && i || n.includes(s), d = !i || i === 2 && c || n.includes(r);
    return u._open = !!(a === 42 ? f : f && (i || !d)), u._close = !!(a === 42 ? d : d && (c || !f)), t(s);
  }
}
function ho(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Cp = {
  name: "autolink",
  tokenize: Sp
};
function Sp(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(p) {
    return ze(p) ? (e.consume(p), o) : p === 64 ? n(p) : u(p);
  }
  function o(p) {
    return p === 43 || p === 45 || p === 46 || Re(p) ? (r = 1, l(p)) : u(p);
  }
  function l(p) {
    return p === 58 ? (e.consume(p), r = 0, s) : (p === 43 || p === 45 || p === 46 || Re(p)) && r++ < 32 ? (e.consume(p), l) : (r = 0, u(p));
  }
  function s(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || qn(p) ? n(p) : (e.consume(p), s);
  }
  function u(p) {
    return p === 64 ? (e.consume(p), c) : hp(p) ? (e.consume(p), u) : n(p);
  }
  function c(p) {
    return Re(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || Re(p)) && r++ < 63) {
      const y = p === 45 ? d : f;
      return e.consume(p), y;
    }
    return n(p);
  }
}
const En = {
  partial: !0,
  tokenize: Tp
};
function Tp(e, t, n) {
  return r;
  function r(a) {
    return ue(a) ? de(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || K(a) ? t(a) : n(a);
  }
}
const Ls = {
  continuation: {
    tokenize: Op
  },
  exit: Np,
  name: "blockQuote",
  tokenize: Ap
};
function Ap(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a;
    }
    return n(o);
  }
  function a(o) {
    return ue(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function Op(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return ue(o) ? de(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
  }
  function a(o) {
    return e.attempt(Ls, t, n)(o);
  }
}
function Np(e) {
  e.exit("blockQuote");
}
const Fs = {
  name: "characterEscape",
  tokenize: Ip
};
function Ip(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return gp(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const Ds = {
  name: "characterReference",
  tokenize: Pp
};
function Pp(e, t, n) {
  const r = this;
  let i = 0, a, o;
  return l;
  function l(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), s;
  }
  function s(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, o = Re, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = mp, c) : (e.enter("characterReferenceValue"), a = 7, o = oi, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return o === Re && !ia(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(f) && i++ < a ? (e.consume(f), c) : n(f);
  }
}
const mo = {
  partial: !0,
  tokenize: jp
}, go = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Rp
};
function Rp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: S
  };
  let a = 0, o = 0, l;
  return s;
  function s(w) {
    return u(w);
  }
  function u(w) {
    const M = r.events[r.events.length - 1];
    return a = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], !0).length : 0, l = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === l ? (o++, e.consume(w), c) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), ue(w) ? de(e, f, "whitespace")(w) : f(w));
  }
  function f(w) {
    return w === null || K(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(mo, v, N)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === null || K(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(w)) : ue(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), de(e, p, "whitespace")(w)) : w === 96 && w === l ? n(w) : (e.consume(w), d);
  }
  function p(w) {
    return w === null || K(w) ? f(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(w));
  }
  function y(w) {
    return w === null || K(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(w)) : w === 96 && w === l ? n(w) : (e.consume(w), y);
  }
  function v(w) {
    return e.attempt(i, N, k)(w);
  }
  function k(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), b;
  }
  function b(w) {
    return a > 0 && ue(w) ? de(e, A, "linePrefix", a + 1)(w) : A(w);
  }
  function A(w) {
    return w === null || K(w) ? e.check(mo, v, N)(w) : (e.enter("codeFlowValue"), E(w));
  }
  function E(w) {
    return w === null || K(w) ? (e.exit("codeFlowValue"), A(w)) : (e.consume(w), E);
  }
  function N(w) {
    return e.exit("codeFenced"), t(w);
  }
  function S(w, M, Q) {
    let ne = 0;
    return C;
    function C(q) {
      return w.enter("lineEnding"), w.consume(q), w.exit("lineEnding"), D;
    }
    function D(q) {
      return w.enter("codeFencedFence"), ue(q) ? de(w, B, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : B(q);
    }
    function B(q) {
      return q === l ? (w.enter("codeFencedFenceSequence"), z(q)) : Q(q);
    }
    function z(q) {
      return q === l ? (ne++, w.consume(q), z) : ne >= o ? (w.exit("codeFencedFenceSequence"), ue(q) ? de(w, L, "whitespace")(q) : L(q)) : Q(q);
    }
    function L(q) {
      return q === null || K(q) ? (w.exit("codeFencedFence"), M(q)) : Q(q);
    }
  }
}
function jp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Rr = {
  name: "codeIndented",
  tokenize: Lp
}, _p = {
  partial: !0,
  tokenize: Fp
};
function Lp(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), de(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(u) : n(u);
  }
  function o(u) {
    return u === null ? s(u) : K(u) ? e.attempt(_p, o, s)(u) : (e.enter("codeFlowValue"), l(u));
  }
  function l(u) {
    return u === null || K(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), l);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Fp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : K(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : de(e, a, "linePrefix", 5)(o);
  }
  function a(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(o) : K(o) ? i(o) : n(o);
  }
}
const Dp = {
  name: "codeText",
  previous: zp,
  resolve: Mp,
  tokenize: Bp
};
function Mp(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function zp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Bp(e, t, n) {
  let r = 0, i, a;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(f);
  }
  function l(f) {
    return f === 96 ? (e.consume(f), r++, l) : (e.exit("codeTextSequence"), s(f));
  }
  function s(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), s) : f === 96 ? (a = e.enter("codeTextSequence"), i = 0, c(f)) : K(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || K(f) ? (e.exit("codeTextData"), s(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (a.type = "codeTextData", u(f));
  }
}
class $p {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && on(this.left, r), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), on(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), on(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        on(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        on(this.left, n.reverse());
      }
  }
}
function on(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Ms(e) {
  const t = {};
  let n = -1, r, i, a, o, l, s, u;
  const c = new $p(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, a = 0, a < s.length && s[a][1].type === "lineEndingBlank" && (a += 2), a < s.length && s[a][1].type === "content"))
      for (; ++a < s.length && s[a][1].type !== "content"; )
        s[a][1].type === "chunkText" && (s[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Up(c, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (o = c.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
        else if (o[1].type !== "linePrefix") break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, l = c.slice(i, n), l.unshift(r), c.splice(i, n - i + 1, l));
    }
  }
  return Ye(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function Up(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [], o = n._tokenizer || r.parser[n.contentType](n.start), l = o.events, s = [], u = {};
  let c, f, d = -1, p = n, y = 0, v = 0;
  const k = [v];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    a.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = n; ++d < l.length; )
    // Find a void token that includes a break.
    l[d][0] === "exit" && l[d - 1][0] === "enter" && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line && (v = d + 1, k.push(v), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : k.pop(), d = k.length; d--; ) {
    const b = l.slice(k[d], k[d + 1]), A = a.pop();
    s.push([A, A + b.length - 1]), e.splice(A, 2, b);
  }
  for (s.reverse(), d = -1; ++d < s.length; )
    u[y + s[d][0]] = y + s[d][1], y += s[d][1] - s[d][0] - 1;
  return u;
}
const Hp = {
  resolve: Vp,
  tokenize: qp
}, Wp = {
  partial: !0,
  tokenize: Yp
};
function Vp(e) {
  return Ms(e), e;
}
function qp(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? a(l) : K(l) ? e.check(Wp, o, a)(l) : (e.consume(l), i);
  }
  function a(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function o(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Yp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), de(e, a, "linePrefix");
  }
  function a(o) {
    if (o === null || K(o))
      return n(o);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function zs(e, t, n, r, i, a, o, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(b) {
    return b === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(b), e.exit(a), d) : b === null || b === 32 || b === 41 || qn(b) ? n(b) : (e.enter(r), e.enter(o), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), v(b));
  }
  function d(b) {
    return b === 62 ? (e.enter(a), e.consume(b), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), p(b));
  }
  function p(b) {
    return b === 62 ? (e.exit("chunkString"), e.exit(l), d(b)) : b === null || b === 60 || K(b) ? n(b) : (e.consume(b), b === 92 ? y : p);
  }
  function y(b) {
    return b === 60 || b === 62 || b === 92 ? (e.consume(b), p) : p(b);
  }
  function v(b) {
    return !c && (b === null || b === 41 || xe(b)) ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(r), t(b)) : c < u && b === 40 ? (e.consume(b), c++, v) : b === 41 ? (e.consume(b), c--, v) : b === null || b === 32 || b === 40 || qn(b) ? n(b) : (e.consume(b), b === 92 ? k : v);
  }
  function k(b) {
    return b === 40 || b === 41 || b === 92 ? (e.consume(b), v) : v(b);
  }
}
function Bs(e, t, n, r, i, a) {
  const o = this;
  let l = 0, s;
  return u;
  function u(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(a), c;
  }
  function c(p) {
    return l > 999 || p === null || p === 91 || p === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !l && "_hiddenFootnoteSupport" in o.parser.constructs ? n(p) : p === 93 ? (e.exit(a), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : K(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || K(p) || l++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), s || (s = !ue(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, f) : f(p);
  }
}
function $s(e, t, n, r, i, a) {
  let o;
  return l;
  function l(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, s) : n(d);
  }
  function s(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(a), u(d));
  }
  function u(d) {
    return d === o ? (e.exit(a), s(o)) : d === null ? n(d) : K(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), de(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === o || d === null || K(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === o || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function fn(e, t) {
  let n;
  return r;
  function r(i) {
    return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ue(i) ? de(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Gp = {
  name: "definition",
  tokenize: Xp
}, Kp = {
  partial: !0,
  tokenize: Qp
};
function Xp(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(p) {
    return e.enter("definition"), o(p);
  }
  function o(p) {
    return Bs.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function l(p) {
    return i = et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), s) : n(p);
  }
  function s(p) {
    return xe(p) ? fn(e, u)(p) : u(p);
  }
  function u(p) {
    return zs(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function c(p) {
    return e.attempt(Kp, f, f)(p);
  }
  function f(p) {
    return ue(p) ? de(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || K(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function Qp(e, t, n) {
  return r;
  function r(l) {
    return xe(l) ? fn(e, i)(l) : n(l);
  }
  function i(l) {
    return $s(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function a(l) {
    return ue(l) ? de(e, o, "whitespace")(l) : o(l);
  }
  function o(l) {
    return l === null || K(l) ? t(l) : n(l);
  }
}
const Jp = {
  name: "hardBreakEscape",
  tokenize: Zp
};
function Zp(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return K(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const eh = {
  name: "headingAtx",
  resolve: th,
  tokenize: nh
};
function th(e, t) {
  let n = e.length - 2, r = 3, i, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Ye(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function nh(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), a(c);
  }
  function a(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || xe(c) ? (e.exit("atxHeadingSequence"), l(c)) : n(c);
  }
  function l(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || K(c) ? (e.exit("atxHeading"), t(c)) : ue(c) ? de(e, l, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), l(c));
  }
  function u(c) {
    return c === null || c === 35 || xe(c) ? (e.exit("atxHeadingText"), l(c)) : (e.consume(c), u);
  }
}
const rh = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], yo = ["pre", "script", "style", "textarea"], ih = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: lh,
  tokenize: sh
}, ah = {
  partial: !0,
  tokenize: ch
}, oh = {
  partial: !0,
  tokenize: uh
};
function lh(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function sh(e, t, n) {
  const r = this;
  let i, a, o, l, s;
  return u;
  function u(m) {
    return c(m);
  }
  function c(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), f;
  }
  function f(m) {
    return m === 33 ? (e.consume(m), d) : m === 47 ? (e.consume(m), a = !0, v) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : h) : ze(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), i = 2, p) : m === 91 ? (e.consume(m), i = 5, l = 0, y) : ze(m) ? (e.consume(m), i = 4, r.interrupt ? t : h) : n(m);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : h) : n(m);
  }
  function y(m) {
    const F = "CDATA[";
    return m === F.charCodeAt(l++) ? (e.consume(m), l === F.length ? r.interrupt ? t : B : y) : n(m);
  }
  function v(m) {
    return ze(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function k(m) {
    if (m === null || m === 47 || m === 62 || xe(m)) {
      const F = m === 47, X = o.toLowerCase();
      return !F && !a && yo.includes(X) ? (i = 1, r.interrupt ? t(m) : B(m)) : rh.includes(o.toLowerCase()) ? (i = 6, F ? (e.consume(m), b) : r.interrupt ? t(m) : B(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : a ? A(m) : E(m));
    }
    return m === 45 || Re(m) ? (e.consume(m), o += String.fromCharCode(m), k) : n(m);
  }
  function b(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : B) : n(m);
  }
  function A(m) {
    return ue(m) ? (e.consume(m), A) : C(m);
  }
  function E(m) {
    return m === 47 ? (e.consume(m), C) : m === 58 || m === 95 || ze(m) ? (e.consume(m), N) : ue(m) ? (e.consume(m), E) : C(m);
  }
  function N(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || Re(m) ? (e.consume(m), N) : S(m);
  }
  function S(m) {
    return m === 61 ? (e.consume(m), w) : ue(m) ? (e.consume(m), S) : E(m);
  }
  function w(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), s = m, M) : ue(m) ? (e.consume(m), w) : Q(m);
  }
  function M(m) {
    return m === s ? (e.consume(m), s = null, ne) : m === null || K(m) ? n(m) : (e.consume(m), M);
  }
  function Q(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || xe(m) ? S(m) : (e.consume(m), Q);
  }
  function ne(m) {
    return m === 47 || m === 62 || ue(m) ? E(m) : n(m);
  }
  function C(m) {
    return m === 62 ? (e.consume(m), D) : n(m);
  }
  function D(m) {
    return m === null || K(m) ? B(m) : ue(m) ? (e.consume(m), D) : n(m);
  }
  function B(m) {
    return m === 45 && i === 2 ? (e.consume(m), ae) : m === 60 && i === 1 ? (e.consume(m), ce) : m === 62 && i === 4 ? (e.consume(m), R) : m === 63 && i === 3 ? (e.consume(m), h) : m === 93 && i === 5 ? (e.consume(m), ve) : K(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ah, G, z)(m)) : m === null || K(m) ? (e.exit("htmlFlowData"), z(m)) : (e.consume(m), B);
  }
  function z(m) {
    return e.check(oh, L, G)(m);
  }
  function L(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), q;
  }
  function q(m) {
    return m === null || K(m) ? z(m) : (e.enter("htmlFlowData"), B(m));
  }
  function ae(m) {
    return m === 45 ? (e.consume(m), h) : B(m);
  }
  function ce(m) {
    return m === 47 ? (e.consume(m), o = "", fe) : B(m);
  }
  function fe(m) {
    if (m === 62) {
      const F = o.toLowerCase();
      return yo.includes(F) ? (e.consume(m), R) : B(m);
    }
    return ze(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), fe) : B(m);
  }
  function ve(m) {
    return m === 93 ? (e.consume(m), h) : B(m);
  }
  function h(m) {
    return m === 62 ? (e.consume(m), R) : m === 45 && i === 2 ? (e.consume(m), h) : B(m);
  }
  function R(m) {
    return m === null || K(m) ? (e.exit("htmlFlowData"), G(m)) : (e.consume(m), R);
  }
  function G(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function uh(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return K(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function ch(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(En, t, n);
  }
}
const fh = {
  name: "htmlText",
  tokenize: dh
};
function dh(e, t, n) {
  const r = this;
  let i, a, o;
  return l;
  function l(h) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s;
  }
  function s(h) {
    return h === 33 ? (e.consume(h), u) : h === 47 ? (e.consume(h), S) : h === 63 ? (e.consume(h), E) : ze(h) ? (e.consume(h), Q) : n(h);
  }
  function u(h) {
    return h === 45 ? (e.consume(h), c) : h === 91 ? (e.consume(h), a = 0, y) : ze(h) ? (e.consume(h), A) : n(h);
  }
  function c(h) {
    return h === 45 ? (e.consume(h), p) : n(h);
  }
  function f(h) {
    return h === null ? n(h) : h === 45 ? (e.consume(h), d) : K(h) ? (o = f, ce(h)) : (e.consume(h), f);
  }
  function d(h) {
    return h === 45 ? (e.consume(h), p) : f(h);
  }
  function p(h) {
    return h === 62 ? ae(h) : h === 45 ? d(h) : f(h);
  }
  function y(h) {
    const R = "CDATA[";
    return h === R.charCodeAt(a++) ? (e.consume(h), a === R.length ? v : y) : n(h);
  }
  function v(h) {
    return h === null ? n(h) : h === 93 ? (e.consume(h), k) : K(h) ? (o = v, ce(h)) : (e.consume(h), v);
  }
  function k(h) {
    return h === 93 ? (e.consume(h), b) : v(h);
  }
  function b(h) {
    return h === 62 ? ae(h) : h === 93 ? (e.consume(h), b) : v(h);
  }
  function A(h) {
    return h === null || h === 62 ? ae(h) : K(h) ? (o = A, ce(h)) : (e.consume(h), A);
  }
  function E(h) {
    return h === null ? n(h) : h === 63 ? (e.consume(h), N) : K(h) ? (o = E, ce(h)) : (e.consume(h), E);
  }
  function N(h) {
    return h === 62 ? ae(h) : E(h);
  }
  function S(h) {
    return ze(h) ? (e.consume(h), w) : n(h);
  }
  function w(h) {
    return h === 45 || Re(h) ? (e.consume(h), w) : M(h);
  }
  function M(h) {
    return K(h) ? (o = M, ce(h)) : ue(h) ? (e.consume(h), M) : ae(h);
  }
  function Q(h) {
    return h === 45 || Re(h) ? (e.consume(h), Q) : h === 47 || h === 62 || xe(h) ? ne(h) : n(h);
  }
  function ne(h) {
    return h === 47 ? (e.consume(h), ae) : h === 58 || h === 95 || ze(h) ? (e.consume(h), C) : K(h) ? (o = ne, ce(h)) : ue(h) ? (e.consume(h), ne) : ae(h);
  }
  function C(h) {
    return h === 45 || h === 46 || h === 58 || h === 95 || Re(h) ? (e.consume(h), C) : D(h);
  }
  function D(h) {
    return h === 61 ? (e.consume(h), B) : K(h) ? (o = D, ce(h)) : ue(h) ? (e.consume(h), D) : ne(h);
  }
  function B(h) {
    return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? n(h) : h === 34 || h === 39 ? (e.consume(h), i = h, z) : K(h) ? (o = B, ce(h)) : ue(h) ? (e.consume(h), B) : (e.consume(h), L);
  }
  function z(h) {
    return h === i ? (e.consume(h), i = void 0, q) : h === null ? n(h) : K(h) ? (o = z, ce(h)) : (e.consume(h), z);
  }
  function L(h) {
    return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? n(h) : h === 47 || h === 62 || xe(h) ? ne(h) : (e.consume(h), L);
  }
  function q(h) {
    return h === 47 || h === 62 || xe(h) ? ne(h) : n(h);
  }
  function ae(h) {
    return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(h);
  }
  function ce(h) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), fe;
  }
  function fe(h) {
    return ue(h) ? de(e, ve, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : ve(h);
  }
  function ve(h) {
    return e.enter("htmlTextData"), o(h);
  }
}
const aa = {
  name: "labelEnd",
  resolveAll: gh,
  resolveTo: yh,
  tokenize: xh
}, ph = {
  tokenize: bh
}, hh = {
  tokenize: vh
}, mh = {
  tokenize: kh
};
function gh(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Ye(e, 0, e.length, n), e;
}
function yh(e, t) {
  let n = e.length, r = 0, i, a, o, l;
  for (; n--; )
    if (i = e[n][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const s = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[a + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return l = [["enter", s, t], ["enter", u, t]], l = Xe(l, e.slice(a + 1, a + r + 3)), l = Xe(l, [["enter", c, t]]), l = Xe(l, lr(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), l = Xe(l, [["exit", c, t], e[o - 2], e[o - 1], ["exit", u, t]]), l = Xe(l, e.slice(o + 1)), l = Xe(l, [["exit", s, t]]), Ye(e, a, e.length, l), e;
}
function xh(e, t, n) {
  const r = this;
  let i = r.events.length, a, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return l;
  function l(d) {
    return a ? a._inactive ? f(d) : (o = r.parser.defined.includes(et(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(d);
  }
  function s(d) {
    return d === 40 ? e.attempt(ph, c, o ? c : f)(d) : d === 91 ? e.attempt(hh, c, o ? u : f)(d) : o ? c(d) : f(d);
  }
  function u(d) {
    return e.attempt(mh, c, f)(d);
  }
  function c(d) {
    return t(d);
  }
  function f(d) {
    return a._balanced = !0, n(d);
  }
}
function bh(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return xe(f) ? fn(e, a)(f) : a(f);
  }
  function a(f) {
    return f === 41 ? c(f) : zs(e, o, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return xe(f) ? fn(e, s)(f) : c(f);
  }
  function l(f) {
    return n(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? $s(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function u(f) {
    return xe(f) ? fn(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function vh(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return Bs.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(l);
  }
  function a(l) {
    return r.parser.defined.includes(et(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function o(l) {
    return n(l);
  }
}
function kh(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const wh = {
  name: "labelStartImage",
  resolveAll: aa.resolveAll,
  tokenize: Eh
};
function Eh(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), a;
  }
  function a(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), o) : n(l);
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Ch = {
  name: "labelStartLink",
  resolveAll: aa.resolveAll,
  tokenize: Sh
};
function Sh(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const jr = {
  name: "lineEnding",
  tokenize: Th
};
function Th(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), de(e, t, "linePrefix");
  }
}
const zn = {
  name: "thematicBreak",
  tokenize: Ah
};
function Ah(e, t, n) {
  let r = 0, i;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, l(u);
  }
  function l(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || K(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), ue(u) ? de(e, l, "whitespace")(u) : l(u));
  }
}
const Be = {
  continuation: {
    tokenize: Ph
  },
  exit: jh,
  name: "list",
  tokenize: Ih
}, Oh = {
  partial: !0,
  tokenize: _h
}, Nh = {
  partial: !0,
  tokenize: Rh
};
function Ih(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return l;
  function l(p) {
    const y = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : oi(p)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(zn, n, u)(p) : u(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(p);
    }
    return n(p);
  }
  function s(p) {
    return oi(p) && ++o < 10 ? (e.consume(p), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), u(p)) : n(p);
  }
  function u(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      En,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(Oh, d, f)
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, a++, d(p);
  }
  function f(p) {
    return ue(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Ph(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(En, i, a);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, de(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function a(l) {
    return r.containerState.furtherBlankLines || !ue(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Nh, t, o)(l));
  }
  function o(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, de(e, e.attempt(Be, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function Rh(e, t, n) {
  const r = this;
  return de(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function jh(e) {
  e.exit(this.containerState.type);
}
function _h(e, t, n) {
  const r = this;
  return de(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return !ue(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const xo = {
  name: "setextUnderline",
  resolveTo: Lh,
  tokenize: Fh
};
function Lh(e, t) {
  let n = e.length, r, i, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const o = {
    type: "setextHeading",
    start: {
      ...e[i][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", o, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[a][1].end
  }) : e[r][1] = o, e.push(["exit", o, t]), e;
}
function Fh(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(u) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), l(u);
  }
  function l(u) {
    return u === i ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), ue(u) ? de(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || K(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Dh = {
  tokenize: Mh
};
function Mh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    En,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, de(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Hp, i)), "linePrefix"))
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const zh = {
  resolveAll: Hs()
}, Bh = Us("string"), $h = Us("text");
function Us(e) {
  return {
    resolveAll: Hs(e === "text" ? Uh : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, o, l);
    return o;
    function o(c) {
      return u(c) ? a(c) : l(c);
    }
    function l(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), s;
    }
    function s(c) {
      return u(c) ? (n.exit("data"), a(c)) : (n.consume(c), s);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Hs(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function Uh(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, o = -1, l = 0, s;
      for (; a--; ) {
        const u = i[a];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            l++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          s = !0, l++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (l) {
        const u = {
          type: n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Hh = {
  42: Be,
  43: Be,
  45: Be,
  48: Be,
  49: Be,
  50: Be,
  51: Be,
  52: Be,
  53: Be,
  54: Be,
  55: Be,
  56: Be,
  57: Be,
  62: Ls
}, Wh = {
  91: Gp
}, Vh = {
  [-2]: Rr,
  [-1]: Rr,
  32: Rr
}, qh = {
  35: eh,
  42: zn,
  45: [xo, zn],
  60: ih,
  61: xo,
  95: zn,
  96: go,
  126: go
}, Yh = {
  38: Ds,
  92: Fs
}, Gh = {
  [-5]: jr,
  [-4]: jr,
  [-3]: jr,
  33: wh,
  38: Ds,
  42: li,
  60: [Cp, fh],
  91: Ch,
  92: [Jp, Fs],
  93: aa,
  95: li,
  96: Dp
}, Kh = {
  null: [li, zh]
}, Xh = {
  null: [42, 95]
}, Qh = {
  null: []
}, Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Xh,
  contentInitial: Wh,
  disable: Qh,
  document: Hh,
  flow: qh,
  flowInitial: Vh,
  insideSpan: Kh,
  string: Yh,
  text: Gh
}, Symbol.toStringTag, { value: "Module" }));
function Zh(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, a = [];
  let o = [], l = [];
  const s = {
    attempt: M(S),
    check: M(w),
    consume: A,
    enter: E,
    exit: N,
    interrupt: M(w, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: p,
    write: f
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && a.push(t), u;
  function f(D) {
    return o = Xe(o, D), k(), o[o.length - 1] !== null ? [] : (Q(t, 0), u.events = lr(a, u.events, u), u.events);
  }
  function d(D, B) {
    return tm(p(D), B);
  }
  function p(D) {
    return em(o, D);
  }
  function y() {
    const {
      _bufferIndex: D,
      _index: B,
      line: z,
      column: L,
      offset: q
    } = r;
    return {
      _bufferIndex: D,
      _index: B,
      line: z,
      column: L,
      offset: q
    };
  }
  function v(D) {
    i[D.line] = D.column, C();
  }
  function k() {
    let D;
    for (; r._index < o.length; ) {
      const B = o[r._index];
      if (typeof B == "string")
        for (D = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === D && r._bufferIndex < B.length; )
          b(B.charCodeAt(r._bufferIndex));
      else
        b(B);
    }
  }
  function b(D) {
    c = c(D);
  }
  function A(D) {
    K(D) ? (r.line++, r.column = 1, r.offset += D === -3 ? 2 : 1, C()) : D !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = D;
  }
  function E(D, B) {
    const z = B || {};
    return z.type = D, z.start = y(), u.events.push(["enter", z, u]), l.push(z), z;
  }
  function N(D) {
    const B = l.pop();
    return B.end = y(), u.events.push(["exit", B, u]), B;
  }
  function S(D, B) {
    Q(D, B.from);
  }
  function w(D, B) {
    B.restore();
  }
  function M(D, B) {
    return z;
    function z(L, q, ae) {
      let ce, fe, ve, h;
      return Array.isArray(L) ? (
        /* c8 ignore next 1 */
        G(L)
      ) : "tokenize" in L ? (
        // Looks like a construct.
        G([
          /** @type {Construct} */
          L
        ])
      ) : R(L);
      function R(W) {
        return J;
        function J(ee) {
          const re = ee !== null && W[ee], te = ee !== null && W.null, we = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(re) ? re : re ? [re] : [],
            ...Array.isArray(te) ? te : te ? [te] : []
          ];
          return G(we)(ee);
        }
      }
      function G(W) {
        return ce = W, fe = 0, W.length === 0 ? ae : m(W[fe]);
      }
      function m(W) {
        return J;
        function J(ee) {
          return h = ne(), ve = W, W.partial || (u.currentConstruct = W), W.name && u.parser.constructs.disable.null.includes(W.name) ? X() : W.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            B ? Object.assign(Object.create(u), B) : u,
            s,
            F,
            X
          )(ee);
        }
      }
      function F(W) {
        return D(ve, h), q;
      }
      function X(W) {
        return h.restore(), ++fe < ce.length ? m(ce[fe]) : ae;
      }
    }
  }
  function Q(D, B) {
    D.resolveAll && !a.includes(D) && a.push(D), D.resolve && Ye(u.events, B, u.events.length - B, D.resolve(u.events.slice(B), u)), D.resolveTo && (u.events = D.resolveTo(u.events, u));
  }
  function ne() {
    const D = y(), B = u.previous, z = u.currentConstruct, L = u.events.length, q = Array.from(l);
    return {
      from: L,
      restore: ae
    };
    function ae() {
      r = D, u.previous = B, u.currentConstruct = z, u.events.length = L, l = q, C();
    }
  }
  function C() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function em(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, a)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const l = o[0];
      typeof l == "string" ? o[0] = l.slice(r) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function tm(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const a = e[n];
    let o;
    if (typeof a == "string")
      o = a;
    else switch (a) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(a);
    }
    i = a === -2, r.push(o);
  }
  return r.join("");
}
function nm(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      js([Jh, ...(e || {}).extensions || []])
    ),
    content: i(yp),
    defined: [],
    document: i(bp),
    flow: i(Dh),
    lazy: {},
    string: i(Bh),
    text: i($h)
  };
  return r;
  function i(a) {
    return o;
    function o(l) {
      return Zh(r, a, l);
    }
  }
}
function rm(e) {
  for (; !Ms(e); )
    ;
  return e;
}
const bo = /[\0\t\n\r]/g;
function im() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, o, l) {
    const s = [];
    let u, c, f, d, p;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), f = 0, t = "", n && (a.charCodeAt(0) === 65279 && f++, n = void 0); f < a.length; ) {
      if (bo.lastIndex = f, u = bo.exec(a), d = u && u.index !== void 0 ? u.index : a.length, p = a.charCodeAt(d), !u) {
        t = a.slice(f);
        break;
      }
      if (p === 10 && f === d && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), f < d && (s.push(a.slice(f, d)), e += d - f), p) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const am = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function om(e) {
  return e.replace(am, lm);
}
function lm(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return _s(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return ia(n) || e;
}
const Ws = {}.hasOwnProperty;
function sm(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), um(n)(rm(nm(n).document().write(im()(e, t, !0))));
}
function um(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(en),
      autolinkProtocol: ne,
      autolinkEmail: ne,
      atxHeading: a(he),
      blockQuote: a(te),
      characterEscape: ne,
      characterReference: ne,
      codeFenced: a(we),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(we, o),
      codeText: a(_, o),
      codeTextData: ne,
      data: ne,
      codeFlowValue: ne,
      definition: a(Oe),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(Fe),
      hardBreakEscape: a(St),
      hardBreakTrailing: a(St),
      htmlFlow: a(lt, o),
      htmlFlowData: ne,
      htmlText: a(lt, o),
      htmlTextData: ne,
      image: a(An),
      label: o,
      link: a(en),
      listItem: a(x),
      listItemValue: d,
      listOrdered: a(tn, f),
      listUnordered: a(tn),
      paragraph: a(U),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(he),
      strong: a(H),
      thematicBreak: a(Ie)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: S,
      autolink: s(),
      autolinkEmail: re,
      autolinkProtocol: ee,
      blockQuote: s(),
      characterEscapeValue: C,
      characterReferenceMarkerHexadecimal: X,
      characterReferenceMarkerNumeric: X,
      characterReferenceValue: W,
      characterReference: J,
      codeFenced: s(k),
      codeFencedFence: v,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: y,
      codeFlowValue: C,
      codeIndented: s(b),
      codeText: s(q),
      codeTextData: C,
      data: C,
      definition: s(),
      definitionDestinationString: N,
      definitionLabelString: A,
      definitionTitleString: E,
      emphasis: s(),
      hardBreakEscape: s(B),
      hardBreakTrailing: s(B),
      htmlFlow: s(z),
      htmlFlowData: C,
      htmlText: s(L),
      htmlTextData: C,
      image: s(ce),
      label: ve,
      labelText: fe,
      lineEnding: D,
      link: s(ae),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: F,
      resourceDestinationString: h,
      resourceTitleString: R,
      resource: G,
      setextHeading: s(Q),
      setextHeadingLineSequence: M,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  Vs(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let O = {
      type: "root",
      children: []
    };
    const Y = {
      stack: [O],
      tokenStack: [],
      config: t,
      enter: l,
      exit: u,
      buffer: o,
      resume: c,
      data: n
    }, oe = [];
    let ie = -1;
    for (; ++ie < T.length; )
      if (T[ie][1].type === "listOrdered" || T[ie][1].type === "listUnordered")
        if (T[ie][0] === "enter")
          oe.push(ie);
        else {
          const Ne = oe.pop();
          ie = i(T, Ne, ie);
        }
    for (ie = -1; ++ie < T.length; ) {
      const Ne = t[T[ie][0]];
      Ws.call(Ne, T[ie][1].type) && Ne[T[ie][1].type].call(Object.assign({
        sliceSerialize: T[ie][2].sliceSerialize
      }, Y), T[ie][1]);
    }
    if (Y.tokenStack.length > 0) {
      const Ne = Y.tokenStack[Y.tokenStack.length - 1];
      (Ne[1] || vo).call(Y, void 0, Ne[0]);
    }
    for (O.position = {
      start: xt(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: xt(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ie = -1; ++ie < t.transforms.length; )
      O = t.transforms[ie](O) || O;
    return O;
  }
  function i(T, O, Y) {
    let oe = O - 1, ie = -1, Ne = !1, He, Pe, tt, De;
    for (; ++oe <= Y; ) {
      const We = T[oe];
      switch (We[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          We[0] === "enter" ? ie++ : ie--, De = void 0;
          break;
        }
        case "lineEndingBlank": {
          We[0] === "enter" && (He && !De && !ie && !tt && (tt = oe), De = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          De = void 0;
      }
      if (!ie && We[0] === "enter" && We[1].type === "listItemPrefix" || ie === -1 && We[0] === "exit" && (We[1].type === "listUnordered" || We[1].type === "listOrdered")) {
        if (He) {
          let _t = oe;
          for (Pe = void 0; _t--; ) {
            const st = T[_t];
            if (st[1].type === "lineEnding" || st[1].type === "lineEndingBlank") {
              if (st[0] === "exit") continue;
              Pe && (T[Pe][1].type = "lineEndingBlank", Ne = !0), st[1].type = "lineEnding", Pe = _t;
            } else if (!(st[1].type === "linePrefix" || st[1].type === "blockQuotePrefix" || st[1].type === "blockQuotePrefixWhitespace" || st[1].type === "blockQuoteMarker" || st[1].type === "listItemIndent")) break;
          }
          tt && (!Pe || tt < Pe) && (He._spread = !0), He.end = Object.assign({}, Pe ? T[Pe][1].start : We[1].end), T.splice(Pe || oe, 0, ["exit", He, We[2]]), oe++, Y++;
        }
        if (We[1].type === "listItemPrefix") {
          const _t = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, We[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          He = _t, T.splice(oe, 0, ["enter", _t, We[2]]), oe++, Y++, tt = void 0, De = !0;
        }
      }
    }
    return T[O][1]._spread = Ne, Y;
  }
  function a(T, O) {
    return Y;
    function Y(oe) {
      l.call(this, T(oe), oe), O && O.call(this, oe);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(T, O, Y) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([O, Y || void 0]), T.position = {
      start: xt(O.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(T) {
    return O;
    function O(Y) {
      T && T.call(this, Y), u.call(this, Y);
    }
  }
  function u(T, O) {
    const Y = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== T.type && (O ? O.call(this, T, oe[0]) : (oe[1] || vo).call(this, T, oe[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + cn({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    Y.position.end = xt(T.end);
  }
  function c() {
    return ra(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(T) {
    if (this.data.expectingFirstListItemValue) {
      const O = this.stack[this.stack.length - 2];
      O.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.lang = T;
  }
  function y() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.meta = T;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function b() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function A(T) {
    const O = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = O, Y.identifier = et(this.sliceSerialize(T)).toLowerCase();
  }
  function E() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.title = T;
  }
  function N() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.url = T;
  }
  function S(T) {
    const O = this.stack[this.stack.length - 1];
    if (!O.depth) {
      const Y = this.sliceSerialize(T).length;
      O.depth = Y;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function M(T) {
    const O = this.stack[this.stack.length - 1];
    O.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function Q() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ne(T) {
    const Y = this.stack[this.stack.length - 1].children;
    let oe = Y[Y.length - 1];
    (!oe || oe.type !== "text") && (oe = pe(), oe.position = {
      start: xt(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, Y.push(oe)), this.stack.push(oe);
  }
  function C(T) {
    const O = this.stack.pop();
    O.value += this.sliceSerialize(T), O.position.end = xt(T.end);
  }
  function D(T) {
    const O = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Y = O.children[O.children.length - 1];
      Y.position.end = xt(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(O.type) && (ne.call(this, T), C.call(this, T));
  }
  function B() {
    this.data.atHardBreak = !0;
  }
  function z() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T;
  }
  function L() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T;
  }
  function q() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.value = T;
  }
  function ae() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const O = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = O, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function ce() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const O = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = O, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function fe(T) {
    const O = this.sliceSerialize(T), Y = this.stack[this.stack.length - 2];
    Y.label = om(O), Y.identifier = et(O).toLowerCase();
  }
  function ve() {
    const T = this.stack[this.stack.length - 1], O = this.resume(), Y = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, Y.type === "link") {
      const oe = T.children;
      Y.children = oe;
    } else
      Y.alt = O;
  }
  function h() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.url = T;
  }
  function R() {
    const T = this.resume(), O = this.stack[this.stack.length - 1];
    O.title = T;
  }
  function G() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function F(T) {
    const O = this.resume(), Y = this.stack[this.stack.length - 1];
    Y.label = O, Y.identifier = et(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function X(T) {
    this.data.characterReferenceType = T.type;
  }
  function W(T) {
    const O = this.sliceSerialize(T), Y = this.data.characterReferenceType;
    let oe;
    Y ? (oe = _s(O, Y === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = ia(O);
    const ie = this.stack[this.stack.length - 1];
    ie.value += oe;
  }
  function J(T) {
    const O = this.stack.pop();
    O.position.end = xt(T.end);
  }
  function ee(T) {
    C.call(this, T);
    const O = this.stack[this.stack.length - 1];
    O.url = this.sliceSerialize(T);
  }
  function re(T) {
    C.call(this, T);
    const O = this.stack[this.stack.length - 1];
    O.url = "mailto:" + this.sliceSerialize(T);
  }
  function te() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function we() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function _() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Oe() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Fe() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function he() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function St() {
    return {
      type: "break"
    };
  }
  function lt() {
    return {
      type: "html",
      value: ""
    };
  }
  function An() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function en() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function tn(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function x(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function U() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function H() {
    return {
      type: "strong",
      children: []
    };
  }
  function pe() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ie() {
    return {
      type: "thematicBreak"
    };
  }
}
function xt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Vs(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Vs(e, r) : cm(e, r);
  }
}
function cm(e, t) {
  let n;
  for (n in t)
    if (Ws.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function vo(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + cn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + cn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + cn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function fm(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return sm(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function dm(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function pm(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function hm(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function mm(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function gm(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ym(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Jt(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let o, l = e.footnoteCounts.get(r);
  l === void 0 ? (l = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, l += 1, e.footnoteCounts.set(r, l);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function xm(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function bm(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function qs(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function vm(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return qs(e, t);
  const i = { src: Jt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function km(e, t) {
  const n = { src: Jt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function wm(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Em(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return qs(e, t);
  const i = { href: Jt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Cm(e, t) {
  const n = { href: Jt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Sm(e, t, n) {
  const r = e.all(t), i = n ? Tm(n) : Ys(t), a = {}, o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const c = r[l];
    (i || l !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: o };
  return e.patch(t, u), e.applyData(t, u);
}
function Tm(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ys(n[r]);
  }
  return t;
}
function Ys(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Am(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Om(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Nm(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Im(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Pm(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, l = Zi(t.children[1]), s = Ts(t.children[t.children.length - 1]);
    l && s && (o.position = { start: l, end: s }), i.push(o);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Rm(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, l = o ? o.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < l; ) {
    const f = t.children[s], d = {}, p = o ? o[s] : void 0;
    p && (d.align = p);
    let y = { type: "element", tagName: a, properties: d, children: [] };
    f && (y.children = e.all(f), e.patch(f, y), y = e.applyData(f, y)), u.push(y);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function jm(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ko = 9, wo = 32;
function _m(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      Eo(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(Eo(t.slice(i), i > 0, !1)), a.join("");
}
function Eo(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === ko || a === wo; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === ko || a === wo; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Lm(e, t) {
  const n = { type: "text", value: _m(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Fm(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Dm = {
  blockquote: dm,
  break: pm,
  code: hm,
  delete: mm,
  emphasis: gm,
  footnoteReference: ym,
  heading: xm,
  html: bm,
  imageReference: vm,
  image: km,
  inlineCode: wm,
  linkReference: Em,
  link: Cm,
  listItem: Sm,
  list: Am,
  paragraph: Om,
  // @ts-expect-error: root is different, but hard to type.
  root: Nm,
  strong: Im,
  table: Pm,
  tableCell: jm,
  tableRow: Rm,
  text: Lm,
  thematicBreak: Fm,
  toml: jn,
  yaml: jn,
  definition: jn,
  footnoteDefinition: jn
};
function jn() {
}
const Gs = -1, sr = 0, dn = 1, Yn = 2, oa = 3, la = 4, sa = 5, ua = 6, Ks = 7, Xs = 8, Co = typeof self == "object" ? self : globalThis, Mm = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, o] = t[i];
    switch (a) {
      case sr:
      case Gs:
        return n(o, i);
      case dn: {
        const l = n([], i);
        for (const s of o)
          l.push(r(s));
        return l;
      }
      case Yn: {
        const l = n({}, i);
        for (const [s, u] of o)
          l[r(s)] = r(u);
        return l;
      }
      case oa:
        return n(new Date(o), i);
      case la: {
        const { source: l, flags: s } = o;
        return n(new RegExp(l, s), i);
      }
      case sa: {
        const l = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of o)
          l.set(r(s), r(u));
        return l;
      }
      case ua: {
        const l = n(/* @__PURE__ */ new Set(), i);
        for (const s of o)
          l.add(r(s));
        return l;
      }
      case Ks: {
        const { name: l, message: s } = o;
        return n(new Co[l](s), i);
      }
      case Xs:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: l } = new Uint8Array(o);
        return n(new DataView(l), o);
      }
    }
    return n(new Co[a](o), i);
  };
  return r;
}, So = (e) => Mm(/* @__PURE__ */ new Map(), e)(0), Bt = "", { toString: zm } = {}, { keys: Bm } = Object, ln = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [sr, t];
  const n = zm.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [dn, Bt];
    case "Object":
      return [Yn, Bt];
    case "Date":
      return [oa, Bt];
    case "RegExp":
      return [la, Bt];
    case "Map":
      return [sa, Bt];
    case "Set":
      return [ua, Bt];
    case "DataView":
      return [dn, n];
  }
  return n.includes("Array") ? [dn, n] : n.includes("Error") ? [Ks, n] : [Yn, n];
}, _n = ([e, t]) => e === sr && (t === "function" || t === "symbol"), $m = (e, t, n, r) => {
  const i = (o, l) => {
    const s = r.push(o) - 1;
    return n.set(l, s), s;
  }, a = (o) => {
    if (n.has(o))
      return n.get(o);
    let [l, s] = ln(o);
    switch (l) {
      case sr: {
        let c = o;
        switch (s) {
          case "bigint":
            l = Xs, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            c = null;
            break;
          case "undefined":
            return i([Gs], o);
        }
        return i([l, c], o);
      }
      case dn: {
        if (s) {
          let d = o;
          return s === "DataView" ? d = new Uint8Array(o.buffer) : s === "ArrayBuffer" && (d = new Uint8Array(o)), i([s, [...d]], o);
        }
        const c = [], f = i([l, c], o);
        for (const d of o)
          c.push(a(d));
        return f;
      }
      case Yn: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return a(o.toJSON());
        const c = [], f = i([l, c], o);
        for (const d of Bm(o))
          (e || !_n(ln(o[d]))) && c.push([a(d), a(o[d])]);
        return f;
      }
      case oa:
        return i([l, o.toISOString()], o);
      case la: {
        const { source: c, flags: f } = o;
        return i([l, { source: c, flags: f }], o);
      }
      case sa: {
        const c = [], f = i([l, c], o);
        for (const [d, p] of o)
          (e || !(_n(ln(d)) || _n(ln(p)))) && c.push([a(d), a(p)]);
        return f;
      }
      case ua: {
        const c = [], f = i([l, c], o);
        for (const d of o)
          (e || !_n(ln(d))) && c.push(a(d));
        return f;
      }
    }
    const { message: u } = o;
    return i([l, { name: s, message: u }], o);
  };
  return a;
}, To = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return $m(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Gn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? So(To(e, t)) : structuredClone(e)
) : (e, t) => So(To(e, t));
function Um(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Hm(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Wm(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Um, r = e.options.footnoteBackLabel || Hm, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const c = e.all(u), f = String(u.identifier).toUpperCase(), d = Jt(f.toLowerCase());
    let p = 0;
    const y = [], v = e.footnoteCounts.get(f);
    for (; v !== void 0 && ++p <= v; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let A = typeof n == "string" ? n : n(s, p);
      typeof A == "string" && (A = { type: "text", value: A }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(A) ? A : [A]
      });
    }
    const k = c[c.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const A = k.children[k.children.length - 1];
      A && A.type === "text" ? A.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...y);
    } else
      c.push(...y);
    const b = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(c, !0)
    };
    e.patch(u, b), l.push(b);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Gn(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const ur = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Gm;
    if (typeof e == "function")
      return cr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Vm(e) : qm(e);
    if (typeof e == "string")
      return Ym(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Vm(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = ur(e[n]);
  return cr(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function qm(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return cr(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function Ym(e) {
  return cr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function cr(e) {
  return t;
  function t(n, r, i) {
    return !!(Km(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Gm() {
  return !0;
}
function Km(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Qs = [], Xm = !0, si = !1, Qm = "skip";
function Js(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = ur(i), o = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (s.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = Qs, y, v, k;
      if ((!t || a(s, u, c[c.length - 1] || void 0)) && (p = Jm(n(s, c)), p[0] === si))
        return p;
      if ("children" in s && s.children) {
        const b = (
          /** @type {UnistParent} */
          s
        );
        if (b.children && p[0] !== Qm)
          for (v = (r ? b.children.length : -1) + o, k = c.concat(b); v > -1 && v < b.children.length; ) {
            const A = b.children[v];
            if (y = l(A, v, k)(), y[0] === si)
              return y;
            v = typeof y[1] == "number" ? y[1] : v + o;
          }
      }
      return p;
    }
  }
}
function Jm(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Xm, e] : e == null ? Qs : [e];
}
function ca(e, t, n, r) {
  let i, a, o;
  typeof t == "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Js(e, a, l, i);
  function l(s, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(s) : void 0;
    return o(s, f, c);
  }
}
const ui = {}.hasOwnProperty, Zm = {};
function eg(e, t) {
  const n = t || Zm, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = { ...Dm, ...n.handlers }, l = {
    all: u,
    applyData: ng,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: o,
    one: s,
    options: n,
    patch: tg,
    wrap: ig
  };
  return ca(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, d = String(c.identifier).toUpperCase();
      f.has(d) || f.set(d, c);
    }
  }), l;
  function s(c, f) {
    const d = c.type, p = l.handlers[d];
    if (ui.call(l.handlers, d) && p)
      return p(l, c, f);
    if (l.options.passThrough && l.options.passThrough.includes(d)) {
      if ("children" in c) {
        const { children: v, ...k } = c, b = Gn(k);
        return b.children = l.all(c), b;
      }
      return Gn(c);
    }
    return (l.options.unknownHandler || rg)(l, c, f);
  }
  function u(c) {
    const f = [];
    if ("children" in c) {
      const d = c.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const y = l.one(d[p], c);
        if (y) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = Ao(y.value)), !Array.isArray(y) && y.type === "element")) {
            const v = y.children[0];
            v && v.type === "text" && (v.value = Ao(v.value));
          }
          Array.isArray(y) ? f.push(...y) : f.push(y);
        }
      }
    }
    return f;
  }
}
function tg(e, t) {
  e.position && (t.position = $d(e));
}
function ng(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && a && Object.assign(n.properties, Gn(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function rg(e, t) {
  const n = t.data || {}, r = "value" in t && !(ui.call(n, "hProperties") || ui.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ig(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Ao(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Oo(e, t) {
  const n = eg(e, t), r = n.one(e, void 0), i = Wm(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function ag(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Oo(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Oo(n, { file: r, ...e || t })
    );
  };
}
function No(e) {
  if (e)
    throw e;
}
var _r, Io;
function og() {
  if (Io) return _r;
  Io = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : t.call(u) === "[object Array]";
  }, a = function(u) {
    if (!u || t.call(u) !== "[object Object]")
      return !1;
    var c = e.call(u, "constructor"), f = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !c && !f)
      return !1;
    var d;
    for (d in u)
      ;
    return typeof d > "u" || e.call(u, d);
  }, o = function(u, c) {
    n && c.name === "__proto__" ? n(u, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : u[c.name] = c.newValue;
  }, l = function(u, c) {
    if (c === "__proto__")
      if (e.call(u, c)) {
        if (r)
          return r(u, c).value;
      } else return;
    return u[c];
  };
  return _r = function s() {
    var u, c, f, d, p, y, v = arguments[0], k = 1, b = arguments.length, A = !1;
    for (typeof v == "boolean" && (A = v, v = arguments[1] || {}, k = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); k < b; ++k)
      if (u = arguments[k], u != null)
        for (c in u)
          f = l(v, c), d = l(u, c), v !== d && (A && d && (a(d) || (p = i(d))) ? (p ? (p = !1, y = f && i(f) ? f : []) : y = f && a(f) ? f : {}, o(v, { name: c, newValue: s(A, y, d) })) : typeof d < "u" && o(v, { name: c, newValue: d }));
    return v;
  }, _r;
}
var lg = og();
const Lr = /* @__PURE__ */ vn(lg);
function ci(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function sg() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    l(null, ...i);
    function l(s, ...u) {
      const c = e[++a];
      let f = -1;
      if (s) {
        o(s);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      i = u, c ? ug(c, l)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function ug(e, t) {
  let n;
  return r;
  function r(...o) {
    const l = e.length > o.length;
    let s;
    l && o.push(i);
    try {
      s = e.apply(this, o);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (l && n)
        throw c;
      return i(c);
    }
    l || (s && s.then && typeof s.then == "function" ? s.then(a, i) : s instanceof Error ? i(s) : a(s));
  }
  function i(o, ...l) {
    n || (n = !0, t(o, ...l));
  }
  function a(o) {
    i(null, o);
  }
}
const nt = { basename: cg, dirname: fg, extname: dg, join: pg, sep: "/" };
function cg(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Cn(e);
  let n = 0, r = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && (a = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let o = -1, l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (a = !0, o = i + 1), l > -1 && (e.codePointAt(i) === t.codePointAt(l--) ? l < 0 && (r = i) : (l = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function fg(e) {
  if (Cn(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function dg(e) {
  Cn(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), l === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function pg(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Cn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : hg(n);
}
function hg(e) {
  Cn(e);
  const t = e.codePointAt(0) === 47;
  let n = mg(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function mg(e, t) {
  let n = "", r = 0, i = -1, a = 0, o = -1, l, s;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      l = e.codePointAt(o);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
      i = o, a = 0;
    } else l === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function Cn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const gg = { cwd: yg };
function yg() {
  return "/";
}
function fi(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function xg(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!fi(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return bg(e);
}
function bg(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Fr = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Zs {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? fi(t) ? n = { path: t } : typeof t == "string" || vg(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : gg.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Fr.length; ) {
      const a = Fr[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      Fr.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? nt.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Mr(t, "basename"), Dr(t, "basename"), this.path = nt.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? nt.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Po(this.basename, "dirname"), this.path = nt.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? nt.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Dr(t, "extname"), Po(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = nt.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    fi(t) && (t = xg(t)), Mr(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? nt.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Mr(t, "stem"), Dr(t, "stem"), this.path = nt.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Le(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Dr(e, t) {
  if (e && e.includes(nt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + nt.sep + "`"
    );
}
function Mr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Po(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function vg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const kg = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), wg = {}.hasOwnProperty;
class fa extends kg {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = sg();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new fa()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Lr(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? ($r("data", this.frozen), this.namespace[t] = n, this) : wg.call(this.namespace, t) && this.namespace[t] || void 0 : t ? ($r("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Ln(t), r = this.parser || this.Parser;
    return zr("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), zr("process", this.parser || this.Parser), Br("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, o) {
      const l = Ln(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(c, f, d) {
        if (c || !f || !d)
          return u(c);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), y = r.stringify(p, d);
        Sg(y) ? d.value = y : d.result = y, u(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function u(c, f) {
        c || !f ? o(c) : a ? a(f) : n(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), zr("processSync", this.parser || this.Parser), Br("processSync", this.compiler || this.Compiler), this.process(t, i), jo("processSync", "process", n), r;
    function i(a, o) {
      n = !0, No(a), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    Ro(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(o, l) {
      const s = Ln(n);
      i.run(t, s, u);
      function u(c, f, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? l(c) : o ? o(p) : r(void 0, p, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, a), jo("runSync", "run", r), i;
    function a(o, l) {
      No(o), i = l, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Ln(n), i = this.compiler || this.Compiler;
    return Br("stringify", i), Ro(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if ($r("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(c, f);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(u.plugins), u.settings && (i.settings = Lr(!0, i.settings, u.settings));
    }
    function l(u) {
      let c = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++c < u.length; ) {
          const f = u[c];
          a(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, c) {
      let f = -1, d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          d = f;
          break;
        }
      if (d === -1)
        r.push([u, ...c]);
      else if (c.length > 0) {
        let [p, ...y] = c;
        const v = r[d][1];
        ci(v) && ci(p) && (p = Lr(!0, v, p)), r[d] = [u, p, ...y];
      }
    }
  }
}
const Eg = new fa().freeze();
function zr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Br(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function $r(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ro(e) {
  if (!ci(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function jo(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Ln(e) {
  return Cg(e) ? e : new Zs(e);
}
function Cg(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Sg(e) {
  return typeof e == "string" || Tg(e);
}
function Tg(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Ag = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", _o = [], Lo = { allowDangerousHtml: !0 }, Og = /^(https?|ircs?|mailto|xmpp)$/i, Ng = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Ig(e) {
  const t = Pg(e), n = Rg(e);
  return jg(t.runSync(t.parse(n), n), e);
}
function Pg(e) {
  const t = e.rehypePlugins || _o, n = e.remarkPlugins || _o, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Lo } : Lo;
  return Eg().use(fm).use(n).use(ag, r).use(t);
}
function Rg(e) {
  const t = e.children || "", n = new Zs();
  return typeof t == "string" && (n.value = t), n;
}
function jg(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, l = t.unwrapDisallowed, s = t.urlTransform || _g;
  for (const c of Ng)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + Ag + c.id, void 0);
  return ca(e, u), Yd(e, {
    Fragment: g.Fragment,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: g.jsx,
    jsxs: g.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(c, f, d) {
    if (c.type === "raw" && d && typeof f == "number")
      return o ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let p;
      for (p in Pr)
        if (Object.hasOwn(Pr, p) && Object.hasOwn(c.properties, p)) {
          const y = c.properties[p], v = Pr[p];
          (v === null || v.includes(c.tagName)) && (c.properties[p] = s(String(y || ""), p, c));
        }
    }
    if (c.type === "element") {
      let p = n ? !n.includes(c.tagName) : a ? a.includes(c.tagName) : !1;
      if (!p && r && typeof f == "number" && (p = !r(c, f, d)), p && d && typeof f == "number")
        return l && c.children ? d.children.splice(f, 1, ...c.children) : d.children.splice(f, 1), f;
    }
  }
}
function _g(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Og.test(e.slice(0, t)) ? e : ""
  );
}
function Fo(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Lg(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Fg(e, t, n) {
  const i = ur((n || {}).ignore || []), a = Dg(t);
  let o = -1;
  for (; ++o < a.length; )
    Js(e, "text", l);
  function l(u, c) {
    let f = -1, d;
    for (; ++f < c.length; ) {
      const p = c[f], y = d ? d.children : void 0;
      if (i(
        p,
        y ? y.indexOf(p) : void 0,
        d
      ))
        return;
      d = p;
    }
    if (d)
      return s(u, c);
  }
  function s(u, c) {
    const f = c[c.length - 1], d = a[o][0], p = a[o][1];
    let y = 0;
    const k = f.children.indexOf(u);
    let b = !1, A = [];
    d.lastIndex = 0;
    let E = d.exec(u.value);
    for (; E; ) {
      const N = E.index, S = {
        index: E.index,
        input: E.input,
        stack: [...c, u]
      };
      let w = p(...E, S);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? d.lastIndex = N + 1 : (y !== N && A.push({
        type: "text",
        value: u.value.slice(y, N)
      }), Array.isArray(w) ? A.push(...w) : w && A.push(w), y = N + E[0].length, b = !0), !d.global)
        break;
      E = d.exec(u.value);
    }
    return b ? (y < u.value.length && A.push({ type: "text", value: u.value.slice(y) }), f.children.splice(k, 1, ...A)) : A = [u], k + A.length;
  }
}
function Dg(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Mg(i[0]), zg(i[1])]);
  }
  return t;
}
function Mg(e) {
  return typeof e == "string" ? new RegExp(Lg(e), "g") : e;
}
function zg(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Ur = "phrasing", Hr = ["autolink", "link", "image", "label"];
function Bg() {
  return {
    transforms: [Yg],
    enter: {
      literalAutolink: Ug,
      literalAutolinkEmail: Wr,
      literalAutolinkHttp: Wr,
      literalAutolinkWww: Wr
    },
    exit: {
      literalAutolink: qg,
      literalAutolinkEmail: Vg,
      literalAutolinkHttp: Hg,
      literalAutolinkWww: Wg
    }
  };
}
function $g() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Ur,
        notInConstruct: Hr
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Ur,
        notInConstruct: Hr
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Ur,
        notInConstruct: Hr
      }
    ]
  };
}
function Ug(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Wr(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Hg(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Wg(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Vg(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function qg(e) {
  this.exit(e);
}
function Yg(e) {
  Fg(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Gg],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Kg]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Gg(e, t, n, r, i) {
  let a = "";
  if (!eu(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Xg(n)))
    return !1;
  const o = Qg(n + r);
  if (!o[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: a + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [l, { type: "text", value: o[1] }] : l;
}
function Kg(e, t, n, r) {
  return (
    // Not an expected previous character.
    !eu(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Xg(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Qg(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Fo(e, "(");
  let a = Fo(e, ")");
  for (; r !== -1 && i > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function eu(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Nt(n) || or(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
tu.peek = oy;
function Jg() {
  this.buffer();
}
function Zg(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function ey() {
  this.buffer();
}
function ty(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function ny(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = et(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function ry(e) {
  this.exit(e);
}
function iy(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = et(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function ay(e) {
  this.exit(e);
}
function oy() {
  return "[";
}
function tu(e, t, n, r) {
  const i = n.createTracker(r);
  let a = i.move("[^");
  const o = n.enter("footnoteReference"), l = n.enter("reference");
  return a += i.move(
    n.safe(n.associationId(e), { after: "]", before: a })
  ), l(), o(), a += i.move("]"), a;
}
function ly() {
  return {
    enter: {
      gfmFootnoteCallString: Jg,
      gfmFootnoteCall: Zg,
      gfmFootnoteDefinitionLabelString: ey,
      gfmFootnoteDefinition: ty
    },
    exit: {
      gfmFootnoteCallString: ny,
      gfmFootnoteCall: ry,
      gfmFootnoteDefinitionLabelString: iy,
      gfmFootnoteDefinition: ay
    }
  };
}
function sy(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: tu },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, a, o) {
    const l = a.createTracker(o);
    let s = l.move("[^");
    const u = a.enter("footnoteDefinition"), c = a.enter("label");
    return s += l.move(
      a.safe(a.associationId(r), { before: s, after: "]" })
    ), c(), s += l.move("]:"), r.children && r.children.length > 0 && (l.shift(4), s += l.move(
      (t ? `
` : " ") + a.indentLines(
        a.containerFlow(r, l.current()),
        t ? nu : uy
      )
    )), u(), s;
  }
}
function uy(e, t, n) {
  return t === 0 ? e : nu(e, t, n);
}
function nu(e, t, n) {
  return (n ? "" : "    ") + e;
}
const cy = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
ru.peek = my;
function fy() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: py },
    exit: { strikethrough: hy }
  };
}
function dy() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: cy
      }
    ],
    handlers: { delete: ru }
  };
}
function py(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function hy(e) {
  this.exit(e);
}
function ru(e, t, n, r) {
  const i = n.createTracker(r), a = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), a(), o;
}
function my() {
  return "~";
}
function gy(e) {
  return e.length;
}
function yy(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || gy, a = [], o = [], l = [], s = [];
  let u = 0, c = -1;
  for (; ++c < e.length; ) {
    const v = [], k = [];
    let b = -1;
    for (e[c].length > u && (u = e[c].length); ++b < e[c].length; ) {
      const A = xy(e[c][b]);
      if (n.alignDelimiters !== !1) {
        const E = i(A);
        k[b] = E, (s[b] === void 0 || E > s[b]) && (s[b] = E);
      }
      v.push(A);
    }
    o[c] = v, l[c] = k;
  }
  let f = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++f < u; )
      a[f] = Do(r[f]);
  else {
    const v = Do(r);
    for (; ++f < u; )
      a[f] = v;
  }
  f = -1;
  const d = [], p = [];
  for (; ++f < u; ) {
    const v = a[f];
    let k = "", b = "";
    v === 99 ? (k = ":", b = ":") : v === 108 ? k = ":" : v === 114 && (b = ":");
    let A = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[f] - k.length - b.length
    );
    const E = k + "-".repeat(A) + b;
    n.alignDelimiters !== !1 && (A = k.length + A + b.length, A > s[f] && (s[f] = A), p[f] = A), d[f] = E;
  }
  o.splice(1, 0, d), l.splice(1, 0, p), c = -1;
  const y = [];
  for (; ++c < o.length; ) {
    const v = o[c], k = l[c];
    f = -1;
    const b = [];
    for (; ++f < u; ) {
      const A = v[f] || "";
      let E = "", N = "";
      if (n.alignDelimiters !== !1) {
        const S = s[f] - (k[f] || 0), w = a[f];
        w === 114 ? E = " ".repeat(S) : w === 99 ? S % 2 ? (E = " ".repeat(S / 2 + 0.5), N = " ".repeat(S / 2 - 0.5)) : (E = " ".repeat(S / 2), N = E) : N = " ".repeat(S);
      }
      n.delimiterStart !== !1 && !f && b.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && A === "") && (n.delimiterStart !== !1 || f) && b.push(" "), n.alignDelimiters !== !1 && b.push(E), b.push(A), n.alignDelimiters !== !1 && b.push(N), n.padding !== !1 && b.push(" "), (n.delimiterEnd !== !1 || f !== u - 1) && b.push("|");
    }
    y.push(
      n.delimiterEnd === !1 ? b.join("").replace(/ +$/, "") : b.join("")
    );
  }
  return y.join(`
`);
}
function xy(e) {
  return e == null ? "" : String(e);
}
function Do(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function by(e, t, n, r) {
  const i = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, a.current()),
    vy
  );
  return i(), o;
}
function vy(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function ky(e, t) {
  return Mo(e, t.inConstruct, !0) && !Mo(e, t.notInConstruct, !1);
}
function Mo(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function zo(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && ky(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function wy(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, a = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function Ey(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Cy(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Sy(e, t, n, r) {
  const i = Cy(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (Ey(e, n)) {
    const f = n.enter("codeIndented"), d = n.indentLines(a, Ty);
    return f(), d;
  }
  const l = n.createTracker(r), s = i.repeat(Math.max(wy(a, i) + 1, 3)), u = n.enter("codeFenced");
  let c = l.move(s);
  if (e.lang) {
    const f = n.enter(`codeFencedLang${o}`);
    c += l.move(
      n.safe(e.lang, {
        before: c,
        after: " ",
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  if (e.lang && e.meta) {
    const f = n.enter(`codeFencedMeta${o}`);
    c += l.move(" "), c += l.move(
      n.safe(e.meta, {
        before: c,
        after: `
`,
        encode: ["`"],
        ...l.current()
      })
    ), f();
  }
  return c += l.move(`
`), a && (c += l.move(a + `
`)), c += l.move(s), u(), c;
}
function Ty(e, t, n) {
  return (n ? "" : "    ") + e;
}
function da(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Ay(e, t, n, r) {
  const i = da(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), l(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), o(), u;
}
function Oy(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function yn(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Kn(e, t, n) {
  const r = Yt(e), i = Yt(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
iu.peek = Ny;
function iu(e, t, n, r) {
  const i = Oy(n), a = n.enter("emphasis"), o = n.createTracker(r), l = o.move(i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = Kn(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = yn(u) + s.slice(1));
  const f = s.charCodeAt(s.length - 1), d = Kn(r.after.charCodeAt(0), f, i);
  d.inside && (s = s.slice(0, -1) + yn(f));
  const p = o.move(i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: c.outside
  }, l + s + p;
}
function Ny(e, t, n) {
  return n.options.emphasis || "*";
}
function Iy(e, t) {
  let n = !1;
  return ca(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, si;
  }), !!((!e.depth || e.depth < 3) && ra(e) && (t.options.setext || n));
}
function Py(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Iy(e, n)) {
    const c = n.enter("headingSetext"), f = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return f(), c(), d + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      d.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1)
    );
  }
  const o = "#".repeat(i), l = n.enter("headingAtx"), s = n.enter("phrasing");
  a.move(o + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(u) && (u = yn(u.charCodeAt(0)) + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), s(), l(), u;
}
au.peek = Ry;
function au(e) {
  return e.value || "";
}
function Ry() {
  return "<";
}
ou.peek = jy;
function ou(e, t, n, r) {
  const i = da(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), l()), u += s.move(")"), o(), u;
}
function jy() {
  return "!";
}
lu.peek = _y;
function lu(e, t, n, r) {
  const i = e.referenceType, a = n.enter("imageReference");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), o();
  const c = n.stack;
  n.stack = [], o = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return o(), n.stack = c, a(), i === "full" || !u || u !== f ? s += l.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function _y() {
  return "!";
}
su.peek = Ly;
function su(e, t, n) {
  let r = e.value || "", i = "`", a = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
    const o = n.unsafe[a], l = n.compilePattern(o);
    let s;
    if (o.atBreak)
      for (; s = l.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function Ly() {
  return "`";
}
function uu(e, t) {
  const n = ra(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
cu.peek = Fy;
function cu(e, t, n, r) {
  const i = da(n), a = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let l, s;
  if (uu(e, n)) {
    const c = n.stack;
    n.stack = [], l = n.enter("autolink");
    let f = o.move("<");
    return f += o.move(
      n.containerPhrasing(e, {
        before: f,
        after: ">",
        ...o.current()
      })
    ), f += o.move(">"), l(), n.stack = c, f;
  }
  l = n.enter("link"), s = n.enter("label");
  let u = o.move("[");
  return u += o.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...o.current()
    })
  ), u += o.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += o.move("<"), u += o.move(
    n.safe(e.url, { before: u, after: ">", ...o.current() })
  ), u += o.move(">")) : (s = n.enter("destinationRaw"), u += o.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), s(), e.title && (s = n.enter(`title${a}`), u += o.move(" " + i), u += o.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...o.current()
    })
  ), u += o.move(i), s()), u += o.move(")"), l(), u;
}
function Fy(e, t, n) {
  return uu(e, n) ? "<" : "[";
}
fu.peek = Dy;
function fu(e, t, n, r) {
  const i = e.referenceType, a = n.enter("linkReference");
  let o = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), o();
  const c = n.stack;
  n.stack = [], o = n.enter("reference");
  const f = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return o(), n.stack = c, a(), i === "full" || !u || u !== f ? s += l.move(f + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function Dy() {
  return "[";
}
function pa(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function My(e) {
  const t = pa(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function zy(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function du(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function By(e, t, n, r) {
  const i = n.enter("list"), a = n.bulletCurrent;
  let o = e.ordered ? zy(n) : pa(n);
  const l = e.ordered ? o === "." ? ")" : "." : My(n);
  let s = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), du(n) === o && c
    ) {
      let f = -1;
      for (; ++f < e.children.length; ) {
        const d = e.children[f];
        if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (o = l), n.bulletCurrent = o;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = o, n.bulletCurrent = a, i(), u;
}
function $y(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Uy(e, t, n, r) {
  const i = $y(n);
  let a = n.bulletCurrent || pa(n);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let o = a.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const l = n.createTracker(r);
  l.move(a + " ".repeat(o - a.length)), l.shift(o);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, l.current()),
    c
  );
  return s(), u;
  function c(f, d, p) {
    return d ? (p ? "" : " ".repeat(o)) + f : (p ? a : a + " ".repeat(o - a.length)) + f;
  }
}
function Hy(e, t, n, r) {
  const i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return a(), i(), o;
}
const Wy = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  ur([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Vy(e, t, n, r) {
  return (e.children.some(function(o) {
    return Wy(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function qy(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
pu.peek = Yy;
function pu(e, t, n, r) {
  const i = qy(n), a = n.enter("strong"), o = n.createTracker(r), l = o.move(i + i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: l,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = Kn(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = yn(u) + s.slice(1));
  const f = s.charCodeAt(s.length - 1), d = Kn(r.after.charCodeAt(0), f, i);
  d.inside && (s = s.slice(0, -1) + yn(f));
  const p = o.move(i + i);
  return a(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: c.outside
  }, l + s + p;
}
function Yy(e, t, n) {
  return n.options.strong || "*";
}
function Gy(e, t, n, r) {
  return n.safe(e.value, r);
}
function Ky(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Xy(e, t, n) {
  const r = (du(n) + (n.options.ruleSpaces ? " " : "")).repeat(Ky(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const hu = {
  blockquote: by,
  break: zo,
  code: Sy,
  definition: Ay,
  emphasis: iu,
  hardBreak: zo,
  heading: Py,
  html: au,
  image: ou,
  imageReference: lu,
  inlineCode: su,
  link: cu,
  linkReference: fu,
  list: By,
  listItem: Uy,
  paragraph: Hy,
  root: Vy,
  strong: pu,
  text: Gy,
  thematicBreak: Xy
};
function Qy() {
  return {
    enter: {
      table: Jy,
      tableData: Bo,
      tableHeader: Bo,
      tableRow: e1
    },
    exit: {
      codeText: t1,
      table: Zy,
      tableData: Vr,
      tableHeader: Vr,
      tableRow: Vr
    }
  };
}
function Jy(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function Zy(e) {
  this.exit(e), this.data.inTable = void 0;
}
function e1(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Vr(e) {
  this.exit(e);
}
function Bo(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function t1(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, n1));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function n1(e, t) {
  return t === "|" ? t : e;
}
function r1(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: d,
      table: o,
      tableCell: s,
      tableRow: l
    }
  };
  function o(p, y, v, k) {
    return u(c(p, v, k), p.align);
  }
  function l(p, y, v, k) {
    const b = f(p, v, k), A = u([b]);
    return A.slice(0, A.indexOf(`
`));
  }
  function s(p, y, v, k) {
    const b = v.enter("tableCell"), A = v.enter("phrasing"), E = v.containerPhrasing(p, {
      ...k,
      before: a,
      after: a
    });
    return A(), b(), E;
  }
  function u(p, y) {
    return yy(p, {
      align: y,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(p, y, v) {
    const k = p.children;
    let b = -1;
    const A = [], E = y.enter("table");
    for (; ++b < k.length; )
      A[b] = f(k[b], y, v);
    return E(), A;
  }
  function f(p, y, v) {
    const k = p.children;
    let b = -1;
    const A = [], E = y.enter("tableRow");
    for (; ++b < k.length; )
      A[b] = s(k[b], p, y, v);
    return E(), A;
  }
  function d(p, y, v) {
    let k = hu.inlineCode(p, y, v);
    return v.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function i1() {
  return {
    exit: {
      taskListCheckValueChecked: $o,
      taskListCheckValueUnchecked: $o,
      paragraph: o1
    }
  };
}
function a1() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: l1 }
  };
}
function $o(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function o1(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let a = -1, o;
      for (; ++a < i.length; ) {
        const l = i[a];
        if (l.type === "paragraph") {
          o = l;
          break;
        }
      }
      o === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function l1(e, t, n, r) {
  const i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", l = n.createTracker(r);
  a && l.move(o);
  let s = hu.listItem(e, t, n, {
    ...r,
    ...l.current()
  });
  return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + o;
  }
}
function s1() {
  return [
    Bg(),
    ly(),
    fy(),
    Qy(),
    i1()
  ];
}
function u1(e) {
  return {
    extensions: [
      $g(),
      sy(e),
      dy(),
      r1(e),
      a1()
    ]
  };
}
const c1 = {
  tokenize: g1,
  partial: !0
}, mu = {
  tokenize: y1,
  partial: !0
}, gu = {
  tokenize: x1,
  partial: !0
}, yu = {
  tokenize: b1,
  partial: !0
}, f1 = {
  tokenize: v1,
  partial: !0
}, xu = {
  name: "wwwAutolink",
  tokenize: h1,
  previous: vu
}, bu = {
  name: "protocolAutolink",
  tokenize: m1,
  previous: ku
}, gt = {
  name: "emailAutolink",
  tokenize: p1,
  previous: wu
}, ot = {};
function d1() {
  return {
    text: ot
  };
}
let Tt = 48;
for (; Tt < 123; )
  ot[Tt] = gt, Tt++, Tt === 58 ? Tt = 65 : Tt === 91 && (Tt = 97);
ot[43] = gt;
ot[45] = gt;
ot[46] = gt;
ot[95] = gt;
ot[72] = [gt, bu];
ot[104] = [gt, bu];
ot[87] = [gt, xu];
ot[119] = [gt, xu];
function p1(e, t, n) {
  const r = this;
  let i, a;
  return o;
  function o(f) {
    return !di(f) || !wu.call(r, r.previous) || ha(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(f));
  }
  function l(f) {
    return di(f) ? (e.consume(f), l) : f === 64 ? (e.consume(f), s) : n(f);
  }
  function s(f) {
    return f === 46 ? e.check(f1, c, u)(f) : f === 45 || f === 95 || Re(f) ? (a = !0, e.consume(f), s) : c(f);
  }
  function u(f) {
    return e.consume(f), i = !0, s;
  }
  function c(f) {
    return a && i && ze(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f);
  }
}
function h1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !vu.call(r, r.previous) || ha(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(c1, e.attempt(mu, e.attempt(gu, a), n), n)(o));
  }
  function a(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function m1(e, t, n) {
  const r = this;
  let i = "", a = !1;
  return o;
  function o(f) {
    return (f === 72 || f === 104) && ku.call(r, r.previous) && !ha(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), l) : n(f);
  }
  function l(f) {
    if (ze(f) && i.length < 5)
      return i += String.fromCodePoint(f), e.consume(f), l;
    if (f === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(f), s;
    }
    return n(f);
  }
  function s(f) {
    return f === 47 ? (e.consume(f), a ? u : (a = !0, s)) : n(f);
  }
  function u(f) {
    return f === null || qn(f) || xe(f) || Nt(f) || or(f) ? n(f) : e.attempt(mu, e.attempt(gu, c), n)(f);
  }
  function c(f) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f);
  }
}
function g1(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), a) : n(o);
  }
  function a(o) {
    return o === null ? n(o) : t(o);
  }
}
function y1(e, t, n) {
  let r, i, a;
  return o;
  function o(u) {
    return u === 46 || u === 95 ? e.check(yu, s, l)(u) : u === null || xe(u) || Nt(u) || u !== 45 && or(u) ? s(u) : (a = !0, e.consume(u), o);
  }
  function l(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), o;
  }
  function s(u) {
    return i || r || !a ? n(u) : t(u);
  }
}
function x1(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(yu, t, a)(o) : o === null || xe(o) || Nt(o) ? t(o) : (e.consume(o), i);
  }
  function a(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function b1(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), a) : l === 93 ? (e.consume(l), i) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || xe(l) || Nt(l) ? t(l) : n(l)
    );
  }
  function i(l) {
    return l === null || l === 40 || l === 91 || xe(l) || Nt(l) ? t(l) : r(l);
  }
  function a(l) {
    return ze(l) ? o(l) : n(l);
  }
  function o(l) {
    return l === 59 ? (e.consume(l), r) : ze(l) ? (e.consume(l), o) : n(l);
  }
}
function v1(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), i;
  }
  function i(a) {
    return Re(a) ? n(a) : t(a);
  }
}
function vu(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || xe(e);
}
function ku(e) {
  return !ze(e);
}
function wu(e) {
  return !(e === 47 || di(e));
}
function di(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || Re(e);
}
function ha(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const k1 = {
  tokenize: N1,
  partial: !0
};
function w1() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: T1,
        continuation: {
          tokenize: A1
        },
        exit: O1
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: S1
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: E1,
        resolveTo: C1
      }
    }
  };
}
function E1(e, t, n) {
  const r = this;
  let i = r.events.length;
  const a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      o = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return l;
  function l(s) {
    if (!o || !o._balanced)
      return n(s);
    const u = et(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !a.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function C1(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const a = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, o = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, a.start),
    end: Object.assign({}, a.end)
  }, l = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", a, t],
    ["enter", o, t],
    ["exit", o, t],
    ["exit", a, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...l), e;
}
function S1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a = 0, o;
  return l;
  function l(f) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(f) {
    return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(f) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      f === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      f === null || f === 91 || xe(f)
    )
      return n(f);
    if (f === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(et(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
    }
    return xe(f) || (o = !0), a++, e.consume(f), f === 92 ? c : u;
  }
  function c(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, u) : u(f);
  }
}
function T1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, o = 0, l;
  return s;
  function s(y) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(y) {
    return y === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(y);
  }
  function c(y) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      y === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      y === null || y === 91 || xe(y)
    )
      return n(y);
    if (y === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return a = et(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(y), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return xe(y) || (l = !0), o++, e.consume(y), y === 92 ? f : c;
  }
  function f(y) {
    return y === 91 || y === 92 || y === 93 ? (e.consume(y), o++, c) : c(y);
  }
  function d(y) {
    return y === 58 ? (e.enter("definitionMarker"), e.consume(y), e.exit("definitionMarker"), i.includes(a) || i.push(a), de(e, p, "gfmFootnoteDefinitionWhitespace")) : n(y);
  }
  function p(y) {
    return t(y);
  }
}
function A1(e, t, n) {
  return e.check(En, t, e.attempt(k1, t, n));
}
function O1(e) {
  e.exit("gfmFootnoteDefinition");
}
function N1(e, t, n) {
  const r = this;
  return de(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(a) : n(a);
  }
}
function I1(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(o, l) {
    let s = -1;
    for (; ++s < o.length; )
      if (o[s][0] === "enter" && o[s][1].type === "strikethroughSequenceTemporary" && o[s][1]._close) {
        let u = s;
        for (; u--; )
          if (o[u][0] === "exit" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._open && // If the sizes are the same:
          o[s][1].end.offset - o[s][1].start.offset === o[u][1].end.offset - o[u][1].start.offset) {
            o[s][1].type = "strikethroughSequence", o[u][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, o[u][1].start),
              end: Object.assign({}, o[s][1].end)
            }, f = {
              type: "strikethroughText",
              start: Object.assign({}, o[u][1].end),
              end: Object.assign({}, o[s][1].start)
            }, d = [["enter", c, l], ["enter", o[u][1], l], ["exit", o[u][1], l], ["enter", f, l]], p = l.parser.constructs.insideSpan.null;
            p && Ye(d, d.length, 0, lr(p, o.slice(u + 1, s), l)), Ye(d, d.length, 0, [["exit", f, l], ["enter", o[s][1], l], ["exit", o[s][1], l], ["exit", c, l]]), Ye(o, u - 1, s - u + 3, d), s = u + d.length - 2;
            break;
          }
      }
    for (s = -1; ++s < o.length; )
      o[s][1].type === "strikethroughSequenceTemporary" && (o[s][1].type = "data");
    return o;
  }
  function a(o, l, s) {
    const u = this.previous, c = this.events;
    let f = 0;
    return d;
    function d(y) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(y) : (o.enter("strikethroughSequenceTemporary"), p(y));
    }
    function p(y) {
      const v = Yt(u);
      if (y === 126)
        return f > 1 ? s(y) : (o.consume(y), f++, p);
      if (f < 2 && !n) return s(y);
      const k = o.exit("strikethroughSequenceTemporary"), b = Yt(y);
      return k._open = !b || b === 2 && !!v, k._close = !v || v === 2 && !!b, l(y);
    }
  }
}
class P1 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    R1(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(a, o) {
      return a[0] - o[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const a of i)
        t.push(a);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function R1(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function j1(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const a = r.length - 1;
          r[a] = r[a] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function _1() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: L1,
        resolveAll: F1
      }
    }
  };
}
function L1(e, t, n) {
  const r = this;
  let i = 0, a = 0, o;
  return l;
  function l(C) {
    let D = r.events.length - 1;
    for (; D > -1; ) {
      const L = r.events[D][1].type;
      if (L === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      L === "linePrefix") D--;
      else break;
    }
    const B = D > -1 ? r.events[D][1].type : null, z = B === "tableHead" || B === "tableRow" ? w : s;
    return z === w && r.parser.lazy[r.now().line] ? n(C) : z(C);
  }
  function s(C) {
    return e.enter("tableHead"), e.enter("tableRow"), u(C);
  }
  function u(C) {
    return C === 124 || (o = !0, a += 1), c(C);
  }
  function c(C) {
    return C === null ? n(C) : K(C) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), p) : n(C) : ue(C) ? de(e, c, "whitespace")(C) : (a += 1, o && (o = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), o = !0, c) : (e.enter("data"), f(C)));
  }
  function f(C) {
    return C === null || C === 124 || xe(C) ? (e.exit("data"), c(C)) : (e.consume(C), C === 92 ? d : f);
  }
  function d(C) {
    return C === 92 || C === 124 ? (e.consume(C), f) : f(C);
  }
  function p(C) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), o = !1, ue(C) ? de(e, y, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : y(C));
  }
  function y(C) {
    return C === 45 || C === 58 ? k(C) : C === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), v) : S(C);
  }
  function v(C) {
    return ue(C) ? de(e, k, "whitespace")(C) : k(C);
  }
  function k(C) {
    return C === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), b) : C === 45 ? (a += 1, b(C)) : C === null || K(C) ? N(C) : S(C);
  }
  function b(C) {
    return C === 45 ? (e.enter("tableDelimiterFiller"), A(C)) : S(C);
  }
  function A(C) {
    return C === 45 ? (e.consume(C), A) : C === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), E) : (e.exit("tableDelimiterFiller"), E(C));
  }
  function E(C) {
    return ue(C) ? de(e, N, "whitespace")(C) : N(C);
  }
  function N(C) {
    return C === 124 ? y(C) : C === null || K(C) ? !o || i !== a ? S(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : S(C);
  }
  function S(C) {
    return n(C);
  }
  function w(C) {
    return e.enter("tableRow"), M(C);
  }
  function M(C) {
    return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), M) : C === null || K(C) ? (e.exit("tableRow"), t(C)) : ue(C) ? de(e, M, "whitespace")(C) : (e.enter("data"), Q(C));
  }
  function Q(C) {
    return C === null || C === 124 || xe(C) ? (e.exit("data"), M(C)) : (e.consume(C), C === 92 ? ne : Q);
  }
  function ne(C) {
    return C === 92 || C === 124 ? (e.consume(C), Q) : Q(C);
  }
}
function F1(e, t) {
  let n = -1, r = !0, i = 0, a = [0, 0, 0, 0], o = [0, 0, 0, 0], l = !1, s = 0, u, c, f;
  const d = new P1();
  for (; ++n < e.length; ) {
    const p = e[n], y = p[1];
    p[0] === "enter" ? y.type === "tableHead" ? (l = !1, s !== 0 && (Uo(d, t, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, d.add(n, 0, [["enter", u, t]])) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (r = !0, f = void 0, a = [0, 0, 0, 0], o = [0, n + 1, 0, 0], l && (l = !1, c = {
      type: "tableBody",
      start: Object.assign({}, y.start),
      // Note: correct end is set later.
      end: Object.assign({}, y.end)
    }, d.add(n, 0, [["enter", c, t]])), i = y.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], f = Fn(d, t, a, i, void 0, f), a = [0, 0, 0, 0]), o[2] = n)) : y.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], f = Fn(d, t, a, i, void 0, f)), a = o, o = [a[1], n, 0, 0])) : y.type === "tableHead" ? (l = !0, s = n) : y.type === "tableRow" || y.type === "tableDelimiterRow" ? (s = n, a[1] !== 0 ? (o[0] = o[1], f = Fn(d, t, a, i, n, f)) : o[1] !== 0 && (f = Fn(d, t, o, i, n, f)), i = 0) : i && (y.type === "data" || y.type === "tableDelimiterMarker" || y.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (s !== 0 && Uo(d, t, s, u, c), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const p = t.events[n];
    p[0] === "enter" && p[1].type === "table" && (p[1]._align = j1(t.events, n));
  }
  return e;
}
function Fn(e, t, n, r, i, a) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, $t(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const s = $t(t.events, n[1]);
  if (a = {
    type: o,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const u = $t(t.events, n[2]), c = $t(t.events, n[3]), f = {
      type: l,
      start: Object.assign({}, u),
      end: Object.assign({}, c)
    };
    if (e.add(n[2], 0, [["enter", f, t]]), r !== 2) {
      const d = t.events[n[2]], p = t.events[n[3]];
      if (d[1].end = Object.assign({}, p[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const y = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(y, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", f, t]]);
  }
  return i !== void 0 && (a.end = Object.assign({}, $t(t.events, i)), e.add(i, 0, [["exit", a, t]]), a = void 0), a;
}
function Uo(e, t, n, r, i) {
  const a = [], o = $t(t.events, n);
  i && (i.end = Object.assign({}, o), a.push(["exit", i, t])), r.end = Object.assign({}, o), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function $t(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const D1 = {
  name: "tasklistCheck",
  tokenize: z1
};
function M1() {
  return {
    text: {
      91: D1
    }
  };
}
function z1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), a)
    );
  }
  function a(s) {
    return xe(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : n(s);
  }
  function o(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(s);
  }
  function l(s) {
    return K(s) ? t(s) : ue(s) ? e.check({
      tokenize: B1
    }, t, n)(s) : n(s);
  }
}
function B1(e, t, n) {
  return de(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function $1(e) {
  return js([
    d1(),
    w1(),
    I1(e),
    _1(),
    M1()
  ]);
}
const U1 = {};
function H1(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || U1, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push($1(n)), a.push(s1()), o.push(u1(n));
}
const Eb = ({ mark_down_data: e }) => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(ye, { children: /* @__PURE__ */ g.jsx("div", { className: "mb-0 mt-1 font-color-class bio-desc markdown-body", children: /* @__PURE__ */ g.jsx(Ig, { remarkPlugins: [H1], children: e }) }) }) }) }), Cb = ({ more_link: e }) => {
  const t = e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`;
  return /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsx("h1", { className: "animate bounce", children: /* @__PURE__ */ g.jsxs(
    "a",
    {
      className: "text-decoration-none more-color",
      href: t,
      rel: "noopener noreferrer",
      children: [
        /* @__PURE__ */ g.jsx("span", { className: "dot", children: "." }),
        /* @__PURE__ */ g.jsx("span", { className: "dot", children: "." }),
        /* @__PURE__ */ g.jsx("span", { className: "dot", children: "." })
      ]
    }
  ) }) }) }) });
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function W1(e, t, n) {
  return (t = q1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ho(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ho(Object(n), !0).forEach(function(r) {
      W1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ho(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function V1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function q1(e) {
  var t = V1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Wo = () => {
};
let ma = {}, Eu = {}, Cu = null, Su = {
  mark: Wo,
  measure: Wo
};
try {
  typeof window < "u" && (ma = window), typeof document < "u" && (Eu = document), typeof MutationObserver < "u" && (Cu = MutationObserver), typeof performance < "u" && (Su = performance);
} catch {
}
const {
  userAgent: Vo = ""
} = ma.navigator || {}, kt = ma, ke = Eu, qo = Cu, Dn = Su;
kt.document;
const yt = !!ke.documentElement && !!ke.head && typeof ke.addEventListener == "function" && typeof ke.createElement == "function", Tu = ~Vo.indexOf("MSIE") || ~Vo.indexOf("Trident/");
var Y1 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, G1 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Au = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, K1 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ou = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], _e = "classic", fr = "duotone", X1 = "sharp", Q1 = "sharp-duotone", Nu = [_e, fr, X1, Q1], J1 = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, Z1 = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, ex = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), tx = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, nx = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Yo = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, rx = ["kit"], ix = {
  kit: {
    "fa-kit": "fak"
  }
}, ax = ["fak", "fakd"], ox = {
  kit: {
    fak: "fa-kit"
  }
}, Go = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Mn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, lx = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], sx = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ux = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, cx = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, fx = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, pi = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, dx = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], hi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...lx, ...dx], px = ["solid", "regular", "light", "thin", "duotone", "brands"], Iu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], hx = Iu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), mx = [...Object.keys(fx), ...px, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Mn.GROUP, Mn.SWAP_OPACITY, Mn.PRIMARY, Mn.SECONDARY].concat(Iu.map((e) => "".concat(e, "x"))).concat(hx.map((e) => "w-".concat(e))), gx = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const pt = "___FONT_AWESOME___", mi = 16, Pu = "fa", Ru = "svg-inline--fa", It = "data-fa-i2svg", gi = "data-fa-pseudo-element", yx = "data-fa-pseudo-element-pending", ga = "data-prefix", ya = "data-icon", Ko = "fontawesome-i2svg", xx = "async", bx = ["HTML", "HEAD", "STYLE", "SCRIPT"], ju = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Sn(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[_e];
    }
  });
}
const _u = I({}, Au);
_u[_e] = I(I(I(I({}, {
  "fa-duotone": "duotone"
}), Au[_e]), Yo.kit), Yo["kit-duotone"]);
const vx = Sn(_u), yi = I({}, tx);
yi[_e] = I(I(I(I({}, {
  duotone: "fad"
}), yi[_e]), Go.kit), Go["kit-duotone"]);
const Xo = Sn(yi), xi = I({}, pi);
xi[_e] = I(I({}, xi[_e]), ox.kit);
const xa = Sn(xi), bi = I({}, cx);
bi[_e] = I(I({}, bi[_e]), ix.kit);
Sn(bi);
const kx = Y1, Lu = "fa-layers-text", wx = G1, Ex = I({}, J1);
Sn(Ex);
const Cx = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], qr = K1, Sx = [...rx, ...mx], pn = kt.FontAwesomeConfig || {};
function Tx(e) {
  var t = ke.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Ax(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ke && typeof ke.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = Ax(Tx(n));
  i != null && (pn[r] = i);
});
const Fu = {
  styleDefault: "solid",
  familyDefault: _e,
  cssPrefix: Pu,
  replacementClass: Ru,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
pn.familyPrefix && (pn.cssPrefix = pn.familyPrefix);
const Gt = I(I({}, Fu), pn);
Gt.autoReplaceSvg || (Gt.observeMutations = !1);
const V = {};
Object.keys(Fu).forEach((e) => {
  Object.defineProperty(V, e, {
    enumerable: !0,
    set: function(t) {
      Gt[e] = t, hn.forEach((n) => n(V));
    },
    get: function() {
      return Gt[e];
    }
  });
});
Object.defineProperty(V, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Gt.cssPrefix = e, hn.forEach((t) => t(V));
  },
  get: function() {
    return Gt.cssPrefix;
  }
});
kt.FontAwesomeConfig = V;
const hn = [];
function Ox(e) {
  return hn.push(e), () => {
    hn.splice(hn.indexOf(e), 1);
  };
}
const bt = mi, it = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Nx(e) {
  if (!e || !yt)
    return;
  const t = ke.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ke.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const a = n[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return ke.head.insertBefore(t, r), e;
}
const Ix = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function xn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ix[Math.random() * 62 | 0];
  return t;
}
function Zt(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ba(e) {
  return e.classList ? Zt(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Du(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Px(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Du(e[n]), '" '), "").trim();
}
function dr(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function va(e) {
  return e.size !== it.size || e.x !== it.x || e.y !== it.y || e.rotate !== it.rotate || e.flipX || e.flipY;
}
function Rx(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), s = {
    transform: "".concat(a, " ").concat(o, " ").concat(l)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: s,
    path: u
  };
}
function jx(e) {
  let {
    transform: t,
    width: n = mi,
    height: r = mi,
    startCentered: i = !1
  } = e, a = "";
  return i && Tu ? a += "translate(".concat(t.x / bt - n / 2, "em, ").concat(t.y / bt - r / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / bt, "em), calc(-50% + ").concat(t.y / bt, "em)) ") : a += "translate(".concat(t.x / bt, "em, ").concat(t.y / bt, "em) "), a += "scale(".concat(t.size / bt * (t.flipX ? -1 : 1), ", ").concat(t.size / bt * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var _x = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function Mu() {
  const e = Pu, t = Ru, n = V.cssPrefix, r = V.replacementClass;
  let i = _x;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return i;
}
let Qo = !1;
function Yr() {
  V.autoAddCss && !Qo && (Nx(Mu()), Qo = !0);
}
var Lx = {
  mixout() {
    return {
      dom: {
        css: Mu,
        insertCss: Yr
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Yr();
      },
      beforeI2svg() {
        Yr();
      }
    };
  }
};
const ht = kt || {};
ht[pt] || (ht[pt] = {});
ht[pt].styles || (ht[pt].styles = {});
ht[pt].hooks || (ht[pt].hooks = {});
ht[pt].shims || (ht[pt].shims = []);
var at = ht[pt];
const zu = [], Bu = function() {
  ke.removeEventListener("DOMContentLoaded", Bu), Xn = 1, zu.map((e) => e());
};
let Xn = !1;
yt && (Xn = (ke.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ke.readyState), Xn || ke.addEventListener("DOMContentLoaded", Bu));
function Fx(e) {
  yt && (Xn ? setTimeout(e, 0) : zu.push(e));
}
function Tn(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Du(e) : "<".concat(t, " ").concat(Px(n), ">").concat(r.map(Tn).join(""), "</").concat(t, ">");
}
function Jo(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Gr = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, l = n, s, u, c;
  for (r === void 0 ? (s = 1, c = t[a[0]]) : (s = 0, c = r); s < o; s++)
    u = a[s], c = l(c, t[u], u, t);
  return c;
};
function Dx(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function vi(e) {
  const t = Dx(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Mx(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Zo(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ki(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = Zo(t);
  typeof at.hooks.addPack == "function" && !r ? at.hooks.addPack(e, Zo(t)) : at.styles[e] = I(I({}, at.styles[e] || {}), i), e === "fas" && ki("fa", t);
}
const {
  styles: bn,
  shims: zx
} = at, $u = Object.keys(xa), Bx = $u.reduce((e, t) => (e[t] = Object.keys(xa[t]), e), {});
let ka = null, Uu = {}, Hu = {}, Wu = {}, Vu = {}, qu = {};
function $x(e) {
  return ~Sx.indexOf(e);
}
function Ux(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !$x(i) ? i : null;
}
const Yu = () => {
  const e = (r) => Gr(bn, (i, a, o) => (i[o] = Gr(a, r, {}), i), {});
  Uu = e((r, i, a) => (i[3] && (r[i[3]] = a), i[2] && i[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = a;
  }), r)), Hu = e((r, i, a) => (r[a] = a, i[2] && i[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = a;
  }), r)), qu = e((r, i, a) => {
    const o = i[2];
    return r[a] = a, o.forEach((l) => {
      r[l] = a;
    }), r;
  });
  const t = "far" in bn || V.autoFetchSvg, n = Gr(zx, (r, i) => {
    const a = i[0];
    let o = i[1];
    const l = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: o,
      iconName: l
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Wu = n.names, Vu = n.unicodes, ka = pr(V.styleDefault, {
    family: V.familyDefault
  });
};
Ox((e) => {
  ka = pr(e.styleDefault, {
    family: V.familyDefault
  });
});
Yu();
function wa(e, t) {
  return (Uu[e] || {})[t];
}
function Hx(e, t) {
  return (Hu[e] || {})[t];
}
function Ot(e, t) {
  return (qu[e] || {})[t];
}
function Gu(e) {
  return Wu[e] || {
    prefix: null,
    iconName: null
  };
}
function Wx(e) {
  const t = Vu[e], n = wa("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function wt() {
  return ka;
}
const Ku = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Vx(e) {
  let t = _e;
  const n = $u.reduce((r, i) => (r[i] = "".concat(V.cssPrefix, "-").concat(i), r), {});
  return Nu.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => Bx[r].includes(i))) && (t = r);
  }), t;
}
function pr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = _e
  } = t, r = vx[n][e];
  if (n === fr && !e)
    return "fad";
  const i = Xo[n][e] || Xo[n][r], a = e in at.styles ? e : null;
  return i || a || null;
}
function qx(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = Ux(V.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function el(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = hi.concat(sx), a = el(e.filter((f) => i.includes(f))), o = el(e.filter((f) => !hi.includes(f))), l = a.filter((f) => (r = f, !Ou.includes(f))), [s = null] = l, u = Vx(a), c = I(I({}, qx(o)), {}, {
    prefix: pr(s, {
      family: u
    })
  });
  return I(I(I({}, c), Xx({
    values: e,
    family: u,
    styles: bn,
    config: V,
    canonical: c,
    givenPrefix: r
  })), Yx(n, r, c));
}
function Yx(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const a = t === "fa" ? Gu(i) : {}, o = Ot(r, i);
  return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !bn.far && bn.fas && !V.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const Gx = Nu.filter((e) => e !== _e || e !== fr), Kx = Object.keys(pi).filter((e) => e !== _e).map((e) => Object.keys(pi[e])).flat();
function Xx(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, l = n === fr, s = t.includes("fa-duotone") || t.includes("fad"), u = o.familyDefault === "duotone", c = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (s || u || c) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Gx.includes(n) && (Object.keys(a).find((d) => Kx.includes(d)) || o.autoFetchSvg)) {
    const d = ex.get(n).defaultShortPrefixId;
    r.prefix = d, r.iconName = Ot(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = wt() || "fas"), r;
}
class Qx {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = I(I({}, this.definitions[a] || {}), i[a]), ki(a, i[a]);
      const o = xa[_e][a];
      o && ki(o, i[a]), Yu();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: l
      } = r[i], s = l[2];
      t[a] || (t[a] = {}), s.length > 0 && s.forEach((u) => {
        typeof u == "string" && (t[a][u] = l);
      }), t[a][o] = l;
    }), t;
  }
}
let tl = [], Ht = {};
const qt = {}, Jx = Object.keys(qt);
function Zx(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return tl = e, Ht = {}, Object.keys(qt).forEach((r) => {
    Jx.indexOf(r) === -1 && delete qt[r];
  }), tl.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (n[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = i[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        Ht[o] || (Ht[o] = []), Ht[o].push(a[o]);
      });
    }
    r.provides && r.provides(qt);
  }), n;
}
function wi(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Ht[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function Pt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Ht[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Et() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return qt[e] ? qt[e].apply(null, t) : void 0;
}
function Ei(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || wt();
  if (t)
    return t = Ot(n, t) || t, Jo(Xu.definitions, n, t) || Jo(at.styles, n, t);
}
const Xu = new Qx(), e0 = () => {
  V.autoReplaceSvg = !1, V.observeMutations = !1, Pt("noAuto");
}, t0 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return yt ? (Pt("beforeI2svg", e), Et("pseudoElements2svg", e), Et("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    V.autoReplaceSvg === !1 && (V.autoReplaceSvg = !0), V.observeMutations = !0, Fx(() => {
      r0({
        autoReplaceSvgRoot: t
      }), Pt("watch", e);
    });
  }
}, n0 = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Ot(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = pr(e[0]);
      return {
        prefix: n,
        iconName: Ot(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(V.cssPrefix, "-")) > -1 || e.match(kx))) {
      const t = hr(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || wt(),
        iconName: Ot(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = wt();
      return {
        prefix: t,
        iconName: Ot(t, e) || e
      };
    }
  }
}, Ge = {
  noAuto: e0,
  config: V,
  dom: t0,
  parse: n0,
  library: Xu,
  findIconDefinition: Ei,
  toHtml: Tn
}, r0 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ke
  } = e;
  (Object.keys(at.styles).length > 0 || V.autoFetchSvg) && yt && V.autoReplaceSvg && Ge.dom.i2svg({
    node: t
  });
};
function mr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Tn(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!yt) return;
      const n = ke.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function i0(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (va(o) && n.found && !r.found) {
    const {
      width: l,
      height: s
    } = n, u = {
      x: l / s / 2,
      y: 0.5
    };
    i.style = dr(I(I({}, a), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function a0(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(V.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: I(I({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Ea(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: a,
    symbol: o,
    title: l,
    maskId: s,
    titleId: u,
    extra: c,
    watchable: f = !1
  } = e, {
    width: d,
    height: p
  } = n.found ? n : t, y = ax.includes(r), v = [V.replacementClass, i ? "".concat(V.cssPrefix, "-").concat(i) : ""].filter((S) => c.classes.indexOf(S) === -1).filter((S) => S !== "" || !!S).concat(c.classes).join(" ");
  let k = {
    children: [],
    attributes: I(I({}, c.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: v,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(d, " ").concat(p)
    })
  };
  const b = y && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(d / p * 16 * 0.0625, "em")
  } : {};
  f && (k.attributes[It] = ""), l && (k.children.push({
    tag: "title",
    attributes: {
      id: k.attributes["aria-labelledby"] || "title-".concat(u || xn())
    },
    children: [l]
  }), delete k.attributes.title);
  const A = I(I({}, k), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: s,
    transform: a,
    symbol: o,
    styles: I(I({}, b), c.styles)
  }), {
    children: E,
    attributes: N
  } = n.found && t.found ? Et("generateAbstractMask", A) || {
    children: [],
    attributes: {}
  } : Et("generateAbstractIcon", A) || {
    children: [],
    attributes: {}
  };
  return A.children = E, A.attributes = N, o ? a0(A) : i0(A);
}
function nl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: a,
    extra: o,
    watchable: l = !1
  } = e, s = I(I(I({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (s[It] = "");
  const u = I({}, o.styles);
  va(i) && (u.transform = jx({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  const c = dr(u);
  c.length > 0 && (s.style = c);
  const f = [];
  return f.push({
    tag: "span",
    attributes: s,
    children: [t]
  }), a && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), f;
}
function o0(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = I(I(I({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = dr(r.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: Kr
} = at;
function Ci(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(V.cssPrefix, "-").concat(qr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(qr.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(V.cssPrefix, "-").concat(qr.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const l0 = {
  found: !1,
  width: 512,
  height: 512
};
function s0(e, t) {
  !ju && !V.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Si(e, t) {
  let n = t;
  return t === "fa" && V.styleDefault !== null && (t = wt()), new Promise((r, i) => {
    if (n === "fa") {
      const a = Gu(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Kr[t] && Kr[t][e]) {
      const a = Kr[t][e];
      return r(Ci(a));
    }
    s0(e, t), r(I(I({}, l0), {}, {
      icon: V.showMissingIcons && e ? Et("missingIconAbstract") || {} : {}
    }));
  });
}
const rl = () => {
}, Ti = V.measurePerformance && Dn && Dn.mark && Dn.measure ? Dn : {
  mark: rl,
  measure: rl
}, un = 'FA "6.7.2"', u0 = (e) => (Ti.mark("".concat(un, " ").concat(e, " begins")), () => Qu(e)), Qu = (e) => {
  Ti.mark("".concat(un, " ").concat(e, " ends")), Ti.measure("".concat(un, " ").concat(e), "".concat(un, " ").concat(e, " begins"), "".concat(un, " ").concat(e, " ends"));
};
var Ca = {
  begin: u0,
  end: Qu
};
const Bn = () => {
};
function il(e) {
  return typeof (e.getAttribute ? e.getAttribute(It) : null) == "string";
}
function c0(e) {
  const t = e.getAttribute ? e.getAttribute(ga) : null, n = e.getAttribute ? e.getAttribute(ya) : null;
  return t && n;
}
function f0(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(V.replacementClass);
}
function d0() {
  return V.autoReplaceSvg === !0 ? $n.replace : $n[V.autoReplaceSvg] || $n.replace;
}
function p0(e) {
  return ke.createElementNS("http://www.w3.org/2000/svg", e);
}
function h0(e) {
  return ke.createElement(e);
}
function Ju(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? p0 : h0
  } = t;
  if (typeof e == "string")
    return ke.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(Ju(a, {
      ceFn: n
    }));
  }), r;
}
function m0(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const $n = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ju(n), t);
      }), t.getAttribute(It) === null && V.keepOriginalSource) {
        let n = ke.createComment(m0(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ba(t).indexOf(V.replacementClass))
      return $n.replace(e);
    const r = new RegExp("".concat(V.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, l) => (l === V.replacementClass || l.match(r) ? o.toSvg.push(l) : o.toNode.push(l), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = n.map((a) => Tn(a)).join(`
`);
    t.setAttribute(It, ""), t.innerHTML = i;
  }
};
function al(e) {
  e();
}
function Zu(e, t) {
  const n = typeof t == "function" ? t : Bn;
  if (e.length === 0)
    n();
  else {
    let r = al;
    V.mutateApproach === xx && (r = kt.requestAnimationFrame || al), r(() => {
      const i = d0(), a = Ca.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
let Sa = !1;
function ec() {
  Sa = !0;
}
function Ai() {
  Sa = !1;
}
let Qn = null;
function ol(e) {
  if (!qo || !V.observeMutations)
    return;
  const {
    treeCallback: t = Bn,
    nodeCallback: n = Bn,
    pseudoElementsCallback: r = Bn,
    observeMutationsRoot: i = ke
  } = e;
  Qn = new qo((a) => {
    if (Sa) return;
    const o = wt();
    Zt(a).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !il(l.addedNodes[0]) && (V.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && V.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && il(l.target) && ~Cx.indexOf(l.attributeName))
        if (l.attributeName === "class" && c0(l.target)) {
          const {
            prefix: s,
            iconName: u
          } = hr(ba(l.target));
          l.target.setAttribute(ga, s || o), u && l.target.setAttribute(ya, u);
        } else f0(l.target) && n(l.target);
    });
  }), yt && Qn.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function g0() {
  Qn && Qn.disconnect();
}
function y0(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const a = i.split(":"), o = a[0], l = a.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), n;
}
function x0(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = hr(ba(e));
  return i.prefix || (i.prefix = wt()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Hx(i.prefix, e.innerText) || wa(i.prefix, vi(e.innerText))), !i.iconName && V.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function b0(e) {
  const t = Zt(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return V.autoA11y && (n ? t["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(r || xn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function v0() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: it,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function ll(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = x0(e), a = b0(e), o = wi("parseNodeAttributes", {}, e);
  let l = t.styleParser ? y0(e) : [];
  return I({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: it,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: a
    }
  }, o);
}
const {
  styles: k0
} = at;
function tc(e) {
  const t = V.autoReplaceSvg === "nest" ? ll(e, {
    styleParser: !1
  }) : ll(e);
  return ~t.extra.classes.indexOf(Lu) ? Et("generateLayersText", e, t) : Et("generateSvgReplacementMutation", e, t);
}
function w0() {
  return [...nx, ...hi];
}
function sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!yt) return Promise.resolve();
  const n = ke.documentElement.classList, r = (c) => n.add("".concat(Ko, "-").concat(c)), i = (c) => n.remove("".concat(Ko, "-").concat(c)), a = V.autoFetchSvg ? w0() : Ou.concat(Object.keys(k0));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Lu, ":not([").concat(It, "])")].concat(a.map((c) => ".".concat(c, ":not([").concat(It, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Zt(e.querySelectorAll(o));
  } catch {
  }
  if (l.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const s = Ca.begin("onTree"), u = l.reduce((c, f) => {
    try {
      const d = tc(f);
      d && c.push(d);
    } catch (d) {
      ju || d.name === "MissingIcon" && console.error(d);
    }
    return c;
  }, []);
  return new Promise((c, f) => {
    Promise.all(u).then((d) => {
      Zu(d, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), s(), c();
      });
    }).catch((d) => {
      s(), f(d);
    });
  });
}
function E0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  tc(e).then((n) => {
    n && Zu([n], t);
  });
}
function C0(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ei(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : Ei(i || {})), e(r, I(I({}, n), {}, {
      mask: i
    }));
  };
}
const S0 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = it,
    symbol: r = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: l = null,
    classes: s = [],
    attributes: u = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: d,
    icon: p
  } = e;
  return mr(I({
    type: "icon"
  }, e), () => (Pt("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), V.autoA11y && (o ? u["aria-labelledby"] = "".concat(V.replacementClass, "-title-").concat(l || xn()) : (u["aria-hidden"] = "true", u.focusable = "false")), Ea({
    icons: {
      main: Ci(p),
      mask: i ? Ci(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: d,
    transform: I(I({}, it), n),
    symbol: r,
    title: o,
    maskId: a,
    titleId: l,
    extra: {
      attributes: u,
      styles: c,
      classes: s
    }
  })));
};
var T0 = {
  mixout() {
    return {
      icon: C0(S0)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = sl, e.nodeCallback = E0, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ke,
        callback: r = () => {
        }
      } = t;
      return sl(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: a,
        prefix: o,
        transform: l,
        symbol: s,
        mask: u,
        maskId: c,
        extra: f
      } = n;
      return new Promise((d, p) => {
        Promise.all([Si(r, o), u.iconName ? Si(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((y) => {
          let [v, k] = y;
          d([t, Ea({
            icons: {
              main: v,
              mask: k
            },
            prefix: o,
            iconName: r,
            transform: l,
            symbol: s,
            maskId: c,
            title: i,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: a,
        styles: o
      } = t;
      const l = dr(o);
      l.length > 0 && (r.style = l);
      let s;
      return va(a) && (s = Et("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(s || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, A0 = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return mr({
          type: "layer"
        }, () => {
          Pt("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(V.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, O0 = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return mr({
          type: "counter",
          content: e
        }, () => (Pt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), o0({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(V.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, N0 = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = it,
          title: r = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return mr({
          type: "text",
          content: e
        }, () => (Pt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), nl({
          content: e,
          transform: I(I({}, it), n),
          title: r,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(V.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: a
      } = n;
      let o = null, l = null;
      if (Tu) {
        const s = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / s, l = u.height / s;
      }
      return V.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, nl({
        content: t.innerHTML,
        width: o,
        height: l,
        transform: i,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const I0 = new RegExp('"', "ug"), ul = [1105920, 1112319], cl = I(I(I(I({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Z1), gx), ux), Oi = Object.keys(cl).reduce((e, t) => (e[t.toLowerCase()] = cl[t], e), {}), P0 = Object.keys(Oi).reduce((e, t) => {
  const n = Oi[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function R0(e) {
  const t = e.replace(I0, ""), n = Mx(t, 0), r = n >= ul[0] && n <= ul[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: vi(i ? t[0] : t),
    isSecondary: r || i
  };
}
function j0(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (Oi[n] || {})[i] || P0[n];
}
function fl(e, t) {
  const n = "".concat(yx).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Zt(e.children).filter((d) => d.getAttribute(gi) === t)[0], l = kt.getComputedStyle(e, t), s = l.getPropertyValue("font-family"), u = s.match(wx), c = l.getPropertyValue("font-weight"), f = l.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), r();
    if (u && f !== "none" && f !== "") {
      const d = l.getPropertyValue("content");
      let p = j0(s, c);
      const {
        value: y,
        isSecondary: v
      } = R0(d), k = u[0].startsWith("FontAwesome");
      let b = wa(p, y), A = b;
      if (k) {
        const E = Wx(y);
        E.iconName && E.prefix && (b = E.iconName, p = E.prefix);
      }
      if (b && !v && (!o || o.getAttribute(ga) !== p || o.getAttribute(ya) !== A)) {
        e.setAttribute(n, A), o && e.removeChild(o);
        const E = v0(), {
          extra: N
        } = E;
        N.attributes[gi] = t, Si(b, p).then((S) => {
          const w = Ea(I(I({}, E), {}, {
            icons: {
              main: S,
              mask: Ku()
            },
            prefix: p,
            iconName: A,
            extra: N,
            watchable: !0
          })), M = ke.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(M, e.firstChild) : e.appendChild(M), M.outerHTML = w.map((Q) => Tn(Q)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function _0(e) {
  return Promise.all([fl(e, "::before"), fl(e, "::after")]);
}
function L0(e) {
  return e.parentNode !== document.head && !~bx.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(gi) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function dl(e) {
  if (yt)
    return new Promise((t, n) => {
      const r = Zt(e.querySelectorAll("*")).filter(L0).map(_0), i = Ca.begin("searchPseudoElements");
      ec(), Promise.all(r).then(() => {
        i(), Ai(), t();
      }).catch(() => {
        i(), Ai(), n();
      });
    });
}
var F0 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = dl, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ke
      } = t;
      V.searchPseudoElements && dl(n);
    };
  }
};
let pl = !1;
var D0 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ec(), pl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        ol(wi("mutationObserverCallbacks", {}));
      },
      noAuto() {
        g0();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        pl ? Ai() : ol(wi("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const hl = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return n.flipX = !0, n;
    if (a && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (a) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, t);
};
var M0 = {
  mixout() {
    return {
      parse: {
        transform: (e) => hl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = hl(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), s = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), c = {
        transform: "".concat(l, " ").concat(s, " ").concat(u)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: c,
        path: f
      };
      return {
        tag: "g",
        attributes: I({}, d.outer),
        children: [{
          tag: "g",
          attributes: I({}, d.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: I(I({}, n.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
};
const Xr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ml(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function z0(e) {
  return e.tag === "g" ? e.children : [e];
}
var B0 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? hr(n.split(" ").map((i) => i.trim())) : Ku();
        return r.prefix || (r.prefix = wt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: a,
        maskId: o,
        transform: l
      } = t;
      const {
        width: s,
        icon: u
      } = i, {
        width: c,
        icon: f
      } = a, d = Rx({
        transform: l,
        containerWidth: c,
        iconWidth: s
      }), p = {
        tag: "rect",
        attributes: I(I({}, Xr), {}, {
          fill: "white"
        })
      }, y = u.children ? {
        children: u.children.map(ml)
      } : {}, v = {
        tag: "g",
        attributes: I({}, d.inner),
        children: [ml(I({
          tag: u.tag,
          attributes: I(I({}, u.attributes), d.path)
        }, y))]
      }, k = {
        tag: "g",
        attributes: I({}, d.outer),
        children: [v]
      }, b = "mask-".concat(o || xn()), A = "clip-".concat(o || xn()), E = {
        tag: "mask",
        attributes: I(I({}, Xr), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, k]
      }, N = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: z0(f)
        }, E]
      };
      return n.push(N, {
        tag: "rect",
        attributes: I({
          fill: "currentColor",
          "clip-path": "url(#".concat(A, ")"),
          mask: "url(#".concat(b, ")")
        }, Xr)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, $0 = {
  provides(e) {
    let t = !1;
    kt.matchMedia && (t = kt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = I(I({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: I(I({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: I(I({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: I(I({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: I(I({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: I(I({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: I(I({}, a), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, U0 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, H0 = [Lx, T0, A0, O0, N0, F0, D0, M0, B0, $0, U0];
Zx(H0, {
  mixoutsTo: Ge
});
Ge.noAuto;
Ge.config;
Ge.library;
Ge.dom;
const Ni = Ge.parse;
Ge.findIconDefinition;
Ge.toHtml;
const W0 = Ge.icon;
Ge.layer;
Ge.text;
Ge.counter;
function gl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gl(Object(n), !0).forEach(function(r) {
      Wt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function Wt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function V0(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function q0(e, t) {
  if (e == null) return {};
  var n = V0(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ii(e) {
  return Y0(e) || G0(e) || K0(e) || X0();
}
function Y0(e) {
  if (Array.isArray(e)) return Pi(e);
}
function G0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function K0(e, t) {
  if (e) {
    if (typeof e == "string") return Pi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pi(e, t);
  }
}
function Pi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function X0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q0(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, a = e.bounce, o = e.shake, l = e.flash, s = e.spin, u = e.spinPulse, c = e.spinReverse, f = e.pulse, d = e.fixedWidth, p = e.inverse, y = e.border, v = e.listItem, k = e.flip, b = e.size, A = e.rotation, E = e.pull, N = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": a,
    "fa-shake": o,
    "fa-flash": l,
    "fa-spin": s,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": f,
    "fa-fw": d,
    "fa-inverse": p,
    "fa-border": y,
    "fa-li": v,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, Wt(t, "fa-".concat(b), typeof b < "u" && b !== null), Wt(t, "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), Wt(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), Wt(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(N).map(function(S) {
    return N[S] ? S : null;
  }).filter(function(S) {
    return S;
  });
}
function J0(e) {
  return e = e - 0, e === e;
}
function nc(e) {
  return J0(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Z0 = ["style"];
function eb(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function tb(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = nc(n.slice(0, r)), a = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[eb(i)] = a : t[i] = a, t;
  }, {});
}
function rc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(s) {
    return rc(e, s);
  }), i = Object.keys(t.attributes || {}).reduce(function(s, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        s.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        s.attrs.style = tb(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? s.attrs[u.toLowerCase()] = c : s.attrs[nc(u)] = c;
    }
    return s;
  }, {
    attrs: {}
  }), a = n.style, o = a === void 0 ? {} : a, l = q0(n, Z0);
  return i.attrs.style = rt(rt({}, i.attrs.style), o), e.apply(void 0, [t.tag, rt(rt({}, i.attrs), l)].concat(Ii(r)));
}
var ic = !1;
try {
  ic = process.env.NODE_ENV === "production";
} catch {
}
function nb() {
  if (!ic && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function yl(e) {
  if (e && Jn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ni.icon)
    return Ni.icon(e);
  if (e === null)
    return null;
  if (e && Jn(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Qr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Wt({}, e, t) : {};
}
var xl = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Zn = /* @__PURE__ */ Qe.forwardRef(function(e, t) {
  var n = rt(rt({}, xl), e), r = n.icon, i = n.mask, a = n.symbol, o = n.className, l = n.title, s = n.titleId, u = n.maskId, c = yl(r), f = Qr("classes", [].concat(Ii(Q0(n)), Ii((o || "").split(" ")))), d = Qr("transform", typeof n.transform == "string" ? Ni.transform(n.transform) : n.transform), p = Qr("mask", yl(i)), y = W0(c, rt(rt(rt(rt({}, f), d), p), {}, {
    symbol: a,
    title: l,
    titleId: s,
    maskId: u
  }));
  if (!y)
    return nb("Could not find icon", c), null;
  var v = y.abstract, k = {
    ref: t
  };
  return Object.keys(n).forEach(function(b) {
    xl.hasOwnProperty(b) || (k[b] = n[b]);
  }), rb(v[0], k);
});
Zn.displayName = "FontAwesomeIcon";
Zn.propTypes = {
  beat: j.bool,
  border: j.bool,
  beatFade: j.bool,
  bounce: j.bool,
  className: j.string,
  fade: j.bool,
  flash: j.bool,
  mask: j.oneOfType([j.object, j.array, j.string]),
  maskId: j.string,
  fixedWidth: j.bool,
  inverse: j.bool,
  flip: j.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: j.oneOfType([j.object, j.array, j.string]),
  listItem: j.bool,
  pull: j.oneOf(["right", "left"]),
  pulse: j.bool,
  rotation: j.oneOf([0, 90, 180, 270]),
  shake: j.bool,
  size: j.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: j.bool,
  spinPulse: j.bool,
  spinReverse: j.bool,
  symbol: j.oneOfType([j.bool, j.string]),
  title: j.string,
  titleId: j.string,
  transform: j.oneOfType([j.string, j.object]),
  swapOpacity: j.bool
};
var rb = rc.bind(null, Qe.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ib = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, ab = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, ob = (e) => typeof window > "u" ? e || {} : e || window.history, Sb = ({ router: e }) => {
  const [t, n] = Ze("light"), [r, i] = Ze(!1), [a, o] = Ze(""), l = ob(e);
  je(() => {
    if (typeof window < "u") {
      const c = localStorage.getItem("theme") || "light";
      n(c), i(!0);
    }
  }, []), je(() => {
    r && typeof window < "u" && (document.documentElement.setAttribute("data-theme", t), localStorage.setItem("theme", t));
  }, [t, r]);
  const s = () => {
    n((c) => c === "light" ? "dark" : "light");
  }, u = (c) => {
    c.preventDefault(), a.trim() && (l && typeof l.push == "function" ? l.push(`/search/${encodeURIComponent(a)}`) : typeof window < "u" && (window.location.href = `/search/${encodeURIComponent(a)}`));
  };
  return r ? /* @__PURE__ */ g.jsx(Rn, { expand: "lg", className: "footer-header-color", children: /* @__PURE__ */ g.jsxs($e, { fluid: !0, children: [
    /* @__PURE__ */ g.jsxs("div", { className: "dark-switch", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "checkbox",
          className: "checkbox",
          id: "checkbox",
          onChange: s,
          checked: t === "dark"
        }
      ),
      /* @__PURE__ */ g.jsxs("label", { htmlFor: "checkbox", className: "checkbox-label", children: [
        /* @__PURE__ */ g.jsx(Zn, { icon: ab, style: { marginRight: "10px" } }),
        /* @__PURE__ */ g.jsx(Zn, { icon: ib }),
        /* @__PURE__ */ g.jsx("span", { className: "ball" })
      ] })
    ] }),
    /* @__PURE__ */ g.jsx(Rn.Brand, { className: "navbar-brand bold", href: "/", children: "Abhi" }),
    /* @__PURE__ */ g.jsx(Rn.Toggle, { "aria-controls": "navbarScroll" }),
    /* @__PURE__ */ g.jsxs(Rn.Collapse, { id: "navbarScroll", children: [
      /* @__PURE__ */ g.jsxs(Dt, { className: "me-auto my-2 my-lg-0", style: { maxHeight: "150px" }, navbarScroll: !0, children: [
        /* @__PURE__ */ g.jsx(Dt.Link, { className: "nav-link bold-links", href: "/about", children: "About" }),
        /* @__PURE__ */ g.jsx(Dt.Link, { className: "nav-link bold-links", href: "/section/tech", children: "Tech" }),
        /* @__PURE__ */ g.jsx(Dt.Link, { className: "nav-link bold-links", href: "/section/project", children: "Project" }),
        /* @__PURE__ */ g.jsx(Dt.Link, { className: "nav-link bold-links", href: "/section/life", children: "Life" }),
        /* @__PURE__ */ g.jsx(Dt.Link, { className: "nav-link bold-links", href: "/contact", children: "Contact" })
      ] }),
      /* @__PURE__ */ g.jsxs(Ke, { className: "d-flex", onSubmit: u, children: [
        /* @__PURE__ */ g.jsx(
          Ke.Control,
          {
            type: "search",
            placeholder: "Search",
            className: "me-2 custom-border form-control custom-placeholder",
            "aria-label": "Search",
            value: a,
            onChange: (c) => o(c.target.value)
          }
        ),
        /* @__PURE__ */ g.jsx(Rt, { className: "button-custom-color", type: "submit", children: "Search" })
      ] })
    ] })
  ] }) }) : null;
}, Tb = ({ description: e }) => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(ye, { children: /* @__PURE__ */ g.jsx(
  "p",
  {
    className: "mb-2 mt-2 font-color-class bio-desc justify-content",
    dangerouslySetInnerHTML: { __html: e }
  }
) }) }) }), lb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20id='github'%3e%3cpath%20d='M7.999%200C3.582%200%200%203.596%200%208.032a8.031%208.031%200%200%200%205.472%207.621c.4.074.546-.174.546-.387%200-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057%201.225.828%201.225.828.714%201.227%201.873.873%202.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969%200-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125%200%200%20.672-.216%202.2.823a7.633%207.633%200%200%201%202.003-.27%207.65%207.65%200%200%201%202.003.271c1.527-1.039%202.198-.823%202.198-.823.436%201.106.162%201.922.08%202.125.513.562.822%201.279.822%202.156%200%203.085-1.87%203.764-3.652%203.963.287.248.543.738.543%201.487%200%201.074-.01%201.94-.01%202.203%200%20.215.144.465.55.386A8.032%208.032%200%200%200%2016%208.032C16%203.596%2012.418%200%207.999%200z'%3e%3c/path%3e%3c/svg%3e", sb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20enable-background='new%200%200%20100%20100'%20viewBox='0%200%20100%20100'%20id='linkedin'%3e%3cg%3e%3cpath%20fill='%230077b5'%20d='M90.479,2.513c-14.611-0.041-68.502,0.028-80.958,0C5.645,2.513,2.5,5.562,2.5,9.317v81.381%20c0,3.756,3.145,6.802,7.021,6.802h80.958c3.878,0,7.021-3.046,7.021-6.803V9.317C97.5,5.562,94.357,2.513,90.479,2.513z'%3e%3c/path%3e%3cpath%20fill='%23f1f1f1'%20d='M53.453%2082.005c0%200%200-23.878%200-23.879-.139-4.388%202.484-8.483%207.762-8.667%205.143%200%207.201%203.921%207.201%209.67v22.875h14.214V57.485c0-13.135-7.012-19.247-16.365-19.247-7.668%200-11.036%204.285-12.907%207.204l.095-6.2H39.239c.185%204.012-.001%2042.763-.001%2042.763L53.453%2082.005zM31.37%2063.461v-24.22H17.154v42.763h14.217C31.368%2077.514%2031.376%2067.888%2031.37%2063.461zM24.265%2033.404c4.956%200%208.042-3.284%208.042-7.387-.041-9.897-16.004-9.787-15.991-.001C16.305%2030.151%2019.476%2033.455%2024.265%2033.404z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e", ub = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'%20?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-10%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M128.07485,236.074667%20L128.07485,236.074667%20L175.17885,91.1043048%20L80.9708495,91.1043048%20L128.07485,236.074667%20L128.07485,236.074667%20Z'%20fill='%23E24329'%3e%3c/path%3e%3cpath%20d='M128.07485,236.074423%20L80.9708495,91.104061%20L14.9557638,91.104061%20L128.07485,236.074423%20L128.07485,236.074423%20Z'%20fill='%23FC6D26'%3e%3c/path%3e%3cpath%20d='M14.9558857,91.1044267%20L14.9558857,91.1044267%20L0.641828571,135.159589%20C-0.663771429,139.17757%200.766171429,143.57955%204.18438095,146.06275%20L128.074971,236.074789%20L14.9558857,91.1044267%20L14.9558857,91.1044267%20Z'%20fill='%23FCA326'%3e%3c/path%3e%3cpath%20d='M14.9558857,91.1045486%20L80.9709714,91.1045486%20L52.6000762,3.79026286%20C51.1408762,-0.703146667%2044.7847619,-0.701927619%2043.3255619,3.79026286%20L14.9558857,91.1045486%20L14.9558857,91.1045486%20Z'%20fill='%23E24329'%3e%3c/path%3e%3cpath%20d='M128.07485,236.074423%20L175.17885,91.104061%20L241.193935,91.104061%20L128.07485,236.074423%20L128.07485,236.074423%20Z'%20fill='%23FC6D26'%3e%3c/path%3e%3cpath%20d='M241.193935,91.1044267%20L241.193935,91.1044267%20L255.507992,135.159589%20C256.813592,139.17757%20255.38365,143.57955%20251.96544,146.06275%20L128.07485,236.074789%20L241.193935,91.1044267%20L241.193935,91.1044267%20Z'%20fill='%23FCA326'%3e%3c/path%3e%3cpath%20d='M241.193935,91.1045486%20L175.17885,91.1045486%20L203.549745,3.79026286%20C205.008945,-0.703146667%20211.365059,-0.701927619%20212.824259,3.79026286%20L241.193935,91.1045486%20L241.193935,91.1045486%20Z'%20fill='%23E24329'%3e%3c/path%3e%3c/g%3e%3c/svg%3e", cb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20id='kaggle'%3e%3cpath%20fill='%2335B5E2'%20d='M7.998%200h-2.4c-.233%200-.348.118-.348.352v23.295c0%20.235.115.352.348.352h2.401c.232%200%20.349-.117.349-.352v-5.11l1.427-1.374%205.115%206.59c.137.165.299.247.485.247h3.097c.162%200%20.255-.047.278-.141l-.07-.353-6.749-8.494%206.471-6.343c.121-.124.078-.493-.244-.493h-3.201c-.162%200-.324.083-.487.247l-6.123%206.273V.352C8.347.118%208.23%200%207.998%200z'%3e%3c/path%3e%3c/svg%3e", fb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20id='leetcode'%3e%3cpath%20fill='%23B3B1B0'%20d='M22%2014.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696%200-1.26.604-1.26%201.346s.563%201.346%201.26%201.346H20.74c.696.001%201.26-.603%201.26-1.346z'%3e%3c/path%3e%3cpath%20fill='%23E7A41F'%20d='m3.482%2018.187%204.313%204.361c.973.979%202.318%201.452%203.803%201.452%201.485%200%202.83-.512%203.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676%202.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863%200-.713.233-1.357.696-1.824l4.285-4.38c.463-.467%201.116-.645%201.822-.645s1.346.195%201.809.662l2.676%202.606c.51.515%201.354.497%201.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994%204.994%200%200%200-2.392-1.33l-.034-.007%202.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018%2010.1C2.509%2011.458%202%2012.813%202%2014.311c0%201.498.509%202.896%201.482%203.876z'%3e%3c/path%3e%3cpath%20fill='%23070706'%20d='M8.115%2022.814a2.109%202.109%200%200%201-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6%206%200%200%201%20.839-1.004L13.333.489c.625-.626%201.498-.652%202.079-.067.56.563.527%201.455-.078%202.066-.769.776-1.539%201.55-2.309%202.325-.041.122-.14.2-.225.287-.863.876-1.75%201.729-2.601%202.618-.111.116-.262.186-.372.305-1.423%201.423-2.863%202.83-4.266%204.272-1.135%201.167-1.097%202.938.068%204.127%201.308%201.336%202.639%202.65%203.961%203.974.067.067.136.132.204.198.468.303.474%201.25.183%201.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z'%3e%3c/path%3e%3c/svg%3e", Ab = ({
  github_link: e,
  linkedin_link: t,
  twitter_link: n,
  leetcode_link: r,
  gitlab_link: i,
  kaggle_link: a,
  medium_link: o
}) => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-3 text-center d-flex justify-content-center", children: /* @__PURE__ */ g.jsxs(ye, { className: "col-12 d-flex justify-content-center flex-wrap", children: [
  e && /* @__PURE__ */ g.jsx("a", { href: e, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: lb, className: "leetcode-icon hover-effect-github mx-2", width: "33", height: "33", alt: "GitHub" }) }),
  t && /* @__PURE__ */ g.jsx("a", { href: t, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: sb, className: "leetcode-icon hover-effect-linkedin mx-2", width: "33", height: "33", alt: "LinkedIn" }) }),
  n && /* @__PURE__ */ g.jsx("a", { href: n, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "#", className: "leetcode-icon hover-effect-twitter mx-2", width: "33", height: "33", alt: "Twitter" }) }),
  r && /* @__PURE__ */ g.jsx("a", { href: r, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: fb, className: "leetcode-icon hover-effect-leetcode mx-2", width: "33", height: "33", alt: "LeetCode" }) }),
  i && /* @__PURE__ */ g.jsx("a", { href: i, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: ub, className: "leetcode-icon hover-effect-gitlab mx-2", width: "33", height: "33", alt: "GitLab" }) }),
  a && /* @__PURE__ */ g.jsx("a", { href: a, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: cb, className: "leetcode-icon hover-effect-kaggle mx-2", width: "33", height: "33", alt: "Kaggle" }) }),
  o && /* @__PURE__ */ g.jsx("a", { href: o, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ g.jsx("img", { src: "#", className: "leetcode-icon hover-effect-medium mx-2", width: "33", height: "33", alt: "Medium" }) })
] }) }) }), Ob = () => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "mt-3" }) }), db = ({ card_para: e, img_src: t, card_url: n, card_title: r }) => /* @__PURE__ */ g.jsxs(Me, { className: "", children: [
  /* @__PURE__ */ g.jsx(Me.Img, { className: "card-img-container p-3", variant: "top", src: t }),
  /* @__PURE__ */ g.jsxs(Me.Body, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "font-color-class text-center card-title", children: /* @__PURE__ */ g.jsx(Me.Title, { children: r }) }),
    /* @__PURE__ */ g.jsx(Me.Text, { className: "card-text font-color-class justify-content", children: e }),
    /* @__PURE__ */ g.jsx("div", { className: "text-center", children: /* @__PURE__ */ g.jsx(Rt, { className: "button-custom-color", href: n, children: "Explore" }) })
  ] })
] }), Nb = ({ cardData: e }) => {
  const [t, n] = Ze(1), r = 9, i = Math.ceil(e.length / r), a = e.slice((t - 1) * r, t * r), o = (l) => {
    l >= 1 && l <= i && n(l);
  };
  return /* @__PURE__ */ g.jsxs($e, { className: "p-0", children: [
    /* @__PURE__ */ g.jsx(Te, { className: "", children: a.map((l, s) => /* @__PURE__ */ g.jsx(ye, { xs: 12, sm: 12, md: 4, className: "mt-3", children: /* @__PURE__ */ g.jsx(
      db,
      {
        card_title: l.card_title,
        card_para: l.card_para,
        img_src: l.img_src,
        card_url: l.card_url
      }
    ) }, s)) }),
    i > 1 && /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-3 justify-content-center m-0", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsxs(Mt, { size: "sm", className: "justify-content-center", children: [
      /* @__PURE__ */ g.jsx(Mt.First, { onClick: () => o(1), disabled: t === 1 }),
      /* @__PURE__ */ g.jsx(Mt.Prev, { onClick: () => o(t - 1), disabled: t === 1 }),
      [...Array(i)].map((l, s) => /* @__PURE__ */ g.jsx(
        Mt.Item,
        {
          active: s + 1 === t,
          onClick: () => o(s + 1),
          children: s + 1
        },
        s + 1
      )),
      /* @__PURE__ */ g.jsx(Mt.Next, { onClick: () => o(t + 1), disabled: t === i }),
      /* @__PURE__ */ g.jsx(Mt.Last, { onClick: () => o(i), disabled: t === i })
    ] }) }) })
  ] });
}, Ib = ({ image_link: e }) => /* @__PURE__ */ g.jsx($e, { className: "text-center", children: /* @__PURE__ */ g.jsxs(Te, { className: "text-center", children: [
  /* @__PURE__ */ g.jsx(ye, {}),
  /* @__PURE__ */ g.jsx(ye, { md: 6, children: /* @__PURE__ */ g.jsx("img", { src: e, className: "img-fluid mt-3 rounded-circle justify-content", alt: "ProfilePic" }) }),
  /* @__PURE__ */ g.jsx(ye, {})
] }) }), Pb = ({ button_text: e, link: t }) => /* @__PURE__ */ g.jsx($e, { children: /* @__PURE__ */ g.jsx(Te, { className: "rounded background-color-body mt-3 p-2", children: /* @__PURE__ */ g.jsx(ye, { className: "text-center", children: /* @__PURE__ */ g.jsx("a", { href: t, download: !0, children: /* @__PURE__ */ g.jsx(Rt, { className: "button-custom-color m-1", children: e }) }) }) }) });
export {
  Ib as AboutPic,
  yb as ArticleImage,
  Pb as ButtonBar,
  bb as CardLists,
  xb as CardTemp,
  Nb as CardsPaignation,
  vb as CustomBody,
  kb as Footer,
  wb as HeadingBar,
  Eb as MarkDown,
  Cb as More,
  Sb as NavBar,
  Tb as Para,
  Ab as SocialMediaLinks,
  Ob as SpaceBlock
};
