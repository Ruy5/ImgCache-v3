import { ref as ii, onMounted as oi, onUnmounted as ai, openBlock as ui, createElementBlock as si, normalizeStyle as ci } from "vue";
var mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function li(re) {
  return re && re.__esModule && Object.prototype.hasOwnProperty.call(re, "default") ? re.default : re;
}
var wr = { exports: {} };
(function(re, fn) {
  (function(pe, C) {
    re.exports = C();
  })(mr, function() {
    var pe = function(e, n) {
      return (pe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
        t.__proto__ = r;
      } || function(t, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      })(e, n);
    }, C = function() {
      return (C = Object.assign || function(e) {
        for (var n, t = 1, r = arguments.length; t < r; t++)
          for (var i in n = arguments[t])
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        return e;
      }).apply(this, arguments);
    };
    function Ie(e, n, t) {
      for (var r, i = 0, o = n.length; i < o; i++)
        !r && i in n || ((r = r || Array.prototype.slice.call(n, 0, i))[i] = n[i]);
      return e.concat(r || Array.prototype.slice.call(n));
    }
    var U = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : mr, V = Object.keys, F = Array.isArray;
    function H(e, n) {
      return typeof n != "object" || V(n).forEach(function(t) {
        e[t] = n[t];
      }), e;
    }
    typeof Promise > "u" || U.Promise || (U.Promise = Promise);
    var oe = Object.getPrototypeOf, hn = {}.hasOwnProperty;
    function Z(e, n) {
      return hn.call(e, n);
    }
    function qe(e, n) {
      typeof n == "function" && (n = n(oe(e))), (typeof Reflect > "u" ? V : Reflect.ownKeys)(n).forEach(function(t) {
        ye(e, t, n[t]);
      });
    }
    var At = Object.defineProperty;
    function ye(e, n, t, r) {
      At(e, n, H(t && Z(t, "get") && typeof t.get == "function" ? { get: t.get, set: t.set, configurable: !0 } : { value: t, configurable: !0, writable: !0 }, r));
    }
    function Be(e) {
      return { from: function(n) {
        return e.prototype = Object.create(n.prototype), ye(e.prototype, "constructor", e), { extend: qe.bind(null, e.prototype) };
      } };
    }
    var _r = Object.getOwnPropertyDescriptor, xr = [].slice;
    function dn(e, n, t) {
      return xr.call(e, n, t);
    }
    function Dt(e, n) {
      return n(e);
    }
    function Ye(e) {
      if (!e)
        throw new Error("Assertion Failed");
    }
    function Tt(e) {
      U.setImmediate ? setImmediate(e) : setTimeout(e, 0);
    }
    function ce(e, n) {
      if (typeof n == "string" && Z(e, n))
        return e[n];
      if (!n)
        return e;
      if (typeof n != "string") {
        for (var t = [], r = 0, i = n.length; r < i; ++r) {
          var o = ce(e, n[r]);
          t.push(o);
        }
        return t;
      }
      var a = n.indexOf(".");
      if (a !== -1) {
        var u = e[n.substr(0, a)];
        return u == null ? void 0 : ce(u, n.substr(a + 1));
      }
    }
    function ee(e, n, t) {
      if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e)))
        if (typeof n != "string" && "length" in n) {
          Ye(typeof t != "string" && "length" in t);
          for (var r = 0, i = n.length; r < i; ++r)
            ee(e, n[r], t[r]);
        } else {
          var o, a, u = n.indexOf(".");
          u !== -1 ? (o = n.substr(0, u), (a = n.substr(u + 1)) === "" ? t === void 0 ? F(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = t : ee(u = !(u = e[o]) || !Z(e, o) ? e[o] = {} : u, a, t)) : t === void 0 ? F(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = t;
        }
    }
    function It(e) {
      var n, t = {};
      for (n in e)
        Z(e, n) && (t[n] = e[n]);
      return t;
    }
    var kr = [].concat;
    function qt(e) {
      return kr.apply([], e);
    }
    var he = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(qt([8, 16, 32, 64].map(function(e) {
      return ["Int", "Uint", "Float"].map(function(n) {
        return n + e + "Array";
      });
    }))).filter(function(e) {
      return U[e];
    }), Bt = new Set(he.map(function(e) {
      return U[e];
    })), Ge = null;
    function ve(e) {
      return Ge = /* @__PURE__ */ new WeakMap(), e = function n(t) {
        if (!t || typeof t != "object")
          return t;
        var r = Ge.get(t);
        if (r)
          return r;
        if (F(t)) {
          r = [], Ge.set(t, r);
          for (var i = 0, o = t.length; i < o; ++i)
            r.push(n(t[i]));
        } else if (Bt.has(t.constructor))
          r = t;
        else {
          var a, u = oe(t);
          for (a in r = u === Object.prototype ? {} : Object.create(u), Ge.set(t, r), t)
            Z(t, a) && (r[a] = n(t[a]));
        }
        return r;
      }(e), Ge = null, e;
    }
    var Or = {}.toString;
    function Un(e) {
      return Or.call(e).slice(8, -1);
    }
    var Vn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Pr = typeof Vn == "symbol" ? function(e) {
      var n;
      return e != null && (n = e[Vn]) && n.apply(e);
    } : function() {
      return null;
    };
    function Oe(e, n) {
      return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
    }
    var Re = {};
    function le(e) {
      var n, t, r, i;
      if (arguments.length === 1) {
        if (F(e))
          return e.slice();
        if (this === Re && typeof e == "string")
          return [e];
        if (i = Pr(e)) {
          for (t = []; !(r = i.next()).done; )
            t.push(r.value);
          return t;
        }
        if (e == null)
          return [e];
        if (typeof (n = e.length) != "number")
          return [e];
        for (t = new Array(n); n--; )
          t[n] = e[n];
        return t;
      }
      for (n = arguments.length, t = new Array(n); n--; )
        t[n] = arguments[n];
      return t;
    }
    var zn = typeof Symbol < "u" ? function(e) {
      return e[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, He = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], te = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(He), Er = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function Fe(e, n) {
      this.name = e, this.message = n;
    }
    function Rt(e, n) {
      return e + ". Errors: " + Object.keys(n).map(function(t) {
        return n[t].toString();
      }).filter(function(t, r, i) {
        return i.indexOf(t) === r;
      }).join(`
`);
    }
    function pn(e, n, t, r) {
      this.failures = n, this.failedKeys = r, this.successCount = t, this.message = Rt(e, n);
    }
    function Me(e, n) {
      this.name = "BulkError", this.failures = Object.keys(n).map(function(t) {
        return n[t];
      }), this.failuresByPos = n, this.message = Rt(e, this.failures);
    }
    Be(Fe).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), Be(pn).from(Fe), Be(Me).from(Fe);
    var Wn = te.reduce(function(e, n) {
      return e[n] = n + "Error", e;
    }, {}), Sr = Fe, j = te.reduce(function(e, n) {
      var t = n + "Error";
      function r(i, o) {
        this.name = t, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Er[n] || t, this.inner = null);
      }
      return Be(r).from(Sr), e[n] = r, e;
    }, {});
    j.Syntax = SyntaxError, j.Type = TypeError, j.Range = RangeError;
    var Ft = He.reduce(function(e, n) {
      return e[n + "Error"] = j[n], e;
    }, {}), yn = te.reduce(function(e, n) {
      return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = j[n]), e;
    }, {});
    function M() {
    }
    function Qe(e) {
      return e;
    }
    function Kr(e, n) {
      return e == null || e === Qe ? n : function(t) {
        return n(e(t));
      };
    }
    function Pe(e, n) {
      return function() {
        e.apply(this, arguments), n.apply(this, arguments);
      };
    }
    function jr(e, n) {
      return e === M ? n : function() {
        var t = e.apply(this, arguments);
        t !== void 0 && (arguments[0] = t);
        var r = this.onsuccess, i = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var o = n.apply(this, arguments);
        return r && (this.onsuccess = this.onsuccess ? Pe(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Pe(i, this.onerror) : i), o !== void 0 ? o : t;
      };
    }
    function Cr(e, n) {
      return e === M ? n : function() {
        e.apply(this, arguments);
        var t = this.onsuccess, r = this.onerror;
        this.onsuccess = this.onerror = null, n.apply(this, arguments), t && (this.onsuccess = this.onsuccess ? Pe(t, this.onsuccess) : t), r && (this.onerror = this.onerror ? Pe(r, this.onerror) : r);
      };
    }
    function Ar(e, n) {
      return e === M ? n : function(t) {
        var r = e.apply(this, arguments);
        H(t, r);
        var i = this.onsuccess, o = this.onerror;
        return this.onsuccess = null, this.onerror = null, t = n.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Pe(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Pe(o, this.onerror) : o), r === void 0 ? t === void 0 ? void 0 : t : H(r, t);
      };
    }
    function Dr(e, n) {
      return e === M ? n : function() {
        return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
      };
    }
    function $n(e, n) {
      return e === M ? n : function() {
        var t = e.apply(this, arguments);
        if (t && typeof t.then == "function") {
          for (var r = this, i = arguments.length, o = new Array(i); i--; )
            o[i] = arguments[i];
          return t.then(function() {
            return n.apply(r, o);
          });
        }
        return n.apply(this, arguments);
      };
    }
    yn.ModifyError = pn, yn.DexieError = Fe, yn.BulkError = Me;
    var ae = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function Mt(e) {
      ae = e;
    }
    var Xe = {}, Nt = 100, he = typeof Promise > "u" ? [] : function() {
      var e = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle)
        return [e, oe(e), e];
      var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [n, oe(n), e];
    }(), He = he[0], te = he[1], he = he[2], te = te && te.then, Je = He && He.constructor, Yn = !!he, Ze = function(e, n) {
      en.push([e, n]), vn && (queueMicrotask(Ir), vn = !1);
    }, Gn = !0, vn = !0, Ee = [], mn = [], Qn = Qe, me = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: M, pgp: !1, env: {}, finalize: M }, K = me, en = [], Se = 0, gn = [];
    function S(e) {
      if (typeof this != "object")
        throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var n = this._PSD = K;
      if (typeof e != "function") {
        if (e !== Xe)
          throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Hn(this, this._value));
      }
      this._state = null, this._value = null, ++n.ref, function t(r, i) {
        try {
          i(function(o) {
            if (r._state === null) {
              if (o === r)
                throw new TypeError("A promise cannot be resolved with itself.");
              var a = r._lib && Ne();
              o && typeof o.then == "function" ? t(r, function(u, f) {
                o instanceof S ? o._then(u, f) : o.then(u, f);
              }) : (r._state = !0, r._value = o, Ut(r)), a && Le();
            }
          }, Hn.bind(null, r));
        } catch (o) {
          Hn(r, o);
        }
      }(this, e);
    }
    var Xn = { get: function() {
      var e = K, n = xn;
      function t(r, i) {
        var o = this, a = !e.global && (e !== K || n !== xn), u = a && !be(), f = new S(function(c, p) {
          Jn(o, new Lt(zt(r, e, a, u), zt(i, e, a, u), c, p, e));
        });
        return this._consoleTask && (f._consoleTask = this._consoleTask), f;
      }
      return t.prototype = Xe, t;
    }, set: function(e) {
      ye(this, "then", e && e.prototype === Xe ? Xn : { get: function() {
        return e;
      }, set: Xn.set });
    } };
    function Lt(e, n, t, r, i) {
      this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = t, this.reject = r, this.psd = i;
    }
    function Hn(e, n) {
      var t, r;
      mn.push(n), e._state === null && (t = e._lib && Ne(), n = Qn(n), e._state = !1, e._value = n, r = e, Ee.some(function(i) {
        return i._value === r._value;
      }) || Ee.push(r), Ut(e), t && Le());
    }
    function Ut(e) {
      var n = e._listeners;
      e._listeners = [];
      for (var t = 0, r = n.length; t < r; ++t)
        Jn(e, n[t]);
      var i = e._PSD;
      --i.ref || i.finalize(), Se === 0 && (++Se, Ze(function() {
        --Se == 0 && Zn();
      }, []));
    }
    function Jn(e, n) {
      if (e._state !== null) {
        var t = e._state ? n.onFulfilled : n.onRejected;
        if (t === null)
          return (e._state ? n.resolve : n.reject)(e._value);
        ++n.psd.ref, ++Se, Ze(Tr, [t, e, n]);
      } else
        e._listeners.push(n);
    }
    function Tr(e, n, t) {
      try {
        var r, i = n._value;
        !n._state && mn.length && (mn = []), r = ae && n._consoleTask ? n._consoleTask.run(function() {
          return e(i);
        }) : e(i), n._state || mn.indexOf(i) !== -1 || function(o) {
          for (var a = Ee.length; a; )
            if (Ee[--a]._value === o._value)
              return Ee.splice(a, 1);
        }(n), t.resolve(r);
      } catch (o) {
        t.reject(o);
      } finally {
        --Se == 0 && Zn(), --t.psd.ref || t.psd.finalize();
      }
    }
    function Ir() {
      Ke(me, function() {
        Ne() && Le();
      });
    }
    function Ne() {
      var e = Gn;
      return vn = Gn = !1, e;
    }
    function Le() {
      var e, n, t;
      do
        for (; 0 < en.length; )
          for (e = en, en = [], t = e.length, n = 0; n < t; ++n) {
            var r = e[n];
            r[0].apply(null, r[1]);
          }
      while (0 < en.length);
      vn = Gn = !0;
    }
    function Zn() {
      var e = Ee;
      Ee = [], e.forEach(function(r) {
        r._PSD.onunhandled.call(null, r._value, r);
      });
      for (var n = gn.slice(0), t = n.length; t; )
        n[--t]();
    }
    function bn(e) {
      return new S(Xe, !1, e);
    }
    function L(e, n) {
      var t = K;
      return function() {
        var r = Ne(), i = K;
        try {
          return we(t, !0), e.apply(this, arguments);
        } catch (o) {
          n && n(o);
        } finally {
          we(i, !1), r && Le();
        }
      };
    }
    qe(S.prototype, { then: Xn, _then: function(e, n) {
      Jn(this, new Lt(null, null, e, n, K));
    }, catch: function(e) {
      if (arguments.length === 1)
        return this.then(null, e);
      var n = e, t = arguments[1];
      return typeof n == "function" ? this.then(null, function(r) {
        return (r instanceof n ? t : bn)(r);
      }) : this.then(null, function(r) {
        return (r && r.name === n ? t : bn)(r);
      });
    }, finally: function(e) {
      return this.then(function(n) {
        return S.resolve(e()).then(function() {
          return n;
        });
      }, function(n) {
        return S.resolve(e()).then(function() {
          return bn(n);
        });
      });
    }, timeout: function(e, n) {
      var t = this;
      return e < 1 / 0 ? new S(function(r, i) {
        var o = setTimeout(function() {
          return i(new j.Timeout(n));
        }, e);
        t.then(r, i).finally(clearTimeout.bind(null, o));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && ye(S.prototype, Symbol.toStringTag, "Dexie.Promise"), me.env = Vt(), qe(S, { all: function() {
      var e = le.apply(null, arguments).map(kn);
      return new S(function(n, t) {
        e.length === 0 && n([]);
        var r = e.length;
        e.forEach(function(i, o) {
          return S.resolve(i).then(function(a) {
            e[o] = a, --r || n(e);
          }, t);
        });
      });
    }, resolve: function(e) {
      return e instanceof S ? e : e && typeof e.then == "function" ? new S(function(n, t) {
        e.then(n, t);
      }) : new S(Xe, !0, e);
    }, reject: bn, race: function() {
      var e = le.apply(null, arguments).map(kn);
      return new S(function(n, t) {
        e.map(function(r) {
          return S.resolve(r).then(n, t);
        });
      });
    }, PSD: { get: function() {
      return K;
    }, set: function(e) {
      return K = e;
    } }, totalEchoes: { get: function() {
      return xn;
    } }, newPSD: ge, usePSD: Ke, scheduler: { get: function() {
      return Ze;
    }, set: function(e) {
      Ze = e;
    } }, rejectionMapper: { get: function() {
      return Qn;
    }, set: function(e) {
      Qn = e;
    } }, follow: function(e, n) {
      return new S(function(t, r) {
        return ge(function(i, o) {
          var a = K;
          a.unhandleds = [], a.onunhandled = o, a.finalize = Pe(function() {
            var u, f = this;
            u = function() {
              f.unhandleds.length === 0 ? i() : o(f.unhandleds[0]);
            }, gn.push(function c() {
              u(), gn.splice(gn.indexOf(c), 1);
            }), ++Se, Ze(function() {
              --Se == 0 && Zn();
            }, []);
          }, a.finalize), e();
        }, n, t, r);
      });
    } }), Je && (Je.allSettled && ye(S, "allSettled", function() {
      var e = le.apply(null, arguments).map(kn);
      return new S(function(n) {
        e.length === 0 && n([]);
        var t = e.length, r = new Array(t);
        e.forEach(function(i, o) {
          return S.resolve(i).then(function(a) {
            return r[o] = { status: "fulfilled", value: a };
          }, function(a) {
            return r[o] = { status: "rejected", reason: a };
          }).then(function() {
            return --t || n(r);
          });
        });
      });
    }), Je.any && typeof AggregateError < "u" && ye(S, "any", function() {
      var e = le.apply(null, arguments).map(kn);
      return new S(function(n, t) {
        e.length === 0 && t(new AggregateError([]));
        var r = e.length, i = new Array(r);
        e.forEach(function(o, a) {
          return S.resolve(o).then(function(u) {
            return n(u);
          }, function(u) {
            i[a] = u, --r || t(new AggregateError(i));
          });
        });
      });
    }));
    var $ = { awaits: 0, echoes: 0, id: 0 }, qr = 0, wn = [], _n = 0, xn = 0, Br = 0;
    function ge(e, n, t, r) {
      var i = K, o = Object.create(i);
      return o.parent = i, o.ref = 0, o.global = !1, o.id = ++Br, me.env, o.env = Yn ? { Promise: S, PromiseProp: { value: S, configurable: !0, writable: !0 }, all: S.all, race: S.race, allSettled: S.allSettled, any: S.any, resolve: S.resolve, reject: S.reject } : {}, n && H(o, n), ++i.ref, o.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, r = Ke(o, e, t, r), o.ref === 0 && o.finalize(), r;
    }
    function Ue() {
      return $.id || ($.id = ++qr), ++$.awaits, $.echoes += Nt, $.id;
    }
    function be() {
      return !!$.awaits && (--$.awaits == 0 && ($.id = 0), $.echoes = $.awaits * Nt, !0);
    }
    function kn(e) {
      return $.echoes && e && e.constructor === Je ? (Ue(), e.then(function(n) {
        return be(), n;
      }, function(n) {
        return be(), z(n);
      })) : e;
    }
    function Rr() {
      var e = wn[wn.length - 1];
      wn.pop(), we(e, !1);
    }
    function we(e, n) {
      var t, r = K;
      (n ? !$.echoes || _n++ && e === K : !_n || --_n && e === K) || queueMicrotask(n ? (function(i) {
        ++xn, $.echoes && --$.echoes != 0 || ($.echoes = $.awaits = $.id = 0), wn.push(K), we(i, !0);
      }).bind(null, e) : Rr), e !== K && (K = e, r === me && (me.env = Vt()), Yn && (t = me.env.Promise, n = e.env, (r.global || e.global) && (Object.defineProperty(U, "Promise", n.PromiseProp), t.all = n.all, t.race = n.race, t.resolve = n.resolve, t.reject = n.reject, n.allSettled && (t.allSettled = n.allSettled), n.any && (t.any = n.any))));
    }
    function Vt() {
      var e = U.Promise;
      return Yn ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(U, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
    }
    function Ke(e, n, t, r, i) {
      var o = K;
      try {
        return we(e, !0), n(t, r, i);
      } finally {
        we(o, !1);
      }
    }
    function zt(e, n, t, r) {
      return typeof e != "function" ? e : function() {
        var i = K;
        t && Ue(), we(n, !0);
        try {
          return e.apply(this, arguments);
        } finally {
          we(i, !1), r && queueMicrotask(be);
        }
      };
    }
    function et(e) {
      Promise === Je && $.echoes === 0 ? _n === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
    }
    ("" + te).indexOf("[native code]") === -1 && (Ue = be = M);
    var z = S.reject, je = "￿", fe = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Wt = "String expected.", Ve = [], On = "__dbnames", nt = "readonly", tt = "readwrite";
    function Ce(e, n) {
      return e ? n ? function() {
        return e.apply(this, arguments) && n.apply(this, arguments);
      } : e : n;
    }
    var $t = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function Pn(e) {
      return typeof e != "string" || /\./.test(e) ? function(n) {
        return n;
      } : function(n) {
        return n[e] === void 0 && e in n && delete (n = ve(n))[e], n;
      };
    }
    function Yt() {
      throw j.Type();
    }
    function R(e, n) {
      try {
        var t = Gt(e), r = Gt(n);
        if (t !== r)
          return t === "Array" ? 1 : r === "Array" ? -1 : t === "binary" ? 1 : r === "binary" ? -1 : t === "string" ? 1 : r === "string" ? -1 : t === "Date" ? 1 : r !== "Date" ? NaN : -1;
        switch (t) {
          case "number":
          case "Date":
          case "string":
            return n < e ? 1 : e < n ? -1 : 0;
          case "binary":
            return function(i, o) {
              for (var a = i.length, u = o.length, f = a < u ? a : u, c = 0; c < f; ++c)
                if (i[c] !== o[c])
                  return i[c] < o[c] ? -1 : 1;
              return a === u ? 0 : a < u ? -1 : 1;
            }(Qt(e), Qt(n));
          case "Array":
            return function(i, o) {
              for (var a = i.length, u = o.length, f = a < u ? a : u, c = 0; c < f; ++c) {
                var p = R(i[c], o[c]);
                if (p !== 0)
                  return p;
              }
              return a === u ? 0 : a < u ? -1 : 1;
            }(e, n);
        }
      } catch {
      }
      return NaN;
    }
    function Gt(e) {
      var n = typeof e;
      return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Un(e), e === "ArrayBuffer" ? "binary" : e);
    }
    function Qt(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
    }
    var Xt = (N.prototype._trans = function(e, n, t) {
      var r = this._tx || K.trans, i = this.name, o = ae && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
      function a(c, p, s) {
        if (!s.schema[i])
          throw new j.NotFound("Table " + i + " not part of transaction");
        return n(s.idbtrans, s);
      }
      var u = Ne();
      try {
        var f = r && r.db._novip === this.db._novip ? r === K.trans ? r._promise(e, a, t) : ge(function() {
          return r._promise(e, a, t);
        }, { trans: r, transless: K.transless || K }) : function c(p, s, y, l) {
          if (p.idbdb && (p._state.openComplete || K.letThrough || p._vip)) {
            var d = p._createTransaction(s, y, p._dbSchema);
            try {
              d.create(), p._state.PR1398_maxLoop = 3;
            } catch (v) {
              return v.name === Wn.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return c(p, s, y, l);
              })) : z(v);
            }
            return d._promise(s, function(v, h) {
              return ge(function() {
                return K.trans = d, l(v, h, d);
              });
            }).then(function(v) {
              if (s === "readwrite")
                try {
                  d.idbtrans.commit();
                } catch {
                }
              return s === "readonly" ? v : d._completion.then(function() {
                return v;
              });
            });
          }
          if (p._state.openComplete)
            return z(new j.DatabaseClosed(p._state.dbOpenError));
          if (!p._state.isBeingOpened) {
            if (!p._state.autoOpen)
              return z(new j.DatabaseClosed());
            p.open().catch(M);
          }
          return p._state.dbReadyPromise.then(function() {
            return c(p, s, y, l);
          });
        }(this.db, e, [this.name], a);
        return o && (f._consoleTask = o, f = f.catch(function(c) {
          return console.trace(c), z(c);
        })), f;
      } finally {
        u && Le();
      }
    }, N.prototype.get = function(e, n) {
      var t = this;
      return e && e.constructor === Object ? this.where(e).first(n) : e == null ? z(new j.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
        return t.core.get({ trans: r, key: e }).then(function(i) {
          return t.hook.reading.fire(i);
        });
      }).then(n);
    }, N.prototype.where = function(e) {
      if (typeof e == "string")
        return new this.db.WhereClause(this, e);
      if (F(e))
        return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
      var n = V(e);
      if (n.length === 1)
        return this.where(n[0]).equals(e[n[0]]);
      var t = this.schema.indexes.concat(this.schema.primKey).filter(function(f) {
        if (f.compound && n.every(function(p) {
          return 0 <= f.keyPath.indexOf(p);
        })) {
          for (var c = 0; c < n.length; ++c)
            if (n.indexOf(f.keyPath[c]) === -1)
              return !1;
          return !0;
        }
        return !1;
      }).sort(function(f, c) {
        return f.keyPath.length - c.keyPath.length;
      })[0];
      if (t && this.db._maxKey !== je) {
        var a = t.keyPath.slice(0, n.length);
        return this.where(a).equals(a.map(function(c) {
          return e[c];
        }));
      }
      !t && ae && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
      var r = this.schema.idxByName, i = this.db._deps.indexedDB;
      function o(f, c) {
        return i.cmp(f, c) === 0;
      }
      var u = n.reduce(function(y, c) {
        var p = y[0], s = y[1], y = r[c], l = e[c];
        return [p || y, p || !y ? Ce(s, y && y.multi ? function(d) {
          return d = ce(d, c), F(d) && d.some(function(v) {
            return o(l, v);
          });
        } : function(d) {
          return o(l, ce(d, c));
        }) : s];
      }, [null, null]), a = u[0], u = u[1];
      return a ? this.where(a.name).equals(e[a.keyPath]).filter(u) : t ? this.filter(u) : this.where(n).equals("");
    }, N.prototype.filter = function(e) {
      return this.toCollection().and(e);
    }, N.prototype.count = function(e) {
      return this.toCollection().count(e);
    }, N.prototype.offset = function(e) {
      return this.toCollection().offset(e);
    }, N.prototype.limit = function(e) {
      return this.toCollection().limit(e);
    }, N.prototype.each = function(e) {
      return this.toCollection().each(e);
    }, N.prototype.toArray = function(e) {
      return this.toCollection().toArray(e);
    }, N.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, N.prototype.orderBy = function(e) {
      return new this.db.Collection(new this.db.WhereClause(this, F(e) ? "[".concat(e.join("+"), "]") : e));
    }, N.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, N.prototype.mapToClass = function(e) {
      var n, t = this.db, r = this.name;
      function i() {
        return n !== null && n.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = e).prototype instanceof Yt && (function(f, c) {
        if (typeof c != "function" && c !== null)
          throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
        function p() {
          this.constructor = f;
        }
        pe(f, c), f.prototype = c === null ? Object.create(c) : (p.prototype = c.prototype, new p());
      }(i, n = e), Object.defineProperty(i.prototype, "db", { get: function() {
        return t;
      }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
        return r;
      }, e = i);
      for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = oe(a))
        Object.getOwnPropertyNames(a).forEach(function(f) {
          return o.add(f);
        });
      function u(f) {
        if (!f)
          return f;
        var c, p = Object.create(e.prototype);
        for (c in f)
          if (!o.has(c))
            try {
              p[c] = f[c];
            } catch {
            }
        return p;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
    }, N.prototype.defineClass = function() {
      return this.mapToClass(function(e) {
        H(this, e);
      });
    }, N.prototype.add = function(e, n) {
      var t = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = Pn(o)(e)), this._trans("readwrite", function(u) {
        return t.core.mutate({ trans: u, type: "add", keys: n != null ? [n] : null, values: [a] });
      }).then(function(u) {
        return u.numFailures ? S.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o)
          try {
            ee(e, o, u);
          } catch {
          }
        return u;
      });
    }, N.prototype.update = function(e, n) {
      return typeof e != "object" || F(e) ? this.where(":id").equals(e).modify(n) : (e = ce(e, this.schema.primKey.keyPath), e === void 0 ? z(new j.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
    }, N.prototype.put = function(e, n) {
      var t = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = Pn(o)(e)), this._trans("readwrite", function(u) {
        return t.core.mutate({ trans: u, type: "put", values: [a], keys: n != null ? [n] : null });
      }).then(function(u) {
        return u.numFailures ? S.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o)
          try {
            ee(e, o, u);
          } catch {
          }
        return u;
      });
    }, N.prototype.delete = function(e) {
      var n = this;
      return this._trans("readwrite", function(t) {
        return n.core.mutate({ trans: t, type: "delete", keys: [e] });
      }).then(function(t) {
        return t.numFailures ? S.reject(t.failures[0]) : void 0;
      });
    }, N.prototype.clear = function() {
      var e = this;
      return this._trans("readwrite", function(n) {
        return e.core.mutate({ trans: n, type: "deleteRange", range: $t });
      }).then(function(n) {
        return n.numFailures ? S.reject(n.failures[0]) : void 0;
      });
    }, N.prototype.bulkGet = function(e) {
      var n = this;
      return this._trans("readonly", function(t) {
        return n.core.getMany({ keys: e, trans: t }).then(function(r) {
          return r.map(function(i) {
            return n.hook.reading.fire(i);
          });
        });
      });
    }, N.prototype.bulkAdd = function(e, n, t) {
      var r = this, i = Array.isArray(n) ? n : void 0, o = (t = t || (i ? void 0 : n)) ? t.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var c = r.schema.primKey, u = c.auto, c = c.keyPath;
        if (c && i)
          throw new j.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length)
          throw new j.InvalidArgument("Arguments objects and keys must have the same length");
        var f = e.length, c = c && u ? e.map(Pn(c)) : e;
        return r.core.mutate({ trans: a, type: "add", keys: i, values: c, wantResults: o }).then(function(d) {
          var s = d.numFailures, y = d.results, l = d.lastResult, d = d.failures;
          if (s === 0)
            return o ? y : l;
          throw new Me("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(f, " operations failed"), d);
        });
      });
    }, N.prototype.bulkPut = function(e, n, t) {
      var r = this, i = Array.isArray(n) ? n : void 0, o = (t = t || (i ? void 0 : n)) ? t.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var c = r.schema.primKey, u = c.auto, c = c.keyPath;
        if (c && i)
          throw new j.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length)
          throw new j.InvalidArgument("Arguments objects and keys must have the same length");
        var f = e.length, c = c && u ? e.map(Pn(c)) : e;
        return r.core.mutate({ trans: a, type: "put", keys: i, values: c, wantResults: o }).then(function(d) {
          var s = d.numFailures, y = d.results, l = d.lastResult, d = d.failures;
          if (s === 0)
            return o ? y : l;
          throw new Me("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(f, " operations failed"), d);
        });
      });
    }, N.prototype.bulkUpdate = function(e) {
      var n = this, t = this.core, r = e.map(function(a) {
        return a.key;
      }), i = e.map(function(a) {
        return a.changes;
      }), o = [];
      return this._trans("readwrite", function(a) {
        return t.getMany({ trans: a, keys: r, cache: "clone" }).then(function(u) {
          var f = [], c = [];
          e.forEach(function(s, y) {
            var l = s.key, d = s.changes, v = u[y];
            if (v) {
              for (var h = 0, m = Object.keys(d); h < m.length; h++) {
                var g = m[h], b = d[g];
                if (g === n.schema.primKey.keyPath) {
                  if (R(b, l) !== 0)
                    throw new j.Constraint("Cannot update primary key in bulkUpdate()");
                } else
                  ee(v, g, b);
              }
              o.push(y), f.push(l), c.push(v);
            }
          });
          var p = f.length;
          return t.mutate({ trans: a, type: "put", keys: f, values: c, updates: { keys: r, changeSpecs: i } }).then(function(s) {
            var y = s.numFailures, l = s.failures;
            if (y === 0)
              return p;
            for (var d = 0, v = Object.keys(l); d < v.length; d++) {
              var h, m = v[d], g = o[Number(m)];
              g != null && (h = l[m], delete l[m], l[g] = h);
            }
            throw new Me("".concat(n.name, ".bulkUpdate(): ").concat(y, " of ").concat(p, " operations failed"), l);
          });
        });
      });
    }, N.prototype.bulkDelete = function(e) {
      var n = this, t = e.length;
      return this._trans("readwrite", function(r) {
        return n.core.mutate({ trans: r, type: "delete", keys: e });
      }).then(function(a) {
        var i = a.numFailures, o = a.lastResult, a = a.failures;
        if (i === 0)
          return o;
        throw new Me("".concat(n.name, ".bulkDelete(): ").concat(i, " of ").concat(t, " operations failed"), a);
      });
    }, N);
    function N() {
    }
    function nn(e) {
      function n(a, u) {
        if (u) {
          for (var f = arguments.length, c = new Array(f - 1); --f; )
            c[f - 1] = arguments[f];
          return t[a].subscribe.apply(null, c), e;
        }
        if (typeof a == "string")
          return t[a];
      }
      var t = {};
      n.addEventType = o;
      for (var r = 1, i = arguments.length; r < i; ++r)
        o(arguments[r]);
      return n;
      function o(a, u, f) {
        if (typeof a != "object") {
          var c;
          u = u || Dr;
          var p = { subscribers: [], fire: f = f || M, subscribe: function(s) {
            p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
          }, unsubscribe: function(s) {
            p.subscribers = p.subscribers.filter(function(y) {
              return y !== s;
            }), p.fire = p.subscribers.reduce(u, f);
          } };
          return t[a] = n[a] = p;
        }
        V(c = a).forEach(function(s) {
          var y = c[s];
          if (F(y))
            o(s, c[s][0], c[s][1]);
          else {
            if (y !== "asap")
              throw new j.InvalidArgument("Invalid event config");
            var l = o(s, Qe, function() {
              for (var d = arguments.length, v = new Array(d); d--; )
                v[d] = arguments[d];
              l.subscribers.forEach(function(h) {
                Tt(function() {
                  h.apply(null, v);
                });
              });
            });
          }
        });
      }
    }
    function tn(e, n) {
      return Be(n).from({ prototype: e }), n;
    }
    function ze(e, n) {
      return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
    }
    function rt(e, n) {
      e.filter = Ce(e.filter, n);
    }
    function it(e, n, t) {
      var r = e.replayFilter;
      e.replayFilter = r ? function() {
        return Ce(r(), n());
      } : n, e.justLimit = t && !r;
    }
    function En(e, n) {
      if (e.isPrimKey)
        return n.primaryKey;
      var t = n.getIndexByKeyPath(e.index);
      if (!t)
        throw new j.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
      return t;
    }
    function Ht(e, n, t) {
      var r = En(e, n.schema);
      return n.openCursor({ trans: t, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
    }
    function Sn(e, n, t, r) {
      var i = e.replayFilter ? Ce(e.filter, e.replayFilter()) : e.filter;
      if (e.or) {
        var o = {}, a = function(u, f, c) {
          var p, s;
          i && !i(f, c, function(y) {
            return f.stop(y);
          }, function(y) {
            return f.fail(y);
          }) || ((s = "" + (p = f.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), Z(o, s) || (o[s] = !0, n(u, f, c)));
        };
        return Promise.all([e.or._iterate(a, t), Jt(Ht(e, r, t), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
      }
      return Jt(Ht(e, r, t), Ce(e.algorithm, i), n, !e.keysOnly && e.valueMapper);
    }
    function Jt(e, n, t, r) {
      var i = L(r ? function(o, a, u) {
        return t(r(o), a, u);
      } : t);
      return e.then(function(o) {
        if (o)
          return o.start(function() {
            var a = function() {
              return o.continue();
            };
            n && !n(o, function(u) {
              return a = u;
            }, function(u) {
              o.stop(u), a = M;
            }, function(u) {
              o.fail(u), a = M;
            }) || i(o.value, o, function(u) {
              return a = u;
            }), a();
          });
      });
    }
    var he = Symbol(), rn = (Zt.prototype.execute = function(e) {
      if (this.add !== void 0) {
        var n = this.add;
        if (F(n))
          return Ie(Ie([], F(e) ? e : [], !0), n).sort();
        if (typeof n == "number")
          return (Number(e) || 0) + n;
        if (typeof n == "bigint")
          try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
        throw new TypeError("Invalid term ".concat(n));
      }
      if (this.remove !== void 0) {
        var t = this.remove;
        if (F(t))
          return F(e) ? e.filter(function(r) {
            return !t.includes(r);
          }).sort() : [];
        if (typeof t == "number")
          return Number(e) - t;
        if (typeof t == "bigint")
          try {
            return BigInt(e) - t;
          } catch {
            return BigInt(0) - t;
          }
        throw new TypeError("Invalid subtrahend ".concat(t));
      }
      return n = (n = this.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? this.replacePrefix[1] + e.substring(n.length) : e;
    }, Zt);
    function Zt(e) {
      Object.assign(this, e);
    }
    var Fr = (B.prototype._read = function(e, n) {
      var t = this._ctx;
      return t.error ? t.table._trans(null, z.bind(null, t.error)) : t.table._trans("readonly", e).then(n);
    }, B.prototype._write = function(e) {
      var n = this._ctx;
      return n.error ? n.table._trans(null, z.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
    }, B.prototype._addAlgorithm = function(e) {
      var n = this._ctx;
      n.algorithm = Ce(n.algorithm, e);
    }, B.prototype._iterate = function(e, n) {
      return Sn(this._ctx, e, n, this._ctx.table.core);
    }, B.prototype.clone = function(e) {
      var n = Object.create(this.constructor.prototype), t = Object.create(this._ctx);
      return e && H(t, e), n._ctx = t, n;
    }, B.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, B.prototype.each = function(e) {
      var n = this._ctx;
      return this._read(function(t) {
        return Sn(n, e, t, n.table.core);
      });
    }, B.prototype.count = function(e) {
      var n = this;
      return this._read(function(t) {
        var r = n._ctx, i = r.table.core;
        if (ze(r, !0))
          return i.count({ trans: t, query: { index: En(r, i.schema), range: r.range } }).then(function(a) {
            return Math.min(a, r.limit);
          });
        var o = 0;
        return Sn(r, function() {
          return ++o, !1;
        }, t, i).then(function() {
          return o;
        });
      }).then(e);
    }, B.prototype.sortBy = function(e, n) {
      var t = e.split(".").reverse(), r = t[0], i = t.length - 1;
      function o(f, c) {
        return c ? o(f[t[c]], c - 1) : f[r];
      }
      var a = this._ctx.dir === "next" ? 1 : -1;
      function u(f, c) {
        return f = o(f, i), c = o(c, i), f < c ? -a : c < f ? a : 0;
      }
      return this.toArray(function(f) {
        return f.sort(u);
      }).then(n);
    }, B.prototype.toArray = function(e) {
      var n = this;
      return this._read(function(t) {
        var r = n._ctx;
        if (r.dir === "next" && ze(r, !0) && 0 < r.limit) {
          var i = r.valueMapper, o = En(r, r.table.core.schema);
          return r.table.core.query({ trans: t, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(u) {
            return u = u.result, i ? u.map(i) : u;
          });
        }
        var a = [];
        return Sn(r, function(u) {
          return a.push(u);
        }, t, r.table.core).then(function() {
          return a;
        });
      }, e);
    }, B.prototype.offset = function(e) {
      var n = this._ctx;
      return e <= 0 || (n.offset += e, ze(n) ? it(n, function() {
        var t = e;
        return function(r, i) {
          return t === 0 || (t === 1 ? --t : i(function() {
            r.advance(t), t = 0;
          }), !1);
        };
      }) : it(n, function() {
        var t = e;
        return function() {
          return --t < 0;
        };
      })), this;
    }, B.prototype.limit = function(e) {
      return this._ctx.limit = Math.min(this._ctx.limit, e), it(this._ctx, function() {
        var n = e;
        return function(t, r, i) {
          return --n <= 0 && r(i), 0 <= n;
        };
      }, !0), this;
    }, B.prototype.until = function(e, n) {
      return rt(this._ctx, function(t, r, i) {
        return !e(t.value) || (r(i), n);
      }), this;
    }, B.prototype.first = function(e) {
      return this.limit(1).toArray(function(n) {
        return n[0];
      }).then(e);
    }, B.prototype.last = function(e) {
      return this.reverse().first(e);
    }, B.prototype.filter = function(e) {
      var n;
      return rt(this._ctx, function(t) {
        return e(t.value);
      }), (n = this._ctx).isMatch = Ce(n.isMatch, e), this;
    }, B.prototype.and = function(e) {
      return this.filter(e);
    }, B.prototype.or = function(e) {
      return new this.db.WhereClause(this._ctx.table, e, this);
    }, B.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, B.prototype.desc = function() {
      return this.reverse();
    }, B.prototype.eachKey = function(e) {
      var n = this._ctx;
      return n.keysOnly = !n.isMatch, this.each(function(t, r) {
        e(r.key, r);
      });
    }, B.prototype.eachUniqueKey = function(e) {
      return this._ctx.unique = "unique", this.eachKey(e);
    }, B.prototype.eachPrimaryKey = function(e) {
      var n = this._ctx;
      return n.keysOnly = !n.isMatch, this.each(function(t, r) {
        e(r.primaryKey, r);
      });
    }, B.prototype.keys = function(e) {
      var n = this._ctx;
      n.keysOnly = !n.isMatch;
      var t = [];
      return this.each(function(r, i) {
        t.push(i.key);
      }).then(function() {
        return t;
      }).then(e);
    }, B.prototype.primaryKeys = function(e) {
      var n = this._ctx;
      if (n.dir === "next" && ze(n, !0) && 0 < n.limit)
        return this._read(function(r) {
          var i = En(n, n.table.core.schema);
          return n.table.core.query({ trans: r, values: !1, limit: n.limit, query: { index: i, range: n.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
      n.keysOnly = !n.isMatch;
      var t = [];
      return this.each(function(r, i) {
        t.push(i.primaryKey);
      }).then(function() {
        return t;
      }).then(e);
    }, B.prototype.uniqueKeys = function(e) {
      return this._ctx.unique = "unique", this.keys(e);
    }, B.prototype.firstKey = function(e) {
      return this.limit(1).keys(function(n) {
        return n[0];
      }).then(e);
    }, B.prototype.lastKey = function(e) {
      return this.reverse().firstKey(e);
    }, B.prototype.distinct = function() {
      var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
      if (!e || !e.multi)
        return this;
      var n = {};
      return rt(this._ctx, function(i) {
        var r = i.primaryKey.toString(), i = Z(n, r);
        return n[r] = !0, !i;
      }), this;
    }, B.prototype.modify = function(e) {
      var n = this, t = this._ctx;
      return this._write(function(r) {
        var i, o, a;
        a = typeof e == "function" ? e : (i = V(e), o = i.length, function(h) {
          for (var m = !1, g = 0; g < o; ++g) {
            var b = i[g], w = e[b], _ = ce(h, b);
            w instanceof rn ? (ee(h, b, w.execute(_)), m = !0) : _ !== w && (ee(h, b, w), m = !0);
          }
          return m;
        });
        function u(h, b) {
          var g = b.failures, b = b.numFailures;
          d += h - b;
          for (var w = 0, _ = V(g); w < _.length; w++) {
            var P = _[w];
            l.push(g[P]);
          }
        }
        var f = t.table.core, c = f.schema.primaryKey, p = c.outbound, s = c.extractKey, y = n.db._options.modifyChunkSize || 200, l = [], d = 0, v = [];
        return n.clone().primaryKeys().then(function(h) {
          function m(b) {
            var w = Math.min(y, h.length - b);
            return f.getMany({ trans: r, keys: h.slice(b, b + w), cache: "immutable" }).then(function(_) {
              for (var P = [], x = [], O = p ? [] : null, E = [], k = 0; k < w; ++k) {
                var A = _[k], D = { value: ve(A), primKey: h[b + k] };
                a.call(D, D.value, D) !== !1 && (D.value == null ? E.push(h[b + k]) : p || R(s(A), s(D.value)) === 0 ? (x.push(D.value), p && O.push(h[b + k])) : (E.push(h[b + k]), P.push(D.value)));
              }
              return Promise.resolve(0 < P.length && f.mutate({ trans: r, type: "add", values: P }).then(function(q) {
                for (var T in q.failures)
                  E.splice(parseInt(T), 1);
                u(P.length, q);
              })).then(function() {
                return (0 < x.length || g && typeof e == "object") && f.mutate({ trans: r, type: "put", keys: O, values: x, criteria: g, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < b }).then(function(q) {
                  return u(x.length, q);
                });
              }).then(function() {
                return (0 < E.length || g && e === ot) && f.mutate({ trans: r, type: "delete", keys: E, criteria: g, isAdditionalChunk: 0 < b }).then(function(q) {
                  return u(E.length, q);
                });
              }).then(function() {
                return h.length > b + w && m(b + y);
              });
            });
          }
          var g = ze(t) && t.limit === 1 / 0 && (typeof e != "function" || e === ot) && { index: t.index, range: t.range };
          return m(0).then(function() {
            if (0 < l.length)
              throw new pn("Error modifying one or more objects", l, d, v);
            return h.length;
          });
        });
      });
    }, B.prototype.delete = function() {
      var e = this._ctx, n = e.range;
      return ze(e) && (e.isPrimKey || n.type === 3) ? this._write(function(t) {
        var r = e.table.core.schema.primaryKey, i = n;
        return e.table.core.count({ trans: t, query: { index: r, range: i } }).then(function(o) {
          return e.table.core.mutate({ trans: t, type: "deleteRange", range: i }).then(function(a) {
            var u = a.failures;
            if (a.lastResult, a.results, a = a.numFailures, a)
              throw new pn("Could not delete some values", Object.keys(u).map(function(f) {
                return u[f];
              }), o - a);
            return o - a;
          });
        });
      }) : this.modify(ot);
    }, B);
    function B() {
    }
    var ot = function(e, n) {
      return n.value = null;
    };
    function Mr(e, n) {
      return e < n ? -1 : e === n ? 0 : 1;
    }
    function Nr(e, n) {
      return n < e ? -1 : e === n ? 0 : 1;
    }
    function ne(e, n, t) {
      return e = e instanceof nr ? new e.Collection(e) : e, e._ctx.error = new (t || TypeError)(n), e;
    }
    function We(e) {
      return new e.Collection(e, function() {
        return er("");
      }).limit(0);
    }
    function Kn(e, n, t, r) {
      var i, o, a, u, f, c, p, s = t.length;
      if (!t.every(function(d) {
        return typeof d == "string";
      }))
        return ne(e, Wt);
      function y(d) {
        i = d === "next" ? function(h) {
          return h.toUpperCase();
        } : function(h) {
          return h.toLowerCase();
        }, o = d === "next" ? function(h) {
          return h.toLowerCase();
        } : function(h) {
          return h.toUpperCase();
        }, a = d === "next" ? Mr : Nr;
        var v = t.map(function(h) {
          return { lower: o(h), upper: i(h) };
        }).sort(function(h, m) {
          return a(h.lower, m.lower);
        });
        u = v.map(function(h) {
          return h.upper;
        }), f = v.map(function(h) {
          return h.lower;
        }), p = (c = d) === "next" ? "" : r;
      }
      y("next"), e = new e.Collection(e, function() {
        return _e(u[0], f[s - 1] + r);
      }), e._ondirectionchange = function(d) {
        y(d);
      };
      var l = 0;
      return e._addAlgorithm(function(d, v, h) {
        var m = d.key;
        if (typeof m != "string")
          return !1;
        var g = o(m);
        if (n(g, f, l))
          return !0;
        for (var b = null, w = l; w < s; ++w) {
          var _ = function(P, x, O, E, k, A) {
            for (var D = Math.min(P.length, E.length), q = -1, T = 0; T < D; ++T) {
              var ie = x[T];
              if (ie !== E[T])
                return k(P[T], O[T]) < 0 ? P.substr(0, T) + O[T] + O.substr(T + 1) : k(P[T], E[T]) < 0 ? P.substr(0, T) + E[T] + O.substr(T + 1) : 0 <= q ? P.substr(0, q) + x[q] + O.substr(q + 1) : null;
              k(P[T], ie) < 0 && (q = T);
            }
            return D < E.length && A === "next" ? P + O.substr(P.length) : D < P.length && A === "prev" ? P.substr(0, O.length) : q < 0 ? null : P.substr(0, q) + E[q] + O.substr(q + 1);
          }(m, g, u[w], f[w], a, c);
          _ === null && b === null ? l = w + 1 : (b === null || 0 < a(b, _)) && (b = _);
        }
        return v(b !== null ? function() {
          d.continue(b + p);
        } : h), !1;
      }), e;
    }
    function _e(e, n, t, r) {
      return { type: 2, lower: e, upper: n, lowerOpen: t, upperOpen: r };
    }
    function er(e) {
      return { type: 1, lower: e, upper: e };
    }
    var nr = (Object.defineProperty(Y.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), Y.prototype.between = function(e, n, t, r) {
      t = t !== !1, r = r === !0;
      try {
        return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (t || r) && (!t || !r) ? We(this) : new this.Collection(this, function() {
          return _e(e, n, !t, !r);
        });
      } catch {
        return ne(this, fe);
      }
    }, Y.prototype.equals = function(e) {
      return e == null ? ne(this, fe) : new this.Collection(this, function() {
        return er(e);
      });
    }, Y.prototype.above = function(e) {
      return e == null ? ne(this, fe) : new this.Collection(this, function() {
        return _e(e, void 0, !0);
      });
    }, Y.prototype.aboveOrEqual = function(e) {
      return e == null ? ne(this, fe) : new this.Collection(this, function() {
        return _e(e, void 0, !1);
      });
    }, Y.prototype.below = function(e) {
      return e == null ? ne(this, fe) : new this.Collection(this, function() {
        return _e(void 0, e, !1, !0);
      });
    }, Y.prototype.belowOrEqual = function(e) {
      return e == null ? ne(this, fe) : new this.Collection(this, function() {
        return _e(void 0, e);
      });
    }, Y.prototype.startsWith = function(e) {
      return typeof e != "string" ? ne(this, Wt) : this.between(e, e + je, !0, !0);
    }, Y.prototype.startsWithIgnoreCase = function(e) {
      return e === "" ? this.startsWith(e) : Kn(this, function(n, t) {
        return n.indexOf(t[0]) === 0;
      }, [e], je);
    }, Y.prototype.equalsIgnoreCase = function(e) {
      return Kn(this, function(n, t) {
        return n === t[0];
      }, [e], "");
    }, Y.prototype.anyOfIgnoreCase = function() {
      var e = le.apply(Re, arguments);
      return e.length === 0 ? We(this) : Kn(this, function(n, t) {
        return t.indexOf(n) !== -1;
      }, e, "");
    }, Y.prototype.startsWithAnyOfIgnoreCase = function() {
      var e = le.apply(Re, arguments);
      return e.length === 0 ? We(this) : Kn(this, function(n, t) {
        return t.some(function(r) {
          return n.indexOf(r) === 0;
        });
      }, e, je);
    }, Y.prototype.anyOf = function() {
      var e = this, n = le.apply(Re, arguments), t = this._cmp;
      try {
        n.sort(t);
      } catch {
        return ne(this, fe);
      }
      if (n.length === 0)
        return We(this);
      var r = new this.Collection(this, function() {
        return _e(n[0], n[n.length - 1]);
      });
      r._ondirectionchange = function(o) {
        t = o === "next" ? e._ascending : e._descending, n.sort(t);
      };
      var i = 0;
      return r._addAlgorithm(function(o, a, u) {
        for (var f = o.key; 0 < t(f, n[i]); )
          if (++i === n.length)
            return a(u), !1;
        return t(f, n[i]) === 0 || (a(function() {
          o.continue(n[i]);
        }), !1);
      }), r;
    }, Y.prototype.notEqual = function(e) {
      return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, Y.prototype.noneOf = function() {
      var e = le.apply(Re, arguments);
      if (e.length === 0)
        return new this.Collection(this);
      try {
        e.sort(this._ascending);
      } catch {
        return ne(this, fe);
      }
      var n = e.reduce(function(t, r) {
        return t ? t.concat([[t[t.length - 1][1], r]]) : [[-1 / 0, r]];
      }, null);
      return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
    }, Y.prototype.inAnyRange = function(m, n) {
      var t = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
      if (m.length === 0)
        return We(this);
      if (!m.every(function(g) {
        return g[0] !== void 0 && g[1] !== void 0 && i(g[0], g[1]) <= 0;
      }))
        return ne(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", j.InvalidArgument);
      var f = !n || n.includeLowers !== !1, c = n && n.includeUppers === !0, p, s = i;
      function y(g, b) {
        return s(g[0], b[0]);
      }
      try {
        (p = m.reduce(function(g, b) {
          for (var w = 0, _ = g.length; w < _; ++w) {
            var P = g[w];
            if (r(b[0], P[1]) < 0 && 0 < r(b[1], P[0])) {
              P[0] = a(P[0], b[0]), P[1] = u(P[1], b[1]);
              break;
            }
          }
          return w === _ && g.push(b), g;
        }, [])).sort(y);
      } catch {
        return ne(this, fe);
      }
      var l = 0, d = c ? function(g) {
        return 0 < i(g, p[l][1]);
      } : function(g) {
        return 0 <= i(g, p[l][1]);
      }, v = f ? function(g) {
        return 0 < o(g, p[l][0]);
      } : function(g) {
        return 0 <= o(g, p[l][0]);
      }, h = d, m = new this.Collection(this, function() {
        return _e(p[0][0], p[p.length - 1][1], !f, !c);
      });
      return m._ondirectionchange = function(g) {
        s = g === "next" ? (h = d, i) : (h = v, o), p.sort(y);
      }, m._addAlgorithm(function(g, b, w) {
        for (var _, P = g.key; h(P); )
          if (++l === p.length)
            return b(w), !1;
        return !d(_ = P) && !v(_) || (t._cmp(P, p[l][1]) === 0 || t._cmp(P, p[l][0]) === 0 || b(function() {
          s === i ? g.continue(p[l][0]) : g.continue(p[l][1]);
        }), !1);
      }), m;
    }, Y.prototype.startsWithAnyOf = function() {
      var e = le.apply(Re, arguments);
      return e.every(function(n) {
        return typeof n == "string";
      }) ? e.length === 0 ? We(this) : this.inAnyRange(e.map(function(n) {
        return [n, n + je];
      })) : ne(this, "startsWithAnyOf() only works with strings");
    }, Y);
    function Y() {
    }
    function ue(e) {
      return L(function(n) {
        return on(n), e(n.target.error), !1;
      });
    }
    function on(e) {
      e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
    }
    var an = "storagemutated", at = "x-storagemutated-1", xe = nn(null, an), Lr = (se.prototype._lock = function() {
      return Ye(!K.global), ++this._reculock, this._reculock !== 1 || K.global || (K.lockOwnerFor = this), this;
    }, se.prototype._unlock = function() {
      if (Ye(!K.global), --this._reculock == 0)
        for (K.global || (K.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Ke(e[1], e[0]);
          } catch {
          }
        }
      return this;
    }, se.prototype._locked = function() {
      return this._reculock && K.lockOwnerFor !== this;
    }, se.prototype.create = function(e) {
      var n = this;
      if (!this.mode)
        return this;
      var t = this.db.idbdb, r = this.db._state.dbOpenError;
      if (Ye(!this.idbtrans), !e && !t)
        switch (r && r.name) {
          case "DatabaseClosedError":
            throw new j.DatabaseClosed(r);
          case "MissingAPIError":
            throw new j.MissingAPI(r.message, r);
          default:
            throw new j.OpenFailed(r);
        }
      if (!this.active)
        throw new j.TransactionInactive();
      return Ye(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || t).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = L(function(i) {
        on(i), n._reject(e.error);
      }), e.onabort = L(function(i) {
        on(i), n.active && n._reject(new j.Abort(e.error)), n.active = !1, n.on("abort").fire(i);
      }), e.oncomplete = L(function() {
        n.active = !1, n._resolve(), "mutatedParts" in e && xe.storagemutated.fire(e.mutatedParts);
      }), this;
    }, se.prototype._promise = function(e, n, t) {
      var r = this;
      if (e === "readwrite" && this.mode !== "readwrite")
        return z(new j.ReadOnly("Transaction is readonly"));
      if (!this.active)
        return z(new j.TransactionInactive());
      if (this._locked())
        return new S(function(o, a) {
          r._blockedFuncs.push([function() {
            r._promise(e, n, t).then(o, a);
          }, K]);
        });
      if (t)
        return ge(function() {
          var o = new S(function(a, u) {
            r._lock();
            var f = n(a, u, r);
            f && f.then && f.then(a, u);
          });
          return o.finally(function() {
            return r._unlock();
          }), o._lib = !0, o;
        });
      var i = new S(function(o, a) {
        var u = n(o, a, r);
        u && u.then && u.then(o, a);
      });
      return i._lib = !0, i;
    }, se.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, se.prototype.waitFor = function(e) {
      var n, t = this._root(), r = S.resolve(e);
      t._waitingFor ? t._waitingFor = t._waitingFor.then(function() {
        return r;
      }) : (t._waitingFor = r, t._waitingQueue = [], n = t.idbtrans.objectStore(t.storeNames[0]), function o() {
        for (++t._spinCount; t._waitingQueue.length; )
          t._waitingQueue.shift()();
        t._waitingFor && (n.get(-1 / 0).onsuccess = o);
      }());
      var i = t._waitingFor;
      return new S(function(o, a) {
        r.then(function(u) {
          return t._waitingQueue.push(L(o.bind(null, u)));
        }, function(u) {
          return t._waitingQueue.push(L(a.bind(null, u)));
        }).finally(function() {
          t._waitingFor === i && (t._waitingFor = null);
        });
      });
    }, se.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new j.Abort()));
    }, se.prototype.table = function(e) {
      var n = this._memoizedTables || (this._memoizedTables = {});
      if (Z(n, e))
        return n[e];
      var t = this.schema[e];
      if (!t)
        throw new j.NotFound("Table " + e + " not part of transaction");
      return t = new this.db.Table(e, t, this), t.core = this.db.core.table(e), n[e] = t;
    }, se);
    function se() {
    }
    function ut(e, n, t, r, i, o, a) {
      return { name: e, keyPath: n, unique: t, multi: r, auto: i, compound: o, src: (t && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + tr(n) };
    }
    function tr(e) {
      return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
    }
    function st(e, n, t) {
      return { name: e, primKey: n, indexes: t, mappedClass: null, idxByName: (r = function(i) {
        return [i.name, i];
      }, t.reduce(function(i, o, a) {
        return a = r(o, a), a && (i[a[0]] = a[1]), i;
      }, {})) };
      var r;
    }
    var un = function(e) {
      try {
        return e.only([[]]), un = function() {
          return [[]];
        }, [[]];
      } catch {
        return un = function() {
          return je;
        }, je;
      }
    };
    function ct(e) {
      return e == null ? function() {
      } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(t) {
        return t[n];
      } : function(t) {
        return ce(t, n);
      } : function(t) {
        return ce(t, e);
      };
      var n;
    }
    function rr(e) {
      return [].slice.call(e);
    }
    var Ur = 0;
    function sn(e) {
      return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
    }
    function Vr(e, n, f) {
      function r(h) {
        if (h.type === 3)
          return null;
        if (h.type === 4)
          throw new Error("Cannot convert never type to IDBKeyRange");
        var l = h.lower, d = h.upper, v = h.lowerOpen, h = h.upperOpen;
        return l === void 0 ? d === void 0 ? null : n.upperBound(d, !!h) : d === void 0 ? n.lowerBound(l, !!v) : n.bound(l, d, !!v, !!h);
      }
      function i(y) {
        var l, d = y.name;
        return { name: d, schema: y, mutate: function(v) {
          var h = v.trans, m = v.type, g = v.keys, b = v.values, w = v.range;
          return new Promise(function(_, P) {
            _ = L(_);
            var x = h.objectStore(d), O = x.keyPath == null, E = m === "put" || m === "add";
            if (!E && m !== "delete" && m !== "deleteRange")
              throw new Error("Invalid operation type: " + m);
            var k, A = (g || b || { length: 1 }).length;
            if (g && b && g.length !== b.length)
              throw new Error("Given keys array must have same length as given values array.");
            if (A === 0)
              return _({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function D(J) {
              ++ie, on(J);
            }
            var q = [], T = [], ie = 0;
            if (m === "deleteRange") {
              if (w.type === 4)
                return _({ numFailures: ie, failures: T, results: [], lastResult: void 0 });
              w.type === 3 ? q.push(k = x.clear()) : q.push(k = x.delete(r(w)));
            } else {
              var O = E ? O ? [b, g] : [b, null] : [g, null], I = O[0], Q = O[1];
              if (E)
                for (var X = 0; X < A; ++X)
                  q.push(k = Q && Q[X] !== void 0 ? x[m](I[X], Q[X]) : x[m](I[X])), k.onerror = D;
              else
                for (X = 0; X < A; ++X)
                  q.push(k = x[m](I[X])), k.onerror = D;
            }
            function Ln(J) {
              J = J.target.result, q.forEach(function(Te, Kt) {
                return Te.error != null && (T[Kt] = Te.error);
              }), _({ numFailures: ie, failures: T, results: m === "delete" ? g : q.map(function(Te) {
                return Te.result;
              }), lastResult: J });
            }
            k.onerror = function(J) {
              D(J), Ln(J);
            }, k.onsuccess = Ln;
          });
        }, getMany: function(v) {
          var h = v.trans, m = v.keys;
          return new Promise(function(g, b) {
            g = L(g);
            for (var w, _ = h.objectStore(d), P = m.length, x = new Array(P), O = 0, E = 0, k = function(q) {
              q = q.target, x[q._pos] = q.result, ++E === O && g(x);
            }, A = ue(b), D = 0; D < P; ++D)
              m[D] != null && ((w = _.get(m[D]))._pos = D, w.onsuccess = k, w.onerror = A, ++O);
            O === 0 && g(x);
          });
        }, get: function(v) {
          var h = v.trans, m = v.key;
          return new Promise(function(g, b) {
            g = L(g);
            var w = h.objectStore(d).get(m);
            w.onsuccess = function(_) {
              return g(_.target.result);
            }, w.onerror = ue(b);
          });
        }, query: (l = c, function(v) {
          return new Promise(function(h, m) {
            h = L(h);
            var g, b, w, O = v.trans, _ = v.values, P = v.limit, k = v.query, x = P === 1 / 0 ? void 0 : P, E = k.index, k = k.range, O = O.objectStore(d), E = E.isPrimaryKey ? O : O.index(E.name), k = r(k);
            if (P === 0)
              return h({ result: [] });
            l ? ((x = _ ? E.getAll(k, x) : E.getAllKeys(k, x)).onsuccess = function(A) {
              return h({ result: A.target.result });
            }, x.onerror = ue(m)) : (g = 0, b = !_ && "openKeyCursor" in E ? E.openKeyCursor(k) : E.openCursor(k), w = [], b.onsuccess = function(A) {
              var D = b.result;
              return D ? (w.push(_ ? D.value : D.primaryKey), ++g === P ? h({ result: w }) : void D.continue()) : h({ result: w });
            }, b.onerror = ue(m));
          });
        }), openCursor: function(v) {
          var h = v.trans, m = v.values, g = v.query, b = v.reverse, w = v.unique;
          return new Promise(function(_, P) {
            _ = L(_);
            var E = g.index, x = g.range, O = h.objectStore(d), O = E.isPrimaryKey ? O : O.index(E.name), E = b ? w ? "prevunique" : "prev" : w ? "nextunique" : "next", k = !m && "openKeyCursor" in O ? O.openKeyCursor(r(x), E) : O.openCursor(r(x), E);
            k.onerror = ue(P), k.onsuccess = L(function(A) {
              var D, q, T, ie, I = k.result;
              I ? (I.___id = ++Ur, I.done = !1, D = I.continue.bind(I), q = (q = I.continuePrimaryKey) && q.bind(I), T = I.advance.bind(I), ie = function() {
                throw new Error("Cursor not stopped");
              }, I.trans = h, I.stop = I.continue = I.continuePrimaryKey = I.advance = function() {
                throw new Error("Cursor not started");
              }, I.fail = L(P), I.next = function() {
                var Q = this, X = 1;
                return this.start(function() {
                  return X-- ? Q.continue() : Q.stop();
                }).then(function() {
                  return Q;
                });
              }, I.start = function(Q) {
                function X() {
                  if (k.result)
                    try {
                      Q();
                    } catch (J) {
                      I.fail(J);
                    }
                  else
                    I.done = !0, I.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, I.stop();
                }
                var Ln = new Promise(function(J, Te) {
                  J = L(J), k.onerror = ue(Te), I.fail = Te, I.stop = function(Kt) {
                    I.stop = I.continue = I.continuePrimaryKey = I.advance = ie, J(Kt);
                  };
                });
                return k.onsuccess = L(function(J) {
                  k.onsuccess = X, X();
                }), I.continue = D, I.continuePrimaryKey = q, I.advance = T, X(), Ln;
              }, _(I)) : _(null);
            }, P);
          });
        }, count: function(v) {
          var h = v.query, m = v.trans, g = h.index, b = h.range;
          return new Promise(function(w, _) {
            var P = m.objectStore(d), x = g.isPrimaryKey ? P : P.index(g.name), P = r(b), x = P ? x.count(P) : x.count();
            x.onsuccess = L(function(O) {
              return w(O.target.result);
            }), x.onerror = ue(_);
          });
        } };
      }
      var o, a, u, p = (a = f, u = rr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(y) {
        return a.objectStore(y);
      }).map(function(y) {
        var l = y.keyPath, h = y.autoIncrement, d = F(l), v = {}, h = { name: y.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: d, keyPath: l, autoIncrement: h, unique: !0, extractKey: ct(l) }, indexes: rr(y.indexNames).map(function(m) {
          return y.index(m);
        }).map(function(w) {
          var g = w.name, b = w.unique, _ = w.multiEntry, w = w.keyPath, _ = { name: g, compound: F(w), keyPath: w, unique: b, multiEntry: _, extractKey: ct(w) };
          return v[sn(w)] = _;
        }), getIndexByKeyPath: function(m) {
          return v[sn(m)];
        } };
        return v[":id"] = h.primaryKey, l != null && (v[sn(l)] = h.primaryKey), h;
      }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), f = p.schema, c = p.hasGetAll, p = f.tables.map(i), s = {};
      return p.forEach(function(y) {
        return s[y.name] = y;
      }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(y) {
        if (!s[y])
          throw new Error("Table '".concat(y, "' not found"));
        return s[y];
      }, MIN_KEY: -1 / 0, MAX_KEY: un(n), schema: f };
    }
    function zr(e, n, t, r) {
      var i = t.IDBKeyRange;
      return t.indexedDB, { dbcore: (r = Vr(n, i, r), e.dbcore.reduce(function(o, a) {
        return a = a.create, C(C({}, o), a(o));
      }, r)) };
    }
    function jn(e, r) {
      var t = r.db, r = zr(e._middlewares, t, e._deps, r);
      e.core = r.dbcore, e.tables.forEach(function(i) {
        var o = i.name;
        e.core.schema.tables.some(function(a) {
          return a.name === o;
        }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
      });
    }
    function Cn(e, n, t, r) {
      t.forEach(function(i) {
        var o = r[i];
        n.forEach(function(a) {
          var u = function f(c, p) {
            return _r(c, p) || (c = oe(c)) && f(c, p);
          }(a, i);
          (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? ye(a, i, { get: function() {
            return this.table(i);
          }, set: function(f) {
            At(this, i, { value: f, writable: !0, configurable: !0, enumerable: !0 });
          } }) : a[i] = new e.Table(i, o));
        });
      });
    }
    function lt(e, n) {
      n.forEach(function(t) {
        for (var r in t)
          t[r] instanceof e.Table && delete t[r];
      });
    }
    function Wr(e, n) {
      return e._cfg.version - n._cfg.version;
    }
    function $r(e, n, t, r) {
      var i = e._dbSchema;
      t.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = st("$meta", or("")[0], []), e._storeNames.push("$meta"));
      var o = e._createTransaction("readwrite", e._storeNames, i);
      o.create(t), o._completion.catch(r);
      var a = o._reject.bind(o), u = K.transless || K;
      ge(function() {
        return K.trans = o, K.transless = u, n !== 0 ? (jn(e, t), c = n, ((f = o).storeNames.includes("$meta") ? f.table("$meta").get("version").then(function(p) {
          return p ?? c;
        }) : S.resolve(c)).then(function(p) {
          return y = p, l = o, d = t, v = [], p = (s = e)._versions, h = s._dbSchema = Dn(0, s.idbdb, d), (p = p.filter(function(m) {
            return m._cfg.version >= y;
          })).length !== 0 ? (p.forEach(function(m) {
            v.push(function() {
              var g = h, b = m._cfg.dbschema;
              Tn(s, g, d), Tn(s, b, d), h = s._dbSchema = b;
              var w = ft(g, b);
              w.add.forEach(function(E) {
                ht(d, E[0], E[1].primKey, E[1].indexes);
              }), w.change.forEach(function(E) {
                if (E.recreate)
                  throw new j.Upgrade("Not yet support for changing primary key");
                var k = d.objectStore(E.name);
                E.add.forEach(function(A) {
                  return An(k, A);
                }), E.change.forEach(function(A) {
                  k.deleteIndex(A.name), An(k, A);
                }), E.del.forEach(function(A) {
                  return k.deleteIndex(A);
                });
              });
              var _ = m._cfg.contentUpgrade;
              if (_ && m._cfg.version > y) {
                jn(s, d), l._memoizedTables = {};
                var P = It(b);
                w.del.forEach(function(E) {
                  P[E] = g[E];
                }), lt(s, [s.Transaction.prototype]), Cn(s, [s.Transaction.prototype], V(P), P), l.schema = P;
                var x, O = zn(_);
                return O && Ue(), w = S.follow(function() {
                  var E;
                  (x = _(l)) && O && (E = be.bind(null, null), x.then(E, E));
                }), x && typeof x.then == "function" ? S.resolve(x) : w.then(function() {
                  return x;
                });
              }
            }), v.push(function(g) {
              var b, w, _ = m._cfg.dbschema;
              b = _, w = g, [].slice.call(w.db.objectStoreNames).forEach(function(P) {
                return b[P] == null && w.db.deleteObjectStore(P);
              }), lt(s, [s.Transaction.prototype]), Cn(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
            }), v.push(function(g) {
              s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === m._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(b) {
                return b !== "$meta";
              })) : g.objectStore("$meta").put(m._cfg.version, "version"));
            });
          }), function m() {
            return v.length ? S.resolve(v.shift()(l.idbtrans)).then(m) : S.resolve();
          }().then(function() {
            ir(h, d);
          })) : S.resolve();
          var s, y, l, d, v, h;
        }).catch(a)) : (V(i).forEach(function(p) {
          ht(t, p, i[p].primKey, i[p].indexes);
        }), jn(e, t), void S.follow(function() {
          return e.on.populate.fire(o);
        }).catch(a));
        var f, c;
      });
    }
    function Yr(e, n) {
      ir(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
      var t = Dn(0, e.idbdb, n);
      Tn(e, e._dbSchema, n);
      for (var r = 0, i = ft(t, e._dbSchema).change; r < i.length; r++) {
        var o = function(a) {
          if (a.change.length || a.recreate)
            return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var u = n.objectStore(a.name);
          a.add.forEach(function(f) {
            ae && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(f.src)), An(u, f);
          });
        }(i[r]);
        if (typeof o == "object")
          return o.value;
      }
    }
    function ft(e, n) {
      var t, r = { del: [], add: [], change: [] };
      for (t in e)
        n[t] || r.del.push(t);
      for (t in n) {
        var i = e[t], o = n[t];
        if (i) {
          var a = { name: t, def: o, recreate: !1, del: [], add: [], change: [] };
          if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto)
            a.recreate = !0, r.change.push(a);
          else {
            var u = i.idxByName, f = o.idxByName, c = void 0;
            for (c in u)
              f[c] || a.del.push(c);
            for (c in f) {
              var p = u[c], s = f[c];
              p ? p.src !== s.src && a.change.push(s) : a.add.push(s);
            }
            (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
          }
        } else
          r.add.push([t, o]);
      }
      return r;
    }
    function ht(e, n, t, r) {
      var i = e.db.createObjectStore(n, t.keyPath ? { keyPath: t.keyPath, autoIncrement: t.auto } : { autoIncrement: t.auto });
      return r.forEach(function(o) {
        return An(i, o);
      }), i;
    }
    function ir(e, n) {
      V(e).forEach(function(t) {
        n.db.objectStoreNames.contains(t) || (ae && console.debug("Dexie: Creating missing table", t), ht(n, t, e[t].primKey, e[t].indexes));
      });
    }
    function An(e, n) {
      e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
    }
    function Dn(e, n, t) {
      var r = {};
      return dn(n.objectStoreNames, 0).forEach(function(i) {
        for (var o = t.objectStore(i), a = ut(tr(c = o.keyPath), c || "", !0, !1, !!o.autoIncrement, c && typeof c != "string", !0), u = [], f = 0; f < o.indexNames.length; ++f) {
          var p = o.index(o.indexNames[f]), c = p.keyPath, p = ut(p.name, c, !!p.unique, !!p.multiEntry, !1, c && typeof c != "string", !1);
          u.push(p);
        }
        r[i] = st(i, a, u);
      }), r;
    }
    function Tn(e, n, t) {
      for (var r = t.db.objectStoreNames, i = 0; i < r.length; ++i) {
        var o = r[i], a = t.objectStore(o);
        e._hasGetAll = "getAll" in a;
        for (var u = 0; u < a.indexNames.length; ++u) {
          var f = a.indexNames[u], c = a.index(f).keyPath, p = typeof c == "string" ? c : "[" + dn(c).join("+") + "]";
          !n[o] || (c = n[o].idxByName[p]) && (c.name = f, delete n[o].idxByName[p], n[o].idxByName[f] = c);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && U.WorkerGlobalScope && U instanceof U.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
    }
    function or(e) {
      return e.split(",").map(function(n, t) {
        var r = (n = n.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
        return ut(r, i || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), F(i), t === 0);
      });
    }
    var Gr = (In.prototype._parseStoresSpec = function(e, n) {
      V(e).forEach(function(t) {
        if (e[t] !== null) {
          var r = or(e[t]), i = r.shift();
          if (i.unique = !0, i.multi)
            throw new j.Schema("Primary key cannot be multi-valued");
          r.forEach(function(o) {
            if (o.auto)
              throw new j.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!o.keyPath)
              throw new j.Schema("Index must have a name and cannot be an empty string");
          }), n[t] = st(t, i, r);
        }
      });
    }, In.prototype.stores = function(t) {
      var n = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? H(this._cfg.storesSource, t) : t;
      var t = n._versions, r = {}, i = {};
      return t.forEach(function(o) {
        H(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
      }), n._dbSchema = i, lt(n, [n._allTables, n, n.Transaction.prototype]), Cn(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], V(i), i), n._storeNames = V(i), this;
    }, In.prototype.upgrade = function(e) {
      return this._cfg.contentUpgrade = $n(this._cfg.contentUpgrade || M, e), this;
    }, In);
    function In() {
    }
    function dt(e, n) {
      var t = e._dbNamesDB;
      return t || (t = e._dbNamesDB = new de(On, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), t.table("dbnames");
    }
    function pt(e) {
      return e && typeof e.databases == "function";
    }
    function yt(e) {
      return ge(function() {
        return K.letThrough = !0, e();
      });
    }
    function vt(e) {
      return !("from" in e);
    }
    var G = function(e, n) {
      if (!this) {
        var t = new G();
        return e && "d" in e && H(t, e), t;
      }
      H(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
    };
    function cn(e, n, t) {
      var r = R(n, t);
      if (!isNaN(r)) {
        if (0 < r)
          throw RangeError();
        if (vt(e))
          return H(e, { from: n, to: t, d: 1 });
        var i = e.l, r = e.r;
        if (R(t, e.from) < 0)
          return i ? cn(i, n, t) : e.l = { from: n, to: t, d: 1, l: null, r: null }, ar(e);
        if (0 < R(n, e.to))
          return r ? cn(r, n, t) : e.r = { from: n, to: t, d: 1, l: null, r: null }, ar(e);
        R(n, e.from) < 0 && (e.from = n, e.l = null, e.d = r ? r.d + 1 : 1), 0 < R(t, e.to) && (e.to = t, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, i && !e.l && ln(e, i), r && t && ln(e, r);
      }
    }
    function ln(e, n) {
      vt(n) || function t(r, f) {
        var o = f.from, a = f.to, u = f.l, f = f.r;
        cn(r, o, a), u && t(r, u), f && t(r, f);
      }(e, n);
    }
    function qn(e, n) {
      var t = mt(n), r = t.next();
      if (r.done)
        return !1;
      for (var i = r.value, o = mt(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
        if (R(u.from, i.to) <= 0 && 0 <= R(u.to, i.from))
          return !0;
        R(i.from, u.from) < 0 ? i = (r = t.next(u.from)).value : u = (a = o.next(i.from)).value;
      }
      return !1;
    }
    function mt(e) {
      var n = vt(e) ? null : { s: 0, n: e };
      return { next: function(t) {
        for (var r = 0 < arguments.length; n; )
          switch (n.s) {
            case 0:
              if (n.s = 1, r)
                for (; n.n.l && R(t, n.n.from) < 0; )
                  n = { up: n, n: n.n.l, s: 1 };
              else
                for (; n.n.l; )
                  n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !r || R(t, n.n.to) <= 0)
                return { value: n.n, done: !1 };
            case 2:
              if (n.n.r) {
                n.s = 3, n = { up: n, n: n.n.r, s: 0 };
                continue;
              }
            case 3:
              n = n.up;
          }
        return { done: !0 };
      } };
    }
    function ar(e) {
      var n, t, r = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((t = e.l) === null || t === void 0 ? void 0 : t.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
      i && (n = i == "r" ? "l" : "r", t = C({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], t[i] = r[n], (e[n] = t).d = ur(t)), e.d = ur(e);
    }
    function ur(t) {
      var n = t.r, t = t.l;
      return (n ? t ? Math.max(n.d, t.d) : n.d : t ? t.d : 0) + 1;
    }
    function Bn(e, n) {
      return V(n).forEach(function(t) {
        e[t] ? ln(e[t], n[t]) : e[t] = function r(i) {
          var o, a, u = {};
          for (o in i)
            Z(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || Bt.has(a.constructor) ? a : r(a));
          return u;
        }(n[t]);
      }), e;
    }
    function gt(e, n) {
      return e.all || n.all || Object.keys(e).some(function(t) {
        return n[t] && qn(n[t], e[t]);
      });
    }
    qe(G.prototype, ((te = { add: function(e) {
      return ln(this, e), this;
    }, addKey: function(e) {
      return cn(this, e, e), this;
    }, addKeys: function(e) {
      var n = this;
      return e.forEach(function(t) {
        return cn(n, t, t);
      }), this;
    } })[Vn] = function() {
      return mt(this);
    }, te));
    var Ae = {}, bt = {}, wt = !1;
    function Rn(e) {
      Bn(bt, e), wt || (wt = !0, setTimeout(function() {
        wt = !1, _t(bt, !(bt = {}));
      }, 0));
    }
    function _t(e, n) {
      n === void 0 && (n = !1);
      var t = /* @__PURE__ */ new Set();
      if (e.all)
        for (var r = 0, i = Object.values(Ae); r < i.length; r++)
          sr(a = i[r], e, t, n);
      else
        for (var o in e) {
          var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
          u && (o = u[1], u = u[2], (a = Ae["idb://".concat(o, "/").concat(u)]) && sr(a, e, t, n));
        }
      t.forEach(function(f) {
        return f();
      });
    }
    function sr(e, n, t, r) {
      for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
        for (var u = a[o], f = u[0], c = [], p = 0, s = u[1]; p < s.length; p++) {
          var y = s[p];
          gt(n, y.obsSet) ? y.subscribers.forEach(function(h) {
            return t.add(h);
          }) : r && c.push(y);
        }
        r && i.push([f, c]);
      }
      if (r)
        for (var l = 0, d = i; l < d.length; l++) {
          var v = d[l], f = v[0], c = v[1];
          e.queries.query[f] = c;
        }
    }
    function Qr(e) {
      var n = e._state, t = e._deps.indexedDB;
      if (n.isBeingOpened || e.idbdb)
        return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? z(n.dbOpenError) : e;
        });
      n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
      var r = n.openCanceller, i = Math.round(10 * e.verno), o = !1;
      function a() {
        if (n.openCanceller !== r)
          throw new j.DatabaseClosed("db.open() was cancelled");
      }
      function u() {
        return new S(function(y, l) {
          if (a(), !t)
            throw new j.MissingAPI();
          var d = e.name, v = n.autoSchema || !i ? t.open(d) : t.open(d, i);
          if (!v)
            throw new j.MissingAPI();
          v.onerror = ue(l), v.onblocked = L(e._fireOnBlocked), v.onupgradeneeded = L(function(h) {
            var m;
            p = v.transaction, n.autoSchema && !e._options.allowEmptyDB ? (v.onerror = on, p.abort(), v.result.close(), (m = t.deleteDatabase(d)).onsuccess = m.onerror = L(function() {
              l(new j.NoSuchDatabase("Database ".concat(d, " doesnt exist")));
            })) : (p.onerror = ue(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = v.result, o && Yr(e, p), $r(e, h / 10, p, l));
          }, l), v.onsuccess = L(function() {
            p = null;
            var h, m, g, b, w, _ = e.idbdb = v.result, P = dn(_.objectStoreNames);
            if (0 < P.length)
              try {
                var x = _.transaction((b = P).length === 1 ? b[0] : b, "readonly");
                if (n.autoSchema)
                  m = _, g = x, (h = e).verno = m.version / 10, g = h._dbSchema = Dn(0, m, g), h._storeNames = dn(m.objectStoreNames, 0), Cn(h, [h._allTables], V(g), g);
                else if (Tn(e, e._dbSchema, x), ((w = ft(Dn(0, (w = e).idbdb, x), w._dbSchema)).add.length || w.change.some(function(O) {
                  return O.add.length || O.change.length;
                })) && !o)
                  return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _.close(), i = _.version + 1, o = !0, y(u());
                jn(e, x);
              } catch {
              }
            Ve.push(e), _.onversionchange = L(function(O) {
              n.vcFired = !0, e.on("versionchange").fire(O);
            }), _.onclose = L(function(O) {
              e.on("close").fire(O);
            }), s && (w = e._deps, x = d, _ = w.indexedDB, w = w.IDBKeyRange, pt(_) || x === On || dt(_, w).put({ name: x }).catch(M)), y();
          }, l);
        }).catch(function(y) {
          switch (y == null ? void 0 : y.name) {
            case "UnknownError":
              if (0 < n.PR1398_maxLoop)
                return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
              break;
            case "VersionError":
              if (0 < i)
                return i = 0, u();
          }
          return S.reject(y);
        });
      }
      var f, c = n.dbReadyResolve, p = null, s = !1;
      return S.race([r, (typeof navigator > "u" ? S.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(y) {
        function l() {
          return indexedDB.databases().finally(y);
        }
        f = setInterval(l, 100), l();
      }).finally(function() {
        return clearInterval(f);
      }) : Promise.resolve()).then(u)]).then(function() {
        return a(), n.onReadyBeingFired = [], S.resolve(yt(function() {
          return e.on.ready.fire(e.vip);
        })).then(function y() {
          if (0 < n.onReadyBeingFired.length) {
            var l = n.onReadyBeingFired.reduce($n, M);
            return n.onReadyBeingFired = [], S.resolve(yt(function() {
              return l(e.vip);
            })).then(y);
          }
        });
      }).finally(function() {
        n.openCanceller === r && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
      }).catch(function(y) {
        n.dbOpenError = y;
        try {
          p && p.abort();
        } catch {
        }
        return r === n.openCanceller && e._close(), z(y);
      }).finally(function() {
        n.openComplete = !0, c();
      }).then(function() {
        var y;
        return s && (y = {}, e.tables.forEach(function(l) {
          l.schema.indexes.forEach(function(d) {
            d.name && (y["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new G(-1 / 0, [[[]]]));
          }), y["idb://".concat(e.name, "/").concat(l.name, "/")] = y["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new G(-1 / 0, [[[]]]);
        }), xe(an).fire(y), _t(y, !0)), e;
      });
    }
    function xt(e) {
      function n(o) {
        return e.next(o);
      }
      var t = i(n), r = i(function(o) {
        return e.throw(o);
      });
      function i(o) {
        return function(f) {
          var u = o(f), f = u.value;
          return u.done ? f : f && typeof f.then == "function" ? f.then(t, r) : F(f) ? Promise.all(f).then(t, r) : t(f);
        };
      }
      return i(n)();
    }
    function Fn(e, n, t) {
      for (var r = F(e) ? e.slice() : [e], i = 0; i < t; ++i)
        r.push(n);
      return r;
    }
    var Xr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
      return C(C({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema, i = {}, o = [];
        function a(s, y, l) {
          var d = sn(s), v = i[d] = i[d] || [], h = s == null ? 0 : typeof s == "string" ? 1 : s.length, m = 0 < y, m = C(C({}, l), { name: m ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: m, keyTail: y, keyLength: h, extractKey: ct(s), unique: !m && l.unique });
          return v.push(m), m.isPrimaryKey || o.push(m), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), y + 1, l), v.sort(function(g, b) {
            return g.keyTail - b.keyTail;
          }), m;
        }
        n = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [n];
        for (var u = 0, f = r.indexes; u < f.length; u++) {
          var c = f[u];
          a(c.keyPath, 0, c);
        }
        function p(s) {
          var y, l = s.query.index;
          return l.isVirtual ? C(C({}, s), { query: { index: l.lowLevelIndex, range: (y = s.query.range, l = l.keyTail, { type: y.type === 1 ? 2 : y.type, lower: Fn(y.lower, y.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: Fn(y.upper, y.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
        }
        return C(C({}, t), { schema: C(C({}, r), { primaryKey: n, indexes: o, getIndexByKeyPath: function(s) {
          return (s = i[sn(s)]) && s[0];
        } }), count: function(s) {
          return t.count(p(s));
        }, query: function(s) {
          return t.query(p(s));
        }, openCursor: function(s) {
          var y = s.query.index, l = y.keyTail, d = y.isVirtual, v = y.keyLength;
          return d ? t.openCursor(p(s)).then(function(m) {
            return m && h(m);
          }) : t.openCursor(s);
          function h(m) {
            return Object.create(m, { continue: { value: function(g) {
              g != null ? m.continue(Fn(g, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? m.continue(m.key.slice(0, v).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : m.continue();
            } }, continuePrimaryKey: { value: function(g, b) {
              m.continuePrimaryKey(Fn(g, e.MAX_KEY, l), b);
            } }, primaryKey: { get: function() {
              return m.primaryKey;
            } }, key: { get: function() {
              var g = m.key;
              return v === 1 ? g[0] : g.slice(0, v);
            } }, value: { get: function() {
              return m.value;
            } } });
          }
        } });
      } });
    } };
    function kt(e, n, t, r) {
      return t = t || {}, r = r || "", V(e).forEach(function(i) {
        var o, a, u;
        Z(n, i) ? (o = e[i], a = n[i], typeof o == "object" && typeof a == "object" && o && a ? (u = Un(o)) !== Un(a) ? t[r + i] = n[i] : u === "Object" ? kt(o, a, t, r + i + ".") : o !== a && (t[r + i] = n[i]) : o !== a && (t[r + i] = n[i])) : t[r + i] = void 0;
      }), V(n).forEach(function(i) {
        Z(e, i) || (t[r + i] = n[i]);
      }), t;
    }
    function Ot(e, n) {
      return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
    }
    var Hr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
      return C(C({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema.primaryKey;
        return C(C({}, t), { mutate: function(i) {
          var o = K.trans, a = o.table(n).hook, u = a.deleting, f = a.creating, c = a.updating;
          switch (i.type) {
            case "add":
              if (f.fire === M)
                break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "put":
              if (f.fire === M && c.fire === M)
                break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "delete":
              if (u.fire === M)
                break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "deleteRange":
              if (u.fire === M)
                break;
              return o._promise("readwrite", function() {
                return function s(y, l, d) {
                  return t.query({ trans: y, values: !1, query: { index: r, range: l }, limit: d }).then(function(v) {
                    var h = v.result;
                    return p({ type: "delete", keys: h, trans: y }).then(function(m) {
                      return 0 < m.numFailures ? Promise.reject(m.failures[0]) : h.length < d ? { failures: [], numFailures: 0, lastResult: void 0 } : s(y, C(C({}, l), { lower: h[h.length - 1], lowerOpen: !0 }), d);
                    });
                  });
                }(i.trans, i.range, 1e4);
              }, !0);
          }
          return t.mutate(i);
          function p(s) {
            var y, l, d, v = K.trans, h = s.keys || Ot(r, s);
            if (!h)
              throw new Error("Keys missing");
            return (s = s.type === "add" || s.type === "put" ? C(C({}, s), { keys: h }) : C({}, s)).type !== "delete" && (s.values = Ie([], s.values)), s.keys && (s.keys = Ie([], s.keys)), y = t, d = h, ((l = s).type === "add" ? Promise.resolve([]) : y.getMany({ trans: l.trans, keys: d, cache: "immutable" })).then(function(m) {
              var g = h.map(function(b, w) {
                var _, P, x, O = m[w], E = { onerror: null, onsuccess: null };
                return s.type === "delete" ? u.fire.call(E, b, O, v) : s.type === "add" || O === void 0 ? (_ = f.fire.call(E, b, s.values[w], v), b == null && _ != null && (s.keys[w] = b = _, r.outbound || ee(s.values[w], r.keyPath, b))) : (_ = kt(O, s.values[w]), (P = c.fire.call(E, _, b, O, v)) && (x = s.values[w], Object.keys(P).forEach(function(k) {
                  Z(x, k) ? x[k] = P[k] : ee(x, k, P[k]);
                }))), E;
              });
              return t.mutate(s).then(function(b) {
                for (var w = b.failures, _ = b.results, P = b.numFailures, b = b.lastResult, x = 0; x < h.length; ++x) {
                  var O = (_ || h)[x], E = g[x];
                  O == null ? E.onerror && E.onerror(w[x]) : E.onsuccess && E.onsuccess(s.type === "put" && m[x] ? s.values[x] : O);
                }
                return { failures: w, results: _, numFailures: P, lastResult: b };
              }).catch(function(b) {
                return g.forEach(function(w) {
                  return w.onerror && w.onerror(b);
                }), Promise.reject(b);
              });
            });
          }
        } });
      } });
    } };
    function cr(e, n, t) {
      try {
        if (!n || n.keys.length < e.length)
          return null;
        for (var r = [], i = 0, o = 0; i < n.keys.length && o < e.length; ++i)
          R(n.keys[i], e[o]) === 0 && (r.push(t ? ve(n.values[i]) : n.values[i]), ++o);
        return r.length === e.length ? r : null;
      } catch {
        return null;
      }
    }
    var Jr = { stack: "dbcore", level: -1, create: function(e) {
      return { table: function(n) {
        var t = e.table(n);
        return C(C({}, t), { getMany: function(r) {
          if (!r.cache)
            return t.getMany(r);
          var i = cr(r.keys, r.trans._cache, r.cache === "clone");
          return i ? S.resolve(i) : t.getMany(r).then(function(o) {
            return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? ve(o) : o }, o;
          });
        }, mutate: function(r) {
          return r.type !== "add" && (r.trans._cache = null), t.mutate(r);
        } });
      } };
    } };
    function lr(e, n) {
      return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
    }
    function fr(e, n) {
      switch (e) {
        case "query":
          return n.values && !n.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor":
          return !1;
      }
    }
    var Zr = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
      var n = e.schema.name, t = new G(e.MIN_KEY, e.MAX_KEY);
      return C(C({}, e), { transaction: function(r, i, o) {
        if (K.subscr && i !== "readonly")
          throw new j.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));
        return e.transaction(r, i, o);
      }, table: function(r) {
        var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, f = a.outbound, c = a.autoIncrement && s.filter(function(l) {
          return l.compound && l.keyPath.includes(a.keyPath);
        }), p = C(C({}, i), { mutate: function(l) {
          function d(k) {
            return k = "idb://".concat(n, "/").concat(r, "/").concat(k), b[k] || (b[k] = new G());
          }
          var v, h, m, g = l.trans, b = l.mutatedParts || (l.mutatedParts = {}), w = d(""), _ = d(":dels"), P = l.type, E = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [Ot(a, l).filter(function(k) {
            return k;
          }), l.values] : [], x = E[0], O = E[1], E = l.trans._cache;
          return F(x) ? (w.addKeys(x), (E = P === "delete" || x.length === O.length ? cr(x, E) : null) || _.addKeys(x), (E || O) && (v = d, h = E, m = O, o.indexes.forEach(function(k) {
            var A = v(k.name || "");
            function D(T) {
              return T != null ? k.extractKey(T) : null;
            }
            function q(T) {
              return k.multiEntry && F(T) ? T.forEach(function(ie) {
                return A.addKey(ie);
              }) : A.addKey(T);
            }
            (h || m).forEach(function(T, Q) {
              var I = h && D(h[Q]), Q = m && D(m[Q]);
              R(I, Q) !== 0 && (I != null && q(I), Q != null && q(Q));
            });
          }))) : x ? (O = { from: x.lower, to: x.upper }, _.add(O), w.add(O)) : (w.add(t), _.add(t), o.indexes.forEach(function(k) {
            return d(k.name).add(t);
          })), i.mutate(l).then(function(k) {
            return !x || l.type !== "add" && l.type !== "put" || (w.addKeys(k.results), c && c.forEach(function(A) {
              var D = l.values.map(function(T) {
                return A.extractKey(T);
              }), q = A.keyPath.findIndex(function(T) {
                return T === a.keyPath;
              });
              k.results.forEach(function(T) {
                return D[q] = T;
              }), d(A.name).addKeys(D);
            })), g.mutatedParts = Bn(g.mutatedParts || {}, b), k;
          });
        } }), s = function(d) {
          var v = d.query, d = v.index, v = v.range;
          return [d, new G((d = v.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (v = v.upper) !== null && v !== void 0 ? v : e.MAX_KEY)];
        }, y = { get: function(l) {
          return [a, new G(l.key)];
        }, getMany: function(l) {
          return [a, new G().addKeys(l.keys)];
        }, count: s, query: s, openCursor: s };
        return V(y).forEach(function(l) {
          p[l] = function(d) {
            var v = K.subscr, h = !!v, m = lr(K, i) && fr(l, d) ? d.obsSet = {} : v;
            if (h) {
              var g = function(O) {
                return O = "idb://".concat(n, "/").concat(r, "/").concat(O), m[O] || (m[O] = new G());
              }, b = g(""), w = g(":dels"), v = y[l](d), h = v[0], v = v[1];
              if ((l === "query" && h.isPrimaryKey && !d.values ? w : g(h.name || "")).add(v), !h.isPrimaryKey) {
                if (l !== "count") {
                  var _ = l === "query" && f && d.values && i.query(C(C({}, d), { values: !1 }));
                  return i[l].apply(this, arguments).then(function(O) {
                    if (l === "query") {
                      if (f && d.values)
                        return _.then(function(D) {
                          return D = D.result, b.addKeys(D), O;
                        });
                      var E = d.values ? O.result.map(u) : O.result;
                      (d.values ? b : w).addKeys(E);
                    } else if (l === "openCursor") {
                      var k = O, A = d.values;
                      return k && Object.create(k, { key: { get: function() {
                        return w.addKey(k.primaryKey), k.key;
                      } }, primaryKey: { get: function() {
                        var D = k.primaryKey;
                        return w.addKey(D), D;
                      } }, value: { get: function() {
                        return A && b.addKey(k.primaryKey), k.value;
                      } } });
                    }
                    return O;
                  });
                }
                w.add(t);
              }
            }
            return i[l].apply(this, arguments);
          };
        }), p;
      } });
    } };
    function hr(e, n, t) {
      if (t.numFailures === 0)
        return n;
      if (n.type === "deleteRange")
        return null;
      var r = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
      return t.numFailures === r ? null : (n = C({}, n), F(n.keys) && (n.keys = n.keys.filter(function(i, o) {
        return !(o in t.failures);
      })), "values" in n && F(n.values) && (n.values = n.values.filter(function(i, o) {
        return !(o in t.failures);
      })), n);
    }
    function Pt(e, n) {
      return t = e, ((r = n).lower === void 0 || (r.lowerOpen ? 0 < R(t, r.lower) : 0 <= R(t, r.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? R(e, n.upper) < 0 : R(e, n.upper) <= 0));
      var t, r;
    }
    function dr(e, n, y, r, i, o) {
      if (!y || y.length === 0)
        return e;
      var a = n.query.index, u = a.multiEntry, f = n.query.range, c = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, y = y.reduce(function(l, d) {
        var v = l, h = d.type === "add" || d.type === "put" ? d.values.filter(function(w) {
          return w = p(w), u && F(w) ? w.some(function(_) {
            return Pt(_, f);
          }) : Pt(w, f);
        }).map(function(w) {
          return w = ve(w), o && Object.freeze(w), w;
        }) : [];
        switch (d.type) {
          case "add":
            v = l.concat(n.values ? h : h.map(function(_) {
              return c(_);
            }));
            break;
          case "put":
            var m = new G().addKeys(d.values.map(function(_) {
              return c(_);
            })), v = l.filter(function(_) {
              return _ = n.values ? c(_) : _, !qn(new G(_), m);
            }).concat(n.values ? h : h.map(function(_) {
              return c(_);
            }));
            break;
          case "delete":
            var g = new G().addKeys(d.keys);
            v = l.filter(function(_) {
              return _ = n.values ? c(_) : _, !qn(new G(_), g);
            });
            break;
          case "deleteRange":
            var b = d.range;
            v = l.filter(function(_) {
              return !Pt(c(_), b);
            });
        }
        return v;
      }, e);
      return y === e ? e : (y.sort(function(l, d) {
        return R(s(l), s(d)) || R(c(l), c(d));
      }), n.limit && n.limit < 1 / 0 && (y.length > n.limit ? y.length = n.limit : e.length === n.limit && y.length < n.limit && (i.dirty = !0)), o ? Object.freeze(y) : y);
    }
    function pr(e, n) {
      return R(e.lower, n.lower) === 0 && R(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
    }
    function ei(e, n) {
      return function(t, r, i, o) {
        if (t === void 0)
          return r !== void 0 ? -1 : 0;
        if (r === void 0)
          return 1;
        if ((r = R(t, r)) === 0) {
          if (i && o)
            return 0;
          if (i)
            return 1;
          if (o)
            return -1;
        }
        return r;
      }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(t, r, i, o) {
        if (t === void 0)
          return r !== void 0 ? 1 : 0;
        if (r === void 0)
          return -1;
        if ((r = R(t, r)) === 0) {
          if (i && o)
            return 0;
          if (i)
            return -1;
          if (o)
            return 1;
        }
        return r;
      }(e.upper, n.upper, e.upperOpen, n.upperOpen);
    }
    function ni(e, n, t, r) {
      e.subscribers.add(t), r.addEventListener("abort", function() {
        var i, o;
        e.subscribers.delete(t), e.subscribers.size === 0 && (i = e, o = n, setTimeout(function() {
          i.subscribers.size === 0 && Oe(o, i);
        }, 3e3));
      });
    }
    var ti = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
      var n = e.schema.name;
      return C(C({}, e), { transaction: function(t, r, i) {
        var o, a, u = e.transaction(t, r, i);
        return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(f) {
          return function() {
            if (o.abort(), r === "readwrite") {
              for (var c = /* @__PURE__ */ new Set(), p = 0, s = t; p < s.length; p++) {
                var y = s[p], l = Ae["idb://".concat(n, "/").concat(y)];
                if (l) {
                  var d = e.table(y), v = l.optimisticOps.filter(function(A) {
                    return A.trans === u;
                  });
                  if (u._explicit && f && u.mutatedParts)
                    for (var h = 0, m = Object.values(l.queries.query); h < m.length; h++)
                      for (var g = 0, b = (P = m[h]).slice(); g < b.length; g++)
                        gt((x = b[g]).obsSet, u.mutatedParts) && (Oe(P, x), x.subscribers.forEach(function(A) {
                          return c.add(A);
                        }));
                  else if (0 < v.length) {
                    l.optimisticOps = l.optimisticOps.filter(function(A) {
                      return A.trans !== u;
                    });
                    for (var w = 0, _ = Object.values(l.queries.query); w < _.length; w++)
                      for (var P, x, O, E = 0, k = (P = _[w]).slice(); E < k.length; E++)
                        (x = k[E]).res != null && u.mutatedParts && (f && !x.dirty ? (O = Object.isFrozen(x.res), O = dr(x.res, x.req, v, d, x, O), x.dirty ? (Oe(P, x), x.subscribers.forEach(function(A) {
                          return c.add(A);
                        })) : O !== x.res && (x.res = O, x.promise = S.resolve({ result: O }))) : (x.dirty && Oe(P, x), x.subscribers.forEach(function(A) {
                          return c.add(A);
                        })));
                  }
                }
              }
              c.forEach(function(A) {
                return A();
              });
            }
          };
        }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
      }, table: function(t) {
        var r = e.table(t), i = r.schema.primaryKey;
        return C(C({}, r), { mutate: function(o) {
          var a = K.trans;
          if (i.outbound || a.db._options.cache === "disabled" || a.explicit)
            return r.mutate(o);
          var u = Ae["idb://".concat(n, "/").concat(t)];
          return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || Ot(i, o).some(function(f) {
            return f == null;
          })) ? (u.optimisticOps.push(o), o.mutatedParts && Rn(o.mutatedParts), a.then(function(f) {
            0 < f.numFailures && (Oe(u.optimisticOps, o), (f = hr(0, o, f)) && u.optimisticOps.push(f), o.mutatedParts && Rn(o.mutatedParts));
          }), a.catch(function() {
            Oe(u.optimisticOps, o), o.mutatedParts && Rn(o.mutatedParts);
          })) : a.then(function(f) {
            var c = hr(0, C(C({}, o), { values: o.values.map(function(l, s) {
              var y, l = (y = i.keyPath) !== null && y !== void 0 && y.includes(".") ? ve(l) : C({}, l);
              return ee(l, i.keyPath, f.results[s]), l;
            }) }), f);
            u.optimisticOps.push(c), queueMicrotask(function() {
              return o.mutatedParts && Rn(o.mutatedParts);
            });
          }), a) : r.mutate(o);
        }, query: function(o) {
          if (!lr(K, r) || !fr("query", o))
            return r.query(o);
          var a = ((c = K.trans) === null || c === void 0 ? void 0 : c.db._options.cache) === "immutable", s = K, u = s.requery, f = s.signal, c = function(d, v, h, m) {
            var g = Ae["idb://".concat(d, "/").concat(v)];
            if (!g)
              return [];
            if (!(v = g.queries[h]))
              return [null, !1, g, null];
            var b = v[(m.query ? m.query.index.name : null) || ""];
            if (!b)
              return [null, !1, g, null];
            switch (h) {
              case "query":
                var w = b.find(function(_) {
                  return _.req.limit === m.limit && _.req.values === m.values && pr(_.req.query.range, m.query.range);
                });
                return w ? [w, !0, g, b] : [b.find(function(_) {
                  return ("limit" in _.req ? _.req.limit : 1 / 0) >= m.limit && (!m.values || _.req.values) && ei(_.req.query.range, m.query.range);
                }), !1, g, b];
              case "count":
                return w = b.find(function(_) {
                  return pr(_.req.query.range, m.query.range);
                }), [w, !!w, g, b];
            }
          }(n, t, "query", o), p = c[0], s = c[1], y = c[2], l = c[3];
          return p && s ? p.obsSet = o.obsSet : (s = r.query(o).then(function(d) {
            var v = d.result;
            if (p && (p.res = v), a) {
              for (var h = 0, m = v.length; h < m; ++h)
                Object.freeze(v[h]);
              Object.freeze(v);
            } else
              d.result = ve(v);
            return d;
          }).catch(function(d) {
            return l && p && Oe(l, p), Promise.reject(d);
          }), p = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(p) : (l = [p], (y = y || (Ae["idb://".concat(n, "/").concat(t)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ni(p, l, u, f), p.promise.then(function(d) {
            return { result: dr(d.result, o, y == null ? void 0 : y.optimisticOps, r, p, a) };
          });
        } });
      } });
    } };
    function Mn(e, n) {
      return new Proxy(e, { get: function(t, r, i) {
        return r === "db" ? n : Reflect.get(t, r, i);
      } });
    }
    var de = (W.prototype.version = function(e) {
      if (isNaN(e) || e < 0.1)
        throw new j.Type("Given version is not a positive number");
      if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened)
        throw new j.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, e);
      var n = this._versions, t = n.filter(function(r) {
        return r._cfg.version === e;
      })[0];
      return t || (t = new this.Version(e), n.push(t), n.sort(Wr), t.stores({}), this._state.autoSchema = !1, t);
    }, W.prototype._whenReady = function(e) {
      var n = this;
      return this.idbdb && (this._state.openComplete || K.letThrough || this._vip) ? e() : new S(function(t, r) {
        if (n._state.openComplete)
          return r(new j.DatabaseClosed(n._state.dbOpenError));
        if (!n._state.isBeingOpened) {
          if (!n._state.autoOpen)
            return void r(new j.DatabaseClosed());
          n.open().catch(M);
        }
        n._state.dbReadyPromise.then(t, r);
      }).then(e);
    }, W.prototype.use = function(e) {
      var n = e.stack, t = e.create, r = e.level, i = e.name;
      return i && this.unuse({ stack: n, name: i }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: t, level: r ?? 10, name: i }), e.sort(function(o, a) {
        return o.level - a.level;
      }), this;
    }, W.prototype.unuse = function(e) {
      var n = e.stack, t = e.name, r = e.create;
      return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(i) {
        return r ? i.create !== r : !!t && i.name !== t;
      })), this;
    }, W.prototype.open = function() {
      var e = this;
      return Ke(me, function() {
        return Qr(e);
      });
    }, W.prototype._close = function() {
      var e = this._state, n = Ve.indexOf(this);
      if (0 <= n && Ve.splice(n, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      e.isBeingOpened || (e.dbReadyPromise = new S(function(t) {
        e.dbReadyResolve = t;
      }), e.openCanceller = new S(function(t, r) {
        e.cancelOpen = r;
      }));
    }, W.prototype.close = function(t) {
      var n = (t === void 0 ? { disableAutoOpen: !0 } : t).disableAutoOpen, t = this._state;
      n ? (t.isBeingOpened && t.cancelOpen(new j.DatabaseClosed()), this._close(), t.autoOpen = !1, t.dbOpenError = new j.DatabaseClosed()) : (this._close(), t.autoOpen = this._options.autoOpen || t.isBeingOpened, t.openComplete = !1, t.dbOpenError = null);
    }, W.prototype.delete = function(e) {
      var n = this;
      e === void 0 && (e = { disableAutoOpen: !0 });
      var t = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
      return new S(function(i, o) {
        function a() {
          n.close(e);
          var u = n._deps.indexedDB.deleteDatabase(n.name);
          u.onsuccess = L(function() {
            var f, c, p;
            f = n._deps, c = n.name, p = f.indexedDB, f = f.IDBKeyRange, pt(p) || c === On || dt(p, f).delete(c).catch(M), i();
          }), u.onerror = ue(o), u.onblocked = n._fireOnBlocked;
        }
        if (t)
          throw new j.InvalidArgument("Invalid closeOptions argument to db.delete()");
        r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
      });
    }, W.prototype.backendDB = function() {
      return this.idbdb;
    }, W.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, W.prototype.hasBeenClosed = function() {
      var e = this._state.dbOpenError;
      return e && e.name === "DatabaseClosed";
    }, W.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, W.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(W.prototype, "tables", { get: function() {
      var e = this;
      return V(this._allTables).map(function(n) {
        return e._allTables[n];
      });
    }, enumerable: !1, configurable: !0 }), W.prototype.transaction = function() {
      var e = (function(n, t, r) {
        var i = arguments.length;
        if (i < 2)
          throw new j.InvalidArgument("Too few arguments");
        for (var o = new Array(i - 1); --i; )
          o[i - 1] = arguments[i];
        return r = o.pop(), [n, qt(o), r];
      }).apply(this, arguments);
      return this._transaction.apply(this, e);
    }, W.prototype._transaction = function(e, n, t) {
      var r = this, i = K.trans;
      i && i.db === this && e.indexOf("!") === -1 || (i = null);
      var o, a, u = e.indexOf("?") !== -1;
      e = e.replace("!", "").replace("?", "");
      try {
        if (a = n.map(function(c) {
          if (c = c instanceof r.Table ? c.name : c, typeof c != "string")
            throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return c;
        }), e == "r" || e === nt)
          o = nt;
        else {
          if (e != "rw" && e != tt)
            throw new j.InvalidArgument("Invalid transaction mode: " + e);
          o = tt;
        }
        if (i) {
          if (i.mode === nt && o === tt) {
            if (!u)
              throw new j.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            i = null;
          }
          i && a.forEach(function(c) {
            if (i && i.storeNames.indexOf(c) === -1) {
              if (!u)
                throw new j.SubTransaction("Table " + c + " not included in parent transaction.");
              i = null;
            }
          }), u && i && !i.active && (i = null);
        }
      } catch (c) {
        return i ? i._promise(null, function(p, s) {
          s(c);
        }) : z(c);
      }
      var f = (function c(p, s, y, l, d) {
        return S.resolve().then(function() {
          var v = K.transless || K, h = p._createTransaction(s, y, p._dbSchema, l);
          if (h.explicit = !0, v = { trans: h, transless: v }, l)
            h.idbtrans = l.idbtrans;
          else
            try {
              h.create(), h.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
            } catch (b) {
              return b.name === Wn.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return c(p, s, y, null, d);
              })) : z(b);
            }
          var m, g = zn(d);
          return g && Ue(), v = S.follow(function() {
            var b;
            (m = d.call(h, h)) && (g ? (b = be.bind(null, null), m.then(b, b)) : typeof m.next == "function" && typeof m.throw == "function" && (m = xt(m)));
          }, v), (m && typeof m.then == "function" ? S.resolve(m).then(function(b) {
            return h.active ? b : z(new j.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : v.then(function() {
            return m;
          })).then(function(b) {
            return l && h._resolve(), h._completion.then(function() {
              return b;
            });
          }).catch(function(b) {
            return h._reject(b), z(b);
          });
        });
      }).bind(null, this, o, a, i, t);
      return i ? i._promise(o, f, "lock") : K.trans ? Ke(K.transless, function() {
        return r._whenReady(f);
      }) : this._whenReady(f);
    }, W.prototype.table = function(e) {
      if (!Z(this._allTables, e))
        throw new j.InvalidTable("Table ".concat(e, " does not exist"));
      return this._allTables[e];
    }, W);
    function W(e, n) {
      var t = this;
      this._middlewares = {}, this.verno = 0;
      var r = W.dependencies;
      this._options = n = C({ addons: W.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, r = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var i, o, a, u, f, c = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: M, dbReadyPromise: null, cancelOpen: M, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
      c.dbReadyPromise = new S(function(s) {
        c.dbReadyResolve = s;
      }), c.openCanceller = new S(function(s, y) {
        c.cancelOpen = y;
      }), this._state = c, this.name = e, this.on = nn(this, "populate", "blocked", "versionchange", "close", { ready: [$n, M] }), this.on.ready.subscribe = Dt(this.on.ready.subscribe, function(s) {
        return function(y, l) {
          W.vip(function() {
            var d, v = t._state;
            v.openComplete ? (v.dbOpenError || S.resolve().then(y), l && s(y)) : v.onReadyBeingFired ? (v.onReadyBeingFired.push(y), l && s(y)) : (s(y), d = t, l || s(function h() {
              d.on.ready.unsubscribe(y), d.on.ready.unsubscribe(h);
            }));
          });
        };
      }), this.Collection = (i = this, tn(Fr.prototype, function(m, h) {
        this.db = i;
        var l = $t, d = null;
        if (h)
          try {
            l = h();
          } catch (g) {
            d = g;
          }
        var v = m._ctx, h = v.table, m = h.hook.reading.fire;
        this._ctx = { table: h, index: v.index, isPrimKey: !v.index || h.schema.primKey.keyPath && v.index === h.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: d, or: v.or, valueMapper: m !== Qe ? m : null };
      })), this.Table = (o = this, tn(Xt.prototype, function(s, y, l) {
        this.db = o, this._tx = l, this.name = s, this.schema = y, this.hook = o._allTables[s] ? o._allTables[s].hook : nn(null, { creating: [jr, M], reading: [Kr, Qe], updating: [Ar, M], deleting: [Cr, M] });
      })), this.Transaction = (a = this, tn(Lr.prototype, function(s, y, l, d, v) {
        var h = this;
        this.db = a, this.mode = s, this.storeNames = y, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = nn(this, "complete", "error", "abort"), this.parent = v || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new S(function(m, g) {
          h._resolve = m, h._reject = g;
        }), this._completion.then(function() {
          h.active = !1, h.on.complete.fire();
        }, function(m) {
          var g = h.active;
          return h.active = !1, h.on.error.fire(m), h.parent ? h.parent._reject(m) : g && h.idbtrans && h.idbtrans.abort(), z(m);
        });
      })), this.Version = (u = this, tn(Gr.prototype, function(s) {
        this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (f = this, tn(nr.prototype, function(s, y, l) {
        if (this.db = f, this._ctx = { table: s, index: y === ":id" ? null : y, or: l }, this._cmp = this._ascending = R, this._descending = function(d, v) {
          return R(v, d);
        }, this._max = function(d, v) {
          return 0 < R(d, v) ? d : v;
        }, this._min = function(d, v) {
          return R(d, v) < 0 ? d : v;
        }, this._IDBKeyRange = f._deps.IDBKeyRange, !this._IDBKeyRange)
          throw new j.MissingAPI();
      })), this.on("versionchange", function(s) {
        0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(t.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(t.name, "'. Closing db now to resume the delete request.")), t.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(s) {
        !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(t.name, "') was blocked")) : console.warn("Upgrade '".concat(t.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
      }), this._maxKey = un(n.IDBKeyRange), this._createTransaction = function(s, y, l, d) {
        return new t.Transaction(s, y, l, t._options.chromeTransactionDurability, d);
      }, this._fireOnBlocked = function(s) {
        t.on("blocked").fire(s), Ve.filter(function(y) {
          return y.name === t.name && y !== t && !y._state.vcFired;
        }).map(function(y) {
          return y.on("versionchange").fire(s);
        });
      }, this.use(Jr), this.use(ti), this.use(Zr), this.use(Xr), this.use(Hr);
      var p = new Proxy(this, { get: function(s, y, l) {
        if (y === "_vip")
          return !0;
        if (y === "table")
          return function(v) {
            return Mn(t.table(v), p);
          };
        var d = Reflect.get(s, y, l);
        return d instanceof Xt ? Mn(d, p) : y === "tables" ? d.map(function(v) {
          return Mn(v, p);
        }) : y === "_createTransaction" ? function() {
          return Mn(d.apply(this, arguments), p);
        } : d;
      } });
      this.vip = p, r.forEach(function(s) {
        return s(t);
      });
    }
    var Nn, te = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ri = (Et.prototype.subscribe = function(e, n, t) {
      return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: t });
    }, Et.prototype[te] = function() {
      return this;
    }, Et);
    function Et(e) {
      this._subscribe = e;
    }
    try {
      Nn = { indexedDB: U.indexedDB || U.mozIndexedDB || U.webkitIndexedDB || U.msIndexedDB, IDBKeyRange: U.IDBKeyRange || U.webkitIDBKeyRange };
    } catch {
      Nn = { indexedDB: null, IDBKeyRange: null };
    }
    function yr(e) {
      var n, t = !1, r = new ri(function(i) {
        var o = zn(e), a, u = !1, f = {}, c = {}, p = { get closed() {
          return u;
        }, unsubscribe: function() {
          u || (u = !0, a && a.abort(), s && xe.storagemutated.unsubscribe(l));
        } };
        i.start && i.start(p);
        var s = !1, y = function() {
          return et(d);
        }, l = function(v) {
          Bn(f, v), gt(c, f) && y();
        }, d = function() {
          var v, h, m;
          !u && Nn.indexedDB && (f = {}, v = {}, a && a.abort(), a = new AbortController(), m = function(g) {
            var b = Ne();
            try {
              o && Ue();
              var w = ge(e, g);
              return w = o ? w.finally(be) : w;
            } finally {
              b && Le();
            }
          }(h = { subscr: v, signal: a.signal, requery: y, querier: e, trans: null }), Promise.resolve(m).then(function(g) {
            t = !0, n = g, u || h.signal.aborted || (f = {}, function(b) {
              for (var w in b)
                if (Z(b, w))
                  return;
              return 1;
            }(c = v) || s || (xe(an, l), s = !0), et(function() {
              return !u && i.next && i.next(g);
            }));
          }, function(g) {
            t = !1, ["DatabaseClosedError", "AbortError"].includes(g == null ? void 0 : g.name) || u || et(function() {
              u || i.error && i.error(g);
            });
          }));
        };
        return setTimeout(y, 0), p;
      });
      return r.hasValue = function() {
        return t;
      }, r.getValue = function() {
        return n;
      }, r;
    }
    var De = de;
    function St(e) {
      var n = ke;
      try {
        ke = !0, xe.storagemutated.fire(e), _t(e, !0);
      } finally {
        ke = n;
      }
    }
    qe(De, C(C({}, yn), { delete: function(e) {
      return new De(e, { addons: [] }).delete();
    }, exists: function(e) {
      return new De(e, { addons: [] }).open().then(function(n) {
        return n.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(e) {
      try {
        return n = De.dependencies, t = n.indexedDB, n = n.IDBKeyRange, (pt(t) ? Promise.resolve(t.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== On;
          });
        }) : dt(t, n).toCollection().primaryKeys()).then(e);
      } catch {
        return z(new j.MissingAPI());
      }
      var n, t;
    }, defineClass: function() {
      return function(e) {
        H(this, e);
      };
    }, ignoreTransaction: function(e) {
      return K.trans ? Ke(K.transless, e) : e();
    }, vip: yt, async: function(e) {
      return function() {
        try {
          var n = xt(e.apply(this, arguments));
          return n && typeof n.then == "function" ? n : S.resolve(n);
        } catch (t) {
          return z(t);
        }
      };
    }, spawn: function(e, n, t) {
      try {
        var r = xt(e.apply(t, n || []));
        return r && typeof r.then == "function" ? r : S.resolve(r);
      } catch (i) {
        return z(i);
      }
    }, currentTransaction: { get: function() {
      return K.trans || null;
    } }, waitFor: function(e, n) {
      return n = S.resolve(typeof e == "function" ? De.ignoreTransaction(e) : e).timeout(n || 6e4), K.trans ? K.trans.waitFor(n) : n;
    }, Promise: S, debug: { get: function() {
      return ae;
    }, set: function(e) {
      Mt(e);
    } }, derive: Be, extend: H, props: qe, override: Dt, Events: nn, on: xe, liveQuery: yr, extendObservabilitySet: Bn, getByKeyPath: ce, setByKeyPath: ee, delByKeyPath: function(e, n) {
      typeof n == "string" ? ee(e, n, void 0) : "length" in n && [].map.call(n, function(t) {
        ee(e, t, void 0);
      });
    }, shallowClone: It, deepClone: ve, getObjectDiff: kt, cmp: R, asap: Tt, minKey: -1 / 0, addons: [], connections: Ve, errnames: Wn, dependencies: Nn, cache: Ae, semVer: "4.0.7", version: "4.0.7".split(".").map(function(e) {
      return parseInt(e);
    }).reduce(function(e, n, t) {
      return e + n / Math.pow(10, 2 * t);
    }) })), De.maxKey = un(De.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(an, function(e) {
      ke || (e = new CustomEvent(at, { detail: e }), ke = !0, dispatchEvent(e), ke = !1);
    }), addEventListener(at, function(e) {
      e = e.detail, ke || St(e);
    }));
    var $e, ke = !1, vr = function() {
    };
    return typeof BroadcastChannel < "u" && ((vr = function() {
      ($e = new BroadcastChannel(at)).onmessage = function(e) {
        return e.data && St(e.data);
      };
    })(), typeof $e.unref == "function" && $e.unref(), xe(an, function(e) {
      ke || $e.postMessage(e);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
      if (!de.disableBfCache && e.persisted) {
        ae && console.debug("Dexie: handling persisted pagehide"), $e != null && $e.close();
        for (var n = 0, t = Ve; n < t.length; n++)
          t[n].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(e) {
      !de.disableBfCache && e.persisted && (ae && console.debug("Dexie: handling persisted pageshow"), vr(), St({ all: new G(-1 / 0, [[]]) }));
    })), S.rejectionMapper = function(e, n) {
      return !e || e instanceof Fe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Ft[e.name] ? e : (n = new Ft[e.name](n || e.message, e), "stack" in e && ye(n, "stack", { get: function() {
        return this.inner.stack;
      } }), n);
    }, Mt(ae), C(de, Object.freeze({ __proto__: null, Dexie: de, liveQuery: yr, Entity: Yt, cmp: R, PropModSymbol: he, PropModification: rn, replacePrefix: function(e, n) {
      return new rn({ replacePrefix: [e, n] });
    }, add: function(e) {
      return new rn({ add: e });
    }, remove: function(e) {
      return new rn({ remove: e });
    }, default: de, RangeSet: G, mergeRanges: ln, rangesOverlap: qn }), { default: de }), de;
  });
})(wr);
var fi = wr.exports;
const jt = /* @__PURE__ */ li(fi), gr = Symbol.for("Dexie"), Ct = globalThis[gr] || (globalThis[gr] = jt);
if (jt.semVer !== Ct.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${jt.semVer} and ${Ct.semVer}`);
const hi = ["src", "alt", "object-fit"], br = /* @__PURE__ */ Object.assign({
  name: "ImgCache"
}, {
  __name: "ImgCache",
  props: {
    src: {
      type: String,
      required: !0
    },
    fit: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: {}
    }
  },
  setup(re) {
    const fn = new Ct("ImageCacheDB");
    fn.version(1).stores({
      images: "url, data"
    });
    const pe = re, C = ii(""), Ie = async (U) => {
      const V = await fn.images.get(U);
      if (V) {
        C.value = V.data;
        return;
      }
      try {
        const F = await fetch(U);
        if (!F.ok)
          throw new Error("Network response was not ok");
        const H = await F.blob(), oe = new FileReader();
        oe.onloadend = () => {
          const hn = oe.result;
          C.value = hn, fn.images.put({ url: U, data: hn });
        }, oe.readAsDataURL(H);
      } catch (F) {
        console.error("Failed to load image:", F);
      }
    };
    return oi(() => {
      Ie(pe.src);
    }), ai(() => {
      C.value = "";
    }), (U, V) => (ui(), si("img", {
      src: C.value,
      alt: pe.alt,
      "object-fit": pe.fit,
      style: ci(pe.style)
    }, null, 12, hi));
  }
}), pi = {
  install: (re) => {
    re.component(br.name, br);
  }
};
export {
  pi as default
};
