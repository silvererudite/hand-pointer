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
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-core"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).tf = e.tf || {}, e.tf)
}(this, (function(e, t) {
    "use strict";
    function n(e) {
        if (e && e.__esModule)
            return e;
        var t = Object.create(null);
        return e && Object.keys(e).forEach((function(n) {
            if ("default" !== n) {
                var r = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(t, n, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            }
        }
        )),
        t.default = e,
        t
    }
    var r = n(t);
    t.env().registerFlag("KEEP_INTERMEDIATE_TENSORS", (function() {
        return !1
    }
    ), (function(e) {
        e && console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")
    }
    ));
    var a, s, o = function(e, t) {
        return (o = Object.setPrototypeOf || {
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
    function i(e, t, n, r) {
        return new (n || (n = Promise))((function(a, s) {
            function o(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    s(e)
                }
            }
            function i(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    s(e)
                }
            }
            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(o, i)
            }
            u((r = r.apply(e, t || [])).next())
        }
        ))
    }
    function u(e, t) {
        var n, r, a, s, o = {
            label: 0,
            sent: function() {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: i(0),
            throw: i(1),
            return: i(2)
        },
        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }
        ),
        s;
        function i(s) {
            return function(i) {
                return function(s) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (n = 1,
                            r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r),
                            0) : r.next) && !(a = a.call(r, s[1])).done)
                                return a;
                            switch (r = 0,
                            a && (s = [2 & s[0], a.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                a = s;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                r = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!(a = o.trys,
                                (a = a.length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < a[1]) {
                                    o.label = a[1],
                                    a = s;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2],
                                    o.ops.push(s);
                                    break
                                }
                                a[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            s = t.call(e, o)
                        } catch (e) {
                            s = [6, e],
                            r = 0
                        } finally {
                            n = a = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, i])
            }
        }
    }
    function p(e) {
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
        var r, a, s = n.call(e), o = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
                o.push(r.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = s.return) && n.call(s)
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
    !function(e) {
        e[e.DT_INVALID = 0] = "DT_INVALID",
        e[e.DT_FLOAT = 1] = "DT_FLOAT",
        e[e.DT_DOUBLE = 2] = "DT_DOUBLE",
        e[e.DT_INT32 = 3] = "DT_INT32",
        e[e.DT_UINT8 = 4] = "DT_UINT8",
        e[e.DT_INT16 = 5] = "DT_INT16",
        e[e.DT_INT8 = 6] = "DT_INT8",
        e[e.DT_STRING = 7] = "DT_STRING",
        e[e.DT_COMPLEX64 = 8] = "DT_COMPLEX64",
        e[e.DT_INT64 = 9] = "DT_INT64",
        e[e.DT_BOOL = 10] = "DT_BOOL",
        e[e.DT_QINT8 = 11] = "DT_QINT8",
        e[e.DT_QUINT8 = 12] = "DT_QUINT8",
        e[e.DT_QINT32 = 13] = "DT_QINT32",
        e[e.DT_BFLOAT16 = 14] = "DT_BFLOAT16",
        e[e.DT_QINT16 = 15] = "DT_QINT16",
        e[e.DT_QUINT16 = 16] = "DT_QUINT16",
        e[e.DT_UINT16 = 17] = "DT_UINT16",
        e[e.DT_COMPLEX128 = 18] = "DT_COMPLEX128",
        e[e.DT_HALF = 19] = "DT_HALF",
        e[e.DT_RESOURCE = 20] = "DT_RESOURCE",
        e[e.DT_VARIANT = 21] = "DT_VARIANT",
        e[e.DT_UINT32 = 22] = "DT_UINT32",
        e[e.DT_UINT64 = 23] = "DT_UINT64",
        e[e.DT_FLOAT_REF = 101] = "DT_FLOAT_REF",
        e[e.DT_DOUBLE_REF = 102] = "DT_DOUBLE_REF",
        e[e.DT_INT32_REF = 103] = "DT_INT32_REF",
        e[e.DT_UINT8_REF = 104] = "DT_UINT8_REF",
        e[e.DT_INT16_REF = 105] = "DT_INT16_REF",
        e[e.DT_INT8_REF = 106] = "DT_INT8_REF",
        e[e.DT_STRING_REF = 107] = "DT_STRING_REF",
        e[e.DT_COMPLEX64_REF = 108] = "DT_COMPLEX64_REF",
        e[e.DT_INT64_REF = 109] = "DT_INT64_REF",
        e[e.DT_BOOL_REF = 110] = "DT_BOOL_REF",
        e[e.DT_QINT8_REF = 111] = "DT_QINT8_REF",
        e[e.DT_QUINT8_REF = 112] = "DT_QUINT8_REF",
        e[e.DT_QINT32_REF = 113] = "DT_QINT32_REF",
        e[e.DT_BFLOAT16_REF = 114] = "DT_BFLOAT16_REF",
        e[e.DT_QINT16_REF = 115] = "DT_QINT16_REF",
        e[e.DT_QUINT16_REF = 116] = "DT_QUINT16_REF",
        e[e.DT_UINT16_REF = 117] = "DT_UINT16_REF",
        e[e.DT_COMPLEX128_REF = 118] = "DT_COMPLEX128_REF",
        e[e.DT_HALF_REF = 119] = "DT_HALF_REF",
        e[e.DT_RESOURCE_REF = 120] = "DT_RESOURCE_REF",
        e[e.DT_VARIANT_REF = 121] = "DT_VARIANT_REF",
        e[e.DT_UINT32_REF = 122] = "DT_UINT32_REF",
        e[e.DT_UINT64_REF = 123] = "DT_UINT64_REF"
    }(a || (a = {})),
    function(e) {
        var t;
        (t = e.CheckpointFormatVersion || (e.CheckpointFormatVersion = {}))[t.LEGACY = 0] = "LEGACY",
        t[t.V1 = 1] = "V1",
        t[t.V2 = 2] = "V2"
    }(s || (s = {}));
    var d = {};
    function h(e) {
        return d[e]
    }
    function f(e, n, r, a, s) {
        var o = n.inputParams[e];
        if (o && void 0 !== o.inputIndexStart) {
            var i = o.inputIndexStart
              , u = 0 === o.inputIndexEnd ? void 0 : void 0 === o.inputIndexEnd ? i + 1 : o.inputIndexEnd;
            if ("tensor" === o.type)
                return m(n.inputNames[o.inputIndexStart], r, a, s);
            if ("tensors" === o.type)
                return n.inputNames.slice(i, u).map((function(e) {
                    return m(e, r, a, s)
                }
                ));
            var p = m(n.inputNames.slice(i)[0], r, a, s)
              , l = p.dataSync();
            return "number" === o.type ? l[0] : t.util.toNestedArray(p.shape, l)
        }
        var c = n.attrParams[e];
        return c && c.value
    }
    function m(e, t, n, r) {
        var a = l(v(e), 2)
          , s = a[0]
          , o = a[1];
        if (null != r) {
            var i = r.getHashTableHandleByName(s);
            if (null != i)
                return i
        }
        var u = n.currentContextIds.find((function(e) {
            return !!t[g(s, e)]
        }
        ));
        return void 0 !== u ? t[g(s, u)][o] : void 0
    }
    function y(e, t) {
        var n = l(v(e), 3)
          , r = n[0]
          , a = n[1]
          , s = n[2];
        return [g(r, t && t.currentContextId), a, s]
    }
    function g(e, t) {
        return t ? e + "-" + t : e
    }
    function v(e) {
        var t = e.split(":");
        if (1 === t.length)
            return [e, 0, void 0];
        var n = t[0]
          , r = 3 === t.length ? t[1] : void 0;
        return [n, Number(t[t.length - 1]), r]
    }
    function b(e, t, n) {
        var r = f("pad", e, t, n);
        if ("explicit" === r) {
            r = f("explicitPaddings", e, t, n);
            for (var a = [[0, 0], [0, 0], [0, 0], [0, 0]], s = 0; s < 4; s++)
                a[s][0] = r[2 * s],
                a[s][1] = r[2 * s + 1];
            return a
        }
        return r
    }
    function x(e) {
        return e.kept ? e : t.clone(e)
    }
    var N = {
        __proto__: null,
        json: [{
            tfOpName: "Add",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "AddV2",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "AddN",
            category: "arithmetic",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }]
        }, {
            tfOpName: "BiasAdd",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sub",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "RealDiv",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Div",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "DivNoNan",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "FloorDiv",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Mul",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Maximum",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Minimum",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Pow",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "SquaredDifference",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Mod",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "FloorMod",
            category: "arithmetic",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , k = {
        __proto__: null,
        json: [{
            tfOpName: "Abs",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Acos",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Asin",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atan",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atan2",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "y",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Ceil",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ClipByValue",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "clipValueMin",
                type: "number"
            }, {
                start: 2,
                name: "clipValueMax",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Complex",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "real",
                type: "tensor"
            }, {
                start: 1,
                name: "imag",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ComplexAbs",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Cos",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Cosh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Elu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Exp",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Floor",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Log",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Imag",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "outputType",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Neg",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Real",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "outputType",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Prelu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "alpha",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Relu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Relu6",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Selu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sigmoid",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sin",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sinh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sqrt",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Rsqrt",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Square",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Tan",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Tanh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Sign",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Round",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Expm1",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Log1p",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Reciprocal",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Softplus",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Asinh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Acosh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Atanh",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Erf",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Prod",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axes",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool",
                notSupported: !0
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LeakyRelu",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "alpha",
                name: "alpha",
                type: "number",
                defaultValue: .2
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "IsNan",
            category: "basic_math",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , w = {
        __proto__: null,
        json: [{
            tfOpName: "EmptyTensorList",
            category: "control",
            inputs: [{
                start: 0,
                name: "elementShape",
                type: "shape"
            }, {
                start: 1,
                name: "maxNumElements",
                type: "number"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "LoopCond",
            category: "control",
            inputs: [{
                start: 0,
                name: "pred",
                type: "tensor"
            }]
        }, {
            tfOpName: "Switch",
            category: "control",
            inputs: [{
                start: 0,
                name: "data",
                type: "tensor"
            }, {
                start: 1,
                name: "pred",
                type: "tensor"
            }]
        }, {
            tfOpName: "Merge",
            category: "control",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }]
        }, {
            tfOpName: "Enter",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "frame_name",
                name: "frameName",
                type: "string"
            }, {
                tfName: "is_constant",
                name: "isConstant",
                type: "bool"
            }]
        }, {
            tfOpName: "Exit",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "NextIteration",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "size",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "element_shape",
                name: "elementShape",
                type: "shape"
            }, {
                tfName: "dynamic_size",
                name: "dynamicSize",
                type: "bool"
            }, {
                tfName: "clear_after_read",
                name: "clearAfterRead",
                type: "bool"
            }, {
                tfName: "identical_element_shapes",
                name: "identicalElementShapes",
                type: "bool"
            }, {
                tfName: "tensor_array_name",
                name: "name",
                type: "string"
            }]
        }, {
            tfOpName: "TensorArrayWriteV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "index",
                type: "number"
            }, {
                start: 2,
                name: "tensor",
                type: "tensor"
            }, {
                start: 3,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayReadV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "index",
                type: "number"
            }, {
                start: 2,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArrayGatherV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "element_shape",
                name: "elementShape",
                type: "shape"
            }]
        }, {
            tfOpName: "TensorArrayScatterV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "tensor",
                type: "tensor"
            }, {
                start: 3,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorArrayConcatV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "element_shape_except0",
                name: "elementShapeExcept0",
                type: "shape",
                notSupported: !0
            }]
        }, {
            tfOpName: "TensorArraySplitV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "tensor",
                type: "tensor"
            }, {
                start: 2,
                name: "lengths",
                type: "number[]"
            }, {
                start: 3,
                name: "flowIn",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorArraySizeV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }, {
                start: 1,
                name: "flowIn",
                type: "number"
            }]
        }, {
            tfOpName: "TensorArrayCloseV3",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorArrayId",
                type: "tensor"
            }]
        }, {
            tfOpName: "StatelessIf",
            category: "control",
            inputs: [{
                start: 0,
                name: "cond",
                type: "tensor"
            }, {
                start: 1,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "then_branch",
                name: "thenBranch",
                type: "func"
            }, {
                tfName: "else_branch",
                name: "elseBranch",
                type: "func"
            }]
        }, {
            tfOpName: "If",
            category: "control",
            inputs: [{
                start: 0,
                name: "cond",
                type: "tensor"
            }, {
                start: 1,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "then_branch",
                name: "thenBranch",
                type: "func"
            }, {
                tfName: "else_branch",
                name: "elseBranch",
                type: "func"
            }]
        }, {
            tfOpName: "StatelessWhile",
            category: "control",
            inputs: [{
                start: 0,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "cond",
                name: "cond",
                type: "func"
            }, {
                tfName: "body",
                name: "body",
                type: "func"
            }]
        }, {
            tfOpName: "While",
            category: "control",
            inputs: [{
                start: 0,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "cond",
                name: "cond",
                type: "func"
            }, {
                tfName: "body",
                name: "body",
                type: "func"
            }]
        }, {
            tfOpName: "TensorListScatter",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "elementShape",
                type: "shape"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListScatterV2",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "elementShape",
                type: "shape"
            }, {
                start: 3,
                name: "numElements",
                type: "number"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListGather",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "number[]"
            }, {
                start: 2,
                name: "elementShape",
                type: "shape"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListGetItem",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }, {
                start: 1,
                name: "index",
                type: "number"
            }, {
                start: 2,
                name: "elementShape",
                type: "shape"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListSetItem",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }, {
                start: 1,
                name: "index",
                type: "number"
            }, {
                start: 2,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListReserve",
            category: "control",
            inputs: [{
                start: 0,
                name: "elementShape",
                type: "shape"
            }, {
                start: 1,
                name: "numElements",
                type: "number"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListFromTensor",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }, {
                start: 1,
                name: "elementShape",
                type: "shape"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListStack",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }, {
                start: 1,
                name: "elementShape",
                type: "shape"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }, {
                tfName: "num_elements",
                name: "numElements",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListSplit",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }, {
                start: 1,
                name: "elementShape",
                type: "shape"
            }, {
                start: 2,
                name: "lengths",
                type: "number[]"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListConcat",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }],
            attrs: [{
                tfName: "element_shape",
                name: "elementShape",
                type: "shape"
            }, {
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListPopBack",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }, {
                start: 1,
                name: "elementShape",
                type: "shape"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "TensorListPushBack",
            category: "control",
            inputs: [{
                start: 0,
                name: "tensorListId",
                type: "tensor"
            }, {
                start: 1,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "element_dtype",
                name: "elementDType",
                type: "dtype"
            }]
        }]
    }
      , T = {
        __proto__: null,
        json: [{
            tfOpName: "AvgPool",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPool",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: [],
                notSupported: !0
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPoolWithArgmax",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "include_batch_in_index",
                name: "includeBatchInIndex",
                type: "bool"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "AvgPool3D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MaxPool3D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "ksize",
                name: "kernelSize",
                type: "number[]"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Conv1D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "stride",
                name: "stride",
                type: "number"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NWC"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "dilation",
                name: "dilation",
                type: "number",
                defaultValue: 1
            }]
        }, {
            tfOpName: "Conv2D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "useCudnnOnGpu",
                name: "useCudnnOnGpu",
                type: "bool"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "_FusedConv2D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }, {
                start: 2,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "num_args",
                name: "numArgs",
                type: "number"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "use_cudnn_on_gpu",
                name: "useCudnnOnGpu",
                type: "bool",
                defaultValue: !0
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                defaultValue: [1, 1, 1, 1]
            }, {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: []
            }, {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 1e-4
            }, {
                tfName: "leakyrelu_alpha",
                name: "leakyreluAlpha",
                type: "number"
            }]
        }, {
            tfOpName: "Conv2DBackpropInput",
            category: "convolution",
            inputs: [{
                start: 2,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }, {
                start: 0,
                name: "outputShape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                notSupported: !0
            }]
        }, {
            tfOpName: "DepthwiseConv2d",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "input",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "DepthwiseConv2dNative",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "input",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "FusedDepthwiseConv2dNative",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }, {
                start: 2,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "num_args",
                name: "numArgs",
                type: "number"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]",
                defaultValue: [1, 1, 1, 1]
            }, {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: []
            }, {
                tfName: "explicit_paddings",
                name: "explicitPaddings",
                type: "number[]",
                defaultValue: []
            }]
        }, {
            tfOpName: "Conv3D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                defaultValue: "NHWC"
            }, {
                tfName: "dilations",
                name: "dilations",
                type: "number[]"
            }]
        }, {
            tfOpName: "Dilation2D",
            category: "convolution",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "filter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "strides",
                name: "strides",
                type: "number[]"
            }, {
                tfName: "rates",
                name: "dilations",
                type: "number[]"
            }, {
                tfName: "padding",
                name: "pad",
                type: "string"
            }]
        }]
    }
      , _ = {
        __proto__: null,
        json: [{
            tfOpName: "Fill",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }, {
                start: 1,
                name: "value",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "LinSpace",
            category: "creation",
            inputs: [{
                start: 0,
                name: "start",
                type: "number"
            }, {
                start: 1,
                name: "stop",
                type: "number"
            }, {
                start: 2,
                name: "num",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "OneHot",
            category: "creation",
            inputs: [{
                start: 0,
                name: "indices",
                type: "tensor"
            }, {
                start: 1,
                name: "depth",
                type: "number"
            }, {
                start: 2,
                name: "onValue",
                type: "number",
                defaultValue: 1
            }, {
                start: 3,
                name: "offValue",
                type: "number",
                defaultValue: 0
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                notSupported: !0
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Ones",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "OnesLike",
            category: "creation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "RandomUniform",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "minval",
                name: "minval",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "maxval",
                name: "maxval",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "seed",
                name: "seed",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }, {
                tfName: "T",
                name: "T",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "Range",
            category: "creation",
            inputs: [{
                start: 0,
                name: "start",
                type: "number"
            }, {
                start: 1,
                name: "stop",
                type: "number"
            }, {
                start: 2,
                name: "step",
                type: "number",
                defaultValue: 0
            }],
            attrs: [{
                tfName: "Tidx",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "TruncatedNormal",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "means",
                name: "mean",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "stddev",
                name: "stdDev",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "seed",
                name: "seed",
                type: "number"
            }, {
                tfName: "seed2",
                name: "seed2",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "T",
                name: "T",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "Zeros",
            category: "creation",
            inputs: [{
                start: 0,
                name: "shape",
                type: "number[]"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "ZerosLike",
            category: "creation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "Multinomial",
            category: "creation",
            inputs: [{
                start: 0,
                name: "logits",
                type: "tensor"
            }, {
                start: 1,
                name: "numSamples",
                type: "number"
            }],
            attrs: [{
                tfName: "seed",
                name: "seed",
                type: "number"
            }, {
                tfName: "seed2",
                name: "seed2",
                type: "number"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }, {
                tfName: "output_dtype",
                name: "output_dtype",
                type: "dtype"
            }]
        }]
    }
      , S = {
        __proto__: null,
        json: [{
            tfOpName: "NonMaxSuppressionV2",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }]
        }, {
            tfOpName: "NonMaxSuppressionV3",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }, {
                start: 4,
                name: "scoreThreshold",
                type: "number"
            }]
        }, {
            tfOpName: "NonMaxSuppressionV4",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }, {
                start: 4,
                name: "scoreThreshold",
                type: "number"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "T_threshold",
                name: "threshold",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "pad_to_max_output_size",
                name: "padToMaxOutputSize",
                type: "bool"
            }]
        }, {
            tfOpName: "NonMaxSuppressionV5",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "boxes",
                type: "tensor"
            }, {
                start: 1,
                name: "scores",
                type: "tensor"
            }, {
                start: 2,
                name: "maxOutputSize",
                type: "number"
            }, {
                start: 3,
                name: "iouThreshold",
                type: "number"
            }, {
                start: 4,
                name: "scoreThreshold",
                type: "number"
            }, {
                start: 5,
                name: "softNmsSigma",
                type: "number"
            }]
        }, {
            tfOpName: "Where",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "condition",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ListDiff",
            category: "dynamic",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "y",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , E = {
        __proto__: null,
        json: [{
            tfOpName: "TopKV2",
            category: "evaluation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "k",
                type: "number"
            }],
            attrs: [{
                tfName: "sorted",
                name: "sorted",
                type: "bool"
            }]
        }, {
            tfOpName: "Unique",
            category: "evaluation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "UniqueV2",
            category: "evaluation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }]
    }
      , I = {
        __proto__: null,
        json: [{
            tfOpName: "PlaceholderWithDefault",
            category: "graph",
            inputs: [{
                start: 0,
                name: "default",
                type: "tensor"
            }],
            attrs: [{
                tfName: "shape",
                name: "shape",
                type: "shape"
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "Placeholder",
            category: "graph",
            attrs: [{
                tfName: "shape",
                name: "shape",
                type: "shape"
            }, {
                tfName: "dtype",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "Const",
            category: "graph"
        }, {
            tfOpName: "Identity",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "IdentityN",
            category: "graph",
            inputs: [{
                start: 0,
                end: 0,
                name: "x",
                type: "tensors"
            }]
        }, {
            tfOpName: "Snapshot",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "Rank",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "Size",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "Shape",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "ShapeN",
            category: "graph",
            inputs: [{
                start: 0,
                end: 0,
                name: "x",
                type: "tensors"
            }]
        }, {
            tfOpName: "Print",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "data",
                type: "tensors"
            }],
            attrs: [{
                tfName: "message",
                name: "message",
                type: "string"
            }, {
                tfName: "first_n",
                name: "firstN",
                type: "number",
                notSupported: !0
            }, {
                tfName: "summarize",
                name: "summarize",
                type: "number",
                defaultValue: 3
            }]
        }, {
            tfOpName: "NoOp",
            category: "graph",
            inputs: []
        }, {
            tfOpName: "StopGradient",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "FakeQuantWithMinMaxVars",
            category: "graph",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "min",
                name: "min",
                type: "number"
            }, {
                tfName: "max",
                name: "max",
                type: "number"
            }]
        }]
    }
      , O = {
        __proto__: null,
        json: [{
            tfOpName: "HashTable",
            category: "hash_table",
            inputs: [],
            attrs: [{
                tfName: "shared_name",
                name: "sharedName",
                type: "string"
            }, {
                tfName: "use_node_name_sharing",
                name: "useNodeNameSharing",
                type: "bool"
            }, {
                tfName: "key_dtype",
                name: "keyDType",
                type: "dtype"
            }, {
                tfName: "value_dtype",
                name: "valueDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "HashTableV2",
            category: "hash_table",
            inputs: [],
            attrs: [{
                tfName: "shared_name",
                name: "sharedName",
                type: "string"
            }, {
                tfName: "use_node_name_sharing",
                name: "useNodeNameSharing",
                type: "bool"
            }, {
                tfName: "key_dtype",
                name: "keyDType",
                type: "dtype"
            }, {
                tfName: "value_dtype",
                name: "valueDType",
                type: "dtype"
            }]
        }, {
            tfOpName: "LookupTableImport",
            category: "hash_table",
            inputs: [{
                start: 0,
                name: "tableHandle",
                type: "tensor"
            }, {
                start: 1,
                name: "keys",
                type: "tensor"
            }, {
                start: 2,
                name: "values",
                type: "tensor"
            }],
            attrs: [{
                tfName: "Tin",
                name: "tIn",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "tOut",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LookupTableImportV2",
            category: "hash_table",
            inputs: [{
                start: 0,
                name: "tableHandle",
                type: "tensor"
            }, {
                start: 1,
                name: "keys",
                type: "tensor"
            }, {
                start: 2,
                name: "values",
                type: "tensor"
            }],
            attrs: [{
                tfName: "Tin",
                name: "tIn",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "tOut",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LookupTableFind",
            category: "hash_table",
            inputs: [{
                start: 0,
                name: "tableHandle",
                type: "tensor"
            }, {
                start: 1,
                name: "keys",
                type: "tensor"
            }, {
                start: 2,
                name: "defaultValue",
                type: "tensor"
            }],
            attrs: [{
                tfName: "Tin",
                name: "tIn",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "tOut",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LookupTableFindV2",
            category: "hash_table",
            inputs: [{
                start: 0,
                name: "tableHandle",
                type: "tensor"
            }, {
                start: 1,
                name: "keys",
                type: "tensor"
            }, {
                start: 2,
                name: "defaultValue",
                type: "tensor"
            }],
            attrs: [{
                tfName: "Tin",
                name: "tIn",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "Tout",
                name: "tOut",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LookupTableSize",
            category: "hash_table",
            inputs: [{
                start: 0,
                name: "tableHandle",
                type: "tensor"
            }]
        }, {
            tfOpName: "LookupTableSizeV2",
            category: "hash_table",
            inputs: [{
                start: 0,
                name: "tableHandle",
                type: "tensor"
            }]
        }]
    }
      , D = {
        __proto__: null,
        json: [{
            tfOpName: "ResizeBilinear",
            category: "image",
            inputs: [{
                start: 0,
                name: "images",
                type: "tensor"
            }, {
                start: 1,
                name: "size",
                type: "number[]"
            }],
            attrs: [{
                tfName: "align_corners",
                name: "alignCorners",
                type: "bool"
            }, {
                tfName: "half_pixel_centers",
                name: "halfPixelCenters",
                type: "bool"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "ResizeNearestNeighbor",
            category: "image",
            inputs: [{
                start: 0,
                name: "images",
                type: "tensor"
            }, {
                start: 1,
                name: "size",
                type: "number[]"
            }],
            attrs: [{
                tfName: "align_corners",
                name: "alignCorners",
                type: "bool"
            }, {
                tfName: "half_pixel_centers",
                name: "halfPixelCenters",
                type: "bool"
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "CropAndResize",
            category: "image",
            inputs: [{
                start: 0,
                name: "image",
                type: "tensor"
            }, {
                start: 1,
                name: "boxes",
                type: "tensor"
            }, {
                start: 2,
                name: "boxInd",
                type: "tensor"
            }, {
                start: 3,
                name: "cropSize",
                type: "number[]"
            }],
            attrs: [{
                tfName: "method",
                name: "method",
                type: "string"
            }, {
                tfName: "extrapolation_value",
                name: "extrapolationValue",
                type: "number"
            }]
        }]
    }
      , A = {
        __proto__: null,
        json: [{
            tfOpName: "Equal",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "NotEqual",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Greater",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "GreaterEqual",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Less",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LessEqual",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalAnd",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalNot",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "LogicalOr",
            category: "logical",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Select",
            category: "logical",
            inputs: [{
                start: 0,
                name: "condition",
                type: "tensor"
            }, {
                start: 1,
                name: "a",
                type: "tensor"
            }, {
                start: 2,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "SelectV2",
            category: "logical",
            inputs: [{
                start: 0,
                name: "condition",
                type: "tensor"
            }, {
                start: 1,
                name: "a",
                type: "tensor"
            }, {
                start: 2,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }]
    }
      , M = {
        __proto__: null,
        json: [{
            tfOpName: "_FusedMatMul",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }, {
                start: 2,
                end: 0,
                name: "args",
                type: "tensors"
            }],
            attrs: [{
                tfName: "num_args",
                name: "numArgs",
                type: "number"
            }, {
                tfName: "fused_ops",
                name: "fusedOps",
                type: "string[]",
                defaultValue: []
            }, {
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: 1e-4
            }, {
                tfName: "transpose_a",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "transpose_b",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "MatMul",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "transpose_a",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "transpose_b",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "BatchMatMul",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "adj_x",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "adj_y",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "BatchMatMulV2",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "a",
                type: "tensor"
            }, {
                start: 1,
                name: "b",
                type: "tensor"
            }],
            attrs: [{
                tfName: "adj_x",
                name: "transposeA",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "adj_y",
                name: "transposeB",
                type: "bool",
                defaultValue: !1
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Transpose",
            category: "matrices",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "perm",
                type: "number[]"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "Einsum",
            category: "matrices",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }],
            attrs: [{
                tfName: "equation",
                name: "equation",
                type: "string"
            }, {
                tfName: "N",
                name: "n",
                type: "number",
                defaultValue: 2
            }, {
                tfName: "T",
                name: "dtype",
                type: "dtype"
            }]
        }]
    }
      , F = {
        __proto__: null,
        json: [{
            tfOpName: "FusedBatchNorm",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "scale",
                type: "tensor"
            }, {
                start: 2,
                name: "offset",
                type: "tensor"
            }, {
                start: 3,
                name: "mean",
                type: "tensor"
            }, {
                start: 4,
                name: "variance",
                type: "tensor"
            }],
            attrs: [{
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: .001
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "FusedBatchNormV2",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "scale",
                type: "tensor"
            }, {
                start: 2,
                name: "offset",
                type: "tensor"
            }, {
                start: 3,
                name: "mean",
                type: "tensor"
            }, {
                start: 4,
                name: "variance",
                type: "tensor"
            }],
            attrs: [{
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: .001
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "FusedBatchNormV3",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "scale",
                type: "tensor"
            }, {
                start: 2,
                name: "offset",
                type: "tensor"
            }, {
                start: 3,
                name: "mean",
                type: "tensor"
            }, {
                start: 4,
                name: "variance",
                type: "tensor"
            }],
            attrs: [{
                tfName: "epsilon",
                name: "epsilon",
                type: "number",
                defaultValue: .001
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string",
                notSupported: !0
            }]
        }, {
            tfOpName: "LRN",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "depth_radius",
                name: "radius",
                type: "number",
                defaultValue: 5
            }, {
                tfName: "bias",
                name: "bias",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "alpha",
                name: "alpha",
                type: "number",
                defaultValue: 1
            }, {
                tfName: "beta",
                name: "beta",
                type: "number",
                defaultValue: .5
            }]
        }, {
            tfOpName: "Softmax",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "LogSoftmax",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseToDense",
            category: "normalization",
            inputs: [{
                start: 0,
                name: "sparseIndices",
                type: "tensor"
            }, {
                start: 1,
                name: "outputShape",
                type: "number[]"
            }, {
                start: 2,
                name: "sparseValues",
                type: "tensor"
            }, {
                start: 3,
                name: "defaultValue",
                type: "tensor"
            }],
            attrs: [{
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                defaultValue: !0,
                notSupported: !0
            }]
        }]
    }
      , C = {
        __proto__: null,
        json: [{
            tfOpName: "Bincount",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "size",
                type: "number"
            }, {
                start: 2,
                name: "weights",
                type: "tensor"
            }]
        }, {
            tfOpName: "DenseBincount",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "size",
                type: "number"
            }, {
                start: 2,
                name: "weights",
                type: "tensor"
            }],
            attrs: [{
                tfName: "binary_output",
                name: "binaryOutput",
                type: "bool"
            }]
        }, {
            tfOpName: "Max",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Mean",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Min",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Sum",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "All",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Any",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "ArgMax",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "ArgMin",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "Prod",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }],
            attrs: [{
                tfName: "keep_dims",
                name: "keepDims",
                type: "bool"
            }]
        }, {
            tfOpName: "Cumsum",
            category: "reduction",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }],
            attrs: [{
                tfName: "exclusive",
                name: "exclusive",
                type: "bool"
            }, {
                tfName: "reverse",
                name: "reverse",
                type: "bool"
            }]
        }]
    }
      , R = {
        __proto__: null,
        json: [{
            tfOpName: "ConcatV2",
            category: "slice_join",
            inputs: [{
                start: 0,
                end: -1,
                name: "tensors",
                type: "tensors"
            }, {
                start: -1,
                name: "axis",
                type: "number"
            }],
            attrs: [{
                tfName: "N",
                name: "n",
                type: "number",
                defaultValue: 2
            }]
        }, {
            tfOpName: "Concat",
            category: "slice_join",
            inputs: [{
                start: 1,
                end: 0,
                name: "tensors",
                type: "tensors"
            }, {
                start: 0,
                name: "axis",
                type: "number"
            }],
            attrs: [{
                tfName: "N",
                name: "n",
                type: "number",
                defaultValue: 2
            }]
        }, {
            tfOpName: "GatherV2",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }, {
                start: 2,
                name: "axis",
                type: "number",
                defaultValue: 0
            }],
            attrs: [{
                tfName: "batch_dims",
                name: "batchDims",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Gather",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }],
            attrs: [{
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                notSupported: !0
            }]
        }, {
            tfOpName: "Reverse",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "dims",
                type: "bool[]"
            }]
        }, {
            tfOpName: "ReverseV2",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number[]"
            }]
        }, {
            tfOpName: "Slice",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "begin",
                type: "number[]"
            }, {
                start: 2,
                name: "size",
                type: "number[]"
            }]
        }, {
            tfOpName: "StridedSlice",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "begin",
                type: "number[]"
            }, {
                start: 2,
                name: "end",
                type: "number[]"
            }, {
                start: 3,
                name: "strides",
                type: "number[]"
            }],
            attrs: [{
                tfName: "begin_mask",
                name: "beginMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "end_mask",
                name: "endMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "new_axis_mask",
                name: "newAxisMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "ellipsis_mask",
                name: "ellipsisMask",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "shrink_axis_mask",
                name: "shrinkAxisMask",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Pack",
            category: "slice_join",
            inputs: [{
                start: 0,
                end: 0,
                name: "tensors",
                type: "tensors"
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Unpack",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "tensor",
                type: "tensor"
            }],
            attrs: [{
                tfName: "axis",
                name: "axis",
                type: "number",
                defaultValue: 0
            }, {
                tfName: "num",
                name: "num",
                type: "number",
                defaultValue: 0,
                notSupported: !0
            }]
        }, {
            tfOpName: "Tile",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "reps",
                type: "number[]"
            }]
        }, {
            tfOpName: "Split",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "axis",
                type: "number",
                defaultValue: 0
            }, {
                start: 1,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "num_split",
                name: "numOrSizeSplits",
                type: "number",
                defaultValue: 1
            }]
        }, {
            tfOpName: "SplitV",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "numOrSizeSplits",
                type: "number[]"
            }, {
                start: 2,
                name: "axis",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "ScatterNd",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "indices",
                type: "tensor"
            }, {
                start: 1,
                name: "values",
                type: "tensor"
            }, {
                start: 2,
                name: "shape",
                type: "number[]"
            }]
        }, {
            tfOpName: "GatherNd",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseToDense",
            category: "slice_join",
            inputs: [{
                start: 0,
                name: "sparseIndices",
                type: "tensor"
            }, {
                start: 1,
                name: "outputShape",
                type: "number[]"
            }, {
                start: 2,
                name: "sparseValues",
                type: "tensor"
            }, {
                start: 3,
                name: "defaultValue",
                type: "tensor"
            }],
            attrs: [{
                tfName: "validate_indices",
                name: "validateIndices",
                type: "bool",
                defaultValue: !1,
                notSupported: !0
            }]
        }]
    }
      , V = {
        __proto__: null,
        json: [{
            tfOpName: "SparseFillEmptyRows",
            category: "sparse",
            inputs: [{
                start: 0,
                name: "indices",
                type: "tensor"
            }, {
                start: 1,
                name: "values",
                type: "tensor"
            }, {
                start: 2,
                name: "denseShape",
                type: "tensor"
            }, {
                start: 3,
                name: "defaultValue",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseReshape",
            category: "sparse",
            inputs: [{
                start: 0,
                name: "inputIndices",
                type: "tensor"
            }, {
                start: 1,
                name: "inputShape",
                type: "tensor"
            }, {
                start: 2,
                name: "newShape",
                type: "tensor"
            }],
            attrs: [{
                tfName: "T",
                name: "dtype",
                type: "dtype",
                notSupported: !0
            }]
        }, {
            tfOpName: "SparseSegmentMean",
            category: "sparse",
            inputs: [{
                start: 0,
                name: "data",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }, {
                start: 2,
                name: "segmentIds",
                type: "tensor"
            }]
        }, {
            tfOpName: "SparseSegmentSum",
            category: "sparse",
            inputs: [{
                start: 0,
                name: "data",
                type: "tensor"
            }, {
                start: 1,
                name: "indices",
                type: "tensor"
            }, {
                start: 2,
                name: "segmentIds",
                type: "tensor"
            }]
        }]
    }
      , z = {
        __proto__: null,
        json: [{
            tfOpName: "FFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "IFFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }]
        }, {
            tfOpName: "RFFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "fft_length",
                type: "number",
                notSupported: !0
            }]
        }, {
            tfOpName: "IRFFT",
            category: "spectral",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "fft_length",
                type: "number",
                notSupported: !0
            }]
        }]
    }
      , L = {
        __proto__: null,
        json: [{
            tfOpName: "StringNGrams",
            category: "string",
            inputs: [{
                start: 0,
                name: "data",
                type: "tensor"
            }, {
                start: 1,
                name: "dataSplits",
                type: "tensor"
            }],
            attrs: [{
                tfName: "separator",
                name: "separator",
                type: "string"
            }, {
                tfName: "ngram_widths",
                name: "nGramWidths",
                type: "number[]"
            }, {
                tfName: "left_pad",
                name: "leftPad",
                type: "string"
            }, {
                tfName: "right_pad",
                name: "rightPad",
                type: "string"
            }, {
                tfName: "pad_width",
                name: "padWidth",
                type: "number"
            }, {
                tfName: "preserve_short_sequences",
                name: "preserveShortSequences",
                type: "bool"
            }],
            outputs: ["ngrams", "ngrams_splits"]
        }, {
            tfOpName: "StringSplit",
            category: "string",
            inputs: [{
                start: 0,
                name: "input",
                type: "tensor"
            }, {
                start: 1,
                name: "delimiter",
                type: "tensor"
            }],
            attrs: [{
                tfName: "skip_empty",
                name: "skipEmpty",
                type: "bool"
            }],
            outputs: ["indices", "values", "shape"]
        }, {
            tfOpName: "StringToHashBucketFast",
            category: "string",
            inputs: [{
                start: 0,
                name: "input",
                type: "tensor"
            }],
            attrs: [{
                tfName: "num_buckets",
                name: "numBuckets",
                type: "number"
            }]
        }]
    }
      , P = {
        __proto__: null,
        json: [{
            tfOpName: "Cast",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "SrcT",
                name: "sdtype",
                type: "dtype",
                notSupported: !0
            }, {
                tfName: "DstT",
                name: "dtype",
                type: "dtype"
            }]
        }, {
            tfOpName: "ExpandDims",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "axis",
                type: "number"
            }]
        }, {
            tfOpName: "MirrorPad",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "padding",
                type: "number[]"
            }],
            attrs: [{
                tfName: "mode",
                name: "mode",
                type: "string"
            }]
        }, {
            tfOpName: "Pad",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "padding",
                type: "number[]"
            }],
            attrs: [{
                tfName: "constant_value",
                name: "constantValue",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "PadV2",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "padding",
                type: "number[]"
            }, {
                start: 2,
                name: "constantValue",
                type: "number",
                defaultValue: 0
            }]
        }, {
            tfOpName: "Reshape",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "shape",
                type: "number[]"
            }]
        }, {
            tfOpName: "Squeeze",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "axis",
                tfDeprecatedName: "squeeze_dims",
                name: "axis",
                type: "number[]"
            }]
        }, {
            tfOpName: "SpaceToBatchND",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "blockShape",
                type: "number[]"
            }, {
                start: 2,
                name: "paddings",
                type: "number[]"
            }]
        }, {
            tfOpName: "BatchToSpaceND",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "blockShape",
                type: "number[]"
            }, {
                start: 2,
                name: "crops",
                type: "number[]"
            }]
        }, {
            tfOpName: "DepthToSpace",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }],
            attrs: [{
                tfName: "block_size",
                name: "blockSize",
                type: "number"
            }, {
                tfName: "data_format",
                name: "dataFormat",
                type: "string"
            }]
        }, {
            tfOpName: "BroadcastTo",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "x",
                type: "tensor"
            }, {
                start: 1,
                name: "shape",
                type: "number[]"
            }],
            attrs: []
        }, {
            tfOpName: "BroadcastArgs",
            category: "transformation",
            inputs: [{
                start: 0,
                name: "s0",
                type: "tensor"
            }, {
                start: 1,
                name: "s1",
                type: "tensor"
            }],
            attrs: []
        }]
    }
      , B = function() {
        function e() {
            var e = [N, k, w, T, _, S, E, I, O, D, A, M, F, C, R, V, z, L, P]
              , t = [].concat.apply([], c(e.map((function(e) {
                return e.json
            }
            ))));
            this.opMappers = t.reduce((function(e, t) {
                return e[t.tfOpName] = t,
                e
            }
            ), {})
        }
        return Object.defineProperty(e, "Instance", {
            get: function() {
                return this._instance || (this._instance = new this)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.transformGraph = function(e, t) {
            var n = this;
            void 0 === t && (t = {});
            var r = e.node
              , a = []
              , s = []
              , o = []
              , i = r.reduce((function(e, t) {
                return e[t.name] = n.mapNode(t),
                t.op.startsWith("Placeholder") ? a.push(e[t.name]) : "Const" === t.op ? s.push(e[t.name]) : null != t.input && 0 !== t.input.length || o.push(e[t.name]),
                e
            }
            ), {})
              , u = []
              , p = []
              , c = {}
              , d = {};
            null != t && (c = this.mapSignatureEntries(t.inputs),
            d = this.mapSignatureEntries(t.outputs));
            var h = Object.keys(i);
            h.forEach((function(e) {
                var t = i[e];
                t.inputNames.forEach((function(e, n) {
                    var r = l(y(e), 3)
                      , a = r[0]
                      , s = r[2]
                      , o = i[a];
                    if (null != o.outputs) {
                        var u = o.outputs.indexOf(s);
                        if (-1 !== u) {
                            var p = a + ":" + u;
                            t.inputNames[n] = p
                        }
                    }
                    t.inputs.push(o),
                    o.children.push(t)
                }
                ))
            }
            )),
            0 === Object.keys(d).length ? h.forEach((function(e) {
                var t = i[e];
                0 === t.children.length && p.push(t)
            }
            )) : Object.keys(d).forEach((function(e) {
                var t = l(y(e), 1)[0]
                  , n = i[t];
                null != n && (n.signatureKey = d[e],
                p.push(n))
            }
            )),
            Object.keys(c).length > 0 ? Object.keys(c).forEach((function(e) {
                var t = l(y(e), 1)[0]
                  , n = i[t];
                n && (n.signatureKey = c[e],
                u.push(n))
            }
            )) : u = a;
            var f = {};
            null != e.library && null != e.library.function && (f = e.library.function.reduce((function(e, t) {
                return e[t.signature.name] = n.mapFunction(t),
                e
            }
            ), {}));
            var m = {
                nodes: i,
                inputs: u,
                outputs: p,
                weights: s,
                placeholders: a,
                signature: t,
                functions: f
            };
            return o.length > 0 && (m.initNodes = o),
            m
        }
        ,
        e.prototype.mapSignatureEntries = function(e) {
            return Object.keys(e || {}).reduce((function(t, n) {
                return t[e[n].name] = n,
                t
            }
            ), {})
        }
        ,
        e.prototype.mapNode = function(e) {
            var t = h(e.op) || this.opMappers[e.op] || {};
            null == e.attr && (e.attr = {});
            var n = {
                name: e.name,
                op: e.op,
                category: t.category,
                inputNames: (e.input || []).map((function(e) {
                    return e.startsWith("^") ? e.substr(1) : e
                }
                )),
                inputs: [],
                children: [],
                inputParams: {},
                attrParams: {},
                rawAttrs: e.attr,
                outputs: t.outputs
            };
            return null != t.inputs && (n.inputParams = t.inputs.reduce((function(e, t) {
                return e[t.name] = {
                    type: t.type,
                    inputIndexStart: t.start,
                    inputIndexEnd: t.end
                },
                e
            }
            ), {})),
            null != t.attrs && (n.attrParams = t.attrs.reduce((function(t, n) {
                var r = n.type
                  , a = void 0;
                switch (n.type) {
                case "string":
                    void 0 === (a = j(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = j(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "string[]":
                    void 0 === (a = $(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = $(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "number":
                    void 0 === (a = W(e.attr, n.tfName, n.defaultValue || 0)) && n.tfDeprecatedName && (a = W(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "number[]":
                    void 0 === (a = X(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = X(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "bool":
                    void 0 === (a = q(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = q(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "bool[]":
                    void 0 === (a = ee(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = ee(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "shape":
                    void 0 === (a = Y(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = Y(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "shape[]":
                    void 0 === (a = J(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = J(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "dtype":
                    void 0 === (a = G(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = G(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "dtype[]":
                    void 0 === (a = Z(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = Z(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "func":
                    void 0 === (a = H(e.attr, n.tfName, n.defaultValue)) && n.tfDeprecatedName && (a = H(e.attr, n.tfDeprecatedName, n.defaultValue));
                    break;
                case "tensor":
                case "tensors":
                    break;
                default:
                    throw new Error("Unsupported param type: " + n.type + " for op: " + e.op)
                }
                return t[n.name] = {
                    value: a,
                    type: r
                },
                t
            }
            ), {})),
            n
        }
        ,
        e.prototype.mapFunction = function(e) {
            var t = this
              , n = e.nodeDef
              , r = []
              , a = {};
            null != n && (a = n.reduce((function(e, n) {
                return e[n.name] = t.mapNode(n),
                "Const" === n.op && r.push(e[n.name]),
                e
            }
            ), {}));
            var s = []
              , o = [];
            e.signature.inputArg.forEach((function(e) {
                var t = l(y(e.name), 1)[0]
                  , n = {
                    name: t,
                    op: "Placeholder",
                    inputs: [],
                    inputNames: [],
                    category: "graph",
                    inputParams: {},
                    attrParams: {
                        dtype: {
                            value: U(e.type),
                            type: "dtype"
                        }
                    },
                    children: []
                };
                n.signatureKey = e.name,
                s.push(n),
                a[t] = n
            }
            )),
            Object.keys(a).forEach((function(e) {
                var t = a[e];
                t.inputNames.forEach((function(e, n) {
                    var r = l(y(e), 3)
                      , s = r[0]
                      , o = r[2]
                      , i = a[s];
                    if (null != i.outputs) {
                        var u = i.outputs.indexOf(o);
                        if (-1 !== u) {
                            var p = s + ":" + u;
                            t.inputNames[n] = p
                        }
                    }
                    t.inputs.push(i),
                    i.children.push(t)
                }
                ))
            }
            ));
            var i = e.ret;
            e.signature.outputArg.forEach((function(e) {
                var t = l(y(i[e.name]), 2)
                  , n = t[0]
                  , r = t[1]
                  , s = a[n];
                null != s && (s.defaultOutput = r,
                o.push(s))
            }
            ));
            var u = this.mapArgsToSignature(e);
            return {
                nodes: a,
                inputs: s,
                outputs: o,
                weights: r,
                placeholders: [],
                signature: u
            }
        }
        ,
        e.prototype.mapArgsToSignature = function(e) {
            var t = this;
            return {
                methodName: e.signature.name,
                inputs: e.signature.inputArg.reduce((function(e, n) {
                    return e[n.name] = t.mapArgToTensorInfo(n),
                    e
                }
                ), {}),
                outputs: e.signature.outputArg.reduce((function(n, r) {
                    return n[r.name] = t.mapArgToTensorInfo(r, e.ret),
                    n
                }
                ), {})
            }
        }
        ,
        e.prototype.mapArgToTensorInfo = function(e, t) {
            var n = e.name;
            return null != t && (n = t[n]),
            {
                name: n,
                dtype: e.type
            }
        }
        ,
        e
    }();
    function K(e, n) {
        var r = Array.isArray(e) ? String.fromCharCode.apply(null, e) : function(e) {
            var n = t.env().global;
            if ("undefined" != typeof n.atob)
                return n.atob(e);
            if ("undefined" != typeof Buffer)
                return new Buffer(e,"base64").toString();
            throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")
        }(e);
        return n ? r : r.toLowerCase()
    }
    function j(e, t, n, r) {
        void 0 === r && (r = !1);
        var a = e[t];
        return null != a ? K(a.s, r) : n
    }
    function q(e, t, n) {
        var r = e[t];
        return r ? r.b : n
    }
    function W(e, t, n) {
        var r = e[t] || {}
          , a = null != r.i ? r.i : null != r.f ? r.f : n;
        return "number" == typeof a ? a : parseInt(a, 10)
    }
    function U(e) {
        switch ("string" == typeof e && (e = a[e]),
        e) {
        case a.DT_FLOAT:
        case a.DT_HALF:
            return "float32";
        case a.DT_INT32:
        case a.DT_INT64:
        case a.DT_INT8:
        case a.DT_UINT8:
            return "int32";
        case a.DT_BOOL:
            return "bool";
        case a.DT_DOUBLE:
            return "float32";
        case a.DT_STRING:
            return "string";
        default:
            return null
        }
    }
    function H(e, t, n) {
        var r = e[t];
        return r && r.func ? r.func.name : n
    }
    function G(e, t, n) {
        var r = e[t];
        return r && r.type ? U(r.type) : n
    }
    function Z(e, t, n) {
        var r = e[t];
        return r && r.list && r.list.type ? r.list.type.map((function(e) {
            return U(e)
        }
        )) : n
    }
    function Q(e) {
        if (!e.unknownRank)
            return null != e.dim ? e.dim.map((function(e) {
                return "number" == typeof e.size ? e.size : parseInt(e.size, 10)
            }
            )) : []
    }
    function Y(e, t, n) {
        var r = e[t];
        return r && r.shape ? Q(r.shape) : n
    }
    function X(e, t, n) {
        var r = e[t];
        return r ? ((r.list.f && r.list.f.length ? r.list.f : r.list.i) || []).map((function(e) {
            return "number" == typeof e ? e : parseInt(e, 10)
        }
        )) : n
    }
    function $(e, t, n, r) {
        void 0 === r && (r = !1);
        var a = e[t];
        return a && a.list && a.list.s ? a.list.s.map((function(e) {
            return K(e, r)
        }
        )) : n
    }
    function J(e, t, n) {
        var r = e[t];
        return r && r.list && r.list.shape ? r.list.shape.map((function(e) {
            return Q(e)
        }
        )) : n
    }
    function ee(e, t, n) {
        var r = e[t];
        return r && r.list && r.list.b ? r.list.b : n
    }
    var te = function() {
        function e(e, t, n) {
            var r = this;
            this.node = e,
            this.tensorMap = t,
            this.context = n,
            this.inputs = [],
            this.attrs = {},
            this.inputs = e.inputNames.map((function(e) {
                return r.getInput(e)
            }
            )),
            null != e.rawAttrs && (this.attrs = Object.keys(e.rawAttrs).reduce((function(e, t) {
                return e[t] = r.getAttr(t),
                e
            }
            ), {}))
        }
        return e.prototype.getInput = function(e) {
            return m(e, this.tensorMap, this.context)
        }
        ,
        e.prototype.getAttr = function(e, t) {
            var n = this.node.rawAttrs[e];
            if (null != n.tensor)
                return m(e, this.tensorMap, this.context);
            if (null != n.i || null != n.f)
                return W(this.node.rawAttrs, e, t);
            if (null != n.s)
                return j(this.node.rawAttrs, e, t);
            if (null != n.b)
                return q(this.node.rawAttrs, e, t);
            if (null != n.shape)
                return Y(this.node.rawAttrs, e, t);
            if (null != n.type)
                return G(this.node.rawAttrs, e, t);
            if (null != n.list) {
                if (null != n.list.i || null != n.list.f)
                    return X(this.node.rawAttrs, e, t);
                if (null != n.list.s)
                    return $(this.node.rawAttrs, e, t);
                if (null != n.list.shape)
                    return J(this.node.rawAttrs, e, t);
                if (null != n.list.b)
                    return ee(this.node.rawAttrs, e, t);
                if (null != n.list.type)
                    return Z(this.node.rawAttrs, e, t)
            }
            return t
        }
        ,
        e
    }()
      , ne = function() {
        function e() {}
        return e.prototype.refCount = function(e) {
            return re("refCount")
        }
        ,
        e.prototype.incRef = function(e) {
            return re("incRef")
        }
        ,
        e.prototype.timerAvailable = function() {
            return !0
        }
        ,
        e.prototype.time = function(e) {
            return re("time")
        }
        ,
        e.prototype.read = function(e) {
            return re("read")
        }
        ,
        e.prototype.readSync = function(e) {
            return re("readSync")
        }
        ,
        e.prototype.readToGPU = function(e, t) {
            return re("readToGPU")
        }
        ,
        e.prototype.numDataIds = function() {
            return re("numDataIds")
        }
        ,
        e.prototype.disposeData = function(e, t) {
            return re("disposeData")
        }
        ,
        e.prototype.write = function(e, t, n) {
            return re("write")
        }
        ,
        e.prototype.move = function(e, t, n, r, a) {
            return re("move")
        }
        ,
        e.prototype.memory = function() {
            return re("memory")
        }
        ,
        e.prototype.floatPrecision = function() {
            return re("floatPrecision")
        }
        ,
        e.prototype.epsilon = function() {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4
        }
        ,
        e.prototype.dispose = function() {
            return re("dispose")
        }
        ,
        e
    }();
    function re(e) {
        throw new Error("'" + e + "' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen")
    }
    function ae(e, t) {
        if (!e)
            throw new Error("string" == typeof t ? t : t())
    }
    function se(e, t, n) {
        void 0 === n && (n = ""),
        ae(pe(e, t), (function() {
            return n + " Shapes " + e + " and " + t + " must match"
        }
        ))
    }
    function oe(e) {
        ae(null != e, (function() {
            return "The input to the tensor constructor must be a non-null value."
        }
        ))
    }
    function ie(e, t, n) {
        if (void 0 === t && (t = []),
        void 0 === n && (n = !1),
        null == t && (t = []),
        Array.isArray(e) || he(e) && !n)
            for (var r = 0; r < e.length; ++r)
                ie(e[r], t, n);
        else
            t.push(e);
        return t
    }
    function ue(e) {
        if (0 === e.length)
            return 1;
        for (var t = e[0], n = 1; n < e.length; n++)
            t *= e[n];
        return t
    }
    function pe(e, t) {
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
    function le(e) {
        return e % 1 == 0
    }
    function ce(e, t) {
        return t <= e.length ? e : e + " ".repeat(t - e.length)
    }
    function de(e, t) {
        var n = t.length;
        return ae((e = null == e ? t.map((function(e, t) {
            return t
        }
        )) : [].concat(e)).every((function(e) {
            return e >= -n && e < n
        }
        )), (function() {
            return "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + e
        }
        )),
        ae(e.every((function(e) {
            return le(e)
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
    function he(e) {
        return e instanceof Float32Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray
    }
    function fe(e) {
        if ("float32" === e || "int32" === e)
            return 4;
        if ("complex64" === e)
            return 8;
        if ("bool" === e)
            return 1;
        throw new Error("Unknown dtype " + e)
    }
    function me(e) {
        return "string" == typeof e || e instanceof String
    }
    function ye(e) {
        return Array.isArray(e) ? ye(e[0]) : e instanceof Float32Array ? "float32" : e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray ? "int32" : "number" == typeof e ? "float32" : me(e) ? "string" : function(e) {
            return "boolean" == typeof e
        }(e) ? "bool" : "float32"
    }
    function ge(e) {
        return !!(e && e.constructor && e.call && e.apply)
    }
    function ve(e) {
        var t = e.length;
        if (t < 2)
            return [];
        var n = new Array(t - 1);
        n[t - 2] = e[t - 1];
        for (var r = t - 3; r >= 0; --r)
            n[r] = n[r + 1] * e[r + 1];
        return n
    }
    function be(e, t, n, r) {
        void 0 === r && (r = !1);
        var a = new Array;
        if (1 === t.length)
            for (var s = t[0] * (r ? 2 : 1), o = 0; o < s; o++)
                a[o] = n[e + o];
        else {
            s = t[0];
            var i = t.slice(1)
              , u = i.reduce((function(e, t) {
                return e * t
            }
            )) * (r ? 2 : 1);
            for (o = 0; o < s; o++)
                a[o] = be(e + o * u, i, n, r)
        }
        return a
    }
    function xe(e, t, n) {
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
        return be(0, e, t, n)
    }
    function Ne(e, t) {
        for (var n = ke(e, t), r = 0; r < n.length; r++)
            n[r] = 1;
        return n
    }
    function ke(e, t) {
        if (null == t || "float32" === t || "complex64" === t)
            return new Float32Array(e);
        if ("int32" === t)
            return new Int32Array(e);
        if ("bool" === t)
            return new Uint8Array(e);
        throw new Error("Unknown data type " + t)
    }
    function we(e) {
        e.forEach((function(t) {
            ae(Number.isInteger(t) && t >= 0, (function() {
                return "Tensor must have a shape comprised of positive integers but got shape [" + e + "]."
            }
            ))
        }
        ))
    }
    function Te(e) {
        return e && e.then && "function" == typeof e.then
    }
    var _e = "tfjsflags"
      , Se = function() {
        function e(e) {
            this.global = e,
            this.flags = {},
            this.flagRegistry = {},
            this.urlFlags = {},
            this.getQueryParams = Ee,
            this.populateURLFlags()
        }
        return e.prototype.setPlatform = function(e, t) {
            null != this.platform && (Oe().getBool("IS_TEST") || Oe().getBool("PROD") || console.warn("Platform " + this.platformName + " has already been set. Overwriting the platform with " + t + ".")),
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
                Oe().getBool("IS_TEST") || Oe().getBool("PROD") || console.warn("Setting feature override from URL " + e + ": " + r + "."),
                this.set(e, r)
            }
        }
        ,
        e.prototype.getAsync = function(e) {
            return i(this, void 0, void 0, (function() {
                var t, n;
                return u(this, (function(r) {
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
            if (Te(t))
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
                if (_e in t)
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
    function Ee(e) {
        var t = {};
        return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (function(e) {
            for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            return Ie(t, n[0], n[1]),
            n.join("=")
        }
        )),
        t
    }
    function Ie(e, t, n) {
        e[decodeURIComponent(t)] = decodeURIComponent(n || "")
    }
    function Oe() {
        return Ae
    }
    var De, Ae = null;
    function Me() {
        if (null == De) {
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
            De = e
        }
        return De
    }
    function Fe(e, t) {
        var n, r = (null == (n = Me())._tfGlobals && (n._tfGlobals = new Map),
        n._tfGlobals);
        if (r.has(e))
            return r.get(e);
        var a = t();
        return r.set(e, a),
        r.get(e)
    }
    var Ce = "Cast"
      , Re = "Einsum"
      , Ve = "Identity"
      , ze = "Tile"
      , Le = "_FusedMatMul"
      , Pe = "FusedConv2D"
      , Be = "FusedDepthwiseConv2D";
    function Ke() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        Oe().getBool("IS_TEST") || Oe().getBool("PROD") || console.warn.apply(console, c(e))
    }
    var je = Fe("kernelRegistry", (function() {
        return new Map
    }
    ))
      , qe = Fe("gradRegistry", (function() {
        return new Map
    }
    ));
    function We(e, t) {
        var n = function(e, t) {
            return t + "_" + e
        }(e, t);
        return je.get(n)
    }
    function Ue(e) {
        return qe.get(e)
    }
    function He(e) {
        for (var t = je.entries(), n = []; ; ) {
            var r = t.next()
              , a = r.done
              , s = r.value;
            if (a)
                break;
            var o = l(s, 2)
              , i = o[0]
              , u = o[1];
            l(i.split("_"), 1)[0] === e && n.push(u)
        }
        return n
    }
    var Ge = Qe
      , Ze = null;
    try {
        Ze = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])),{}).exports
    } catch (e) {}
    function Qe(e, t, n) {
        this.low = 0 | e,
        this.high = 0 | t,
        this.unsigned = !!n
    }
    function Ye(e) {
        return !0 === (e && e.__isLong__)
    }
    Qe.prototype.__isLong__,
    Object.defineProperty(Qe.prototype, "__isLong__", {
        value: !0
    }),
    Qe.isLong = Ye;
    var Xe = {}
      , $e = {};
    function Je(e, t) {
        var n, r, a;
        return t ? (a = 0 <= (e >>>= 0) && e < 256) && (r = $e[e]) ? r : (n = tt(e, (0 | e) < 0 ? -1 : 0, !0),
        a && ($e[e] = n),
        n) : (a = -128 <= (e |= 0) && e < 128) && (r = Xe[e]) ? r : (n = tt(e, e < 0 ? -1 : 0, !1),
        a && (Xe[e] = n),
        n)
    }
    function et(e, t) {
        if (isNaN(e))
            return t ? lt : pt;
        if (t) {
            if (e < 0)
                return lt;
            if (e >= ot)
                return mt
        } else {
            if (e <= -it)
                return yt;
            if (e + 1 >= it)
                return ft
        }
        return e < 0 ? et(-e, t).neg() : tt(e % st | 0, e / st | 0, t)
    }
    function tt(e, t, n) {
        return new Qe(e,t,n)
    }
    Qe.fromInt = Je,
    Qe.fromNumber = et,
    Qe.fromBits = tt;
    var nt = Math.pow;
    function rt(e, t, n) {
        if (0 === e.length)
            throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e)
            return pt;
        if ("number" == typeof t ? (n = t,
        t = !1) : t = !!t,
        (n = n || 10) < 2 || 36 < n)
            throw RangeError("radix");
        var r;
        if ((r = e.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (0 === r)
            return rt(e.substring(1), t, n).neg();
        for (var a = et(nt(n, 8)), s = pt, o = 0; o < e.length; o += 8) {
            var i = Math.min(8, e.length - o)
              , u = parseInt(e.substring(o, o + i), n);
            if (i < 8) {
                var p = et(nt(n, i));
                s = s.mul(p).add(et(u))
            } else
                s = (s = s.mul(a)).add(et(u))
        }
        return s.unsigned = t,
        s
    }
    function at(e, t) {
        return "number" == typeof e ? et(e, t) : "string" == typeof e ? rt(e, t) : tt(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
    }
    Qe.fromString = rt,
    Qe.fromValue = at;
    var st = 4294967296
      , ot = st * st
      , it = ot / 2
      , ut = Je(1 << 24)
      , pt = Je(0);
    Qe.ZERO = pt;
    var lt = Je(0, !0);
    Qe.UZERO = lt;
    var ct = Je(1);
    Qe.ONE = ct;
    var dt = Je(1, !0);
    Qe.UONE = dt;
    var ht = Je(-1);
    Qe.NEG_ONE = ht;
    var ft = tt(-1, 2147483647, !1);
    Qe.MAX_VALUE = ft;
    var mt = tt(-1, -1, !0);
    Qe.MAX_UNSIGNED_VALUE = mt;
    var yt = tt(0, -2147483648, !1);
    Qe.MIN_VALUE = yt;
    var gt = Qe.prototype;
    gt.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ,
    gt.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * st + (this.low >>> 0) : this.high * st + (this.low >>> 0)
    }
    ,
    gt.toString = function(e) {
        if ((e = e || 10) < 2 || 36 < e)
            throw RangeError("radix");
        if (this.isZero())
            return "0";
        if (this.isNegative()) {
            if (this.eq(yt)) {
                var t = et(e)
                  , n = this.div(t)
                  , r = n.mul(t).sub(this);
                return n.toString(e) + r.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        for (var a = et(nt(e, 6), this.unsigned), s = this, o = ""; ; ) {
            var i = s.div(a)
              , u = (s.sub(i.mul(a)).toInt() >>> 0).toString(e);
            if ((s = i).isZero())
                return u + o;
            for (; u.length < 6; )
                u = "0" + u;
            o = "" + u + o
        }
    }
    ,
    gt.getHighBits = function() {
        return this.high
    }
    ,
    gt.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ,
    gt.getLowBits = function() {
        return this.low
    }
    ,
    gt.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ,
    gt.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.eq(yt) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--)
            ;
        return 0 != this.high ? t + 33 : t + 1
    }
    ,
    gt.isZero = function() {
        return 0 === this.high && 0 === this.low
    }
    ,
    gt.eqz = gt.isZero,
    gt.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ,
    gt.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ,
    gt.isOdd = function() {
        return 1 == (1 & this.low)
    }
    ,
    gt.isEven = function() {
        return 0 == (1 & this.low)
    }
    ,
    gt.equals = function(e) {
        return Ye(e) || (e = at(e)),
        (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
    }
    ,
    gt.eq = gt.equals,
    gt.notEquals = function(e) {
        return !this.eq(e)
    }
    ,
    gt.neq = gt.notEquals,
    gt.ne = gt.notEquals,
    gt.lessThan = function(e) {
        return this.comp(e) < 0
    }
    ,
    gt.lt = gt.lessThan,
    gt.lessThanOrEqual = function(e) {
        return this.comp(e) <= 0
    }
    ,
    gt.lte = gt.lessThanOrEqual,
    gt.le = gt.lessThanOrEqual,
    gt.greaterThan = function(e) {
        return this.comp(e) > 0
    }
    ,
    gt.gt = gt.greaterThan,
    gt.greaterThanOrEqual = function(e) {
        return this.comp(e) >= 0
    }
    ,
    gt.gte = gt.greaterThanOrEqual,
    gt.ge = gt.greaterThanOrEqual,
    gt.compare = function(e) {
        if (Ye(e) || (e = at(e)),
        this.eq(e))
            return 0;
        var t = this.isNegative()
          , n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }
    ,
    gt.comp = gt.compare,
    gt.negate = function() {
        return !this.unsigned && this.eq(yt) ? yt : this.not().add(ct)
    }
    ,
    gt.neg = gt.negate,
    gt.add = function(e) {
        Ye(e) || (e = at(e));
        var t = this.high >>> 16
          , n = 65535 & this.high
          , r = this.low >>> 16
          , a = 65535 & this.low
          , s = e.high >>> 16
          , o = 65535 & e.high
          , i = e.low >>> 16
          , u = 0
          , p = 0
          , l = 0
          , c = 0;
        return l += (c += a + (65535 & e.low)) >>> 16,
        p += (l += r + i) >>> 16,
        u += (p += n + o) >>> 16,
        u += t + s,
        tt((l &= 65535) << 16 | (c &= 65535), (u &= 65535) << 16 | (p &= 65535), this.unsigned)
    }
    ,
    gt.subtract = function(e) {
        return Ye(e) || (e = at(e)),
        this.add(e.neg())
    }
    ,
    gt.sub = gt.subtract,
    gt.multiply = function(e) {
        if (this.isZero())
            return pt;
        if (Ye(e) || (e = at(e)),
        Ze)
            return tt(Ze.mul(this.low, this.high, e.low, e.high), Ze.get_high(), this.unsigned);
        if (e.isZero())
            return pt;
        if (this.eq(yt))
            return e.isOdd() ? yt : pt;
        if (e.eq(yt))
            return this.isOdd() ? yt : pt;
        if (this.isNegative())
            return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative())
            return this.mul(e.neg()).neg();
        if (this.lt(ut) && e.lt(ut))
            return et(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16
          , n = 65535 & this.high
          , r = this.low >>> 16
          , a = 65535 & this.low
          , s = e.high >>> 16
          , o = 65535 & e.high
          , i = e.low >>> 16
          , u = 65535 & e.low
          , p = 0
          , l = 0
          , c = 0
          , d = 0;
        return c += (d += a * u) >>> 16,
        l += (c += r * u) >>> 16,
        c &= 65535,
        l += (c += a * i) >>> 16,
        p += (l += n * u) >>> 16,
        l &= 65535,
        p += (l += r * i) >>> 16,
        l &= 65535,
        p += (l += a * o) >>> 16,
        p += t * u + n * i + r * o + a * s,
        tt((c &= 65535) << 16 | (d &= 65535), (p &= 65535) << 16 | (l &= 65535), this.unsigned)
    }
    ,
    gt.mul = gt.multiply,
    gt.divide = function(e) {
        if (Ye(e) || (e = at(e)),
        e.isZero())
            throw Error("division by zero");
        var t, n, r;
        if (Ze)
            return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? tt((this.unsigned ? Ze.div_u : Ze.div_s)(this.low, this.high, e.low, e.high), Ze.get_high(), this.unsigned) : this;
        if (this.isZero())
            return this.unsigned ? lt : pt;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()),
            e.gt(this))
                return lt;
            if (e.gt(this.shru(1)))
                return dt;
            r = lt
        } else {
            if (this.eq(yt))
                return e.eq(ct) || e.eq(ht) ? yt : e.eq(yt) ? ct : (t = this.shr(1).div(e).shl(1)).eq(pt) ? e.isNegative() ? ct : ht : (n = this.sub(e.mul(t)),
                r = t.add(n.div(e)));
            if (e.eq(yt))
                return this.unsigned ? lt : pt;
            if (this.isNegative())
                return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative())
                return this.div(e.neg()).neg();
            r = pt
        }
        for (n = this; n.gte(e); ) {
            t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            for (var a = Math.ceil(Math.log(t) / Math.LN2), s = a <= 48 ? 1 : nt(2, a - 48), o = et(t), i = o.mul(e); i.isNegative() || i.gt(n); )
                i = (o = et(t -= s, this.unsigned)).mul(e);
            o.isZero() && (o = ct),
            r = r.add(o),
            n = n.sub(i)
        }
        return r
    }
    ,
    gt.div = gt.divide,
    gt.modulo = function(e) {
        return Ye(e) || (e = at(e)),
        Ze ? tt((this.unsigned ? Ze.rem_u : Ze.rem_s)(this.low, this.high, e.low, e.high), Ze.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
    }
    ,
    gt.mod = gt.modulo,
    gt.rem = gt.modulo,
    gt.not = function() {
        return tt(~this.low, ~this.high, this.unsigned)
    }
    ,
    gt.and = function(e) {
        return Ye(e) || (e = at(e)),
        tt(this.low & e.low, this.high & e.high, this.unsigned)
    }
    ,
    gt.or = function(e) {
        return Ye(e) || (e = at(e)),
        tt(this.low | e.low, this.high | e.high, this.unsigned)
    }
    ,
    gt.xor = function(e) {
        return Ye(e) || (e = at(e)),
        tt(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }
    ,
    gt.shiftLeft = function(e) {
        return Ye(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? tt(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : tt(0, this.low << e - 32, this.unsigned)
    }
    ,
    gt.shl = gt.shiftLeft,
    gt.shiftRight = function(e) {
        return Ye(e) && (e = e.toInt()),
        0 == (e &= 63) ? this : e < 32 ? tt(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : tt(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ,
    gt.shr = gt.shiftRight,
    gt.shiftRightUnsigned = function(e) {
        if (Ye(e) && (e = e.toInt()),
        0 === (e &= 63))
            return this;
        var t = this.high;
        return e < 32 ? tt(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : tt(32 === e ? t : t >>> e - 32, 0, this.unsigned)
    }
    ,
    gt.shru = gt.shiftRightUnsigned,
    gt.shr_u = gt.shiftRightUnsigned,
    gt.toSigned = function() {
        return this.unsigned ? tt(this.low, this.high, !1) : this
    }
    ,
    gt.toUnsigned = function() {
        return this.unsigned ? this : tt(this.low, this.high, !0)
    }
    ,
    gt.toBytes = function(e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }
    ,
    gt.toBytesLE = function() {
        var e = this.high
          , t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }
    ,
    gt.toBytesBE = function() {
        var e = this.high
          , t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }
    ,
    Qe.fromBytes = function(e, t, n) {
        return n ? Qe.fromBytesLE(e, t) : Qe.fromBytesBE(e, t)
    }
    ,
    Qe.fromBytesLE = function(e, t) {
        return new Qe(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24,e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24,t)
    }
    ,
    Qe.fromBytesBE = function(e, t) {
        return new Qe(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7],e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3],t)
    }
    ;
    var vt = Ge || Object.assign(Object.create(null), Ge, {
        default: Ge
    });
    function bt(e) {
        return vt.fromString(e, !0, 16)
    }
    function xt(e, t) {
        if ("string" === t)
            throw new Error("Cannot convert a string[] to a TypedArray");
        if (Array.isArray(e) && (e = ie(e)),
        Oe().getBool("DEBUG") && function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (isNaN(r) || !isFinite(r))
                    throw Error("A tensor of type " + t + " being uploaded contains " + r + ".")
            }
        }(e, t),
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
    function Nt() {
        return Oe().platform.now()
    }
    function kt(e, t) {
        return void 0 === t && (t = "utf-8"),
        t = t || "utf-8",
        Oe().platform.decode(e, t)
    }
    bt("c3a5c85c97cb3127"),
    bt("b492b66fbe98f273"),
    bt("9ae16a3b2f90404f");
    var wt = function() {
        function e(e, t) {
            this.backendTimer = e,
            this.logger = t,
            null == t && (this.logger = new Tt)
        }
        return e.prototype.profileKernel = function(e, t, n) {
            var r, a, s, o, i = function() {
                s = n()
            }, u = Nt();
            if (this.backendTimer.timerAvailable())
                o = this.backendTimer.time(i);
            else {
                i();
                try {
                    for (var l = p(s), c = l.next(); !c.done; c = l.next()) {
                        c.value.dataSync()
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (a = l.return) && a.call(l)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
                o = Promise.resolve({
                    kernelMs: Nt() - u
                })
            }
            if (Oe().getBool("CHECK_COMPUTATION_FOR_ERRORS"))
                for (var d = function(t) {
                    var n = s[t];
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
                }, h = 0; h < s.length; h++)
                    d(h);
            return {
                kernelName: e,
                outputs: s,
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
              , s = e.inputs
              , o = e.extraInfo;
            r.forEach((function(e) {
                Promise.all([e.data(), a, o]).then((function(r) {
                    t.logger.logKernelProfile(n, e, r[0], r[1], s, r[2])
                }
                ))
            }
            ))
        }
        ,
        e
    }();
    var Tt = function() {
        function e() {}
        return e.prototype.logKernelProfile = function(e, t, n, r, a, s) {
            var o = "number" == typeof r ? ce(r + "ms", 9) : r.error
              , i = ce(e, 25)
              , u = t.rank
              , p = t.size
              , l = ce(t.shape.toString(), 14)
              , c = "";
            for (var d in a) {
                var h = a[d];
                if (null != h) {
                    var f = h.shape || t.shape
                      , m = f.length;
                    c += d + ": " + m + "D " + (m > 0 ? f : "") + " "
                }
            }
            console.log("%c" + i + "\t%c" + o + "\t%c" + u + "D " + l + "\t%c" + p + "\t%c" + c + "\t%c" + s, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue")
        }
        ,
        e
    }();
    function _t(e, t, n, r) {
        var a = ve(t)
          , s = function(e, t, n, r) {
            var a = ue(t)
              , s = r[r.length - 1]
              , o = new Array(s).fill(0)
              , i = t.length
              , u = "complex64" === n ? Ot(e) : e;
            if (i > 1)
                for (var p = 0; p < a / s; p++)
                    for (var l = p * s, c = 0; c < s; c++)
                        o[c] = Math.max(o[c], St(u[l + c], 0, n).length);
            return o
        }(e, t, n, a)
          , o = t.length
          , i = It(e, t, n, a, s)
          , u = ["Tensor"];
        return r && (u.push("  dtype: " + n),
        u.push("  rank: " + o),
        u.push("  shape: [" + t + "]"),
        u.push("  values:")),
        u.push(i.map((function(e) {
            return "    " + e
        }
        )).join("\n")),
        u.join("\n")
    }
    function St(e, t, n) {
        return ce(Array.isArray(e) ? parseFloat(e[0].toFixed(7)) + " + " + parseFloat(e[1].toFixed(7)) + "j" : me(e) ? "'" + e + "'" : "bool" === n ? Et(e) : parseFloat(e.toFixed(7)).toString(), t)
    }
    function Et(e) {
        return 0 === e ? "false" : "true"
    }
    function It(e, t, n, r, a, s) {
        void 0 === s && (s = !0);
        var o = "complex64" === n ? 2 : 1
          , i = t[0]
          , u = t.length;
        if (0 === u)
            return "complex64" === n ? [St(Ot(e)[0], 0, n)] : "bool" === n ? [Et(e[0])] : [e[0].toString()];
        if (1 === u) {
            if (i > 20) {
                var p = 3 * o
                  , l = Array.from(e.slice(0, p))
                  , d = Array.from(e.slice((i - 3) * o, i * o));
                return "complex64" === n && (l = Ot(l),
                d = Ot(d)),
                ["[" + l.map((function(e, t) {
                    return St(e, a[t], n)
                }
                )).join(", ") + ", ..., " + d.map((function(e, t) {
                    return St(e, a[i - 3 + t], n)
                }
                )).join(", ") + "]"]
            }
            return ["[" + ("complex64" === n ? Ot(e) : Array.from(e)).map((function(e, t) {
                return St(e, a[t], n)
            }
            )).join(", ") + "]"]
        }
        var h = t.slice(1)
          , f = r.slice(1)
          , m = r[0] * o
          , y = [];
        if (i > 20) {
            for (var g = 0; g < 3; g++) {
                var v = (b = g * m) + m;
                y.push.apply(y, c(It(e.slice(b, v), h, n, f, a, !1)))
            }
            y.push("...");
            for (g = i - 3; g < i; g++) {
                v = (b = g * m) + m;
                y.push.apply(y, c(It(e.slice(b, v), h, n, f, a, g === i - 1)))
            }
        } else
            for (g = 0; g < i; g++) {
                var b;
                v = (b = g * m) + m;
                y.push.apply(y, c(It(e.slice(b, v), h, n, f, a, g === i - 1)))
            }
        var x = 2 === u ? "," : "";
        y[0] = "[" + y[0] + x;
        for (g = 1; g < y.length - 1; g++)
            y[g] = " " + y[g] + x;
        var N = ",\n";
        for (g = 2; g < u; g++)
            N += "\n";
        return y[y.length - 1] = " " + y[y.length - 1] + "]" + (s ? "" : N),
        y
    }
    function Ot(e) {
        for (var t = [], n = 0; n < e.length; n += 2)
            t.push([e[n], e[n + 1]]);
        return t
    }
    var Dt = function() {
        function e(e, t, n) {
            var r = this;
            if (this.dtype = t,
            this.shape = e.slice(),
            this.size = ue(e),
            null != n) {
                var a = n.length;
                ae(a === this.size, (function() {
                    return "Length of values '" + a + "' does not match the size inferred by the shape '" + r.size + "'."
                }
                ))
            }
            if ("complex64" === t)
                throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
            this.values = n || function(e, t) {
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
            }(t, this.size),
            this.strides = ve(e)
        }
        return e.prototype.set = function(e) {
            for (var t = this, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            0 === n.length && (n = [0]),
            ae(n.length === this.rank, (function() {
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
                for (var s = p(n), o = s.next(); !o.done; o = s.next()) {
                    var i = o.value;
                    if (i < 0 || i >= this.shape[a]) {
                        var u = "Requested out of range element at " + n + ".   Buffer shape=" + this.shape;
                        throw new Error(u)
                    }
                    a++
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (t = s.return) && t.call(s)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            for (var l = n[n.length - 1], c = 0; c < n.length - 1; ++c)
                l += this.strides[c] * n[c];
            return this.values[l]
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
            return At().makeTensor(this.values, this.shape, this.dtype)
        }
        ,
        e
    }()
      , At = null
      , Mt = null;
    var Ft = function() {
        function e(e, t, n, r) {
            this.kept = !1,
            this.isDisposedInternal = !1,
            this.shape = e.slice(),
            this.dtype = t || "float32",
            this.size = ue(e),
            this.strides = ve(e),
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
            return i(this, void 0, void 0, (function() {
                var e;
                return u(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return e = t.sent(),
                        [2, Mt.buffer(this.shape, this.dtype, e)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.bufferSync = function() {
            return Mt.buffer(this.shape, this.dtype, this.dataSync())
        }
        ,
        e.prototype.array = function() {
            return i(this, void 0, void 0, (function() {
                var e;
                return u(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this.data()];
                    case 1:
                        return e = t.sent(),
                        [2, xe(this.shape, e, "complex64" === this.dtype)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.arraySync = function() {
            return xe(this.shape, this.dataSync(), "complex64" === this.dtype)
        }
        ,
        e.prototype.data = function() {
            return i(this, void 0, void 0, (function() {
                var e, t;
                return u(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return this.throwIfDisposed(),
                        e = At().read(this.dataId),
                        "string" !== this.dtype ? [3, 2] : [4, e];
                    case 1:
                        t = n.sent();
                        try {
                            return [2, t.map((function(e) {
                                return kt(e)
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
            At().readToGPU(this.dataId, e)
        }
        ,
        e.prototype.dataSync = function() {
            this.throwIfDisposed();
            var e = At().readSync(this.dataId);
            if ("string" === this.dtype)
                try {
                    return e.map((function(e) {
                        return kt(e)
                    }
                    ))
                } catch (e) {
                    throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")
                }
            return e
        }
        ,
        e.prototype.bytes = function() {
            return i(this, void 0, void 0, (function() {
                var e;
                return u(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.throwIfDisposed(),
                        [4, At().read(this.dataId)];
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
            this.isDisposed || (At().disposeTensor(this),
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
            Mt.print(this, e)
        }
        ,
        e.prototype.clone = function() {
            return this.throwIfDisposed(),
            Mt.clone(this)
        }
        ,
        e.prototype.toString = function(e) {
            return void 0 === e && (e = !1),
            _t(this.dataSync(), this.shape, this.dtype, e)
        }
        ,
        e.prototype.cast = function(e) {
            return this.throwIfDisposed(),
            Mt.cast(this, e)
        }
        ,
        e.prototype.variable = function(e, t, n) {
            return void 0 === e && (e = !0),
            this.throwIfDisposed(),
            At().makeVariable(this, e, t, n)
        }
        ,
        e
    }();
    Object.defineProperty(Ft, Symbol.hasInstance, {
        value: function(e) {
            return !!e && null != e.data && null != e.dataSync && null != e.throwIfDisposed
        }
    }),
    Fe("Tensor", (function() {
        return Ft
    }
    ));
    var Ct, Rt, Vt, zt, Lt, Pt = function(e) {
        function t(t, n, r, a) {
            var s = e.call(this, t.shape, t.dtype, t.dataId, a) || this;
            return s.trainable = n,
            s.name = r,
            s
        }
        return function(e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }(t, e),
        t.prototype.assign = function(e) {
            if (e.dtype !== this.dtype)
                throw new Error("dtype of the new value (" + e.dtype + ") and previous value (" + this.dtype + ") must match");
            if (!pe(e.shape, this.shape))
                throw new Error("shape of the new value (" + e.shape + ") and previous value (" + this.shape + ") must match");
            At().disposeTensor(this),
            this.dataId = e.dataId,
            At().incRef(this, null)
        }
        ,
        t.prototype.dispose = function() {
            At().disposeVariable(this),
            this.isDisposedInternal = !0
        }
        ,
        t
    }(Ft);
    Object.defineProperty(Pt, Symbol.hasInstance, {
        value: function(e) {
            return e instanceof Ft && null != e.assign && e.assign instanceof Function
        }
    }),
    function(e) {
        e.R0 = "R0",
        e.R1 = "R1",
        e.R2 = "R2",
        e.R3 = "R3",
        e.R4 = "R4",
        e.R5 = "R5",
        e.R6 = "R6"
    }(Ct || (Ct = {})),
    function(e) {
        e.float32 = "float32",
        e.int32 = "int32",
        e.bool = "int32",
        e.complex64 = "complex64"
    }(Rt || (Rt = {})),
    function(e) {
        e.float32 = "float32",
        e.int32 = "int32",
        e.bool = "bool",
        e.complex64 = "complex64"
    }(Vt || (Vt = {})),
    function(e) {
        e.float32 = "float32",
        e.int32 = "float32",
        e.bool = "float32",
        e.complex64 = "complex64"
    }(zt || (zt = {})),
    function(e) {
        e.float32 = "complex64",
        e.int32 = "complex64",
        e.bool = "complex64",
        e.complex64 = "complex64"
    }(Lt || (Lt = {}));
    var Bt = {
        float32: zt,
        int32: Rt,
        bool: Vt,
        complex64: Lt
    };
    function Kt(e, t) {
        if (e.dtype === t.dtype)
            return [e, t];
        var n = function(e, t) {
            if ("string" === e || "string" === t) {
                if ("string" === e && "string" === t)
                    return "string";
                throw new Error("Can not upcast " + e + " with " + t)
            }
            return Bt[e][t]
        }(e.dtype, t.dtype);
        return [e.cast(n), t.cast(n)]
    }
    function jt(e) {
        var t = [];
        return qt(e, t, new Set),
        t
    }
    function qt(e, t, n) {
        if (null != e)
            if (e instanceof Ft)
                t.push(e);
            else if (r = e,
            Array.isArray(r) || "object" == typeof r) {
                var r, a = e;
                for (var s in a) {
                    var o = a[s];
                    n.has(o) || (n.add(o),
                    qt(o, t, n))
                }
            }
    }
    function Wt(e) {
        return null != e.kernelName
    }
    var Ut = function() {
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
      , Ht = function() {
        function e(e) {
            this.ENV = e,
            this.registry = {},
            this.registryFactory = {},
            this.pendingBackendInitId = 0,
            this.state = new Ut
        }
        return e.prototype.ready = function() {
            return i(this, void 0, void 0, (function() {
                var e, t, n;
                return u(this, (function(r) {
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
            e in this.registryFactory ? (Ke(e + " backend was already registered. Reusing existing backend factory."),
            !1) : (this.registryFactory[e] = {
                factory: t,
                priority: n
            },
            !0)
        }
        ,
        e.prototype.setBackend = function(e) {
            return i(this, void 0, void 0, (function() {
                var t, n, r;
                return u(this, (function(a) {
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
                        this.profiler = new wt(this.backendInstance),
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
            He(this.backendName).forEach((function(t) {
                null != t.setupFunc && t.setupFunc(e.backendInstance)
            }
            ))
        }
        ,
        e.prototype.disposeRegisteredKernels = function(e) {
            var t = this;
            He(e).forEach((function(n) {
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
                if (!r || r instanceof ne || "function" != typeof r.then)
                    return this.registry[e] = r,
                    {
                        success: !0,
                        asyncInit: !1
                    };
                var a = ++this.pendingBackendInitId
                  , s = r.then((function(n) {
                    return !(a < t.pendingBackendInitId) && (t.registry[e] = n,
                    t.pendingBackendInit = null,
                    !0)
                }
                )).catch((function(n) {
                    return a < t.pendingBackendInitId || (t.pendingBackendInit = null,
                    Ke("Initialization of backend " + e + " failed"),
                    Ke(n.stack || n.message)),
                    !1
                }
                ));
                return this.pendingBackendInit = s,
                {
                    success: s,
                    asyncInit: !0
                }
            } catch (t) {
                return Ke("Initialization of backend " + e + " failed"),
                Ke(t.stack || t.message),
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
                  , s = r.asyncInit;
                if (s || a)
                    return {
                        name: n,
                        asyncInit: s
                    }
            }
            throw new Error("Could not initialize any backends, all backend initializations failed.")
        }
        ,
        e.prototype.moveData = function(e, t) {
            var n = this.state.tensorInfo.get(t)
              , r = n.backend
              , a = this.readSync(t)
              , s = r.refCount(t);
            r.disposeData(t, !0),
            n.backend = e,
            e.move(t, a, n.shape, n.dtype, s),
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
            var t = Gt.runKernel(Ve, {
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
                        return Gt.runKernel(Ce, t, n)
                    }
                }
            }
            ), [], {}),
            t
        }
        ,
        e.prototype.runKernel = function(e, t, n) {
            if (null == this.backendName && this.backend,
            !(null != We(e, this.backendName)))
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
            var s = this.state.numDataMovesStack[this.state.numDataMovesStack.length - 1]
              , o = r - t - a - s;
            if (o > 0)
                throw new Error("Backend '" + this.backendName + "' has an internal memory leak (" + o + " data ids) after running '" + e + "'")
        }
        ,
        e.prototype.runKernelFunc = function(e) {
            var t, n, r, a = this, s = [], o = this.isTapeOn(), i = this.state.numBytes, u = this.state.numTensors;
            this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0),
            null == this.backendName && this.backend;
            var p = Wt(e) ? e.kernelName : null != this.state.activeScope ? this.state.activeScope.name : "";
            if (Wt(e)) {
                var l = e.kernelName
                  , c = e.inputs
                  , d = e.attrs;
                null == this.backendName && this.backend;
                var h = We(l, this.backendName);
                ae(null != h, (function() {
                    return "Cannot find registered kernel '" + l + "' for backend '" + a.backendName + "'"
                }
                )),
                n = function() {
                    var e = a.backend.numDataIds();
                    r = h.kernelFunc({
                        inputs: c,
                        attrs: d,
                        backend: a.backend
                    });
                    var t = Array.isArray(r) ? r : [r];
                    a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(l, e, t);
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
                        var i = a.getTensorsForGradient(l, c, n);
                        s = a.saveTensorsForBackwardMode(i)
                    }
                    return n
                }
            } else {
                var f = e.forwardFunc
                  , m = function(e) {
                    o && (s = e.map((function(e) {
                        return a.keep(a.clone(e))
                    }
                    )))
                };
                n = function() {
                    var e = a.backend.numDataIds();
                    r = a.tidy((function() {
                        return f(a.backend, m)
                    }
                    ));
                    var t = Array.isArray(r) ? r : [r];
                    return a.shouldCheckForMemLeaks() && a.checkKernelForMemLeak(p, e, t),
                    t
                }
            }
            var y, g = e.inputs, v = e.attrs, b = Wt(e) ? null : e.backwardsFunc;
            return this.scopedRun((function() {
                return a.state.kernelDepth++
            }
            ), (function() {
                return a.state.kernelDepth--
            }
            ), (function() {
                a.ENV.getBool("DEBUG") || a.state.profiling ? (y = a.profiler.profileKernel(p, g, (function() {
                    return n()
                }
                )),
                a.ENV.getBool("DEBUG") && a.profiler.logKernelProfile(y),
                t = y.outputs) : t = n()
            }
            )),
            o && this.addTapeNode(p, g, t, b, s, v),
            this.state.profiling && this.state.activeProfile.kernels.push({
                name: p,
                bytesAdded: this.state.numBytes - i,
                totalBytesSnapshot: this.state.numBytes,
                tensorsAdded: this.state.numTensors - u,
                totalTensorsSnapshot: this.state.numTensors,
                inputShapes: Object.keys(g).map((function(e) {
                    return null != g[e] ? g[e].shape : null
                }
                )),
                outputShapes: t.map((function(e) {
                    return e.shape
                }
                )),
                kernelTimeMs: y.timeMs,
                extraInfo: y.extraInfo
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
            var r = Ue(e);
            if (null != r) {
                var a = r.inputsToSave || []
                  , s = r.outputsToSave || []
                  , o = void 0;
                r.saveAllInputs ? (ae(Array.isArray(t), (function() {
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
                var i = n.filter((function(e, t) {
                    return s[t]
                }
                ));
                return o.concat(i)
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
            "string" === n && me(e[0]) && (a = e.map((function(e) {
                return t = e,
                void 0 === n && (n = "utf-8"),
                n = n || "utf-8",
                Oe().platform.encode(t, n);
                var t, n
            }
            )));
            var s = r.write(a, t, n)
              , o = new Ft(t,n,s,this.nextTensorId());
            if (this.trackTensor(o, r),
            "string" === n) {
                var i = this.state.tensorInfo.get(s)
                  , u = function(e) {
                    if (null == e)
                        return 0;
                    var t = 0;
                    return e.forEach((function(e) {
                        return t += e.length
                    }
                    )),
                    t
                }(a);
                this.state.numBytes += u - i.bytes,
                i.bytes = u
            }
            return o
        }
        ,
        e.prototype.makeTensorFromDataId = function(e, t, n, r) {
            var a = new Ft(t,n = n || "float32",e,this.nextTensorId());
            return this.trackTensor(a, r),
            a
        }
        ,
        e.prototype.makeVariable = function(e, t, n, r) {
            void 0 === t && (t = !0),
            n = n || this.nextVariableId().toString(),
            null != r && r !== e.dtype && (e = e.cast(r));
            var a = new Pt(e,t,n,this.nextTensorId());
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
            "complex64" !== e.dtype && "string" !== e.dtype && (n = e.size * fe(e.dtype)),
            this.state.numBytes += n,
            this.state.tensorInfo.has(e.dataId) || (this.state.numDataBuffers++,
            this.state.tensorInfo.set(e.dataId, {
                backend: t || this.backend,
                dtype: e.dtype,
                shape: e.shape,
                bytes: n
            })),
            e instanceof Pt || this.track(e)
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
                    var n = e.size * fe(e.dtype);
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
            return i(this, void 0, void 0, (function() {
                var t, n, r, a, s, o, i, l, d, h, f;
                return u(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        return this.state.profiling = !0,
                        t = this.state.numBytes,
                        n = this.state.numTensors,
                        this.state.activeProfile.kernels = [],
                        r = this.state.activeProfile,
                        [4, e()];
                    case 1:
                        r.result = u.sent(),
                        this.state.profiling = !1,
                        this.state.activeProfile.peakBytes = Math.max.apply(Math, c(this.state.activeProfile.kernels.map((function(e) {
                            return e.totalBytesSnapshot
                        }
                        )))),
                        this.state.activeProfile.newBytes = this.state.numBytes - t,
                        this.state.activeProfile.newTensors = this.state.numTensors - n,
                        u.label = 2;
                    case 2:
                        u.trys.push([2, 8, 9, 10]),
                        a = p(this.state.activeProfile.kernels),
                        s = a.next(),
                        u.label = 3;
                    case 3:
                        return s.done ? [3, 7] : (o = s.value,
                        i = o,
                        [4, o.kernelTimeMs]);
                    case 4:
                        return i.kernelTimeMs = u.sent(),
                        l = o,
                        [4, o.extraInfo];
                    case 5:
                        l.extraInfo = u.sent(),
                        u.label = 6;
                    case 6:
                        return s = a.next(),
                        [3, 3];
                    case 7:
                        return [3, 10];
                    case 8:
                        return d = u.sent(),
                        h = {
                            error: d
                        },
                        [3, 10];
                    case 9:
                        try {
                            s && !s.done && (f = a.return) && f.call(a)
                        } finally {
                            if (h)
                                throw h.error
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
        e.prototype.addTapeNode = function(e, t, n, r, a, s) {
            var o = this
              , i = {
                id: this.state.nextTapeNodeId++,
                kernelName: e,
                inputs: t,
                outputs: n,
                saved: a
            }
              , u = Ue(e);
            null != u && (r = u.gradFunc),
            null != r && (i.gradient = function(e) {
                return e = e.map((function(e, t) {
                    if (null == e) {
                        var r = n[t]
                          , a = ke(r.size, r.dtype);
                        return o.makeTensor(a, r.shape, r.dtype)
                    }
                    return e
                }
                )),
                r(e.length > 1 ? e : e[0], a, s)
            }
            ),
            this.state.activeTape.push(i)
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
            for (var t = this, n = jt(e), r = new Set(n.map((function(e) {
                return e.id
            }
            ))), a = 0; a < this.state.activeScope.track.length; a++) {
                var s = this.state.activeScope.track[a];
                s.kept || r.has(s.id) || s.dispose()
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
            ae(t.length > 0, (function() {
                return "gradients() received an empty list of xs."
            }
            )),
            null != n && "float32" !== n.dtype)
                throw new Error("dy must have 'float32' dtype, but has '" + n.dtype + "'");
            var s = this.scopedRun((function() {
                return a.startTape()
            }
            ), (function() {
                return a.endTape()
            }
            ), (function() {
                return a.tidy("forward", e)
            }
            ));
            ae(s instanceof Ft, (function() {
                return "The result y returned by f() must be a tensor."
            }
            ));
            var o = function(e, t, n) {
                for (var r = {}, a = {}, s = 0; s < t.length; s++)
                    r[t[s].id] = !0;
                for (s = 0; s < e.length; s++) {
                    var o = (f = e[s]).inputs;
                    for (var i in o) {
                        for (var u = o[i], p = !1, l = 0; l < t.length; l++)
                            if (r[u.id]) {
                                f.outputs.forEach((function(e) {
                                    return r[e.id] = !0
                                }
                                )),
                                p = !0,
                                a[f.id] = !0;
                                break
                            }
                        if (p)
                            break
                    }
                }
                var c = {};
                c[n.id] = !0;
                var d = {};
                for (s = e.length - 1; s >= 0; s--)
                    for (o = (f = e[s]).inputs,
                    l = 0; l < f.outputs.length; l++)
                        if (c[f.outputs[l].id]) {
                            for (var i in o)
                                c[o[i].id] = !0,
                                d[f.id] = !0;
                            break
                        }
                var h = [];
                for (s = 0; s < e.length; s++) {
                    var f;
                    if (a[(f = e[s]).id] && d[f.id]) {
                        var m = {};
                        for (var i in f.inputs) {
                            var y = f.inputs[i];
                            r[y.id] && (m[i] = y)
                        }
                        var g = Object.assign({}, f);
                        g.inputs = m,
                        g.outputs = f.outputs,
                        h.push(g)
                    }
                }
                return h
            }(this.state.activeTape, t, s);
            if (!r && 0 === o.length && t.length > 0)
                throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
            return this.tidy("backward", (function() {
                var e, r, i = {};
                i[s.id] = null == n ? (e = s.shape,
                r = Ne(ue(e), "float32"),
                Gt.makeTensor(r, e, "float32")) : n,
                function(e, t, n, r) {
                    for (var a = function(a) {
                        var s = t[a]
                          , o = [];
                        if (s.outputs.forEach((function(t) {
                            var n = e[t.id];
                            null != n ? o.push(n) : o.push(null)
                        }
                        )),
                        null == s.gradient)
                            throw new Error("Cannot compute gradient: gradient function not found for " + s.kernelName + ".");
                        var i = s.gradient(o)
                          , u = function(t) {
                            if (!(t in i))
                                throw new Error("Cannot backprop through input " + t + ". Available gradients found: " + Object.keys(i) + ".");
                            var a = n((function() {
                                return i[t]()
                            }
                            ));
                            if ("float32" !== a.dtype)
                                throw new Error("Error in gradient for op " + s.kernelName + ". The gradient of input " + t + " must have 'float32' dtype, but has '" + a.dtype + "'");
                            var o = s.inputs[t];
                            if (!pe(a.shape, o.shape))
                                throw new Error("Error in gradient for op " + s.kernelName + ". The gradient of input '" + t + "' has shape '" + a.shape + "', which does not match the shape of the input '" + o.shape + "'");
                            if (null == e[o.id])
                                e[o.id] = a;
                            else {
                                var u = e[o.id];
                                e[o.id] = r(u, a),
                                u.dispose()
                            }
                        };
                        for (var p in s.inputs)
                            u(p)
                    }, s = t.length - 1; s >= 0; s--)
                        a(s)
                }(i, o, (function(e) {
                    return a.tidy(e)
                }
                ), Zt);
                var u = t.map((function(e) {
                    return i[e.id]
                }
                ));
                return 0 === a.state.gradientDepth && (a.state.activeTape.forEach((function(e) {
                    var t, n;
                    try {
                        for (var r = p(e.saved), a = r.next(); !a.done; a = r.next()) {
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
                    value: s,
                    grads: u
                }
            }
            ))
        }
        ,
        e.prototype.customGrad = function(e) {
            var t = this;
            return ae(ge(e), (function() {
                return "The f passed in customGrad(f) must be a function."
            }
            )),
            function() {
                for (var n, r = [], a = 0; a < arguments.length; a++)
                    r[a] = arguments[a];
                ae(r.every((function(e) {
                    return e instanceof Ft
                }
                )), (function() {
                    return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
                }
                ));
                var s = {};
                r.forEach((function(e, t) {
                    s[t] = e
                }
                ));
                var o = function(t, a) {
                    return ae((n = e.apply(void 0, c(r, [a]))).value instanceof Ft, (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
                    }
                    )),
                    ae(ge(n.gradFunc), (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
                    }
                    )),
                    n.value
                }
                  , i = function(e, t) {
                    var a = n.gradFunc(e, t)
                      , s = Array.isArray(a) ? a : [a];
                    ae(s.length === r.length, (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
                    }
                    )),
                    ae(s.every((function(e) {
                        return e instanceof Ft
                    }
                    )), (function() {
                        return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
                    }
                    ));
                    var o = {};
                    return s.forEach((function(e, t) {
                        o[t] = function() {
                            return e
                        }
                    }
                    )),
                    o
                };
                return t.runKernelFunc({
                    forwardFunc: o,
                    backwardsFunc: i,
                    inputs: s
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
            return i(this, void 0, void 0, (function() {
                var t, n;
                return u(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = Nt(),
                        [4, this.backend.time(e)];
                    case 1:
                        return (n = r.sent()).wallMs = Nt() - t,
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
            this.state = new Ut,
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
    Ht.nextTensorId = 0,
    Ht.nextVariableId = 0;
    var Gt = function() {
        var e = Me();
        if (null == e._tfengine) {
            var t = new Se(e);
            e._tfengine = new Ht(t)
        }
        return function(e) {
            Ae = e
        }(e._tfengine.ENV),
        At = function() {
            return e._tfengine
        }
        ,
        e._tfengine
    }();
    function Zt(e, t) {
        var n = {
            a: e,
            b: t
        };
        return Gt.runKernel("Add", n)
    }
    function Qt(e, t) {
        var n = e;
        if (he(e))
            return "string" === t ? [] : [e.length];
        if (!Array.isArray(e))
            return [];
        for (var r = []; Array.isArray(n) || he(n) && "string" !== t; )
            r.push(n.length),
            n = n[0];
        return Array.isArray(e) && Oe().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && Yt(e, r, []),
        r
    }
    function Yt(e, t, n) {
        if (n = n || [],
        Array.isArray(e) || he(e)) {
            ae(t.length > 0, (function() {
                return "Element arr[" + n.join("][") + "] should be a primitive, but is an array of " + e.length + " elements"
            }
            )),
            ae(e.length === t[0], (function() {
                return "Element arr[" + n.join("][") + "] should have " + t[0] + " elements, but has " + e.length + " elements"
            }
            ));
            for (var r = t.slice(1), a = 0; a < e.length; ++a)
                Yt(e[a], r, n.concat(a))
        } else
            ae(0 === t.length, (function() {
                return "Element arr[" + n.join("][") + "] is a primitive, but should be an array/TypedArray of " + t[0] + " elements"
            }
            ))
    }
    function Xt(e, t, n, r) {
        if ("string_or_numeric" !== e) {
            if (null == e)
                throw new Error("Expected dtype cannot be null.");
            if ("numeric" !== e && e !== t || "numeric" === e && "string" === t)
                throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + e + " tensor, but got " + t + " tensor")
        }
    }
    function $t(e, t, n, r) {
        if (void 0 === r && (r = "numeric"),
        e instanceof Ft)
            return Xt(r, e.dtype, t, n),
            e;
        var a = ye(e);
        if ("string" !== a && ["bool", "int32", "float32"].indexOf(r) >= 0 && (a = r),
        Xt(r, a, t, n),
        null == e || !he(e) && !Array.isArray(e) && "number" != typeof e && "boolean" != typeof e && "string" != typeof e) {
            var s = null == e ? "null" : e.constructor.name;
            throw new Error("Argument '" + t + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + s + "'")
        }
        var o = Qt(e, a);
        he(e) || Array.isArray(e) || (e = [e]);
        var i = "string" !== a ? xt(e, a) : ie(e, [], !0);
        return Gt.makeTensor(i, o, a)
    }
    function Jt(e, t, n, r) {
        if (void 0 === r && (r = "numeric"),
        !Array.isArray(e))
            throw new Error("Argument " + t + " passed to " + n + " must be a `Tensor[]` or `TensorLike[]`");
        return e.map((function(e, a) {
            return $t(e, t + "[" + a + "]", n, r)
        }
        ))
    }
    var en = "__op";
    function tn(e) {
        var t = Object.keys(e);
        if (1 !== t.length)
            throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + t.length + " keys.");
        var n = t[0]
          , r = e[n];
        n.endsWith("_") && (n = n.substring(0, n.length - 1)),
        n += en;
        var a = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            Gt.startScope(n);
            try {
                var a = r.apply(void 0, c(e));
                return Te(a) && console.error("Cannot return a Promise inside of tidy."),
                Gt.endScope(a),
                a
            } catch (e) {
                throw Gt.endScope(null),
                e
            }
        };
        return Object.defineProperty(a, "name", {
            value: n,
            configurable: !0
        }),
        a
    }
    var nn = tn({
        abs_: function(e) {
            var t = $t(e, "x", "abs");
            if ("complex64" === t.dtype) {
                var n = {
                    x: t
                };
                return Gt.runKernel("ComplexAbs", n)
            }
            return n = {
                x: t
            },
            Gt.runKernel("Abs", n)
        }
    });
    var rn = tn({
        acos_: function(e) {
            var t = {
                x: $t(e, "x", "acos")
            };
            return Gt.runKernel("Acos", t)
        }
    });
    var an = tn({
        acosh_: function(e) {
            var t = {
                x: $t(e, "x", "acosh")
            };
            return Gt.runKernel("Acosh", t)
        }
    });
    var sn = tn({
        add_: function(e, t) {
            var n, r = $t(e, "a", "add"), a = $t(t, "b", "add"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("Add", s)
        }
    });
    var on = tn({
        addN_: function(e) {
            ae(Array.isArray(e), (function() {
                return "The argument passed to tf.addN() must be a list of tensors"
            }
            )),
            ae(e.length >= 1, (function() {
                return "Must pass at least one tensor to tf.addN(), but got " + e.length
            }
            ));
            var t = e.map((function(e, t) {
                return $t(e, "tensors" + t, "addN")
            }
            ))
              , n = t[0];
            t.forEach((function(e) {
                if (e.dtype !== n.dtype)
                    throw new Error("All tensors passed to tf.addN() must have the same dtype")
            }
            )),
            t.forEach((function(e) {
                if (!pe(e.shape, n.shape))
                    throw new Error("All tensors passed to tf.addN() must have the same shape")
            }
            ));
            var r = t;
            return Gt.runKernel("AddN", r)
        }
    });
    var un = tn({
        all_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: $t(e, "x", "all", "bool")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return Gt.runKernel("All", r, a)
        }
    });
    var pn = tn({
        any_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: $t(e, "x", "any", "bool")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return Gt.runKernel("Any", r, a)
        }
    });
    var ln = tn({
        argMax_: function(e, t) {
            void 0 === t && (t = 0);
            var n = {
                x: $t(e, "x", "argMax")
            }
              , r = {
                axis: t
            };
            return Gt.runKernel("ArgMax", n, r)
        }
    });
    var cn = tn({
        argMin_: function(e, t) {
            void 0 === t && (t = 0);
            var n = {
                x: $t(e, "x", "argMin")
            }
              , r = {
                axis: t
            };
            return Gt.runKernel("ArgMin", n, r)
        }
    });
    var dn = tn({
        asin_: function(e) {
            var t = {
                x: $t(e, "x", "asin")
            };
            return Gt.runKernel("Asin", t)
        }
    });
    var hn = tn({
        asinh_: function(e) {
            var t = {
                x: $t(e, "x", "asinh")
            };
            return Gt.runKernel("Asinh", t)
        }
    });
    var fn = tn({
        atan_: function(e) {
            var t = {
                x: $t(e, "x", "atan")
            };
            return Gt.runKernel("Atan", t)
        }
    });
    var mn = tn({
        atan2_: function(e, t) {
            var n, r = $t(e, "a", "atan2"), a = $t(t, "b", "atan2"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("Atan2", s)
        }
    });
    var yn = tn({
        atanh_: function(e) {
            var t = {
                x: $t(e, "x", "atanh")
            };
            return Gt.runKernel("Atanh", t)
        }
    });
    var gn = tn({
        cast_: function(e, t) {
            var n = $t(e, "x", "cast");
            if (!function(e) {
                return "bool" === e || "complex64" === e || "float32" === e || "int32" === e || "string" === e
            }(t))
                throw new Error("Failed to cast to unknown dtype " + t);
            if ("string" === t && "string" !== n.dtype || "string" !== t && "string" === n.dtype)
                throw new Error("Only strings can be casted to strings");
            var r = {
                x: n
            }
              , a = {
                dtype: t
            };
            return Gt.runKernel(Ce, r, a)
        }
    });
    function vn(e, t, n, r, a, s, o, i) {
        var u, p;
        void 0 === o && (o = !1),
        void 0 === i && (i = "channelsLast");
        var c = l([-1, -1, -1, -1], 4)
          , d = c[0]
          , h = c[1]
          , f = c[2]
          , m = c[3];
        if ("channelsLast" === i)
            d = (u = l(e, 4))[0],
            h = u[1],
            f = u[2],
            m = u[3];
        else {
            if ("channelsFirst" !== i)
                throw new Error("Unknown dataFormat " + i);
            d = (p = l(e, 4))[0],
            m = p[1],
            h = p[2],
            f = p[3]
        }
        var y, g = l(t, 4), v = g[0], b = g[1], x = g[3], N = l(bn(n), 2), k = N[0], w = N[1], T = l(bn(r), 2), _ = T[0], S = T[1], E = xn(v, _), I = xn(b, S), O = function(e, t, n, r, a, s, o, i, u) {
            var p, l, c;
            if ("number" == typeof e) {
                p = {
                    top: e,
                    bottom: e,
                    left: e,
                    right: e,
                    type: 0 === e ? "VALID" : "NUMBER"
                };
                var d = function(e, t, n, r, a) {
                    null == r && (r = function(e, t, n, r) {
                        void 0 === r && (r = 1);
                        var a = xn(t, r);
                        return Math.floor((e[0] * (n - 1) - n + a) / 2)
                    }(e, t, n));
                    var s = e[0]
                      , o = e[1]
                      , i = Nn((s - t + 2 * r) / n + 1, a)
                      , u = Nn((o - t + 2 * r) / n + 1, a);
                    return [i, u]
                }([t, n], s, r, e, i);
                l = d[0],
                c = d[1]
            } else if ("same" === e) {
                l = Math.ceil(t / r),
                c = Math.ceil(n / a);
                var h = Math.max(0, (l - 1) * r + s - t)
                  , f = Math.max(0, (c - 1) * a + o - n);
                p = {
                    top: m = Math.floor(h / 2),
                    bottom: y = h - m,
                    left: g = Math.floor(f / 2),
                    right: v = f - g,
                    type: "SAME"
                }
            } else if ("valid" === e)
                p = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    type: "VALID"
                },
                l = Math.ceil((t - s + 1) / r),
                c = Math.ceil((n - o + 1) / a);
            else {
                if ("object" != typeof e)
                    throw Error("Unknown padding parameter: " + e);
                var m, y, g, v;
                p = {
                    top: m = "channelsLast" === u ? e[1][0] : e[2][0],
                    bottom: y = "channelsLast" === u ? e[1][1] : e[2][1],
                    left: g = "channelsLast" === u ? e[2][0] : e[3][0],
                    right: v = "channelsLast" === u ? e[2][1] : e[3][1],
                    type: 0 === m && 0 === y && 0 === g && 0 === v ? "VALID" : "EXPLICIT"
                },
                l = Nn((t - s + m + y) / r + 1, i),
                c = Nn((n - o + g + v) / a + 1, i)
            }
            return {
                padInfo: p,
                outHeight: l,
                outWidth: c
            }
        }(a, h, f, k, w, E, I, s, i), D = O.padInfo, A = O.outHeight, M = O.outWidth, F = o ? x * m : x;
        return "channelsFirst" === i ? y = [d, F, A, M] : "channelsLast" === i && (y = [d, A, M, F]),
        {
            batchSize: d,
            dataFormat: i,
            inHeight: h,
            inWidth: f,
            inChannels: m,
            outHeight: A,
            outWidth: M,
            outChannels: F,
            padInfo: D,
            strideHeight: k,
            strideWidth: w,
            filterHeight: v,
            filterWidth: b,
            effectiveFilterHeight: E,
            effectiveFilterWidth: I,
            dilationHeight: _,
            dilationWidth: S,
            inShape: e,
            outShape: y,
            filterShape: t
        }
    }
    function bn(e) {
        return "number" == typeof e ? [e, e, e] : 2 === e.length ? [e[0], e[1], 1] : e
    }
    function xn(e, t) {
        return t <= 1 ? e : e + (e - 1) * (t - 1)
    }
    function Nn(e, t) {
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
    function kn(e) {
        var t = l(bn(e), 3)
          , n = t[0]
          , r = t[1]
          , a = t[2];
        return 1 === n && 1 === r && 1 === a
    }
    function wn(e, t) {
        return kn(e) || kn(t)
    }
    function Tn(e, t, n) {
        if (null != n) {
            if ("string" == typeof t)
                throw Error("Error in " + e + ": pad must be an integer when using dimRoundingMode " + n + " but got pad " + t + ".");
            if ("number" == typeof t)
                ae(le(t), (function() {
                    return "Error in " + e + ": pad must be an integer when using dimRoundingMode " + n + " but got pad " + t + "."
                }
                ));
            else {
                if ("object" != typeof t)
                    throw Error("Error in " + e + ": Unknown padding parameter: " + t);
                t.forEach((function(t) {
                    t.forEach((function(t) {
                        ae(le(t), (function() {
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
    var _n = tn({
        reshape_: function(e, t) {
            var n = {
                x: $t(e, "x", "reshape", "string_or_numeric")
            }
              , r = {
                shape: t
            };
            return Gt.runKernel("Reshape", n, r)
        }
    });
    var Sn = tn({
        avgPool_: function(e, t, n, r, a) {
            var s = $t(e, "x", "avgPool", "float32");
            ae(wn(n, 1), (function() {
                return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '1'"
            }
            ));
            var o = s
              , i = !1;
            3 === s.rank && (i = !0,
            o = _n(s, [1, s.shape[0], s.shape[1], s.shape[2]])),
            ae(4 === o.rank, (function() {
                return "Error in avgPool: x must be rank 4 but got rank " + o.rank + "."
            }
            )),
            Tn("avgPool", r, a);
            var u = {
                x: o
            }
              , p = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a
            }
              , l = Gt.runKernel("AvgPool", u, p);
            return l = gn(l, s.dtype),
            i ? _n(l, [l.shape[1], l.shape[2], l.shape[3]]) : l
        }
    });
    var En = tn({
        avgPool3d_: function(e, t, n, r, a, s) {
            void 0 === s && (s = "NDHWC");
            var o = $t(e, "x", "avgPool3d", "float32")
              , i = o
              , u = !1;
            4 === o.rank && (u = !0,
            i = _n(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            ae(5 === i.rank, (function() {
                return "Error in avgPool3d: x must be rank 5 but got rank " + i.rank + "."
            }
            )),
            ae("NDHWC" === s, (function() {
                return "Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of " + s
            }
            )),
            Tn("avgPool3d", r, a);
            var p = {
                x: i
            }
              , l = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a,
                dataFormat: s
            }
              , c = Gt.runKernel("AvgPool3D", p, l);
            return c = gn(c, i.dtype),
            u ? _n(c, [c.shape[1], c.shape[2], c.shape[3], c.shape[4]]) : c
        }
    });
    var In = tn({
        clone_: function(e) {
            var t = {
                x: $t(e, "x", "clone", "string_or_numeric")
            };
            return Gt.runKernel(Ve, t)
        }
    });
    var On = tn({
        concat_: function(e, t) {
            void 0 === t && (t = 0),
            ae(e.length >= 1, (function() {
                return "Pass at least one tensor to concat"
            }
            ));
            var n = Jt(e, "tensors", "concat", "string_or_numeric");
            if ("complex64" === n[0].dtype && n.forEach((function(e) {
                if ("complex64" !== e.dtype)
                    throw new Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype " + e.dtype + ". ")
            }
            )),
            1 === n.length)
                return In(n[0]);
            var r = n
              , a = {
                axis: t
            };
            return Gt.runKernel("Concat", r, a)
        }
    });
    var Dn = tn({
        matMul_: function(e, t, n, r) {
            var a;
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var s = $t(e, "a", "matMul")
              , o = $t(t, "b", "matMul")
              , i = {
                a: s = (a = l(Kt(s, o), 2))[0],
                b: o = a[1]
            }
              , u = {
                transposeA: n,
                transposeB: r
            };
            return Gt.runKernel("BatchMatMul", i, u)
        }
    });
    var An = tn({
        mul_: function(e, t) {
            var n, r = $t(e, "a", "mul"), a = $t(t, "b", "mul"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("Multiply", s)
        }
    });
    var Mn = tn({
        sigmoid_: function(e) {
            var t = {
                x: $t(e, "x", "sigmoid", "float32")
            };
            return Gt.runKernel("Sigmoid", t)
        }
    });
    var Fn = tn({
        slice_: function(e, t, n) {
            var r = $t(e, "x", "slice", "string_or_numeric");
            if (0 === r.rank)
                throw new Error("Slicing scalar is not possible");
            var a = {
                x: r
            }
              , s = {
                begin: t,
                size: n
            };
            return Gt.runKernel("Slice", a, s)
        }
    });
    var Cn = tn({
        tanh_: function(e) {
            var t = {
                x: $t(e, "x", "tanh", "float32")
            };
            return Gt.runKernel("Tanh", t)
        }
    });
    var Rn = tn({
        basicLSTMCell_: function(e, t, n, r, a, s) {
            var o = $t(e, "forgetBias", "basicLSTMCell")
              , i = $t(t, "lstmKernel", "basicLSTMCell")
              , u = $t(n, "lstmBias", "basicLSTMCell")
              , p = $t(r, "data", "basicLSTMCell")
              , l = $t(a, "c", "basicLSTMCell")
              , c = $t(s, "h", "basicLSTMCell")
              , d = On([p, c], 1)
              , h = Dn(d, i)
              , f = sn(h, u)
              , m = f.shape[0]
              , y = f.shape[1] / 4
              , g = [m, y]
              , v = Fn(f, [0, 0], g)
              , b = Fn(f, [0, y], g)
              , x = Fn(f, [0, 2 * y], g)
              , N = Fn(f, [0, 3 * y], g)
              , k = sn(An(Mn(v), Cn(b)), An(l, Mn(sn(o, x))));
            return [k, An(Cn(k), Mn(N))]
        }
    });
    var Vn = tn({
        batchToSpaceND_: function(e, t, n) {
            var r = $t(e, "x", "batchToSpaceND")
              , a = t.reduce((function(e, t) {
                return e * t
            }
            ));
            ae(r.rank >= 1 + t.length, (function() {
                return "input rank is " + r.rank + " but should be > than blockShape.length " + t.length
            }
            )),
            ae(n.length === t.length, (function() {
                return "crops.length is " + n.length + " but should be equal to blockShape.length  " + t.length
            }
            )),
            ae(r.shape[0] % a == 0, (function() {
                return "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + t.join(" * ") + " === " + a
            }
            ));
            var s = {
                x: r
            }
              , o = {
                blockShape: t,
                crops: n
            };
            return Gt.runKernel("BatchToSpaceND", s, o)
        }
    });
    var zn = tn({
        batchNorm_: function(e, t, n, r, a, s) {
            null == s && (s = .001);
            var o, i, u = $t(e, "x", "batchNorm"), p = $t(t, "mean", "batchNorm"), l = $t(n, "variance", "batchNorm");
            null != a && (o = $t(a, "scale", "batchNorm")),
            null != r && (i = $t(r, "offset", "batchNorm")),
            ae(p.rank === l.rank, (function() {
                return "Batch normalization gradient requires mean and variance to have equal ranks."
            }
            )),
            ae(null == i || p.rank === i.rank, (function() {
                return "Batch normalization gradient requires mean and offset to have equal ranks."
            }
            )),
            ae(null == o || p.rank === o.rank, (function() {
                return "Batch normalization gradient requires mean and scale to have equal ranks."
            }
            ));
            var c = {
                x: function(e) {
                    return 0 === e.rank || 1 === e.rank ? _n(e, [1, 1, 1, e.size]) : 2 === e.rank ? _n(e, [1, 1, e.shape[0], e.shape[1]]) : 3 === e.rank ? _n(e, [1, e.shape[0], e.shape[1], e.shape[2]]) : e
                }(u),
                scale: o,
                offset: i,
                mean: p,
                variance: l
            }
              , d = {
                varianceEpsilon: s
            }
              , h = Gt.runKernel("FusedBatchNorm", c, d);
            return _n(h, u.shape)
        }
    });
    var Ln = tn({
        batchNorm2d_: function(e, t, n, r, a, s) {
            var o, i, u = $t(e, "x", "batchNorm"), p = $t(t, "mean", "batchNorm"), l = $t(n, "variance", "batchNorm");
            return null != a && (o = $t(a, "scale", "batchNorm")),
            null != r && (i = $t(r, "offset", "batchNorm")),
            ae(2 === u.rank, (function() {
                return "Error in batchNorm2D: x must be rank 2 but got rank " + u.rank + "."
            }
            )),
            ae(2 === p.rank || 1 === p.rank, (function() {
                return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + p.rank + "."
            }
            )),
            ae(2 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l.rank + "."
            }
            )),
            null != o && ae(2 === o.rank || 1 === o.rank, (function() {
                return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + o.rank + "."
            }
            )),
            null != i && ae(2 === i.rank || 1 === i.rank, (function() {
                return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + i.rank + "."
            }
            )),
            zn(u, p, l, i, o, s)
        }
    });
    var Pn = tn({
        batchNorm3d_: function(e, t, n, r, a, s) {
            var o, i, u = $t(e, "x", "batchNorm"), p = $t(t, "mean", "batchNorm"), l = $t(n, "variance", "batchNorm");
            return null != a && (o = $t(a, "scale", "batchNorm")),
            null != r && (i = $t(r, "offset", "batchNorm")),
            ae(3 === u.rank, (function() {
                return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + "."
            }
            )),
            ae(3 === p.rank || 1 === p.rank, (function() {
                return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + p.rank + "."
            }
            )),
            ae(3 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l.rank + "."
            }
            )),
            null != o && ae(3 === o.rank || 1 === o.rank, (function() {
                return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + o.rank + "."
            }
            )),
            null != i && ae(3 === i.rank || 1 === i.rank, (function() {
                return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + i.rank + "."
            }
            )),
            zn(u, p, l, i, o, s)
        }
    });
    var Bn = tn({
        batchNorm4d_: function(e, t, n, r, a, s) {
            var o, i, u = $t(e, "x", "batchNorm"), p = $t(t, "mean", "batchNorm"), l = $t(n, "variance", "batchNorm");
            return null != a && (o = $t(a, "scale", "batchNorm")),
            null != r && (i = $t(r, "offset", "batchNorm")),
            ae(4 === u.rank, (function() {
                return "Error in batchNorm4D: x must be rank 4 but got rank " + u.rank + "."
            }
            )),
            ae(4 === p.rank || 1 === p.rank, (function() {
                return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + p.rank + "."
            }
            )),
            ae(4 === l.rank || 1 === l.rank, (function() {
                return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l.rank + "."
            }
            )),
            null != o && ae(4 === o.rank || 1 === o.rank, (function() {
                return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + o.rank + "."
            }
            )),
            null != i && ae(4 === i.rank || 1 === i.rank, (function() {
                return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + i.rank + "."
            }
            )),
            zn(u, p, l, i, o, s)
        }
    });
    var Kn = tn({
        bincount_: function(e, t, n) {
            var r = $t(e, "x", "bincount")
              , a = $t(t, "weights", "bincount");
            ae("int32" === r.dtype, (function() {
                return "Error in bincount: input dtype must be int32, but got " + r.dtype
            }
            )),
            ae(n >= 0, (function() {
                return "size must be non-negative, but got " + n + "."
            }
            )),
            ae(a.size === r.size || 0 === a.size, (function() {
                return "Error in bincount: weights must have the same size as input or0-length, but got input shape: " + r.shape + ", weights shape: " + a.shape + "."
            }
            ));
            var s = {
                x: r,
                weights: a
            }
              , o = {
                size: n
            };
            return Gt.runKernel("Bincount", s, o)
        }
    });
    var jn = tn({
        broadcastArgs_: function(e, t) {
            var n = $t(e, "s0", "broadcastArgs", "int32")
              , r = $t(t, "s1", "broadcastArgs", "int32");
            if (1 !== n.rank)
                throw new Error("broadcastArgs(): first input must be a vector (rank=1). Has rank " + n.rank);
            if (1 !== r.rank)
                throw new Error("broadcastArgs(): second input must be a vector (rank=1). Has rank " + r.rank);
            var a = {
                s0: n,
                s1: r
            };
            return Gt.runKernel("BroadcastArgs", a)
        }
    });
    var qn = tn({
        broadcastTo_: function(e, t) {
            var n = $t(e, "broadcastTo", "x")
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
                n = _n(n, a)
            }
            for (var s = n.shape, o = Array.from(t), i = t.length - 1; i >= 0; i--)
                if (s[i] === t[i])
                    o[i] = 1;
                else if (1 !== n.shape[i])
                    throw new Error("broadcastTo(): [" + r + "] cannot be broadcast to [" + t + "].");
            if (0 === o.map((function(e, t) {
                return e > 1 ? t : -1
            }
            )).filter((function(e) {
                return e >= 0
            }
            )).length)
                return In(n);
            var u = {
                x: n
            }
              , p = {
                reps: o
            };
            return Gt.runKernel(ze, u, p)
        }
    });
    function Wn(e, t, n) {
        return void 0 === t && (t = "float32"),
        t = t || "float32",
        we(e),
        new Dt(e,t,n)
    }
    var Un = tn({
        ceil_: function(e) {
            var t = {
                x: $t(e, "x", "ceil", "float32")
            };
            return Gt.runKernel("Ceil", t)
        }
    });
    var Hn = tn({
        clipByValue_: function(e, t, n) {
            var r = $t(e, "x", "clipByValue");
            ae(t <= n, (function() {
                return "Error in clip: min (" + t + ") must be less than or equal to max (" + n + ")."
            }
            ));
            var a = {
                x: r
            }
              , s = {
                clipValueMin: t,
                clipValueMax: n
            };
            return Gt.runKernel("ClipByValue", a, s)
        }
    });
    var Gn = tn({
        complex_: function(e, t) {
            var n = $t(e, "real", "complex")
              , r = $t(t, "imag", "complex");
            se(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex().");
            var a = {
                real: n,
                imag: r
            };
            return Gt.runKernel("Complex", a)
        }
    });
    var Zn = tn({
        concat1d_: function(e) {
            return On(e, 0)
        }
    });
    var Qn = tn({
        concat2d_: function(e, t) {
            return On(e, t)
        }
    });
    var Yn = tn({
        concat3d_: function(e, t) {
            return On(e, t)
        }
    });
    var Xn = tn({
        concat4d_: function(e, t) {
            return On(e, t)
        }
    });
    var $n = tn({
        conv2d_: function(e, t, n, r, a, s, o) {
            void 0 === a && (a = "NHWC"),
            void 0 === s && (s = [1, 1]);
            var i = $t(e, "x", "conv2d", "float32")
              , u = $t(t, "filter", "conv2d", "float32")
              , p = i
              , l = !1;
            3 === i.rank && (l = !0,
            p = _n(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            ae(4 === p.rank, (function() {
                return "Error in conv2d: input must be rank 4, but got rank " + p.rank + "."
            }
            )),
            ae(4 === u.rank, (function() {
                return "Error in conv2d: filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            Tn("conv2d", r, o);
            var c = "NHWC" === a ? p.shape[3] : p.shape[1];
            ae(c === u.shape[2], (function() {
                return "Error in conv2d: depth of input (" + c + ") must match input depth for filter " + u.shape[2] + "."
            }
            )),
            ae(wn(n, s), (function() {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + s + "'"
            }
            ));
            var d = {
                x: p,
                filter: u
            }
              , h = {
                strides: n,
                pad: r,
                dataFormat: a,
                dilations: s,
                dimRoundingMode: o
            }
              , f = Gt.runKernel("Conv2D", d, h);
            return l ? _n(f, [f.shape[1], f.shape[2], f.shape[3]]) : f
        }
    });
    var Jn = tn({
        conv1d_: function(e, t, n, r, a, s, o) {
            void 0 === a && (a = "NWC"),
            void 0 === s && (s = 1);
            var i = $t(e, "x", "conv1d")
              , u = $t(t, "filter", "conv1d")
              , p = i
              , l = !1;
            2 === i.rank && (l = !0,
            p = _n(i, [1, i.shape[0], i.shape[1]])),
            ae(3 === p.rank, (function() {
                return "Error in conv1d: input must be rank 3, but got rank " + p.rank + "."
            }
            )),
            ae(3 === u.rank, (function() {
                return "Error in conv1d: filter must be rank 3, but got rank " + u.rank + "."
            }
            )),
            Tn("conv1d", r, o),
            ae(p.shape[2] === u.shape[1], (function() {
                return "Error in conv1d: depth of input (" + p.shape[2] + ") must match input depth for filter " + u.shape[1] + "."
            }
            )),
            ae(wn(n, s), (function() {
                return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n + " and dilation '" + s + "'"
            }
            )),
            ae("NWC" === a, (function() {
                return "Error in conv1d: got dataFormat of " + a + " but only NWC is currently supported."
            }
            ));
            var c = _n(u, [1, u.shape[0], u.shape[1], u.shape[2]])
              , d = _n(p, [p.shape[0], 1, p.shape[1], p.shape[2]])
              , h = $n(d, c, [1, n], r, "NHWC", [1, s], o);
            return _n(h, l ? [h.shape[2], h.shape[3]] : [h.shape[0], h.shape[2], h.shape[3]])
        }
    });
    var er = tn({
        conv2DBackpropInput_: function(e, t, n, r, a, s, o) {
            void 0 === s && (s = "NHWC"),
            ae(e.length === t.rank, (function() {
                return "Length of inShape (" + e.length + ") and rank of dy (" + t.rank + ") must match"
            }
            ));
            var i = e
              , u = t
              , p = !1;
            3 === t.rank && (p = !0,
            u = _n(t, [1, t.shape[0], t.shape[1], t.shape[2]]),
            i = [1, e[0], e[1], e[2]]),
            ae(4 === i.length, (function() {
                return "Error in conv2dDerInput: inShape must be length 4, but got length " + i.length + "."
            }
            )),
            ae(4 === u.rank, (function() {
                return "Error in conv2dDerInput: dy must be rank 4, but got rank " + u.rank
            }
            )),
            ae(4 === n.rank, (function() {
                return "Error in conv2dDerInput: filter must be rank 4, but got rank " + n.rank
            }
            ));
            var l = "NHWC" === s ? i[3] : i[1]
              , c = "NHWC" === s ? u.shape[3] : u.shape[1];
            ae(l === n.shape[2], (function() {
                return "Error in conv2dDerInput: depth of input (" + l + ") must match input depth for filter " + n.shape[2] + "."
            }
            )),
            ae(c === n.shape[3], (function() {
                return "Error in conv2dDerInput: depth of output (" + c + ") must match output depth for filter " + n.shape[3] + "."
            }
            )),
            Tn("conv2dDerInput", a, o);
            var d = {
                dy: u,
                filter: n
            }
              , h = {
                strides: r,
                pad: a,
                dataFormat: s,
                dimRoundingMode: o,
                inputShape: i
            }
              , f = Gt.runKernel("Conv2DBackpropInput", d, h);
            return p ? _n(f, [f.shape[1], f.shape[2], f.shape[3]]) : f
        }
    });
    var tr = tn({
        conv2dTranspose_: function(e, t, n, r, a, s) {
            var o = $t(e, "x", "conv2dTranspose")
              , i = $t(t, "filter", "conv2dTranspose");
            return er(n, o, i, r, a, "NHWC", s)
        }
    });
    var nr = tn({
        conv3d_: function(e, t, n, r, a, s) {
            void 0 === a && (a = "NDHWC"),
            void 0 === s && (s = [1, 1, 1]);
            var o = $t(e, "x", "conv3d")
              , i = $t(t, "filter", "conv3d")
              , u = o
              , p = !1;
            4 === o.rank && (p = !0,
            u = _n(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            ae(5 === u.rank, (function() {
                return "Error in conv3d: input must be rank 5, but got rank " + u.rank + "."
            }
            )),
            ae(5 === i.rank, (function() {
                return "Error in conv3d: filter must be rank 5, but got rank " + i.rank + "."
            }
            )),
            ae(u.shape[4] === i.shape[3], (function() {
                return "Error in conv3d: depth of input (" + u.shape[4] + ") must match input depth for filter " + i.shape[3] + "."
            }
            )),
            ae(wn(n, s), (function() {
                return "Error in conv3D: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + s + "'"
            }
            )),
            ae("NDHWC" === a, (function() {
                return "Error in conv3d: got dataFormat of " + a + " but only NDHWC is currently supported."
            }
            ));
            var l = {
                x: u,
                filter: i
            }
              , c = {
                strides: n,
                pad: r,
                dataFormat: a,
                dilations: s
            }
              , d = Gt.runKernel("Conv3D", l, c);
            return p ? _n(d, [d.shape[1], d.shape[2], d.shape[3], d.shape[4]]) : d
        }
    });
    var rr = tn({
        conv3DBackpropInput_: function(e, t, n, r, a) {
            ae(e.length === t.rank, (function() {
                return "Length of inShape (" + e.length + ") and rank of dy (" + t.rank + ") must match"
            }
            ));
            var s = e
              , o = t
              , i = !1;
            4 === t.rank && (i = !0,
            o = _n(t, [1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]]),
            s = [1, e[0], e[1], e[2], e[3]]);
            var u = s[4]
              , p = o.shape[4];
            ae(5 === s.length, (function() {
                return "Error in conv3dDerInput: inShape must be length 5, but got length " + s.length + "."
            }
            )),
            ae(5 === o.rank, (function() {
                return "Error in conv3dDerInput: dy must be rank 5, but got rank " + o.rank
            }
            )),
            ae(5 === n.rank, (function() {
                return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n.rank
            }
            )),
            ae(u === n.shape[3], (function() {
                return "Error in conv3dDerInput: depth of input (" + u + ") must match input depth for filter " + n.shape[3] + "."
            }
            )),
            ae(p === n.shape[4], (function() {
                return "Error in conv3dDerInput: depth of output (" + p + ") must match output depth for filter " + n.shape[4] + "."
            }
            ));
            var l = {
                dy: o,
                filter: n
            }
              , c = {
                pad: a,
                strides: r,
                inputShape: s
            }
              , d = Gt.runKernel("Conv3DBackpropInputV2", l, c);
            return i ? _n(d, [d.shape[1], d.shape[2], d.shape[3], d.shape[4]]) : d
        }
    });
    var ar = tn({
        conv3dTranspose_: function(e, t, n, r, a) {
            var s = $t(e, "x", "conv3dTranspose")
              , o = $t(t, "filter", "conv3dTranspose");
            return rr(n, s, o, r, a)
        }
    });
    var sr = tn({
        cos_: function(e) {
            var t = {
                x: $t(e, "x", "cos", "float32")
            };
            return Gt.runKernel("Cos", t)
        }
    });
    var or = tn({
        cosh_: function(e) {
            var t = {
                x: $t(e, "x", "cosh", "float32")
            };
            return Gt.runKernel("Cosh", t)
        }
    });
    var ir = tn({
        cumsum_: function(e, t, n, r) {
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = {
                x: $t(e, "x", "cumsum")
            }
              , s = {
                axis: t,
                exclusive: n,
                reverse: r
            };
            return Gt.runKernel("Cumsum", a, s)
        }
    });
    var ur = tn({
        denseBincount_: function(e, t, n, r) {
            void 0 === r && (r = !1);
            var a = $t(e, "x", "denseBincount")
              , s = $t(t, "weights", "denseBincount");
            ae("int32" === a.dtype, (function() {
                return "Error in denseBincount: input dtype must be int32, but got " + a.dtype
            }
            )),
            ae(a.rank <= 2, (function() {
                return "Error in denseBincount: input must be at most rank 2, but got rank " + a.rank + "."
            }
            )),
            ae(n >= 0, (function() {
                return "size must be non-negative, but got " + n + "."
            }
            )),
            ae(s.size === a.size || 0 === s.size, (function() {
                return "Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: " + a.shape + ", weights shape: " + s.shape + "."
            }
            ));
            var o = {
                x: a,
                weights: s
            }
              , i = {
                size: n,
                binaryOutput: r
            };
            return Gt.runKernel("DenseBincount", o, i)
        }
    });
    var pr = tn({
        depthToSpace_: function(e, t, n) {
            void 0 === n && (n = "NHWC");
            var r = $t(e, "x", "depthToSpace", "float32")
              , a = "NHWC" === n ? r.shape[1] : r.shape[2]
              , s = "NHWC" === n ? r.shape[2] : r.shape[3]
              , o = "NHWC" === n ? r.shape[3] : r.shape[1];
            ae(t > 1, (function() {
                return "blockSize should be > 1 for depthToSpace, but was: " + t
            }
            )),
            ae(a * t >= 0, (function() {
                return "Negative dimension size caused by overflow when multiplying\n    " + a + " and " + t + "  for depthToSpace with input shape\n    " + r.shape
            }
            )),
            ae(s * t >= 0, (function() {
                return "Negative dimension size caused by overflow when multiplying\n    " + s + " and " + t + " for depthToSpace with input shape\n        " + r.shape
            }
            )),
            ae(o % (t * t) == 0, (function() {
                return "Dimension size must be evenly divisible by " + t * t + " but is " + o + " for depthToSpace with input shape " + r.shape
            }
            ));
            var i = {
                x: r
            }
              , u = {
                blockSize: t,
                dataFormat: n
            };
            return Gt.runKernel("DepthToSpace", i, u)
        }
    });
    var lr = tn({
        depthwiseConv2d_: function(e, t, n, r, a, s, o) {
            void 0 === a && (a = "NHWC"),
            void 0 === s && (s = [1, 1]);
            var i = $t(e, "x", "depthwiseConv2d", "float32")
              , u = $t(t, "filter", "depthwiseConv2d", "float32")
              , p = i
              , l = !1;
            3 === i.rank && (l = !0,
            p = _n(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            ae(4 === p.rank, (function() {
                return "Error in depthwiseConv2d: input must be rank 4, but got rank " + p.rank + "."
            }
            )),
            ae(4 === u.rank, (function() {
                return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            ae(p.shape[3] === u.shape[2], (function() {
                return "Error in depthwiseConv2d: number of input channels (" + p.shape[3] + ") must match the inChannels dimension in filter " + u.shape[2] + "."
            }
            )),
            Tn("depthwiseConv2d", r, o);
            var c = {
                x: p,
                filter: u
            }
              , d = {
                strides: n,
                pad: r,
                dataFormat: a,
                dilations: s,
                dimRoundingMode: o
            }
              , h = Gt.runKernel("DepthwiseConv2dNative", c, d);
            return l ? _n(h, [h.shape[1], h.shape[2], h.shape[3]]) : h
        }
    });
    var cr = tn({
        diag_: function(e) {
            var t = {
                x: $t(e, "x", "diag")
            };
            return Gt.runKernel("Diag", t)
        }
    });
    var dr = tn({
        dilation2d_: function(e, t, n, r, a, s) {
            void 0 === a && (a = [1, 1]),
            void 0 === s && (s = "NHWC");
            var o = $t(e, "x", "dilation2d")
              , i = $t(t, "filter", "dilation2d");
            ae(3 === o.rank || 4 === o.rank, (function() {
                return "Error in dilation2d: input must be rank 3 or 4, but got rank " + o.rank + "."
            }
            )),
            ae(3 === i.rank, (function() {
                return "Error in dilation2d: filter must be rank 3, but got rank " + i.rank + "."
            }
            )),
            ae("NHWC" === s, (function() {
                return "Error in dilation2d: Only NHWC is currently supported, but got dataFormat of " + s
            }
            ));
            var u = o
              , p = !1;
            3 === o.rank && (u = _n(o, [1, o.shape[0], o.shape[1], o.shape[2]]),
            p = !0);
            var l = {
                x: u,
                filter: i
            }
              , c = {
                strides: n,
                pad: r,
                dilations: a
            }
              , d = Gt.runKernel("Dilation2D", l, c);
            return p ? _n(d, [d.shape[1], d.shape[2], d.shape[3]]) : d
        }
    });
    var hr = tn({
        floorDiv_: function(e, t) {
            var n, r = $t(e, "a", "floorDiv"), a = $t(t, "b", "floorDiv"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("FloorDiv", s)
        }
    });
    var fr = tn({
        div_: function(e, t) {
            var n, r = $t(e, "a", "div"), a = $t(t, "b", "div");
            if (r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            "int32" === r.dtype && "int32" === a.dtype)
                return hr(r, a);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("RealDiv", s, {})
        }
    });
    function mr(e, t) {
        for (var n = [], r = Math.max(e.length, t.length), a = 0; a < r; a++) {
            var s = e[e.length - a - 1];
            null == s && (s = 1);
            var o = t[t.length - a - 1];
            if (null == o && (o = 1),
            1 === s)
                n.unshift(o);
            else if (1 === o)
                n.unshift(s);
            else {
                if (s !== o)
                    throw Error("Operands could not be broadcast together with shapes " + e + " and " + t + ".");
                n.unshift(s)
            }
        }
        return n
    }
    var yr = tn({
        equal_: function(e, t) {
            var n, r = $t(e, "a", "equal", "string_or_numeric"), a = $t(t, "b", "equal", "string_or_numeric");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("Equal", s)
        }
    });
    var gr = tn({
        where_: function(e, t, n) {
            var r = $t(t, "a", "where")
              , a = $t(n, "b", "where")
              , s = $t(e, "condition", "where", "bool")
              , o = mr(mr(s.shape, r.shape), a.shape)
              , i = {
                condition: qn(s, o),
                t: qn(r, o),
                e: qn(a, o)
            };
            return Gt.runKernel("Select", i)
        }
    });
    var vr = tn({
        zerosLike_: function(e) {
            var t = {
                x: $t(e, "x", "zerosLike")
            };
            return Gt.runKernel("ZerosLike", t)
        }
    });
    var br = tn({
        divNoNan_: function(e, t) {
            var n, r = $t(e, "a", "div"), a = $t(t, "b", "div");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1];
            var s = fr(r, a)
              , o = vr(s)
              , i = yr(a, o);
            return gr(i, o, s)
        }
    });
    var xr = tn({
        dot_: function(e, t) {
            var n = $t(e, "t1", "dot")
              , r = $t(t, "t2", "dot");
            ae(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), (function() {
                return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n.rank + " and " + r.rank + "."
            }
            ));
            var a = 1 === n.rank ? n.size : n.shape[1]
              , s = 1 === r.rank ? r.size : r.shape[0];
            if (ae(a === s, (function() {
                return "Error in dot: inner dimensions of inputs must match, but got " + a + " and " + s + "."
            }
            )),
            1 === n.rank && 1 === r.rank) {
                var o = _n(n, [1, -1])
                  , i = _n(r, [-1, 1])
                  , u = Dn(o, i);
                return _n(u, [])
            }
            if (1 === n.rank && 2 === r.rank) {
                o = _n(n, [1, -1]),
                i = _n(r, [r.shape[0], r.shape[1]]),
                u = Dn(o, i);
                return _n(u, [u.size])
            }
            if (2 === n.rank && 1 === r.rank) {
                i = _n(r, [-1, 1]),
                u = Dn(n, i);
                return _n(u, [u.size])
            }
            return i = _n(r, [r.shape[0], r.shape[1]]),
            u = Dn(n, i)
        }
    });
    var Nr = tn({
        einsum_: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = t.map((function(e, t) {
                return $t(e, "tensors" + t, "einsum")
            }
            ))
              , a = {
                equation: e
            };
            return Gt.runKernel(Re, r, a)
        }
    });
    var kr = tn({
        elu_: function(e) {
            var t = {
                x: $t(e, "x", "elu", "float32")
            };
            return Gt.runKernel("Elu", t)
        }
    });
    var wr = tn({
        erf_: function(e) {
            var t = $t(e, "x", "erf");
            ae("int32" === t.dtype || "float32" === t.dtype, (function() {
                return "Input dtype must be `int32` or `float32`."
            }
            )),
            "int32" === t.dtype && (t = gn(t, "float32"));
            var n = {
                x: t
            };
            return Gt.runKernel("Erf", n)
        }
    });
    var Tr = tn({
        exp_: function(e) {
            var t = {
                x: $t(e, "x", "exp")
            };
            return Gt.runKernel("Exp", t)
        }
    });
    var _r = tn({
        expandDims_: function(e, t) {
            void 0 === t && (t = 0);
            var n = $t(e, "x", "expandDims", "string_or_numeric");
            ae(t <= n.rank, (function() {
                return "Axis must be <= rank of the tensor"
            }
            ));
            var r = {
                input: n
            }
              , a = {
                dim: t
            };
            return Gt.runKernel("ExpandDims", r, a)
        }
    });
    var Sr = tn({
        expm1_: function(e) {
            var t = {
                x: $t(e, "x", "expm1")
            };
            return Gt.runKernel("Expm1", t)
        }
    });
    var Er = tn({
        tile_: function(e, t) {
            var n = $t(e, "x", "tile", "string_or_numeric");
            ae(n.rank === t.length, (function() {
                return "Error in transpose: rank of input " + n.rank + " must match length of reps " + t + "."
            }
            ));
            var r = {
                x: n
            }
              , a = {
                reps: t
            };
            return Gt.runKernel(ze, r, a)
        }
    });
    var Ir = tn({
        eye_: function(e, t, n, r) {
            void 0 === r && (r = "float32"),
            null == t && (t = e);
            for (var a = Wn([e, t], r), s = e <= t ? e : t, o = 0; o < s; ++o)
                a.set(1, o, o);
            var i = _n(a.toTensor(), [e, t]);
            if (null == n)
                return i;
            if (1 === n.length)
                return Er(_r(i, 0), [n[0], 1, 1]);
            if (2 === n.length)
                return Er(_r(_r(i, 0), 0), [n[0], n[1], 1, 1]);
            if (3 === n.length)
                return Er(_r(_r(_r(i, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
            throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.")
        }
    });
    function Or(e, t, n) {
        var r = {
            shape: e,
            value: t,
            dtype: n
        };
        return Gt.runKernel("Fill", {}, r)
    }
    var Dr = tn({
        floor_: function(e) {
            var t = {
                x: $t(e, "x", "floor", "float32")
            };
            return Gt.runKernel("Floor", t)
        }
    });
    var Ar = tn({
        gather_: function(e, t, n, r) {
            void 0 === n && (n = 0),
            void 0 === r && (r = 0);
            var a = {
                x: $t(e, "x", "gather"),
                indices: $t(t, "indices", "gather", "int32")
            }
              , s = {
                axis: n,
                batchDims: r
            };
            return Gt.runKernel("GatherV2", a, s)
        }
    });
    var Mr = tn({
        greater_: function(e, t) {
            var n, r = $t(e, "a", "greater", "string_or_numeric"), a = $t(t, "b", "greater", "string_or_numeric");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("Greater", s)
        }
    });
    var Fr = tn({
        greaterEqual_: function(e, t) {
            var n, r = $t(e, "a", "greaterEqual", "string_or_numeric"), a = $t(t, "b", "greaterEqual", "string_or_numeric");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("GreaterEqual", s)
        }
    });
    var Cr = tn({
        imag_: function(e) {
            var t = {
                input: $t(e, "input", "imag")
            };
            return Gt.runKernel("Imag", t)
        }
    });
    var Rr = tn({
        isFinite_: function(e) {
            var t = {
                x: $t(e, "x", "isFinite")
            };
            return Gt.runKernel("IsFinite", t)
        }
    });
    var Vr = tn({
        isInf_: function(e) {
            var t = {
                x: $t(e, "x", "isInf")
            };
            return Gt.runKernel("IsInf", t)
        }
    });
    var zr = tn({
        isNaN_: function(e) {
            var t = {
                x: $t(e, "x", "isNaN")
            };
            return Gt.runKernel("IsNan", t)
        }
    });
    var Lr = tn({
        leakyRelu_: function(e, t) {
            void 0 === t && (t = .2);
            var n = {
                x: $t(e, "x", "leakyRelu")
            }
              , r = {
                alpha: t
            };
            return Gt.runKernel("LeakyRelu", n, r)
        }
    });
    var Pr = tn({
        less_: function(e, t) {
            var n, r = $t(e, "a", "less", "string_or_numeric"), a = $t(t, "b", "less", "string_or_numeric");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("Less", s)
        }
    });
    var Br = tn({
        lessEqual_: function(e, t) {
            var n, r = $t(e, "a", "lessEqual", "string_or_numeric"), a = $t(t, "b", "lessEqual", "string_or_numeric");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("LessEqual", s)
        }
    });
    function Kr(e, t, n) {
        if (n <= 0)
            throw new Error("The number of values should be positive.");
        var r = {
            start: e,
            stop: t,
            num: n
        };
        return Gt.runKernel("LinSpace", {}, r)
    }
    var jr = tn({
        localResponseNormalization_: function(e, t, n, r, a) {
            void 0 === t && (t = 5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = .5);
            var s = $t(e, "x", "localResponseNormalization");
            ae(4 === s.rank || 3 === s.rank, (function() {
                return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + s.rank + "."
            }
            )),
            ae(le(t), (function() {
                return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + t + "."
            }
            ));
            var o = s
              , i = !1;
            3 === s.rank && (i = !0,
            o = _n(s, [1, s.shape[0], s.shape[1], s.shape[2]]));
            var u = {
                x: o
            }
              , p = {
                depthRadius: t,
                bias: n,
                alpha: r,
                beta: a
            }
              , l = Gt.runKernel("LRN", u, p);
            return i ? _n(l, [l.shape[1], l.shape[2], l.shape[3]]) : l
        }
    });
    var qr = tn({
        log_: function(e) {
            var t = {
                x: $t(e, "x", "log", "float32")
            };
            return Gt.runKernel("Log", t)
        }
    });
    var Wr = tn({
        log1p_: function(e) {
            var t = {
                x: $t(e, "x", "log1p")
            };
            return Gt.runKernel("Log1p", t)
        }
    });
    function Ur(e) {
        return Gt.customGrad(e)
    }
    var Hr = tn({
        neg_: function(e) {
            var t = {
                x: $t(e, "x", "neg")
            };
            return Gt.runKernel("Neg", t)
        }
    });
    var Gr = tn({
        softplus_: function(e) {
            var t = {
                x: $t(e, "x", "softplus")
            };
            return Gt.runKernel("Softplus", t)
        }
    });
    var Zr = tn({
        logSigmoid_: function(e) {
            var t = $t(e, "x", "logSigmoid");
            return Ur((function(e) {
                return {
                    value: Hr(Gr(Hr(e))),
                    gradFunc: function(t) {
                        return An(t, Mn(Hr(e)))
                    }
                }
            }
            ))(t)
        }
    });
    var Qr = tn({
        max_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: $t(e, "x", "max")
            }
              , a = {
                reductionIndices: t,
                keepDims: n
            };
            return Gt.runKernel("Max", r, a)
        }
    });
    var Yr = tn({
        sub_: function(e, t) {
            var n, r = $t(e, "a", "sub"), a = $t(t, "b", "sub"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("Sub", s)
        }
    });
    var Xr = tn({
        sum_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = $t(e, "x", "sum");
            "bool" === r.dtype && (r = gn(r, "int32"));
            var a = {
                x: r
            }
              , s = {
                axis: t,
                keepDims: n
            };
            return Gt.runKernel("Sum", a, s)
        }
    });
    var $r = tn({
        logSoftmax_: function(e, t) {
            void 0 === t && (t = -1);
            var n = $t(e, "logits", "logSoftmax");
            if (-1 === t && (t = n.rank - 1),
            t !== n.rank - 1)
                throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + n.rank + " and axis was " + t);
            return Ur((function(e, n) {
                var r = Qr(e, t, !0)
                  , a = Yr(e, r)
                  , s = Yr(gn(a, "float32"), qr(Xr(Tr(a), t, !0)));
                n([s]);
                return {
                    value: s,
                    gradFunc: function(e, n) {
                        var r = l(n, 1)[0]
                          , a = Tr(r);
                        return Yr(e, An(Xr(e, t, !0), a))
                    }
                }
            }
            ))(n)
        }
    });
    function Jr(e, t) {
        return function(e, t, n) {
            for (var r = e.length + t.length, a = [], s = 0, o = 0, i = 0; i < r; i++)
                -1 === n.indexOf(i) ? a.push(e[s++]) : a.push(t[o++]);
            return a
        }(e, t.map((function(e) {
            return 1
        }
        )), t)
    }
    var ea = tn({
        logSumExp_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = $t(e, "x", "logSumExp")
              , a = de(t, r.shape)
              , s = Qr(r, a, !0)
              , o = Yr(r, s)
              , i = Tr(o)
              , u = Xr(i, a)
              , p = qr(u)
              , l = sn(_n(s, p.shape), p);
            if (n) {
                var c = Jr(l.shape, a);
                return _n(l, c)
            }
            return l
        }
    });
    var ta = tn({
        logicalAnd_: function(e, t) {
            var n = $t(e, "a", "logicalAnd", "bool")
              , r = $t(t, "b", "logicalAnd", "bool");
            mr(n.shape, r.shape);
            var a = {
                a: n,
                b: r
            };
            return Gt.runKernel("LogicalAnd", a)
        }
    });
    var na = tn({
        logicalNot_: function(e) {
            var t = {
                x: $t(e, "x", "logicalNot", "bool")
            };
            return Gt.runKernel("LogicalNot", t)
        }
    });
    var ra = tn({
        logicalOr_: function(e, t) {
            var n = $t(e, "a", "logicalOr", "bool")
              , r = $t(t, "b", "logicalOr", "bool");
            mr(n.shape, r.shape);
            var a = {
                a: n,
                b: r
            };
            return Gt.runKernel("LogicalOr", a)
        }
    });
    var aa = tn({
        logicalXor_: function(e, t) {
            var n = $t(e, "a", "logicalXor", "bool")
              , r = $t(t, "b", "logicalXor", "bool");
            return mr(n.shape, r.shape),
            ta(ra(e, t), na(ta(e, t)))
        }
    });
    var sa = tn({
        maxPool_: function(e, t, n, r, a) {
            var s = $t(e, "x", "maxPool")
              , o = s
              , i = !1;
            3 === s.rank && (i = !0,
            o = _n(s, [1, s.shape[0], s.shape[1], s.shape[2]])),
            ae(4 === o.rank, (function() {
                return "Error in maxPool: input must be rank 4 but got rank " + o.rank + "."
            }
            )),
            ae(wn(n, 1), (function() {
                return "Error in maxPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '1'"
            }
            )),
            Tn("maxPool", r, a);
            var u = {
                x: o
            }
              , p = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a
            }
              , l = Gt.runKernel("MaxPool", u, p);
            return i ? _n(l, [l.shape[1], l.shape[2], l.shape[3]]) : l
        }
    });
    var oa = tn({
        maxPool3d_: function(e, t, n, r, a, s) {
            void 0 === t && (t = [1, 1, 1]),
            void 0 === s && (s = "NDHWC");
            var o = $t(e, "x", "maxPool3d")
              , i = o
              , u = !1;
            4 === o.rank && (u = !0,
            i = _n(o, [1, o.shape[0], o.shape[1], o.shape[2], o.shape[3]])),
            ae(5 === i.rank, (function() {
                return "Error in maxPool3d: x must be rank 5 but got rank " + i.rank + "."
            }
            )),
            ae("NDHWC" === s, (function() {
                return "Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of " + s
            }
            )),
            Tn("maxPool3d", r, a);
            var p = {
                x: i
            }
              , l = {
                filterSize: t,
                strides: n,
                pad: r,
                dimRoundingMode: a,
                dataFormat: s
            }
              , c = Gt.runKernel("MaxPool3D", p, l);
            return u ? _n(c, [c.shape[1], c.shape[2], c.shape[3], c.shape[4]]) : c
        }
    });
    var ia = tn({
        maxPoolWithArgmax_: function(e, t, n, r, a) {
            void 0 === a && (a = !1);
            var s = {
                x: $t(e, "x", "maxPoolWithArgmax")
            }
              , o = {
                filterSize: t,
                strides: n,
                pad: r,
                includeBatchInIndex: a
            }
              , i = Gt.runKernel("MaxPoolWithArgmax", s, o);
            return {
                result: i[0],
                indexes: i[1]
            }
        }
    });
    var ua = tn({
        maximum_: function(e, t) {
            var n, r = $t(e, "a", "maximum"), a = $t(t, "b", "maximum");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            "bool" === r.dtype && (r = gn(r, "int32"),
            a = gn(a, "int32")),
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("Maximum", s)
        }
    });
    var pa = tn({
        mean_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: $t(e, "x", "mean")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return Gt.runKernel("Mean", r, a)
        }
    });
    function la(e, t) {
        if (void 0 === t && (t = "float32"),
        "complex64" === t) {
            var n = la(e, "float32")
              , r = la(e, "float32");
            return Gn(n, r)
        }
        var a = ke(ue(e), t);
        return Gt.makeTensor(a, e, t)
    }
    function ca(e, t) {
        if (void 0 === t && (t = "float32"),
        "complex64" === t) {
            var n = ca(e, "float32")
              , r = la(e, "float32");
            return Gn(n, r)
        }
        var a = Ne(ue(e), t);
        return Gt.makeTensor(a, e, t)
    }
    var da = tn({
        min_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = {
                x: $t(e, "x", "min")
            }
              , a = {
                axis: t,
                keepDims: n
            };
            return Gt.runKernel("Min", r, a)
        }
    });
    var ha = tn({
        minimum_: function(e, t) {
            var n, r = $t(e, "a", "minimum"), a = $t(t, "b", "minimum");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            "bool" === r.dtype && (r = gn(r, "int32"),
            a = gn(a, "int32")),
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("Minimum", s)
        }
    });
    var fa = tn({
        mirrorPad_: function(e, t, n) {
            ae("reflect" === n || "symmetric" === n, (function() {
                return "Invalid mode. Mode must be either reflect or symmetric. Got " + n + "."
            }
            ));
            var r = $t(e, "x", "mirrorPad");
            if (0 === r.rank)
                throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");
            ae(t.length === r.rank, (function() {
                return "Padding doesn't match input. Must be " + r.rank + ". Got " + t.length + "."
            }
            ));
            for (var a = "reflect" === n ? 1 : 0, s = function(e) {
                ae(2 === t[e].length, (function() {
                    return "Invalid number of paddings. Must be length of 2 each."
                }
                )),
                ae(t[e][0] >= 0 && t[e][0] <= r.shape[e] - a && t[e][1] >= 0 && t[e][1] <= r.shape[e] - a, (function() {
                    return "Padding in dimension " + e + " cannot be greater than or equal to " + (r.shape[e] - a) + " or less than 0 for input of shape " + r.shape
                }
                ))
            }, o = 0; o < r.rank; o++)
                s(o);
            var i = {
                paddings: t,
                mode: n
            }
              , u = {
                x: r
            };
            return Gt.runKernel("MirrorPad", u, i)
        }
    });
    var ma = tn({
        mod_: function(e, t) {
            var n, r = $t(e, "a", "mod"), a = $t(t, "b", "mod"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("Mod", s)
        }
    });
    var ya = tn({
        square_: function(e) {
            var t = $t(e, "x", "square");
            return Gt.runKernel("Square", {
                x: t
            }, {})
        }
    });
    var ga = tn({
        moments_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = de(t, (e = $t(e, "x", "moments")).shape)
              , a = pa(e, r, n)
              , s = a.shape;
            n || (s = Jr(a.shape, r));
            var o = ya(Yr(gn(e, "float32"), _n(a, s)));
            return {
                mean: a,
                variance: pa(o, r, n)
            }
        }
    });
    var va = tn({
        multiRNNCell_: function(e, t, n, r) {
            for (var a = $t(t, "data", "multiRNNCell"), s = Jt(n, "c", "multiRNNCell"), o = Jt(r, "h", "multiRNNCell"), i = a, u = [], p = 0; p < e.length; p++) {
                var l = e[p](i, s[p], o[p]);
                u.push(l[0]),
                u.push(l[1]),
                i = l[1]
            }
            var c = []
              , d = [];
            for (p = 0; p < u.length; p += 2)
                c.push(u[p]),
                d.push(u[p + 1]);
            return [c, d]
        }
    });
    var ba = tn({
        multinomial_: function(e, t, n, r) {
            void 0 === r && (r = !1);
            var a = $t(e, "logits", "multinomial")
              , s = a.size
              , o = a.rank;
            if (s < 2)
                throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + s + ".");
            if (o > 2)
                throw new Error("Rank of probabilities must be 1 or 2, but is " + o);
            n = n || Math.random();
            var i = {
                logits: 1 === o ? _n(a, [1, -1]) : a
            }
              , u = {
                numSamples: t,
                seed: n,
                normalized: r
            }
              , p = Gt.runKernel("Multinomial", i, u);
            return 1 === o ? _n(p, [p.size]) : p
        }
    });
    var xa = tn({
        notEqual_: function(e, t) {
            var n, r = $t(e, "a", "notEqual", "string_or_numeric"), a = $t(t, "b", "notEqual", "string_or_numeric");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("NotEqual", s)
        }
    });
    var Na = tn({
        oneHot_: function(e, t, n, r) {
            if (void 0 === n && (n = 1),
            void 0 === r && (r = 0),
            t < 2)
                throw new Error("Error in oneHot: depth must be >=2, but it is " + t);
            var a = {
                indices: $t(e, "indices", "oneHot", "int32")
            }
              , s = {
                depth: t,
                onValue: n,
                offValue: r
            };
            return Gt.runKernel("OneHot", a, s)
        }
    });
    var ka = tn({
        onesLike_: function(e) {
            var t = {
                x: $t(e, "x", "onesLike")
            };
            return Gt.runKernel("OnesLike", t)
        }
    });
    var wa = tn({
        outerProduct_: function(e, t) {
            var n = $t(e, "v1", "outerProduct")
              , r = $t(t, "v2", "outerProduct");
            ae(1 === n.rank && 1 === r.rank, (function() {
                return "Error in outerProduct: inputs must be rank 1, but got ranks " + n.rank + " and " + r.rank + "."
            }
            ));
            var a = _n(n, [-1, 1])
              , s = _n(r, [1, -1]);
            return Dn(a, s)
        }
    });
    var Ta = tn({
        pad_: function(e, t, n) {
            void 0 === n && (n = 0);
            var r = $t(e, "x", "pad");
            if (0 === r.rank)
                throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
            var a = {
                paddings: t,
                constantValue: n
            }
              , s = {
                x: r
            };
            return Gt.runKernel("PadV2", s, a)
        }
    });
    var _a = tn({
        pad1d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            ae(2 === t.length, (function() {
                return "Invalid number of paddings. Must be length of 2."
            }
            )),
            Ta(e, [t], n)
        }
    });
    var Sa = tn({
        pad2d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            ae(2 === t.length && 2 === t[0].length && 2 === t[1].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            Ta(e, t, n)
        }
    });
    var Ea = tn({
        pad3d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            ae(3 === t.length && 2 === t[0].length && 2 === t[1].length && 2 === t[2].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            Ta(e, t, n)
        }
    });
    var Ia = tn({
        pad4d_: function(e, t, n) {
            return void 0 === n && (n = 0),
            ae(4 === t.length && 2 === t[0].length && 2 === t[1].length && 2 === t[2].length && 2 === t[3].length, (function() {
                return "Invalid number of paddings. Must be length of 2 each."
            }
            )),
            Ta(e, t, n)
        }
    });
    var Oa = tn({
        spaceToBatchND_: function(e, t, n) {
            var r = $t(e, "x", "spaceToBatchND");
            ae(r.rank >= 1 + t.length, (function() {
                return "input rank " + r.rank + " should be > than [blockShape] " + t.length
            }
            )),
            ae(n.length === t.length, (function() {
                return "paddings.shape[0] " + n.length + " must be equal to [blockShape] " + t.length
            }
            )),
            ae(r.shape.reduce((function(e, r, a) {
                return a > 0 && a <= t.length ? e && (r + n[a - 1][0] + n[a - 1][1]) % t[a - 1] == 0 : e
            }
            ), !0), (function() {
                return "input spatial dimensions " + r.shape.slice(1) + " with paddings " + n.toString() + " must be divisible by blockShapes " + t.toString()
            }
            ));
            var a = {
                x: r
            }
              , s = {
                blockShape: t,
                paddings: n
            };
            return Gt.runKernel("SpaceToBatchND", a, s)
        }
    });
    var Da = tn({
        pool_: function(e, t, n, r, a, s, o) {
            null == a && (a = [1, 1]),
            null == s && (s = 1),
            0 === r && (r = "valid");
            var i = $t(e, "x", "maxPool")
              , u = i
              , p = !1;
            3 === i.rank && (p = !0,
            u = _n(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            ae(wn(s, a), (function() {
                return "Error in pool: Either strides or dilations must be 1. Got strides " + s + " and dilations '" + a + "'"
            }
            ));
            var c, d = function(e, t, n, r, a, s, o) {
                void 0 === o && (o = "channelsLast");
                var i, u = l(bn(t), 2), p = u[0], c = u[1];
                if ("channelsLast" === o)
                    i = [p, c, e[3], e[3]];
                else {
                    if ("channelsFirst" !== o)
                        throw new Error("Unknown dataFormat " + o);
                    i = [p, c, e[1], e[1]]
                }
                return vn(e, i, n, r, a, s, !1, o)
            }(u.shape, t, s, a, r), h = [d.dilationHeight, d.dilationWidth];
            c = "same" === r ? function(e, t) {
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
            }([d.filterHeight, d.filterWidth], h) : [[0, 0], [0, 0]];
            var f = 1 === h[0] && 1 === h[1]
              , m = l(function(e, t, n) {
                var r = n.map((function(e) {
                    return e[0]
                }
                ))
                  , a = n.map((function(e) {
                    return e[1]
                }
                ))
                  , s = e.concat(r, a)
                  , o = t.map((function(e, t) {
                    return (e - s[t] % e) % e
                }
                ))
                  , i = a.map((function(e, t) {
                    return e + o[t]
                }
                ))
                  , u = t.map((function(e, t) {
                    return [r[t], i[t]]
                }
                ))
                  , p = t.map((function(e, t) {
                    return [0, o[t]]
                }
                ));
                return [u, p]
            }([d.inHeight, d.inWidth], h, c), 2)
              , y = m[0]
              , g = m[1]
              , v = f ? r : "valid"
              , b = f ? u : Oa(u, h, y)
              , x = ("avg" === n ? function() {
                return Sn(b, t, s, v, o)
            }
            : function() {
                return sa(b, t, s, v, o)
            }
            )()
              , N = f ? x : Vn(x, h, g);
            return p ? _n(N, [N.shape[1], N.shape[2], N.shape[3]]) : N
        }
    });
    var Aa = tn({
        pow_: function(e, t) {
            var n, r = $t(e, "base", "pow"), a = $t(t, "exp", "pow"), s = {
                a: r = (n = l(Kt(r, a), 2))[0],
                b: a = n[1]
            };
            return Gt.runKernel("Pow", s)
        }
    });
    var Ma = tn({
        prelu_: function(e, t) {
            var n = {
                x: $t(e, "x", "prelu"),
                alpha: $t(t, "alpha", "prelu")
            };
            return Gt.runKernel("Prelu", n)
        }
    });
    var Fa = tn({
        prod_: function(e, t, n) {
            void 0 === t && (t = null),
            void 0 === n && (n = !1);
            var r = $t(e, "x", "prod");
            "bool" === r.dtype && (r = gn(r, "int32"));
            var a = {
                x: r
            }
              , s = {
                axis: t,
                keepDims: n
            };
            return Gt.runKernel("Prod", a, s)
        }
    });
    var Ca = tn({
        rand_: function(e, t, n) {
            var r = ue(e)
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
            for (var s = 0; s < r; s++)
                a[s] = t();
            return Gt.makeTensor(a, e, n)
        }
    })
      , Ra = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Va(e) {
        if (e.__esModule)
            return e;
        var t = Object.defineProperty({}, "__esModule", {
            value: !0
        });
        return Object.keys(e).forEach((function(n) {
            var r = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(t, n, r.get ? r : {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        )),
        t
    }
    function za(e) {
        var t = {
            exports: {}
        };
        return e(t, t.exports),
        t.exports
    }
    var La = za((function(e) {
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
            function s(e, t) {
                var n = new r(e)
                  , s = t && t.state
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
                s && ("object" == typeof s && a(s, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = s : n && n.amd ? n((function() {
                return s
            }
            )) : this.alea = s
        }(0, e, !1)
    }
    ))
      , Pa = za((function(e) {
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
            function s(e, t) {
                var n = new r(e)
                  , s = t && t.state
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
                s && ("object" == typeof s && a(s, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = s : n && n.amd ? n((function() {
                return s
            }
            )) : this.xor128 = s
        }(0, e, !1)
    }
    ))
      , Ba = za((function(e) {
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
            function s(e, t) {
                var n = new r(e)
                  , s = t && t.state
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
                s && ("object" == typeof s && a(s, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = s : n && n.amd ? n((function() {
                return s
            }
            )) : this.xorwow = s
        }(0, e, !1)
    }
    ))
      , Ka = za((function(e) {
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
            function s(e, t) {
                null == e && (e = +new Date);
                var n = new r(e)
                  , s = t && t.state
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
                s && (s.x && a(s, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = s : n && n.amd ? n((function() {
                return s
            }
            )) : this.xorshift7 = s
        }(0, e, !1)
    }
    ))
      , ja = za((function(e) {
        !function(e, t, n) {
            function r(e) {
                var t = this;
                t.next = function() {
                    var e, n, r = t.w, a = t.X, s = t.i;
                    return t.w = r = r + 1640531527 | 0,
                    n = a[s + 34 & 127],
                    e = a[s = s + 1 & 127],
                    n ^= n << 13,
                    e ^= e << 17,
                    n ^= n >>> 15,
                    e ^= e >>> 12,
                    n = a[s] = n ^ e,
                    t.i = s,
                    n + (r ^ r >>> 16) | 0
                }
                ,
                function(e, t) {
                    var n, r, a, s, o, i = [], u = 128;
                    for (t === (0 | t) ? (r = t,
                    t = null) : (t += "\0",
                    r = 0,
                    u = Math.max(u, t.length)),
                    a = 0,
                    s = -32; s < u; ++s)
                        t && (r ^= t.charCodeAt((s + 32) % t.length)),
                        0 === s && (o = r),
                        r ^= r << 10,
                        r ^= r >>> 15,
                        r ^= r << 4,
                        r ^= r >>> 13,
                        s >= 0 && (o = o + 1640531527 | 0,
                        a = 0 == (n = i[127 & s] ^= r + o) ? a + 1 : 0);
                    for (a >= 128 && (i[127 & (t && t.length || 0)] = -1),
                    a = 127,
                    s = 512; s > 0; --s)
                        r = i[a + 34 & 127],
                        n = i[a = a + 1 & 127],
                        r ^= r << 13,
                        n ^= n << 17,
                        r ^= r >>> 15,
                        n ^= n >>> 12,
                        i[a] = r ^ n;
                    e.w = o,
                    e.X = i,
                    e.i = a
                }(t, e)
            }
            function a(e, t) {
                return t.i = e.i,
                t.w = e.w,
                t.X = e.X.slice(),
                t
            }
            function s(e, t) {
                null == e && (e = +new Date);
                var n = new r(e)
                  , s = t && t.state
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
                s && (s.X && a(s, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = s : n && n.amd ? n((function() {
                return s
            }
            )) : this.xor4096 = s
        }(0, e, !1)
    }
    ))
      , qa = za((function(e) {
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
            function s(e, t) {
                var n = new r(e)
                  , s = t && t.state
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
                s && ("object" == typeof s && a(s, n),
                o.state = function() {
                    return a(n, {})
                }
                ),
                o
            }
            t && t.exports ? t.exports = s : n && n.amd ? n((function() {
                return s
            }
            )) : this.tychei = s
        }(0, e, !1)
    }
    ))
      , Wa = Va({
        __proto__: null,
        default: {}
    })
      , Ua = za((function(e) {
        !function(t, n, r) {
            var a, s = 256, o = r.pow(s, 6), i = r.pow(2, 52), u = 2 * i, p = 255;
            function l(e, p, l) {
                var y = []
                  , g = f(h((p = 1 == p ? {
                    entropy: !0
                } : p || {}).entropy ? [e, m(n)] : null == e ? function() {
                    try {
                        var e;
                        return a && (e = a.randomBytes) ? e = e(s) : (e = new Uint8Array(s),
                        (t.crypto || t.msCrypto).getRandomValues(e)),
                        m(e)
                    } catch (e) {
                        var r = t.navigator
                          , o = r && r.plugins;
                        return [+new Date, t, o, t.screen, m(n)]
                    }
                }() : e, 3), y)
                  , v = new c(y)
                  , b = function() {
                    for (var e = v.g(6), t = o, n = 0; e < i; )
                        e = (e + n) * s,
                        t *= s,
                        n = v.g(1);
                    for (; e >= u; )
                        e /= 2,
                        t /= 2,
                        n >>>= 1;
                    return (e + n) / t
                };
                return b.int32 = function() {
                    return 0 | v.g(4)
                }
                ,
                b.quick = function() {
                    return v.g(4) / 4294967296
                }
                ,
                b.double = b,
                f(m(v.S), n),
                (p.pass || l || function(e, t, n, a) {
                    return a && (a.S && d(a, v),
                    e.state = function() {
                        return d(v, {})
                    }
                    ),
                    n ? (r.random = e,
                    t) : e
                }
                )(b, g, "global"in p ? p.global : this == r, p.state)
            }
            function c(e) {
                var t, n = e.length, r = this, a = 0, o = r.i = r.j = 0, i = r.S = [];
                for (n || (e = [n++]); a < s; )
                    i[a] = a++;
                for (a = 0; a < s; a++)
                    i[a] = i[o = p & o + e[a % n] + (t = i[a])],
                    i[o] = t;
                (r.g = function(e) {
                    for (var t, n = 0, a = r.i, o = r.j, i = r.S; e--; )
                        t = i[a = p & a + 1],
                        n = n * s + i[p & (i[a] = i[o = p & o + t]) + (i[o] = t)];
                    return r.i = a,
                    r.j = o,
                    n
                }
                )(s)
            }
            function d(e, t) {
                return t.i = e.i,
                t.j = e.j,
                t.S = e.S.slice(),
                t
            }
            function h(e, t) {
                var n, r = [], a = typeof e;
                if (t && "object" == a)
                    for (n in e)
                        try {
                            r.push(h(e[n], t - 1))
                        } catch (e) {}
                return r.length ? r : "string" == a ? e : e + "\0"
            }
            function f(e, t) {
                for (var n, r = e + "", a = 0; a < r.length; )
                    t[p & a] = p & (n ^= 19 * t[p & a]) + r.charCodeAt(a++);
                return m(t)
            }
            function m(e) {
                return String.fromCharCode.apply(0, e)
            }
            if (f(r.random(), n),
            e.exports) {
                e.exports = l;
                try {
                    a = Wa
                } catch (e) {}
            } else
                r.seedrandom = l
        }("undefined" != typeof self ? self : Ra, [], Math)
    }
    ));
    Ua.alea = La,
    Ua.xor128 = Pa,
    Ua.xorwow = Ba,
    Ua.xorshift7 = Ka,
    Ua.xor4096 = ja,
    Ua.tychei = qa;
    var Ha = Ua
      , Ga = function() {
        function e(e, t, n, r, a) {
            this.mean = e,
            this.stdDev = t,
            this.dtype = n,
            this.nextVal = NaN,
            this.truncated = r,
            this.truncated && (this.upper = this.mean + 2 * this.stdDev,
            this.lower = this.mean - 2 * this.stdDev);
            var s = a || Math.random();
            this.random = Ha.alea(s.toString())
        }
        return e.prototype.nextValue = function() {
            if (!isNaN(this.nextVal)) {
                var e = this.nextVal;
                return this.nextVal = NaN,
                e
            }
            for (var t, n, r = !1; !r; ) {
                var a = void 0
                  , s = void 0
                  , o = void 0;
                do {
                    o = (a = 2 * this.random() - 1) * a + (s = 2 * this.random() - 1) * s
                } while (o >= 1 || 0 === o);
                var i = Math.sqrt(-2 * Math.log(o) / o);
                t = this.mean + this.stdDev * a * i,
                n = this.mean + this.stdDev * s * i,
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
      , Za = function() {
        function e(e, t, n, r) {
            this.alpha = e,
            this.beta = 1 / t,
            this.dtype = n;
            var a = r || Math.random();
            this.randu = Ha.alea(a.toString()),
            this.randn = new Ga(0,1,n,!1,this.randu()),
            this.d = e < 1 ? e + 2 / 3 : e - 1 / 3,
            this.c = 1 / Math.sqrt(9 * this.d)
        }
        return e.prototype.nextValue = function() {
            for (var e, t, n, r, a, s; ; ) {
                do {
                    r = this.randn.nextValue(),
                    s = 1 + this.c * r
                } while (s <= 0);
                if (s *= s * s,
                t = 1 - .331 * (e = r * r) * e,
                n = .5 * e + this.d * (1 - s + Math.log(s)),
                (a = this.randu()) < t || Math.log(a) < n)
                    break
            }
            return s = 1 / this.beta * this.d * s,
            this.alpha < 1 && (s *= Math.pow(this.randu(), 1 / this.alpha)),
            this.convertValue(s)
        }
        ,
        e.prototype.convertValue = function(e) {
            return "float32" === this.dtype ? e : Math.round(e)
        }
        ,
        e
    }()
      , Qa = function() {
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
            this.random = Ha.alea(r)
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
    var Ya = tn({
        randomGamma_: function(e, t, n, r, a) {
            if (void 0 === n && (n = 1),
            void 0 === r && (r = "float32"),
            null == n && (n = 1),
            null == r && (r = "float32"),
            "float32" !== r && "int32" !== r)
                throw new Error("Unsupported data type " + r);
            for (var s = new Za(t,n,r,a), o = Wn(e, r), i = 0; i < o.values.length; i++)
                o.values[i] = s.nextValue();
            return o.toTensor()
        }
    });
    var Xa = tn({
        randomNormal_: function(e, t, n, r, a) {
            if (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            null != r && "bool" === r)
                throw new Error("Unsupported data type " + r);
            for (var s = new Ga(t,n,r,!1,a), o = Wn(e, r), i = 0; i < o.values.length; i++)
                o.values[i] = s.nextValue();
            return o.toTensor()
        }
    });
    var $a = tn({
        randomUniform_: function(e, t, n, r, a) {
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = "float32");
            for (var s = Wn(e, r), o = new Qa(t,n,null,a), i = 0; i < s.values.length; i++)
                s.values[i] = o.nextValue();
            return s.toTensor()
        }
    });
    function Ja(e, t, n, r) {
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
        return Gt.runKernel("Range", {}, a)
    }
    var es = tn({
        real_: function(e) {
            var t = {
                input: $t(e, "input", "real")
            };
            return Gt.runKernel("Real", t)
        }
    });
    var ts = tn({
        reciprocal_: function(e) {
            var t = {
                x: $t(e, "x", "reciprocal")
            };
            return Gt.runKernel("Reciprocal", t)
        }
    });
    var ns = tn({
        relu_: function(e) {
            var t = {
                x: $t(e, "x", "relu")
            };
            return Gt.runKernel("Relu", t)
        }
    });
    var rs = tn({
        relu6_: function(e) {
            var t = {
                x: $t(e, "x", "relu6")
            };
            return Gt.runKernel("Relu6", t)
        }
    });
    var as = tn({
        reverse_: function(e, t) {
            var n = {
                x: $t(e, "x", "reverse")
            }
              , r = {
                dims: t
            };
            return Gt.runKernel("Reverse", n, r)
        }
    });
    var ss = tn({
        reverse1d_: function(e) {
            var t = $t(e, "x", "reverse");
            return ae(1 === t.rank, (function() {
                return "Error in reverse1D: x must be rank 1 but got rank " + t.rank + "."
            }
            )),
            as(t, 0)
        }
    });
    var os = tn({
        reverse2d_: function(e, t) {
            var n = $t(e, "x", "reverse");
            return ae(2 === n.rank, (function() {
                return "Error in reverse2D: x must be rank 2 but got rank " + n.rank + "."
            }
            )),
            as(n, t)
        }
    });
    var is = tn({
        reverse3d_: function(e, t) {
            var n = $t(e, "x", "reverse");
            return ae(3 === n.rank, (function() {
                return "Error in reverse3D: x must be rank 3 but got rank " + n.rank + "."
            }
            )),
            as(n, t)
        }
    });
    var us = tn({
        reverse4d_: function(e, t) {
            var n = $t(e, "x", "reverse");
            return ae(4 === n.rank, (function() {
                return "Error in reverse4D: x must be rank 4 but got rank " + n.rank + "."
            }
            )),
            as(n, t)
        }
    });
    var ps = tn({
        round_: function(e) {
            var t = {
                x: $t(e, "x", "round")
            };
            return Gt.runKernel("Round", t)
        }
    });
    var ls = tn({
        rsqrt_: function(e) {
            var t = {
                x: $t(e, "x", "rsqrt", "float32")
            };
            return Gt.runKernel("Rsqrt", t)
        }
    });
    function cs(e, t, n, r) {
        if (null == r && (r = ye(e)),
        "complex64" === r)
            throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
        if (!he(e) && !Array.isArray(e) && "number" != typeof e && "boolean" != typeof e && "string" != typeof e)
            throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
        if (null != t) {
            we(t);
            var a = ue(t)
              , s = ue(n);
            ae(a === s, (function() {
                return "Based on the provided shape, [" + t + "], the tensor should have " + a + " values but has " + s
            }
            ));
            for (var o = 0; o < n.length; ++o) {
                var i = n[o]
                  , u = o !== n.length - 1 || i !== ue(t.slice(o));
                ae(n[o] === t[o] || !u, (function() {
                    return "Error creating a new Tensor. Inferred shape (" + n + ") does not match the provided shape (" + t + "). "
                }
                ))
            }
        }
        return he(e) || Array.isArray(e) || (e = [e]),
        t = t || n,
        e = "string" !== r ? xt(e, r) : ie(e, [], !0),
        Gt.makeTensor(e, t, r)
    }
    function ds(e, t) {
        if ((he(e) && "string" !== t || Array.isArray(e)) && "complex64" !== t)
            throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
        if ("string" === t && he(e) && !(e instanceof Uint8Array))
            throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");
        return cs(e, [], [], t)
    }
    var hs = tn({
        selu_: function(e) {
            var t = {
                x: $t(e, "x", "selu")
            };
            return Gt.runKernel("Selu", t)
        }
    });
    var fs = tn({
        separableConv2d_: function(e, t, n, r, a, s, o) {
            void 0 === s && (s = [1, 1]),
            void 0 === o && (o = "NHWC");
            var i = $t(e, "x", "separableConv2d")
              , u = $t(t, "depthwiseFilter", "separableConv2d")
              , p = $t(n, "pointwiseFilter", "separableConv2d")
              , l = i
              , c = !1;
            if (3 === i.rank && (c = !0,
            l = _n(i, [1, i.shape[0], i.shape[1], i.shape[2]])),
            "NCHW" === o)
                throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
            ae(4 === l.rank, (function() {
                return "Error in separableConv2d: input must be rank 4, but got rank " + l.rank + "."
            }
            )),
            ae(4 === u.rank, (function() {
                return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            ae(4 === p.rank, (function() {
                return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u.rank + "."
            }
            )),
            ae(1 === p.shape[0], (function() {
                return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + p.shape[0] + "."
            }
            )),
            ae(1 === p.shape[1], (function() {
                return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + p.shape[1] + "."
            }
            ));
            var d = u.shape[2]
              , h = u.shape[3];
            ae(p.shape[2] === d * h, (function() {
                return "Error in separableConv2d: the third dimension of pointwise filter must be " + d * h + ", but got " + p.shape[2] + "."
            }
            ));
            var f = lr(l, u, r, a, o, s)
              , m = $n(f, p, 1, "valid", o);
            return c ? _n(m, [m.shape[1], m.shape[2], m.shape[3]]) : m
        }
    });
    var ms = function(e, t) {
        return i(this, void 0, void 0, (function() {
            var n, r, a, s, o, i, p, l, c, d;
            return u(this, (function(u) {
                switch (u.label) {
                case 0:
                    return n = $t(e, "x", "setdiff1d"),
                    r = $t(t, "y", "setdiff1d"),
                    ae(n.dtype === r.dtype, (function() {
                        return "x and y should have the same dtype, but got x (" + n.dtype + ") and y (" + r.dtype + ")."
                    }
                    )),
                    ae(1 === n.rank, (function() {
                        return "x should be 1D tensor, but got x (" + n.shape + ")."
                    }
                    )),
                    ae(1 === r.rank, (function() {
                        return "y should be 1D tensor, but got y (" + r.shape + ")."
                    }
                    )),
                    [4, n.data()];
                case 1:
                    return a = u.sent(),
                    [4, r.data()];
                case 2:
                    for (s = u.sent(),
                    o = new Set(s),
                    i = 0,
                    c = 0; c < a.length; c++)
                        o.has(a[c]) || i++;
                    for (p = new Dt([i],n.dtype),
                    l = new Dt([i],"int32"),
                    c = 0,
                    d = 0; c < a.length; c++)
                        o.has(a[c]) || (p.values[d] = a[c],
                        l.values[d] = c,
                        d++);
                    return [2, [p.toTensor(), l.toTensor()]]
                }
            }
            ))
        }
        ))
    };
    var ys = tn({
        sign_: function(e) {
            var t = {
                x: $t(e, "x", "sign")
            };
            return Gt.runKernel("Sign", t)
        }
    });
    var gs = tn({
        sin_: function(e) {
            var t = {
                x: $t(e, "x", "sin", "float32")
            };
            return Gt.runKernel("Sin", t)
        }
    });
    var vs = tn({
        sinh_: function(e) {
            var t = {
                x: $t(e, "x", "sinh")
            };
            return Gt.runKernel("Sinh", t)
        }
    });
    var bs = tn({
        slice1d_: function(e, t, n) {
            var r = $t(e, "x", "slice1d");
            return ae(1 === r.rank, (function() {
                return "slice1d expects a rank-1 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Fn(r, [t], [n])
        }
    });
    var xs = tn({
        slice2d_: function(e, t, n) {
            var r = $t(e, "x", "slice2d");
            return ae(2 === r.rank, (function() {
                return "slice2d expects a rank-2 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Fn(r, t, n)
        }
    });
    var Ns = tn({
        slice3d_: function(e, t, n) {
            var r = $t(e, "x", "slice3d");
            return ae(3 === r.rank, (function() {
                return "slice3d expects a rank-3 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Fn(r, t, n)
        }
    });
    var ks = tn({
        slice4d_: function(e, t, n) {
            var r = $t(e, "x", "slice4d");
            return ae(4 === r.rank, (function() {
                return "slice4d expects a rank-4 tensor, but got a rank-" + r.rank + " tensor"
            }
            )),
            Fn(r, t, n)
        }
    });
    var ws = tn({
        softmax_: function(e, t) {
            void 0 === t && (t = -1);
            var n = $t(e, "logits", "softmax", "float32");
            if (-1 === t && (t = n.rank - 1),
            t !== n.rank - 1)
                throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + n.rank + " and dim was " + t);
            var r = {
                logits: n
            }
              , a = {
                dim: t
            };
            return Gt.runKernel("Softmax", r, a)
        }
    });
    var Ts = tn({
        fft_: function(e) {
            ae("complex64" === e.dtype, (function() {
                return "The dtype for tf.spectral.fft() must be complex64 but got " + e.dtype + "."
            }
            ));
            var t = {
                input: e
            };
            return Gt.runKernel("FFT", t)
        }
    });
    var _s = tn({
        ifft_: function(e) {
            ae("complex64" === e.dtype, (function() {
                return "The dtype for tf.spectral.ifft() must be complex64 but got " + e.dtype + "."
            }
            ));
            var t = {
                input: e
            };
            return Gt.runKernel("IFFT", t)
        }
    });
    var Ss = tn({
        irfft_: function(e) {
            var t, n = e.shape[e.shape.length - 1], r = e.size / n;
            if (n <= 2) {
                var a = _n(e, [r, n]);
                t = _s(a)
            } else {
                var s = [r, 2 * (n - 1)]
                  , o = _n(es(e), [r, n])
                  , i = _n(Cr(e), [r, n])
                  , u = as(Fn(o, [0, 1], [r, n - 2]), 1)
                  , p = An(as(Fn(i, [0, 1], [r, n - 2]), 1), ds(-1))
                  , l = On([o, u], 1)
                  , c = On([i, p], 1);
                a = _n(Gn(l, c), [s[0], s[1]]);
                t = _s(a)
            }
            if (t = es(t),
            3 === e.rank && 0 !== e.shape[0]) {
                var d = t
                  , h = e.shape[0];
                t = _n(t, [h, t.shape[0] / h, t.shape[1]]),
                d.dispose()
            }
            return t
        }
    });
    var Es = tn({
        split_: function(e, t, n) {
            void 0 === n && (n = 0);
            var r = {
                x: $t(e, "x", "split")
            }
              , a = {
                numOrSizeSplits: t,
                axis: n
            };
            return Gt.runKernel("SplitV", r, a)
        }
    });
    var Is = tn({
        rfft_: function(e, t) {
            ae("float32" === e.dtype, (function() {
                return "The dtype for rfft() must be real value but got " + e.dtype
            }
            ));
            var n, r = e.shape[e.shape.length - 1], a = e.size / r;
            if (null != t && t < r) {
                var s = e.shape.map((function(e) {
                    return 0
                }
                ))
                  , o = e.shape.map((function(e) {
                    return e
                }
                ));
                o[e.shape.length - 1] = t,
                n = Fn(e, s, o),
                r = t
            } else if (null != t && t > r) {
                var i = e.shape.map((function(e) {
                    return e
                }
                ));
                i[e.shape.length - 1] = t - r,
                n = On([e, la(i)], e.shape.length - 1),
                r = t
            } else
                n = e;
            var u = vr(n)
              , p = _n(Gn(n, u), [a, r])
              , l = Ts(p)
              , c = Math.floor(r / 2) + 1
              , d = es(l)
              , h = Cr(l)
              , f = Es(d, [c, r - c], d.shape.length - 1)
              , m = Es(h, [c, r - c], h.shape.length - 1)
              , y = n.shape.slice();
            return y[n.shape.length - 1] = c,
            _n(Gn(f[0], m[0]), y)
        }
    });
    var Os = tn({
        sqrt_: function(e) {
            var t = {
                x: $t(e, "x", "sqrt", "float32")
            };
            return Gt.runKernel("Sqrt", t)
        }
    });
    var Ds = tn({
        squaredDifference_: function(e, t) {
            var n, r = $t(e, "a", "squaredDifference"), a = $t(t, "b", "squaredDifference");
            r = (n = l(Kt(r, a), 2))[0],
            a = n[1],
            mr(r.shape, a.shape);
            var s = {
                a: r,
                b: a
            };
            return Gt.runKernel("SquaredDifference", s, {})
        }
    });
    var As = tn({
        squeeze_: function(e, t) {
            var n = $t(e, "x", "squeeze");
            return _n(n, function(e, t) {
                for (var n = [], r = [], a = null != t && Array.isArray(t) && 0 === t.length, s = null == t || a ? null : de(t, e).sort(), o = 0, i = 0; i < e.length; ++i) {
                    if (null != s) {
                        if (s[o] === i && 1 !== e[i])
                            throw new Error("Can't squeeze axis " + i + " since its dim '" + e[i] + "' is not 1");
                        (null == s[o] || s[o] > i) && 1 === e[i] && (n.push(e[i]),
                        r.push(i)),
                        s[o] <= i && o++
                    }
                    1 !== e[i] && (n.push(e[i]),
                    r.push(i))
                }
                return {
                    newShape: n,
                    keptDims: r
                }
            }(n.shape, t).newShape)
        }
    });
    var Ms = tn({
        stack_: function(e, t) {
            void 0 === t && (t = 0);
            var n = Jt(e, "tensors", "stack", "string_or_numeric");
            ae(n.length >= 1, (function() {
                return "Pass at least one tensor to tf.stack"
            }
            )),
            n.length > 0 && ae(t <= n[0].rank, (function() {
                return "Axis must be <= rank of the tensor"
            }
            ));
            var r = n
              , a = {
                axis: t
            };
            return Gt.runKernel("Pack", r, a)
        }
    });
    var Fs = tn({
        step_: function(e, t) {
            void 0 === t && (t = 0);
            var n = {
                x: $t(e, "x", "step")
            }
              , r = {
                alpha: t
            };
            return Gt.runKernel("Step", n, r)
        }
    });
    var Cs = tn({
        stridedSlice_: function(e, t, n, r, a, s, o, i, u) {
            void 0 === a && (a = 0),
            void 0 === s && (s = 0),
            void 0 === o && (o = 0),
            void 0 === i && (i = 0),
            void 0 === u && (u = 0);
            var p = {
                x: $t(e, "x", "stridedSlice", "string_or_numeric")
            }
              , l = {
                begin: t,
                end: n,
                strides: r,
                beginMask: a,
                endMask: s,
                ellipsisMask: o,
                newAxisMask: i,
                shrinkAxisMask: u
            };
            return Gt.runKernel("StridedSlice", p, l)
        }
    });
    var Rs = tn({
        tan_: function(e) {
            var t = {
                x: $t(e, "x", "tan", "float32")
            };
            return Gt.runKernel("Tan", t)
        }
    });
    function Vs(e, t, n) {
        return cs(e, t, Qt(e, n), n)
    }
    function zs(e, t) {
        oe(e);
        var n = Qt(e, t);
        if (1 !== n.length)
            throw new Error("tensor1d() requires values to be a flat/TypedArray");
        return cs(e, null, n, t)
    }
    function Ls(e, t, n) {
        if (oe(e),
        null != t && 2 !== t.length)
            throw new Error("tensor2d() requires shape to have two numbers");
        var r = Qt(e, n);
        if (2 !== r.length && 1 !== r.length)
            throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
        if (1 === r.length && null == t)
            throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
        return cs(e, t, r, n)
    }
    var Ps = tn({
        topk_: function(e, t, n) {
            void 0 === t && (t = 1),
            void 0 === n && (n = !0);
            var r = $t(e, "x", "topk");
            if (0 === r.rank)
                throw new Error("topk() expects the input to be of rank 1 or higher");
            var a = r.shape[r.shape.length - 1];
            if (t < 0)
                throw new Error("'k' passed to topk() must be >= 0 but got " + t);
            if (t > a)
                throw new Error("'k' passed to topk() must be <= the last dimension (" + a + ") but got " + t);
            var s = {
                x: r
            }
              , o = {
                k: t,
                sorted: n
            }
              , i = l(Gt.runKernel("TopK", s, o), 2);
            return {
                values: i[0],
                indices: i[1]
            }
        }
    });
    var Bs = tn({
        truncatedNormal_: function(e, t, n, r, a) {
            if (void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            null != r && "bool" === r)
                throw new Error("Unsupported data type $ { dtype }");
            for (var s = new Ga(t,n,r,!0,a), o = Wn(e, r), i = 0; i < o.values.length; i++)
                o.values[i] = s.nextValue();
            return o.toTensor()
        }
    });
    var Ks = tn({
        unique_: function(e, t) {
            void 0 === t && (t = 0);
            var n = $t(e, "x", "unique", "string_or_numeric");
            ae(n.rank > 0, (function() {
                return "The input tensor must be at least 1D"
            }
            ));
            var r = {
                x: n
            }
              , a = {
                axis: t
            }
              , s = l(Gt.runKernel("Unique", r, a), 2);
            return {
                values: s[0],
                indices: s[1]
            }
        }
    });
    var js = tn({
        unsortedSegmentSum_: function(e, t, n) {
            var r = $t(e, "x", "unsortedSegmentSum")
              , a = $t(t, "segmentIds", "unsortedSegmentSum", "int32");
            ae(le(n), (function() {
                return "numSegments must be of dtype int"
            }
            ));
            var s = {
                x: r,
                segmentIds: a
            }
              , o = {
                numSegments: n
            };
            return Gt.runKernel("UnsortedSegmentSum", s, o)
        }
    });
    var qs = tn({
        unstack_: function(e, t) {
            void 0 === t && (t = 0);
            var n = $t(e, "x", "unstack", "string_or_numeric");
            ae(t >= -n.shape.length && t < n.shape.length, (function() {
                return "Axis = " + t + " is not in [-" + n.shape.length + ", " + n.shape.length + ")"
            }
            ));
            var r = {
                value: n
            }
              , a = {
                axis: t
            };
            return Gt.runKernel("Unpack", r, a)
        }
    });
    var Ws = function(e) {
        return i(this, void 0, void 0, (function() {
            var t, n, r;
            return u(this, (function(a) {
                switch (a.label) {
                case 0:
                    return [4, (t = $t(e, "condition", "whereAsync", "bool")).data()];
                case 1:
                    return n = a.sent(),
                    r = function(e, t) {
                        for (var n = [], r = 0; r < t.length; r++)
                            t[r] && n.push(r);
                        var a = Wn(e, "int32")
                          , s = Wn([n.length, e.length], "int32");
                        for (r = 0; r < n.length; r++) {
                            var o = a.indexToLoc(n[r])
                              , i = r * e.length;
                            s.values.set(o, i)
                        }
                        return s.toTensor()
                    }(t.shape, n),
                    e !== t && t.dispose(),
                    [2, r]
                }
            }
            ))
        }
        ))
    };
    var Us = function(e, t, n) {
        return i(this, void 0, void 0, (function() {
            var r, a, s, o, i, p, l, c, d, h, f, m, y;
            return u(this, (function(u) {
                switch (u.label) {
                case 0:
                    for (r = $t(e, "tensor", "boolMask"),
                    a = $t(t, "mask", "boolMask", "bool"),
                    s = null == n ? 0 : n,
                    o = a.rank,
                    i = r.shape,
                    ae(o > 0, (function() {
                        return "mask cannot be scalar"
                    }
                    )),
                    se(i.slice(s, s + o), a.shape, "mask's shape must match the first K dimensions of tensor's shape,"),
                    p = 1,
                    l = s; l < s + o; l++)
                        p *= i[l];
                    return c = i.slice(0, s).concat([p], i.slice(s + o)),
                    d = _n(r, c),
                    h = _n(a, [-1]),
                    [4, Ws(h)];
                case 1:
                    return f = u.sent(),
                    m = As(f, [1]),
                    y = Ar(d, m, s),
                    e !== r && r.dispose(),
                    t !== a && a.dispose(),
                    m.dispose(),
                    d.dispose(),
                    h.dispose(),
                    f.dispose(),
                    [2, y]
                }
            }
            ))
        }
        ))
    };
    var Hs = tn({
        transpose_: function(e, t) {
            var n = $t(e, "x", "transpose");
            if (null == t && (t = n.shape.map((function(e, t) {
                return t
            }
            )).reverse()),
            ae(n.rank === t.length, (function() {
                return "Error in transpose: rank of input " + n.rank + " must match length of perm " + t + "."
            }
            )),
            t.forEach((function(e) {
                ae(e >= 0 && e < n.rank, (function() {
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
            return Gt.runKernel("Transpose", r, a)
        }
    });
    function Gs(e, t, n) {
        if (void 0 === n && (n = null),
        0 === e.rank)
            return nn(e);
        if (1 !== e.rank && null === n)
            return Gs(_n(e, [-1]), t, n);
        if (1 === e.rank || "number" == typeof n || Array.isArray(n) && 1 === n.length) {
            if (1 === t)
                return Xr(nn(e), n);
            if (t === 1 / 0)
                return Qr(nn(e), n);
            if (t === -1 / 0)
                return da(nn(e), n);
            if ("euclidean" === t || 2 === t)
                return Os(Xr(Aa(nn(e), ds(2, "int32")), n));
            throw new Error("Error in norm: invalid ord value: " + t)
        }
        if (Array.isArray(n) && 2 === n.length) {
            if (1 === t)
                return Qr(Xr(nn(e), n[0]), n[1] - 1);
            if (t === 1 / 0)
                return Qr(Xr(nn(e), n[1]), n[0]);
            if (t === -1 / 0)
                return da(Xr(nn(e), n[1]), n[0]);
            if ("fro" === t || "euclidean" === t)
                return Os(Xr(ya(e), n));
            throw new Error("Error in norm: invalid ord value: " + t)
        }
        throw new Error("Error in norm: invalid axis: " + n)
    }
    var Zs = tn({
        norm_: function(e, t, n, r) {
            void 0 === t && (t = "euclidean"),
            void 0 === n && (n = null),
            void 0 === r && (r = !1);
            var a = Gs(e = $t(e, "x", "norm"), t, n)
              , s = a.shape;
            if (r) {
                var o = de(n, e.shape);
                s = Jr(a.shape, o)
            }
            return _n(a, s)
        }
    });
    var Qs = tn({
        movingAverage_: function(e, t, n, r, a) {
            void 0 === a && (a = !0);
            var s, o, i = $t(e, "v", "movingAverage"), u = $t(t, "x", "movingAverage"), p = $t(n, "decay", "movingAverage");
            o = u,
            ae((s = i).dtype === o.dtype, (function() {
                return "The dtypes of the first(" + s.dtype + ") and second(" + o.dtype + ") input must match"
            }
            )),
            ae(pe(i.shape, u.shape), (function() {
                return "Shape mismatch in v and x"
            }
            ));
            var l = ds(1)
              , c = Yr(l, p)
              , d = An(Yr(u, i), c);
            if (a) {
                ae(null != r, (function() {
                    return "When using zeroDebias: true, step is required."
                }
                ));
                var h = $t(r, "step", "movingAverage");
                d = fr(d, Yr(l, Aa(p, h)))
            }
            return sn(i, d)
        }
    });
    function Ys(e, t, n) {
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
        !function(e, t, n) {
            var r = t.rank > 1 ? t.shape[t.rank - 1] : 1
              , a = t.rank > 1 ? t.rank - 1 : 1
              , s = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + t.shape + ", shape: " + e + ", sliceDim: " + r + ", and batchDim: " + a + ".";
            if (n.rank < a)
                throw new Error(s + " update.rank < " + a + ". ");
            if (e.length < r + (n.rank - a))
                throw new Error(s + " Output shape length < " + (r + (n.rank - a)));
            if (n.rank !== a + e.length - r)
                throw new Error(s + " update.rank != " + (a + e.length - r));
            for (var o = 0; o < a; ++o)
                if (n.shape[o] !== t.shape[o])
                    throw new Error(s + " updates.shape[" + o + "] (" + n.shape[o] + ") != indices.shape[" + o + "] (" + t.shape[o] + ").");
            for (o = 0; o < n.rank - a; ++o)
                if (n.shape[o + a] !== e[o + r])
                    throw new Error(s + " updates.shape[" + (o + a) + "] (" + n.shape[o + a] + ") != shape[" + (o + a) + "] (" + e[o + a] + ")")
        }(n, t, e)
    }
    var Xs = tn({
        scatterND_: function(e, t, n) {
            var r = $t(e, "indices", "scatterND", "int32")
              , a = $t(t, "updates", "scatterND");
            Ys(a, r, n);
            var s = {
                indices: r,
                updates: a
            }
              , o = {
                shape: n
            };
            return Gt.runKernel("ScatterNd", s, o)
        }
    });
    var $s = tn({
        sparseToDense_: function(e, t, n, r) {
            void 0 === r && (r = 0);
            var a = $t(e, "sparseIndices", "sparseToDense", "int32")
              , s = $t(t, "sparseValues", "sparseToDense")
              , o = $t(r, "defaultValue", "sparseToDense", s.dtype);
            !function(e, t, n, r) {
                if ("int32" !== e.dtype)
                    throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
                if (e.rank > 2)
                    throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + e.shape + ".");
                var a = e.rank > 0 ? e.shape[0] : 1
                  , s = e.rank > 1 ? e.shape[1] : 1;
                if (n.length !== s)
                    throw new Error("outputShape has incorrect number of elements:, " + n.length + ", should be: " + s + ".");
                var o = t.size;
                if (0 !== t.rank && (1 !== t.rank || o !== a))
                    throw new Error("sparseValues has incorrect shape " + t.shape + ", should be [] or [" + a + "]");
                if (t.dtype !== r.dtype)
                    throw new Error("sparseValues.dtype must match defaultValues.dtype")
            }(a, s, n, o);
            var i = {
                sparseIndices: a,
                sparseValues: s,
                defaultValue: o
            }
              , u = {
                outputShape: n
            };
            return Gt.runKernel("SparseToDense", i, u)
        }
    });
    var Js = tn({
        gatherND_: function(e, t) {
            var n = $t(t, "indices", "gatherND", "int32")
              , r = {
                params: $t(e, "x", "gatherND", "string_or_numeric"),
                indices: n
            };
            return Gt.runKernel("GatherNd", r)
        }
    });
    var eo = tn({
        dropout_: function(e, t, n, r) {
            var a = $t(e, "x", "dropout");
            if (ae("float32" === a.dtype, (function() {
                return "x has to be a floating point tensor since it's going to be scaled, but got a " + a.dtype + " tensor instead."
            }
            )),
            ae(t >= 0 && t < 1, (function() {
                return "rate must be a float in the range [0, 1), but got " + t + "."
            }
            )),
            0 === t)
                return e instanceof Ft ? a.clone() : a;
            var s = function(e, t) {
                if (null == t)
                    return e.shape.slice();
                if (pe(e.shape, t))
                    return t;
                if (e.shape.length === t.length) {
                    for (var n = [], r = 0; r < e.shape.length; r++)
                        null == t[r] && null != e.shape[r] ? n.push(e.shape[r]) : n.push(t[r]);
                    return n
                }
                return t
            }(a, n)
              , o = 1 - t
              , i = fr(Dr(sn($a(s, 0, 1, "float32", r), o)), o);
            return An(a, i)
        }
    });
    function to(e) {
        return Math.floor(Math.pow(2, Math.ceil(Math.log(e) / Math.log(2))))
    }
    function no(e, t, n) {
        for (var r = 1 - e % 2, a = new Float32Array(e), s = 0; s < e; ++s) {
            var o = 2 * Math.PI * s / (e + r - 1);
            a[s] = t - n * Math.cos(o)
        }
        return zs(a, "float32")
    }
    var ro = function(e, t, n) {
        return void 0 === n && (n = 1),
        i(this, void 0, void 0, (function() {
            var r, a, s, o, i, p, c, d, h, f, m, y, g, v;
            return u(this, (function(u) {
                switch (u.label) {
                case 0:
                    return r = $t(e, "predictions", "inTopK"),
                    a = $t(t, "targets", "inTopK"),
                    ae(r.rank > 1, (function() {
                        return "inTopK() expects the predictions to be of rank 2 or higher, but got " + r.rank
                    }
                    )),
                    ae(r.rank - 1 === a.rank, (function() {
                        return "predictions rank should be 1 larger than targets rank, but got predictions rank " + r.rank + " and targets rank " + a.rank
                    }
                    )),
                    se(r.shape.slice(0, r.shape.length - 1), a.shape, "predictions's shape should be align with the targets' shape, except the last dimension."),
                    s = r.shape[r.shape.length - 1],
                    ae(n > 0 && n <= s, (function() {
                        return "'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" + s + "), but got " + n
                    }
                    )),
                    [4, r.data()];
                case 1:
                    return o = u.sent(),
                    [4, a.data()];
                case 2:
                    for (i = u.sent(),
                    p = l([o.length / s, s], 2),
                    c = p[0],
                    d = p[1],
                    h = function(e, t) {
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
                    }("bool", c),
                    f = 0; f < c; f++) {
                        for (m = f * d,
                        y = o.subarray(m, m + d),
                        g = [],
                        v = 0; v < y.length; v++)
                            g.push({
                                value: y[v],
                                index: v
                            });
                        for (g.sort((function(e, t) {
                            return t.value - e.value
                        }
                        )),
                        h[f] = 0,
                        v = 0; v < n; v++)
                            if (g[v].index === i[f]) {
                                h[f] = 1;
                                break
                            }
                    }
                    return e !== r && r.dispose(),
                    t !== a && a.dispose(),
                    [2, Vs(h, a.shape, "bool")]
                }
            }
            ))
        }
        ))
    };
    var ao = tn({
        conv2DBackpropFilter_: function(e, t, n, r, a, s, o) {
            void 0 === s && (s = "NHWC");
            var i = e;
            3 === e.rank && (i = _n(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            var u = t;
            3 === u.rank && (u = _n(t, [1, t.shape[0], t.shape[1], t.shape[2]])),
            ae(4 === i.rank, (function() {
                return "Error in conv2dDerFilter: input must be rank 4, but got shape " + i.shape + "."
            }
            )),
            ae(4 === u.rank, (function() {
                return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + u.shape + "."
            }
            )),
            ae(4 === n.length, (function() {
                return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."
            }
            ));
            var p = "NHWC" === s ? i.shape[3] : i.shape[1]
              , l = "NHWC" === s ? u.shape[3] : u.shape[1];
            ae(p === n[2], (function() {
                return "Error in conv2dDerFilter: depth of input " + p + ") must match input depth in filter (" + n[2] + "."
            }
            )),
            ae(l === n[3], (function() {
                return "Error in conv2dDerFilter: depth of dy (" + l + ") must match output depth for filter (" + n[3] + ")."
            }
            )),
            Tn("conv2dDerFilter", a, o);
            var c = {
                x: i,
                dy: u
            }
              , d = {
                strides: r,
                pad: a,
                dataFormat: s,
                dimRoundingMode: o,
                filterShape: n
            };
            return Gt.runKernel("Conv2DBackpropFilter", c, d)
        }
    });
    function so(e, t, n) {
        if (null == n || "linear" === n)
            return e;
        if ("relu" === n)
            return An(e, Fs(t));
        throw new Error("Cannot compute gradient for fused activation " + n + ".")
    }
    function oo(e, t) {
        var n = t
          , r = function(e, t) {
            for (var n = [], r = 0; r < t.length; r++) {
                var a = e[e.length - r - 1]
                  , s = t.length - r - 1
                  , o = t[s];
                (null == a || 1 === a && o > 1) && n.unshift(s)
            }
            return n
        }(e.shape, t.shape);
        return r.length > 0 && (n = Xr(n, r)),
        _n(n, e.shape)
    }
    function io(e, t, n, r) {
        if ("linear" === t)
            return e;
        if ("relu" === t)
            return ns(e);
        if ("elu" === t)
            return kr(e);
        if ("relu6" === t)
            return rs(e);
        if ("prelu" === t)
            return Ma(e, n);
        if ("leakyrelu" === t)
            return Lr(e, r);
        if ("sigmoid" === t)
            return Mn(e);
        throw new Error("Unknown fused activation " + t + ".")
    }
    var uo = function(e, t) {
        return !(e > 0) || "linear" === t
    };
    var po = tn({
        fusedConv2d_: function(e) {
            var t = e.x
              , n = e.filter
              , r = e.strides
              , a = e.pad
              , s = e.dataFormat
              , o = void 0 === s ? "NHWC" : s
              , i = e.dilations
              , u = void 0 === i ? [1, 1] : i
              , p = e.dimRoundingMode
              , c = e.bias
              , d = e.activation
              , h = void 0 === d ? "linear" : d
              , f = e.preluActivationWeights
              , m = e.leakyreluAlpha;
            if (h = h || "linear",
            !1 === uo(Gt.state.gradientDepth, h)) {
                var y = $n(t, n, r, a, o, u, p);
                return null != c && (y = sn(y, c)),
                io(y, h, f, m)
            }
            var g = $t(t, "x", "conv2d", "float32")
              , v = $t(n, "filter", "conv2d", "float32")
              , b = g
              , x = !1;
            3 === g.rank && (x = !0,
            b = _n(g, [1, g.shape[0], g.shape[1], g.shape[2]])),
            ae(4 === b.rank, (function() {
                return "Error in fused conv2d: input must be rank 4, but got rank " + b.rank + "."
            }
            )),
            ae(4 === v.rank, (function() {
                return "Error in fused conv2d: filter must be rank 4, but got rank " + v.rank + "."
            }
            )),
            Tn("fused conv2d", a, p),
            ae(b.shape[3] === v.shape[2], (function() {
                return "Error in conv2d: depth of input (" + b.shape[3] + ") must match input depth for filter " + v.shape[2] + "."
            }
            )),
            ae(wn(r, u), (function() {
                return "Error in conv2D: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + u + "'"
            }
            )),
            ae("NHWC" === o, (function() {
                return "Error in conv2d: got dataFormat of " + o + " but only NHWC is currently supported."
            }
            ));
            var N, k, w = vn(b.shape, v.shape, r, u, a, p);
            null != c && (N = l(Kt(N = $t(c, "bias", "fused conv2d"), g), 1)[0],
            mr(w.outShape, N.shape)),
            null != f && (k = $t(f, "prelu weights", "fused conv2d"));
            var T = function(e, t) {
                var n = l(t, 4)
                  , s = n[0]
                  , o = n[1]
                  , i = n[2]
                  , p = n[3]
                  , c = so(e, i, h);
                ae(kn(u), (function() {
                    return "Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + u + "'"
                }
                ));
                var d = [er(o.shape, c, s, r, a), ao(o, c, s.shape, r, a)];
                if (null != p) {
                    var f = oo(p, c);
                    d.push(f)
                }
                return d
            }
              , _ = {
                x: b,
                filter: v,
                bias: N,
                preluActivationWeights: k
            }
              , S = {
                strides: r,
                pad: a,
                dataFormat: o,
                dilations: u,
                dimRoundingMode: p,
                activation: h,
                leakyreluAlpha: m
            };
            return null == c ? Ur((function(e, t, n) {
                var r = Gt.runKernel(Pe, _, S);
                return n([t, e, r]),
                x && (r = _n(r, [r.shape[1], r.shape[2], r.shape[3]])),
                {
                    value: r,
                    gradFunc: T
                }
            }
            ))(b, v) : Ur((function(e, t, n, r) {
                var a = Gt.runKernel(Pe, _, S);
                return r([t, e, a, n]),
                x && (a = _n(a, [a.shape[1], a.shape[2], a.shape[3]])),
                {
                    value: a,
                    gradFunc: T
                }
            }
            ))(b, v, N)
        }
    });
    var lo = tn({
        depthwiseConv2dNativeBackpropFilter_: function(e, t, n, r, a, s, o) {
            void 0 === s && (s = [1, 1]);
            var i = e;
            3 === e.rank && (i = _n(e, [1, e.shape[0], e.shape[1], e.shape[2]]));
            var u = t;
            3 === u.rank && (u = _n(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            var p = {
                x: i,
                dy: u
            }
              , l = {
                strides: r,
                pad: a,
                dimRoundingMode: o,
                dilations: s,
                filterShape: n
            };
            return Gt.runKernel("DepthwiseConv2dNativeBackpropFilter", p, l)
        }
    });
    var co = tn({
        depthwiseConv2dNativeBackpropInput_: function(e, t, n, r, a, s, o) {
            void 0 === s && (s = [1, 1]);
            var i = t
              , u = !1;
            3 === t.rank && (u = !0,
            i = _n(t, [1, t.shape[0], t.shape[1], t.shape[2]]));
            var p = {
                dy: i,
                filter: n
            }
              , l = {
                strides: r,
                pad: a,
                dimRoundingMode: o,
                dilations: s,
                inputShape: e
            }
              , c = Gt.runKernel("DepthwiseConv2dNativeBackpropInput", p, l);
            return u ? _n(c, [c.shape[1], c.shape[2], c.shape[3]]) : c
        }
    });
    var ho = tn({
        fusedDepthwiseConv2d_: function(e) {
            var t, n = e.x, r = e.filter, a = e.strides, s = e.pad, o = e.dataFormat, i = void 0 === o ? "NHWC" : o, u = e.dilations, p = void 0 === u ? [1, 1] : u, c = e.dimRoundingMode, d = e.bias, h = e.activation, f = void 0 === h ? "linear" : h, m = e.preluActivationWeights, y = e.leakyreluAlpha;
            if (!1 === uo(Gt.state.gradientDepth, f)) {
                var g = lr(n, r, a, s, i, p, c);
                return null != d && (g = sn(g, d)),
                io(g, f, m, y)
            }
            var v = $t(n, "x", "depthwiseConv2d", "float32")
              , b = $t(r, "filter", "depthwiseConv2d", "float32")
              , x = v
              , N = !1;
            3 === v.rank && (N = !0,
            x = _n(v, [1, v.shape[0], v.shape[1], v.shape[2]])),
            ae(4 === x.rank, (function() {
                return "Error in fused depthwiseConv2d: input must be rank 4, but got rank " + x.rank + "."
            }
            )),
            ae(4 === b.rank, (function() {
                return "Error in fused depthwiseConv2d: filter must be rank 4, but got rank " + b.rank + "."
            }
            )),
            ae(x.shape[3] === b.shape[2], (function() {
                return "Error in fused depthwiseConv2d: number of input channels (" + x.shape[3] + ") must match the inChannels dimension in filter " + b.shape[2] + "."
            }
            )),
            null == p && (p = [1, 1]),
            ae(wn(a, p), (function() {
                return "Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides " + a + " and dilations '" + p + "'"
            }
            )),
            Tn("fused depthwiseConv2d", s, c);
            var k, w, T = vn(x.shape, b.shape, a, p, s, c, !0);
            null != d && (t = l(Kt(k = $t(d, "bias", "fused conv2d"), v), 1),
            k = t[0],
            mr(T.outShape, k.shape)),
            null != m && (w = $t(m, "prelu weights", "fused depthwiseConv2d"));
            var _ = function(e, t) {
                ae(kn(p), (function() {
                    return "Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + p + "'"
                }
                ));
                var n = l(t, 4)
                  , r = n[0]
                  , o = n[1]
                  , i = n[2]
                  , u = n[3]
                  , d = so(e, i, f)
                  , h = co(o.shape, d, r, a, s, p, c)
                  , m = lo(o, d, r.shape, a, s, p, c);
                return null != u ? [h, m, oo(k, d)] : [h, m]
            }
              , S = {
                x: x,
                filter: b,
                bias: k,
                preluActivationWeights: w
            }
              , E = {
                strides: a,
                pad: s,
                dataFormat: i,
                dilations: p,
                dimRoundingMode: c,
                activation: f,
                leakyreluAlpha: y
            };
            return null == d ? Ur((function(e, t, n) {
                var r = Gt.runKernel(Be, S, E);
                return n([t, e, r]),
                N && (r = _n(r, [r.shape[1], r.shape[2], r.shape[3]])),
                {
                    value: r,
                    gradFunc: _
                }
            }
            ))(x, b) : Ur((function(e, t, n, r) {
                var a = Gt.runKernel(Be, S, E);
                return r([t, e, a, n]),
                N && (a = _n(a, [a.shape[1], a.shape[2], a.shape[3]])),
                {
                    value: a,
                    gradFunc: _
                }
            }
            ))(x, b, k)
        }
    });
    var fo = tn({
        fusedMatMul_: function(e) {
            var t, n = e.a, r = e.b, a = e.transposeA, s = void 0 !== a && a, o = e.transposeB, i = void 0 !== o && o, u = e.bias, p = e.activation, c = void 0 === p ? "linear" : p, d = e.preluActivationWeights, h = e.leakyreluAlpha;
            if (!1 === uo(Gt.state.gradientDepth, c)) {
                var f = Dn(n, r, s, i);
                return null != u && (f = sn(f, u)),
                io(f, c, d, h)
            }
            var m = $t(n, "a", "fused matMul")
              , y = $t(r, "b", "fused matMul");
            t = l(Kt(m, y), 2),
            m = t[0],
            y = t[1];
            var g = s ? m.shape[m.rank - 2] : m.shape[m.rank - 1]
              , v = i ? y.shape[y.rank - 1] : y.shape[y.rank - 2]
              , b = s ? m.shape[m.rank - 1] : m.shape[m.rank - 2]
              , x = i ? y.shape[y.rank - 2] : y.shape[y.rank - 1]
              , N = m.shape.slice(0, -2)
              , k = y.shape.slice(0, -2)
              , w = ue(N)
              , T = ue(k);
            ae(g === v, (function() {
                return "Error in fused matMul: inner shapes (" + g + ") and (" + v + ") of Tensors with shapes " + m.shape + " and " + y.shape + " and transposeA=" + s + " and transposeB=" + i + " must match."
            }
            ));
            var _, S, E = mr(m.shape.slice(0, -2), y.shape.slice(0, -2)).concat([b, x]), I = _n(m, s ? [w, g, b] : [w, b, g]), O = _n(y, i ? [T, x, v] : [T, v, x]);
            null != u && (_ = l(Kt(_ = $t(u, "bias", "fused matMul"), m), 1)[0],
            mr(E, _.shape)),
            null != d && (S = $t(d, "prelu weights", "fused matMul"));
            var D = function(e, t) {
                var n, r, a = l(t, 4), o = a[0], p = a[1], d = a[2], h = a[3], f = so(_n(e, d.shape), d, c);
                return s || i ? !s && i ? (n = Dn(f, p, !1, !1),
                r = Dn(f, o, !0, !1)) : s && !i ? (n = Dn(p, f, !1, !0),
                r = Dn(o, f, !1, !1)) : (n = Dn(p, f, !0, !0),
                r = Dn(f, o, !0, !0)) : (n = Dn(f, p, !1, !0),
                r = Dn(o, f, !0, !1)),
                null != u ? [n, r, oo(h, f)] : [n, r]
            }
              , A = {
                a: I,
                b: O,
                bias: _,
                preluActivationWeights: S
            }
              , M = {
                transposeA: s,
                transposeB: i,
                activation: c,
                leakyreluAlpha: h
            };
            return null == u ? Ur((function(e, t, n) {
                var r = Gt.runKernel(Le, A, M);
                return n([e, t, r]),
                {
                    value: _n(r, E),
                    gradFunc: D
                }
            }
            ))(I, O) : Ur((function(e, t, n, r) {
                var a = Gt.runKernel(Le, A, M);
                return r([e, t, a, n]),
                {
                    value: _n(a, E),
                    gradFunc: D
                }
            }
            ))(I, O, _)
        }
    })
      , mo = {
        __proto__: null,
        conv2d: po,
        depthwiseConv2d: ho,
        matMul: fo
    };
    var yo = tn({
        hammingWindow_: function(e) {
            return no(e, .54, .46)
        }
    });
    var go = tn({
        hannWindow_: function(e) {
            return no(e, .5, .5)
        }
    });
    var vo = tn({
        frame_: function(e, t, n, r, a) {
            void 0 === r && (r = !1),
            void 0 === a && (a = 0);
            for (var s = 0, o = []; s + t <= e.size; )
                o.push(Fn(e, s, t)),
                s += n;
            if (r)
                for (; s < e.size; ) {
                    var i = s + t - e.size
                      , u = On([Fn(e, s, t - i), Or([i], a)]);
                    o.push(u),
                    s += n
                }
            return 0 === o.length ? Ls([], [0, t]) : _n(On(o), [o.length, t])
        }
    });
    var bo = tn({
        stft_: function(e, t, n, r, a) {
            void 0 === a && (a = go),
            null == r && (r = to(t));
            var s = vo(e, t, n)
              , o = An(s, a(t));
            return Is(o, r)
        }
    });
    var xo = tn({
        cropAndResize_: function(e, t, n, r, a, s) {
            void 0 === a && (a = "bilinear"),
            void 0 === s && (s = 0);
            var o = $t(e, "image", "cropAndResize")
              , i = $t(t, "boxes", "cropAndResize", "float32")
              , u = $t(n, "boxInd", "cropAndResize", "int32")
              , p = i.shape[0];
            ae(4 === o.rank, (function() {
                return "Error in cropAndResize: image must be rank 4,but got rank " + o.rank + "."
            }
            )),
            ae(2 === i.rank && 4 === i.shape[1], (function() {
                return "Error in cropAndResize: boxes must be have size [" + p + ",4] but had shape " + i.shape + "."
            }
            )),
            ae(1 === u.rank && u.shape[0] === p, (function() {
                return "Error in cropAndResize: boxInd must be have size [" + p + "] but had shape " + i.shape + "."
            }
            )),
            ae(2 === r.length, (function() {
                return "Error in cropAndResize: cropSize must be of length 2, but got length " + r.length + "."
            }
            )),
            ae(r[0] >= 1 && r[1] >= 1, (function() {
                return "cropSize must be atleast [1,1], but was " + r
            }
            )),
            ae("bilinear" === a || "nearest" === a, (function() {
                return "method must be bilinear or nearest, but was " + a
            }
            ));
            var l = {
                image: o,
                boxes: i,
                boxInd: u
            }
              , c = {
                method: a,
                extrapolationValue: s,
                cropSize: r
            };
            return Gt.runKernel("CropAndResize", l, c)
        }
    });
    var No = tn({
        flipLeftRight_: function(e) {
            var t = $t(e, "image", "flipLeftRight", "float32");
            ae(4 === t.rank, (function() {
                return "Error in flipLeftRight: image must be rank 4,but got rank " + t.rank + "."
            }
            ));
            var n = {
                image: t
            };
            return Gt.runKernel("FlipLeftRight", n, {})
        }
    });
    var ko = tn({
        grayscaleToRGB_: function(e) {
            var t = $t(e, "image", "grayscaleToRGB")
              , n = t.rank - 1
              , r = t.shape[n];
            ae(t.rank >= 2, (function() {
                return "Error in grayscaleToRGB: images must be at least rank 2, but got rank " + t.rank + "."
            }
            )),
            ae(1 === r, (function() {
                return "Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size " + r + "."
            }
            ));
            var a = new Array(t.rank);
            return a.fill(1, 0, n),
            a[n] = 3,
            Er(t, a)
        }
    });
    var wo = tn({
        rotateWithOffset_: function(e, t, n, r) {
            void 0 === n && (n = 0),
            void 0 === r && (r = .5);
            var a = $t(e, "image", "rotateWithOffset", "float32");
            ae(4 === a.rank, (function() {
                return "Error in rotateWithOffset: image must be rank 4,but got rank " + a.rank + "."
            }
            ));
            var s = {
                image: a
            }
              , o = {
                radians: t,
                fillValue: n,
                center: r
            };
            return Gt.runKernel("RotateWithOffset", s, o)
        }
    });
    function To(e, t, n, r, a, s) {
        null == r && (r = .5),
        null == a && (a = Number.NEGATIVE_INFINITY),
        null == s && (s = 0);
        var o = e.shape[0];
        return n = Math.min(n, o),
        ae(0 <= r && r <= 1, (function() {
            return "iouThreshold must be in [0, 1], but was '" + r + "'"
        }
        )),
        ae(2 === e.rank, (function() {
            return "boxes must be a 2D tensor, but was of rank '" + e.rank + "'"
        }
        )),
        ae(4 === e.shape[1], (function() {
            return "boxes must have 4 columns, but 2nd dimension was " + e.shape[1]
        }
        )),
        ae(1 === t.rank, (function() {
            return "scores must be a 1D tensor"
        }
        )),
        ae(t.shape[0] === o, (function() {
            return "scores has incompatible shape with boxes. Expected " + o + ", but was " + t.shape[0]
        }
        )),
        ae(0 <= s && s <= 1, (function() {
            return "softNmsSigma must be in [0, 1], but was '" + s + "'"
        }
        )),
        {
            maxOutputSize: n,
            iouThreshold: r,
            scoreThreshold: a,
            softNmsSigma: s
        }
    }
    var _o = tn({
        nonMaxSuppression_: function(e, t, n, r, a) {
            void 0 === r && (r = .5),
            void 0 === a && (a = Number.NEGATIVE_INFINITY);
            var s = $t(e, "boxes", "nonMaxSuppression", "float32")
              , o = $t(t, "scores", "nonMaxSuppression", "float32")
              , i = To(s, o, n, r, a)
              , u = {
                maxOutputSize: n = i.maxOutputSize,
                iouThreshold: r = i.iouThreshold,
                scoreThreshold: a = i.scoreThreshold
            };
            return Gt.runKernel("NonMaxSuppressionV3", {
                boxes: s,
                scores: o
            }, u)
        }
    });
    function So(e, t, n) {
        var r = function(e, t, n) {
            return function(e, t, n) {
                var r = 0
                  , a = e.length
                  , s = 0
                  , o = !1;
                for (; r < a; ) {
                    var i = n(t, e[s = r + (a - r >>> 1)]);
                    i > 0 ? r = s + 1 : (a = s,
                    o = !i)
                }
                return o ? r : -r - 1
            }(e, t, n || Eo)
        }(e, t, n)
          , a = r < 0 ? -(r + 1) : r;
        e.splice(a, 0, t)
    }
    function Eo(e, t) {
        return e > t ? 1 : e < t ? -1 : 0
    }
    function Io(e, t, n, r, a, s, o, i, u) {
        void 0 === o && (o = !1),
        void 0 === i && (i = !1),
        void 0 === u && (u = !1);
        for (var p = [], l = 0; l < t.length; l++)
            t[l] > a && p.push({
                score: t[l],
                boxIndex: l,
                suppressBeginIndex: 0
            });
        p.sort(Ao);
        for (var d = s > 0 ? -.5 / s : 0, h = [], f = []; h.length < n && p.length > 0; ) {
            var m = p.pop()
              , y = m.score
              , g = m.boxIndex
              , v = m.suppressBeginIndex;
            if (y < a)
                break;
            for (var b = !1, x = h.length - 1; x >= v; --x) {
                var N = Oo(e, g, h[x]);
                if (N >= r) {
                    b = !0;
                    break
                }
                if (m.score = m.score * Do(r, d, N),
                m.score <= a)
                    break
            }
            m.suppressBeginIndex = h.length,
            b || (m.score === y ? (h.push(g),
            f.push(m.score)) : m.score > a && So(p, m, Ao))
        }
        var k = h.length
          , w = n - k;
        i && w > 0 && (h.push.apply(h, c(new Array(w).fill(0))),
        f.push.apply(f, c(new Array(w).fill(0))));
        var T = {
            selectedIndices: h
        };
        return o && (T.selectedScores = f),
        u && (T.validOutputs = k),
        T
    }
    function Oo(e, t, n) {
        var r = e.subarray(4 * t, 4 * t + 4)
          , a = e.subarray(4 * n, 4 * n + 4)
          , s = Math.min(r[0], r[2])
          , o = Math.min(r[1], r[3])
          , i = Math.max(r[0], r[2])
          , u = Math.max(r[1], r[3])
          , p = Math.min(a[0], a[2])
          , l = Math.min(a[1], a[3])
          , c = Math.max(a[0], a[2])
          , d = Math.max(a[1], a[3])
          , h = (i - s) * (u - o)
          , f = (c - p) * (d - l);
        if (h <= 0 || f <= 0)
            return 0;
        var m = Math.max(s, p)
          , y = Math.max(o, l)
          , g = Math.min(i, c)
          , v = Math.min(u, d)
          , b = Math.max(g - m, 0) * Math.max(v - y, 0);
        return b / (h + f - b)
    }
    function Do(e, t, n) {
        var r = Math.exp(t * n * n);
        return n <= e ? r : 0
    }
    function Ao(e, t) {
        return e.score - t.score || e.score === t.score && t.boxIndex - e.boxIndex
    }
    var Mo = function(e, t, n, r, a) {
        return void 0 === r && (r = .5),
        void 0 === a && (a = Number.NEGATIVE_INFINITY),
        i(this, void 0, void 0, (function() {
            var s, o, i, p, l, c, d;
            return u(this, (function(u) {
                switch (u.label) {
                case 0:
                    return s = $t(e, "boxes", "nonMaxSuppressionAsync"),
                    o = $t(t, "scores", "nonMaxSuppressionAsync"),
                    i = To(s, o, n, r, a),
                    n = i.maxOutputSize,
                    r = i.iouThreshold,
                    a = i.scoreThreshold,
                    [4, Promise.all([s.data(), o.data()])];
                case 1:
                    return p = u.sent(),
                    l = p[0],
                    c = p[1],
                    d = function(e, t, n, r, a) {
                        return Io(e, t, n, r, a, 0)
                    }(l, c, n, r, a).selectedIndices,
                    s !== e && s.dispose(),
                    o !== t && o.dispose(),
                    [2, zs(d, "int32")]
                }
            }
            ))
        }
        ))
    };
    var Fo = tn({
        nonMaxSuppressionWithScore_: function(e, t, n, r, a, s) {
            void 0 === r && (r = .5),
            void 0 === a && (a = Number.NEGATIVE_INFINITY),
            void 0 === s && (s = 0);
            var o = $t(e, "boxes", "nonMaxSuppression")
              , i = $t(t, "scores", "nonMaxSuppression")
              , u = To(o, i, n, r, a, s)
              , p = {
                boxes: o,
                scores: i
            }
              , l = {
                maxOutputSize: n = u.maxOutputSize,
                iouThreshold: r = u.iouThreshold,
                scoreThreshold: a = u.scoreThreshold,
                softNmsSigma: s = u.softNmsSigma
            }
              , c = Gt.runKernel("NonMaxSuppressionV5", p, l);
            return {
                selectedIndices: c[0],
                selectedScores: c[1]
            }
        }
    });
    var Co = function(e, t, n, r, a, s) {
        return void 0 === r && (r = .5),
        void 0 === a && (a = Number.NEGATIVE_INFINITY),
        void 0 === s && (s = 0),
        i(this, void 0, void 0, (function() {
            var o, i, p, l, c, d, h, f, m;
            return u(this, (function(u) {
                switch (u.label) {
                case 0:
                    return o = $t(e, "boxes", "nonMaxSuppressionAsync"),
                    i = $t(t, "scores", "nonMaxSuppressionAsync"),
                    p = To(o, i, n, r, a, s),
                    n = p.maxOutputSize,
                    r = p.iouThreshold,
                    a = p.scoreThreshold,
                    s = p.softNmsSigma,
                    [4, Promise.all([o.data(), i.data()])];
                case 1:
                    return l = u.sent(),
                    c = l[0],
                    d = l[1],
                    h = function(e, t, n, r, a, s) {
                        return Io(e, t, n, r, a, s, !0)
                    }(c, d, n, r, a, s),
                    f = h.selectedIndices,
                    m = h.selectedScores,
                    o !== e && o.dispose(),
                    i !== t && i.dispose(),
                    [2, {
                        selectedIndices: zs(f, "int32"),
                        selectedScores: zs(m)
                    }]
                }
            }
            ))
        }
        ))
    };
    var Ro = tn({
        nonMaxSuppressionPadded_: function(e, t, n, r, a, s) {
            void 0 === r && (r = .5),
            void 0 === a && (a = Number.NEGATIVE_INFINITY),
            void 0 === s && (s = !1);
            var o = $t(e, "boxes", "nonMaxSuppression")
              , i = $t(t, "scores", "nonMaxSuppression")
              , u = To(o, i, n, r, a, null)
              , p = {
                boxes: o,
                scores: i
            }
              , l = {
                maxOutputSize: u.maxOutputSize,
                iouThreshold: u.iouThreshold,
                scoreThreshold: u.scoreThreshold,
                padToMaxOutputSize: s
            }
              , c = Gt.runKernel("NonMaxSuppressionV4", p, l);
            return {
                selectedIndices: c[0],
                validOutputs: c[1]
            }
        }
    });
    var Vo = function(e, t, n, r, a, s) {
        return void 0 === r && (r = .5),
        void 0 === a && (a = Number.NEGATIVE_INFINITY),
        void 0 === s && (s = !1),
        i(this, void 0, void 0, (function() {
            var o, i, p, c, d, h, f, m, y, g, v, b;
            return u(this, (function(u) {
                switch (u.label) {
                case 0:
                    return o = $t(e, "boxes", "nonMaxSuppressionAsync"),
                    i = $t(t, "scores", "nonMaxSuppressionAsync"),
                    p = To(o, i, n, r, a, null),
                    c = p.maxOutputSize,
                    d = p.iouThreshold,
                    h = p.scoreThreshold,
                    [4, Promise.all([o.data(), i.data()])];
                case 1:
                    return f = l.apply(void 0, [u.sent(), 2]),
                    m = f[0],
                    y = f[1],
                    g = function(e, t, n, r, a, s) {
                        return Io(e, t, n, r, a, 0, !1, s, !0)
                    }(m, y, c, d, h, s),
                    v = g.selectedIndices,
                    b = g.validOutputs,
                    o !== e && o.dispose(),
                    i !== t && i.dispose(),
                    [2, {
                        selectedIndices: zs(v, "int32"),
                        validOutputs: ds(b, "int32")
                    }]
                }
            }
            ))
        }
        ))
    };
    var zo = tn({
        resizeBilinear_: function(e, t, n, r) {
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = $t(e, "images", "resizeBilinear");
            ae(3 === a.rank || 4 === a.rank, (function() {
                return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + a.rank + "."
            }
            )),
            ae(2 === t.length, (function() {
                return "Error in resizeBilinear: new shape must 2D, but got shape " + t + "."
            }
            )),
            ae(!1 === r || !1 === n, (function() {
                return "Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."
            }
            ));
            var s = a
              , o = !1;
            3 === a.rank && (o = !0,
            s = _n(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            l(t, 0);
            var i = {
                images: s
            }
              , u = {
                alignCorners: n,
                halfPixelCenters: r,
                size: t
            }
              , p = Gt.runKernel("ResizeBilinear", i, u);
            return o ? _n(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
        }
    });
    var Lo = tn({
        resizeNearestNeighbor_: function(e, t, n, r) {
            void 0 === n && (n = !1),
            void 0 === r && (r = !1);
            var a = $t(e, "images", "resizeNearestNeighbor");
            ae(3 === a.rank || 4 === a.rank, (function() {
                return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + a.rank + "."
            }
            )),
            ae(2 === t.length, (function() {
                return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + t + "."
            }
            )),
            ae("float32" === a.dtype || "int32" === a.dtype, (function() {
                return "`images` must have `int32` or `float32` as dtype"
            }
            )),
            ae(!1 === r || !1 === n, (function() {
                return "Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."
            }
            ));
            var s = a
              , o = !1;
            3 === a.rank && (o = !0,
            s = _n(a, [1, a.shape[0], a.shape[1], a.shape[2]])),
            l(t, 0);
            var i = {
                images: s
            }
              , u = {
                alignCorners: n,
                halfPixelCenters: r,
                size: t
            }
              , p = Gt.runKernel("ResizeNearestNeighbor", i, u);
            return o ? _n(p, [p.shape[1], p.shape[2], p.shape[3]]) : p
        }
    });
    var Po = tn({
        threshold_: function(e, t, n, r) {
            var a;
            void 0 === t && (t = "binary"),
            void 0 === n && (n = !1),
            void 0 === r && (r = .5);
            var s, o, i, u, p = $t(e, "image", "threshold"), c = p.shape[0] * p.shape[1], d = An(zs([r]), 255);
            if (ae(3 === p.rank, (function() {
                return "Error in threshold: image must be rank 3,but got rank " + p.rank + "."
            }
            )),
            ae(3 === p.shape[2] || 1 === p.shape[2], (function() {
                return "Error in threshold: image color channel must be equal to 3 or 1but got " + p.shape[2] + "."
            }
            )),
            ae("int32" === p.dtype || "float32" === p.dtype, (function() {
                return "Error in dtype: image dtype must be int32 or float32,but got dtype " + p.dtype + "."
            }
            )),
            ae("otsu" === t || "binary" === t, (function() {
                return "Method must be binary or otsu, but was " + t
            }
            )),
            3 === p.shape[2]) {
                s = (a = l(Es(p, [1, 1, 1], -1), 3))[0],
                o = a[1],
                i = a[2];
                var h = An(s, .2989)
                  , f = An(o, .587)
                  , m = An(i, .114);
                u = sn(sn(h, f), m)
            } else
                u = e;
            "otsu" === t && (d = function(e, t) {
                for (var n, r, a, s, o, i, u = zs([-1]), p = zs([0]), l = zs([0]), c = 0; c < e.size - 1; c++) {
                    n = Fn(e, 0, c + 1),
                    r = Fn(e, c + 1),
                    o = fr(Xr(n), t),
                    i = fr(Xr(r), t);
                    var d = Xr(An(n, Ja(0, n.size)));
                    a = fr(d, Xr(n));
                    var h = Or(r.shape, n.size)
                      , f = sn(Ja(0, r.size), h)
                      , m = An(r, f);
                    s = fr(Xr(m), Xr(r));
                    var y = Yr(a, s)
                      , g = Yr(a, s)
                      , v = An(o, i);
                    l = An(An(v, y), g);
                    var b = Mr(l, p);
                    p = gr(b, l, p),
                    u = gr(b, zs([c]), u)
                }
                return u
            }(Kn(gn(ps(u), "int32"), Vs([]), 256), c));
            var y = n ? Br(u, d) : Mr(u, d);
            return gn(An(y, 255), "int32")
        }
    });
    var Bo = tn({
        transform_: function(e, t, n, r, a, s) {
            void 0 === n && (n = "nearest"),
            void 0 === r && (r = "constant"),
            void 0 === a && (a = 0);
            var o = $t(e, "image", "transform", "float32")
              , i = $t(t, "transforms", "transform", "float32");
            ae(4 === o.rank, (function() {
                return "Error in transform: image must be rank 4,but got rank " + o.rank + "."
            }
            )),
            ae(2 === i.rank && (i.shape[0] === o.shape[0] || 1 === i.shape[0]) && 8 === i.shape[1], (function() {
                return "Error in transform: Input transform should be batch x 8 or 1 x 8"
            }
            )),
            ae(null == s || 2 === s.length, (function() {
                return "Error in transform: outputShape must be [height, width] or null, but got " + s + "."
            }
            ));
            var u = {
                image: o,
                transforms: i
            }
              , p = {
                interpolation: n,
                fillMode: r,
                fillValue: a,
                outputShape: s
            };
            return Gt.runKernel("Transform", u, p)
        }
    });
    var Ko = tn({
        bandPart_: function(e, t, n) {
            ae(t % 1 == 0, (function() {
                return "bandPart(): numLower must be an integer, got " + t + "."
            }
            )),
            ae(n % 1 == 0, (function() {
                return "bandPart(): numUpper must be an integer, got " + n + "."
            }
            ));
            var r = $t(e, "a", "bandPart");
            ae(r.rank >= 2, (function() {
                return "bandPart(): Rank must be at least 2, got " + r.rank + "."
            }
            ));
            var a = r.shape
              , s = l(r.shape.slice(-2), 2)
              , o = s[0]
              , i = s[1];
            if (!(t <= o))
                throw new Error("bandPart(): numLower (" + t + ") must not be greater than the number of rows (" + o + ").");
            if (!(n <= i))
                throw new Error("bandPart(): numUpper (" + n + ") must not be greater than the number of columns (" + i + ").");
            t < 0 && (t = o),
            n < 0 && (n = i);
            var u = _n(Ja(0, o, 1, "int32"), [-1, 1])
              , p = Ja(0, i, 1, "int32")
              , c = Yr(u, p)
              , d = ta(Br(c, ds(+t, "int32")), Fr(c, ds(-n, "int32")))
              , h = la([o, i], r.dtype);
            return _n(Ms(qs(_n(r, [-1, o, i])).map((function(e) {
                return gr(d, e, h)
            }
            ))), a)
        }
    });
    var jo = tn({
        gramSchmidt_: function(e) {
            var t;
            if (Array.isArray(e)) {
                t = !1,
                ae(null != e && e.length > 0, (function() {
                    return "Gram-Schmidt process: input must not be null, undefined, or empty"
                }
                ));
                for (var n = e[0].shape[0], r = function(t) {
                    ae(e[t].shape[0] === n, (function() {
                        return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + e[t].shape[0] + " vs. " + n + ")"
                    }
                    ))
                }, a = 1; a < e.length; ++a)
                    r(a)
            } else
                t = !0,
                e = Es(e, e.shape[0], 0).map((function(e) {
                    return As(e, [0])
                }
                ));
            ae(e.length <= e[0].shape[0], (function() {
                return "Gram-Schmidt: Number of vectors (" + e.length + ") exceeds number of dimensions (" + e[0].shape[0] + ")."
            }
            ));
            var s = []
              , o = e
              , i = function(e) {
                s.push(Gt.tidy((function() {
                    var t = o[e];
                    if (e > 0)
                        for (var n = 0; n < e; ++n) {
                            var r = An(Xr(An(s[n], t)), s[n]);
                            t = Yr(t, r)
                        }
                    return fr(t, Zs(t, "euclidean"))
                }
                )))
            };
            for (a = 0; a < e.length; ++a)
                i(a);
            return t ? Ms(s, 0) : s
        }
    });
    function qo(e, t) {
        return void 0 === t && (t = !1),
        Gt.tidy((function() {
            ae(2 === e.shape.length, (function() {
                return "qr2d() requires a 2D Tensor, but got a " + e.shape.length + "D Tensor."
            }
            ));
            for (var n = e.shape[0], r = e.shape[1], a = Ir(n), s = In(e), o = Ls([[1]], [1, 1]), i = In(o), u = n >= r ? r : n, p = function(e) {
                var t, u = s, p = i, c = a;
                t = l(Gt.tidy((function() {
                    var t = Fn(s, [e, e], [n - e, 1])
                      , u = Zs(t)
                      , p = Fn(s, [e, e], [1, 1])
                      , l = gr(Mr(p, 0), Ls([[-1]]), Ls([[1]]))
                      , c = Yr(p, An(l, u))
                      , d = fr(t, c);
                    i = 1 === d.shape[0] ? In(o) : On([o, Fn(d, [1, 0], [d.shape[0] - 1, d.shape[1]])], 0);
                    var h = Hr(fr(Dn(l, c), u))
                      , f = Fn(s, [e, 0], [n - e, r])
                      , m = An(h, i)
                      , y = Hs(i);
                    if (0 === e)
                        s = Yr(f, Dn(m, Dn(y, f)));
                    else {
                        var g = Yr(f, Dn(m, Dn(y, f)));
                        s = On([Fn(s, [0, 0], [e, r]), g], 0)
                    }
                    var v = Hs(m)
                      , b = Fn(a, [0, e], [n, a.shape[1] - e]);
                    if (0 === e)
                        a = Yr(b, Dn(Dn(b, i), v));
                    else {
                        var x = Yr(b, Dn(Dn(b, i), v));
                        a = On([Fn(a, [0, 0], [n, e]), x], 1)
                    }
                    return [i, s, a]
                }
                )), 3),
                i = t[0],
                s = t[1],
                a = t[2],
                jt([u, p, c]).forEach((function(e) {
                    return e.dispose()
                }
                ))
            }, c = 0; c < u; ++c)
                p(c);
            return !t && n > r && (a = Fn(a, [0, 0], [n, r]),
            s = Fn(s, [0, 0], [r, r])),
            [a, s]
        }
        ))
    }
    var Wo, Uo = tn({
        qr_: function(e, t) {
            if (void 0 === t && (t = !1),
            ae(e.rank >= 2, (function() {
                return "qr() requires input tensor to have a rank >= 2, but got rank " + e.rank
            }
            )),
            2 === e.rank)
                return qo(e, t);
            var n = e.shape.slice(0, e.shape.length - 2).reduce((function(e, t) {
                return e * t
            }
            ))
              , r = qs(_n(e, [n, e.shape[e.shape.length - 2], e.shape[e.shape.length - 1]]), 0)
              , a = []
              , s = [];
            return r.forEach((function(e) {
                var n = l(qo(e, t), 2)
                  , r = n[0]
                  , o = n[1];
                a.push(r),
                s.push(o)
            }
            )),
            [_n(Ms(a, 0), e.shape), _n(Ms(s, 0), e.shape)]
        }
    });
    !function(e) {
        e[e.NONE = 0] = "NONE",
        e[e.MEAN = 1] = "MEAN",
        e[e.SUM = 2] = "SUM",
        e[e.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS"
    }(Wo || (Wo = {}));
    var Ho = tn({
        computeWeightedLoss_: function(e, t, n) {
            void 0 === n && (n = Wo.SUM_BY_NONZERO_WEIGHTS);
            var r = $t(e, "losses", "computeWeightedLoss")
              , a = null;
            null != t && (a = $t(t, "weights", "computeWeightedLoss"));
            var s = null == a ? r : An(r, a);
            if (n === Wo.NONE)
                return s;
            if (n === Wo.SUM)
                return Xr(s);
            if (n === Wo.MEAN) {
                if (null == a)
                    return pa(s);
                var o = r.size / a.size
                  , i = fr(Xr(s), Xr(a));
                return o > 1 ? fr(i, ds(o)) : i
            }
            if (n === Wo.SUM_BY_NONZERO_WEIGHTS) {
                if (null == a)
                    return fr(Xr(s), ds(r.size));
                var u = An(a, ca(r.shape))
                  , p = gn(Xr(xa(u, ds(0))), "float32");
                return fr(Xr(s), p)
            }
            throw Error("Unknown reduction: " + n)
        }
    });
    var Go = tn({
        absoluteDifference_: function(e, t, n, r) {
            void 0 === r && (r = Wo.SUM_BY_NONZERO_WEIGHTS);
            var a = $t(e, "labels", "absoluteDifference")
              , s = $t(t, "predictions", "absoluteDifference")
              , o = null;
            null != n && (o = $t(n, "weights", "absoluteDifference")),
            se(a.shape, s.shape, "Error in absoluteDifference: ");
            var i = nn(Yr(a, s));
            return Ho(i, o, r)
        }
    });
    var Zo = tn({
        cosineDistance_: function(e, t, n, r, a) {
            void 0 === a && (a = Wo.SUM_BY_NONZERO_WEIGHTS);
            var s = $t(e, "labels", "cosineDistance")
              , o = $t(t, "predictions", "cosineDistance")
              , i = null;
            null != r && (i = $t(r, "weights", "cosineDistance")),
            se(s.shape, o.shape, "Error in cosineDistance: ");
            var u = ds(1)
              , p = Yr(u, Xr(An(s, o), n, !0));
            return Ho(p, i, a)
        }
    });
    var Qo = tn({
        hingeLoss_: function(e, t, n, r) {
            void 0 === r && (r = Wo.SUM_BY_NONZERO_WEIGHTS);
            var a = $t(e, "labels", "hingeLoss")
              , s = $t(t, "predictions", "hingeLoss")
              , o = null;
            null != n && (o = $t(n, "weights", "hingeLoss")),
            se(a.shape, s.shape, "Error in hingeLoss: ");
            var i = ds(1);
            a = Yr(An(ds(2), a), i);
            var u = ns(Yr(i, An(a, s)));
            return Ho(u, o, r)
        }
    });
    var Yo = tn({
        huberLoss_: function(e, t, n, r, a) {
            void 0 === r && (r = 1),
            void 0 === a && (a = Wo.SUM_BY_NONZERO_WEIGHTS);
            var s = $t(e, "labels", "huberLoss")
              , o = $t(t, "predictions", "huberLoss")
              , i = null;
            null != n && (i = $t(n, "weights", "huberLoss")),
            se(s.shape, o.shape, "Error in huberLoss: ");
            var u = ds(r)
              , p = nn(Yr(o, s))
              , l = ha(p, u)
              , c = Yr(p, l)
              , d = sn(An(ds(.5), ya(l)), An(u, c));
            return Ho(d, i, a)
        }
    });
    var Xo = tn({
        logLoss_: function(e, t, n, r, a) {
            void 0 === r && (r = 1e-7),
            void 0 === a && (a = Wo.SUM_BY_NONZERO_WEIGHTS);
            var s = $t(e, "labels", "logLoss")
              , o = $t(t, "predictions", "logLoss")
              , i = null;
            null != n && (i = $t(n, "weights", "logLoss")),
            se(s.shape, o.shape, "Error in logLoss: ");
            var u = ds(1)
              , p = ds(r)
              , l = Hr(An(s, qr(sn(o, p))))
              , c = An(Yr(u, s), qr(sn(Yr(u, o), p)))
              , d = Yr(l, c);
            return Ho(d, i, a)
        }
    });
    var $o = tn({
        meanSquaredError_: function(e, t, n, r) {
            void 0 === r && (r = Wo.SUM_BY_NONZERO_WEIGHTS);
            var a = $t(e, "labels", "meanSquaredError")
              , s = $t(t, "predictions", "meanSquaredError")
              , o = null;
            null != n && (o = $t(n, "weights", "meanSquaredError")),
            se(a.shape, s.shape, "Error in meanSquaredError: ");
            var i = Ds(a, s);
            return Ho(i, o, r)
        }
    });
    var Jo = tn({
        sigmoidCrossEntropy_: function(e, t, n, r, a) {
            void 0 === r && (r = 0),
            void 0 === a && (a = Wo.SUM_BY_NONZERO_WEIGHTS);
            var s = $t(e, "multiClassLabels", "sigmoidCrossEntropy")
              , o = $t(t, "logits", "sigmoidCrossEntropy")
              , i = null;
            if (null != n && (i = $t(n, "weights", "sigmoidCrossEntropy")),
            se(s.shape, o.shape, "Error in sigmoidCrossEntropy: "),
            r > 0) {
                var u = ds(r)
                  , p = ds(1)
                  , l = ds(.5);
                s = sn(An(s, Yr(p, u)), An(l, u))
            }
            var c = function(e, t) {
                var n = $t(e, "labels", "sigmoidCrossEntropyWithLogits")
                  , r = $t(t, "logits", "sigmoidCrossEntropyWithLogits");
                se(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
                var a = ns(r)
                  , s = An(r, n)
                  , o = Wr(Tr(Hr(nn(r))));
                return sn(Yr(a, s), o)
            }(s, o);
            return Ho(c, i, a)
        }
    });
    var ei = tn({
        softmaxCrossEntropy_: function(e, t, n, r, a) {
            void 0 === r && (r = 0),
            void 0 === a && (a = Wo.SUM_BY_NONZERO_WEIGHTS);
            var s = $t(e, "onehotLabels", "softmaxCrossEntropy")
              , o = $t(t, "logits", "softmaxCrossEntropy")
              , i = null;
            if (null != n && (i = $t(n, "weights", "softmaxCrossEntropy")),
            se(s.shape, o.shape, "Error in softmaxCrossEntropy: "),
            r > 0) {
                var u = ds(r)
                  , p = ds(1)
                  , c = ds(s.shape[1]);
                s = sn(An(s, Yr(p, u)), fr(u, c))
            }
            var d = function(e, t, n) {
                if (void 0 === n && (n = -1),
                -1 === n && (n = t.rank - 1),
                n !== t.rank - 1)
                    throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + t.rank + " and dim was " + n);
                return Ur((function(e, t, r) {
                    var a = ea(t, [n], !0)
                      , s = Yr(gn(t, "float32"), a);
                    r([e, s]);
                    var o = Hr(An(s, e));
                    return {
                        value: Xr(o, [n]),
                        gradFunc: function(e, t) {
                            var r = l(t, 2)
                              , a = r[0]
                              , s = r[1]
                              , o = Jr(e.shape, [n]);
                            return [An(_n(e, o), Yr(gn(a, "float32"), Tr(s))), An(_n(e, o), Yr(Tr(s), gn(a, "float32")))]
                        }
                    }
                }
                ))(e, t)
            }(s, o);
            return Ho(d, i, a)
        }
    });
    var ti = tn({
        sparseFillEmptyRows_: function(e, t, n, r) {
            var a = $t(e, "indices", "sparseFillEmptyRows", "int32")
              , s = $t(t, "values", "sparseFillEmptyRows")
              , o = $t(n, "denseShape", "sparseFillEmptyRows", "int32")
              , i = $t(r, "defaultValue", "sparseFillEmptyRows", s.dtype);
            if (2 !== a.rank)
                throw new Error("Indices should be Tensor2D but received shape\n        " + a.shape);
            if (1 !== s.rank)
                throw new Error("Values should be Tensor1D but received shape " + s.shape);
            if (1 !== o.rank)
                throw new Error("Dense shape should be Tensor1D but received shape " + o.shape);
            if (0 !== i.rank)
                throw new Error("Default value should be a scalar but received shape " + i.shape);
            var u = {
                indices: a,
                values: s,
                denseShape: o,
                defaultValue: i
            }
              , p = Gt.runKernel("SparseFillEmptyRows", u);
            return {
                outputIndices: p[0],
                outputValues: p[1],
                emptyRowIndicator: p[2],
                reverseIndexMap: p[3]
            }
        }
    });
    var ni = tn({
        sparseReshape_: function(e, t, n) {
            var r = $t(e, "inputIndices", "sparseReshape", "int32")
              , a = $t(t, "inputShape", "sparseReshape", "int32")
              , s = $t(n, "newShape", "sparseReshape", "int32");
            if (2 !== r.rank)
                throw new Error("Input indices should be Tensor2D but received shape\n        " + r.shape);
            if (1 !== a.rank)
                throw new Error("Input shape should be Tensor1D but received shape " + a.shape);
            if (1 !== s.rank)
                throw new Error("New shape should be Tensor1D but received shape " + s.shape);
            var o = {
                inputIndices: r,
                inputShape: a,
                newShape: s
            }
              , i = Gt.runKernel("SparseReshape", o);
            return {
                outputIndices: i[0],
                outputShape: i[1]
            }
        }
    });
    var ri = tn({
        sparseSegmentMean_: function(e, t, n) {
            var r = $t(e, "data", "sparseSegmentMean")
              , a = $t(t, "indices", "sparseSegmentMean", "int32")
              , s = $t(n, "segmentIds", "sparseSegmentMean", "int32");
            if (r.rank < 1)
                throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== a.rank)
                throw new Error("Indices should be Tensor1D but received shape\n          " + a.shape);
            if (1 !== s.rank)
                throw new Error("Segment ids should be Tensor1D but received shape\n          " + s.shape);
            var o = {
                data: r,
                indices: a,
                segmentIds: s
            };
            return Gt.runKernel("SparseSegmentMean", o)
        }
    });
    var ai = tn({
        sparseSegmentSum_: function(e, t, n) {
            var r = $t(e, "data", "sparseSegmentSum")
              , a = $t(t, "indices", "sparseSegmentSum", "int32")
              , s = $t(n, "segmentIds", "sparseSegmentSum", "int32");
            if (r.rank < 1)
                throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== a.rank)
                throw new Error("Indices should be Tensor1D but received shape\n         " + a.shape);
            if (1 !== s.rank)
                throw new Error("Segment ids should be Tensor1D but received shape\n         " + s.shape);
            var o = {
                data: r,
                indices: a,
                segmentIds: s
            };
            return Gt.runKernel("SparseSegmentSum", o)
        }
    });
    var si = tn({
        stringNGrams_: function(e, t, n, r, a, s, o, i) {
            var u = $t(e, "data", "stringNGrams", "string");
            if ("string" !== u.dtype)
                throw new Error("Data must be of datatype string");
            if (1 !== u.shape.length)
                throw new Error("Data must be a vector, saw: " + u.shape);
            var p = $t(t, "dataSplits", "stringNGrams");
            if ("int32" !== p.dtype)
                throw new Error("Data splits must be of datatype int32");
            var l = {
                separator: n,
                nGramWidths: r,
                leftPad: a,
                rightPad: s,
                padWidth: o,
                preserveShortSequences: i
            }
              , c = {
                data: u,
                dataSplits: p
            }
              , d = Gt.runKernel("StringNGrams", c, l);
            return {
                nGrams: d[0],
                nGramsSplits: d[1]
            }
        }
    });
    var oi = tn({
        stringSplit_: function(e, t, n) {
            void 0 === n && (n = !0);
            var r = $t(e, "input", "stringSplit", "string")
              , a = $t(t, "delimiter", "stringSplit", "string");
            if (1 !== r.rank)
                throw new Error("Input should be Tensor1D but received shape " + r.shape);
            if (0 !== a.rank)
                throw new Error("Delimiter should be a scalar but received shape " + a.shape);
            var s = {
                skipEmpty: n
            }
              , o = {
                input: r,
                delimiter: a
            }
              , i = Gt.runKernel("StringSplit", o, s);
            return {
                indices: i[0],
                values: i[1],
                shape: i[2]
            }
        }
    });
    var ii = tn({
        stringToHashBucketFast_: function(e, t) {
            var n = $t(e, "input", "stringToHashBucketFast", "string")
              , r = {
                numBuckets: t
            };
            if (t <= 0)
                throw new Error("Number of buckets must be at least 1");
            var a = {
                input: n
            };
            return Gt.runKernel("StringToHashBucketFast", a, r)
        }
    })
      , ui = {
        flipLeftRight: No,
        grayscaleToRGB: ko,
        resizeNearestNeighbor: Lo,
        resizeBilinear: zo,
        rotateWithOffset: wo,
        cropAndResize: xo,
        nonMaxSuppression: _o,
        nonMaxSuppressionAsync: Mo,
        nonMaxSuppressionWithScore: Fo,
        nonMaxSuppressionWithScoreAsync: Co,
        nonMaxSuppressionPadded: Ro,
        nonMaxSuppressionPaddedAsync: Vo,
        threshold: Po,
        transform: Bo
    }
      , pi = {
        sparseFillEmptyRows: ti,
        sparseReshape: ni,
        sparseSegmentMean: ri,
        sparseSegmentSum: ai
    }
      , li = {
        stringNGrams: si,
        stringSplit: oi,
        stringToHashBucketFast: ii
    }
      , ci = {
        __proto__: null,
        abs: nn,
        acos: rn,
        acosh: an,
        add: sn,
        addN: on,
        all: un,
        any: pn,
        argMax: ln,
        argMin: cn,
        asin: dn,
        asinh: hn,
        atan: fn,
        atan2: mn,
        atanh: yn,
        avgPool: Sn,
        avgPool3d: En,
        basicLSTMCell: Rn,
        batchToSpaceND: Vn,
        batchNorm: zn,
        batchNorm2d: Ln,
        batchNorm3d: Pn,
        batchNorm4d: Bn,
        bincount: Kn,
        broadcastArgs: jn,
        broadcastTo: qn,
        buffer: Wn,
        cast: gn,
        ceil: Un,
        clipByValue: Hn,
        clone: In,
        complex: Gn,
        concat: On,
        concat1d: Zn,
        concat2d: Qn,
        concat3d: Yn,
        concat4d: Xn,
        conv1d: Jn,
        conv2d: $n,
        conv2dTranspose: tr,
        conv3d: nr,
        conv3dTranspose: ar,
        cos: sr,
        cosh: or,
        cumsum: ir,
        denseBincount: ur,
        depthToSpace: pr,
        depthwiseConv2d: lr,
        diag: cr,
        dilation2d: dr,
        div: fr,
        divNoNan: br,
        dot: xr,
        einsum: Nr,
        elu: kr,
        equal: yr,
        erf: wr,
        exp: Tr,
        expandDims: _r,
        expm1: Sr,
        eye: Ir,
        fill: Or,
        floor: Dr,
        floorDiv: hr,
        gather: Ar,
        greater: Mr,
        greaterEqual: Fr,
        imag: Cr,
        isFinite: Rr,
        isInf: Vr,
        isNaN: zr,
        leakyRelu: Lr,
        less: Pr,
        lessEqual: Br,
        linspace: Kr,
        localResponseNormalization: jr,
        log: qr,
        log1p: Wr,
        logSigmoid: Zr,
        logSoftmax: $r,
        logSumExp: ea,
        logicalAnd: ta,
        logicalNot: na,
        logicalOr: ra,
        logicalXor: aa,
        matMul: Dn,
        max: Qr,
        maxPool: sa,
        maxPool3d: oa,
        maxPoolWithArgmax: ia,
        maximum: ua,
        mean: pa,
        meshgrid: function(e, t, n) {
            var r = (void 0 === n ? {} : n).indexing
              , a = void 0 === r ? "xy" : r;
            if ("xy" !== a && "ij" !== a)
                throw new TypeError(a + " is not a valid third argument to meshgrid");
            if (void 0 === e)
                return [];
            var s = $t(e, "x", "meshgrid", e instanceof Ft ? e.dtype : "float32");
            if (void 0 === t)
                return [s];
            var o = $t(t, "y", "meshgrid", t instanceof Ft ? t.dtype : "float32")
              , i = ue(s.shape)
              , u = ue(o.shape);
            return "xy" === a ? (s = _n(s, [1, -1]),
            o = _n(o, [-1, 1]),
            [Dn(ca([u, 1], s.dtype), s), Dn(o, ca([1, i], o.dtype))]) : (s = _n(s, [-1, 1]),
            o = _n(o, [1, -1]),
            [Dn(s, ca([1, u], s.dtype)), Dn(ca([i, 1], o.dtype), o)])
        },
        min: da,
        minimum: ha,
        mirrorPad: fa,
        mod: ma,
        moments: ga,
        mul: An,
        multiRNNCell: va,
        multinomial: ba,
        neg: Hr,
        notEqual: xa,
        oneHot: Na,
        ones: ca,
        onesLike: ka,
        outerProduct: wa,
        pad: Ta,
        pad1d: _a,
        pad2d: Sa,
        pad3d: Ea,
        pad4d: Ia,
        pool: Da,
        pow: Aa,
        prelu: Ma,
        print: function(e, t) {
            void 0 === t && (t = !1),
            console.log(e.toString(t))
        },
        prod: Fa,
        rand: Ca,
        randomGamma: Ya,
        randomNormal: Xa,
        randomUniform: $a,
        range: Ja,
        real: es,
        reciprocal: ts,
        relu: ns,
        relu6: rs,
        reshape: _n,
        reverse: as,
        reverse1d: ss,
        reverse2d: os,
        reverse3d: is,
        reverse4d: us,
        round: ps,
        rsqrt: ls,
        scalar: ds,
        selu: hs,
        separableConv2d: fs,
        setdiff1dAsync: ms,
        sigmoid: Mn,
        sign: ys,
        sin: gs,
        sinh: vs,
        slice: Fn,
        slice1d: bs,
        slice2d: xs,
        slice3d: Ns,
        slice4d: ks,
        softmax: ws,
        softplus: Gr,
        spaceToBatchND: Oa,
        fft: Ts,
        ifft: _s,
        irfft: Ss,
        rfft: Is,
        split: Es,
        sqrt: Os,
        square: ya,
        squaredDifference: Ds,
        squeeze: As,
        stack: Ms,
        step: Fs,
        stridedSlice: Cs,
        sub: Yr,
        sum: Xr,
        tan: Rs,
        tanh: Cn,
        tensor: Vs,
        tensor1d: zs,
        tensor2d: Ls,
        tensor3d: function(e, t, n) {
            if (oe(e),
            null != t && 3 !== t.length)
                throw new Error("tensor3d() requires shape to have three numbers");
            var r = Qt(e, n);
            if (3 !== r.length && 1 !== r.length)
                throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
            if (1 === r.length && null == t)
                throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
            return cs(e, t, r, n)
        },
        tensor4d: function(e, t, n) {
            if (oe(e),
            null != t && 4 !== t.length)
                throw new Error("tensor4d() requires shape to have four numbers");
            var r = Qt(e, n);
            if (4 !== r.length && 1 !== r.length)
                throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
            if (1 === r.length && null == t)
                throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
            return cs(e, t, r, n)
        },
        tensor5d: function(e, t, n) {
            if (oe(e),
            null != t && 5 !== t.length)
                throw new Error("tensor5d() requires shape to have five numbers");
            var r = Qt(e, n);
            if (5 !== r.length && 1 !== r.length)
                throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
            if (1 === r.length && null == t)
                throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
            return cs(e, t, r, n)
        },
        tensor6d: function(e, t, n) {
            if (oe(e),
            null != t && 6 !== t.length)
                throw new Error("tensor6d() requires shape to have six numbers");
            var r = Qt(e, n);
            if (6 !== r.length && 1 !== r.length)
                throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
            if (1 === r.length && null == t)
                throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
            return cs(e, t = t || r, r, n)
        },
        tile: Er,
        topk: Ps,
        truncatedNormal: Bs,
        unique: Ks,
        unsortedSegmentSum: js,
        unstack: qs,
        variable: function(e, t, n, r) {
            return void 0 === t && (t = !0),
            Gt.makeVariable(e, t, n, r)
        },
        where: gr,
        whereAsync: Ws,
        zeros: la,
        zerosLike: vr,
        op: tn,
        OP_SCOPE_SUFFIX: en,
        booleanMaskAsync: Us,
        transpose: Hs,
        norm: Zs,
        movingAverage: Qs,
        scatterND: Xs,
        sparseToDense: $s,
        gatherND: Js,
        dropout: eo,
        enclosingPowerOfTwo: to,
        cosineWindow: no,
        inTopKAsync: ro,
        image: ui,
        linalg: {
            bandPart: Ko,
            gramSchmidt: jo,
            qr: Uo
        },
        losses: {
            absoluteDifference: Go,
            computeWeightedLoss: Ho,
            cosineDistance: Zo,
            hingeLoss: Qo,
            huberLoss: Yo,
            logLoss: Xo,
            meanSquaredError: $o,
            sigmoidCrossEntropy: Jo,
            softmaxCrossEntropy: ei
        },
        spectral: {
            fft: Ts,
            ifft: _s,
            rfft: Is,
            irfft: Ss
        },
        fused: mo,
        signal: {
            hammingWindow: yo,
            hannWindow: go,
            frame: vo,
            stft: bo
        },
        sparse: pi,
        string: li
    };
    function di(e, n, r) {
        if (void 0 === r && (r = ""),
        "number" != typeof e && "number" != typeof n) {
            t.util.assert(e.length === n.length, (function() {
                return r + " Shapes " + e + " and " + n + " must match"
            }
            ));
            for (var a = 0; a < e.length; a++) {
                var s = e[a]
                  , o = n[a];
                t.util.assert(s < 0 || o < 0 || s === o, (function() {
                    return r + " Shapes " + e + " and " + n + " must match"
                }
                ))
            }
        }
    }
    function hi(e) {
        return "number" != typeof e && !e.some((function(e) {
            return e < 0
        }
        ))
    }
    function fi(e, t, n) {
        var r = mi(e, n)
          , a = !hi(r);
        if (a && 0 === t.length)
            throw new Error("Tried to calculate elements of an empty list with non-fully-defined elementShape: " + r);
        if (a && t.forEach((function(e) {
            r = mi(e.shape, r)
        }
        )),
        !hi(r))
            throw new Error("Non-fully-defined elementShape: " + r);
        return r
    }
    function mi(e, t) {
        if ("number" == typeof e)
            return t;
        if ("number" == typeof t)
            return e;
        if (e.length !== t.length)
            throw new Error("Incompatible ranks during merge: " + e + " vs. " + t);
        for (var n = [], r = 0; r < e.length; ++r) {
            var a = e[r]
              , s = t[r];
            if (a >= 0 && s >= 0 && a !== s)
                throw new Error("Incompatible shape during merge: " + e + " vs. " + t);
            n[r] = a >= 0 ? a : s
        }
        return n
    }
    var yi = function() {
        function e(e, n, r, a, s, o, i) {
            this.name = e,
            this.dtype = n,
            this.maxSize = r,
            this.elementShape = a,
            this.identicalElementShapes = s,
            this.dynamicSize = o,
            this.clearAfterRead = i,
            this.tensors = [],
            this.closed_ = !1,
            this.idTensor = t.scalar(0),
            t.keep(this.idTensor)
        }
        return Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this.idTensor.id
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "closed", {
            get: function() {
                return this.closed_
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.clearAndClose = function(e) {
            this.tensors.forEach((function(t) {
                null != e && e.has(t.tensor.id) || t.tensor.dispose()
            }
            )),
            this.tensors = [],
            this.closed_ = !0,
            this.idTensor.dispose()
        }
        ,
        e.prototype.size = function() {
            return this.tensors.length
        }
        ,
        e.prototype.read = function(e) {
            if (this.closed_)
                throw new Error("TensorArray " + this.name + " has already been closed.");
            if (e < 0 || e >= this.size())
                throw new Error("Tried to read from index " + e + ", but array size is: " + this.size());
            var t = this.tensors[e];
            if (t.cleared)
                throw new Error("TensorArray " + this.name + ": Could not read index " + e + " twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");
            return this.clearAfterRead && (t.cleared = !0),
            t.read = !0,
            t.tensor
        }
        ,
        e.prototype.readMany = function(e) {
            var t = this;
            return e.map((function(e) {
                return t.read(e)
            }
            ))
        }
        ,
        e.prototype.write = function(e, n) {
            if (this.closed_)
                throw new Error("TensorArray " + this.name + " has already been closed.");
            if (e < 0 || !this.dynamicSize && e >= this.maxSize)
                throw new Error("Tried to write to index " + e + ", but array is not resizeable and size is: " + this.maxSize);
            var r = this.tensors[e] || {};
            if (n.dtype !== this.dtype)
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ",\n          because the value dtype is " + n.dtype + ", but TensorArray dtype is " + this.dtype + ".");
            if (0 !== this.size() || null != this.elementShape && 0 !== this.elementShape.length || (this.elementShape = n.shape),
            di(this.elementShape, n.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + e + "."),
            r.read)
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been read.");
            if (r.written)
                throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been written.");
            r.tensor = n,
            t.keep(n),
            r.written = !0,
            this.tensors[e] = r
        }
        ,
        e.prototype.writeMany = function(e, t) {
            var n = this;
            if (e.length !== t.length)
                throw new Error("TensorArray " + this.name + ": could not write multiple tensors,because the index size: " + e.length + " is not the same as tensors size: " + t.length + ".");
            e.forEach((function(e, r) {
                return n.write(e, t[r])
            }
            ))
        }
        ,
        e.prototype.gather = function(e, n) {
            if (n && n !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + n);
            if (e)
                e = e.slice(0, this.size());
            else {
                e = [];
                for (var r = 0; r < this.size(); r++)
                    e.push(r)
            }
            if (0 === e.length)
                return t.tensor([], [0].concat(this.elementShape));
            var a = this.readMany(e);
            return di(this.elementShape, a[0].shape, "TensorArray shape mismatch: "),
            t.stack(a, 0)
        }
        ,
        e.prototype.concat = function(e) {
            if (e && e !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + e);
            if (0 === this.size())
                return t.tensor([], [0].concat(this.elementShape));
            for (var n = [], r = 0; r < this.size(); r++)
                n.push(r);
            var a = this.readMany(n);
            return di(this.elementShape, a[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + a[0].shape + ")"),
            t.concat(a, 0)
        }
        ,
        e.prototype.scatter = function(e, n) {
            if (n.dtype !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + n.dtype);
            if (e.length !== n.shape[0])
                throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + e.length + " vs. " + n.shape[0]);
            var r = Math.max.apply(Math, c(e));
            if (!this.dynamicSize && r >= this.maxSize)
                throw new Error("Max index must be < array size (" + r + "  vs. " + this.maxSize + ")");
            this.writeMany(e, t.unstack(n, 0))
        }
        ,
        e.prototype.split = function(e, n) {
            var r = this;
            if (n.dtype !== this.dtype)
                throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + n.dtype);
            var a = 0
              , s = e.map((function(e) {
                return a += e
            }
            ));
            if (a !== n.shape[0])
                throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + a + ", and tensor's shape is: " + n.shape);
            if (!this.dynamicSize && e.length !== this.maxSize)
                throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + e.length + "), and the TensorArray is not marked as dynamically resizeable");
            var o = 0 === a ? 0 : n.size / a
              , i = [];
            t.tidy((function() {
                n = t.reshape(n, [1, a, o]);
                for (var u = 0; u < e.length; ++u) {
                    var p = [0, 0 === u ? 0 : s[u - 1], 0]
                      , l = [1, e[u], o];
                    i[u] = t.reshape(t.slice(n, p, l), r.elementShape)
                }
                return i
            }
            ));
            for (var u = [], p = 0; p < e.length; p++)
                u[p] = p;
            this.writeMany(u, i)
        }
        ,
        e
    }()
      , gi = function() {
        function e(e, n, r, a) {
            void 0 === a && (a = -1),
            this.tensors = e,
            this.elementShape = n,
            this.elementDtype = r,
            null != e && e.forEach((function(e) {
                if (r !== e.dtype)
                    throw new Error("Invalid data types; op elements " + r + ", but list elements " + e.dtype);
                di(n, e.shape, "TensorList shape mismatch: "),
                t.keep(e)
            }
            )),
            this.idTensor = t.scalar(0),
            this.maxNumElements = a,
            t.keep(this.idTensor)
        }
        return Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this.idTensor.id
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.copy = function() {
            return new e(c(this.tensors),this.elementShape,this.elementDtype)
        }
        ,
        e.prototype.clearAndClose = function(e) {
            this.tensors.forEach((function(t) {
                null != e && e.has(t.id) || t.dispose()
            }
            )),
            this.tensors.length = 0,
            this.idTensor.dispose()
        }
        ,
        e.prototype.size = function() {
            return this.tensors.length
        }
        ,
        e.prototype.stack = function(e, n, r) {
            var a = this;
            if (void 0 === r && (r = -1),
            n !== this.elementDtype)
                throw new Error("Invalid data types; op elements " + n + ", but list elements " + this.elementDtype);
            if (-1 !== r && this.tensors.length !== r)
                throw new Error("Operation expected a list with " + r + " elements but got a list with " + this.tensors.length + " elements.");
            di(e, this.elementShape, "TensorList shape mismatch: ");
            var s = fi(this.elementShape, this.tensors, e);
            return t.tidy((function() {
                var e = a.tensors.map((function(e) {
                    return t.reshape(e, s)
                }
                ));
                return t.stack(e, 0)
            }
            ))
        }
        ,
        e.prototype.popBack = function(e, n) {
            if (n !== this.elementDtype)
                throw new Error("Invalid data types; op elements " + n + ", but list elements " + this.elementDtype);
            if (0 === this.size())
                throw new Error("Trying to pop from an empty list.");
            var r = fi(this.elementShape, this.tensors, e)
              , a = this.tensors.pop();
            return di(a.shape, e, "TensorList shape mismatch: "),
            t.reshape(a, r)
        }
        ,
        e.prototype.pushBack = function(e) {
            if (e.dtype !== this.elementDtype)
                throw new Error("Invalid data types; op elements " + e.dtype + ", but list elements " + this.elementDtype);
            if (di(e.shape, this.elementShape, "TensorList shape mismatch: "),
            this.maxNumElements === this.size())
                throw new Error("Trying to push element into a full list.");
            t.keep(e),
            this.tensors.push(e)
        }
        ,
        e.prototype.resize = function(e) {
            if (e < 0)
                throw new Error("TensorListResize expects size to be non-negative. Got: " + e);
            if (-1 !== this.maxNumElements && e > this.maxNumElements)
                throw new Error("TensorListResize input size " + e + " is greater maxNumElement " + this.maxNumElements + ".");
            this.tensors.length = e
        }
        ,
        e.prototype.getItem = function(e, n, r) {
            if (r !== this.elementDtype)
                throw new Error("Invalid data types; op elements " + r + ", but list elements " + this.elementDtype);
            if (e < 0 || e > this.tensors.length)
                throw new Error("Trying to access element " + e + " in a list with " + this.tensors.length + " elements.");
            if (null == this.tensors[e])
                throw new Error("element at index " + e + " is null.");
            di(this.tensors[e].shape, n, "TensorList shape mismatch: ");
            var a = fi(this.elementShape, this.tensors, n);
            return t.reshape(this.tensors[e], a)
        }
        ,
        e.prototype.setItem = function(e, n) {
            if (n.dtype !== this.elementDtype)
                throw new Error("Invalid data types; op elements " + n.dtype + ", but list elements " + this.elementDtype);
            if (e < 0 || -1 !== this.maxNumElements && e >= this.maxNumElements)
                throw new Error("Trying to set element " + e + " in a list with max " + this.maxNumElements + " elements.");
            di(this.elementShape, n.shape, "TensorList shape mismatch: "),
            t.keep(n),
            this.tensors[e] = n
        }
        ,
        e.prototype.gather = function(e, n, r) {
            var a = this;
            if (n !== this.elementDtype)
                throw new Error("Invalid data types; op elements " + n + ", but list elements " + this.elementDtype);
            di(this.elementShape, r, "TensorList shape mismatch: "),
            e = e.slice(0, this.size());
            var s = fi(this.elementShape, this.tensors, r);
            return 0 === e.length ? t.tensor([], [0].concat(s)) : t.tidy((function() {
                var n = e.map((function(e) {
                    return t.reshape(a.tensors[e], s)
                }
                ));
                return t.stack(n, 0)
            }
            ))
        }
        ,
        e.prototype.concat = function(e, n) {
            var r = this;
            if (e && e !== this.elementDtype)
                throw new Error("TensorList dtype is " + this.elementDtype + " but concat requested dtype " + e);
            di(this.elementShape, n, "TensorList shape mismatch: ");
            var a = fi(this.elementShape, this.tensors, n);
            return 0 === this.size() ? t.tensor([], [0].concat(a)) : t.tidy((function() {
                var e = r.tensors.map((function(e) {
                    return t.reshape(e, a)
                }
                ));
                return t.concat(e, 0)
            }
            ))
        }
        ,
        e
    }();
    var vi = function(e, n, r) {
        return i(undefined, void 0, void 0, (function() {
            var a, s, o, i, p, l, d, h, y, g, v, b, N, k, w, T, _, S, E, I, O, D, A, M, F, C, R, V, z, L, P, B, K, j, q, W, U, H, G, Z, Q, Y, X, $, J, ee, te, ne, re, ae, se, oe, ie, ue;
            return u(this, (function(pe) {
                switch (pe.label) {
                case 0:
                    switch (e.op) {
                    case "If":
                    case "StatelessIf":
                        return [3, 1];
                    case "While":
                    case "StatelessWhile":
                        return [3, 3];
                    case "LoopCond":
                        return [3, 9];
                    case "Switch":
                        return [3, 10];
                    case "Merge":
                        return [3, 12];
                    case "Enter":
                        return [3, 13];
                    case "Exit":
                        return [3, 14];
                    case "NextIteration":
                        return [3, 15];
                    case "TensorArrayV3":
                        return [3, 16];
                    case "TensorArrayWriteV3":
                        return [3, 17];
                    case "TensorArrayReadV3":
                        return [3, 18];
                    case "TensorArrayGatherV3":
                        return [3, 19];
                    case "TensorArrayScatterV3":
                        return [3, 20];
                    case "TensorArrayConcatV3":
                        return [3, 21];
                    case "TensorArraySplitV3":
                        return [3, 22];
                    case "TensorArraySizeV3":
                        return [3, 23];
                    case "TensorArrayCloseV3":
                        return [3, 24];
                    case "TensorListSetItem":
                        return [3, 25];
                    case "TensorListGetItem":
                        return [3, 26];
                    case "TensorListScatterV2":
                    case "TensorListScatter":
                        return [3, 27];
                    case "TensorListReserve":
                    case "EmptyTensorList":
                        return [3, 28];
                    case "TensorListGather":
                        return [3, 29];
                    case "TensorListStack":
                        return [3, 30];
                    case "TensorListFromTensor":
                        return [3, 31];
                    case "TensorListConcat":
                        return [3, 32];
                    case "TensorListPushBack":
                        return [3, 33];
                    case "TensorListPopBack":
                        return [3, 34];
                    case "TensorListSplit":
                        return [3, 35]
                    }
                    return [3, 36];
                case 1:
                    return a = f("thenBranch", e, n, r),
                    s = f("elseBranch", e, n, r),
                    o = f("cond", e, n, r),
                    l = f("args", e, n, r),
                    [4, o.data()];
                case 2:
                    return (y = pe.sent())[0] ? [2, r.functionMap[a].executeFunctionAsync(l, r.tensorArrayMap, r.tensorListMap)] : [2, r.functionMap[s].executeFunctionAsync(l, r.tensorArrayMap, r.tensorListMap)];
                case 3:
                    return i = f("body", e, n, r),
                    p = f("cond", e, n, r),
                    l = f("args", e, n, r),
                    [4, r.functionMap[p].executeFunctionAsync(l, r.tensorArrayMap, r.tensorListMap)];
                case 4:
                    return d = pe.sent(),
                    h = l.map((function(e) {
                        return e.id
                    }
                    )),
                    [4, d[0].data()];
                case 5:
                    y = pe.sent(),
                    d.forEach((function(e) {
                        e.kept || -1 !== h.indexOf(e.id) || e.dispose()
                    }
                    )),
                    g = l,
                    v = function() {
                        var e, t, n;
                        return u(this, (function(a) {
                            switch (a.label) {
                            case 0:
                                return e = g,
                                [4, r.functionMap[i].executeFunctionAsync(g, r.tensorArrayMap, r.tensorListMap)];
                            case 1:
                                return g = a.sent(),
                                t = g.map((function(e) {
                                    return e.id
                                }
                                )),
                                e.forEach((function(e) {
                                    e.kept || -1 !== h.indexOf(e.id) || -1 !== t.indexOf(e.id) || e.dispose()
                                }
                                )),
                                [4, r.functionMap[p].executeFunctionAsync(g, r.tensorArrayMap, r.tensorListMap)];
                            case 2:
                                return [4, (n = a.sent())[0].data()];
                            case 3:
                                return y = a.sent(),
                                n.forEach((function(e) {
                                    e.kept || -1 !== h.indexOf(e.id) || -1 !== t.indexOf(e.id) || e.dispose()
                                }
                                )),
                                [2]
                            }
                        }
                        ))
                    }
                    ,
                    pe.label = 6;
                case 6:
                    return y[0] ? [5, v()] : [3, 8];
                case 7:
                    return pe.sent(),
                    [3, 6];
                case 8:
                    return [2, g];
                case 9:
                    return [2, [x(b = f("pred", e, n, r))]];
                case 10:
                    return b = f("pred", e, n, r),
                    (w = f("data", e, n, r)).kept || (w = x(w)),
                    [4, b.data()];
                case 11:
                    return [2, pe.sent()[0] ? [void 0, w] : [w, void 0]];
                case 12:
                    return (N = e.inputNames.find((function(e) {
                        return void 0 !== m(e, n, r)
                    }
                    ))) ? [2, [x(w = m(N, n, r))]] : [2, void 0];
                case 13:
                    return k = f("frameName", e, n, r),
                    w = f("tensor", e, n, r),
                    r.enterFrame(k),
                    [2, [x(w)]];
                case 14:
                    return w = f("tensor", e, n, r),
                    r.exitFrame(),
                    [2, [x(w)]];
                case 15:
                    return w = f("tensor", e, n, r),
                    r.nextIteration(),
                    [2, [x(w)]];
                case 16:
                    return T = f("size", e, n, r),
                    _ = f("dtype", e, n, r),
                    oe = f("elementShape", e, n, r),
                    S = f("dynamicSize", e, n, r),
                    E = f("clearAfterRead", e, n, r),
                    I = f("identicalElementShapes", e, n, r),
                    O = f("name", e, n, r),
                    D = new yi(O,_,T,oe,I,S,E),
                    r.addTensorArray(D),
                    [2, [D.idTensor, t.scalar(1)]];
                case 17:
                    return A = f("tensorArrayId", e, n, r),
                    W = f("index", e, n, r),
                    ne = f("tensor", e, n, r),
                    (M = r.getTensorArray(A.id)).write(W, ne),
                    [2, [M.idTensor]];
                case 18:
                    return F = f("tensorArrayId", e, n, r),
                    U = f("index", e, n, r),
                    [2, [r.getTensorArray(F.id).read(U)]];
                case 19:
                    return Q = f("tensorArrayId", e, n, r),
                    Y = f("indices", e, n, r),
                    C = f("dtype", e, n, r),
                    [2, [r.getTensorArray(Q.id).gather(Y, C)]];
                case 20:
                    return R = f("tensorArrayId", e, n, r),
                    H = f("indices", e, n, r),
                    G = f("tensor", e, n, r),
                    (V = r.getTensorArray(R.id)).scatter(H, G),
                    [2, [V.idTensor]];
                case 21:
                    return ee = f("tensorArrayId", e, n, r),
                    z = r.getTensorArray(ee.id),
                    te = f("dtype", e, n, r),
                    [2, [z.concat(te)]];
                case 22:
                    return L = f("tensorArrayId", e, n, r),
                    se = f("tensor", e, n, r),
                    ie = f("lengths", e, n, r),
                    (P = r.getTensorArray(L.id)).split(ie, se),
                    [2, [P.idTensor]];
                case 23:
                    return B = f("tensorArrayId", e, n, r),
                    K = r.getTensorArray(B.id),
                    [2, [t.scalar(K.size(), "int32")]];
                case 24:
                    return j = f("tensorArrayId", e, n, r),
                    (q = r.getTensorArray(j.id)).clearAndClose(),
                    [2, [q.idTensor]];
                case 25:
                    return re = f("tensorListId", e, n, r),
                    W = f("index", e, n, r),
                    ne = f("tensor", e, n, r),
                    (ue = r.getTensorList(re.id)).setItem(W, ne),
                    [2, [ue.idTensor]];
                case 26:
                    return re = f("tensorListId", e, n, r),
                    U = f("index", e, n, r),
                    oe = f("elementShape", e, n, r),
                    ae = f("elementDType", e, n, r),
                    [2, [(ue = r.getTensorList(re.id)).getItem(U, oe, ae)]];
                case 27:
                    return H = f("indices", e, n, r),
                    G = f("tensor", e, n, r),
                    oe = f("elementShape", e, n, r),
                    X = f("numElements", e, n, r),
                    ue = function(e, n, r, a) {
                        if (n.length !== e.shape[0])
                            throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + n.length + " vs. " + e.shape[0]);
                        var s = Math.max.apply(Math, c(n));
                        if (null != a && -1 !== a && s >= a)
                            throw new Error("Max index must be < array size (" + s + "  vs. " + a + ")");
                        var o = new gi([],r,e.dtype,a)
                          , i = t.unstack(e, 0);
                        return n.forEach((function(e, t) {
                            o.setItem(e, i[t])
                        }
                        )),
                        o
                    }(G, H, oe, X),
                    r.addTensorList(ue),
                    [2, [ue.idTensor]];
                case 28:
                    return oe = f("elementShape", e, n, r),
                    J = f("elementDType", e, n, r),
                    Z = void 0,
                    Z = "TensorListReserve" === e.op ? "numElements" : "maxNumElements",
                    X = f(Z, e, n, r),
                    ue = function(e, t, n) {
                        return new gi([],e,t,n)
                    }(oe, J, X),
                    r.addTensorList(ue),
                    [2, [ue.idTensor]];
                case 29:
                    return Q = f("tensorListId", e, n, r),
                    Y = f("indices", e, n, r),
                    oe = f("elementShape", e, n, r),
                    J = f("elementDType", e, n, r),
                    [2, [(ue = r.getTensorList(Q.id)).gather(Y, J, oe)]];
                case 30:
                    return re = f("tensorListId", e, n, r),
                    oe = f("elementShape", e, n, r),
                    J = f("elementDType", e, n, r),
                    X = f("numElements", e, n, r),
                    [2, [(ue = r.getTensorList(re.id)).stack(oe, J, X)]];
                case 31:
                    return $ = f("tensor", e, n, r),
                    oe = f("elementShape", e, n, r),
                    J = f("elementDType", e, n, r),
                    ue = function(e, n, r) {
                        var a = e.dtype;
                        if (e.shape.length < 1)
                            throw new Error("Tensor must be at least a vector, but saw shape: " + e.shape);
                        if (e.dtype !== r)
                            throw new Error("Invalid data types; op elements " + e.dtype + ", but list elements " + r);
                        di(e.shape.slice(1), n, "TensorList shape mismatch: ");
                        var s = t.unstack(e);
                        return new gi(s,n,a)
                    }($, oe, J),
                    r.addTensorList(ue),
                    [2, [ue.idTensor]];
                case 32:
                    return ee = f("tensorListId", e, n, r),
                    ue = r.getTensorList(ee.id),
                    te = f("dtype", e, n, r),
                    oe = f("elementShape", e, n, r),
                    [2, [ue.concat(te, oe)]];
                case 33:
                    return re = f("tensorListId", e, n, r),
                    ne = f("tensor", e, n, r),
                    (ue = r.getTensorList(re.id)).pushBack(ne),
                    [2, [ue.idTensor]];
                case 34:
                    return re = f("tensorListId", e, n, r),
                    oe = f("elementShape", e, n, r),
                    ae = f("elementDType", e, n, r),
                    [2, [(ue = r.getTensorList(re.id)).popBack(oe, ae)]];
                case 35:
                    return se = f("tensor", e, n, r),
                    oe = f("elementShape", e, n, r),
                    ie = f("lengths", e, n, r),
                    ue = function(e, n, r) {
                        var a = 0
                          , s = n.map((function(e) {
                            return a += e
                        }
                        ));
                        if (a !== e.shape[0])
                            throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + a + ", and tensor's shape is: " + e.shape);
                        for (var o = mi(e.shape.slice(1), r), i = 0 === a ? 0 : e.size / a, u = t.tidy((function() {
                            var r = [];
                            e = t.reshape(e, [1, a, i]);
                            for (var u = 0; u < n.length; ++u) {
                                var p = [0, 0 === u ? 0 : s[u - 1], 0]
                                  , l = [1, n[u], i];
                                r[u] = t.reshape(t.slice(e, p, l), o)
                            }
                            return e.dispose(),
                            r
                        }
                        )), p = new gi([],r,e.dtype,n.length), l = 0; l < u.length; l++)
                            p.setItem(l, u[l]);
                        return p
                    }(se, ie, oe),
                    r.addTensorList(ue),
                    [2, [ue.idTensor]];
                case 36:
                    throw TypeError("Node type " + e.op + " is not implemented")
                }
            }
            ))
        }
        ))
    };
    function bi(e, t, n) {
        var r = l(f("fusedOps", e, t, n), 2)
          , a = r[0]
          , s = r[1]
          , o = "biasadd" === a
          , i = !o
          , u = "prelu" === s
          , p = "fusedbatchnorm" === a
          , c = f("numArgs", e, t, n);
        if (o) {
            if (u && 2 !== c)
                throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
            if (!u && o && 1 !== c)
                throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")
        }
        if (p)
            throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");
        var d = f("strides", e, t, n)
          , h = b(e, t, n)
          , m = f("dataFormat", e, t, n).toUpperCase()
          , y = f("dilations", e, t, n)
          , g = l(f("args", e, t, n), 2)
          , v = g[0]
          , x = g[1];
        return i && (x = v,
        v = void 0),
        {
            stride: d,
            pad: h,
            dataFormat: m,
            dilations: y,
            biasArg: v,
            preluArg: x,
            activationFunc: s,
            leakyreluAlpha: f("leakyreluAlpha", e, t, n)
        }
    }
    function xi(e, t, n) {
        return {
            boxes: f("boxes", e, t, n),
            scores: f("scores", e, t, n),
            maxOutputSize: f("maxOutputSize", e, t, n),
            iouThreshold: f("iouThreshold", e, t, n),
            scoreThreshold: f("scoreThreshold", e, t, n),
            softNmsSigma: f("softNmsSigma", e, t, n)
        }
    }
    var Ni = function() {
        function e(e, n) {
            this.keyDType = e,
            this.valueDType = n,
            this.handle = t.scalar(0),
            this.tensorMap = new Map,
            t.keep(this.handle)
        }
        return Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this.handle.id
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.clearAndClose = function() {
            this.tensorMap.forEach((function(e) {
                return e.dispose()
            }
            )),
            this.tensorMap.clear(),
            this.handle.dispose()
        }
        ,
        e.prototype.size = function() {
            return this.tensorMap.size
        }
        ,
        e.prototype.tensorSize = function() {
            return ds(this.size(), "int32")
        }
        ,
        e.prototype.import = function(e, n) {
            return i(this, void 0, void 0, (function() {
                var r, a = this;
                return u(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return this.checkKeyAndValueTensor(e, n),
                        [4, e.data()];
                    case 1:
                        return r = s.sent(),
                        this.tensorMap.forEach((function(e) {
                            return e.dispose()
                        }
                        )),
                        this.tensorMap.clear(),
                        [2, t.tidy((function() {
                            var e = t.unstack(n)
                              , s = r.length
                              , o = e.length;
                            t.util.assert(s === o, (function() {
                                return "The number of elements doesn't match, keys has " + s + " elements, the values has " + o + " elements."
                            }
                            ));
                            for (var i = 0; i < s; i++) {
                                var u = r[i]
                                  , p = e[i];
                                t.keep(p),
                                a.tensorMap.set(u, p)
                            }
                            return a.handle
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.find = function(e, n) {
            return i(this, void 0, void 0, (function() {
                var r, a = this;
                return u(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        return this.checkKeyAndValueTensor(e, n),
                        [4, e.data()];
                    case 1:
                        return r = s.sent(),
                        [2, t.tidy((function() {
                            for (var e = [], s = 0; s < r.length; s++) {
                                var o = r[s]
                                  , i = a.findWithDefault(o, n);
                                e.push(i)
                            }
                            return t.stack(e)
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.findWithDefault = function(e, t) {
            var n = this.tensorMap.get(e);
            return null != n ? n : t
        }
        ,
        e.prototype.checkKeyAndValueTensor = function(e, t) {
            if (e.dtype !== this.keyDType)
                throw new Error("Expect key dtype " + this.keyDType + ", but got " + e.dtype);
            if (t.dtype !== this.valueDType)
                throw new Error("Expect value dtype " + this.valueDType + ", but got " + t.dtype)
        }
        ,
        e
    }();
    function ki(e, n, a, s) {
        var o = function(e, n, a) {
            switch (e.category) {
            case "arithmetic":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "BiasAdd":
                        case "AddV2":
                        case "Add":
                            return [sn(f("a", e, t, n), f("b", e, t, n))];
                        case "AddN":
                            return [on(f("tensors", e, t, n))];
                        case "FloorMod":
                        case "Mod":
                            return [ma(f("a", e, t, n), f("b", e, t, n))];
                        case "Mul":
                            return [An(f("a", e, t, n), f("b", e, t, n))];
                        case "RealDiv":
                        case "Div":
                            return [fr(f("a", e, t, n), f("b", e, t, n))];
                        case "DivNoNan":
                            return [br(f("a", e, t, n), f("b", e, t, n))];
                        case "FloorDiv":
                            return [hr(f("a", e, t, n), f("b", e, t, n))];
                        case "Sub":
                            return [Yr(f("a", e, t, n), f("b", e, t, n))];
                        case "Minimum":
                            return [ha(f("a", e, t, n), f("b", e, t, n))];
                        case "Maximum":
                            return [ua(f("a", e, t, n), f("b", e, t, n))];
                        case "Pow":
                            return [Aa(f("a", e, t, n), f("b", e, t, n))];
                        case "SquaredDifference":
                            return [Ds(f("a", e, t, n), f("b", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "basic_math":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Abs":
                        case "ComplexAbs":
                            return [nn(f("x", e, t, n))];
                        case "Acos":
                            return [rn(f("x", e, t, n))];
                        case "Acosh":
                            return [an(f("x", e, t, n))];
                        case "Asin":
                            return [dn(f("x", e, t, n))];
                        case "Asinh":
                            return [hn(f("x", e, t, n))];
                        case "Atan":
                            return [fn(f("x", e, t, n))];
                        case "Atan2":
                            return [mn(f("x", e, t, n), f("y", e, t, n))];
                        case "Atanh":
                            return [yn(f("x", e, t, n))];
                        case "Ceil":
                            return [Un(f("x", e, t, n))];
                        case "Complex":
                            return [Gn(f("real", e, t, n), f("imag", e, t, n))];
                        case "Cos":
                            return [sr(f("x", e, t, n))];
                        case "Cosh":
                            return [or(f("x", e, t, n))];
                        case "Elu":
                            return [kr(f("x", e, t, n))];
                        case "Erf":
                            return [wr(f("x", e, t, n))];
                        case "Exp":
                            return [Tr(f("x", e, t, n))];
                        case "Expm1":
                            return [Sr(f("x", e, t, n))];
                        case "Floor":
                            return [Dr(f("x", e, t, n))];
                        case "Log":
                            return [qr(f("x", e, t, n))];
                        case "Log1p":
                            return [Wr(f("x", e, t, n))];
                        case "Imag":
                            return [Cr(f("x", e, t, n))];
                        case "Neg":
                            return [Hr(f("x", e, t, n))];
                        case "Reciprocal":
                            return [ts(f("x", e, t, n))];
                        case "Real":
                            return [es(f("x", e, t, n))];
                        case "Relu":
                            return [ns(f("x", e, t, n))];
                        case "Round":
                            return [ps(f("x", e, t, n))];
                        case "Selu":
                            return [hs(f("x", e, t, n))];
                        case "Sigmoid":
                            return [Mn(f("x", e, t, n))];
                        case "Sin":
                            return [gs(f("x", e, t, n))];
                        case "Sign":
                            return [ys(f("x", e, t, n))];
                        case "Sinh":
                            return [vs(f("x", e, t, n))];
                        case "Softplus":
                            return [Gr(f("x", e, t, n))];
                        case "Sqrt":
                            return [Os(f("x", e, t, n))];
                        case "Square":
                            return [ya(f("x", e, t, n))];
                        case "Tanh":
                            return [Cn(f("x", e, t, n))];
                        case "Tan":
                            return [Rs(f("x", e, t, n))];
                        case "ClipByValue":
                            return [Hn(f("x", e, t, n), f("clipValueMin", e, t, n), f("clipValueMax", e, t, n))];
                        case "Relu6":
                            return [rs(f("x", e, t, n))];
                        case "Rsqrt":
                            return [ls(m(e.inputNames[0], t, n))];
                        case "Prod":
                            return [Fa(f("x", e, t, n), f("axes", e, t, n))];
                        case "LeakyRelu":
                            return [Lr(f("x", e, t, n), f("alpha", e, t, n))];
                        case "Prelu":
                            return [Ma(f("x", e, t, n), f("alpha", e, t, n))];
                        case "IsNan":
                            return [zr(m(e.inputNames[0], t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "control":
                return vi(e, n, a);
            case "convolution":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Conv1D":
                            var r = f("stride", e, t, n)
                              , a = f("pad", e, t, n)
                              , s = f("dataFormat", e, t, n).toUpperCase()
                              , o = f("dilation", e, t, n);
                            return [Jn(f("x", e, t, n), f("filter", e, t, n), r, a, s, o)];
                        case "Conv2D":
                            r = f("strides", e, t, n),
                            a = b(e, t, n),
                            s = f("dataFormat", e, t, n).toUpperCase();
                            var i = f("dilations", e, t, n);
                            return [$n(f("x", e, t, n), f("filter", e, t, n), [r[1], r[2]], a, s, [i[1], i[2]])];
                        case "_FusedConv2D":
                            var u = bi(e, t, n)
                              , p = (r = u.stride,
                            a = u.pad,
                            s = u.dataFormat,
                            i = u.dilations,
                            u.biasArg)
                              , l = u.preluArg
                              , c = u.activationFunc
                              , d = u.leakyreluAlpha;
                            return [po({
                                x: f("x", e, t, n),
                                filter: f("filter", e, t, n),
                                strides: [r[1], r[2]],
                                pad: a,
                                dataFormat: s,
                                dilations: [i[1], i[2]],
                                bias: p,
                                activation: c,
                                preluActivationWeights: l,
                                leakyreluAlpha: d
                            })];
                        case "FusedDepthwiseConv2dNative":
                            var h = bi(e, t, n);
                            return r = h.stride,
                            a = h.pad,
                            s = h.dataFormat,
                            i = h.dilations,
                            p = h.biasArg,
                            l = h.preluArg,
                            c = h.activationFunc,
                            d = h.leakyreluAlpha,
                            [ho({
                                x: f("x", e, t, n),
                                filter: f("filter", e, t, n),
                                strides: [r[1], r[2]],
                                pad: a,
                                dataFormat: s,
                                dilations: [i[1], i[2]],
                                bias: p,
                                activation: c,
                                preluActivationWeights: l,
                                leakyreluAlpha: d
                            })];
                        case "Conv2DBackpropInput":
                        case "Conv2dTranspose":
                            var m = f("outputShape", e, t, n);
                            return r = f("strides", e, t, n),
                            a = b(e, t, n),
                            [tr(f("x", e, t, n), f("filter", e, t, n), m, [r[1], r[2]], a)];
                        case "DepthwiseConv2dNative":
                        case "DepthwiseConv2d":
                            return r = f("strides", e, t, n),
                            a = b(e, t, n),
                            i = f("dilations", e, t, n),
                            s = f("dataFormat", e, t, n).toUpperCase(),
                            [lr(f("input", e, t, n), f("filter", e, t, n), [r[1], r[2]], a, s, [i[1], i[2]])];
                        case "Conv3D":
                            return r = f("strides", e, t, n),
                            a = f("pad", e, t, n),
                            s = f("dataFormat", e, t, n).toUpperCase(),
                            i = f("dilations", e, t, n),
                            [nr(f("x", e, t, n), f("filter", e, t, n), [r[1], r[2], r[3]], a, s, [i[1], i[2], i[3]])];
                        case "AvgPool":
                            r = f("strides", e, t, n),
                            a = f("pad", e, t, n);
                            var y = f("kernelSize", e, t, n);
                            return [Sn(f("x", e, t, n), [y[1], y[2]], [r[1], r[2]], a)];
                        case "MaxPool":
                            return r = f("strides", e, t, n),
                            a = f("pad", e, t, n),
                            y = f("kernelSize", e, t, n),
                            [sa(f("x", e, t, n), [y[1], y[2]], [r[1], r[2]], a)];
                        case "MaxPoolWithArgmax":
                            r = f("strides", e, t, n),
                            a = f("pad", e, t, n),
                            y = f("kernelSize", e, t, n);
                            var g = f("includeBatchInIndex", e, t, n)
                              , v = ia(f("x", e, t, n), [y[1], y[2]], [r[1], r[2]], a, g);
                            return [v.result, v.indexes];
                        case "AvgPool3D":
                            return r = f("strides", e, t, n),
                            a = f("pad", e, t, n),
                            y = f("kernelSize", e, t, n),
                            [En(f("x", e, t, n), [y[1], y[2], y[3]], [r[1], r[2], r[3]], a)];
                        case "MaxPool3D":
                            return r = f("strides", e, t, n),
                            a = f("pad", e, t, n),
                            y = f("kernelSize", e, t, n),
                            [oa(f("x", e, t, n), [y[1], y[2], y[3]], [r[1], r[2], r[3]], a)];
                        case "Dilation2D":
                            var x = f("strides", e, t, n)
                              , N = (a = f("pad", e, t, n),
                            i = f("dilations", e, t, n),
                            x[1])
                              , k = x[2]
                              , w = i[1]
                              , T = i[2];
                            return [dr(f("x", e, t, n), f("filter", e, t, n), [N, k], a, [w, T], "NHWC")];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "creation":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Fill":
                            var r = f("shape", e, t, n)
                              , a = f("dtype", e, t, n);
                            return [Or(r, f("value", e, t, n), a)];
                        case "LinSpace":
                            return [Kr(f("start", e, t, n), f("stop", e, t, n), f("num", e, t, n))];
                        case "Multinomial":
                            var s = f("logits", e, t, n)
                              , o = f("numSamples", e, t, n)
                              , i = f("seed", e, t, n);
                            return [ba(s, o, i)];
                        case "OneHot":
                            var u = f("indices", e, t, n)
                              , p = f("depth", e, t, n)
                              , l = f("onValue", e, t, n)
                              , c = f("offValue", e, t, n);
                            return [Na(u, p, l, c)];
                        case "Ones":
                            return [ca(f("shape", e, t, n), f("dtype", e, t, n))];
                        case "OnesLike":
                            return [ka(f("x", e, t, n))];
                        case "RandomUniform":
                            return [$a(f("shape", e, t, n), f("minval", e, t, n), f("maxval", e, t, n), f("dtype", e, t, n))];
                        case "Range":
                            return [Ja(f("start", e, t, n), f("stop", e, t, n), f("step", e, t, n), f("dtype", e, t, n))];
                        case "TruncatedNormal":
                            r = f("shape", e, t, n);
                            var d = f("mean", e, t, n)
                              , h = f("stdDev", e, t, n);
                            return i = f("seed", e, t, n),
                            [Bs(r, d, h, f("dtype", e, t, n), i)];
                        case "Zeros":
                            return [la(f("shape", e, t, n), f("dtype", e, t, n))];
                        case "ZerosLike":
                            return [vr(f("x", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "dynamic":
                return function(e, t, n) {
                    return i(void 0, void 0, void 0, (function() {
                        var r, a, s, o, i, p, l, c, d, h, m, y;
                        return u(this, (function(u) {
                            switch (u.label) {
                            case 0:
                                switch (e.op) {
                                case "NonMaxSuppressionV5":
                                    return [3, 1];
                                case "NonMaxSuppressionV4":
                                    return [3, 3];
                                case "NonMaxSuppressionV3":
                                case "NonMaxSuppressionV2":
                                    return [3, 5];
                                case "Where":
                                    return [3, 7];
                                case "ListDiff":
                                    return [3, 9]
                                }
                                return [3, 10];
                            case 1:
                                return r = xi(e, t, n),
                                p = r.boxes,
                                l = r.scores,
                                c = r.maxOutputSize,
                                d = r.iouThreshold,
                                h = r.scoreThreshold,
                                a = r.softNmsSigma,
                                [4, ui.nonMaxSuppressionWithScoreAsync(p, l, c, d, h, a)];
                            case 2:
                                return [2, [(y = u.sent()).selectedIndices, y.selectedScores]];
                            case 3:
                                return s = xi(e, t, n),
                                p = s.boxes,
                                l = s.scores,
                                c = s.maxOutputSize,
                                d = s.iouThreshold,
                                h = s.scoreThreshold,
                                o = f("padToMaxOutputSize", e, t, n),
                                [4, ui.nonMaxSuppressionPaddedAsync(p, l, c, d, h, o)];
                            case 4:
                                return [2, [(y = u.sent()).selectedIndices, y.validOutputs]];
                            case 5:
                                return i = xi(e, t, n),
                                p = i.boxes,
                                l = i.scores,
                                c = i.maxOutputSize,
                                d = i.iouThreshold,
                                h = i.scoreThreshold,
                                [4, ui.nonMaxSuppressionAsync(p, l, c, d, h)];
                            case 6:
                                return [2, [u.sent()]];
                            case 7:
                                return m = gn(f("condition", e, t, n), "bool"),
                                [4, Ws(m)];
                            case 8:
                                return y = [u.sent()],
                                m.dispose(),
                                [2, y];
                            case 9:
                                return [2, ms(f("x", e, t, n), f("y", e, t, n))];
                            case 10:
                                throw TypeError("Node type " + e.op + " is not implemented")
                            }
                        }
                        ))
                    }
                    ))
                }(e, n, a);
            case "evaluation":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "TopKV2":
                            var r = f("x", e, t, n)
                              , a = f("k", e, t, n)
                              , s = f("sorted", e, t, n);
                            return [(o = Ps(r, a, s)).values, o.indices];
                        case "Unique":
                            return r = f("x", e, t, n),
                            [(o = Ks(r)).values, o.indices];
                        case "UniqueV2":
                            r = f("x", e, t, n);
                            var o, i = f("axis", e, t, n);
                            return [(o = Ks(r, i)).values, o.indices];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "image":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "ResizeBilinear":
                            var r = f("images", e, t, n)
                              , a = f("size", e, t, n)
                              , s = f("alignCorners", e, t, n)
                              , o = f("halfPixelCenters", e, t, n);
                            return [ui.resizeBilinear(r, [a[0], a[1]], s, o)];
                        case "ResizeNearestNeighbor":
                            return r = f("images", e, t, n),
                            a = f("size", e, t, n),
                            s = f("alignCorners", e, t, n),
                            o = f("halfPixelCenters", e, t, n),
                            [ui.resizeNearestNeighbor(r, [a[0], a[1]], s, o)];
                        case "CropAndResize":
                            var i = f("image", e, t, n)
                              , u = f("boxes", e, t, n)
                              , p = f("boxInd", e, t, n)
                              , l = f("cropSize", e, t, n)
                              , c = f("method", e, t, n)
                              , d = f("extrapolationValue", e, t, n);
                            return [ui.cropAndResize(i, u, p, l, c, d)];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "graph":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Const":
                            return t[e.name];
                        case "PlaceholderWithDefault":
                            var r = f("default", e, t, n);
                            return [m(e.name, t, n) || r];
                        case "Placeholder":
                            return [m(e.name, t, n)];
                        case "Identity":
                        case "StopGradient":
                        case "FakeQuantWithMinMaxVars":
                            return [x(f("x", e, t, n))];
                        case "IdentityN":
                            return f("x", e, t, n).map((function(e) {
                                return x(e)
                            }
                            ));
                        case "Snapshot":
                            return [x(f("x", e, t, n))];
                        case "Shape":
                            return [zs(f("x", e, t, n).shape, "int32")];
                        case "ShapeN":
                            return f("x", e, t, n).map((function(e) {
                                return zs(e.shape)
                            }
                            ));
                        case "Size":
                            return [ds(f("x", e, t, n).size, "int32")];
                        case "Rank":
                            return [ds(f("x", e, t, n).rank, "int32")];
                        case "NoOp":
                            return [ds(1)];
                        case "Print":
                            var a = f("x", e, t, n)
                              , s = f("data", e, t, n)
                              , o = f("message", e, t, n)
                              , i = f("summarize", e, t, n);
                            console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),
                            console.log(o);
                            for (var u = 0; u < s.length; u++)
                                console.log(Array.prototype.slice.call(s[u].dataSync()).slice(0, i));
                            return [a];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "logical":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Equal":
                            return [yr(f("a", e, t, n), f("b", e, t, n))];
                        case "NotEqual":
                            return [xa(f("a", e, t, n), f("b", e, t, n))];
                        case "Greater":
                            return [Mr(f("a", e, t, n), f("b", e, t, n))];
                        case "GreaterEqual":
                            return [Fr(f("a", e, t, n), f("b", e, t, n))];
                        case "Less":
                            return [Pr(f("a", e, t, n), f("b", e, t, n))];
                        case "LessEqual":
                            return [Br(f("a", e, t, n), f("b", e, t, n))];
                        case "LogicalAnd":
                            return [ta(f("a", e, t, n), f("b", e, t, n))];
                        case "LogicalNot":
                            return [na(f("a", e, t, n))];
                        case "LogicalOr":
                            return [ra(f("a", e, t, n), f("b", e, t, n))];
                        case "Select":
                        case "SelectV2":
                            return [gr(f("condition", e, t, n), f("a", e, t, n), f("b", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "matrices":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "BatchMatMul":
                        case "BatchMatMulV2":
                        case "MatMul":
                            return [Dn(f("a", e, t, n), f("b", e, t, n), f("transposeA", e, t, n), f("transposeB", e, t, n))];
                        case "Einsum":
                            return [Nr.apply(ci, c([f("equation", e, t, n)], f("tensors", e, t, n)))];
                        case "Transpose":
                            return [Hs(f("x", e, t, n), f("perm", e, t, n))];
                        case "_FusedMatMul":
                            var r = l(f("fusedOps", e, t, n), 2)
                              , a = r[0]
                              , s = r[1]
                              , o = "biasadd" === a
                              , i = "prelu" === s
                              , u = f("numArgs", e, t, n)
                              , p = f("leakyreluAlpha", e, t, n);
                            if (o) {
                                if (i && 2 !== u)
                                    throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
                                if (!i && 1 !== u)
                                    throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")
                            }
                            var d = l(f("args", e, t, n), 2)
                              , h = d[0]
                              , m = d[1];
                            return [fo({
                                a: f("a", e, t, n),
                                b: f("b", e, t, n),
                                transposeA: f("transposeA", e, t, n),
                                transposeB: f("transposeB", e, t, n),
                                bias: h,
                                activation: s,
                                preluActivationWeights: m,
                                leakyreluAlpha: p
                            })];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "normalization":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "FusedBatchNorm":
                        case "FusedBatchNormV2":
                        case "FusedBatchNormV3":
                            return [zn(f("x", e, t, n), f("mean", e, t, n), f("variance", e, t, n), f("offset", e, t, n), f("scale", e, t, n), f("epsilon", e, t, n))];
                        case "LRN":
                            return [jr(f("x", e, t, n), f("radius", e, t, n), f("bias", e, t, n), f("alpha", e, t, n), f("beta", e, t, n))];
                        case "Softmax":
                            return [ws(f("x", e, t, n))];
                        case "LogSoftmax":
                            return [$r(f("x", e, t, n))];
                        case "SparseToDense":
                            return [$s(f("sparseIndices", e, t, n), f("outputShape", e, t, n), f("sparseValues", e, t, n), f("defaultValue", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "reduction":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Max":
                            var r = f("axis", e, t, n)
                              , a = f("keepDims", e, t, n);
                            return [Qr(f("x", e, t, n), r, a)];
                        case "Mean":
                            return r = f("axis", e, t, n),
                            a = f("keepDims", e, t, n),
                            [pa(f("x", e, t, n), r, a)];
                        case "Min":
                            return r = f("axis", e, t, n),
                            a = f("keepDims", e, t, n),
                            [da(f("x", e, t, n), r, a)];
                        case "Sum":
                            return r = f("axis", e, t, n),
                            a = f("keepDims", e, t, n),
                            [Xr(f("x", e, t, n), r, a)];
                        case "All":
                            return r = f("axis", e, t, n),
                            a = f("keepDims", e, t, n),
                            [un(f("x", e, t, n), r, a)];
                        case "Any":
                            return r = f("axis", e, t, n),
                            a = f("keepDims", e, t, n),
                            [pn(f("x", e, t, n), r, a)];
                        case "ArgMax":
                            return r = f("axis", e, t, n),
                            [ln(f("x", e, t, n), r)];
                        case "ArgMin":
                            return r = f("axis", e, t, n),
                            [cn(f("x", e, t, n), r)];
                        case "Prod":
                            return r = f("axis", e, t, n),
                            a = f("keepDims", e, t, n),
                            [Fa(f("x", e, t, n), r, a)];
                        case "Cumsum":
                            r = f("axis", e, t, n);
                            var s = f("exclusive", e, t, n)
                              , o = f("reverse", e, t, n);
                            return [ir(f("x", e, t, n), r, s, o)];
                        case "Bincount":
                            var i = f("x", e, t, n)
                              , u = f("weights", e, t, n)
                              , p = f("size", e, t, n);
                            return [Kn(i, u, p)];
                        case "DenseBincount":
                            var l = f("x", e, t, n)
                              , c = f("weights", e, t, n)
                              , d = f("size", e, t, n)
                              , h = f("binaryOutput", e, t, n);
                            return [ur(l, c, d, h)];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "slice_join":
                return r.tidy((function() {
                    return function(e, n, r) {
                        switch (e.op) {
                        case "ConcatV2":
                        case "Concat":
                            var a = f("n", e, n, r)
                              , s = f("axis", e, n, r)
                              , o = f("tensors", e, n, r);
                            return o = o.slice(0, a),
                            [On(o, s)];
                        case "Gather":
                            var i = f("x", e, n, r)
                              , u = f("indices", e, n, r);
                            return [Ar(i, gn(u, "int32"), 0)];
                        case "GatherV2":
                            s = f("axis", e, n, r);
                            var p = f("batchDims", e, n, r);
                            return i = f("x", e, n, r),
                            u = f("indices", e, n, r),
                            [Ar(i, gn(u, "int32"), s, p)];
                        case "Reverse":
                            for (var l = f("dims", e, n, r), c = (s = [],
                            0); c < l.length; c++)
                                l[c] && s.push(c);
                            return i = f("x", e, n, r),
                            [as(i, s)];
                        case "ReverseV2":
                            return s = f("axis", e, n, r),
                            i = f("x", e, n, r),
                            [as(i, s)];
                        case "Slice":
                            var d = f("begin", e, n, r)
                              , h = f("size", e, n, r);
                            return [Fn(f("x", e, n, r), d, h)];
                        case "StridedSlice":
                            d = f("begin", e, n, r);
                            var m = f("end", e, n, r)
                              , y = f("strides", e, n, r)
                              , g = f("beginMask", e, n, r)
                              , v = f("endMask", e, n, r)
                              , b = f("ellipsisMask", e, n, r)
                              , x = f("newAxisMask", e, n, r)
                              , N = f("shrinkAxisMask", e, n, r)
                              , k = f("x", e, n, r);
                            return [Cs(k, d, m, y, g, v, b, x, N)];
                        case "Pack":
                            return t.tidy((function() {
                                var a = f("axis", e, n, r)
                                  , s = f("tensors", e, n, r)
                                  , o = s[0].shape
                                  , i = As(s[0]).shape
                                  , u = s.map((function(e) {
                                    var n = t.util.arraysEqual(e.shape, o);
                                    if (!n && !t.util.arraysEqual(As(e).shape, i))
                                        throw new Error("the input tensors shape does not match");
                                    return n ? e : _n(e, o)
                                }
                                ));
                                return [Ms(u, a)]
                            }
                            ));
                        case "Unpack":
                            return s = f("axis", e, n, r),
                            k = f("tensor", e, n, r),
                            qs(k, s);
                        case "Tile":
                            var w = f("reps", e, n, r);
                            return [Er(f("x", e, n, r), w)];
                        case "Split":
                        case "SplitV":
                            s = f("axis", e, n, r);
                            var T = f("numOrSizeSplits", e, n, r);
                            return k = f("x", e, n, r),
                            Es(k, T, s);
                        case "ScatterNd":
                            u = f("indices", e, n, r);
                            var _ = f("values", e, n, r)
                              , S = f("shape", e, n, r);
                            return [Xs(u, _, S)];
                        case "GatherNd":
                            var E = f("x", e, n, r);
                            return u = f("indices", e, n, r),
                            [Js(E, u)];
                        case "SparseToDense":
                            u = f("sparseIndices", e, n, r),
                            S = f("outputShape", e, n, r);
                            var I = f("sparseValues", e, n, r)
                              , O = f("defaultValue", e, n, r);
                            return [$s(u, I, S, I.dtype === O.dtype ? O : gn(O, I.dtype))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "sparse":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "SparseFillEmptyRows":
                            var r = pi.sparseFillEmptyRows(f("indices", e, t, n), f("values", e, t, n), f("denseShape", e, t, n), f("defaultValue", e, t, n));
                            return [r.outputIndices, r.outputValues, r.emptyRowIndicator, r.reverseIndexMap];
                        case "SparseReshape":
                            var a = pi.sparseReshape(f("inputIndices", e, t, n), f("inputShape", e, t, n), f("newShape", e, t, n));
                            return [a.outputIndices, a.outputShape];
                        case "SparseSegmentMean":
                            return [pi.sparseSegmentMean(f("data", e, t, n), f("indices", e, t, n), f("segmentIds", e, t, n))];
                        case "SparseSegmentSum":
                            return [pi.sparseSegmentSum(f("data", e, t, n), f("indices", e, t, n), f("segmentIds", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "spectral":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "FFT":
                            return [Ts(f("x", e, t, n))];
                        case "IFFT":
                            return [_s(f("x", e, t, n))];
                        case "RFFT":
                            return [Is(f("x", e, t, n))];
                        case "IRFFT":
                            return [Ss(f("x", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "string":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "StringNGrams":
                            var r = li.stringNGrams(f("data", e, t, n), f("dataSplits", e, t, n), f("separator", e, t, n), f("nGramWidths", e, t, n), f("leftPad", e, t, n), f("rightPad", e, t, n), f("padWidth", e, t, n), f("preserveShortSequences", e, t, n));
                            return [r.nGrams, r.nGramsSplits];
                        case "StringSplit":
                            var a = li.stringSplit(f("input", e, t, n), f("delimiter", e, t, n), f("skipEmpty", e, t, n));
                            return [a.indices, a.values, a.shape];
                        case "StringToHashBucketFast":
                            return [li.stringToHashBucketFast(f("input", e, t, n), f("numBuckets", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "transformation":
                return r.tidy((function() {
                    return function(e, t, n) {
                        switch (e.op) {
                        case "Cast":
                            return [gn(f("x", e, t, n), f("dtype", e, t, n))];
                        case "ExpandDims":
                            var r = f("axis", e, t, n);
                            return [_r(f("x", e, t, n), r)];
                        case "Squeeze":
                            return r = f("axis", e, t, n),
                            [As(f("x", e, t, n), r)];
                        case "Reshape":
                            return [_n(f("x", e, t, n), f("shape", e, t, n))];
                        case "MirrorPad":
                            return [fa(f("x", e, t, n), f("padding", e, t, n), f("mode", e, t, n))];
                        case "PadV2":
                        case "Pad":
                            return [Ta(f("x", e, t, n), f("padding", e, t, n), f("constantValue", e, t, n))];
                        case "SpaceToBatchND":
                            var a = f("blockShape", e, t, n)
                              , s = f("paddings", e, t, n);
                            return [Oa(f("x", e, t, n), a, s)];
                        case "BatchToSpaceND":
                            a = f("blockShape", e, t, n);
                            var o = f("crops", e, t, n);
                            return [Vn(f("x", e, t, n), a, o)];
                        case "DepthToSpace":
                            var i = f("blockSize", e, t, n)
                              , u = f("dataFormat", e, t, n).toUpperCase();
                            return [pr(f("x", e, t, n), i, u)];
                        case "BroadcastTo":
                            return [qn(f("x", e, t, n), f("shape", e, t, n))];
                        case "BroadcastArgs":
                            return [jn(f("s0", e, t, n), f("s1", e, t, n))];
                        default:
                            throw TypeError("Node type " + e.op + " is not implemented")
                        }
                    }(e, n, a)
                }
                ));
            case "hash_table":
                return function(e, t, n, r) {
                    return i(void 0, void 0, void 0, (function() {
                        var a, s, o, i, p, l, c;
                        return u(this, (function(u) {
                            switch (u.label) {
                            case 0:
                                switch (e.op) {
                                case "HashTable":
                                case "HashTableV2":
                                    return [3, 1];
                                case "LookupTableImport":
                                case "LookupTableImportV2":
                                    return [3, 2];
                                case "LookupTableFind":
                                case "LookupTableFindV2":
                                    return [3, 4];
                                case "LookupTableSize":
                                case "LookupTableSizeV2":
                                    return [3, 6]
                                }
                                return [3, 7];
                            case 1:
                                return a = f("keyDType", e, t, n),
                                s = f("valueDType", e, t, n),
                                c = new Ni(a,s),
                                r.addHashTable(e.name, c),
                                [2, [c.handle]];
                            case 2:
                                return l = f("tableHandle", e, t, n, r),
                                i = f("keys", e, t, n),
                                o = f("values", e, t, n),
                                [4, (c = r.getHashTableById(l.id)).import(i, o)];
                            case 3:
                                return [2, [u.sent()]];
                            case 4:
                                return l = f("tableHandle", e, t, n, r),
                                i = f("keys", e, t, n),
                                p = f("defaultValue", e, t, n),
                                [4, (c = r.getHashTableById(l.id)).find(i, p)];
                            case 5:
                                return [2, [u.sent()]];
                            case 6:
                                return l = f("tableHandle", e, t, n, r),
                                [2, [(c = r.getHashTableById(l.id)).tensorSize()]];
                            case 7:
                                throw TypeError("Node type " + e.op + " is not implemented")
                            }
                        }
                        ))
                    }
                    ))
                }(e, n, a, s);
            case "custom":
                var o = h(e.op);
                if (o && o.customExecutor)
                    return o.customExecutor(new te(e,n,a));
                throw TypeError("Custom op " + e.op + " is not registered.");
            default:
                throw TypeError("Unknown op '" + e.op + "'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()")
            }
        }(e, n, a);
        return r.util.isPromise(o) ? o.then((function(e) {
            return [].concat(e)
        }
        )) : [].concat(o)
    }
    var wi = function() {
        function e(e, t, n, r) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            this.weightMap = e,
            this.tensorArrayMap = t,
            this.tensorListMap = n,
            this.functionMap = r,
            this.rootContext = {
                id: 0,
                frameName: "",
                iterationId: 0
            },
            this.contexts = [this.rootContext],
            this.lastId = 0,
            this.generateCurrentContextIds()
        }
        return e.prototype.newFrame = function(e, t) {
            return {
                id: e,
                frameName: t,
                iterationId: 0
            }
        }
        ,
        Object.defineProperty(e.prototype, "currentContext", {
            get: function() {
                return this.contexts
            },
            set: function(e) {
                this.contexts !== e && (this.contexts = e,
                this.generateCurrentContextIds())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentContextId", {
            get: function() {
                return this._currentContextIds[0]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentContextIds", {
            get: function() {
                return this._currentContextIds
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.generateCurrentContextIds = function() {
            for (var e = [], t = 0; t < this.contexts.length - 1; t++) {
                var n = this.contexts.slice(0, this.contexts.length - t);
                e.push(this.contextIdforContexts(n))
            }
            e.push(""),
            this._currentContextIds = e
        }
        ,
        e.prototype.contextIdforContexts = function(e) {
            return e ? e.map((function(e) {
                return 0 === e.id && 0 === e.iterationId ? "" : e.frameName + "-" + e.iterationId
            }
            )).join("/") : ""
        }
        ,
        e.prototype.enterFrame = function(e) {
            this.contexts && (this.lastId++,
            this.contexts = this.contexts.slice(),
            this.contexts.push(this.newFrame(this.lastId, e)),
            this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))
        }
        ,
        e.prototype.exitFrame = function() {
            if (!(this.contexts && this.contexts.length > 1))
                throw new Error("Cannot exit frame, the context is empty");
            this.contexts = this.contexts.slice(),
            this.contexts.splice(-1),
            this.currentContextIds.shift()
        }
        ,
        e.prototype.nextIteration = function() {
            if (!(this.contexts && this.contexts.length > 0))
                throw new Error("Cannot increase frame iteration, the context is empty");
            this.contexts = this.contexts.slice(),
            this.lastId++;
            var e = Object.assign({}, this.contexts[this.contexts.length - 1]);
            e.iterationId += 1,
            e.id = this.lastId,
            this.contexts.splice(-1, 1, e),
            this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts))
        }
        ,
        e.prototype.getWeight = function(e) {
            return this.weightMap[e]
        }
        ,
        e.prototype.addTensorArray = function(e) {
            this.tensorArrayMap[e.id] = e
        }
        ,
        e.prototype.getTensorArray = function(e) {
            return this.tensorArrayMap[e]
        }
        ,
        e.prototype.addTensorList = function(e) {
            this.tensorListMap[e.id] = e
        }
        ,
        e.prototype.getTensorList = function(e) {
            return this.tensorListMap[e]
        }
        ,
        e.prototype.dispose = function(e) {
            for (var t in this.tensorArrayMap)
                this.tensorArrayMap[t].clearAndClose(e);
            for (var t in this.tensorListMap)
                this.tensorListMap[t].clearAndClose(e)
        }
        ,
        e
    }();
    function Ti(e, t, n, r) {
        var a = new Set
          , s = []
          , o = null
          , i = null
          , u = new Set
          , p = Object.keys(e).map((function(e) {
            return v(e)[0]
        }
        ))
          , l = [];
        null != r && (l = r.map((function(e) {
            return v(e.name)[0]
        }
        )));
        for (var d = c(t); d.length > 0; ) {
            var h = d.pop();
            (Ii(h) || Oi(h) || Di(h)) && null == o && (i = (o = h).children.map((function(e) {
                return e.name
            }
            )).filter((function(e) {
                return a.has(e)
            }
            ))),
            a.add(h.name),
            null == n[h.name] && (-1 === p.indexOf(h.name) && -1 === l.indexOf(h.name) && (0 !== h.inputs.length ? h.inputs.forEach((function(e) {
                u.has(e.name) || (u.add(e.name),
                d.push(e))
            }
            )) : s.push(h.name)))
        }
        return {
            inputs: e,
            outputs: t,
            usedNodes: a,
            missingInputs: s,
            dynamicNode: o,
            syncInputs: i
        }
    }
    var _i = ["Switch", "Merge", "Enter", "Exit", "NextIteration", "StatelessIf", "StatelessWhile", "if", "While"]
      , Si = ["NonMaxSuppressionV2", "NonMaxSuppressionV3", "NonMaxSuppressionV5", "Where"]
      , Ei = ["HashTable", "HashTableV2", "LookupTableImport", "LookupTableImportV2", "LookupTableFind", "LookupTableFindV2", "LookupTableSize", "LookupTableSizeV2"];
    function Ii(e) {
        return _i.indexOf(e.op) >= 0
    }
    function Oi(e) {
        return Si.indexOf(e.op) >= 0
    }
    function Di(e) {
        return Ei.indexOf(e.op) >= 0
    }
    var Ai = function() {
        function e(t, n) {
            var r = this;
            this.graph = t,
            this.parent = n,
            this.compiledMap = new Map,
            this._weightMap = {},
            this.SEPERATOR = ",",
            this._functions = {},
            this._functionExecutorMap = {},
            this.intermediateTensors = {},
            this.keepTensorForDebug = !1,
            this._outputs = t.outputs,
            this._inputs = t.inputs,
            this._initNodes = t.initNodes,
            this._signature = t.signature,
            this._functions = t.functions,
            null != t.functions && Object.keys(t.functions).forEach((function(n) {
                r._functionExecutorMap[n] = new e(t.functions[n],r)
            }
            ))
        }
        return Object.defineProperty(e.prototype, "weightIds", {
            get: function() {
                return this.parent ? this.parent.weightIds : this._weightIds
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "functionExecutorMap", {
            get: function() {
                return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "weightMap", {
            get: function() {
                return this.parent ? this.parent.weightMap : this._weightMap
            },
            set: function(e) {
                var t = Object.keys(e).map((function(t) {
                    return e[t].map((function(e) {
                        return e.id
                    }
                    ))
                }
                ));
                this._weightIds = [].concat.apply([], c(t)),
                this._weightMap = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "resourceManager", {
            set: function(e) {
                this._resourceManager = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "inputs", {
            get: function() {
                return this._inputs.map((function(e) {
                    return {
                        name: e.name,
                        shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
                        dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
                    }
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "outputs", {
            get: function() {
                return this._outputs.map((function(e) {
                    return {
                        name: e.name,
                        shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
                        dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
                    }
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "inputNodes", {
            get: function() {
                return this._inputs.map((function(e) {
                    return e.signatureKey || e.name
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "outputNodes", {
            get: function() {
                return this._outputs.map((function(e) {
                    var t = e.signatureKey || e.name;
                    return e.defaultOutput ? t + ":" + e.defaultOutput : t
                }
                ))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "functions", {
            get: function() {
                var e = this;
                return Object.keys(this._functions).reduce((function(t, n) {
                    return t[n] = e._functions[n].signature,
                    t
                }
                ), {})
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getCompilationKey = function(e, t) {
            var n = e.map((function(e) {
                return e.name
            }
            )).sort()
              , r = t.map((function(e) {
                return e.name
            }
            )).sort();
            return n.join(this.SEPERATOR) + "--" + r.join(this.SEPERATOR)
        }
        ,
        e.prototype.compile = function(e, t) {
            var n = Ti(e, t, this.weightMap, this._initNodes)
              , r = n.missingInputs
              , a = n.dynamicNode
              , s = n.syncInputs;
            if (null != a)
                throw new Error("This execution contains the node '" + a.name + "', which has the dynamic op '" + a.op + "'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [" + s + "]");
            if (r.length > 0) {
                var o = t.map((function(e) {
                    return e.name
                }
                ))
                  , i = Object.keys(e);
                throw new Error("Cannot compute the outputs [" + o + "] from the provided inputs [" + i + "]. Missing the following inputs: [" + r + "]")
            }
            return function(e, t, n) {
                var r = n.usedNodes
                  , a = n.inputs
                  , s = []
                  , o = Object.keys(a).map((function(e) {
                    return v(e)[0]
                }
                )).map((function(t) {
                    return e.nodes[t]
                }
                ))
                  , i = e.initNodes;
                o.forEach((function(e) {
                    r.has(e.name) && s.push(e)
                }
                )),
                e.weights.forEach((function(e) {
                    r.has(e.name) && s.push(e)
                }
                )),
                null != i && i.forEach((function(e) {
                    r.has(e.name) && s.push(e)
                }
                ));
                for (var u = new Set, p = []; s.length > 0; ) {
                    var l = s.pop();
                    u.add(l.name),
                    t[l.name] || p.push(l),
                    l.children.forEach((function(e) {
                        !u.has(e.name) && r.has(e.name) && e.inputs.every((function(e) {
                            return u.has(e.name)
                        }
                        )) && s.push(e)
                    }
                    ))
                }
                return p
            }(this.graph, this.weightMap, n)
        }
        ,
        e.prototype.execute = function(e, n) {
            var r = this;
            e = this.mapInputs(e);
            var a = Object.keys(e).sort();
            this.checkInputs(e),
            this.checkInputShapeAndType(e),
            n = this.mapOutputs(n),
            this.checkOutputs(n);
            var s = a.map((function(e) {
                return r.graph.nodes[v(e)[0]]
            }
            ))
              , o = n.map((function(e) {
                return v(e)[0]
            }
            ))
              , i = o.map((function(e) {
                return r.graph.nodes[e]
            }
            ));
            this.resetIntermediateTensors(),
            0 === i.length && (i = this._outputs);
            var u = this.getCompilationKey(s, i)
              , p = this.compiledMap.get(u);
            null == p && (p = this.compile(e, i),
            this.compiledMap.set(u, p));
            var c = {}
              , d = {};
            return t.tidy((function() {
                var a = new wi(r.weightMap,c,d,r.functionExecutorMap)
                  , s = Object.assign({}, r.weightMap);
                Object.keys(e).forEach((function(t) {
                    var n = l(v(t), 2)
                      , r = n[0]
                      , a = [];
                    a[n[1]] = e[t],
                    s[r] = a
                }
                ));
                for (var i = r.getFrozenTensorIds(s), u = {}, h = 0; h < p.length; h++) {
                    var f = p[h];
                    if (!s[f.name]) {
                        var y = ki(f, s, a, r._resourceManager);
                        if (t.util.isPromise(y))
                            throw new Error("The execution of the op '" + f.op + "' returned a promise. Please use model.executeAsync() instead.");
                        s[f.name] = y,
                        r.checkTensorForDisposal(f.name, f, s, a, i, o, u)
                    }
                }
                return null == r.parent && a.dispose(i),
                n.map((function(e) {
                    return m(e, s, a)
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getFrozenTensorIds = function(e) {
            var t = [].concat.apply([], Object.keys(e).map((function(t) {
                return e[t]
            }
            )).map((function(e) {
                return e.map((function(e) {
                    return e.id
                }
                ))
            }
            )));
            return new Set(t)
        }
        ,
        e.prototype.checkTensorForDisposal = function(e, t, n, r, a, s, o) {
            var i = this;
            "control" !== t.category && -1 === s.indexOf(e) && (n[e].forEach((function(e) {
                null != e && (o[e.id] = (o[e.id] || 0) + t.children.length)
            }
            )),
            t.inputs.forEach((function(e) {
                if ("control" !== e.category) {
                    var s = function(e, t, n) {
                        return t[g(e, n.currentContextId)]
                    }(e.name, n, r);
                    null != s && s.forEach((function(e) {
                        if (e && !e.kept && !a.has(e.id)) {
                            var n = o[e.id];
                            if (1 === n) {
                                if (i.keepTensorForDebug) {
                                    var s = l(y(t.name, r), 2)
                                      , u = s[0]
                                      , p = s[1];
                                    i.intermediateTensors[u] || (i.intermediateTensors[u] = []),
                                    i.intermediateTensors[u][p] = e
                                } else
                                    e.dispose();
                                delete o[e.id]
                            } else
                                null != n && o[e.id]--
                        }
                    }
                    ))
                }
            }
            )))
        }
        ,
        e.prototype.executeAsync = function(e, t) {
            return i(this, void 0, void 0, (function() {
                return u(this, (function(n) {
                    return [2, this._executeAsync(e, t)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.disposeIntermediateTensors = function() {
            var e = this;
            this.intermediateTensors && (Object.keys(this.intermediateTensors).forEach((function(t) {
                return e.intermediateTensors[t].forEach((function(e) {
                    return e.dispose()
                }
                ))
            }
            )),
            this.disposeTensorsMap())
        }
        ,
        e.prototype.disposeTensorsMap = function() {
            var e = this;
            this.tensorsMap && Object.keys(this.tensorsMap).forEach((function(t) {
                e.tensorsMap[t].forEach((function(t) {
                    !t || t.kept || t.isDisposed || e.keepIds.has(t.id) || t.dispose()
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getIntermediateTensors = function() {
            return this.tensorsMap
        }
        ,
        e.prototype.resetIntermediateTensors = function() {
            for (var e in this.intermediateTensors)
                this.intermediateTensors[e].forEach((function(e) {
                    return e.dispose()
                }
                )),
                delete this.intermediateTensors[e]
        }
        ,
        e.prototype._executeAsync = function(e, n, r, a, s) {
            return void 0 === r && (r = !1),
            void 0 === a && (a = {}),
            void 0 === s && (s = {}),
            i(this, void 0, void 0, (function() {
                var o, i, p, l, d, h = this;
                return u(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        r || (e = this.mapInputs(e),
                        this.checkInputs(e),
                        this.checkInputShapeAndType(e),
                        n = this.mapOutputs(n),
                        this.checkOutputs(n));
                        try {
                            this.keepTensorForDebug = t.env().getBool("KEEP_INTERMEDIATE_TENSORS")
                        } catch (e) {
                            console.warn(e.message)
                        }
                        return this.resetIntermediateTensors(),
                        o = new wi(this.weightMap,a,s,this.functionExecutorMap),
                        i = this,
                        [4, this.executeWithControlFlow(e, o, n, r)];
                    case 1:
                        return i.tensorsMap = u.sent(),
                        p = n.map((function(e) {
                            return m(e, h.tensorsMap, o)
                        }
                        )),
                        l = p.map((function(e) {
                            return e.id
                        }
                        )),
                        d = Object.keys(e).map((function(t) {
                            return e[t].id
                        }
                        )),
                        this.keepIds = new Set(c(l, d, this.weightIds)),
                        this.keepTensorForDebug || this.disposeTensorsMap(),
                        null == this.parent && o.dispose(this.keepIds),
                        [2, p]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.executeFunctionAsync = function(e, t, n) {
            return i(this, void 0, void 0, (function() {
                var r, a = this;
                return u(this, (function(s) {
                    return r = e.reduce((function(e, t, n) {
                        return e[a.inputs[n].name] = t,
                        e
                    }
                    ), {}),
                    [2, this._executeAsync(r, this.outputNodes, !0, t, n)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.executeWithControlFlow = function(e, t, n, r) {
            return i(this, void 0, void 0, (function() {
                var a, s, o, i, p, d, h, f, y, g, b, x, N, k, w, T, _, S = this;
                return u(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        a = Object.keys(e),
                        s = a.map((function(e) {
                            return S.graph.nodes[v(e)[0]]
                        }
                        )),
                        o = n.map((function(e) {
                            return v(e)[0]
                        }
                        )),
                        0 === (i = o.map((function(e) {
                            return S.graph.nodes[e]
                        }
                        ))).length && (i = this._outputs),
                        p = Ti(e, i, this.weightMap, this._initNodes),
                        d = p.usedNodes,
                        h = p.missingInputs,
                        f = p.dynamicNode,
                        y = p.syncInputs,
                        g = c(s, this.graph.weights, this._initNodes || []).map((function(e) {
                            return {
                                node: e,
                                contexts: t.currentContext
                            }
                        }
                        )),
                        b = Object.assign({}, this.weightMap),
                        Object.keys(e).forEach((function(t) {
                            var n = l(v(t), 2)
                              , r = n[0]
                              , a = [];
                            a[n[1]] = e[t],
                            b[r] = a
                        }
                        )),
                        x = {},
                        N = this.getFrozenTensorIds(b),
                        k = {},
                        u.label = 1;
                    case 1:
                        return g.length > 0 ? (w = this.processStack(s, g, t, b, k, N, o, x, d),
                        [4, Promise.all(w)]) : [3, 3];
                    case 2:
                        return u.sent(),
                        [3, 1];
                    case 3:
                        if (null != f || r || console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."),
                        (T = i.filter((function(e) {
                            return !Ii(e) && !m(e.name, b, t)
                        }
                        )).map((function(e) {
                            return e.name
                        }
                        ))).length > 0)
                            throw _ = "",
                            null != f && (_ = "Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [" + y + "]"),
                            new Error("Cannot compute the outputs [" + T + "] from the provided inputs [" + a + "]. Consider providing the following inputs: [" + h + "]. " + _);
                        return [2, b]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.processStack = function(e, n, r, a, s, o, i, u, p) {
            for (var c = this, d = [], h = function() {
                var e, h, g = n.pop();
                r.currentContext = g.contexts;
                var v = "";
                if ("Enter" === g.node.op && f("isConstant", g.node, a, r) && (e = l(y(g.node.name, r), 1),
                v = e[0]),
                null == a[g.node.name]) {
                    var b = ki(g.node, a, r, m._resourceManager);
                    v || (h = l(y(g.node.name, r), 1),
                    v = h[0]);
                    var x = r.currentContext;
                    t.util.isPromise(b) ? d.push(b.then((function(e) {
                        return a[v] = e,
                        r.currentContext = x,
                        c.checkTensorForDisposal(v, g.node, a, r, o, i, u),
                        c.processChildNodes(g.node, n, r, a, s, p),
                        e
                    }
                    ))) : (a[v] = b,
                    m.checkTensorForDisposal(v, g.node, a, r, o, i, u),
                    m.processChildNodes(g.node, n, r, a, s, p))
                } else
                    m.processChildNodes(g.node, n, r, a, s, p)
            }, m = this; n.length > 0; )
                h();
            return d
        }
        ,
        e.prototype.processChildNodes = function(e, t, n, r, a, s) {
            e.children.forEach((function(e) {
                var o = l(y(e.name, n), 1)[0];
                !a[o] && s.has(e.name) && ("Merge" === e.op ? e.inputNames.some((function(e) {
                    return !!m(e, r, n)
                }
                )) && (a[o] = !0,
                t.push({
                    contexts: n.currentContext,
                    node: e
                })) : e.inputNames.every((function(e) {
                    return !!m(e, r, n)
                }
                )) && (a[o] = !0,
                t.push({
                    contexts: n.currentContext,
                    node: e
                })))
            }
            ))
        }
        ,
        e.prototype.dispose = function() {
            var e = this;
            Object.keys(this.weightMap).forEach((function(t) {
                return e.weightMap[t].forEach((function(e) {
                    return e.dispose()
                }
                ))
            }
            ))
        }
        ,
        e.prototype.checkInputShapeAndType = function(e) {
            var n = this;
            Object.keys(e).forEach((function(r) {
                var a = e[r]
                  , s = l(v(r), 1)[0]
                  , o = n.graph.nodes[s];
                if (o.attrParams.shape && o.attrParams.shape.value) {
                    var i = o.attrParams.shape.value
                      , u = i.length === a.shape.length && a.shape.every((function(e, t) {
                        return -1 === i[t] || i[t] === e
                    }
                    ));
                    t.util.assert(u, (function() {
                        return "The shape of dict['" + o.name + "'] provided in model.execute(dict) must be [" + i + "], but was [" + a.shape + "]"
                    }
                    ))
                }
                o.attrParams.dtype && o.attrParams.dtype.value && t.util.assert(a.dtype === o.attrParams.dtype.value, (function() {
                    return "The dtype of dict['" + o.name + "'] provided in model.execute(dict) must be " + o.attrParams.dtype.value + ", but was " + a.dtype
                }
                ))
            }
            ))
        }
        ,
        e.prototype.mapInputs = function(e) {
            var t = {};
            for (var n in e) {
                if (null != this._signature && null != this._signature.inputs && null != this._signature.inputs[n])
                    t[this._signature.inputs[n].name] = e[n];
                else
                    t[n] = e[n]
            }
            return t
        }
        ,
        e.prototype.checkInputs = function(e) {
            var t = this
              , n = Object.keys(e).filter((function(e) {
                var n = l(v(e), 1)[0];
                return null == t.graph.nodes[n]
            }
            ));
            if (n.length > 0)
                throw new Error("The dict provided in model.execute(dict) has keys: [" + n + "] that are not part of graph")
        }
        ,
        e.prototype.mapOutputs = function(e) {
            var t = this;
            return e.map((function(e) {
                return null != t._signature && null != t._signature.outputs && null != t._signature.outputs[e] ? t._signature.outputs[e].name : e
            }
            ), {})
        }
        ,
        e.prototype.checkOutputs = function(e) {
            var t = this;
            e.forEach((function(e) {
                var n = l(v(e), 1)[0];
                if (!t.graph.nodes[n])
                    throw new Error("The output '" + e + "' is not found in the graph")
            }
            ))
        }
        ,
        e
    }()
      , Mi = function() {
        function e(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            this.hashTableNameToHandle = e,
            this.hashTableMap = t
        }
        return e.prototype.addHashTable = function(e, t) {
            this.hashTableNameToHandle[e] = t.handle,
            this.hashTableMap[t.id] = t
        }
        ,
        e.prototype.getHashTableHandleByName = function(e) {
            return this.hashTableNameToHandle[e]
        }
        ,
        e.prototype.getHashTableById = function(e) {
            return this.hashTableMap[e]
        }
        ,
        e.prototype.dispose = function() {
            for (var e in this.hashTableMap)
                this.hashTableMap[e].clearAndClose(),
                delete this.hashTableMap[e];
            for (var t in this.hashTableNameToHandle)
                this.hashTableNameToHandle[t].dispose(),
                delete this.hashTableNameToHandle[t]
        }
        ,
        e
    }()
      , Fi = function() {
        function e(e, t) {
            void 0 === t && (t = {}),
            this.modelUrl = e,
            this.loadOptions = t,
            this.version = "n/a",
            null == t && (this.loadOptions = {}),
            this.resourceManager = new Mi
        }
        return Object.defineProperty(e.prototype, "modelVersion", {
            get: function() {
                return this.version
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "inputNodes", {
            get: function() {
                return this.executor.inputNodes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "outputNodes", {
            get: function() {
                return this.executor.outputNodes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "inputs", {
            get: function() {
                return this.executor.inputs
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "outputs", {
            get: function() {
                return this.executor.outputs
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "weights", {
            get: function() {
                return this.executor.weightMap
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "metadata", {
            get: function() {
                return this.artifacts.userDefinedMetadata
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "modelSignature", {
            get: function() {
                return this.signature
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.findIOHandler = function() {
            var e = this.modelUrl;
            if (null != e.load)
                this.handler = e;
            else if (null != this.loadOptions.requestInit)
                this.handler = t.io.browserHTTPRequest(e, this.loadOptions);
            else {
                var n = t.io.getLoadHandlers(e, this.loadOptions);
                if (0 === n.length)
                    n.push(t.io.browserHTTPRequest(e, this.loadOptions));
                else if (n.length > 1)
                    throw new Error("Found more than one (" + n.length + ") load handlers for URL '" + [e] + "'");
                this.handler = n[0]
            }
        }
        ,
        e.prototype.load = function() {
            return i(this, void 0, void 0, (function() {
                var e;
                return u(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        if (this.findIOHandler(),
                        null == this.handler.load)
                            throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
                        return [4, this.handler.load()];
                    case 1:
                        return e = t.sent(),
                        [2, this.loadSync(e)]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.loadSync = function(e) {
            this.artifacts = e;
            var n, r = this.artifacts.modelTopology;
            n = null != this.artifacts.userDefinedMetadata && null != this.artifacts.userDefinedMetadata.signature ? this.artifacts.userDefinedMetadata.signature : this.artifacts.signature,
            this.signature = n,
            this.version = r.versions.producer + "." + r.versions.minConsumer;
            var a = t.io.decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs);
            if (this.executor = new Ai(B.Instance.transformGraph(r, this.signature)),
            this.executor.weightMap = this.convertTensorMapToTensorsMap(a),
            this.executor.resourceManager = this.resourceManager,
            null != e.modelInitializer && null != e.modelInitializer.node) {
                var s = B.Instance.transformGraph(e.modelInitializer);
                this.initializer = new Ai(s),
                this.initializer.weightMap = this.executor.weightMap,
                this.initializer.resourceManager = this.resourceManager,
                this.initializer.executeAsync({}, [])
            }
            return !0
        }
        ,
        e.prototype.save = function(e, n) {
            return i(this, void 0, void 0, (function() {
                var n;
                return u(this, (function(r) {
                    if ("string" == typeof e) {
                        if (0 === (n = t.io.getSaveHandlers(e)).length)
                            throw new Error("Cannot find any save handlers for URL '" + e + "'");
                        if (n.length > 1)
                            throw new Error("Found more than one (" + n.length + ") save handlers for URL '" + e + "'");
                        e = n[0]
                    }
                    if (null == e.save)
                        throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
                    return [2, e.save(this.artifacts)]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.predict = function(e, t) {
            return this.execute(e, this.outputNodes)
        }
        ,
        e.prototype.normalizeInputs = function(e) {
            if (!(e instanceof t.Tensor || Array.isArray(e)))
                return e;
            if ((e = Array.isArray(e) ? e : [e]).length !== this.inputNodes.length)
                throw new Error("Input tensor count mismatch,the graph model has " + this.inputNodes.length + " placeholders, while there are " + e.length + " input tensors.");
            return this.inputNodes.reduce((function(t, n, r) {
                return t[n] = e[r],
                t
            }
            ), {})
        }
        ,
        e.prototype.normalizeOutputs = function(e) {
            return e = e || this.outputNodes,
            Array.isArray(e) ? e : [e]
        }
        ,
        e.prototype.execute = function(e, t) {
            e = this.normalizeInputs(e),
            t = this.normalizeOutputs(t);
            var n = this.executor.execute(e, t);
            return n.length > 1 ? n : n[0]
        }
        ,
        e.prototype.executeAsync = function(e, t) {
            return i(this, void 0, void 0, (function() {
                var n;
                return u(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return e = this.normalizeInputs(e),
                        t = this.normalizeOutputs(t),
                        [4, this.executor.executeAsync(e, t)];
                    case 1:
                        return [2, (n = r.sent()).length > 1 ? n : n[0]]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getIntermediateTensors = function() {
            return this.executor.getIntermediateTensors()
        }
        ,
        e.prototype.disposeIntermediateTensors = function() {
            this.executor.disposeIntermediateTensors()
        }
        ,
        e.prototype.convertTensorMapToTensorsMap = function(e) {
            return Object.keys(e).reduce((function(t, n) {
                return t[n] = [e[n]],
                t
            }
            ), {})
        }
        ,
        e.prototype.dispose = function() {
            this.executor.dispose(),
            this.initializer && this.initializer.dispose(),
            this.resourceManager.dispose()
        }
        ,
        e
    }();
    e.GraphModel = Fi,
    e.deregisterOp = function(e) {
        delete d[e]
    }
    ,
    e.loadGraphModel = function(e, t) {
        return void 0 === t && (t = {}),
        i(this, void 0, void 0, (function() {
            var n;
            return u(this, (function(r) {
                switch (r.label) {
                case 0:
                    if (null == e)
                        throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
                    return null == t && (t = {}),
                    t.fromTFHub && null == e.load && (e.endsWith("/") || (e += "/"),
                    e += "model.json?tfjs-format=file"),
                    [4, (n = new Fi(e,t)).load()];
                case 1:
                    return r.sent(),
                    [2, n]
                }
            }
            ))
        }
        ))
    }
    ,
    e.registerOp = function(e, t) {
        var n = {
            tfOpName: e,
            category: "custom",
            inputs: [],
            attrs: [],
            customExecutor: t
        };
        d[e] = n
    }
    ,
    e.version_converter = "3.13.0",
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=tf-converter.min.js.map
