/* eslint-disable */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("crypto")) : "function" == typeof define && define.amd ? define(["exports", "crypto"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).tf = e.tf || {}, e.require$$0)
}(this, (function(e, t) {
    "use strict";
    function n(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var r = n(t)
      , a = function(e, t) {
        return (a = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function i(e, t) {
        function n() {
            this.constructor = e
        }
        a(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    function o(e, t, n, r) {
        return new (n || (n = Promise))((function(a, i) {
            function o(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, s)
            }
            u((r = r.apply(e, t || [])).next())
        }
        ))
    }
    function s(e, t) {
        var n, r, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function s(i) {
            return function(s) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (n = 1,
                            r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                            0) : r.next) && !(a = a.call(r, i[1])).done)
                                return a;
                            switch (r = 0,
                            a && (i = [2 & i[0], a.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!(a = o.trys,
                                (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1],
                                    a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2],
                                    o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            i = t.call(e, o)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = a = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
    function u(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function l(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, a, i = n.call(e), o = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                o.push(r.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (a)
                    throw a.error
            }
        }
        return o
    }
    function c() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(l(arguments[t]));
        return e
    }
    var h = function() {
        function e(e, t) {
            this.backend = e,
            this.dataMover = t,
            this.data = new WeakMap,
            this.dataIdsCount = 0
        }
        return e.prototype.get = function(e) {
            return this.data.has(e) || this.dataMover.moveData(this.backend, e),
            this.data.get(e)
        }
        ,
        e.prototype.set = function(e, t) {
            this.dataIdsCount++,
            this.data.set(e, t)
        }
        ,
        e.prototype.has = function(e) {
            return this.data.has(e)
        }
        ,
        e.prototype.delete = function(e) {
            return this.dataIdsCount--,
            this.data.delete(e)
        }
        ,
        e.prototype.numDataIds = function() {
            return this.dataIdsCount
        }
        ,
        e
    }()
      , f = function() {
        function e() {}
        return e.prototype.refCount = function(e) {
            return d("refCount")
        }
        ,
        e.prototype.incRef = function(e) {
            return d("incRef")
        }
        ,
        e.prototype.timerAvailable = function() {
            return !0
        }
        ,
        e.prototype.time = function(e) {
            return d("time")
        }
        ,
        e.prototype.read = function(e) {
            return d("read")
        }
        ,
        e.prototype.readSync = function(e) {
            return d("readSync")
        }
        ,
        e.prototype.readToGPU = function(e, t) {
            return d("readToGPU")
        }
        ,
        e.prototype.numDataIds = function() {
            return d("numDataIds")
        }
        ,
        e.prototype.disposeData = function(e, t) {
            return d("disposeData")
        }
        ,
        e.prototype.write = function(e, t, n) {
            return d("write")
        }
        ,
        e.prototype.move = function(e, t, n, r, a) {
            return d("move")
        }
        ,
        e.prototype.memory = function() {
            return d("memory")
        }
        ,
        e.prototype.floatPrecision = function() {
            return d("floatPrecision")
        }
        ,
        e.prototype.epsilon = function() {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4
        }
        ,
        e.prototype.dispose = function() {
            return d("dispose")
        }
        ,
        e
    }();
    function d(e) {
        throw new Error("'" + e + "' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen")
    }
    function p(e) {
        for (var t = e.length, n = 0; t > 0; )
            n = Math.random() * t | 0,
            g(e, --t, n)
    }
    function v(e, t, n) {
        return Math.max(e, Math.min(t, n))
    }
    function g(e, t, n) {
        var r = e[t];
        e[t] = e[n],
        e[n] = r
    }
    function m(e, t) {
        if (!e)
            throw new Error("string" == typeof t ? t : t())
    }
    function y(e, t, n) {
        void 0 === n && (n = ""),
        m(x(e, t), (function() {
            return n + " Shapes " + e + " and " + t + " must match"
        }
        ))
    }
    function b(e) {
        m(null != e, (function() {
            return "The input to the tensor constructor must be a non-null value."
        }
        ))
    }
    function w(e, t, n) {
        if (void 0 === t && (t = []),
        void 0 === n && (n = !1),
        null == t && (t = []),
        Array.isArray(e) || D(e) && !n)
            for (var r = 0; r < e.length; ++r)
                w(e[r], t, n);
        else
            t.push(e);
        return t
    }
    function k(e) {
        if (0 === e.length)
            return 1;
        for (var t = e[0], n = 1; n < e.length; n++)
            t *= e[n];
        return t
    }
    function x(e, t) {
        if (e === t)
            return !0;
        if (null == e || null == t)
            return !1;
        if (e.length !== t.length)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function E(e) {
        return e % 1 == 0
    }
    function S(e, t) {
        return t <= e.length ? e : e + " ".repeat(t - e.length)
    }
    function A(e, t) {
        var n = t.length;
        return m((e = null == e ? t.map((function(e, t) {
            return t
        }
        )) : [].concat(e)).every((function(e) {
            return e >= -n && e < n
        }
        )), (function() {
            return "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + e
        }
        )),
        m(e.every((function(e) {
            return E(e)
        }
        )), (function() {
            return "All values in axis param must be integers but got axis " + e
        }
        )),
        e.map((function(e) {
            return e < 0 ? n + e : e
        }
        ))
    }
    function _(e, t) {
        for (var n = [], r = [], a = null != t && Array.isArray(t) && 0 === t.length, i = null == t || a ? null : A(t, e).sort(), o = 0, s = 0; s < e.length; ++s) {
            if (null != i) {
                if (i[o] === s && 1 !== e[s])
                    throw new Error("Can't squeeze axis " + s + " since its dim '" + e[s] + "' is not 1");
                (null == i[o] || i[o] > s) && 1 === e[s] && (n.push(e[s]),
                r.push(s)),
                i[o] <= s && o++
            }
            1 !== e[s] && (n.push(e[s]),
            r.push(s))
        }
        return {
            newShape: n,
            keptDims: r
        }
    }
    function I(e, t) {
        var n = null;
        if (null == e || "float32" === e)
            n = new Float32Array(t);
        else if ("int32" === e)
            n = new Int32Array(t);
        else {
            if ("bool" !== e)
                throw new Error("Unknown data type " + e);
            n = new Uint8Array(t)
        }
        return n
    }
    function M(e, t) {
        var n = null;
        if (null == e || "float32" === e)
            n = new Float32Array(t);
        else if ("int32" === e)
            n = new Int32Array(t);
        else if ("bool" === e)
            n = new Uint8Array(t);
        else {
            if ("string" !== e)
                throw new Error("Unknown data type " + e);
            n = new Array(t)
        }
        return n
    }
    function N(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (isNaN(r) || !isFinite(r))
                throw Error("A tensor of type " + t + " being uploaded contains " + r + ".")
        }
    }
    function T(e) {
        return "bool" === e || "complex64" === e || "float32" === e || "int32" === e || "string" === e
    }
    function D(e) {
        return e instanceof Float32Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray
    }
    function R(e) {
        if ("float32" === e || "int32" === e)
            return 4;
        if ("complex64" === e)
            return 8;
        if ("bool" === e)
            return 1;
        throw new Error("Unknown dtype " + e)
    }
    function B(e) {
        if (null == e)
            return 0;
        var t = 0;
        return e.forEach((function(e) {
            return t += e.length
        }
        )),
        t
    }
    function F(e) {
        return "string" == typeof e || e instanceof String
    }
    function C(e) {
        return "boolean" == typeof e
    }
    function P(e) {
        return "number" == typeof e
    }
    function O(e) {
        return Array.isArray(e) ? O(e[0]) : e instanceof Float32Array ? "float32" : e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray ? "int32" : P(e) ? "float32" : F(e) ? "string" : C(e) ? "bool" : "float32"
    }
    function L(e) {
        return !!(e && e.constructor && e.call && e.apply)
    }
    function z(e, t) {
        for (var n = t; n < e; ++n)
            if (e % n == 0)
                return n;
        return e
    }
    function q(e) {
        var t = e.length;
        if (t < 2)
            return [];
        var n = new Array(t - 1);
        n[t - 2] = e[t - 1];
        for (var r = t - 3; r >= 0; --r)
            n[r] = n[r + 1] * e[r + 1];
        return n
    }
    function K(e, t, n, r) {
        void 0 === r && (r = !1);
        var a = new Array;
        if (1 === t.length)
            for (var i = t[0] * (r ? 2 : 1), o = 0; o < i; o++)
                a[o] = n[e + o];
        else {
            i = t[0];
            var s = t.slice(1)
              , u = s.reduce((function(e, t) {
                return e * t
            }
            )) * (r ? 2 : 1);
            for (o = 0; o < i; o++)
                a[o] = K(e + o * u, s, n, r)
        }
        return a
    }
    function W(e, t, n) {
        if (void 0 === n && (n = !1),
        0 === e.length)
            return t[0];
        var r = e.reduce((function(e, t) {
            return e * t
        }
        )) * (n ? 2 : 1);
        if (0 === r)
            return [];
        if (r !== t.length)
            throw new Error("[" + e + "] does not match the input size " + t.length + (n ? " for a complex tensor" : "") + ".");
        return K(0, e, t, n)
    }
    function G(e, t) {
        for (var n = U(e, t), r = 0; r < n.length; r++)
            n[r] = 1;
        return n
    }
    function U(e, t) {
        if (null == t || "float32" === t || "complex64" === t)
            return new Float32Array(e);
        if ("int32" === t)
            return new Int32Array(e);
        if ("bool" === t)
            return new Uint8Array(e);
        throw new Error("Unknown data type " + t)
    }
    function V(e) {
        e.forEach((function(t) {
            m(Number.isInteger(t) && t >= 0, (function() {
                return "Tensor must have a shape comprised of positive integers but got shape [" + e + "]."
            }
            ))
        }
        ))
    }
    function H(e) {
        return e && e.then && "function" == typeof e.then
    }
    var j, J = "tfjsflags", Z = function() {
        function e(e) {
            this.global = e,
            this.flags = {},
            this.flagRegistry = {},
            this.urlFlags = {},
            this.getQueryParams = Y,
            this.populateURLFlags()
        }
        return e.prototype.setPlatform = function(e, t) {
            null != this.platform && ($().getBool("IS_TEST") || $().getBool("PROD") || console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + t + ".")),
            this.platformName = e,
            this.platform = t
        }
        ,
        e.prototype.registerFlag = function(e, t, n) {
            if (this.flagRegistry[e] = {
                evaluationFn: t,
                setHook: n
            },
            null != this.urlFlags[e]) {
                var r = this.urlFlags[e];
                $().getBool("IS_TEST") || $().getBool("PROD") || console.warn("Setting feature override from URL " + e + ": " + r + "."),
                this.set(e, r)
            }
        }
        ,
        e.prototype.getAsync = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n;
                return s(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e in this.flags ? [2, this.flags[e]] : (t = this.flags,
                        n = e,
                        [4, this.evaluateFlag(e)]);
                    case 1:
                        return t[n] = r.sent(),
                        [2, this.flags[e]]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.get = function(e) {
            if (e in this.flags)
                return this.flags[e];
            var t = this.evaluateFlag(e);
            if (H(t))
                throw new Error("Flag " + e + " cannot be synchronously evaluated. Please use getAsync() instead.");
            return this.flags[e] = t,
            this.flags[e]
        }
        ,
        e.prototype.getNumber = function(e) {
            return this.get(e)
        }
        ,
        e.prototype.getBool = function(e) {
            return this.get(e)
        }
        ,
        e.prototype.getFlags = function() {
            return this.flags
        }
        ,
        Object.defineProperty(e.prototype, "features", {
            get: function() {
                return this.flags
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.set = function(e, t) {
            if (null == this.flagRegistry[e])
                throw new Error("Cannot set flag " + e + " as it has not been registered.");
            this.flags[e] = t,
            null != this.flagRegistry[e].setHook && this.flagRegistry[e].setHook(t)
        }
        ,
        e.prototype.evaluateFlag = function(e) {
            if (null == this.flagRegistry[e])
                throw new Error("Cannot evaluate flag '" + e + "': no evaluation function found.");
            return this.flagRegistry[e].evaluationFn()
        }
        ,
        e.prototype.setFlags = function(e) {
            this.flags = Object.assign({}, e)
        }
        ,
        e.prototype.reset = function() {
            this.flags = {},
            this.urlFlags = {},
            this.populateURLFlags()
        }
        ,
        e.prototype.populateURLFlags = function() {
            var e = this;
            if ("undefined" != typeof this.global && "undefined" != typeof this.global.location && "undefined" != typeof this.global.location.search) {
                var t = this.getQueryParams(this.global.location.search);
                if (J in t)
                    t.tfjsflags.split(",").forEach((function(t) {
                        var n = l(t.split(":"), 2)
                          , r = n[0]
                          , a = n[1];
                        e.urlFlags[r] = function(e, t) {
                            if ("true" === (t = t.toLowerCase()) || "false" === t)
                                return "true" === t;
                            if ("" + +t === t)
                                return +t;
                            throw new Error("Could not parse value flag value " + t + " for flag " + e + ".")
                        }(r, a)
                    }
                    ))
            }
        }
        ,
        e
    }();
    function Y(e) {
        var t = {};
        return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (function(e) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            return X(t, n[0], n[1]),
            n.join("=")
        }
        )),
        t
    }
    function X(e, t, n) {
        e[decodeURIComponent(t)] = decodeURIComponent(n || "")
    }
    function $() {
        return e.ENV
    }
    function Q() {
        if (null == j) {
            var e = void 0;
            if ("undefined" != typeof window)
                e = window;
            else if ("undefined" != typeof global)
                e = global;
            else if ("undefined" != typeof process)
                e = process;
            else {
                if ("undefined" == typeof self)
                    throw new Error("Could not find a global object");
                e = self
            }
            j = e
        }
        return j
    }
    function ee(e, t) {
        var n, r = (null == (n = Q())._tfGlobals && (n._tfGlobals = new Map),
        n._tfGlobals);
        if (r.has(e))
            return r.get(e);
        var a = t();
        return r.set(e, a),
        r.get(e)
    }
    e.ENV = null;
    var te = "Acos"
      , ne = "Acosh"
      , re = "Add"
      , ae = "AddN"
      , ie = "ArgMax"
      , oe = "ArgMin"
      , se = "Asin"
      , ue = "Asinh"
      , le = "Atan"
      , ce = "Atanh"
      , he = "Atan2"
      , fe = "AvgPool"
      , de = "AvgPool3D"
      , pe = "BatchMatMul"
      , ve = "BatchToSpaceND"
      , ge = "Bincount"
      , me = "BroadcastArgs"
      , ye = "Cast"
      , be = "Ceil"
      , we = "ClipByValue"
      , ke = "Complex"
      , xe = "ComplexAbs"
      , Ee = "Concat"
      , Se = "Conv2D"
      , Ae = "Conv2DBackpropFilter"
      , _e = "Conv2DBackpropInput"
      , Ie = "Conv3D"
      , Me = "Conv3DBackpropInputV2"
      , Ne = "Cosh"
      , Te = "Cumsum"
      , De = "CropAndResize"
      , Re = "DenseBincount"
      , Be = "DepthToSpace"
      , Fe = "DepthwiseConv2dNative"
      , Ce = "DepthwiseConv2dNativeBackpropFilter"
      , Pe = "DepthwiseConv2dNativeBackpropInput"
      , Oe = "Diag"
      , Le = "Dilation2D"
      , ze = "RealDiv"
      , qe = "Einsum"
      , Ke = "Equal"
      , We = "ExpandDims"
      , Ge = "Expm1"
      , Ue = "Fill"
      , Ve = "FlipLeftRight"
      , He = "Floor"
      , je = "FloorDiv"
      , Je = "FusedBatchNorm"
      , Ze = "GatherV2"
      , Ye = "GatherNd"
      , Xe = "Greater"
      , $e = "GreaterEqual"
      , Qe = "Identity"
      , et = "IFFT"
      , tt = "Imag"
      , nt = "IsFinite"
      , rt = "IsInf"
      , at = "IsNan"
      , it = "LeakyRelu"
      , ot = "Less"
      , st = "LessEqual"
      , ut = "LinSpace"
      , lt = "Log1p"
      , ct = "LogicalAnd"
      , ht = "LogicalNot"
      , ft = "LogicalOr"
      , dt = "Maximum"
      , pt = "MaxPool"
      , vt = "MaxPool3D"
      , gt = "MaxPoolWithArgmax"
      , mt = "Mean"
      , yt = "Minimum"
      , bt = "MirrorPad"
      , wt = "Multinomial"
      , kt = "Multiply"
      , xt = "NotEqual"
      , Et = "NonMaxSuppressionV3"
      , St = "NonMaxSuppressionV4"
      , At = "NonMaxSuppressionV5"
      , _t = "OnesLike"
      , It = "OneHot"
      , Mt = "Pack"
      , Nt = "PadV2"
      , Tt = "Prelu"
      , Dt = "Prod"
      , Rt = "Range"
      , Bt = "Real"
      , Ft = "Reciprocal"
      , Ct = "Relu"
      , Pt = "Reshape"
      , Ot = "ResizeNearestNeighbor"
      , Lt = "ResizeBilinear"
      , zt = "Relu6"
      , qt = "Reverse"
      , Kt = "Round"
      , Wt = "Rsqrt"
      , Gt = "ScatterNd"
      , Ut = "Select"
      , Vt = "Selu"
      , Ht = "Slice"
      , jt = "Sinh"
      , Jt = "Sign"
      , Zt = "Sigmoid"
      , Yt = "Softplus"
      , Xt = "Sqrt"
      , $t = "SpaceToBatchND"
      , Qt = "SplitV"
      , en = "Softmax"
      , tn = "SparseFillEmptyRows"
      , nn = "SparseReshape"
      , rn = "SparseSegmentMean"
      , an = "SparseSegmentSum"
      , on = "SparseToDense"
      , sn = "SquaredDifference"
      , un = "StridedSlice"
      , ln = "StringNGrams"
      , cn = "StringSplit"
      , hn = "StringToHashBucketFast"
      , fn = "Tanh"
      , dn = "Tile"
      , pn = "TopK"
      , vn = "Transform"
      , gn = "Transpose"
      , mn = "Unique"
      , yn = "Unpack"
      , bn = "UnsortedSegmentSum"
      , wn = "ZerosLike"
      , kn = "Step"
      , xn = "FromPixels"
      , En = "RotateWithOffset"
      , Sn = "_FusedMatMul"
      , An = "FusedConv2D"
      , _n = "FusedDepthwiseConv2D";
    function In() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        $().getBool("IS_TEST") || $().getBool("PROD") || console.warn.apply(console, c(e))
    }
    var Mn = ee("kernelRegistry", (function() {
        return new Map
    }
    ))
      , Nn = ee("gradRegistry", (function() {
        return new Map
    }
    ));
    function Tn(e, t) {
        var n = Fn(e, t);
        return Mn.get(n)
    }
    function Dn(e) {
        return Nn.get(e)
    }
    function Rn(e) {
        for (var t = Mn.entries(), n = []; ; ) {
            var r = t.next()
              , a = r.done
              , i = r.value;
            if (a)
                break;
            var o = l(i, 2)
              , s = o[0]
              , u = o[1];
            l(s.split("_"), 1)[0] === e && n.push(u)
        }
        return n
    }
    function Bn(e) {
        var t = e.kernelName
          , n = e.backendName
          , r = Fn(t, n);
        Mn.has(r) && In("The kernel '" + t + "' for backend '" + n + "' is already registered"),
        Mn.set(r, e)
    }
    function Fn(e, t) {
        return t + "_" + e
    }
    var Cn = On
      , Pn = null;
    try {
        Pn = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])),{}).exports
    } catch (e) {}
    function On(e, t, n) {
        this.low = 0 | e,
        this.high = 0 | t,
        this.unsigned = !!n
    }
    function Ln(e) {
        return !0 === (e && e.__isLong__)
    }
    On.prototype.__isLong__,
    Object.defineProperty(On.prototype, "__isLong__", {
        value: !0
    }),
    On.isLong = Ln;
    var zn = {}
      , qn = {};
    function Kn(e, t) {
        var n, r, a;
        return t ? (a = 0 <= (e >>>= 0) && e < 256) && (r = qn[e]) ? r : (n = Gn(e, (0 | e) < 0 ? -1 : 0, !0),
        a && (qn[e] = n),
        n) : (a = -128 <= (e |= 0) && e < 128) && (r = zn[e]) ? r : (n = Gn(e, e < 0 ? -1 : 0, !1),
        a && (zn[e] = n),
        n)
    }
    function Wn(e, t) {
        if (isNaN(e))
            return t ? $n : Xn;
        if (t) {
            if (e < 0)
                return $n;
            if (e >= Jn)
                return rr
        } else {
            if (e <= -Zn)
                return ar;
            if (e + 1 >= Zn)
                return nr
        }
        return e < 0 ? Wn(-e, t).neg() : Gn(e % jn | 0, e / jn | 0, t)
    }
    function Gn(e, t, n) {
        return new On(e,t,n)
    }
    On.fromInt = Kn,
    On.fromNumber = Wn,
    On.fromBits = Gn;
    var Un = Math.pow;
    function Vn(e, t, n) {
        if (0 === e.length)
            throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e)
            return Xn;
        if ("number" == typeof t ? (n = t,
        t = !1) : t = !!t,
        (n = n || 10) < 2 || 36 < n)
            throw RangeError("radix");
        var r;
        if ((r = e.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (0 === r)
            return Vn(e.substring(1), t, n).neg();
        for (var a = Wn(Un(n, 8)), i = Xn, o = 0; o < e.length; o += 8) {
            var s = Math.min(8, e.length - o)
              , u = parseInt(e.substring(o, o + s), n);
            if (s < 8) {
                var l = Wn(Un(n, s));
                i = i.mul(l).add(Wn(u))
            } else
                i = (i = i.mul(a)).add(Wn(u))
        }
        return i.unsigned = t,
        i
    }
    function Hn(e, t) {
        return "number" == typeof e ? Wn(e, t) : "string" == typeof e ? Vn(e, t) : Gn(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
    }
    On.fromString = Vn,
    On.fromValue = Hn;
    var jn = 4294967296
      , Jn = jn * jn
      , Zn = Jn / 2
      , Yn = Kn(1 << 24)
      , Xn = Kn(0);
    On.ZERO = Xn;
    var $n = Kn(0, !0);
    On.UZERO = $n;
    var Qn = Kn(1);
    On.ONE = Qn;
    var er = Kn(1, !0);
    On.UONE = er;
    var tr = Kn(-1);
    On.NEG_ONE = tr;
    var nr = Gn(-1, 2147483647, !1);
    On.MAX_VALUE = nr;
    var rr = Gn(-1, -1, !0);
    On.MAX_UNSIGNED_VALUE = rr;
    var ar = Gn(0, -2147483648, !1);
    On.MIN_VALUE = ar;
    var ir = On.prototype;
    ir.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ,
    ir.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * jn + (this.low >>> 0) : this.high * jn + (this.low >>> 0)
    }
    ,
    ir.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e)
            throw RangeError("radix");
        if (this.isZero())
            return "0";
        if (this.isNegative()) {
            if (this.eq(ar)) {
                var t = Wn(e)
                  , n = this.div(t)
                  , r = n.mul(t).sub(this);
                return n.toString(e) + r.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        for (var a = Wn(Un(e, 6), this.unsigned), i = this, o = ""; ; ) {
            var s = i.div(a)
              , u = (i.sub(s.mul(a)).toInt() >>> 0).toString(e);
            if ((i = s).isZero())
                return u + o;
            for (; u.length < 6; )
                u = "0" + u;
            o = "" + u + o
        }
    }
    ,
    ir.getHighBits = function() {
        return this.high
    }
    ,
    ir.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ,
    ir.getLowBits = function() {
        return this.low
    }
    ,
    ir.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ,
    ir.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.eq(ar) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--)
            ;
        return 0 != this.high ? t + 33 : t + 1
    }
    ,
    ir.isZero = function() {
        return 0 === this.high && 0 === this.low
    }
    ,
    ir.eqz = ir.isZero,
    ir.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ,
    ir.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ,
    ir.isOdd = function() {
        return 1 == (1 & this.low)
    }
    ,
    ir.isEven = function() {
        return 0 == (1 & this.low)
    }
    ,
    ir.equals = function(e) {
        return Ln(e) || (e = Hn(e)),
        (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
    }
    ,
    ir.eq = ir.equals,
    ir.notEquals = function(e) {
        return !this.eq(e)
    }
    ,
    ir.neq = ir.notEquals,
    ir.ne = ir.notEquals,
    ir.lessThan = function(e) {
        return this.comp(e) < 0
    }
    ,
    ir.lt = ir.lessThan,
    ir.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0
    }
    ,
    ir.lte = ir.lessThanOrEqual,
    ir.le = ir.lessThanOrEqual,
    ir.greaterThan = function(e) {
        return this.comp(e) > 0
    }
    ,
    ir.gt = ir.greaterThan,
    ir.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0
    }
    ,
    ir.gte = ir.greaterThanOrEqual,
    ir.ge = ir.greaterThanOrEqual,
    ir.compare = function(e) {
        if (Ln(e) || (e = Hn(e)),
        this.eq(e))
            return 0;
        var t = this.isNegative()
          , n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }
    ,
    ir.comp = ir.compare,
    ir.negate = function() {
        return !this.unsigned && this.eq(ar) ? ar : this.not().add(Qn)
    }
    ,
    ir.neg = ir.negate,
    ir.add = function(e) {
        Ln(e) || (e = Hn(e));
        var t = this.high >>> 16
          , n = 65535 & this.high
          , r = this.low >>> 16
          , a = 65535 & this.low
          , i = e.high >>> 16
          , o = 65535 & e.high
          , s = e.low >>> 16
          , u = 0
          , l = 0
          , c = 0
          , h = 0;
        return c += (h += a + (65535 & e.low)) >>> 16,
        l += (c += r + s) >>> 16,
        u += (l += n + o) >>> 16,
        u += t + i,
        Gn((c &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (l &= 65535), this.unsigned)
    }
    ,
    ir.subtract = function(e) {
        return Ln(e) || (e = Hn(e)),
        this.add(e.neg())
    }
    ,
    ir.sub = ir.subtract,
    ir.multiply = function(e) {
        if (this.isZero())
            return Xn;
        if (Ln(e) || (e = Hn(e)),
        Pn)
            return Gn(Pn.mul(this.low, this.high, e.low, e.high), Pn.get_high(), this.unsigned);
        if (e.isZero())
            return Xn;
        if (this.eq(ar))
            return e.isOdd() ? ar : Xn;
        if (e.eq(ar))
            return this.isOdd() ? ar : Xn;
        if (this.isNegative())
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative())
            return this.mul(e.neg()).neg();
        if (this.lt(Yn) && e.lt(Yn))
            return Wn(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16
          , n = 65535 & this.high
          , r = this.low >>> 16
          , a = 65535 & this.low
          , i = e.high >>> 16
          , o = 65535 & e.high
          , s = e.low >>> 16
          , u = 65535 & e.low
          , l = 0
          , c = 0
          , h = 0
          , f = 0;
        return h += (f += a * u) >>> 16,
        c += (h += r * u) >>> 16,
        h &= 65535,
        c += (h += a * s) >>> 16,
        l += (c += n * u) >>> 16,
        c &= 65535,
        l += (c += r * s) >>> 16,
        c &= 65535,
        l += (c += a * o) >>> 16,
        l += t * u + n * s + r * o + a * i,
        Gn((h &= 65535) << 16 | (f &= 65535), (l &= 65535) << 16 | (c &= 65535), this.unsigned)
    }
    ,
    ir.mul = ir.multiply,
    ir.divide = function(e) {
        if (Ln(e) || (e = Hn(e)),
        e.isZero())
            throw Error("division by zero");
        var t, n, r;
        if (Pn)
            return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? Gn((this.unsigned ? Pn.div_u : Pn.div_s)(this.low, this.high, e.low, e.high), Pn.get_high(), this.unsigned) : this;
        if (this.isZero())
            return this.unsigned ? $n : Xn;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()),
            e.gt(this))
                return $n;
            if (e.gt(this.shru(1)))
                return er;
            r = $n
        } else {
            if (this.eq(ar))
                return e.eq(Qn) || e.eq(tr) ? ar : e.eq(ar) ? Qn : (t = this.shr(1).div(e).shl(1)).eq(Xn) ? e.isNegative() ? Qn : tr : (n = this.sub(e.mul(t)),
                r = t.add(n.div(e)));
            if (e.eq(ar))
                return this.unsigned ? $n : Xn;
            if (this.isNegative())
                return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative())
                return this.div(e.neg()).neg();
            r = Xn
        }
        for (n = this; n.gte(e); ) {
            t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            for (var a = Math.ceil(Math.log(t) / Math.LN2), i = a <= 48 ? 1 : Un(2, a - 48), o = Wn(t), s = o.mul(e); s.isNegative() || s.gt(n); )
                s = (o = Wn(t -= i, this.unsigned)).mul(e);
            o.isZero() && (o = Qn),
            r = r.add(o),
            n = n.sub(s)
        }
        return r
    }
    ,
    ir.div = ir.divide,
    ir.modulo = function(e) {
        return Ln(e) || (e = Hn(e)),
        Pn ? Gn((this.unsigned ? Pn.rem_u : Pn.rem_s)(this.low, this.high, e.low, e.high), Pn.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
    }
    ,
    ir.mod = ir.modulo,
    ir.rem = ir.modulo,
    ir.not = function() {
        return Gn(~this.low, ~this.high, this.unsigned)
    }
    ,
    ir.and = function(e) {
        return Ln(e) || (e = Hn(e)),
        Gn(this.low & e.low, this.high & e.high, this.unsigned)
    }
    ,
    ir.or = function(e) {
        return Ln(e) || (e = Hn(e)),
        Gn(this.low | e.low, this.high | e.high, this.unsigned)
    }
    ,
    ir.xor = function(e) {
        return Ln(e) || (e = Hn(e)),
        Gn(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }
    ,
    ir.shiftLeft = function(e) {
        return Ln(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? Gn(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : Gn(0, this.low << e - 32, this.unsigned)
    }
    ,
    ir.shl = ir.shiftLeft,
    ir.shiftRight = function(e) {
        return Ln(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? Gn(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : Gn(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ,
    ir.shr = ir.shiftRight,
    ir.shiftRightUnsigned = function(e) {
        if (Ln(e) && (e = e.toInt()),
        0 === (e &= 63))
            return this;
        var t = this.high;
        return e < 32 ? Gn(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : Gn(32 === e ? t : t >>> e - 32, 0, this.unsigned)
    }
    ,
    ir.shru = ir.shiftRightUnsigned,
    ir.shr_u = ir.shiftRightUnsigned,
    ir.toSigned = function() {
        return this.unsigned ? Gn(this.low, this.high, !1) : this
    }
    ,
    ir.toUnsigned = function() {
        return this.unsigned ? this : Gn(this.low, this.high, !0)
    }
    ,
    ir.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }
    ,
    ir.toBytesLE = function() {
        var e = this.high
          , t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }
    ,
    ir.toBytesBE = function() {
        var e = this.high
          , t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }
    ,
    On.fromBytes = function(e, t, n) {
        return n ? On.fromBytesLE(e, t) : On.fromBytesBE(e, t)
    }
    ,
    On.fromBytesLE = function(e, t) {
        return new On(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24,e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24,t)
    }
    ,
    On.fromBytesBE = function(e, t) {
        return new On(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7],e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3],t)
    }
    ;
    var or = Cn || Object.assign(Object.create(null), Cn, {
        default: Cn
    });
    function sr(e) {
        return or.fromString(e, !0, 16)
    }
    var ur = sr("c3a5c85c97cb3127")
      , lr = sr("b492b66fbe98f273")
      , cr = sr("9ae16a3b2f90404f");
    function hr(e) {
        return e.xor(e.shru(47))
    }
    function fr(e, t, n) {
        var r = e.slice(t, t + n);
        return or.fromBytes(Array.from(r), !0, !0)
    }
    function dr(e, t) {
        return fr(e, t, 8)
    }
    function pr(e, t) {
        return fr(e, t, 4)
    }
    function vr(e, t) {
        return 0 === t ? e : e.shru(t).or(e.shl(64 - t))
    }
    function gr(e, t, n) {
        void 0 === n && (n = sr("9ddfea08eb382d69"));
        var r = e.xor(t).mul(n);
        r = r.xor(r.shru(47));
        var a = t.xor(r).mul(n);
        return a = (a = a.xor(a.shru(47))).mul(n)
    }
    function mr(e, t, n, r) {
        return function(e, t, n, r, a, i) {
            a = a.add(e),
            i = vr(i.add(a).add(r), 21);
            var o = a;
            return a = (a = a.add(t)).add(n),
            i = i.add(vr(a, 44)),
            [a.add(r), i.add(o)]
        }(dr(e, t), dr(e, t + 8), dr(e, t + 16), dr(e, t + 24), n, r)
    }
    function yr(e, t) {
        if ("string" === t)
            throw new Error("Cannot convert a string[] to a TypedArray");
        if (Array.isArray(e) && (e = w(e)),
        $().getBool("DEBUG") && N(e, t),
        function(e, t) {
            return e instanceof Float32Array && "float32" === t || e instanceof Int32Array && "int32" === t || e instanceof Uint8Array && "bool" === t
        }(e, t))
            return e;
        if (null == t || "float32" === t || "complex64" === t)
            return new Float32Array(e);
        if ("int32" === t)
            return new Int32Array(e);
        if ("bool" === t) {
            for (var n = new Uint8Array(e.length), r = 0; r < n.length; ++r)
                0 !== Math.round(e[r]) && (n[r] = 1);
            return n
        }
        throw new Error("Unknown data type " + t)
    }
    function br() {
        return $().platform.now()
    }
    function wr(e, t) {
        return void 0 === t && (t = "utf-8"),
        t = t || "utf-8",
        $().platform.encode(e, t)
    }
    function kr(e, t) {
        return void 0 === t && (t = "utf-8"),
        t = t || "utf-8",
        $().platform.decode(e, t)
    }
    var xr = {
        __proto__: null,
        createScalarValue: function(e, t) {
            return "string" === t ? wr(e) : yr([e], t)
        },
        toTypedArray: yr,
        now: br,
        fetch: function(e, t) {
            return $().platform.fetch(e, t)
        },
        encodeString: wr,
        decodeString: kr,
        shuffle: p,
        shuffleCombo: function(e, t) {
            if (e.length !== t.length)
                throw new Error("Array sizes must match to be shuffled together First array length was " + e.length + "Second array length was " + t.length);
            for (var n = e.length, r = 0; n > 0; )
                r = Math.random() * n | 0,
                g(e, --n, r),
                g(t, n, r)
        },
        clamp: v,
        nearestLargerEven: function(e) {
            return e % 2 == 0 ? e : e + 1
        },
        swap: g,
        sum: function(e) {
            for (var t = 0, n = 0; n < e.length; n++)
                t += e[n];
            return t
        },
        randUniform: function(e, t) {
            var n = Math.random();
            return t * n + (1 - n) * e
        },
        distSquared: function(e, t) {
            for (var n = 0, r = 0; r < e.length; r++) {
                var a = Number(e[r]) - Number(t[r]);
                n += a * a
            }
            return n
        },
        assert: m,
        assertShapesMatch: y,
        assertNonNull: b,
        flatten: w,
        sizeFromShape: k,
        isScalarShape: function(e) {
            return 0 === e.length
        },
        arraysEqual: x,
        isInt: E,
        tanh: function(e) {
            if (null != Math.tanh)
                return Math.tanh(e);
            if (e === 1 / 0)
                return 1;
            if (e === -1 / 0)
                return -1;
            var t = Math.exp(2 * e);
            return (t - 1) / (t + 1)
        },
        sizeToSquarishShape: function(e) {
            var t = Math.ceil(Math.sqrt(e));
            return [t, Math.ceil(e / t)]
        },
        createShuffledIndices: function(e) {
            for (var t = new Uint32Array(e), n = 0; n < e; ++n)
                t[n] = n;
            return p(t),
            t
        },
        rightPad: S,
        repeatedTry: function(e, t, n) {
            return void 0 === t && (t = function(e) {
                return 0
            }
            ),
            new Promise((function(r, a) {
                var i = 0
                  , o = function() {
                    if (e())
                        r();
                    else {
                        i++;
                        var s = t(i);
                        null != n && i >= n ? a() : setTimeout(o, s)
                    }
                };
                o()
            }
            ))
        },
        inferFromImplicitShape: function(e, t) {
            for (var n = 1, r = -1, a = 0; a < e.length; ++a)
                if (e[a] >= 0)
                    n *= e[a];
                else if (-1 === e[a]) {
                    if (-1 !== r)
                        throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r + " and dim " + a);
                    r = a
                } else if (e[a] < 0)
                    throw Error("Shapes can not be < 0. Found " + e[a] + " at dim " + a);
            if (-1 === r) {
                if (t > 0 && t !== n)
                    throw Error("Size(" + t + ") must match the product of shape " + e);
                return e
            }
            if (0 === n)
                throw Error("Cannot infer the missing size in [" + e + "] when there are 0 elements");
            if (t % n != 0)
                throw Error("The implicit shape can't be a fractional number. Got " + t + " / " + n);
            var i = e.slice();
            return i[r] = t / n,
            i
        },
        parseAxisParam: A,
        squeezeShape: _,
        getTypedArrayFromDType: I,
        getArrayFromDType: M,
        checkConversionForErrors: N,
        isValidDtype: T,
        hasEncodingLoss: function(e, t) {
            return "complex64" !== t && (("float32" !== t || "complex64" === e) && (("int32" !== t || "float32" === e || "complex64" === e) && ("bool" !== t || "bool" !== e)))
        },
        isTypedArray: D,
        bytesPerElement: R,
        bytesFromStringArray: B,
        isString: F,
        isBoolean: C,
        isNumber: P,
        inferDtype: O,
        isFunction: L,
        nearestDivisor: z,
        computeStrides: q,
        toNestedArray: W,
        makeOnesTypedArray: G,
        makeZerosTypedArray: U,
        makeZerosNestedTypedArray: function(e, t) {
            var n = e.reduce((function(e, t) {
                return e * t
            }
            ), 1);
            if (null == t || "float32" === t)
                return W(e, new Float32Array(n));
            if ("int32" === t)
                return W(e, new Int32Array(n));
            if ("bool" === t)
                return W(e, new Uint8Array(n));
            throw new Error("Unknown data type " + t)
        },
        assertNonNegativeIntegerDimensions: V,
        locToIndex: function(e, t, n) {
            if (0 === t)
                return 0;
            if (1 === t)
                return e[0];
            for (var r = e[e.length - 1], a = 0; a < e.length - 1; ++a)
                r += n[a] * e[a];
            return r
        },
        indexToLoc: function(e, t, n) {
            if (0 === t)
                return [];
            if (1 === t)
                return [e];
            for (var r = new Array(t), a = 0; a < r.length - 1; ++a)
                r[a] = Math.floor(e / n[a]),
                e -= r[a] * n[a];
            return r[r.length - 1] = e,
            r
        },
        isPromise: H,
        hexToLong: sr,
        fingerPrint64: function(e, t) {
            var n, r;
            void 0 === t && (t = e.length);
            var a = or.fromNumber(81, !0);
            if (t <= 32)
                return t <= 16 ? function(e, t) {
                    if (void 0 === t && (t = e.length),
                    t >= 8) {
                        var n = cr.add(2 * t)
                          , r = dr(e, 0).add(cr);
                        return gr(vr(a = dr(e, t - 8), 37).mul(n).add(r), vr(r, 25).add(a).mul(n), n)
                    }
                    if (t >= 4)
                        return n = cr.add(2 * t),
                        gr((r = pr(e, 0)).shl(3).add(t), pr(e, t - 4), n);
                    if (t > 0) {
                        var a, i = (r = e[0]) + ((a = e[t >> 1]) << 8), o = t + (e[t - 1] << 2);
                        return hr(cr.mul(i).xor(ur.mul(o))).mul(cr)
                    }
                    return cr
                }(e, t) : function(e, t) {
                    void 0 === t && (t = e.length);
                    var n = cr.add(2 * t)
                      , r = dr(e, 0).mul(lr)
                      , a = dr(e, 8)
                      , i = dr(e, t - 8).mul(n)
                      , o = dr(e, t - 16).mul(cr);
                    return gr(vr(r.add(a), 43).add(vr(i, 30)).add(o), r.add(vr(a.add(cr), 18)).add(i), n)
                }(e, t);
            if (t <= 64)
                return function(e, t) {
                    void 0 === t && (t = e.length);
                    var n = cr.add(2 * t)
                      , r = dr(e, 0).mul(cr)
                      , a = dr(e, 8)
                      , i = dr(e, t - 8).mul(n)
                      , o = dr(e, t - 16).mul(cr)
                      , s = vr(r.add(a), 43).add(vr(i, 30)).add(o)
                      , u = gr(s, r.add(vr(a.add(cr), 18)).add(i), n)
                      , l = dr(e, 16).mul(n)
                      , c = dr(e, 24)
                      , h = s.add(dr(e, t - 32)).mul(n)
                      , f = u.add(dr(e, t - 24)).mul(n);
                    return gr(vr(l.add(c), 43).add(vr(h, 30)).add(f), l.add(vr(c.add(r), 18)).add(h), n)
                }(e, t);
            var i = a
              , o = a.mul(lr).add(113)
              , s = hr(o.mul(cr).add(113)).mul(cr)
              , u = [or.UZERO, or.UZERO]
              , c = [or.UZERO, or.UZERO];
            i = i.mul(cr).add(dr(e, 0));
            var h = 0
              , f = 64 * (t - 1 >> 6)
              , d = f + (t - 1 & 63) - 63;
            do {
                i = vr(i.add(o).add(u[0]).add(dr(e, h + 8)), 37).mul(lr),
                o = vr(o.add(u[1]).add(dr(e, h + 48)), 42).mul(lr),
                i = i.xor(c[1]),
                o = o.add(u[0]).add(dr(e, h + 40)),
                s = vr(s.add(c[0]), 33).mul(lr),
                u = mr(e, h, u[1].mul(lr), i.add(c[0])),
                c = mr(e, h + 32, s.add(c[1]), o.add(dr(e, h + 16))),
                s = (n = l([i, s], 2))[0],
                i = n[1],
                h += 64
            } while (h !== f);
            var p = lr.add(s.and(255).shl(1));
            return h = d,
            c[0] = c[0].add(t - 1 & 63),
            u[0] = u[0].add(c[0]),
            c[0] = c[0].add(u[0]),
            i = vr(i.add(o).add(u[0]).add(dr(e, h + 8)), 37).mul(p),
            o = vr(o.add(u[1]).add(dr(e, h + 48)), 42).mul(p),
            i = i.xor(c[1].mul(9)),
            o = o.add(u[0].mul(9).add(dr(e, h + 40))),
            s = vr(s.add(c[0]), 33).mul(p),
            u = mr(e, h, u[1].mul(p), i.add(c[0])),
            c = mr(e, h + 32, s.add(c[1]), o.add(dr(e, h + 16))),
            s = (r = l([i, s], 2))[0],
            i = r[1],
            gr(gr(u[0], c[0], p).add(hr(o).mul(ur)).add(s), gr(u[1], c[1], p).add(i), p)
        }
    }
      , Er = function() {
        function e(e, t) {
            this.backendTimer = e,
            this.logger = t,
            null == t && (this.logger = new Sr)
        }
        return e.prototype.profileKernel = function(e, t, n) {
            var r, a, i, o, s = function() {
                i = n()
            }, l = br();
            if (this.backendTimer.timerAvailable())
                o = this.backendTimer.time(s);
            else {
                s();
                try {
                    for (var c = u(i), h = c.next(); !h.done; h = c.next()) {
                        h.value.dataSync()
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (a = c.return) && a.call(c)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                o = Promise.resolve({
                    kernelMs: br() - l
                })
            }
            if ($().getBool("CHECK_COMPUTATION_FOR_ERRORS"))
                for (var f = function(t) {
                    var n = i[t];
                    n.data().then((function(t) {
                        !function(e, t, n) {
                            if ("float32" !== t)
                                return !1;
                            for (var r = 0; r < e.length; r++) {
                                var a = e[r];
                                if (isNaN(a) || !isFinite(a))
                                    return console.warn("Found " + a + " in the result of '" + n + "'"),
                                    !0
                            }
                        }(t, n.dtype, e)
                    }
                    ))
                }, d = 0; d < i.length; d++)
                    f(d);
            return {
                kernelName: e,
                outputs: i,
                inputs: t,
                timeMs: o.then((function(e) {
                    return e.kernelMs
                }
                )),
                extraInfo: o.then((function(e) {
                    return null != e.getExtraProfileInfo ? e.getExtraProfileInfo() : ""
                }
                ))
            }
        }
        ,
        e.prototype.logKernelProfile = function(e) {
            var t = this
              , n = e.kernelName
              , r = e.outputs
              , a = e.timeMs
              , i = e.inputs
              , o = e.extraInfo;
            r.forEach((function(e) {
                Promise.all([e.data(), a, o]).then((function(r) {
                    t.logger.logKernelProfile(n, e, r[0], r[1], i, r[2])
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    var Sr = function() {
        function e() {}
        return e.prototype.logKernelProfile = function(e, t, n, r, a, i) {
            var o = "number" == typeof r ? S(r + "ms", 9) : r.error
              , s = S(e, 25)
              , u = t.rank
              , l = t.size
              , c = S(t.shape.toString(), 14)
              , h = "";
            for (var f in a) {
                var d = a[f];
                if (null != d) {
                    var p = d.shape || t.shape
                      , v = p.length;
                    h += f + ": " + v + "D " + (v > 0 ? p : "") + " "
                }
            }
            console.log("%c" + s + "\t%c" + o + "\t%c" + u + "D " + c + "\t%c" + l + "\t%c" + h + "\t%c" + i, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue")
        }
        ,
        e
    }();
    function Ar(e, t, n, r) {
        var a = q(t)
          , i = function(e, t, n, r) {
            var a = k(t)
              , i = r[r.length - 1]
              , o = new Array(i).fill(0)
              , s = t.length
              , u = "complex64" === n ? Nr(e) : e;
            if (s > 1)
                for (var l = 0; l < a / i; l++)
                    for (var c = l * i, h = 0; h < i; h++)
                        o[h] = Math.max(o[h], _r(u[c + h], 0, n).length);
            return o
        }(e, t, n, a)
          , o = t.length
          , s = Mr(e, t, n, a, i)
          , u = ["Tensor"];
        return r && (u.push("  dtype: " + n),
        u.push("  rank: " + o),
        u.push("  shape: [" + t + "]"),
        u.push("  values:")),
        u.push(s.map((function(e) {
            return "    " + e
        }
        )).join("\n")),
        u.join("\n")
    }
    function _r(e, t, n) {
        return S(Array.isArray(e) ? parseFloat(e[0].toFixed(7)) + " + " + parseFloat(e[1].toFixed(7)) + "j" : F(e) ? "'" + e + "'" : "bool" === n ? Ir(e) : parseFloat(e.toFixed(7)).toString(), t)
    }
    function Ir(e) {
        return 0 === e ? "false" : "true"
    }
    function Mr(e, t, n, r, a, i) {
        void 0 === i && (i = !0);
        var o = "complex64" === n ? 2 : 1
          , s = t[0]
          , u = t.length;
        if (0 === u)
            return "complex64" === n ? [_r(Nr(e)[0], 0, n)] : "bool" === n ? [Ir(e[0])] : [e[0].toString()];
        if (1 === u) {
            if (s > 20) {
                var l = 3 * o
                  , h = Array.from(e.slice(0, l))
                  , f = Array.from(e.slice((s - 3) * o, s * o));
                return "complex64" === n && (h = Nr(h),
                f = Nr(f)),
                ["[" + h.map((function(e, t) {
                    return _r(e, a[t], n)
                }
                )).join(", ") + ", ..., " + f.map((function(e, t) {
                    return _r(e, a[s - 3 + t], n)
                }
                )).join(", ") + "]"]
            }
            return ["[" + ("complex64" === n ? Nr(e) : Array.from(e)).map((function(e, t) {
                return _r(e, a[t], n)
            }
            )).join(", ") + "]"]
        }
        var d = t.slice(1)
          , p = r.slice(1)
          , v = r[0] * o
          , g = [];
        if (s > 20) {
            for (var m = 0; m < 3; m++) {
                var y = (b = m * v) + v;
                g.push.apply(g, c(Mr(e.slice(b, y), d, n, p, a, !1)))
            }
            g.push("...");
            for (m = s - 3; m < s; m++) {
                y = (b = m * v) + v;
                g.push.apply(g, c(Mr(e.slice(b, y), d, n, p, a, m === s - 1)))
            }
        } else
            for (m = 0; m < s; m++) {
                var b;
                y = (b = m * v) + v;
                g.push.apply(g, c(Mr(e.slice(b, y), d, n, p, a, m === s - 1)))
            }
        var w = 2 === u ? "," : "";
        g[0] = "[" + g[0] + w;
        for (m = 1; m < g.length - 1; m++)
            g[m] = " " + g[m] + w;
        var k = ",\n";
        for (m = 2; m < u; m++)
            k += "\n";
        return g[g.length - 1] = " " + g[g.length - 1] + "]" + (i ? "" : k),
        g
    }
    function Nr(e) {
        for (var t = [], n = 0; n < e.length; n += 2)
            t.push([e[n], e[n + 1]]);
        return t
    }
    var Tr = function() {
        function e(e, t, n) {
            var r = this;
            if (this.dtype = t,
            this.shape = e.slice(),
            this.size = k(e),
            null != n) {
                var a = n.length;
                m(a === this.size, (function() {
                    return "Length of values '" + a + "' does not match the size inferred by the shape '" + r.size + "'."
                }
                ))
            }
            if ("complex64" === t)
                throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
            this.values = n || M(t, this.size),
            this.strides = q(e)
        }
        return e.prototype.set = function(e) {
            for (var t = this, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            0 === n.length && (n = [0]),
            m(n.length === this.rank, (function() {
                return "The number of provided coordinates (" + n.length + ") must match the rank (" + t.rank + ")"
            }
            ));
            var a = this.locToIndex(n);
            this.values[a] = e
        }
        ,
        e.prototype.get = function() {
            for (var e, t, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            0 === n.length && (n = [0]);
            var a = 0;
            try {
                for (var i = u(n), o = i.next(); !o.done; o = i.next()) {
                    var s = o.value;
                    if (s < 0 || s >= this.shape[a]) {
                        var l = "Requested out of range element at " + n + ".   Buffer shape=" + this.shape;
                        throw new Error(l)
                    }
                    a++
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (t = i.return) && t.call(i)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            for (var c = n[n.length - 1], h = 0; h < n.length - 1; ++h)
                c += this.strides[h] * n[h];
            return this.values[c]
        }
        ,
        e.prototype.locToIndex = function(e) {
            if (0 === this.rank)
                return 0;
            if (1 === this.rank)
                return e[0];
            for (var t = e[e.length - 1], n = 0; n < e.length - 1; ++n)
                t += this.strides[n] * e[n];
            return t
        }
        ,
        e.prototype.indexToLoc = function(e) {
            if (0 === this.rank)
                return [];
            if (1 === this.rank)
                return [e];
            for (var t = new Array(this.shape.length), n = 0; n < t.length - 1; ++n)
                t[n] = Math.floor(e / this.strides[n]),
                e -= t[n] * this.strides[n];
            return t[t.length - 1] = e,
            t
        }
        ,
        Object.defineProperty(e.prototype, "rank", {
            get: function() {
                return this.shape.length
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.toTensor = function() {
            return Dr().makeTensor(this.values, this.shape, this.dtype)
        }
        ,
        e
    }()
      , Dr = null
      , Rr = null;
    var Br = function() {
        function e(e, t, n, r) {
            this.kept = !1,
            this.isDisposedInternal = !1,
            this.shape = e.slice(),
            this.dtype = t || "float32",
            this.size = k(e),
            this.strides = q(e),
            this.dataId = n,
            this.id = r,
            this.rankType = this.rank < 5 ? this.rank.toString() : "higher"
        }
        return Object.defineProperty(e.prototype, "rank", {
            get: function() {
                return this.shape.length
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.buffer = function() {
            return o(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return e = t.sent(),
                        [2, Rr.buffer(this.shape, this.dtype, e)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.bufferSync = function() {
            return Rr.buffer(this.shape, this.dtype, this.dataSync())
        }
        ,
        e.prototype.array = function() {
            return o(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return e = t.sent(),
                        [2, W(this.shape, e, "complex64" === this.dtype)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.arraySync = function() {
            return W(this.shape, this.dataSync(), "complex64" === this.dtype)
        }
        ,
        e.prototype.data = function() {
            return o(this, void 0, void 0, (function() {
                var e, t;
                return s(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return this.throwIfDisposed(),
                        e = Dr().read(this.dataId),
                        "string" !== this.dtype ? [3, 2] : [4, e];
                    case 1:
                        t = n.sent();
                        try {
                            return [2, t.map((function(e) {
                                return kr(e)
                            }
                            ))]
                        } catch (e) {
                            throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
                        }
                        n.label = 2;
                    case 2:
                        return [2, e]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.dataToGPU = function(e) {
            return this.throwIfDisposed(),
            Dr().readToGPU(this.dataId, e)
        }
        ,
        e.prototype.dataSync = function() {
            this.throwIfDisposed();
            var e = Dr().readSync(this.dataId);
            if ("string" === this.dtype)
                try {
                    return e.map((function(e) {
                        return kr(e)
                    }
                    ))
                } catch (e) {
                    throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
                }
            return e
        }
        ,
        e.prototype.bytes = function() {
            return o(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.throwIfDisposed(),
                        [4, Dr().read(this.dataId)];
                    case 1:
                        return e = t.sent(),
                        "string" === this.dtype ? [2, e] : [2, new Uint8Array(e.buffer)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.dispose = function() {
            this.isDisposed || (Dr().disposeTensor(this),
            this.isDisposedInternal = !0)
        }
        ,
        Object.defineProperty(e.prototype, "isDisposed", {
            get: function() {
                return this.isDisposedInternal
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.throwIfDisposed = function() {
            if (this.isDisposed)
                throw new Error("Tensor is disposed.")
        }
        ,
        e.prototype.print = function(e) {
            return void 0 === e && (e = !1),
            Rr.print(this, e)
        }
        ,
        e.prototype.clone = function() {
            return this.throwIfDisposed(),
            Rr.clone(this)
        }
        ,
        e.prototype.toString = function(e) {
            return void 0 === e && (e = !1),
            Ar(this.dataSync(), this.shape, this.dtype, e)
        }
        ,
        e.prototype.cast = function(e) {
            return this.throwIfDisposed(),
            Rr.cast(this, e)
        }
        ,
        e.prototype.variable = function(e, t, n) {
            return void 0 === e && (e = !0),
            this.throwIfDisposed(),
            Dr().makeVariable(this, e, t, n)
        }
        ,
        e
    }();
    Object.defineProperty(Br, Symbol.hasInstance, {
        value: function(e) {
            return !!e && null != e.data && null != e.dataSync && null != e.throwIfDisposed
        }
    }),
    ee("Tensor", (function() {
        return Br
    }
    ));
    var Fr, Cr, Pr, Or, Lr, zr = function(e) {
        function t(t, n, r, a) {
            var i = e.call(this, t.shape, t.dtype, t.dataId, a) || this;
            return i.trainable = n,
            i.name = r,
            i
        }
        return i(t, e),
        t.prototype.assign = function(e) {
            if (e.dtype !== this.dtype)
                throw new Error("dtype of the new value (" + e.dtype + ") and previous value (" + this.dtype + ") must match");
            if (!x(e.shape, this.shape))
                throw new Error("shape of the new value (" + e.shape + ") and previous value (" + this.shape + ") must match");
            Dr().disposeTensor(this),
            this.dataId = e.dataId,
            Dr().incRef(this, null)
        }
        ,
        t.prototype.dispose = function() {
            Dr().disposeVariable(this),
            this.isDisposedInternal = !0
        }
        ,
        t
    }(Br);
    Object.defineProperty(zr, Symbol.hasInstance, {
        value: function(e) {
            return e instanceof Br && null != e.assign && e.assign instanceof Function
        }
    }),
    e.Rank = void 0,
    (Fr = e.Rank || (e.Rank = {})).R0 = "R0",
    Fr.R1 = "R1",
    Fr.R2 = "R2",
    Fr.R3 = "R3",
    Fr.R4 = "R4",
    Fr.R5 = "R5",
    Fr.R6 = "R6",
    function(e) {
        e.float32 = "float32",
        e.int32 = "int32",
        e.bool = "int32",
        e.complex64 = "complex64"
    }(Cr || (Cr = {})),
    function(e) {
        e.float32 = "float32",
        e.int32 = "int32",
        e.bool = "bool",
        e.complex64 = "complex64"
    }(Pr || (Pr = {})),
    function(e) {
        e.float32 = "float32",
        e.int32 = "float32",
        e.bool = "float32",
        e.complex64 = "complex64"
    }(Or || (Or = {})),
    function(e) {
        e.float32 = "complex64",
        e.int32 = "complex64",
        e.bool = "complex64",
        e.complex64 = "complex64"
    }(Lr || (Lr = {}));
    var qr = {
        float32: Or,
        int32: Cr,
        bool: Pr,
        complex64: Lr
    };
    function Kr(e, t) {
        if ("string" === e || "string" === t) {
            if ("string" === e && "string" === t)
                return "string";
            throw new Error("Can not upcast " + e + " with " + t)
        }
        return qr[e][t]
    }
    function Wr(e, t) {
        if (e.dtype === t.dtype)
            return [e, t];
        var n = Kr(e.dtype, t.dtype);
        return [e.cast(n), t.cast(n)]
    }
    function Gr(e, t) {
        m(e.dtype === t.dtype, (function() {
            return "The dtypes of the first(" + e.dtype + ") and second(" + t.dtype + ") input must match"
        }
        ))
    }
    function Ur(e) {
        var t = [];
        return Vr(e, t, new Set),
        t
    }
    function Vr(e, t, n) {
        if (null != e)
            if (e instanceof Br)
                t.push(e);
            else if (r = e,
            Array.isArray(r) || "object" == typeof r) {
                var r, a = e;
                for (var i in a) {
                    var o = a[i];
                    n.has(o) || (n.add(o),
                    Vr(o, t, n))
                }
            }
    }
    var Hr = {
        __proto__: null,
        makeTypesMatch: Wr,
        assertTypesMatch: Gr,
        isTensorInList: function(e, t) {
            return t.some((function(t) {
                return t.id === e.id
            }
            ))
        },
        getTensorsInContainer: Ur
    };
    function jr(e) {
        return null != e.kernelName
    }
    var Jr = function() {
        function e() {
            this.registeredVariables = {},
            this.nextTapeNodeId = 0,
            this.numBytes = 0,
            this.numTensors = 0,
            this.numStringTensors = 0,
            this.numDataBuffers = 0,
            this.gradientDepth = 0,
            this.kernelDepth = 0,
            this.scopeStack = [],
            this.numDataMovesStack = [],
            this.nextScopeId = 0,
            this.tensorInfo = new WeakMap,
            this.profiling = !1,
            this.activeProfile = {
                newBytes: 0,
                newTensors: 0,
                peakBytes: 0,
                kernels: [],
                result: null,
                get kernelNames() {
                    return Array.from(new Set(this.kernels.map((function(e) {
                        return e.name
                    }
                    ))))
                }
            }
        }
        return e.prototype.dispose = function() {
            for (var e in this.registeredVariables)
                this.registeredVariables[e].dispose()
        }
        ,
        e
    }()
      , Zr = function() {
        function e(e) {
            this.ENV = e,
            this.registry = {},
            this.registryFactory = {},
            this.pendingBackendInitId = 0,
            this.state = new Jr
        }
        return e.prototype.ready = function() {
            return o(this, void 0, void 0, (function() {
                var e, t, n;
                return s(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        if (null != this.pendingBackendInit)
                            return [2, this.pendingBackendInit.then((function() {}
                            ))];
                        if (null != this.backendInstance)
                            return [2];
                        e = this.getSortedBackends(),
                        t = 0,
                        r.label = 1;
                    case 1:
                        return t < e.length ? (n = e[t],
                        [4, this.initializeBackend(n).success]) : [3, 5];
                    case 2:
                        return r.sent() ? [4, this.setBackend(n)] : [3, 4];
                    case 3:
                        return r.sent(),
                        [2];
                    case 4:
                        return t++,
                        [3, 1];
                    case 5:
                        throw new Error("Could not initialize any backends, all backend initializations failed.")
                    }
                }
                ))
            }
            ))
        }
        ,
        Object.defineProperty(e.prototype, "backend", {
            get: function() {
                if (null != this.pendingBackendInit)
                    throw new Error("Backend '" + this.backendName + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                if (null == this.backendInstance) {
                    var e = this.initializeBackendsAndReturnBest()
                      , t = e.name;
                    if (e.asyncInit)
                        throw new Error("The highest priority backend '" + t + "' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");
                    this.setBackend(t)
                }
                return this.backendInstance
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.backendNames = function() {
            return Object.keys(this.registryFactory)
        }
        ,
        e.prototype.findBackend = function(e) {
            if (!(e in this.registry)) {
                if (!(e in this.registryFactory))
                    return null;
                if (this.initializeBackend(e).asyncInit)
                    return null
            }
            return this.registry[e]
        }
        ,
        e.prototype.findBackendFactory = function(e) {
            return e in this.registryFactory ? this.registryFactory[e].factory : null
        }
        ,
        e.prototype.registerBackend = function(e, t, n) {
            return void 0 === n && (n = 1),
            e in this.registryFactory ? (In(e + " backend was already registered. Reusing existing backend factory."),
            !1) : (this.registryFactory[e] = {
                factory: t,
                priority: n
            },
            !0)
        }
        ,
        e.prototype.setBackend = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n, r;
                return s(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        if (null == this.registryFactory[e])
                            throw new Error("Backend name '" + e + "' not found in registry");
                        return this.backendName = e,
                        null != this.registry[e] ? [3, 4] : (this.backendInstance = null,
                        t = this.initializeBackend(e),
                        n = t.success,
                        t.asyncInit ? [4, n] : [3, 2]);
                    case 1:
                        return r = a.sent(),
                        [3, 3];
                    case 2:
                        r = n,
                        a.label = 3;
                    case 3:
                        if (!r)
                            return [2, !1];
                        a.label = 4;
                    case 4:
                        return this.backendInstance = this.registry[e],
                        this.setupRegisteredKernels(),
                        this.profiler = new Er(this.backendInstance),
                        [2, !0]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.setupRegisteredKernels = function() {
            var e = this;
            Rn(this.backendName).forEach((function(t) {
                null != t.setupFunc && t.setupFunc(e.backendInstance)
            }
            ))
        }
        ,
        e.prototype.disposeRegisteredKernels = function(e) {
            var t = this;
            Rn(e).forEach((function(n) {
                null != n.disposeFunc && n.disposeFunc(t.registry[e])
            }
            ))
        }
        ,
        e.prototype.initializeBackend = function(e) {
            var t = this
              , n = this.registryFactory[e];
            if (null == n)
                throw new Error("Cannot initialize backend " + e + ", no registration found.");
            try {
                var r = n.factory();
                if (!r || r instanceof f || "function" != typeof r.then)
                    return this.registry[e] = r,
                    {
                        success: !0,
                        asyncInit: !1
                    };
                var a = ++this.pendingBackendInitId
                  , i = r.then((function(n) {
                    return !(a < t.pendingBackendInitId) && (t.registry[e] = n,
                    t.pendingBackendInit = null,
                    !0)
                }
                )).catch((function(n) {
                    return a < t.pendingBackendInitId || (t.pendingBackendInit = null,
                    In("Initialization of backend " + e + " failed"),
                    In(n.stack || n.message)),
                    !1
                }
                ));
                return this.pendingBackendInit = i,
                {
                    success: i,
                    asyncInit: !0
                }
            } catch (t) {
                return In("Initialization of backend " + e + " failed"),
                In(t.stack || t.message),
                {
                    success: !1,
                    asyncInit: !1
                }
            }
        }
        ,
        e.prototype.removeBackend = function(e) {
            if (!(e in this.registryFactory))
                throw new Error(e + " backend not found in registry");
            this.backendName === e && null != this.pendingBackendInit && this.pendingBackendInitId++,
            e in this.registry && (this.disposeRegisteredKernels(e),
            this.registry[e].dispose(),
            delete this.registry[e]),
            delete this.registryFactory[e],
            this.backendName === e && (this.pendingBackendInit = null,
            this.backendName = null,
            this.backendInstance = null)
        }
        ,
        e.prototype.getSortedBackends = function() {
            var e = this;
            if (0 === Object.keys(this.registryFactory).length)
                throw new Error("No backend found in registry.");
            return Object.keys(this.registryFactory).sort((function(t, n) {
                return e.registryFactory[n].priority - e.registryFactory[t].priority
            }
            ))
        }
        ,
        e.prototype.initializeBackendsAndReturnBest = function() {
            for (var e = this.getSortedBackends(), t = 0; t < e.length; t++) {
                var n = e[t]
                  , r = this.initializeBackend(n)
                  , a = r.success
                  , i = r.asyncInit;
                if (i || a)
                    return {
                        name: n,
                        asyncInit: i
                    }
            }
            throw new Error("Could not initialize any backends, all backend initializations failed.")
        }
        ,
        e.prototype.moveData = function(e, t) {
            var n = this.state.tensorInfo.get(t)
              , r = n.backend
              , a = this.readSync(t)
              , i = r.refCount(t);
            r.disposeData(t, !0),
            n.backend = e,
            e.move(t, a, n.shape, n.dtype, i),
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]++
        }
        ,
        e.prototype.tidy = function(e, t) {
            var n, r = this, a = null;
            if (null == t) {
                if ("function" != typeof e)
                    throw new Error("Please provide a function to tidy()");
                t = e
            } else {
                if ("string" != typeof e && !(e instanceof String))
                    throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
                if ("function" != typeof t)
                    throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
                a = e
            }
            return this.scopedRun((function() {
                return r.startScope(a)
            }
            ), (function() {
                return r.endScope(n)
            }
            ), (function() {
                return (n = t())instanceof Promise && console.error("Cannot return a Promise inside of tidy."),
                n
            }
            ))
        }
        ,
        e.prototype.scopedRun = function(e, t, n) {
            e();
            try {
                var r = n();
                return t(),
                r
            } catch (e) {
                throw t(),
                e
            }
        }
        ,
        e.prototype.nextTensorId = function() {
            return e.nextTensorId++
        }
        ,
        e.prototype.nextVariableId = function() {
            return e.nextVariableId++
        }
        ,
        e.prototype.clone = function(e) {
            var t = $r.runKernel(Qe, {
                x: e
            })
              , n = {
                x: e
            };
            return this.addTapeNode(this.state.activeScope.name, n, [t], (function(e) {
                return {
                    x: function() {
                        var t = {
                            x: e
                        }
                          , n = {
                            dtype: "float32"
                        };
                        return $r.runKernel(ye, t, n)
                    }
                }
            }
            ), [], {}),
            t
        }
        ,
        e.prototype.runKernel = function(e, t, n) {
            if (null == this.backendName && this.backend,
            !(null != Tn(e, this.backendName)))
                throw new Error("Kernel '" + e + "' not registered for backend '" + this.backendName + "'");
            return this.runKernelFunc({
                kernelName: e,
                inputs: t,
                attrs: n
            })
        }
        ,
        e.prototype.shouldCheckForMemLeaks = function() {
            return this.ENV.getBool("IS_TEST")
        }
        ,
        e.prototype.checkKernelForMemLeak = function(e, t, n) {
            var r = this.backend.numDataIds()
              , a = 0;
            n.forEach((function(e) {
                a += "complex64" === e.dtype ? 3 : 1
            }
            ));
            var i = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]
              , o = r - t - a - i;
            if (o > 0)
                throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + o + " data ids) after running '" + e + "'")
        }
        ,
        e.prototype.runKernelFunc = function(e) {
            var t, n, r, a = this, i = [], o = this.isTapeOn(), s = this.state.numBytes, u = this.state.numTensors;
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0),
            null == this.backendName && this.backend;
            var l = jr(e) ? e.kernelName : null != this.state.activeScope ? this.state.activeScope.name : "";
            if (jr(e)) {
                var c = e.kernelName
                  , h = e.inputs
                  , f = e.attrs;
                null == this.backendName && this.backend;
                var d = Tn(c, this.backendName);
                m(null != d, (function() {
                    return "Cannot find registered kernel '" + c + "' for backend '" + a.backendName + "'"
                }
                )),
                n = function() {
                    var e = a.backend.numDataIds();
                    r = d.kernelFunc({
                        inputs: h,
                        attrs: f,
                        backend: a.backend
                    });
                    var t = Array.isArray(r) ? r : [r];
                    a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(c, e, t);
                    var n = t.map((function(e) {
                        if (null != e.rank)
                            return e;
                        var t = e.dataId
                          , n = e.shape
                          , r = e.dtype;
                        return a.makeTensorFromDataId(t, n, r)
                    }
                    ));
                    if (o) {
                        var s = a.getTensorsForGradient(c, h, n);
                        i = a.saveTensorsForBackwardMode(s)
                    }
                    return n
                }
            } else {
                var p = e.forwardFunc
                  , v = function(e) {
                    o && (i = e.map((function(e) {
                        return a.keep(a.clone(e))
                    }
                    )))
                };
                n = function() {
                    var e = a.backend.numDataIds();
                    r = a.tidy((function() {
                        return p(a.backend, v)
                    }
                    ));
                    var t = Array.isArray(r) ? r : [r];
                    return a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(l, e, t),
                    t
                }
            }
            var g, y = e.inputs, b = e.attrs, w = jr(e) ? null : e.backwardsFunc;
            return this.scopedRun((function() {
                return a.state.kernelDepth++
            }
            ), (function() {
                return a.state.kernelDepth--
            }
            ), (function() {
                a.ENV.getBool("DEBUG") || a.state.profiling ? (g = a.profiler.profileKernel(l, y, (function() {
                    return n()
                }
                )),
                a.ENV.getBool("DEBUG") && a.profiler.logKernelProfile(g),
                t = g.outputs) : t = n()
            }
            )),
            o && this.addTapeNode(l, y, t, w, i, b),
            this.state.profiling && this.state.activeProfile.kernels.push({
                name: l,
                bytesAdded: this.state.numBytes - s,
                totalBytesSnapshot: this.state.numBytes,
                tensorsAdded: this.state.numTensors - u,
                totalTensorsSnapshot: this.state.numTensors,
                inputShapes: Object.keys(y).map((function(e) {
                    return null != y[e] ? y[e].shape : null
                }
                )),
                outputShapes: t.map((function(e) {
                    return e.shape
                }
                )),
                kernelTimeMs: g.timeMs,
                extraInfo: g.extraInfo
            }),
            Array.isArray(r) ? t : t[0]
        }
        ,
        e.prototype.saveTensorsForBackwardMode = function(e) {
            var t = this;
            return e.map((function(e) {
                return t.keep(t.clone(e))
            }
            ))
        }
        ,
        e.prototype.getTensorsForGradient = function(e, t, n) {
            var r = Dn(e);
            if (null != r) {
                var a = r.inputsToSave || []
                  , i = r.outputsToSave || []
                  , o = void 0;
                r.saveAllInputs ? (m(Array.isArray(t), (function() {
                    return "saveAllInputs is true, expected inputs to be an array."
                }
                )),
                o = Object.keys(t).map((function(e) {
                    return t[e]
                }
                ))) : o = a.map((function(e) {
                    return t[e]
                }
                ));
                var s = n.filter((function(e, t) {
                    return i[t]
                }
                ));
                return o.concat(s)
            }
            return []
        }
        ,
        e.prototype.makeTensor = function(e, t, n, r) {
            if (null == e)
                throw new Error("Values passed to engine.makeTensor() are null");
            n = n || "float32",
            r = r || this.backend;
            var a = e;
            "string" === n && F(e[0]) && (a = e.map((function(e) {
                return wr(e)
            }
            )));
            var i = r.write(a, t, n)
              , o = new Br(t,n,i,this.nextTensorId());
            if (this.trackTensor(o, r),
            "string" === n) {
                var s = this.state.tensorInfo.get(i)
                  , u = B(a);
                this.state.numBytes += u - s.bytes,
                s.bytes = u
            }
            return o
        }
        ,
        e.prototype.makeTensorFromDataId = function(e, t, n, r) {
            var a = new Br(t,n = n || "float32",e,this.nextTensorId());
            return this.trackTensor(a, r),
            a
        }
        ,
        e.prototype.makeVariable = function(e, t, n, r) {
            void 0 === t && (t = !0),
            n = n || this.nextVariableId().toString(),
            null != r && r !== e.dtype && (e = e.cast(r));
            var a = new zr(e,t,n,this.nextTensorId());
            if (null != this.state.registeredVariables[a.name])
                throw new Error("Variable with name " + a.name + " was already registered");
            return this.state.registeredVariables[a.name] = a,
            this.incRef(a, this.backend),
            a
        }
        ,
        e.prototype.trackTensor = function(e, t) {
            this.state.numTensors++,
            "string" === e.dtype && this.state.numStringTensors++;
            var n = 0;
            "complex64" !== e.dtype && "string" !== e.dtype && (n = e.size * R(e.dtype)),
            this.state.numBytes += n,
            this.state.tensorInfo.has(e.dataId) || (this.state.numDataBuffers++,
            this.state.tensorInfo.set(e.dataId, {
                backend: t || this.backend,
                dtype: e.dtype,
                shape: e.shape,
                bytes: n
            })),
            e instanceof zr || this.track(e)
        }
        ,
        e.prototype.incRef = function(e, t) {
            this.trackTensor(e, t),
            this.backend.incRef(e.dataId)
        }
        ,
        e.prototype.removeDataId = function(e, t) {
            this.state.tensorInfo.has(e) && this.state.tensorInfo.get(e).backend === t && (this.state.tensorInfo.delete(e),
            this.state.numDataBuffers--)
        }
        ,
        e.prototype.disposeTensor = function(e) {
            if (this.state.tensorInfo.has(e.dataId)) {
                var t = this.state.tensorInfo.get(e.dataId);
                if (this.state.numTensors--,
                "string" === e.dtype && (this.state.numStringTensors--,
                this.state.numBytes -= t.bytes),
                "complex64" !== e.dtype && "string" !== e.dtype) {
                    var n = e.size * R(e.dtype);
                    this.state.numBytes -= n
                }
                t.backend.disposeData(e.dataId) && this.removeDataId(e.dataId, t.backend)
            }
        }
        ,
        e.prototype.disposeVariables = function() {
            for (var e in this.state.registeredVariables) {
                var t = this.state.registeredVariables[e];
                this.disposeVariable(t)
            }
        }
        ,
        e.prototype.disposeVariable = function(e) {
            this.disposeTensor(e),
            null != this.state.registeredVariables[e.name] && delete this.state.registeredVariables[e.name]
        }
        ,
        e.prototype.memory = function() {
            var e = this.backend.memory();
            return e.numTensors = this.state.numTensors,
            e.numDataBuffers = this.state.numDataBuffers,
            e.numBytes = this.state.numBytes,
            this.state.numStringTensors > 0 && (e.unreliable = !0,
            null == e.reasons && (e.reasons = []),
            e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),
            e
        }
        ,
        e.prototype.profile = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n, r, a, i, o, l, h, f, d, p;
                return s(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return this.state.profiling = !0,
                        t = this.state.numBytes,
                        n = this.state.numTensors,
                        this.state.activeProfile.kernels = [],
                        r = this.state.activeProfile,
                        [4, e()];
                    case 1:
                        r.result = s.sent(),
                        this.state.profiling = !1,
                        this.state.activeProfile.peakBytes = Math.max.apply(Math, c(this.state.activeProfile.kernels.map((function(e) {
                            return e.totalBytesSnapshot
                        }
                        )))),
                        this.state.activeProfile.newBytes = this.state.numBytes - t,
                        this.state.activeProfile.newTensors = this.state.numTensors - n,
                        s.label = 2;
                    case 2:
                        s.trys.push([2, 8, 9, 10]),
                        a = u(this.state.activeProfile.kernels),
                        i = a.next(),
                        s.label = 3;
                    case 3:
                        return i.done ? [3, 7] : (o = i.value,
                        l = o,
                        [4, o.kernelTimeMs]);
                    case 4:
                        return l.kernelTimeMs = s.sent(),
                        h = o,
                        [4, o.extraInfo];
                    case 5:
                        h.extraInfo = s.sent(),
                        s.label = 6;
                    case 6:
                        return i = a.next(),
                        [3, 3];
                    case 7:
                        return [3, 10];
                    case 8:
                        return f = s.sent(),
                        d = {
                            error: f
                        },
                        [3, 10];
                    case 9:
                        try {
                            i && !i.done && (p = a.return) && p.call(a)
                        } finally {
                            if (d)
                                throw d.error
                        }
                        return [7];
                    case 10:
                        return [2, this.state.activeProfile]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.isTapeOn = function() {
            return this.state.gradientDepth > 0 && 0 === this.state.kernelDepth
        }
        ,
        e.prototype.addTapeNode = function(e, t, n, r, a, i) {
            var o = this
              , s = {
                id: this.state.nextTapeNodeId++,
                kernelName: e,
                inputs: t,
                outputs: n,
                saved: a
            }
              , u = Dn(e);
            null != u && (r = u.gradFunc),
            null != r && (s.gradient = function(e) {
                return e = e.map((function(e, t) {
                    if (null == e) {
                        var r = n[t]
                          , a = U(r.size, r.dtype);
                        return o.makeTensor(a, r.shape, r.dtype)
                    }
                    return e
                }
                )),
                r(e.length > 1 ? e : e[0], a, i)
            }
            ),
            this.state.activeTape.push(s)
        }
        ,
        e.prototype.keep = function(e) {
            return e.kept = !0,
            e
        }
        ,
        e.prototype.startTape = function() {
            0 === this.state.gradientDepth && (this.state.activeTape = []),
            this.state.gradientDepth++
        }
        ,
        e.prototype.endTape = function() {
            this.state.gradientDepth--
        }
        ,
        e.prototype.startScope = function(e) {
            var t = {
                track: [],
                name: "unnamed scope",
                id: this.state.nextScopeId++
            };
            e && (t.name = e),
            this.state.scopeStack.push(t),
            this.state.activeScope = t
        }
        ,
        e.prototype.endScope = function(e) {
            for (var t = this, n = Ur(e), r = new Set(n.map((function(e) {
                return e.id
            }
            ))), a = 0; a < this.state.activeScope.track.length; a++) {
                var i = this.state.activeScope.track[a];
                i.kept || r.has(i.id) || i.dispose()
            }
            var o = this.state.scopeStack.pop();
            this.state.activeScope = 0 === this.state.scopeStack.length ? null : this.state.scopeStack[this.state.scopeStack.length - 1],
            n.forEach((function(e) {
                e.kept || e.scopeId !== o.id || t.track(e)
            }
            ))
        }
        ,
        e.prototype.gradients = function(e, t, n, r) {
            var a = this;
            if (void 0 === r && (r = !1),
            m(t.length > 0, (function() {
                return "gradients() received an empty list of xs."
            }
            )),
            null != n && "float32" !== n.dtype)
                throw new Error("dy must have 'float32' dtype, but has '" + n.dtype + "'");
            var i = this.scopedRun((function() {
                return a.startTape()
            }
            ), (function() {
                return a.endTape()
            }
            ), (function() {
                return a.tidy("forward", e)
            }
            ));
            m(i instanceof Br, (function() {
                return "The result y returned by f() must be a tensor."
            }
            ));
            var o = function(e, t, n) {
                for (var r = {}, a = {}, i = 0; i < t.length; i++)
                    r[t[i].id] = !0;
                for (i = 0; i < e.length; i++) {
                    var o = (p = e[i]).inputs;
                    for (var s in o) {
                        for (var u = o[s], l = !1, c = 0; c < t.length; c++)
                            if (r[u.id]) {
                                p.outputs.forEach((function(e) {
                                    return r[e.id] = !0
                                }
                                )),
                                l = !0,
                                a[p.id] = !0;
                                break
                            }
                        if (l)
                            break
                    }
                }
                var h = {};
                h[n.id] = !0;
                var f = {};
                for (i = e.length - 1; i >= 0; i--)
                    for (o = (p = e[i]).inputs,
                    c = 0; c < p.outputs.length; c++)
                        if (h[p.outputs[c].id]) {
                            for (var s in o)
                                h[o[s].id] = !0,
                                f[p.id] = !0;
                            break
                        }
                var d = [];
                for (i = 0; i < e.length; i++) {
                    var p;
                    if (a[(p = e[i]).id] && f[p.id]) {
                        var v = {};
                        for (var s in p.inputs) {
                            var g = p.inputs[s];
                            r[g.id] && (v[s] = g)
                        }
                        var m = Object.assign({}, p);
                        m.inputs = v,
                        m.outputs = p.outputs,
                        d.push(m)
                    }
                }
                return d
            }(this.state.activeTape, t, i);
            if (!r && 0 === o.length && t.length > 0)
                throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
            return this.tidy("backward", (function() {
                var e, r, s = {};
                s[i.id] = null == n ? (e = i.shape,
                r = G(k(e), "float32"),
                $r.makeTensor(r, e, "float32")) : n,
                function(e, t, n, r) {
                    for (var a = function(a) {
                        var i = t[a]
                          , o = [];
                        if (i.outputs.forEach((function(t) {
                            var n = e[t.id];
                            null != n ? o.push(n) : o.push(null)
                        }
                        )),
                        null == i.gradient)
                            throw new Error("Cannot compute gradient: gradient function not found for " + i.kernelName + ".");
                        var s = i.gradient(o)
                          , u = function(t) {
                            if (!(t in s))
                                throw new Error("Cannot backprop through input " + t + ". Available gradients found: " + Object.keys(s) + ".");
                            var a = n((function() {
                                return s[t]()
                            }
                            ));
                            if ("float32" !== a.dtype)
                                throw new Error("Error in gradient for op " + i.kernelName + ". The gradient of input " + t + " must have 'float32' dtype, but has '" + a.dtype + "'");
                            var o = i.inputs[t];
                            if (!x(a.shape, o.shape))
                                throw new Error("Error in gradient for op " + i.kernelName + ". The gradient of input '" + t + "' has shape '" + a.shape + "', which does not match the shape of the input '" + o.shape + "'");
                            if (null == e[o.id])
                                e[o.id] = a;
                            else {
                                var u = e[o.id];
                                e[o.id] = r(u, a),
                                u.dispose()
                            }
                        };
                        for (var l in i.inputs)
                            u(l)
                    }, i = t.length - 1; i >= 0; i--)
                        a(i)
                }(s, o, (function(e) {
                    return a.tidy(e)
                }
                ), Qr);
                var l = t.map((function(e) {
                    return s[e.id]
                }
                ));
                return 0 === a.state.gradientDepth && (a.state.activeTape.forEach((function(e) {
                    var t, n;
                    try {
                        for (var r = u(e.saved), a = r.next(); !a.done; a = r.next()) {
                            a.value.dispose()
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = r.return) && n.call(r)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                }
                )),
                a.state.activeTape = null),
                {
                    value: i,
                    grads: l
                }
            }
            ))
        }
        ,
        e.prototype.customGrad = function(e) {
            var t = this;
            return m(L(e), (function() {
                return "The f passed in customGrad(f) must be a function."
            }
            )),
            function() {
                for (var n, r = [], a = 0; a < arguments.length; a++)
                    r[a] = arguments[a];
                m(r.every((function(e) {
                    return e instanceof Br
                }
                )), (function() {
                    return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
                }
                ));
                var i = {};
                r.forEach((function(e, t) {
                    i[t] = e
                }
                ));
                var o = function(t, a) {
                    return m((n = e.apply(void 0, c(r, [a]))).value instanceof Br, (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
                    }
                    )),
                    m(L(n.gradFunc), (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
                    }
                    )),
                    n.value
                }
                  , s = function(e, t) {
                    var a = n.gradFunc(e, t)
                      , i = Array.isArray(a) ? a : [a];
                    m(i.length === r.length, (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
                    }
                    )),
                    m(i.every((function(e) {
                        return e instanceof Br
                    }
                    )), (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
                    }
                    ));
                    var o = {};
                    return i.forEach((function(e, t) {
                        o[t] = function() {
                            return e
                        }
                    }
                    )),
                    o
                };
                return t.runKernelFunc({
                    forwardFunc: o,
                    backwardsFunc: s,
                    inputs: i
                })
            }
        }
        ,
        e.prototype.readSync = function(e) {
            return this.state.tensorInfo.get(e).backend.readSync(e)
        }
        ,
        e.prototype.read = function(e) {
            return this.state.tensorInfo.get(e).backend.read(e)
        }
        ,
        e.prototype.readToGPU = function(e, t) {
            return this.state.tensorInfo.get(e).backend.readToGPU(e, t)
        }
        ,
        e.prototype.time = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n;
                return s(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = br(),
                        [4, this.backend.time(e)];
                    case 1:
                        return (n = r.sent()).wallMs = br() - t,
                        [2, n]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.track = function(e) {
            return null != this.state.activeScope && (e.scopeId = this.state.activeScope.id,
            this.state.activeScope.track.push(e)),
            e
        }
        ,
        Object.defineProperty(e.prototype, "registeredVariables", {
            get: function() {
                return this.state.registeredVariables
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.reset = function() {
            for (var e in this.pendingBackendInitId++,
            this.state.dispose(),
            this.ENV.reset(),
            this.state = new Jr,
            this.registry)
                this.disposeRegisteredKernels(e),
                this.registry[e].dispose(),
                delete this.registry[e];
            this.backendName = null,
            this.backendInstance = null,
            this.pendingBackendInit = null
        }
        ,
        e
    }();
    function Yr() {
        var t = Q();
        if (null == t._tfengine) {
            var n = new Z(t);
            t._tfengine = new Zr(n)
        }
        return function(t) {
            e.ENV = t
        }(t._tfengine.ENV),
        Dr = function() {
            return t._tfengine
        }
        ,
        t._tfengine
    }
    Zr.nextTensorId = 0,
    Zr.nextVariableId = 0;
    var Xr, $r = Yr();
    function Qr(e, t) {
        var n = {
            a: e,
            b: t
        };
        return $r.runKernel(re, n)
    }
    function ea() {
        return "undefined" != typeof window && null != window.document || "undefined" != typeof WorkerGlobalScope
    }
    var ta = {
        __proto__: null,
        mockIsMobile: function(e) {
            Xr = e
        },
        isMobile: function(e) {
            if (void 0 !== Xr)
                return Xr;
            if (e || "undefined" != typeof navigator && null != navigator) {
                if (e || (e = navigator),
                "ReactNative" === e.product)
                    return !0;
                var t = e.userAgent || e.vendor || ("undefined" != typeof window ? window.opera : "");
                if (!t) {
                    var n = e;
                    return n.userAgentData && n.userAgentData.mobile
                }
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))
            }
            return !1
        },
        isBrowser: ea
    }
      , na = $();
    function ra(e, t) {
        var n = e;
        if (D(e))
            return "string" === t ? [] : [e.length];
        if (!Array.isArray(e))
            return [];
        for (var r = []; Array.isArray(n) || D(n) && "string" !== t; )
            r.push(n.length),
            n = n[0];
        return Array.isArray(e) && $().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && aa(e, r, []),
        r
    }
    function aa(e, t, n) {
        if (n = n || [],
        Array.isArray(e) || D(e)) {
            m(t.length > 0, (function() {
                return "Element arr[" + n.join("][") + "] should be a primitive, but is an array of " + e.length + " elements"
            }
            )),
            m(e.length === t[0], (function() {
                return "Element arr[" + n.join("][") + "] should have " + t[0] + " elements, but has " + e.length + " elements"
            }
            ));
            for (var r = t.slice(1), a = 0; a < e.length; ++a)
                aa(e[a], r, n.concat(a))
        } else
            m(0 === t.length, (function() {
                return "Element arr[" + n.join("][") + "] is a primitive, but should be an array/TypedArray of " + t[0] + " elements"
            }
            ))
    }
    function ia(e, t, n, r) {
        if ("string_or_numeric" !== e) {
            if (null == e)
                throw new Error("Expected dtype cannot be null.");
            if ("numeric" !== e && e !== t || "numeric" === e && "string" === t)
                throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + e + " tensor, but got " + t + " tensor")
        }
    }
    function oa(e, t, n, r) {
        if (void 0 === r && (r = "numeric"),
        e instanceof Br)
            return ia(r, e.dtype, t, n),
            e;
        var a = O(e);
        if ("string" !== a && ["bool", "int32", "float32"].indexOf(r) >= 0 && (a = r),
        ia(r, a, t, n),
        null == e || !D(e) && !Array.isArray(e) && "number" != typeof e && "boolean" != typeof e && "string" != typeof e) {
            var i = null == e ? "null" : e.constructor.name;
            throw new Error("Argument '" + t + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + i + "'")
        }
        var o = ra(e, a);
        D(e) || Array.isArray(e) || (e = [e]);
        var s = "string" !== a ? yr(e, a) : w(e, [], !0);
        return $r.makeTensor(s, o, a)
    }
    function sa(e, t, n, r) {
        if (void 0 === r && (r = "numeric"),
        !Array.isArray(e))
            throw new Error("Argument " + t + " passed to " + n + " must be a `Tensor[]` or `TensorLike[]`");
        return e.map((function(e, a) {
            return oa(e, t + "[" + a + "]", n, r)
        }
        ))
    }
    na.registerFlag("DEBUG", (function() {
        return !1
    }
    ), (function(e) {
        e && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")
    }
    )),
    na.registerFlag("IS_BROWSER", (function() {
        return ea()
    }
    )),
    na.registerFlag("IS_NODE", (function() {
        return "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.node
    }
    )),
    na.registerFlag("IS_CHROME", (function() {
        return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    }
    )),
    na.registerFlag("PROD", (function() {
        return !1
    }
    )),
    na.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY", (function() {
        return na.getBool("DEBUG")
    }
    )),
    na.registerFlag("DEPRECATION_WARNINGS_ENABLED", (function() {
        return !0
    }
    )),
    na.registerFlag("IS_TEST", (function() {
        return !1
    }
    )),
    na.registerFlag("CHECK_COMPUTATION_FOR_ERRORS", (function() {
        return !0
    }
    )),
    na.registerFlag("WRAP_TO_IMAGEBITMAP", (function() {
        return !1
    }
    ));
    var ua = "__op";
    function la(e) {
        var t = Object.keys(e);
        if (1 !== t.length)
            throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + t.length + " keys.");
        var n = t[0]
          , r = e[n];
        n.endsWith("_") && (n = n.substring(0, n.length - 1)),
        n += ua;
        var a = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            $r.startScope(n);
            try {
                var a = r.apply(void 0, c(e));
                return H(a) && console.error("Cannot return a Promise inside of tidy."),
                $r.endScope(a),
                a
            } catch (e) {
                throw $r.endScope(null),
                e
            }
        };
        return Object.defineProperty(a, "name", {
            value: n,
            configurable: !0
        }),
        a
    }
    var ca = la({
        complex_: function(e, t) {
            var n = oa(e, "real", "complex")
              , r = oa(t, "imag", "complex");
            y(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex().");
            var a = {
                real: n,
                imag: r
            };
            return $r.runKernel(ke, a)
        }
    });
    function ha(e, t, n, r) {
        if (null == r && (r = O(e)),
        "complex64" === r)
            throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
        if (!D(e) && !Array.isArray(e) && "number" != typeof e && "boolean" != typeof e && "string" != typeof e)
            throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
        if (null != t) {
            V(t);
            var a = k(t)
              , i = k(n);
            m(a === i, (function() {
                return "Based on the provided shape, [" + t + "], the tensor should have " + a + " values but has " + i
            }
            ));
            for (var o = 0; o < n.length; ++o) {
                var s = n[o]
                  , u = o !== n.length - 1 || s !== k(t.slice(o));
                m(n[o] === t[o] || !u, (function() {
                    return "Error creating a new Tensor. Inferred shape (" + n + ") does not match the provided shape (" + t + "). "
                }
                ))
            }
        }
        return D(e) || Array.isArray(e) || (e = [e]),
        t = t || n,
        e = "string" !== r ? yr(e, r) : w(e, [], !0),
        $r.makeTensor(e, t, r)
    }
    function fa(e, t, n) {
        return ha(e, t, ra(e, n), n)
    }
    var da = {
        float32: 4,
        float16: 2,
        int32: 4,
        uint16: 2,
        uint8: 1,
        bool: 1,
        complex64: 8
    };
    function pa(e, t) {
        var n, r, a, i = {}, o = 0;
        try {
            for (var s = u(t), l = s.next(); !l.done; l = s.next()) {
                var c = l.value
                  , h = c.name
                  , f = c.dtype
                  , d = c.shape
                  , p = k(d)
                  , v = void 0;
                if ("quantization"in c) {
                    var g = c.quantization;
                    if ("uint8" === g.dtype || "uint16" === g.dtype) {
                        if (!("min"in g) || !("scale"in g))
                            throw new Error("Weight " + c.name + " with quantization " + g.dtype + " doesn't have corresponding metadata min and scale.")
                    } else {
                        if ("float16" !== g.dtype)
                            throw new Error("Weight " + c.name + " has unknown quantization dtype " + g.dtype + ". Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.");
                        if ("float32" !== f)
                            throw new Error("Weight " + c.name + " is quantized with " + g.dtype + " which only supports weights of type float32 not " + f + ".")
                    }
                    var m = da[g.dtype]
                      , y = e.slice(o, o + p * m)
                      , b = "uint8" === g.dtype ? new Uint8Array(y) : new Uint16Array(y);
                    if ("float32" === f)
                        if ("uint8" === g.dtype || "uint16" === g.dtype) {
                            v = new Float32Array(b.length);
                            for (var w = 0; w < b.length; w++) {
                                var x = b[w];
                                v[w] = x * g.scale + g.min
                            }
                        } else {
                            if ("float16" !== g.dtype)
                                throw new Error("Unsupported quantization type " + g.dtype + " for weight type float32.");
                            void 0 === a && (a = Ea()),
                            v = a(b)
                        }
                    else {
                        if ("int32" !== f)
                            throw new Error("Unsupported dtype in weight '" + h + "': " + f);
                        if ("uint8" !== g.dtype && "uint16" !== g.dtype)
                            throw new Error("Unsupported quantization type " + g.dtype + " for weight type int32.");
                        v = new Int32Array(b.length);
                        for (w = 0; w < b.length; w++) {
                            x = b[w];
                            v[w] = Math.round(x * g.scale + g.min)
                        }
                    }
                    o += p * m
                } else if ("string" === f) {
                    var E = k(c.shape);
                    v = [];
                    for (w = 0; w < E; w++) {
                        var S = new Uint32Array(e.slice(o, o + 4))[0];
                        o += 4;
                        var A = new Uint8Array(e.slice(o, o + S));
                        v.push(A),
                        o += S
                    }
                } else {
                    var _ = da[f];
                    y = e.slice(o, o + p * _);
                    if ("float32" === f)
                        v = new Float32Array(y);
                    else if ("int32" === f)
                        v = new Int32Array(y);
                    else if ("bool" === f)
                        v = new Uint8Array(y);
                    else {
                        if ("complex64" !== f)
                            throw new Error("Unsupported dtype in weight '" + h + "': " + f);
                        v = new Float32Array(y);
                        var I = new Float32Array(v.length / 2)
                          , M = new Float32Array(v.length / 2);
                        for (w = 0; w < I.length; w++)
                            I[w] = v[2 * w],
                            M[w] = v[2 * w + 1];
                        var N = fa(I, d, "float32")
                          , T = fa(M, d, "float32");
                        i[h] = ca(N, T),
                        N.dispose(),
                        T.dispose()
                    }
                    o += p * _
                }
                "complex64" !== f && (i[h] = fa(v, d, f))
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                l && !l.done && (r = s.return) && r.call(s)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return i
    }
    function va(e) {
        if (null === e)
            throw new Error("Invalid input value: " + JSON.stringify(e));
        var t = 0
          , n = [];
        e.forEach((function(e) {
            if (t += e.byteLength,
            n.push(e.byteLength === e.buffer.byteLength ? e : new e.constructor(e)),
            !(e instanceof Float32Array || e instanceof Int32Array || e instanceof Uint8Array))
                throw new Error("Unsupported TypedArray subtype: " + e.constructor.name)
        }
        ));
        var r = new Uint8Array(t)
          , a = 0;
        return n.forEach((function(e) {
            r.set(new Uint8Array(e.buffer), a),
            a += e.byteLength
        }
        )),
        r.buffer
    }
    var ga = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);
    function ma(e) {
        return ga ? Buffer.byteLength(e) : new Blob([e]).size
    }
    function ya(e) {
        if (1 === e.length)
            return e[0];
        var t = 0;
        e.forEach((function(e) {
            t += e.byteLength
        }
        ));
        var n = new Uint8Array(t)
          , r = 0;
        return e.forEach((function(e) {
            n.set(new Uint8Array(e), r),
            r += e.byteLength
        }
        )),
        n.buffer
    }
    function ba(e) {
        for (e = e.trim(); e.endsWith("/"); )
            e = e.slice(0, e.length - 1);
        var t = e.split("/");
        return t[t.length - 1]
    }
    function wa(e, t) {
        var n = {
            modelTopology: e.modelTopology,
            format: e.format,
            generatedBy: e.generatedBy,
            convertedBy: e.convertedBy,
            weightsManifest: t
        };
        return null != e.signature && (n.signature = e.signature),
        null != e.userDefinedMetadata && (n.userDefinedMetadata = e.userDefinedMetadata),
        null != e.modelInitializer && (n.modelInitializer = e.modelInitializer),
        null != e.trainingConfig && (n.trainingConfig = e.trainingConfig),
        n
    }
    function ka(e, t) {
        return o(this, void 0, void 0, (function() {
            var n, r, a, i;
            return s(this, (function(o) {
                switch (o.label) {
                case 0:
                    return n = {
                        modelTopology: e.modelTopology,
                        format: e.format,
                        generatedBy: e.generatedBy,
                        convertedBy: e.convertedBy
                    },
                    null != e.trainingConfig && (n.trainingConfig = e.trainingConfig),
                    null == e.weightsManifest ? [3, 2] : [4, t(e.weightsManifest)];
                case 1:
                    r = l.apply(void 0, [o.sent(), 2]),
                    a = r[0],
                    i = r[1],
                    n.weightSpecs = a,
                    n.weightData = i,
                    o.label = 2;
                case 2:
                    return null != e.signature && (n.signature = e.signature),
                    null != e.userDefinedMetadata && (n.userDefinedMetadata = e.userDefinedMetadata),
                    null != e.modelInitializer && (n.modelInitializer = e.modelInitializer),
                    [2, n]
                }
            }
            ))
        }
        ))
    }
    function xa(e) {
        if (e.modelTopology instanceof ArrayBuffer)
            throw new Error("Expected JSON model topology, received ArrayBuffer.");
        return {
            dateSaved: new Date,
            modelTopologyType: "JSON",
            modelTopologyBytes: null == e.modelTopology ? 0 : ma(JSON.stringify(e.modelTopology)),
            weightSpecsBytes: null == e.weightSpecs ? 0 : ma(JSON.stringify(e.weightSpecs)),
            weightDataBytes: null == e.weightData ? 0 : e.weightData.byteLength
        }
    }
    function Ea() {
        var e = function() {
            var e = function(e) {
                for (var t = e << 13, n = 0; 0 == (8388608 & t); )
                    n -= 8388608,
                    t <<= 1;
                return (t &= -8388609) | n + 947912704
            }
              , t = new Uint32Array(2048);
            t[0] = 0;
            for (var n = 1; n < 1024; n++)
                t[n] = e(n);
            for (n = 1024; n < 2048; n++)
                t[n] = 939524096 + (n - 1024 << 13);
            return t
        }()
          , t = function() {
            var e = new Uint32Array(64);
            e[0] = 0,
            e[31] = 1199570944,
            e[32] = 2147483648,
            e[63] = 3347054592;
            for (var t = 1; t < 31; t++)
                e[t] = t << 23;
            for (t = 33; t < 63; t++)
                e[t] = 2147483648 + (t - 32 << 23);
            return e
        }()
          , n = function() {
            for (var e = new Uint32Array(64), t = 0; t < 64; t++)
                e[t] = 1024;
            return e[0] = e[32] = 0,
            e
        }();
        return function(r) {
            for (var a = new ArrayBuffer(4 * r.length), i = new Uint32Array(a), o = 0; o < r.length; o++) {
                var s = r[o]
                  , u = e[n[s >> 10] + (1023 & s)] + t[s >> 10];
                i[o] = u
            }
            return new Float32Array(a)
        }
    }
    var Sa = function() {
        function e() {
            this.saveRouters = [],
            this.loadRouters = []
        }
        return e.getInstance = function() {
            return null == e.instance && (e.instance = new e),
            e.instance
        }
        ,
        e.registerSaveRouter = function(t) {
            e.getInstance().saveRouters.push(t)
        }
        ,
        e.registerLoadRouter = function(t) {
            e.getInstance().loadRouters.push(t)
        }
        ,
        e.getSaveHandlers = function(t) {
            return e.getHandlers(t, "save")
        }
        ,
        e.getLoadHandlers = function(t, n) {
            return e.getHandlers(t, "load", n)
        }
        ,
        e.getHandlers = function(t, n, r) {
            var a = [];
            return ("load" === n ? e.getInstance().loadRouters : e.getInstance().saveRouters).forEach((function(e) {
                var n = e(t, r);
                null !== n && a.push(n)
            }
            )),
            a
        }
        ,
        e
    }()
      , Aa = "tensorflowjs"
      , _a = "models_store"
      , Ia = "model_info_store";
    function Ma() {
        if (!$().getBool("IS_BROWSER"))
            throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
        var e = "undefined" == typeof window ? self : window
          , t = e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB || e.shimIndexedDB;
        if (null == t)
            throw new Error("The current browser does not appear to support IndexedDB.");
        return t
    }
    function Na(e) {
        var t = e.result;
        t.createObjectStore(_a, {
            keyPath: "modelPath"
        }),
        t.createObjectStore(Ia, {
            keyPath: "modelPath"
        })
    }
    var Ta = function() {
        function e(e) {
            if (this.indexedDB = Ma(),
            null == e || !e)
                throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
            this.modelPath = e
        }
        return e.prototype.save = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(t) {
                    if (e.modelTopology instanceof ArrayBuffer)
                        throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                    return [2, this.databaseAction(this.modelPath, e)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.load = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    return [2, this.databaseAction(this.modelPath)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.databaseAction = function(e, t) {
            var n = this;
            return new Promise((function(e, r) {
                var a = n.indexedDB.open(Aa, 1);
                a.onupgradeneeded = function() {
                    return Na(a)
                }
                ,
                a.onsuccess = function() {
                    var i = a.result;
                    if (null == t) {
                        var o = i.transaction(_a, "readonly")
                          , s = o.objectStore(_a).get(n.modelPath);
                        s.onsuccess = function() {
                            if (null == s.result)
                                return i.close(),
                                r(new Error("Cannot find model with path '" + n.modelPath + "' in IndexedDB."));
                            e(s.result.modelArtifacts)
                        }
                        ,
                        s.onerror = function(e) {
                            return i.close(),
                            r(s.error)
                        }
                        ,
                        o.oncomplete = function() {
                            return i.close()
                        }
                    } else {
                        var u, l = xa(t), c = i.transaction(Ia, "readwrite"), h = c.objectStore(Ia), f = h.put({
                            modelPath: n.modelPath,
                            modelArtifactsInfo: l
                        });
                        f.onsuccess = function() {
                            var a = (u = i.transaction(_a, "readwrite")).objectStore(_a).put({
                                modelPath: n.modelPath,
                                modelArtifacts: t,
                                modelArtifactsInfo: l
                            });
                            a.onsuccess = function() {
                                return e({
                                    modelArtifactsInfo: l
                                })
                            }
                            ,
                            a.onerror = function(e) {
                                var t = (h = c.objectStore(Ia)).delete(n.modelPath);
                                t.onsuccess = function() {
                                    return i.close(),
                                    r(a.error)
                                }
                                ,
                                t.onerror = function(e) {
                                    return i.close(),
                                    r(a.error)
                                }
                            }
                        }
                        ,
                        f.onerror = function(e) {
                            return i.close(),
                            r(f.error)
                        }
                        ,
                        c.oncomplete = function() {
                            null == u ? i.close() : u.oncomplete = function() {
                                return i.close()
                            }
                        }
                    }
                }
                ,
                a.onerror = function(e) {
                    return r(a.error)
                }
            }
            ))
        }
        ,
        e
    }();
    Ta.URL_SCHEME = "indexeddb://";
    var Da = function(e) {
        return $().getBool("IS_BROWSER") && !Array.isArray(e) && e.startsWith(Ta.URL_SCHEME) ? (t = e.slice(Ta.URL_SCHEME.length),
        new Ta(t)) : null;
        var t
    };
    Sa.registerSaveRouter(Da),
    Sa.registerLoadRouter(Da);
    var Ra = function() {
        function e() {
            this.indexedDB = Ma()
        }
        return e.prototype.listModels = function() {
            return o(this, void 0, void 0, (function() {
                var e = this;
                return s(this, (function(t) {
                    return [2, new Promise((function(t, n) {
                        var r = e.indexedDB.open(Aa, 1);
                        r.onupgradeneeded = function() {
                            return Na(r)
                        }
                        ,
                        r.onsuccess = function() {
                            var e = r.result
                              , a = e.transaction(Ia, "readonly")
                              , i = a.objectStore(Ia).getAll();
                            i.onsuccess = function() {
                                var e, n, r = {};
                                try {
                                    for (var a = u(i.result), o = a.next(); !o.done; o = a.next()) {
                                        var s = o.value;
                                        r[s.modelPath] = s.modelArtifactsInfo
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        o && !o.done && (n = a.return) && n.call(a)
                                    } finally {
                                        if (e)
                                            throw e.error
                                    }
                                }
                                t(r)
                            }
                            ,
                            i.onerror = function(t) {
                                return e.close(),
                                n(i.error)
                            }
                            ,
                            a.oncomplete = function() {
                                return e.close()
                            }
                        }
                        ,
                        r.onerror = function(e) {
                            return n(r.error)
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.removeModel = function(e) {
            return o(this, void 0, void 0, (function() {
                var t = this;
                return s(this, (function(n) {
                    var r;
                    return e = (r = e).startsWith(Ta.URL_SCHEME) ? r.slice(Ta.URL_SCHEME.length) : r,
                    [2, new Promise((function(n, r) {
                        var a = t.indexedDB.open(Aa, 1);
                        a.onupgradeneeded = function() {
                            return Na(a)
                        }
                        ,
                        a.onsuccess = function() {
                            var t, i = a.result, o = i.transaction(Ia, "readwrite"), s = o.objectStore(Ia), u = s.get(e);
                            u.onsuccess = function() {
                                if (null == u.result)
                                    return i.close(),
                                    r(new Error("Cannot find model with path '" + e + "' in IndexedDB."));
                                var a = s.delete(e)
                                  , o = function() {
                                    var a = (t = i.transaction(_a, "readwrite")).objectStore(_a).delete(e);
                                    a.onsuccess = function() {
                                        return n(u.result.modelArtifactsInfo)
                                    }
                                    ,
                                    a.onerror = function(e) {
                                        return r(u.error)
                                    }
                                };
                                a.onsuccess = o,
                                a.onerror = function(e) {
                                    return o(),
                                    i.close(),
                                    r(u.error)
                                }
                            }
                            ,
                            u.onerror = function(e) {
                                return i.close(),
                                r(u.error)
                            }
                            ,
                            o.oncomplete = function() {
                                null == t ? i.close() : t.oncomplete = function() {
                                    return i.close()
                                }
                            }
                        }
                        ,
                        a.onerror = function(e) {
                            return r(a.error)
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , Ba = "/"
      , Fa = "tensorflowjs_models"
      , Ca = "info"
      , Pa = "model_topology"
      , Oa = "weight_specs"
      , La = "weight_data"
      , za = "model_metadata";
    function qa(e) {
        return {
            info: [Fa, e, Ca].join(Ba),
            topology: [Fa, e, Pa].join(Ba),
            weightSpecs: [Fa, e, Oa].join(Ba),
            weightData: [Fa, e, La].join(Ba),
            modelMetadata: [Fa, e, za].join(Ba)
        }
    }
    function Ka(e) {
        var t, n;
        try {
            for (var r = u(Object.values(e)), a = r.next(); !a.done; a = r.next()) {
                var i = a.value;
                window.localStorage.removeItem(i)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (n = r.return) && n.call(r)
            } finally {
                if (t)
                    throw t.error
            }
        }
    }
    function Wa(e) {
        var t = e.split(Ba);
        if (t.length < 3)
            throw new Error("Invalid key format: " + e);
        return t.slice(1, t.length - 1).join(Ba)
    }
    var Ga = function() {
        function e(e) {
            if (!$().getBool("IS_BROWSER") || "undefined" == typeof window || "undefined" == typeof window.localStorage)
                throw new Error("The current environment does not support local storage.");
            if (this.LS = window.localStorage,
            null == e || !e)
                throw new Error("For local storage, modelPath must not be null, undefined or empty.");
            this.modelPath = e,
            this.keys = qa(this.modelPath)
        }
        return e.prototype.save = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n, r, a;
                return s(this, (function(i) {
                    if (e.modelTopology instanceof ArrayBuffer)
                        throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                    t = JSON.stringify(e.modelTopology),
                    n = JSON.stringify(e.weightSpecs),
                    r = xa(e);
                    try {
                        return this.LS.setItem(this.keys.info, JSON.stringify(r)),
                        this.LS.setItem(this.keys.topology, t),
                        this.LS.setItem(this.keys.weightSpecs, n),
                        this.LS.setItem(this.keys.weightData, function(e) {
                            if (ga)
                                return Buffer.from(e).toString("base64");
                            for (var t = new Uint8Array(e), n = "", r = 0, a = t.length; r < a; r++)
                                n += String.fromCharCode(t[r]);
                            return btoa(n)
                        }(e.weightData)),
                        a = {
                            format: e.format,
                            generatedBy: e.generatedBy,
                            convertedBy: e.convertedBy,
                            signature: null != e.signature ? e.signature : void 0,
                            userDefinedMetadata: null != e.userDefinedMetadata ? e.userDefinedMetadata : void 0,
                            modelInitializer: null != e.modelInitializer ? e.modelInitializer : void 0,
                            trainingConfig: null != e.trainingConfig ? e.trainingConfig : void 0
                        },
                        this.LS.setItem(this.keys.modelMetadata, JSON.stringify(a)),
                        [2, {
                            modelArtifactsInfo: r
                        }]
                    } catch (e) {
                        throw Ka(this.keys),
                        new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + r.modelTopologyBytes + ", weightSpecsBytes=" + r.weightSpecsBytes + ", weightDataBytes=" + r.weightDataBytes + ".")
                    }
                    return [2]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.load = function() {
            return o(this, void 0, void 0, (function() {
                var e, t, n, r, a, i, o;
                return s(this, (function(s) {
                    if (null == (e = JSON.parse(this.LS.getItem(this.keys.info))))
                        throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
                    if ("JSON" !== e.modelTopologyType)
                        throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
                    if (t = {},
                    null == (n = JSON.parse(this.LS.getItem(this.keys.topology))))
                        throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
                    if (t.modelTopology = n,
                    null == (r = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
                        throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
                    if (t.weightSpecs = r,
                    null != (a = this.LS.getItem(this.keys.modelMetadata)) && (i = JSON.parse(a),
                    t.format = i.format,
                    t.generatedBy = i.generatedBy,
                    t.convertedBy = i.convertedBy,
                    null != i.signature && (t.signature = i.signature),
                    null != i.userDefinedMetadata && (t.userDefinedMetadata = i.userDefinedMetadata),
                    null != i.modelInitializer && (t.modelInitializer = i.modelInitializer),
                    null != i.trainingConfig && (t.trainingConfig = i.trainingConfig)),
                    null == (o = this.LS.getItem(this.keys.weightData)))
                        throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
                    return t.weightData = function(e) {
                        if (ga) {
                            var t = Buffer.from(e, "base64");
                            return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)
                        }
                        for (var n = atob(e), r = new Uint8Array(n.length), a = 0; a < n.length; ++a)
                            r.set([n.charCodeAt(a)], a);
                        return r.buffer
                    }(o),
                    [2, t]
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    Ga.URL_SCHEME = "localstorage://";
    var Ua = function(e) {
        return $().getBool("IS_BROWSER") && !Array.isArray(e) && e.startsWith(Ga.URL_SCHEME) ? (t = e.slice(Ga.URL_SCHEME.length),
        new Ga(t)) : null;
        var t
    };
    Sa.registerSaveRouter(Ua),
    Sa.registerLoadRouter(Ua);
    var Va = function() {
        function e() {
            m($().getBool("IS_BROWSER"), (function() {
                return "Current environment is not a web browser"
            }
            )),
            m("undefined" == typeof window || "undefined" != typeof window.localStorage, (function() {
                return "Current browser does not appear to support localStorage"
            }
            )),
            this.LS = window.localStorage
        }
        return e.prototype.listModels = function() {
            return o(this, void 0, void 0, (function() {
                var e, t, n, r, a, i;
                return s(this, (function(o) {
                    for (e = {},
                    t = Fa + Ba,
                    n = Ba + Ca,
                    r = 0; r < this.LS.length; ++r)
                        (a = this.LS.key(r)).startsWith(t) && a.endsWith(n) && (i = Wa(a),
                        e[i] = JSON.parse(this.LS.getItem(a)));
                    return [2, e]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.removeModel = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n;
                return s(this, (function(r) {
                    var a;
                    if (e = (a = e).startsWith(Ga.URL_SCHEME) ? a.slice(Ga.URL_SCHEME.length) : a,
                    t = qa(e),
                    null == this.LS.getItem(t.info))
                        throw new Error("Cannot find model at path '" + e + "'");
                    return n = JSON.parse(this.LS.getItem(t.info)),
                    Ka(t),
                    [2, n]
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , Ha = "://"
      , ja = function() {
        function e() {
            this.managers = {}
        }
        return e.getInstance = function() {
            return null == e.instance && (e.instance = new e),
            e.instance
        }
        ,
        e.registerManager = function(t, n) {
            m(null != t, (function() {
                return "scheme must not be undefined or null."
            }
            )),
            t.endsWith(Ha) && (t = t.slice(0, t.indexOf(Ha))),
            m(t.length > 0, (function() {
                return "scheme must not be an empty string."
            }
            ));
            var r = e.getInstance();
            m(null == r.managers[t], (function() {
                return "A model store manager is already registered for scheme '" + t + "'."
            }
            )),
            r.managers[t] = n
        }
        ,
        e.getManager = function(e) {
            var t = this.getInstance().managers[e];
            if (null == t)
                throw new Error("Cannot find model manager for scheme '" + e + "'");
            return t
        }
        ,
        e.getSchemes = function() {
            return Object.keys(this.getInstance().managers)
        }
        ,
        e
    }();
    function Ja(e) {
        if (-1 === e.indexOf(Ha))
            throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + ja.getSchemes().join(","));
        return {
            scheme: e.split(Ha)[0],
            path: e.split(Ha)[1]
        }
    }
    function Za(e, t, n) {
        return void 0 === n && (n = !1),
        o(this, void 0, void 0, (function() {
            var r, a, i, o, u, l, c, h, f;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return m(e !== t, (function() {
                        return "Old path and new path are the same: '" + e + "'"
                    }
                    )),
                    m((r = Sa.getLoadHandlers(e)).length > 0, (function() {
                        return "Copying failed because no load handler is found for source URL " + e + "."
                    }
                    )),
                    m(r.length < 2, (function() {
                        return "Copying failed because more than one (" + r.length + ") load handlers for source URL " + e + "."
                    }
                    )),
                    a = r[0],
                    m((i = Sa.getSaveHandlers(t)).length > 0, (function() {
                        return "Copying failed because no save handler is found for destination URL " + t + "."
                    }
                    )),
                    m(i.length < 2, (function() {
                        return "Copying failed because more than one (" + r.length + ") save handlers for destination URL " + t + "."
                    }
                    )),
                    o = i[0],
                    u = Ja(e).scheme,
                    l = Ja(e).path,
                    c = u === Ja(e).scheme,
                    [4, a.load()];
                case 1:
                    return h = s.sent(),
                    n && c ? [4, ja.getManager(u).removeModel(l)] : [3, 3];
                case 2:
                    s.sent(),
                    s.label = 3;
                case 3:
                    return [4, o.save(h)];
                case 4:
                    return f = s.sent(),
                    !n || c ? [3, 6] : [4, ja.getManager(u).removeModel(l)];
                case 5:
                    s.sent(),
                    s.label = 6;
                case 6:
                    return [2, f.modelArtifactsInfo]
                }
            }
            ))
        }
        ))
    }
    var Ya = function() {
        function e() {}
        return e.prototype.fetch = function(e, t) {
            return fetch(e, t)
        }
        ,
        e.prototype.now = function() {
            return performance.now()
        }
        ,
        e.prototype.encode = function(e, t) {
            if ("utf-8" !== t && "utf8" !== t)
                throw new Error("Browser's encoder only supports utf-8, but got " + t);
            return null == this.textEncoder && (this.textEncoder = new TextEncoder),
            this.textEncoder.encode(e)
        }
        ,
        e.prototype.decode = function(e, t) {
            return new TextDecoder(t).decode(e)
        }
        ,
        e
    }();
    if ($().get("IS_BROWSER")) {
        $().setPlatform("browser", new Ya);
        try {
            ja.registerManager(Ga.URL_SCHEME, new Va)
        } catch (e) {}
        try {
            ja.registerManager(Ta.URL_SCHEME, new Ra)
        } catch (e) {}
    }
    var Xa, $a = function() {
        return require("node-fetch")
    }, Qa = function() {
        function e() {
            this.util = require("util"),
            this.textEncoder = new this.util.TextEncoder
        }
        return e.prototype.fetch = function(e, t) {
            return null != $().global.fetch ? $().global.fetch(e, t) : (null == Xa && (Xa = $a()),
            Xa(e, t))
        }
        ,
        e.prototype.now = function() {
            var e = process.hrtime();
            return 1e3 * e[0] + e[1] / 1e6
        }
        ,
        e.prototype.encode = function(e, t) {
            if ("utf-8" !== t && "utf8" !== t)
                throw new Error("Node built-in encoder only supports utf-8, but got " + t);
            return this.textEncoder.encode(e)
        }
        ,
        e.prototype.decode = function(e, t) {
            return 0 === e.length ? "" : new this.util.TextDecoder(t).decode(e)
        }
        ,
        e
    }();
    function ei(e, t, n) {
        return void 0 === t && (t = "float32"),
        t = t || "float32",
        V(e),
        new Tr(e,t,n)
    }
    $().get("IS_NODE") && $().setPlatform("node", new Qa);
    var ti = la({
        cast_: function(e, t) {
            var n = oa(e, "x", "cast");
            if (!T(t))
                throw new Error("Failed to cast to unknown dtype " + t);
            if ("string" === t && "string" !== n.dtype || "string" !== t && "string" === n.dtype)
                throw new Error("Only strings can be casted to strings");
            var r = {
                x: n
            }
              , a = {
                dtype: t
            };
            return $r.runKernel(ye, r, a)
        }
    });
    var ni = la({
        clone_: function(e) {
            var t = {
                x: oa(e, "x", "clone", "string_or_numeric")
            };
            return $r.runKernel(Qe, t)
        }
    });
    function ri(e, t) {
        void 0 === t && (t = !1),
        console.log(e.toString(t))
    }
    Yr(),
    Rr = {
        buffer: ei,
        cast: ti,
        clone: ni,
        print: ri
    };
    function ai(e) {
        return new Promise((function(e) {
            return setTimeout(e)
        }
        )).then(e)
    }
    var ii = function() {
        function e(t) {
            if (!$().getBool("IS_BROWSER"))
                throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
            t.startsWith(e.URL_SCHEME) && (t = t.slice(e.URL_SCHEME.length)),
            null != t && 0 !== t.length || (t = "model"),
            this.modelJsonFileName = t + ".json",
            this.weightDataFileName = t + ".weights.bin"
        }
        return e.prototype.save = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n, r, a, i, o;
                return s(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        if ("undefined" == typeof document)
                            throw new Error("Browser downloads are not supported in this environment since `document` is not present");
                        if (t = window.URL.createObjectURL(new Blob([e.weightData],{
                            type: "application/octet-stream"
                        })),
                        !(e.modelTopology instanceof ArrayBuffer))
                            return [3, 1];
                        throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
                    case 1:
                        return n = [{
                            paths: ["./" + this.weightDataFileName],
                            weights: e.weightSpecs
                        }],
                        r = wa(e, n),
                        a = window.URL.createObjectURL(new Blob([JSON.stringify(r)],{
                            type: "application/json"
                        })),
                        (i = null == this.modelJsonAnchor ? document.createElement("a") : this.modelJsonAnchor).download = this.modelJsonFileName,
                        i.href = a,
                        [4, ai((function() {
                            return i.dispatchEvent(new MouseEvent("click"))
                        }
                        ))];
                    case 2:
                        return s.sent(),
                        null == e.weightData ? [3, 4] : ((o = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName,
                        o.href = t,
                        [4, ai((function() {
                            return o.dispatchEvent(new MouseEvent("click"))
                        }
                        ))]);
                    case 3:
                        s.sent(),
                        s.label = 4;
                    case 4:
                        return [2, {
                            modelArtifactsInfo: xa(e)
                        }]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    ii.URL_SCHEME = "downloads://";
    var oi = function() {
        function e(e) {
            if (null == e || e.length < 1)
                throw new Error("When calling browserFiles, at least 1 file is required, but received " + e);
            this.jsonFile = e[0],
            this.weightsFiles = e.slice(1)
        }
        return e.prototype.load = function() {
            return o(this, void 0, void 0, (function() {
                var e = this;
                return s(this, (function(t) {
                    return [2, new Promise((function(t, n) {
                        var r = new FileReader;
                        r.onload = function(r) {
                            var a = JSON.parse(r.target.result)
                              , i = a.modelTopology;
                            if (null != i)
                                if (null != a.weightsManifest)
                                    if (0 !== e.weightsFiles.length) {
                                        var o = ka(a, (function(t) {
                                            return e.loadWeights(t)
                                        }
                                        ));
                                        t(o)
                                    } else
                                        t({
                                            modelTopology: i
                                        });
                                else
                                    n(new Error("weightManifest field is missing from file " + e.jsonFile.name));
                            else
                                n(new Error("modelTopology field is missing from file " + e.jsonFile.name))
                        }
                        ,
                        r.onerror = function(t) {
                            return n("Failed to read model topology and weights manifest JSON from file '" + e.jsonFile.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")
                        }
                        ,
                        r.readAsText(e.jsonFile)
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.loadWeights = function(e) {
            var t, n, r = this, a = [], i = [];
            try {
                for (var o = u(e), s = o.next(); !s.done; s = o.next()) {
                    var l = s.value;
                    a.push.apply(a, c(l.weights)),
                    i.push.apply(i, c(l.paths))
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    s && !s.done && (n = o.return) && n.call(o)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            var h = this.checkManifestAndWeightFiles(e)
              , f = i.map((function(e) {
                return r.loadWeightsFile(e, h[e])
            }
            ));
            return Promise.all(f).then((function(e) {
                return [a, ya(e)]
            }
            ))
        }
        ,
        e.prototype.loadWeightsFile = function(e, t) {
            return new Promise((function(n, r) {
                var a = new FileReader;
                a.onload = function(e) {
                    var t = e.target.result;
                    n(t)
                }
                ,
                a.onerror = function(t) {
                    return r("Failed to weights data from file of path '" + e + "'.")
                }
                ,
                a.readAsArrayBuffer(t)
            }
            ))
        }
        ,
        e.prototype.checkManifestAndWeightFiles = function(e) {
            var t, n, r = this, a = [], i = this.weightsFiles.map((function(e) {
                return ba(e.name)
            }
            )), o = {};
            try {
                for (var s = u(e), l = s.next(); !l.done; l = s.next()) {
                    l.value.paths.forEach((function(e) {
                        var t = ba(e);
                        if (-1 !== a.indexOf(t))
                            throw new Error("Duplicate file basename found in weights manifest: '" + t + "'");
                        if (a.push(t),
                        -1 === i.indexOf(t))
                            throw new Error("Weight file with basename '" + t + "' is not provided.");
                        o[e] = r.weightsFiles[i.indexOf(t)]
                    }
                    ))
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (n = s.return) && n.call(s)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            if (a.length !== this.weightsFiles.length)
                throw new Error("Mismatch in the number of files in weights manifest (" + a.length + ") and the number of weight files provided (" + this.weightsFiles.length + ").");
            return o
        }
        ,
        e
    }();
    function si(e, t, n, r) {
        !function(e) {
            m(null != e && Array.isArray(e) && e.length > 0, (function() {
                return "promises must be a none empty array"
            }
            ))
        }(e),
        function(e, t) {
            m(e >= 0 && e <= 1, (function() {
                return "Progress fraction must be in range [0, 1], but got startFraction " + e
            }
            )),
            m(t >= 0 && t <= 1, (function() {
                return "Progress fraction must be in range [0, 1], but got endFraction " + t
            }
            )),
            m(t >= e, (function() {
                return "startFraction must be no more than endFraction, but got startFraction " + e + " and endFraction " + t
            }
            ))
        }(n = null == n ? 0 : n, r = null == r ? 1 : r);
        var a = 0;
        return Promise.all(e.map((function(i) {
            return i.then((function(i) {
                var o = n + ++a / e.length * (r - n);
                return t(o),
                i
            }
            )),
            i
        }
        )))
    }
    function ui(e, t) {
        return o(this, void 0, void 0, (function() {
            var n, r, a, i, o, u, l, c, h;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return null == t && (t = {}),
                    n = null == t.fetchFunc ? $().platform.fetch : t.fetchFunc,
                    r = e.map((function(e) {
                        return n(e, t.requestInit, {
                            isBinary: !0
                        })
                    }
                    )),
                    a = 0,
                    i = .5,
                    null != t.onProgress ? [3, 2] : [4, Promise.all(r)];
                case 1:
                    return o = s.sent(),
                    [3, 4];
                case 2:
                    return [4, si(r, t.onProgress, a, i)];
                case 3:
                    o = s.sent(),
                    s.label = 4;
                case 4:
                    return u = o.map((function(e) {
                        return e.arrayBuffer()
                    }
                    )),
                    l = .5,
                    c = 1,
                    null != t.onProgress ? [3, 6] : [4, Promise.all(u)];
                case 5:
                    return h = s.sent(),
                    [3, 8];
                case 6:
                    return [4, si(u, t.onProgress, l, c)];
                case 7:
                    h = s.sent(),
                    s.label = 8;
                case 8:
                    return [2, h]
                }
            }
            ))
        }
        ))
    }
    function li(e) {
        var t = this;
        return function(n, r, a) {
            return void 0 === r && (r = ""),
            o(t, void 0, void 0, (function() {
                var t, i, o, u, l, c, h, f, d, p;
                return s(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        if (t = n.map((function() {
                            return !1
                        }
                        )),
                        i = {},
                        o = null != a ? a.map((function() {
                            return !1
                        }
                        )) : [],
                        u = [],
                        n.forEach((function(e, n) {
                            var r = 0;
                            e.weights.forEach((function(e) {
                                var s = "quantization"in e ? e.quantization.dtype : e.dtype
                                  , l = da[s] * k(e.shape)
                                  , c = function() {
                                    t[n] = !0,
                                    null == i[n] && (i[n] = []),
                                    i[n].push({
                                        manifestEntry: e,
                                        groupOffset: r,
                                        sizeBytes: l
                                    })
                                };
                                null != a ? a.forEach((function(t, n) {
                                    t === e.name && (c(),
                                    o[n] = !0)
                                }
                                )) : c(),
                                u.push(e.name),
                                r += l
                            }
                            ))
                        }
                        )),
                        !o.every((function(e) {
                            return e
                        }
                        )))
                            throw l = a.filter((function(e, t) {
                                return !o[t]
                            }
                            )),
                            new Error("Could not find weights in manifest with names: " + l.join(", ") + ". \nManifest JSON has weights with names: " + u.join(", ") + ".");
                        return c = t.reduce((function(e, t, n) {
                            return t && e.push(n),
                            e
                        }
                        ), []),
                        h = [],
                        c.forEach((function(e) {
                            n[e].paths.forEach((function(e) {
                                var t = r + (r.endsWith("/") ? "" : "/") + e;
                                h.push(t)
                            }
                            ))
                        }
                        )),
                        [4, e(h)];
                    case 1:
                        return f = s.sent(),
                        d = {},
                        p = 0,
                        c.forEach((function(e) {
                            for (var t = n[e].paths.length, r = 0, a = 0; a < t; a++)
                                r += f[p + a].byteLength;
                            for (var o = new ArrayBuffer(r), s = new Uint8Array(o), u = 0, l = 0; l < t; l++) {
                                var c = new Uint8Array(f[p + l]);
                                s.set(c, u),
                                u += c.byteLength
                            }
                            i[e].forEach((function(e) {
                                var t = pa(o.slice(e.groupOffset, e.groupOffset + e.sizeBytes), [e.manifestEntry]);
                                for (var n in t)
                                    d[n] = t[n]
                            }
                            )),
                            p += t
                        }
                        )),
                        [2, d]
                    }
                }
                ))
            }
            ))
        }
    }
    Sa.registerSaveRouter((function(e) {
        return $().getBool("IS_BROWSER") && !Array.isArray(e) && e.startsWith(ii.URL_SCHEME) ? function(e) {
            void 0 === e && (e = "model");
            return new ii(e)
        }(e.slice(ii.URL_SCHEME.length)) : null
    }
    ));
    var ci = function() {
        function e(e, t) {
            if (this.DEFAULT_METHOD = "POST",
            null == t && (t = {}),
            this.weightPathPrefix = t.weightPathPrefix,
            this.onProgress = t.onProgress,
            this.weightUrlConverter = t.weightUrlConverter,
            null != t.fetchFunc ? (m("function" == typeof t.fetchFunc, (function() {
                return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"
            }
            )),
            this.fetch = t.fetchFunc) : this.fetch = $().platform.fetch,
            m(null != e && e.length > 0, (function() {
                return "URL path for http must not be null, undefined or empty."
            }
            )),
            Array.isArray(e) && m(2 === e.length, (function() {
                return "URL paths for http must have a length of 2, (actual length is " + e.length + ")."
            }
            )),
            this.path = e,
            null != t.requestInit && null != t.requestInit.body)
                throw new Error("requestInit is expected to have no pre-existing body, but has one.");
            this.requestInit = t.requestInit || {}
        }
        return e.prototype.save = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n, r, a;
                return s(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        if (e.modelTopology instanceof ArrayBuffer)
                            throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
                        return (t = Object.assign({
                            method: this.DEFAULT_METHOD
                        }, this.requestInit)).body = new FormData,
                        n = [{
                            paths: ["./model.weights.bin"],
                            weights: e.weightSpecs
                        }],
                        r = wa(e, n),
                        t.body.append("model.json", new Blob([JSON.stringify(r)],{
                            type: "application/json"
                        }), "model.json"),
                        null != e.weightData && t.body.append("model.weights.bin", new Blob([e.weightData],{
                            type: "application/octet-stream"
                        }), "model.weights.bin"),
                        [4, this.fetch(this.path, t)];
                    case 1:
                        if ((a = i.sent()).ok)
                            return [2, {
                                modelArtifactsInfo: xa(e),
                                responses: [a]
                            }];
                        throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + a.status + ".")
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.load = function() {
            return o(this, void 0, void 0, (function() {
                var e, t, n, r, a, i = this;
                return s(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, this.fetch(this.path, this.requestInit)];
                    case 1:
                        if (!(e = o.sent()).ok)
                            throw new Error("Request to " + this.path + " failed with status code " + e.status + ". Please verify this URL points to the model JSON of the model to load.");
                        o.label = 2;
                    case 2:
                        return o.trys.push([2, 4, , 5]),
                        [4, e.json()];
                    case 3:
                        return t = o.sent(),
                        [3, 5];
                    case 4:
                        throw o.sent(),
                        n = "Failed to parse model JSON of response from " + this.path + ".",
                        this.path.endsWith(".pb") ? n += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : n += " Please make sure the server is serving valid JSON for this request.",
                        new Error(n);
                    case 5:
                        if (r = t.modelTopology,
                        a = t.weightsManifest,
                        null == r && null == a)
                            throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
                        return [2, ka(t, (function(e) {
                            return i.loadWeights(e)
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.loadWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n, r, a, i, o, h, f, d, p, v, g, m, y, b, w, k, x, E, S, A, _, I, M, N, T, D;
                return s(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        t = Array.isArray(this.path) ? this.path[1] : this.path,
                        n = l(function(e) {
                            var t = e.lastIndexOf("/")
                              , n = e.lastIndexOf("?")
                              , r = e.substring(0, t)
                              , a = n > t ? e.substring(n) : "";
                            return [r + "/", a]
                        }(t), 2),
                        r = n[0],
                        a = n[1],
                        i = this.weightPathPrefix || r,
                        o = [];
                        try {
                            for (h = u(e),
                            f = h.next(); !f.done; f = h.next())
                                d = f.value,
                                o.push.apply(o, c(d.weights))
                        } catch (e) {
                            _ = {
                                error: e
                            }
                        } finally {
                            try {
                                f && !f.done && (I = h.return) && I.call(h)
                            } finally {
                                if (_)
                                    throw _.error
                            }
                        }
                        p = [],
                        v = [];
                        try {
                            for (g = u(e),
                            m = g.next(); !m.done; m = g.next()) {
                                y = m.value;
                                try {
                                    for (T = void 0,
                                    b = u(y.paths),
                                    w = b.next(); !w.done; w = b.next())
                                        k = w.value,
                                        null != this.weightUrlConverter ? v.push(this.weightUrlConverter(k)) : p.push(i + k + a)
                                } catch (e) {
                                    T = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        w && !w.done && (D = b.return) && D.call(b)
                                    } finally {
                                        if (T)
                                            throw T.error
                                    }
                                }
                            }
                        } catch (e) {
                            M = {
                                error: e
                            }
                        } finally {
                            try {
                                m && !m.done && (N = g.return) && N.call(g)
                            } finally {
                                if (M)
                                    throw M.error
                            }
                        }
                        return this.weightUrlConverter ? (E = (x = p.push).apply,
                        S = [p],
                        [4, Promise.all(v)]) : [3, 2];
                    case 1:
                        E.apply(x, S.concat([c.apply(void 0, [s.sent()])])),
                        s.label = 2;
                    case 2:
                        return [4, ui(p, {
                            requestInit: this.requestInit,
                            fetchFunc: this.fetch,
                            onProgress: this.onProgress
                        })];
                    case 3:
                        return A = s.sent(),
                        [2, [o, ya(A)]]
                    }
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    function hi(e) {
        return null != e.match(ci.URL_SCHEME_REGEX)
    }
    ci.URL_SCHEME_REGEX = /^https?:\/\//;
    var fi = function(e, t) {
        if ("undefined" == typeof fetch && (null == t || null == t.fetchFunc))
            return null;
        return (Array.isArray(e) ? e.every((function(e) {
            return hi(e)
        }
        )) : hi(e)) ? di(e, t) : null
    };
    function di(e, t) {
        return new ci(e,t)
    }
    Sa.registerSaveRouter(fi),
    Sa.registerLoadRouter(fi);
    var pi = function() {
        function e(e) {
            this.modelArtifacts = e
        }
        return e.prototype.load = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    return [2, this.modelArtifacts]
                }
                ))
            }
            ))
        }
        ,
        e
    }()
      , vi = function() {
        function e(e) {
            this.saveHandler = e
        }
        return e.prototype.save = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(t) {
                    return [2, this.saveHandler(e)]
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    var gi = {
        __proto__: null,
        browserFiles: function(e) {
            return new oi(e)
        },
        browserHTTPRequest: function(e, t) {
            return di(e, t)
        },
        concatenateArrayBuffers: ya,
        decodeWeights: pa,
        encodeWeights: function(e, t) {
            return o(this, void 0, void 0, (function() {
                var n, r, a, i, u, l = this;
                return s(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        for (n = [],
                        r = [],
                        a = Array.isArray(e) ? e.map((function(e) {
                            return e.name
                        }
                        )) : Object.keys(e),
                        i = function(i) {
                            var u = a[i]
                              , c = Array.isArray(e) ? e[i].tensor : e[u];
                            if ("float32" !== c.dtype && "int32" !== c.dtype && "bool" !== c.dtype && "string" !== c.dtype && "complex64" !== c.dtype)
                                throw new Error("Unsupported dtype in weight '" + u + "': " + c.dtype);
                            var h = {
                                name: u,
                                shape: c.shape,
                                dtype: c.dtype
                            };
                            if ("string" === c.dtype) {
                                var f = new Promise((function(e) {
                                    return o(l, void 0, void 0, (function() {
                                        var t, n, r, a, i, o, u;
                                        return s(this, (function(s) {
                                            switch (s.label) {
                                            case 0:
                                                return [4, c.bytes()];
                                            case 1:
                                                for (t = s.sent(),
                                                n = t.reduce((function(e, t) {
                                                    return e + t.length
                                                }
                                                ), 0) + 4 * t.length,
                                                r = new Uint8Array(n),
                                                a = 0,
                                                i = 0; i < t.length; i++)
                                                    o = t[i],
                                                    u = new Uint8Array(new Uint32Array([o.length]).buffer),
                                                    r.set(u, a),
                                                    a += 4,
                                                    r.set(o, a),
                                                    a += o.length;
                                                return e(r),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ));
                                r.push(f)
                            } else
                                r.push(c.data());
                            null != t && (h.group = t),
                            n.push(h)
                        }
                        ,
                        u = 0; u < a.length; ++u)
                            i(u);
                        return [4, Promise.all(r)];
                    case 1:
                        return [2, {
                            data: va(c.sent()),
                            specs: n
                        }]
                    }
                }
                ))
            }
            ))
        },
        fromMemory: function(e, t, n, r) {
            if (1 === arguments.length) {
                var a = null != e.modelTopology || null != e.weightSpecs;
                return a ? new pi(e) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),
                new pi({
                    modelTopology: e
                }))
            }
            return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),
            new pi({
                modelTopology: e,
                weightSpecs: t,
                weightData: n,
                trainingConfig: r
            })
        },
        getLoadHandlers: function(e, t) {
            return Sa.getLoadHandlers(e, t)
        },
        getModelArtifactsForJSON: ka,
        getModelArtifactsInfoForJSON: xa,
        getSaveHandlers: function(e) {
            return Sa.getSaveHandlers(e)
        },
        http: di,
        isHTTPScheme: hi,
        loadWeights: function(e, t, n, r) {
            return void 0 === t && (t = ""),
            o(this, void 0, void 0, (function() {
                return s(this, (function(a) {
                    return [2, li((function(e) {
                        return ui(e, {
                            requestInit: r
                        })
                    }
                    ))(e, t, n)]
                }
                ))
            }
            ))
        },
        registerLoadRouter: function(e) {
            return Sa.registerLoadRouter(e)
        },
        registerSaveRouter: function(e) {
            return Sa.registerSaveRouter(e)
        },
        weightsLoaderFactory: li,
        withSaveHandler: function(e) {
            return new vi(e)
        },
        copyModel: function(e, t) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(n) {
                    return !1,
                    [2, Za(e, t, false)]
                }
                ))
            }
            ))
        },
        listModels: function() {
            return o(this, void 0, void 0, (function() {
                var e, t, n, r, a, i, o, l, c, h;
                return s(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        e = ja.getSchemes(),
                        t = {},
                        s.label = 1;
                    case 1:
                        s.trys.push([1, 6, 7, 8]),
                        n = u(e),
                        r = n.next(),
                        s.label = 2;
                    case 2:
                        return r.done ? [3, 5] : (a = r.value,
                        [4, ja.getManager(a).listModels()]);
                    case 3:
                        for (o in i = s.sent())
                            t[a + Ha + o] = i[o];
                        s.label = 4;
                    case 4:
                        return r = n.next(),
                        [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        return l = s.sent(),
                        c = {
                            error: l
                        },
                        [3, 8];
                    case 7:
                        try {
                            r && !r.done && (h = n.return) && h.call(n)
                        } finally {
                            if (c)
                                throw c.error
                        }
                        return [7];
                    case 8:
                        return [2, t]
                    }
                }
                ))
            }
            ))
        },
        moveModel: function(e, t) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(n) {
                    return !0,
                    [2, Za(e, t, true)]
                }
                ))
            }
            ))
        },
        removeModel: function(e) {
            return o(this, void 0, void 0, (function() {
                var t;
                return s(this, (function(n) {
                    return t = Ja(e),
                    [2, ja.getManager(t.scheme).removeModel(t.path)]
                }
                ))
            }
            ))
        }
    };
    var mi = la({
        matMul_: function(e, t, n, r) {
            var a;
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var i = oa(e, "a", "matMul")
              , o = oa(t, "b", "matMul")
              , s = {
                a: i = (a = l(Wr(i, o), 2))[0],
                b: o = a[1]
            }
              , u = {
                transposeA: n,
                transposeB: r
            };
            return $r.runKernel(pe, s, u)
        }
    });
    var yi = la({
        oneHot_: function(e, t, n, r) {
            if (void 0 === n && (n = 1),
            void 0 === r && (r = 0),
            t < 2)
                throw new Error("Error in oneHot: depth must be >=2, but it is " + t);
            var a = {
                indices: oa(e, "indices", "oneHot", "int32")
            }
              , i = {
                depth: t,
                onValue: n,
                offValue: r
            };
            return $r.runKernel(It, a, i)
        }
    });
    var bi = la({
        transpose_: function(e, t) {
            var n = oa(e, "x", "transpose");
            if (null == t && (t = n.shape.map((function(e, t) {
                return t
            }
            )).reverse()),
            m(n.rank === t.length, (function() {
                return "Error in transpose: rank of input " + n.rank + " must match length of perm " + t + "."
            }
            )),
            t.forEach((function(e) {
                m(e >= 0 && e < n.rank, (function() {
                    return "All entries in 'perm' must be between 0 and " + (n.rank - 1) + " but got " + t
                }
                ))
            }
            )),
            n.rank <= 1)
                return n.clone();
            var r = {
                x: n
            }
              , a = {
                perm: t
            };
            return $r.runKernel(gn, r, a)
        }
    });
    var wi = {
        __proto__: null,
        confusionMatrix: la({
            confusionMatrix_: function(e, t, n) {
                var r = oa(e, "labels", "confusionMatrix")
                  , a = oa(t, "predictions", "confusionMatrix");
                m(null == n || n > 0 && Number.isInteger(n), (function() {
                    return "If provided, numClasses must be a positive integer, but got " + n
                }
                )),
                m(1 === r.rank, (function() {
                    return "Expected the rank of labels to be 1, but got " + r.rank
                }
                )),
                m(1 === a.rank, (function() {
                    return "Expected the rank of predictions to be 1, but got " + a.rank
                }
                )),
                m(r.shape[0] === a.shape[0], (function() {
                    return "Mismatch in the number of examples: " + r.shape[0] + " vs. " + a.shape[0] + ". Labels and predictions should have the same number of elements."
                }
                )),
                m(n > 0 && Number.isInteger(n), (function() {
                    return "numClasses is required to be a positive integer, but got " + n
                }
                ));
                var i = yi(ti(r, "int32"), n)
                  , o = yi(ti(a, "int32"), n)
                  , s = bi(i)
                  , u = mi(s, o);
                return ti(u, "int32")
            }
        })
    };
    function ki(e, t) {
        for (var n = e.length, r = [], a = 0; a < n; a++) {
            var i = n - 1 - a
              , o = e[i] || 1;
            (t[t.length - 1 - a] || 1) > 1 && 1 === o && r.unshift(i)
        }
        return r
    }
    function xi(e, t) {
        for (var n = [], r = 0; r < t.length; r++) {
            var a = e[e.length - r - 1]
              , i = t.length - r - 1
              , o = t[i];
            (null == a || 1 === a && o > 1) && n.unshift(i)
        }
        return n
    }
    function Ei(e, t) {
        for (var n = [], r = Math.max(e.length, t.length), a = 0; a < r; a++) {
            var i = e[e.length - a - 1];
            null == i && (i = 1);
            var o = t[t.length - a - 1];
            if (null == o && (o = 1),
            1 === i)
                n.unshift(o);
            else if (1 === o)
                n.unshift(i);
            else {
                if (i !== o)
                    throw Error("Operands could not be broadcast together with shapes " + e + " and " + t + ".");
                n.unshift(i)
            }
        }
        return n
    }
    var Si, Ai = {
        __proto__: null,
        getBroadcastDims: ki,
        getReductionAxes: xi,
        assertAndGetBroadcastShape: Ei
    };
    function _i(e, t, n) {
        if (b(e),
        null != t && 3 !== t.length)
            throw new Error("tensor3d() requires shape to have three numbers");
        var r = ra(e, n);
        if (3 !== r.length && 1 !== r.length)
            throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
        if (1 === r.length && null == t)
            throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
        return ha(e, t, r, n)
    }
    function Ii(e, t) {
        if (void 0 === t && (t = 3),
        t > 4)
            throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
        if (null == e)
            throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
        var n = !1
          , r = !1
          , a = !1
          , i = !1
          , o = !1
          , s = !1;
        if (e.data instanceof Uint8Array)
            n = !0;
        else if ("undefined" != typeof ImageData && e instanceof ImageData)
            r = !0;
        else if ("undefined" != typeof HTMLVideoElement && e instanceof HTMLVideoElement)
            a = !0;
        else if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement)
            i = !0;
        else if (null != e.getContext)
            o = !0;
        else {
            if (!("undefined" != typeof ImageBitmap && e instanceof ImageBitmap))
                throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was " + e.constructor.name);
            s = !0
        }
        if (a) {
            if (a && e.readyState < 2)
                throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.")
        }
        if (null != Tn(xn, $r.backendName)) {
            var u = {
                pixels: e
            }
              , c = {
                numChannels: t
            };
            return $r.runKernel(xn, u, c)
        }
        var h, f, d = l(a ? [e.videoWidth, e.videoHeight] : [e.width, e.height], 2), p = d[0], v = d[1];
        if (o)
            h = e.getContext("2d").getImageData(0, 0, p, v).data;
        else if (r || n)
            h = e.data;
        else if (i || a || s) {
            if (null == Si)
                if ("undefined" == typeof document) {
                    if ("undefined" == typeof OffscreenCanvas || "undefined" == typeof OffscreenCanvasRenderingContext2D)
                        throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");
                    Si = new OffscreenCanvas(1,1).getContext("2d")
                } else
                    Si = document.createElement("canvas").getContext("2d");
            Si.canvas.width = p,
            Si.canvas.height = v,
            Si.drawImage(e, 0, 0, p, v),
            h = Si.getImageData(0, 0, p, v).data
        }
        if (4 === t)
            f = new Int32Array(h);
        else {
            var g = p * v;
            f = new Int32Array(g * t);
            for (var m = 0; m < g; m++)
                for (var y = 0; y < t; ++y)
                    f[m * t + y] = h[4 * m + y]
        }
        return _i(f, [v, p, t], "int32")
    }
    function Mi(e) {
        return "undefined" != typeof window && "undefined" != typeof ImageBitmap && window.hasOwnProperty("createImageBitmap") && !(e instanceof ImageBitmap) && function(e) {
            return null != e && 0 !== e.width && 0 !== e.height
        }(e) && !function(e) {
            return null != e && e.data instanceof Uint8Array
        }(e)
    }
    var Ni = {
        __proto__: null,
        fromPixelsAsync: function(e, t) {
            return void 0 === t && (t = 3),
            o(this, void 0, void 0, (function() {
                var n, r;
                return s(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        if (n = null,
                        !$().getBool("WRAP_TO_IMAGEBITMAP") || !Mi(e))
                            return [3, 5];
                        r = void 0,
                        a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]),
                        [4, createImageBitmap(e, {
                            premultiplyAlpha: "none"
                        })];
                    case 2:
                        return r = a.sent(),
                        [3, 4];
                    case 3:
                        return a.sent(),
                        r = null,
                        [3, 4];
                    case 4:
                        return n = null != r && r.width === e.width && r.height === e.height ? r : e,
                        [3, 6];
                    case 5:
                        n = e,
                        a.label = 6;
                    case 6:
                        return [2, Ii(n, t)]
                    }
                }
                ))
            }
            ))
        },
        toPixels: function(e, t) {
            return o(this, void 0, void 0, (function() {
                var n, r, a, i, o, u, c, h, f, d, p, v, g, m, y, b;
                return s(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        if (n = oa(e, "img", "toPixels"),
                        e instanceof Br || (n = ti(r = n, "int32"),
                        r.dispose()),
                        2 !== n.rank && 3 !== n.rank)
                            throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + n.rank + ".");
                        if (a = l(n.shape.slice(0, 2), 2),
                        i = a[0],
                        o = a[1],
                        (u = 2 === n.rank ? 1 : n.shape[2]) > 4 || 2 === u)
                            throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + u);
                        if ("float32" !== n.dtype && "int32" !== n.dtype)
                            throw new Error("Unsupported type for toPixels: " + n.dtype + ". Please use float32 or int32 tensors.");
                        return [4, n.data()];
                    case 1:
                        for (c = s.sent(),
                        h = "float32" === n.dtype ? 255 : 1,
                        f = new Uint8ClampedArray(o * i * 4),
                        d = 0; d < i * o; ++d) {
                            for (p = [0, 0, 0, 255],
                            v = 0; v < u; v++) {
                                if (g = c[d * u + v],
                                "float32" === n.dtype) {
                                    if (g < 0 || g > 1)
                                        throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered " + g + ".")
                                } else if ("int32" === n.dtype && (g < 0 || g > 255))
                                    throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered " + g + ".");
                                1 === u ? (p[0] = g * h,
                                p[1] = g * h,
                                p[2] = g * h) : p[v] = g * h
                            }
                            f[(m = 4 * d) + 0] = Math.round(p[0]),
                            f[m + 1] = Math.round(p[1]),
                            f[m + 2] = Math.round(p[2]),
                            f[m + 3] = Math.round(p[3])
                        }
                        return null != t && (t.width = o,
                        t.height = i,
                        y = t.getContext("2d"),
                        b = new ImageData(f,o,i),
                        y.putImageData(b, 0, 0)),
                        n !== e && n.dispose(),
                        [2, f]
                    }
                }
                ))
            }
            ))
        },
        fromPixels: la({
            fromPixels_: Ii
        })
    };
    function Ti(e, t) {
        var n = e.shape.length
          , r = t.shape.length;
        if (n < 1)
            throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + n + ".");
        if (r < 1)
            throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + r + ".");
        if ("int32" !== t.dtype)
            throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + t.dtype + ".");
        if (t.shape[r - 1] > n)
            throw new Error("index innermost dimension length must be <= tensor rank; saw: " + t.shape[r - 1] + " vs. " + n);
        if (0 === k(e.shape))
            throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + e.shape + ".");
        for (var a = t.shape, i = a[a.length - 1], o = 1, s = 0; s < a.length - 1; ++s)
            o *= a[s];
        var u = e.shape
          , l = a.slice();
        l.pop();
        var h = 1;
        for (s = i; s < n; ++s)
            h *= u[s],
            l.push(u[s]);
        var f = c(q(e.shape).map((function(e) {
            return e / h
        }
        )), [1]).slice(0, i);
        return [l, o, h, f]
    }
    var Di = {
        __proto__: null,
        prepareAndValidate: Ti
    };
    function Ri(e, t, n) {
        var r = t.rank > 1 ? t.shape[t.rank - 1] : 1
          , a = t.rank > 1 ? t.rank - 1 : 1
          , i = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + t.shape + ", shape: " + e + ", sliceDim: " + r + ", and batchDim: " + a + ".";
        if (n.rank < a)
            throw new Error(i + " update.rank < " + a + ". ");
        if (e.length < r + (n.rank - a))
            throw new Error(i + " Output shape length < " + (r + (n.rank - a)));
        if (n.rank !== a + e.length - r)
            throw new Error(i + " update.rank != " + (a + e.length - r));
        for (var o = 0; o < a; ++o)
            if (n.shape[o] !== t.shape[o])
                throw new Error(i + " updates.shape[" + o + "] (" + n.shape[o] + ") != indices.shape[" + o + "] (" + t.shape[o] + ").");
        for (o = 0; o < n.rank - a; ++o)
            if (n.shape[o + a] !== e[o + r])
                throw new Error(i + " updates.shape[" + (o + a) + "] (" + n.shape[o + a] + ") != shape[" + (o + a) + "] (" + e[o + a] + ")")
    }
    function Bi(e, t, n) {
        if (t.rank < 1)
            throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + t.rank + ".");
        if (e.rank < 1)
            throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + e.rank + ".");
        if ("int32" !== t.dtype)
            throw new Error("The dtype of 'indices' should be int32, but got dtype: " + t.dtype);
        if (n.length < 1)
            throw new Error("Output rank must be greater or equal to 1, but got shape: " + n);
        if (0 === n.length) {
            if (0 === t.size)
                throw new Error("Indices specified for empty output. indices shape: " + t.shape);
            if (0 === e.size)
                throw new Error("Updates specified for empty output. updates shape: " + e.shape)
        }
        Ri(n, t, e)
    }
    function Fi(e, t, n) {
        for (var r = t.shape.length, a = r > 1 ? t.shape[r - 1] : 1, i = n.length, o = 1, s = a; s < i; ++s)
            o *= n[s];
        var u = a < 1 ? 1 : a;
        return {
            sliceRank: a,
            numUpdates: k(t.shape) / u,
            sliceSize: o,
            strides: c(q(n.slice(0, a)), [1]),
            outputSize: k(n)
        }
    }
    var Ci = {
        __proto__: null,
        validateUpdateShape: Ri,
        validateInput: Bi,
        calculateShapes: Fi
    };
    function Pi(e, t, n, r) {
        for (var a = c(e), i = a.length; i < r.length; i++)
            a.push(1);
        for (i = 0; i < n; i++)
            0 === i ? a[t] = 1 : (a.splice(t, 0, 1),
            a.pop());
        return a
    }
    function Oi(e, t, n) {
        return n <= e ? n : n - (t - 1)
    }
    function Li(e, t) {
        for (var n = [], r = 0; r < e; r++)
            n.push(t + r);
        return n
    }
    function zi(e, t, n, r, a) {
        for (var i = c(a), o = Li(n, t), s = 0; s < i.length; s++)
            if (o.indexOf(s) > -1)
                i[s] = 0;
            else {
                var u = Oi(t, n, s)
                  , l = r[u];
                e & 1 << u && (l = 0),
                i[s] = l
            }
        return i
    }
    function qi(e, t, n, r, a) {
        for (var i = c(a), o = Li(n, t), s = 0; s < i.length; s++)
            if (o.indexOf(s) > -1)
                i[s] = Number.MAX_SAFE_INTEGER;
            else {
                var u = Oi(t, n, s)
                  , l = r[u];
                e & 1 << u && (l = Number.MAX_SAFE_INTEGER),
                i[s] = l
            }
        for (var h = 0; h < i.length; h++) {
            var f = a[h];
            i[h] < 0 && (i[h] += f),
            i[h] = v(0, i[h], a[h])
        }
        return i
    }
    function Ki(e, t, n) {
        var r = e[t];
        return (n & 1 << t || null == r) && (r = 1),
        r
    }
    function Wi(e, t, n, r, a, i) {
        var o = t[a]
          , s = n[a] || 1;
        (e & 1 << a || i & 1 << a || null == o) && (o = s > 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
        var u = r[a];
        return o < 0 && (o += u),
        o = v(0, o, u - 1)
    }
    function Gi(e, t, n, r, a, i) {
        var o = t[a]
          , s = n[a] || 1;
        (e & 1 << a || i & 1 << a || null == o) && (o = s > 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
        var u = r[a];
        return o < 0 && (o += u),
        o = s > 0 ? v(0, o, u) : v(-1, o, u - 1)
    }
    function Ui(e, t, n, r, a, i) {
        if (a[t])
            return n > 0 ? i[t] : i[t + 1 & 1];
        var o = e < 0 ? r + e : e;
        return o < i[0] ? i[0] : o > i[1] ? i[1] : o
    }
    var Vi = {
        __proto__: null,
        assertParamsValid: function(e, t, n) {
            var r = e.shape.length;
            m(r === t.length, (function() {
                return "Error in slice" + r + "D: Length of begin " + t + " must match the rank of the array (" + r + ")."
            }
            )),
            m(r === n.length, (function() {
                return "Error in slice" + r + "D: Length of size " + n + " must match the rank of the array (" + r + ")."
            }
            ));
            for (var a = function(a) {
                m(t[a] + n[a] <= e.shape[a], (function() {
                    return "Error in slice" + r + "D: begin[" + a + "] + size[" + a + "] (" + (t[a] + n[a]) + ") would overflow input.shape[" + a + "] (" + e.shape[a] + ")"
                }
                ))
            }, i = 0; i < r; ++i)
                a(i)
        },
        maskToAxes: function(e) {
            for (var t = [], n = 0; e > 0; )
                1 & e && t.push(n),
                e /= 2,
                n++;
            return t
        },
        computeOutShape: function(e, t, n) {
            for (var r = [], a = 0; a < e.length; a++)
                r[a] = Math.ceil((t[a] - e[a]) / n[a]);
            return r
        },
        stridesWithElidedDims: Pi,
        getNormalizedAxes: function(e, t, n, r, a, i, o, s, u) {
            var l = e.length
              , c = new Array(l)
              , h = new Array(l)
              , f = new Array(l);
            if (t.length && n > 0) {
                var d = t[0]
                  , p = n + 1;
                c = zi(o, d, p, r, e),
                h = qi(s, d, p, a, e),
                f = Pi(i, d, p, e)
            } else
                for (var v = 0; v < l; v++)
                    c[v] = Wi(o, r, i, e, v, u),
                    h[v] = Gi(s, a, i, e, v, u),
                    f[v] = Ki(i, v, u);
            return {
                begin: c,
                end: h,
                strides: f
            }
        },
        startIndicesWithElidedDims: zi,
        stopIndicesWithElidedDims: qi,
        stridesForAxis: Ki,
        startForAxis: Wi,
        stopForAxis: Gi,
        isSliceContinous: function(e, t, n) {
            for (var r = n.length, a = 0; a < n.length; a++)
                if (n[a] > 1) {
                    r = a;
                    break
                }
            for (a = r + 1; a < n.length; a++)
                if (t[a] > 0 || n[a] !== e[a])
                    return !1;
            return !0
        },
        computeFlatOffset: function(e, t) {
            for (var n = e.length > 0 ? e[e.length - 1] : 1, r = 0; r < e.length - 1; r++)
                n += e[r] * t[r];
            return n
        },
        parseSliceParams: function(e, t, n) {
            var r, a, i = e.shape.length;
            return (r = "number" == typeof t ? c([t], new Array(i - 1).fill(0)) : t.length < i ? t.concat(new Array(i - t.length).fill(0)) : t.slice()).forEach((function(e) {
                m(-1 !== e, (function() {
                    return "slice() does not support negative begin indexing."
                }
                ))
            }
            )),
            a = (a = null == n ? new Array(i).fill(-1) : "number" == typeof n ? c([n], new Array(i - 1).fill(-1)) : n.length < i ? n.concat(new Array(i - n.length).fill(-1)) : n).map((function(t, n) {
                return t >= 0 ? t : (m(-1 === t, (function() {
                    return "Negative size values should be exactly -1 but got " + t + " for the slice() size at index " + n + "."
                }
                )),
                e.shape[n] - r[n])
            }
            )),
            [r, a]
        },
        sliceInfo: function(e, t, n, r, a, i, o, s, u) {
            var l;
            if (null == r ? (l = new Array(t.length)).fill(1) : l = r,
            null != o && 0 != (o & o - 1))
                throw new Error("Multiple ellipses in slice is not allowed.");
            for (var c = !1, h = {
                dims: l.length,
                numAddAxisAfterEllipsis: 0,
                begin: t.slice(),
                end: n.slice(),
                strides: l.slice(),
                beginMask: a,
                endMask: i,
                ellipsisMask: o,
                newAxisMask: s,
                shrinkAxisMask: u
            }, f = 0; f < h.dims; f++)
                c && 0 != (1 << f & s) && h.numAddAxisAfterEllipsis++,
                1 << f & o && (c = !0);
            c || (h.ellipsisMask |= 1 << h.dims,
            h.dims++);
            var d = {
                dims: e.length,
                beginMask: 0,
                endMask: 0,
                beginValid: !1,
                endValid: !1
            };
            !function(e, t) {
                t.beginMask = 0,
                t.endMask = 0,
                t.shrinkAxisMask = 0;
                var n = 0;
                t.beginValid = null != e.begin,
                t.endValid = null != e.end,
                t.begin = new Array(t.dims),
                t.end = new Array(t.dims),
                t.strides = new Array(t.dims),
                t.finalShapeGatherIndices = [],
                t.finalShapeGatherIndicesSparse = [],
                t.inputShapeGatherIndicesSparse = new Array(t.dims);
                for (var r = 0; r < e.dims; r++)
                    if (1 << r & e.ellipsisMask)
                        for (var a = Math.min(t.dims - (e.dims - r) + 1 + e.numAddAxisAfterEllipsis, t.dims); n < a; n++)
                            t.begin[n] = 0,
                            t.end[n] = 0,
                            t.strides[n] = 1,
                            t.beginMask |= 1 << n,
                            t.endMask |= 1 << n,
                            t.finalShapeGatherIndices.push(n),
                            t.finalShapeGatherIndicesSparse.push(-1),
                            t.inputShapeGatherIndicesSparse[n] = r;
                    else if (1 << r & e.newAxisMask)
                        t.finalShapeGatherIndices.push(-2),
                        t.finalShapeGatherIndicesSparse.push(-1);
                    else {
                        if (n === t.begin.length)
                            throw Error("Index out of range using input dim " + n + "; input has only " + t.dims + " dims, " + t.begin.length + ".");
                        null != e.begin && (t.begin[n] = e.begin[r]),
                        null != e.end && (t.end[n] = e.end[r]),
                        t.strides[n] = e.strides[r],
                        e.beginMask & 1 << r && (t.beginMask |= 1 << n),
                        e.endMask & 1 << r && (t.endMask |= 1 << n),
                        e.shrinkAxisMask & 1 << r ? (t.finalShapeGatherIndices.push(-1),
                        t.finalShapeGatherIndicesSparse.push(-1),
                        t.shrinkAxisMask |= 1 << n) : (t.finalShapeGatherIndices.push(n),
                        t.finalShapeGatherIndicesSparse.push(r)),
                        t.inputShapeGatherIndicesSparse[n] = r,
                        n++
                    }
            }(h, d);
            var p = !0
              , v = !0
              , g = !0
              , m = []
              , y = [];
            for (f = 0; f < e.length; ++f) {
                if (0 === d.strides[f])
                    throw Error("strides[" + f + "] must be non-zero");
                var b = !!(d.shrinkAxisMask & 1 << f)
                  , w = e[f];
                if (-1 !== w) {
                    var k = [d.beginMask & 1 << f, d.endMask & 1 << f]
                      , x = [d.strides[f] > 0 ? 0 : -1, d.strides[f] > 0 ? w : w - 1];
                    if (b && d.strides[f] <= 0)
                        throw Error("only stride 1 allowed on non-range indexing.");
                    g = g && 1 === d.strides[f];
                    var E = !!(d.beginMask & 1 << f && d.endMask & 1 << f);
                    if (d.beginValid && d.endValid) {
                        if (b) {
                            var S = d.begin[f] < 0 ? w + d.begin[f] : d.begin[f];
                            if (d.begin[f] = S,
                            d.end[f] = d.begin[f] + 1,
                            S < 0 || S >= w)
                                throw Error("slice index " + d.begin[f] + " of dimension " + f + " out of bounds.")
                        } else
                            d.begin[f] = Ui(d.begin[f], 0, d.strides[f], w, k, x),
                            d.end[f] = Ui(d.end[f], 1, d.strides[f], w, k, x);
                        var A = 1 === d.strides[f] && 0 === d.begin[f] && d.end[f] === w;
                        p = p && A,
                        v = v && (0 === f && 1 === d.strides[f] || A)
                    } else
                        p = p && 1 === d.strides[f] && E,
                        v = v && (0 === f && 1 === d.strides[f] || E);
                    var _ = void 0
                      , I = !1;
                    if (d.beginValid && d.endValid ? (_ = d.end[f] - d.begin[f],
                    I = !0) : b ? (_ = 1,
                    I = !0) : E && w >= 0 && (_ = d.strides[f] < 0 ? -w : w,
                    I = !0),
                    I) {
                        var M = void 0;
                        M = 0 === _ || _ < 0 != d.strides[f] < 0 ? 0 : Math.trunc(_ / d.strides[f]) + (_ % d.strides[f] != 0 ? 1 : 0),
                        m.push(M)
                    } else
                        m.push(-1)
                } else
                    m.push(b ? 1 : -1)
            }
            for (var N = 0; N < d.finalShapeGatherIndices.length; ++N) {
                var T = d.finalShapeGatherIndices[N];
                T >= 0 ? y.push(m[T]) : -2 === T && y.push(1)
            }
            return {
                finalShapeSparse: y.filter((function(e, t) {
                    return -2 !== d.finalShapeGatherIndices[t]
                }
                )),
                finalShape: y,
                isIdentity: p,
                sliceDim0: v,
                isSimpleSlice: g,
                begin: d.begin,
                end: d.end,
                strides: d.strides
            }
        }
    }
      , Hi = function() {
        function e() {}
        return e.prototype.getClassName = function() {
            return this.constructor.className
        }
        ,
        e.fromConfig = function(e, t) {
            return new e(t)
        }
        ,
        e
    }()
      , ji = function() {
        function e() {
            this.classNameMap = {}
        }
        return e.getMap = function() {
            return null == e.instance && (e.instance = new e),
            e.instance
        }
        ,
        e.register = function(t) {
            e.getMap().classNameMap[t.className] = [t, t.fromConfig]
        }
        ,
        e
    }();
    function Ji(e) {
        m(null != e.className, (function() {
            return "Class being registered does not have the static className property defined."
        }
        )),
        m("string" == typeof e.className, (function() {
            return "className is required to be a string, but got type " + typeof e.className
        }
        )),
        m(e.className.length > 0, (function() {
            return "Class being registered has an empty-string as its className, which is disallowed."
        }
        )),
        ji.register(e)
    }
    var Zi = {
        __proto__: null,
        Serializable: Hi,
        SerializationMap: ji,
        registerClass: Ji
    };
    function Yi() {
        return 32 === $r.backend.floatPrecision() ? .001 : .1
    }
    function Xi(e, t, n) {
        var r = !0;
        if ((D(e) || D(t)) && (r = !1),
        D(e) && D(t) && (r = !0),
        r) {
            var a = e.constructor.name
              , i = t.constructor.name;
            if (a !== i)
                throw new Error("Arrays are of different type. Actual: " + a + ". Expected: " + i)
        }
        if (Array.isArray(e) && Array.isArray(t)) {
            var o = ra(e)
              , s = ra(t);
            if (!x(o, s))
                throw new Error("Arrays have different shapes. Actual: [" + o + "]. Expected: [" + s + "]")
        }
        var u = D(e) ? e : w(e)
          , l = D(t) ? t : w(t);
        if (u.length !== l.length)
            throw new Error("Arrays have different lengths actual: " + u.length + " vs expected: " + l.length + ".\nActual:   " + u + ".\nExpected: " + l + ".");
        for (var c = 0; c < l.length; ++c) {
            var h = u[c]
              , f = l[c];
            if (!n(h, f))
                throw new Error("Arrays differ: actual[" + c + "] = " + h + ", expected[" + c + "] = " + f + ".\nActual:   " + u + ".\nExpected: " + l + ".")
        }
    }
    function $i(e, t, n) {
        return !isFinite(e) && !isFinite(t) || !(isNaN(e) || isNaN(t) || Math.abs(e - t) > n)
    }
    var Qi = {
        __proto__: null,
        TEST_EPSILON_FLOAT16: .1,
        expectArraysClose: function(e, t, n) {
            return null == n && (n = Yi()),
            Xi(e, t, (function(e, t) {
                return $i(e, t, n)
            }
            ))
        },
        testEpsilon: Yi,
        expectPromiseToFail: function(e, t) {
            e().then((function() {
                return t.fail()
            }
            ), (function() {
                return t()
            }
            ))
        },
        expectArraysEqual: function(e, t) {
            var n = "string" == typeof t || "number" == typeof t || "boolean" == typeof t ? [t] : t;
            return F(e) || F(e[0]) || F(t) || F(t[0]) ? Xi(e, n, (function(e, t) {
                return e == t
            }
            )) : Xi(e, t, (function(e, t) {
                return $i(e, t, 0)
            }
            ))
        },
        expectNumbersClose: function(e, t, n) {
            if (null == n && (n = Yi()),
            !$i(e, t, n))
                throw new Error("Numbers differ: actual === " + e + ", expected === " + t)
        },
        expectValuesInRange: function(e, t, n) {
            for (var r = 0; r < e.length; r++)
                if (e[r] < t || e[r] > n)
                    throw new Error("Value out of range:" + e[r] + " low: " + t + ", high: " + n)
        },
        expectArrayBuffersEqual: function(e, t) {
            var n = new Float32Array(e)
              , r = new Float32Array(t);
            if (n.length !== r.length)
                throw new Error("Expected ArrayBuffer to be of length " + r.length + ", but it was " + n.length);
            for (var a = 0; a < r.length; a++)
                if (n[a] !== r[a])
                    throw new Error("Expected ArrayBuffer value at " + a + " to be " + r[a] + " but got " + n[a] + " instead")
        },
        encodeStrings: function e(t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                Array.isArray(r) ? e(r) : t[n] = wr(r)
            }
            return t
        }
    };
    function eo(e, t) {
        return $r.tidy(e, t)
    }
    function to(e) {
        Ur(e).forEach((function(e) {
            return e.dispose()
        }
        ))
    }
    function no(e) {
        return $r.keep(e)
    }
    var ro = la({
        add_: function(e, t) {
            var n, r = oa(e, "a", "add"), a = oa(t, "b", "add"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel(re, i)
        }
    });
    var ao = la({
        floorDiv_: function(e, t) {
            var n, r = oa(e, "a", "floorDiv"), a = oa(t, "b", "floorDiv"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel(je, i)
        }
    });
    var io = la({
        div_: function(e, t) {
            var n, r = oa(e, "a", "div"), a = oa(t, "b", "div");
            if (r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            "int32" === r.dtype && "int32" === a.dtype)
                return ao(r, a);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(ze, i, {})
        }
    });
    var oo = la({
        mul_: function(e, t) {
            var n, r = oa(e, "a", "mul"), a = oa(t, "b", "mul"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel(kt, i)
        }
    });
    var so = la({
        abs_: function(e) {
            var t = oa(e, "x", "abs");
            if ("complex64" === t.dtype) {
                var n = {
                    x: t
                };
                return $r.runKernel(xe, n)
            }
            return n = {
                x: t
            },
            $r.runKernel("Abs", n)
        }
    });
    var uo = la({
        acos_: function(e) {
            var t = {
                x: oa(e, "x", "acos")
            };
            return $r.runKernel(te, t)
        }
    });
    var lo = la({
        acosh_: function(e) {
            var t = {
                x: oa(e, "x", "acosh")
            };
            return $r.runKernel(ne, t)
        }
    });
    var co = la({
        addN_: function(e) {
            m(Array.isArray(e), (function() {
                return "The argument passed to tf.addN() must be a list of tensors"
            }
            )),
            m(e.length >= 1, (function() {
                return "Must pass at least one tensor to tf.addN(), but got " + e.length
            }
            ));
            var t = e.map((function(e, t) {
                return oa(e, "tensors" + t, "addN")
            }
            ))
              , n = t[0];
            t.forEach((function(e) {
                if (e.dtype !== n.dtype)
                    throw new Error("All tensors passed to tf.addN() must have the same dtype")
            }
            )),
            t.forEach((function(e) {
                if (!x(e.shape, n.shape))
                    throw new Error("All tensors passed to tf.addN() must have the same shape")
            }
            ));
            var r = t;
            return $r.runKernel(ae, r)
        }
    });
    var ho = la({
        all_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: oa(e, "x", "all", "bool")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return $r.runKernel("All", r, a)
        }
    });
    var fo = la({
        any_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: oa(e, "x", "any", "bool")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return $r.runKernel("Any", r, a)
        }
    });
    var po = la({
        argMax_: function(e, t) {
            void 0 === t && (t = 0);
            var n = {
                x: oa(e, "x", "argMax")
            }
              , r = {
                axis: t
            };
            return $r.runKernel(ie, n, r)
        }
    });
    var vo = la({
        argMin_: function(e, t) {
            void 0 === t && (t = 0);
            var n = {
                x: oa(e, "x", "argMin")
            }
              , r = {
                axis: t
            };
            return $r.runKernel(oe, n, r)
        }
    });
    var go = la({
        asin_: function(e) {
            var t = {
                x: oa(e, "x", "asin")
            };
            return $r.runKernel(se, t)
        }
    });
    var mo = la({
        asinh_: function(e) {
            var t = {
                x: oa(e, "x", "asinh")
            };
            return $r.runKernel(ue, t)
        }
    });
    var yo = la({
        atan_: function(e) {
            var t = {
                x: oa(e, "x", "atan")
            };
            return $r.runKernel(le, t)
        }
    });
    var bo = la({
        atan2_: function(e, t) {
            var n, r = oa(e, "a", "atan2"), a = oa(t, "b", "atan2"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel(he, i)
        }
    });
    var wo = la({
        atanh_: function(e) {
            var t = {
                x: oa(e, "x", "atanh")
            };
            return $r.runKernel(ce, t)
        }
    });
    function ko(e, t, n, r, a, i, o) {
        void 0 === o && (o = "channelsLast");
        var s, u = l(Ao(t), 2), c = u[0], h = u[1];
        if ("channelsLast" === o)
            s = [c, h, e[3], e[3]];
        else {
            if ("channelsFirst" !== o)
                throw new Error("Unknown dataFormat " + o);
            s = [c, h, e[1], e[1]]
        }
        return xo(e, s, n, r, a, i, !1, o)
    }
    function xo(e, t, n, r, a, i, o, s) {
        var u, c;
        void 0 === o && (o = !1),
        void 0 === s && (s = "channelsLast");
        var h = l([-1, -1, -1, -1], 4)
          , f = h[0]
          , d = h[1]
          , p = h[2]
          , v = h[3];
        if ("channelsLast" === s)
            f = (u = l(e, 4))[0],
            d = u[1],
            p = u[2],
            v = u[3];
        else {
            if ("channelsFirst" !== s)
                throw new Error("Unknown dataFormat " + s);
            f = (c = l(e, 4))[0],
            v = c[1],
            d = c[2],
            p = c[3]
        }
        var g, m = l(t, 4), y = m[0], b = m[1], w = m[3], k = l(Ao(n), 2), x = k[0], E = k[1], S = l(Ao(r), 2), A = S[0], _ = S[1], I = Io(y, A), M = Io(b, _), N = function(e, t, n, r, a, i, o, s, u) {
            var l, c, h;
            if ("number" == typeof e) {
                l = {
                    top: e,
                    bottom: e,
                    left: e,
                    right: e,
                    type: 0 === e ? "VALID" : "NUMBER"
                };
                var f = function(e, t, n, r, a) {
                    null == r && (r = So(e, t, n));
                    var i = e[0]
                      , o = e[1]
                      , s = Mo((i - t + 2 * r) / n + 1, a)
                      , u = Mo((o - t + 2 * r) / n + 1, a);
                    return [s, u]
                }([t, n], i, r, e, s);
                c = f[0],
                h = f[1]
            } else if ("same" === e) {
                c = Math.ceil(t / r),
                h = Math.ceil(n / a);
                var d = Math.max(0, (c - 1) * r + i - t)
                  , p = Math.max(0, (h - 1) * a + o - n);
                l = {
                    top: v = Math.floor(d / 2),
                    bottom: g = d - v,
                    left: m = Math.floor(p / 2),
                    right: y = p - m,
                    type: "SAME"
                }
            } else if ("valid" === e)
                l = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    type: "VALID"
                },
                c = Math.ceil((t - i + 1) / r),
                h = Math.ceil((n - o + 1) / a);
            else {
                if ("object" != typeof e)
                    throw Error("Unknown padding parameter: " + e);
                var v, g, m, y;
                l = {
                    top: v = "channelsLast" === u ? e[1][0] : e[2][0],
                    bottom: g = "channelsLast" === u ? e[1][1] : e[2][1],
                    left: m = "channelsLast" === u ? e[2][0] : e[3][0],
                    right: y = "channelsLast" === u ? e[2][1] : e[3][1],
                    type: 0 === v && 0 === g && 0 === m && 0 === y ? "VALID" : "EXPLICIT"
                },
                c = Mo((t - i + v + g) / r + 1, s),
                h = Mo((n - o + m + y) / a + 1, s)
            }
            return {
                padInfo: l,
                outHeight: c,
                outWidth: h
            }
        }(a, d, p, x, E, I, M, i, s), T = N.padInfo, D = N.outHeight, R = N.outWidth, B = o ? w * v : w;
        return "channelsFirst" === s ? g = [f, B, D, R] : "channelsLast" === s && (g = [f, D, R, B]),
        {
            batchSize: f,
            dataFormat: s,
            inHeight: d,
            inWidth: p,
            inChannels: v,
            outHeight: D,
            outWidth: R,
            outChannels: B,
            padInfo: T,
            strideHeight: x,
            strideWidth: E,
            filterHeight: y,
            filterWidth: b,
            effectiveFilterHeight: I,
            effectiveFilterWidth: M,
            dilationHeight: A,
            dilationWidth: _,
            inShape: e,
            outShape: g,
            filterShape: t
        }
    }
    function Eo(e, t, n, r, a, i, o, s) {
        var u, c;
        void 0 === i && (i = !1),
        void 0 === o && (o = "channelsLast");
        var h = l([-1, -1, -1, -1, -1], 5)
          , f = h[0]
          , d = h[1]
          , p = h[2]
          , v = h[3]
          , g = h[4];
        if ("channelsLast" === o)
            f = (u = l(e, 5))[0],
            d = u[1],
            p = u[2],
            v = u[3],
            g = u[4];
        else {
            if ("channelsFirst" !== o)
                throw new Error("Unknown dataFormat " + o);
            f = (c = l(e, 5))[0],
            g = c[1],
            d = c[2],
            p = c[3],
            v = c[4]
        }
        var m, y = l(t, 5), b = y[0], w = y[1], k = y[2], x = y[4], E = l(_o(n), 3), S = E[0], A = E[1], _ = E[2], I = l(_o(r), 3), M = I[0], N = I[1], T = I[2], D = Io(b, M), R = Io(w, N), B = Io(k, T), F = function(e, t, n, r, a, i, o, s, u, l, c) {
            var h, f, d, p;
            if ("number" == typeof e) {
                h = {
                    top: e,
                    bottom: e,
                    left: e,
                    right: e,
                    front: e,
                    back: e,
                    type: 0 === e ? "VALID" : "NUMBER"
                };
                var v = function(e, t, n, r, a, i) {
                    null == a && (a = So(e, t, r));
                    var o = e[0]
                      , s = e[1]
                      , u = e[2]
                      , l = Mo((o - t + 2 * a) / r + 1, i)
                      , c = Mo((s - t + 2 * a) / r + 1, i)
                      , h = Mo((u - t + 2 * a) / r + 1, i);
                    return [l, c, h, n]
                }([t, n, r, 1], s, 1, a, e, c);
                f = v[0],
                d = v[1],
                p = v[2]
            } else if ("same" === e) {
                var g = ((f = Math.ceil(t / a)) - 1) * a + s - t
                  , m = ((d = Math.ceil(n / i)) - 1) * i + u - n
                  , y = ((p = Math.ceil(r / o)) - 1) * o + l - r
                  , b = Math.floor(g / 2)
                  , w = g - b
                  , k = Math.floor(m / 2)
                  , x = m - k
                  , E = Math.floor(y / 2);
                h = {
                    top: k,
                    bottom: x,
                    left: E,
                    right: y - E,
                    front: b,
                    back: w,
                    type: "SAME"
                }
            } else {
                if ("valid" !== e)
                    throw Error("Unknown padding parameter: " + e);
                h = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    front: 0,
                    back: 0,
                    type: "VALID"
                },
                f = Math.ceil((t - s + 1) / a),
                d = Math.ceil((n - u + 1) / i),
                p = Math.ceil((r - l + 1) / o)
            }
            return {
                padInfo: h,
                outDepth: f,
                outHeight: d,
                outWidth: p
            }
        }(a, d, p, v, S, A, _, D, R, B, s), C = F.padInfo, P = F.outDepth, O = F.outHeight, L = F.outWidth, z = i ? x * g : x;
        return "channelsFirst" === o ? m = [f, z, P, O, L] : "channelsLast" === o && (m = [f, P, O, L, z]),
        {
            batchSize: f,
            dataFormat: o,
            inDepth: d,
            inHeight: p,
            inWidth: v,
            inChannels: g,
            outDepth: P,
            outHeight: O,
            outWidth: L,
            outChannels: z,
            padInfo: C,
            strideDepth: S,
            strideHeight: A,
            strideWidth: _,
            filterDepth: b,
            filterHeight: w,
            filterWidth: k,
            effectiveFilterDepth: D,
            effectiveFilterHeight: R,
            effectiveFilterWidth: B,
            dilationDepth: M,
            dilationHeight: N,
            dilationWidth: T,
            inShape: e,
            outShape: m,
            filterShape: t
        }
    }
    function So(e, t, n, r) {
        void 0 === r && (r = 1);
        var a = Io(t, r);
        return Math.floor((e[0] * (n - 1) - n + a) / 2)
    }
    function Ao(e) {
        return "number" == typeof e ? [e, e, e] : 2 === e.length ? [e[0], e[1], 1] : e
    }
    function _o(e) {
        return "number" == typeof e ? [e, e, e] : e
    }
    function Io(e, t) {
        return t <= 1 ? e : e + (e - 1) * (t - 1)
    }
    function Mo(e, t) {
        if (!t)
            return Math.trunc(e);
        switch (t) {
        case "round":
            return Math.round(e);
        case "ceil":
            return Math.ceil(e);
        case "floor":
            return Math.floor(e);
        default:
            throw new Error("Unknown roundingMode " + t)
        }
    }
    function No(e) {
        var t = l(Ao(e), 3)
          , n = t[0]
          , r = t[1]
          , a = t[2];
        return 1 === n && 1 === r && 1 === a
    }
    function To(e, t) {
        return No(e) || No(t)
    }
    function Do(e) {
        if ("NHWC" === e)
            return "channelsLast";
        if ("NCHW" === e)
            return "channelsFirst";
        throw new Error("Unknown dataFormat " + e)
    }
    function Ro(e, t, n) {
        if (null != n) {
            if ("string" == typeof t)
                throw Error("Error in " + e + ": pad must be an integer when using dimRoundingMode " + n + " but got pad " + t + ".");
            if ("number" == typeof t)
                m(E(t), (function() {
                    return "Error in " + e + ": pad must be an integer when using dimRoundingMode " + n + " but got pad " + t + "."
                }
                ));
            else {
                if ("object" != typeof t)
                    throw Error("Error in " + e + ": Unknown padding parameter: " + t);
                t.forEach((function(t) {
                    t.forEach((function(t) {
                        m(E(t), (function() {
                            return "Error in " + e + ": pad must be an integer when using dimRoundingMode " + n + " but got pad " + t + "."
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }
    }
    var Bo = la({
        reshape_: function(e, t) {
            var n = {
                x: oa(e, "x", "reshape", "string_or_numeric")
            }
              , r = {
                shape: t
            };
            return $r.runKernel(Pt, n, r)
        }
    });
    var Fo = la({
        avgPool_: function(e, t, n, r, a) {
            var i = oa(e, "x", "avgPool", "float32");
            m(To(n, 1), (function() {
                return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '1'"
            }
            ));
            var o = i
              , s = !1;
            3 === i.rank && (s = !0,
            o = Bo(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            m(4 === o.rank, (function() {
                return "Error in avgPool: x must be rank 4 but got rank " + o.rank + "."
            }
            )),
            Ro("avgPool", r, a);
            var u = {
                x: o
            }
              , l = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a
            }
              , c = $r.runKernel(fe, u, l);
            return c = ti(c, i.dtype),
            s ? Bo(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
        }
    });
    var Co = la({
        avgPool3d_: function(e, t, n, r, a, i) {
            void 0 === i && (i = "NDHWC");
            var o = oa(e, "x", "avgPool3d", "float32")
              , s = o
              , u = !1;
            4 === o.rank && (u = !0,
            s = Bo(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            m(5 === s.rank, (function() {
                return "Error in avgPool3d: x must be rank 5 but got rank " + s.rank + "."
            }
            )),
            m("NDHWC" === i, (function() {
                return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + i
            }
            )),
            Ro("avgPool3d", r, a);
            var l = {
                x: s
            }
              , c = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a,
                dataFormat: i
            }
              , h = $r.runKernel(de, l, c);
            return h = ti(h, s.dtype),
            u ? Bo(h, [h.shape[1], h.shape[2], h.shape[3], h.shape[4]]) : h
        }
    });
    var Po = la({
        concat_: function(e, t) {
            void 0 === t && (t = 0),
            m(e.length >= 1, (function() {
                return "Pass at least one tensor to concat"
            }
            ));
            var n = sa(e, "tensors", "concat", "string_or_numeric");
            if ("complex64" === n[0].dtype && n.forEach((function(e) {
                if ("complex64" !== e.dtype)
                    throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + e.dtype + ". ")
            }
            )),
            1 === n.length)
                return ni(n[0]);
            var r = n
              , a = {
                axis: t
            };
            return $r.runKernel(Ee, r, a)
        }
    });
    var Oo = la({
        sigmoid_: function(e) {
            var t = {
                x: oa(e, "x", "sigmoid", "float32")
            };
            return $r.runKernel(Zt, t)
        }
    });
    var Lo = la({
        slice_: function(e, t, n) {
            var r = oa(e, "x", "slice", "string_or_numeric");
            if (0 === r.rank)
                throw new Error("Slicing scalar is not possible");
            var a = {
                x: r
            }
              , i = {
                begin: t,
                size: n
            };
            return $r.runKernel(Ht, a, i)
        }
    });
    var zo = la({
        tanh_: function(e) {
            var t = {
                x: oa(e, "x", "tanh", "float32")
            };
            return $r.runKernel(fn, t)
        }
    });
    var qo = la({
        basicLSTMCell_: function(e, t, n, r, a, i) {
            var o = oa(e, "forgetBias", "basicLSTMCell")
              , s = oa(t, "lstmKernel", "basicLSTMCell")
              , u = oa(n, "lstmBias", "basicLSTMCell")
              , l = oa(r, "data", "basicLSTMCell")
              , c = oa(a, "c", "basicLSTMCell")
              , h = oa(i, "h", "basicLSTMCell")
              , f = Po([l, h], 1)
              , d = mi(f, s)
              , p = ro(d, u)
              , v = p.shape[0]
              , g = p.shape[1] / 4
              , m = [v, g]
              , y = Lo(p, [0, 0], m)
              , b = Lo(p, [0, g], m)
              , w = Lo(p, [0, 2 * g], m)
              , k = Lo(p, [0, 3 * g], m)
              , x = ro(oo(Oo(y), zo(b)), oo(c, Oo(ro(o, w))));
            return [x, oo(zo(x), Oo(k))]
        }
    });
    var Ko = la({
        batchToSpaceND_: function(e, t, n) {
            var r = oa(e, "x", "batchToSpaceND")
              , a = t.reduce((function(e, t) {
                return e * t
            }
            ));
            m(r.rank >= 1 + t.length, (function() {
                return "input rank is " + r.rank + " but should be > than blockShape.length " + t.length
            }
            )),
            m(n.length === t.length, (function() {
                return "crops.length is " + n.length + " but should be equal to blockShape.length  " + t.length
            }
            )),
            m(r.shape[0] % a == 0, (function() {
                return "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + t.join(" * ") + " === " + a
            }
            ));
            var i = {
                x: r
            }
              , o = {
                blockShape: t,
                crops: n
            };
            return $r.runKernel(ve, i, o)
        }
    });
    var Wo = la({
        batchNorm_: function(e, t, n, r, a, i) {
            null == i && (i = .001);
            var o, s, u = oa(e, "x", "batchNorm"), l = oa(t, "mean", "batchNorm"), c = oa(n, "variance", "batchNorm");
            null != a && (o = oa(a, "scale", "batchNorm")),
            null != r && (s = oa(r, "offset", "batchNorm")),
            m(l.rank === c.rank, (function() {
                return "Batch normalization gradient requires mean and variance to have equal ranks."
            }
            )),
            m(null == s || l.rank === s.rank, (function() {
                return "Batch normalization gradient requires mean and offset to have equal ranks."
            }
            )),
            m(null == o || l.rank === o.rank, (function() {
                return "Batch normalization gradient requires mean and scale to have equal ranks."
            }
            ));
            var h = {
                x: function(e) {
                    return 0 === e.rank || 1 === e.rank ? Bo(e, [1, 1, 1, e.size]) : 2 === e.rank ? Bo(e, [1, 1, e.shape[0], e.shape[1]]) : 3 === e.rank ? Bo(e, [1, e.shape[0], e.shape[1], e.shape[2]]) : e
                }(u),
                scale: o,
                offset: s,
                mean: l,
                variance: c
            }
              , f = {
                varianceEpsilon: i
            }
              , d = $r.runKernel(Je, h, f);
            return Bo(d, u.shape)
        }
    });
    var Go = la({
        batchNorm2d_: function(e, t, n, r, a, i) {
            var o, s, u = oa(e, "x", "batchNorm"), l = oa(t, "mean", "batchNorm"), c = oa(n, "variance", "batchNorm");
            return null != a && (o = oa(a, "scale", "batchNorm")),
            null != r && (s = oa(r, "offset", "batchNorm")),
            m(2 === u.rank, (function() {
                return "Error in batchNorm2D: x must be rank 2 but got rank " + u.rank + "."
            }
            )),
            m(2 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + l.rank + "."
            }
            )),
            m(2 === c.rank || 1 === c.rank, (function() {
                return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + c.rank + "."
            }
            )),
            null != o && m(2 === o.rank || 1 === o.rank, (function() {
                return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + o.rank + "."
            }
            )),
            null != s && m(2 === s.rank || 1 === s.rank, (function() {
                return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s.rank + "."
            }
            )),
            Wo(u, l, c, s, o, i)
        }
    });
    var Uo = la({
        batchNorm3d_: function(e, t, n, r, a, i) {
            var o, s, u = oa(e, "x", "batchNorm"), l = oa(t, "mean", "batchNorm"), c = oa(n, "variance", "batchNorm");
            return null != a && (o = oa(a, "scale", "batchNorm")),
            null != r && (s = oa(r, "offset", "batchNorm")),
            m(3 === u.rank, (function() {
                return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + "."
            }
            )),
            m(3 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + l.rank + "."
            }
            )),
            m(3 === c.rank || 1 === c.rank, (function() {
                return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + c.rank + "."
            }
            )),
            null != o && m(3 === o.rank || 1 === o.rank, (function() {
                return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + o.rank + "."
            }
            )),
            null != s && m(3 === s.rank || 1 === s.rank, (function() {
                return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s.rank + "."
            }
            )),
            Wo(u, l, c, s, o, i)
        }
    });
    var Vo = la({
        batchNorm4d_: function(e, t, n, r, a, i) {
            var o, s, u = oa(e, "x", "batchNorm"), l = oa(t, "mean", "batchNorm"), c = oa(n, "variance", "batchNorm");
            return null != a && (o = oa(a, "scale", "batchNorm")),
            null != r && (s = oa(r, "offset", "batchNorm")),
            m(4 === u.rank, (function() {
                return "Error in batchNorm4D: x must be rank 4 but got rank " + u.rank + "."
            }
            )),
            m(4 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + l.rank + "."
            }
            )),
            m(4 === c.rank || 1 === c.rank, (function() {
                return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + c.rank + "."
            }
            )),
            null != o && m(4 === o.rank || 1 === o.rank, (function() {
                return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + o.rank + "."
            }
            )),
            null != s && m(4 === s.rank || 1 === s.rank, (function() {
                return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s.rank + "."
            }
            )),
            Wo(u, l, c, s, o, i)
        }
    });
    var Ho = la({
        bincount_: function(e, t, n) {
            var r = oa(e, "x", "bincount")
              , a = oa(t, "weights", "bincount");
            m("int32" === r.dtype, (function() {
                return "Error in bincount: input dtype must be int32, but got " + r.dtype
            }
            )),
            m(n >= 0, (function() {
                return "size must be non-negative, but got " + n + "."
            }
            )),
            m(a.size === r.size || 0 === a.size, (function() {
                return "Error in bincount: weights must have the same size as input or0-length, but got input shape: " + r.shape + ", weights shape: " + a.shape + "."
            }
            ));
            var i = {
                x: r,
                weights: a
            }
              , o = {
                size: n
            };
            return $r.runKernel(ge, i, o)
        }
    });
    var jo = la({
        broadcastArgs_: function(e, t) {
            var n = oa(e, "s0", "broadcastArgs", "int32")
              , r = oa(t, "s1", "broadcastArgs", "int32");
            if (1 !== n.rank)
                throw new Error("broadcastArgs(): first input must be a vector (rank=1). Has rank " + n.rank);
            if (1 !== r.rank)
                throw new Error("broadcastArgs(): second input must be a vector (rank=1). Has rank " + r.rank);
            var a = {
                s0: n,
                s1: r
            };
            return $r.runKernel(me, a)
        }
    });
    var Jo = la({
        broadcastTo_: function(e, t) {
            var n = oa(e, "broadcastTo", "x")
              , r = n.shape;
            if (t.some((function(e) {
                return !(e > 0) || e % 1 != 0
            }
            )))
                throw new Error("broadcastTo(): Invalid broadcast shape [" + t + "].");
            if (t.length < n.rank)
                throw new Error("broadcastTo(): shape.length=" + t.length + " < input.rank=" + n.rank + ".");
            if (t.length > n.rank) {
                for (var a = n.shape.slice(); a.length < t.length; )
                    a.unshift(1);
                n = Bo(n, a)
            }
            for (var i = n.shape, o = Array.from(t), s = t.length - 1; s >= 0; s--)
                if (i[s] === t[s])
                    o[s] = 1;
                else if (1 !== n.shape[s])
                    throw new Error("broadcastTo(): [" + r + "] cannot be broadcast to [" + t + "].");
            if (0 === o.map((function(e, t) {
                return e > 1 ? t : -1
            }
            )).filter((function(e) {
                return e >= 0
            }
            )).length)
                return ni(n);
            var u = {
                x: n
            }
              , l = {
                reps: o
            };
            return $r.runKernel(dn, u, l)
        }
    });
    var Zo = la({
        ceil_: function(e) {
            var t = {
                x: oa(e, "x", "ceil", "float32")
            };
            return $r.runKernel(be, t)
        }
    });
    var Yo = la({
        clipByValue_: function(e, t, n) {
            var r = oa(e, "x", "clipByValue");
            m(t <= n, (function() {
                return "Error in clip: min (" + t + ") must be less than or equal to max (" + n + ")."
            }
            ));
            var a = {
                x: r
            }
              , i = {
                clipValueMin: t,
                clipValueMax: n
            };
            return $r.runKernel(we, a, i)
        }
    });
    var Xo = la({
        concat1d_: function(e) {
            return Po(e, 0)
        }
    });
    var $o = la({
        concat2d_: function(e, t) {
            return Po(e, t)
        }
    });
    var Qo = la({
        concat3d_: function(e, t) {
            return Po(e, t)
        }
    });
    var es = la({
        concat4d_: function(e, t) {
            return Po(e, t)
        }
    });
    var ts = la({
        conv2d_: function(e, t, n, r, a, i, o) {
            void 0 === a && (a = "NHWC"),
            void 0 === i && (i = [1, 1]);
            var s = oa(e, "x", "conv2d", "float32")
              , u = oa(t, "filter", "conv2d", "float32")
              , l = s
              , c = !1;
            3 === s.rank && (c = !0,
            l = Bo(s, [1, s.shape[0], s.shape[1], s.shape[2]])),
            m(4 === l.rank, (function() {
                return "Error in conv2d: input must be rank 4, but got rank " + l.rank + "."
            }
            )),
            m(4 === u.rank, (function() {
                return "Error in conv2d: filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            Ro("conv2d", r, o);
            var h = "NHWC" === a ? l.shape[3] : l.shape[1];
            m(h === u.shape[2], (function() {
                return "Error in conv2d: depth of input (" + h + ") must match input depth for filter " + u.shape[2] + "."
            }
            )),
            m(To(n, i), (function() {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"
            }
            ));
            var f = {
                x: l,
                filter: u
            }
              , d = {
                strides: n,
                pad: r,
                dataFormat: a,
                dilations: i,
                dimRoundingMode: o
            }
              , p = $r.runKernel(Se, f, d);
            return c ? Bo(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
        }
    });
    var ns = la({
        conv1d_: function(e, t, n, r, a, i, o) {
            void 0 === a && (a = "NWC"),
            void 0 === i && (i = 1);
            var s = oa(e, "x", "conv1d")
              , u = oa(t, "filter", "conv1d")
              , l = s
              , c = !1;
            2 === s.rank && (c = !0,
            l = Bo(s, [1, s.shape[0], s.shape[1]])),
            m(3 === l.rank, (function() {
                return "Error in conv1d: input must be rank 3, but got rank " + l.rank + "."
            }
            )),
            m(3 === u.rank, (function() {
                return "Error in conv1d: filter must be rank 3, but got rank " + u.rank + "."
            }
            )),
            Ro("conv1d", r, o),
            m(l.shape[2] === u.shape[1], (function() {
                return "Error in conv1d: depth of input (" + l.shape[2] + ") must match input depth for filter " + u.shape[1] + "."
            }
            )),
            m(To(n, i), (function() {
                return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n + " and dilation '" + i + "'"
            }
            )),
            m("NWC" === a, (function() {
                return "Error in conv1d: got dataFormat of " + a + " but only NWC is currently supported."
            }
            ));
            var h = Bo(u, [1, u.shape[0], u.shape[1], u.shape[2]])
              , f = Bo(l, [l.shape[0], 1, l.shape[1], l.shape[2]])
              , d = ts(f, h, [1, n], r, "NHWC", [1, i], o);
            return Bo(d, c ? [d.shape[2], d.shape[3]] : [d.shape[0], d.shape[2], d.shape[3]])
        }
    });
    var rs = la({
        conv2DBackpropInput_: function(e, t, n, r, a, i, o) {
            void 0 === i && (i = "NHWC"),
            m(e.length === t.rank, (function() {
                return "Length of inShape (" + e.length + ") and rank of dy (" + t.rank + ") must match"
            }
            ));
            var s = e
              , u = t
              , l = !1;
            3 === t.rank && (l = !0,
            u = Bo(t, [1, t.shape[0], t.shape[1], t.shape[2]]),
            s = [1, e[0], e[1], e[2]]),
            m(4 === s.length, (function() {
                return "Error in conv2dDerInput: inShape must be length 4, but got length " + s.length + "."
            }
            )),
            m(4 === u.rank, (function() {
                return "Error in conv2dDerInput: dy must be rank 4, but got rank " + u.rank
            }
            )),
            m(4 === n.rank, (function() {
                return "Error in conv2dDerInput: filter must be rank 4, but got rank " + n.rank
            }
            ));
            var c = "NHWC" === i ? s[3] : s[1]
              , h = "NHWC" === i ? u.shape[3] : u.shape[1];
            m(c === n.shape[2], (function() {
                return "Error in conv2dDerInput: depth of input (" + c + ") must match input depth for filter " + n.shape[2] + "."
            }
            )),
            m(h === n.shape[3], (function() {
                return "Error in conv2dDerInput: depth of output (" + h + ") must match output depth for filter " + n.shape[3] + "."
            }
            )),
            Ro("conv2dDerInput", a, o);
            var f = {
                dy: u,
                filter: n
            }
              , d = {
                strides: r,
                pad: a,
                dataFormat: i,
                dimRoundingMode: o,
                inputShape: s
            }
              , p = $r.runKernel(_e, f, d);
            return l ? Bo(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
        }
    });
    var as = la({
        conv2dTranspose_: function(e, t, n, r, a, i) {
            var o = oa(e, "x", "conv2dTranspose")
              , s = oa(t, "filter", "conv2dTranspose");
            return rs(n, o, s, r, a, "NHWC", i)
        }
    });
    var is = la({
        conv3d_: function(e, t, n, r, a, i) {
            void 0 === a && (a = "NDHWC"),
            void 0 === i && (i = [1, 1, 1]);
            var o = oa(e, "x", "conv3d")
              , s = oa(t, "filter", "conv3d")
              , u = o
              , l = !1;
            4 === o.rank && (l = !0,
            u = Bo(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            m(5 === u.rank, (function() {
                return "Error in conv3d: input must be rank 5, but got rank " + u.rank + "."
            }
            )),
            m(5 === s.rank, (function() {
                return "Error in conv3d: filter must be rank 5, but got rank " + s.rank + "."
            }
            )),
            m(u.shape[4] === s.shape[3], (function() {
                return "Error in conv3d: depth of input (" + u.shape[4] + ") must match input depth for filter " + s.shape[3] + "."
            }
            )),
            m(To(n, i), (function() {
                return "Error in conv3D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"
            }
            )),
            m("NDHWC" === a, (function() {
                return "Error in conv3d: got dataFormat of " + a + " but only NDHWC is currently supported."
            }
            ));
            var c = {
                x: u,
                filter: s
            }
              , h = {
                strides: n,
                pad: r,
                dataFormat: a,
                dilations: i
            }
              , f = $r.runKernel(Ie, c, h);
            return l ? Bo(f, [f.shape[1], f.shape[2], f.shape[3], f.shape[4]]) : f
        }
    });
    var os = la({
        conv3DBackpropInput_: function(e, t, n, r, a) {
            m(e.length === t.rank, (function() {
                return "Length of inShape (" + e.length + ") and rank of dy (" + t.rank + ") must match"
            }
            ));
            var i = e
              , o = t
              , s = !1;
            4 === t.rank && (s = !0,
            o = Bo(t, [1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]]),
            i = [1, e[0], e[1], e[2], e[3]]);
            var u = i[4]
              , l = o.shape[4];
            m(5 === i.length, (function() {
                return "Error in conv3dDerInput: inShape must be length 5, but got length " + i.length + "."
            }
            )),
            m(5 === o.rank, (function() {
                return "Error in conv3dDerInput: dy must be rank 5, but got rank " + o.rank
            }
            )),
            m(5 === n.rank, (function() {
                return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n.rank
            }
            )),
            m(u === n.shape[3], (function() {
                return "Error in conv3dDerInput: depth of input (" + u + ") must match input depth for filter " + n.shape[3] + "."
            }
            )),
            m(l === n.shape[4], (function() {
                return "Error in conv3dDerInput: depth of output (" + l + ") must match output depth for filter " + n.shape[4] + "."
            }
            ));
            var c = {
                dy: o,
                filter: n
            }
              , h = {
                pad: a,
                strides: r,
                inputShape: i
            }
              , f = $r.runKernel(Me, c, h);
            return s ? Bo(f, [f.shape[1], f.shape[2], f.shape[3], f.shape[4]]) : f
        }
    });
    var ss = la({
        conv3dTranspose_: function(e, t, n, r, a) {
            var i = oa(e, "x", "conv3dTranspose")
              , o = oa(t, "filter", "conv3dTranspose");
            return os(n, i, o, r, a)
        }
    });
    var us = la({
        cos_: function(e) {
            var t = {
                x: oa(e, "x", "cos", "float32")
            };
            return $r.runKernel("Cos", t)
        }
    });
    var ls = la({
        cosh_: function(e) {
            var t = {
                x: oa(e, "x", "cosh", "float32")
            };
            return $r.runKernel(Ne, t)
        }
    });
    var cs = la({
        cumsum_: function(e, t, n, r) {
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = {
                x: oa(e, "x", "cumsum")
            }
              , i = {
                axis: t,
                exclusive: n,
                reverse: r
            };
            return $r.runKernel(Te, a, i)
        }
    });
    var hs = la({
        denseBincount_: function(e, t, n, r) {
            void 0 === r && (r = !1);
            var a = oa(e, "x", "denseBincount")
              , i = oa(t, "weights", "denseBincount");
            m("int32" === a.dtype, (function() {
                return "Error in denseBincount: input dtype must be int32, but got " + a.dtype
            }
            )),
            m(a.rank <= 2, (function() {
                return "Error in denseBincount: input must be at most rank 2, but got rank " + a.rank + "."
            }
            )),
            m(n >= 0, (function() {
                return "size must be non-negative, but got " + n + "."
            }
            )),
            m(i.size === a.size || 0 === i.size, (function() {
                return "Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: " + a.shape + ", weights shape: " + i.shape + "."
            }
            ));
            var o = {
                x: a,
                weights: i
            }
              , s = {
                size: n,
                binaryOutput: r
            };
            return $r.runKernel(Re, o, s)
        }
    });
    var fs = la({
        depthToSpace_: function(e, t, n) {
            void 0 === n && (n = "NHWC");
            var r = oa(e, "x", "depthToSpace", "float32")
              , a = "NHWC" === n ? r.shape[1] : r.shape[2]
              , i = "NHWC" === n ? r.shape[2] : r.shape[3]
              , o = "NHWC" === n ? r.shape[3] : r.shape[1];
            m(t > 1, (function() {
                return "blockSize should be > 1 for depthToSpace, but was: " + t
            }
            )),
            m(a * t >= 0, (function() {
                return "Negative dimension size caused by overflow when multiplying\n    " + a + " and " + t + "  for depthToSpace with input shape\n    " + r.shape
            }
            )),
            m(i * t >= 0, (function() {
                return "Negative dimension size caused by overflow when multiplying\n    " + i + " and " + t + " for depthToSpace with input shape\n        " + r.shape
            }
            )),
            m(o % (t * t) == 0, (function() {
                return "Dimension size must be evenly divisible by " + t * t + " but is " + o + " for depthToSpace with input shape " + r.shape
            }
            ));
            var s = {
                x: r
            }
              , u = {
                blockSize: t,
                dataFormat: n
            };
            return $r.runKernel(Be, s, u)
        }
    });
    var ds = la({
        depthwiseConv2d_: function(e, t, n, r, a, i, o) {
            void 0 === a && (a = "NHWC"),
            void 0 === i && (i = [1, 1]);
            var s = oa(e, "x", "depthwiseConv2d", "float32")
              , u = oa(t, "filter", "depthwiseConv2d", "float32")
              , l = s
              , c = !1;
            3 === s.rank && (c = !0,
            l = Bo(s, [1, s.shape[0], s.shape[1], s.shape[2]])),
            m(4 === l.rank, (function() {
                return "Error in depthwiseConv2d: input must be rank 4, but got rank " + l.rank + "."
            }
            )),
            m(4 === u.rank, (function() {
                return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            m(l.shape[3] === u.shape[2], (function() {
                return "Error in depthwiseConv2d: number of input channels (" + l.shape[3] + ") must match the inChannels dimension in filter " + u.shape[2] + "."
            }
            )),
            Ro("depthwiseConv2d", r, o);
            var h = {
                x: l,
                filter: u
            }
              , f = {
                strides: n,
                pad: r,
                dataFormat: a,
                dilations: i,
                dimRoundingMode: o
            }
              , d = $r.runKernel(Fe, h, f);
            return c ? Bo(d, [d.shape[1], d.shape[2], d.shape[3]]) : d
        }
    });
    var ps = la({
        diag_: function(e) {
            var t = {
                x: oa(e, "x", "diag")
            };
            return $r.runKernel(Oe, t)
        }
    });
    var vs = la({
        dilation2d_: function(e, t, n, r, a, i) {
            void 0 === a && (a = [1, 1]),
            void 0 === i && (i = "NHWC");
            var o = oa(e, "x", "dilation2d")
              , s = oa(t, "filter", "dilation2d");
            m(3 === o.rank || 4 === o.rank, (function() {
                return "Error in dilation2d: input must be rank 3 or 4, but got rank " + o.rank + "."
            }
            )),
            m(3 === s.rank, (function() {
                return "Error in dilation2d: filter must be rank 3, but got rank " + s.rank + "."
            }
            )),
            m("NHWC" === i, (function() {
                return "Error in dilation2d: Only NHWC is currently supported, but got dataFormat of " + i
            }
            ));
            var u = o
              , l = !1;
            3 === o.rank && (u = Bo(o, [1, o.shape[0], o.shape[1], o.shape[2]]),
            l = !0);
            var c = {
                x: u,
                filter: s
            }
              , h = {
                strides: n,
                pad: r,
                dilations: a
            }
              , f = $r.runKernel(Le, c, h);
            return l ? Bo(f, [f.shape[1], f.shape[2], f.shape[3]]) : f
        }
    });
    var gs = la({
        equal_: function(e, t) {
            var n, r = oa(e, "a", "equal", "string_or_numeric"), a = oa(t, "b", "equal", "string_or_numeric");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(Ke, i)
        }
    });
    var ms = la({
        where_: function(e, t, n) {
            var r = oa(t, "a", "where")
              , a = oa(n, "b", "where")
              , i = oa(e, "condition", "where", "bool")
              , o = Ei(Ei(i.shape, r.shape), a.shape)
              , s = {
                condition: Jo(i, o),
                t: Jo(r, o),
                e: Jo(a, o)
            };
            return $r.runKernel(Ut, s)
        }
    });
    var ys = la({
        zerosLike_: function(e) {
            var t = {
                x: oa(e, "x", "zerosLike")
            };
            return $r.runKernel(wn, t)
        }
    });
    var bs = la({
        divNoNan_: function(e, t) {
            var n, r = oa(e, "a", "div"), a = oa(t, "b", "div");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1];
            var i = io(r, a)
              , o = ys(i)
              , s = gs(a, o);
            return ms(s, o, i)
        }
    });
    var ws = la({
        dot_: function(e, t) {
            var n = oa(e, "t1", "dot")
              , r = oa(t, "t2", "dot");
            m(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), (function() {
                return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n.rank + " and " + r.rank + "."
            }
            ));
            var a = 1 === n.rank ? n.size : n.shape[1]
              , i = 1 === r.rank ? r.size : r.shape[0];
            if (m(a === i, (function() {
                return "Error in dot: inner dimensions of inputs must match, but got " + a + " and " + i + "."
            }
            )),
            1 === n.rank && 1 === r.rank) {
                var o = Bo(n, [1, -1])
                  , s = Bo(r, [-1, 1])
                  , u = mi(o, s);
                return Bo(u, [])
            }
            if (1 === n.rank && 2 === r.rank) {
                o = Bo(n, [1, -1]),
                s = Bo(r, [r.shape[0], r.shape[1]]),
                u = mi(o, s);
                return Bo(u, [u.size])
            }
            if (2 === n.rank && 1 === r.rank) {
                s = Bo(r, [-1, 1]),
                u = mi(n, s);
                return Bo(u, [u.size])
            }
            return s = Bo(r, [r.shape[0], r.shape[1]]),
            u = mi(n, s)
        }
    });
    var ks = la({
        einsum_: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = t.map((function(e, t) {
                return oa(e, "tensors" + t, "einsum")
            }
            ))
              , a = {
                equation: e
            };
            return $r.runKernel(qe, r, a)
        }
    });
    var xs = la({
        elu_: function(e) {
            var t = {
                x: oa(e, "x", "elu", "float32")
            };
            return $r.runKernel("Elu", t)
        }
    });
    var Es = la({
        erf_: function(e) {
            var t = oa(e, "x", "erf");
            m("int32" === t.dtype || "float32" === t.dtype, (function() {
                return "Input dtype must be `int32` or `float32`."
            }
            )),
            "int32" === t.dtype && (t = ti(t, "float32"));
            var n = {
                x: t
            };
            return $r.runKernel("Erf", n)
        }
    });
    var Ss = la({
        exp_: function(e) {
            var t = {
                x: oa(e, "x", "exp")
            };
            return $r.runKernel("Exp", t)
        }
    });
    var As = la({
        expandDims_: function(e, t) {
            void 0 === t && (t = 0);
            var n = oa(e, "x", "expandDims", "string_or_numeric");
            m(t <= n.rank, (function() {
                return "Axis must be <= rank of the tensor"
            }
            ));
            var r = {
                input: n
            }
              , a = {
                dim: t
            };
            return $r.runKernel(We, r, a)
        }
    });
    var _s = la({
        expm1_: function(e) {
            var t = {
                x: oa(e, "x", "expm1")
            };
            return $r.runKernel(Ge, t)
        }
    });
    var Is = la({
        tile_: function(e, t) {
            var n = oa(e, "x", "tile", "string_or_numeric");
            m(n.rank === t.length, (function() {
                return "Error in transpose: rank of input " + n.rank + " must match length of reps " + t + "."
            }
            ));
            var r = {
                x: n
            }
              , a = {
                reps: t
            };
            return $r.runKernel(dn, r, a)
        }
    });
    var Ms = la({
        eye_: function(e, t, n, r) {
            void 0 === r && (r = "float32"),
            null == t && (t = e);
            for (var a = ei([e, t], r), i = e <= t ? e : t, o = 0; o < i; ++o)
                a.set(1, o, o);
            var s = Bo(a.toTensor(), [e, t]);
            if (null == n)
                return s;
            if (1 === n.length)
                return Is(As(s, 0), [n[0], 1, 1]);
            if (2 === n.length)
                return Is(As(As(s, 0), 0), [n[0], n[1], 1, 1]);
            if (3 === n.length)
                return Is(As(As(As(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
            throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.")
        }
    });
    function Ns(e, t, n) {
        var r = {
            shape: e,
            value: t,
            dtype: n
        };
        return $r.runKernel(Ue, {}, r)
    }
    var Ts = la({
        floor_: function(e) {
            var t = {
                x: oa(e, "x", "floor", "float32")
            };
            return $r.runKernel(He, t)
        }
    });
    var Ds = la({
        gather_: function(e, t, n, r) {
            void 0 === n && (n = 0),
            void 0 === r && (r = 0);
            var a = {
                x: oa(e, "x", "gather"),
                indices: oa(t, "indices", "gather", "int32")
            }
              , i = {
                axis: n,
                batchDims: r
            };
            return $r.runKernel(Ze, a, i)
        }
    });
    var Rs = la({
        greater_: function(e, t) {
            var n, r = oa(e, "a", "greater", "string_or_numeric"), a = oa(t, "b", "greater", "string_or_numeric");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(Xe, i)
        }
    });
    var Bs = la({
        greaterEqual_: function(e, t) {
            var n, r = oa(e, "a", "greaterEqual", "string_or_numeric"), a = oa(t, "b", "greaterEqual", "string_or_numeric");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel($e, i)
        }
    });
    var Fs = la({
        imag_: function(e) {
            var t = {
                input: oa(e, "input", "imag")
            };
            return $r.runKernel(tt, t)
        }
    });
    var Cs = la({
        isFinite_: function(e) {
            var t = {
                x: oa(e, "x", "isFinite")
            };
            return $r.runKernel(nt, t)
        }
    });
    var Ps = la({
        isInf_: function(e) {
            var t = {
                x: oa(e, "x", "isInf")
            };
            return $r.runKernel(rt, t)
        }
    });
    var Os = la({
        isNaN_: function(e) {
            var t = {
                x: oa(e, "x", "isNaN")
            };
            return $r.runKernel(at, t)
        }
    });
    var Ls = la({
        leakyRelu_: function(e, t) {
            void 0 === t && (t = .2);
            var n = {
                x: oa(e, "x", "leakyRelu")
            }
              , r = {
                alpha: t
            };
            return $r.runKernel(it, n, r)
        }
    });
    var zs = la({
        less_: function(e, t) {
            var n, r = oa(e, "a", "less", "string_or_numeric"), a = oa(t, "b", "less", "string_or_numeric");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(ot, i)
        }
    });
    var qs = la({
        lessEqual_: function(e, t) {
            var n, r = oa(e, "a", "lessEqual", "string_or_numeric"), a = oa(t, "b", "lessEqual", "string_or_numeric");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(st, i)
        }
    });
    var Ks = la({
        localResponseNormalization_: function(e, t, n, r, a) {
            void 0 === t && (t = 5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = .5);
            var i = oa(e, "x", "localResponseNormalization");
            m(4 === i.rank || 3 === i.rank, (function() {
                return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + i.rank + "."
            }
            )),
            m(E(t), (function() {
                return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + t + "."
            }
            ));
            var o = i
              , s = !1;
            3 === i.rank && (s = !0,
            o = Bo(i, [1, i.shape[0], i.shape[1], i.shape[2]]));
            var u = {
                x: o
            }
              , l = {
                depthRadius: t,
                bias: n,
                alpha: r,
                beta: a
            }
              , c = $r.runKernel("LRN", u, l);
            return s ? Bo(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
        }
    });
    var Ws = la({
        log_: function(e) {
            var t = {
                x: oa(e, "x", "log", "float32")
            };
            return $r.runKernel("Log", t)
        }
    });
    var Gs = la({
        log1p_: function(e) {
            var t = {
                x: oa(e, "x", "log1p")
            };
            return $r.runKernel(lt, t)
        }
    });
    function Us(e, t) {
        m(L(e), (function() {
            return "The f passed in variableGrads(f) must be a function"
        }
        )),
        m(null == t || Array.isArray(t) && t.every((function(e) {
            return e instanceof zr
        }
        )), (function() {
            return "The varList passed in variableGrads(f, varList) must be an array of variables"
        }
        ));
        var n = null != t;
        if (!n)
            for (var r in t = [],
            $r.registeredVariables)
                t.push($r.registeredVariables[r]);
        var a = n ? t.filter((function(e) {
            return !e.trainable
        }
        )) : null
          , i = t.length;
        m((t = t.filter((function(e) {
            return e.trainable
        }
        ))).length > 0, (function() {
            return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + i + " variables is trainable."
        }
        ));
        var o = $r.gradients(e, t, null, !0)
          , s = o.value
          , u = o.grads;
        m(u.some((function(e) {
            return null != e
        }
        )), (function() {
            return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."
        }
        )),
        m(0 === s.rank, (function() {
            return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + s.rank + " tensor"
        }
        ));
        var l = {};
        return t.forEach((function(e, t) {
            null != u[t] && (l[e.name] = u[t])
        }
        )),
        null != a && a.forEach((function(e) {
            return l[e.name] = null
        }
        )),
        {
            value: s,
            grads: l
        }
    }
    function Vs(e) {
        return $r.customGrad(e)
    }
    function Hs(e) {
        if (e.filter((function(e) {
            return null == e
        }
        )).length > 0)
            throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")
    }
    var js = la({
        neg_: function(e) {
            var t = {
                x: oa(e, "x", "neg")
            };
            return $r.runKernel("Neg", t)
        }
    });
    var Js = la({
        softplus_: function(e) {
            var t = {
                x: oa(e, "x", "softplus")
            };
            return $r.runKernel(Yt, t)
        }
    });
    var Zs = la({
        logSigmoid_: function(e) {
            var t = oa(e, "x", "logSigmoid");
            return Vs((function(e) {
                return {
                    value: js(Js(js(e))),
                    gradFunc: function(t) {
                        return oo(t, Oo(js(e)))
                    }
                }
            }
            ))(t)
        }
    });
    var Ys = la({
        max_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: oa(e, "x", "max")
            }
              , a = {
                reductionIndices: t,
                keepDims: n
            };
            return $r.runKernel("Max", r, a)
        }
    });
    var Xs = la({
        sub_: function(e, t) {
            var n, r = oa(e, "a", "sub"), a = oa(t, "b", "sub"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel("Sub", i)
        }
    });
    var $s = la({
        sum_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = oa(e, "x", "sum");
            "bool" === r.dtype && (r = ti(r, "int32"));
            var a = {
                x: r
            }
              , i = {
                axis: t,
                keepDims: n
            };
            return $r.runKernel("Sum", a, i)
        }
    });
    var Qs = la({
        logSoftmax_: function(e, t) {
            void 0 === t && (t = -1);
            var n = oa(e, "logits", "logSoftmax");
            if (-1 === t && (t = n.rank - 1),
            t !== n.rank - 1)
                throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + n.rank + " and axis was " + t);
            return Vs((function(e, n) {
                var r = Ys(e, t, !0)
                  , a = Xs(e, r)
                  , i = Xs(ti(a, "float32"), Ws($s(Ss(a), t, !0)));
                n([i]);
                return {
                    value: i,
                    gradFunc: function(e, n) {
                        var r = l(n, 1)[0]
                          , a = Ss(r);
                        return Xs(e, oo($s(e, t, !0), a))
                    }
                }
            }
            ))(n)
        }
    });
    function eu(e, t) {
        for (var n = 0; n < e.length; ++n)
            if (e[e.length - n - 1] !== t - 1 - n)
                return !1;
        return !0
    }
    function tu(e, t, n) {
        for (var r = e.length + t.length, a = [], i = 0, o = 0, s = 0; s < r; s++)
            -1 === n.indexOf(s) ? a.push(e[i++]) : a.push(t[o++]);
        return a
    }
    function nu(e, t) {
        return tu(e, t.map((function(e) {
            return 1
        }
        )), t)
    }
    var ru = la({
        logSumExp_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = oa(e, "x", "logSumExp")
              , a = A(t, r.shape)
              , i = Ys(r, a, !0)
              , o = Xs(r, i)
              , s = Ss(o)
              , u = $s(s, a)
              , l = Ws(u)
              , c = ro(Bo(i, l.shape), l);
            if (n) {
                var h = nu(c.shape, a);
                return Bo(c, h)
            }
            return c
        }
    });
    var au = la({
        logicalAnd_: function(e, t) {
            var n = oa(e, "a", "logicalAnd", "bool")
              , r = oa(t, "b", "logicalAnd", "bool");
            Ei(n.shape, r.shape);
            var a = {
                a: n,
                b: r
            };
            return $r.runKernel(ct, a)
        }
    });
    var iu = la({
        logicalNot_: function(e) {
            var t = {
                x: oa(e, "x", "logicalNot", "bool")
            };
            return $r.runKernel(ht, t)
        }
    });
    var ou = la({
        logicalOr_: function(e, t) {
            var n = oa(e, "a", "logicalOr", "bool")
              , r = oa(t, "b", "logicalOr", "bool");
            Ei(n.shape, r.shape);
            var a = {
                a: n,
                b: r
            };
            return $r.runKernel(ft, a)
        }
    });
    var su = la({
        logicalXor_: function(e, t) {
            var n = oa(e, "a", "logicalXor", "bool")
              , r = oa(t, "b", "logicalXor", "bool");
            return Ei(n.shape, r.shape),
            au(ou(e, t), iu(au(e, t)))
        }
    });
    var uu = la({
        maxPool_: function(e, t, n, r, a) {
            var i = oa(e, "x", "maxPool")
              , o = i
              , s = !1;
            3 === i.rank && (s = !0,
            o = Bo(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            m(4 === o.rank, (function() {
                return "Error in maxPool: input must be rank 4 but got rank " + o.rank + "."
            }
            )),
            m(To(n, 1), (function() {
                return "Error in maxPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '1'"
            }
            )),
            Ro("maxPool", r, a);
            var u = {
                x: o
            }
              , l = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a
            }
              , c = $r.runKernel(pt, u, l);
            return s ? Bo(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
        }
    });
    var lu = la({
        maxPool3d_: function(e, t, n, r, a, i) {
            void 0 === t && (t = [1, 1, 1]),
            void 0 === i && (i = "NDHWC");
            var o = oa(e, "x", "maxPool3d")
              , s = o
              , u = !1;
            4 === o.rank && (u = !0,
            s = Bo(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            m(5 === s.rank, (function() {
                return "Error in maxPool3d: x must be rank 5 but got rank " + s.rank + "."
            }
            )),
            m("NDHWC" === i, (function() {
                return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + i
            }
            )),
            Ro("maxPool3d", r, a);
            var l = {
                x: s
            }
              , c = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a,
                dataFormat: i
            }
              , h = $r.runKernel(vt, l, c);
            return u ? Bo(h, [h.shape[1], h.shape[2], h.shape[3], h.shape[4]]) : h
        }
    });
    var cu = la({
        maxPoolWithArgmax_: function(e, t, n, r, a) {
            void 0 === a && (a = !1);
            var i = {
                x: oa(e, "x", "maxPoolWithArgmax")
            }
              , o = {
                filterSize: t,
                strides: n,
                pad: r,
                includeBatchInIndex: a
            }
              , s = $r.runKernel(gt, i, o);
            return {
                result: s[0],
                indexes: s[1]
            }
        }
    });
    var hu = la({
        maximum_: function(e, t) {
            var n, r = oa(e, "a", "maximum"), a = oa(t, "b", "maximum");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            "bool" === r.dtype && (r = ti(r, "int32"),
            a = ti(a, "int32")),
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(dt, i)
        }
    });
    var fu = la({
        mean_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: oa(e, "x", "mean")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return $r.runKernel(mt, r, a)
        }
    });
    function du(e, t) {
        if (void 0 === t && (t = "float32"),
        "complex64" === t) {
            var n = du(e, "float32")
              , r = du(e, "float32");
            return ca(n, r)
        }
        var a = U(k(e), t);
        return $r.makeTensor(a, e, t)
    }
    function pu(e, t) {
        if (void 0 === t && (t = "float32"),
        "complex64" === t) {
            var n = pu(e, "float32")
              , r = du(e, "float32");
            return ca(n, r)
        }
        var a = G(k(e), t);
        return $r.makeTensor(a, e, t)
    }
    var vu = la({
        min_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: oa(e, "x", "min")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return $r.runKernel("Min", r, a)
        }
    });
    var gu = la({
        minimum_: function(e, t) {
            var n, r = oa(e, "a", "minimum"), a = oa(t, "b", "minimum");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            "bool" === r.dtype && (r = ti(r, "int32"),
            a = ti(a, "int32")),
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(yt, i)
        }
    });
    var mu = la({
        mirrorPad_: function(e, t, n) {
            m("reflect" === n || "symmetric" === n, (function() {
                return "Invalid mode. Mode must be either reflect or symmetric. Got " + n + "."
            }
            ));
            var r = oa(e, "x", "mirrorPad");
            if (0 === r.rank)
                throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");
            m(t.length === r.rank, (function() {
                return "Padding doesn't match input. Must be " + r.rank + ". Got " + t.length + "."
            }
            ));
            for (var a = "reflect" === n ? 1 : 0, i = function(e) {
                m(2 === t[e].length, (function() {
                    return "Invalid number of paddings. Must be length of 2 each."
                }
                )),
                m(t[e][0] >= 0 && t[e][0] <= r.shape[e] - a && t[e][1] >= 0 && t[e][1] <= r.shape[e] - a, (function() {
                    return "Padding in dimension " + e + " cannot be greater than or equal to " + (r.shape[e] - a) + " or less than 0 for input of shape " + r.shape
                }
                ))
            }, o = 0; o < r.rank; o++)
                i(o);
            var s = {
                paddings: t,
                mode: n
            }
              , u = {
                x: r
            };
            return $r.runKernel(bt, u, s)
        }
    });
    var yu = la({
        mod_: function(e, t) {
            var n, r = oa(e, "a", "mod"), a = oa(t, "b", "mod"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel("Mod", i)
        }
    });
    var bu = la({
        square_: function(e) {
            var t = oa(e, "x", "square");
            return $r.runKernel("Square", {
                x: t
            }, {})
        }
    });
    var wu = la({
        moments_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = A(t, (e = oa(e, "x", "moments")).shape)
              , a = fu(e, r, n)
              , i = a.shape;
            n || (i = nu(a.shape, r));
            var o = bu(Xs(ti(e, "float32"), Bo(a, i)));
            return {
                mean: a,
                variance: fu(o, r, n)
            }
        }
    });
    var ku = la({
        multiRNNCell_: function(e, t, n, r) {
            for (var a = oa(t, "data", "multiRNNCell"), i = sa(n, "c", "multiRNNCell"), o = sa(r, "h", "multiRNNCell"), s = a, u = [], l = 0; l < e.length; l++) {
                var c = e[l](s, i[l], o[l]);
                u.push(c[0]),
                u.push(c[1]),
                s = c[1]
            }
            var h = []
              , f = [];
            for (l = 0; l < u.length; l += 2)
                h.push(u[l]),
                f.push(u[l + 1]);
            return [h, f]
        }
    });
    var xu = la({
        multinomial_: function(e, t, n, r) {
            void 0 === r && (r = !1);
            var a = oa(e, "logits", "multinomial")
              , i = a.size
              , o = a.rank;
            if (i < 2)
                throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + i + ".");
            if (o > 2)
                throw new Error("Rank of probabilities must be 1 or 2, but is " + o);
            n = n || Math.random();
            var s = {
                logits: 1 === o ? Bo(a, [1, -1]) : a
            }
              , u = {
                numSamples: t,
                seed: n,
                normalized: r
            }
              , l = $r.runKernel(wt, s, u);
            return 1 === o ? Bo(l, [l.size]) : l
        }
    });
    var Eu = la({
        notEqual_: function(e, t) {
            var n, r = oa(e, "a", "notEqual", "string_or_numeric"), a = oa(t, "b", "notEqual", "string_or_numeric");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(xt, i)
        }
    });
    var Su = la({
        onesLike_: function(e) {
            var t = {
                x: oa(e, "x", "onesLike")
            };
            return $r.runKernel(_t, t)
        }
    });
    var Au = la({
        outerProduct_: function(e, t) {
            var n = oa(e, "v1", "outerProduct")
              , r = oa(t, "v2", "outerProduct");
            m(1 === n.rank && 1 === r.rank, (function() {
                return "Error in outerProduct: inputs must be rank 1, but got ranks " + n.rank + " and " + r.rank + "."
            }
            ));
            var a = Bo(n, [-1, 1])
              , i = Bo(r, [1, -1]);
            return mi(a, i)
        }
    });
    var _u = la({
        pad_: function(e, t, n) {
            void 0 === n && (n = 0);
            var r = oa(e, "x", "pad");
            if (0 === r.rank)
                throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
            var a = {
                paddings: t,
                constantValue: n
            }
              , i = {
                x: r
            };
            return $r.runKernel(Nt, i, a)
        }
    });
    var Iu = la({
        pad1d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            m(2 === t.length, (function() {
                return "Invalid number of paddings. Must be length of 2."
            }
            )),
            _u(e, [t], n)
        }
    });
    var Mu = la({
        pad2d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            m(2 === t.length && 2 === t[0].length && 2 === t[1].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            _u(e, t, n)
        }
    });
    var Nu = la({
        pad3d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            m(3 === t.length && 2 === t[0].length && 2 === t[1].length && 2 === t[2].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            _u(e, t, n)
        }
    });
    var Tu = la({
        pad4d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            m(4 === t.length && 2 === t[0].length && 2 === t[1].length && 2 === t[2].length && 2 === t[3].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            _u(e, t, n)
        }
    });
    var Du = la({
        spaceToBatchND_: function(e, t, n) {
            var r = oa(e, "x", "spaceToBatchND");
            m(r.rank >= 1 + t.length, (function() {
                return "input rank " + r.rank + " should be > than [blockShape] " + t.length
            }
            )),
            m(n.length === t.length, (function() {
                return "paddings.shape[0] " + n.length + " must be equal to [blockShape] " + t.length
            }
            )),
            m(r.shape.reduce((function(e, r, a) {
                return a > 0 && a <= t.length ? e && (r + n[a - 1][0] + n[a - 1][1]) % t[a - 1] == 0 : e
            }
            ), !0), (function() {
                return "input spatial dimensions " + r.shape.slice(1) + " with paddings " + n.toString() + " must be divisible by blockShapes " + t.toString()
            }
            ));
            var a = {
                x: r
            }
              , i = {
                blockShape: t,
                paddings: n
            };
            return $r.runKernel($t, a, i)
        }
    });
    var Ru = la({
        pool_: function(e, t, n, r, a, i, o) {
            null == a && (a = [1, 1]),
            null == i && (i = 1),
            0 === r && (r = "valid");
            var s = oa(e, "x", "maxPool")
              , u = s
              , c = !1;
            3 === s.rank && (c = !0,
            u = Bo(s, [1, s.shape[0], s.shape[1], s.shape[2]])),
            m(To(i, a), (function() {
                return "Error in pool: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + a + "'"
            }
            ));
            var h, f = ko(u.shape, t, i, a, r), d = [f.dilationHeight, f.dilationWidth];
            h = "same" === r ? function(e, t) {
                var n = e.map((function(e, n) {
                    return e + (e - 1) * (t[n] - 1)
                }
                )).map((function(e) {
                    return e - 1
                }
                ))
                  , r = n.map((function(e) {
                    return Math.floor(e / 2)
                }
                ))
                  , a = n.map((function(e, t) {
                    return e - r[t]
                }
                ));
                return n.map((function(e, t) {
                    return [r[t], a[t]]
                }
                ))
            }([f.filterHeight, f.filterWidth], d) : [[0, 0], [0, 0]];
            var p = 1 === d[0] && 1 === d[1]
              , v = l(function(e, t, n) {
                var r = n.map((function(e) {
                    return e[0]
                }
                ))
                  , a = n.map((function(e) {
                    return e[1]
                }
                ))
                  , i = e.concat(r, a)
                  , o = t.map((function(e, t) {
                    return (e - i[t] % e) % e
                }
                ))
                  , s = a.map((function(e, t) {
                    return e + o[t]
                }
                ))
                  , u = t.map((function(e, t) {
                    return [r[t], s[t]]
                }
                ))
                  , l = t.map((function(e, t) {
                    return [0, o[t]]
                }
                ));
                return [u, l]
            }([f.inHeight, f.inWidth], d, h), 2)
              , g = v[0]
              , y = v[1]
              , b = p ? r : "valid"
              , w = p ? u : Du(u, d, g)
              , k = ("avg" === n ? function() {
                return Fo(w, t, i, b, o)
            }
            : function() {
                return uu(w, t, i, b, o)
            }
            )()
              , x = p ? k : Ko(k, d, y);
            return c ? Bo(x, [x.shape[1], x.shape[2], x.shape[3]]) : x
        }
    });
    var Bu = la({
        pow_: function(e, t) {
            var n, r = oa(e, "base", "pow"), a = oa(t, "exp", "pow"), i = {
                a: r = (n = l(Wr(r, a), 2))[0],
                b: a = n[1]
            };
            return $r.runKernel("Pow", i)
        }
    });
    var Fu = la({
        prelu_: function(e, t) {
            var n = {
                x: oa(e, "x", "prelu"),
                alpha: oa(t, "alpha", "prelu")
            };
            return $r.runKernel(Tt, n)
        }
    });
    var Cu = la({
        prod_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = oa(e, "x", "prod");
            "bool" === r.dtype && (r = ti(r, "int32"));
            var a = {
                x: r
            }
              , i = {
                axis: t,
                keepDims: n
            };
            return $r.runKernel(Dt, a, i)
        }
    });
    var Pu = la({
        rand_: function(e, t, n) {
            var r = k(e)
              , a = null;
            if (null == n || "float32" === n)
                a = new Float32Array(r);
            else if ("int32" === n)
                a = new Int32Array(r);
            else {
                if ("bool" !== n)
                    throw new Error("Unknown data type " + n);
                a = new Uint8Array(r)
            }
            for (var i = 0; i < r; i++)
                a[i] = t();
            return $r.makeTensor(a, e, n)
        }
    })
      , Ou = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Lu(e) {
        var t = {
            exports: {}
        };
        return e(t, t.exports),
        t.exports
    }
    var zu = Lu((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t, n = this, r = (t = 4022871197,
                function(e) {
                    e = String(e);
                    for (var n = 0; n < e.length; n++) {
                        var r = .02519603282416938 * (t += e.charCodeAt(n));
                        r -= t = r >>> 0,
                        t = (r *= t) >>> 0,
                        t += 4294967296 * (r -= t)
                    }
                    return 2.3283064365386963e-10 * (t >>> 0)
                }
                );
                n.next = function() {
                    var e = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
                    return n.s0 = n.s1,
                    n.s1 = n.s2,
                    n.s2 = e - (n.c = 0 | e)
                }
                ,
                n.c = 1,
                n.s0 = r(" "),
                n.s1 = r(" "),
                n.s2 = r(" "),
                n.s0 -= r(e),
                n.s0 < 0 && (n.s0 += 1),
                n.s1 -= r(e),
                n.s1 < 0 && (n.s1 += 1),
                n.s2 -= r(e),
                n.s2 < 0 && (n.s2 += 1),
                r = null
            }
            function a(e, t) {
                return t.c = e.c,
                t.s0 = e.s0,
                t.s1 = e.s1,
                t.s2 = e.s2,
                t
            }
            function i(e, t) {
                var n = new r(e)
                  , i = t && t.state
                  , o = n.next;
                return o.int32 = function() {
                    return 4294967296 * n.next() | 0
                }
                ,
                o.double = function() {
                    return o() + 11102230246251565e-32 * (2097152 * o() | 0)
                }
                ,
                o.quick = o,
                i && ("object" == typeof i && a(i, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = i : n && n.amd ? n((function() {
                return i
            }
            )) : this.alea = i
        }(0, e, !1)
    }
    ))
      , qu = Lu((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t = this
                  , n = "";
                t.x = 0,
                t.y = 0,
                t.z = 0,
                t.w = 0,
                t.next = function() {
                    var e = t.x ^ t.x << 11;
                    return t.x = t.y,
                    t.y = t.z,
                    t.z = t.w,
                    t.w ^= t.w >>> 19 ^ e ^ e >>> 8
                }
                ,
                e === (0 | e) ? t.x = e : n += e;
                for (var r = 0; r < n.length + 64; r++)
                    t.x ^= 0 | n.charCodeAt(r),
                    t.next()
            }
            function a(e, t) {
                return t.x = e.x,
                t.y = e.y,
                t.z = e.z,
                t.w = e.w,
                t
            }
            function i(e, t) {
                var n = new r(e)
                  , i = t && t.state
                  , o = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return o.double = function() {
                    do {
                        var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === e);
                    return e
                }
                ,
                o.int32 = n.next,
                o.quick = o,
                i && ("object" == typeof i && a(i, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = i : n && n.amd ? n((function() {
                return i
            }
            )) : this.xor128 = i
        }(0, e, !1)
    }
    ))
      , Ku = Lu((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t = this
                  , n = "";
                t.next = function() {
                    var e = t.x ^ t.x >>> 2;
                    return t.x = t.y,
                    t.y = t.z,
                    t.z = t.w,
                    t.w = t.v,
                    (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ e ^ e << 1) | 0
                }
                ,
                t.x = 0,
                t.y = 0,
                t.z = 0,
                t.w = 0,
                t.v = 0,
                e === (0 | e) ? t.x = e : n += e;
                for (var r = 0; r < n.length + 64; r++)
                    t.x ^= 0 | n.charCodeAt(r),
                    r == n.length && (t.d = t.x << 10 ^ t.x >>> 4),
                    t.next()
            }
            function a(e, t) {
                return t.x = e.x,
                t.y = e.y,
                t.z = e.z,
                t.w = e.w,
                t.v = e.v,
                t.d = e.d,
                t
            }
            function i(e, t) {
                var n = new r(e)
                  , i = t && t.state
                  , o = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return o.double = function() {
                    do {
                        var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === e);
                    return e
                }
                ,
                o.int32 = n.next,
                o.quick = o,
                i && ("object" == typeof i && a(i, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = i : n && n.amd ? n((function() {
                return i
            }
            )) : this.xorwow = i
        }(0, e, !1)
    }
    ))
      , Wu = Lu((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t = this;
                t.next = function() {
                    var e, n, r = t.x, a = t.i;
                    return e = r[a],
                    n = (e ^= e >>> 7) ^ e << 24,
                    n ^= (e = r[a + 1 & 7]) ^ e >>> 10,
                    n ^= (e = r[a + 3 & 7]) ^ e >>> 3,
                    n ^= (e = r[a + 4 & 7]) ^ e << 7,
                    e = r[a + 7 & 7],
                    n ^= (e ^= e << 13) ^ e << 9,
                    r[a] = n,
                    t.i = a + 1 & 7,
                    n
                }
                ,
                function(e, t) {
                    var n, r = [];
                    if (t === (0 | t))
                        r[0] = t;
                    else
                        for (t = "" + t,
                        n = 0; n < t.length; ++n)
                            r[7 & n] = r[7 & n] << 15 ^ t.charCodeAt(n) + r[n + 1 & 7] << 13;
                    for (; r.length < 8; )
                        r.push(0);
                    for (n = 0; n < 8 && 0 === r[n]; ++n)
                        ;
                    for (8 == n && (r[7] = -1),
                    e.x = r,
                    e.i = 0,
                    n = 256; n > 0; --n)
                        e.next()
                }(t, e)
            }
            function a(e, t) {
                return t.x = e.x.slice(),
                t.i = e.i,
                t
            }
            function i(e, t) {
                null == e && (e = +new Date);
                var n = new r(e)
                  , i = t && t.state
                  , o = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return o.double = function() {
                    do {
                        var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === e);
                    return e
                }
                ,
                o.int32 = n.next,
                o.quick = o,
                i && (i.x && a(i, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = i : n && n.amd ? n((function() {
                return i
            }
            )) : this.xorshift7 = i
        }(0, e, !1)
    }
    ))
      , Gu = Lu((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t = this;
                t.next = function() {
                    var e, n, r = t.w, a = t.X, i = t.i;
                    return t.w = r = r + 1640531527 | 0,
                    n = a[i + 34 & 127],
                    e = a[i = i + 1 & 127],
                    n ^= n << 13,
                    e ^= e << 17,
                    n ^= n >>> 15,
                    e ^= e >>> 12,
                    n = a[i] = n ^ e,
                    t.i = i,
                    n + (r ^ r >>> 16) | 0
                }
                ,
                function(e, t) {
                    var n, r, a, i, o, s = [], u = 128;
                    for (t === (0 | t) ? (r = t,
                    t = null) : (t += "\0",
                    r = 0,
                    u = Math.max(u, t.length)),
                    a = 0,
                    i = -32; i < u; ++i)
                        t && (r ^= t.charCodeAt((i + 32) % t.length)),
                        0 === i && (o = r),
                        r ^= r << 10,
                        r ^= r >>> 15,
                        r ^= r << 4,
                        r ^= r >>> 13,
                        i >= 0 && (o = o + 1640531527 | 0,
                        a = 0 == (n = s[127 & i] ^= r + o) ? a + 1 : 0);
                    for (a >= 128 && (s[127 & (t && t.length || 0)] = -1),
                    a = 127,
                    i = 512; i > 0; --i)
                        r = s[a + 34 & 127],
                        n = s[a = a + 1 & 127],
                        r ^= r << 13,
                        n ^= n << 17,
                        r ^= r >>> 15,
                        n ^= n >>> 12,
                        s[a] = r ^ n;
                    e.w = o,
                    e.X = s,
                    e.i = a
                }(t, e)
            }
            function a(e, t) {
                return t.i = e.i,
                t.w = e.w,
                t.X = e.X.slice(),
                t
            }
            function i(e, t) {
                null == e && (e = +new Date);
                var n = new r(e)
                  , i = t && t.state
                  , o = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return o.double = function() {
                    do {
                        var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === e);
                    return e
                }
                ,
                o.int32 = n.next,
                o.quick = o,
                i && (i.X && a(i, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = i : n && n.amd ? n((function() {
                return i
            }
            )) : this.xor4096 = i
        }(0, e, !1)
    }
    ))
      , Uu = Lu((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t = this
                  , n = "";
                t.next = function() {
                    var e = t.b
                      , n = t.c
                      , r = t.d
                      , a = t.a;
                    return e = e << 25 ^ e >>> 7 ^ n,
                    n = n - r | 0,
                    r = r << 24 ^ r >>> 8 ^ a,
                    a = a - e | 0,
                    t.b = e = e << 20 ^ e >>> 12 ^ n,
                    t.c = n = n - r | 0,
                    t.d = r << 16 ^ n >>> 16 ^ a,
                    t.a = a - e | 0
                }
                ,
                t.a = 0,
                t.b = 0,
                t.c = -1640531527,
                t.d = 1367130551,
                e === Math.floor(e) ? (t.a = e / 4294967296 | 0,
                t.b = 0 | e) : n += e;
                for (var r = 0; r < n.length + 20; r++)
                    t.b ^= 0 | n.charCodeAt(r),
                    t.next()
            }
            function a(e, t) {
                return t.a = e.a,
                t.b = e.b,
                t.c = e.c,
                t.d = e.d,
                t
            }
            function i(e, t) {
                var n = new r(e)
                  , i = t && t.state
                  , o = function() {
                    return (n.next() >>> 0) / 4294967296
                };
                return o.double = function() {
                    do {
                        var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                    } while (0 === e);
                    return e
                }
                ,
                o.int32 = n.next,
                o.quick = o,
                i && ("object" == typeof i && a(i, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = i : n && n.amd ? n((function() {
                return i
            }
            )) : this.tychei = i
        }(0, e, !1)
    }
    ))
      , Vu = Lu((function(e) {
        !function(t, n, a) {
            var i, o = 256, s = a.pow(o, 6), u = a.pow(2, 52), l = 2 * u, c = 255;
            function h(e, r, c) {
                var h = []
                  , m = v(p((r = 1 == r ? {
                    entropy: !0
                } : r || {}).entropy ? [e, g(n)] : null == e ? function() {
                    try {
                        var e;
                        return i && (e = i.randomBytes) ? e = e(o) : (e = new Uint8Array(o),
                        (t.crypto || t.msCrypto).getRandomValues(e)),
                        g(e)
                    } catch (e) {
                        var r = t.navigator
                          , a = r && r.plugins;
                        return [+new Date, t, a, t.screen, g(n)]
                    }
                }() : e, 3), h)
                  , y = new f(h)
                  , b = function() {
                    for (var e = y.g(6), t = s, n = 0; e < u; )
                        e = (e + n) * o,
                        t *= o,
                        n = y.g(1);
                    for (; e >= l; )
                        e /= 2,
                        t /= 2,
                        n >>>= 1;
                    return (e + n) / t
                };
                return b.int32 = function() {
                    return 0 | y.g(4)
                }
                ,
                b.quick = function() {
                    return y.g(4) / 4294967296
                }
                ,
                b.double = b,
                v(g(y.S), n),
                (r.pass || c || function(e, t, n, r) {
                    return r && (r.S && d(r, y),
                    e.state = function() {
                        return d(y, {})
                    }
                    ),
                    n ? (a.random = e,
                    t) : e
                }
                )(b, m, "global"in r ? r.global : this == a, r.state)
            }
            function f(e) {
                var t, n = e.length, r = this, a = 0, i = r.i = r.j = 0, s = r.S = [];
                for (n || (e = [n++]); a < o; )
                    s[a] = a++;
                for (a = 0; a < o; a++)
                    s[a] = s[i = c & i + e[a % n] + (t = s[a])],
                    s[i] = t;
                (r.g = function(e) {
                    for (var t, n = 0, a = r.i, i = r.j, s = r.S; e--; )
                        t = s[a = c & a + 1],
                        n = n * o + s[c & (s[a] = s[i = c & i + t]) + (s[i] = t)];
                    return r.i = a,
                    r.j = i,
                    n
                }
                )(o)
            }
            function d(e, t) {
                return t.i = e.i,
                t.j = e.j,
                t.S = e.S.slice(),
                t
            }
            function p(e, t) {
                var n, r = [], a = typeof e;
                if (t && "object" == a)
                    for (n in e)
                        try {
                            r.push(p(e[n], t - 1))
                        } catch (e) {}
                return r.length ? r : "string" == a ? e : e + "\0"
            }
            function v(e, t) {
                for (var n, r = e + "", a = 0; a < r.length; )
                    t[c & a] = c & (n ^= 19 * t[c & a]) + r.charCodeAt(a++);
                return g(t)
            }
            function g(e) {
                return String.fromCharCode.apply(0, e)
            }
            if (v(a.random(), n),
            e.exports) {
                e.exports = h;
                try {
                    i = r.default
                } catch (e) {}
            } else
                a.seedrandom = h
        }("undefined" != typeof self ? self : Ou, [], Math)
    }
    ));
    Vu.alea = zu,
    Vu.xor128 = qu,
    Vu.xorwow = Ku,
    Vu.xorshift7 = Wu,
    Vu.xor4096 = Gu,
    Vu.tychei = Uu;
    var Hu = Vu
      , ju = function() {
        function e(e, t, n, r, a) {
            this.mean = e,
            this.stdDev = t,
            this.dtype = n,
            this.nextVal = NaN,
            this.truncated = r,
            this.truncated && (this.upper = this.mean + 2 * this.stdDev,
            this.lower = this.mean - 2 * this.stdDev);
            var i = a || Math.random();
            this.random = Hu.alea(i.toString())
        }
        return e.prototype.nextValue = function() {
            if (!isNaN(this.nextVal)) {
                var e = this.nextVal;
                return this.nextVal = NaN,
                e
            }
            for (var t, n, r = !1; !r; ) {
                var a = void 0
                  , i = void 0
                  , o = void 0;
                do {
                    o = (a = 2 * this.random() - 1) * a + (i = 2 * this.random() - 1) * i
                } while (o >= 1 || 0 === o);
                var s = Math.sqrt(-2 * Math.log(o) / o);
                t = this.mean + this.stdDev * a * s,
                n = this.mean + this.stdDev * i * s,
                this.truncated && !this.isValidTruncated(t) || (r = !0)
            }
            return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)),
            this.convertValue(t)
        }
        ,
        e.prototype.convertValue = function(e) {
            return null == this.dtype || "float32" === this.dtype ? e : Math.round(e)
        }
        ,
        e.prototype.isValidTruncated = function(e) {
            return e <= this.upper && e >= this.lower
        }
        ,
        e
    }()
      , Ju = function() {
        function e(e, t, n, r) {
            this.alpha = e,
            this.beta = 1 / t,
            this.dtype = n;
            var a = r || Math.random();
            this.randu = Hu.alea(a.toString()),
            this.randn = new ju(0,1,n,!1,this.randu()),
            this.d = e < 1 ? e + 2 / 3 : e - 1 / 3,
            this.c = 1 / Math.sqrt(9 * this.d)
        }
        return e.prototype.nextValue = function() {
            for (var e, t, n, r, a, i; ; ) {
                do {
                    r = this.randn.nextValue(),
                    i = 1 + this.c * r
                } while (i <= 0);
                if (i *= i * i,
                t = 1 - .331 * (e = r * r) * e,
                n = .5 * e + this.d * (1 - i + Math.log(i)),
                (a = this.randu()) < t || Math.log(a) < n)
                    break
            }
            return i = 1 / this.beta * this.d * i,
            this.alpha < 1 && (i *= Math.pow(this.randu(), 1 / this.alpha)),
            this.convertValue(i)
        }
        ,
        e.prototype.convertValue = function(e) {
            return "float32" === this.dtype ? e : Math.round(e)
        }
        ,
        e
    }()
      , Zu = function() {
        function e(e, t, n, r) {
            var a = this;
            if (void 0 === e && (e = 0),
            void 0 === t && (t = 1),
            this.canReturnFloat = function() {
                return null == a.dtype || "float32" === a.dtype
            }
            ,
            this.min = e,
            this.range = t - e,
            this.dtype = n,
            null == r && (r = Math.random()),
            "number" == typeof r && (r = r.toString()),
            !this.canReturnFloat() && this.range <= 1)
                throw new Error("The difference between " + e + " - " + t + " <= 1 and dtype is not float");
            this.random = Hu.alea(r)
        }
        return e.prototype.convertValue = function(e) {
            return this.canReturnFloat() ? e : Math.round(e)
        }
        ,
        e.prototype.nextValue = function() {
            return this.convertValue(this.min + this.range * this.random())
        }
        ,
        e
    }();
    var Yu = la({
        randomGamma_: function(e, t, n, r, a) {
            if (void 0 === n && (n = 1),
            void 0 === r && (r = "float32"),
            null == n && (n = 1),
            null == r && (r = "float32"),
            "float32" !== r && "int32" !== r)
                throw new Error("Unsupported data type " + r);
            for (var i = new Ju(t,n,r,a), o = ei(e, r), s = 0; s < o.values.length; s++)
                o.values[s] = i.nextValue();
            return o.toTensor()
        }
    });
    var Xu = la({
        randomNormal_: function(e, t, n, r, a) {
            if (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            null != r && "bool" === r)
                throw new Error("Unsupported data type " + r);
            for (var i = new ju(t,n,r,!1,a), o = ei(e, r), s = 0; s < o.values.length; s++)
                o.values[s] = i.nextValue();
            return o.toTensor()
        }
    });
    var $u = la({
        randomUniform_: function(e, t, n, r, a) {
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = "float32");
            for (var i = ei(e, r), o = new Zu(t,n,null,a), s = 0; s < i.values.length; s++)
                i.values[s] = o.nextValue();
            return i.toTensor()
        }
    });
    function Qu(e, t, n, r) {
        if (void 0 === n && (n = 1),
        void 0 === r && (r = "float32"),
        0 === n)
            throw new Error("Cannot have a step of zero");
        var a = {
            start: e,
            stop: t,
            step: n,
            dtype: r
        };
        return $r.runKernel(Rt, {}, a)
    }
    var el = la({
        real_: function(e) {
            var t = {
                input: oa(e, "input", "real")
            };
            return $r.runKernel(Bt, t)
        }
    });
    var tl = la({
        reciprocal_: function(e) {
            var t = {
                x: oa(e, "x", "reciprocal")
            };
            return $r.runKernel(Ft, t)
        }
    });
    var nl = la({
        relu_: function(e) {
            var t = {
                x: oa(e, "x", "relu")
            };
            return $r.runKernel(Ct, t)
        }
    });
    var rl = la({
        relu6_: function(e) {
            var t = {
                x: oa(e, "x", "relu6")
            };
            return $r.runKernel(zt, t)
        }
    });
    var al = la({
        reverse_: function(e, t) {
            var n = {
                x: oa(e, "x", "reverse")
            }
              , r = {
                dims: t
            };
            return $r.runKernel(qt, n, r)
        }
    });
    var il = la({
        reverse1d_: function(e) {
            var t = oa(e, "x", "reverse");
            return m(1 === t.rank, (function() {
                return "Error in reverse1D: x must be rank 1 but got rank " + t.rank + "."
            }
            )),
            al(t, 0)
        }
    });
    var ol = la({
        reverse2d_: function(e, t) {
            var n = oa(e, "x", "reverse");
            return m(2 === n.rank, (function() {
                return "Error in reverse2D: x must be rank 2 but got rank " + n.rank + "."
            }
            )),
            al(n, t)
        }
    });
    var sl = la({
        reverse3d_: function(e, t) {
            var n = oa(e, "x", "reverse");
            return m(3 === n.rank, (function() {
                return "Error in reverse3D: x must be rank 3 but got rank " + n.rank + "."
            }
            )),
            al(n, t)
        }
    });
    var ul = la({
        reverse4d_: function(e, t) {
            var n = oa(e, "x", "reverse");
            return m(4 === n.rank, (function() {
                return "Error in reverse4D: x must be rank 4 but got rank " + n.rank + "."
            }
            )),
            al(n, t)
        }
    });
    var ll = la({
        round_: function(e) {
            var t = {
                x: oa(e, "x", "round")
            };
            return $r.runKernel(Kt, t)
        }
    });
    var cl = la({
        rsqrt_: function(e) {
            var t = {
                x: oa(e, "x", "rsqrt", "float32")
            };
            return $r.runKernel(Wt, t)
        }
    });
    function hl(e, t) {
        if ((D(e) && "string" !== t || Array.isArray(e)) && "complex64" !== t)
            throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
        if ("string" === t && D(e) && !(e instanceof Uint8Array))
            throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
        return ha(e, [], [], t)
    }
    var fl = la({
        selu_: function(e) {
            var t = {
                x: oa(e, "x", "selu")
            };
            return $r.runKernel(Vt, t)
        }
    });
    var dl = la({
        separableConv2d_: function(e, t, n, r, a, i, o) {
            void 0 === i && (i = [1, 1]),
            void 0 === o && (o = "NHWC");
            var s = oa(e, "x", "separableConv2d")
              , u = oa(t, "depthwiseFilter", "separableConv2d")
              , l = oa(n, "pointwiseFilter", "separableConv2d")
              , c = s
              , h = !1;
            if (3 === s.rank && (h = !0,
            c = Bo(s, [1, s.shape[0], s.shape[1], s.shape[2]])),
            "NCHW" === o)
                throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
            m(4 === c.rank, (function() {
                return "Error in separableConv2d: input must be rank 4, but got rank " + c.rank + "."
            }
            )),
            m(4 === u.rank, (function() {
                return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            m(4 === l.rank, (function() {
                return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            m(1 === l.shape[0], (function() {
                return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + l.shape[0] + "."
            }
            )),
            m(1 === l.shape[1], (function() {
                return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + l.shape[1] + "."
            }
            ));
            var f = u.shape[2]
              , d = u.shape[3];
            m(l.shape[2] === f * d, (function() {
                return "Error in separableConv2d: the third dimension of pointwise filter must be " + f * d + ", but got " + l.shape[2] + "."
            }
            ));
            var p = ds(c, u, r, a, o, i)
              , v = ts(p, l, 1, "valid", o);
            return h ? Bo(v, [v.shape[1], v.shape[2], v.shape[3]]) : v
        }
    });
    var pl = function(e, t) {
        return o(this, void 0, void 0, (function() {
            var n, r, a, i, o, u, l, c, h, f;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return n = oa(e, "x", "setdiff1d"),
                    r = oa(t, "y", "setdiff1d"),
                    m(n.dtype === r.dtype, (function() {
                        return "x and y should have the same dtype, but got x (" + n.dtype + ") and y (" + r.dtype + ")."
                    }
                    )),
                    m(1 === n.rank, (function() {
                        return "x should be 1D tensor, but got x (" + n.shape + ")."
                    }
                    )),
                    m(1 === r.rank, (function() {
                        return "y should be 1D tensor, but got y (" + r.shape + ")."
                    }
                    )),
                    [4, n.data()];
                case 1:
                    return a = s.sent(),
                    [4, r.data()];
                case 2:
                    for (i = s.sent(),
                    o = new Set(i),
                    u = 0,
                    h = 0; h < a.length; h++)
                        o.has(a[h]) || u++;
                    for (l = new Tr([u],n.dtype),
                    c = new Tr([u],"int32"),
                    h = 0,
                    f = 0; h < a.length; h++)
                        o.has(a[h]) || (l.values[f] = a[h],
                        c.values[f] = h,
                        f++);
                    return [2, [l.toTensor(), c.toTensor()]]
                }
            }
            ))
        }
        ))
    };
    var vl = la({
        sign_: function(e) {
            var t = {
                x: oa(e, "x", "sign")
            };
            return $r.runKernel(Jt, t)
        }
    });
    var gl = la({
        sin_: function(e) {
            var t = {
                x: oa(e, "x", "sin", "float32")
            };
            return $r.runKernel("Sin", t)
        }
    });
    var ml = la({
        sinh_: function(e) {
            var t = {
                x: oa(e, "x", "sinh")
            };
            return $r.runKernel(jt, t)
        }
    });
    var yl = la({
        slice1d_: function(e, t, n) {
            var r = oa(e, "x", "slice1d");
            return m(1 === r.rank, (function() {
                return "slice1d expects a rank-1 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Lo(r, [t], [n])
        }
    });
    var bl = la({
        slice2d_: function(e, t, n) {
            var r = oa(e, "x", "slice2d");
            return m(2 === r.rank, (function() {
                return "slice2d expects a rank-2 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Lo(r, t, n)
        }
    });
    var wl = la({
        slice3d_: function(e, t, n) {
            var r = oa(e, "x", "slice3d");
            return m(3 === r.rank, (function() {
                return "slice3d expects a rank-3 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Lo(r, t, n)
        }
    });
    var kl = la({
        slice4d_: function(e, t, n) {
            var r = oa(e, "x", "slice4d");
            return m(4 === r.rank, (function() {
                return "slice4d expects a rank-4 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Lo(r, t, n)
        }
    });
    var xl = la({
        softmax_: function(e, t) {
            void 0 === t && (t = -1);
            var n = oa(e, "logits", "softmax", "float32");
            if (-1 === t && (t = n.rank - 1),
            t !== n.rank - 1)
                throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + n.rank + " and dim was " + t);
            var r = {
                logits: n
            }
              , a = {
                dim: t
            };
            return $r.runKernel(en, r, a)
        }
    });
    var El = la({
        fft_: function(e) {
            m("complex64" === e.dtype, (function() {
                return "The dtype for tf.spectral.fft() must be complex64 but got " + e.dtype + "."
            }
            ));
            var t = {
                input: e
            };
            return $r.runKernel("FFT", t)
        }
    });
    var Sl = la({
        ifft_: function(e) {
            m("complex64" === e.dtype, (function() {
                return "The dtype for tf.spectral.ifft() must be complex64 but got " + e.dtype + "."
            }
            ));
            var t = {
                input: e
            };
            return $r.runKernel(et, t)
        }
    });
    var Al = la({
        irfft_: function(e) {
            var t, n = e.shape[e.shape.length - 1], r = e.size / n;
            if (n <= 2) {
                var a = Bo(e, [r, n]);
                t = Sl(a)
            } else {
                var i = [r, 2 * (n - 1)]
                  , o = Bo(el(e), [r, n])
                  , s = Bo(Fs(e), [r, n])
                  , u = al(Lo(o, [0, 1], [r, n - 2]), 1)
                  , l = oo(al(Lo(s, [0, 1], [r, n - 2]), 1), hl(-1))
                  , c = Po([o, u], 1)
                  , h = Po([s, l], 1);
                a = Bo(ca(c, h), [i[0], i[1]]);
                t = Sl(a)
            }
            if (t = el(t),
            3 === e.rank && 0 !== e.shape[0]) {
                var f = t
                  , d = e.shape[0];
                t = Bo(t, [d, t.shape[0] / d, t.shape[1]]),
                f.dispose()
            }
            return t
        }
    });
    var _l = la({
        split_: function(e, t, n) {
            void 0 === n && (n = 0);
            var r = {
                x: oa(e, "x", "split")
            }
              , a = {
                numOrSizeSplits: t,
                axis: n
            };
            return $r.runKernel(Qt, r, a)
        }
    });
    var Il = la({
        rfft_: function(e, t) {
            m("float32" === e.dtype, (function() {
                return "The dtype for rfft() must be real value but got " + e.dtype
            }
            ));
            var n, r = e.shape[e.shape.length - 1], a = e.size / r;
            if (null != t && t < r) {
                var i = e.shape.map((function(e) {
                    return 0
                }
                ))
                  , o = e.shape.map((function(e) {
                    return e
                }
                ));
                o[e.shape.length - 1] = t,
                n = Lo(e, i, o),
                r = t
            } else if (null != t && t > r) {
                var s = e.shape.map((function(e) {
                    return e
                }
                ));
                s[e.shape.length - 1] = t - r,
                n = Po([e, du(s)], e.shape.length - 1),
                r = t
            } else
                n = e;
            var u = ys(n)
              , l = Bo(ca(n, u), [a, r])
              , c = El(l)
              , h = Math.floor(r / 2) + 1
              , f = el(c)
              , d = Fs(c)
              , p = _l(f, [h, r - h], f.shape.length - 1)
              , v = _l(d, [h, r - h], d.shape.length - 1)
              , g = n.shape.slice();
            return g[n.shape.length - 1] = h,
            Bo(ca(p[0], v[0]), g)
        }
    });
    var Ml = la({
        sqrt_: function(e) {
            var t = {
                x: oa(e, "x", "sqrt", "float32")
            };
            return $r.runKernel(Xt, t)
        }
    });
    var Nl = la({
        squaredDifference_: function(e, t) {
            var n, r = oa(e, "a", "squaredDifference"), a = oa(t, "b", "squaredDifference");
            r = (n = l(Wr(r, a), 2))[0],
            a = n[1],
            Ei(r.shape, a.shape);
            var i = {
                a: r,
                b: a
            };
            return $r.runKernel(sn, i, {})
        }
    });
    var Tl = la({
        squeeze_: function(e, t) {
            var n = oa(e, "x", "squeeze");
            return Bo(n, _(n.shape, t).newShape)
        }
    });
    var Dl = la({
        stack_: function(e, t) {
            void 0 === t && (t = 0);
            var n = sa(e, "tensors", "stack", "string_or_numeric");
            m(n.length >= 1, (function() {
                return "Pass at least one tensor to tf.stack"
            }
            )),
            n.length > 0 && m(t <= n[0].rank, (function() {
                return "Axis must be <= rank of the tensor"
            }
            ));
            var r = n
              , a = {
                axis: t
            };
            return $r.runKernel(Mt, r, a)
        }
    });
    var Rl = la({
        step_: function(e, t) {
            void 0 === t && (t = 0);
            var n = {
                x: oa(e, "x", "step")
            }
              , r = {
                alpha: t
            };
            return $r.runKernel(kn, n, r)
        }
    });
    var Bl = la({
        stridedSlice_: function(e, t, n, r, a, i, o, s, u) {
            void 0 === a && (a = 0),
            void 0 === i && (i = 0),
            void 0 === o && (o = 0),
            void 0 === s && (s = 0),
            void 0 === u && (u = 0);
            var l = {
                x: oa(e, "x", "stridedSlice", "string_or_numeric")
            }
              , c = {
                begin: t,
                end: n,
                strides: r,
                beginMask: a,
                endMask: i,
                ellipsisMask: o,
                newAxisMask: s,
                shrinkAxisMask: u
            };
            return $r.runKernel(un, l, c)
        }
    });
    var Fl = la({
        tan_: function(e) {
            var t = {
                x: oa(e, "x", "tan", "float32")
            };
            return $r.runKernel("Tan", t)
        }
    });
    function Cl(e, t) {
        b(e);
        var n = ra(e, t);
        if (1 !== n.length)
            throw new Error("tensor1d() requires values to be a flat/TypedArray");
        return ha(e, null, n, t)
    }
    function Pl(e, t, n) {
        if (b(e),
        null != t && 2 !== t.length)
            throw new Error("tensor2d() requires shape to have two numbers");
        var r = ra(e, n);
        if (2 !== r.length && 1 !== r.length)
            throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
        if (1 === r.length && null == t)
            throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
        return ha(e, t, r, n)
    }
    var Ol = la({
        topk_: function(e, t, n) {
            void 0 === t && (t = 1),
            void 0 === n && (n = !0);
            var r = oa(e, "x", "topk");
            if (0 === r.rank)
                throw new Error("topk() expects the input to be of rank 1 or higher");
            var a = r.shape[r.shape.length - 1];
            if (t < 0)
                throw new Error("'k' passed to topk() must be >= 0 but got " + t);
            if (t > a)
                throw new Error("'k' passed to topk() must be <= the last dimension (" + a + ") but got " + t);
            var i = {
                x: r
            }
              , o = {
                k: t,
                sorted: n
            }
              , s = l($r.runKernel(pn, i, o), 2);
            return {
                values: s[0],
                indices: s[1]
            }
        }
    });
    var Ll = la({
        truncatedNormal_: function(e, t, n, r, a) {
            if (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            null != r && "bool" === r)
                throw new Error("Unsupported data type $ { dtype }");
            for (var i = new ju(t,n,r,!0,a), o = ei(e, r), s = 0; s < o.values.length; s++)
                o.values[s] = i.nextValue();
            return o.toTensor()
        }
    });
    var zl = la({
        unique_: function(e, t) {
            void 0 === t && (t = 0);
            var n = oa(e, "x", "unique", "string_or_numeric");
            m(n.rank > 0, (function() {
                return "The input tensor must be at least 1D"
            }
            ));
            var r = {
                x: n
            }
              , a = {
                axis: t
            }
              , i = l($r.runKernel(mn, r, a), 2);
            return {
                values: i[0],
                indices: i[1]
            }
        }
    });
    var ql = la({
        unsortedSegmentSum_: function(e, t, n) {
            var r = oa(e, "x", "unsortedSegmentSum")
              , a = oa(t, "segmentIds", "unsortedSegmentSum", "int32");
            m(E(n), (function() {
                return "numSegments must be of dtype int"
            }
            ));
            var i = {
                x: r,
                segmentIds: a
            }
              , o = {
                numSegments: n
            };
            return $r.runKernel(bn, i, o)
        }
    });
    var Kl = la({
        unstack_: function(e, t) {
            void 0 === t && (t = 0);
            var n = oa(e, "x", "unstack", "string_or_numeric");
            m(t >= -n.shape.length && t < n.shape.length, (function() {
                return "Axis = " + t + " is not in [-" + n.shape.length + ", " + n.shape.length + ")"
            }
            ));
            var r = {
                value: n
            }
              , a = {
                axis: t
            };
            return $r.runKernel(yn, r, a)
        }
    });
    function Wl(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
            t[r] && n.push(r);
        var a = ei(e, "int32")
          , i = ei([n.length, e.length], "int32");
        for (r = 0; r < n.length; r++) {
            var o = a.indexToLoc(n[r])
              , s = r * e.length;
            i.values.set(o, s)
        }
        return i.toTensor()
    }
    var Gl = function(e) {
        return o(this, void 0, void 0, (function() {
            var t, n, r;
            return s(this, (function(a) {
                switch (a.label) {
                case 0:
                    return [4, (t = oa(e, "condition", "whereAsync", "bool")).data()];
                case 1:
                    return n = a.sent(),
                    r = Wl(t.shape, n),
                    e !== t && t.dispose(),
                    [2, r]
                }
            }
            ))
        }
        ))
    };
    var Ul = function(e, t, n) {
        return o(this, void 0, void 0, (function() {
            var r, a, i, o, u, l, c, h, f, d, p, v, g;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    for (r = oa(e, "tensor", "boolMask"),
                    a = oa(t, "mask", "boolMask", "bool"),
                    i = null == n ? 0 : n,
                    o = a.rank,
                    u = r.shape,
                    m(o > 0, (function() {
                        return "mask cannot be scalar"
                    }
                    )),
                    y(u.slice(i, i + o), a.shape, "mask's shape must match the first K dimensions of tensor's shape,"),
                    l = 1,
                    c = i; c < i + o; c++)
                        l *= u[c];
                    return h = u.slice(0, i).concat([l], u.slice(i + o)),
                    f = Bo(r, h),
                    d = Bo(a, [-1]),
                    [4, Gl(d)];
                case 1:
                    return p = s.sent(),
                    v = Tl(p, [1]),
                    g = Ds(f, v, i),
                    e !== r && r.dispose(),
                    t !== a && a.dispose(),
                    v.dispose(),
                    f.dispose(),
                    d.dispose(),
                    p.dispose(),
                    [2, g]
                }
            }
            ))
        }
        ))
    };
    function Vl(e, t, n) {
        if (void 0 === n && (n = null),
        0 === e.rank)
            return so(e);
        if (1 !== e.rank && null === n)
            return Vl(Bo(e, [-1]), t, n);
        if (1 === e.rank || "number" == typeof n || Array.isArray(n) && 1 === n.length) {
            if (1 === t)
                return $s(so(e), n);
            if (t === 1 / 0)
                return Ys(so(e), n);
            if (t === -1 / 0)
                return vu(so(e), n);
            if ("euclidean" === t || 2 === t)
                return Ml($s(Bu(so(e), hl(2, "int32")), n));
            throw new Error("Error in norm: invalid ord value: " + t)
        }
        if (Array.isArray(n) && 2 === n.length) {
            if (1 === t)
                return Ys($s(so(e), n[0]), n[1] - 1);
            if (t === 1 / 0)
                return Ys($s(so(e), n[1]), n[0]);
            if (t === -1 / 0)
                return vu($s(so(e), n[1]), n[0]);
            if ("fro" === t || "euclidean" === t)
                return Ml($s(bu(e), n));
            throw new Error("Error in norm: invalid ord value: " + t)
        }
        throw new Error("Error in norm: invalid axis: " + n)
    }
    var Hl = la({
        norm_: function(e, t, n, r) {
            void 0 === t && (t = "euclidean"),
            void 0 === n && (n = null),
            void 0 === r && (r = !1);
            var a = Vl(e = oa(e, "x", "norm"), t, n)
              , i = a.shape;
            if (r) {
                var o = A(n, e.shape);
                i = nu(a.shape, o)
            }
            return Bo(a, i)
        }
    });
    var jl = la({
        movingAverage_: function(e, t, n, r, a) {
            void 0 === a && (a = !0);
            var i = oa(e, "v", "movingAverage")
              , o = oa(t, "x", "movingAverage")
              , s = oa(n, "decay", "movingAverage");
            Gr(i, o),
            m(x(i.shape, o.shape), (function() {
                return "Shape mismatch in v and x"
            }
            ));
            var u = hl(1)
              , l = Xs(u, s)
              , c = oo(Xs(o, i), l);
            if (a) {
                m(null != r, (function() {
                    return "When using zeroDebias: true, step is required."
                }
                ));
                var h = oa(r, "step", "movingAverage");
                c = io(c, Xs(u, Bu(s, h)))
            }
            return ro(i, c)
        }
    });
    var Jl = la({
        scatterND_: function(e, t, n) {
            var r = oa(e, "indices", "scatterND", "int32")
              , a = oa(t, "updates", "scatterND");
            Bi(a, r, n);
            var i = {
                indices: r,
                updates: a
            }
              , o = {
                shape: n
            };
            return $r.runKernel(Gt, i, o)
        }
    });
    var Zl = la({
        sparseToDense_: function(e, t, n, r) {
            void 0 === r && (r = 0);
            var a = oa(e, "sparseIndices", "sparseToDense", "int32")
              , i = oa(t, "sparseValues", "sparseToDense")
              , o = oa(r, "defaultValue", "sparseToDense", i.dtype);
            !function(e, t, n, r) {
                if ("int32" !== e.dtype)
                    throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
                if (e.rank > 2)
                    throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + e.shape + ".");
                var a = e.rank > 0 ? e.shape[0] : 1
                  , i = e.rank > 1 ? e.shape[1] : 1;
                if (n.length !== i)
                    throw new Error("outputShape has incorrect number of elements:, " + n.length + ", should be: " + i + ".");
                var o = t.size;
                if (0 !== t.rank && (1 !== t.rank || o !== a))
                    throw new Error("sparseValues has incorrect shape " + t.shape + ", should be [] or [" + a + "]");
                if (t.dtype !== r.dtype)
                    throw new Error("sparseValues.dtype must match defaultValues.dtype")
            }(a, i, n, o);
            var s = {
                sparseIndices: a,
                sparseValues: i,
                defaultValue: o
            }
              , u = {
                outputShape: n
            };
            return $r.runKernel(on, s, u)
        }
    });
    var Yl = la({
        gatherND_: function(e, t) {
            var n = oa(t, "indices", "gatherND", "int32")
              , r = {
                params: oa(e, "x", "gatherND", "string_or_numeric"),
                indices: n
            };
            return $r.runKernel(Ye, r)
        }
    });
    var Xl = la({
        dropout_: function(e, t, n, r) {
            var a = oa(e, "x", "dropout");
            if (m("float32" === a.dtype, (function() {
                return "x has to be a floating point tensor since it's going to be scaled, but got a " + a.dtype + " tensor instead."
            }
            )),
            m(t >= 0 && t < 1, (function() {
                return "rate must be a float in the range [0, 1), but got " + t + "."
            }
            )),
            0 === t)
                return e instanceof Br ? a.clone() : a;
            var i = function(e, t) {
                if (null == t)
                    return e.shape.slice();
                if (x(e.shape, t))
                    return t;
                if (e.shape.length === t.length) {
                    for (var n = [], r = 0; r < e.shape.length; r++)
                        null == t[r] && null != e.shape[r] ? n.push(e.shape[r]) : n.push(t[r]);
                    return n
                }
                return t
            }(a, n)
              , o = 1 - t
              , s = io(Ts(ro($u(i, 0, 1, "float32", r), o)), o);
            return oo(a, s)
        }
    });
    function $l(e) {
        return Math.floor(Math.pow(2, Math.ceil(Math.log(e) / Math.log(2))))
    }
    function Ql(e, t, n) {
        for (var r = 1 - e % 2, a = new Float32Array(e), i = 0; i < e; ++i) {
            var o = 2 * Math.PI * i / (e + r - 1);
            a[i] = t - n * Math.cos(o)
        }
        return Cl(a, "float32")
    }
    var ec = function(e, t, n) {
        return void 0 === n && (n = 1),
        o(this, void 0, void 0, (function() {
            var r, a, i, o, u, c, h, f, d, p, v, g, b, w;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return r = oa(e, "predictions", "inTopK"),
                    a = oa(t, "targets", "inTopK"),
                    m(r.rank > 1, (function() {
                        return "inTopK() expects the predictions to be of rank 2 or higher, but got " + r.rank
                    }
                    )),
                    m(r.rank - 1 === a.rank, (function() {
                        return "predictions rank should be 1 larger than targets rank, but got predictions rank " + r.rank + " and targets rank " + a.rank
                    }
                    )),
                    y(r.shape.slice(0, r.shape.length - 1), a.shape, "predictions's shape should be align with the targets' shape, except the last dimension."),
                    i = r.shape[r.shape.length - 1],
                    m(n > 0 && n <= i, (function() {
                        return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + i + "), but got " + n
                    }
                    )),
                    [4, r.data()];
                case 1:
                    return o = s.sent(),
                    [4, a.data()];
                case 2:
                    for (u = s.sent(),
                    c = l([o.length / i, i], 2),
                    h = c[0],
                    f = c[1],
                    d = I("bool", h),
                    p = 0; p < h; p++) {
                        for (v = p * f,
                        g = o.subarray(v, v + f),
                        b = [],
                        w = 0; w < g.length; w++)
                            b.push({
                                value: g[w],
                                index: w
                            });
                        for (b.sort((function(e, t) {
                            return t.value - e.value
                        }
                        )),
                        d[p] = 0,
                        w = 0; w < n; w++)
                            if (b[w].index === u[p]) {
                                d[p] = 1;
                                break
                            }
                    }
                    return e !== r && r.dispose(),
                    t !== a && a.dispose(),
                    [2, fa(d, a.shape, "bool")]
                }
            }
            ))
        }
        ))
    };
    var tc = la({
        conv2DBackpropFilter_: function(e, t, n, r, a, i, o) {
            void 0 === i && (i = "NHWC");
            var s = e;
            3 === e.rank && (s = Bo(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            var u = t;
            3 === u.rank && (u = Bo(t, [1, t.shape[0], t.shape[1], t.shape[2]])),
            m(4 === s.rank, (function() {
                return "Error in conv2dDerFilter: input must be rank 4, but got shape " + s.shape + "."
            }
            )),
            m(4 === u.rank, (function() {
                return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u.shape + "."
            }
            )),
            m(4 === n.length, (function() {
                return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."
            }
            ));
            var l = "NHWC" === i ? s.shape[3] : s.shape[1]
              , c = "NHWC" === i ? u.shape[3] : u.shape[1];
            m(l === n[2], (function() {
                return "Error in conv2dDerFilter: depth of input " + l + ") must match input depth in filter (" + n[2] + "."
            }
            )),
            m(c === n[3], (function() {
                return "Error in conv2dDerFilter: depth of dy (" + c + ") must match output depth for filter (" + n[3] + ")."
            }
            )),
            Ro("conv2dDerFilter", a, o);
            var h = {
                x: s,
                dy: u
            }
              , f = {
                strides: r,
                pad: a,
                dataFormat: i,
                dimRoundingMode: o,
                filterShape: n
            };
            return $r.runKernel(Ae, h, f)
        }
    });
    function nc(e, t, n) {
        if (null == n || "linear" === n)
            return e;
        if ("relu" === n)
            return oo(e, Rl(t));
        throw new Error("Cannot compute gradient for fused activation " + n + ".")
    }
    function rc(e, t) {
        var n = t
          , r = xi(e.shape, t.shape);
        return r.length > 0 && (n = $s(n, r)),
        Bo(n, e.shape)
    }
    function ac(e, t, n, r) {
        if ("linear" === t)
            return e;
        if ("relu" === t)
            return nl(e);
        if ("elu" === t)
            return xs(e);
        if ("relu6" === t)
            return rl(e);
        if ("prelu" === t)
            return Fu(e, n);
        if ("leakyrelu" === t)
            return Ls(e, r);
        if ("sigmoid" === t)
            return Oo(e);
        throw new Error("Unknown fused activation " + t + ".")
    }
    var ic = function(e, t) {
        return !(e > 0) || "linear" === t
    };
    var oc = la({
        fusedConv2d_: function(e) {
            var t = e.x
              , n = e.filter
              , r = e.strides
              , a = e.pad
              , i = e.dataFormat
              , o = void 0 === i ? "NHWC" : i
              , s = e.dilations
              , u = void 0 === s ? [1, 1] : s
              , c = e.dimRoundingMode
              , h = e.bias
              , f = e.activation
              , d = void 0 === f ? "linear" : f
              , p = e.preluActivationWeights
              , v = e.leakyreluAlpha;
            if (d = d || "linear",
            !1 === ic($r.state.gradientDepth, d)) {
                var g = ts(t, n, r, a, o, u, c);
                return null != h && (g = ro(g, h)),
                ac(g, d, p, v)
            }
            var y = oa(t, "x", "conv2d", "float32")
              , b = oa(n, "filter", "conv2d", "float32")
              , w = y
              , k = !1;
            3 === y.rank && (k = !0,
            w = Bo(y, [1, y.shape[0], y.shape[1], y.shape[2]])),
            m(4 === w.rank, (function() {
                return "Error in fused conv2d: input must be rank 4, but got rank " + w.rank + "."
            }
            )),
            m(4 === b.rank, (function() {
                return "Error in fused conv2d: filter must be rank 4, but got rank " + b.rank + "."
            }
            )),
            Ro("fused conv2d", a, c),
            m(w.shape[3] === b.shape[2], (function() {
                return "Error in conv2d: depth of input (" + w.shape[3] + ") must match input depth for filter " + b.shape[2] + "."
            }
            )),
            m(To(r, u), (function() {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + u + "'"
            }
            )),
            m("NHWC" === o, (function() {
                return "Error in conv2d: got dataFormat of " + o + " but only NHWC is currently supported."
            }
            ));
            var x, E, S = xo(w.shape, b.shape, r, u, a, c);
            null != h && (x = l(Wr(x = oa(h, "bias", "fused conv2d"), y), 1)[0],
            Ei(S.outShape, x.shape)),
            null != p && (E = oa(p, "prelu weights", "fused conv2d"));
            var A = function(e, t) {
                var n = l(t, 4)
                  , i = n[0]
                  , o = n[1]
                  , s = n[2]
                  , c = n[3]
                  , h = nc(e, s, d);
                m(No(u), (function() {
                    return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u + "'"
                }
                ));
                var f = [rs(o.shape, h, i, r, a), tc(o, h, i.shape, r, a)];
                if (null != c) {
                    var p = rc(c, h);
                    f.push(p)
                }
                return f
            }
              , _ = {
                x: w,
                filter: b,
                bias: x,
                preluActivationWeights: E
            }
              , I = {
                strides: r,
                pad: a,
                dataFormat: o,
                dilations: u,
                dimRoundingMode: c,
                activation: d,
                leakyreluAlpha: v
            };
            return null == h ? Vs((function(e, t, n) {
                var r = $r.runKernel(An, _, I);
                return n([t, e, r]),
                k && (r = Bo(r, [r.shape[1], r.shape[2], r.shape[3]])),
                {
                    value: r,
                    gradFunc: A
                }
            }
            ))(w, b) : Vs((function(e, t, n, r) {
                var a = $r.runKernel(An, _, I);
                return r([t, e, a, n]),
                k && (a = Bo(a, [a.shape[1], a.shape[2], a.shape[3]])),
                {
                    value: a,
                    gradFunc: A
                }
            }
            ))(w, b, x)
        }
    });
    var sc = la({
        depthwiseConv2dNativeBackpropFilter_: function(e, t, n, r, a, i, o) {
            void 0 === i && (i = [1, 1]);
            var s = e;
            3 === e.rank && (s = Bo(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            var u = t;
            3 === u.rank && (u = Bo(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            var l = {
                x: s,
                dy: u
            }
              , c = {
                strides: r,
                pad: a,
                dimRoundingMode: o,
                dilations: i,
                filterShape: n
            };
            return $r.runKernel(Ce, l, c)
        }
    });
    var uc = la({
        depthwiseConv2dNativeBackpropInput_: function(e, t, n, r, a, i, o) {
            void 0 === i && (i = [1, 1]);
            var s = t
              , u = !1;
            3 === t.rank && (u = !0,
            s = Bo(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            var l = {
                dy: s,
                filter: n
            }
              , c = {
                strides: r,
                pad: a,
                dimRoundingMode: o,
                dilations: i,
                inputShape: e
            }
              , h = $r.runKernel(Pe, l, c);
            return u ? Bo(h, [h.shape[1], h.shape[2], h.shape[3]]) : h
        }
    });
    var lc = {
        __proto__: null,
        conv2d: oc,
        depthwiseConv2d: la({
            fusedDepthwiseConv2d_: function(e) {
                var t, n = e.x, r = e.filter, a = e.strides, i = e.pad, o = e.dataFormat, s = void 0 === o ? "NHWC" : o, u = e.dilations, c = void 0 === u ? [1, 1] : u, h = e.dimRoundingMode, f = e.bias, d = e.activation, p = void 0 === d ? "linear" : d, v = e.preluActivationWeights, g = e.leakyreluAlpha;
                if (!1 === ic($r.state.gradientDepth, p)) {
                    var y = ds(n, r, a, i, s, c, h);
                    return null != f && (y = ro(y, f)),
                    ac(y, p, v, g)
                }
                var b = oa(n, "x", "depthwiseConv2d", "float32")
                  , w = oa(r, "filter", "depthwiseConv2d", "float32")
                  , k = b
                  , x = !1;
                3 === b.rank && (x = !0,
                k = Bo(b, [1, b.shape[0], b.shape[1], b.shape[2]])),
                m(4 === k.rank, (function() {
                    return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + k.rank + "."
                }
                )),
                m(4 === w.rank, (function() {
                    return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + w.rank + "."
                }
                )),
                m(k.shape[3] === w.shape[2], (function() {
                    return "Error in fused depthwiseConv2d: number of input channels (" + k.shape[3] + ") must match the inChannels dimension in filter " + w.shape[2] + "."
                }
                )),
                null == c && (c = [1, 1]),
                m(To(a, c), (function() {
                    return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + a + " and dilations '" + c + "'"
                }
                )),
                Ro("fused depthwiseConv2d", i, h);
                var E, S, A = xo(k.shape, w.shape, a, c, i, h, !0);
                null != f && (t = l(Wr(E = oa(f, "bias", "fused conv2d"), b), 1),
                E = t[0],
                Ei(A.outShape, E.shape)),
                null != v && (S = oa(v, "prelu weights", "fused depthwiseConv2d"));
                var _ = function(e, t) {
                    m(No(c), (function() {
                        return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + c + "'"
                    }
                    ));
                    var n = l(t, 4)
                      , r = n[0]
                      , o = n[1]
                      , s = n[2]
                      , u = n[3]
                      , f = nc(e, s, p)
                      , d = uc(o.shape, f, r, a, i, c, h)
                      , v = sc(o, f, r.shape, a, i, c, h);
                    return null != u ? [d, v, rc(E, f)] : [d, v]
                }
                  , I = {
                    x: k,
                    filter: w,
                    bias: E,
                    preluActivationWeights: S
                }
                  , M = {
                    strides: a,
                    pad: i,
                    dataFormat: s,
                    dilations: c,
                    dimRoundingMode: h,
                    activation: p,
                    leakyreluAlpha: g
                };
                return null == f ? Vs((function(e, t, n) {
                    var r = $r.runKernel(_n, I, M);
                    return n([t, e, r]),
                    x && (r = Bo(r, [r.shape[1], r.shape[2], r.shape[3]])),
                    {
                        value: r,
                        gradFunc: _
                    }
                }
                ))(k, w) : Vs((function(e, t, n, r) {
                    var a = $r.runKernel(_n, I, M);
                    return r([t, e, a, n]),
                    x && (a = Bo(a, [a.shape[1], a.shape[2], a.shape[3]])),
                    {
                        value: a,
                        gradFunc: _
                    }
                }
                ))(k, w, E)
            }
        }),
        matMul: la({
            fusedMatMul_: function(e) {
                var t, n = e.a, r = e.b, a = e.transposeA, i = void 0 !== a && a, o = e.transposeB, s = void 0 !== o && o, u = e.bias, c = e.activation, h = void 0 === c ? "linear" : c, f = e.preluActivationWeights, d = e.leakyreluAlpha;
                if (!1 === ic($r.state.gradientDepth, h)) {
                    var p = mi(n, r, i, s);
                    return null != u && (p = ro(p, u)),
                    ac(p, h, f, d)
                }
                var v = oa(n, "a", "fused matMul")
                  , g = oa(r, "b", "fused matMul");
                t = l(Wr(v, g), 2),
                v = t[0],
                g = t[1];
                var y = i ? v.shape[v.rank - 2] : v.shape[v.rank - 1]
                  , b = s ? g.shape[g.rank - 1] : g.shape[g.rank - 2]
                  , w = i ? v.shape[v.rank - 1] : v.shape[v.rank - 2]
                  , x = s ? g.shape[g.rank - 2] : g.shape[g.rank - 1]
                  , E = v.shape.slice(0, -2)
                  , S = g.shape.slice(0, -2)
                  , A = k(E)
                  , _ = k(S);
                m(y === b, (function() {
                    return "Error in fused matMul: inner shapes (" + y + ") and (" + b + ") of Tensors with shapes " + v.shape + " and " + g.shape + " and transposeA=" + i + " and transposeB=" + s + " must match."
                }
                ));
                var I, M, N = Ei(v.shape.slice(0, -2), g.shape.slice(0, -2)).concat([w, x]), T = Bo(v, i ? [A, y, w] : [A, w, y]), D = Bo(g, s ? [_, x, b] : [_, b, x]);
                null != u && (I = l(Wr(I = oa(u, "bias", "fused matMul"), v), 1)[0],
                Ei(N, I.shape)),
                null != f && (M = oa(f, "prelu weights", "fused matMul"));
                var R = function(e, t) {
                    var n, r, a = l(t, 4), o = a[0], c = a[1], f = a[2], d = a[3], p = nc(Bo(e, f.shape), f, h);
                    return i || s ? !i && s ? (n = mi(p, c, !1, !1),
                    r = mi(p, o, !0, !1)) : i && !s ? (n = mi(c, p, !1, !0),
                    r = mi(o, p, !1, !1)) : (n = mi(c, p, !0, !0),
                    r = mi(p, o, !0, !0)) : (n = mi(p, c, !1, !0),
                    r = mi(o, p, !0, !1)),
                    null != u ? [n, r, rc(d, p)] : [n, r]
                }
                  , B = {
                    a: T,
                    b: D,
                    bias: I,
                    preluActivationWeights: M
                }
                  , F = {
                    transposeA: i,
                    transposeB: s,
                    activation: h,
                    leakyreluAlpha: d
                };
                return null == u ? Vs((function(e, t, n) {
                    var r = $r.runKernel(Sn, B, F);
                    return n([e, t, r]),
                    {
                        value: Bo(r, N),
                        gradFunc: R
                    }
                }
                ))(T, D) : Vs((function(e, t, n, r) {
                    var a = $r.runKernel(Sn, B, F);
                    return r([e, t, a, n]),
                    {
                        value: Bo(a, N),
                        gradFunc: R
                    }
                }
                ))(T, D, I)
            }
        })
    };
    var cc = la({
        hammingWindow_: function(e) {
            return Ql(e, .54, .46)
        }
    });
    var hc = la({
        hannWindow_: function(e) {
            return Ql(e, .5, .5)
        }
    });
    var fc = la({
        frame_: function(e, t, n, r, a) {
            void 0 === r && (r = !1),
            void 0 === a && (a = 0);
            for (var i = 0, o = []; i + t <= e.size; )
                o.push(Lo(e, i, t)),
                i += n;
            if (r)
                for (; i < e.size; ) {
                    var s = i + t - e.size
                      , u = Po([Lo(e, i, t - s), Ns([s], a)]);
                    o.push(u),
                    i += n
                }
            return 0 === o.length ? Pl([], [0, t]) : Bo(Po(o), [o.length, t])
        }
    });
    var dc = la({
        stft_: function(e, t, n, r, a) {
            void 0 === a && (a = hc),
            null == r && (r = $l(t));
            var i = fc(e, t, n)
              , o = oo(i, a(t));
            return Il(o, r)
        }
    });
    var pc = la({
        cropAndResize_: function(e, t, n, r, a, i) {
            void 0 === a && (a = "bilinear"),
            void 0 === i && (i = 0);
            var o = oa(e, "image", "cropAndResize")
              , s = oa(t, "boxes", "cropAndResize", "float32")
              , u = oa(n, "boxInd", "cropAndResize", "int32")
              , l = s.shape[0];
            m(4 === o.rank, (function() {
                return "Error in cropAndResize: image must be rank 4,but got rank " + o.rank + "."
            }
            )),
            m(2 === s.rank && 4 === s.shape[1], (function() {
                return "Error in cropAndResize: boxes must be have size [" + l + ",4] but had shape " + s.shape + "."
            }
            )),
            m(1 === u.rank && u.shape[0] === l, (function() {
                return "Error in cropAndResize: boxInd must be have size [" + l + "] but had shape " + s.shape + "."
            }
            )),
            m(2 === r.length, (function() {
                return "Error in cropAndResize: cropSize must be of length 2, but got length " + r.length + "."
            }
            )),
            m(r[0] >= 1 && r[1] >= 1, (function() {
                return "cropSize must be atleast [1,1], but was " + r
            }
            )),
            m("bilinear" === a || "nearest" === a, (function() {
                return "method must be bilinear or nearest, but was " + a
            }
            ));
            var c = {
                image: o,
                boxes: s,
                boxInd: u
            }
              , h = {
                method: a,
                extrapolationValue: i,
                cropSize: r
            };
            return $r.runKernel(De, c, h)
        }
    });
    var vc = la({
        flipLeftRight_: function(e) {
            var t = oa(e, "image", "flipLeftRight", "float32");
            m(4 === t.rank, (function() {
                return "Error in flipLeftRight: image must be rank 4,but got rank " + t.rank + "."
            }
            ));
            var n = {
                image: t
            };
            return $r.runKernel(Ve, n, {})
        }
    });
    var gc = la({
        grayscaleToRGB_: function(e) {
            var t = oa(e, "image", "grayscaleToRGB")
              , n = t.rank - 1
              , r = t.shape[n];
            m(t.rank >= 2, (function() {
                return "Error in grayscaleToRGB: images must be at least rank 2, but got rank " + t.rank + "."
            }
            )),
            m(1 === r, (function() {
                return "Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size " + r + "."
            }
            ));
            var a = new Array(t.rank);
            return a.fill(1, 0, n),
            a[n] = 3,
            Is(t, a)
        }
    });
    var mc = la({
        rotateWithOffset_: function(e, t, n, r) {
            void 0 === n && (n = 0),
            void 0 === r && (r = .5);
            var a = oa(e, "image", "rotateWithOffset", "float32");
            m(4 === a.rank, (function() {
                return "Error in rotateWithOffset: image must be rank 4,but got rank " + a.rank + "."
            }
            ));
            var i = {
                image: a
            }
              , o = {
                radians: t,
                fillValue: n,
                center: r
            };
            return $r.runKernel(En, i, o)
        }
    });
    function yc(e, t, n, r, a, i) {
        null == r && (r = .5),
        null == a && (a = Number.NEGATIVE_INFINITY),
        null == i && (i = 0);
        var o = e.shape[0];
        return n = Math.min(n, o),
        m(0 <= r && r <= 1, (function() {
            return "iouThreshold must be in [0, 1], but was '" + r + "'"
        }
        )),
        m(2 === e.rank, (function() {
            return "boxes must be a 2D tensor, but was of rank '" + e.rank + "'"
        }
        )),
        m(4 === e.shape[1], (function() {
            return "boxes must have 4 columns, but 2nd dimension was " + e.shape[1]
        }
        )),
        m(1 === t.rank, (function() {
            return "scores must be a 1D tensor"
        }
        )),
        m(t.shape[0] === o, (function() {
            return "scores has incompatible shape with boxes. Expected " + o + ", but was " + t.shape[0]
        }
        )),
        m(0 <= i && i <= 1, (function() {
            return "softNmsSigma must be in [0, 1], but was '" + i + "'"
        }
        )),
        {
            maxOutputSize: n,
            iouThreshold: r,
            scoreThreshold: a,
            softNmsSigma: i
        }
    }
    var bc = la({
        nonMaxSuppression_: function(e, t, n, r, a) {
            void 0 === r && (r = .5),
            void 0 === a && (a = Number.NEGATIVE_INFINITY);
            var i = oa(e, "boxes", "nonMaxSuppression", "float32")
              , o = oa(t, "scores", "nonMaxSuppression", "float32")
              , s = yc(i, o, n, r, a)
              , u = {
                maxOutputSize: n = s.maxOutputSize,
                iouThreshold: r = s.iouThreshold,
                scoreThreshold: a = s.scoreThreshold
            };
            return $r.runKernel(Et, {
                boxes: i,
                scores: o
            }, u)
        }
    });
    function wc(e, t, n) {
        var r = function(e, t, n) {
            return function(e, t, n) {
                var r = 0
                  , a = e.length
                  , i = 0
                  , o = !1;
                for (; r < a; ) {
                    var s = n(t, e[i = r + (a - r >>> 1)]);
                    s > 0 ? r = i + 1 : (a = i,
                    o = !s)
                }
                return o ? r : -r - 1
            }(e, t, n || kc)
        }(e, t, n)
          , a = r < 0 ? -(r + 1) : r;
        e.splice(a, 0, t)
    }
    function kc(e, t) {
        return e > t ? 1 : e < t ? -1 : 0
    }
    function xc(e, t, n, r, a) {
        return Ac(e, t, n, r, a, 0)
    }
    function Ec(e, t, n, r, a, i) {
        return Ac(e, t, n, r, a, 0, !1, i, !0)
    }
    function Sc(e, t, n, r, a, i) {
        return Ac(e, t, n, r, a, i, !0)
    }
    function Ac(e, t, n, r, a, i, o, s, u) {
        void 0 === o && (o = !1),
        void 0 === s && (s = !1),
        void 0 === u && (u = !1);
        for (var l = [], h = 0; h < t.length; h++)
            t[h] > a && l.push({
                score: t[h],
                boxIndex: h,
                suppressBeginIndex: 0
            });
        l.sort(Mc);
        for (var f = i > 0 ? -.5 / i : 0, d = [], p = []; d.length < n && l.length > 0; ) {
            var v = l.pop()
              , g = v.score
              , m = v.boxIndex
              , y = v.suppressBeginIndex;
            if (g < a)
                break;
            for (var b = !1, w = d.length - 1; w >= y; --w) {
                var k = _c(e, m, d[w]);
                if (k >= r) {
                    b = !0;
                    break
                }
                if (v.score = v.score * Ic(r, f, k),
                v.score <= a)
                    break
            }
            v.suppressBeginIndex = d.length,
            b || (v.score === g ? (d.push(m),
            p.push(v.score)) : v.score > a && wc(l, v, Mc))
        }
        var x = d.length
          , E = n - x;
        s && E > 0 && (d.push.apply(d, c(new Array(E).fill(0))),
        p.push.apply(p, c(new Array(E).fill(0))));
        var S = {
            selectedIndices: d
        };
        return o && (S.selectedScores = p),
        u && (S.validOutputs = x),
        S
    }
    function _c(e, t, n) {
        var r = e.subarray(4 * t, 4 * t + 4)
          , a = e.subarray(4 * n, 4 * n + 4)
          , i = Math.min(r[0], r[2])
          , o = Math.min(r[1], r[3])
          , s = Math.max(r[0], r[2])
          , u = Math.max(r[1], r[3])
          , l = Math.min(a[0], a[2])
          , c = Math.min(a[1], a[3])
          , h = Math.max(a[0], a[2])
          , f = Math.max(a[1], a[3])
          , d = (s - i) * (u - o)
          , p = (h - l) * (f - c);
        if (d <= 0 || p <= 0)
            return 0;
        var v = Math.max(i, l)
          , g = Math.max(o, c)
          , m = Math.min(s, h)
          , y = Math.min(u, f)
          , b = Math.max(m - v, 0) * Math.max(y - g, 0);
        return b / (d + p - b)
    }
    function Ic(e, t, n) {
        var r = Math.exp(t * n * n);
        return n <= e ? r : 0
    }
    function Mc(e, t) {
        return e.score - t.score || e.score === t.score && t.boxIndex - e.boxIndex
    }
    var Nc = function(e, t, n, r, a) {
        return void 0 === r && (r = .5),
        void 0 === a && (a = Number.NEGATIVE_INFINITY),
        o(this, void 0, void 0, (function() {
            var i, o, u, l, c, h, f;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return i = oa(e, "boxes", "nonMaxSuppressionAsync"),
                    o = oa(t, "scores", "nonMaxSuppressionAsync"),
                    u = yc(i, o, n, r, a),
                    n = u.maxOutputSize,
                    r = u.iouThreshold,
                    a = u.scoreThreshold,
                    [4, Promise.all([i.data(), o.data()])];
                case 1:
                    return l = s.sent(),
                    c = l[0],
                    h = l[1],
                    f = xc(c, h, n, r, a).selectedIndices,
                    i !== e && i.dispose(),
                    o !== t && o.dispose(),
                    [2, Cl(f, "int32")]
                }
            }
            ))
        }
        ))
    };
    var Tc = la({
        nonMaxSuppressionWithScore_: function(e, t, n, r, a, i) {
            void 0 === r && (r = .5),
            void 0 === a && (a = Number.NEGATIVE_INFINITY),
            void 0 === i && (i = 0);
            var o = oa(e, "boxes", "nonMaxSuppression")
              , s = oa(t, "scores", "nonMaxSuppression")
              , u = yc(o, s, n, r, a, i)
              , l = {
                boxes: o,
                scores: s
            }
              , c = {
                maxOutputSize: n = u.maxOutputSize,
                iouThreshold: r = u.iouThreshold,
                scoreThreshold: a = u.scoreThreshold,
                softNmsSigma: i = u.softNmsSigma
            }
              , h = $r.runKernel(At, l, c);
            return {
                selectedIndices: h[0],
                selectedScores: h[1]
            }
        }
    });
    var Dc = function(e, t, n, r, a, i) {
        return void 0 === r && (r = .5),
        void 0 === a && (a = Number.NEGATIVE_INFINITY),
        void 0 === i && (i = 0),
        o(this, void 0, void 0, (function() {
            var o, u, l, c, h, f, d, p, v;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return o = oa(e, "boxes", "nonMaxSuppressionAsync"),
                    u = oa(t, "scores", "nonMaxSuppressionAsync"),
                    l = yc(o, u, n, r, a, i),
                    n = l.maxOutputSize,
                    r = l.iouThreshold,
                    a = l.scoreThreshold,
                    i = l.softNmsSigma,
                    [4, Promise.all([o.data(), u.data()])];
                case 1:
                    return c = s.sent(),
                    h = c[0],
                    f = c[1],
                    d = Sc(h, f, n, r, a, i),
                    p = d.selectedIndices,
                    v = d.selectedScores,
                    o !== e && o.dispose(),
                    u !== t && u.dispose(),
                    [2, {
                        selectedIndices: Cl(p, "int32"),
                        selectedScores: Cl(v)
                    }]
                }
            }
            ))
        }
        ))
    };
    var Rc = la({
        nonMaxSuppressionPadded_: function(e, t, n, r, a, i) {
            void 0 === r && (r = .5),
            void 0 === a && (a = Number.NEGATIVE_INFINITY),
            void 0 === i && (i = !1);
            var o = oa(e, "boxes", "nonMaxSuppression")
              , s = oa(t, "scores", "nonMaxSuppression")
              , u = yc(o, s, n, r, a, null)
              , l = {
                boxes: o,
                scores: s
            }
              , c = {
                maxOutputSize: u.maxOutputSize,
                iouThreshold: u.iouThreshold,
                scoreThreshold: u.scoreThreshold,
                padToMaxOutputSize: i
            }
              , h = $r.runKernel(St, l, c);
            return {
                selectedIndices: h[0],
                validOutputs: h[1]
            }
        }
    });
    var Bc = function(e, t, n, r, a, i) {
        return void 0 === r && (r = .5),
        void 0 === a && (a = Number.NEGATIVE_INFINITY),
        void 0 === i && (i = !1),
        o(this, void 0, void 0, (function() {
            var o, u, c, h, f, d, p, v, g, m, y, b;
            return s(this, (function(s) {
                switch (s.label) {
                case 0:
                    return o = oa(e, "boxes", "nonMaxSuppressionAsync"),
                    u = oa(t, "scores", "nonMaxSuppressionAsync"),
                    c = yc(o, u, n, r, a, null),
                    h = c.maxOutputSize,
                    f = c.iouThreshold,
                    d = c.scoreThreshold,
                    [4, Promise.all([o.data(), u.data()])];
                case 1:
                    return p = l.apply(void 0, [s.sent(), 2]),
                    v = p[0],
                    g = p[1],
                    m = Ec(v, g, h, f, d, i),
                    y = m.selectedIndices,
                    b = m.validOutputs,
                    o !== e && o.dispose(),
                    u !== t && u.dispose(),
                    [2, {
                        selectedIndices: Cl(y, "int32"),
                        validOutputs: hl(b, "int32")
                    }]
                }
            }
            ))
        }
        ))
    };
    var Fc = la({
        resizeBilinear_: function(e, t, n, r) {
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = oa(e, "images", "resizeBilinear");
            m(3 === a.rank || 4 === a.rank, (function() {
                return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + a.rank + "."
            }
            )),
            m(2 === t.length, (function() {
                return "Error in resizeBilinear: new shape must 2D, but got shape " + t + "."
            }
            )),
            m(!1 === r || !1 === n, (function() {
                return "Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."
            }
            ));
            var i = a
              , o = !1;
            3 === a.rank && (o = !0,
            i = Bo(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            l(t, 0);
            var s = {
                images: i
            }
              , u = {
                alignCorners: n,
                halfPixelCenters: r,
                size: t
            }
              , c = $r.runKernel(Lt, s, u);
            return o ? Bo(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
        }
    });
    var Cc = la({
        resizeNearestNeighbor_: function(e, t, n, r) {
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = oa(e, "images", "resizeNearestNeighbor");
            m(3 === a.rank || 4 === a.rank, (function() {
                return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + a.rank + "."
            }
            )),
            m(2 === t.length, (function() {
                return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + t + "."
            }
            )),
            m("float32" === a.dtype || "int32" === a.dtype, (function() {
                return "`images` must have `int32` or `float32` as dtype"
            }
            )),
            m(!1 === r || !1 === n, (function() {
                return "Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."
            }
            ));
            var i = a
              , o = !1;
            3 === a.rank && (o = !0,
            i = Bo(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            l(t, 0);
            var s = {
                images: i
            }
              , u = {
                alignCorners: n,
                halfPixelCenters: r,
                size: t
            }
              , c = $r.runKernel(Ot, s, u);
            return o ? Bo(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
        }
    });
    var Pc = la({
        threshold_: function(e, t, n, r) {
            var a;
            void 0 === t && (t = "binary"),
            void 0 === n && (n = !1),
            void 0 === r && (r = .5);
            var i, o, s, u, c = oa(e, "image", "threshold"), h = c.shape[0] * c.shape[1], f = oo(Cl([r]), 255);
            if (m(3 === c.rank, (function() {
                return "Error in threshold: image must be rank 3,but got rank " + c.rank + "."
            }
            )),
            m(3 === c.shape[2] || 1 === c.shape[2], (function() {
                return "Error in threshold: image color channel must be equal to 3 or 1but got " + c.shape[2] + "."
            }
            )),
            m("int32" === c.dtype || "float32" === c.dtype, (function() {
                return "Error in dtype: image dtype must be int32 or float32,but got dtype " + c.dtype + "."
            }
            )),
            m("otsu" === t || "binary" === t, (function() {
                return "Method must be binary or otsu, but was " + t
            }
            )),
            3 === c.shape[2]) {
                i = (a = l(_l(c, [1, 1, 1], -1), 3))[0],
                o = a[1],
                s = a[2];
                var d = oo(i, .2989)
                  , p = oo(o, .587)
                  , v = oo(s, .114);
                u = ro(ro(d, p), v)
            } else
                u = e;
            "otsu" === t && (f = function(e, t) {
                for (var n, r, a, i, o, s, u = Cl([-1]), l = Cl([0]), c = Cl([0]), h = 0; h < e.size - 1; h++) {
                    n = Lo(e, 0, h + 1),
                    r = Lo(e, h + 1),
                    o = io($s(n), t),
                    s = io($s(r), t);
                    var f = $s(oo(n, Qu(0, n.size)));
                    a = io(f, $s(n));
                    var d = Ns(r.shape, n.size)
                      , p = ro(Qu(0, r.size), d)
                      , v = oo(r, p);
                    i = io($s(v), $s(r));
                    var g = Xs(a, i)
                      , m = Xs(a, i)
                      , y = oo(o, s);
                    c = oo(oo(y, g), m);
                    var b = Rs(c, l);
                    l = ms(b, c, l),
                    u = ms(b, Cl([h]), u)
                }
                return u
            }(Ho(ti(ll(u), "int32"), fa([]), 256), h));
            var g = n ? qs(u, f) : Rs(u, f);
            return ti(oo(g, 255), "int32")
        }
    });
    var Oc = la({
        transform_: function(e, t, n, r, a, i) {
            void 0 === n && (n = "nearest"),
            void 0 === r && (r = "constant"),
            void 0 === a && (a = 0);
            var o = oa(e, "image", "transform", "float32")
              , s = oa(t, "transforms", "transform", "float32");
            m(4 === o.rank, (function() {
                return "Error in transform: image must be rank 4,but got rank " + o.rank + "."
            }
            )),
            m(2 === s.rank && (s.shape[0] === o.shape[0] || 1 === s.shape[0]) && 8 === s.shape[1], (function() {
                return "Error in transform: Input transform should be batch x 8 or 1 x 8"
            }
            )),
            m(null == i || 2 === i.length, (function() {
                return "Error in transform: outputShape must be [height, width] or null, but got " + i + "."
            }
            ));
            var u = {
                image: o,
                transforms: s
            }
              , l = {
                interpolation: n,
                fillMode: r,
                fillValue: a,
                outputShape: i
            };
            return $r.runKernel(vn, u, l)
        }
    });
    var Lc = la({
        bandPart_: function(e, t, n) {
            m(t % 1 == 0, (function() {
                return "bandPart(): numLower must be an integer, got " + t + "."
            }
            )),
            m(n % 1 == 0, (function() {
                return "bandPart(): numUpper must be an integer, got " + n + "."
            }
            ));
            var r = oa(e, "a", "bandPart");
            m(r.rank >= 2, (function() {
                return "bandPart(): Rank must be at least 2, got " + r.rank + "."
            }
            ));
            var a = r.shape
              , i = l(r.shape.slice(-2), 2)
              , o = i[0]
              , s = i[1];
            if (!(t <= o))
                throw new Error("bandPart(): numLower (" + t + ") must not be greater than the number of rows (" + o + ").");
            if (!(n <= s))
                throw new Error("bandPart(): numUpper (" + n + ") must not be greater than the number of columns (" + s + ").");
            t < 0 && (t = o),
            n < 0 && (n = s);
            var u = Bo(Qu(0, o, 1, "int32"), [-1, 1])
              , c = Qu(0, s, 1, "int32")
              , h = Xs(u, c)
              , f = au(qs(h, hl(+t, "int32")), Bs(h, hl(-n, "int32")))
              , d = du([o, s], r.dtype);
            return Bo(Dl(Kl(Bo(r, [-1, o, s])).map((function(e) {
                return ms(f, e, d)
            }
            ))), a)
        }
    });
    var zc = la({
        gramSchmidt_: function(e) {
            var t;
            if (Array.isArray(e)) {
                t = !1,
                m(null != e && e.length > 0, (function() {
                    return "Gram-Schmidt process: input must not be null, undefined, or empty"
                }
                ));
                for (var n = e[0].shape[0], r = function(t) {
                    m(e[t].shape[0] === n, (function() {
                        return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + e[t].shape[0] + " vs. " + n + ")"
                    }
                    ))
                }, a = 1; a < e.length; ++a)
                    r(a)
            } else
                t = !0,
                e = _l(e, e.shape[0], 0).map((function(e) {
                    return Tl(e, [0])
                }
                ));
            m(e.length <= e[0].shape[0], (function() {
                return "Gram-Schmidt: Number of vectors (" + e.length + ") exceeds number of dimensions (" + e[0].shape[0] + ")."
            }
            ));
            var i = []
              , o = e
              , s = function(e) {
                i.push($r.tidy((function() {
                    var t = o[e];
                    if (e > 0)
                        for (var n = 0; n < e; ++n) {
                            var r = oo($s(oo(i[n], t)), i[n]);
                            t = Xs(t, r)
                        }
                    return io(t, Hl(t, "euclidean"))
                }
                )))
            };
            for (a = 0; a < e.length; ++a)
                s(a);
            return t ? Dl(i, 0) : i
        }
    });
    function qc(e, t) {
        return void 0 === t && (t = !1),
        $r.tidy((function() {
            m(2 === e.shape.length, (function() {
                return "qr2d() requires a 2D Tensor, but got a " + e.shape.length + "D Tensor."
            }
            ));
            for (var n = e.shape[0], r = e.shape[1], a = Ms(n), i = ni(e), o = Pl([[1]], [1, 1]), s = ni(o), u = n >= r ? r : n, c = function(e) {
                var t, u = i, c = s, h = a;
                t = l($r.tidy((function() {
                    var t = Lo(i, [e, e], [n - e, 1])
                      , u = Hl(t)
                      , l = Lo(i, [e, e], [1, 1])
                      , c = ms(Rs(l, 0), Pl([[-1]]), Pl([[1]]))
                      , h = Xs(l, oo(c, u))
                      , f = io(t, h);
                    s = 1 === f.shape[0] ? ni(o) : Po([o, Lo(f, [1, 0], [f.shape[0] - 1, f.shape[1]])], 0);
                    var d = js(io(mi(c, h), u))
                      , p = Lo(i, [e, 0], [n - e, r])
                      , v = oo(d, s)
                      , g = bi(s);
                    if (0 === e)
                        i = Xs(p, mi(v, mi(g, p)));
                    else {
                        var m = Xs(p, mi(v, mi(g, p)));
                        i = Po([Lo(i, [0, 0], [e, r]), m], 0)
                    }
                    var y = bi(v)
                      , b = Lo(a, [0, e], [n, a.shape[1] - e]);
                    if (0 === e)
                        a = Xs(b, mi(mi(b, s), y));
                    else {
                        var w = Xs(b, mi(mi(b, s), y));
                        a = Po([Lo(a, [0, 0], [n, e]), w], 1)
                    }
                    return [s, i, a]
                }
                )), 3),
                s = t[0],
                i = t[1],
                a = t[2],
                to([u, c, h])
            }, h = 0; h < u; ++h)
                c(h);
            return !t && n > r && (a = Lo(a, [0, 0], [n, r]),
            i = Lo(i, [0, 0], [r, r])),
            [a, i]
        }
        ))
    }
    var Kc, Wc = la({
        qr_: function(e, t) {
            if (void 0 === t && (t = !1),
            m(e.rank >= 2, (function() {
                return "qr() requires input tensor to have a rank >= 2, but got rank " + e.rank
            }
            )),
            2 === e.rank)
                return qc(e, t);
            var n = e.shape.slice(0, e.shape.length - 2).reduce((function(e, t) {
                return e * t
            }
            ))
              , r = Kl(Bo(e, [n, e.shape[e.shape.length - 2], e.shape[e.shape.length - 1]]), 0)
              , a = []
              , i = [];
            return r.forEach((function(e) {
                var n = l(qc(e, t), 2)
                  , r = n[0]
                  , o = n[1];
                a.push(r),
                i.push(o)
            }
            )),
            [Bo(Dl(a, 0), e.shape), Bo(Dl(i, 0), e.shape)]
        }
    });
    e.Reduction = void 0,
    (Kc = e.Reduction || (e.Reduction = {}))[Kc.NONE = 0] = "NONE",
    Kc[Kc.MEAN = 1] = "MEAN",
    Kc[Kc.SUM = 2] = "SUM",
    Kc[Kc.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
    var Gc = la({
        computeWeightedLoss_: function(t, n, r) {
            void 0 === r && (r = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var a = oa(t, "losses", "computeWeightedLoss")
              , i = null;
            null != n && (i = oa(n, "weights", "computeWeightedLoss"));
            var o = null == i ? a : oo(a, i);
            if (r === e.Reduction.NONE)
                return o;
            if (r === e.Reduction.SUM)
                return $s(o);
            if (r === e.Reduction.MEAN) {
                if (null == i)
                    return fu(o);
                var s = a.size / i.size
                  , u = io($s(o), $s(i));
                return s > 1 ? io(u, hl(s)) : u
            }
            if (r === e.Reduction.SUM_BY_NONZERO_WEIGHTS) {
                if (null == i)
                    return io($s(o), hl(a.size));
                var l = oo(i, pu(a.shape))
                  , c = ti($s(Eu(l, hl(0))), "float32");
                return io($s(o), c)
            }
            throw Error("Unknown reduction: " + r)
        }
    });
    var Uc = la({
        absoluteDifference_: function(t, n, r, a) {
            void 0 === a && (a = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = oa(t, "labels", "absoluteDifference")
              , o = oa(n, "predictions", "absoluteDifference")
              , s = null;
            null != r && (s = oa(r, "weights", "absoluteDifference")),
            y(i.shape, o.shape, "Error in absoluteDifference: ");
            var u = so(Xs(i, o));
            return Gc(u, s, a)
        }
    });
    var Vc = la({
        cosineDistance_: function(t, n, r, a, i) {
            void 0 === i && (i = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var o = oa(t, "labels", "cosineDistance")
              , s = oa(n, "predictions", "cosineDistance")
              , u = null;
            null != a && (u = oa(a, "weights", "cosineDistance")),
            y(o.shape, s.shape, "Error in cosineDistance: ");
            var l = hl(1)
              , c = Xs(l, $s(oo(o, s), r, !0));
            return Gc(c, u, i)
        }
    });
    var Hc = la({
        hingeLoss_: function(t, n, r, a) {
            void 0 === a && (a = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = oa(t, "labels", "hingeLoss")
              , o = oa(n, "predictions", "hingeLoss")
              , s = null;
            null != r && (s = oa(r, "weights", "hingeLoss")),
            y(i.shape, o.shape, "Error in hingeLoss: ");
            var u = hl(1);
            i = Xs(oo(hl(2), i), u);
            var l = nl(Xs(u, oo(i, o)));
            return Gc(l, s, a)
        }
    });
    var jc = la({
        huberLoss_: function(t, n, r, a, i) {
            void 0 === a && (a = 1),
            void 0 === i && (i = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var o = oa(t, "labels", "huberLoss")
              , s = oa(n, "predictions", "huberLoss")
              , u = null;
            null != r && (u = oa(r, "weights", "huberLoss")),
            y(o.shape, s.shape, "Error in huberLoss: ");
            var l = hl(a)
              , c = so(Xs(s, o))
              , h = gu(c, l)
              , f = Xs(c, h)
              , d = ro(oo(hl(.5), bu(h)), oo(l, f));
            return Gc(d, u, i)
        }
    });
    var Jc = la({
        logLoss_: function(t, n, r, a, i) {
            void 0 === a && (a = 1e-7),
            void 0 === i && (i = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var o = oa(t, "labels", "logLoss")
              , s = oa(n, "predictions", "logLoss")
              , u = null;
            null != r && (u = oa(r, "weights", "logLoss")),
            y(o.shape, s.shape, "Error in logLoss: ");
            var l = hl(1)
              , c = hl(a)
              , h = js(oo(o, Ws(ro(s, c))))
              , f = oo(Xs(l, o), Ws(ro(Xs(l, s), c)))
              , d = Xs(h, f);
            return Gc(d, u, i)
        }
    });
    var Zc = la({
        meanSquaredError_: function(t, n, r, a) {
            void 0 === a && (a = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var i = oa(t, "labels", "meanSquaredError")
              , o = oa(n, "predictions", "meanSquaredError")
              , s = null;
            null != r && (s = oa(r, "weights", "meanSquaredError")),
            y(i.shape, o.shape, "Error in meanSquaredError: ");
            var u = Nl(i, o);
            return Gc(u, s, a)
        }
    });
    var Yc = la({
        sigmoidCrossEntropy_: function(t, n, r, a, i) {
            void 0 === a && (a = 0),
            void 0 === i && (i = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var o = oa(t, "multiClassLabels", "sigmoidCrossEntropy")
              , s = oa(n, "logits", "sigmoidCrossEntropy")
              , u = null;
            if (null != r && (u = oa(r, "weights", "sigmoidCrossEntropy")),
            y(o.shape, s.shape, "Error in sigmoidCrossEntropy: "),
            a > 0) {
                var l = hl(a)
                  , c = hl(1)
                  , h = hl(.5);
                o = ro(oo(o, Xs(c, l)), oo(h, l))
            }
            var f = function(e, t) {
                var n = oa(e, "labels", "sigmoidCrossEntropyWithLogits")
                  , r = oa(t, "logits", "sigmoidCrossEntropyWithLogits");
                y(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
                var a = nl(r)
                  , i = oo(r, n)
                  , o = Gs(Ss(js(so(r))));
                return ro(Xs(a, i), o)
            }(o, s);
            return Gc(f, u, i)
        }
    });
    var Xc = la({
        softmaxCrossEntropy_: function(t, n, r, a, i) {
            void 0 === a && (a = 0),
            void 0 === i && (i = e.Reduction.SUM_BY_NONZERO_WEIGHTS);
            var o = oa(t, "onehotLabels", "softmaxCrossEntropy")
              , s = oa(n, "logits", "softmaxCrossEntropy")
              , u = null;
            if (null != r && (u = oa(r, "weights", "softmaxCrossEntropy")),
            y(o.shape, s.shape, "Error in softmaxCrossEntropy: "),
            a > 0) {
                var c = hl(a)
                  , h = hl(1)
                  , f = hl(o.shape[1]);
                o = ro(oo(o, Xs(h, c)), io(c, f))
            }
            var d = function(e, t, n) {
                if (void 0 === n && (n = -1),
                -1 === n && (n = t.rank - 1),
                n !== t.rank - 1)
                    throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + t.rank + " and dim was " + n);
                return Vs((function(e, t, r) {
                    var a = ru(t, [n], !0)
                      , i = Xs(ti(t, "float32"), a);
                    r([e, i]);
                    var o = js(oo(i, e));
                    return {
                        value: $s(o, [n]),
                        gradFunc: function(e, t) {
                            var r = l(t, 2)
                              , a = r[0]
                              , i = r[1]
                              , o = nu(e.shape, [n]);
                            return [oo(Bo(e, o), Xs(ti(a, "float32"), Ss(i))), oo(Bo(e, o), Xs(Ss(i), ti(a, "float32")))]
                        }
                    }
                }
                ))(e, t)
            }(o, s);
            return Gc(d, u, i)
        }
    });
    var $c = la({
        sparseFillEmptyRows_: function(e, t, n, r) {
            var a = oa(e, "indices", "sparseFillEmptyRows", "int32")
              , i = oa(t, "values", "sparseFillEmptyRows")
              , o = oa(n, "denseShape", "sparseFillEmptyRows", "int32")
              , s = oa(r, "defaultValue", "sparseFillEmptyRows", i.dtype);
            if (2 !== a.rank)
                throw new Error("Indices should be Tensor2D but received shape\n        " + a.shape);
            if (1 !== i.rank)
                throw new Error("Values should be Tensor1D but received shape " + i.shape);
            if (1 !== o.rank)
                throw new Error("Dense shape should be Tensor1D but received shape " + o.shape);
            if (0 !== s.rank)
                throw new Error("Default value should be a scalar but received shape " + s.shape);
            var u = {
                indices: a,
                values: i,
                denseShape: o,
                defaultValue: s
            }
              , l = $r.runKernel(tn, u);
            return {
                outputIndices: l[0],
                outputValues: l[1],
                emptyRowIndicator: l[2],
                reverseIndexMap: l[3]
            }
        }
    });
    var Qc = la({
        sparseReshape_: function(e, t, n) {
            var r = oa(e, "inputIndices", "sparseReshape", "int32")
              , a = oa(t, "inputShape", "sparseReshape", "int32")
              , i = oa(n, "newShape", "sparseReshape", "int32");
            if (2 !== r.rank)
                throw new Error("Input indices should be Tensor2D but received shape\n        " + r.shape);
            if (1 !== a.rank)
                throw new Error("Input shape should be Tensor1D but received shape " + a.shape);
            if (1 !== i.rank)
                throw new Error("New shape should be Tensor1D but received shape " + i.shape);
            var o = {
                inputIndices: r,
                inputShape: a,
                newShape: i
            }
              , s = $r.runKernel(nn, o);
            return {
                outputIndices: s[0],
                outputShape: s[1]
            }
        }
    });
    var eh = la({
        sparseSegmentMean_: function(e, t, n) {
            var r = oa(e, "data", "sparseSegmentMean")
              , a = oa(t, "indices", "sparseSegmentMean", "int32")
              , i = oa(n, "segmentIds", "sparseSegmentMean", "int32");
            if (r.rank < 1)
                throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== a.rank)
                throw new Error("Indices should be Tensor1D but received shape\n          " + a.shape);
            if (1 !== i.rank)
                throw new Error("Segment ids should be Tensor1D but received shape\n          " + i.shape);
            var o = {
                data: r,
                indices: a,
                segmentIds: i
            };
            return $r.runKernel(rn, o)
        }
    });
    var th = la({
        sparseSegmentSum_: function(e, t, n) {
            var r = oa(e, "data", "sparseSegmentSum")
              , a = oa(t, "indices", "sparseSegmentSum", "int32")
              , i = oa(n, "segmentIds", "sparseSegmentSum", "int32");
            if (r.rank < 1)
                throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== a.rank)
                throw new Error("Indices should be Tensor1D but received shape\n         " + a.shape);
            if (1 !== i.rank)
                throw new Error("Segment ids should be Tensor1D but received shape\n         " + i.shape);
            var o = {
                data: r,
                indices: a,
                segmentIds: i
            };
            return $r.runKernel(an, o)
        }
    });
    var nh = la({
        stringNGrams_: function(e, t, n, r, a, i, o, s) {
            var u = oa(e, "data", "stringNGrams", "string");
            if ("string" !== u.dtype)
                throw new Error("Data must be of datatype string");
            if (1 !== u.shape.length)
                throw new Error("Data must be a vector, saw: " + u.shape);
            var l = oa(t, "dataSplits", "stringNGrams");
            if ("int32" !== l.dtype)
                throw new Error("Data splits must be of datatype int32");
            var c = {
                separator: n,
                nGramWidths: r,
                leftPad: a,
                rightPad: i,
                padWidth: o,
                preserveShortSequences: s
            }
              , h = {
                data: u,
                dataSplits: l
            }
              , f = $r.runKernel(ln, h, c);
            return {
                nGrams: f[0],
                nGramsSplits: f[1]
            }
        }
    });
    var rh = la({
        stringSplit_: function(e, t, n) {
            void 0 === n && (n = !0);
            var r = oa(e, "input", "stringSplit", "string")
              , a = oa(t, "delimiter", "stringSplit", "string");
            if (1 !== r.rank)
                throw new Error("Input should be Tensor1D but received shape " + r.shape);
            if (0 !== a.rank)
                throw new Error("Delimiter should be a scalar but received shape " + a.shape);
            var i = {
                skipEmpty: n
            }
              , o = {
                input: r,
                delimiter: a
            }
              , s = $r.runKernel(cn, o, i);
            return {
                indices: s[0],
                values: s[1],
                shape: s[2]
            }
        }
    });
    var ah = la({
        stringToHashBucketFast_: function(e, t) {
            var n = oa(e, "input", "stringToHashBucketFast", "string")
              , r = {
                numBuckets: t
            };
            if (t <= 0)
                throw new Error("Number of buckets must be at least 1");
            var a = {
                input: n
            };
            return $r.runKernel(hn, a, r)
        }
    })
      , ih = {
        fft: El,
        ifft: Sl,
        rfft: Il,
        irfft: Al
    }
      , oh = {
        hammingWindow: cc,
        hannWindow: hc,
        frame: fc,
        stft: dc
    }
      , sh = {
        flipLeftRight: vc,
        grayscaleToRGB: gc,
        resizeNearestNeighbor: Cc,
        resizeBilinear: Fc,
        rotateWithOffset: mc,
        cropAndResize: pc,
        nonMaxSuppression: bc,
        nonMaxSuppressionAsync: Nc,
        nonMaxSuppressionWithScore: Tc,
        nonMaxSuppressionWithScoreAsync: Dc,
        nonMaxSuppressionPadded: Rc,
        nonMaxSuppressionPaddedAsync: Bc,
        threshold: Pc,
        transform: Oc
    }
      , uh = {
        bandPart: Lc,
        gramSchmidt: zc,
        qr: Wc
    }
      , lh = {
        absoluteDifference: Uc,
        computeWeightedLoss: Gc,
        cosineDistance: Vc,
        hingeLoss: Hc,
        huberLoss: jc,
        logLoss: Jc,
        meanSquaredError: Zc,
        sigmoidCrossEntropy: Yc,
        softmaxCrossEntropy: Xc
    }
      , ch = {
        sparseFillEmptyRows: $c,
        sparseReshape: Qc,
        sparseSegmentMean: eh,
        sparseSegmentSum: th
    }
      , hh = {
        stringNGrams: nh,
        stringSplit: rh,
        stringToHashBucketFast: ah
    }
      , fh = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return i(t, e),
        t.prototype.minimize = function(e, t, n) {
            void 0 === t && (t = !1);
            var r = this.computeGradients(e, n)
              , a = r.value
              , i = r.grads;
            if (null != n) {
                var o = n.map((function(e) {
                    return {
                        name: e.name,
                        tensor: i[e.name]
                    }
                }
                ));
                this.applyGradients(o)
            } else
                this.applyGradients(i);
            return to(i),
            t ? a : (a.dispose(),
            null)
        }
        ,
        Object.defineProperty(t.prototype, "iterations", {
            get: function() {
                return null == this.iterations_ && (this.iterations_ = 0),
                this.iterations_
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.incrementIterations = function() {
            this.iterations_ = this.iterations + 1
        }
        ,
        t.prototype.computeGradients = function(e, t) {
            return Us(e, t)
        }
        ,
        t.prototype.dispose = function() {
            null != this.iterations_ && to(this.iterations_)
        }
        ,
        t.prototype.saveIterations = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    return null == this.iterations_ && (this.iterations_ = 0),
                    [2, {
                        name: "iter",
                        tensor: hl(this.iterations_, "int32")
                    }]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    throw new Error("getWeights() is not implemented for this optimizer yet.")
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    throw new Error("setWeights() is not implemented for this optimizer class " + this.getClassName())
                }
                ))
            }
            ))
        }
        ,
        t.prototype.extractIterations = function(e) {
            return o(this, void 0, void 0, (function() {
                var t;
                return s(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return t = this,
                        [4, e[0].tensor.data()];
                    case 1:
                        return t.iterations_ = n.sent()[0],
                        [2, e.slice(1)]
                    }
                }
                ))
            }
            ))
        }
        ,
        t
    }(Hi);
    Object.defineProperty(fh, Symbol.hasInstance, {
        value: function(e) {
            return null != e.minimize && null != e.computeGradients && null != e.applyGradients
        }
    });
    var dh = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return a.learningRate = t,
            a.rho = n,
            a.epsilon = r,
            a.accumulatedGrads = [],
            a.accumulatedUpdates = [],
            null == r && (a.epsilon = $r.backend.epsilon()),
            a
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this;
            (Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e)).forEach((function(n, r) {
                var a = $r.registeredVariables[n];
                null == t.accumulatedGrads[r] && (t.accumulatedGrads[r] = {
                    originalName: n + "/accum_grad",
                    variable: eo((function() {
                        return ys(a).variable(false)
                    }
                    ))
                }),
                null == t.accumulatedUpdates[r] && (t.accumulatedUpdates[r] = {
                    originalName: n + "/accum_var",
                    variable: eo((function() {
                        return ys(a).variable(false)
                    }
                    ))
                });
                var i = Array.isArray(e) ? e[r].tensor : e[n];
                if (null != i) {
                    var o = t.accumulatedGrads[r].variable
                      , s = t.accumulatedUpdates[r].variable;
                    eo((function() {
                        var e = ro(oo(o, t.rho), oo(bu(i), 1 - t.rho))
                          , n = oo(io(Ml(ro(s, t.epsilon)), Ml(ro(o, t.epsilon))), i)
                          , r = ro(oo(s, t.rho), oo(bu(n), 1 - t.rho));
                        o.assign(e),
                        s.assign(r);
                        var u = ro(oo(n, -t.learningRate), a);
                        a.assign(u)
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.dispose = function() {
            null != this.accumulatedUpdates && (to(this.accumulatedGrads.map((function(e) {
                return e.variable
            }
            ))),
            to(this.accumulatedUpdates.map((function(e) {
                return e.variable
            }
            ))))
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e = c(this.accumulatedGrads, this.accumulatedUpdates),
                        [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(e.map((function(e) {
                            return {
                                name: e.originalName,
                                tensor: e.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                var t;
                return s(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = n.sent(),
                        t = e.length / 2,
                        !1,
                        this.accumulatedGrads = e.slice(0, t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(false)
                            }
                        }
                        )),
                        this.accumulatedUpdates = e.slice(t, 2 * t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(false)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                rho: this.rho,
                epsilon: this.epsilon
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate,t.rho,t.epsilon)
        }
        ,
        t
    }(fh);
    dh.className = "Adadelta",
    Ji(dh);
    var ph = function(e) {
        function t(t, n) {
            void 0 === n && (n = .1);
            var r = e.call(this) || this;
            return r.learningRate = t,
            r.initialAccumulatorValue = n,
            r.accumulatedGrads = [],
            r
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this;
            (Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e)).forEach((function(n, r) {
                var a = $r.registeredVariables[n];
                if (null == t.accumulatedGrads[r]) {
                    t.accumulatedGrads[r] = {
                        originalName: n + "/accumulator",
                        variable: eo((function() {
                            return Ns(a.shape, t.initialAccumulatorValue).variable(false)
                        }
                        ))
                    }
                }
                var i = Array.isArray(e) ? e[r].tensor : e[n];
                if (null != i) {
                    var o = t.accumulatedGrads[r].variable;
                    eo((function() {
                        var e = ro(o, bu(i));
                        o.assign(e);
                        var n = ro(oo(io(i, Ml(ro(e, $r.backend.epsilon()))), -t.learningRate), a);
                        a.assign(n)
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.dispose = function() {
            null != this.accumulatedGrads && to(this.accumulatedGrads.map((function(e) {
                return e.variable
            }
            )))
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [e.sent()].concat(this.accumulatedGrads.map((function(e) {
                            return {
                                name: e.originalName,
                                tensor: e.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = t.sent(),
                        !1,
                        this.accumulatedGrads = e.map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(false)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                initialAccumulatorValue: this.initialAccumulatorValue
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate,t.initialAccumulatorValue)
        }
        ,
        t
    }(fh);
    ph.className = "Adagrad",
    Ji(ph);
    var vh = function(e) {
        function t(t, n, r, a) {
            void 0 === a && (a = null);
            var i = e.call(this) || this;
            return i.learningRate = t,
            i.beta1 = n,
            i.beta2 = r,
            i.epsilon = a,
            i.accumulatedFirstMoment = [],
            i.accumulatedSecondMoment = [],
            eo((function() {
                i.accBeta1 = hl(n).variable(),
                i.accBeta2 = hl(r).variable()
            }
            )),
            null == a && (i.epsilon = $r.backend.epsilon()),
            i
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this
              , n = Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e);
            eo((function() {
                var r = Xs(1, t.accBeta1)
                  , a = Xs(1, t.accBeta2);
                n.forEach((function(n, i) {
                    var o = $r.registeredVariables[n];
                    null == t.accumulatedFirstMoment[i] && (t.accumulatedFirstMoment[i] = {
                        originalName: n + "/m",
                        variable: eo((function() {
                            return ys(o).variable(false)
                        }
                        ))
                    }),
                    null == t.accumulatedSecondMoment[i] && (t.accumulatedSecondMoment[i] = {
                        originalName: n + "/v",
                        variable: eo((function() {
                            return ys(o).variable(false)
                        }
                        ))
                    });
                    var s = Array.isArray(e) ? e[i].tensor : e[n];
                    if (null != s) {
                        var u = t.accumulatedFirstMoment[i].variable
                          , l = t.accumulatedSecondMoment[i].variable
                          , c = ro(oo(u, t.beta1), oo(s, 1 - t.beta1))
                          , h = ro(oo(l, t.beta2), oo(bu(s), 1 - t.beta2))
                          , f = io(c, r)
                          , d = io(h, a);
                        u.assign(c),
                        l.assign(h);
                        var p = ro(oo(io(f, ro(Ml(d), t.epsilon)), -t.learningRate), o);
                        o.assign(p)
                    }
                }
                )),
                t.accBeta1.assign(oo(t.accBeta1, t.beta1)),
                t.accBeta2.assign(oo(t.accBeta2, t.beta2))
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.dispose = function() {
            this.accBeta1.dispose(),
            this.accBeta2.dispose(),
            null != this.accumulatedFirstMoment && to(this.accumulatedFirstMoment.map((function(e) {
                return e.variable
            }
            ))),
            null != this.accumulatedSecondMoment && to(this.accumulatedSecondMoment.map((function(e) {
                return e.variable
            }
            )))
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e = c(this.accumulatedFirstMoment, this.accumulatedSecondMoment),
                        [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(e.map((function(e) {
                            return {
                                name: e.originalName,
                                tensor: e.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n = this;
                return s(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = r.sent(),
                        eo((function() {
                            n.accBeta1.assign(Bu(n.beta1, n.iterations_ + 1)),
                            n.accBeta2.assign(Bu(n.beta2, n.iterations_ + 1))
                        }
                        )),
                        t = e.length / 2,
                        !1,
                        this.accumulatedFirstMoment = e.slice(0, t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(false)
                            }
                        }
                        )),
                        this.accumulatedSecondMoment = e.slice(t, 2 * t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(false)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)
        }
        ,
        t
    }(fh);
    vh.className = "Adam",
    Ji(vh);
    var gh = function(e) {
        function t(t, n, r, a, i) {
            void 0 === a && (a = null),
            void 0 === i && (i = 0);
            var o = e.call(this) || this;
            return o.learningRate = t,
            o.beta1 = n,
            o.beta2 = r,
            o.epsilon = a,
            o.decay = i,
            o.accumulatedFirstMoment = [],
            o.accumulatedWeightedInfNorm = [],
            eo((function() {
                o.iteration = hl(0).variable(),
                o.accBeta1 = hl(n).variable()
            }
            )),
            null == a && (o.epsilon = $r.backend.epsilon()),
            o
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this
              , n = Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e);
            eo((function() {
                var r = Xs(1, t.accBeta1)
                  , a = io(-t.learningRate, ro(oo(t.iteration, t.decay), 1));
                n.forEach((function(n, i) {
                    var o = $r.registeredVariables[n];
                    null == t.accumulatedFirstMoment[i] && (t.accumulatedFirstMoment[i] = {
                        originalName: n + "/m",
                        variable: ys(o).variable(false)
                    }),
                    null == t.accumulatedWeightedInfNorm[i] && (t.accumulatedWeightedInfNorm[i] = {
                        originalName: n + "/v",
                        variable: ys(o).variable(false)
                    });
                    var s = Array.isArray(e) ? e[i].tensor : e[n];
                    if (null != s) {
                        var u = t.accumulatedFirstMoment[i].variable
                          , l = t.accumulatedWeightedInfNorm[i].variable
                          , c = ro(oo(u, t.beta1), oo(s, 1 - t.beta1))
                          , h = oo(l, t.beta2)
                          , f = so(s)
                          , d = hu(h, f);
                        u.assign(c),
                        l.assign(d);
                        var p = ro(oo(io(a, r), io(c, ro(d, t.epsilon))), o);
                        o.assign(p)
                    }
                }
                )),
                t.iteration.assign(ro(t.iteration, 1)),
                t.accBeta1.assign(oo(t.accBeta1, t.beta1))
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.dispose = function() {
            this.accBeta1.dispose(),
            this.iteration.dispose(),
            null != this.accumulatedFirstMoment && to(this.accumulatedFirstMoment.map((function(e) {
                return e.variable
            }
            ))),
            null != this.accumulatedWeightedInfNorm && to(this.accumulatedWeightedInfNorm.map((function(e) {
                return e.variable
            }
            )))
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    throw new Error("getWeights() is not implemented for Adamax yet.")
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    throw new Error("setWeights() is not implemented for Adamax yet.")
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon,
                decay: this.decay
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)
        }
        ,
        t
    }(fh);
    gh.className = "Adamax",
    Ji(gh);
    var mh = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.learningRate = t,
            n.setLearningRate(t),
            n
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this;
            (Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e)).forEach((function(n, r) {
                var a = Array.isArray(e) ? e[r].tensor : e[n];
                if (null != a) {
                    var i = $r.registeredVariables[n];
                    eo((function() {
                        var e = ro(oo(t.c, a), i);
                        i.assign(e)
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.setLearningRate = function(e) {
            this.learningRate = e,
            null != this.c && this.c.dispose(),
            this.c = no(hl(-e))
        }
        ,
        t.prototype.dispose = function() {
            this.c.dispose()
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [e.sent()]]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        if (0 !== (e = t.sent()).length)
                            throw new Error("SGD optimizer does not have settable weights.");
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate)
        }
        ,
        t
    }(fh);
    mh.className = "SGD",
    Ji(mh);
    var yh = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = !1);
            var a = e.call(this, t) || this;
            return a.learningRate = t,
            a.momentum = n,
            a.useNesterov = r,
            a.accumulations = [],
            a.m = hl(a.momentum),
            a
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this;
            (Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e)).forEach((function(n, r) {
                var a = $r.registeredVariables[n];
                if (null == t.accumulations[r]) {
                    t.accumulations[r] = {
                        originalName: n + "/momentum",
                        variable: eo((function() {
                            return ys(a).variable(false)
                        }
                        ))
                    }
                }
                var i = t.accumulations[r].variable
                  , o = Array.isArray(e) ? e[r].tensor : e[n];
                null != o && eo((function() {
                    var e, n = ro(oo(t.m, i), o);
                    e = t.useNesterov ? ro(oo(t.c, ro(o, oo(n, t.m))), a) : ro(oo(t.c, n), a),
                    i.assign(n),
                    a.assign(e)
                }
                ))
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.dispose = function() {
            this.m.dispose(),
            null != this.accumulations && to(this.accumulations.map((function(e) {
                return e.variable
            }
            )))
        }
        ,
        t.prototype.setMomentum = function(e) {
            this.momentum = e
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.saveIterations()];
                    case 1:
                        return [2, [e.sent()].concat(this.accumulations.map((function(e) {
                            return {
                                name: e.originalName,
                                tensor: e.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = t.sent(),
                        !1,
                        this.accumulations = e.map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(false)
                            }
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                momentum: this.momentum,
                useNesterov: this.useNesterov
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate,t.momentum,t.useNesterov)
        }
        ,
        t
    }(mh);
    yh.className = "Momentum",
    Ji(yh);
    var bh = function(e) {
        function t(t, n, r, a, i) {
            void 0 === n && (n = .9),
            void 0 === r && (r = 0),
            void 0 === a && (a = null),
            void 0 === i && (i = !1);
            var o = e.call(this) || this;
            if (o.learningRate = t,
            o.decay = n,
            o.momentum = r,
            o.epsilon = a,
            o.accumulatedMeanSquares = [],
            o.accumulatedMoments = [],
            o.accumulatedMeanGrads = [],
            o.centered = i,
            null == a && (o.epsilon = $r.backend.epsilon()),
            null == t)
                throw new Error("learningRate for RMSPropOptimizer must be defined.");
            return o
        }
        return i(t, e),
        t.prototype.applyGradients = function(e) {
            var t = this;
            (Array.isArray(e) ? e.map((function(e) {
                return e.name
            }
            )) : Object.keys(e)).forEach((function(n, r) {
                var a = $r.registeredVariables[n]
                  , i = !1;
                null == t.accumulatedMeanSquares[r] && (t.accumulatedMeanSquares[r] = {
                    originalName: n + "/rms",
                    variable: eo((function() {
                        return ys(a).variable(i)
                    }
                    ))
                }),
                null == t.accumulatedMoments[r] && (t.accumulatedMoments[r] = {
                    originalName: n + "/momentum",
                    variable: eo((function() {
                        return ys(a).variable(i)
                    }
                    ))
                }),
                null == t.accumulatedMeanGrads[r] && t.centered && (t.accumulatedMeanGrads[r] = {
                    originalName: n + "/mg",
                    variable: eo((function() {
                        return ys(a).variable(i)
                    }
                    ))
                });
                var o = Array.isArray(e) ? e[r].tensor : e[n];
                if (null != o) {
                    var s = t.accumulatedMeanSquares[r].variable
                      , u = t.accumulatedMoments[r].variable;
                    eo((function() {
                        var e = ro(oo(s, t.decay), oo(bu(o), 1 - t.decay));
                        if (t.centered) {
                            var n = t.accumulatedMeanGrads[r].variable
                              , i = ro(oo(n, t.decay), oo(o, 1 - t.decay))
                              , l = io(oo(o, t.learningRate), Ml(Xs(e, ro(bu(i), t.epsilon))))
                              , c = ro(oo(u, t.momentum), l);
                            s.assign(e),
                            n.assign(i),
                            u.assign(c);
                            var h = Xs(a, c);
                            a.assign(h)
                        } else {
                            var f = ro(oo(s, t.decay), oo(bu(o), 1 - t.decay));
                            c = ro(oo(u, t.momentum), io(oo(o, t.learningRate), Ml(ro(f, t.epsilon))));
                            s.assign(f),
                            u.assign(c);
                            h = Xs(a, c);
                            a.assign(h)
                        }
                    }
                    ))
                }
            }
            )),
            this.incrementIterations()
        }
        ,
        t.prototype.dispose = function() {
            null != this.accumulatedMeanSquares && to(this.accumulatedMeanSquares.map((function(e) {
                return e.variable
            }
            ))),
            null != this.accumulatedMeanGrads && this.centered && to(this.accumulatedMeanGrads.map((function(e) {
                return e.variable
            }
            ))),
            null != this.accumulatedMoments && to(this.accumulatedMoments.map((function(e) {
                return e.variable
            }
            )))
        }
        ,
        t.prototype.getWeights = function() {
            return o(this, void 0, void 0, (function() {
                var e;
                return s(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e = c(this.accumulatedMeanSquares, this.accumulatedMoments),
                        this.centered && e.push.apply(e, c(this.accumulatedMeanGrads)),
                        [4, this.saveIterations()];
                    case 1:
                        return [2, [t.sent()].concat(e.map((function(e) {
                            return {
                                name: e.originalName,
                                tensor: e.variable
                            }
                        }
                        )))]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.setWeights = function(e) {
            return o(this, void 0, void 0, (function() {
                var t, n;
                return s(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.extractIterations(e)];
                    case 1:
                        return e = r.sent(),
                        t = this.centered ? e.length / 3 : e.length / 2,
                        n = !1,
                        this.accumulatedMeanSquares = e.slice(0, t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(n)
                            }
                        }
                        )),
                        this.accumulatedMoments = e.slice(t, 2 * t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(n)
                            }
                        }
                        )),
                        this.centered && (this.accumulatedMeanGrads = e.slice(2 * t, 3 * t).map((function(e) {
                            return {
                                originalName: e.name,
                                variable: e.tensor.variable(n)
                            }
                        }
                        ))),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.getConfig = function() {
            return {
                learningRate: this.learningRate,
                decay: this.decay,
                momentum: this.momentum,
                epsilon: this.epsilon,
                centered: this.centered
            }
        }
        ,
        t.fromConfig = function(e, t) {
            return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)
        }
        ,
        t
    }(fh);
    bh.className = "RMSProp",
    Ji(bh);
    var wh = function() {
        function e() {}
        return e.sgd = function(e) {
            return new mh(e)
        }
        ,
        e.momentum = function(e, t, n) {
            return void 0 === n && (n = !1),
            new yh(e,t,n)
        }
        ,
        e.rmsprop = function(e, t, n, r, a) {
            return void 0 === t && (t = .9),
            void 0 === n && (n = 0),
            void 0 === r && (r = null),
            void 0 === a && (a = !1),
            new bh(e,t,n,r,a)
        }
        ,
        e.adam = function(e, t, n, r) {
            return void 0 === e && (e = .001),
            void 0 === t && (t = .9),
            void 0 === n && (n = .999),
            void 0 === r && (r = null),
            new vh(e,t,n,r)
        }
        ,
        e.adadelta = function(e, t, n) {
            return void 0 === e && (e = .001),
            void 0 === t && (t = .95),
            void 0 === n && (n = null),
            new dh(e,t,n)
        }
        ,
        e.adamax = function(e, t, n, r, a) {
            return void 0 === e && (e = .002),
            void 0 === t && (t = .9),
            void 0 === n && (n = .999),
            void 0 === r && (r = null),
            void 0 === a && (a = 0),
            new gh(e,t,n,r,a)
        }
        ,
        e.adagrad = function(e, t) {
            return void 0 === t && (t = .1),
            new ph(e,t)
        }
        ,
        e
    }()
      , kh = {
        sgd: wh.sgd,
        momentum: wh.momentum,
        adadelta: wh.adadelta,
        adagrad: wh.adagrad,
        rmsprop: wh.rmsprop,
        adamax: wh.adamax,
        adam: wh.adam
    }
      , xh = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setImmediate ? setImmediate : function(e) {
        return e()
    }
    ;
    var Eh = "->"
      , Sh = /->/g;
    function Ah(e, t) {
        for (var n = [], r = 0; r < e.length; ++r)
            0 !== e[r].length && -1 === e[r].indexOf(t) && -1 !== t || n.push(r);
        return n
    }
    var _h = {
        __proto__: null,
        slice_util: Vi,
        segment_util: {
            __proto__: null,
            segOpComputeOptimalWindowSize: function(e, t) {
                var n, r = !1;
                for (e <= 30 ? (n = e,
                r = !0) : n = z(e, Math.floor(Math.sqrt(e))); !r; )
                    n > t || n === e ? r = !0 : n = z(e, n + 1);
                return n
            },
            computeOutShape: function(e, t, n) {
                for (var r = [], a = e.length, i = 0; i < a; i++)
                    i !== t ? r.push(e[i]) : r.push(n);
                return r
            },
            collectGatherOpShapeInfo: function(e, t, n, r) {
                var a = t.shape.length
                  , i = e.shape.length;
                if (0 !== r && (r < -a || r > a))
                    throw new Error("Expect batchDims in the range of [-" + a + ", " + a + "], but got " + r);
                if (r < 0 && (r += a),
                r > i)
                    throw new Error("batchDims (" + r + ") must be less than rank(x) (\n    " + i + ").");
                if (n < r)
                    throw new Error("batchDims (" + r + ") must be less than or equal to axis (" + n + ").");
                for (var o = 0; o < r; ++o)
                    if (e.shape[o] !== t.shape[o])
                        throw new Error("x.shape[" + o + "]: " + e.shape[o] + " should be equal to indices.shape[" + o + "]: " + t.shape[o] + ".");
                var s = e.shape[n]
                  , u = []
                  , l = 1
                  , c = 1
                  , h = 1;
                for (o = 0; o < r; ++o)
                    u.push(e.shape[o]),
                    l *= e.shape[o];
                for (o = r; o < n; o++)
                    u.push(e.shape[o]),
                    c *= e.shape[o];
                for (o = r; o < a; o++)
                    u.push(t.shape[o]);
                for (o = n + 1; o < i; o++)
                    u.push(e.shape[o]),
                    h *= e.shape[o];
                return {
                    batchSize: l,
                    sliceSize: h,
                    outerSize: c,
                    dimSize: s,
                    outputShape: u
                }
            }
        },
        fromUint8ToStringArray: function(e) {
            try {
                return e.map((function(e) {
                    return kr(e)
                }
                ))
            } catch (e) {
                throw new Error("Failed to decode encoded string bytes into utf-8, error: " + e)
            }
        },
        fromStringArrayToUint8: function(e) {
            return e.map((function(e) {
                return wr(e)
            }
            ))
        },
        upcastType: Kr,
        axesAreInnerMostDims: eu,
        combineLocations: tu,
        computeOutAndReduceShapes: function(e, t) {
            for (var n = [], r = e.length, a = 0; a < r; a++)
                -1 === t.indexOf(a) && n.push(e[a]);
            return [n, t.map((function(t) {
                return e[t]
            }
            ))]
        },
        expandShapeToKeepDim: nu,
        assertAxesAreInnerMostDims: function(e, t, n) {
            m(eu(t, n), (function() {
                return e + " supports only inner-most axes for now. Got axes " + t + " and rank-" + n + " input."
            }
            ))
        },
        getAxesPermutation: function(e, t) {
            if (eu(e, t))
                return null;
            for (var n = [], r = 0; r < t; ++r)
                -1 === e.indexOf(r) && n.push(r);
            return e.forEach((function(e) {
                return n.push(e)
            }
            )),
            n
        },
        getUndoAxesPermutation: function(e) {
            return e.map((function(e, t) {
                return [t, e]
            }
            )).sort((function(e, t) {
                return e[1] - t[1]
            }
            )).map((function(e) {
                return e[0]
            }
            ))
        },
        getInnerMostAxes: function(e, t) {
            for (var n = [], r = t - e; r < t; ++r)
                n.push(r);
            return n
        },
        getBroadcastDims: ki,
        getReductionAxes: xi,
        assertAndGetBroadcastShape: Ei,
        assertParamsConsistent: function(e, t) {
            var n = e[0].length;
            e.forEach((function(e, t) {
                m(e.length === n, (function() {
                    return "Error in concat" + n + "D: rank of tensors[" + t + "] must be the same as the rank of the rest (" + n + ")"
                }
                ))
            }
            )),
            m(t >= 0 && t < n, (function() {
                return "Error in concat" + n + "D: axis must be between 0 and " + (n - 1) + "."
            }
            ));
            var r = e[0];
            e.forEach((function(e, a) {
                for (var i = 0; i < n; i++)
                    m(i === t || e[i] === r[i], (function() {
                        return "Error in concat" + n + "D: Shape of tensors[" + a + "] (" + e + ") does not match the shape of the rest (" + r + ") along the non-concatenated axis " + a + "."
                    }
                    ))
            }
            ))
        },
        computeOutShape: function(e, t) {
            for (var n = e[0].slice(), r = 1; r < e.length; r++)
                n[t] += e[r][t];
            return n
        },
        computeDilation2DInfo: function(e, t, n, r, a, i) {
            return void 0 === a && (a = "NHWC"),
            xo(e, c(t, [e[3]]), n, i, r, null, null, Do(a))
        },
        computePool2DInfo: ko,
        computePool3DInfo: function(e, t, n, r, a, i, o) {
            void 0 === o && (o = "NDHWC");
            var s, u, c = l(_o(t), 3), h = c[0], f = c[1], d = c[2];
            if ("NDHWC" === o)
                u = "channelsLast",
                s = [h, f, d, e[4], e[4]];
            else {
                if ("NCDHW" !== o)
                    throw new Error("Unknown dataFormat " + o);
                u = "channelsFirst",
                s = [h, f, d, e[1], e[1]]
            }
            return Eo(e, s, n, r, a, !1, u, i)
        },
        computeConv2DInfo: xo,
        computeConv3DInfo: Eo,
        computeDefaultPad: So,
        tupleValuesAreOne: No,
        eitherStridesOrDilationsAreOne: To,
        convertConv2DDataFormat: Do,
        checkPadOnDimRoundingMode: Ro,
        getFusedDyActivation: nc,
        getFusedBiasGradient: rc,
        applyActivation: ac,
        shouldFuse: ic,
        PARALLELIZE_THRESHOLD: 30,
        computeOptimalWindowSize: function(e) {
            return e <= 30 ? e : z(e, Math.floor(Math.sqrt(e)))
        },
        getImageCenter: function(e, t, n) {
            return [n * ("number" == typeof e ? e : e[0]), t * ("number" == typeof e ? e : e[1])]
        },
        getReshaped: function(e, t, n, r) {
            void 0 === r && (r = !0);
            var a = [];
            if (r)
                (a = a.concat(t.slice(0))).push(e[0] / n),
                a = a.concat(e.slice(1));
            else {
                a = a.concat(e[0]);
                for (var i = t.length, o = 0; o < i; ++o)
                    a = a.concat([e[o + 1] / t[o], t[o]]);
                a = a.concat(e.slice(i + 1))
            }
            return a
        },
        getPermuted: function(e, t, n) {
            void 0 === n && (n = !0);
            var r = [];
            if (n) {
                r.push(t);
                for (var a = t + 1; a < e; ++a)
                    a <= 2 * t ? (r.push(a),
                    r.push(a - (t + 1))) : r.push(a)
            } else {
                var i = []
                  , o = [];
                for (a = 1; a < e; ++a)
                    a >= 2 * t + 1 || a % 2 == 1 ? o.push(a) : i.push(a);
                r.push.apply(r, c(i)),
                r.push(0),
                r.push.apply(r, c(o))
            }
            return r
        },
        getReshapedPermuted: function(e, t, n, r) {
            void 0 === r && (r = !0);
            var a = [];
            r ? a.push(e[0] / n) : a.push(e[0] * n);
            for (var i = 1; i < e.length; ++i)
                i <= t.length ? r ? a.push(t[i - 1] * e[i]) : a.push(e[i] / t[i - 1]) : a.push(e[i]);
            return a
        },
        getSliceBeginCoords: function(e, t) {
            for (var n = [0], r = 0; r < t; ++r)
                n.push(e[r][0]);
            return n
        },
        getSliceSize: function(e, t, n) {
            for (var r = e.slice(0, 1), a = 0; a < n; ++a)
                r.push(e[a + 1] - t[a][0] - t[a][1]);
            return r
        },
        prepareAndValidate: Ti,
        validateUpdateShape: Ri,
        validateInput: Bi,
        calculateShapes: Fi,
        SELU_SCALEALPHA: 1.7580993408473768,
        SELU_SCALE: 1.0507009873554805,
        ERF_P: .3275911,
        ERF_A1: .254829592,
        ERF_A2: -.284496736,
        ERF_A3: 1.421413741,
        ERF_A4: -1.453152027,
        ERF_A5: 1.061405429,
        warn: In,
        log: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            $().getBool("IS_TEST") || $().getBool("PROD") || console.log.apply(console, c(e))
        },
        mergeRealAndImagArrays: function(e, t) {
            if (e.length !== t.length)
                throw new Error("Cannot merge real and imag arrays of different lengths. real:" + e.length + ", imag: " + t.length + ".");
            for (var n = new Float32Array(2 * e.length), r = 0; r < n.length; r += 2)
                n[r] = e[r / 2],
                n[r + 1] = t[r / 2];
            return n
        },
        splitRealAndImagArrays: function(e) {
            for (var t = new Float32Array(e.length / 2), n = new Float32Array(e.length / 2), r = 0; r < e.length; r += 2)
                t[r / 2] = e[r],
                n[r / 2] = e[r + 1];
            return {
                real: t,
                imag: n
            }
        },
        complexWithEvenIndex: function(e) {
            for (var t = Math.ceil(e.length / 4), n = new Float32Array(t), r = new Float32Array(t), a = 0; a < e.length; a += 4)
                n[Math.floor(a / 4)] = e[a],
                r[Math.floor(a / 4)] = e[a + 1];
            return {
                real: n,
                imag: r
            }
        },
        complexWithOddIndex: function(e) {
            for (var t = Math.floor(e.length / 4), n = new Float32Array(t), r = new Float32Array(t), a = 2; a < e.length; a += 4)
                n[Math.floor(a / 4)] = e[a],
                r[Math.floor(a / 4)] = e[a + 1];
            return {
                real: n,
                imag: r
            }
        },
        getComplexWithIndex: function(e, t) {
            return {
                real: e[2 * t],
                imag: e[2 * t + 1]
            }
        },
        assignToTypedArray: function(e, t, n, r) {
            e[2 * r] = t,
            e[2 * r + 1] = n
        },
        exponents: function(e, t) {
            for (var n = new Float32Array(e / 2), r = new Float32Array(e / 2), a = 0; a < Math.ceil(e / 2); a++) {
                var i = (t ? 2 : -2) * Math.PI * (a / e);
                n[a] = Math.cos(i),
                r[a] = Math.sin(i)
            }
            return {
                real: n,
                imag: r
            }
        },
        exponent: function(e, t, n) {
            var r = (n ? 2 : -2) * Math.PI * (e / t);
            return {
                real: Math.cos(r),
                imag: Math.sin(r)
            }
        },
        decodeEinsumEquation: function(e, t) {
            var n = ((e = e.replace(/\s/g, "")).length - e.replace(Sh, "").length) / Eh.length;
            if (n < 1)
                throw new Error("Equations without an arrow are not supported.");
            if (n > 1)
                throw new Error('Equation must contain exactly one arrow ("->").');
            var r = l(e.split(Eh), 2)
              , a = r[0]
              , i = r[1];
            m(-1 === a.indexOf("..."), (function() {
                return 'The ellipsis notation ("...") is not supported yet.'
            }
            ));
            var o = a.split(",")
              , s = o.length;
            if (t !== s)
                throw new Error("Expected " + s + " input tensors, received " + t);
            if (s > 2)
                throw new Error("Support for more than 2 input tensors is not implemented yet.");
            for (var u = [], c = function(e) {
                var t = i[e];
                if (!o.some((function(e) {
                    return -1 !== e.indexOf(t)
                }
                )))
                    throw new Error("Output subscripts contain the label " + t + " not present in the input subscripts.");
                -1 === u.indexOf(t) && u.push(t)
            }, h = 0; h < i.length; ++h)
                c(h);
            for (h = 0; h < a.length; ++h) {
                var f = a[h];
                -1 === u.indexOf(f) && "," !== f && u.push(f)
            }
            var d = new Array(o.length);
            for (h = 0; h < s; ++h) {
                if (new Set(o[h].split("")).size !== o[h].length)
                    throw new Error("Found duplicate axes in input component " + o[h] + ". Support for duplicate axes in input is not implemented yet.");
                d[h] = [];
                for (var p = 0; p < o[h].length; ++p)
                    d[h].push(u.indexOf(o[h][p]))
            }
            var v = u.length
              , g = [];
            for (h = i.length; h < v; ++h)
                g.push(h);
            return {
                allDims: u,
                summedDims: g,
                idDims: d
            }
        },
        getEinsumPermutation: function(e, t) {
            var n = new Array(e);
            n.fill(-1);
            for (var r = 0; r < t.length; ++r)
                n[t[r]] = r;
            var a = [];
            for (r = 0; r < e; ++r)
                -1 === n[r] && a.push(r);
            return {
                permutationIndices: n = n.filter((function(e) {
                    return -1 !== e
                }
                )),
                expandDims: a
            }
        },
        checkEinsumDimSizes: function(e, t, n) {
            for (var r = new Array(e), a = function(e) {
                for (var a = n[e].shape, i = function(n) {
                    void 0 === r[t[e][n]] ? r[t[e][n]] = a[n] : m(r[t[e][n]] === a[n], (function() {
                        return "Expected dimension " + r[t[e][n]] + " at axis " + n + " of input shaped " + JSON.stringify(a) + ", but got dimension " + a[n]
                    }
                    ))
                }, o = 0; o < t[e].length; ++o)
                    i(o)
            }, i = 0; i < n.length; ++i)
                a(i)
        },
        getEinsumComputePath: function(e, t) {
            var n, r, a, i = e, o = [];
            0 === e.length && i.push(-1),
            a = e.length + 1;
            for (var s = 0; s < a; ++s)
                o.push([]);
            var l = [];
            for (s = 0; s < i.length; ++s) {
                var c = Ah(t, i[s]);
                try {
                    for (var h = (n = void 0,
                    u(c)), f = h.next(); !f.done; f = h.next()) {
                        var d = f.value;
                        -1 === l.indexOf(d) && (o[s].push(d),
                        l.push(d))
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        f && !f.done && (r = h.return) && r.call(h)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            return {
                path: i,
                steps: o
            }
        },
        isIdentityPermutation: function(e) {
            return e.every((function(e, t) {
                return e === t
            }
            ))
        },
        prepareSplitSize: function(e, t, n) {
            void 0 === n && (n = 0);
            var r = [];
            if ("number" == typeof t)
                m(e.shape[n] % t == 0, (function() {
                    return "Number of splits must evenly divide the axis."
                }
                )),
                r = new Array(t).fill(e.shape[n] / t);
            else {
                m(t.reduce((function(e, t) {
                    return -1 === t && (e += 1),
                    e
                }
                ), 0) <= 1, (function() {
                    return "There should be only one negative value in split array."
                }
                ));
                var a = t.indexOf(-1);
                if (-1 !== a) {
                    var i = t.reduce((function(e, t) {
                        return t > 0 ? e + t : e
                    }
                    ));
                    t[a] = e.shape[n] - i
                }
                m(e.shape[n] === t.reduce((function(e, t) {
                    return e + t
                }
                )), (function() {
                    return "The sum of sizes must match the size of the axis dimension."
                }
                )),
                r = t
            }
            return r
        },
        getSparseFillEmptyRowsIndicesDenseShapeMismatch: function(e) {
            return "Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = " + e
        },
        getSparseFillEmptyRowsNegativeIndexErrorMessage: function(e, t) {
            return "indices(" + e + ", 0) is invalid: " + t + " < 0"
        },
        getSparseFillEmptyRowsOutOfRangeIndexErrorMessage: function(e, t, n) {
            return "indices(" + e + ", 0) is invalid: " + t + " >= " + n
        },
        getSparseReshapeMultipleNegativeOneOutputDimErrorMessage: function(e, t) {
            return "only one output dimension may be -1, not both " + e + " and " + t
        },
        getSparseReshapeNegativeOutputDimErrorMessage: function(e, t) {
            return "size " + e + " must be non-negative, not " + t
        },
        getSparseReshapeEmptyTensorZeroOutputDimErrorMessage: function() {
            return "reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"
        },
        getSparseReshapeInputOutputMultipleErrorMessage: function(e, t) {
            return "Input to reshape is a SparseTensor with " + k(e) + "\n  dense values, but the requested shape requires a multiple of " + k(t) + ". inputShape=" + e + " outputShape= " + t
        },
        getSparseReshapeInputOutputMismatchErrorMessage: function(e, t) {
            return "Input to reshape is a tensor with " + k(e) + " dense values, but the requested shape has " + k(t) + ". inputShape=" + e + " outputShape=" + t
        },
        getSparseSegmentReductionNegativeSegmentIdsErrorMessage: function() {
            return "segment ids must be >= 0"
        },
        getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage: function() {
            return "segment ids are not increasing"
        },
        getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage: function(e, t) {
            return "Segment id " + e + " out of range [0, " + t + "), possibly because segmentIds input is not sorted."
        },
        getSparseSegmentReductionIndicesOutOfRangeErrorMessage: function(e, t, n) {
            return "Bad: indices[" + e + "] == " + t + " out of range [0, " + n + ")"
        }
    }
      , Ih = {
        __proto__: null,
        nonMaxSuppressionV3Impl: xc,
        nonMaxSuppressionV4Impl: Ec,
        nonMaxSuppressionV5Impl: Sc,
        whereImpl: Wl
    };
    e.Abs = "Abs",
    e.Acos = te,
    e.Acosh = ne,
    e.AdadeltaOptimizer = dh,
    e.AdagradOptimizer = ph,
    e.AdamOptimizer = vh,
    e.AdamaxOptimizer = gh,
    e.Add = re,
    e.AddN = ae,
    e.All = "All",
    e.Any = "Any",
    e.ArgMax = ie,
    e.ArgMin = oe,
    e.Asin = se,
    e.Asinh = ue,
    e.Atan = le,
    e.Atan2 = he,
    e.Atanh = ce,
    e.AvgPool = fe,
    e.AvgPool3D = de,
    e.AvgPool3DGrad = "AvgPool3DGrad",
    e.AvgPoolGrad = "AvgPoolGrad",
    e.BatchMatMul = pe,
    e.BatchToSpaceND = ve,
    e.Bincount = ge,
    e.BroadcastArgs = me,
    e.BroadcastTo = "BroadcastTo",
    e.Cast = ye,
    e.Ceil = be,
    e.ClipByValue = we,
    e.Complex = ke,
    e.ComplexAbs = xe,
    e.Concat = Ee,
    e.Conv2D = Se,
    e.Conv2DBackpropFilter = Ae,
    e.Conv2DBackpropInput = _e,
    e.Conv3D = Ie,
    e.Conv3DBackpropFilterV2 = "Conv3DBackpropFilterV2",
    e.Conv3DBackpropInputV2 = Me,
    e.Cos = "Cos",
    e.Cosh = Ne,
    e.CropAndResize = De,
    e.Cumsum = Te,
    e.DataStorage = h,
    e.DenseBincount = Re,
    e.DepthToSpace = Be,
    e.DepthwiseConv2dNative = Fe,
    e.DepthwiseConv2dNativeBackpropFilter = Ce,
    e.DepthwiseConv2dNativeBackpropInput = Pe,
    e.Diag = Oe,
    e.Dilation2D = Le,
    e.Dilation2DBackpropFilter = "Dilation2DBackpropFilter",
    e.Dilation2DBackpropInput = "Dilation2DBackpropInput",
    e.Einsum = qe,
    e.Elu = "Elu",
    e.EluGrad = "EluGrad",
    e.Environment = Z,
    e.Equal = Ke,
    e.Erf = "Erf",
    e.Exp = "Exp",
    e.ExpandDims = We,
    e.Expm1 = Ge,
    e.FFT = "FFT",
    e.Fill = Ue,
    e.FlipLeftRight = Ve,
    e.Floor = He,
    e.FloorDiv = je,
    e.FromPixels = xn,
    e.FusedBatchNorm = Je,
    e.FusedConv2D = An,
    e.FusedDepthwiseConv2D = _n,
    e.GatherNd = Ye,
    e.GatherV2 = Ze,
    e.Greater = Xe,
    e.GreaterEqual = $e,
    e.IFFT = et,
    e.Identity = Qe,
    e.Imag = tt,
    e.IsFinite = nt,
    e.IsInf = rt,
    e.IsNan = at,
    e.KernelBackend = f,
    e.LRN = "LRN",
    e.LRNGrad = "LRNGrad",
    e.LeakyRelu = it,
    e.Less = ot,
    e.LessEqual = st,
    e.LinSpace = ut,
    e.Log = "Log",
    e.Log1p = lt,
    e.LogSoftmax = "LogSoftmax",
    e.LogicalAnd = ct,
    e.LogicalNot = ht,
    e.LogicalOr = ft,
    e.Max = "Max",
    e.MaxPool = pt,
    e.MaxPool3D = vt,
    e.MaxPool3DGrad = "MaxPool3DGrad",
    e.MaxPoolGrad = "MaxPoolGrad",
    e.MaxPoolWithArgmax = gt,
    e.Maximum = dt,
    e.Mean = mt,
    e.Min = "Min",
    e.Minimum = yt,
    e.MirrorPad = bt,
    e.Mod = "Mod",
    e.MomentumOptimizer = yh,
    e.Multinomial = wt,
    e.Multiply = kt,
    e.Neg = "Neg",
    e.NonMaxSuppressionV3 = Et,
    e.NonMaxSuppressionV4 = St,
    e.NonMaxSuppressionV5 = At,
    e.NotEqual = xt,
    e.OP_SCOPE_SUFFIX = ua,
    e.OneHot = It,
    e.OnesLike = _t,
    e.Optimizer = fh,
    e.OptimizerConstructors = wh,
    e.Pack = Mt,
    e.PadV2 = Nt,
    e.Pool = "Pool",
    e.Pow = "Pow",
    e.Prelu = Tt,
    e.Prod = Dt,
    e.RMSPropOptimizer = bh,
    e.Range = Rt,
    e.Real = Bt,
    e.RealDiv = ze,
    e.Reciprocal = Ft,
    e.Relu = Ct,
    e.Relu6 = zt,
    e.Reshape = Pt,
    e.ResizeBilinear = Lt,
    e.ResizeBilinearGrad = "ResizeBilinearGrad",
    e.ResizeNearestNeighbor = Ot,
    e.ResizeNearestNeighborGrad = "ResizeNearestNeighborGrad",
    e.Reverse = qt,
    e.RotateWithOffset = En,
    e.Round = Kt,
    e.Rsqrt = Wt,
    e.SGDOptimizer = mh,
    e.ScatterNd = Gt,
    e.Select = Ut,
    e.Selu = Vt,
    e.Sigmoid = Zt,
    e.Sign = Jt,
    e.Sin = "Sin",
    e.Sinh = jt,
    e.Slice = Ht,
    e.Softmax = en,
    e.Softplus = Yt,
    e.SpaceToBatchND = $t,
    e.SparseFillEmptyRows = tn,
    e.SparseReshape = nn,
    e.SparseSegmentMean = rn,
    e.SparseSegmentSum = an,
    e.SparseToDense = on,
    e.SplitV = Qt,
    e.Sqrt = Xt,
    e.Square = "Square",
    e.SquaredDifference = sn,
    e.Step = kn,
    e.StridedSlice = un,
    e.StringNGrams = ln,
    e.StringSplit = cn,
    e.StringToHashBucketFast = hn,
    e.Sub = "Sub",
    e.Sum = "Sum",
    e.Tan = "Tan",
    e.Tanh = fn,
    e.Tensor = Br,
    e.TensorBuffer = Tr,
    e.Tile = dn,
    e.TopK = pn,
    e.Transform = vn,
    e.Transpose = gn,
    e.Unique = mn,
    e.Unpack = yn,
    e.UnsortedSegmentSum = bn,
    e.Variable = zr,
    e.ZerosLike = wn,
    e._FusedMatMul = Sn,
    e.abs = so,
    e.acos = uo,
    e.acosh = lo,
    e.add = ro,
    e.addN = co,
    e.all = ho,
    e.any = fo,
    e.argMax = po,
    e.argMin = vo,
    e.asin = go,
    e.asinh = mo,
    e.atan = yo,
    e.atan2 = bo,
    e.atanh = wo,
    e.avgPool = Fo,
    e.avgPool3d = Co,
    e.backend = function() {
        return $r.backend
    }
    ,
    e.backend_util = _h,
    e.basicLSTMCell = qo,
    e.batchNorm = Wo,
    e.batchNorm2d = Go,
    e.batchNorm3d = Uo,
    e.batchNorm4d = Vo,
    e.batchToSpaceND = Ko,
    e.bincount = Ho,
    e.booleanMaskAsync = Ul,
    e.broadcastArgs = jo,
    e.broadcastTo = Jo,
    e.broadcast_util = Ai,
    e.browser = Ni,
    e.buffer = ei,
    e.cast = ti,
    e.ceil = Zo,
    e.clipByValue = Yo,
    e.clone = ni,
    e.complex = ca,
    e.concat = Po,
    e.concat1d = Xo,
    e.concat2d = $o,
    e.concat3d = Qo,
    e.concat4d = es,
    e.conv1d = ns,
    e.conv2d = ts,
    e.conv2dTranspose = as,
    e.conv3d = is,
    e.conv3dTranspose = ss,
    e.copyRegisteredKernels = function(e, t) {
        Rn(e).forEach((function(e) {
            Bn(Object.assign({}, e, {
                backendName: t
            }))
        }
        ))
    }
    ,
    e.cos = us,
    e.cosh = ls,
    e.cosineWindow = Ql,
    e.cumsum = cs,
    e.customGrad = Vs,
    e.denseBincount = hs,
    e.deprecationWarn = function(e) {
        $().getBool("DEPRECATION_WARNINGS_ENABLED") && console.warn(e + " You can disable deprecation warnings with tf.disableDeprecationWarnings().")
    }
    ,
    e.depthToSpace = fs,
    e.depthwiseConv2d = ds,
    e.device_util = ta,
    e.diag = ps,
    e.dilation2d = vs,
    e.disableDeprecationWarnings = function() {
        $().set("DEPRECATION_WARNINGS_ENABLED", !1),
        console.warn("TensorFlow.js deprecation warnings have been disabled.")
    }
    ,
    e.dispose = to,
    e.disposeVariables = function() {
        $r.disposeVariables()
    }
    ,
    e.div = io,
    e.divNoNan = bs,
    e.dot = ws,
    e.dropout = Xl,
    e.einsum = ks,
    e.elu = xs,
    e.enableDebugMode = function() {
        $().set("DEBUG", !0)
    }
    ,
    e.enableProdMode = function() {
        $().set("PROD", !0)
    }
    ,
    e.enclosingPowerOfTwo = $l,
    e.engine = function() {
        return $r
    }
    ,
    e.env = $,
    e.equal = gs,
    e.erf = Es,
    e.exp = Ss,
    e.expandDims = As,
    e.expm1 = _s,
    e.eye = Ms,
    e.fft = El,
    e.fill = Ns,
    e.findBackend = function(e) {
        return $r.findBackend(e)
    }
    ,
    e.findBackendFactory = function(e) {
        return $r.findBackendFactory(e)
    }
    ,
    e.floor = Ts,
    e.floorDiv = ao,
    e.fused = lc,
    e.gather = Ds,
    e.gatherND = Yl,
    e.gather_util = Di,
    e.getBackend = function() {
        return $r.backendName
    }
    ,
    e.getGradient = Dn,
    e.getKernel = Tn,
    e.getKernelsForBackend = Rn,
    e.grad = function(e) {
        return m(L(e), (function() {
            return "The f passed in grad(f) must be a function"
        }
        )),
        function(t, n) {
            var r = oa(t, "x", "tf.grad", "string_or_numeric")
              , a = null != n ? oa(n, "dy", "tf.grad") : null;
            return $r.tidy((function() {
                var t = $r.gradients((function() {
                    return e(r)
                }
                ), [r], a)
                  , n = t.value
                  , i = t.grads;
                return null != a && y(n.shape, a.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),
                Hs(i),
                i[0]
            }
            ))
        }
    }
    ,
    e.grads = function(e) {
        return m(L(e), (function() {
            return "The f passed in grads(f) must be a function"
        }
        )),
        function(t, n) {
            m(Array.isArray(t), (function() {
                return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"
            }
            ));
            var r = sa(t, "args", "tf.grads", "string_or_numeric")
              , a = null != n ? oa(n, "dy", "tf.grads") : null;
            return $r.tidy((function() {
                var t = $r.gradients((function() {
                    return e.apply(void 0, c(r))
                }
                ), r, a)
                  , n = t.value
                  , i = t.grads;
                return null != a && y(n.shape, a.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),
                Hs(i),
                i
            }
            ))
        }
    }
    ,
    e.greater = Rs,
    e.greaterEqual = Bs,
    e.ifft = Sl,
    e.imag = Fs,
    e.image = sh,
    e.inTopKAsync = ec,
    e.io = gi,
    e.irfft = Al,
    e.isFinite = Cs,
    e.isInf = Ps,
    e.isNaN = Os,
    e.keep = no,
    e.kernel_impls = Ih,
    e.leakyRelu = Ls,
    e.less = zs,
    e.lessEqual = qs,
    e.linalg = uh,
    e.linspace = function(e, t, n) {
        if (n <= 0)
            throw new Error("The number of values should be positive.");
        var r = {
            start: e,
            stop: t,
            num: n
        };
        return $r.runKernel(ut, {}, r)
    }
    ,
    e.localResponseNormalization = Ks,
    e.log = Ws,
    e.log1p = Gs,
    e.logSigmoid = Zs,
    e.logSoftmax = Qs,
    e.logSumExp = ru,
    e.logicalAnd = au,
    e.logicalNot = iu,
    e.logicalOr = ou,
    e.logicalXor = su,
    e.losses = lh,
    e.matMul = mi,
    e.math = wi,
    e.max = Ys,
    e.maxPool = uu,
    e.maxPool3d = lu,
    e.maxPoolWithArgmax = cu,
    e.maximum = hu,
    e.mean = fu,
    e.memory = function() {
        return $r.memory()
    }
    ,
    e.meshgrid = function(e, t, n) {
        var r = (void 0 === n ? {} : n).indexing
          , a = void 0 === r ? "xy" : r;
        if ("xy" !== a && "ij" !== a)
            throw new TypeError(a + " is not a valid third argument to meshgrid");
        if (void 0 === e)
            return [];
        var i = oa(e, "x", "meshgrid", e instanceof Br ? e.dtype : "float32");
        if (void 0 === t)
            return [i];
        var o = oa(t, "y", "meshgrid", t instanceof Br ? t.dtype : "float32")
          , s = k(i.shape)
          , u = k(o.shape);
        return "xy" === a ? (i = Bo(i, [1, -1]),
        o = Bo(o, [-1, 1]),
        [mi(pu([u, 1], i.dtype), i), mi(o, pu([1, s], o.dtype))]) : (i = Bo(i, [-1, 1]),
        o = Bo(o, [1, -1]),
        [mi(i, pu([1, u], i.dtype)), mi(pu([s, 1], o.dtype), o)])
    }
    ,
    e.min = vu,
    e.minimum = gu,
    e.mirrorPad = mu,
    e.mod = yu,
    e.moments = wu,
    e.movingAverage = jl,
    e.mul = oo,
    e.multiRNNCell = ku,
    e.multinomial = xu,
    e.neg = js,
    e.nextFrame = function() {
        return new Promise((function(e) {
            return xh((function() {
                return e()
            }
            ))
        }
        ))
    }
    ,
    e.norm = Hl,
    e.notEqual = Eu,
    e.oneHot = yi,
    e.ones = pu,
    e.onesLike = Su,
    e.op = la,
    e.outerProduct = Au,
    e.pad = _u,
    e.pad1d = Iu,
    e.pad2d = Mu,
    e.pad3d = Nu,
    e.pad4d = Tu,
    e.pool = Ru,
    e.pow = Bu,
    e.prelu = Fu,
    e.print = ri,
    e.prod = Cu,
    e.profile = function(e) {
        return $r.profile(e)
    }
    ,
    e.rand = Pu,
    e.randomGamma = Yu,
    e.randomNormal = Xu,
    e.randomUniform = $u,
    e.range = Qu,
    e.ready = function() {
        return $r.ready()
    }
    ,
    e.real = el,
    e.reciprocal = tl,
    e.registerBackend = function(e, t, n) {
        return void 0 === n && (n = 1),
        $r.registerBackend(e, t, n)
    }
    ,
    e.registerGradient = function(e) {
        var t = e.kernelName;
        Nn.has(t) && $().getBool("DEBUG") && In("Overriding the gradient for '" + t + "'"),
        Nn.set(t, e)
    }
    ,
    e.registerKernel = Bn,
    e.relu = nl,
    e.relu6 = rl,
    e.removeBackend = function(e) {
        $r.removeBackend(e)
    }
    ,
    e.reshape = Bo,
    e.reverse = al,
    e.reverse1d = il,
    e.reverse2d = ol,
    e.reverse3d = sl,
    e.reverse4d = ul,
    e.rfft = Il,
    e.round = ll,
    e.rsqrt = cl,
    e.scalar = hl,
    e.scatterND = Jl,
    e.scatter_util = Ci,
    e.selu = fl,
    e.separableConv2d = dl,
    e.serialization = Zi,
    e.setBackend = function(e) {
        return $r.setBackend(e)
    }
    ,
    e.setPlatform = function(e, t) {
        $().setPlatform(e, t)
    }
    ,
    e.setdiff1dAsync = pl,
    e.sigmoid = Oo,
    e.sign = vl,
    e.signal = oh,
    e.sin = gl,
    e.sinh = ml,
    e.slice = Lo,
    e.slice1d = yl,
    e.slice2d = bl,
    e.slice3d = wl,
    e.slice4d = kl,
    e.slice_util = Vi,
    e.softmax = xl,
    e.softplus = Js,
    e.spaceToBatchND = Du,
    e.sparse = ch,
    e.sparseToDense = Zl,
    e.spectral = ih,
    e.split = _l,
    e.sqrt = Ml,
    e.square = bu,
    e.squaredDifference = Nl,
    e.squeeze = Tl,
    e.stack = Dl,
    e.step = Rl,
    e.stridedSlice = Bl,
    e.string = hh,
    e.sub = Xs,
    e.sum = $s,
    e.sumOutType = function(e) {
        return Kr(e, "int32")
    }
    ,
    e.tan = Fl,
    e.tanh = zo,
    e.tensor = fa,
    e.tensor1d = Cl,
    e.tensor2d = Pl,
    e.tensor3d = _i,
    e.tensor4d = function(e, t, n) {
        if (b(e),
        null != t && 4 !== t.length)
            throw new Error("tensor4d() requires shape to have four numbers");
        var r = ra(e, n);
        if (4 !== r.length && 1 !== r.length)
            throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
        if (1 === r.length && null == t)
            throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
        return ha(e, t, r, n)
    }
    ,
    e.tensor5d = function(e, t, n) {
        if (b(e),
        null != t && 5 !== t.length)
            throw new Error("tensor5d() requires shape to have five numbers");
        var r = ra(e, n);
        if (5 !== r.length && 1 !== r.length)
            throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
        if (1 === r.length && null == t)
            throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
        return ha(e, t, r, n)
    }
    ,
    e.tensor6d = function(e, t, n) {
        if (b(e),
        null != t && 6 !== t.length)
            throw new Error("tensor6d() requires shape to have six numbers");
        var r = ra(e, n);
        if (6 !== r.length && 1 !== r.length)
            throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
        if (1 === r.length && null == t)
            throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
        return ha(e, t = t || r, r, n)
    }
    ,
    e.tensor_util = Hr,
    e.test_util = Qi,
    e.tidy = eo,
    e.tile = Is,
    e.time = function(e) {
        return $r.time(e)
    }
    ,
    e.topk = Ol,
    e.train = kh,
    e.transpose = bi,
    e.truncatedNormal = Ll,
    e.unique = zl,
    e.unregisterGradient = function(e) {
        if (!Nn.has(e))
            throw new Error("The gradient '" + e + "' for backend is not registered");
        Nn.delete(e)
    }
    ,
    e.unregisterKernel = function(e, t) {
        var n = Fn(e, t);
        if (!Mn.has(n))
            throw new Error("The kernel '" + e + "' for backend '" + t + "' is not registered");
        Mn.delete(n)
    }
    ,
    e.unsortedSegmentSum = ql,
    e.unstack = Kl,
    e.upcastType = Kr,
    e.util = xr,
    e.valueAndGrad = function(e) {
        return m(L(e), (function() {
            return "The f passed in valueAndGrad(f) must be a function"
        }
        )),
        function(t, n) {
            m(t instanceof Br, (function() {
                return "The x passed in valueAndGrad(f)(x) must be a tensor"
            }
            )),
            m(null == n || n instanceof Br, (function() {
                return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"
            }
            ));
            var r = $r.gradients((function() {
                return e(t)
            }
            ), [t], n)
              , a = r.grads
              , i = r.value;
            return Hs(a),
            {
                grad: a[0],
                value: i
            }
        }
    }
    ,
    e.valueAndGrads = function(e) {
        return m(L(e), (function() {
            return "The f passed in valueAndGrads(f) must be a function"
        }
        )),
        function(t, n) {
            m(Array.isArray(t) && t.every((function(e) {
                return e instanceof Br
            }
            )), (function() {
                return "The args passed in valueAndGrads(f)(args) must be array of tensors"
            }
            )),
            m(null == n || n instanceof Br, (function() {
                return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"
            }
            ));
            var r = $r.gradients((function() {
                return e.apply(void 0, c(t))
            }
            ), t, n);
            return null != n && y(r.value.shape, n.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),
            Hs(r.grads),
            r
        }
    }
    ,
    e.variable = function(e, t, n, r) {
        return void 0 === t && (t = !0),
        $r.makeVariable(e, t, n, r)
    }
    ,
    e.variableGrads = Us,
    e.version_core = "3.13.0",
    e.where = ms,
    e.whereAsync = Gl,
    e.zeros = du,
    e.zerosLike = ys,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=tf-core.min.js.map
