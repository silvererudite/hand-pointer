/* eslint-disable */
/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
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
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@mediapipe/hands"), require("@tensorflow/tfjs-converter"), require("@tensorflow/tfjs-core")) : "function" == typeof define && define.amd ? define(["exports", "@mediapipe/hands", "@tensorflow/tfjs-converter", "@tensorflow/tfjs-core"], e) : e((t = t || self).handPoseDetection = {}, t.Hands, t.tf, t.tf)
}(this, (function(t, e, n, i) {
    "use strict";
    var r = function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var r in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }
        ).apply(this, arguments)
    };
    function o(t, e, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(t) {
                try {
                    h(i.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function s(t) {
                try {
                    h(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function h(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))).then(a, s)
            }
            h((i = i.apply(t, e || [])).next())
        }
        ))
    }
    function a(t, e) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = e.call(t, a)
                        } catch (t) {
                            o = [6, t],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
    var s = ["wrist", "thumb_cmc", "thumb_mcp", "thumb_ip", "thumb_tip", "index_finger_mcp", "index_finger_pip", "index_finger_dip", "index_finger_tip", "middle_finger_mcp", "middle_finger_pip", "middle_finger_dip", "middle_finger_tip", "ring_finger_mcp", "ring_finger_pip", "ring_finger_dip", "ring_finger_tip", "pinky_finger_mcp", "pinky_finger_pip", "pinky_finger_dip", "pinky_finger_tip"]
      , h = {
        runtime: "mediapipe",
        maxHands: 2,
        modelType: "full"
    };
    var u = function() {
        function t(t) {
            var n, i = this;
            switch (this.width = 0,
            this.height = 0,
            this.selfieMode = !1,
            this.handsSolution = new e.Hands({
                locateFile: function(e, n) {
                    return t.solutionPath ? t.solutionPath.replace(/\/+$/, "") + "/" + e : n + "/" + e
                }
            }),
            t.modelType) {
            case "lite":
                n = 0;
                break;
            case "full":
            default:
                n = 1
            }
            this.handsSolution.setOptions({
                modelComplexity: n,
                selfieMode: this.selfieMode,
                maxNumHands: t.maxHands
            }),
            this.handsSolution.onResults((function(t) {
                if (i.height = t.image.height,
                i.width = t.image.width,
                i.hands = [],
                null !== t.multiHandLandmarks)
                    for (var e = t.multiHandedness, n = t.multiHandLandmarks, o = t.multiHandWorldLandmarks, a = 0; a < e.length; a++)
                        i.hands.push(r({}, i.translateOutput(n[a], o[a]), {
                            score: e[a].score,
                            handedness: e[a].label
                        }))
            }
            ))
        }
        return t.prototype.translateOutput = function(t, e) {
            var n = this;
            return {
                keypoints: t.map((function(t, e) {
                    return {
                        x: t.x * n.width,
                        y: t.y * n.height,
                        score: t.visibility,
                        name: s[e]
                    }
                }
                )),
                keypoints3D: e.map((function(t, e) {
                    return {
                        x: t.x,
                        y: t.y,
                        z: t.z,
                        score: t.visibility,
                        name: s[e]
                    }
                }
                ))
            }
        }
        ,
        t.prototype.estimateHands = function(t, e) {
            return o(this, void 0, void 0, (function() {
                return a(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return e && e.flipHorizontal && e.flipHorizontal !== this.selfieMode && (this.selfieMode = e.flipHorizontal,
                        this.handsSolution.setOptions({
                            selfieMode: this.selfieMode
                        })),
                        [4, this.handsSolution.send({
                            image: t
                        })];
                    case 1:
                        return n.sent(),
                        [2, this.hands]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.dispose = function() {
            this.handsSolution.close()
        }
        ,
        t.prototype.reset = function() {
            this.handsSolution.reset(),
            this.width = 0,
            this.height = 0,
            this.hands = null,
            this.selfieMode = !1
        }
        ,
        t.prototype.initialize = function() {
            return this.handsSolution.initialize()
        }
        ,
        t
    }();
    function l(t) {
        return o(this, void 0, void 0, (function() {
            var e, n;
            return a(this, (function(i) {
                switch (i.label) {
                case 0:
                    return e = function(t) {
                        if (null == t)
                            return r({}, h);
                        var e = r({}, t);
                        return e.runtime = "mediapipe",
                        null == e.maxHands && (e.maxHands = h.maxHands),
                        null == e.modelType && (e.modelType = h.modelType),
                        e
                    }(t),
                    [4, (n = new u(e)).initialize()];
                case 1:
                    return i.sent(),
                    [2, n]
                }
            }
            ))
        }
        ))
    }
    function d(t) {
        return t.width * t.height
    }
    function c(t) {
        var e = t.xCenter - t.width / 2
          , n = e + t.width
          , i = t.yCenter - t.height / 2;
        return {
            xMin: e,
            xMax: n,
            yMin: i,
            yMax: i + t.height,
            width: t.width,
            height: t.height
        }
    }
    function f(t, e) {
        var n = c(t)
          , i = c(e);
        if (!function(t, e) {
            return !(t.xMax < e.xMin || e.xMax < t.xMin || t.yMax < e.yMin || e.yMax < t.yMin)
        }(n, i))
            return 0;
        var r = d(function(t, e) {
            var n = Math.max(t.xMin, e.xMin)
              , i = Math.min(t.xMax, e.xMax)
              , r = Math.max(t.yMin, e.yMin)
              , o = Math.min(t.yMax, e.yMax);
            return {
                xMin: n,
                xMax: i,
                yMin: r,
                yMax: o,
                width: Math.max(i - n, 0),
                height: Math.max(o - r, 0)
            }
        }(n, i))
          , o = d(n) + d(i) - r;
        return o > 0 ? r / o : 0
    }
    function p(t) {
        return t instanceof i.Tensor ? {
            height: t.shape[0],
            width: t.shape[1]
        } : {
            height: t.height,
            width: t.width
        }
    }
    function m(t) {
        return t - 2 * Math.PI * Math.floor((t + Math.PI) / (2 * Math.PI))
    }
    function g(t) {
        return t instanceof i.Tensor ? t : i.browser.fromPixels(t)
    }
    function y(t, e) {
        i.util.assert(0 !== t.width, (function() {
            return e + " width cannot be 0."
        }
        )),
        i.util.assert(0 !== t.height, (function() {
            return e + " height cannot be 0."
        }
        ))
    }
    function x(t, e, n) {
        var r = e.inputResolution
          , o = e.keepAspectRatio
          , a = p(t)
          , s = function(t, e) {
            return e ? {
                xCenter: e.xCenter * t.width,
                yCenter: e.yCenter * t.height,
                width: e.width * t.width,
                height: e.height * t.height,
                rotation: e.rotation
            } : {
                xCenter: .5 * t.width,
                yCenter: .5 * t.height,
                width: t.width,
                height: t.height,
                rotation: 0
            }
        }(a, n)
          , h = function(t, e, n) {
            if (void 0 === n && (n = !1),
            !n)
                return {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                };
            var i = e.height
              , r = e.width;
            y(e, "targetSize"),
            y(t, "roi");
            var o, a, s = i / r, h = t.height / t.width, u = 0, l = 0;
            return s > h ? (o = t.width,
            a = t.width * s,
            l = (1 - h / s) / 2) : (o = t.height / s,
            a = t.height,
            u = (1 - s / h) / 2),
            t.width = o,
            t.height = a,
            {
                top: l,
                left: u,
                right: u,
                bottom: l
            }
        }(s, r, o);
        return {
            imageTensor: i.tidy((function() {
                var e = g(t)
                  , n = i.tensor2d(function(t, e, n, i) {
                    y(i, "inputResolution");
                    var r = 1 / e.width
                      , o = 1 / e.height
                      , a = t.xCenter
                      , s = t.yCenter
                      , h = Math.cos(t.rotation)
                      , u = Math.sin(t.rotation)
                      , l = n ? -1 : 1
                      , d = t.width
                      , c = t.height;
                    return [1 / i.width * d * h * l * r * e.width, 1 / i.height * -c * u * r * e.width, (-.5 * d * h * l + .5 * c * u + a) * r * e.width, 1 / i.width * d * u * l * o * e.height, 1 / i.height * c * h * o * e.height, (-.5 * c * h - .5 * d * u * l + s) * o * e.height, 0, 0]
                }(s, a, !1, r), [1, 8]);
                return i.image.transform(i.expandDims(i.cast(e, "float32")), n, "bilinear", "nearest", 0, [r.height, r.width])
            }
            )),
            padding: h
        }
    }
    function v(t, e, n, i) {
        return 1 === i ? .5 * (t + e) : t + (e - t) * n / (i - 1)
    }
    function M(t, e, n) {
        var i = t.locationData.relativeBoundingBox
          , r = function(t, e, n) {
            var i, r = t.locationData, o = n.rotationVectorStartKeypointIndex, a = n.rotationVectorEndKeypointIndex;
            i = n.rotationVectorTargetAngle ? n.rotationVectorTargetAngle : Math.PI * n.rotationVectorTargetAngleDegree / 180;
            var s = r.relativeKeypoints[o].x * e.width
              , h = r.relativeKeypoints[o].y * e.height
              , u = r.relativeKeypoints[a].x * e.width
              , l = r.relativeKeypoints[a].y * e.height;
            return m(i - Math.atan2(-(l - h), u - s))
        }(t, e, n);
        return {
            xCenter: i.xMin + i.width / 2,
            yCenter: i.yMin + i.height / 2,
            width: i.width,
            height: i.height,
            rotation: r
        }
    }
    function w(t, e) {
        return i.tidy((function() {
            var n = function(t) {
                return i.tidy((function() {
                    return [i.slice(t, [0, 0, 0], [1, -1, 1]), i.slice(t, [0, 0, 1], [1, -1, -1])]
                }
                ))
            }(e.predict(t))
              , r = n[0]
              , o = n[1];
            return {
                boxes: i.squeeze(o),
                logits: i.squeeze(r)
            }
        }
        ))
    }
    function b(t, e, n, r) {
        return o(this, void 0, void 0, (function() {
            var o, s, h, u, l;
            return a(this, (function(a) {
                switch (a.label) {
                case 0:
                    return t.sort((function(t, e) {
                        return Math.max.apply(Math, e.score) - Math.max.apply(Math, t.score)
                    }
                    )),
                    o = i.tensor2d(t.map((function(t) {
                        return [t.locationData.relativeBoundingBox.yMin, t.locationData.relativeBoundingBox.xMin, t.locationData.relativeBoundingBox.yMax, t.locationData.relativeBoundingBox.xMax]
                    }
                    ))),
                    s = i.tensor1d(t.map((function(t) {
                        return t.score[0]
                    }
                    ))),
                    [4, i.image.nonMaxSuppressionAsync(o, s, e, n, r)];
                case 1:
                    return [4, (h = a.sent()).array()];
                case 2:
                    return u = a.sent(),
                    l = t.filter((function(t, e) {
                        return u.indexOf(e) > -1
                    }
                    )),
                    i.dispose([o, s, h]),
                    [2, l]
                }
            }
            ))
        }
        ))
    }
    function I(t, e) {
        return t.map((function(t) {
            var n = r({}, t, {
                x: t.x * e.width,
                y: t.y * e.height
            });
            return null != t.z && (n.z = t.z * e.width),
            n
        }
        ))
    }
    function T(t, e) {
        var n = function(t, e, n, i) {
            var r = e - t
              , o = i - n;
            if (0 === r)
                throw new Error("Original min and max are both " + t + ", range cannot be 0.");
            var a = o / r;
            return {
                scale: a,
                offset: n - t * a
            }
        }(0, 255, e[0], e[1]);
        return i.tidy((function() {
            return i.add(i.mul(t, n.scale), n.offset)
        }
        ))
    }
    function S(t, e, n) {
        return o(this, void 0, void 0, (function() {
            var r, o, s, h, u;
            return a(this, (function(a) {
                switch (a.label) {
                case 0:
                    return r = t[0],
                    o = t[1],
                    s = function(t, e, n) {
                        return i.tidy((function() {
                            var r, o, a, s;
                            n.reverseOutputOrder ? (o = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 0], [-1, 1])),
                            r = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 1], [-1, 1])),
                            s = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 2], [-1, 1])),
                            a = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 3], [-1, 1]))) : (r = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 0], [-1, 1])),
                            o = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 1], [-1, 1])),
                            a = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 2], [-1, 1])),
                            s = i.squeeze(i.slice(t, [0, n.boxCoordOffset + 3], [-1, 1]))),
                            o = i.add(i.mul(i.div(o, n.xScale), e.w), e.x),
                            r = i.add(i.mul(i.div(r, n.yScale), e.h), e.y),
                            n.applyExponentialOnBoxSize ? (a = i.mul(i.exp(i.div(a, n.hScale)), e.h),
                            s = i.mul(i.exp(i.div(s, n.wScale)), e.w)) : (a = i.mul(i.div(a, n.hScale), e.h),
                            s = i.mul(i.div(s, n.wScale), e.h));
                            var h = i.sub(r, i.div(a, 2))
                              , u = i.sub(o, i.div(s, 2))
                              , l = i.add(r, i.div(a, 2))
                              , d = i.add(o, i.div(s, 2))
                              , c = i.concat([i.reshape(h, [n.numBoxes, 1]), i.reshape(u, [n.numBoxes, 1]), i.reshape(l, [n.numBoxes, 1]), i.reshape(d, [n.numBoxes, 1])], 1);
                            if (n.numKeypoints)
                                for (var f = 0; f < n.numKeypoints; ++f) {
                                    var p = n.keypointCoordOffset + f * n.numValuesPerKeypoint
                                      , m = void 0
                                      , g = void 0;
                                    n.reverseOutputOrder ? (m = i.squeeze(i.slice(t, [0, p], [-1, 1])),
                                    g = i.squeeze(i.slice(t, [0, p + 1], [-1, 1]))) : (g = i.squeeze(i.slice(t, [0, p], [-1, 1])),
                                    m = i.squeeze(i.slice(t, [0, p + 1], [-1, 1])));
                                    var y = i.add(i.mul(i.div(m, n.xScale), e.w), e.x)
                                      , x = i.add(i.mul(i.div(g, n.yScale), e.h), e.y);
                                    c = i.concat([c, i.reshape(y, [n.numBoxes, 1]), i.reshape(x, [n.numBoxes, 1])], 1)
                                }
                            return c
                        }
                        ))
                    }(o, e, n),
                    h = i.tidy((function() {
                        var t = r;
                        return n.sigmoidScore ? (null != n.scoreClippingThresh && (t = i.clipByValue(r, -n.scoreClippingThresh, n.scoreClippingThresh)),
                        t = i.sigmoid(t)) : t
                    }
                    )),
                    [4, z(s, h, n)];
                case 1:
                    return u = a.sent(),
                    i.dispose([s, h]),
                    [2, u]
                }
            }
            ))
        }
        ))
    }
    function z(t, e, n) {
        return o(this, void 0, void 0, (function() {
            var i, r, o, s, h, u, l, d, c, f, p, m;
            return a(this, (function(a) {
                switch (a.label) {
                case 0:
                    return i = [],
                    [4, t.data()];
                case 1:
                    return r = a.sent(),
                    [4, e.data()];
                case 2:
                    for (o = a.sent(),
                    s = 0; s < n.numBoxes; ++s)
                        if (!(null != n.minScoreThresh && o[s] < n.minScoreThresh || (h = s * n.numCoords,
                        u = _(r[h + 0], r[h + 1], r[h + 2], r[h + 3], o[s], n.flipVertically, s),
                        (l = u.locationData.relativeBoundingBox).width < 0 || l.height < 0))) {
                            if (n.numKeypoints > 0)
                                for ((d = u.locationData).relativeKeypoints = [],
                                c = n.numKeypoints * n.numValuesPerKeypoint,
                                f = 0; f < c; f += n.numValuesPerKeypoint)
                                    p = h + n.keypointCoordOffset + f,
                                    m = {
                                        x: r[p + 0],
                                        y: n.flipVertically ? 1 - r[p + 1] : r[p + 1]
                                    },
                                    d.relativeKeypoints.push(m);
                            i.push(u)
                        }
                    return [2, i]
                }
            }
            ))
        }
        ))
    }
    function _(t, e, n, i, r, o, a) {
        return {
            score: [r],
            ind: a,
            locationData: {
                relativeBoundingBox: {
                    xMin: e,
                    yMin: o ? 1 - n : t,
                    xMax: i,
                    yMax: o ? 1 - t : n,
                    width: i - e,
                    height: n - t
                }
            }
        }
    }
    function k(t, e) {
        return "none" === t ? e : function(t) {
            return 1 / (1 + Math.exp(-t))
        }(e)
    }
    function H(t, e, n, i) {
        return o(this, void 0, void 0, (function() {
            var r, o, s, h, u, l, d, c;
            return a(this, (function(a) {
                switch (a.label) {
                case 0:
                    return n = n || e.flipHorizontally || !1,
                    i = i || e.flipVertically || !1,
                    r = t.size,
                    o = r / e.numLandmarks,
                    [4, t.data()];
                case 1:
                    for (s = a.sent(),
                    h = [],
                    u = 0; u < e.numLandmarks; ++u)
                        l = u * o,
                        (c = {
                            x: 0,
                            y: 0
                        }).x = n ? e.inputImageWidth - s[l] : s[l],
                        o > 1 && (c.y = i ? e.inputImageHeight - s[l + 1] : s[l + 1]),
                        o > 2 && (c.z = s[l + 2]),
                        o > 3 && (c.score = k(e.visibilityActivation, s[l + 3])),
                        h.push(c);
                    for (d = 0; d < h.length; ++d)
                        (c = h[d]).x = c.x / e.inputImageWidth,
                        c.y = c.y / e.inputImageHeight,
                        c.z = c.z / e.inputImageWidth / (e.normalizeZ || 1);
                    return [2, h]
                }
            }
            ))
        }
        ))
    }
    function C(t, e, n) {
        var i = t.width
          , r = t.height
          , o = t.rotation;
        if (null == n.rotation && null == n.rotationDegree || (o = function(t, e) {
            null != e.rotation ? t += e.rotation : null != e.rotationDegree && (t += Math.PI * e.rotationDegree / 180);
            return m(t)
        }(o, n)),
        0 === o)
            t.xCenter = t.xCenter + i * n.shiftX,
            t.yCenter = t.yCenter + r * n.shiftY;
        else {
            var a = (e.width * i * n.shiftX * Math.cos(o) - e.height * r * n.shiftY * Math.sin(o)) / e.width
              , s = (e.width * i * n.shiftX * Math.sin(o) + e.height * r * n.shiftY * Math.cos(o)) / e.height;
            t.xCenter = t.xCenter + a,
            t.yCenter = t.yCenter + s
        }
        if (n.squareLong) {
            var h = Math.max(i * e.width, r * e.height);
            i = h / e.width,
            r = h / e.height
        } else if (n.squareShort) {
            var u = Math.min(i * e.width, r * e.height);
            i = u / e.width,
            r = u / e.height
        }
        return t.width = i * n.scaleX,
        t.height = r * n.scaleY,
        t
    }
    function O(t, e) {
        for (var n = function(t, e) {
            var n = t[0].x * e.width
              , i = t[0].y * e.height
              , r = (t[4].x + t[8].x) / 2
              , o = (t[4].y + t[8].y) / 2;
            return r = (r + t[6].x) / 2 * e.width,
            o = (o + t[6].y) / 2 * e.height,
            m(Math.PI / 2 - Math.atan2(-(o - i), r - n))
        }(t, e), i = m(-n), r = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY, h = 0, u = t; h < u.length; h++) {
            var l = (y = u[h]).x
              , d = y.y;
            r = Math.min(r, l),
            o = Math.max(o, l),
            a = Math.min(a, d),
            s = Math.max(s, d)
        }
        var c = (o + r) / 2
          , f = (s + a) / 2;
        r = Number.POSITIVE_INFINITY,
        o = Number.NEGATIVE_INFINITY,
        a = Number.POSITIVE_INFINITY,
        s = Number.NEGATIVE_INFINITY;
        for (var p = 0, g = t; p < g.length; p++) {
            var y, x = ((y = g[p]).x - c) * e.width, v = (y.y - f) * e.height, M = x * Math.cos(i) - v * Math.sin(i), w = x * Math.sin(i) + v * Math.cos(i);
            r = Math.min(r, M),
            o = Math.max(o, M),
            a = Math.min(a, w),
            s = Math.max(s, w)
        }
        var b = (o + r) / 2
          , I = (s + a) / 2
          , T = b * Math.cos(n) - I * Math.sin(n) + e.width * c
          , S = b * Math.sin(n) + I * Math.cos(n) + e.height * f
          , z = (o - r) / e.width
          , _ = (s - a) / e.height;
        return {
            xCenter: T / e.width,
            yCenter: S / e.height,
            width: z,
            height: _,
            rotation: n
        }
    }
    var B = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1"
      , L = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"
      , N = {
        reduceBoxesInLowestLayer: !1,
        interpolatedScaleAspectRatio: 1,
        featureMapHeight: [],
        featureMapWidth: [],
        numLayers: 4,
        minScale: .1484375,
        maxScale: .75,
        inputSizeHeight: 192,
        inputSizeWidth: 192,
        anchorOffsetX: .5,
        anchorOffsetY: .5,
        strides: [8, 16, 16, 16],
        aspectRatios: [1],
        fixedAnchorSize: !0
    }
      , P = {
        runtime: "tfjs",
        modelType: "full",
        maxHands: 2,
        detectorModelUrl: B,
        landmarkModelUrl: L
    }
      , R = {
        flipHorizontal: !1,
        staticImageMode: !1
    }
      , V = {
        applyExponentialOnBoxSize: !1,
        flipVertically: !1,
        ignoreClasses: [],
        numClasses: 1,
        numBoxes: 2016,
        numCoords: 18,
        boxCoordOffset: 0,
        keypointCoordOffset: 4,
        numKeypoints: 7,
        numValuesPerKeypoint: 2,
        sigmoidScore: !0,
        scoreClippingThresh: 100,
        reverseOutputOrder: !0,
        xScale: 192,
        yScale: 192,
        hScale: 192,
        wScale: 192,
        minScoreThresh: .5
    }
      , E = -1
      , D = .3
      , q = {
        shiftX: 0,
        shiftY: -.5,
        scaleX: 2.6,
        scaleY: 2.6,
        squareLong: !0
    }
      , K = {
        shiftX: 0,
        shiftY: -.1,
        scaleX: 2,
        scaleY: 2,
        squareLong: !0
    }
      , A = {
        inputResolution: {
            width: 192,
            height: 192
        },
        keepAspectRatio: !0
    }
      , Y = {
        inputResolution: {
            width: 224,
            height: 224
        },
        keepAspectRatio: !0
    }
      , j = {
        numLandmarks: 21,
        inputImageWidth: 224,
        inputImageHeight: 224,
        normalizeZ: .4,
        visibilityActivation: "none",
        flipHorizontally: !1,
        flipVertically: !1
    }
      , F = {
        numLandmarks: 21,
        inputImageWidth: 1,
        inputImageHeight: 1,
        visibilityActivation: "none",
        flipHorizontally: !1,
        flipVertically: !1
    };
    var U = function() {
        function t(t, e, n) {
            this.detectorModel = t,
            this.landmarkModel = e,
            this.maxHands = n,
            this.prevHandRectsFromLandmarks = null,
            this.anchors = function(t) {
                for (var e = [], n = 0; n < t.numLayers; ) {
                    for (var i = [], r = [], o = [], a = [], s = n; s < t.strides.length && t.strides[s] === t.strides[n]; ) {
                        var h = v(t.minScale, t.maxScale, s, t.strides.length);
                        if (0 === s && t.reduceBoxesInLowestLayer)
                            o.push(1),
                            o.push(2),
                            o.push(.5),
                            a.push(.1),
                            a.push(h),
                            a.push(h);
                        else {
                            for (var u = 0; u < t.aspectRatios.length; ++u)
                                o.push(t.aspectRatios[u]),
                                a.push(h);
                            if (t.interpolatedScaleAspectRatio > 0) {
                                var l = s === t.strides.length - 1 ? 1 : v(t.minScale, t.maxScale, s + 1, t.strides.length);
                                a.push(Math.sqrt(h * l)),
                                o.push(t.interpolatedScaleAspectRatio)
                            }
                        }
                        s++
                    }
                    for (var d = 0; d < o.length; ++d) {
                        var c = Math.sqrt(o[d]);
                        i.push(a[d] / c),
                        r.push(a[d] * c)
                    }
                    var f = 0
                      , p = 0;
                    if (t.featureMapHeight.length > 0)
                        f = t.featureMapHeight[n],
                        p = t.featureMapWidth[n];
                    else {
                        var m = t.strides[n];
                        f = Math.ceil(t.inputSizeHeight / m),
                        p = Math.ceil(t.inputSizeWidth / m)
                    }
                    for (var g = 0; g < f; ++g)
                        for (var y = 0; y < p; ++y)
                            for (var x = 0; x < i.length; ++x) {
                                var M = {
                                    xCenter: (y + t.anchorOffsetX) / p,
                                    yCenter: (g + t.anchorOffsetY) / f,
                                    width: 0,
                                    height: 0
                                };
                                t.fixedAnchorSize ? (M.width = 1,
                                M.height = 1) : (M.width = r[x],
                                M.height = i[x]),
                                e.push(M)
                            }
                    n = s
                }
                return e
            }(N);
            var r = i.tensor1d(this.anchors.map((function(t) {
                return t.width
            }
            )))
              , o = i.tensor1d(this.anchors.map((function(t) {
                return t.height
            }
            )))
              , a = i.tensor1d(this.anchors.map((function(t) {
                return t.xCenter
            }
            )))
              , s = i.tensor1d(this.anchors.map((function(t) {
                return t.yCenter
            }
            )));
            this.anchorTensor = {
                x: a,
                y: s,
                w: r,
                h: o
            }
        }
        return t.prototype.estimateHands = function(t, e) {
            return o(this, void 0, void 0, (function() {
                var n, o, h, u, l, d, c, m, y, x, v, M, w, b, T, S, z, _, k = this;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return n = function(t) {
                            if (null == t)
                                return r({}, R);
                            var e = r({}, t);
                            return null == e.flipHorizontal && (e.flipHorizontal = R.flipHorizontal),
                            null == e.staticImageMode && (e.staticImageMode = R.staticImageMode),
                            e
                        }(e),
                        null == t ? (this.reset(),
                        [2, []]) : (o = p(t),
                        h = i.tidy((function() {
                            var e = i.cast(g(t), "float32");
                            if (n.flipHorizontal) {
                                e = i.squeeze(i.image.flipLeftRight(i.expandDims(e, 0)), [0])
                            }
                            return e
                        }
                        )),
                        u = this.prevHandRectsFromLandmarks,
                        n.staticImageMode || null == u || u.length < this.maxHands ? [4, this.detectPalm(h)] : [3, 2]);
                    case 1:
                        return 0 === (d = a.sent()).length ? (this.reset(),
                        h.dispose(),
                        [2, []]) : (c = d.map((function(t) {
                            return k.palmDetectionToRoi(t, o)
                        }
                        )),
                        l = c,
                        [3, 3]);
                    case 2:
                        l = u,
                        a.label = 3;
                    case 3:
                        return H = .5,
                        C = [],
                        [l].forEach((function(t) {
                            return t.forEach((function(t) {
                                (C = C.filter((function(e) {
                                    return f(t, e) <= H
                                }
                                ))).push(t)
                            }
                            ))
                        }
                        )),
                        l = C,
                        [4, Promise.all(l.map((function(t) {
                            return k.handLandmarks(t, h)
                        }
                        )))];
                    case 4:
                        for (m = a.sent(),
                        y = [],
                        this.prevHandRectsFromLandmarks = [],
                        x = 0,
                        v = m; x < v.length; x++)
                            null != (M = v[x]) && (w = M.landmarks,
                            b = M.worldLandmarks,
                            T = M.handScore,
                            S = M.handedness,
                            this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(w, o)),
                            null != (z = I(w, o)) && z.forEach((function(t, e) {
                                delete t.z,
                                t.name = s[e]
                            }
                            )),
                            null != (_ = b) && _.forEach((function(t, e) {
                                t.name = s[e]
                            }
                            )),
                            y.push({
                                keypoints: z,
                                keypoints3D: _,
                                handedness: S,
                                score: T
                            }));
                        return h.dispose(),
                        [2, y]
                    }
                    var H, C
                }
                ))
            }
            ))
        }
        ,
        t.prototype.dispose = function() {
            this.detectorModel.dispose(),
            this.landmarkModel.dispose(),
            i.dispose([this.anchorTensor.x, this.anchorTensor.y, this.anchorTensor.w, this.anchorTensor.h])
        }
        ,
        t.prototype.reset = function() {
            this.prevHandRectsFromLandmarks = null
        }
        ,
        t.prototype.detectPalm = function(t) {
            return o(this, void 0, void 0, (function() {
                var e, n, r, o, s, h, u, l, d, c;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return e = x(t, A),
                        n = e.imageTensor,
                        r = e.padding,
                        o = T(n, [0, 1]),
                        s = w(o, this.detectorModel),
                        h = s.boxes,
                        [4, S([u = s.logits, h], this.anchorTensor, V)];
                    case 1:
                        return 0 === (l = a.sent()).length ? (i.dispose([n, o, u, h]),
                        [2, l]) : [4, b(l, this.maxHands, D, E)];
                    case 2:
                        return d = a.sent(),
                        c = function(t, e) {
                            void 0 === t && (t = []);
                            for (var n = e.left, i = e.top, r = e.left + e.right, o = e.top + e.bottom, a = 0; a < t.length; a++) {
                                var s = t[a]
                                  , h = s.locationData.relativeBoundingBox
                                  , u = (h.xMin - n) / (1 - r)
                                  , l = (h.yMin - i) / (1 - o)
                                  , d = h.width / (1 - r)
                                  , c = h.height / (1 - o);
                                h.xMin = u,
                                h.yMin = l,
                                h.width = d,
                                h.height = c;
                                for (var f = 0; f < s.locationData.relativeKeypoints.length; ++f) {
                                    var p = s.locationData.relativeKeypoints[f]
                                      , m = (p.x - n) / (1 - r)
                                      , g = (p.y - i) / (1 - o);
                                    p.x = m,
                                    p.y = g
                                }
                            }
                            return t
                        }(d, r),
                        i.dispose([n, o, u, h]),
                        [2, c]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.palmDetectionToRoi = function(t, e) {
            return C(M(t, e, {
                rotationVectorStartKeypointIndex: 0,
                rotationVectorEndKeypointIndex: 2,
                rotationVectorTargetAngleDegree: 90
            }), e, q)
        }
        ,
        t.prototype.handLandmarks = function(t, e) {
            return o(this, void 0, void 0, (function() {
                var n, o, s, h, u, l, d, c, f, p, m, g, y, v, M, w, b;
                return a(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return n = x(e, Y, t),
                        o = n.imageTensor,
                        s = n.padding,
                        h = T(o, [0, 1]),
                        u = this.landmarkModel.execute(h, ["Identity_2:0", "Identity_1:0", "Identity:0", "Identity_3:0"]),
                        l = u[0],
                        d = u[1],
                        c = u[2],
                        f = u[3],
                        [4, d.data()];
                    case 1:
                        return (p = a.sent()[0]) < .5 ? (i.dispose(u),
                        i.dispose([o, h]),
                        [2, null]) : [4, c.data()];
                    case 2:
                        return m = a.sent()[0],
                        g = m >= .5 ? "Left" : "Right",
                        [4, H(l, j)];
                    case 3:
                        return y = a.sent(),
                        [4, H(f, F)];
                    case 4:
                        return v = a.sent(),
                        M = function(t, e) {
                            var n = e.left
                              , i = e.top
                              , o = e.left + e.right
                              , a = e.top + e.bottom;
                            return t.map((function(t) {
                                return r({}, t, {
                                    x: (t.x - n) / (1 - o),
                                    y: (t.y - i) / (1 - a),
                                    z: t.z / (1 - o)
                                })
                            }
                            ))
                        }(y, s),
                        w = function(t, e, n) {
                            void 0 === n && (n = {
                                ignoreRotation: !1
                            });
                            for (var i = [], o = 0, a = t; o < a.length; o++) {
                                var s = a[o]
                                  , h = s.x - .5
                                  , u = s.y - .5
                                  , l = n.ignoreRotation ? 0 : e.rotation
                                  , d = Math.cos(l) * h - Math.sin(l) * u
                                  , c = Math.sin(l) * h + Math.cos(l) * u;
                                d = d * e.width + e.xCenter,
                                c = c * e.height + e.yCenter;
                                var f = s.z * e.width
                                  , p = r({}, s);
                                p.x = d,
                                p.y = c,
                                p.z = f,
                                i.push(p)
                            }
                            return i
                        }(M, t),
                        b = function(t, e) {
                            for (var n = [], i = 0, o = t; i < o.length; i++) {
                                var a = o[i]
                                  , s = a.x
                                  , h = a.y
                                  , u = e.rotation
                                  , l = Math.cos(u) * s - Math.sin(u) * h
                                  , d = Math.sin(u) * s + Math.cos(u) * h
                                  , c = r({}, a);
                                c.x = l,
                                c.y = d,
                                n.push(c)
                            }
                            return n
                        }(v, t),
                        i.dispose(u),
                        i.dispose([o, h]),
                        [2, {
                            landmarks: w,
                            worldLandmarks: b,
                            handScore: p,
                            handedness: g
                        }]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.handLandmarksToRoi = function(t, e) {
            return C(O([].concat(t.slice(0, 4), t.slice(5, 7), t.slice(9, 11), t.slice(13, 15), t.slice(17, 19)), e), e, K)
        }
        ,
        t
    }();
    function W(t) {
        return o(this, void 0, void 0, (function() {
            var e, i, o, s, h, u;
            return a(this, (function(a) {
                switch (a.label) {
                case 0:
                    return e = function(t) {
                        if (null == t)
                            return r({}, P);
                        var e = r({}, t);
                        if (e.runtime = "tfjs",
                        null == e.maxHands && (e.maxHands = P.maxHands),
                        null == e.modelType && (e.modelType = P.modelType),
                        "lite" !== e.modelType && "full" !== e.modelType)
                            throw new Error("Model type must be one of lite or full, but got " + e.modelType);
                        if (null == e.detectorModelUrl)
                            switch (e.modelType) {
                            case "lite":
                                e.detectorModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1";
                                break;
                            case "full":
                            default:
                                e.detectorModelUrl = B
                            }
                        if (null == e.landmarkModelUrl)
                            switch (e.modelType) {
                            case "lite":
                                e.landmarkModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1";
                                break;
                            case "full":
                            default:
                                e.landmarkModelUrl = L
                            }
                        return e
                    }(t),
                    i = e.detectorModelUrl.indexOf("https://tfhub.dev") > -1,
                    o = e.landmarkModelUrl.indexOf("https://tfhub.dev") > -1,
                    [4, Promise.all([n.loadGraphModel(e.detectorModelUrl, {
                        fromTFHub: i
                    }), n.loadGraphModel(e.landmarkModelUrl, {
                        fromTFHub: o
                    })])];
                case 1:
                    return s = a.sent(),
                    h = s[0],
                    u = s[1],
                    [2, new U(h,u,e.maxHands)]
                }
            }
            ))
        }
        ))
    }
    (t.SupportedModels || (t.SupportedModels = {})).MediaPipeHands = "MediaPipeHands",
    t.createDetector = function(e, n) {
        return o(this, void 0, void 0, (function() {
            var i, r;
            return a(this, (function(o) {
                switch (e) {
                case t.SupportedModels.MediaPipeHands:
                    if (r = void 0,
                    null != (i = n)) {
                        if ("tfjs" === i.runtime)
                            return [2, W(i)];
                        if ("mediapipe" === i.runtime)
                            return [2, l(i)];
                        r = i.runtime
                    }
                    throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got " + r);
                default:
                    throw new Error(e + " is not a supported model name.")
                }
            }
            ))
        }
        ))
    }
    ,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
