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
!function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports, require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-core"], n) : n((e = "undefined" != typeof globalThis ? globalThis : e || self).tf = e.tf || {}, e.tf)
}(this, (function(e, n) {
    "use strict";
    function t(e) {
        if (e && e.__esModule)
            return e;
        var n = Object.create(null);
        return e && Object.keys(e).forEach((function(t) {
            if ("default" !== t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(n, t, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return e[t]
                    }
                })
            }
        }
        )),
        n.default = e,
        n
    }
    var r = t(n)
      , a = function(e, n) {
        return (a = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, n) {
            e.__proto__ = n
        }
        || function(e, n) {
            for (var t in n)
                n.hasOwnProperty(t) && (e[t] = n[t])
        }
        )(e, n)
    };
    function i(e, n, t, r) {
        return new (t || (t = Promise))((function(a, i) {
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
                var n;
                e.done ? a(e.value) : (n = e.value,
                n instanceof t ? n : new t((function(e) {
                    e(n)
                }
                ))).then(o, s)
            }
            u((r = r.apply(e, n || [])).next())
        }
        ))
    }
    function o(e, n) {
        var t, r, a, i, o = {
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
                    if (t)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (t = 1,
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
                            i = n.call(e, o)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            t = a = 0
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
    function s(e) {
        var n = "function" == typeof Symbol && Symbol.iterator
          , t = n && e[n]
          , r = 0;
        if (t)
            return t.call(e);
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
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function u(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t)
            return e;
        var r, a, i = t.call(e), o = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                o.push(r.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (t = i.return) && t.call(i)
            } finally {
                if (a)
                    throw a.error
            }
        }
        return o
    }
    function l() {
        for (var e = [], n = 0; n < arguments.length; n++)
            e = e.concat(u(arguments[n]));
        return e
    }
    var c, d, p, h = {}, f = {
        alpha: !1,
        antialias: !1,
        premultipliedAlpha: !1,
        preserveDrawingBuffer: !1,
        depth: !1,
        stencil: !1,
        failIfMajorPerformanceCaveat: !0
    };
    function x(e, n) {
        h[e] = n
    }
    function v(e, n) {
        if (!(e in h)) {
            var t = function(e, n) {
                if (1 !== e && 2 !== e)
                    throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
                var t = null == n ? function(e) {
                    if ("undefined" != typeof OffscreenCanvas && 2 === e)
                        return new OffscreenCanvas(300,150);
                    if ("undefined" != typeof document)
                        return document.createElement("canvas");
                    throw new Error("Cannot create a canvas in this context")
                }(e) : n;
                if (t.addEventListener("webglcontextlost", (function(n) {
                    n.preventDefault(),
                    delete h[e]
                }
                ), !1),
                1 === e)
                    return t.getContext("webgl", f) || t.getContext("experimental-webgl", f);
                return t.getContext("webgl2", f)
            }(e, n);
            if (null === t)
                return console.log("Could not get context for WebGL version", e),
                null;
            h[e] = t
        }
        var r = h[e];
        return null == r || r.isContextLost() ? (delete h[e],
        v(e)) : (r.disable(r.DEPTH_TEST),
        r.disable(r.STENCIL_TEST),
        r.disable(r.BLEND),
        r.disable(r.DITHER),
        r.disable(r.POLYGON_OFFSET_FILL),
        r.disable(r.SAMPLE_COVERAGE),
        r.enable(r.SCISSOR_TEST),
        r.enable(r.CULL_FACE),
        r.cullFace(r.BACK),
        h[e])
    }
    function m(e, n) {
        return [n, e]
    }
    function g(e) {
        var t = n.util.sizeFromShape(e)
          , r = Math.ceil(t / 4);
        return n.util.sizeToSquarishShape(r)
    }
    function b(e, n) {
        return [Math.max(1, Math.ceil(n / 2)), Math.max(1, Math.ceil(e / 2))]
    }
    function C(e, t) {
        var r, a, i, o, s, u, l, c, d, p, h = e;
        return 2 === n.env().getNumber("WEBGL_VERSION") ? (r = h.R32F,
        a = h.R16F,
        i = h.RGBA16F,
        o = h.RGBA32F,
        s = h.RED,
        l = 4,
        c = 1,
        d = h.HALF_FLOAT,
        p = h.FLOAT,
        u = h.RGBA8) : (r = e.RGBA,
        a = e.RGBA,
        i = e.RGBA,
        o = h.RGBA,
        s = e.RGBA,
        l = 4,
        c = 4,
        d = null != t ? t.HALF_FLOAT_OES : null,
        p = e.FLOAT,
        u = e.RGBA),
        {
            internalFormatFloat: r,
            internalFormatHalfFloat: a,
            internalFormatPackedHalfFloat: i,
            internalFormatPackedFloat: o,
            textureFormatFloat: s,
            downloadTextureFormat: u,
            downloadUnpackNumChannels: l,
            defaultNumChannels: c,
            textureTypeHalfFloat: d,
            textureTypeFloat: p
        }
    }
    function y(e, t) {
        var r = t();
        return n.env().getBool("DEBUG") && function(e) {
            var n = e.getError();
            if (n !== e.NO_ERROR)
                throw new Error("WebGL Error: " + I(e, n))
        }(e),
        r
    }
    !function(e) {
        e[e.DENSE = 0] = "DENSE",
        e[e.SHARED_BATCH = 1] = "SHARED_BATCH"
    }(c || (c = {})),
    function(e) {
        e[e.RENDER = 0] = "RENDER",
        e[e.UPLOAD = 1] = "UPLOAD",
        e[e.PIXELS = 2] = "PIXELS",
        e[e.DOWNLOAD = 3] = "DOWNLOAD"
    }(d || (d = {})),
    function(e) {
        e[e.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16",
        e[e.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32",
        e[e.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE",
        e[e.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32",
        e[e.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16"
    }(p || (p = {}));
    function k(e) {
        return !!(n.env().getBool("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === e || 5.96e-8 < Math.abs(e) && Math.abs(e) < 65504)
    }
    function I(e, n) {
        switch (n) {
        case e.NO_ERROR:
            return "NO_ERROR";
        case e.INVALID_ENUM:
            return "INVALID_ENUM";
        case e.INVALID_VALUE:
            return "INVALID_VALUE";
        case e.INVALID_OPERATION:
            return "INVALID_OPERATION";
        case e.INVALID_FRAMEBUFFER_OPERATION:
            return "INVALID_FRAMEBUFFER_OPERATION";
        case e.OUT_OF_MEMORY:
            return "OUT_OF_MEMORY";
        case e.CONTEXT_LOST_WEBGL:
            return "CONTEXT_LOST_WEBGL";
        default:
            return "Unknown error code " + n
        }
    }
    function w(e, n) {
        return K(e, (function() {
            return e.getExtension(n)
        }
        ), 'Extension "' + n + '" not supported on this browser.')
    }
    function S(e, n) {
        var t = K(e, (function() {
            return e.createShader(e.VERTEX_SHADER)
        }
        ), "Unable to create vertex WebGLShader.");
        if (y(e, (function() {
            return e.shaderSource(t, n)
        }
        )),
        y(e, (function() {
            return e.compileShader(t)
        }
        )),
        !1 === e.getShaderParameter(t, e.COMPILE_STATUS))
            throw console.log(e.getShaderInfoLog(t)),
            new Error("Failed to compile vertex shader.");
        return t
    }
    function R(e, t) {
        var r = K(e, (function() {
            return e.createShader(e.FRAGMENT_SHADER)
        }
        ), "Unable to create fragment WebGLShader.");
        if (y(e, (function() {
            return e.shaderSource(r, t)
        }
        )),
        y(e, (function() {
            return e.compileShader(r)
        }
        )),
        !1 === e.getShaderParameter(r, e.COMPILE_STATUS))
            throw function(e, t) {
                var r = N.exec(t);
                if (null == r)
                    return console.log("Couldn't parse line number in error: " + t),
                    void console.log(e);
                for (var a = +r[1], i = e.split("\n"), o = i.length.toString().length + 2, s = i.map((function(e, t) {
                    return n.util.rightPad((t + 1).toString(), o) + e
                }
                )), u = 0, l = 0; l < s.length; l++)
                    u = Math.max(s[l].length, u);
                var c = s.slice(0, a - 1)
                  , d = s.slice(a - 1, a)
                  , p = s.slice(a);
                console.log(c.join("\n")),
                console.log(t.split("\n")[0]),
                console.log("%c " + n.util.rightPad(d[0], u), "border:1px solid red; background-color:#e3d2d2; color:#a61717"),
                console.log(p.join("\n"))
            }(t, e.getShaderInfoLog(r)),
            new Error("Failed to compile fragment shader.");
        return r
    }
    var T, E, N = /ERROR: [0-9]+:([0-9]+):/g;
    function A(e) {
        return K(e, (function() {
            return e.createProgram()
        }
        ), "Unable to create WebGLProgram.")
    }
    function F(e, n) {
        if (y(e, (function() {
            return e.linkProgram(n)
        }
        )),
        !1 === e.getProgramParameter(n, e.LINK_STATUS))
            throw console.log(e.getProgramInfoLog(n)),
            new Error("Failed to link vertex and fragment shaders.")
    }
    function _(e, n) {
        if (y(e, (function() {
            return e.validateProgram(n)
        }
        )),
        !1 === e.getProgramParameter(n, e.VALIDATE_STATUS))
            throw console.log(e.getProgramInfoLog(n)),
            new Error("Shader program validation failed.")
    }
    function O(e, n) {
        var t = K(e, (function() {
            return e.createBuffer()
        }
        ), "Unable to create WebGLBuffer");
        return y(e, (function() {
            return e.bindBuffer(e.ARRAY_BUFFER, t)
        }
        )),
        y(e, (function() {
            return e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW)
        }
        )),
        t
    }
    function D(e, n) {
        var t = K(e, (function() {
            return e.createBuffer()
        }
        ), "Unable to create WebGLBuffer");
        return y(e, (function() {
            return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t)
        }
        )),
        y(e, (function() {
            return e.bufferData(e.ELEMENT_ARRAY_BUFFER, n, e.STATIC_DRAW)
        }
        )),
        t
    }
    function P(e) {
        return K(e, (function() {
            return e.createTexture()
        }
        ), "Unable to create WebGLTexture.")
    }
    function L(e, t) {
        var r = n.env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
        if (e <= 0 || t <= 0) {
            var a = "[" + e + "x" + t + "]";
            throw new Error("Requested texture size " + a + " is invalid.")
        }
        if (e > r || t > r) {
            a = "[" + e + "x" + t + "]";
            throw new Error("Requested texture size " + a + " greater than WebGL maximum on this browser / GPU " + ("[" + r + "x" + r + "]") + ".")
        }
    }
    function B(e) {
        return K(e, (function() {
            return e.createFramebuffer()
        }
        ), "Unable to create WebGLFramebuffer.")
    }
    function V(e, n, t, r, a, i, o) {
        var s = e.getAttribLocation(n, t);
        return -1 !== s && (y(e, (function() {
            return e.bindBuffer(e.ARRAY_BUFFER, r)
        }
        )),
        y(e, (function() {
            return e.vertexAttribPointer(s, a, e.FLOAT, !1, i, o)
        }
        )),
        y(e, (function() {
            return e.enableVertexAttribArray(s)
        }
        )),
        !0)
    }
    function U(e, n, t) {
        q(e, t),
        y(e, (function() {
            return e.activeTexture(e.TEXTURE0 + t)
        }
        )),
        y(e, (function() {
            return e.bindTexture(e.TEXTURE_2D, n)
        }
        ))
    }
    function W(e, n, t) {
        return K(e, (function() {
            return e.getUniformLocation(n, t)
        }
        ), 'uniform "' + t + '" not present in program.')
    }
    function M(e, n, t) {
        return e.getUniformLocation(n, t)
    }
    function G(e, n, t, r) {
        y(e, (function() {
            return U(e, n, r)
        }
        )),
        y(e, (function() {
            return e.uniform1i(t, r)
        }
        ))
    }
    function z(e, n, t) {
        y(e, (function() {
            return e.bindFramebuffer(e.FRAMEBUFFER, t)
        }
        )),
        y(e, (function() {
            return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n, 0)
        }
        ))
    }
    function X(e, n) {
        y(e, (function() {
            return e.bindFramebuffer(e.FRAMEBUFFER, n)
        }
        )),
        y(e, (function() {
            return e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, null, 0)
        }
        ))
    }
    function H(e) {
        var n = e.checkFramebufferStatus(e.FRAMEBUFFER);
        if (n !== e.FRAMEBUFFER_COMPLETE)
            throw new Error("Error binding framebuffer: " + j(e, n))
    }
    function j(e, n) {
        switch (n) {
        case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
        case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
        case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
        case e.FRAMEBUFFER_UNSUPPORTED:
            return "FRAMEBUFFER_UNSUPPORTED";
        default:
            return "unknown error " + n
        }
    }
    function K(e, n, t) {
        var r = y(e, (function() {
            return n()
        }
        ));
        if (null == r)
            throw new Error(t);
        return r
    }
    function q(e, n) {
        var t = e.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1
          , r = n + e.TEXTURE0;
        if (r < e.TEXTURE0 || r > t)
            throw new Error("textureUnit must be in " + ("[gl.TEXTURE0, gl.TEXTURE" + t + "]") + ".")
    }
    function Y(e, t) {
        return void 0 === t && (t = 2),
        n.util.sizeFromShape(e.slice(0, e.length - t))
    }
    function Q(e) {
        if (0 === e.length)
            throw Error("Cannot get rows and columns of an empty shape array.");
        return [e.length > 1 ? e[e.length - 2] : 1, e[e.length - 1]]
    }
    function Z(e) {
        var n = [1, 1, 1];
        return 0 === e.length || 1 === e.length && 1 === e[0] || (n = l([Y(e)], Q(e))),
        n
    }
    function J(e, t) {
        var r;
        void 0 === t && (t = !1);
        var a = n.env().getNumber("WEBGL_MAX_TEXTURE_SIZE");
        if (t && (a *= 2,
        1 === (e = e.map((function(t, r) {
            return r >= e.length - 2 ? n.util.nearestLargerEven(e[r]) : e[r]
        }
        ))).length && (e = [2, e[0]])),
        2 !== e.length) {
            var i = n.util.squeezeShape(e);
            e = i.newShape
        }
        var o = n.util.sizeFromShape(e);
        if (e.length <= 1 && o <= a)
            return [1, o];
        if (2 === e.length && e[0] <= a && e[1] <= a)
            return e;
        if (3 === e.length && e[0] * e[1] <= a && e[2] <= a)
            return [e[0] * e[1], e[2]];
        if (3 === e.length && e[0] <= a && e[1] * e[2] <= a)
            return [e[0], e[1] * e[2]];
        if (4 === e.length && e[0] * e[1] * e[2] <= a && e[3] <= a)
            return [e[0] * e[1] * e[2], e[3]];
        if (4 === e.length && e[0] <= a && e[1] * e[2] * e[3] <= a)
            return [e[0], e[1] * e[2] * e[3]];
        if (t) {
            var s = Y(e)
              , l = 2
              , c = 2;
            return e.length && (l = (r = u(Q(e), 2))[0],
            c = r[1]),
            o = s * (l / 2) * (c / 2),
            n.util.sizeToSquarishShape(o).map((function(e) {
                return 2 * e
            }
            ))
        }
        return n.util.sizeToSquarishShape(o)
    }
    function $(e) {
        return e % 2 == 0
    }
    function ee(e, t) {
        if (e = e.slice(-2),
        t = t.slice(-2),
        n.util.arraysEqual(e, t))
            return !0;
        if (!e.length || !t.length)
            return !0;
        if (0 === e[0] || 0 === e[1] || 0 === t[0] || 0 === t[1])
            return !0;
        if (e.length !== t.length) {
            var r = e.slice(-1)[0]
              , a = t.slice(-1)[0];
            if (r === a)
                return !0;
            if ($(r) && $(a) && (1 === e[0] || 1 === t[0]))
                return !0
        }
        return e[1] === t[1] && $(e[0]) && $(t[0])
    }
    function ne(e) {
        if (null == T) {
            var n = v(e);
            T = n.getParameter(n.MAX_TEXTURE_SIZE)
        }
        return T
    }
    function te(e) {
        if (null == E) {
            var n = v(e);
            E = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)
        }
        return Math.min(16, E)
    }
    function re(e) {
        if (0 === e)
            return 0;
        var n = v(e);
        return ae(n, "EXT_disjoint_timer_query_webgl2") && 2 === e ? 2 : ae(n, "EXT_disjoint_timer_query") ? 1 : 0
    }
    function ae(e, n) {
        return null != e.getExtension(n)
    }
    function ie(e) {
        try {
            if (null != v(e))
                return !0
        } catch (e) {
            return console.log("Error when getting WebGL context: ", e),
            !1
        }
        return !1
    }
    function oe(e) {
        if (0 === e)
            return !1;
        var n = v(e);
        if (1 === e) {
            if (!ae(n, "OES_texture_float"))
                return !1
        } else if (!ae(n, "EXT_color_buffer_float"))
            return !1;
        return ue(n)
    }
    function se(e) {
        if (0 === e)
            return !1;
        var n = v(e);
        if (1 !== e) {
            if (ae(n, "EXT_color_buffer_float"))
                return ue(n);
            var t = "EXT_color_buffer_half_float";
            if (ae(n, t)) {
                var r = n.getExtension(t);
                return function(e, n) {
                    var t = C(e, n)
                      , r = e.createTexture();
                    e.bindTexture(e.TEXTURE_2D, r);
                    var a = 1
                      , i = 1;
                    e.texImage2D(e.TEXTURE_2D, 0, t.internalFormatHalfFloat, a, i, 0, t.textureFormatFloat, t.textureTypeHalfFloat, null);
                    var o = e.createFramebuffer();
                    e.bindFramebuffer(e.FRAMEBUFFER, o),
                    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, r, 0);
                    var s = e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE;
                    return e.bindTexture(e.TEXTURE_2D, null),
                    e.bindFramebuffer(e.FRAMEBUFFER, null),
                    e.deleteTexture(r),
                    e.deleteFramebuffer(o),
                    s
                }(n, r)
            }
            return !1
        }
        return !!ae(n, "OES_texture_float") && (!!ae(n, "WEBGL_color_buffer_float") && ue(n))
    }
    function ue(e) {
        var n = C(e)
          , t = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, t);
        e.texImage2D(e.TEXTURE_2D, 0, n.internalFormatFloat, 1, 1, 0, n.textureFormatFloat, n.textureTypeFloat, null);
        var r = e.createFramebuffer();
        e.bindFramebuffer(e.FRAMEBUFFER, r),
        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
        var a = e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE;
        return e.bindTexture(e.TEXTURE_2D, null),
        e.bindFramebuffer(e.FRAMEBUFFER, null),
        e.deleteTexture(t),
        e.deleteFramebuffer(r),
        a
    }
    function le(e) {
        return 2 === e && null != v(e).fenceSync
    }
    function ce(e, t) {
        Array.isArray(e) || (e = [e]),
        e.forEach((function(e) {
            null != e && n.util.assert("complex64" !== e.dtype, (function() {
                return t + " does not support complex64 tensors in the WebGL backend."
            }
            ))
        }
        ))
    }
    var de = {
        __proto__: null,
        callAndCheck: y,
        canBeRepresented: k,
        getWebGLErrorMessage: I,
        getExtensionOrThrow: w,
        createVertexShader: S,
        createFragmentShader: R,
        createProgram: A,
        linkProgram: F,
        validateProgram: _,
        createStaticVertexBuffer: O,
        createStaticIndexBuffer: D,
        getNumChannels: function() {
            return 2 === n.env().getNumber("WEBGL_VERSION") ? 1 : 4
        },
        createTexture: P,
        validateTextureSize: L,
        createFramebuffer: B,
        bindVertexBufferToProgramAttribute: V,
        bindTextureUnit: U,
        unbindTextureUnit: function(e, n) {
            q(e, n),
            y(e, (function() {
                return e.activeTexture(e.TEXTURE0 + n)
            }
            )),
            y(e, (function() {
                return e.bindTexture(e.TEXTURE_2D, null)
            }
            ))
        },
        getProgramUniformLocationOrThrow: W,
        getProgramUniformLocation: M,
        bindTextureToProgramUniformSampler: G,
        bindCanvasToFramebuffer: function(e) {
            y(e, (function() {
                return e.bindFramebuffer(e.FRAMEBUFFER, null)
            }
            )),
            y(e, (function() {
                return e.viewport(0, 0, e.canvas.width, e.canvas.height)
            }
            )),
            y(e, (function() {
                return e.scissor(0, 0, e.canvas.width, e.canvas.height)
            }
            ))
        },
        bindColorTextureToFramebuffer: z,
        unbindColorTextureFromFramebuffer: X,
        validateFramebuffer: H,
        getFramebufferErrorMessage: j,
        getBatchDim: Y,
        getRowsCols: Q,
        getShapeAs3D: Z,
        getTextureShapeFromLogicalShape: J,
        isReshapeFree: ee,
        getWebGLMaxTextureSize: ne,
        resetMaxTextureSize: function() {
            T = null
        },
        resetMaxTexturesInShader: function() {
            E = null
        },
        getMaxTexturesInShader: te,
        getWebGLDisjointQueryTimerVersion: re,
        hasExtension: ae,
        isWebGLVersionEnabled: ie,
        isCapableOfRenderingToFloatTexture: oe,
        isDownloadFloatTextureEnabled: se,
        isWebGLFenceEnabled: le,
        assertNotComplex: ce
    }
      , pe = n.env();
    function he() {
        var e, t, r, a, i, o, s, u, l, c;
        return 2 === n.env().getNumber("WEBGL_VERSION") ? (e = "#version 300 es",
        t = "in",
        r = "out",
        a = "in",
        i = "texture",
        o = "outputColor",
        s = "out vec4 outputColor;",
        u = "\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ",
        l = "",
        c = "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (e = "",
        t = "attribute",
        r = "varying",
        a = "varying",
        i = "texture2D",
        o = "gl_FragColor",
        s = "",
        u = "\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",
        l = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",
        c = "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),
        {
            version: e,
            attribute: t,
            varyingVs: r,
            varyingFs: a,
            texture2D: i,
            output: o,
            defineOutput: s,
            defineSpecialNaN: u,
            defineSpecialInf: l,
            defineRound: c
        }
    }
    function fe(e, t, r) {
        void 0 === r && (r = "index");
        var a = n.util.computeStrides(t);
        return a.map((function(n, t) {
            return "int " + e[t] + " = " + r + " / " + n + "; " + (t === a.length - 1 ? "int " + e[t + 1] + " = " + r + " - " + e[t] + " * " + n : "index -= " + e[t] + " * " + n) + ";"
        }
        )).join("")
    }
    function xe(e, t, r) {
        void 0 === r && (r = "index");
        var a = n.util.computeStrides(t);
        return a.map((function(n, t) {
            return "int " + e[t] + " = " + r + " / outShapeStrides[" + t + "]" + "; " + (t === a.length - 1 ? "int " + e[t + 1] + " = " + r + " - " + e[t] + " * outShapeStrides[" + t + "]" : "index -= " + e[t] + " * outShapeStrides[" + t + "]") + ";"
        }
        )).join("")
    }
    function ve(e, n, t) {
        void 0 === t && (t = "index");
        var r = function(e, n) {
            var t = e.length
              , r = e.map((function(e) {
                return n + "[" + e + "]"
            }
            ))
              , a = new Array(t - 1);
            a[t - 2] = r[t - 1];
            for (var i = t - 3; i >= 0; --i)
                a[i] = "(" + a[i + 1] + " * " + r[i + 1] + ")";
            return a
        }(e.map((function(e, n) {
            return n
        }
        )), n);
        return r.map((function(n, a) {
            return "int " + e[a] + " = " + t + " / " + r[a] + "; " + (a === r.length - 1 ? "int " + e[a + 1] + " = " + t + " - " + e[a] + " * " + r[a] : "index -= " + e[a] + " * " + r[a]) + ";"
        }
        )).join("")
    }
    function me(e) {
        var t = n.util.computeStrides(e).map((function(e) {
            return e.toString()
        }
        ));
        return "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * " + t[0] + " + coords.y * " + t[1] + " + coords.z;\n  }\n"
    }
    pe.registerFlag("HAS_WEBGL", (function() {
        return pe.getNumber("WEBGL_VERSION") > 0
    }
    )),
    pe.registerFlag("WEBGL_VERSION", (function() {
        return ie(2) ? 2 : ie(1) ? 1 : 0
    }
    )),
    pe.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS", (function() {
        return !1
    }
    )),
    pe.registerFlag("WEBGL_BUFFER_SUPPORTED", (function() {
        return 2 === pe.get("WEBGL_VERSION")
    }
    )),
    pe.registerFlag("WEBGL_CPU_FORWARD", (function() {
        return !0
    }
    )),
    pe.registerFlag("WEBGL_FORCE_F16_TEXTURES", (function() {
        return !1
    }
    )),
    pe.registerFlag("WEBGL_PACK", (function() {
        return pe.getBool("HAS_WEBGL")
    }
    )),
    pe.registerFlag("WEBGL_PACK_NORMALIZATION", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_CLIP", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_DEPTHWISECONV", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_PACK_REDUCE", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_LAZILY_UNPACK", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_CONV_IM2COL", (function() {
        return pe.getBool("WEBGL_PACK")
    }
    )),
    pe.registerFlag("WEBGL_MAX_TEXTURE_SIZE", (function() {
        return ne(pe.getNumber("WEBGL_VERSION"))
    }
    )),
    pe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER", (function() {
        return te(pe.getNumber("WEBGL_VERSION"))
    }
    )),
    pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION", (function() {
        var e = pe.getNumber("WEBGL_VERSION");
        return 0 === e ? 0 : re(e)
    }
    )),
    pe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE", (function() {
        return pe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 && !n.device_util.isMobile()
    }
    )),
    pe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE", (function() {
        return oe(pe.getNumber("WEBGL_VERSION"))
    }
    )),
    pe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED", (function() {
        return !pe.getBool("WEBGL_FORCE_F16_TEXTURES") && pe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")
    }
    )),
    pe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED", (function() {
        return se(pe.getNumber("WEBGL_VERSION"))
    }
    )),
    pe.registerFlag("WEBGL_FENCE_API_ENABLED", (function() {
        return le(pe.getNumber("WEBGL_VERSION"))
    }
    )),
    pe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM", (function() {
        return pe.getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0
    }
    )),
    pe.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD", (function() {
        return -1
    }
    ), (function(e) {
        if (e < 0 && -1 !== e)
            throw new Error("WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got " + e + ".")
    }
    )),
    pe.registerFlag("WEBGL_FLUSH_THRESHOLD", (function() {
        return n.device_util.isMobile() ? 1 : -1
    }
    ), (function(e) {
        if (e < 0 && -1 !== e)
            throw new Error("WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got " + e + ".")
    }
    )),
    pe.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD", (function() {
        return 128
    }
    )),
    pe.registerFlag("WEBGL_USE_SHAPES_UNIFORMS", (function() {
        return !1
    }
    )),
    pe.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD", (function() {
        return 1e5
    }
    )),
    pe.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD", (function() {
        return 128
    }
    ));
    var ge = "\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n"
      , be = n.backend_util.getBroadcastDims;
    function Ce(e, t, r) {
        var a = [];
        if (e.forEach((function(e) {
            var t = n.util.sizeFromShape(e.shapeInfo.logicalShape);
            if (e.shapeInfo.isUniform ? a.push("uniform float " + e.name + (t > 1 ? "[" + t + "]" : "") + ";") : (a.push("uniform sampler2D " + e.name + ";"),
            a.push("uniform int offset" + e.name + ";")),
            r.enableShapeUniforms) {
                switch (Ae(r.packedInputs, e.shapeInfo.logicalShape, e.shapeInfo.texShape).uniformShape.length) {
                case 1:
                    a.push("uniform int " + e.name + "Shape;");
                    break;
                case 2:
                    a.push("uniform ivec2 " + e.name + "Shape;");
                    break;
                case 3:
                    a.push("uniform ivec3 " + e.name + "Shape;");
                    break;
                case 4:
                    a.push("uniform ivec4 " + e.name + "Shape;")
                }
                a.push("uniform ivec2 " + e.name + "TexShape;")
            }
        }
        )),
        r.enableShapeUniforms) {
            switch (t.logicalShape.length) {
            case 1:
                a.push("uniform int outShape;");
                break;
            case 2:
                a.push("uniform ivec2 outShape;"),
                a.push("uniform int outShapeStrides;");
                break;
            case 3:
                a.push("uniform ivec3 outShape;"),
                a.push("uniform ivec2 outShapeStrides;");
                break;
            case 4:
                a.push("uniform ivec4 outShape;"),
                a.push("uniform ivec3 outShapeStrides;")
            }
            a.push("uniform ivec2 outTexShape;")
        }
        r.customUniforms && r.customUniforms.forEach((function(e) {
            a.push("uniform " + e.type + " " + e.name + (e.arrayIndex ? "[" + e.arrayIndex + "]" : "") + ";")
        }
        ));
        var i, o, s = a.join("\n"), u = e.map((function(e) {
            return function(e, t, r, a) {
                void 0 === r && (r = !1);
                var i = "";
                i += r ? ke(e, a) : ye(e, a);
                var o = e.shapeInfo.logicalShape
                  , s = t.logicalShape;
                o.length <= s.length && (i += r ? function(e, t) {
                    var r, a = e.name, i = a.charAt(0).toUpperCase() + a.slice(1), o = "get" + i + "AtOutCoords", s = e.shapeInfo.logicalShape.length, u = t.logicalShape.length, l = be(e.shapeInfo.logicalShape, t.logicalShape), c = Ne(u), d = u - s, p = ["x", "y", "z", "w", "u", "v"];
                    r = 0 === s ? "" : u < 2 && l.length >= 1 ? "coords = 0;" : l.map((function(e) {
                        return "coords." + p[e + d] + " = 0;"
                    }
                    )).join("\n");
                    var h = "";
                    h = u < 2 && s > 0 ? "coords" : e.shapeInfo.logicalShape.map((function(e, n) {
                        return "coords." + p[n + d]
                    }
                    )).join(", ");
                    var f = "return outputValue;"
                      , x = 1 === n.util.sizeFromShape(e.shapeInfo.logicalShape)
                      , v = 1 === n.util.sizeFromShape(t.logicalShape);
                    if (1 !== s || x || v) {
                        if (x && !v)
                            f = 1 === u ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      ";
                        else if (l.length) {
                            var m = s - 2
                              , g = s - 1;
                            l.indexOf(m) > -1 && l.indexOf(g) > -1 ? f = "return vec4(outputValue.x);" : l.indexOf(m) > -1 ? f = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : l.indexOf(g) > -1 && (f = "return vec4(outputValue.xx, outputValue.zz);")
                        }
                    } else
                        f = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
                    return "\n    vec4 " + o + "() {\n      " + c + " coords = getOutputCoords();\n      " + r + "\n      vec4 outputValue = get" + i + "(" + h + ");\n      " + f + "\n    }\n  "
                }(e, t) : function(e, t) {
                    var r = e.name
                      , a = r.charAt(0).toUpperCase() + r.slice(1)
                      , i = "get" + a + "AtOutCoords"
                      , o = t.texShape
                      , s = e.shapeInfo.texShape
                      , u = e.shapeInfo.logicalShape.length
                      , l = t.logicalShape.length;
                    if (!e.shapeInfo.isUniform && u === l && null == e.shapeInfo.flatOffset && n.util.arraysEqual(s, o))
                        return "\n      float " + i + "() {\n        return sampleTexture(" + r + ", resultUV);\n      }\n    ";
                    var c, d = Ne(l), p = be(e.shapeInfo.logicalShape, t.logicalShape), h = l - u, f = ["x", "y", "z", "w", "u", "v"];
                    c = 0 === u ? "" : l < 2 && p.length >= 1 ? "coords = 0;" : p.map((function(e) {
                        return "coords." + f[e + h] + " = 0;"
                    }
                    )).join("\n");
                    var x = "";
                    x = l < 2 && u > 0 ? "coords" : e.shapeInfo.logicalShape.map((function(e, n) {
                        return "coords." + f[n + h]
                    }
                    )).join(", ");
                    return "\n    float " + i + "() {\n      " + d + " coords = getOutputCoords();\n      " + c + "\n      return get" + a + "(" + x + ");\n    }\n  "
                }(e, t));
                return i
            }(e, t, r.packedInputs, r.enableShapeUniforms)
        }
        )).join("\n"), l = t.texShape, c = he(), d = function(e) {
            return "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return " + e.texture2D + "(textureSampler, uv).r;\n    }\n  "
        }(c), p = function(e) {
            return e.version + "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    " + e.varyingFs + " vec2 resultUV;\n    " + e.defineOutput + "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    " + e.defineSpecialNaN + "\n    " + e.defineSpecialInf + "\n    " + e.defineRound + "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    " + Ie + "\n    " + we + "\n    " + Se + "\n  "
        }(c);
        return t.isPacked ? (i = function(e, t, r) {
            switch (e.length) {
            case 0:
                return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
            case 1:
                return function(e, n, t) {
                    var r = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)];
                    if (1 === r[0])
                        return t ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    " : "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + r[1] + ".0);\n      }\n    ";
                    if (1 === r[1])
                        return t ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    " : "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + r[0] + ".0);\n      }\n    ";
                    if (t)
                        return "\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ";
                    return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r[0] + ", " + r[1] + "));\n      return 2 * (resTexRC.x * " + r[1] + " + resTexRC.y);\n    }\n  "
                }(0, t, r);
            case 2:
                return function(e, t, r) {
                    var a = [Math.ceil(t[0] / 2), Math.ceil(t[1] / 2)];
                    if (n.util.arraysEqual(e, t))
                        return r ? "\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + a[0] + ", " + a[1] + "));\n      }\n    ";
                    var i = Math.ceil(e[1] / 2);
                    if (r)
                        return "\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ";
                    return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + a[0] + ", " + a[1] + "));\n\n      int index = resTexRC.x * " + a[1] + " + resTexRC.y;\n      int r = 2 * (index / " + i + ");\n      int c = imod(index, " + i + ") * 2;\n\n      return ivec2(r, c);\n    }\n  "
                }(e, t, r);
            case 3:
                return function(e, n, t) {
                    if (t)
                        return "\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
                    var r = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)]
                      , a = Math.ceil(e[2] / 2)
                      , i = a * Math.ceil(e[1] / 2);
                    return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r[0] + ", " + r[1] + "));\n      int index = resTexRC.x * " + r[1] + " + resTexRC.y;\n\n      int b = index / " + i + ";\n      index -= b * " + i + ";\n\n      int r = 2 * (index / " + a + ");\n      int c = imod(index, " + a + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  "
                }(e, t, r);
            default:
                return function(e, n, t) {
                    if (t)
                        return "\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";
                    for (var r = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)], a = Math.ceil(e[e.length - 1] / 2), i = a * Math.ceil(e[e.length - 2] / 2), o = i, s = "", u = "b, r, c", l = 2; l < e.length - 1; l++)
                        s = "\n      int b" + l + " = index / " + (o *= e[e.length - l - 1]) + ";\n      index -= b" + l + " * " + o + ";\n    " + s,
                        u = "b" + l + ", " + u;
                    return "\n    ivec" + e.length + " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + r[0] + ", " + r[1] + "));\n      int index = resTexRC.x * " + r[1] + " + resTexRC.y;\n\n      " + s + "\n\n      int b = index / " + i + ";\n      index -= b * " + i + ";\n\n      int r = 2 * (index / " + a + ");\n      int c = imod(index, " + a + ") * 2;\n\n      return ivec" + e.length + "(" + u + ");\n    }\n  "
                }(e, t, r)
            }
        }(t.logicalShape, l, r.enableShapeUniforms),
        o = function(e) {
            return "\n    void setOutput(vec4 val) {\n      " + e.output + " = val;\n    }\n  "
        }(c)) : (i = function(e, t, r) {
            switch (e.length) {
            case 0:
                return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
            case 1:
                return function(e, n, t) {
                    if (1 === n[0])
                        return t ? "\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    " : "\n      int getOutputCoords() {\n        return int(resultUV.x * " + n[1] + ".0);\n      }\n    ";
                    if (1 === n[1])
                        return t ? "\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    " : "\n      int getOutputCoords() {\n        return int(resultUV.y * " + n[0] + ".0);\n      }\n    ";
                    if (t)
                        return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ";
                    return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n      return resTexRC.x * " + n[1] + " + resTexRC.y;\n    }\n  "
                }(0, t, r);
            case 2:
                return function(e, t, r) {
                    if (n.util.arraysEqual(e, t))
                        return r ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + t[0] + ", " + t[1] + "));\n      }\n    ";
                    if (1 === e[1])
                        return r ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + t[0] + ", " + t[1] + "));\n        int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";
                    if (1 === e[0])
                        return r ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + t[0] + ", " + t[1] + "));\n        int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";
                    if (r)
                        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ";
                    return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + t[0] + ", " + t[1] + "));\n      int index = resTexRC.x * " + t[1] + " + resTexRC.y;\n      int r = index / " + e[1] + ";\n      int c = index - r * " + e[1] + ";\n      return ivec2(r, c);\n    }\n  "
                }(e, t, r);
            case 3:
                return function(e, n, t) {
                    if (t) {
                        return "\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    " + xe(["r", "c", "d"], e) + "\n    return ivec3(r, c, d);\n  }\n"
                    }
                    var r = fe(["r", "c", "d"], e);
                    return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n      " + r + "\n      return ivec3(r, c, d);\n    }\n  "
                }(e, t, r);
            case 4:
                return function(e, n, t) {
                    if (t) {
                        return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      " + xe(["r", "c", "d", "d2"], e) + "\n      return ivec4(r, c, d, d2);\n    }\n  "
                    }
                    var r = fe(["r", "c", "d", "d2"], e);
                    return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n      " + r + "\n      return ivec4(r, c, d, d2);\n    }\n  "
                }(e, t, r);
            case 5:
                return a = t,
                i = fe(["r", "c", "d", "d2", "d3"], e),
                "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + a[0] + ",\n                             " + a[1] + "));\n\n      int index = resTexRC.x * " + a[1] + " + resTexRC.y;\n\n      " + i + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
            case 6:
                return function(e, n) {
                    var t = fe(["r", "c", "d", "d2", "d3", "d4"], e);
                    return "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n\n      " + t + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  "
                }(e, t);
            default:
                throw new Error(e.length + "-D output sampling is not yet supported")
            }
            var a, i
        }(t.logicalShape, l, r.enableShapeUniforms),
        o = function(e) {
            return "\n    void setOutput(float val) {\n      " + e.output + " = vec4(val, 0, 0, 0);\n    }\n  "
        }(c)),
        r.packedInputs && (p += Re),
        [p, d, o, s, i, u, r.userCode].join("\n")
    }
    function ye(e, t) {
        void 0 === t && (t = !1);
        var r = e.shapeInfo.logicalShape;
        switch (r.length) {
        case 0:
            return function(e, n) {
                var t = e.name
                  , r = "get" + t.charAt(0).toUpperCase() + t.slice(1);
                if (e.shapeInfo.isUniform)
                    return "float " + r + "() {return " + t + ";}";
                var a = u(e.shapeInfo.texShape, 2)
                  , i = a[0]
                  , o = a[1];
                if (1 === i && 1 === o)
                    return "\n      float " + r + "() {\n        return sampleTexture(" + t + ", halfCR);\n      }\n    ";
                var s = Te(t);
                if (n)
                    return "\n    float " + r + "() {\n      vec2 uv = uvFromFlat(" + t + "TexShape[0], " + t + "TexShape[1], " + s + ");\n      return sampleTexture(" + t + ", uv);\n    }\n  ";
                var l = u(e.shapeInfo.texShape, 2)
                  , c = l[0]
                  , d = l[1];
                return "\n    float " + r + "() {\n      vec2 uv = uvFromFlat(" + c + ", " + d + ", " + s + ");\n      return sampleTexture(" + t + ", uv);\n    }\n  "
            }(e, t);
        case 1:
            return function(e, n) {
                var t = e.name
                  , r = "get" + t.charAt(0).toUpperCase() + t.slice(1);
                if (e.shapeInfo.isUniform)
                    return "\n      float " + r + "(int index) {\n        " + Ee(e) + "\n      }\n    ";
                var a = e.shapeInfo.texShape
                  , i = a[0]
                  , o = a[1];
                if (1 === o && 1 === i)
                    return "\n      float " + r + "(int index) {\n        return sampleTexture(" + t + ", halfCR);\n      }\n    ";
                var s = Te(t);
                if (1 === o)
                    return n ? "\n      float " + r + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + s + ") + 0.5) / float(" + t + "TexShape[0]));\n        return sampleTexture(" + t + ", uv);\n      }\n    " : "\n      float " + r + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + s + ") + 0.5) / " + i + ".0);\n        return sampleTexture(" + t + ", uv);\n      }\n    ";
                if (1 === i)
                    return n ? "\n      float " + r + "(int index) {\n        vec2 uv = vec2((float(index + " + s + ") + 0.5) / float(" + t + "TexShape[1]), 0.5);\n        return sampleTexture(" + t + ", uv);\n      }\n    " : "\n      float " + r + "(int index) {\n        vec2 uv = vec2((float(index + " + s + ") + 0.5) / " + o + ".0, 0.5);\n        return sampleTexture(" + t + ", uv);\n      }\n    ";
                if (n)
                    return "\n    float " + r + "(int index) {\n      vec2 uv = uvFromFlat(" + t + "TexShape[0], " + t + "TexShape[1], index + " + s + ");\n      return sampleTexture(" + t + ", uv);\n    }\n  ";
                return "\n    float " + r + "(int index) {\n      vec2 uv = uvFromFlat(" + i + ", " + o + ", index + " + s + ");\n      return sampleTexture(" + t + ", uv);\n    }\n  "
            }(e, t);
        case 2:
            return function(e, t) {
                var r = e.shapeInfo.logicalShape
                  , a = e.name
                  , i = "get" + a.charAt(0).toUpperCase() + a.slice(1)
                  , o = e.shapeInfo.texShape;
                if (null != o && n.util.arraysEqual(r, o)) {
                    if (t)
                        return "\n      float " + i + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a + "TexShape[1], " + a + "TexShape[0]);\n        return sampleTexture(" + a + ", uv);\n      }\n    ";
                    var s = o[0];
                    return "\n    float " + i + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + o[1] + ".0, " + s + ".0);\n      return sampleTexture(" + a + ", uv);\n    }\n  "
                }
                var u = n.util.squeezeShape(r)
                  , l = u.newShape
                  , c = u.keptDims
                  , d = l;
                if (d.length < r.length) {
                    var p = ["row", "col"];
                    return "\n      " + ye(Fe(e, d), t) + "\n      float " + i + "(int row, int col) {\n        return " + i + "(" + _e(p, c) + ");\n      }\n    "
                }
                if (e.shapeInfo.isUniform)
                    return "\n      float " + i + "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(" + r[1] + ", 1)));\n        " + Ee(e) + "\n      }\n    ";
                var h = o[0]
                  , f = o[1]
                  , x = Te(a);
                if (1 === f)
                    return t ? "\n      float " + i + "(int row, int col) {\n        float index = dot(vec3(row, col, " + x + "), vec3(" + a + "Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(" + a + "TexShape[0]));\n        return sampleTexture(" + a + ", uv);\n      }\n    " : "\n    float " + i + "(int row, int col) {\n      float index = dot(vec3(row, col, " + x + "), vec3(" + r[1] + ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + h + ".0);\n      return sampleTexture(" + a + ", uv);\n    }\n  ";
                if (1 === h)
                    return t ? "\n      float " + i + "(int row, int col) {\n        float index = dot(vec3(row, col, " + x + "), vec3(" + a + "Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(" + a + "TexShape[1]), 0.5);\n        return sampleTexture(" + a + ", uv);\n      }\n    " : "\n    float " + i + "(int row, int col) {\n      float index = dot(vec3(row, col, " + x + "), vec3(" + r[1] + ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / " + f + ".0, 0.5);\n      return sampleTexture(" + a + ", uv);\n    }\n  ";
                if (t)
                    return "\n      float " + i + "(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + a + "Shape[1] + col + " + x + ";\n        vec2 uv = uvFromFlat(" + a + "TexShape[0], " + a + "TexShape[1], index);\n        return sampleTexture(" + a + ", uv);\n      }\n    ";
                return "\n  float " + i + "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * " + r[1] + " + col + " + x + ";\n    vec2 uv = uvFromFlat(" + h + ", " + f + ", index);\n    return sampleTexture(" + a + ", uv);\n  }\n"
            }(e, t);
        case 3:
            return function(e, t) {
                var r = e.shapeInfo.logicalShape
                  , a = e.name
                  , i = "get" + a.charAt(0).toUpperCase() + a.slice(1)
                  , o = r[1] * r[2]
                  , s = r[2]
                  , u = n.util.squeezeShape(r)
                  , l = u.newShape
                  , c = u.keptDims
                  , d = l;
                if (d.length < r.length) {
                    var p = ["row", "col", "depth"];
                    return "\n        " + ye(Fe(e, d), t) + "\n        float " + i + "(int row, int col, int depth) {\n          return " + i + "(" + _e(p, c) + ");\n        }\n      "
                }
                if (e.shapeInfo.isUniform)
                    return "\n      float " + i + "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(" + o + ", " + s + ", 1)));\n        " + Ee(e) + "\n      }\n    ";
                var h = e.shapeInfo.texShape
                  , f = h[0]
                  , x = h[1]
                  , v = e.shapeInfo.flatOffset;
                if (x === o && null == v)
                    return t ? "\n      float " + i + "(int row, int col, int depth) {\n        int stride1 = " + a + "Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + a + "TexShape[1], " + a + "TexShape[0]);\n        return sampleTexture(" + a + ", uv);\n      }\n    " : "\n        float " + i + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + s + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + x + ".0, " + f + ".0);\n          return sampleTexture(" + a + ", uv);\n        }\n      ";
                if (x === s && null == v)
                    return t ? "\n      float " + i + "(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(" + a + "Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + a + "TexShape[1], " + a + "TexShape[0]);\n        return sampleTexture(" + a + ", uv);\n      }\n    " : "\n    float " + i + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + r[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + x + ".0, " + f + ".0);\n      return sampleTexture(" + a + ", uv);\n    }\n  ";
                var m = Te(a);
                if (t)
                    return "\n    float " + i + "(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = " + a + "Shape[1] * " + a + "Shape[2];\n      int stride1 = " + a + "Shape[2];\n      int index = row * " + o + " + col * " + s + " + depth + " + m + ";\n      vec2 uv = uvFromFlat(" + a + "TexShape[0], " + a + "TexShape[1], index);\n      return sampleTexture(" + a + ", uv);\n    }\n    ";
                return "\n      float " + i + "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + o + " + col * " + s + " + depth + " + m + ";\n        vec2 uv = uvFromFlat(" + f + ", " + x + ", index);\n        return sampleTexture(" + a + ", uv);\n      }\n  "
            }(e, t);
        case 4:
            return function(e, t) {
                var r = e.shapeInfo.logicalShape
                  , a = e.name
                  , i = "get" + a.charAt(0).toUpperCase() + a.slice(1)
                  , o = r[3]
                  , s = r[2] * o
                  , u = r[1] * s
                  , l = n.util.squeezeShape(r)
                  , c = l.newShape
                  , d = l.keptDims;
                if (c.length < r.length) {
                    var p = ["row", "col", "depth", "depth2"];
                    return "\n      " + ye(Fe(e, c), t) + "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        return " + i + "(" + _e(p, d) + ");\n      }\n    "
                }
                if (e.shapeInfo.isUniform)
                    return "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(" + u + ", " + s + ", " + o + ", 1)));\n        " + Ee(e) + "\n      }\n    ";
                var h = e.shapeInfo.flatOffset
                  , f = e.shapeInfo.texShape
                  , x = f[0]
                  , v = f[1]
                  , m = "int stride2 = " + a + "Shape[3];"
                  , g = "int stride1 = " + a + "Shape[2] * stride2;"
                  , b = "int stride0 = " + a + "Shape[1] * stride1;";
                if (v === u && null == h)
                    return t ? "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        " + m + "\n        " + g + "\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + a + "TexShape[1], " + a + "TexShape[0]);\n        return sampleTexture(" + a + ", uv);\n      }\n    " : "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(" + s + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v + ".0, " + x + ".0);\n        return sampleTexture(" + a + ", uv);\n      }\n    ";
                if (v === o && null == h)
                    return t ? "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + a + "Shape[1] * " + a + "Shape[2], " + a + "Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + a + "TexShape[1], " + a + "TexShape[0]);\n        return sampleTexture(" + a + ", uv);\n      }\n    " : "\n      float " + i + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + r[1] * r[2] + ", " + r[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v + ".0, " + x + ".0);\n        return sampleTexture(" + a + ", uv);\n      }\n    ";
                var C = Te(a);
                if (t)
                    return "\n    float " + i + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      " + m + "\n      " + g + "\n      " + b + "\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(" + a + "TexShape[0], " + a + "TexShape[1], index + " + C + ");\n      return sampleTexture(" + a + ", uv);\n    }\n  ";
                return "\n    float " + i + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + u + " + col * " + s + " +\n          depth * " + o + " + depth2;\n      vec2 uv = uvFromFlat(" + x + ", " + v + ", index + " + C + ");\n      return sampleTexture(" + a + ", uv);\n    }\n  "
            }(e, t);
        case 5:
            return function(e) {
                var t = e.shapeInfo.logicalShape
                  , r = e.name
                  , a = "get" + r.charAt(0).toUpperCase() + r.slice(1)
                  , i = t[4]
                  , o = t[3] * i
                  , s = t[2] * o
                  , u = t[1] * s
                  , l = n.util.squeezeShape(t)
                  , c = l.newShape
                  , d = l.keptDims;
                if (c.length < t.length) {
                    var p = ["row", "col", "depth", "depth2", "depth3"];
                    return "\n      " + ye(Fe(e, c)) + "\n      float " + a + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + a + "(" + _e(p, d) + ");\n      }\n    "
                }
                if (e.shapeInfo.isUniform)
                    return "\n      float " + a + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + u + ", " + s + ", " + o + ", " + i + ")) +\n          depth3;\n        " + Ee(e) + "\n      }\n    ";
                var h = e.shapeInfo.flatOffset
                  , f = e.shapeInfo.texShape
                  , x = f[0]
                  , v = f[1];
                if (v === u && null == h)
                    return "\n      float " + a + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(" + s + ", " + o + ", " + i + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v + ".0, " + x + ".0);\n        return sampleTexture(" + r + ", uv);\n      }\n    ";
                if (v === i && null == h)
                    return "\n      float " + a + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + t[1] * t[2] * t[3] + ",\n               " + t[2] * t[3] + ", " + t[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v + ".0, " + x + ".0);\n        return sampleTexture(" + r + ", uv);\n      }\n    ";
                var m = Te(r);
                return "\n    float " + a + "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + u + " + col * " + s + " + depth * " + o + " +\n          depth2 * " + i + " + depth3 + " + m + ";\n      vec2 uv = uvFromFlat(" + x + ", " + v + ", index);\n      return sampleTexture(" + r + ", uv);\n    }\n  "
            }(e);
        case 6:
            return function(e) {
                var t = e.shapeInfo.logicalShape
                  , r = e.name
                  , a = "get" + r.charAt(0).toUpperCase() + r.slice(1)
                  , i = n.util.squeezeShape(t)
                  , o = i.newShape
                  , s = i.keptDims;
                if (o.length < t.length) {
                    var u = ["row", "col", "depth", "depth2", "depth3", "depth4"];
                    return "\n      " + ye(Fe(e, o)) + "\n      float " + a + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + a + "(" + _e(u, s) + ");\n      }\n    "
                }
                var l = t[5]
                  , c = t[4] * l
                  , d = t[3] * c
                  , p = t[2] * d
                  , h = t[1] * p;
                if (e.shapeInfo.isUniform)
                    return "\n      float " + a + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + h + ", " + p + ", " + d + ", " + c + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + l + ", 1)));\n        " + Ee(e) + "\n      }\n    ";
                var f = e.shapeInfo.flatOffset
                  , x = e.shapeInfo.texShape
                  , v = x[0]
                  , m = x[1];
                if (m === h && null == f)
                    return "\n      float " + a + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(" + p + ", " + d + ", " + c + ", " + l + ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + m + ".0, " + v + ".0);\n        return sampleTexture(" + r + ", uv);\n      }\n    ";
                if (m === l && null == f)
                    return "\n      float " + a + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(" + t[1] * t[2] * t[3] * t[4] + ",\n               " + t[2] * t[3] * t[4] + ",\n               " + t[3] * t[4] + ",\n               " + t[4] + ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + m + ".0, " + v + ".0);\n        return sampleTexture(" + r + ", uv);\n      }\n    ";
                var g = Te(r);
                return "\n    float " + a + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + h + " + col * " + p + " + depth * " + d + " +\n          depth2 * " + c + " + depth3 * " + l + " + depth4 + " + g + ";\n      vec2 uv = uvFromFlat(" + v + ", " + m + ", index);\n      return sampleTexture(" + r + ", uv);\n    }\n  "
            }(e);
        default:
            throw new Error(r.length + "-D input sampling is not yet supported")
        }
    }
    function ke(e, t) {
        var r, a, i;
        switch (e.shapeInfo.logicalShape.length) {
        case 0:
            return r = e.name,
            a = "get" + r.charAt(0).toUpperCase() + r.slice(1),
            i = he(),
            "\n    vec4 " + a + "() {\n      return " + i.texture2D + "(" + r + ", halfCR);\n    }\n  ";
        case 1:
            return function(e, n) {
                var t = e.name
                  , r = "get" + t.charAt(0).toUpperCase() + t.slice(1)
                  , a = e.shapeInfo.texShape
                  , i = he();
                if (n)
                    return "\n    vec4 " + r + "(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(" + t + "TexShape[0]) / 2.0), ceil(float(" + t + "TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return " + i.texture2D + "(" + t + ", uv);\n    }\n  ";
                var o = [Math.ceil(a[0] / 2), Math.ceil(a[1] / 2)];
                return "\n    vec4 " + r + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + o[0] + ", " + o[1] + ", index);\n      return " + i.texture2D + "(" + t + ", uv);\n    }\n  "
            }(e, t);
        case 2:
            return function(e, t) {
                var r = e.shapeInfo.logicalShape
                  , a = e.name
                  , i = "get" + a.charAt(0).toUpperCase() + a.slice(1)
                  , o = e.shapeInfo.texShape
                  , s = o[0]
                  , u = o[1]
                  , l = he();
                if (null != o && n.util.arraysEqual(r, o))
                    return t ? "\n      vec4 " + i + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a + "TexShape[1], " + a + "TexShape[0]);\n\n        return " + l.texture2D + "(" + a + ", uv);\n      }\n    " : "\n      vec4 " + i + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + u + ".0, " + s + ".0);\n\n        return " + l.texture2D + "(" + a + ", uv);\n      }\n    ";
                if (t)
                    return "\n    vec4 " + i + "(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(" + a + "TexShape[0]) / 2.0), ceil(float(" + a + "TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(" + a + "Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return " + l.texture2D + "(" + a + ", uv);\n    }\n  ";
                var c = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)]
                  , d = Math.ceil(r[1] / 2);
                return "\n    vec4 " + i + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + d + ", " + c[0] + ", " + c[1] + ", row, col);\n      return " + l.texture2D + "(" + a + ", uv);\n    }\n  "
            }(e, t);
        case 3:
            return function(e, n) {
                var t = e.shapeInfo.logicalShape
                  , r = e.name
                  , a = "get" + r.charAt(0).toUpperCase() + r.slice(1)
                  , i = e.shapeInfo.texShape
                  , o = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)];
                if (1 === t[0]) {
                    var s = [1, 2]
                      , u = ["b", "row", "col"];
                    return "\n        " + ke(Fe(e, t.slice(1)), n) + "\n        vec4 " + a + "(int b, int row, int col) {\n          return " + a + "(" + _e(u, s) + ");\n        }\n      "
                }
                var l = he();
                if (n)
                    return "\n    vec4 " + a + "(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(" + r + "TexShape[0]) / 2.0), ceil(float(" + r + "TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(" + r + "Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(" + r + "Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return " + l.texture2D + "(" + r + ", uv);\n    }\n  ";
                var c = o[0]
                  , d = o[1]
                  , p = Math.ceil(t[2] / 2)
                  , h = p * Math.ceil(t[1] / 2);
                return "\n    vec4 " + a + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + c + ", " + d + ", " + h + ", " + p + ", b, row, col);\n      return " + l.texture2D + "(" + r + ", uv);\n    }\n  "
            }(e, t);
        default:
            return function(e, n) {
                var t = e.name
                  , r = "get" + t.charAt(0).toUpperCase() + t.slice(1)
                  , a = he();
                if (n)
                    return "\n    vec4 " + r + "(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(" + t + "Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(" + t + "Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= " + t + "Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(" + t + "TexShape[0]) / 2.0), ceil(float(" + t + "TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return " + a.texture2D + "(" + t + ", uv);\n    }\n  ";
                for (var i = e.shapeInfo.logicalShape, o = i.length, s = e.shapeInfo.texShape, u = [Math.ceil(s[0] / 2), Math.ceil(s[1] / 2)], l = u[0], c = u[1], d = Math.ceil(i[o - 1] / 2), p = d * Math.ceil(i[o - 2] / 2), h = "int b, int row, int col", f = "b * " + p + " + (row / 2) * " + d + " + (col / 2)", x = 2; x < o - 1; x++)
                    h = "int b" + x + ", " + h,
                    f = "b" + x + " * " + (p *= i[o - x - 1]) + " + " + f;
                return "\n    vec4 " + r + "(" + h + ") {\n      int index = " + f + ";\n      int texR = index / " + c + ";\n      int texC = index - texR * " + c + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + c + ", " + l + ");\n      return " + a.texture2D + "(" + t + ", uv);\n    }\n  "
            }(e, t)
        }
    }
    var Ie = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n"
      , we = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n"
      , Se = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n"
      , Re = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";
    function Te(e) {
        return "offset" + e
    }
    function Ee(e) {
        var t = e.name
          , r = n.util.sizeFromShape(e.shapeInfo.logicalShape);
        return r < 2 ? "return " + t + ";" : "\n    for (int i = 0; i < " + r + "; i++) {\n      if (i == index) {\n        return " + t + "[i];\n      }\n    }\n  "
    }
    function Ne(e) {
        if (e <= 1)
            return "int";
        if (2 === e)
            return "ivec2";
        if (3 === e)
            return "ivec3";
        if (4 === e)
            return "ivec4";
        if (5 === e)
            return "ivec5";
        if (6 === e)
            return "ivec6";
        throw Error("GPU for rank " + e + " is not yet supported")
    }
    function Ae(e, t, r) {
        var a = n.util.squeezeShape(t)
          , i = a.newShape
          , o = a.keptDims
          , s = t.length
          , u = e && 3 === s && 1 === t[0]
          , l = u ? t.slice(1) : i
          , c = !e && s > 1 && !n.util.arraysEqual(t, r) && i.length < s || u;
        return {
            useSqueezeShape: c,
            uniformShape: c ? l : t,
            keptDims: o
        }
    }
    function Fe(e, n) {
        var t = JSON.parse(JSON.stringify(e));
        return t.shapeInfo.logicalShape = n,
        t
    }
    function _e(e, n) {
        return n.map((function(n) {
            return e[n]
        }
        )).join(", ")
    }
    function Oe(e, t) {
        if (e.length !== t.length)
            throw Error("Binary was compiled with " + e.length + " inputs, but was executed with " + t.length + " inputs");
        e.forEach((function(e, r) {
            var a = e.logicalShape
              , i = t[r]
              , o = i.shape;
            if (!n.util.arraysEqual(a, o))
                throw Error("Binary was compiled with different shapes than the current args. Shapes " + a + " and " + o + " must match");
            if (!e.isUniform || !i.isUniform) {
                var s = e.texShape
                  , u = i.isUniform ? null : i.texData.texShape;
                if (!n.util.arraysEqual(s, u))
                    throw Error("Binary was compiled with different texture shapes than the current args. Shape " + s + " and " + u + " must match")
            }
        }
        ))
    }
    function De(e) {
        return n.env().getBool("WEBGL_USE_SHAPES_UNIFORMS") && e <= 4
    }
    var Pe = function(e) {
        this.variableNames = ["A"],
        this.packedInputs = !1,
        this.packedOutput = !0,
        this.outPackingScheme = c.DENSE,
        this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var n = he();
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length),
        this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + (this.enableShapeUniforms ? xe(["r", "c", "d"], e) : fe(["r", "c", "d"], e)) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        " + n.output + " = result;\n      }\n    "
    }
      , Le = function(e) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outPackingScheme = c.DENSE,
        this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var n = he();
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length),
        this.userCode = "\n      ivec3 outCoordsFromFlatIndex(int index) {\n        " + (this.enableShapeUniforms ? xe(["r", "c", "d"], e) : fe(["r", "c", "d"], e)) + "\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        " + n.output + " = result;\n      }\n    "
    }
      , Be = function(e) {
        this.variableNames = ["A"],
        this.outTexUsage = d.DOWNLOAD;
        var n = he();
        this.outputShape = e,
        this.userCode = "\n      " + ge + "\n\n      void main() {\n        float x = getAAtOutCoords();\n        " + n.output + " = encode_float(x);\n      }\n    "
    }
      , Ve = function(e) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !1,
        this.outTexUsage = d.DOWNLOAD;
        var n = he();
        this.outputShape = e,
        this.userCode = "\n      " + ge + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        " + n.output + " = encode_float(x);\n      }\n    "
    }
      , Ue = function(e, n) {
        void 0 === n && (n = !1),
        this.variableNames = ["A"],
        this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var t = he();
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length);
        var r = "result";
        n && (r = "floor(result * 255. + 0.5)"),
        this.userCode = "\n      " + (this.enableShapeUniforms ? "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n" : me(e)) + "\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n\n        int r = flatIndex / texShape[1];\n        int c = imod(flatIndex, texShape[1]);\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n        vec4 values = " + t.texture2D + "(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        " + t.output + " = vec4(" + r + ", 0., 0., 0.);\n      }\n    "
    }
      , We = function(e, n) {
        void 0 === n && (n = !1),
        this.variableNames = ["A"],
        this.packedInputs = !1,
        this.packedOutput = !0,
        this.customUniforms = [{
            name: "texShape",
            type: "ivec2"
        }];
        var t = he();
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length);
        var r = ""
          , a = "result";
        n && (a = "floor(result * 255. + 0.5)");
        for (var i = 0; i <= 1; i++)
            for (var o = 0; o <= 1; o++) {
                var s = 2 * i + o;
                r += "\n          localCoords = coords;\n          if(localCoords[2] + " + o + " < " + (this.enableShapeUniforms ? "outShape[2]" : "" + e[2]) + ") {\n          localCoords[2] += " + o + ";\n          if (localCoords[1] + " + i + " < " + (this.enableShapeUniforms ? "outShape[1]" : "" + e[1]) + ") {\n            localCoords[1] += " + i + ";\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = " + t.texture2D + "(A, uv);\n\n            if (offset == 0) {\n              result[" + s + "] = values[0];\n            } else if (offset == 1) {\n              result[" + s + "] = values[1];\n            } else if (offset == 2) {\n              result[" + s + "] = values[2];\n            } else {\n              result[" + s + "] = values[3];\n            }\n          }\n        }\n        "
            }
        this.userCode = "\n        " + (this.enableShapeUniforms ? "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n" : me(e)) + "\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          " + r + "\n\n          " + t.output + " = " + a + ";\n        }\n    "
    };
    function Me(e) {
        var n = he();
        return S(e, n.version + "\n    precision highp float;\n    " + n.attribute + " vec3 clipSpacePos;\n    " + n.attribute + " vec2 uv;\n    " + n.varyingVs + " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")
    }
    function Ge(e) {
        return O(e, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]))
    }
    function ze(e) {
        return D(e, new Uint16Array([0, 1, 2, 2, 1, 3]))
    }
    function Xe(e, t, r, a, i, o) {
        L(t, r);
        var s = P(e)
          , u = e.TEXTURE_2D;
        return y(e, (function() {
            return e.bindTexture(u, s)
        }
        )),
        y(e, (function() {
            return e.texParameteri(u, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE)
        }
        )),
        y(e, (function() {
            return e.texParameteri(u, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
        }
        )),
        y(e, (function() {
            return e.texParameteri(u, e.TEXTURE_MIN_FILTER, e.NEAREST)
        }
        )),
        y(e, (function() {
            return e.texParameteri(u, e.TEXTURE_MAG_FILTER, e.NEAREST)
        }
        )),
        1 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function() {
            return e.texImage2D(u, 0, a, t, r, 0, i, o, null)
        }
        )) : y(e, (function() {
            return e.texStorage2D(u, 1, a, t, r)
        }
        )),
        y(e, (function() {
            return e.bindTexture(e.TEXTURE_2D, null)
        }
        )),
        {
            texture: s,
            texShape: [r, t]
        }
    }
    function He(e) {
        return e.internalFormatFloat
    }
    function je(e, n, t, r) {
        var a = u(m(n, t), 2);
        return Xe(e, a[0], a[1], He(r), r.textureFormatFloat, e.FLOAT)
    }
    function Ke(e) {
        return e.internalFormatHalfFloat
    }
    function qe(e, n, t, r) {
        var a = u(m(n, t), 2);
        return Xe(e, a[0], a[1], Ke(r), r.textureFormatFloat, r.textureTypeHalfFloat)
    }
    function Ye(e) {
        return e.downloadTextureFormat
    }
    function Qe(e, n, t, r) {
        var a = u(m(n, t), 2);
        return Xe(e, a[0], a[1], Ye(r), e.RGBA, e.UNSIGNED_BYTE)
    }
    function Ze(e) {
        return e.internalFormatPackedFloat
    }
    function Je(e, n, t, r) {
        var a = u(b(n, t), 2);
        return Xe(e, a[0], a[1], Ze(r), e.RGBA, e.FLOAT)
    }
    function $e(e) {
        return e.internalFormatPackedHalfFloat
    }
    function en(e, n, t, r) {
        var a = u(b(n, t), 2);
        return Xe(e, a[0], a[1], $e(r), e.RGBA, r.textureTypeHalfFloat)
    }
    function nn(e, n, t) {
        return y(e, (function() {
            return e.bindBuffer(e.ARRAY_BUFFER, t)
        }
        )),
        V(e, n, "clipSpacePos", t, 3, 20, 0) && V(e, n, "uv", t, 2, 20, 12)
    }
    function tn(e, t, r, a, i, o) {
        var s, u, l;
        y(e, (function() {
            return e.bindTexture(e.TEXTURE_2D, t)
        }
        )),
        i instanceof Uint8Array ? (s = new Uint8Array(r * a * 4),
        u = e.UNSIGNED_BYTE,
        l = e.RGBA) : (s = new Float32Array(r * a * 4),
        u = e.FLOAT,
        l = o.internalFormatPackedFloat),
        s.set(i),
        2 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function() {
            return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, a, e.RGBA, u, s)
        }
        )) : y(e, (function() {
            return e.texImage2D(e.TEXTURE_2D, 0, l, r, a, 0, e.RGBA, u, s)
        }
        )),
        y(e, (function() {
            return e.bindTexture(e.TEXTURE_2D, null)
        }
        ))
    }
    function rn(e, t, r) {
        y(e, (function() {
            return e.bindTexture(e.TEXTURE_2D, t)
        }
        )),
        r.data instanceof Uint8Array ? 2 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function() {
            return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, e.RGBA, e.UNSIGNED_BYTE, r.data)
        }
        )) : y(e, (function() {
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r.width, r.height, 0, e.RGBA, e.UNSIGNED_BYTE, r.data)
        }
        )) : 2 === n.env().getNumber("WEBGL_VERSION") ? y(e, (function() {
            return e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, r)
        }
        )) : y(e, (function() {
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r)
        }
        )),
        y(e, (function() {
            return e.bindTexture(e.TEXTURE_2D, null)
        }
        ))
    }
    function an(e, n, t, r) {
        var a = e.createBuffer();
        y(e, (function() {
            return e.bindBuffer(e.PIXEL_PACK_BUFFER, a)
        }
        ));
        var i = 16 * n * t;
        return y(e, (function() {
            return e.bufferData(e.PIXEL_PACK_BUFFER, i, e.STREAM_READ)
        }
        )),
        y(e, (function() {
            return e.readPixels(0, 0, t, n, e.RGBA, e.FLOAT, 0)
        }
        )),
        y(e, (function() {
            return e.bindBuffer(e.PIXEL_PACK_BUFFER, null)
        }
        )),
        a
    }
    function on(e, n, t) {
        var r = e
          , a = new Float32Array(t);
        return r.bindBuffer(r.PIXEL_PACK_BUFFER, n),
        r.getBufferSubData(r.PIXEL_PACK_BUFFER, 0, a),
        r.bindBuffer(r.PIXEL_PACK_BUFFER, null),
        a
    }
    function sn(e, n, t, r) {
        var a = u(m(n, t), 2)
          , i = a[0]
          , o = a[1]
          , s = new Uint8Array(n * t * 4);
        return y(e, (function() {
            return e.readPixels(0, 0, i, o, r.downloadTextureFormat, e.UNSIGNED_BYTE, s)
        }
        )),
        new Float32Array(s.buffer)
    }
    function un(e, n, t, r, a, i, o, s) {
        var l = e
          , c = new Float32Array(function(e, n) {
            var t = u(b(e, n), 2);
            return t[0] * t[1] * 4
        }(i, o));
        return l.bindBuffer(l.PIXEL_PACK_BUFFER, n),
        l.getBufferSubData(l.PIXEL_PACK_BUFFER, 0, c),
        l.bindBuffer(l.PIXEL_PACK_BUFFER, null),
        c
    }
    function ln(e, n, t) {
        var r = new Float32Array(n * t * 4);
        return y(e, (function() {
            return e.readPixels(0, 0, t, n, e.RGBA, e.FLOAT, r)
        }
        )),
        r
    }
    var cn = {
        __proto__: null,
        createVertexShader: Me,
        createVertexBuffer: Ge,
        createIndexBuffer: ze,
        getInternalFormatForFloat32MatrixTexture: He,
        createFloat32MatrixTexture: je,
        getInternalFormatForFloat16MatrixTexture: Ke,
        createFloat16MatrixTexture: qe,
        getInternalFormatForUnsignedBytesMatrixTexture: Ye,
        createUnsignedBytesMatrixTexture: Qe,
        getInternalFormatForPackedMatrixTexture: Ze,
        createPackedMatrixTexture: Je,
        getInternalFormatForFloat16PackedMatrixTexture: $e,
        createFloat16PackedMatrixTexture: en,
        bindVertexProgramAttributeStreams: nn,
        uploadDenseMatrixToTexture: tn,
        uploadPixelDataToTexture: rn,
        createBufferFromOutputTexture: an,
        downloadFloat32MatrixFromBuffer: on,
        downloadByteEncodedFloatMatrixFromOutputTexture: sn,
        downloadPackedMatrixFromBuffer: un,
        downloadMatrixFromPackedOutputTexture: ln
    }
      , dn = function() {
        function e(e) {
            this.outputTexture = null,
            this.program = null,
            this.disposed = !1,
            this.vertexAttrsAreBound = !1,
            this.itemsToPoll = [];
            var t = n.env().getNumber("WEBGL_VERSION");
            null != e ? (this.gl = e,
            x(t, e)) : this.gl = v(t);
            var r = "WEBGL_color_buffer_float"
              , a = "EXT_color_buffer_half_float";
            if (1 === n.env().getNumber("WEBGL_VERSION")) {
                var i = "OES_texture_half_float";
                if (this.textureFloatExtension = w(this.gl, "OES_texture_float"),
                ae(this.gl, i))
                    this.textureHalfFloatExtension = w(this.gl, i);
                else if (n.env().get("WEBGL_FORCE_F16_TEXTURES"))
                    throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");
                if (this.colorBufferFloatExtension = this.gl.getExtension(r),
                ae(this.gl, a))
                    this.colorBufferHalfFloatExtension = w(this.gl, a);
                else if (n.env().get("WEBGL_FORCE_F16_TEXTURES"))
                    throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")
            } else if (r = "EXT_color_buffer_float",
            ae(this.gl, r))
                this.colorBufferFloatExtension = this.gl.getExtension(r);
            else {
                if (!ae(this.gl, a))
                    throw new Error("GL context does not support color renderable floats");
                this.colorBufferHalfFloatExtension = this.gl.getExtension(a)
            }
            this.vertexBuffer = Ge(this.gl),
            this.indexBuffer = ze(this.gl),
            this.framebuffer = B(this.gl),
            this.textureConfig = C(this.gl, this.textureHalfFloatExtension)
        }
        return Object.defineProperty(e.prototype, "debug", {
            get: function() {
                return n.env().getBool("DEBUG")
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.dispose = function() {
            var e = this;
            if (!this.disposed) {
                null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),
                null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
                var n = this.gl;
                y(n, (function() {
                    return n.finish()
                }
                )),
                y(n, (function() {
                    return n.bindFramebuffer(n.FRAMEBUFFER, null)
                }
                )),
                y(n, (function() {
                    return n.deleteFramebuffer(e.framebuffer)
                }
                )),
                y(n, (function() {
                    return n.bindBuffer(n.ARRAY_BUFFER, null)
                }
                )),
                y(n, (function() {
                    return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null)
                }
                )),
                y(n, (function() {
                    return n.deleteBuffer(e.indexBuffer)
                }
                )),
                this.disposed = !0
            }
        }
        ,
        e.prototype.createFloat32MatrixTexture = function(e, n) {
            return this.throwIfDisposed(),
            je(this.gl, e, n, this.textureConfig)
        }
        ,
        e.prototype.createFloat16MatrixTexture = function(e, n) {
            return this.throwIfDisposed(),
            qe(this.gl, e, n, this.textureConfig)
        }
        ,
        e.prototype.createUnsignedBytesMatrixTexture = function(e, n) {
            return this.throwIfDisposed(),
            Qe(this.gl, e, n, this.textureConfig)
        }
        ,
        e.prototype.uploadPixelDataToTexture = function(e, n) {
            this.throwIfDisposed(),
            rn(this.gl, e, n)
        }
        ,
        e.prototype.uploadDenseMatrixToTexture = function(e, n, t, r) {
            this.throwIfDisposed(),
            tn(this.gl, e, n, t, r, this.textureConfig)
        }
        ,
        e.prototype.createFloat16PackedMatrixTexture = function(e, n) {
            return this.throwIfDisposed(),
            en(this.gl, e, n, this.textureConfig)
        }
        ,
        e.prototype.createPackedMatrixTexture = function(e, n) {
            return this.throwIfDisposed(),
            Je(this.gl, e, n, this.textureConfig)
        }
        ,
        e.prototype.deleteMatrixTexture = function(e) {
            var n = this;
            this.throwIfDisposed(),
            this.outputTexture === e && (X(this.gl, this.framebuffer),
            this.outputTexture = null),
            y(this.gl, (function() {
                return n.gl.deleteTexture(e)
            }
            ))
        }
        ,
        e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function(e, n, t) {
            var r = this;
            return this.downloadMatrixDriver(e, (function() {
                return sn(r.gl, n, t, r.textureConfig)
            }
            ))
        }
        ,
        e.prototype.downloadPackedMatrixFromBuffer = function(e, n, t, r, a, i) {
            return un(this.gl, e, 0, 0, 0, a, i, this.textureConfig)
        }
        ,
        e.prototype.downloadFloat32MatrixFromBuffer = function(e, n) {
            return on(this.gl, e, n)
        }
        ,
        e.prototype.createBufferFromTexture = function(e, n, t) {
            this.bindTextureToFrameBuffer(e);
            var r = an(this.gl, n, t, this.textureConfig);
            return this.unbindTextureToFrameBuffer(),
            r
        }
        ,
        e.prototype.createAndWaitForFence = function() {
            var e = this.createFence(this.gl);
            return this.pollFence(e)
        }
        ,
        e.prototype.createFence = function(e) {
            var t, r, a = this;
            if (n.env().getBool("WEBGL_FENCE_API_ENABLED")) {
                var i = e
                  , o = i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE, 0);
                e.flush(),
                r = function() {
                    var e = i.clientWaitSync(o, 0, 0);
                    return e === i.ALREADY_SIGNALED || e === i.CONDITION_SATISFIED
                }
                ,
                t = o
            } else
                n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") > 0 ? (t = this.beginQuery(),
                this.endQuery(),
                r = function() {
                    return a.isQueryAvailable(t, n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
                }
                ) : r = function() {
                    return !0
                }
                ;
            return {
                query: t,
                isFencePassed: r
            }
        }
        ,
        e.prototype.downloadMatrixFromPackedTexture = function(e, n, t) {
            var r = this;
            return this.downloadMatrixDriver(e, (function() {
                return ln(r.gl, n, t)
            }
            ))
        }
        ,
        e.prototype.createProgram = function(e) {
            var n = this;
            this.throwIfDisposed();
            var t = this.gl;
            null == this.vertexShader && (this.vertexShader = Me(t));
            var r = A(t);
            return y(t, (function() {
                return t.attachShader(r, n.vertexShader)
            }
            )),
            y(t, (function() {
                return t.attachShader(r, e)
            }
            )),
            F(t, r),
            this.debug && _(t, r),
            this.vertexAttrsAreBound || (this.setProgram(r),
            this.vertexAttrsAreBound = nn(t, this.program, this.vertexBuffer)),
            r
        }
        ,
        e.prototype.deleteProgram = function(e) {
            var n = this;
            this.throwIfDisposed(),
            e === this.program && (this.program = null),
            null != e && y(this.gl, (function() {
                return n.gl.deleteProgram(e)
            }
            ))
        }
        ,
        e.prototype.setProgram = function(e) {
            var n = this;
            this.throwIfDisposed(),
            this.program = e,
            null != this.program && this.debug && _(this.gl, this.program),
            y(this.gl, (function() {
                return n.gl.useProgram(e)
            }
            ))
        }
        ,
        e.prototype.getUniformLocation = function(e, n, t) {
            return void 0 === t && (t = !0),
            this.throwIfDisposed(),
            t ? W(this.gl, e, n) : M(this.gl, e, n)
        }
        ,
        e.prototype.getAttributeLocation = function(e, n) {
            var t = this;
            return this.throwIfDisposed(),
            y(this.gl, (function() {
                return t.gl.getAttribLocation(e, n)
            }
            ))
        }
        ,
        e.prototype.getUniformLocationNoThrow = function(e, n) {
            return this.throwIfDisposed(),
            this.gl.getUniformLocation(e, n)
        }
        ,
        e.prototype.setInputMatrixTexture = function(e, n, t) {
            this.throwIfDisposed(),
            this.throwIfNoProgram(),
            G(this.gl, e, n, t)
        }
        ,
        e.prototype.setOutputMatrixTexture = function(e, n, t) {
            this.setOutputMatrixTextureDriver(e, t, n)
        }
        ,
        e.prototype.setOutputPackedMatrixTexture = function(e, n, t) {
            this.throwIfDisposed();
            var r = u(b(n, t), 2)
              , a = r[0]
              , i = r[1];
            this.setOutputMatrixTextureDriver(e, a, i)
        }
        ,
        e.prototype.setOutputMatrixWriteRegion = function(e, n, t, r) {
            this.setOutputMatrixWriteRegionDriver(t, e, r, n)
        }
        ,
        e.prototype.setOutputPackedMatrixWriteRegion = function(e, n, t, r) {
            throw new Error("setOutputPackedMatrixWriteRegion not implemented.")
        }
        ,
        e.prototype.debugValidate = function() {
            null != this.program && _(this.gl, this.program),
            H(this.gl)
        }
        ,
        e.prototype.executeProgram = function() {
            this.throwIfDisposed(),
            this.throwIfNoProgram();
            var e = this.gl;
            this.debug && this.debugValidate(),
            y(e, (function() {
                return e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
            }
            ))
        }
        ,
        e.prototype.blockUntilAllProgramsCompleted = function() {
            var e = this;
            this.throwIfDisposed(),
            y(this.gl, (function() {
                return e.gl.finish()
            }
            ))
        }
        ,
        e.prototype.getQueryTimerExtension = function() {
            return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = w(this.gl, 2 === n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")),
            this.disjointQueryTimerExtension
        }
        ,
        e.prototype.getQueryTimerExtensionWebGL2 = function() {
            return this.getQueryTimerExtension()
        }
        ,
        e.prototype.getQueryTimerExtensionWebGL1 = function() {
            return this.getQueryTimerExtension()
        }
        ,
        e.prototype.beginQuery = function() {
            if (2 === n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                var e = this.gl
                  , t = this.getQueryTimerExtensionWebGL2()
                  , r = e.createQuery();
                return e.beginQuery(t.TIME_ELAPSED_EXT, r),
                r
            }
            var a = this.getQueryTimerExtensionWebGL1()
              , i = a.createQueryEXT();
            return a.beginQueryEXT(a.TIME_ELAPSED_EXT, i),
            i
        }
        ,
        e.prototype.endQuery = function() {
            if (2 !== n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                var e = this.getQueryTimerExtensionWebGL1();
                e.endQueryEXT(e.TIME_ELAPSED_EXT)
            } else {
                var t = this.gl
                  , r = this.getQueryTimerExtensionWebGL2();
                t.endQuery(r.TIME_ELAPSED_EXT)
            }
        }
        ,
        e.prototype.waitForQueryAndGetTime = function(e) {
            return i(this, void 0, void 0, (function() {
                var t = this;
                return o(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, n.util.repeatedTry((function() {
                            return t.disposed || t.isQueryAvailable(e, n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
                        }
                        ))];
                    case 1:
                        return r.sent(),
                        [2, this.getQueryTime(e, n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getQueryTime = function(e, n) {
            if (0 === n)
                return null;
            if (2 === n) {
                var t = this.gl;
                return t.getQueryParameter(e, t.QUERY_RESULT) / 1e6
            }
            var r = this.getQueryTimerExtensionWebGL1();
            return r.getQueryObjectEXT(e, r.QUERY_RESULT_EXT) / 1e6
        }
        ,
        e.prototype.isQueryAvailable = function(e, n) {
            if (0 === n)
                return !0;
            if (2 === n) {
                var t = this.gl
                  , r = this.getQueryTimerExtensionWebGL2()
                  , a = t.getQueryParameter(e, t.QUERY_RESULT_AVAILABLE);
                return null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)),
                a && !this.disjoint
            }
            a = (r = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e, r.QUERY_RESULT_AVAILABLE_EXT);
            return null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)),
            a && !this.disjoint
        }
        ,
        e.prototype.pollFence = function(e) {
            var n = this;
            return new Promise((function(t) {
                n.addItemToPoll((function() {
                    return e.isFencePassed()
                }
                ), (function() {
                    return t()
                }
                ))
            }
            ))
        }
        ,
        e.prototype.pollItems = function() {
            for (var e = function(e) {
                for (var n = 0; n < e.length; ++n) {
                    if (!e[n]())
                        break
                }
                return n - 1
            }(this.itemsToPoll.map((function(e) {
                return e.isDoneFn
            }
            ))), n = 0; n <= e; ++n) {
                (0,
                this.itemsToPoll[n].resolveFn)()
            }
            this.itemsToPoll = this.itemsToPoll.slice(e + 1)
        }
        ,
        e.prototype.addItemToPoll = function(e, t) {
            var r = this;
            this.itemsToPoll.push({
                isDoneFn: e,
                resolveFn: t
            }),
            this.itemsToPoll.length > 1 || n.util.repeatedTry((function() {
                return r.pollItems(),
                0 === r.itemsToPoll.length
            }
            ))
        }
        ,
        e.prototype.bindTextureToFrameBuffer = function(e) {
            this.throwIfDisposed(),
            z(this.gl, e, this.framebuffer),
            this.debug && H(this.gl)
        }
        ,
        e.prototype.unbindTextureToFrameBuffer = function() {
            null != this.outputTexture ? (z(this.gl, this.outputTexture, this.framebuffer),
            this.debug && H(this.gl)) : X(this.gl, this.framebuffer)
        }
        ,
        e.prototype.downloadMatrixDriver = function(e, n) {
            this.bindTextureToFrameBuffer(e);
            var t = n();
            return this.unbindTextureToFrameBuffer(),
            t
        }
        ,
        e.prototype.setOutputMatrixTextureDriver = function(e, n, t) {
            this.throwIfDisposed();
            var r = this.gl;
            z(r, e, this.framebuffer),
            this.debug && H(r),
            this.outputTexture = e,
            y(r, (function() {
                return r.viewport(0, 0, n, t)
            }
            )),
            y(r, (function() {
                return r.scissor(0, 0, n, t)
            }
            ))
        }
        ,
        e.prototype.setOutputMatrixWriteRegionDriver = function(e, n, t, r) {
            var a = this;
            this.throwIfDisposed(),
            y(this.gl, (function() {
                return a.gl.scissor(e, n, t, r)
            }
            ))
        }
        ,
        e.prototype.throwIfDisposed = function() {
            if (this.disposed)
                throw new Error("Attempted to use disposed GPGPUContext.")
        }
        ,
        e.prototype.throwIfNoProgram = function() {
            if (null == this.program)
                throw new Error("No GPU program is currently set.")
        }
        ,
        e
    }();
    function pn(e) {
        return function(t, r, a, i, o) {
            var s = n.backend_util.assertAndGetBroadcastShape(t, r)
              , u = s.length
              , l = n.util.computeStrides(s)
              , c = n.util.sizeFromShape(s)
              , d = n.util.getTypedArrayFromDType(o, c)
              , p = t.length
              , h = r.length
              , f = n.util.computeStrides(t)
              , x = n.util.computeStrides(r)
              , v = n.backend_util.getBroadcastDims(t, s)
              , m = n.backend_util.getBroadcastDims(r, s);
            if (v.length + m.length === 0)
                for (var g = 0; g < d.length; ++g)
                    d[g] = e(a[g % a.length], i[g % i.length]);
            else {
                var b = function(t) {
                    var r = n.util.indexToLoc(t, u, l)
                      , o = r.slice(-p);
                    v.forEach((function(e) {
                        return o[e] = 0
                    }
                    ));
                    var s = n.util.locToIndex(o, p, f)
                      , c = r.slice(-h);
                    m.forEach((function(e) {
                        return c[e] = 0
                    }
                    ));
                    var g = n.util.locToIndex(c, h, x);
                    d[t] = e(a[s], i[g])
                };
                for (g = 0; g < d.length; ++g)
                    b(g)
            }
            return [d, s]
        }
    }
    var hn = pn((function(e, n) {
        return e + n
    }
    ));
    function fn(e) {
        return function(t, r, a) {
            for (var i = n.util.getTypedArrayFromDType(r, t.length), o = 0; o < t.length; ++o)
                i[o] = e(t[o], a);
            return i
        }
    }
    var xn = fn((function(e) {
        return Math.ceil(e)
    }
    ));
    var vn = pn((function(e, n) {
        return e === n ? 1 : 0
    }
    ))
      , mn = fn((function(e) {
        return Math.exp(e)
    }
    ))
      , gn = fn((function(e) {
        return Math.expm1(e)
    }
    ))
      , bn = fn((function(e) {
        return Math.floor(e)
    }
    ));
    var Cn = pn((function(e, n) {
        return e > n ? 1 : 0
    }
    ))
      , yn = pn((function(e, n) {
        return e >= n ? 1 : 0
    }
    ))
      , kn = pn((function(e, n) {
        return e < n ? 1 : 0
    }
    ))
      , In = pn((function(e, n) {
        return e <= n ? 1 : 0
    }
    ));
    var wn = fn((function(e) {
        return Math.log(e)
    }
    ));
    var Sn = pn((function(e, n) {
        return Math.max(e, n)
    }
    ))
      , Rn = pn((function(e, n) {
        return Math.min(e, n)
    }
    ))
      , Tn = pn((function(e, n) {
        return e * n
    }
    ));
    var En = pn((function(e, n) {
        return e !== n ? 1 : 0
    }
    ));
    var Nn = fn((function(e) {
        return 1 / Math.sqrt(e)
    }
    ))
      , An = fn((function(e) {
        return 1 / (1 + Math.exp(-e))
    }
    ));
    var Fn = fn((function(e) {
        return Math.sqrt(e)
    }
    ));
    var _n = function() {
        function e(e, t, r, a, i, o) {
            this.separator = n.util.encodeString(e),
            this.nGramWidths = t,
            this.leftPad = n.util.encodeString(r),
            this.rightPad = n.util.encodeString(a),
            this.padWidth = i,
            this.preserveShort = o
        }
        return e.prototype.getPadWidth = function(e) {
            return Math.min(this.padWidth < 0 ? e - 1 : this.padWidth, e - 1)
        }
        ,
        e.prototype.getNumNGrams = function(e, n) {
            var t = this.getPadWidth(n);
            return Math.max(0, e + 2 * t - n + 1)
        }
        ,
        e.prototype.createNGrams = function(e, n, t, r, a, i) {
            for (var o = function(o) {
                var u = s.getPadWidth(i)
                  , l = Math.max(0, u - o)
                  , c = Math.max(0, u - (a - (o + 1)))
                  , d = i - (l + c)
                  , p = n + (l > 0 ? 0 : o - u)
                  , h = 0;
                h += l * s.leftPad.length;
                for (var f = 0; f < d; ++f)
                    h += e[p + f].length;
                h += c * s.rightPad.length,
                h += (l + c + d - 1) * s.separator.length,
                t[r + o] = new Uint8Array(h);
                var x = t[r + o]
                  , v = 0
                  , m = function(e) {
                    return e.forEach((function(e) {
                        return x[v++] = e
                    }
                    ))
                };
                for (f = 0; f < l; ++f)
                    m(s.leftPad),
                    m(s.separator);
                for (f = 0; f < d - 1; ++f)
                    m(e[p + f]),
                    m(s.separator);
                if (d > 0) {
                    m(e[p + d - 1]);
                    for (f = 0; f < c; ++f)
                        m(s.separator),
                        m(s.rightPad)
                } else {
                    for (f = 0; f < c - 1; ++f)
                        m(s.rightPad),
                        m(s.separator);
                    m(s.rightPad)
                }
            }, s = this, u = 0; u < a; ++u)
                o(u)
        }
        ,
        e.prototype.compute = function(e, t) {
            var r = this
              , a = e.length
              , i = t.length;
            if (i > 0) {
                var o = t[0];
                if (0 !== o)
                    throw new Error("First split value must be 0, got " + o);
                for (var s = 1; s < i; ++s) {
                    var u = t[s] >= o;
                    if (!(u = u && t[s] <= a))
                        throw new Error("Invalid split value " + t[s] + ", must be in [" + o + ", " + a + "]");
                    o = t[s]
                }
                if (o !== a)
                    throw new Error("Last split value must be data size. Expected " + a + ", got " + o)
            }
            var l = i - 1
              , c = n.util.getArrayFromDType("int32", i);
            if (0 === a || 0 === i) {
                var d = new Array(a);
                for (s = 0; s <= l; ++s)
                    c[s] = 0;
                return [d, c]
            }
            c[0] = 0;
            var p = function(e) {
                var n = t[e] - t[e - 1]
                  , a = 0;
                h.nGramWidths.forEach((function(e) {
                    a += r.getNumNGrams(n, e)
                }
                )),
                h.preserveShort && n > 0 && 0 === a && (a = 1),
                c[e] = c[e - 1] + a
            }
              , h = this;
            for (s = 1; s <= l; ++s)
                p(s);
            var f = new Array(c[l])
              , x = function(n) {
                var a = t[n]
                  , i = c[n];
                if (v.nGramWidths.forEach((function(o) {
                    var s = t[n + 1] - t[n]
                      , u = r.getNumNGrams(s, o);
                    r.createNGrams(e, a, f, i, u, o),
                    i += u
                }
                )),
                v.preserveShort && i === c[n]) {
                    var o = t[n + 1] - t[n];
                    if (0 === o)
                        return "continue";
                    var s = o + 2 * v.padWidth;
                    v.createNGrams(e, a, f, i, 1, s)
                }
            }
              , v = this;
            for (s = 0; s < l; ++s)
                x(s);
            return [f, c]
        }
        ,
        e
    }();
    function On(e, n, t, r) {
        if (e.length)
            if (0 !== n.length)
                if (1 !== n.length) {
                    var a = 0;
                    for (u = 0; u < e.length + 1; u++)
                        if (u === e.length || -1 !== n.indexOf(e[u])) {
                            s = e.subarray(a, u);
                            t && 0 === s.length || r.push(s),
                            a = u + 1
                        }
                } else {
                    for (var i = n[0], o = e.indexOf(i); -1 !== o; ) {
                        var s = e.subarray(0, o);
                        t && 0 === s.length || r.push(s),
                        o = (e = e.subarray(o + 1)).indexOf(i)
                    }
                    t && 0 === e.length || r.push(e)
                }
            else
                for (var u = 0; u < e.length; ++u)
                    r.push(e.subarray(u, u + 1))
    }
    var Dn = pn((function(e, n) {
        return e - n
    }
    ));
    var Pn = function(e, n) {
        var t = n.value - e.value;
        return 0 === t ? e.index - n.index : t
    };
    function Ln(e, t, r, a) {
        for (void 0 === r && (r = 0),
        void 0 === a && (a = e.length - 1); a > r; ) {
            if (a - r > 600) {
                var i = a - r + 1
                  , o = t - r + 1
                  , s = Math.log(i)
                  , u = .5 * Math.exp(2 * s / 3)
                  , l = .5 * Math.sqrt(s * u * (i - u) / i) * Math.sign(o - i / 2);
                Ln(e, t, Math.max(r, Math.floor(t - o * u / i + l)), Math.min(a, Math.floor(t + (i - o) * u / i + l)))
            }
            var c = e[t]
              , d = r
              , p = a;
            for (n.util.swap(e, r, t),
            Pn(e[a], c) > 0 && n.util.swap(e, r, a); d < p; ) {
                for (n.util.swap(e, d, p),
                d++,
                p--; Pn(e[d], c) < 0; )
                    d += 1;
                for (; Pn(e[p], c) > 0; )
                    p -= 1
            }
            0 === Pn(e[r], c) ? n.util.swap(e, r, p) : (p += 1,
            n.util.swap(e, p, a)),
            p <= t && (r = p + 1),
            t <= p && (a = p - 1)
        }
    }
    var Bn = hn
      , Vn = function(e, t, r, a, i) {
        for (var o = n.util.sizeFromShape(a), s = n.util.makeZerosTypedArray(i, r), u = 0; u < e.length; u++) {
            var l = e[u];
            if (l < 0)
                throw new Error("Input x must be non-negative!");
            l >= i || (s[l] += o > 0 ? t[u] : 1)
        }
        return s
    }
      , Un = function(e, t, r, a) {
        void 0 === a && (a = !1);
        for (var i = e.shape[0], o = e.shape[1], s = n.buffer([i, r], t.dtype), u = 0; u < i; u++)
            for (var l = 0; l < o; l++) {
                var c = e.get(u, l);
                if (c < 0)
                    throw new Error("Input x must be non-negative!");
                c >= r || (a ? s.set(1, u, c) : t.size > 0 ? s.set(s.get(u, c) + t.get(u, l), u, c) : s.set(s.get(u, c) + 1, u, c))
            }
        return s
    }
      , Wn = xn
      , Mn = function(e, t, r, a) {
        var i = n.util.getArrayFromDType(r, n.util.sizeFromShape(t));
        if (a && "string" !== r) {
            var o = 0;
            e.forEach((function(e) {
                var t = n.util.sizeFromShape(e.shape);
                i.set(e.vals, o),
                o += t
            }
            ))
        } else {
            var s = 0;
            e.forEach((function(e) {
                for (var a = "string" === r ? n.backend_util.fromUint8ToStringArray(e.vals) : e.vals, o = 0, u = 0; u < e.shape[0]; ++u)
                    for (var l = u * t[1] + s, c = 0; c < e.shape[1]; ++c)
                        i[l + c] = a[o++];
                s += e.shape[1]
            }
            ))
        }
        return i
    }
      , Gn = vn
      , zn = mn
      , Xn = gn
      , Hn = bn
      , jn = function(e, t, r, a, i, o, s, u, c) {
        for (var d = n.buffer([a, o], r), p = 0; p < a; p++) {
            for (var h = [], f = 0, x = 0; x < i; x++) {
                var v = e[p * i + x];
                f += v * s[x],
                h.push(v)
            }
            if (f < 0 || f >= c / o)
                throw new Error("Invalid indices: " + h + " does not index into " + u);
            for (var m = 0; m < o; m++)
                d.values[p * o + m] = t.get.apply(t, l(t.indexToLoc(f * o + m)))
        }
        return d
    }
      , Kn = function(e, t, r) {
        for (var a = n.buffer(r, e.dtype), i = 0; i < a.size; ++i) {
            var o = a.indexToLoc(i).slice()
              , s = o[0]
              , u = o[2]
              , l = t.locToIndex([s, u]);
            o[2] = t.values[l];
            var c = e.locToIndex(o);
            0 <= c && c < e.values.length && (a.values[i] = e.values[c])
        }
        return a
    }
      , qn = Cn
      , Yn = yn
      , Qn = kn
      , Zn = In
      , Jn = function(e, t, r) {
        var a = (t - e) / (r - 1)
          , i = n.util.makeZerosTypedArray(r, "float32");
        i[0] = e;
        for (var o = 1; o < i.length; o++)
            i[o] = i[o - 1] + a;
        return i
    }
      , $n = wn
      , et = function(e, t, r, a) {
        for (var i = n.util.getTypedArrayFromDType(a, n.util.sizeFromShape(r)), o = 0; o < i.length; ++o) {
            for (var s = o * t, u = e[s], l = 0; l < t; ++l) {
                var c = e[s + l];
                (Number.isNaN(c) || c > u) && (u = c)
            }
            i[o] = u
        }
        return i
    }
      , nt = Sn
      , tt = Rn
      , rt = Tn
      , at = function(e, t, r) {
        var a = n.util.createScalarValue(-1, r);
        return Tn([], t, a, e, r)
    }
      , it = En
      , ot = function(e, t, r, a) {
        for (var i = u(n.backend_util.computeOutAndReduceShapes(e, a), 2), o = i[0], s = i[1], l = n.upcastType(t, "int32"), c = n.util.makeZerosTypedArray(n.util.sizeFromShape(o), l), d = n.util.sizeFromShape(s), p = 0; p < c.length; ++p) {
            for (var h = p * d, f = 1, x = 0; x < d; ++x)
                f *= r[h + x];
            c[p] = f
        }
        return {
            outVals: c,
            outShape: o,
            outDtype: l
        }
    }
      , st = function(e, t, r, a) {
        if (e === t || e < t && r < 0 || t < e && r > 1)
            return n.util.makeZerosTypedArray(0, a);
        var i = Math.abs(Math.ceil((t - e) / r))
          , o = n.util.makeZerosTypedArray(i, a);
        t < e && 1 === r && (r = -1),
        o[0] = e;
        for (var s = 1; s < o.length; s++)
            o[s] = o[s - 1] + r;
        return o
    }
      , ut = Nn
      , lt = An
      , ct = function(e) {
        for (var n = new Float32Array(e.length), t = 0; t < e.length; ++t)
            n[t] = Math.abs(e[t]);
        return n
    }
      , dt = function(e, t, r, a, i) {
        var o = n.slice_util.isSliceContinous(a, t, r)
          , s = n.util.sizeFromShape(r)
          , u = n.util.computeStrides(a);
        if (o) {
            var c = n.slice_util.computeFlatOffset(t, u);
            return "string" === i ? e.slice(c, c + s) : e.subarray(c, c + s)
        }
        for (var d = "string" === i ? n.backend_util.fromUint8ToStringArray(e) : e, p = n.buffer(a, i, d), h = n.buffer(r, i), f = 0; f < h.size; ++f) {
            var x = h.indexToLoc(f)
              , v = x.map((function(e, n) {
                return e + t[n]
            }
            ));
            h.set.apply(h, l([p.get.apply(p, l(v))], x))
        }
        return "string" === i ? n.backend_util.fromStringArrayToUint8(h.values) : h.values
    }
      , pt = function(e, t, r, a, i, o, s) {
        var u = t[0]
          , l = o[0]
          , c = new Array(l)
          , d = new Array(u)
          , p = t[1];
        if (0 === l) {
            if (0 !== u)
                throw new Error(n.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(u));
            return [C = n.util.getArrayFromDType(r, 0), [0, p], y = n.util.getArrayFromDType(i, 0), c, d]
        }
        for (var h = !0, f = 0, x = new Array(l).fill(0), v = 0; v < u; ++v) {
            if ((g = e[v * p]) < 0)
                throw new Error(n.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(v, g));
            if (g >= l)
                throw new Error(n.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(v, g, l));
            ++x[g],
            h = h && g >= f,
            f = g
        }
        for (var m = !0, g = 0; g < l; ++g) {
            var b = 0 === x[g];
            c[g] = b,
            m = m && !b,
            x[g] = Math.max(x[g], 1),
            g > 0 && (x[g] += x[g - 1])
        }
        if (m && h) {
            var C = e
              , y = a;
            for (v = 0; v < u; ++v)
                d[v] = v;
            return [C, [u, p], y, c, d]
        }
        var k = x[l - 1]
          , I = (C = n.util.getArrayFromDType(r, k * p),
        y = n.util.getArrayFromDType(i, k),
        new Array(l).fill(0));
        for (v = 0; v < u; ++v) {
            var w = I[g = e[v * p]]
              , S = (0 === g ? 0 : x[g - 1]) + w;
            I[g]++;
            for (var R = 0; R < p; ++R)
                C[S * p + R] = e[v * p + R];
            y[S] = a[v],
            d[v] = S
        }
        for (g = 0; g < l; ++g) {
            if (0 === I[g]) {
                var T = 0 === g ? 0 : x[g - 1];
                C[T * p + 0] = g;
                for (var E = 1; E < p; ++E)
                    C[T * p + E] = 0;
                y[T] = s
            }
        }
        return [C, [k, p], y, c, d]
    }
      , ht = function(e, t, r, a, i) {
        for (var o = n.util.sizeFromShape(a), s = t[0], u = i.length, l = [], c = 1, d = -1, p = 0; p < u; ++p) {
            var h = i[p];
            if (-1 === h) {
                if (-1 !== d)
                    throw new Error(n.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(d, p));
                d = p,
                l.push(1)
            } else {
                if (h < 0)
                    throw new Error(n.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(p, h));
                c *= h,
                l.push(h)
            }
        }
        if (-1 !== d) {
            if (c <= 0)
                throw new Error(n.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());
            var f = Math.trunc(o / c);
            if (c * f !== o)
                throw new Error(n.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(a, l));
            l[d] = f
        }
        if (n.util.sizeFromShape(l) !== o)
            throw new Error(n.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(a, l));
        var x = a.length
          , v = [];
        if (x > 0) {
            v[x - 1] = 1;
            for (p = x - 2; p >= 0; --p)
                v[p] = v[p + 1] * a[p + 1]
        }
        var m = [];
        if (u > 0) {
            m[u - 1] = 1;
            for (p = u - 2; p >= 0; --p)
                m[p] = m[p + 1] * l[p + 1]
        }
        for (var g = n.util.getArrayFromDType(r, s * u), b = 0; b < s; ++b) {
            for (var C = 0, y = 0; y < x; ++y)
                C += e[b * x + y] * v[y];
            for (y = 0; y < u; ++y)
                g[b * u + y] = Math.trunc(C / m[y]),
                C %= m[y]
        }
        return [g, [s, u], l]
    }
      , ft = function(e, t, r, a, i, o, s) {
        void 0 === o && (o = !1),
        void 0 === s && (s = 0);
        var u = a.length
          , l = [t[0], e.length / t[0]]
          , c = l[1]
          , d = u > 0 ? i[u - 1] + 1 : 0;
        if (d < 0)
            throw new Error(n.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
        var p = t.slice();
        p[0] = d;
        var h = p.reduce((function(e, n) {
            return e * n
        }
        ), 1)
          , f = n.util.getArrayFromDType(r, h);
        if (0 === u)
            return d > 0 && f.fill(s),
            [f, p];
        if (d <= 0)
            throw new Error(n.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
        for (var x = 0, v = 1, m = 0, g = i[x]; ; ) {
            var b = 0;
            if (v < u) {
                if (g === (b = i[v])) {
                    ++v;
                    continue
                }
                if (g >= b)
                    throw new Error(n.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())
            }
            if (g < 0 || g >= d)
                throw new Error(n.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(g, d));
            g > m && f.fill(s, m * c, g * c);
            for (var C = x; C < v; ++C) {
                var y = a[C];
                if (y < 0 || y >= l[0])
                    throw new Error(n.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(C, a[C], l[0]));
                for (var k = 0; k < c; k++)
                    f[g * c + k] += e[y * c + k]
            }
            if (o)
                for (k = 0; k < c; k++)
                    f[g * c + k] /= v - x;
            if (x = v,
            m = g + 1,
            g = b,
            ++v > u)
                break
        }
        return m < d && f.fill(s, m * c, d * c),
        [f, p]
    }
      , xt = Fn
      , vt = function(e, t, r, a) {
        for (var i = n.buffer(e, t.dtype), o = 0; o < i.size; o++) {
            for (var s = i.indexToLoc(o), u = new Array(s.length), c = 0; c < u.length; c++)
                u[c] = s[c] * r[c] + a[c];
            i.set.apply(i, l([t.get.apply(t, l(u))], s))
        }
        return i
    }
      , mt = function(e, n, t, r, a, i, o, s) {
        return new _n(t,r,a,i,o,s).compute(e, n)
    }
      , gt = function(e, t, r) {
        for (var a = e.length, i = [], o = 0, s = 0, u = new Array(a), l = 0; l < a; ++l) {
            var c = i.length;
            On(e[l], t, r, i);
            var d = i.length - c;
            u[l] = d,
            o += d,
            s = Math.max(s, d)
        }
        var p = n.util.getArrayFromDType("int32", 2 * o)
          , h = new Array(o)
          , f = [a, s]
          , x = 0;
        for (l = 0; l < a; ++l)
            for (var v = 0; v < u[l]; ++v)
                p[2 * x] = l,
                p[2 * x + 1] = v,
                h[x] = i[x],
                ++x;
        return [p, h, f]
    }
      , bt = function(e, t) {
        for (var r = n.util.getArrayFromDType("int32", e.length), a = 0; a < e.length; ++a)
            r[a] = n.util.fingerPrint64(e[a]).modulo(t).getLowBitsUnsigned();
        return r
    }
      , Ct = Dn
      , yt = function(e, t) {
        for (var r = new Array(e.rank), a = 0; a < r.length; a++)
            r[a] = e.shape[a] * t[a];
        var i = n.buffer(r, e.dtype);
        for (a = 0; a < i.values.length; ++a) {
            for (var o = i.indexToLoc(a), s = new Array(e.rank), u = 0; u < s.length; u++)
                s[u] = o[u] % e.shape[u];
            var l = e.locToIndex(s);
            i.values[a] = e.values[l]
        }
        return i
    }
      , kt = function(e, t, r, a, i) {
        for (var o = t[t.length - 1], s = u([e.length / o, o], 2), l = s[0], c = s[1], d = n.util.getTypedArrayFromDType(r, l * a), p = n.util.getTypedArrayFromDType("int32", l * a), h = function(n) {
            var t = n * c
              , r = e.subarray(t, t + c)
              , o = new Array(r.length);
            r.forEach((function(e, n) {
                return o[n] = {
                    value: e,
                    index: n
                }
            }
            )),
            a < o.length && (Ln(o, a),
            o = o.slice(0, a)),
            i && o.sort(Pn);
            for (var s = n * a, u = d.subarray(s, s + a), l = p.subarray(s, s + a), h = 0; h < a; h++)
                u[h] = o[h].value,
                l[h] = o[h].index
        }, f = 0; f < l; f++)
            h(f);
        var x = t.slice();
        return x[x.length - 1] = a,
        [n.buffer(x, r, d), n.buffer(x, "int32", p)]
    }
      , It = function(e, t, r, a, i) {
        for (var o = t.length, s = n.util.sizeFromShape(t), u = n.util.computeStrides(t), l = n.util.computeStrides(i), c = n.util.getTypedArrayFromDType(r, n.util.sizeFromShape(i)), d = 0; d < s; ++d) {
            for (var p = n.util.indexToLoc(d, o, u), h = new Array(p.length), f = 0; f < h.length; f++)
                h[f] = p[a[f]];
            c[n.util.locToIndex(h, o, l)] = e[d]
        }
        return c
    }
      , wt = function(e, t, r, a) {
        for (var i = n.util.parseAxisParam(t, r)[0], o = [1, r[0], 1], s = 0; s < i; s++)
            o[0] *= r[s];
        for (o[1] = r[i],
        s = i + 1; s < r.length; s++)
            o[2] *= r[s];
        var u = {}
          , l = new Int32Array(r[i])
          , c = new n.TensorBuffer(o,a,e)
          , d = []
          , p = 1 === o[0] && 1 === o[2];
        for (s = 0; s < r[i]; s++) {
            var h = void 0;
            if (p)
                h = e[s].toString();
            else {
                for (var f = [], x = 0; x < o[0]; x++)
                    for (var v = 0; v < o[2]; v++)
                        f.push(c.get(x, s, v));
                h = f.join(",")
            }
            if (void 0 !== u[h])
                l[s] = u[h];
            else {
                var m = Object.keys(u).length;
                u[h] = m,
                l[s] = m,
                d.push(s)
            }
        }
        var g = o.slice();
        g[1] = Object.keys(u).length;
        var b = new n.TensorBuffer(g,a);
        d.forEach((function(e, n) {
            for (var t = 0; t < o[0]; t++)
                for (var r = 0; r < o[2]; r++)
                    b.set(c.get(t, e, r), t, n, r)
        }
        ));
        var C = r.slice();
        return C[i] = g[1],
        {
            outputValues: b.values,
            outputShape: C,
            indices: l
        }
    };
    function St(e, n) {
        return ["x", "y", "z", "w", "u", "v"].slice(0, n).map((function(n) {
            return e + "." + n
        }
        ))
    }
    function Rt(e, n) {
        return 1 === n ? [e] : St(e, n)
    }
    var Tt = function() {
        function e(e) {
            if (this.variableNames = ["A"],
            this.packedInputs = !1,
            this.packedOutput = !0,
            this.outputShape = e,
            this.rank = e.length,
            this.enableShapeUniforms = De(this.outputShape.length),
            0 === this.rank)
                this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
            else {
                var n = Rt("rc", this.rank)
                  , t = Ne(this.rank)
                  , r = this.getOutOfBoundsCondition(n)
                  , a = this.getSetup(n)
                  , i = this.getOutput(n);
                this.userCode = "\n        void main() {\n          " + t + " rc = getOutputCoords();\n\n          if(" + r + ") {\n            setOutput(vec4(0));\n          } else {\n            " + a + "\n\n            setOutput(vec4(" + i + "));\n          }\n        }\n      "
            }
        }
        return e.prototype.getSourceCoordsArr = function(e) {
            for (var n = [], t = 0; t <= 1; t++)
                for (var r = 0; r <= 1; r++) {
                    for (var a = (0 === t ? "r" : "rp1") + ", " + (0 === r ? "c" : "cp1"), i = 2; i < this.rank; i++)
                        a = e[e.length - 1 - i] + "," + a;
                    n.push(a)
                }
            return n
        }
        ,
        e.prototype.getOutOfBoundsCondition = function(e) {
            if (1 === this.rank)
                return "rc > " + (this.enableShapeUniforms ? "outShape" : this.outputShape[0]);
            for (var n = "", t = this.rank - 2; t < this.rank; t++)
                n += e[t] + " >= " + (this.enableShapeUniforms ? "outShape[" + t + "]" : this.outputShape[t]),
                t < this.rank - 1 && (n += "||");
            return n
        }
        ,
        e.prototype.getSetup = function(e) {
            if (1 === this.rank)
                return "";
            var n = e.slice(-2)
              , t = this.enableShapeUniforms ? "outShape[" + this.rank + " - 1]" : this.outputShape[this.rank - 1]
              , r = this.enableShapeUniforms ? "outShape[" + this.rank + " - 2]" : this.outputShape[this.rank - 2];
            return "\n      int r = " + n[0] + ";\n      int c = " + n[1] + ";\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= " + t + ";\n      bool rEdge = rp1 >= " + r + ";\n    "
        }
        ,
        e.prototype.getOutput = function(e) {
            var n = this.getSourceCoordsArr(e);
            return 1 === this.rank ? "getA(rc), (rc + 1 >= " + (this.enableShapeUniforms ? "outShape" : this.outputShape[0]) + " ? 0. : getA(rc + 1)), 0, 0" : "getA(" + n[0] + "),\n            cEdge ? 0. : getA(" + n[1] + "),\n            rEdge ? 0. : getA(" + n[2] + "),\n            rEdge || cEdge ? 0. : getA(" + n[3] + ")"
        }
        ,
        e
    }()
      , Et = function(e, n) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.customUniforms = [{
            name: "inputShape",
            type: "ivec3"
        }],
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length);
        for (var t, r = "", a = 0; a < 4; a++) {
            var i = "thisRC = rc;";
            a % 2 == 1 && (i += "thisRC.z += 1;"),
            a > 1 && (i += "thisRC.y += 1;"),
            r += "\n        " + i + "\n        " + (a > 0 ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + a + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (a > 0 ? "}" : "") + "\n      "
        }
        this.userCode = "\n      " + (t = n,
        "\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + (this.enableShapeUniforms ? ve(["r", "c", "d"], "inputShape") : fe(["r", "c", "d"], t)) + "\n      return ivec3(r, c, d);\n    }\n  \n      ") + (this.enableShapeUniforms ? "\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n" : me(e)) + "\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + (this.enableShapeUniforms ? "outShape[1]" : e[1]) + ";\n        int cols = " + (this.enableShapeUniforms ? "outShape[2]" : e[2]) + ";\n\n        " + r + "\n\n        setOutput(result);\n      }\n    "
    };
    var Nt = function() {
        function e(e) {
            this.gpgpu = e,
            this.numUsedTextures = 0,
            this.numFreeTextures = 0,
            this._numBytesAllocated = 0,
            this._numBytesFree = 0,
            this.freeTextures = {},
            this.logEnabled = !1,
            this.usedTextures = {}
        }
        return e.prototype.acquireTexture = function(e, n, t) {
            var r = Ft(n, t)
              , a = _t(e, r, t);
            a in this.freeTextures || (this.freeTextures[a] = []),
            a in this.usedTextures || (this.usedTextures[a] = []);
            var i, o = At(e, r, this.gpgpu.gl, this.gpgpu.textureConfig, t);
            if (this.freeTextures[a].length > 0) {
                this.numFreeTextures--,
                this.numUsedTextures++,
                this._numBytesFree -= o,
                this.log();
                var s = this.freeTextures[a].shift();
                return this.usedTextures[a].push(s),
                s
            }
            return r === p.PACKED_2X2_FLOAT32 ? i = this.gpgpu.createPackedMatrixTexture(e[0], e[1]) : r === p.PACKED_2X2_FLOAT16 ? i = this.gpgpu.createFloat16PackedMatrixTexture(e[0], e[1]) : r === p.UNPACKED_FLOAT32 ? i = this.gpgpu.createFloat32MatrixTexture(e[0], e[1]) : r === p.UNPACKED_FLOAT16 ? i = this.gpgpu.createFloat16MatrixTexture(e[0], e[1]) : r === p.PACKED_4X1_UNSIGNED_BYTE && (i = this.gpgpu.createUnsignedBytesMatrixTexture(e[0], e[1])),
            this.usedTextures[a].push(i),
            this.numUsedTextures++,
            this._numBytesAllocated += o,
            this.log(),
            i
        }
        ,
        e.prototype.releaseTexture = function(e, t, r, a) {
            if (null != this.freeTextures) {
                var i = Ft(r, a)
                  , o = _t(t, i, a);
                o in this.freeTextures || (this.freeTextures[o] = []);
                var s = At(t, i, this.gpgpu.gl, this.gpgpu.textureConfig, a)
                  , u = n.env().get("WEBGL_DELETE_TEXTURE_THRESHOLD");
                -1 !== u && this._numBytesAllocated > u ? (this.gpgpu.deleteMatrixTexture(e.texture),
                this._numBytesAllocated -= s) : (this.freeTextures[o].push(e),
                this.numFreeTextures++,
                this._numBytesFree += s),
                this.numUsedTextures--;
                var l = this.usedTextures[o]
                  , c = l.indexOf(e);
                if (c < 0)
                    throw new Error("Cannot release a texture that was never provided by this texture manager");
                l.splice(c, 1),
                this.log()
            }
        }
        ,
        e.prototype.log = function() {
            if (this.logEnabled) {
                var e = this.numFreeTextures + this.numUsedTextures;
                console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + e + ")");
                var n = this._numBytesFree / this._numBytesAllocated;
                console.log("Bytes allocated: " + this._numBytesAllocated),
                console.log("Bytes unused: " + this._numBytesFree + " (" + Math.round(100 * n) + "%)")
            }
        }
        ,
        Object.defineProperty(e.prototype, "numBytesAllocated", {
            get: function() {
                return this._numBytesAllocated
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "numBytesFree", {
            get: function() {
                return this._numBytesFree
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getNumUsedTextures = function() {
            return this.numUsedTextures
        }
        ,
        e.prototype.getNumFreeTextures = function() {
            return this.numFreeTextures
        }
        ,
        e.prototype.dispose = function() {
            var e = this;
            if (null != this.freeTextures) {
                for (var n in this.freeTextures)
                    this.freeTextures[n].forEach((function(n) {
                        e.gpgpu.deleteMatrixTexture(n.texture)
                    }
                    ));
                for (var n in this.usedTextures)
                    this.usedTextures[n].forEach((function(n) {
                        e.gpgpu.deleteMatrixTexture(n.texture)
                    }
                    ));
                this.freeTextures = null,
                this.usedTextures = null,
                this.numUsedTextures = 0,
                this.numFreeTextures = 0,
                this._numBytesAllocated = 0,
                this._numBytesFree = 0
            }
        }
        ,
        e
    }();
    function At(e, n, t, r, a) {
        var i, o = function(e, n) {
            switch (e) {
            case p.PACKED_2X2_FLOAT32:
                return Ze(n);
            case p.PACKED_2X2_FLOAT16:
                return $e(n);
            case p.UNPACKED_FLOAT32:
                return He(n);
            case p.UNPACKED_FLOAT16:
                return Ke(n);
            case p.PACKED_4X1_UNSIGNED_BYTE:
                return Ye(n);
            default:
                throw new Error("Unknown physical texture type " + e)
            }
        }(n, r);
        if (a) {
            var s = u(b(e[0], e[1]), 2);
            i = s[0] * s[1]
        } else {
            var l = u(m(e[0], e[1]), 2);
            i = l[0] * l[1]
        }
        return i * function(e, n) {
            var t = e;
            if (n === t.R32F)
                return 4;
            if (n === t.R16F)
                return 2;
            if (n === t.RGBA32F)
                return 16;
            if (n === e.RGBA)
                return 16;
            if (n === t.RGBA16F)
                return 8;
            if (n === t.RGBA8)
                return 4;
            throw new Error("Unknown internal format " + n)
        }(t, o)
    }
    function Ft(e, t) {
        if (e === d.UPLOAD)
            return p.PACKED_2X2_FLOAT32;
        if (e === d.RENDER || null == e)
            return function(e) {
                return n.env().getBool("WEBGL_RENDER_FLOAT32_ENABLED") ? e ? p.PACKED_2X2_FLOAT32 : p.UNPACKED_FLOAT32 : e ? p.PACKED_2X2_FLOAT16 : p.UNPACKED_FLOAT16
            }(t);
        if (e === d.DOWNLOAD || e === d.PIXELS)
            return p.PACKED_4X1_UNSIGNED_BYTE;
        throw new Error("Unknown logical texture type " + e)
    }
    function _t(e, n, t) {
        return e[0] + "_" + e[1] + "_" + n + "_" + t
    }
    var Ot = function(e, n) {
        this.variableNames = ["A"],
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length),
        this.userCode = "\n      float unaryOperation(float x) {\n        " + n + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
    }
      , Dt = "if (isnan(x)) return x;"
      , Pt = "return abs(x);"
      , Lt = "return x;"
      , Bt = function(e, n) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length),
        this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        " + n + "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
    }
      , Vt = function(e) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !1,
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length);
        var n = e.length
          , t = Rt("rc", n)
          , r = Ne(n)
          , a = function(e, n) {
            if (1 === e)
                return "rc";
            for (var t = "", r = 0; r < e; r++)
                t += n[r],
                r < e - 1 && (t += ",");
            return t
        }(n, t)
          , i = t.slice(-2)
          , o = n <= 1 ? "rc" : "vec2(" + i.join(",") + ")";
        this.userCode = "\n      void main() {\n        " + r + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + a + ");\n\n        setOutput(getChannel(packedInput, " + o + "));\n      }\n    "
    }
      , Ut = n.kernel_impls.whereImpl
      , Wt = {};
    var Mt = n.env().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");
    var Gt = function(e) {
        function t(t) {
            var r, a, i = e.call(this) || this;
            if (i.pendingRead = new WeakMap,
            i.pendingDisposal = new WeakSet,
            i.dataRefCount = new WeakMap,
            i.numBytesInGPU = 0,
            i.uploadWaitMs = 0,
            i.downloadWaitMs = 0,
            i.lastGlFlushTime = 0,
            i.warnedAboutMemory = !1,
            i.pendingDeletes = 0,
            i.disposed = !1,
            !n.env().getBool("HAS_WEBGL"))
                throw new Error("WebGL is not supported on this device");
            if (null != t) {
                if (t instanceof dn)
                    r = t;
                else {
                    var o = v(n.env().getNumber("WEBGL_VERSION"), t);
                    r = new dn(o)
                }
                i.binaryCache = {},
                i.gpgpuCreatedLocally = !1
            } else {
                o = v(n.env().getNumber("WEBGL_VERSION"));
                r = new dn(o),
                i.binaryCache = ((a = n.env().getNumber("WEBGL_VERSION"))in Wt || (Wt[a] = {}),
                Wt[a]),
                i.gpgpuCreatedLocally = !0
            }
            return i.gpgpu = r,
            i.canvas = i.gpgpu.gl.canvas,
            i.textureManager = new Nt(i.gpgpu),
            i.numMBBeforeWarning = null == n.env().global.screen ? 1024 : n.env().global.screen.height * n.env().global.screen.width * window.devicePixelRatio * 600 / 1024 / 1024,
            i.texData = new n.DataStorage(i,n.engine()),
            i
        }
        return function(e, n) {
            function t() {
                this.constructor = e
            }
            a(e, n),
            e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
            new t)
        }(t, e),
        t.prototype.nextDataId = function() {
            return t.nextDataId++
        }
        ,
        t.prototype.numDataIds = function() {
            return this.texData.numDataIds() - this.pendingDeletes
        }
        ,
        t.prototype.write = function(e, t, r) {
            if ((n.env().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS") || n.env().getBool("DEBUG")) && this.checkNumericalProblems(e),
            "complex64" === r && null != e)
                throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
            var a = {
                id: this.nextDataId()
            };
            return this.texData.set(a, {
                shape: t,
                dtype: r,
                values: e,
                usage: d.UPLOAD,
                refCount: 1
            }),
            a
        }
        ,
        t.prototype.refCount = function(e) {
            return this.texData.has(e) ? this.texData.get(e).refCount : 0
        }
        ,
        t.prototype.incRef = function(e) {
            this.texData.get(e).refCount++
        }
        ,
        t.prototype.decRef = function(e) {
            this.texData.has(e) && this.texData.get(e).refCount--
        }
        ,
        t.prototype.move = function(e, t, r, a, i) {
            if (n.env().getBool("DEBUG") && this.checkNumericalProblems(t),
            "complex64" === a)
                throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
            this.texData.set(e, {
                shape: r,
                dtype: a,
                values: t,
                usage: d.UPLOAD,
                refCount: i
            })
        }
        ,
        t.prototype.disposeIntermediateTensorInfo = function(e) {
            this.disposeData(e.dataId)
        }
        ,
        t.prototype.readSync = function(e) {
            var t = this.texData.get(e)
              , r = t.values
              , a = t.dtype
              , i = t.complexTensorInfos
              , o = t.slice
              , s = t.shape
              , u = t.isPacked;
            if (null != o) {
                var l = void 0;
                l = u ? new Bt(s,Lt) : new Ot(s,Lt);
                var c = this.runWebGLProgram(l, [{
                    dataId: e,
                    shape: s,
                    dtype: a
                }], a)
                  , d = this.readSync(c.dataId);
                return this.disposeIntermediateTensorInfo(c),
                d
            }
            if (null != r)
                return this.convertAndCacheOnCPU(e);
            if ("string" === a)
                return r;
            var p, h, f = null != this.activeTimers;
            if (f && (p = n.util.now()),
            "complex64" === a) {
                var x = this.readSync(i.real.dataId)
                  , v = this.readSync(i.imag.dataId);
                h = n.backend_util.mergeRealAndImagArrays(x, v)
            } else
                h = this.getValuesFromTexture(e);
            return f && (this.downloadWaitMs += n.util.now() - p),
            this.convertAndCacheOnCPU(e, h)
        }
        ,
        t.prototype.read = function(e) {
            return i(this, void 0, void 0, (function() {
                var t, r, a, i, s, u, c, d, p, h, f, x, v, m, b, C, k, I, w, S, R, T, E;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (this.pendingRead.has(e))
                            return t = this.pendingRead.get(e),
                            [2, new Promise((function(e) {
                                return t.push(e)
                            }
                            ))];
                        if (r = this.texData.get(e),
                        a = r.values,
                        i = r.shape,
                        s = r.slice,
                        u = r.dtype,
                        c = r.complexTensorInfos,
                        d = r.isPacked,
                        null != s)
                            return p = void 0,
                            p = d ? new Bt(i,Lt) : new Ot(i,Lt),
                            h = this.runWebGLProgram(p, [{
                                dataId: e,
                                shape: i,
                                dtype: u
                            }], u),
                            f = this.read(h.dataId),
                            this.disposeIntermediateTensorInfo(h),
                            [2, f];
                        if (null != a)
                            return [2, this.convertAndCacheOnCPU(e)];
                        if (n.env().getBool("DEBUG") && !n.env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === n.env().getNumber("WEBGL_VERSION"))
                            throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
                        return x = null,
                        "complex64" !== u && n.env().get("WEBGL_BUFFER_SUPPORTED") && (v = this.decode(e),
                        m = this.texData.get(v.dataId),
                        x = (E = this.gpgpu).createBufferFromTexture.apply(E, l([m.texture.texture], g(i)))),
                        this.pendingRead.set(e, []),
                        "complex64" === u ? [3, 2] : [4, this.gpgpu.createAndWaitForFence()];
                    case 1:
                        o.sent(),
                        o.label = 2;
                    case 2:
                        return "complex64" !== u ? [3, 4] : [4, Promise.all([this.read(c.real.dataId), this.read(c.imag.dataId)])];
                    case 3:
                        return C = o.sent(),
                        k = C[0],
                        I = C[1],
                        b = n.backend_util.mergeRealAndImagArrays(k, I),
                        [3, 5];
                    case 4:
                        null == x ? b = this.getValuesFromTexture(e) : (w = n.util.sizeFromShape(i),
                        b = this.gpgpu.downloadFloat32MatrixFromBuffer(x, w)),
                        o.label = 5;
                    case 5:
                        return null != v && this.disposeIntermediateTensorInfo(v),
                        null != x && y(S = this.gpgpu.gl, (function() {
                            return S.deleteBuffer(x)
                        }
                        )),
                        R = this.convertAndCacheOnCPU(e, b),
                        T = this.pendingRead.get(e),
                        this.pendingRead.delete(e),
                        T.forEach((function(e) {
                            return e(R)
                        }
                        )),
                        this.pendingDisposal.has(e) && (this.pendingDisposal.delete(e),
                        this.disposeData(e) && n.engine().removeDataId(e, this),
                        this.pendingDeletes--),
                        [2, R]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.readToGPU = function(e, t) {
            void 0 === t && (t = {});
            var r = this.texData.get(e)
              , a = r.values
              , i = r.shape
              , o = r.slice
              , s = r.dtype
              , u = r.isPacked
              , l = r.texture;
            if ("complex64" === s)
                throw new Error("Does not support reading texture for complex64 dtype.");
            if (null != o) {
                var c = void 0;
                c = u ? new Bt(i,Lt) : new Ot(i,Lt);
                var d = this.runWebGLProgram(c, [{
                    dataId: e,
                    shape: i,
                    dtype: s
                }], s)
                  , p = this.readToGPU(d, t);
                return this.disposeIntermediateTensorInfo(d),
                p
            }
            if (null == l)
                throw null != a ? new Error("Data is not on GPU but on CPU.") : new Error("There is no data on GPU or CPU.");
            var h = this.decode(e, t.customTexShape)
              , f = n.engine().makeTensorFromDataId(h.dataId, h.shape, h.dtype)
              , x = this.texData.get(h.dataId);
            return Object.assign({
                tensorRef: f
            }, x.texture)
        }
        ,
        t.prototype.bufferSync = function(e) {
            var t = this.readSync(e.dataId)
              , r = t;
            if ("string" === e.dtype)
                try {
                    r = t.map((function(e) {
                        return n.util.decodeString(e)
                    }
                    ))
                } catch (e) {
                    throw new Error("Failed to decode encoded string bytes into utf-8")
                }
            return n.buffer(e.shape, e.dtype, r)
        }
        ,
        t.prototype.checkNumericalProblems = function(e) {
            if (null != e)
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    if (!k(r)) {
                        if (n.env().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))
                            throw Error("The value " + r + " cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'");
                        throw Error("The value " + r + " cannot be represented on this device.")
                    }
                }
        }
        ,
        t.prototype.getValuesFromTexture = function(e) {
            var t, r = this.texData.get(e), a = r.shape, i = r.dtype, o = r.isPacked, s = n.util.sizeFromShape(a);
            if (n.env().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
                var u = this.decode(e)
                  , c = this.texData.get(u.dataId)
                  , d = (t = this.gpgpu).downloadMatrixFromPackedTexture.apply(t, l([c.texture.texture], g(a))).subarray(0, s);
                return this.disposeIntermediateTensorInfo(u),
                d
            }
            var p = n.env().getBool("WEBGL_PACK") && !0 === o
              , h = p ? Z(a) : a
              , f = p ? new Ve(h) : new Be(h)
              , x = this.runWebGLProgram(f, [{
                shape: h,
                dtype: i,
                dataId: e
            }], "float32")
              , v = this.texData.get(x.dataId)
              , m = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture.texture, v.texShape[0], v.texShape[1]).subarray(0, s);
            return this.disposeIntermediateTensorInfo(x),
            m
        }
        ,
        t.prototype.timerAvailable = function() {
            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0
        }
        ,
        t.prototype.time = function(e) {
            var t = this
              , r = this.activeTimers
              , a = []
              , s = !1;
            null == this.programTimersStack ? (this.programTimersStack = a,
            s = !0) : this.activeTimers.push(a),
            this.activeTimers = a,
            e();
            var u = n.util.flatten(this.activeTimers.map((function(e) {
                return e.query
            }
            ))).filter((function(e) {
                return null != e
            }
            ))
              , l = n.util.flatten(this.activeTimers.map((function(e) {
                return e.name
            }
            ))).filter((function(e) {
                return null != e
            }
            ));
            this.activeTimers = r,
            s && (this.programTimersStack = null);
            var c = {
                uploadWaitMs: this.uploadWaitMs,
                downloadWaitMs: this.downloadWaitMs,
                kernelMs: null,
                wallMs: null
            };
            return i(t, void 0, void 0, (function() {
                var e;
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [4, Promise.all(u)] : [3, 2];
                    case 1:
                        return e = t.sent(),
                        c.kernelMs = n.util.sum(e),
                        c.getExtraProfileInfo = function() {
                            return e.map((function(e, n) {
                                return {
                                    name: l[n],
                                    ms: e
                                }
                            }
                            )).map((function(e) {
                                return e.name + ": " + e.ms
                            }
                            )).join(", ")
                        }
                        ,
                        [3, 3];
                    case 2:
                        c.kernelMs = {
                            error: "WebGL query timers are not supported in this environment."
                        },
                        t.label = 3;
                    case 3:
                        return this.uploadWaitMs = 0,
                        this.downloadWaitMs = 0,
                        [2, c]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.memory = function() {
            return {
                unreliable: !1,
                numBytesInGPU: this.numBytesInGPU,
                numBytesInGPUAllocated: this.textureManager.numBytesAllocated,
                numBytesInGPUFree: this.textureManager.numBytesFree
            }
        }
        ,
        t.prototype.startTimer = function() {
            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? this.gpgpu.beginQuery() : {
                startMs: n.util.now(),
                endMs: null
            }
        }
        ,
        t.prototype.endTimer = function(e) {
            return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? (this.gpgpu.endQuery(),
            e) : (e.endMs = n.util.now(),
            e)
        }
        ,
        t.prototype.getQueryTime = function(e) {
            return i(this, void 0, void 0, (function() {
                var t;
                return o(this, (function(r) {
                    return n.env().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE") > 0 ? [2, this.gpgpu.waitForQueryAndGetTime(e)] : [2, (t = e).endMs - t.startMs]
                }
                ))
            }
            ))
        }
        ,
        t.prototype.disposeData = function(e, n) {
            if (void 0 === n && (n = !1),
            this.pendingDisposal.has(e))
                return !1;
            if (!this.texData.has(e))
                return !0;
            if (n ? this.texData.get(e).refCount = 0 : this.texData.get(e).refCount--,
            !n && this.texData.get(e).refCount > 0)
                return !1;
            if (this.pendingRead.has(e))
                return this.pendingDisposal.add(e),
                this.pendingDeletes++,
                !1;
            this.releaseGPUData(e);
            var t = this.texData.get(e).complexTensorInfos;
            return null != t && (this.disposeData(t.real.dataId, n),
            this.disposeData(t.imag.dataId, n)),
            this.texData.delete(e),
            !0
        }
        ,
        t.prototype.releaseGPUData = function(e) {
            var n = this.texData.get(e)
              , t = n.texture
              , r = n.dtype
              , a = n.texShape
              , i = n.usage
              , o = n.isPacked
              , s = n.slice
              , u = s && s.origDataId || e
              , l = this.dataRefCount.get(u);
            l > 1 ? this.dataRefCount.set(u, l - 1) : (this.dataRefCount.delete(u),
            null != t && (this.numBytesInGPU -= this.computeBytes(a, r),
            this.textureManager.releaseTexture(t, a, i, o)));
            var c = this.texData.get(e);
            c.texture = null,
            c.texShape = null,
            c.isPacked = !1,
            c.slice = null
        }
        ,
        t.prototype.getTexture = function(e) {
            return this.uploadToGPU(e),
            this.texData.get(e).texture.texture
        }
        ,
        t.prototype.getDataInfo = function(e) {
            return this.texData.get(e)
        }
        ,
        t.prototype.shouldExecuteOnCPU = function(e, t) {
            var r = this;
            return void 0 === t && (t = Mt),
            n.env().getBool("WEBGL_CPU_FORWARD") && e.every((function(e) {
                return null == r.texData.get(e.dataId).texture && n.util.sizeFromShape(e.shape) < t
            }
            ))
        }
        ,
        t.prototype.getGPGPUContext = function() {
            return this.gpgpu
        }
        ,
        t.prototype.where = function(e) {
            n.backend_util.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
            var t = e.dataSync();
            return Ut(e.shape, t)
        }
        ,
        t.prototype.packedUnaryOp = function(e, t, r) {
            var a = new Bt(e.shape,t)
              , i = this.compileAndRun(a, [e], r);
            return n.engine().makeTensorFromDataId(i.dataId, i.shape, i.dtype)
        }
        ,
        t.prototype.abs = function(e) {
            if (this.shouldExecuteOnCPU([e]) && "complex64" !== e.dtype) {
                var t = ct(this.texData.get(e.dataId).values);
                return this.makeOutput(e.shape, e.dtype, t)
            }
            if (n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS"))
                return this.packedUnaryOp(e, Pt, e.dtype);
            var r = new Ot(e.shape,Pt)
              , a = this.compileAndRun(r, [e]);
            return n.engine().makeTensorFromDataId(a.dataId, a.shape, a.dtype)
        }
        ,
        t.prototype.makeTensorInfo = function(e, t, r) {
            var a;
            if ("string" === t && null != r && r.length > 0 && n.util.isString(r[0])) {
                var i = r.map((function(e) {
                    return n.util.encodeString(e)
                }
                ));
                a = this.write(i, e, t)
            } else
                a = this.write(r, e, t);
            return this.texData.get(a).usage = null,
            {
                dataId: a,
                shape: e,
                dtype: t
            }
        }
        ,
        t.prototype.makeOutput = function(e, t, r) {
            var a = this.makeTensorInfo(e, t, r).dataId;
            return n.engine().makeTensorFromDataId(a, e, t, this)
        }
        ,
        t.prototype.unpackTensor = function(e) {
            var n = new Vt(e.shape);
            return this.runWebGLProgram(n, [e], e.dtype)
        }
        ,
        t.prototype.packTensor = function(e) {
            var n = new Tt(e.shape);
            return this.runWebGLProgram(n, [e], e.dtype, null, !0)
        }
        ,
        t.prototype.packedReshape = function(e, n) {
            var t = l([Y(e.shape)], Q(e.shape))
              , r = {
                dtype: e.dtype,
                shape: t,
                dataId: e.dataId
            }
              , a = l([Y(n)], Q(n))
              , i = new Et(a,t)
              , o = [t]
              , s = this.runWebGLProgram(i, [r], e.dtype, o, !0);
            return {
                dataId: s.dataId,
                shape: n,
                dtype: s.dtype
            }
        }
        ,
        t.prototype.decode = function(e, t) {
            var r = this.texData.get(e)
              , a = r.isPacked
              , i = r.shape
              , o = r.dtype;
            if (null != t) {
                var s = n.util.sizeFromShape(i)
                  , u = t[0] * t[1] * 4;
                n.util.assert(s <= u, (function() {
                    return "customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data."
                }
                ))
            }
            var l, c = Z(i);
            l = a ? new Le(c) : new Pe(c);
            var d = [null != t ? t : g(c)];
            return {
                dtype: o,
                shape: i,
                dataId: this.runWebGLProgram(l, [{
                    shape: c,
                    dtype: o,
                    dataId: e
                }], o, d, !0, t).dataId
            }
        }
        ,
        t.prototype.runWebGLProgram = function(e, t, r, a, i, o) {
            var s = this;
            void 0 === i && (i = !1);
            var u = this.makeTensorInfo(e.outputShape, r)
              , l = this.texData.get(u.dataId);
            if (e.packedOutput && (l.isPacked = !0),
            e.outPackingScheme === c.DENSE) {
                var d = null != o ? o : g(e.outputShape);
                l.texShape = d.map((function(e) {
                    return 2 * e
                }
                ))
            }
            if (null != e.outTexUsage && (l.usage = e.outTexUsage),
            0 === n.util.sizeFromShape(u.shape))
                return l.values = n.util.getTypedArrayFromDType(u.dtype, 0),
                u;
            var p = []
              , h = t.map((function(t) {
                if ("complex64" === t.dtype)
                    throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
                var r = s.texData.get(t.dataId);
                if (null == r.texture) {
                    if (!e.packedInputs && n.util.sizeFromShape(t.shape) <= n.env().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))
                        return {
                            shape: t.shape,
                            texData: null,
                            isUniform: !0,
                            uniformValues: r.values
                        };
                    e.packedInputs && (r.isPacked = !0,
                    r.shape = t.shape)
                }
                if (s.uploadToGPU(t.dataId),
                !!r.isPacked != !!e.packedInputs)
                    t = r.isPacked ? s.unpackTensor(t) : s.packTensor(t),
                    p.push(t),
                    r = s.texData.get(t.dataId);
                else if (r.isPacked && !ee(r.shape, t.shape)) {
                    var a = t
                      , i = t.shape;
                    t.shape = r.shape,
                    t = s.packedReshape(t, i),
                    p.push(t),
                    r = s.texData.get(t.dataId),
                    a.shape = i
                }
                return {
                    shape: t.shape,
                    texData: r,
                    isUniform: !1
                }
            }
            ));
            this.uploadToGPU(u.dataId);
            var f, x = {
                shape: u.shape,
                texData: l,
                isUniform: !1
            }, v = function(e, t, r) {
                var a = "";
                t.concat(r).forEach((function(t) {
                    var i = null != t.texData && null != t.texData.slice && t.texData.slice.flatOffset > 0;
                    if (e.enableShapeUniforms && !t.isUniform) {
                        var o = t.texData.texShape
                          , s = Ae(e.packedInputs, t.shape, o)
                          , u = s.useSqueezeShape
                          , l = s.uniformShape
                          , c = s.keptDims
                          , d = ""
                          , p = ""
                          , h = "";
                        if (1 === l.length && e.packedInputs) {
                            var f = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
                            d = (f[0] > 1) + "_" + (f[1] > 1)
                        } else if (2 !== l.length || e.packedInputs) {
                            if (l.length > 2 && !e.packedInputs) {
                                var x = n.util.computeStrides(l);
                                h = (x[0] === o[1]) + "_" + (x[x.length - 1] === o[1])
                            }
                        } else
                            p = (l[0] > 1) + "_" + (l[1] > 1);
                        var v = t.shape.length
                          , m = 2 === l.length && n.util.arraysEqual(t.shape, o)
                          , g = 1 === n.util.sizeFromShape(t.shape)
                          , b = n.backend_util.getBroadcastDims(t.shape, r.shape)
                          , C = !e.packedInputs && v === r.shape.length && n.util.arraysEqual(o, r.texData.texShape)
                          , y = e.packedInputs || l.length > 2 ? "" : (o[0] > 1) + "_" + (o[1] > 1);
                        a += v + "_" + C + "_" + (u ? c : "") + "_" + l.length + "_" + g + "_" + b + "_" + m + "_" + d + "_" + p + "_" + h + "_" + y + "_" + i
                    } else {
                        var k = t.isUniform ? "uniform" : t.texData.texShape;
                        a += t.shape + "_" + k + "_" + i
                    }
                }
                ));
                var i = e.userCode
                  , o = e.constructor.name;
                return o + "_" + a + "_" + i + n.env().getNumber("WEBGL_VERSION")
            }(e, h, x), m = this.getAndSaveBinary(v, (function() {
                return function(e, t, r, a) {
                    var i = r.map((function(e, n) {
                        var r = {
                            logicalShape: e.shape,
                            texShape: e.isUniform ? null : e.texData.texShape,
                            isUniform: e.isUniform,
                            isPacked: !e.isUniform && e.texData.isPacked,
                            flatOffset: null
                        };
                        return null != e.texData && null != e.texData.slice && e.texData.slice.flatOffset > 0 && (r.flatOffset = e.texData.slice.flatOffset),
                        {
                            name: t.variableNames[n],
                            shapeInfo: r
                        }
                    }
                    ))
                      , o = i.map((function(e) {
                        return e.shapeInfo
                    }
                    ))
                      , s = {
                        logicalShape: a.shape,
                        texShape: a.texData.texShape,
                        isUniform: !1,
                        isPacked: a.texData.isPacked,
                        flatOffset: null
                    }
                      , u = Ce(i, s, t)
                      , l = R(e.gl, u)
                      , c = e.createProgram(l)
                      , d = null
                      , p = e.getUniformLocation(c, "NAN", !1);
                    1 === n.env().getNumber("WEBGL_VERSION") && (d = e.getUniformLocation(c, "INFINITY", !1));
                    for (var h, f, x, v = !1, m = {}, g = {}, b = {}, C = 0; C < t.variableNames.length; C++) {
                        var y = t.variableNames[C];
                        m[y] = e.getUniformLocation(c, y, v),
                        m["offset" + y] = e.getUniformLocation(c, "offset" + y, v),
                        t.enableShapeUniforms && (g[y + "Shape"] = e.getUniformLocation(c, y + "Shape", v),
                        b[y + "TexShape"] = e.getUniformLocation(c, y + "TexShape", v))
                    }
                    t.enableShapeUniforms && (h = e.getUniformLocation(c, "outShape", v),
                    x = e.getUniformLocation(c, "outShapeStrides", v),
                    f = e.getUniformLocation(c, "outTexShape", v));
                    var k = [];
                    return t.customUniforms && t.customUniforms.forEach((function(n, t) {
                        k[t] = e.getUniformLocation(c, n.name, v)
                    }
                    )),
                    {
                        program: t,
                        fragmentShader: l,
                        source: u,
                        webGLProgram: c,
                        uniformLocations: m,
                        customUniformLocations: k,
                        inShapeInfos: o,
                        outShapeInfo: s,
                        infLoc: d,
                        nanLoc: p,
                        inShapesLocations: g,
                        inTexShapesLocations: b,
                        outShapeLocation: h,
                        outShapeStridesLocation: x,
                        outTexShapeLocation: f
                    }
                }(s.gpgpu, e, h, x)
            }
            )), b = null != this.activeTimers;
            b && (f = this.startTimer()),
            function(e, t, r, a, i) {
                t.program.enableShapeUniforms || (Oe(t.inShapeInfos, r),
                Oe([t.outShapeInfo], [a]));
                var o = a.texData.texture
                  , s = a.texData.texShape;
                a.texData.isPacked ? e.setOutputPackedMatrixTexture(o.texture, s[0], s[1]) : e.setOutputMatrixTexture(o.texture, s[0], s[1]),
                e.setProgram(t.webGLProgram),
                1 === n.env().getNumber("WEBGL_VERSION") && null !== t.infLoc && e.gl.uniform1f(t.infLoc, 1 / 0),
                null !== t.nanLoc && e.gl.uniform1f(t.nanLoc, NaN),
                r.forEach((function(r, a) {
                    var i = t.program.variableNames[a]
                      , o = t.uniformLocations[i]
                      , s = t.uniformLocations["offset" + i]
                      , u = t.inShapesLocations[i + "Shape"]
                      , l = t.inTexShapesLocations[i + "TexShape"];
                    if (u) {
                        var c = Ae(t.program.packedInputs, r.shape, r.texData.texShape).uniformShape;
                        switch (c.length) {
                        case 1:
                            e.gl.uniform1iv(u, new Int32Array(c));
                            break;
                        case 2:
                            e.gl.uniform2iv(u, new Int32Array(c));
                            break;
                        case 3:
                            e.gl.uniform3iv(u, new Int32Array(c));
                            break;
                        case 4:
                            e.gl.uniform4iv(u, new Int32Array(c))
                        }
                    }
                    if (l && e.gl.uniform2i(l, r.texData.texShape[0], r.texData.texShape[1]),
                    null != o)
                        if (r.isUniform)
                            if (n.util.sizeFromShape(r.shape) < 2)
                                e.gl.uniform1f(o, r.uniformValues[0]);
                            else {
                                var d = r.uniformValues;
                                d instanceof Float32Array || (d = new Float32Array(d)),
                                e.gl.uniform1fv(o, d)
                            }
                        else
                            null != r.texData.slice && null != s && e.gl.uniform1i(s, r.texData.slice.flatOffset),
                            e.setInputMatrixTexture(r.texData.texture.texture, o, a)
                }
                ));
                var u = t.outShapeLocation;
                if (u)
                    switch (a.shape.length) {
                    case 1:
                        e.gl.uniform1iv(u, new Int32Array(a.shape));
                        break;
                    case 2:
                        e.gl.uniform2iv(u, new Int32Array(a.shape));
                        break;
                    case 3:
                        e.gl.uniform3iv(u, new Int32Array(a.shape));
                        break;
                    case 4:
                        e.gl.uniform4iv(u, new Int32Array(a.shape))
                    }
                if (t.outShapeStridesLocation) {
                    var l = n.util.computeStrides(a.shape);
                    switch (a.shape.length) {
                    case 2:
                        e.gl.uniform1iv(t.outShapeStridesLocation, new Int32Array(l));
                        break;
                    case 3:
                        e.gl.uniform2iv(t.outShapeStridesLocation, new Int32Array(l));
                        break;
                    case 4:
                        e.gl.uniform3iv(t.outShapeStridesLocation, new Int32Array(l))
                    }
                }
                t.outTexShapeLocation && e.gl.uniform2i(t.outTexShapeLocation, a.texData.texShape[0], a.texData.texShape[1]),
                t.program.customUniforms && i && t.program.customUniforms.forEach((function(n, r) {
                    var a = t.customUniformLocations[r]
                      , o = i[r];
                    if ("float" === n.type)
                        e.gl.uniform1fv(a, o);
                    else if ("vec2" === n.type)
                        e.gl.uniform2fv(a, o);
                    else if ("vec3" === n.type)
                        e.gl.uniform3fv(a, o);
                    else if ("vec4" === n.type)
                        e.gl.uniform4fv(a, o);
                    else if ("int" === n.type)
                        e.gl.uniform1iv(a, o);
                    else if ("ivec2" === n.type)
                        e.gl.uniform2iv(a, o);
                    else if ("ivec3" === n.type)
                        e.gl.uniform3iv(a, o);
                    else {
                        if ("ivec4" !== n.type)
                            throw Error("uniform type " + n.type + " is not supported yet.");
                        e.gl.uniform4iv(a, o)
                    }
                }
                )),
                e.executeProgram()
            }(this.gpgpu, m, h, x, a),
            p.forEach((function(e) {
                return s.disposeIntermediateTensorInfo(e)
            }
            )),
            b && (f = this.endTimer(f),
            this.activeTimers.push({
                name: e.constructor.name,
                query: this.getQueryTime(f)
            }));
            var C = n.env().get("WEBGL_FLUSH_THRESHOLD");
            if (C > 0) {
                var y = n.util.now();
                y - this.lastGlFlushTime > C && (this.gpgpu.gl.flush(),
                this.lastGlFlushTime = y)
            }
            if (!n.env().getBool("WEBGL_LAZILY_UNPACK") && l.isPacked && !1 === i) {
                var k = this.unpackTensor(u);
                return this.disposeIntermediateTensorInfo(u),
                k
            }
            return u
        }
        ,
        t.prototype.compileAndRun = function(e, n, t, r, a) {
            return void 0 === a && (a = !1),
            t = t || n[0].dtype,
            this.runWebGLProgram(e, n, t, r, a)
        }
        ,
        t.prototype.getAndSaveBinary = function(e, n) {
            return e in this.binaryCache || (this.binaryCache[e] = n()),
            this.binaryCache[e]
        }
        ,
        t.prototype.getTextureManager = function() {
            return this.textureManager
        }
        ,
        t.prototype.dispose = function() {
            var e = this;
            if (!this.disposed) {
                if (!n.env().getBool("IS_TEST"))
                    Object.keys(this.binaryCache).forEach((function(n) {
                        e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),
                        delete e.binaryCache[n]
                    }
                    ));
                this.textureManager.dispose(),
                null != this.canvas && "undefined" != typeof HTMLCanvasElement && this.canvas instanceof HTMLCanvasElement ? this.canvas.remove() : this.canvas = null,
                this.gpgpuCreatedLocally && (this.gpgpu.program = null,
                this.gpgpu.dispose()),
                this.disposed = !0
            }
        }
        ,
        t.prototype.floatPrecision = function() {
            var e = this;
            return null == this.floatPrecisionValue && (this.floatPrecisionValue = n.tidy((function() {
                if (!n.env().get("WEBGL_RENDER_FLOAT32_ENABLED")) {
                    var t = n.env().getBool("DEBUG");
                    n.env().set("DEBUG", !1);
                    var r = e.abs(n.scalar(1e-8)).dataSync()[0];
                    if (n.env().set("DEBUG", t),
                    r > 0)
                        return 32
                }
                return 16
            }
            ))),
            this.floatPrecisionValue
        }
        ,
        t.prototype.epsilon = function() {
            return 32 === this.floatPrecision() ? 1e-7 : 1e-4
        }
        ,
        t.prototype.uploadToGPU = function(e) {
            var t, r = this.texData.get(e), a = r.shape, i = r.dtype, o = r.values, s = r.texture, l = r.usage, c = r.isPacked;
            if (null == s) {
                var p, h = null != this.activeTimers;
                h && (p = n.util.now());
                var f = r.texShape;
                if (null == f && (f = J(a, c),
                r.texShape = f),
                null != o) {
                    var x = Z(a)
                      , v = void 0
                      , m = f[1]
                      , g = f[0]
                      , C = o instanceof Uint8Array || o instanceof Uint8ClampedArray;
                    !c && C || (m = (t = u(b(f[0], f[1]), 2))[0],
                    g = t[1]),
                    v = c ? new We(x,C) : new Ue(x,C);
                    var y = C ? [g, m] : f
                      , k = this.makeTensorInfo(y, i)
                      , I = this.texData.get(k.dataId);
                    I.usage = C ? d.PIXELS : d.UPLOAD,
                    I.texShape = y,
                    this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(k.dataId), m, g, o);
                    var w = [[g, m]]
                      , S = this.runWebGLProgram(v, [k], i, w, !0)
                      , R = this.texData.get(S.dataId);
                    r.texture = R.texture,
                    r.texShape = R.texShape,
                    r.isPacked = R.isPacked,
                    r.usage = R.usage,
                    this.disposeIntermediateTensorInfo(k),
                    this.texData.delete(S.dataId),
                    r.values = null,
                    h && (this.uploadWaitMs += n.util.now() - p)
                } else {
                    var T = this.acquireTexture(f, l, i, c);
                    r.texture = T
                }
            }
        }
        ,
        t.prototype.convertAndCacheOnCPU = function(e, n) {
            var t = this.texData.get(e)
              , r = t.dtype;
            return this.releaseGPUData(e),
            null != n && (t.values = function(e, n) {
                if ("float32" === n || "complex64" === n)
                    return e;
                if ("int32" === n || "bool" === n) {
                    for (var t = "int32" === n ? new Int32Array(e.length) : new Uint8Array(e.length), r = 0; r < t.length; ++r)
                        t[r] = Math.round(e[r]);
                    return t
                }
                throw new Error("Unknown dtype " + n)
            }(n, r)),
            t.values
        }
        ,
        t.prototype.acquireTexture = function(e, n, t, r) {
            if (this.numBytesInGPU += this.computeBytes(e, t),
            !this.warnedAboutMemory && this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024) {
                var a = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
                this.warnedAboutMemory = !0,
                console.warn("High memory usage in GPU: " + a + " MB, most likely due to a memory leak")
            }
            return this.textureManager.acquireTexture(e, n, r)
        }
        ,
        t.prototype.computeBytes = function(e, t) {
            return e[0] * e[1] * n.util.bytesPerElement(t)
        }
        ,
        t
    }(n.KernelBackend);
    Gt.nextDataId = 0;
    function zt() {
        n.env().set("WEBGL_FORCE_F16_TEXTURES", !0)
    }
    n.device_util.isBrowser() && n.registerBackend("webgl", (function() {
        return new Gt
    }
    ), 2);
    var Xt = {
        forceHalfFloat: zt
    }
      , Ht = function(e, t, r) {
        this.variableNames = ["A", "B"],
        this.outputShape = n.backend_util.assertAndGetBroadcastShape(t, r),
        this.enableShapeUniforms = De(this.outputShape.length),
        this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + e + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "
    }
      , jt = function(e, t, r, a) {
        void 0 === a && (a = !1),
        this.variableNames = ["A", "B"],
        this.supportsBroadcasting = !0,
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = n.backend_util.assertAndGetBroadcastShape(t, r);
        var i = this.outputShape.length;
        this.enableShapeUniforms = De(i);
        var o = "";
        if (a)
            if (0 === i || 1 === n.util.sizeFromShape(this.outputShape))
                o = "\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";
            else if (o = "\n          " + Ne(i) + " coords = getOutputCoords();\n        ",
            1 === i)
                this.enableShapeUniforms ? o += "\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          " : o += "\n            result.y = (coords + 1) >= " + this.outputShape[0] + " ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ";
            else {
                var s = Rt("coords", i);
                this.enableShapeUniforms ? o += "\n            bool nextRowOutOfBounds =\n              (" + s[i - 2] + " + 1) >= outShape[" + i + " - 2];\n            bool nextColOutOfBounds =\n              (" + s[i - 1] + " + 1) >= outShape[" + i + " - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          " : o += "\n            bool nextRowOutOfBounds =\n              (" + s[i - 2] + " + 1) >= " + this.outputShape[i - 2] + ";\n            bool nextColOutOfBounds =\n              (" + s[i - 1] + " + 1) >= " + this.outputShape[i - 1] + ";\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          "
            }
        this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        " + e + "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        " + o + "\n\n        setOutput(result);\n      }\n    "
    };
    function Kt(e) {
        var n = e.inputs
          , t = e.backend
          , r = n.x;
        return t.incRef(r.dataId),
        {
            dataId: r.dataId,
            shape: r.shape,
            dtype: r.dtype
        }
    }
    var qt = {
        kernelName: n.Identity,
        backendName: "webgl",
        kernelFunc: Kt
    };
    function Yt(e) {
        var n = e.inputs
          , t = e.backend
          , r = n.real
          , a = n.imag
          , i = t.makeTensorInfo(r.shape, "complex64")
          , o = t.texData.get(i.dataId)
          , s = Kt({
            inputs: {
                x: r
            },
            backend: t
        })
          , u = Kt({
            inputs: {
                x: a
            },
            backend: t
        });
        return o.complexTensorInfos = {
            real: s,
            imag: u
        },
        i
    }
    var Qt = {
        kernelName: n.Complex,
        backendName: "webgl",
        kernelFunc: Yt
    }
      , Zt = "return (a < 0.) ? b * a : a;"
      , Jt = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
    var $t = {
        kernelName: n.LeakyRelu,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.alpha
              , s = r.makeTensorInfo([], "float32", n.util.createScalarValue(o, "float32"))
              , u = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new jt(Jt,i.shape,s.shape) : new Ht(Zt,i.shape,s.shape)
              , l = r.runWebGLProgram(u, [i, s], "float32");
            return r.disposeIntermediateTensorInfo(s),
            l
        }
    }
      , er = "return (a < 0.) ? b * a : a;"
      , nr = "\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";
    var tr = {
        kernelName: n.Prelu,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = t.x
              , i = t.alpha
              , o = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new jt(nr,a.shape,i.shape) : new Ht(er,a.shape,i.shape);
            return r.runWebGLProgram(o, [a, i], "float32")
        }
    };
    function rr(e) {
        var t = e.opSnippet
          , r = e.packedOpSnippet
          , a = e.cpuKernelImpl
          , i = e.dtype;
        return function(e) {
            var o, s = e.inputs, u = e.backend, l = s.x, c = u, d = i || l.dtype;
            if (c.shouldExecuteOnCPU([l]) && null != a) {
                var p = c.texData.get(l.dataId)
                  , h = a(p.values, d);
                return c.makeTensorInfo(l.shape, d, h)
            }
            return o = n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS") && null != r ? new Bt(l.shape,r) : new Ot(l.shape,t),
            c.runWebGLProgram(o, [l], d)
        }
    }
    function ar(e) {
        var t = e.opSnippet
          , r = e.packedOpSnippet
          , a = e.checkOutOfBounds
          , i = void 0 !== a && a
          , o = e.supportsComplex
          , s = void 0 !== o && o
          , l = e.cpuKernelImpl
          , c = e.dtype;
        return function(e) {
            var a = e.inputs
              , o = e.backend
              , d = a.a
              , p = a.b
              , h = o;
            if (s && "complex64" === d.dtype) {
                var f = h.texData.get(d.dataId)
                  , x = h.texData.get(p.dataId)
                  , v = u([[f.complexTensorInfos.real, x.complexTensorInfos.real], [f.complexTensorInfos.imag, x.complexTensorInfos.imag]].map((function(e) {
                    var r = u(e, 2)
                      , a = r[0]
                      , i = r[1]
                      , o = {
                        dataId: a.dataId,
                        dtype: a.dtype,
                        shape: d.shape
                    }
                      , s = {
                        dataId: i.dataId,
                        dtype: i.dtype,
                        shape: p.shape
                    }
                      , l = new Ht(t,d.shape,p.shape);
                    return h.runWebGLProgram(l, [o, s], n.upcastType(a.dtype, i.dtype))
                }
                )), 2)
                  , m = v[0]
                  , g = v[1]
                  , b = Yt({
                    inputs: {
                        real: m,
                        imag: g
                    },
                    backend: h
                });
                return h.disposeIntermediateTensorInfo(m),
                h.disposeIntermediateTensorInfo(g),
                b
            }
            var C, y = c || n.upcastType(d.dtype, p.dtype);
            if (("string" === d.dtype || "string" === p.dtype || h.shouldExecuteOnCPU([d, p])) && null != l) {
                var k = h.texData.get(d.dataId).values
                  , I = h.texData.get(p.dataId).values
                  , w = "string" === d.dtype ? n.backend_util.fromUint8ToStringArray(k) : k
                  , S = "string" === d.dtype ? n.backend_util.fromUint8ToStringArray(I) : I
                  , R = u(l(d.shape, p.shape, w, S, y), 2)
                  , T = R[0]
                  , E = R[1]
                  , N = h.makeTensorInfo(E, y);
                return h.texData.get(N.dataId).values = T,
                N
            }
            return C = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") && null != r ? new jt(r,d.shape,p.shape,i) : new Ht(t,d.shape,p.shape),
            h.runWebGLProgram(C, [d, p], y)
        }
    }
    function ir(e, n) {
        if (void 0 === n && (n = !1),
        "linear" === e)
            return "return x;";
        if ("relu" === e)
            return n ? "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n" : "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n";
        if ("elu" === e)
            return n ? "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n" : "return (x >= 0.0) ? x : (exp(x) - 1.0);";
        if ("relu6" === e)
            return n ? "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n" : "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";
        if ("prelu" === e)
            return n ? nr : er;
        if ("leakyrelu" === e)
            return n ? Jt : Zt;
        if ("sigmoid" === e)
            return "return 1.0 / (1.0 + exp(-1.0 * x));";
        throw new Error("Activation " + e + " has not been implemented for the WebGL backend.")
    }
    var or = function(e, n, t, r, a, i, o, s, u) {
        void 0 === r && (r = !1),
        void 0 === a && (a = !1),
        void 0 === i && (i = !1),
        void 0 === o && (o = null),
        void 0 === s && (s = !1),
        void 0 === u && (u = !1),
        this.variableNames = ["matrixA", "matrixB"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = t,
        this.enableShapeUniforms = De(this.outputShape.length);
        var l = r ? e[1] : e[2]
          , c = Math.ceil(l / 2)
          , d = r ? "i * 2, rc.y" : "rc.y, i * 2"
          , p = a ? "rc.z, i * 2" : "i * 2, rc.z"
          , h = r ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"]
          , f = a ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"]
          , x = ""
          , v = "";
        o && (x = s ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + o + "\n        }" : u ? "vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          " + o + "\n        }" : "vec4 activation(vec4 x) {\n          " + o + "\n        }",
        v = "result = activation(result);");
        var m = i ? "result += getBiasAtOutCoords();" : "";
        i && this.variableNames.push("bias"),
        s && this.variableNames.push("preluActivationWeights"),
        u && this.variableNames.push("leakyreluAlpha");
        var g = "rc.x"
          , b = "rc.x";
        e[0] < n[0] ? g = "int(min(float(rc.x), " + (e[0] - 1) + ".))" : n[0] < e[0] && (b = "int(min(float(rc.x), " + (n[0] - 1) + ".))"),
        this.userCode = "\n      " + x + "\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = " + c + ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + c + "; i++) {\n          int batchA = " + g + ";\n          int batchB = " + b + ";\n          vec4 a = getMatrixA(batchA, " + d + ");\n          vec4 b = getMatrixB(batchB, " + p + ");\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (" + h[0] + " * " + f[0] + ");\n          result += (" + h[1] + " * " + f[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        " + m + "\n\n        " + v + "\n\n        setOutput(result);\n      }\n    "
    }
      , sr = "return areal * breal - aimag * bimag;"
      , ur = "return areal * bimag + aimag * breal;"
      , lr = function(e, t, r) {
        this.variableNames = ["AReal", "AImag", "BReal", "BImag"],
        this.outputShape = n.backend_util.assertAndGetBroadcastShape(t, r),
        this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + e + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    "
    }
      , cr = "return a * b;";
    function dr(e) {
        var t, r = e.inputs, a = e.backend, i = r.a, o = r.b, s = n.backend_util.upcastType(i.dtype, o.dtype);
        if ("complex64" === i.dtype) {
            var l = a.texData.get(i.dataId)
              , c = a.texData.get(o.dataId)
              , d = new lr(sr,i.shape,o.shape)
              , p = new lr(ur,i.shape,o.shape)
              , h = [{
                dataId: l.complexTensorInfos.real.dataId,
                dtype: l.complexTensorInfos.real.dtype,
                shape: i.shape
            }, {
                dataId: l.complexTensorInfos.imag.dataId,
                dtype: l.complexTensorInfos.imag.dtype,
                shape: i.shape
            }, {
                dataId: c.complexTensorInfos.real.dataId,
                dtype: c.complexTensorInfos.real.dtype,
                shape: o.shape
            }, {
                dataId: c.complexTensorInfos.imag.dataId,
                dtype: c.complexTensorInfos.imag.dtype,
                shape: o.shape
            }]
              , f = a.runWebGLProgram(d, h, "float32")
              , x = a.runWebGLProgram(p, h, "float32")
              , v = Yt({
                inputs: {
                    real: f,
                    imag: x
                },
                backend: a
            });
            return a.disposeIntermediateTensorInfo(f),
            a.disposeIntermediateTensorInfo(x),
            v
        }
        if (a.shouldExecuteOnCPU([i, o])) {
            l = a.texData.get(i.dataId),
            c = a.texData.get(o.dataId);
            var m = u(rt(i.shape, o.shape, l.values, c.values, s), 2)
              , g = m[0]
              , b = m[1]
              , C = a.makeTensorInfo(b, s);
            return a.texData.get(C.dataId).values = g,
            C
        }
        return t = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new jt(cr,i.shape,o.shape) : new Ht(cr,i.shape,o.shape),
        a.runWebGLProgram(t, [i, o], s)
    }
    var pr = {
        kernelName: n.Multiply,
        backendName: "webgl",
        kernelFunc: dr
    };
    function hr(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.x
          , o = a.shape
          , s = r
          , u = n.util.sizeFromShape(i.shape)
          , c = n.util.inferFromImplicitShape(o, u)
          , d = n.util.sizeFromShape(c);
        n.util.assert(u === d, (function() {
            return "The new shape (" + c + ") has " + d + " elements and the old shape (" + i.shape + ") has " + u + " elements. The new shape and old shape must have the same number of elements."
        }
        ));
        var p = s.texData.get(i.dataId);
        return !p.isPacked || ee(i.shape, c) || null !== p.texture && ee(p.shape, c) ? (s.incRef(i.dataId),
        {
            dataId: i.dataId,
            shape: c,
            dtype: i.dtype
        }) : function(e, n, t) {
            var r = l([Y(e.shape)], Q(e.shape))
              , a = {
                dtype: e.dtype,
                shape: r,
                dataId: e.dataId
            }
              , i = l([Y(n)], Q(n))
              , o = new Et(i,r)
              , s = [r]
              , u = t.runWebGLProgram(o, [a], e.dtype, s, !0);
            return {
                dataId: u.dataId,
                shape: n,
                dtype: u.dtype
            }
        }(i, c, s)
    }
    var fr = {
        kernelName: n.Reshape,
        backendName: "webgl",
        kernelFunc: hr
    }
      , xr = function(e, t) {
        this.variableNames = ["x"];
        var r = e.windowSize
          , a = e.batchSize
          , i = e.inSize
          , o = e.outSize;
        this.outputShape = [a, o];
        var s = 4 * Math.floor(r / 4)
          , u = r % 4
          , l = "sumValue += dot(values, ones);";
        if (null != t) {
            var c = 1 / t;
            l = "sumValue += dot(values * " + (n.util.isInt(c) ? c.toPrecision(2) : c) + ", ones);"
        }
        var d = "";
        i % r > 0 && (d = "\n        if (inIdx < 0 || inIdx >= " + i + ") {\n          return 0.0;\n        }\n      "),
        this.userCode = "\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + d + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r + ";\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + l + "\n        }\n\n        int inIdx = inOffset + " + s + ";\n        if (" + (1 === u) + ") {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          " + l + "\n        } else if (" + (2 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          " + l + "\n        } else if (" + (3 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          " + l + "\n        }\n        setOutput(sumValue);\n      }\n    "
    }
      , vr = function(e, n) {
        this.variableNames = ["x"];
        var t = e.windowSize
          , r = e.batchSize
          , a = e.inSize
          , i = e.outSize;
        this.outputShape = [r, i];
        var o = "0.0"
          , s = "";
        "prod" === n ? o = "1.0" : "min" === n ? (o = "1.0 / 1e-20",
        s = "min") : "max" === n && (o = "-1.0 / 1e-20",
        s = "max");
        var u = n + "(" + n + "(" + n + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
        "sum" === n ? u = "sumValue" : "prod" === n ? u = "prodValue" : "all" === n ? u = "allValue" : "any" === n && (u = "anyValue");
        var l = 4 * Math.floor(t / 4)
          , c = t % 4
          , d = "\n      if (" + ("sum" === n) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === n) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + s + "(values, minMaxValue);\n        if (" + ("min" === n) + " || " + ("max" === n) + ") {\n          minMaxValue = " + s + "(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    "
          , p = "vec4";
        "all" === n ? (o = "1.0",
        d = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",
        p = "bvec4") : "any" === n && (o = "0.0",
        d = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",
        p = "bvec4");
        var h = "";
        a % t > 0 && (h = "\n        if (inIdx < 0 || inIdx >= " + a + ") {\n          return initializationValue;\n        }\n      "),
        this.userCode = "\n      const float initializationValue = " + o + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + h + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + t + ";\n\n        vec4 minMaxValue = vec4(" + o + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + l + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + d + "\n        }\n\n        int inIdx = inOffset + " + l + ";\n        if (" + (1 === c) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + d + "\n        } else if (" + (2 === c) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + d + "\n        } else if (" + (3 === c) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + d + "\n        }\n        setOutput(" + u + ");\n      }\n    "
    };
    function mr(e, t, r, a) {
        for (var i = function(e) {
            for (var t = []; 0 === t.length || 1 !== t[t.length - 1].outSize; ) {
                var r = t.length ? t[t.length - 1].outSize : e[1]
                  , a = n.backend_util.computeOptimalWindowSize(r);
                t.push({
                    inSize: r,
                    windowSize: a,
                    outSize: Math.ceil(r / a)
                })
            }
            return t
        }(e.shape), o = e, s = 0; s < i.length; s++) {
            var u, l = i[s], c = l.inSize, d = l.windowSize, p = l.outSize, h = void 0;
            h = "mean" === r ? 0 === s ? new xr({
                windowSize: d,
                inSize: c,
                batchSize: e.shape[0],
                outSize: p
            },c) : new xr({
                windowSize: d,
                inSize: c,
                batchSize: e.shape[0],
                outSize: p
            }) : new vr({
                windowSize: d,
                inSize: c,
                batchSize: e.shape[0],
                outSize: p
            },r),
            u = o,
            o = a.runWebGLProgram(h, [o], t),
            u.dataId !== e.dataId && a.disposeIntermediateTensorInfo(u)
        }
        return o
    }
    var gr = function(e, n) {
        this.variableNames = ["A"];
        for (var t = new Array(e.length), r = 0; r < t.length; r++)
            t[r] = e[n[r]];
        this.outputShape = t,
        this.rank = t.length;
        var a = Ne(this.rank)
          , i = function(e) {
            var n = e.length;
            if (n > 6)
                throw Error("Transpose for rank " + n + " is not yet supported");
            for (var t = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], r = new Array(n), a = 0; a < e.length; a++)
                r[e[a]] = t[a];
            return r.join()
        }(n);
        this.userCode = "\n    void main() {\n      " + a + " resRC = getOutputCoords();\n      setOutput(getA(" + i + "));\n    }\n    "
    };
    var br = function(e, n) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0;
        for (var t = new Array(e.length), r = 0; r < t.length; r++)
            t[r] = e[n[r]];
        if (this.outputShape = t,
        this.rank = t.length,
        this.rank > 6)
            throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
        var a = Ne(this.rank)
          , i = St("rc", this.rank)
          , o = new Array(this.rank);
        for (r = 0; r < n.length; r++)
            o[n[r]] = i[r];
        var s = "vec2(" + o.slice(-2).join() + ")"
          , u = "++" + i[this.rank - 1] + " < " + t[this.rank - 1]
          , l = "getChannel(getA(" + o.join() + "), " + s + ")";
        this.userCode = "\n    void main() {\n      " + a + " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = " + l + ";\n      if(" + u + ") {\n        result[1] = " + l + ";\n      }\n      --" + i[this.rank - 1] + ";\n      if(++" + i[this.rank - 2] + " < " + t[this.rank - 2] + ") {\n        result[2] = " + l + ";\n        if(" + u + ") {\n          result[3] = " + l + ";\n        }\n      }\n      setOutput(result);\n    }\n    "
    };
    function Cr(e, t, r) {
        var a = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new br(e.shape,t) : new gr(e.shape,t);
        return r.runWebGLProgram(a, [e], e.dtype)
    }
    function yr(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs;
        return function(e, t, r, a) {
            var i = t
              , o = e.shape.length
              , s = n.util.parseAxisParam(i, e.shape)
              , l = s
              , c = n.backend_util.getAxesPermutation(l, o)
              , d = null != c
              , p = e;
            d && (p = Cr(e, c, a),
            l = n.backend_util.getInnerMostAxes(l.length, o)),
            n.backend_util.assertAxesAreInnerMostDims("sum", l, o);
            var h = u(n.backend_util.computeOutAndReduceShapes(p.shape, l), 2)
              , f = h[0]
              , x = h[1]
              , v = f;
            r && (v = n.backend_util.expandShapeToKeepDim(f, s));
            var m = n.util.sizeFromShape(x)
              , g = hr({
                inputs: {
                    x: p
                },
                attrs: {
                    shape: [n.util.sizeFromShape(e.shape) / m, m]
                },
                backend: a
            })
              , b = mr(g, n.sumOutType(e.dtype), "sum", a)
              , C = hr({
                inputs: {
                    x: b
                },
                attrs: {
                    shape: v
                },
                backend: a
            });
            return a.disposeIntermediateTensorInfo(g),
            a.disposeIntermediateTensorInfo(b),
            d && a.disposeIntermediateTensorInfo(p),
            C
        }(t.x, a.axis, a.keepDims, r)
    }
    var kr = {
        kernelName: n.Sum,
        backendName: "webgl",
        kernelFunc: yr
    };
    function Ir(e) {
        for (var n, t = e.inputs, r = e.backend, a = e.attrs, i = t.x, o = a.perm, s = r, u = i.shape.length, l = new Array(u), c = 0; c < l.length; c++)
            l[c] = i.shape[o[c]];
        if (s.shouldExecuteOnCPU([i])) {
            var d = s.texData.get(i.dataId).values
              , p = It(d, i.shape, i.dtype, o, l);
            n = s.makeTensorInfo(l, i.dtype),
            s.texData.get(n.dataId).values = p
        } else
            n = Cr(i, o, s);
        return n
    }
    var wr = {
        kernelName: n.Transpose,
        backendName: "webgl",
        kernelFunc: Ir
    };
    function Sr(e) {
        var t, r, a = e.a, i = e.b, o = e.transposeA, u = e.transposeB, l = e.backend, c = e.bias, d = void 0 === c ? null : c, p = e.preluActivationWeights, h = void 0 === p ? null : p, f = e.leakyreluAlpha, x = void 0 === f ? 0 : f, v = e.activation, m = void 0 === v ? null : v, g = a.shape.length, b = i.shape.length, C = o ? a.shape[g - 2] : a.shape[g - 1], y = u ? i.shape[b - 1] : i.shape[b - 2], k = o ? a.shape[g - 1] : a.shape[g - 2], I = u ? i.shape[b - 2] : i.shape[b - 1], w = a.shape.slice(0, -2), S = i.shape.slice(0, -2), R = n.util.sizeFromShape(w), T = n.util.sizeFromShape(S), E = n.broadcast_util.assertAndGetBroadcastShape(a.shape.slice(0, -2), i.shape.slice(0, -2)).concat([k, I]);
        n.util.assert(C === y, (function() {
            return "Error in matMul: inner shapes (" + C + ") and (" + y + ") of Tensors with shapes " + a.shape + " and " + i.shape + " and transposeA=" + o + " and transposeB=" + u + " must match."
        }
        ));
        var N, A = o ? [R, C, k] : [R, k, C], F = u ? [T, I, y] : [T, y, I], _ = hr({
            inputs: {
                x: a
            },
            backend: l,
            attrs: {
                shape: A
            }
        }), O = hr({
            inputs: {
                x: i
            },
            backend: l,
            attrs: {
                shape: F
            }
        }), D = [_, O], P = Math.max(R, T), L = o ? _.shape[1] : _.shape[2], B = null != d, V = null != h, U = "leakyrelu" === m, W = null != m ? ir(m, !0) : null;
        if ((1 === k || 1 === I) && L > 1e3 && !1 === (B || V || U || null != W)) {
            var M = _
              , G = O;
            o && (M = Ir({
                inputs: {
                    x: _
                },
                backend: l,
                attrs: {
                    perm: [0, 2, 1]
                }
            }),
            D.push(M)),
            u && (G = Ir({
                inputs: {
                    x: O
                },
                backend: l,
                attrs: {
                    perm: [0, 2, 1]
                }
            }),
            D.push(G));
            var z = 1 === I
              , X = M;
            1 !== I && (X = hr({
                inputs: {
                    x: M
                },
                backend: l,
                attrs: {
                    shape: [P, L, 1]
                }
            }),
            D.push(X));
            var H = 1 === I ? 2 : 1
              , j = G;
            z && (j = hr({
                inputs: {
                    x: G
                },
                backend: l,
                attrs: {
                    shape: [P, 1, L]
                }
            }),
            D.push(j));
            var K = dr({
                inputs: {
                    a: X,
                    b: j
                },
                backend: l
            });
            N = yr({
                inputs: {
                    x: K
                },
                backend: l,
                attrs: {
                    axis: H,
                    keepDims: !0
                }
            }),
            D.push(K)
        } else {
            var q = n.upcastType(a.dtype, i.dtype)
              , Y = new or(A,F,[P, k, I],o,u,B,W,V,U)
              , Q = [_, O];
            if (null != d && Q.push(d),
            V && Q.push(h),
            U) {
                var Z = l.makeTensorInfo([], "float32", n.util.createScalarValue(x, "float32"));
                Q.push(Z),
                D.push(Z)
            }
            N = l.runWebGLProgram(Y, Q, q)
        }
        var J = hr({
            inputs: {
                x: N
            },
            backend: l,
            attrs: {
                shape: E
            }
        });
        D.push(N);
        try {
            for (var $ = s(D), ee = $.next(); !ee.done; ee = $.next()) {
                var ne = ee.value;
                l.disposeIntermediateTensorInfo(ne)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                ee && !ee.done && (r = $.return) && r.call($)
            } finally {
                if (t)
                    throw t.error
            }
        }
        return J
    }
    var Rr = {
        kernelName: n._FusedMatMul,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.a
              , i = n.b
              , o = n.bias
              , s = n.preluActivationWeights
              , u = r.transposeA
              , l = r.transposeB
              , c = r.activation;
            return Sr({
                a: a,
                b: i,
                transposeA: u,
                transposeB: l,
                backend: t,
                bias: o,
                preluActivationWeights: s,
                leakyreluAlpha: r.leakyreluAlpha,
                activation: c
            })
        }
    }
      , Tr = "return abs(x);";
    var Er = {
        kernelName: n.Abs,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = r.x;
            if (a.shouldExecuteOnCPU([i]) && "complex64" !== i.dtype) {
                var o = a.texData.get(i.dataId)
                  , s = ct(o.values);
                return a.makeTensorInfo(i.shape, i.dtype, s)
            }
            return t = n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS") ? new Bt(i.shape,Tr) : new Ot(i.shape,Tr),
            a.runWebGLProgram(t, [i], i.dtype)
        }
    }
      , Nr = rr({
        opSnippet: "if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n"
    })
      , Ar = {
        kernelName: n.Acos,
        backendName: "webgl",
        kernelFunc: Nr
    }
      , Fr = rr({
        opSnippet: "if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));"
    })
      , _r = {
        kernelName: n.Acosh,
        backendName: "webgl",
        kernelFunc: Fr
    }
      , Or = "return a + b;"
      , Dr = ar({
        opSnippet: Or,
        packedOpSnippet: Or,
        supportsComplex: !0,
        cpuKernelImpl: Bn
    })
      , Pr = {
        kernelName: n.Add,
        backendName: "webgl",
        kernelFunc: Dr
    }
      , Lr = function(e, n) {
        this.outputShape = [],
        this.outputShape = e,
        this.variableNames = n.map((function(e, n) {
            return "T" + n
        }
        ));
        var t = [];
        this.variableNames.forEach((function(e) {
            t.push("float v" + e + " = get" + e + "AtOutCoords();")
        }
        ));
        var r = this.variableNames.map((function(e) {
            return "v" + e
        }
        )).join(" + ");
        this.userCode = "\n      void main() {\n        " + t.join("\n        ") + "\n\n        float result = " + r + ";\n        setOutput(result);\n      }\n    "
    }
      , Br = function(e, n) {
        this.outputShape = [],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = e,
        this.variableNames = n.map((function(e, n) {
            return "T" + n
        }
        ));
        var t = [];
        this.variableNames.forEach((function(e) {
            t.push("vec4 v" + e + " = get" + e + "AtOutCoords();")
        }
        ));
        var r = this.variableNames.map((function(e) {
            return "v" + e
        }
        )).join(" + ");
        this.userCode = "\n      void main() {\n        " + t.join("\n        ") + "\n\n        vec4 result = " + r + ";\n        setOutput(result);\n      }\n    "
    };
    var Vr = {
        kernelName: n.AddN,
        backendName: "webgl",
        kernelFunc: function e(t) {
            var r = t.inputs
              , a = t.backend
              , i = r;
            if (1 === i.length)
                return Kt({
                    inputs: {
                        x: i[0]
                    },
                    backend: a
                });
            if (i.length > n.env().get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
                var o = Math.floor(i.length / 2)
                  , s = e({
                    inputs: i.slice(0, o),
                    backend: a
                })
                  , u = e({
                    inputs: i.slice(o),
                    backend: a
                });
                return e({
                    inputs: [s, u],
                    backend: a
                })
            }
            var l = i.map((function(e) {
                return e.dtype
            }
            )).reduce((function(e, t) {
                return n.upcastType(e, t)
            }
            ))
              , c = i.map((function(e) {
                return e.shape
            }
            ))
              , d = n.env().getBool("WEBGL_PACK") ? new Br(i[0].shape,c) : new Lr(i[0].shape,c);
            return a.runWebGLProgram(d, i, l)
        }
    };
    var Ur = {
        kernelName: n.All,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.axis
              , s = a.keepDims
              , l = i.shape.length
              , c = n.util.parseAxisParam(o, i.shape)
              , d = c
              , p = n.backend_util.getAxesPermutation(d, l)
              , h = i;
            null != p && (h = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: p
                }
            }),
            d = n.backend_util.getInnerMostAxes(d.length, l)),
            n.backend_util.assertAxesAreInnerMostDims("all", d, l);
            var f, x = u(n.backend_util.computeOutAndReduceShapes(h.shape, d), 2), v = x[0], m = x[1], g = hr({
                inputs: {
                    x: h
                },
                backend: r,
                attrs: {
                    shape: [-1, n.util.sizeFromShape(m)]
                }
            }), b = mr(g, g.dtype, "all", r);
            return f = hr(s ? {
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: n.backend_util.expandShapeToKeepDim(v, c)
                }
            } : {
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: v
                }
            }),
            r.disposeIntermediateTensorInfo(g),
            r.disposeIntermediateTensorInfo(b),
            null != p && r.disposeIntermediateTensorInfo(h),
            f
        }
    };
    var Wr = {
        kernelName: n.Any,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.axis
              , s = a.keepDims
              , l = i.shape.length
              , c = n.util.parseAxisParam(o, i.shape)
              , d = c
              , p = n.backend_util.getAxesPermutation(d, l)
              , h = i;
            null != p && (h = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: p
                }
            }),
            d = n.backend_util.getInnerMostAxes(d.length, l)),
            n.backend_util.assertAxesAreInnerMostDims("any", d, l);
            var f, x = u(n.backend_util.computeOutAndReduceShapes(h.shape, d), 2), v = x[0], m = x[1], g = hr({
                inputs: {
                    x: h
                },
                backend: r,
                attrs: {
                    shape: [-1, n.util.sizeFromShape(m)]
                }
            }), b = mr(g, g.dtype, "any", r);
            return f = hr(s ? {
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: n.backend_util.expandShapeToKeepDim(v, c)
                }
            } : {
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: v
                }
            }),
            r.disposeIntermediateTensorInfo(g),
            r.disposeIntermediateTensorInfo(b),
            null != p && r.disposeIntermediateTensorInfo(h),
            f
        }
    }
      , Mr = function(e, n, t) {
        this.variableNames = ["A"];
        var r = e.windowSize
          , a = e.batchSize
          , i = e.outSize;
        t || this.variableNames.push("bestIndicesA"),
        this.outputShape = [a, i];
        var o = "max" === n ? ">" : "<"
          , s = t ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + r + "; i++) {\n          int inIdx = " + s + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + o + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    "
    }
      , Gr = function(e, t, r, a) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        n.util.assert(e.length > 2, (function() {
            return "Packed arg" + (r.charAt(0).toUpperCase() + r.slice(1)) + " supports only inputs with rank above 2."
        }
        ));
        var i = e[e.length - 1]
          , o = Math.ceil(i / t);
        this.outputShape = e.slice(0, -1),
        o > 1 && this.outputShape.push(o),
        a || this.variableNames.push("bestIndicesA");
        var s, u, l = this.outputShape, c = l.length, d = Ne(c), p = Rt("coords", c);
        if (1 === o) {
            var h = Ne(u = c + 1);
            s = "\n        " + h + " sourceLocR = " + h + "(" + p.join() + ", 0);\n        ++" + p[c - 1] + ";\n        " + h + " sourceLocG = " + h + "(" + p.join() + ", 0);\n        ++" + p[c - 2] + ";\n        " + h + " sourceLocA = " + h + "(" + p.join() + ", 0);\n        --" + p[c - 1] + ";\n        " + h + " sourceLocB = " + h + "(" + p.join() + ", 0);\n        --" + p[c - 2] + ";"
        } else
            u = c,
            s = "\n        " + d + " sourceLocR = coords;\n        ++" + p[c - 1] + ";\n        " + d + " sourceLocG = coords;\n        ++" + p[c - 2] + ";\n        " + d + " sourceLocA = coords;\n        --" + p[c - 1] + ";\n        " + d + " sourceLocB = coords;\n        --" + p[c - 2] + ";";
        var f = ["x", "y", "z", "w", "u", "v"].slice(0, u)
          , x = "." + f[u - 1]
          , v = f.map((function(e) {
            return "int " + e
        }
        ))
          , m = Rt("sourceLocR", u - 1).concat("inIdx.r")
          , g = Rt("sourceLocG", u - 1).concat("inIdx.g")
          , b = Rt("sourceLocB", u - 1).concat("inIdx.b")
          , C = Rt("sourceLocA", u - 1).concat("inIdx.a")
          , y = "max" === r ? "greaterThan" : "lessThan"
          , k = a ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(" + m.join() + "),\n                             getBestIndicesAChannel(" + g.join() + "),\n                             getBestIndicesAChannel(" + b.join() + "),\n                             getBestIndicesAChannel(" + C.join() + ")));"
          , I = "vec4(\n            getAChannel(" + m.join() + "),\n            hasNextCol ? getAChannel(" + g.join() + ") : 0.,\n            hasNextRow ? getAChannel(" + b.join() + ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(" + C.join() + ") : 0.)"
          , w = a ? "" : "\n      float getBestIndicesAChannel(" + v.join() + ") {\n        return getChannel(getBestIndicesA(" + f.join() + "),\n                                          vec2(" + f.slice(-2).join() + "));\n      }";
        this.userCode = "\n      float getAChannel(" + v.join() + ") {\n        return getChannel(getA(" + f.join() + "),\n                               vec2(" + f.slice(-2).join() + "));\n      }\n      " + w + "\n      void main() {\n        " + d + " coords = getOutputCoords();\n        bool hasNextCol = " + p[c - 1] + " < " + (l[c - 1] - 1) + ";\n        bool hasNextRow = " + p[c - 2] + " < " + (l[c - 2] - 1) + ";\n        " + s + "\n        ivec4 srcIdx = ivec4(sourceLocR" + x + ", sourceLocG" + x + ",\n          sourceLocB" + x + ", sourceLocA" + x + ") * " + t + ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = " + I + ";\n\n        for (int i = 0; i < " + t + "; i++) {\n          inIdx = srcIdx;\n          " + k + "\n          vec4 candidate = " + I + ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(" + y + "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    "
    };
    function zr(e, t, r, a) {
        void 0 === a && (a = null);
        var i = t.shape[0]
          , o = t.shape[1];
        null != a && (i = a.shape[0],
        o = a.shape[1]);
        var s = n.backend_util.computeOptimalWindowSize(o)
          , u = {
            windowSize: s,
            inSize: o,
            batchSize: i,
            outSize: Math.ceil(o / s)
        }
          , l = new Mr(u,r,null == a)
          , c = [t];
        null != a && c.push(a);
        var d = e.runWebGLProgram(l, c, "int32");
        if (1 === d.shape[1])
            return d;
        var p = zr(e, t, r, d);
        return e.disposeIntermediateTensorInfo(d),
        p
    }
    function Xr(e, t, r, a) {
        void 0 === a && (a = null);
        var i = null != a ? a.shape : t.shape
          , o = i[i.length - 1]
          , s = n.backend_util.computeOptimalWindowSize(o)
          , u = new Gr(i,s,r,null == a)
          , l = null == a ? [t] : [t, a]
          , c = e.runWebGLProgram(u, l, "int32");
        if (c.shape.length === t.shape.length) {
            var d = Xr(e, t, r, c);
            return e.disposeIntermediateTensorInfo(c),
            d
        }
        return c
    }
    function Hr(e, t, r, a) {
        var i = [r];
        if (n.backend_util.assertAxesAreInnerMostDims("arg" + a.charAt(0).toUpperCase() + a.slice(1), i, t.shape.length),
        !n.env().getBool("WEBGL_PACK_REDUCE") || t.shape.length <= 2) {
            var o = []
              , s = e.texData.get(t.dataId)
              , l = t;
            null !== s && s.isPacked && (l = e.unpackTensor(t),
            o.push(l));
            var c = u(n.backend_util.computeOutAndReduceShapes(l.shape, i), 2)
              , d = c[0]
              , p = c[1]
              , h = n.util.sizeFromShape(p)
              , f = hr({
                inputs: {
                    x: l
                },
                backend: e,
                attrs: {
                    shape: [-1, h]
                }
            });
            o.push(f);
            var x = zr(e, f, a);
            o.push(x);
            var v = hr({
                inputs: {
                    x: x
                },
                backend: e,
                attrs: {
                    shape: d
                }
            });
            return o.forEach((function(n) {
                return e.disposeIntermediateTensorInfo(n)
            }
            )),
            v
        }
        return Xr(e, t, a)
    }
    var jr = {
        kernelName: n.ArgMax,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.axis
              , s = n.util.parseAxisParam(o, i.shape)
              , u = n.backend_util.getAxesPermutation(s, i.shape.length)
              , l = i
              , c = [];
            null != u && (l = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: u
                }
            }),
            c.push(l),
            s = n.backend_util.getInnerMostAxes(s.length, l.shape.length)),
            n.backend_util.assertAxesAreInnerMostDims("argMax", [s[0]], l.shape.length);
            var d = Hr(r, l, s[0], "max");
            return c.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            d
        }
    };
    var Kr = {
        kernelName: n.ArgMin,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.axis
              , s = n.util.parseAxisParam(o, i.shape)
              , u = n.backend_util.getAxesPermutation(s, i.shape.length)
              , l = i
              , c = [];
            null != u && (l = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: u
                }
            }),
            c.push(l),
            s = n.backend_util.getInnerMostAxes(s.length, l.shape.length)),
            n.backend_util.assertAxesAreInnerMostDims("argMin", [s[0]], l.shape.length);
            var d = Hr(r, l, s[0], "min");
            return c.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            d
        }
    }
      , qr = rr({
        opSnippet: "if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n"
    })
      , Yr = {
        kernelName: n.Asin,
        backendName: "webgl",
        kernelFunc: qr
    }
      , Qr = rr({
        opSnippet: "if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));"
    })
      , Zr = {
        kernelName: n.Asinh,
        backendName: "webgl",
        kernelFunc: Qr
    }
      , Jr = rr({
        opSnippet: "if (isnan(x)) return x;\n  return atan(x);\n"
    })
      , $r = {
        kernelName: n.Atan,
        backendName: "webgl",
        kernelFunc: Jr
    }
      , ea = ar({
        opSnippet: "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",
        packedOpSnippet: "\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"
    })
      , na = {
        kernelName: n.Atan2,
        backendName: "webgl",
        kernelFunc: ea
    }
      , ta = rr({
        opSnippet: "if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;"
    })
      , ra = {
        kernelName: n.Atanh,
        backendName: "webgl",
        kernelFunc: ta
    }
      , aa = function(e, n, t, r, a) {
        if (void 0 === r && (r = !1),
        void 0 === a && (a = !1),
        this.variableNames = ["x"],
        "avg" === n && t)
            throw new Error("Cannot compute positions for average pool.");
        var i = e.filterWidth
          , o = e.strideHeight
          , s = e.strideWidth
          , u = e.dilationHeight
          , l = e.dilationWidth
          , c = e.effectiveFilterHeight
          , d = e.effectiveFilterWidth
          , p = e.padInfo.top
          , h = e.padInfo.left;
        this.outputShape = e.outShape;
        var f = "avg" === n
          , x = "((batch  * " + e.inHeight + " + xR) * " + e.inWidth + " + xC) * " + e.inChannels + " + d"
          , v = "(xR * " + e.inWidth + " + xC) * " + e.inChannels + " + d"
          , m = "0.0";
        if (f || (m = "-1.0 / 1e-20"),
        t)
            this.userCode = "\n        const ivec2 strides = ivec2(" + o + ", " + s + ");\n        const ivec2 pads = ivec2(" + p + ", " + h + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + c + ";\n              wR += " + u + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + d + ";\n                wC += " + l + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + e.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = " + (r ? a ? x : v : "wR * " + d + " + wC") + ";\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
        else {
            var g = n + "(" + n + "(" + n + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
            "avg" === n && (g = "avgValue / count");
            var b = 4 * Math.floor(i / 4)
              , C = i % 4
              , y = "\n      if (" + f + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
            this.userCode = "\n      const ivec2 strides = ivec2(" + o + ", " + s + ");\n      const ivec2 pads = ivec2(" + p + ", " + h + ");\n      const float initializationValue = " + m + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + e.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + m + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + c + ";\n            wR += " + u + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + e.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + b + "; wC += 4) {\n            int xC = xCCorner + wC * " + l + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + l + ", d),\n              getValue(batch, xR, xC + 2 * " + l + ", d),\n              getValue(batch, xR, xC + 3 * " + l + ", d)\n            );\n\n            " + y + "\n          }\n\n          int xC = xCCorner + " + b + ";\n          if (" + (1 === C) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + y + "\n          } else if (" + (2 === C) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + l + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + y + "\n          } else if (" + (3 === C) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + l + ", d),\n              getValue(batch, xR, xC + 2 * " + l + ", d),\n              initializationValue\n            );\n\n            " + y + "\n          }\n        }\n        setOutput(" + g + ");\n      }\n    "
        }
    }
      , ia = function(e, n, t, r, a) {
        if (void 0 === r && (r = !1),
        void 0 === a && (a = !1),
        this.variableNames = ["x"],
        "avg" === n && t)
            throw new Error("Cannot compute positions for average pool.");
        var i = e.filterWidth
          , o = e.strideDepth
          , s = e.strideHeight
          , u = e.strideWidth
          , l = e.dilationDepth
          , c = e.dilationHeight
          , d = e.dilationWidth
          , p = e.effectiveFilterDepth
          , h = e.effectiveFilterHeight
          , f = e.effectiveFilterWidth
          , x = e.padInfo.front
          , v = e.padInfo.top
          , m = e.padInfo.left;
        this.outputShape = e.outShape;
        var g = "avg" === n
          , b = "0.0";
        if (g || (b = "-1.0 / 1e-20"),
        t)
            this.userCode = "\n        const ivec3 strides =\n            ivec3(" + o + ", " + s + ", " + u + ");\n        const ivec3 pads = ivec3(" + x + ", " + v + ", " + m + ");\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < " + p + ";\n              wD += " + l + ") {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= " + e.inDepth + ") {\n              continue;\n            }\n\n            for (int wR = 0; wR < " + h + ";\n                wR += " + c + ") {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= " + e.inHeight + ") {\n                continue;\n              }\n\n              for (int wC = 0; wC < " + f + ";\n                  wC += " + d + ") {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= " + e.inWidth + ") {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = " + (r ? a ? "(((batch * " + e.inDepth + " + xD) * " + e.inHeight + " + xR) * " + e.inWidth + " + xC) * " + e.inChannels + " + ch" : "((xD * " + e.inHeight + " + xR) * " + e.inWidth + " + xC) * " + e.inChannels + " + ch" : "wD * " + h + " * " + f + " +\n                      wR * " + f + " + wC") + ";\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
        else {
            var C = n + "(" + n + "(" + n + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
            "avg" === n && (C = "avgValue / count");
            var y = 4 * Math.floor(i / 4)
              , k = i % 4
              , I = "\n      if (" + g + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
            this.userCode = "\n      const ivec3 strides =\n        ivec3(" + o + ", " + s + ", " + u + ");\n      const ivec3 pads = ivec3(" + x + ", " + v + ", " + m + ");\n      const float initializationValue = " + b + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= " + e.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + b + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < " + p + ";\n            wD += " + l + ") {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= " + e.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h + ";\n            wR += " + c + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + y + "; wC += 4) {\n              int xC = xCCorner + wC * " + d + ";\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + d + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + d + ", ch),\n                getValue(batch, xD, xR, xC + 3 * " + d + ", ch)\n              );\n\n              " + I + "\n            }\n\n            int xC = xCCorner + " + y + ";\n            if (" + (1 === k) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              " + I + "\n            } else if (" + (2 === k) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + d + ", ch),\n                initializationValue,\n                initializationValue\n              );\n\n              " + I + "\n            } else if (" + (3 === k) + ") {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + " + d + ", ch),\n                getValue(batch, xD, xR, xC + 2 * " + d + ", ch),\n                initializationValue\n              );\n\n              " + I + "\n            }\n          }\n          setOutput(" + C + ");\n        }\n      }\n    "
        }
    };
    var oa = {
        kernelName: n.AvgPool,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x;
            ce(i, "avgPool");
            var o = a.filterSize
              , s = a.strides
              , u = a.pad
              , l = a.dimRoundingMode;
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(s, 1), (function() {
                return "Error in avgPool: Either strides or dilations must be 1. Got strides " + s + " and dilations '1'"
            }
            ));
            var c = n.backend_util.computePool2DInfo(i.shape, o, s, 1, u, l);
            if (1 === c.filterWidth && 1 === c.filterHeight && n.util.arraysEqual(c.inShape, c.outShape))
                return Kt({
                    inputs: {
                        x: i
                    },
                    backend: r
                });
            var d = new aa(c,"avg",!1);
            return r.runWebGLProgram(d, [i], "float32")
        }
    };
    var sa = {
        kernelName: n.AvgPool3D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.filterSize
              , s = a.strides
              , u = a.pad
              , l = a.dimRoundingMode
              , c = a.dataFormat
              , d = n.backend_util.computePool3DInfo(i.shape, o, s, [1, 1, 1], u, l, c)
              , p = new ia(d,"avg",!1);
            return r.runWebGLProgram(p, [i], "float32")
        }
    }
      , ua = function(e) {
        this.variableNames = ["dy"],
        this.outputShape = e.inShape;
        var n = e.filterHeight
          , t = e.filterWidth
          , r = e.strideHeight
          , a = e.strideWidth
          , i = e.dilationHeight
          , o = e.dilationWidth
          , s = e.effectiveFilterHeight
          , u = e.effectiveFilterWidth
          , l = s - 1 - e.padInfo.top
          , c = u - 1 - e.padInfo.left
          , d = 1 / (n * t);
        this.userCode = "\n      const ivec2 pads = ivec2(" + l + ", " + c + ");\n      const float avgMultiplier = float(" + d + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + ";\n            wR += " + i + ") {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + u + ";\n            wC+= " + o + ") {\n            float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , la = function(e) {
        this.variableNames = ["dy"],
        this.outputShape = e.inShape;
        var n = e.filterDepth
          , t = e.filterHeight
          , r = e.filterWidth
          , a = e.strideDepth
          , i = e.strideHeight
          , o = e.strideWidth
          , s = e.dilationDepth
          , u = e.dilationHeight
          , l = e.dilationWidth
          , c = e.effectiveFilterDepth
          , d = e.effectiveFilterHeight
          , p = e.effectiveFilterWidth
          , h = c - 1 - e.padInfo.front
          , f = d - 1 - e.padInfo.top
          , x = p - 1 - e.padInfo.left
          , v = 1 / (n * t * r);
        this.userCode = "\n      const ivec3 pads = ivec3(" + h + ", " + f + ", " + x + ");\n      const float avgMultiplier = float(" + v + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + c + ";\n            wD += " + s + ") {\n          float dyD = float(dyDCorner + wD) / " + a + ".0;\n\n          if (dyD < 0.0 || dyD >= " + e.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + d + ";\n              wR += " + u + ") {\n            float dyR = float(dyRCorner + wR) / " + i + ".0;\n\n            if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + p + ";\n                wC += " + l + ") {\n              float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n              if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    };
    var ca = {
        kernelName: n.AvgPool3DGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.input
              , s = a.filterSize
              , u = a.strides
              , l = a.pad
              , c = a.dimRoundingMode
              , d = n.backend_util.computePool3DInfo(o.shape, s, u, [1, 1, 1], l, c)
              , p = new la(d);
            return r.runWebGLProgram(p, [i], o.dtype)
        }
    };
    var da = {
        kernelName: n.AvgPoolGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.input
              , s = o;
            ce([i, o], "avgPoolGrad");
            var u = a.filterSize
              , l = a.strides
              , c = a.pad
              , d = n.backend_util.computePool2DInfo(s.shape, u, l, 1, c)
              , p = new ua(d);
            return r.runWebGLProgram(p, [i], s.dtype)
        }
    };
    var pa = {
        kernelName: n.BatchMatMul,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs;
            return Sr({
                a: n.a,
                b: n.b,
                transposeA: r.transposeA,
                transposeB: r.transposeB,
                backend: t
            })
        }
    }
      , ha = function(e, t, r, a, i, o) {
        this.outputShape = [],
        this.variableNames = ["x", "mean", "variance"],
        n.backend_util.assertAndGetBroadcastShape(e, t),
        n.backend_util.assertAndGetBroadcastShape(e, r);
        var s = "0.0";
        null != a && (n.backend_util.assertAndGetBroadcastShape(e, a),
        this.variableNames.push("offset"),
        s = "getOffsetAtOutCoords()");
        var u = "1.0";
        null != i && (n.backend_util.assertAndGetBroadcastShape(e, i),
        this.variableNames.push("scale"),
        u = "getScaleAtOutCoords()"),
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + s + ";\n        float scale = " + u + ";\n        float inv = scale * inversesqrt(variance + float(" + o + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    "
    }
      , fa = function(e, t, r, a, i, o) {
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.variableNames = ["x", "mean", "variance"],
        n.backend_util.assertAndGetBroadcastShape(e, t),
        n.backend_util.assertAndGetBroadcastShape(e, r);
        var s = "vec4(0.0)";
        null != a && (n.backend_util.assertAndGetBroadcastShape(e, a),
        this.variableNames.push("offset"),
        s = "getOffsetAtOutCoords()");
        var u = "vec4(1.0)";
        null != i && (n.backend_util.assertAndGetBroadcastShape(e, i),
        this.variableNames.push("scale"),
        u = "getScaleAtOutCoords()"),
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        vec4 offset = " + s + ";\n        vec4 scale = " + u + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + o + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    "
    }
      , xa = {
        kernelName: n.FusedBatchNorm,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.mean
              , s = t.variance
              , u = t.offset
              , l = t.scale;
            n.util.assert(o.shape.length === s.shape.length, (function() {
                return "Batch normalization gradient requires mean and variance to have equal ranks."
            }
            )),
            n.util.assert(null == u || o.shape.length === u.shape.length, (function() {
                return "Batch normalization gradient requires mean and offset to have equal ranks."
            }
            )),
            n.util.assert(null == l || o.shape.length === l.shape.length, (function() {
                return "Batch normalization gradient requires mean and scale to have equal ranks."
            }
            ));
            var c = a.varianceEpsilon;
            null == c && (c = .001);
            var d = [i, o, s]
              , p = null;
            null != u && (p = u.shape,
            d.push(u));
            var h = null;
            null != l && (h = l.shape,
            d.push(l));
            var f = n.env().getBool("WEBGL_PACK_NORMALIZATION") ? new fa(i.shape,o.shape,s.shape,p,h,c) : new ha(i.shape,o.shape,s.shape,p,h,c);
            return r.runWebGLProgram(f, d, d[0].dtype)
        }
    }
      , va = function(e) {
        this.variableNames = ["source"],
        this.outputShape = e,
        this.rank = e.length;
        var n = Ne(this.rank);
        this.customUniforms = [{
            name: "start",
            arrayIndex: this.rank,
            type: "int"
        }];
        var t, r = function(e) {
            if (1 === e)
                return "sourceLoc";
            if (e <= 6)
                return ma.slice(0, e).map((function(e) {
                    return "sourceLoc." + e
                }
                )).join(",");
            throw Error("Slicing for rank " + e + " is not yet supported")
        }(this.rank);
        t = "\n        " + n + " sourceLoc;\n        " + n + " coords = getOutputCoords();\n        " + e.map((function(e, n) {
            return "sourceLoc." + ma[n] + " = start[" + n + "] + coords." + ma[n] + ";"
        }
        )).join("\n") + "\n      ",
        this.userCode = "\n      void main() {\n        " + t + "\n        setOutput(getSource(" + r + "));\n      }\n    "
    }
      , ma = ["x", "y", "z", "w", "u", "v"];
    var ga = function(e) {
        this.variableNames = ["source"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = e,
        this.rank = e.length,
        this.customUniforms = [{
            name: "start",
            arrayIndex: this.rank,
            type: "int"
        }];
        var n = Ne(this.rank)
          , t = Rt("coords", this.rank)
          , r = Rt("sourceLoc", this.rank)
          , a = 1 === this.rank ? "sourceLoc" : "vec2(" + r.slice(-2).join() + ")"
          , i = "getChannel(getSource(" + r.join() + "), " + a + ")"
          , o = "\n      result.x = " + i + ";\n      if (++" + t[this.rank - 1] + " < " + e[this.rank - 1] + ") {\n        ++" + r[this.rank - 1] + ";\n        result.y = " + i + ";\n        --" + r[this.rank - 1] + ";\n      }\n    "
          , s = 1 === this.rank ? "" : "\n      --" + t[this.rank - 1] + ";\n      if (++" + t[this.rank - 2] + " < " + e[this.rank - 2] + ") {\n        ++" + r[this.rank - 2] + ";\n        result.z = " + i + ";\n        if (++" + t[this.rank - 1] + " < " + e[this.rank - 1] + ") {\n          ++" + r[this.rank - 1] + ";\n          result.w = " + i + ";\n        }\n      }\n    "
          , u = this.rank <= 4 ? "sourceLoc = coords +\n            " + n + "(" + e.map((function(e, n) {
            return "start[" + n + "]"
        }
        )).join() + ");" : e.map((function(e, n) {
            return r[n] + " = " + t[n] + " + start[" + n + "];"
        }
        )).join("\n");
        this.userCode = "\n      void main() {\n        " + n + " coords = getOutputCoords();\n        " + n + " sourceLoc;\n        " + u + "\n        vec4 result = vec4(0.);\n        " + o + "\n        " + s + "\n        setOutput(result);\n      }\n    "
    };
    function ba(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.x
          , o = a.begin
          , s = a.size
          , l = u(n.slice_util.parseSliceParams(i, o, s), 2)
          , c = l[0]
          , d = l[1];
        if (n.slice_util.assertParamsValid(i, c, d),
        0 === n.util.sizeFromShape(d))
            return r.makeTensorInfo(d, i.dtype, []);
        if (r.shouldExecuteOnCPU([i]) || "string" === i.dtype) {
            var p = r.texData.get(i.dataId)
              , h = dt(p.values, c, d, i.shape, i.dtype);
            return r.makeTensorInfo(d, i.dtype, h)
        }
        var f = r.texData.get(i.dataId).isPacked
          , x = n.slice_util.isSliceContinous(i.shape, c, d);
        if (f || !x) {
            var v = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new ga(d) : new va(d)
              , m = [c];
            return r.runWebGLProgram(v, [i], i.dtype, m)
        }
        return r.uploadToGPU(i.dataId),
        function(e, t, r, a) {
            var i = a.texData.get(e.dataId)
              , o = a.makeTensorInfo(r, e.dtype)
              , s = a.texData.get(o.dataId);
            Object.assign(s, i),
            s.refCount = 1,
            s.shape = r,
            s.dtype = e.dtype;
            var u = n.slice_util.computeFlatOffset(t, n.util.computeStrides(e.shape));
            i.slice && (u += i.slice.flatOffset),
            s.slice = {
                flatOffset: u,
                origDataId: i.slice && i.slice.origDataId || e.dataId
            };
            var l = a.dataRefCount.get(s.slice.origDataId) || 1;
            return a.dataRefCount.set(s.slice.origDataId, l + 1),
            o
        }(i, c, d, r)
    }
    var Ca = {
        kernelName: n.Slice,
        backendName: "webgl",
        kernelFunc: ba
    }
      , ya = {
        kernelName: n.BatchToSpaceND,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.blockShape
              , s = a.crops;
            n.util.assert(i.shape.length <= 4, (function() {
                return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"
            }
            ));
            var u = o.reduce((function(e, n) {
                return e * n
            }
            ))
              , l = n.backend_util.getReshaped(i.shape, o, u)
              , c = n.backend_util.getPermuted(l.length, o.length)
              , d = n.backend_util.getReshapedPermuted(i.shape, o, u)
              , p = n.backend_util.getSliceBeginCoords(s, o.length)
              , h = n.backend_util.getSliceSize(d, s, o.length)
              , f = []
              , x = hr({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    shape: l
                }
            })
              , v = Ir({
                inputs: {
                    x: x
                },
                backend: r,
                attrs: {
                    perm: c
                }
            })
              , m = hr({
                inputs: {
                    x: v
                },
                backend: r,
                attrs: {
                    shape: d
                }
            })
              , g = ba({
                inputs: {
                    x: m
                },
                backend: r,
                attrs: {
                    begin: p,
                    size: h
                }
            });
            return f.push(x),
            f.push(v),
            f.push(m),
            f.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            g
        }
    };
    var ka = {
        kernelName: n.Bincount,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.x
              , i = n.weights
              , o = r.size
              , s = t.readSync(a.dataId)
              , u = t.readSync(i.dataId)
              , l = Vn(s, u, i.dtype, i.shape, o);
            return t.makeTensorInfo([o], i.dtype, l)
        }
    };
    var Ia = {
        kernelName: n.BroadcastArgs,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = t.s0
              , i = t.s1
              , o = r.readSync(a.dataId)
              , s = r.readSync(i.dataId)
              , u = n.backend_util.assertAndGetBroadcastShape(Array.from(o), Array.from(s));
            return r.makeTensorInfo([u.length], "int32", Int32Array.from(u))
        }
    }
      , wa = ar({
        opSnippet: "return float(a != b);",
        cpuKernelImpl: it,
        dtype: "bool"
    })
      , Sa = {
        kernelName: n.NotEqual,
        backendName: "webgl",
        kernelFunc: wa
    };
    function Ra(e) {
        var n = e.inputs
          , t = e.backend
          , r = n.input;
        return Kt({
            inputs: {
                x: t.texData.get(r.dataId).complexTensorInfos.real
            },
            backend: t
        })
    }
    var Ta = {
        kernelName: n.Real,
        backendName: "webgl",
        kernelFunc: Ra
    };
    var Ea = {
        kernelName: n.Cast,
        backendName: "webgl",
        kernelFunc: function e(t) {
            var a = t.inputs
              , i = t.backend
              , o = t.attrs
              , s = a.x
              , u = o.dtype;
            if ("complex64" === u) {
                if ("complex64" === s.dtype)
                    return Kt({
                        inputs: {
                            x: s
                        },
                        backend: i
                    });
                var l = r.zeros(s.shape)
                  , c = e({
                    inputs: {
                        x: s
                    },
                    backend: i,
                    attrs: {
                        dtype: "float32"
                    }
                })
                  , d = Yt({
                    inputs: {
                        real: c,
                        imag: l
                    },
                    backend: i
                });
                return l.dispose(),
                i.disposeIntermediateTensorInfo(c),
                d
            }
            if ("complex64" === s.dtype) {
                var p = Ra({
                    inputs: {
                        input: s
                    },
                    backend: i
                })
                  , d = e({
                    inputs: {
                        x: p
                    },
                    backend: i,
                    attrs: {
                        dtype: u
                    }
                });
                return i.disposeIntermediateTensorInfo(p),
                d
            }
            if (!n.util.hasEncodingLoss(s.dtype, u))
                return {
                    dataId: (d = Kt({
                        inputs: {
                            x: s
                        },
                        backend: i
                    })).dataId,
                    shape: d.shape,
                    dtype: u
                };
            if ("int32" === u)
                return function(e, n) {
                    var t = new Ot(e.shape,"return float(int(x));")
                      , r = n.runWebGLProgram(t, [e], "int32");
                    return {
                        dataId: r.dataId,
                        shape: r.shape,
                        dtype: r.dtype
                    }
                }(s, i);
            if ("bool" === u) {
                var h = i.makeTensorInfo([], "bool", n.util.getTypedArrayFromDType("bool", 1));
                d = wa({
                    inputs: {
                        a: s,
                        b: h
                    },
                    backend: i
                });
                return i.disposeIntermediateTensorInfo(h),
                d
            }
            throw new Error("Error in Cast: failed to cast " + s.dtype + " to " + u)
        }
    }
      , Na = "return ceil(x);"
      , Aa = rr({
        opSnippet: Na,
        packedOpSnippet: Na,
        cpuKernelImpl: Wn
    })
      , Fa = {
        kernelName: n.Ceil,
        backendName: "webgl",
        kernelFunc: Aa
    }
      , _a = function(e) {
        this.variableNames = ["A"],
        this.customUniforms = [{
            name: "minVal",
            type: "float"
        }, {
            name: "maxVal",
            type: "float"
        }],
        this.outputShape = e,
        this.userCode = "\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "
    }
      , Oa = function(e) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.customUniforms = [{
            name: "minVal",
            type: "float"
        }, {
            name: "maxVal",
            type: "float"
        }],
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "
    };
    var Da = {
        kernelName: n.ClipByValue,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = e.attrs, o = r.x, s = i.clipValueMin, u = i.clipValueMax;
            t = n.env().getBool("WEBGL_PACK_CLIP") ? new Oa(o.shape) : new _a(o.shape);
            var l = [[s], [u]];
            return a.runWebGLProgram(t, [o], o.dtype, l)
        }
    }
      , Pa = function(e) {
        this.variableNames = ["real", "imag"],
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "
    };
    function La(e, n) {
        return {
            dataId: n.dataId,
            dtype: n.dtype,
            shape: e.shape
        }
    }
    var Ba = {
        kernelName: n.ComplexAbs,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = n.x
              , a = t.texData.get(r.dataId)
              , i = new Pa(r.shape)
              , o = [La(r, a.complexTensorInfos.real), La(r, a.complexTensorInfos.imag)];
            return t.runWebGLProgram(i, o, o[0].dtype)
        }
    }
      , Va = function(e) {
        this.outputShape = [],
        this.outputShape = n.backend_util.computeOutShape(e, 1),
        this.variableNames = e.map((function(e, n) {
            return "T" + n
        }
        ));
        var t = new Array(e.length - 1);
        t[0] = e[0][1];
        for (var r = 1; r < t.length; r++)
            t[r] = t[r - 1] + e[r][1];
        var a = ["if (yC < " + t[0] + ") setOutput(getT0(yR, yC));"];
        for (r = 1; r < t.length; r++) {
            var i = t[r - 1];
            a.push("else if (yC < " + t[r] + ") setOutput(getT" + r + "(yR, yC-" + i + "));")
        }
        var o = t.length
          , s = t[t.length - 1];
        a.push("else setOutput(getT" + o + "(yR, yC-" + s + "));"),
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        " + a.join("\n        ") + "\n      }\n    "
    }
      , Ua = function(e, t) {
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = [],
        this.outputShape = n.backend_util.computeOutShape(e, t);
        var r = this.outputShape
          , a = r.length
          , i = Ne(a)
          , o = Rt("coords", a)
          , s = ["x", "y", "z", "w", "u", "v"].slice(0, a);
        this.variableNames = e.map((function(e, n) {
            return "T" + n
        }
        ));
        var u = new Array(e.length - 1);
        u[0] = e[0][t];
        for (var l = 1; l < u.length; l++)
            u[l] = u[l - 1] + e[l][t];
        var c = s[t]
          , d = s.slice(-2)
          , p = s.join()
          , h = "if (" + c + " < " + u[0] + ") {\n        return getChannel(\n            getT0(" + p + "), vec2(" + d.join() + "));\n        }";
        for (l = 1; l < u.length; l++) {
            var f = u[l - 1];
            h += "\n        if (" + c + " < " + u[l] + "  && " + c + " >= " + u[l - 1] + ") {\n          return getChannel(\n            getT" + l + "(" + Wa(s, c, f) + "),\n            vec2(" + Wa(d, c, f) + "));\n        }"
        }
        var x = u.length
          , v = u[u.length - 1];
        h += "\n        return getChannel(\n          getT" + x + "(" + Wa(s, c, v) + "),\n          vec2(" + Wa(d, c, v) + "));",
        this.userCode = "\n      float getValue(" + s.map((function(e) {
            return "int " + e
        }
        )) + ") {\n        " + h + "\n      }\n\n      void main() {\n        " + i + " coords = getOutputCoords();\n        vec4 result = vec4(getValue(" + o + "), 0., 0., 0.);\n\n        " + o[a - 1] + " = " + o[a - 1] + " + 1;\n        if (" + o[a - 1] + " < " + r[a - 1] + ") {\n          result.g = getValue(" + o + ");\n        }\n\n        " + o[a - 2] + " = " + o[a - 2] + " + 1;\n        if (" + o[a - 2] + " < " + r[a - 2] + ") {\n          result.a = getValue(" + o + ");\n        }\n\n        " + o[a - 1] + " = " + o[a - 1] + " - 1;\n        if (" + o[a - 2] + " < " + r[a - 2] + " &&\n            " + o[a - 1] + " < " + r[a - 1] + ") {\n          result.b = getValue(" + o + ");\n        }\n        setOutput(result);\n      }\n    "
    };
    function Wa(e, n, t) {
        var r = e.indexOf(n);
        return e.map((function(e, n) {
            return n === r ? e + " - " + t : e
        }
        )).join()
    }
    function Ma(e) {
        var n = e.inputs
          , t = e.backend
          , r = n.input;
        return Kt({
            inputs: {
                x: t.texData.get(r.dataId).complexTensorInfos.imag
            },
            backend: t
        })
    }
    var Ga = {
        kernelName: n.Imag,
        backendName: "webgl",
        kernelFunc: Ma
    };
    function za(e, t, r) {
        var a = e[0].dtype;
        if ("complex64" === a) {
            var i = e.map((function(e) {
                return Ra({
                    inputs: {
                        input: e
                    },
                    backend: r
                })
            }
            ))
              , o = e.map((function(e) {
                return Ma({
                    inputs: {
                        input: e
                    },
                    backend: r
                })
            }
            ))
              , s = za(i, t, r)
              , u = za(o, t, r)
              , l = Yt({
                inputs: {
                    real: s,
                    imag: u
                },
                backend: r
            });
            return i.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            o.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            r.disposeIntermediateTensorInfo(s),
            r.disposeIntermediateTensorInfo(u),
            l
        }
        var c = r.shouldExecuteOnCPU(e);
        if ("string" === a && (c = !0),
        c) {
            var d = e.map((function(e) {
                var a = n.util.sizeFromShape(e.shape.slice(t));
                return hr({
                    inputs: {
                        x: e
                    },
                    backend: r,
                    attrs: {
                        shape: [-1, a]
                    }
                })
            }
            ))
              , p = d.map((function(e) {
                return {
                    vals: r.readSync(e.dataId),
                    shape: e.shape
                }
            }
            ))
              , h = n.backend_util.computeOutShape(d.map((function(e) {
                return e.shape
            }
            )), 1)
              , f = 1 === d[0].shape[0]
              , x = Mn(p, h, a, f)
              , v = n.backend_util.computeOutShape(e.map((function(e) {
                return e.shape
            }
            )), t)
              , m = r.makeTensorInfo(v, a, x);
            return d.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            m
        }
        if (e.length > n.env().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")) {
            var g = Math.floor(e.length / 2)
              , b = za(e.slice(0, g), t, r)
              , C = za(e.slice(g), t, r)
              , y = za([b, C], t, r);
            return r.disposeIntermediateTensorInfo(b),
            r.disposeIntermediateTensorInfo(C),
            y
        }
        if (n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") && e[0].shape.length > 1) {
            var k = new Ua(e.map((function(e) {
                return e.shape
            }
            )),t);
            return r.runWebGLProgram(k, e, a)
        }
        var I = function(e, t, r) {
            var a = n.backend_util.computeOutShape(e.map((function(e) {
                return e.shape
            }
            )), t);
            return {
                tensors2D: e.map((function(e) {
                    return hr({
                        inputs: {
                            x: e
                        },
                        attrs: {
                            shape: [-1, n.util.sizeFromShape(e.shape.slice(t))]
                        },
                        backend: r
                    })
                }
                )),
                outShape: a
            }
        }(e, t, r)
          , w = I.tensors2D
          , S = I.outShape
          , R = new Va(w.map((function(e) {
            return e.shape
        }
        )))
          , T = r.runWebGLProgram(R, w, a);
        w.forEach((function(e) {
            return r.disposeIntermediateTensorInfo(e)
        }
        ));
        var E = hr({
            inputs: {
                x: T
            },
            attrs: {
                shape: S
            },
            backend: r
        });
        return r.disposeIntermediateTensorInfo(T),
        E
    }
    function Xa(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs.axis
          , i = n.util.parseAxisParam(a, t[0].shape)[0]
          , o = n.backend_util.computeOutShape(t.map((function(e) {
            return e.shape
        }
        )), i);
        if (0 === n.util.sizeFromShape(o))
            return r.makeTensorInfo(o, t[0].dtype, []);
        var s = t.filter((function(e) {
            return n.util.sizeFromShape(e.shape) > 0
        }
        ));
        if (1 === s.length)
            return Kt({
                inputs: {
                    x: s[0]
                },
                backend: r
            });
        var u = s.map((function(e) {
            return e.shape
        }
        ));
        return n.backend_util.assertParamsConsistent(u, i),
        za(s, i, r)
    }
    var Ha = {
        kernelName: n.Concat,
        backendName: "webgl",
        kernelFunc: Xa
    }
      , ja = function(e, n, t, r, a) {
        void 0 === n && (n = !1),
        void 0 === t && (t = null),
        void 0 === r && (r = !1),
        void 0 === a && (a = !1),
        this.variableNames = ["x", "W"],
        this.outputShape = e.outShape;
        var i = e.padInfo.top
          , o = e.padInfo.left
          , s = e.strideHeight
          , u = e.strideWidth
          , l = e.dilationHeight
          , c = e.dilationWidth
          , d = e.filterHeight
          , p = e.filterWidth
          , h = 4 * Math.floor(e.inChannels / 4)
          , f = e.inChannels % 4
          , x = "channelsLast" === e.dataFormat
          , v = x ? 1 : 2
          , m = x ? 2 : 3
          , g = x ? 3 : 1
          , b = ""
          , C = "";
        t && (b = r ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + t + "\n        }" : a ? "float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          " + t + "\n        }" : "\n          float activation(float x) {\n            " + t + "\n          }\n        ",
        C = "result = activation(result);");
        var y = n ? "result += getBiasAtOutCoords();" : "";
        n && this.variableNames.push("bias"),
        r && this.variableNames.push("preluActivationWeights"),
        a && this.variableNames.push("leakyreluAlpha"),
        this.userCode = "\n      " + b + "\n\n      const ivec2 strides = ivec2(" + s + ", " + u + ");\n      const ivec2 pads = ivec2(" + i + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[" + g + "];\n\n        ivec2 xRCCorner =\n            ivec2(coords[" + v + "], coords[" + m + "]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + d + "; wR++) {\n          int xR = xRCorner + wR * " + l + ";\n\n          if (xR < 0 || xR >= " + e.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + p + "; wC++) {\n            int xC = xCCorner + wC * " + c + ";\n\n            if (xC < 0 || xC >= " + e.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + h + "; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (" + x + ") {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (" + (1 === f) + ") {\n\n              if (" + x + ") {\n                dotProd +=\n                    getX(batch, xR, xC, " + h + ") *\n                    getW(wR, wC, " + h + ", d2);\n              } else {\n                dotProd +=\n                    getX(batch, " + h + ", xR, xC) *\n                    getW(wR, wC, " + h + ", d2);\n              }\n\n            } else if (" + (2 === f) + ") {\n              vec2 wValues = vec2(\n                getW(wR, wC, " + h + ", d2),\n                getW(wR, wC, " + h + " + 1, d2)\n              );\n\n              if (" + x + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, " + h + "),\n                  getX(batch, xR, xC, " + h + " + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, " + h + ", xR, xC),\n                  getX(batch, " + h + " + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (" + (3 === f) + ") {\n              vec3 wValues = vec3(\n                getW(wR, wC, " + h + ", d2),\n                getW(wR, wC, " + h + " + 1, d2),\n                getW(wR, wC, " + h + " + 2, d2)\n              );\n\n              if (" + x + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, " + h + "),\n                  getX(batch, xR, xC, " + h + " + 1),\n                  getX(batch, xR, xC, " + h + " + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, " + h + ", xR, xC),\n                  getX(batch, " + h + " + 1, xR, xC),\n                  getX(batch, " + h + " + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        " + y + "\n        " + C + "\n        setOutput(result);\n      }\n    "
    }
      , Ka = function(e) {
        this.variableNames = ["x", "W"],
        this.outputShape = e.outShape;
        var n = e.padInfo.front
          , t = e.padInfo.top
          , r = e.padInfo.left
          , a = e.strideDepth
          , i = e.strideHeight
          , o = e.strideWidth
          , s = e.dilationDepth
          , u = e.dilationHeight
          , l = e.dilationWidth
          , c = e.filterDepth
          , d = e.filterHeight
          , p = e.filterWidth
          , h = 4 * Math.floor(e.inChannels / 4)
          , f = e.inChannels % 4;
        this.userCode = "\n      const ivec3 strides = ivec3(" + a + ", " + i + ", " + o + ");\n      const ivec3 pads = ivec3(" + n + ", " + t + ", " + r + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + c + "; wF++) {\n          int xF = xFCorner + wF * " + s + ";\n\n          if (xF < 0 || xF >= " + e.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + d + "; wR++) {\n            int xR = xRCorner + wR * " + u + ";\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + p + "; wC++) {\n              int xC = xCCorner + wC * " + l + ";\n\n              if (xC < 0 || xC >= " + e.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + h + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 === f) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + h + ") *\n                  getW(wF, wR, wC, " + h + ", d2);\n              } else if (" + (2 === f) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + h + "),\n                  getX(batch, xF, xR, xC, " + h + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + h + ", d2),\n                  getW(wF, wR, wC, " + h + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 === f) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + h + "),\n                  getX(batch, xF, xR, xC, " + h + " + 1),\n                  getX(batch, xF, xR, xC, " + h + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + h + ", d2),\n                  getW(wF, wR, wC, " + h + " + 1, d2),\n                  getW(wF, wR, wC, " + h + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , qa = function(e, n) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.customUniforms = [{
            name: "inputShape",
            type: "ivec3"
        }, {
            name: "pad",
            type: "ivec2"
        }, {
            name: "stride",
            type: "ivec2"
        }, {
            name: "dilation",
            type: "ivec2"
        }, {
            name: "inChannels",
            type: "int"
        }, {
            name: "itemsPerBlockRow",
            type: "int"
        }, {
            name: "outWidth",
            type: "int"
        }],
        this.outputShape = e,
        this.enableShapeUniforms = De(this.outputShape.length);
        for (var t = n.dataFormat, r = he(), a = "channelsLast" === t, i = a ? 0 : 1, o = a ? 1 : 2, s = this.enableShapeUniforms ? "if(blockIndex < outShape[1] && pos < outShape[0]) {" : "if(blockIndex < " + e[1] + " && pos < " + e[0] + ") {", u = "", l = 0; l <= 1; l++)
            for (var c = 0; c <= 1; c++)
                u += "\n          blockIndex = rc.y + " + c + ";\n          pos = rc.x + " + l + ";\n\n          " + s + "\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[" + i + "] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[" + o + "] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (" + a + ") {\n                  innerDims = vec2(d1, ch);\n                  result[" + (2 * l + c) + "] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[" + (2 * l + c) + "] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ";
        this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        " + u + "\n\n        " + r.output + " = result;\n      }\n    "
    };
    function Ya(e) {
        var t, r, a, i = e.x, o = e.filter, u = e.convInfo, l = e.backend, c = e.bias, d = void 0 === c ? null : c, p = e.preluActivationWeights, h = void 0 === p ? null : p, f = e.leakyreluAlpha, x = void 0 === f ? 0 : f, v = e.activation, m = void 0 === v ? null : v, g = i.shape, b = l.texData.get(i.dataId), C = u.inChannels, y = g[0] * g[1] * g[2], k = u.outChannels, I = "channelsLast" === u.dataFormat, w = [];
        if (!((1 === y || 1 === k) && C > 1e3) && b.isPacked && I && null != b.texture && g[2] % 2 != 0 && n.util.arraysEqual(b.shape.slice(-3), g.slice(-3))) {
            var S = g[0] * g[1] * (g[2] + 1)
              , R = {
                dataId: i.dataId,
                shape: [1, S, u.inChannels],
                dtype: i.dtype
            }
              , T = b.shape;
            b.shape = b.shape.slice(),
            b.shape[b.shape.length - 2]++,
            n.util.assert(ee(b.shape, R.shape), (function() {
                return "packed reshape " + b.shape + " to " + R.shape + " isn't free"
            }
            ));
            var E = hr({
                inputs: {
                    x: o
                },
                backend: l,
                attrs: {
                    shape: [1, u.inChannels, u.outChannels]
                }
            });
            w.push(E);
            var N = Sr({
                a: R,
                b: E,
                backend: l,
                transposeA: false,
                transposeB: false,
                bias: d,
                activation: m,
                preluActivationWeights: h,
                leakyreluAlpha: x
            })
              , A = l.texData.get(N.dataId);
            n.util.assert(A.isPacked, (function() {
                return "batchMatMul result is expected to be packed"
            }
            )),
            b.shape = T,
            A.shape = u.outShape,
            (a = Kt({
                inputs: {
                    x: N
                },
                backend: l
            })).shape = u.outShape,
            w.push(N)
        } else {
            var F = hr({
                inputs: {
                    x: i
                },
                backend: l,
                attrs: {
                    shape: [1, S = I ? g[0] * g[1] * g[2] : g[0] * g[2] * g[3], u.inChannels]
                }
            })
              , _ = Sr({
                a: F,
                b: E = hr({
                    inputs: {
                        x: o
                    },
                    backend: l,
                    attrs: {
                        shape: [1, u.inChannels, u.outChannels]
                    }
                }),
                transposeA: false,
                transposeB: false,
                backend: l,
                bias: d,
                activation: m,
                preluActivationWeights: h,
                leakyreluAlpha: x
            });
            a = hr({
                inputs: {
                    x: _
                },
                backend: l,
                attrs: {
                    shape: u.outShape
                }
            }),
            w.push(F),
            w.push(E),
            w.push(_)
        }
        try {
            for (var O = s(w), D = O.next(); !D.done; D = O.next()) {
                var P = D.value;
                l.disposeIntermediateTensorInfo(P)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                D && !D.done && (r = O.return) && r.call(O)
            } finally {
                if (t)
                    throw t.error
            }
        }
        return a
    }
    function Qa(e) {
        var t, r, a = e.x, i = e.filter, o = e.convInfo, u = e.backend, l = e.bias, c = void 0 === l ? null : l, d = e.preluActivationWeights, p = void 0 === d ? null : d, h = e.leakyreluAlpha, f = void 0 === h ? 0 : h, x = e.activation, v = void 0 === x ? null : x, m = o.filterWidth, g = o.filterHeight, b = o.inChannels, C = o.outWidth, y = o.outHeight, k = "channelsLast" === o.dataFormat, I = m * g * b, w = y * C, S = [I, w], R = [], T = hr({
            inputs: {
                x: a
            },
            backend: u,
            attrs: {
                shape: a.shape.slice(1)
            }
        }), E = hr({
            inputs: {
                x: i
            },
            backend: u,
            attrs: {
                shape: [1, I, n.util.sizeFromShape(i.shape) / I]
            }
        });
        R.push(T),
        R.push(E);
        var N = new qa(S,o)
          , A = [T.shape, [o.padInfo.top, o.padInfo.left], [o.strideHeight, o.strideWidth], [o.dilationHeight, o.dilationWidth], [o.inChannels], [o.filterWidth * o.inChannels], [o.outWidth]]
          , F = u.runWebGLProgram(N, [T], "float32", A)
          , _ = hr({
            inputs: {
                x: F
            },
            backend: u,
            attrs: {
                shape: [1, S[0], S[1]]
            }
        });
        R.push(F),
        R.push(_);
        var O = null != c
          , D = null != p
          , P = "leakyrelu" === v
          , L = v ? ir(v, !0) : null
          , B = new or(_.shape,E.shape,[1, w, o.outChannels],!0,!1,O,L,D,P)
          , V = [_, E];
        if (c && V.push(c),
        D && V.push(p),
        P) {
            var U = u.makeTensorInfo([], "float32", n.util.createScalarValue(f, "float32"));
            V.push(U),
            R.push(U)
        }
        var W = u.runWebGLProgram(B, V, "float32")
          , M = hr({
            inputs: {
                x: W
            },
            backend: u,
            attrs: {
                shape: k ? [1, y, C, o.outChannels] : [1, o.outChannels, y, C]
            }
        });
        R.push(W);
        try {
            for (var G = s(R), z = G.next(); !z.done; z = G.next()) {
                var X = z.value;
                u.disposeIntermediateTensorInfo(X)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                z && !z.done && (r = G.return) && r.call(G)
            } finally {
                if (t)
                    throw t.error
            }
        }
        return M
    }
    var Za = {
        kernelName: n.Conv2D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = e.attrs, o = r.x, s = r.filter, u = i.strides, l = i.pad, c = i.dataFormat, d = i.dilations, p = i.dimRoundingMode, h = n.backend_util.convertConv2DDataFormat(c), f = n.backend_util.computeConv2DInfo(o.shape, s.shape, u, d, l, p, !1, h);
            if (1 !== f.filterHeight || 1 !== f.filterWidth || 1 !== f.dilationHeight || 1 !== f.dilationWidth || 1 !== f.strideHeight || 1 !== f.strideWidth || "SAME" !== f.padInfo.type && "VALID" !== f.padInfo.type)
                if (n.env().getBool("WEBGL_CONV_IM2COL") && 1 === o.shape[0])
                    t = Qa({
                        x: o,
                        filter: s,
                        convInfo: f,
                        backend: a
                    });
                else {
                    var x = new ja(f);
                    t = a.runWebGLProgram(x, [o, s], "float32")
                }
            else
                t = Ya({
                    x: o,
                    filter: s,
                    convInfo: f,
                    backend: a
                });
            var v = hr({
                inputs: {
                    x: t
                },
                backend: a,
                attrs: {
                    shape: f.outShape
                }
            });
            return a.disposeIntermediateTensorInfo(t),
            v
        }
    }
      , Ja = function(e) {
        this.variableNames = ["x", "dy"],
        this.outputShape = e.filterShape;
        var n = e.strideHeight
          , t = e.strideWidth
          , r = e.padInfo.top
          , a = e.padInfo.left
          , i = "channelsLast" === e.dataFormat;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + e.batchSize + "; b++) {\n          for (int yR = 0; yR < " + e.outHeight + "; yR++) {\n            int xR = wR + yR * " + n + " - " + r + ";\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + e.outWidth + "; yC++) {\n              int xC = wC + yC * " + t + " - " + a + ";\n\n              if (xC < 0 || xC >= " + e.inWidth + ") {\n                continue;\n              }\n\n              if (" + i + ") {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , $a = function(e) {
        this.variableNames = ["dy", "W"],
        this.outputShape = e.inShape;
        var n = e.filterHeight
          , t = e.filterWidth
          , r = e.strideHeight
          , a = e.strideWidth
          , i = "channelsLast" === e.dataFormat
          , o = n - 1 - e.padInfo.top
          , s = t - 1 - e.padInfo.left
          , u = i ? 1 : 2
          , l = i ? 2 : 3
          , c = i ? 3 : 1;
        this.userCode = "\n      const ivec2 pads = ivec2(" + o + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[" + c + "];\n\n        ivec2 dyCorner = ivec2(coords[" + u + "], coords[" + l + "]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + n + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + n + " - 1 - wR;\n\n          for (int wC = 0; wC < " + t + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + t + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + e.outChannels + "; d2++) {\n\n              if (" + i + ") {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , ei = function(e) {
        this.variableNames = ["x", "dy"],
        this.outputShape = e.filterShape;
        var n = e.strideDepth
          , t = e.strideHeight
          , r = e.strideWidth
          , a = e.padInfo.front
          , i = e.padInfo.top
          , o = e.padInfo.left;
        this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + e.batchSize + "; b++) {\n          for (int yF = 0; yF < " + e.outDepth + "; yF++) {\n            int xF = wF + yF * " + n + " - " + a + ";\n\n            if (xF < 0 || xF >= " + e.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + e.outHeight + "; yR++) {\n              int xR = wR + yR * " + t + " - " + i + ";\n\n              if (xR < 0 || xR >= " + e.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + e.outWidth + "; yC++) {\n                int xC = wC + yC * " + r + " - " + o + ";\n\n                if (xC < 0 || xC >= " + e.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , ni = function(e) {
        this.variableNames = ["dy", "W"],
        this.outputShape = e.inShape;
        var n = e.filterDepth
          , t = e.filterHeight
          , r = e.filterWidth
          , a = e.strideDepth
          , i = e.strideHeight
          , o = e.strideWidth
          , s = n - 1 - e.padInfo.front
          , u = t - 1 - e.padInfo.top
          , l = r - 1 - e.padInfo.left;
        this.userCode = "\n      const ivec3 pads = ivec3(" + s + ", " + u + ", " + l + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + n + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + a + ".0;\n\n          if (dyF < 0.0 || dyF >= " + e.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + n + " - 1 - wF;\n\n          for (int wR = 0; wR < " + t + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + i + ".0;\n\n            if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + t + " - 1 - wR;\n\n            for (int wC = 0; wC < " + r + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n              if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + r + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + e.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    };
    var ti = {
        kernelName: n.Conv2DBackpropFilter,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.dy
              , s = a.strides
              , u = a.pad
              , l = a.dataFormat
              , c = a.dimRoundingMode
              , d = a.filterShape
              , p = n.backend_util.convertConv2DDataFormat(l)
              , h = n.backend_util.computeConv2DInfo(i.shape, d, s, 1, u, c, !1, p)
              , f = new Ja(h);
            return r.runWebGLProgram(f, [i, o], "float32")
        }
    };
    var ri = {
        kernelName: n.Conv2DBackpropInput,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.filter
              , s = a.inputShape
              , u = a.strides
              , l = a.pad
              , c = a.dataFormat
              , d = a.dimRoundingMode
              , p = n.backend_util.convertConv2DDataFormat(c)
              , h = n.backend_util.computeConv2DInfo(s, o.shape, u, 1, l, d, !1, p)
              , f = new $a(h);
            return r.runWebGLProgram(f, [i, o], "float32")
        }
    };
    var ai = {
        kernelName: n.Conv3D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.filter
              , s = a.strides
              , u = a.pad
              , l = a.dilations
              , c = n.backend_util.computeConv3DInfo(i.shape, o.shape, s, l, u)
              , d = new Ka(c);
            return r.runWebGLProgram(d, [i, o], "float32")
        }
    };
    var ii = {
        kernelName: n.Conv3DBackpropFilterV2,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.dy
              , s = a.strides
              , u = a.pad
              , l = a.filterShape
              , c = n.backend_util.computeConv3DInfo(i.shape, l, s, 1, u)
              , d = new ei(c);
            return r.runWebGLProgram(d, [i, o], "float32")
        }
    };
    var oi = {
        kernelName: n.Conv3DBackpropInputV2,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.filter
              , s = a.pad
              , u = a.strides
              , l = a.inputShape
              , c = n.backend_util.computeConv3DInfo(l, o.shape, u, 1, s)
              , d = new ni(c);
            return r.runWebGLProgram(d, [i, o], "float32")
        }
    }
      , si = rr({
        opSnippet: "if (isnan(x)) return x;\n  return cos(x);\n"
    })
      , ui = {
        kernelName: n.Cos,
        backendName: "webgl",
        kernelFunc: si
    }
      , li = rr({
        opSnippet: "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n"
    })
      , ci = {
        kernelName: n.Cosh,
        backendName: "webgl",
        kernelFunc: li
    }
      , di = function(e, n, t, r, a) {
        this.variableNames = ["Image", "Boxes", "BoxInd"],
        this.outputShape = [];
        var i = u(e, 4)
          , o = i[0]
          , s = i[1]
          , l = i[2]
          , c = i[3]
          , d = u(n, 1)[0]
          , p = u(t, 2)
          , h = p[0]
          , f = p[1];
        this.outputShape = [d, h, f, c];
        var x = "bilinear" === r ? 1 : 0
          , v = u([s - 1 + ".0", l - 1 + ".0"], 2)
          , m = v[0]
          , g = v[1]
          , b = u(h > 1 ? ["" + (s - 1) / (h - 1), "(y2-y1) * height_ratio", "y1*" + m + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + m], 3)
          , C = b[0]
          , y = b[1]
          , k = b[2]
          , I = u(f > 1 ? ["" + (l - 1) / (f - 1), "(x2-x1) * width_ratio", "x1*" + g + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + g], 3)
          , w = I[0]
          , S = I[1]
          , R = I[2];
        this.userCode = "\n      const float height_ratio = float(" + C + ");\n      const float width_ratio = float(" + w + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + o + ") {\n          return;\n        }\n\n        float height_scale = " + y + ";\n        float width_scale = " + S + ";\n\n        float in_y = " + k + ";\n        if( in_y < 0.0 || in_y > " + m + " ) {\n          setOutput(float(" + a + "));\n          return;\n        }\n        float in_x = " + R + ";\n        if( in_x < 0.0 || in_x > " + g + " ) {\n          setOutput(float(" + a + "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(" + x + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    "
    }
      , pi = {
        kernelName: n.CropAndResize,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.image
              , i = n.boxes
              , o = n.boxInd
              , s = r.cropSize
              , u = r.method
              , l = r.extrapolationValue
              , c = new di(a.shape,i.shape,s,u,l);
            return t.runWebGLProgram(c, [a, i, o], "float32")
        }
    }
      , hi = function(e, n, t) {
        this.variableNames = ["x"],
        this.customUniforms = [{
            name: "index",
            type: "float"
        }],
        this.outputShape = e;
        var r = e.length
          , a = n ? "0.0" : "getX(" + fi(r, "coords") + ")"
          , i = e[e.length - 1]
          , o = ""
          , s = "";
        n ? (o = t ? "end != " + (i - 1) : "end != 0",
        s = t ? "end + 1" : "end - 1") : (o = t ? "end + pow2 < " + i : "end >= pow2",
        s = t ? "end + pow2" : "end - pow2"),
        this.userCode = "\n      void main() {\n        " + Ne(r) + " coords = getOutputCoords();\n        int end = " + xi(r, "coords") + ";\n        float val = " + a + ";\n        int pow2 = int(pow(2.0, index));\n        if (" + o + ") {\n          int idx = " + s + ";\n          " + xi(r, "coords") + " = idx;\n          val += getX(" + fi(r, "coords") + ");\n        }\n        setOutput(val);\n      }\n    "
    };
    function fi(e, n) {
        if (1 === e)
            return "" + n;
        if (2 === e)
            return n + ".x, " + n + ".y";
        if (3 === e)
            return n + ".x, " + n + ".y, " + n + ".z";
        if (4 === e)
            return n + ".x, " + n + ".y, " + n + ".z, " + n + ".w";
        throw Error("Cumulative sum for rank " + e + " is not yet supported")
    }
    function xi(e, n) {
        if (1 === e)
            return "" + n;
        if (2 === e)
            return n + ".y";
        if (3 === e)
            return n + ".z";
        if (4 === e)
            return n + ".w";
        throw Error("Cumulative sum for rank " + e + " is not yet supported")
    }
    var vi = {
        kernelName: n.Cumsum,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.axis
              , s = a.exclusive
              , u = a.reverse
              , l = i.shape.length
              , c = n.backend_util.getAxesPermutation([o], l)
              , d = i;
            null != c && (d = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: c
                }
            }));
            var p = n.backend_util.getInnerMostAxes(1, l)[0];
            if (p !== l - 1)
                throw new Error("WebGL cumsum shader expects an inner-most axis=" + (i.shape.length - 1) + " but got axis=" + o);
            for (var h = d.shape[p], f = Kt({
                inputs: {
                    x: d
                },
                backend: r
            }), x = 0; x <= Math.ceil(Math.log2(h)) - 1; x++) {
                var v = new hi(d.shape,!1,u)
                  , m = [[x]]
                  , g = f;
                f = r.runWebGLProgram(v, [f], f.dtype, m),
                r.disposeIntermediateTensorInfo(g)
            }
            if (s) {
                v = new hi(d.shape,s,u),
                g = f;
                f = r.runWebGLProgram(v, [f], f.dtype),
                r.disposeIntermediateTensorInfo(g)
            }
            if (null != c) {
                var b = Ir({
                    inputs: {
                        x: f
                    },
                    backend: r,
                    attrs: {
                        perm: n.backend_util.getUndoAxesPermutation(c)
                    }
                });
                return r.disposeIntermediateTensorInfo(f),
                r.disposeIntermediateTensorInfo(d),
                b
            }
            return f
        }
    };
    var mi = {
        kernelName: n.DenseBincount,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.x
              , i = n.weights
              , o = r.size
              , s = r.binaryOutput;
            if (1 === a.shape.length) {
                var u = t.readSync(a.dataId)
                  , l = t.readSync(i.dataId)
                  , c = Vn(u, l, i.dtype, i.shape, o);
                return t.makeTensorInfo([o], i.dtype, c)
            }
            if (2 === a.shape.length) {
                var d = t.bufferSync(a)
                  , p = t.bufferSync(i)
                  , h = Un(d, p, o, s);
                return t.makeTensorInfo(h.shape, i.dtype, h.values)
            }
            throw new Error("Error in denseBincount: input must be at most rank 2, but got rank" + a.shape.length + ".")
        }
    }
      , gi = function() {
        function e(e, n, t) {
            this.variableNames = ["x"],
            this.outputShape = [],
            this.outputShape = e,
            this.blockSize = n,
            this.dataFormat = t,
            this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + n + ";\n      int offset_h = imod(h, " + n + ");\n      int in_w = w / " + n + ";\n      int offset_w = imod(w, " + n + ");\n      int offset_d = (offset_h * " + n + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  "
        }
        return e.prototype.getHeightCoordString = function() {
            return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]"
        }
        ,
        e.prototype.getWidthCoordString = function() {
            return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]"
        }
        ,
        e.prototype.getDepthCoordString = function() {
            return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]"
        }
        ,
        e.prototype.getOutputDepthSize = function() {
            return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1]
        }
        ,
        e.prototype.getInputSamplingString = function() {
            return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)"
        }
        ,
        e
    }();
    var bi = {
        kernelName: n.DepthToSpace,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.x
              , i = r.blockSize
              , o = r.dataFormat
              , s = a.shape[0]
              , u = ("NHWC" === o ? a.shape[1] : a.shape[2]) * i
              , l = ("NHWC" === o ? a.shape[2] : a.shape[3]) * i
              , c = ("NHWC" === o ? a.shape[3] : a.shape[1]) / (i * i)
              , d = new gi("NHWC" === o ? [s, u, l, c] : [s, c, u, l],i,o);
            return t.runWebGLProgram(d, [a], a.dtype)
        }
    }
      , Ci = function(e, n, t, r, a) {
        void 0 === n && (n = !1),
        void 0 === t && (t = null),
        void 0 === r && (r = !1),
        void 0 === a && (a = !1),
        this.variableNames = ["x", "W"],
        this.customUniforms = [{
            name: "pads",
            type: "ivec2"
        }, {
            name: "strides",
            type: "ivec2"
        }, {
            name: "dilations",
            type: "ivec2"
        }, {
            name: "inDims",
            type: "ivec2"
        }],
        this.outputShape = e.outShape,
        this.enableShapeUniforms = De(this.outputShape.length);
        var i = e.filterHeight
          , o = e.filterWidth
          , s = e.outChannels / e.inChannels
          , u = ""
          , l = "";
        t && (u = r ? "float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          " + t + "\n        }" : a ? "float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          " + t + "\n        }" : "\n          float activation(float x) {\n            " + t + "\n          }\n        ",
        l = "result = activation(result);");
        var c = n ? "result += getBiasAtOutCoords();" : "";
        n && this.variableNames.push("bias"),
        r && this.variableNames.push("preluActivationWeights"),
        a && this.variableNames.push("leakyreluAlpha"),
        this.userCode = "\n      " + u + "\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + s + ";\n        int q = d2 - d1 * " + s + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + i + "; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + o + "; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        " + c + "\n        " + l + "\n        setOutput(result);\n      }\n    "
    }
      , yi = function(e, t, r, a, i) {
        void 0 === t && (t = !1),
        void 0 === r && (r = null),
        void 0 === a && (a = !1),
        void 0 === i && (i = !1),
        this.variableNames = ["x", "W"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.customUniforms = [{
            name: "pads",
            type: "ivec2"
        }, {
            name: "strides",
            type: "ivec2"
        }, {
            name: "dilations",
            type: "ivec2"
        }, {
            name: "inDims",
            type: "ivec2"
        }],
        this.outputShape = e.outShape,
        this.enableShapeUniforms = De(this.outputShape.length);
        for (var o = e.outChannels / e.inChannels, s = e.padInfo.left, u = e.strideWidth, l = e.dilationWidth, c = e.filterHeight, d = e.filterWidth, p = d, h = "\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;", f = 0; f < d; f++)
            h += "\n          vec4 xTexelC" + 2 * f + ";\n          int xTexelC" + 2 * f + "Ready;\n          vec4 xTexelC" + (2 * f + 1) + ";\n          int xTexelC" + (2 * f + 1) + "Ready;\n          vec4 xC" + f + ";";
        for (h += "\n    for (int r = 0; r < " + c + "; r++) {\n      ",
        f = 0; f < d; f++)
            h += "\n          xTexelC" + 2 * f + " = vec4(0.0);\n          xTexelC" + 2 * f + "Ready = 0;\n          xTexelC" + (2 * f + 1) + " = vec4(0.0);\n          xTexelC" + (2 * f + 1) + "Ready = 0;\n          xC" + f + " = vec4(0.0);";
        h += "\n        xR = xRCorner + r * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      ";
        for (var x = 0; x < (p + 1) / 2; x++) {
            var v = 2 * x;
            if (h += "\n          xC = xCCorner + " + v * l + ";\n          ",
            1 === u) {
                if (v < d && (s % 2 == 1 ? (h += "\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC" + v + "Ready == 0) {\n                  xTexelC" + v + " = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC" + v + ".zw = vec2(0.0);\n                  }\n                  xTexelC" + v + "Ready = 1;\n                }\n              ",
                h += 1 === l && v > 0 ? "\n                xC" + v + " = vec4(xTexelC" + (v - 2) + ".zw, xTexelC" + v + ".xy);\n                " : "\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC" + v + " = vec4(previous.zw, xTexelC" + v + ".xy);\n                  } else {\n                    xC" + v + " = vec4(0.0, 0.0, xTexelC" + v + ".xy);\n                  }\n                  ") : h += "\n                if (xC >= 0 && xC < inDims[1] && xTexelC" + v + "Ready == 0) {\n                  xTexelC" + v + " = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC" + v + ".zw = vec2(0.0);\n                  }\n                  xTexelC" + v + "Ready = 1;\n                }\n\n                xC" + v + " = xTexelC" + v + ";\n                ",
                v + 1 < d)) {
                    var m = s % 2 == 0 ? n.util.nearestLargerEven(l) : l;
                    l % 2 == 0 && s % 2 == 1 || l % 2 != 0 && s % 2 != 1 ? (h += "\n                  xCOffset = xC + imod(pads[1], 2) + " + m + ";\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC" + (v + 1) + "Ready == 0) {\n                    xTexelC" + (v + 1) + " = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC" + (v + 1) + ".zw = vec2(0.0);\n                    }\n                    xTexelC" + (v + 1) + "Ready = 1;\n                  }\n                  ",
                    l > 1 && (h += "\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC" + v + "Ready == 0) {\n                      xTexelC" + v + " = getX(batch, xR, xCOffset, d1);\n                      xTexelC" + v + "Ready = 1;\n                    }\n                    "),
                    h += "\n                  xC" + (v + 1) + " = vec4(xTexelC" + v + ".zw, xTexelC" + (v + 1) + ".xy);\n                  ") : h += 1 === m ? "\n                    xC" + (v + 1) + " = xTexelC" + v + ";\n                    " : "\n                    xCOffset = xC + " + m + ";\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC" + (v + 1) + "Ready == 0) {\n                      xTexelC" + (v + 1) + " = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC" + (v + 1) + ".zw = vec2(0.0);\n                      }\n                      xTexelC" + (v + 1) + "Ready = 1;\n                    }\n\n                    xC" + (v + 1) + " = xTexelC" + (v + 1) + ";\n                    "
                }
            } else
                v < d && (s % 2 == 1 ? (h += "\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC" + v + "Ready == 0) {\n                  xTexelC" + v + " = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC" + v + ".zw = vec2(0.0);\n                  }\n                  xTexelC" + v + "Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC" + (v + 1) + "Ready == 0) {\n                  xTexelC" + (v + 1) + " = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC" + (v + 1) + ".zw = vec2(0.0);\n                  }\n                  xTexelC" + (v + 1) + "Ready = 1;\n                }\n\n                xC" + v + " = vec4(xTexelC" + v + ".zw, xTexelC" + (v + 1) + ".zw);\n              ",
                v + 1 < d && (h += "\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC" + (v + 1) + " = vec4(xTexelC" + (v + 1) + ".xy, final.xy);\n                ")) : (h += "\n                if(xC >= 0 && xC < inDims[1] && xTexelC" + v + "Ready == 0) {\n                  xTexelC" + v + " = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC" + v + ".zw = vec2(0.0);\n                  }\n                  xTexelC" + v + "Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC" + (v + 1) + "Ready == 0) {\n                  xTexelC" + (v + 1) + " = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC" + (v + 1) + ".zw = vec2(0.);\n                  }\n                  xTexelC" + (v + 1) + "Ready = 1;\n                }\n\n                xC" + v + " = vec4(\n                  xTexelC" + v + ".xy, xTexelC" + (v + 1) + ".xy);\n              ",
                v + 1 < d && (h += "\n                  xC" + (v + 1) + " = vec4(xTexelC" + v + ".zw, xTexelC" + (v + 1) + ".zw);\n                ")));
            v < d && (h += "\n            wTexel = getW(r, " + v + ", d1, q);\n            dotProd += xC" + v + " * vec4(wTexel.xz, wTexel.xz);\n          ",
            v + 1 < d && (h += "\n              wTexel = getW(r, " + (v + 1) + ", d1, q);\n              dotProd += xC" + (v + 1) + " * vec4(wTexel.xz, wTexel.xz);\n            "))
        }
        h += "\n    }\n  ",
        h += "\n      }\n    ";
        var g = ""
          , b = "";
        r && (g = a ? "vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          " + r + "\n        }" : i ? "vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          " + r + "\n        }" : "vec4 activation(vec4 x) {\n          " + r + "\n        }",
        b = "result = activation(result);");
        var C = t ? "result += getBiasAtOutCoords();" : "";
        t && this.variableNames.push("bias"),
        a && this.variableNames.push("preluActivationWeights"),
        i && this.variableNames.push("leakyreluAlpha"),
        this.userCode = "\n      " + g + "\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + o + ";\n        int q = d2 - d1 * " + o + ";\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        " + h + "\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        " + C + "\n        " + b + "\n        setOutput(result);\n      }\n    "
    };
    var ki = {
        kernelName: n.DepthwiseConv2dNative,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.filter
              , s = a.strides
              , u = a.pad
              , l = a.dilations
              , c = a.dimRoundingMode
              , d = l;
            null == d && (d = [1, 1]),
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(s, d), (function() {
                return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + s + " and dilations '" + d + "'"
            }
            ));
            var p, h = n.backend_util.computeConv2DInfo(i.shape, o.shape, s, d, u, c, !0);
            p = n.env().getBool("WEBGL_PACK_DEPTHWISECONV") && h.strideWidth <= 2 && h.outChannels / h.inChannels == 1 ? new yi(h) : new Ci(h);
            var f = [[h.padInfo.top, h.padInfo.left], [h.strideHeight, h.strideWidth], [h.dilationHeight, h.dilationWidth], [h.inHeight, h.inWidth]];
            return r.runWebGLProgram(p, [i, o], "float32", f)
        }
    }
      , Ii = function(e) {
        this.variableNames = ["x", "dy"],
        this.outputShape = e.filterShape;
        var n = e.strideHeight
          , t = e.strideWidth
          , r = e.padInfo.top
          , a = e.padInfo.left
          , i = e.outChannels / e.inChannels;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + i + " + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < " + e.batchSize + "; b++) {\n          for (int yR = 0; yR < " + e.outHeight + "; yR++) {\n            int xR = wR + yR * " + n + " - " + r + ";\n\n            if (xR < 0 || xR >= " + e.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + e.outWidth + "; yC++) {\n              int xC = wC + yC * " + t + " - " + a + ";\n\n              if (xC < 0 || xC >= " + e.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , wi = function(e) {
        this.variableNames = ["dy", "W"],
        this.outputShape = e.inShape;
        var n = e.filterHeight
          , t = e.filterWidth
          , r = e.strideHeight
          , a = e.strideWidth
          , i = n - 1 - e.padInfo.top
          , o = t - 1 - e.padInfo.left
          , s = e.outChannels / e.inChannels;
        this.userCode = "\n      const ivec2 pads = ivec2(" + i + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + n + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + n + " - 1 - wR;\n\n          for (int wC = 0; wC < " + t + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + t + " - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + s + "; dm++) {\n              int d2 = d1 * " + s + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    };
    var Si = {
        kernelName: n.DepthwiseConv2dNativeBackpropFilter,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.dy
              , s = a.strides
              , u = a.dilations
              , l = a.pad
              , c = a.dimRoundingMode
              , d = a.filterShape
              , p = n.backend_util.computeConv2DInfo(i.shape, d, s, u, l, c, !0)
              , h = new Ii(p);
            return r.runWebGLProgram(h, [i, o], "float32")
        }
    };
    var Ri = {
        kernelName: n.DepthwiseConv2dNativeBackpropInput,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.filter
              , s = a.strides
              , u = a.dilations
              , l = a.pad
              , c = a.dimRoundingMode
              , d = a.inputShape
              , p = n.backend_util.computeConv2DInfo(d, o.shape, s, u, l, c, !0)
              , h = new wi(p);
            return r.runWebGLProgram(h, [i, o], "float32")
        }
    }
      , Ti = function(e) {
        this.variableNames = ["X"],
        this.outputShape = [e, e],
        this.userCode = "\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "
    };
    var Ei = {
        kernelName: n.Diag,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = t.x
              , i = l(a.shape, a.shape)
              , o = n.util.sizeFromShape(a.shape)
              , s = hr({
                inputs: {
                    x: a
                },
                backend: r,
                attrs: {
                    shape: [o]
                }
            })
              , u = new Ti(o)
              , c = r.runWebGLProgram(u, [s], s.dtype)
              , d = hr({
                inputs: {
                    x: c
                },
                backend: r,
                attrs: {
                    shape: i
                }
            });
            return r.disposeIntermediateTensorInfo(s),
            r.disposeIntermediateTensorInfo(c),
            d
        }
    }
      , Ni = function(e) {
        this.variableNames = ["x", "W"],
        this.outputShape = e.outShape;
        var n = e.inHeight
          , t = e.inWidth
          , r = e.padInfo
          , a = e.strideHeight
          , i = e.strideWidth
          , o = e.filterHeight
          , s = e.filterWidth
          , u = e.dilationHeight
          , l = e.dilationWidth
          , c = r.top
          , d = r.left;
        this.userCode = "\n      const ivec2 strides = ivec2(" + a + ", " + i + ");\n      const ivec2 pads = ivec2(" + c + ", " + d + ");\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < " + o + "; h++) {\n          int hIn = hBeg + h * " + u + ";\n\n          if (hIn >= 0 && hIn < " + n + ") {\n            for (int w = 0; w < " + s + "; w++) {\n              int wIn = wBeg + w * " + l + ";\n\n              if (wIn >= 0 && wIn < " + t + ") {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    "
    };
    var Ai = {
        kernelName: n.Dilation2D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = e.attrs, o = r.x, s = r.filter, u = i.strides, l = i.pad, c = i.dilations, d = n.backend_util.computeDilation2DInfo(o.shape, s.shape, u, l, "NHWC", c), p = new Ni(d), h = hr({
                inputs: {
                    x: t = a.runWebGLProgram(p, [o, s], "float32")
                },
                backend: a,
                attrs: {
                    shape: d.outShape
                }
            });
            return a.disposeIntermediateTensorInfo(t),
            h
        }
    };
    var Fi = {
        kernelName: n.Einsum,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r, a, i, o = e.inputs, u = e.backend, l = e.attrs.equation, c = o, d = n.backend_util.decodeEinsumEquation(l, c.length), p = d.allDims, h = d.summedDims, f = d.idDims;
            n.backend_util.checkEinsumDimSizes(p.length, f, c);
            for (var x = n.backend_util.getEinsumComputePath(h, f), v = x.path, m = x.steps, g = m.length, b = null, C = p.length, y = [], k = 0; k < g; ++k) {
                try {
                    for (var I = (t = void 0,
                    s(m[k])), w = I.next(); !w.done; w = I.next()) {
                        var S = w.value
                          , R = n.backend_util.getEinsumPermutation(C, f[S])
                          , T = R.permutationIndices
                          , E = R.expandDims
                          , N = void 0;
                        n.backend_util.isIdentityPermutation(T) ? N = c[S] : (N = Ir({
                            inputs: {
                                x: c[S]
                            },
                            backend: u,
                            attrs: {
                                perm: T
                            }
                        }),
                        y.push(N));
                        for (var A = N.shape.slice(), F = 0; F < E.length; ++F)
                            A.splice(E[F], 0, 1);
                        n.util.arraysEqual(N.shape, A) || (N = hr({
                            inputs: {
                                x: N
                            },
                            backend: u,
                            attrs: {
                                shape: A
                            }
                        }),
                        y.push(N)),
                        null === b ? b = N : (b = dr({
                            inputs: {
                                a: N,
                                b: b
                            },
                            backend: u
                        }),
                        y.push(b))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        w && !w.done && (r = I.return) && r.call(I)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                k < g - 1 && (v[k] >= 0 && (b = yr({
                    inputs: {
                        x: b
                    },
                    backend: u,
                    attrs: {
                        axis: v[k] - (p.length - C),
                        keepDims: !1
                    }
                }),
                y.push(b)),
                C--)
            }
            try {
                for (var _ = s(y), O = _.next(); !O.done; O = _.next()) {
                    var D = O.value;
                    D !== b && u.disposeIntermediateTensorInfo(D)
                }
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    O && !O.done && (i = _.return) && i.call(_)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            return b
        }
    }
      , _i = rr({
        opSnippet: "return (x >= 0.0) ? x : (exp(x) - 1.0);",
        packedOpSnippet: "\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n"
    })
      , Oi = {
        kernelName: n.Elu,
        backendName: "webgl",
        kernelFunc: _i
    }
      , Di = {
        kernelName: n.EluGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = t.dy
              , i = t.y
              , o = n.env().getBool("WEBGL_PACK_BINARY_OPERATIONS") ? new jt("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",a.shape,i.shape) : new Ht("return (b >= 1.0) ? a : a * (b + 1.0);",a.shape,i.shape);
            return r.runWebGLProgram(o, [a, i], a.dtype)
        }
    }
      , Pi = ar({
        opSnippet: "return float(a == b);",
        packedOpSnippet: "\n  return vec4(equal(a, b));\n",
        dtype: "bool",
        cpuKernelImpl: Gn
    })
      , Li = {
        kernelName: n.Equal,
        backendName: "webgl",
        kernelFunc: Pi
    }
      , Bi = rr({
        opSnippet: '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ' + n.backend_util.ERF_P + ";\n  float a1 = " + n.backend_util.ERF_A1 + ";\n  float a2 = " + n.backend_util.ERF_A2 + ";\n  float a3 = " + n.backend_util.ERF_A3 + ";\n  float a4 = " + n.backend_util.ERF_A4 + ";\n  float a5 = " + n.backend_util.ERF_A5 + ";\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n"
    })
      , Vi = {
        kernelName: n.Erf,
        backendName: "webgl",
        kernelFunc: Bi
    }
      , Ui = rr({
        opSnippet: "if (isnan(x)) return x;\n  return exp(x);\n",
        packedOpSnippet: "\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
        cpuKernelImpl: zn,
        dtype: "float32"
    })
      , Wi = {
        kernelName: n.Exp,
        backendName: "webgl",
        kernelFunc: Ui
    };
    function Mi(e) {
        var t = e.inputs
          , r = e.attrs
          , a = e.backend
          , i = r.dim
          , o = t.input
          , s = o.shape.length
          , u = o.shape.slice()
          , l = i;
        return i < 0 && (n.util.assert(-(s + 1) <= i, (function() {
            return "Axis must be in the interval [" + -(s + 1) + ", " + s + "]"
        }
        )),
        l = s + i + 1),
        u.splice(l, 0, 1),
        hr({
            inputs: {
                x: o
            },
            backend: a,
            attrs: {
                shape: u
            }
        })
    }
    var Gi = {
        kernelName: n.ExpandDims,
        backendName: "webgl",
        kernelFunc: Mi
    }
      , zi = "return exp(x) - 1.0;"
      , Xi = rr({
        opSnippet: zi,
        packedOpSnippet: zi,
        cpuKernelImpl: Xn
    })
      , Hi = {
        kernelName: n.Expm1,
        backendName: "webgl",
        kernelFunc: Xi
    }
      , ji = function(e, n, t) {
        this.variableNames = ["real", "imag"];
        var r = n[1];
        this.outputShape = n;
        var a, i = t ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI, o = t ? r + ".0" : "1.0";
        if ("real" === e)
            a = "return real * expR - imag * expI;";
        else {
            if ("imag" !== e)
                throw new Error('FFT component must be either "real" or "imag", got ' + e + ".");
            a = "return real * expI + imag * expR;"
        }
        this.userCode = "\n      const float exponentMultiplier = " + i + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + a + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + r + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + r + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + o + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    "
    };
    function Ki(e, t, r) {
        var a = r.texData.get(e.dataId)
          , i = n.util.sizeFromShape(e.shape)
          , o = e.shape[e.shape.length - 1]
          , s = hr({
            inputs: {
                x: e
            },
            backend: r,
            attrs: {
                shape: [i / o, o]
            }
        })
          , u = s.shape
          , l = new ji("real",u,t)
          , c = new ji("imag",u,t)
          , d = [{
            dataId: a.complexTensorInfos.real.dataId,
            dtype: a.complexTensorInfos.real.dtype,
            shape: u
        }, {
            dataId: a.complexTensorInfos.imag.dataId,
            dtype: a.complexTensorInfos.imag.dtype,
            shape: u
        }]
          , p = r.runWebGLProgram(l, d, "float32")
          , h = r.runWebGLProgram(c, d, "float32")
          , f = Yt({
            inputs: {
                real: p,
                imag: h
            },
            backend: r
        });
        r.disposeIntermediateTensorInfo(p),
        r.disposeIntermediateTensorInfo(h);
        var x = hr({
            inputs: {
                x: f
            },
            backend: r,
            attrs: {
                shape: e.shape
            }
        });
        return r.disposeIntermediateTensorInfo(s),
        r.disposeIntermediateTensorInfo(f),
        x
    }
    var qi = {
        kernelName: n.FFT,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend;
            return Ki(n.input, !1, t)
        }
    }
      , Yi = function(e, n) {
        this.outputShape = [],
        this.customUniforms = [{
            name: "value",
            type: "float"
        }],
        this.variableNames = ["x"],
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "
    };
    function Qi(e) {
        var t = e.backend
          , r = e.attrs
          , a = r.shape
          , i = r.value
          , o = r.dtype;
        if ("string" === (o = o || n.util.inferDtype(i))) {
            var s = n.util.getArrayFromDType(o, n.util.sizeFromShape(a));
            return s.fill(i),
            t.makeTensorInfo(a, o, s)
        }
        var u = new Yi(a,i)
          , l = [[i]];
        return t.runWebGLProgram(u, [], o, l)
    }
    var Zi, Ji = {
        kernelName: n.Fill,
        backendName: "webgl",
        kernelFunc: Qi
    }, $i = function(e) {
        this.variableNames = ["Image"],
        this.outputShape = [];
        var n = e[2];
        this.outputShape = e,
        this.userCode = "\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = " + n + " - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < " + n + ") {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    "
    }, eo = {
        kernelName: n.FlipLeftRight,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = n.image
              , a = t
              , i = new $i(r.shape);
            return a.runWebGLProgram(i, [r], r.dtype)
        }
    }, no = "return floor(x);", to = rr({
        opSnippet: no,
        packedOpSnippet: no,
        cpuKernelImpl: Hn
    }), ro = {
        kernelName: n.Floor,
        backendName: "webgl",
        kernelFunc: to
    }, ao = ar({
        opSnippet: "\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",
        packedOpSnippet: "\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",
        dtype: "int32"
    }), io = {
        kernelName: n.FloorDiv,
        backendName: "webgl",
        kernelFunc: ao
    }, oo = function(e) {
        this.variableNames = ["A"];
        var n = he()
          , t = u(e, 2)
          , r = t[0]
          , a = t[1];
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + a + ".0, " + r + ".0);\n\n        vec4 values = " + n.texture2D + "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    "
    }, so = function(e) {
        this.variableNames = ["A"],
        this.packedInputs = !1,
        this.packedOutput = !0;
        var n = he()
          , t = u(e, 2)
          , r = t[0]
          , a = t[1];
        this.outputShape = e,
        this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(" + a + ".0, " + r + ".0);\n            vec4 values = " + n.texture2D + "(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        " + n.output + " = result;\n      }\n    "
    }, uo = {
        kernelName: n.FromPixels,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.pixels
              , o = a.numChannels
              , s = "undefined" != typeof HTMLVideoElement && i instanceof HTMLVideoElement
              , l = "undefined" != typeof HTMLImageElement && i instanceof HTMLImageElement
              , c = u(s ? [i.videoWidth, i.videoHeight] : [i.width, i.height], 2)
              , p = c[0]
              , h = c[1]
              , f = [h, p]
              , x = [h, p, o];
            (l || s) && (null == Zi && (Zi = document.createElement("canvas").getContext("2d")),
            Zi.canvas.width = p,
            Zi.canvas.height = h,
            Zi.drawImage(i, 0, 0, p, h),
            i = Zi.canvas);
            var v = r.makeTensorInfo(f, "int32");
            r.texData.get(v.dataId).usage = d.PIXELS,
            r.gpgpu.uploadPixelDataToTexture(r.getTexture(v.dataId), i);
            var m = n.env().getBool("WEBGL_PACK") ? new so(x) : new oo(x)
              , g = r.runWebGLProgram(m, [v], "int32");
            return r.disposeData(v.dataId),
            g
        }
    };
    var lo = {
        kernelName: n.FusedConv2D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = e.attrs, o = r.x, s = r.filter, u = r.bias, l = r.preluActivationWeights, c = i.strides, d = i.pad, p = i.dataFormat, h = i.dilations, f = i.dimRoundingMode, x = i.activation, v = i.leakyreluAlpha, m = n.backend_util.convertConv2DDataFormat(p), g = n.backend_util.computeConv2DInfo(o.shape, s.shape, c, h, d, f, !1, m), b = [];
            if (1 !== g.filterHeight || 1 !== g.filterWidth || 1 !== g.dilationHeight || 1 !== g.dilationWidth || 1 !== g.strideHeight || 1 !== g.strideWidth || "SAME" !== g.padInfo.type && "VALID" !== g.padInfo.type)
                if (n.env().getBool("WEBGL_CONV_IM2COL") && 1 === o.shape[0])
                    t = Qa({
                        x: o,
                        filter: s,
                        convInfo: g,
                        backend: a,
                        bias: u,
                        activation: x,
                        preluActivationWeights: l,
                        leakyreluAlpha: v
                    });
                else {
                    var C = null != u
                      , y = null != l
                      , k = "leakyrelu" === x
                      , I = x ? ir(x, !1) : null
                      , w = new ja(g,C,I,y,k)
                      , S = [o, s];
                    if (u && S.push(u),
                    l && S.push(l),
                    k) {
                        var R = a.makeTensorInfo([], "float32", n.util.createScalarValue(v, "float32"));
                        S.push(R),
                        b.push(R)
                    }
                    t = a.runWebGLProgram(w, S, "float32")
                }
            else
                t = Ya({
                    x: o,
                    filter: s,
                    convInfo: g,
                    backend: a,
                    bias: u,
                    activation: x,
                    preluActivationWeights: l,
                    leakyreluAlpha: v
                });
            var T = hr({
                inputs: {
                    x: t
                },
                backend: a,
                attrs: {
                    shape: g.outShape
                }
            });
            return b.push(t),
            b.forEach((function(e) {
                return a.disposeIntermediateTensorInfo(e)
            }
            )),
            T
        }
    };
    var co = {
        kernelName: n.FusedDepthwiseConv2D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.filter
              , s = t.bias
              , u = t.preluActivationWeights
              , l = a.strides
              , c = a.pad
              , d = a.dilations
              , p = a.dimRoundingMode
              , h = a.activation
              , f = a.leakyreluAlpha
              , x = []
              , v = d;
            null == v && (v = [1, 1]),
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(l, v), (function() {
                return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + l + " and dilations '" + v + "'"
            }
            ));
            var m, g = n.backend_util.computeConv2DInfo(i.shape, o.shape, l, v, c, p, !0), b = n.env().getBool("WEBGL_PACK_DEPTHWISECONV") && g.strideWidth <= 2 && g.outChannels / g.inChannels == 1, C = h ? ir(h, b) : null, y = [i, o], k = null != s, I = null != u, w = "leakyrelu" === h;
            if (k && y.push(s),
            I && y.push(u),
            w) {
                var S = r.makeTensorInfo([], "float32", n.util.createScalarValue(f, "float32"));
                y.push(S),
                x.push(S)
            }
            m = b ? new yi(g,k,C,I,w) : new Ci(g,k,C,I,w);
            var R = [[g.padInfo.top, g.padInfo.left], [g.strideHeight, g.strideWidth], [g.dilationHeight, g.dilationWidth], [g.inHeight, g.inWidth]]
              , T = r.runWebGLProgram(m, y, "float32", R);
            return x.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            T
        }
    }
      , po = function(e, n, t) {
        this.sliceDim = e,
        this.strides = n,
        this.variableNames = ["x", "indices"],
        this.outputShape = t;
        var r = Ne(n.length)
          , a = Ne(t.length)
          , i = this.sliceDim > 1 ? "strides[j]" : "strides";
        this.userCode = "\n        " + r + " strides = " + r + "(" + this.strides + ");\n         void main() {\n          " + a + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + i + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      "
    };
    var ho = {
        kernelName: n.GatherNd,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = t.params
              , i = t.indices
              , o = i.shape
              , s = o[o.length - 1]
              , l = n.util.sizeFromShape(a.shape)
              , c = u(n.backend_util.prepareAndValidate(a, i), 4)
              , d = c[0]
              , p = c[1]
              , h = c[2]
              , f = c[3]
              , x = hr({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    shape: [p, s]
                }
            })
              , v = hr({
                inputs: {
                    x: a
                },
                backend: r,
                attrs: {
                    shape: [n.util.sizeFromShape(a.shape) / h, h]
                }
            });
            if (r.shouldExecuteOnCPU([a, i]) || "string" === a.dtype) {
                var m = r.readSync(i.dataId)
                  , g = r.bufferSync(a)
                  , b = jn(m, g, a.dtype, p, s, h, f, a.shape, l);
                return r.makeTensorInfo(d, a.dtype, b.values)
            }
            var C = new po(s,f,[p, h])
              , y = r.runWebGLProgram(C, [v, x], v.dtype)
              , k = hr({
                inputs: {
                    x: y
                },
                backend: r,
                attrs: {
                    shape: d
                }
            });
            return r.disposeIntermediateTensorInfo(x),
            r.disposeIntermediateTensorInfo(v),
            r.disposeIntermediateTensorInfo(y),
            k
        }
    }
      , fo = function(e, n) {
        this.variableNames = ["A", "indices"],
        this.outputShape = n,
        this.rank = n.length;
        var t = Ne(this.rank)
          , r = function(e, n) {
            for (var t = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], r = [], a = 0; a < e.length; a++)
                2 === a ? r.push("index") : r.push("" + t[a]);
            return r.join()
        }(e);
        this.userCode = "\n      void main() {\n        " + t + " resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < " + e[2] + ") ? 1.0 : 0.0;\n        setOutput(inBounds * getA(" + r + "));\n      }\n    "
    };
    function xo(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.x
          , o = t.indices
          , s = a.axis
          , u = a.batchDims
          , l = n.util.parseAxisParam(s, i.shape)[0];
        if (n.env().get("DEBUG"))
            for (var c = r.readSync(o.dataId), d = i.shape[l], p = function(e) {
                var t = c[e];
                n.util.assert(t <= d - 1 && t >= 0, (function() {
                    return "GatherV2: the index value " + t + " is not in [0, " + (d - 1) + "]"
                }
                ))
            }, h = 0; h < c.length; ++h)
                p(h);
        var f = n.backend_util.segment_util.collectGatherOpShapeInfo(i, o, l, u)
          , x = n.util.sizeFromShape(o.shape)
          , v = []
          , m = hr({
            inputs: {
                x: i
            },
            backend: r,
            attrs: {
                shape: [f.batchSize, f.outerSize, f.dimSize, f.sliceSize]
            }
        })
          , g = hr({
            inputs: {
                x: o
            },
            backend: r,
            attrs: {
                shape: [f.batchSize, x / f.batchSize]
            }
        });
        v.push(m),
        v.push(g);
        var b = [f.batchSize, f.outerSize, x / f.batchSize, f.sliceSize];
        if (r.shouldExecuteOnCPU([i, o]) || "string" === i.dtype) {
            var C = r.bufferSync(g)
              , y = r.bufferSync(m)
              , k = Kn(y, C, b);
            return v.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            r.makeTensorInfo(f.outputShape, k.dtype, k.values)
        }
        var I = new fo(m.shape,b)
          , w = r.runWebGLProgram(I, [m, g], m.dtype);
        v.push(w);
        var S = hr({
            inputs: {
                x: w
            },
            backend: r,
            attrs: {
                shape: f.outputShape
            }
        });
        return v.forEach((function(e) {
            return r.disposeIntermediateTensorInfo(e)
        }
        )),
        S
    }
    var vo = {
        kernelName: n.GatherV2,
        backendName: "webgl",
        kernelFunc: xo
    }
      , mo = ar({
        opSnippet: "return float(a > b);",
        packedOpSnippet: "\n  return vec4(greaterThan(a, b));\n",
        cpuKernelImpl: qn,
        dtype: "bool"
    })
      , go = {
        kernelName: n.Greater,
        backendName: "webgl",
        kernelFunc: mo
    }
      , bo = ar({
        opSnippet: "return float(a >= b);",
        packedOpSnippet: "\n  return vec4(greaterThanEqual(a, b));\n",
        dtype: "bool",
        cpuKernelImpl: Yn
    })
      , Co = {
        kernelName: n.GreaterEqual,
        backendName: "webgl",
        kernelFunc: bo
    };
    var yo = {
        kernelName: n.IFFT,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend;
            return Ki(n.input, !0, t)
        }
    }
      , ko = rr({
        opSnippet: "return float(!isnan(x) && !isinf(x));",
        dtype: "bool"
    })
      , Io = {
        kernelName: n.IsFinite,
        backendName: "webgl",
        kernelFunc: ko
    }
      , wo = rr({
        opSnippet: "return float(isinf(x));",
        dtype: "bool"
    })
      , So = {
        kernelName: n.IsInf,
        backendName: "webgl",
        kernelFunc: wo
    }
      , Ro = rr({
        opSnippet: "return float(isnan(x));",
        dtype: "bool"
    })
      , To = {
        kernelName: n.IsNan,
        backendName: "webgl",
        kernelFunc: Ro
    }
      , Eo = ar({
        opSnippet: "return float(a < b);",
        packedOpSnippet: "\n  return vec4(lessThan(a, b));\n",
        cpuKernelImpl: Qn,
        dtype: "bool"
    })
      , No = {
        kernelName: n.Less,
        backendName: "webgl",
        kernelFunc: Eo
    }
      , Ao = ar({
        opSnippet: "return float(a <= b);",
        packedOpSnippet: "\n  return vec4(lessThanEqual(a, b));\n",
        cpuKernelImpl: Zn,
        dtype: "bool"
    })
      , Fo = {
        kernelName: n.LessEqual,
        backendName: "webgl",
        kernelFunc: Ao
    };
    var _o = {
        kernelName: n.LinSpace,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.backend
              , t = e.attrs
              , r = t.start
              , a = t.stop
              , i = t.num
              , o = Jn(r, a, i);
            return n.makeTensorInfo([o.length], "float32", o)
        }
    }
      , Oo = rr({
        opSnippet: "if (isnan(x)) return x;\n  return x < 0.0 ? 0./0. : log(x);\n",
        packedOpSnippet: "\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",
        cpuKernelImpl: $n
    })
      , Do = {
        kernelName: n.Log,
        backendName: "webgl",
        kernelFunc: Oo
    }
      , Po = rr({
        opSnippet: "if (isnan(x)) return x;\n  return log(1.0 + x);\n"
    })
      , Lo = {
        kernelName: n.Log1p,
        backendName: "webgl",
        kernelFunc: Po
    }
      , Bo = ar({
        opSnippet: "return float(a >= 1.0 && b >= 1.0);",
        packedOpSnippet: "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",
        dtype: "bool"
    })
      , Vo = {
        kernelName: n.LogicalAnd,
        backendName: "webgl",
        kernelFunc: Bo
    }
      , Uo = rr({
        opSnippet: "return float(!(x >= 1.0));"
    })
      , Wo = {
        kernelName: n.LogicalNot,
        backendName: "webgl",
        kernelFunc: Uo
    }
      , Mo = ar({
        opSnippet: "return float(a >= 1.0 || b >= 1.0);",
        packedOpSnippet: "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",
        dtype: "bool"
    })
      , Go = {
        kernelName: n.LogicalOr,
        backendName: "webgl",
        kernelFunc: Mo
    }
      , zo = function(e, n, t, r, a) {
        this.variableNames = ["x"],
        this.outputShape = [];
        var i, o = n, s = e[3] - 1;
        this.outputShape = e;
        var u = "float(" + t + ") + float(" + r + ") * sum";
        i = .5 === a ? "inversesqrt(" + u + ")" : 1 === a ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + a + "));",
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + o + "; j <= " + o + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + s + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + i + ";\n        setOutput(val);\n      }\n    "
    }
      , Xo = function(e, n, t, r, a) {
        this.variableNames = ["x"],
        this.outputShape = [],
        this.packedInputs = !0,
        this.packedOutput = !0;
        var i, o = n, s = e[3] - 1;
        this.outputShape = e;
        var u = "float(" + t + ") + float(" + r + ") * sum";
        i = .5 === a ? "inversesqrt(" + u + ")" : 1 === a ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + a + "));",
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < " + this.outputShape[3] + ";\n        bool hasNextRow = c < " + this.outputShape[2] + ";\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - " + o + ";\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - " + o + "; j <= " + o + "; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(" + s + "));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * " + i + ";\n        setOutput(result);\n      }\n    "
    }
      , Ho = {
        kernelName: n.LRN,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.depthRadius
              , s = a.bias
              , u = a.alpha
              , l = a.beta
              , c = n.env().getBool("WEBGL_PACK_NORMALIZATION") ? new Xo(i.shape,o,s,u,l) : new zo(i.shape,o,s,u,l);
            return r.runWebGLProgram(c, [i], i.dtype)
        }
    }
      , jo = function(e, n, t, r, a) {
        this.variableNames = ["inputImage", "outputImage", "dy"],
        this.outputShape = [],
        this.outputShape = e,
        this.depth = e[3],
        this.depthRadius = n,
        this.bias = t,
        this.alpha = r,
        this.beta = a,
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + n + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + n + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + r + ") * norm + float(" + t + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + r + ")\n                * float(" + a + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + a + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    "
    }
      , Ko = {
        kernelName: n.LRNGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.x
              , i = n.y
              , o = n.dy
              , s = r.depthRadius
              , u = r.bias
              , l = r.alpha
              , c = r.beta
              , d = new jo(a.shape,s,u,l,c);
            return t.runWebGLProgram(d, [a, i, o], a.dtype)
        }
    };
    function qo(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.x
          , o = a.reductionIndices
          , s = a.keepDims
          , l = i.shape.length
          , c = n.util.parseAxisParam(o, i.shape)
          , d = c
          , p = n.backend_util.getAxesPermutation(d, l)
          , h = null != p
          , f = r.shouldExecuteOnCPU([i])
          , x = i;
        if (h) {
            if (f) {
                for (var v = r.texData.get(x.dataId).values, m = new Array(l), g = 0; g < m.length; g++)
                    m[g] = i.shape[p[g]];
                var b = It(v, i.shape, i.dtype, p, m);
                x = r.makeTensorInfo(m, i.dtype),
                r.texData.get(x.dataId).values = b
            } else
                x = Cr(i, p, r);
            d = n.backend_util.getInnerMostAxes(d.length, l)
        }
        n.backend_util.assertAxesAreInnerMostDims("max", d, l);
        var C, y = u(n.backend_util.computeOutAndReduceShapes(x.shape, d), 2), k = y[0], I = y[1], w = k;
        if (s && (w = n.backend_util.expandShapeToKeepDim(k, c)),
        f) {
            v = r.texData.get(x.dataId).values;
            var S = et(v, n.util.sizeFromShape(I), w, i.dtype);
            C = r.makeTensorInfo(w, i.dtype),
            r.texData.get(C.dataId).values = S
        } else
            C = function(e, t, r, a) {
                var i = n.util.sizeFromShape(t)
                  , o = hr({
                    inputs: {
                        x: e
                    },
                    attrs: {
                        shape: [n.util.sizeFromShape(e.shape) / i, i]
                    },
                    backend: a
                })
                  , s = mr(o, e.dtype, "max", a)
                  , u = hr({
                    inputs: {
                        x: s
                    },
                    attrs: {
                        shape: r
                    },
                    backend: a
                });
                return a.disposeIntermediateTensorInfo(o),
                a.disposeIntermediateTensorInfo(s),
                u
            }(x, I, w, r);
        return h && r.disposeIntermediateTensorInfo(x),
        C
    }
    var Yo = {
        kernelName: n.Max,
        backendName: "webgl",
        kernelFunc: qo
    }
      , Qo = ar({
        opSnippet: "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",
        packedOpSnippet: "\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",
        cpuKernelImpl: nt
    })
      , Zo = {
        kernelName: n.Maximum,
        backendName: "webgl",
        kernelFunc: Qo
    };
    var Jo = {
        kernelName: n.MaxPool,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x;
            ce(i, "maxPool");
            var o = a.filterSize
              , s = a.strides
              , u = a.pad
              , l = a.dimRoundingMode;
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(s, 1), (function() {
                return "Error in maxPool: Either strides or dilations must be 1. Got strides " + s + " and dilations '1'"
            }
            ));
            var c = n.backend_util.computePool2DInfo(i.shape, o, s, 1, u, l);
            if (1 === c.filterWidth && 1 === c.filterHeight && n.util.arraysEqual(c.inShape, c.outShape))
                return Kt({
                    inputs: {
                        x: i
                    },
                    backend: r
                });
            var d = new aa(c,"max",!1);
            return r.runWebGLProgram(d, [i], i.dtype)
        }
    };
    var $o = {
        kernelName: n.MaxPool3D,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.filterSize
              , s = a.strides
              , u = a.pad
              , l = a.dataFormat
              , c = a.dimRoundingMode
              , d = n.backend_util.computePool3DInfo(i.shape, o, s, [1, 1, 1], u, c, l)
              , p = new ia(d,"max",!1);
            return r.runWebGLProgram(p, [i], i.dtype)
        }
    }
      , es = function(e) {
        this.variableNames = ["dy", "maxPos"],
        this.outputShape = e.inShape;
        var n = e.strideHeight
          , t = e.strideWidth
          , r = e.dilationHeight
          , a = e.effectiveFilterHeight
          , i = e.effectiveFilterWidth
          , o = a - 1 - e.padInfo.top
          , s = i - 1 - e.padInfo.left
          , u = a * i - 1;
        this.userCode = "\n      const ivec2 pads = ivec2(" + o + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + a + ";\n          wR += " + r + ") {\n          float dyR = float(dyRCorner + wR) / " + n + ".0;\n\n          if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + i + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + t + ".0;\n\n            if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + u + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + i + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    }
      , ns = function(e) {
        this.variableNames = ["dy", "maxPos"],
        this.outputShape = e.inShape;
        var n = e.strideDepth
          , t = e.strideHeight
          , r = e.strideWidth
          , a = e.dilationDepth
          , i = e.dilationHeight
          , o = e.dilationWidth
          , s = e.effectiveFilterDepth
          , u = e.effectiveFilterHeight
          , l = e.effectiveFilterWidth
          , c = s - 1 - e.padInfo.front
          , d = u - 1 - e.padInfo.top
          , p = l - 1 - e.padInfo.left
          , h = s * u * l - 1;
        this.userCode = "\n      const ivec3 pads = ivec3(" + c + ", " + d + ", " + p + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < " + s + ";\n           wD += " + a + ") {\n          float dyD = float(dyDCorner + wD) / " + n + ".0;\n\n          if (dyD < 0.0 || dyD >= " + e.outDepth + ".0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < " + u + ";\n              wR += " + i + ") {\n            float dyR = float(dyRCorner + wR) / " + t + ".0;\n\n            if (dyR < 0.0 || dyR >= " + e.outHeight + ".0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < " + l + ";\n                wC += " + o + ") {\n              float dyC = float(dyCCorner + wC) / " + r + ".0;\n\n              if (dyC < 0.0 || dyC >= " + e.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = " + h + " -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * " + u + " * " + l + " +\n                  wR * " + l + " + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
    };
    var ts = {
        kernelName: n.MaxPool3DGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.input
              , s = a.filterSize
              , u = a.strides
              , l = a.pad
              , c = a.dimRoundingMode
              , d = n.backend_util.computePool3DInfo(o.shape, s, u, [1, 1, 1], l, c)
              , p = new ia(d,"max",!0)
              , h = r.runWebGLProgram(p, [o], o.dtype)
              , f = new ns(d)
              , x = r.runWebGLProgram(f, [i, h], o.dtype);
            return r.disposeIntermediateTensorInfo(h),
            x
        }
    };
    var rs = {
        kernelName: n.MaxPoolGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.dy
              , o = t.input
              , s = o;
            ce([o, t.output], "maxPoolGrad");
            var u = a.filterSize
              , l = a.strides
              , c = a.pad
              , d = a.dimRoundingMode
              , p = n.backend_util.computePool2DInfo(s.shape, u, l, 1, c, d)
              , h = new aa(p,"max",!0)
              , f = r.runWebGLProgram(h, [s], s.dtype)
              , x = new es(p)
              , v = r.runWebGLProgram(x, [i, f], s.dtype);
            return r.disposeIntermediateTensorInfo(f),
            v
        }
    };
    var as = {
        kernelName: n.MaxPoolWithArgmax,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.attrs
              , a = e.backend
              , i = t.x
              , o = r.filterSize
              , s = r.strides
              , l = r.pad
              , c = r.includeBatchInIndex
              , d = a;
            n.util.assert(4 === i.shape.length, (function() {
                return "Error in maxPool: input must be rank 4 but got rank " + i.shape.length + "."
            }
            ));
            var p = [1, 1];
            n.util.assert(n.backend_util.eitherStridesOrDilationsAreOne(s, p), (function() {
                return "Error in maxPool: Either strides or dilations must be 1. Got strides " + s + " and dilations '" + p + "'"
            }
            ));
            var h = n.backend_util.computePool2DInfo(i.shape, o, s, p, l)
              , f = u(function(e, n, t, r) {
                var a = new aa(t,"max",!1)
                  , i = r.runWebGLProgram(a, [e], "float32");
                return a = new aa(t,"max",!0,!0,n),
                [i, r.runWebGLProgram(a, [e], "float32")]
            }(i, c, h, d), 2);
            return [f[0], f[1]]
        }
    };
    var is = {
        kernelName: n.Mean,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r, a = e.inputs, i = e.attrs, o = e.backend, l = a.x, c = i.keepDims, d = i.axis, p = o, h = l.shape.length, f = n.util.parseAxisParam(d, l.shape), x = f, v = n.backend_util.getAxesPermutation(x, h), m = null != v, g = p.shouldExecuteOnCPU([l]), b = [], C = l;
            if (m) {
                if (g) {
                    for (var y = p.texData.get(C.dataId).values, k = new Array(h), I = 0; I < k.length; I++)
                        k[I] = l.shape[v[I]];
                    var w = It(y, l.shape, l.dtype, v, k);
                    C = p.makeTensorInfo(k, l.dtype),
                    p.texData.get(C.dataId).values = w
                } else
                    C = Cr(l, v, p);
                b.push(C),
                x = n.backend_util.getInnerMostAxes(x.length, h)
            }
            n.backend_util.assertAxesAreInnerMostDims("sum", x, h);
            var S = u(n.backend_util.computeOutAndReduceShapes(C.shape, x), 2)
              , R = S[0]
              , T = S[1]
              , E = R;
            c && (E = n.backend_util.expandShapeToKeepDim(R, f));
            var N = function(e, t, r, a) {
                var i = n.util.sizeFromShape(t)
                  , o = hr({
                    inputs: {
                        x: e
                    },
                    attrs: {
                        shape: [n.util.sizeFromShape(e.shape) / i, i]
                    },
                    backend: a
                })
                  , s = mr(o, "float32", "mean", a)
                  , u = hr({
                    inputs: {
                        x: s
                    },
                    attrs: {
                        shape: r
                    },
                    backend: a
                });
                return a.disposeIntermediateTensorInfo(o),
                a.disposeIntermediateTensorInfo(s),
                u
            }(C, T, E, p);
            try {
                for (var A = s(b), F = A.next(); !F.done; F = A.next()) {
                    I = F.value;
                    p.disposeIntermediateTensorInfo(I)
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    F && !F.done && (r = A.return) && r.call(A)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return N
        }
    };
    var os = {
        kernelName: n.Min,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.axis
              , s = a.keepDims
              , l = i.shape.length
              , c = n.util.parseAxisParam(o, i.shape)
              , d = c
              , p = n.backend_util.getAxesPermutation(d, l)
              , h = i;
            null != p && (h = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: p
                }
            }),
            d = n.backend_util.getInnerMostAxes(d.length, i.shape.length)),
            n.backend_util.assertAxesAreInnerMostDims("min", d, l);
            var f, x = u(n.backend_util.computeOutAndReduceShapes(h.shape, d), 2), v = x[0], m = x[1], g = hr({
                inputs: {
                    x: h
                },
                backend: r,
                attrs: {
                    shape: [-1, n.util.sizeFromShape(m)]
                }
            }), b = mr(g, g.dtype, "min", r);
            return f = hr(s ? {
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: n.backend_util.expandShapeToKeepDim(v, c)
                }
            } : {
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: v
                }
            }),
            r.disposeIntermediateTensorInfo(g),
            r.disposeIntermediateTensorInfo(b),
            null != p && r.disposeIntermediateTensorInfo(h),
            f
        }
    }
      , ss = ar({
        opSnippet: "\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",
        packedOpSnippet: "\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n",
        cpuKernelImpl: tt
    })
      , us = {
        kernelName: n.Minimum,
        backendName: "webgl",
        kernelFunc: ss
    }
      , ls = function(e, n, t) {
        this.variableNames = ["x"],
        this.outputShape = n.map((function(n, t) {
            return n[0] + e[t] + n[1]
        }
        ));
        var r = e.length
          , a = Ne(r)
          , i = n.map((function(e) {
            return e[0]
        }
        )).join(",")
          , o = n.map((function(n, t) {
            return n[0] + e[t]
        }
        )).join(",")
          , s = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r)
          , u = "reflect" === t ? 0 : 1;
        this.userCode = 1 !== r ? "\n      " + a + " start = " + a + "(" + i + ");\n      " + a + " end = " + a + "(" + o + ");\n\n      void main() {\n        " + a + " outC = getOutputCoords();\n        for (int i = 0; i < " + r + "; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - " + u + ";\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + " + u + ";\n          }\n        }\n        " + a + " coords = outC - start;\n        setOutput(getX(" + s + "));\n      }\n    " : "\n        int start = " + i + ";\n        int end = " + o + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - " + u + ";\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + " + u + ";\n          }\n          setOutput(getX(outC - start));\n        }\n      "
    }
      , cs = function(e, n, t) {
        this.variableNames = ["x"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = n.map((function(n, t) {
            return n[0] + e[t] + n[1]
        }
        ));
        var r, a = e.length, i = Ne(a), o = n.map((function(e) {
            return e[0]
        }
        )).join(","), s = n.map((function(n, t) {
            return n[0] + e[t]
        }
        )).join(","), u = Rt("rc", a), l = Rt("source", a), c = u[a - 1] + " < " + this.outputShape[a - 1], d = 1 === a ? "source" : "vec2(" + l.slice(-2).join() + ")", p = "reflect" === t ? 0 : 1, h = "";
        h = 1 === a ? "\n        " + i + " rc = outputLoc;\n        " + (r = "\n        " + i + " source = rc;\n        if (source < start) {\n          source = start * 2 - source - " + p + ";\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + " + p + ";\n        }\n        source -= start;\n      ") + "\n        result[0] = getChannel(getX(" + l.join() + "), " + d + ");\n        " + u[a - 1] + " += 1;\n        if(" + c + ") {\n          " + r + "\n          result[1] = getChannel(getX(" + l.join() + "), " + d + ");\n        }\n      " : "\n        " + i + " rc = outputLoc;\n        " + (r = "\n        " + i + " source = rc;\n        " + i + " lt = " + i + "(lessThan(source, start));\n        " + i + " gte = " + i + "(greaterThanEqual(source, end));\n        " + i + " orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - " + p + ") +\n                gte * ((end - 1) * 2 - source + " + p + ");\n        source -= start;\n      ") + "\n        result[0] = getChannel(getX(" + l.join() + "), " + d + ");\n        " + u[a - 1] + " += 1;\n        if(" + c + ") {\n          " + r + "\n          result[1] = getChannel(getX(" + l.join() + "), " + d + ");\n        }\n        rc = outputLoc;\n        " + u[a - 2] + " += 1;\n        if(" + u[a - 2] + " < " + this.outputShape[a - 2] + ") {\n          " + r + "\n          result[2] = getChannel(getX(" + l.join() + "), " + d + ");\n          " + u[a - 1] + " += 1;\n          if(" + c + ") {\n            " + r + "\n            result[3] = getChannel(getX(" + l.join() + "), " + d + ");\n          }\n        }\n      ",
        this.userCode = "\n      const " + i + " start = " + i + "(" + o + ");\n      const " + i + " end = " + i + "(" + s + ");\n\n      void main() {\n        " + i + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + h + "\n        setOutput(result);\n      }\n    "
    }
      , ds = {
        kernelName: n.MirrorPad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.paddings
              , s = a.mode
              , u = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new cs(i.shape,o,s) : new ls(i.shape,o,s);
            return r.runWebGLProgram(u, [i], i.dtype)
        }
    }
      , ps = ar({
        opSnippet: "if (b == 0.0) return NAN;\n  return mod(a, b);",
        packedOpSnippet: "\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"
    })
      , hs = {
        kernelName: n.Mod,
        backendName: "webgl",
        kernelFunc: ps
    }
      , fs = function(e, n, t) {
        this.variableNames = ["probs"],
        this.customUniforms = [{
            name: "seed",
            type: "float"
        }],
        this.outputShape = [e, t],
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (n - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (n - 1) + "));\n      }\n    "
    }
      , xs = ar({
        opSnippet: "\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",
        packedOpSnippet: "\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",
        checkOutOfBounds: !0
    })
      , vs = {
        kernelName: n.RealDiv,
        backendName: "webgl",
        kernelFunc: xs
    }
      , ms = "return a - b;"
      , gs = ar({
        opSnippet: ms,
        packedOpSnippet: ms,
        supportsComplex: !0,
        cpuKernelImpl: Ct
    })
      , bs = {
        kernelName: n.Sub,
        backendName: "webgl",
        kernelFunc: gs
    };
    function Cs(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.logits
          , o = a.dim
          , s = n.util.parseAxisParam([o], i.shape)
          , u = qo({
            inputs: {
                x: i
            },
            backend: r,
            attrs: {
                reductionIndices: s,
                keepDims: !1
            }
        })
          , l = n.backend_util.expandShapeToKeepDim(u.shape, s)
          , c = hr({
            inputs: {
                x: u
            },
            backend: r,
            attrs: {
                shape: l
            }
        })
          , d = gs({
            inputs: {
                a: i,
                b: c
            },
            backend: r
        })
          , p = Ui({
            inputs: {
                x: d
            },
            backend: r
        })
          , h = yr({
            inputs: {
                x: p
            },
            backend: r,
            attrs: {
                axis: s,
                keepDims: !1
            }
        })
          , f = hr({
            inputs: {
                x: h
            },
            backend: r,
            attrs: {
                shape: l
            }
        })
          , x = xs({
            inputs: {
                a: p,
                b: f
            },
            backend: r
        });
        return r.disposeIntermediateTensorInfo(u),
        r.disposeIntermediateTensorInfo(c),
        r.disposeIntermediateTensorInfo(d),
        r.disposeIntermediateTensorInfo(p),
        r.disposeIntermediateTensorInfo(h),
        r.disposeIntermediateTensorInfo(f),
        x
    }
    var ys = {
        kernelName: n.Softmax,
        backendName: "webgl",
        kernelFunc: Cs
    };
    var ks = {
        kernelName: n.Multinomial,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.logits
              , i = r.numSamples
              , o = r.seed
              , s = r.normalized
              , u = s ? a : Cs({
                inputs: {
                    logits: a
                },
                backend: t,
                attrs: {
                    dim: a.shape.length - 1
                }
            })
              , l = u.shape[0]
              , c = u.shape[1]
              , d = new fs(l,c,i)
              , p = [[o]]
              , h = t.runWebGLProgram(d, [u], "int32", p);
            return s || t.disposeIntermediateTensorInfo(u),
            h
        }
    };
    var Is = {
        kernelName: n.Neg,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = r.x;
            if (a.shouldExecuteOnCPU([i])) {
                var o = a.texData.get(i.dataId)
                  , s = u(at(o.values, i.shape, i.dtype), 2)
                  , l = s[0]
                  , c = s[1];
                return a.makeTensorInfo(c, i.dtype, l)
            }
            return t = n.env().getBool("WEBGL_PACK_UNARY_OPERATIONS") ? new Bt(i.shape,"\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n") : new Ot(i.shape,"if (isnan(x)) return x;\n  return -x;\n"),
            a.runWebGLProgram(t, [i], i.dtype)
        }
    }
      , ws = n.kernel_impls.nonMaxSuppressionV3Impl;
    var Ss = {
        kernelName: n.NonMaxSuppressionV3,
        backendName: "webgl",
        kernelFunc: function(e) {
            n.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.boxes
              , o = t.scores
              , s = a.maxOutputSize
              , u = a.iouThreshold
              , l = a.scoreThreshold
              , c = r.readSync(i.dataId)
              , d = r.readSync(o.dataId)
              , p = ws(c, d, s, u, l).selectedIndices;
            return r.makeTensorInfo([p.length], "int32", new Int32Array(p))
        }
    }
      , Rs = n.kernel_impls.nonMaxSuppressionV4Impl;
    var Ts = {
        kernelName: n.NonMaxSuppressionV4,
        backendName: "webgl",
        kernelFunc: function(e) {
            n.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.boxes
              , o = t.scores
              , s = a.maxOutputSize
              , u = a.iouThreshold
              , l = a.scoreThreshold
              , c = a.padToMaxOutputSize
              , d = r.readSync(i.dataId)
              , p = r.readSync(o.dataId)
              , h = Rs(d, p, s, u, l, c)
              , f = h.selectedIndices
              , x = h.validOutputs;
            return [r.makeTensorInfo([f.length], "int32", new Int32Array(f)), r.makeTensorInfo([], "int32", new Int32Array([x]))]
        }
    }
      , Es = n.kernel_impls.nonMaxSuppressionV5Impl;
    var Ns = {
        kernelName: n.NonMaxSuppressionV5,
        backendName: "webgl",
        kernelFunc: function(e) {
            n.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.boxes
              , o = t.scores
              , s = a.maxOutputSize
              , u = a.iouThreshold
              , l = a.scoreThreshold
              , c = a.softNmsSigma
              , d = r.readSync(i.dataId)
              , p = r.readSync(o.dataId)
              , h = Es(d, p, s, u, l, c)
              , f = h.selectedIndices
              , x = h.selectedScores;
            return [r.makeTensorInfo([f.length], "int32", new Int32Array(f)), r.makeTensorInfo([x.length], "float32", new Float32Array(x))]
        }
    }
      , As = function(e, n, t, r) {
        this.variableNames = ["indices"],
        this.outputShape = [e, n],
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r + "), float(" + t + "),\n                      float(index == coords.y)));\n      }\n    "
    }
      , Fs = {
        kernelName: n.OneHot,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.indices
              , o = a.depth
              , s = a.onValue
              , u = a.offValue
              , c = n.util.sizeFromShape(i.shape)
              , d = new As(c,o,s,u)
              , p = hr({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    shape: [c]
                }
            })
              , h = r.runWebGLProgram(d, [p], i.dtype);
            r.disposeIntermediateTensorInfo(p);
            var f = hr({
                inputs: {
                    x: h
                },
                backend: r,
                attrs: {
                    shape: l(i.shape, [o])
                }
            });
            return r.disposeIntermediateTensorInfo(h),
            f
        }
    };
    function _s(e) {
        var n = e.inputs
          , t = e.backend
          , r = n.x;
        if ("complex64" === r.dtype) {
            var a = Ra({
                inputs: {
                    input: r
                },
                backend: t
            })
              , i = _s({
                inputs: {
                    x: a
                },
                backend: t
            })
              , o = Ma({
                inputs: {
                    input: r
                },
                backend: t
            })
              , s = _s({
                inputs: {
                    x: o
                },
                backend: t
            })
              , u = Yt({
                inputs: {
                    real: i,
                    imag: s
                },
                backend: t
            });
            return t.disposeIntermediateTensorInfo(a),
            t.disposeIntermediateTensorInfo(i),
            t.disposeIntermediateTensorInfo(o),
            t.disposeIntermediateTensorInfo(s),
            u
        }
        return Qi({
            attrs: {
                shape: r.shape,
                dtype: r.dtype,
                value: "string" === r.dtype ? "" : 0
            },
            backend: t
        })
    }
    var Os = {
        kernelName: n.ZerosLike,
        backendName: "webgl",
        kernelFunc: _s
    };
    var Ds = {
        kernelName: n.OnesLike,
        backendName: "webgl",
        kernelFunc: function e(n) {
            var t = n.inputs
              , r = n.backend
              , a = t.x;
            if ("string" === a.dtype)
                throw new Error("onesLike is not supported under string dtype");
            if ("complex64" === a.dtype) {
                var i = Ra({
                    inputs: {
                        input: a
                    },
                    backend: r
                })
                  , o = e({
                    inputs: {
                        x: i
                    },
                    backend: r
                })
                  , s = Ma({
                    inputs: {
                        input: a
                    },
                    backend: r
                })
                  , u = _s({
                    inputs: {
                        x: s
                    },
                    backend: r
                })
                  , l = Yt({
                    inputs: {
                        real: o,
                        imag: u
                    },
                    backend: r
                });
                return r.disposeIntermediateTensorInfo(i),
                r.disposeIntermediateTensorInfo(o),
                r.disposeIntermediateTensorInfo(s),
                r.disposeIntermediateTensorInfo(u),
                l
            }
            return Qi({
                attrs: {
                    shape: a.shape,
                    dtype: a.dtype,
                    value: 1
                },
                backend: r
            })
        }
    };
    var Ps = {
        kernelName: n.Pack,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs.axis;
            if (1 === t.length)
                return Mi({
                    inputs: {
                        input: t[0]
                    },
                    backend: r,
                    attrs: {
                        dim: a
                    }
                });
            var i = t[0].shape
              , o = t[0].dtype;
            t.forEach((function(e) {
                n.util.assertShapesMatch(i, e.shape, "All tensors passed to stack must have matching shapes"),
                n.util.assert(o === e.dtype, (function() {
                    return "All tensors passed to stack must have matching dtypes"
                }
                ))
            }
            ));
            var s = []
              , u = Xa({
                inputs: t.map((function(e) {
                    var n = Mi({
                        inputs: {
                            input: e
                        },
                        backend: r,
                        attrs: {
                            dim: a
                        }
                    });
                    return s.push(n),
                    n
                }
                )),
                backend: r,
                attrs: {
                    axis: a
                }
            });
            return s.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            u
        }
    }
      , Ls = function(e, n, t) {
        this.variableNames = ["x"],
        this.customUniforms = [{
            name: "value",
            type: "float"
        }],
        this.outputShape = n.map((function(n, t) {
            return n[0] + e[t] + n[1]
        }
        ));
        var r = e.length
          , a = Ne(r)
          , i = n.map((function(e) {
            return e[0]
        }
        )).join(",")
          , o = n.map((function(n, t) {
            return n[0] + e[t]
        }
        )).join(",")
          , s = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r);
        this.userCode = 1 !== r ? "\n      " + a + " start = " + a + "(" + i + ");\n      " + a + " end = " + a + "(" + o + ");\n\n      void main() {\n        " + a + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          " + a + " coords = outC - start;\n          setOutput(getX(" + s + "));\n        }\n      }\n    " : "\n        int start = " + i + ";\n        int end = " + o + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      "
    }
      , Bs = function(e, n, t) {
        this.variableNames = ["x"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.customUniforms = [{
            name: "value",
            type: "float"
        }],
        this.outputShape = n.map((function(n, t) {
            return n[0] + e[t] + n[1]
        }
        ));
        for (var r = e.length, a = Ne(r), i = n.map((function(e) {
            return e[0]
        }
        )).join(","), o = n.map((function(n, t) {
            return n[0] + e[t]
        }
        )).join(","), s = Rt("rc", r), u = Rt("source", r), l = s[r - 1] + " < " + this.outputShape[r - 1], c = 1 === r ? "source" : "vec2(" + u.slice(-2).join() + ")", d = [a + " rc = outputLoc;", s[r - 1] + " += 1;\n       if(" + l + ") {\n      ", 1 === r ? "" : "}\n       rc = outputLoc;\n       " + s[r - 2] + " += 1;\n       if(" + s[r - 2] + " < " + this.outputShape[r - 2] + ") {", 1 === r ? "" : "  " + s[r - 1] + " += 1;\n         if(" + l + ") {"], p = 1 === r ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", h = "", f = 0, x = 1 === r ? 2 : 4; f < x; f++)
            h += "\n        " + d[f] + "\n        if (" + p + ") {\n          result[" + f + "] = float(value);\n        } else {\n          " + a + " source = rc - start;\n          result[" + f + "] = getChannel(getX(" + u.join() + "), " + c + ");\n        }\n      ";
        h += 1 === r ? "} " : "}}",
        this.userCode = "\n      const " + a + " start = " + a + "(" + i + ");\n      const " + a + " end = " + a + "(" + o + ");\n\n      void main() {\n        " + a + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + h + "\n        setOutput(result);\n      }\n    "
    }
      , Vs = function(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.x
          , o = a.paddings
          , s = a.constantValue;
        if (0 === n.util.sizeFromShape(i.shape))
            return Qi({
                backend: r,
                attrs: {
                    shape: o.map((function(e, n) {
                        return e[0] + i.shape[n] + e[1]
                    }
                    )),
                    value: s,
                    dtype: i.dtype
                }
            });
        var u = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new Bs(i.shape,o,s) : new Ls(i.shape,o,s)
          , l = [[s]];
        return r.runWebGLProgram(u, [i], i.dtype, l)
    }
      , Us = {
        kernelName: n.PadV2,
        backendName: "webgl",
        kernelFunc: Vs
    }
      , Ws = ar({
        opSnippet: "\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",
        packedOpSnippet: "\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n"
    })
      , Ms = {
        kernelName: n.Pow,
        backendName: "webgl",
        kernelFunc: Ws
    };
    var Gs = {
        kernelName: n.Prod,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = e.attrs, o = r.x, s = i.axis, l = i.keepDims, c = o.shape.length, d = [], p = n.util.parseAxisParam(s, o.shape), h = p, f = n.backend_util.getAxesPermutation(h, c), x = o;
            if (null != f && (x = Ir({
                inputs: {
                    x: o
                },
                backend: a,
                attrs: {
                    perm: f
                }
            }),
            h = n.backend_util.getInnerMostAxes(h.length, c),
            d.push(x)),
            n.backend_util.assertAxesAreInnerMostDims("prod", h, c),
            a.shouldExecuteOnCPU([x])) {
                var v = a.texData.get(x.dataId).values
                  , m = ot(x.shape, x.dtype, v, h)
                  , g = m.outVals
                  , b = m.outShape
                  , C = m.outDtype;
                t = a.makeTensorInfo(b, C, g)
            } else {
                var y = u(n.backend_util.computeOutAndReduceShapes(x.shape, h), 2)
                  , k = (b = y[0],
                y[1])
                  , I = n.util.sizeFromShape(k)
                  , w = hr({
                    inputs: {
                        x: x
                    },
                    backend: a,
                    attrs: {
                        shape: [-1, I]
                    }
                })
                  , S = mr(w, n.sumOutType(o.dtype), "prod", a);
                t = hr({
                    inputs: {
                        x: S
                    },
                    backend: a,
                    attrs: {
                        shape: b
                    }
                }),
                d.push(w),
                d.push(S)
            }
            if (l) {
                d.push(t);
                var R = n.backend_util.expandShapeToKeepDim(t.shape, p);
                t = hr({
                    inputs: {
                        x: t
                    },
                    backend: a,
                    attrs: {
                        shape: R
                    }
                })
            }
            return d.forEach((function(e) {
                return a.disposeIntermediateTensorInfo(e)
            }
            )),
            t
        }
    }
      , zs = function(e) {
        var n = e.backend
          , t = e.attrs
          , r = t.start
          , a = t.stop
          , i = t.step
          , o = t.dtype
          , s = st(r, a, i, o);
        return n.makeTensorInfo([s.length], o, s)
    }
      , Xs = {
        kernelName: n.Range,
        backendName: "webgl",
        kernelFunc: zs
    }
      , Hs = rr({
        opSnippet: "return 1.0 / x;"
    })
      , js = {
        kernelName: n.Reciprocal,
        backendName: "webgl",
        kernelFunc: Hs
    }
      , Ks = rr({
        opSnippet: "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n",
        packedOpSnippet: "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"
    })
      , qs = {
        kernelName: n.Relu,
        backendName: "webgl",
        kernelFunc: Ks
    }
      , Ys = rr({
        opSnippet: "if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",
        packedOpSnippet: "\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"
    })
      , Qs = {
        kernelName: n.Relu6,
        backendName: "webgl",
        kernelFunc: Ys
    }
      , Zs = function(e, n, t, r, a) {
        this.variableNames = ["A"],
        this.outputShape = [];
        var i = u(e, 4)
          , o = i[0]
          , s = i[1]
          , l = i[2]
          , c = i[3];
        this.outputShape = [o, n, t, c];
        var d, p = [r && n > 1 ? s - 1 : s, r && t > 1 ? l - 1 : l], h = [r && n > 1 ? n - 1 : n, r && t > 1 ? t - 1 : t];
        d = a ? "(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)" : "vec2(yRC) * effectiveInputOverOutputRatioRC",
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + p[0] / h[0] + ",\n          " + p[1] / h[1] + ");\n      const vec2 inputShapeRC = vec2(" + s + ".0, " + l + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = " + d + ";\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    "
    }
      , Js = function(e, n, t, r, a) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = [];
        var i = u(e, 4)
          , o = i[0]
          , s = i[1]
          , l = i[2]
          , c = i[3];
        this.outputShape = [o, n, t, c];
        var d, p = [r && n > 1 ? s - 1 : s, r && t > 1 ? l - 1 : l], h = [r && n > 1 ? n - 1 : n, r && t > 1 ? t - 1 : t];
        d = a ? "(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)" : "vec3(yRC) * effectiveInputOverOutputRatioRC",
        this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + p[0] / h[0] + ",\n          " + p[1] / h[1] + ",\n          " + p[1] / h[1] + ");\n      const vec3 inputShapeRC = vec3(" + s + ".0, " + l + ".0,\n                                     " + l + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = " + d + ";\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (c - 1) + ";\n        bool hasNextRow = coords.z < " + (t - 1) + ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    "
    };
    var $s = {
        kernelName: n.ResizeBilinear,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.images
              , o = a.alignCorners
              , s = a.halfPixelCenters
              , l = u(a.size, 2)
              , c = l[0]
              , d = l[1]
              , p = n.env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new Js(i.shape,c,d,o,s) : new Zs(i.shape,c,d,o,s);
            return r.runWebGLProgram(p, [i], "float32")
        }
    }
      , eu = function(e, n, t) {
        this.variableNames = ["dy"],
        this.outputShape = [],
        this.outputShape = n;
        var r = u(n, 3)
          , a = r[1]
          , i = r[2]
          , o = u(e, 3)
          , s = o[1]
          , l = o[2]
          , c = [t && s > 1 ? a - 1 : a, t && l > 1 ? i - 1 : i]
          , d = [t && s > 1 ? s - 1 : s, t && l > 1 ? l - 1 : l]
          , p = c[0] / d[0]
          , h = c[1] / d[1]
          , f = 1 / p
          , x = 1 / h
          , v = 2 * Math.ceil(f) + 2
          , m = 2 * Math.ceil(x) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + p + ");\n        const float widthScale = float(" + h + ");\n\n        const float invHeightScale = float(" + f + ");\n        const float invWidthScale = float(" + x + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + m + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + l + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (a - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (i - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
    };
    var nu = {
        kernelName: n.ResizeBilinearGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.images
              , i = n.dy
              , o = r.alignCorners
              , s = new eu(i.shape,a.shape,o);
            return t.runWebGLProgram(s, [i], i.dtype)
        }
    }
      , tu = function(e, n, t, r, a) {
        this.variableNames = ["A"],
        this.outputShape = [];
        var i = u(e, 4)
          , o = i[0]
          , s = i[1]
          , l = i[2]
          , c = i[3];
        this.outputShape = [o, n, t, c];
        var d, p = [r && n > 1 ? s - 1 : s, r && t > 1 ? l - 1 : l], h = [r && n > 1 ? n - 1 : n, r && t > 1 ? t - 1 : t], f = r ? "0.5" : "0.0";
        d = a ? "max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))" : "vec2(yRC) * effectiveInputOverOutputRatioRC",
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + p[0] / h[0] + ",\n          " + p[1] / h[1] + ");\n      const vec2 inputShapeRC = vec2(" + s + ".0, " + l + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = " + d + ";\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + f + ")));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    "
    }
      , ru = function(e, n, t, r, a) {
        this.variableNames = ["A"],
        this.packedInputs = !0,
        this.packedOutput = !0,
        this.outputShape = [];
        var i = u(e, 4)
          , o = i[0]
          , s = i[1]
          , l = i[2]
          , c = i[3];
        this.outputShape = [o, n, t, c];
        var d, p = [r && n > 1 ? s - 1 : s, r && t > 1 ? l - 1 : l], h = [r && n > 1 ? n - 1 : n, r && t > 1 ? t - 1 : t], f = r ? "0.5" : "0.0";
        d = a ? "max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))" : "vec3(yRC) * effectiveInputOverOutputRatioRC",
        this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + p[0] / h[0] + ",\n          " + p[1] / h[1] + ",\n          " + p[1] / h[1] + ");\n      const vec3 inputShapeRC = vec3(" + s + ".0, " + l + ".0,\n                                     " + l + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = " + d + ";\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + f + ")));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (c - 1) + ";\n        bool hasNextRow = coords.z < " + (t - 1) + ";\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    "
    };
    var au = {
        kernelName: n.ResizeNearestNeighbor,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.images
              , o = a.alignCorners
              , s = a.halfPixelCenters
              , l = u(a.size, 2)
              , c = l[0]
              , d = l[1]
              , p = n.env().getBool("WEBGL_PACK_IMAGE_OPERATIONS") ? new ru(i.shape,c,d,o,s) : new tu(i.shape,c,d,o,s);
            return r.runWebGLProgram(p, [i], i.dtype)
        }
    }
      , iu = function(e, n, t) {
        this.variableNames = ["dy"],
        this.outputShape = [],
        this.outputShape = n;
        var r = u(n, 3)
          , a = r[1]
          , i = r[2]
          , o = u(e, 3)
          , s = o[1]
          , l = o[2]
          , c = [t && s > 1 ? a - 1 : a, t && l > 1 ? i - 1 : i]
          , d = [t && s > 1 ? s - 1 : s, t && l > 1 ? l - 1 : l]
          , p = c[0] / d[0]
          , h = c[1] / d[1]
          , f = 1 / p
          , x = 1 / h
          , v = 2 * Math.ceil(f) + 2
          , m = 2 * Math.ceil(x) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + p + ");\n        const float widthScale = float(" + h + ");\n\n        const float invHeightScale = float(" + f + ");\n        const float invWidthScale = float(" + x + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + m + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + l + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c[0] + ") *\n                (float(dyR) / float(" + d[0] + "));\n\n            float sourceFracCol =\n                float(" + c[1] + ") *\n                  (float(dyC) / float(" + d[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + a + ") - 1),\n                " + t + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + i + ") - 1),\n                " + t + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
    };
    var ou = {
        kernelName: n.ResizeNearestNeighborGrad,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.images
              , i = n.dy
              , o = r.alignCorners
              , s = new iu(i.shape,a.shape,o);
            return t.runWebGLProgram(s, [i], i.dtype)
        }
    }
      , su = function(e, n) {
        this.variableNames = ["x"];
        var t = e.length;
        if (t > 4)
            throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
        if (this.outputShape = e,
        1 !== t) {
            var r = e.map((function(t, r) {
                return function(t) {
                    return -1 !== n.indexOf(t) && 1 !== e[t] ? e[t] + " - coords[" + t + "] - 1" : "coords[" + t + "]"
                }(r)
            }
            )).join(",")
              , a = Ne(t);
            this.userCode = "\n      void main() {\n        " + a + " coords = getOutputCoords();\n        setOutput(getX(" + r + "));\n      }\n    "
        } else
            this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + e[0] + " - coord - 1));\n        }\n      "
    }
      , uu = function(e, n) {
        this.variableNames = ["x"],
        this.packedInputs = !0,
        this.packedOutput = !0;
        var t = e.length;
        if (t > 4)
            throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
        this.outputShape = e;
        var r = Rt("rc", t)
          , a = r[t - 1] + " + 1 < " + this.outputShape[t - 1]
          , i = r[t - 2] + " + 1 < " + this.outputShape[t - 2]
          , o = Ne(t);
        function s(t) {
            var r = e.map((function(r, a) {
                return function(t, r) {
                    return -1 !== n.indexOf(t) && 1 !== e[t] ? e[t] + " - " + r[t] + " - 1" : "" + r[t]
                }(a, t)
            }
            ));
            return "getChannel(getX(" + r.join(",") + "), vec2(" + r.slice(-2).join(",") + "))"
        }
        this.userCode = 1 === t ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(" + e[0] + " - rc - 1),\n            " + e[0] + " - rc - 1);\n          if(" + a + "){\n              result.g = getChannel(getX(" + e[0] + " - (rc  + 1) - 1),\n                " + e[0] + " - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      " : "\n        void main() {\n          " + o + " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = " + function(e) {
            return s(e)
        }(r.slice()) + ";\n          if(" + a + "){\n            result.g = " + function(e) {
            return e[t - 1] = "(" + e[t - 1] + " + 1)",
            s(e)
        }(r.slice()) + ";\n          }\n          if(" + i + ") {\n            result.b = " + function(e) {
            return e[t - 2] = "(" + e[t - 2] + " + 1)",
            s(e)
        }(r.slice()) + ";\n            if(" + a + ") {\n              result.a = " + function(e) {
            return e[t - 1] = "(" + e[t - 1] + " + 1)",
            e[t - 2] = "(" + e[t - 2] + " + 1)",
            s(e)
        }(r.slice()) + ";\n            }\n          }\n          setOutput(result);\n        }\n    "
    };
    var lu = {
        kernelName: n.Reverse,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.dims
              , s = i.shape.length
              , u = n.util.parseAxisParam(o, i.shape);
            if (0 === s)
                return Kt({
                    inputs: {
                        x: i
                    },
                    backend: r
                });
            var l = n.env().getBool("WEBGL_PACK_ARRAY_OPERATIONS") ? new uu(i.shape,u) : new su(i.shape,u);
            return r.runWebGLProgram(l, [i], i.dtype)
        }
    }
      , cu = function(e, n) {
        this.variableNames = ["Image"],
        this.outputShape = [],
        this.customUniforms = [{
            name: "params",
            type: "vec4"
        }];
        var t = e[1]
          , r = e[2];
        this.outputShape = e;
        var a = "";
        a = "number" == typeof n ? "float outputValue = " + n.toFixed(2) + ";" : "\n        vec3 fill = vec3(" + n.join(",") + ");\n        float outputValue = fill[coords[3]];",
        this.userCode = "\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          " + a + "\n          if(coordX >= 0 && coordX < " + r + " && coordY >= 0 && coordY < " + t + ") {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    "
    }
      , du = {
        kernelName: n.RotateWithOffset,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.attrs
              , a = e.backend
              , i = t.image
              , o = r.radians
              , s = r.fillValue
              , l = r.center
              , c = a
              , d = new cu(i.shape,s)
              , p = u(n.backend_util.getImageCenter(l, i.shape[1], i.shape[2]), 2)
              , h = [[p[0], p[1], Math.sin(o), Math.cos(o)]];
            return c.runWebGLProgram(d, [i], i.dtype, h)
        }
    }
      , pu = rr({
        opSnippet: "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"
    })
      , hu = {
        kernelName: n.Round,
        backendName: "webgl",
        kernelFunc: pu
    }
      , fu = rr({
        opSnippet: "return inversesqrt(x);",
        cpuKernelImpl: ut
    })
      , xu = {
        kernelName: n.Rsqrt,
        backendName: "webgl",
        kernelFunc: fu
    }
      , vu = function(e, n, t, r, a, i, o) {
        this.variableNames = ["updates", "indices", "defaultValue"],
        this.outputShape = i;
        var s = Ne(a.length)
          , u = Ne(i.length)
          , l = "";
        1 === t ? l = "i" : 2 === t && (l = "i, j");
        var c = "getIndices(" + l + ")"
          , d = "";
        1 === r ? d = "i" : 2 === r && (d = "i, coords[1]");
        var p = "getUpdates(" + d + ")"
          , h = n > 1 ? "strides[j]" : "strides";
        this.userCode = "\n        " + s + " strides = " + s + "(" + a + ");\n\n        void main() {\n          " + u + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + e + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + n + "; j++) {\n              int index = round(" + c + ");\n              flattenedIndex += index * " + h + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += " + p + ";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      "
    };
    var mu = {
        kernelName: n.ScatterNd,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.indices
              , o = t.updates
              , s = a.shape
              , u = n.backend_util.calculateShapes(o, i, s)
              , l = u.sliceRank
              , c = u.numUpdates
              , d = u.sliceSize
              , p = u.strides
              , h = u.outputSize
              , f = [h / d, d];
            if (0 === h)
                return r.makeTensorInfo(s, i.dtype);
            var x = hr({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    shape: [c, l]
                }
            })
              , v = hr({
                inputs: {
                    x: o
                },
                backend: r,
                attrs: {
                    shape: [c, d]
                }
            })
              , m = r.makeTensorInfo([], "float32", new Float32Array([0]))
              , g = new vu(c,l,x.shape.length,v.shape.length,p,f)
              , b = r.runWebGLProgram(g, [v, x, m], v.dtype)
              , C = hr({
                inputs: {
                    x: b
                },
                backend: r,
                attrs: {
                    shape: s
                }
            });
            return r.disposeIntermediateTensorInfo(x),
            r.disposeIntermediateTensorInfo(v),
            r.disposeIntermediateTensorInfo(b),
            r.disposeIntermediateTensorInfo(m),
            C
        }
    }
      , gu = function(e, n, t) {
        var r, a;
        if (this.variableNames = ["c", "a", "b"],
        this.outputShape = n,
        t > 4)
            throw Error("Where for rank " + t + " is not yet supported");
        if (1 === t)
            a = "resRC",
            r = "resRC";
        else {
            for (var i = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], o = [], s = [], u = 0; u < n.length; u++)
                s.push("" + i[u]),
                u < e && o.push("" + i[u]);
            r = o.join(),
            a = s.join()
        }
        var l = Ne(t);
        this.userCode = "\n      void main() {\n        " + l + " resRC = getOutputCoords();\n        float cVal = getC(" + r + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + a + "));\n        } else {\n          setOutput(getB(" + a + "));\n        }\n      }\n    "
    };
    var bu = {
        kernelName: n.Select,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = t.condition
              , i = t.t
              , o = t.e
              , s = new gu(a.shape.length,i.shape,i.shape.length);
            return r.runWebGLProgram(s, [a, i, o], n.upcastType(i.dtype, o.dtype))
        }
    }
      , Cu = rr({
        opSnippet: "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + n.backend_util.SELU_SCALEALPHA + ";\n  float scale = " + n.backend_util.SELU_SCALE + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n"
    })
      , yu = {
        kernelName: n.Selu,
        backendName: "webgl",
        kernelFunc: Cu
    }
      , ku = rr({
        opSnippet: "if (isnan(x)) return x;\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",
        packedOpSnippet: "\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
        cpuKernelImpl: lt
    })
      , Iu = {
        kernelName: n.Sigmoid,
        backendName: "webgl",
        kernelFunc: ku
    }
      , wu = rr({
        opSnippet: "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n"
    })
      , Su = {
        kernelName: n.Sign,
        backendName: "webgl",
        kernelFunc: wu
    }
      , Ru = rr({
        opSnippet: "if (isnan(x)) return x;\n  return sin(x);\n"
    })
      , Tu = {
        kernelName: n.Sin,
        backendName: "webgl",
        kernelFunc: Ru
    }
      , Eu = rr({
        opSnippet: "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n"
    })
      , Nu = {
        kernelName: n.Sinh,
        backendName: "webgl",
        kernelFunc: Eu
    }
      , Au = rr({
        opSnippet: "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n"
    })
      , Fu = {
        kernelName: n.Softplus,
        backendName: "webgl",
        kernelFunc: Au
    }
      , _u = {
        kernelName: n.SpaceToBatchND,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.blockShape
              , s = a.paddings;
            n.util.assert(i.shape.length <= 4, (function() {
                return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"
            }
            ));
            var u = o.reduce((function(e, n) {
                return e * n
            }
            ))
              , c = [[0, 0]];
            c.push.apply(c, l(s));
            for (var d = 1 + o.length; d < i.shape.length; ++d)
                c.push([0, 0]);
            var p = []
              , h = Vs({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    paddings: c,
                    constantValue: 0
                }
            })
              , f = n.backend_util.getReshaped(h.shape, o, u, !1)
              , x = n.backend_util.getPermuted(f.length, o.length, !1)
              , v = n.backend_util.getReshapedPermuted(h.shape, o, u, !1)
              , m = hr({
                inputs: {
                    x: h
                },
                backend: r,
                attrs: {
                    shape: f
                }
            })
              , g = Ir({
                inputs: {
                    x: m
                },
                backend: r,
                attrs: {
                    perm: x
                }
            })
              , b = hr({
                inputs: {
                    x: g
                },
                backend: r,
                attrs: {
                    shape: v
                }
            });
            return p.push(h),
            p.push(m),
            p.push(g),
            p.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            b
        }
    };
    var Ou = {
        kernelName: n.SparseFillEmptyRows,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = n.indices
              , a = n.values
              , i = n.denseShape
              , o = n.defaultValue;
            if (1 !== i.shape.length)
                throw new Error("Dense shape must be a vector, saw:\n         " + i.shape);
            if (2 !== r.shape.length)
                throw new Error("Indices must be a matrix, saw:\n         " + r.shape);
            if (1 !== a.shape.length)
                throw new Error("Values must be a vector, saw:\n         " + a.shape);
            if (0 !== o.shape.length)
                throw new Error("Default value must be a scalar, saw:\n        " + o.shape);
            var s = t.readSync(r.dataId)
              , l = t.readSync(a.dataId)
              , c = t.readSync(i.dataId)
              , d = t.readSync(o.dataId)[0]
              , p = u(pt(s, r.shape, r.dtype, l, a.dtype, c, d), 5)
              , h = p[0]
              , f = p[1]
              , x = p[2]
              , v = p[3]
              , m = p[4];
            return [t.makeTensorInfo(f, r.dtype, h), t.makeTensorInfo([f[0]], a.dtype, x), t.makeTensorInfo([v.length], "bool", new Uint8Array(v.map((function(e) {
                return Number(e)
            }
            )))), t.makeTensorInfo([m.length], r.dtype, new Int32Array(m))]
        }
    };
    var Du = {
        kernelName: n.SparseReshape,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = n.inputIndices
              , a = n.inputShape
              , i = n.newShape;
            if (2 !== r.shape.length)
                throw new Error("Input indices should be a matrix but received shape " + r.shape);
            if (1 !== a.shape.length)
                throw new Error("Input shape should be a vector but received shape " + a.shape);
            if (1 !== i.shape.length)
                throw new Error("Target shape should be a vector but received shape " + i.shape);
            var o = Array.from(t.readSync(a.dataId))
              , s = t.readSync(r.dataId)
              , l = Array.from(t.readSync(i.dataId))
              , c = u(ht(s, r.shape, r.dtype, o, l), 3)
              , d = c[0]
              , p = c[1]
              , h = c[2];
            return [t.makeTensorInfo(p, r.dtype, d), t.makeTensorInfo([h.length], i.dtype, new Int32Array(h))]
        }
    };
    var Pu = {
        kernelName: n.SparseSegmentMean,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = n.data
              , a = n.indices
              , i = n.segmentIds;
            if (r.shape.length < 1)
                throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== a.shape.length)
                throw new Error("Indices should be a vector but received shape\n              " + a.shape);
            if (1 !== i.shape.length)
                throw new Error("Segment ids should be a vector but received shape\n              " + i.shape);
            var o = t.readSync(r.dataId)
              , s = t.readSync(a.dataId)
              , l = t.readSync(i.dataId)
              , c = u(ft(o, r.shape, r.dtype, s, l, !0), 2)
              , d = c[0]
              , p = c[1];
            return t.makeTensorInfo(p, r.dtype, d)
        }
    };
    var Lu = {
        kernelName: n.SparseSegmentSum,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = n.data
              , a = n.indices
              , i = n.segmentIds;
            if (r.shape.length < 1)
                throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== a.shape.length)
                throw new Error("Indices should be a vector but received shape\n             " + a.shape);
            if (1 !== i.shape.length)
                throw new Error("Segment ids should be a vector but received shape\n             " + i.shape);
            var o = t.readSync(r.dataId)
              , s = t.readSync(a.dataId)
              , l = t.readSync(i.dataId)
              , c = u(ft(o, r.shape, r.dtype, s, l), 2)
              , d = c[0]
              , p = c[1];
            return t.makeTensorInfo(p, r.dtype, d)
        }
    };
    var Bu = {
        kernelName: n.SparseToDense,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.sparseIndices
              , o = t.sparseValues
              , s = t.defaultValue
              , u = a.outputShape
              , l = n.backend_util.calculateShapes(o, i, u)
              , c = l.sliceRank
              , d = l.numUpdates
              , p = l.strides
              , h = l.outputSize
              , f = new vu(d,c,i.shape.length,o.shape.length,p,[h, 1],!1)
              , x = r.runWebGLProgram(f, [o, i, s], o.dtype)
              , v = hr({
                inputs: {
                    x: x
                },
                backend: r,
                attrs: {
                    shape: u
                }
            });
            return r.disposeIntermediateTensorInfo(x),
            v
        }
    };
    var Vu = {
        kernelName: n.SplitV,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.numOrSizeSplits
              , s = a.axis
              , u = n.util.parseAxisParam(s, i.shape)[0]
              , c = n.backend_util.prepareSplitSize(i, o, u)
              , d = i.shape.length
              , p = new Array(d).fill(0)
              , h = i.shape.slice();
            return c.map((function(e) {
                var n = l(h);
                n[u] = e;
                var t = ba({
                    inputs: {
                        x: i
                    },
                    backend: r,
                    attrs: {
                        begin: p,
                        size: n
                    }
                });
                return p[u] += e,
                t
            }
            ))
        }
    }
      , Uu = "return sqrt(x);"
      , Wu = rr({
        opSnippet: Uu,
        packedOpSnippet: Uu,
        cpuKernelImpl: xt
    })
      , Mu = {
        kernelName: n.Sqrt,
        backendName: "webgl",
        kernelFunc: Wu
    }
      , Gu = rr({
        opSnippet: "return x * x;"
    })
      , zu = {
        kernelName: n.Square,
        backendName: "webgl",
        kernelFunc: Gu
    }
      , Xu = "return (a - b) * (a - b);"
      , Hu = ar({
        opSnippet: Xu,
        packedOpSnippet: Xu
    })
      , ju = {
        kernelName: n.SquaredDifference,
        backendName: "webgl",
        kernelFunc: Hu
    };
    var Ku = {
        kernelName: n.Step,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.attrs
              , r = e.backend
              , a = n.x
              , i = Dt + "\n    return x > 0.0 ? 1.0 : float(" + t.alpha + ");\n  "
              , o = new Ot(a.shape,i);
            return r.runWebGLProgram(o, [a], a.dtype)
        }
    }
      , qu = function(e, n, t) {
        this.variableNames = ["x"],
        this.outputShape = t;
        var r = t.length
          , a = Ne(t.length)
          , i = Ne(t.length)
          , o = "";
        if (1 === r)
            o = "coords * strides + begin";
        else {
            var s = 0;
            o = t.map((function(e, n) {
                return s++,
                1 === t.length ? "coords * strides[" + n + "] + begin[" + n + "]" : "coords[" + (s - 1) + "] * strides[" + n + "] + begin[" + n + "]"
            }
            )).join(",")
        }
        this.userCode = "\n      " + a + " begin = " + a + "(" + e + ");\n      " + a + " strides = " + a + "(" + n + ");\n\n      void main() {\n        " + i + " coords = getOutputCoords();\n        setOutput(getX(" + o + "));\n      }\n    "
    };
    var Yu = {
        kernelName: n.StridedSlice,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t, r = e.inputs, a = e.backend, i = e.attrs, o = r.x, s = i.begin, u = i.end, l = i.strides, c = i.beginMask, d = i.endMask, p = i.ellipsisMask, h = i.newAxisMask, f = i.shrinkAxisMask, x = n.slice_util.sliceInfo(o.shape, s, u, l, c, d, p, h, f), v = x.finalShapeSparse, m = x.finalShape, g = x.isIdentity, b = x.sliceDim0, C = x.isSimpleSlice, y = x.begin, k = x.end, I = x.strides;
            if (g)
                t = hr({
                    inputs: {
                        x: o
                    },
                    backend: a,
                    attrs: {
                        shape: m
                    }
                });
            else if (b || C) {
                n.util.assert(o.shape.length >= 1, (function() {
                    return "Input must have rank at least 1, got: " + o.shape.length
                }
                ));
                var w = n.slice_util.computeOutShape(y, k, I)
                  , S = ba({
                    inputs: {
                        x: o
                    },
                    backend: a,
                    attrs: {
                        begin: y,
                        size: w
                    }
                });
                t = hr({
                    inputs: {
                        x: S
                    },
                    backend: a,
                    attrs: {
                        shape: m
                    }
                }),
                a.disposeIntermediateTensorInfo(S)
            } else {
                if (a.shouldExecuteOnCPU([o])) {
                    var R = a.readSync(o.dataId)
                      , T = n.buffer(o.shape, o.dtype, R)
                      , E = vt(v, T, I, y);
                    t = a.makeTensorInfo(m, o.dtype, E.values)
                } else {
                    var N = new qu(y,I,v);
                    t = a.runWebGLProgram(N, [o], o.dtype)
                }
            }
            var A = hr({
                inputs: {
                    x: t
                },
                backend: a,
                attrs: {
                    shape: m
                }
            });
            return a.disposeIntermediateTensorInfo(t),
            A
        }
    };
    var Qu = {
        kernelName: n.StringNGrams,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = r.separator
              , i = r.nGramWidths
              , o = r.leftPad
              , s = r.rightPad
              , l = r.padWidth
              , c = r.preserveShortSequences
              , d = n.data
              , p = n.dataSplits
              , h = t.readSync(d.dataId)
              , f = t.readSync(p.dataId)
              , x = u(mt(h, f, a, i, o, s, l, c), 2)
              , v = x[0]
              , m = x[1];
            return [t.makeTensorInfo([v.length], "string", v), t.makeTensorInfo(p.shape, "int32", m)]
        }
    };
    var Zu = {
        kernelName: n.StringSplit,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs.skipEmpty
              , a = n.input
              , i = n.delimiter;
            if ("string" !== a.dtype)
                throw new Error("Input must be of datatype string");
            if (1 !== a.shape.length)
                throw new Error("Input must be a vector, got shape: " + a.shape);
            if (0 !== i.shape.length)
                throw new Error("Delimiter must be a scalar, got shape: " + i.shape);
            var o = t.readSync(a.dataId)
              , s = t.readSync(i.dataId)[0]
              , l = u(gt(o, s, r), 3)
              , c = l[0]
              , d = l[1]
              , p = l[2]
              , h = d.length;
            return [t.makeTensorInfo([h, 2], "int32", c), t.makeTensorInfo([h], "string", d), t.makeTensorInfo([2], "int32", new Int32Array(p))]
        }
    };
    var Ju = {
        kernelName: n.StringToHashBucketFast,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs.numBuckets
              , a = n.input;
            if ("string" !== a.dtype)
                throw new Error("Input must be of datatype string");
            if (r <= 0)
                throw new Error("Number of buckets must be at least 1");
            var i = t.readSync(a.dataId)
              , o = bt(i, r);
            return t.makeTensorInfo(a.shape, "int32", o)
        }
    }
      , $u = rr({
        opSnippet: "return tan(x);"
    })
      , el = {
        kernelName: n.Tan,
        backendName: "webgl",
        kernelFunc: $u
    }
      , nl = rr({
        opSnippet: "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n"
    })
      , tl = {
        kernelName: n.Tanh,
        backendName: "webgl",
        kernelFunc: nl
    }
      , rl = function(e, n) {
        this.variableNames = ["A"];
        for (var t = new Array(e.length), r = 0; r < t.length; r++)
            t[r] = e[r] * n[r];
        this.outputShape = t,
        this.rank = t.length;
        var a = Ne(this.rank)
          , i = function(e) {
            var n = e.length;
            if (n > 5)
                throw Error("Tile for rank " + n + " is not yet supported");
            if (1 === n)
                return "imod(resRC, " + e[0] + ")";
            for (var t = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], r = [], a = 0; a < e.length; a++)
                r.push("imod(" + t[a] + ", " + e[a] + ")");
            return r.join()
        }(e);
        this.userCode = "\n      void main() {\n        " + a + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
    };
    function al(e) {
        var t = e.inputs
          , r = e.backend
          , a = e.attrs
          , i = t.x
          , o = a.reps;
        if ("string" === i.dtype || i.shape.length > 5) {
            var s = r.readSync(i.dataId)
              , u = "string" === i.dtype ? s.map((function(e) {
                return n.util.decodeString(e)
            }
            )) : s
              , l = n.buffer(i.shape, i.dtype, u)
              , c = yt(l, o);
            return r.makeTensorInfo(c.shape, c.dtype, c.values)
        }
        var d = new rl(i.shape,o);
        return r.runWebGLProgram(d, [i], i.dtype)
    }
    var il = {
        kernelName: n.Tile,
        backendName: "webgl",
        kernelFunc: al
    }
      , ol = function(e) {
        this.variableNames = ["x", "indices"],
        this.customUniforms = [{
            name: "n",
            type: "int"
        }, {
            name: "firstPass",
            type: "int"
        }, {
            name: "negativeInf",
            type: "float"
        }, {
            name: "dir",
            type: "int"
        }, {
            name: "inc",
            type: "int"
        }],
        this.outputShape = e,
        this.userCode = "\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     "
    }
      , sl = function(e) {
        this.variableNames = ["x", "indices"],
        this.customUniforms = [{
            name: "n",
            type: "int"
        }, {
            name: "firstPass",
            type: "int"
        }, {
            name: "k",
            type: "int"
        }],
        this.outputShape = e,
        this.userCode = "\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     "
    };
    function ul(e, n) {
        null !== n && e.disposeIntermediateTensorInfo(n)
    }
    function ll(e) {
        for (var n = 1; n < e; )
            n *= 2;
        return n
    }
    var cl = {
        kernelName: n.TopK,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = a.k
              , s = a.sorted
              , l = n.env().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD")
              , c = n.env().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD")
              , d = i.shape
              , p = d[d.length - 1];
            if (r.shouldExecuteOnCPU([i]) || p < l || o > c) {
                var h = r.readSync(i.dataId)
                  , f = u(kt(h, d, i.dtype, o, s), 2)
                  , x = f[0]
                  , v = f[1];
                return [r.makeTensorInfo(x.shape, x.dtype, x.values), r.makeTensorInfo(v.shape, v.dtype, v.values)]
            }
            if (0 === o)
                return d[d.length - 1] = 0,
                [r.makeTensorInfo(d, i.dtype, []), r.makeTensorInfo(d, "int32", [])];
            if (1 === p)
                return [i, Qi({
                    attrs: {
                        shape: d,
                        dtype: "int32",
                        value: 0
                    },
                    backend: r
                })];
            var m = r.texData.get(i.dataId)
              , g = null !== m && m.isPacked
              , b = g ? r.unpackTensor(i) : i
              , C = n.util.sizeFromShape(d) / p
              , y = hr({
                inputs: {
                    x: b
                },
                attrs: {
                    shape: [C, p]
                },
                backend: r
            });
            g && ul(r, b);
            for (var k = ll(o), I = ll(p), w = null, S = function() {
                return null === w ? [y, y] : [y, w]
            }, R = function(e, n, t) {
                var a = S()
                  , i = new ol(t)
                  , o = [[p], [null === w ? 1 : 0], [Number.NEGATIVE_INFINITY], [e], [n]]
                  , s = w;
                w = r.runWebGLProgram(i, a, "int32", o),
                ul(r, s)
            }, T = 1; T < k; T *= 2)
                for (var E = 2 * T, N = T; N >= 1; N /= 2)
                    R(E, N, [C, I]);
            for (var A = I; A > k; A /= 2) {
                var F = S()
                  , _ = new sl([C, A / 2])
                  , O = [[p], [null === w ? 1 : 0], [k]]
                  , D = w;
                w = r.runWebGLProgram(_, F, "int32", O),
                ul(r, D);
                for (E = 2 * (T = k / 2),
                N = T; N >= 1; N /= 2)
                    R(E, N, w.shape)
            }
            var P = w;
            w = ba({
                inputs: {
                    x: w
                },
                backend: r,
                attrs: {
                    begin: 0,
                    size: [C, o]
                }
            }),
            ul(r, P);
            var L = xo({
                inputs: {
                    x: y,
                    indices: w
                },
                backend: r,
                attrs: {
                    axis: 1,
                    batchDims: 1
                }
            });
            ul(r, y);
            var B = d.slice(0, -1);
            B.push(o),
            P = w,
            w = hr({
                inputs: {
                    x: w
                },
                attrs: {
                    shape: B
                },
                backend: r
            }),
            ul(r, P);
            var V = L;
            return L = hr({
                inputs: {
                    x: L
                },
                attrs: {
                    shape: B
                },
                backend: r
            }),
            ul(r, V),
            [L, w]
        }
    }
      , dl = function(e, n, t, r, a, i) {
        this.variableNames = ["Image", "Transforms"],
        this.outputShape = i;
        var o, s = "nearest" === t ? 1 : 2;
        switch (r) {
        case "constant":
            o = 1;
            break;
        case "reflect":
            o = 2;
            break;
        case "wrap":
            o = 3;
            break;
        case "nearest":
            o = 4;
            break;
        default:
            o = 1
        }
        this.userCode = "\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(" + o + " == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (" + o + " == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (" + o + " == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < " + e + " && 0 <= coordX && coordX < " + n + ") {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(" + a + ");\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(" + a + ");\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(" + n + "));\n                float mapY = mapCoord(inY, float(" + e + "));\n\n                if (" + s + " == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        "
    };
    var pl = {
        kernelName: n.Transform,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.image
              , i = n.transforms
              , o = r.interpolation
              , s = r.fillMode
              , l = r.fillValue
              , c = r.outputShape
              , d = u(a.shape, 4)
              , p = d[0]
              , h = d[1]
              , f = d[2]
              , x = d[3]
              , v = u(null != c ? c : [h, f], 2)
              , m = v[0]
              , g = v[1]
              , b = new dl(h,f,o,s,l,[p, m, g, x]);
            return t.runWebGLProgram(b, [a, i], "float32")
        }
    };
    var hl = {
        kernelName: n.Unique,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.attrs
              , r = e.backend
              , a = t.axis
              , i = n.x;
            ce(i, "unique"),
            console.warn("WARNING: ", "UI might be locked temporarily as data is being downloaded");
            var o = r.readSync(i.dataId)
              , s = wt(o, a, i.shape, i.dtype)
              , u = s.outputValues
              , l = s.outputShape
              , c = s.indices;
            return [r.makeTensorInfo(l, i.dtype, u), r.makeTensorInfo([c.length], "int32", c)]
        }
    };
    var fl = {
        kernelName: n.Unpack,
        backendName: "webgl",
        kernelFunc: function(e) {
            var n = e.inputs
              , t = e.backend
              , r = e.attrs
              , a = n.value
              , i = r.axis;
            i < 0 && (i += a.shape.length);
            for (var o = a, s = o.shape.length, u = a.shape[i], l = new Array(s - 1), c = 0, d = 0; d < s; d++)
                d !== i && (l[c++] = o.shape[d]);
            var p = []
              , h = new Array(s).fill(0)
              , f = o.shape.slice();
            f[i] = 1;
            var x = new Array(u);
            for (d = 0; d < x.length; d++) {
                h[i] = d;
                var v = ba({
                    inputs: {
                        x: o
                    },
                    backend: t,
                    attrs: {
                        begin: h,
                        size: f
                    }
                })
                  , m = hr({
                    inputs: {
                        x: v
                    },
                    backend: t,
                    attrs: {
                        shape: l
                    }
                });
                x[d] = m,
                p.push(v)
            }
            return p.forEach((function(e) {
                return t.disposeIntermediateTensorInfo(e)
            }
            )),
            x
        }
    }
      , xl = function(e, n) {
        this.variableNames = ["x", "segmentIds"];
        var t = e.windowSize
          , r = e.batchSize
          , a = e.inSize
          , i = e.numSegments
          , o = i * Math.ceil(a / t);
        this.outputShape = [r, o];
        var s = 4 * Math.floor(t / 4)
          , u = t % 4
          , l = "\n        sumValue += dot(values, segFilter);\n    "
          , c = "";
        a % t > 0 && (c = "\n        if (inIdx < 0 || inIdx >= " + a + ") {\n          return initializationValue;\n        }\n      ");
        var d = "";
        a % t > 0 && (d = "\n        if (inIdx < 0 || inIdx >= " + a + ") {\n          return -1.0;\n        }\n      "),
        this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + c + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + d + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + i + ")) * float(" + t + "));\n        int currentSeg = int(mod(float(outIdx), float(" + i + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + l + "\n        }\n\n        int inIdx = inOffset + " + s + ";\n        if (" + (1 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + l + "\n        } else if (" + (2 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + l + "\n        } else if (" + (3 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + l + "\n        }\n        setOutput(sumValue);\n      }\n    "
    };
    var vl, ml, gl = [Rr, Er, Ar, _r, Pr, Vr, Ur, Wr, jr, Kr, Yr, Zr, $r, na, ra, oa, sa, ca, da, pa, xa, ya, ka, Ia, Ea, Fa, Da, Qt, Ba, Ha, Za, ti, ri, ai, ii, oi, ui, ci, pi, vi, mi, bi, ki, Si, Ri, Ei, Ai, Fi, Oi, Di, Li, Vi, Wi, Gi, Hi, qi, Ji, eo, ro, io, uo, lo, co, ho, vo, go, Co, qt, yo, Ga, Io, So, To, $t, No, Fo, _o, Do, Lo, Vo, Wo, Go, Ho, Ko, Yo, Zo, Jo, $o, ts, rs, as, is, os, us, ds, hs, ks, pr, Is, Ss, Ts, Ns, Sa, Fs, Ds, Ps, Us, Ms, tr, Gs, Xs, Ta, vs, js, qs, Qs, fr, $s, nu, au, ou, lu, du, hu, xu, mu, bu, yu, Iu, Su, Tu, Nu, Ca, ys, Fu, _u, Ou, Du, Pu, Lu, Bu, Vu, Mu, zu, ju, Ku, Yu, Qu, Zu, Ju, bs, kr, el, tl, il, cl, pl, wr, hl, fl, {
        kernelName: n.UnsortedSegmentSum,
        backendName: "webgl",
        kernelFunc: function(e) {
            var t = e.inputs
              , r = e.backend
              , a = e.attrs
              , i = t.x
              , o = t.segmentIds
              , s = a.numSegments
              , u = i.shape.length
              , l = []
              , c = 0
              , d = n.backend_util.getAxesPermutation([c], u)
              , p = i;
            null != d && (p = Ir({
                inputs: {
                    x: i
                },
                backend: r,
                attrs: {
                    perm: d
                }
            }),
            l.push(p),
            c = n.backend_util.getInnerMostAxes(1, u)[0]);
            var h = n.backend_util.segment_util.computeOutShape(p.shape, c, s)
              , f = n.util.sizeFromShape([p.shape[c]])
              , x = hr({
                inputs: {
                    x: p
                },
                backend: r,
                attrs: {
                    shape: [-1, f]
                }
            });
            l.push(x);
            var v = n.sumOutType(i.dtype)
              , m = function(e, t, a, i, o) {
                var s = e.shape[0]
                  , u = e.shape[1]
                  , c = n.backend_util.segment_util.segOpComputeOptimalWindowSize(u, o)
                  , d = new xl({
                    windowSize: c,
                    inSize: u,
                    batchSize: s,
                    numSegments: o
                },t)
                  , p = r.compileAndRun(d, [e, a], i);
                if (l.push(p),
                p.shape[1] === o)
                    return p;
                var h = zs({
                    backend: r,
                    attrs: {
                        start: 0,
                        stop: o,
                        step: 1,
                        dtype: "float32"
                    }
                })
                  , f = al({
                    inputs: {
                        x: h
                    },
                    backend: r,
                    attrs: {
                        reps: [u / c]
                    }
                });
                return l.push(h),
                l.push(f),
                m(p, t, f, i, o)
            }
              , g = hr({
                inputs: {
                    x: m(x, "unsortedSegmentSum", o, v, s)
                },
                backend: r,
                attrs: {
                    shape: h
                }
            })
              , b = g;
            if (null != d) {
                l.push(g);
                var C = n.backend_util.getUndoAxesPermutation(d);
                b = Ir({
                    inputs: {
                        x: b
                    },
                    backend: r,
                    attrs: {
                        perm: C
                    }
                })
            }
            return l.forEach((function(e) {
                return r.disposeIntermediateTensorInfo(e)
            }
            )),
            b
        }
    }, Os];
    try {
        for (var bl = s(gl), Cl = bl.next(); !Cl.done; Cl = bl.next()) {
            var yl = Cl.value;
            n.registerKernel(yl)
        }
    } catch (e) {
        vl = {
            error: e
        }
    } finally {
        try {
            Cl && !Cl.done && (ml = bl.return) && ml.call(bl)
        } finally {
            if (vl)
                throw vl.error
        }
    }
    e.GPGPUContext = dn,
    e.MathBackendWebGL = Gt,
    e.forceHalfFloat = zt,
    e.gpgpu_util = cn,
    e.setWebGLContext = x,
    e.version_webgl = "3.13.0",
    e.webgl = Xt,
    e.webgl_util = de,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=tf-backend-webgl.min.js.map
