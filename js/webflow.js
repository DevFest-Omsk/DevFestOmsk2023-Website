
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty2 = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty2.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module2) {
        if (Webflow.env()) {
          isFunction(module2.design) && $win.on("__wf_design", module2.design);
          isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
        }
        isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          addReady(module2);
        }
      }
      function addReady(module2) {
        if (domready) {
          module2.ready();
          return;
        }
        if (_.contains(primary, module2.ready)) {
          return;
        }
        primary.push(module2.ready);
      }
      function unbindModule(module2) {
        isFunction(module2.design) && $win.off("__wf_design", module2.design);
        isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
        isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          removeReady(module2);
        }
      }
      function removeReady(module2) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module2.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($) {
        var api = {};
        var doc = document;
        var $html = $("html");
        var $body = $("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $ = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([func, el]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix.js
  var require_webflow_ix = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix_events();
      Webflow.define("ix", module.exports = function($, _) {
        var api = {};
        var designer;
        var $win = $(window);
        var namespace = ".w-ix";
        var tram = $.tram;
        var env = Webflow.env;
        var inApp = env();
        var emptyFix = env.chrome && env.chrome < 35;
        var transNone = "none 0s ease 0s";
        var $subs = $();
        var config = {};
        var anchors = [];
        var loads = [];
        var readys = [];
        var destroyed;
        var readyDelay = 1;
        var components = {
          tabs: ".w-tab-link, .w-tab-pane",
          dropdown: ".w-dropdown",
          slider: ".w-slide",
          navbar: ".w-nav"
        };
        api.init = function(list) {
          setTimeout(function() {
            configure(list);
          }, 1);
        };
        api.preview = function() {
          designer = false;
          readyDelay = 100;
          setTimeout(function() {
            configure(window.__wf_ix);
          }, 1);
        };
        api.design = function() {
          designer = true;
          api.destroy();
        };
        api.destroy = function() {
          destroyed = true;
          $subs.each(teardown);
          Webflow.scroll.off(scroll);
          IXEvents.async();
          anchors = [];
          loads = [];
          readys = [];
        };
        api.ready = function() {
          if (inApp) {
            return env("design") ? api.design() : api.preview();
          }
          if (config && destroyed) {
            destroyed = false;
            init();
          }
        };
        api.run = run;
        api.style = inApp ? styleApp : stylePub;
        function configure(list) {
          if (!list) {
            return;
          }
          config = {};
          _.each(list, function(item) {
            config[item.slug] = item.value;
          });
          init();
        }
        function init() {
          initIX1Engine();
          IXEvents.init();
          Webflow.redraw.up();
        }
        function initIX1Engine() {
          var els = $("[data-ix]");
          if (!els.length) {
            return;
          }
          els.each(teardown);
          els.each(build);
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            setTimeout(scroll, 1);
          }
          if (loads.length) {
            Webflow.load(runLoads);
          }
          if (readys.length) {
            setTimeout(runReadys, readyDelay);
          }
        }
        function build(i, el) {
          var $el = $(el);
          var id = $el.attr("data-ix");
          var ix = config[id];
          if (!ix) {
            return;
          }
          var triggers = ix.triggers;
          if (!triggers) {
            return;
          }
          api.style($el, ix.style);
          _.each(triggers, function(trigger) {
            var state = {};
            var type = trigger.type;
            var stepsB = trigger.stepsB && trigger.stepsB.length;
            function runA() {
              run(trigger, $el, {
                group: "A"
              });
            }
            function runB() {
              run(trigger, $el, {
                group: "B"
              });
            }
            if (type === "load") {
              trigger.preload && !inApp ? loads.push(runA) : readys.push(runA);
              return;
            }
            if (type === "click") {
              $el.on("click" + namespace, function(evt) {
                if (!Webflow.validClick(evt.currentTarget)) {
                  return;
                }
                if ($el.attr("href") === "#") {
                  evt.preventDefault();
                }
                run(trigger, $el, {
                  group: state.clicked ? "B" : "A"
                });
                if (stepsB) {
                  state.clicked = !state.clicked;
                }
              });
              $subs = $subs.add($el);
              return;
            }
            if (type === "hover") {
              $el.on("mouseenter" + namespace, runA);
              $el.on("mouseleave" + namespace, runB);
              $subs = $subs.add($el);
              return;
            }
            if (type === "scroll") {
              anchors.push({
                el: $el,
                trigger,
                state: {
                  active: false
                },
                offsetTop: convert(trigger.offsetTop),
                offsetBot: convert(trigger.offsetBot)
              });
              return;
            }
            var proxy = components[type];
            if (proxy) {
              var $proxy = $el.closest(proxy);
              $proxy.on(IXEvents.types.INTRO, runA).on(IXEvents.types.OUTRO, runB);
              $subs = $subs.add($proxy);
              return;
            }
          });
        }
        function convert(offset) {
          if (!offset) {
            return 0;
          }
          offset = String(offset);
          var result = parseInt(offset, 10);
          if (result !== result) {
            return 0;
          }
          if (offset.indexOf("%") > 0) {
            result /= 100;
            if (result >= 1) {
              result = 0.999;
            }
          }
          return result;
        }
        function teardown(i, el) {
          $(el).off(namespace);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          var count = anchors.length;
          for (var i = 0; i < count; i++) {
            var anchor = anchors[i];
            var $el = anchor.el;
            var trigger = anchor.trigger;
            var stepsB = trigger.stepsB && trigger.stepsB.length;
            var state = anchor.state;
            var top = $el.offset().top;
            var height = $el.outerHeight();
            var offsetTop = anchor.offsetTop;
            var offsetBot = anchor.offsetBot;
            if (offsetTop < 1 && offsetTop > 0) {
              offsetTop *= viewHeight;
            }
            if (offsetBot < 1 && offsetBot > 0) {
              offsetBot *= viewHeight;
            }
            var active = top + height - offsetTop >= viewTop && top + offsetBot <= viewTop + viewHeight;
            if (active === state.active) {
              continue;
            }
            if (active === false && !stepsB) {
              continue;
            }
            state.active = active;
            run(trigger, $el, {
              group: active ? "A" : "B"
            });
          }
        }
        function runLoads() {
          var count = loads.length;
          for (var i = 0; i < count; i++) {
            loads[i]();
          }
        }
        function runReadys() {
          var count = readys.length;
          for (var i = 0; i < count; i++) {
            readys[i]();
          }
        }
        function run(trigger, $el, opts, replay) {
          opts = opts || {};
          var done = opts.done;
          var preserve3d = trigger.preserve3d;
          if (designer && !opts.force) {
            return;
          }
          var group = opts.group || "A";
          var loop = trigger["loop" + group];
          var steps = trigger["steps" + group];
          if (!steps || !steps.length) {
            return;
          }
          if (steps.length < 2) {
            loop = false;
          }
          if (!replay) {
            var selector = trigger.selector;
            if (selector) {
              if (trigger.descend) {
                $el = $el.find(selector);
              } else if (trigger.siblings) {
                $el = $el.siblings(selector);
              } else {
                $el = $(selector);
              }
              if (inApp) {
                $el.attr("data-ix-affect", 1);
              }
            }
            if (emptyFix) {
              $el.addClass("w-ix-emptyfix");
            }
            if (preserve3d) {
              $el.css("transform-style", "preserve-3d");
            }
          }
          var _tram = tram($el);
          var meta = {
            omit3d: !preserve3d
          };
          for (var i = 0; i < steps.length; i++) {
            addStep(_tram, steps[i], meta);
          }
          function fin() {
            if (loop) {
              return run(trigger, $el, opts, true);
            }
            if (meta.width === "auto") {
              _tram.set({
                width: "auto"
              });
            }
            if (meta.height === "auto") {
              _tram.set({
                height: "auto"
              });
            }
            done && done();
          }
          meta.start ? _tram.then(fin) : fin();
        }
        function addStep(_tram, step, meta) {
          var addMethod = "add";
          var startMethod = "start";
          if (meta.start) {
            addMethod = startMethod = "then";
          }
          var transitions = step.transition;
          if (transitions) {
            transitions = transitions.split(",");
            for (var i = 0; i < transitions.length; i++) {
              var transition = transitions[i];
              _tram[addMethod](transition);
            }
          }
          var clean = tramify(step, meta) || {};
          if (clean.width != null) {
            meta.width = clean.width;
          }
          if (clean.height != null) {
            meta.height = clean.height;
          }
          if (transitions == null) {
            if (meta.start) {
              _tram.then(function() {
                var queue = this.queue;
                this.set(clean);
                if (clean.display) {
                  _tram.redraw();
                  Webflow.redraw.up();
                }
                this.queue = queue;
                this.next();
              });
            } else {
              _tram.set(clean);
              if (clean.display) {
                _tram.redraw();
                Webflow.redraw.up();
              }
            }
            var wait = clean.wait;
            if (wait != null) {
              _tram.wait(wait);
              meta.start = true;
            }
          } else {
            if (clean.display) {
              var display = clean.display;
              delete clean.display;
              if (meta.start) {
                _tram.then(function() {
                  var queue = this.queue;
                  this.set({
                    display
                  }).redraw();
                  Webflow.redraw.up();
                  this.queue = queue;
                  this.next();
                });
              } else {
                _tram.set({
                  display
                }).redraw();
                Webflow.redraw.up();
              }
            }
            _tram[startMethod](clean);
            meta.start = true;
          }
        }
        function styleApp(el, data) {
          var _tram = tram(el);
          if ($.isEmptyObject(data)) {
            return;
          }
          el.css("transition", "");
          var computed = el.css("transition");
          if (computed === transNone) {
            computed = _tram.upstream = null;
          }
          _tram.upstream = transNone;
          _tram.set(tramify(data));
          _tram.upstream = computed;
        }
        function stylePub(el, data) {
          tram(el).set(tramify(data));
        }
        function tramify(obj, meta) {
          var omit3d = meta && meta.omit3d;
          var result = {};
          var found = false;
          for (var key in obj) {
            if (key === "transition") {
              continue;
            }
            if (key === "keysort") {
              continue;
            }
            if (omit3d) {
              if (key === "z" || key === "rotateX" || key === "rotateY" || key === "scaleZ") {
                continue;
              }
            }
            result[key] = obj[key];
            found = true;
          }
          return found ? result : null;
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent2(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $ = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent2(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireWildcard.js
  var require_interopRequireWildcard = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return {
            "default": obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js/internals/global.js
  var require_global = __commonJS({
    "node_modules/core-js/internals/global.js"(exports, module) {
      var check = function(it) {
        return it && it.Math == Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
      function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      var call = Function.prototype.call;
      module.exports = call.bind ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      var FunctionPrototype = Function.prototype;
      var bind = FunctionPrototype.bind;
      var call = FunctionPrototype.call;
      var callBind = bind && bind.bind(call);
      module.exports = bind ? function(fn) {
        return fn && callBind(call, fn);
      } : function(fn) {
        return fn && function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var Object2 = global2.Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !Object2("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) == "String" ? split(it, "") : Object2(it);
      } : Object2;
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      var global2 = require_global();
      var TypeError2 = global2.TypeError;
      module.exports = function(it) {
        if (it == void 0)
          throw TypeError2("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      module.exports = function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/engine-user-agent.js
  var require_engine_user_agent = __commonJS({
    "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("navigator", "userAgent") || "";
    }
  });

  // node_modules/core-js/internals/engine-v8-version.js
  var require_engine_v8_version = __commonJS({
    "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
      var global2 = require_global();
      var userAgent = require_engine_user_agent();
      var process2 = global2.process;
      var Deno = global2.Deno;
      var versions = process2 && process2.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match)
            version = +match[1];
        }
      }
      module.exports = version;
    }
  });

  // node_modules/core-js/internals/native-symbol.js
  var require_native_symbol = __commonJS({
    "node_modules/core-js/internals/native-symbol.js"(exports, module) {
      var V8_VERSION = require_engine_v8_version();
      var fails = require_fails();
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol();
        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      var NATIVE_SYMBOL = require_native_symbol();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      var global2 = require_global();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Object2 = global2.Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      var global2 = require_global();
      var String2 = global2.String;
      module.exports = function(argument) {
        try {
          return String2(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isCallable(argument))
          return argument;
        throw TypeError2(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      var aCallable = require_a_callable();
      module.exports = function(V, P) {
        var func = V[P];
        return func == null ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var TypeError2 = global2.TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
          return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
          return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
          return val;
        throw TypeError2("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/set-global.js
  var require_set_global = __commonJS({
    "node_modules/core-js/internals/set-global.js"(exports, module) {
      var global2 = require_global();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(global2, key, { value, configurable: true, writable: true });
        } catch (error) {
          global2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      var global2 = require_global();
      var setGlobal = require_set_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      var IS_PURE = require_is_pure();
      var store = require_shared_store();
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.19.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      var global2 = require_global();
      var requireObjectCoercible = require_require_object_coercible();
      var Object2 = global2.Object;
      module.exports = function(argument) {
        return Object2(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty2(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1 .toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      var global2 = require_global();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_native_symbol();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var WellKnownSymbolsStore = shared("wks");
      var Symbol2 = global2.Symbol;
      var symbolFor = Symbol2 && Symbol2["for"];
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
          var description = "Symbol." + name;
          if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
            WellKnownSymbolsStore[name] = Symbol2[name];
          } else if (USE_SYMBOL_AS_UID && symbolFor) {
            WellKnownSymbolsStore[name] = symbolFor(description);
          } else {
            WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
          }
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      var global2 = require_global();
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var TypeError2 = global2.TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input))
          return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0)
            pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result))
            return result;
          throw TypeError2("Can't convert object to primitive value");
        }
        if (pref === void 0)
          pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      var global2 = require_global();
      var isObject = require_is_object();
      var document2 = global2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor(O, P);
          } catch (error) {
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      var global2 = require_global();
      var isObject = require_is_object();
      var String2 = global2.String;
      var TypeError2 = global2.TypeError;
      module.exports = function(argument) {
        if (isObject(argument))
          return argument;
        throw TypeError2(String2(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var TypeError2 = global2.TypeError;
      var $defineProperty = Object.defineProperty;
      exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes);
          } catch (error) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError2("Accessors not supported");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/native-weak-map.js
  var require_native_weak_map = __commonJS({
    "node_modules/core-js/internals/native-weak-map.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var inspectSource = require_inspect_source();
      var WeakMap2 = global2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(inspectSource(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      var NATIVE_WEAK_MAP = require_native_weak_map();
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = global2.TypeError;
      var WeakMap2 = global2.WeakMap;
      var set3;
      var get3;
      var has;
      var enforce = function(it) {
        return has(it) ? get3(it) : set3(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get3(it)).type !== TYPE) {
            throw TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        wmget = uncurryThis(store.get);
        wmhas = uncurryThis(store.has);
        wmset = uncurryThis(store.set);
        set3 = function(it, metadata) {
          if (wmhas(store, it))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset(store, it, metadata);
          return metadata;
        };
        get3 = function(it) {
          return wmget(store, it) || {};
        };
        has = function(it) {
          return wmhas(store, it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set3 = function(it, metadata) {
          if (hasOwn(it, STATE))
            throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get3 = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var wmget;
      var wmhas;
      var wmset;
      var STATE;
      module.exports = {
        set: set3,
        get: get3,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/internals/redefine.js"(exports, module) {
      var global2 = require_global();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var setGlobal = require_set_global();
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split("String");
      (module.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== void 0 ? options.name : key;
        var state;
        if (isCallable(value)) {
          if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            createNonEnumerableProperty(value, "name", name);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
          }
        }
        if (O === global2) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      });
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++) {
              if ((IS_INCLUDES || index in O) && O[index] === el)
                return IS_INCLUDES || index || 0;
            }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i)
          if (hasOwn(O, key = names[i++])) {
            ~indexOf(result, key) || push(result, key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      var global2 = require_global();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var redefine = require_redefine();
      var setGlobal = require_set_global();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = global2;
        } else if (STATIC) {
          target = global2[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global2[TARGET] || {}).prototype;
        }
        if (target)
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else
              targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            if (!FORCED && targetProperty !== void 0) {
              if (typeof sourceProperty == typeof targetProperty)
                continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            if (options.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(sourceProperty, "sham", true);
            }
            redefine(target, key, sourceProperty, options);
          }
      };
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index)
          definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      var anObject = require_an_object();
      var defineProperties = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--)
          delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = NullProtoObject();
        return Properties === void 0 ? result : defineProperties(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var definePropertyModule = require_object_define_property();
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] == void 0) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es.array.includes.js
  var require_es_array_includes = __commonJS({
    "node_modules/core-js/modules/es.array.includes.js"() {
      "use strict";
      var $ = require_export();
      var $includes = require_array_includes().includes;
      var addToUnscopables = require_add_to_unscopables();
      $({ target: "Array", proto: true }, {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("includes");
    }
  });

  // node_modules/core-js/internals/entry-unbind.js
  var require_entry_unbind = __commonJS({
    "node_modules/core-js/internals/entry-unbind.js"(exports, module) {
      var global2 = require_global();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(CONSTRUCTOR, METHOD) {
        return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
      };
    }
  });

  // node_modules/core-js/es/array/includes.js
  var require_includes = __commonJS({
    "node_modules/core-js/es/array/includes.js"(exports, module) {
      require_es_array_includes();
      var entryUnbind = require_entry_unbind();
      module.exports = entryUnbind("Array", "includes");
    }
  });

  // node_modules/core-js/stable/array/includes.js
  var require_includes2 = __commonJS({
    "node_modules/core-js/stable/array/includes.js"(exports, module) {
      var parent = require_includes();
      module.exports = parent;
    }
  });

  // node_modules/core-js/features/array/includes.js
  var require_includes3 = __commonJS({
    "node_modules/core-js/features/array/includes.js"(exports, module) {
      var parent = require_includes2();
      module.exports = parent;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/symbol-observable/lib/ponyfill.js
  var require_ponyfill = __commonJS({
    "node_modules/symbol-observable/lib/ponyfill.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = symbolObservablePonyfill;
      function symbolObservablePonyfill(root) {
        var result;
        var _Symbol = root.Symbol;
        if (typeof _Symbol === "function") {
          if (_Symbol.observable) {
            result = _Symbol.observable;
          } else {
            result = _Symbol("observable");
            _Symbol.observable = result;
          }
        } else {
          result = "@@observable";
        }
        return result;
      }
    }
  });

  // node_modules/symbol-observable/lib/index.js
  var require_lib = __commonJS({
    "node_modules/symbol-observable/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _ponyfill = require_ponyfill();
      var _ponyfill2 = _interopRequireDefault(_ponyfill);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var root;
      if (typeof self !== "undefined") {
        root = self;
      } else if (typeof window !== "undefined") {
        root = window;
      } else if (typeof global !== "undefined") {
        root = global;
      } else if (typeof module !== "undefined") {
        root = module;
      } else {
        root = Function("return this")();
      }
      var result = (0, _ponyfill2["default"])(root);
      exports["default"] = result;
    }
  });

  // node_modules/redux/lib/createStore.js
  var require_createStore = __commonJS({
    "node_modules/redux/lib/createStore.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.ActionTypes = void 0;
      exports["default"] = createStore;
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _symbolObservable = require_lib();
      var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var ActionTypes = exports.ActionTypes = {
        INIT: "@@redux/INIT"
      };
      function createStore(reducer, preloadedState, enhancer) {
        var _ref2;
        if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
          enhancer = preloadedState;
          preloadedState = void 0;
        }
        if (typeof enhancer !== "undefined") {
          if (typeof enhancer !== "function") {
            throw new Error("Expected the enhancer to be a function.");
          }
          return enhancer(createStore)(reducer, preloadedState);
        }
        if (typeof reducer !== "function") {
          throw new Error("Expected the reducer to be a function.");
        }
        var currentReducer = reducer;
        var currentState = preloadedState;
        var currentListeners = [];
        var nextListeners = currentListeners;
        var isDispatching = false;
        function ensureCanMutateNextListeners() {
          if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
          }
        }
        function getState() {
          return currentState;
        }
        function subscribe(listener) {
          if (typeof listener !== "function") {
            throw new Error("Expected listener to be a function.");
          }
          var isSubscribed = true;
          ensureCanMutateNextListeners();
          nextListeners.push(listener);
          return function unsubscribe() {
            if (!isSubscribed) {
              return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
          };
        }
        function dispatch(action) {
          if (!(0, _isPlainObject2["default"])(action)) {
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
          }
          if (typeof action.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
          }
          if (isDispatching) {
            throw new Error("Reducers may not dispatch actions.");
          }
          try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
          } finally {
            isDispatching = false;
          }
          var listeners = currentListeners = nextListeners;
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
          return action;
        }
        function replaceReducer(nextReducer) {
          if (typeof nextReducer !== "function") {
            throw new Error("Expected the nextReducer to be a function.");
          }
          currentReducer = nextReducer;
          dispatch({ type: ActionTypes.INIT });
        }
        function observable() {
          var _ref;
          var outerSubscribe = subscribe;
          return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe2(observer) {
              if (typeof observer !== "object") {
                throw new TypeError("Expected the observer to be an object.");
              }
              function observeState() {
                if (observer.next) {
                  observer.next(getState());
                }
              }
              observeState();
              var unsubscribe = outerSubscribe(observeState);
              return { unsubscribe };
            }
          }, _ref[_symbolObservable2["default"]] = function() {
            return this;
          }, _ref;
        }
        dispatch({ type: ActionTypes.INIT });
        return _ref2 = {
          dispatch,
          subscribe,
          getState,
          replaceReducer
        }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
      }
    }
  });

  // node_modules/redux/lib/utils/warning.js
  var require_warning = __commonJS({
    "node_modules/redux/lib/utils/warning.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = warning;
      function warning(message) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
  });

  // node_modules/redux/lib/combineReducers.js
  var require_combineReducers = __commonJS({
    "node_modules/redux/lib/combineReducers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = combineReducers2;
      var _createStore = require_createStore();
      var _isPlainObject = require_isPlainObject();
      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function getUndefinedStateErrorMessage(key, action) {
        var actionType = action && action.type;
        var actionName = actionType && '"' + actionType.toString() + '"' || "an action";
        return "Given action " + actionName + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function assertReducerSanity(reducers) {
        Object.keys(reducers).forEach(function(key) {
          var reducer = reducers[key];
          var initialState4 = reducer(void 0, { type: _createStore.ActionTypes.INIT });
          if (typeof initialState4 === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var type = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof reducer(void 0, { type }) === "undefined") {
            throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function combineReducers2(reducers) {
        var reducerKeys = Object.keys(reducers);
        var finalReducers = {};
        for (var i = 0; i < reducerKeys.length; i++) {
          var key = reducerKeys[i];
          if (false) {
            if (typeof reducers[key] === "undefined") {
              (0, _warning2["default"])('No reducer provided for key "' + key + '"');
            }
          }
          if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
          }
        }
        var finalReducerKeys = Object.keys(finalReducers);
        if (false) {
          var unexpectedKeyCache = {};
        }
        var sanityError;
        try {
          assertReducerSanity(finalReducers);
        } catch (e) {
          sanityError = e;
        }
        return function combination() {
          var state = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          var action = arguments[1];
          if (sanityError) {
            throw sanityError;
          }
          if (false) {
            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
              (0, _warning2["default"])(warningMessage);
            }
          }
          var hasChanged = false;
          var nextState = {};
          for (var i2 = 0; i2 < finalReducerKeys.length; i2++) {
            var key2 = finalReducerKeys[i2];
            var reducer = finalReducers[key2];
            var previousStateForKey = state[key2];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
              var errorMessage = getUndefinedStateErrorMessage(key2, action);
              throw new Error(errorMessage);
            }
            nextState[key2] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
          }
          return hasChanged ? nextState : state;
        };
      }
    }
  });

  // node_modules/redux/lib/bindActionCreators.js
  var require_bindActionCreators = __commonJS({
    "node_modules/redux/lib/bindActionCreators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = bindActionCreators;
      function bindActionCreator(actionCreator, dispatch) {
        return function() {
          return dispatch(actionCreator.apply(void 0, arguments));
        };
      }
      function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === "function") {
          return bindActionCreator(actionCreators, dispatch);
        }
        if (typeof actionCreators !== "object" || actionCreators === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        }
        var keys = Object.keys(actionCreators);
        var boundActionCreators = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var actionCreator = actionCreators[key];
          if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
          }
        }
        return boundActionCreators;
      }
    }
  });

  // node_modules/redux/lib/compose.js
  var require_compose = __commonJS({
    "node_modules/redux/lib/compose.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = compose;
      function compose() {
        for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
          funcs[_key] = arguments[_key];
        }
        if (funcs.length === 0) {
          return function(arg) {
            return arg;
          };
        }
        if (funcs.length === 1) {
          return funcs[0];
        }
        var last = funcs[funcs.length - 1];
        var rest = funcs.slice(0, -1);
        return function() {
          return rest.reduceRight(function(composed, f) {
            return f(composed);
          }, last.apply(void 0, arguments));
        };
      }
    }
  });

  // node_modules/redux/lib/applyMiddleware.js
  var require_applyMiddleware = __commonJS({
    "node_modules/redux/lib/applyMiddleware.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      exports["default"] = applyMiddleware;
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function applyMiddleware() {
        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
          middlewares[_key] = arguments[_key];
        }
        return function(createStore) {
          return function(reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            var middlewareAPI = {
              getState: store.getState,
              dispatch: function dispatch(action) {
                return _dispatch(action);
              }
            };
            chain = middlewares.map(function(middleware) {
              return middleware(middlewareAPI);
            });
            _dispatch = _compose2["default"].apply(void 0, chain)(store.dispatch);
            return _extends({}, store, {
              dispatch: _dispatch
            });
          };
        };
      }
    }
  });

  // node_modules/redux/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/redux/lib/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = void 0;
      var _createStore = require_createStore();
      var _createStore2 = _interopRequireDefault(_createStore);
      var _combineReducers = require_combineReducers();
      var _combineReducers2 = _interopRequireDefault(_combineReducers);
      var _bindActionCreators = require_bindActionCreators();
      var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
      var _applyMiddleware = require_applyMiddleware();
      var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
      var _compose = require_compose();
      var _compose2 = _interopRequireDefault(_compose);
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      if (false) {
        (0, _warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");
      }
      exports.createStore = _createStore2["default"];
      exports.combineReducers = _combineReducers2["default"];
      exports.bindActionCreators = _bindActionCreators2["default"];
      exports.applyMiddleware = _applyMiddleware2["default"];
      exports.compose = _compose2["default"];
    }
  });

  // packages/systems/ix2/shared-constants/trigger-events.ts
  var EventTypeConsts, EventAppliesTo, EventBasedOn, EventContinuousMouseAxes, EventLimitAffectedElements, QuickEffectIds, QuickEffectDirectionConsts;
  var init_trigger_events = __esm({
    "packages/systems/ix2/shared-constants/trigger-events.ts"() {
      "use strict";
      EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      };
      EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      };
      EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      };
      EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      };
      EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      };
      QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      };
      QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
    }
  });

  // packages/systems/ix2/shared-constants/animation-actions.ts
  var ActionTypeConsts, ActionAppliesTo;
  var init_animation_actions = __esm({
    "packages/systems/ix2/shared-constants/animation-actions.ts"() {
      "use strict";
      ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        // TODO: Clean these up below because they're not used at this time
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      };
      ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
    }
  });

  // packages/systems/ix2/shared-constants/trigger-interactions.ts
  var InteractionTypeConsts;
  var init_trigger_interactions = __esm({
    "packages/systems/ix2/shared-constants/trigger-interactions.ts"() {
      "use strict";
      InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
    }
  });

  // packages/systems/ix2/shared-constants/reduced-motion.ts
  var TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION, ReducedMotionTypes;
  var init_reduced_motion = __esm({
    "packages/systems/ix2/shared-constants/reduced-motion.ts"() {
      "use strict";
      init_animation_actions();
      ({
        TRANSFORM_MOVE,
        TRANSFORM_SCALE,
        TRANSFORM_ROTATE,
        TRANSFORM_SKEW,
        STYLE_SIZE,
        STYLE_FILTER,
        STYLE_FONT_VARIATION
      } = ActionTypeConsts);
      ReducedMotionTypes = {
        [TRANSFORM_MOVE]: true,
        [TRANSFORM_SCALE]: true,
        [TRANSFORM_ROTATE]: true,
        [TRANSFORM_SKEW]: true,
        [STYLE_SIZE]: true,
        [STYLE_FILTER]: true,
        [STYLE_FONT_VARIATION]: true
      };
    }
  });

  // packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts
  var IX2EngineActionTypes_exports = {};
  __export(IX2EngineActionTypes_exports, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IX2_ACTION_LIST_PLAYBACK_CHANGED,
    IX2_ANIMATION_FRAME_CHANGED: () => IX2_ANIMATION_FRAME_CHANGED,
    IX2_CLEAR_REQUESTED: () => IX2_CLEAR_REQUESTED,
    IX2_ELEMENT_STATE_CHANGED: () => IX2_ELEMENT_STATE_CHANGED,
    IX2_EVENT_LISTENER_ADDED: () => IX2_EVENT_LISTENER_ADDED,
    IX2_EVENT_STATE_CHANGED: () => IX2_EVENT_STATE_CHANGED,
    IX2_INSTANCE_ADDED: () => IX2_INSTANCE_ADDED,
    IX2_INSTANCE_REMOVED: () => IX2_INSTANCE_REMOVED,
    IX2_INSTANCE_STARTED: () => IX2_INSTANCE_STARTED,
    IX2_MEDIA_QUERIES_DEFINED: () => IX2_MEDIA_QUERIES_DEFINED,
    IX2_PARAMETER_CHANGED: () => IX2_PARAMETER_CHANGED,
    IX2_PLAYBACK_REQUESTED: () => IX2_PLAYBACK_REQUESTED,
    IX2_PREVIEW_REQUESTED: () => IX2_PREVIEW_REQUESTED,
    IX2_RAW_DATA_IMPORTED: () => IX2_RAW_DATA_IMPORTED,
    IX2_SESSION_INITIALIZED: () => IX2_SESSION_INITIALIZED,
    IX2_SESSION_STARTED: () => IX2_SESSION_STARTED,
    IX2_SESSION_STOPPED: () => IX2_SESSION_STOPPED,
    IX2_STOP_REQUESTED: () => IX2_STOP_REQUESTED,
    IX2_TEST_FRAME_RENDERED: () => IX2_TEST_FRAME_RENDERED,
    IX2_VIEWPORT_WIDTH_CHANGED: () => IX2_VIEWPORT_WIDTH_CHANGED
  });
  var IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED, IX2_TEST_FRAME_RENDERED;
  var init_IX2EngineActionTypes = __esm({
    "packages/systems/ix2/shared-constants/IX2EngineActionTypes.ts"() {
      "use strict";
      IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
      IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
      IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
      IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
      IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
      IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
      IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
      IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
      IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
      IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
      IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
      IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
      IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
      IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
      IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
      IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
      IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
      IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
      IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
      IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    }
  });

  // packages/systems/ix2/shared-constants/IX2EngineConstants.ts
  var IX2EngineConstants_exports = {};
  __export(IX2EngineConstants_exports, {
    ABSTRACT_NODE: () => ABSTRACT_NODE,
    AUTO: () => AUTO,
    BACKGROUND: () => BACKGROUND,
    BACKGROUND_COLOR: () => BACKGROUND_COLOR,
    BAR_DELIMITER: () => BAR_DELIMITER,
    BORDER_COLOR: () => BORDER_COLOR,
    BOUNDARY_SELECTOR: () => BOUNDARY_SELECTOR,
    CHILDREN: () => CHILDREN,
    COLON_DELIMITER: () => COLON_DELIMITER,
    COLOR: () => COLOR,
    COMMA_DELIMITER: () => COMMA_DELIMITER,
    CONFIG_UNIT: () => CONFIG_UNIT,
    CONFIG_VALUE: () => CONFIG_VALUE,
    CONFIG_X_UNIT: () => CONFIG_X_UNIT,
    CONFIG_X_VALUE: () => CONFIG_X_VALUE,
    CONFIG_Y_UNIT: () => CONFIG_Y_UNIT,
    CONFIG_Y_VALUE: () => CONFIG_Y_VALUE,
    CONFIG_Z_UNIT: () => CONFIG_Z_UNIT,
    CONFIG_Z_VALUE: () => CONFIG_Z_VALUE,
    DISPLAY: () => DISPLAY,
    FILTER: () => FILTER,
    FLEX: () => FLEX,
    FONT_VARIATION_SETTINGS: () => FONT_VARIATION_SETTINGS,
    HEIGHT: () => HEIGHT,
    HTML_ELEMENT: () => HTML_ELEMENT,
    IMMEDIATE_CHILDREN: () => IMMEDIATE_CHILDREN,
    IX2_ID_DELIMITER: () => IX2_ID_DELIMITER,
    OPACITY: () => OPACITY,
    PARENT: () => PARENT,
    PLAIN_OBJECT: () => PLAIN_OBJECT,
    PRESERVE_3D: () => PRESERVE_3D,
    RENDER_GENERAL: () => RENDER_GENERAL,
    RENDER_PLUGIN: () => RENDER_PLUGIN,
    RENDER_STYLE: () => RENDER_STYLE,
    RENDER_TRANSFORM: () => RENDER_TRANSFORM,
    ROTATE_X: () => ROTATE_X,
    ROTATE_Y: () => ROTATE_Y,
    ROTATE_Z: () => ROTATE_Z,
    SCALE_3D: () => SCALE_3D,
    SCALE_X: () => SCALE_X,
    SCALE_Y: () => SCALE_Y,
    SCALE_Z: () => SCALE_Z,
    SIBLINGS: () => SIBLINGS,
    SKEW: () => SKEW,
    SKEW_X: () => SKEW_X,
    SKEW_Y: () => SKEW_Y,
    TRANSFORM: () => TRANSFORM,
    TRANSLATE_3D: () => TRANSLATE_3D,
    TRANSLATE_X: () => TRANSLATE_X,
    TRANSLATE_Y: () => TRANSLATE_Y,
    TRANSLATE_Z: () => TRANSLATE_Z,
    WF_PAGE: () => WF_PAGE,
    WIDTH: () => WIDTH,
    WILL_CHANGE: () => WILL_CHANGE,
    W_MOD_IX: () => W_MOD_IX,
    W_MOD_JS: () => W_MOD_JS
  });
  var IX2_ID_DELIMITER, WF_PAGE, W_MOD_JS, W_MOD_IX, BOUNDARY_SELECTOR, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT, TRANSFORM, TRANSLATE_X, TRANSLATE_Y, TRANSLATE_Z, TRANSLATE_3D, SCALE_X, SCALE_Y, SCALE_Z, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, SKEW_X, SKEW_Y, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BACKGROUND, BORDER_COLOR, COLOR, DISPLAY, FLEX, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, PRESERVE_3D, HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN;
  var init_IX2EngineConstants = __esm({
    "packages/systems/ix2/shared-constants/IX2EngineConstants.ts"() {
      "use strict";
      IX2_ID_DELIMITER = "|";
      WF_PAGE = "data-wf-page";
      W_MOD_JS = "w-mod-js";
      W_MOD_IX = "w-mod-ix";
      BOUNDARY_SELECTOR = ".w-dyn-item";
      CONFIG_X_VALUE = "xValue";
      CONFIG_Y_VALUE = "yValue";
      CONFIG_Z_VALUE = "zValue";
      CONFIG_VALUE = "value";
      CONFIG_X_UNIT = "xUnit";
      CONFIG_Y_UNIT = "yUnit";
      CONFIG_Z_UNIT = "zUnit";
      CONFIG_UNIT = "unit";
      TRANSFORM = "transform";
      TRANSLATE_X = "translateX";
      TRANSLATE_Y = "translateY";
      TRANSLATE_Z = "translateZ";
      TRANSLATE_3D = "translate3d";
      SCALE_X = "scaleX";
      SCALE_Y = "scaleY";
      SCALE_Z = "scaleZ";
      SCALE_3D = "scale3d";
      ROTATE_X = "rotateX";
      ROTATE_Y = "rotateY";
      ROTATE_Z = "rotateZ";
      SKEW = "skew";
      SKEW_X = "skewX";
      SKEW_Y = "skewY";
      OPACITY = "opacity";
      FILTER = "filter";
      FONT_VARIATION_SETTINGS = "font-variation-settings";
      WIDTH = "width";
      HEIGHT = "height";
      BACKGROUND_COLOR = "backgroundColor";
      BACKGROUND = "background";
      BORDER_COLOR = "borderColor";
      COLOR = "color";
      DISPLAY = "display";
      FLEX = "flex";
      WILL_CHANGE = "willChange";
      AUTO = "AUTO";
      COMMA_DELIMITER = ",";
      COLON_DELIMITER = ":";
      BAR_DELIMITER = "|";
      CHILDREN = "CHILDREN";
      IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
      SIBLINGS = "SIBLINGS";
      PARENT = "PARENT";
      PRESERVE_3D = "preserve-3d";
      HTML_ELEMENT = "HTML_ELEMENT";
      PLAIN_OBJECT = "PLAIN_OBJECT";
      ABSTRACT_NODE = "ABSTRACT_NODE";
      RENDER_TRANSFORM = "RENDER_TRANSFORM";
      RENDER_GENERAL = "RENDER_GENERAL";
      RENDER_STYLE = "RENDER_STYLE";
      RENDER_PLUGIN = "RENDER_PLUGIN";
    }
  });

  // packages/systems/ix2/shared-constants/index.ts
  var shared_constants_exports = {};
  __export(shared_constants_exports, {
    ActionAppliesTo: () => ActionAppliesTo,
    ActionTypeConsts: () => ActionTypeConsts,
    EventAppliesTo: () => EventAppliesTo,
    EventBasedOn: () => EventBasedOn,
    EventContinuousMouseAxes: () => EventContinuousMouseAxes,
    EventLimitAffectedElements: () => EventLimitAffectedElements,
    EventTypeConsts: () => EventTypeConsts,
    IX2EngineActionTypes: () => IX2EngineActionTypes_exports,
    IX2EngineConstants: () => IX2EngineConstants_exports,
    InteractionTypeConsts: () => InteractionTypeConsts,
    QuickEffectDirectionConsts: () => QuickEffectDirectionConsts,
    QuickEffectIds: () => QuickEffectIds,
    ReducedMotionTypes: () => ReducedMotionTypes
  });
  var init_shared_constants = __esm({
    "packages/systems/ix2/shared-constants/index.ts"() {
      "use strict";
      init_trigger_events();
      init_animation_actions();
      init_trigger_interactions();
      init_reduced_motion();
      init_IX2EngineActionTypes();
      init_IX2EngineConstants();
      init_animation_actions();
      init_trigger_events();
    }
  });

  // packages/systems/ix2/engine/reducers/IX2DataReducer.ts
  var IX2_RAW_DATA_IMPORTED2, ixData;
  var init_IX2DataReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2DataReducer.ts"() {
      "use strict";
      init_shared_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED2 } = IX2EngineActionTypes_exports);
      ixData = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED2: {
            return action.payload.ixData || Object.freeze({});
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      exports.clone = clone;
      exports.addLast = addLast2;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn2;
      exports.set = set3;
      exports.setIn = setIn4;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge3;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn4;
      exports.omit = omit;
      exports.addDefaults = addDefaults;
      var INVALID_ARGS = "INVALID_ARGS";
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        var keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty2 = {}.hasOwnProperty;
      function clone(obj) {
        if (Array.isArray(obj))
          return obj.slice();
        var keys = getKeysAndSymbols(obj);
        var out = {};
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function doMerge(fAddDefaults, fDeep, first) {
        var out = first;
        !(out != null) && throwStr(false ? "At least one object should be provided to merge()" : INVALID_ARGS);
        var fChanged = false;
        for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
          rest[_key - 3] = arguments[_key];
        }
        for (var idx = 0; idx < rest.length; idx++) {
          var obj = rest[idx];
          if (obj == null)
            continue;
          var keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (var j = 0; j <= keys.length; j++) {
            var key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            var nextVal = obj[key];
            if (fDeep && isObject(out[key]) && isObject(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      function isObject(o) {
        var type = typeof o === "undefined" ? "undefined" : _typeof(o);
        return o != null && (type === "object" || type === "function");
      }
      function addLast2(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        var len = array.length;
        var result = Array(len);
        for (var i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn2(obj, path) {
        !Array.isArray(path) && throwStr(false ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        if (obj == null)
          return void 0;
        var ptr = obj;
        for (var i = 0; i < path.length; i++) {
          var key = path[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set3(obj, key, val) {
        var fallback = typeof key === "number" ? [] : {};
        var finalObj = obj == null ? fallback : obj;
        if (finalObj[key] === val)
          return finalObj;
        var obj2 = clone(finalObj);
        obj2[key] = val;
        return obj2;
      }
      function doSetIn(obj, path, val, idx) {
        var newValue = void 0;
        var key = path[idx];
        if (idx === path.length - 1) {
          newValue = val;
        } else {
          var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path, val, idx + 1);
        }
        return set3(obj, key, newValue);
      }
      function setIn4(obj, path, val) {
        if (!path.length)
          return val;
        return doSetIn(obj, path, val, 0);
      }
      function update(obj, key, fnUpdate) {
        var prevVal = obj == null ? void 0 : obj[key];
        var nextVal = fnUpdate(prevVal);
        return set3(obj, key, nextVal);
      }
      function updateIn(obj, path, fnUpdate) {
        var prevVal = getIn2(obj, path);
        var nextVal = fnUpdate(prevVal);
        return setIn4(obj, path, nextVal);
      }
      function merge3(a, b, c, d, e, f) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 6 ? _len2 - 6 : 0), _key2 = 6; _key2 < _len2; _key2++) {
          rest[_key2 - 6] = arguments[_key2];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, false, a, b, c, d, e, f].concat(rest)) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f) {
        for (var _len3 = arguments.length, rest = Array(_len3 > 6 ? _len3 - 6 : 0), _key3 = 6; _key3 < _len3; _key3++) {
          rest[_key3 - 6] = arguments[_key3];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, false, true, a, b, c, d, e, f].concat(rest)) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn4(a, path, b, c, d, e, f) {
        var prevVal = getIn2(a, path);
        if (prevVal == null)
          prevVal = {};
        var nextVal = void 0;
        for (var _len4 = arguments.length, rest = Array(_len4 > 7 ? _len4 - 7 : 0), _key4 = 7; _key4 < _len4; _key4++) {
          rest[_key4 - 7] = arguments[_key4];
        }
        if (rest.length) {
          nextVal = doMerge.call.apply(doMerge, [null, false, false, prevVal, b, c, d, e, f].concat(rest));
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn4(a, path, nextVal);
      }
      function omit(obj, attrs) {
        var omitList = Array.isArray(attrs) ? attrs : [attrs];
        var fDoSomething = false;
        for (var i = 0; i < omitList.length; i++) {
          if (hasOwnProperty2.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        var out = {};
        var keys = getKeysAndSymbols(obj);
        for (var _i = 0; _i < keys.length; _i++) {
          var key = keys[_i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f) {
        for (var _len5 = arguments.length, rest = Array(_len5 > 6 ? _len5 - 6 : 0), _key5 = 6; _key5 < _len5; _key5++) {
          rest[_key5 - 6] = arguments[_key5];
        }
        return rest.length ? doMerge.call.apply(doMerge, [null, true, false, a, b, c, d, e, f].concat(rest)) : doMerge(true, false, a, b, c, d, e, f);
      }
      var timm = {
        clone,
        addLast: addLast2,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt,
        replaceAt,
        getIn: getIn2,
        // eslint-disable-next-line object-shorthand
        set: set3,
        // so that flow doesn't complain
        setIn: setIn4,
        update,
        updateIn,
        merge: merge3,
        mergeDeep,
        mergeIn: mergeIn4,
        omit,
        addDefaults
      };
      exports.default = timm;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2RequestReducer.ts
  var import_timm, IX2_PREVIEW_REQUESTED2, IX2_PLAYBACK_REQUESTED2, IX2_STOP_REQUESTED2, IX2_CLEAR_REQUESTED2, initialState, stateKeys, ixRequest;
  var init_IX2RequestReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2RequestReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_timm = __toESM(require_timm());
      ({
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED2,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED2,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED2,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED2
      } = IX2EngineActionTypes_exports);
      initialState = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      };
      stateKeys = Object.create(null, {
        [IX2_PREVIEW_REQUESTED2]: { value: "preview" },
        [IX2_PLAYBACK_REQUESTED2]: { value: "playback" },
        [IX2_STOP_REQUESTED2]: { value: "stop" },
        [IX2_CLEAR_REQUESTED2]: { value: "clear" }
      });
      ixRequest = (state = initialState, action) => {
        if (action.type in stateKeys) {
          const key = [stateKeys[action.type]];
          return (0, import_timm.setIn)(state, [key], { ...action.payload });
        }
        return state;
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2SessionReducer.ts
  var import_timm2, IX2_SESSION_INITIALIZED2, IX2_SESSION_STARTED2, IX2_TEST_FRAME_RENDERED2, IX2_SESSION_STOPPED2, IX2_EVENT_LISTENER_ADDED2, IX2_EVENT_STATE_CHANGED2, IX2_ANIMATION_FRAME_CHANGED2, IX2_ACTION_LIST_PLAYBACK_CHANGED2, IX2_VIEWPORT_WIDTH_CHANGED2, IX2_MEDIA_QUERIES_DEFINED2, initialState2, TEST_FRAME_STEPS_SIZE, ixSession;
  var init_IX2SessionReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2SessionReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_timm2 = __toESM(require_timm());
      ({
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED2,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED2,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED2,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED2,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED2,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED2,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED2,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED2,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED2
      } = IX2EngineActionTypes_exports);
      initialState2 = {
        active: false,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: false,
        hasDefinedMediaQueries: false,
        reducedMotion: false
      };
      TEST_FRAME_STEPS_SIZE = 20;
      ixSession = (state = initialState2, action) => {
        switch (action.type) {
          case IX2_SESSION_INITIALIZED2: {
            const { hasBoundaryNodes, reducedMotion } = action.payload;
            return (0, import_timm2.merge)(state, {
              hasBoundaryNodes,
              reducedMotion
            });
          }
          case IX2_SESSION_STARTED2: {
            return (0, import_timm2.set)(state, "active", true);
          }
          case IX2_TEST_FRAME_RENDERED2: {
            const {
              payload: { step = TEST_FRAME_STEPS_SIZE }
            } = action;
            return (0, import_timm2.set)(state, "tick", state.tick + step);
          }
          case IX2_SESSION_STOPPED2: {
            return initialState2;
          }
          case IX2_ANIMATION_FRAME_CHANGED2: {
            const {
              payload: { now }
            } = action;
            return (0, import_timm2.set)(state, "tick", now);
          }
          case IX2_EVENT_LISTENER_ADDED2: {
            const eventListeners = (0, import_timm2.addLast)(state.eventListeners, action.payload);
            return (0, import_timm2.set)(state, "eventListeners", eventListeners);
          }
          case IX2_EVENT_STATE_CHANGED2: {
            const { stateKey, newState } = action.payload;
            return (0, import_timm2.setIn)(state, ["eventState", stateKey], newState);
          }
          case IX2_ACTION_LIST_PLAYBACK_CHANGED2: {
            const { actionListId, isPlaying } = action.payload;
            return (0, import_timm2.setIn)(state, ["playbackState", actionListId], isPlaying);
          }
          case IX2_VIEWPORT_WIDTH_CHANGED2: {
            const { width, mediaQueries } = action.payload;
            const mediaQueryCount = mediaQueries.length;
            let mediaQueryKey = null;
            for (let i = 0; i < mediaQueryCount; i++) {
              const { key, min, max } = mediaQueries[i];
              if (width >= min && width <= max) {
                mediaQueryKey = key;
                break;
              }
            }
            return (0, import_timm2.merge)(state, {
              viewportWidth: width,
              mediaQueryKey
            });
          }
          case IX2_MEDIA_QUERIES_DEFINED2: {
            return (0, import_timm2.set)(state, "hasDefinedMediaQueries", true);
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set3) {
        var index = -1, result = Array(set3.size);
        set3.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty2.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set = getNative(root, "Set");
      module.exports = Set;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get3(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get3;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get3 = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get3(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createFind.js
  var require_createFind = __commonJS({
    "node_modules/lodash/_createFind.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var isArrayLike = require_isArrayLike();
      var keys = require_keys();
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object(collection);
          if (!isArrayLike(collection)) {
            var iteratee = baseIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
        };
      }
      module.exports = createFind;
    }
  });

  // node_modules/lodash/_baseFindIndex.js
  var require_baseFindIndex = __commonJS({
    "node_modules/lodash/_baseFindIndex.js"(exports, module) {
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      module.exports = baseFindIndex;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/toFinite.js
  var require_toFinite = __commonJS({
    "node_modules/lodash/toFinite.js"(exports, module) {
      var toNumber = require_toNumber();
      var INFINITY = 1 / 0;
      var MAX_INTEGER = 17976931348623157e292;
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      module.exports = toFinite;
    }
  });

  // node_modules/lodash/toInteger.js
  var require_toInteger = __commonJS({
    "node_modules/lodash/toInteger.js"(exports, module) {
      var toFinite = require_toFinite();
      function toInteger(value) {
        var result = toFinite(value), remainder = result % 1;
        return result === result ? remainder ? result - remainder : result : 0;
      }
      module.exports = toInteger;
    }
  });

  // node_modules/lodash/findIndex.js
  var require_findIndex = __commonJS({
    "node_modules/lodash/findIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index);
      }
      module.exports = findIndex;
    }
  });

  // node_modules/lodash/find.js
  var require_find = __commonJS({
    "node_modules/lodash/find.js"(exports, module) {
      var createFind = require_createFind();
      var findIndex = require_findIndex();
      var find3 = createFind(findIndex);
      module.exports = find3;
    }
  });

  // packages/systems/ix2/shared/logic/IX2BrowserSupport.ts
  var IX2BrowserSupport_exports = {};
  __export(IX2BrowserSupport_exports, {
    ELEMENT_MATCHES: () => ELEMENT_MATCHES,
    FLEX_PREFIXED: () => FLEX_PREFIXED,
    IS_BROWSER_ENV: () => IS_BROWSER_ENV,
    TRANSFORM_PREFIXED: () => TRANSFORM_PREFIXED,
    TRANSFORM_STYLE_PREFIXED: () => TRANSFORM_STYLE_PREFIXED,
    withBrowser: () => withBrowser
  });
  var import_find, IS_BROWSER_ENV, withBrowser, ELEMENT_MATCHES, FLEX_PREFIXED, TRANSFORM_PREFIXED, TRANSFORM_PREFIX, TRANSFORM_STYLE_PREFIXED;
  var init_IX2BrowserSupport = __esm({
    "packages/systems/ix2/shared/logic/IX2BrowserSupport.ts"() {
      "use strict";
      import_find = __toESM(require_find());
      IS_BROWSER_ENV = typeof window !== "undefined";
      withBrowser = (fn, fallback) => {
        if (IS_BROWSER_ENV) {
          return fn();
        }
        return fallback;
      };
      ELEMENT_MATCHES = withBrowser(() => {
        return (0, import_find.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector"
          ],
          (key) => key in Element.prototype
        );
      });
      FLEX_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        const values = [
          "flex",
          "-webkit-flex",
          "-ms-flexbox",
          "-moz-box",
          "-webkit-box"
        ];
        const none = "";
        try {
          const { length } = values;
          for (let i = 0; i < length; i++) {
            const value = values[i];
            el.style.display = value;
            if (el.style.display === value) {
              return value;
            }
          }
          return none;
        } catch (err) {
          return none;
        }
      }, "flex");
      TRANSFORM_PREFIXED = withBrowser(() => {
        const el = document.createElement("i");
        if (el.style.transform == null) {
          const prefixes = ["Webkit", "Moz", "ms"];
          const suffix = "Transform";
          const { length } = prefixes;
          for (let i = 0; i < length; i++) {
            const prop = prefixes[i] + suffix;
            if (el.style[prop] !== void 0) {
              return prop;
            }
          }
        }
        return "transform";
      }, "transform");
      TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split("transform")[0];
      TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + "TransformStyle" : "transformStyle";
    }
  });

  // node_modules/bezier-easing/src/index.js
  var require_src = __commonJS({
    "node_modules/bezier-easing/src/index.js"(exports, module) {
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      module.exports = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) {
          for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
          }
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing3(x) {
          if (mX1 === mY1 && mX2 === mY2) {
            return x;
          }
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
    }
  });

  // packages/systems/ix2/shared/logic/IX2Easings.ts
  var IX2Easings_exports = {};
  __export(IX2Easings_exports, {
    bounce: () => bounce,
    bouncePast: () => bouncePast,
    ease: () => ease,
    easeIn: () => easeIn,
    easeInOut: () => easeInOut,
    easeOut: () => easeOut,
    inBack: () => inBack,
    inCirc: () => inCirc,
    inCubic: () => inCubic,
    inElastic: () => inElastic,
    inExpo: () => inExpo,
    inOutBack: () => inOutBack,
    inOutCirc: () => inOutCirc,
    inOutCubic: () => inOutCubic,
    inOutElastic: () => inOutElastic,
    inOutExpo: () => inOutExpo,
    inOutQuad: () => inOutQuad,
    inOutQuart: () => inOutQuart,
    inOutQuint: () => inOutQuint,
    inOutSine: () => inOutSine,
    inQuad: () => inQuad,
    inQuart: () => inQuart,
    inQuint: () => inQuint,
    inSine: () => inSine,
    outBack: () => outBack,
    outBounce: () => outBounce,
    outCirc: () => outCirc,
    outCubic: () => outCubic,
    outElastic: () => outElastic,
    outExpo: () => outExpo,
    outQuad: () => outQuad,
    outQuart: () => outQuart,
    outQuint: () => outQuint,
    outSine: () => outSine,
    swingFrom: () => swingFrom,
    swingFromTo: () => swingFromTo,
    swingTo: () => swingTo
  });
  function inQuad(pos) {
    return Math.pow(pos, 2);
  }
  function outQuad(pos) {
    return -(Math.pow(pos - 1, 2) - 1);
  }
  function inOutQuad(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 2);
    }
    return -0.5 * ((pos -= 2) * pos - 2);
  }
  function inCubic(pos) {
    return Math.pow(pos, 3);
  }
  function outCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
  }
  function inOutCubic(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    }
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  }
  function inQuart(pos) {
    return Math.pow(pos, 4);
  }
  function outQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
  }
  function inOutQuart(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 4);
    }
    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
  }
  function inQuint(pos) {
    return Math.pow(pos, 5);
  }
  function outQuint(pos) {
    return Math.pow(pos - 1, 5) + 1;
  }
  function inOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  }
  function inSine(pos) {
    return -Math.cos(pos * (Math.PI / 2)) + 1;
  }
  function outSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
  }
  function inOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
  }
  function inExpo(pos) {
    return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
  }
  function outExpo(pos) {
    return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
  }
  function inOutExpo(pos) {
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(2, 10 * (pos - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
  }
  function inCirc(pos) {
    return -(Math.sqrt(1 - pos * pos) - 1);
  }
  function outCirc(pos) {
    return Math.sqrt(1 - Math.pow(pos - 1, 2));
  }
  function inOutCirc(pos) {
    if ((pos /= 0.5) < 1) {
      return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
  }
  function outBounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function inBack(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function outBack(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function inOutBack(pos) {
    let s = magicSwing;
    if ((pos /= 0.5) < 1) {
      return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
    }
    return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function inElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
  }
  function outElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if (pos === 1) {
      return 1;
    }
    if (!p) {
      p = 0.3;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
  }
  function inOutElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
      return 0;
    }
    if ((pos /= 1 / 2) === 2) {
      return 1;
    }
    if (!p) {
      p = 0.3 * 1.5;
    }
    if (a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (pos < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
  }
  function swingFromTo(pos) {
    let s = magicSwing;
    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
  }
  function swingFrom(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
  }
  function swingTo(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
  }
  function bounce(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
      return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
  }
  function bouncePast(pos) {
    if (pos < 1 / 2.75) {
      return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
      return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
    } else if (pos < 2.5 / 2.75) {
      return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
    } else {
      return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    }
  }
  var import_bezier_easing, magicSwing, ease, easeIn, easeOut, easeInOut;
  var init_IX2Easings = __esm({
    "packages/systems/ix2/shared/logic/IX2Easings.ts"() {
      "use strict";
      import_bezier_easing = __toESM(require_src());
      magicSwing = 1.70158;
      ease = (0, import_bezier_easing.default)(0.25, 0.1, 0.25, 1);
      easeIn = (0, import_bezier_easing.default)(0.42, 0, 1, 1);
      easeOut = (0, import_bezier_easing.default)(0, 0, 0.58, 1);
      easeInOut = (0, import_bezier_easing.default)(0.42, 0, 0.58, 1);
    }
  });

  // packages/systems/ix2/shared/logic/IX2EasingUtils.ts
  var IX2EasingUtils_exports = {};
  __export(IX2EasingUtils_exports, {
    applyEasing: () => applyEasing,
    createBezierEasing: () => createBezierEasing,
    optimizeFloat: () => optimizeFloat
  });
  function optimizeFloat(value, digits = 5, base = 10) {
    const pow = Math.pow(base, digits);
    const float = Number(Math.round(value * pow) / pow);
    return Math.abs(float) > 1e-4 ? float : 0;
  }
  function createBezierEasing(easing) {
    return (0, import_bezier_easing2.default)(...easing);
  }
  function applyEasing(easing, position, customEasingFn) {
    if (position === 0) {
      return 0;
    }
    if (position === 1) {
      return 1;
    }
    if (customEasingFn) {
      return optimizeFloat(position > 0 ? customEasingFn(position) : position);
    }
    return optimizeFloat(
      position > 0 && easing && IX2Easings_exports[easing] ? IX2Easings_exports[easing](position) : position
    );
  }
  var import_bezier_easing2;
  var init_IX2EasingUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2EasingUtils.ts"() {
      "use strict";
      init_IX2Easings();
      import_bezier_easing2 = __toESM(require_src());
    }
  });

  // packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts
  var IX2ElementsReducer_exports = {};
  __export(IX2ElementsReducer_exports, {
    createElementState: () => createElementState,
    ixElements: () => ixElements,
    mergeActionState: () => mergeActionState
  });
  function createElementState(state, ref, refType, elementId, actionItem) {
    const refId = refType === PLAIN_OBJECT2 ? (0, import_timm3.getIn)(actionItem, ["config", "target", "objectId"]) : null;
    return (0, import_timm3.mergeIn)(state, [elementId], {
      id: elementId,
      ref,
      refId,
      refType
    });
  }
  function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
    const units = pickUnits(actionItem);
    const mergePath = [elementId, refState, actionTypeId];
    return (0, import_timm3.mergeIn)(state, mergePath, actionState, units);
  }
  function pickUnits(actionItem) {
    const { config } = actionItem;
    return valueUnitPairs.reduce((result, pair) => {
      const valueKey = pair[0];
      const unitKey = pair[1];
      const configValue = config[valueKey];
      const configUnit = config[unitKey];
      if (configValue != null && configUnit != null) {
        result[unitKey] = configUnit;
      }
      return result;
    }, {});
  }
  var import_timm3, HTML_ELEMENT2, PLAIN_OBJECT2, ABSTRACT_NODE2, CONFIG_X_VALUE2, CONFIG_Y_VALUE2, CONFIG_Z_VALUE2, CONFIG_VALUE2, CONFIG_X_UNIT2, CONFIG_Y_UNIT2, CONFIG_Z_UNIT2, CONFIG_UNIT2, IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED2, initialState3, refState, ixElements, valueUnitPairs;
  var init_IX2ElementsReducer = __esm({
    "packages/systems/ix2/shared/reducers/IX2ElementsReducer.ts"() {
      "use strict";
      import_timm3 = __toESM(require_timm());
      init_shared_constants();
      ({
        HTML_ELEMENT: HTML_ELEMENT2,
        PLAIN_OBJECT: PLAIN_OBJECT2,
        ABSTRACT_NODE: ABSTRACT_NODE2,
        CONFIG_X_VALUE: CONFIG_X_VALUE2,
        CONFIG_Y_VALUE: CONFIG_Y_VALUE2,
        CONFIG_Z_VALUE: CONFIG_Z_VALUE2,
        CONFIG_VALUE: CONFIG_VALUE2,
        CONFIG_X_UNIT: CONFIG_X_UNIT2,
        CONFIG_Y_UNIT: CONFIG_Y_UNIT2,
        CONFIG_Z_UNIT: CONFIG_Z_UNIT2,
        CONFIG_UNIT: CONFIG_UNIT2
      } = IX2EngineConstants_exports);
      ({ IX2_SESSION_STOPPED: IX2_SESSION_STOPPED3, IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED2, IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED2 } = IX2EngineActionTypes_exports);
      initialState3 = {};
      refState = "refState";
      ixElements = (state = initialState3, action = {}) => {
        switch (action.type) {
          case IX2_SESSION_STOPPED3: {
            return initialState3;
          }
          case IX2_INSTANCE_ADDED2: {
            const {
              elementId,
              element: ref,
              origin,
              actionItem,
              refType
            } = action.payload;
            const { actionTypeId } = actionItem;
            let newState = state;
            if ((0, import_timm3.getIn)(newState, [elementId, ref]) !== ref) {
              newState = createElementState(
                newState,
                ref,
                refType,
                elementId,
                actionItem
              );
            }
            return mergeActionState(
              newState,
              elementId,
              actionTypeId,
              origin,
              actionItem
            );
          }
          case IX2_ELEMENT_STATE_CHANGED2: {
            const { elementId, actionTypeId, current, actionItem } = action.payload;
            return mergeActionState(
              state,
              elementId,
              actionTypeId,
              current,
              actionItem
            );
          }
          default: {
            return state;
          }
        }
      };
      valueUnitPairs = [
        [CONFIG_X_VALUE2, CONFIG_X_UNIT2],
        [CONFIG_Y_VALUE2, CONFIG_Y_UNIT2],
        [CONFIG_Z_VALUE2, CONFIG_Z_UNIT2],
        [CONFIG_VALUE2, CONFIG_UNIT2]
      ];
    }
  });

  // packages/systems/ix2/plugins/IX2Lottie.js
  var require_IX2Lottie = __commonJS({
    "packages/systems/ix2/plugins/IX2Lottie.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var getPluginConfig2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = (element, actionItem) => {
        if (actionItem.config.duration !== "auto") {
          return null;
        }
        const duration = parseFloat(element.getAttribute("data-duration"));
        if (duration > 0) {
          return duration * 1e3;
        }
        return parseFloat(element.getAttribute("data-default-duration")) * 1e3;
      };
      exports.getPluginDuration = getPluginDuration3;
      var getPluginOrigin2 = (refState2) => {
        return refState2 || {
          value: 0
        };
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return {
          value: actionItemConfig.value
        };
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
        instance.setSubframe(true);
        return instance;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (pluginInstance, refState2, actionItem) => {
        if (!pluginInstance) {
          return;
        }
        const percent = refState2[actionItem.actionTypeId].value / 100;
        pluginInstance.goToFrame(pluginInstance.frames * percent);
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = (element) => {
        const instance = window.Webflow.require("lottie").createInstance(element);
        instance.stop();
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/IX2Spline.js
  var require_IX2Spline = __commonJS({
    "packages/systems/ix2/plugins/IX2Spline.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var queryContainerElement = (elementId) => document.querySelector(`[data-w-id="${elementId}"]`);
      var getFrontendModule = () => window.Webflow.require("spline");
      var difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration3;
      var DEFAULT_VALUES = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      });
      var getPluginOrigin2 = (refState2, actionItem) => {
        const destination = actionItem.config.value;
        const destinationKeys = Object.keys(destination);
        if (refState2) {
          const stateKeys2 = Object.keys(refState2);
          const diffKeys = difference(destinationKeys, stateKeys2);
          if (diffKeys.length) {
            const origin2 = diffKeys.reduce((result, key) => {
              result[key] = DEFAULT_VALUES[key];
              return result;
            }, refState2);
            return origin2;
          }
          return refState2;
        }
        const origin = destinationKeys.reduce((result, key) => {
          result[key] = DEFAULT_VALUES[key];
          return result;
        }, {});
        return origin;
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = (element, actionItem) => {
        var _actionItem$config;
        const pluginElementId = actionItem === null || actionItem === void 0 || (_actionItem$config = actionItem.config) === null || _actionItem$config === void 0 || (_actionItem$config = _actionItem$config.target) === null || _actionItem$config === void 0 ? void 0 : _actionItem$config.pluginElement;
        return pluginElementId ? queryContainerElement(pluginElementId) : null;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (containerElement, refState2, actionItem) => {
        const frontendModule = getFrontendModule();
        const instance = frontendModule.getInstance(containerElement);
        const objectId = actionItem.config.target.objectId;
        const renderSpline = (spline) => {
          if (!spline) {
            throw new Error("Invalid spline app passed to renderSpline");
          }
          const obj = objectId && spline.findObjectById(objectId);
          if (!obj) {
            return;
          }
          const {
            PLUGIN_SPLINE: props
          } = refState2;
          if (props.positionX != null) {
            obj.position.x = props.positionX;
          }
          if (props.positionY != null) {
            obj.position.y = props.positionY;
          }
          if (props.positionZ != null) {
            obj.position.z = props.positionZ;
          }
          if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
          }
          if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
          }
          if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
          }
          if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
          }
          if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
          }
          if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
          }
        };
        if (instance) {
          renderSpline(instance.spline);
        } else {
          frontendModule.setLoadHandler(containerElement, renderSpline);
        }
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = () => {
        return null;
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/shared-utils/normalizeColor.js
  var require_normalizeColor = __commonJS({
    "packages/systems/ix2/shared-utils/normalizeColor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.normalizeColor = normalizeColor2;
      var colorNamesObj = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };
      function normalizeColor2(inputColor) {
        let red;
        let green;
        let blue;
        let alpha = 1;
        const rawColor = inputColor.replace(/\s/g, "").toLowerCase();
        const namedColor = typeof colorNamesObj[rawColor] === "string" ? colorNamesObj[rawColor].toLowerCase() : null;
        const cleanColor = namedColor || rawColor;
        if (cleanColor.startsWith("#")) {
          const hex = cleanColor.substring(1);
          if (hex.length === 3) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
          } else if (hex.length === 6) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
          }
        } else if (cleanColor.startsWith("rgba")) {
          const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbaValues[0], 10);
          green = parseInt(rgbaValues[1], 10);
          blue = parseInt(rgbaValues[2], 10);
          alpha = parseFloat(rgbaValues[3]);
        } else if (cleanColor.startsWith("rgb")) {
          const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(",");
          red = parseInt(rgbValues[0], 10);
          green = parseInt(rgbValues[1], 10);
          blue = parseInt(rgbValues[2], 10);
        } else if (cleanColor.startsWith("hsla")) {
          const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslaValues[0]);
          const s = parseFloat(hslaValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslaValues[2].replace("%", "")) / 100;
          alpha = parseFloat(hslaValues[3]);
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        } else if (cleanColor.startsWith("hsl")) {
          const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(",");
          const h = parseFloat(hslValues[0]);
          const s = parseFloat(hslValues[1].replace("%", "")) / 100;
          const l = parseFloat(hslValues[2].replace("%", "")) / 100;
          const C = (1 - Math.abs(2 * l - 1)) * s;
          const X = C * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - C / 2;
          let R;
          let G;
          let B;
          if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
          } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
          } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
          } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
          } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
          } else {
            R = C;
            G = 0;
            B = X;
          }
          red = Math.round((R + m) * 255);
          green = Math.round((G + m) * 255);
          blue = Math.round((B + m) * 255);
        }
        if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
          throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
        }
        return {
          red,
          green,
          blue,
          alpha
        };
      }
    }
  });

  // packages/systems/ix2/plugins/IX2Variable.js
  var require_IX2Variable = __commonJS({
    "packages/systems/ix2/plugins/IX2Variable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderPlugin = exports.getPluginOrigin = exports.getPluginDuration = exports.getPluginDestination = exports.getPluginConfig = exports.createPluginInstance = exports.clearPlugin = void 0;
      var _normalizeColor = require_normalizeColor();
      var getPluginConfig2 = (actionItemConfig, key) => {
        return actionItemConfig.value[key];
      };
      exports.getPluginConfig = getPluginConfig2;
      var getPluginDuration3 = () => {
        return null;
      };
      exports.getPluginDuration = getPluginDuration3;
      var getPluginOrigin2 = (refState2, actionItem) => {
        if (refState2) {
          return refState2;
        }
        const destination = actionItem.config.value;
        const objectId = actionItem.config.target.objectId;
        const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
        if (destination.size != null) {
          return {
            size: parseInt(computedValue, 10)
          };
        }
        if (destination.red != null && destination.green != null && destination.blue != null) {
          return (0, _normalizeColor.normalizeColor)(computedValue);
        }
      };
      exports.getPluginOrigin = getPluginOrigin2;
      var getPluginDestination2 = (actionItemConfig) => {
        return actionItemConfig.value;
      };
      exports.getPluginDestination = getPluginDestination2;
      var createPluginInstance3 = () => {
        return null;
      };
      exports.createPluginInstance = createPluginInstance3;
      var renderPlugin2 = (_, refState2, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        const unit = actionItem.config.value.unit;
        const {
          PLUGIN_VARIABLE: props
        } = refState2;
        const {
          size: size2,
          red,
          green,
          blue,
          alpha
        } = props;
        let value;
        if (size2 != null) {
          value = size2 + unit;
        }
        if (red != null && blue != null && green != null && alpha != null) {
          value = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        }
        if (value != null) {
          document.documentElement.style.setProperty(objectId, value);
        }
      };
      exports.renderPlugin = renderPlugin2;
      var clearPlugin2 = (ref, actionItem) => {
        const objectId = actionItem.config.target.objectId;
        document.documentElement.style.removeProperty(objectId);
      };
      exports.clearPlugin = clearPlugin2;
    }
  });

  // packages/systems/ix2/plugins/index.js
  var require_plugins = __commonJS({
    "packages/systems/ix2/plugins/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.pluginMethodMap = void 0;
      var _sharedConstants = (init_shared_constants(), __toCommonJS(shared_constants_exports));
      var lottie = _interopRequireWildcard(require_IX2Lottie());
      var spline = _interopRequireWildcard(require_IX2Spline());
      var variable = _interopRequireWildcard(require_IX2Variable());
      var pluginMethodMap2 = exports.pluginMethodMap = /* @__PURE__ */ new Map([[_sharedConstants.ActionTypeConsts.PLUGIN_LOTTIE, {
        ...lottie
      }], [_sharedConstants.ActionTypeConsts.PLUGIN_SPLINE, {
        ...spline
      }], [_sharedConstants.ActionTypeConsts.PLUGIN_VARIABLE, {
        ...variable
      }]]);
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts
  var IX2VanillaPlugins_exports = {};
  __export(IX2VanillaPlugins_exports, {
    clearPlugin: () => clearPlugin,
    createPluginInstance: () => createPluginInstance,
    getPluginConfig: () => getPluginConfig,
    getPluginDestination: () => getPluginDestination,
    getPluginDuration: () => getPluginDuration,
    getPluginOrigin: () => getPluginOrigin,
    isPluginType: () => isPluginType,
    renderPlugin: () => renderPlugin
  });
  function isPluginType(actionTypeId) {
    return import_plugins.pluginMethodMap.has(actionTypeId);
  }
  var import_plugins, pluginMethod, getPluginConfig, getPluginOrigin, getPluginDuration, getPluginDestination, createPluginInstance, renderPlugin, clearPlugin;
  var init_IX2VanillaPlugins = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaPlugins.ts"() {
      "use strict";
      init_IX2BrowserSupport();
      import_plugins = __toESM(require_plugins());
      pluginMethod = (methodName) => (actionTypeId) => {
        if (!IS_BROWSER_ENV) {
          return () => null;
        }
        const plugin = import_plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
          throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
          throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
      };
      getPluginConfig = pluginMethod("getPluginConfig");
      getPluginOrigin = pluginMethod("getPluginOrigin");
      getPluginDuration = pluginMethod("getPluginDuration");
      getPluginDestination = pluginMethod("getPluginDestination");
      createPluginInstance = pluginMethod("createPluginInstance");
      renderPlugin = pluginMethod("renderPlugin");
      clearPlugin = pluginMethod("clearPlugin");
    }
  });

  // node_modules/lodash/defaultTo.js
  var require_defaultTo = __commonJS({
    "node_modules/lodash/defaultTo.js"(exports, module) {
      function defaultTo2(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      module.exports = defaultTo2;
    }
  });

  // node_modules/lodash/_arrayReduce.js
  var require_arrayReduce = __commonJS({
    "node_modules/lodash/_arrayReduce.js"(exports, module) {
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      module.exports = arrayReduce;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseReduce.js
  var require_baseReduce = __commonJS({
    "node_modules/lodash/_baseReduce.js"(exports, module) {
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      module.exports = baseReduce;
    }
  });

  // node_modules/lodash/reduce.js
  var require_reduce = __commonJS({
    "node_modules/lodash/reduce.js"(exports, module) {
      var arrayReduce = require_arrayReduce();
      var baseEach = require_baseEach();
      var baseIteratee = require_baseIteratee();
      var baseReduce = require_baseReduce();
      var isArray = require_isArray();
      function reduce2(collection, iteratee, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
      }
      module.exports = reduce2;
    }
  });

  // node_modules/lodash/findLastIndex.js
  var require_findLastIndex = __commonJS({
    "node_modules/lodash/findLastIndex.js"(exports, module) {
      var baseFindIndex = require_baseFindIndex();
      var baseIteratee = require_baseIteratee();
      var toInteger = require_toInteger();
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== void 0) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
      }
      module.exports = findLastIndex;
    }
  });

  // node_modules/lodash/findLast.js
  var require_findLast = __commonJS({
    "node_modules/lodash/findLast.js"(exports, module) {
      var createFind = require_createFind();
      var findLastIndex = require_findLastIndex();
      var findLast2 = createFind(findLastIndex);
      module.exports = findLast2;
    }
  });

  // packages/systems/ix2/shared/logic/shallowEqual.ts
  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
  }
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
        !hasOwnProperty.call(objB, keysA[i]) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
        !is(objA[keysA[i]], objB[keysA[i]])
      ) {
        return false;
      }
    }
    return true;
  }
  var hasOwnProperty, shallowEqual_default;
  var init_shallowEqual = __esm({
    "packages/systems/ix2/shared/logic/shallowEqual.ts"() {
      "use strict";
      hasOwnProperty = Object.prototype.hasOwnProperty;
      shallowEqual_default = shallowEqual;
    }
  });

  // packages/systems/ix2/shared/logic/IX2VanillaUtils.ts
  var IX2VanillaUtils_exports = {};
  __export(IX2VanillaUtils_exports, {
    cleanupHTMLElement: () => cleanupHTMLElement,
    clearAllStyles: () => clearAllStyles,
    clearObjectCache: () => clearObjectCache,
    getActionListProgress: () => getActionListProgress,
    getAffectedElements: () => getAffectedElements,
    getComputedStyle: () => getComputedStyle2,
    getDestinationValues: () => getDestinationValues,
    getElementId: () => getElementId,
    getInstanceId: () => getInstanceId,
    getInstanceOrigin: () => getInstanceOrigin,
    getItemConfigByKey: () => getItemConfigByKey,
    getMaxDurationItemIndex: () => getMaxDurationItemIndex,
    getNamespacedParameterId: () => getNamespacedParameterId,
    getRenderType: () => getRenderType,
    getStyleProp: () => getStyleProp,
    mediaQueriesEqual: () => mediaQueriesEqual,
    observeStore: () => observeStore,
    reduceListToGroup: () => reduceListToGroup,
    reifyState: () => reifyState,
    renderHTMLElement: () => renderHTMLElement,
    shallowEqual: () => shallowEqual_default,
    shouldAllowMediaQuery: () => shouldAllowMediaQuery,
    shouldNamespaceEventParameter: () => shouldNamespaceEventParameter,
    stringifyTarget: () => stringifyTarget
  });
  function clearObjectCache() {
    objectCache.clear();
  }
  function getInstanceId() {
    return "i" + instanceCount++;
  }
  function getElementId(ixElements3, ref) {
    for (const key in ixElements3) {
      const ixEl = ixElements3[key];
      if (ixEl && ixEl.ref === ref) {
        return ixEl.id;
      }
    }
    return "e" + elementCount++;
  }
  function reifyState({ events, actionLists, site } = {}) {
    const eventTypeMap = (0, import_reduce.default)(
      events,
      (result, event) => {
        const { eventTypeId } = event;
        if (!result[eventTypeId]) {
          result[eventTypeId] = {};
        }
        result[eventTypeId][event.id] = event;
        return result;
      },
      {}
    );
    let mediaQueries = site && site.mediaQueries;
    let mediaQueryKeys = [];
    if (mediaQueries) {
      mediaQueryKeys = mediaQueries.map((mq) => mq.key);
    } else {
      mediaQueries = [];
      console.warn(`IX2 missing mediaQueries in site data`);
    }
    return {
      ixData: {
        events,
        actionLists,
        eventTypeMap,
        mediaQueries,
        mediaQueryKeys
      }
    };
  }
  function observeStore({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
    select,
    // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
    onChange,
    comparator = strictEqual
  }) {
    const { getState, subscribe } = store;
    const unsubscribe = subscribe(handleChange);
    let currentState = select(getState());
    function handleChange() {
      const nextState = select(getState());
      if (nextState == null) {
        unsubscribe();
        return;
      }
      if (!comparator(nextState, currentState)) {
        currentState = nextState;
        onChange(currentState, store);
      }
    }
    return unsubscribe;
  }
  function normalizeTarget(target) {
    const type = typeof target;
    if (type === "string") {
      return { id: target };
    } else if (target != null && type === "object") {
      const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
      return { id, objectId, selector, selectorGuids, appliesTo, useEventTarget };
    }
    return {};
  }
  function getAffectedElements({
    config,
    event,
    eventTarget,
    elementRoot,
    elementApi
  }) {
    if (!elementApi) {
      throw new Error("IX2 missing elementApi");
    }
    const { targets } = config;
    if (Array.isArray(targets) && targets.length > 0) {
      return targets.reduce(
        (accumulator, target2) => accumulator.concat(
          getAffectedElements({
            config: { target: target2 },
            event,
            eventTarget,
            elementRoot,
            elementApi
          })
        ),
        []
      );
    }
    const {
      getValidDocument: getValidDocument2,
      getQuerySelector: getQuerySelector2,
      queryDocument: queryDocument2,
      getChildElements: getChildElements2,
      getSiblingElements: getSiblingElements2,
      matchSelector: matchSelector2,
      elementContains: elementContains2,
      isSiblingNode: isSiblingNode2
    } = elementApi;
    const { target } = config;
    if (!target) {
      return [];
    }
    const {
      id,
      objectId,
      selector,
      selectorGuids,
      appliesTo,
      useEventTarget
    } = normalizeTarget(target);
    if (objectId) {
      const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
      return [ref];
    }
    if (appliesTo === EventAppliesTo.PAGE) {
      const doc = getValidDocument2(id);
      return doc ? [doc] : [];
    }
    const overrides = event?.action?.config?.affectedElements ?? {};
    const override = overrides[id || selector] || {};
    const validOverride = Boolean(override.id || override.selector);
    let limitAffectedElements;
    let baseSelector;
    let finalSelector;
    const eventTargetSelector = event && getQuerySelector2(normalizeTarget(event.target));
    if (validOverride) {
      limitAffectedElements = override.limitAffectedElements;
      baseSelector = eventTargetSelector;
      finalSelector = getQuerySelector2(override);
    } else {
      baseSelector = finalSelector = getQuerySelector2({
        id,
        selector,
        selectorGuids
      });
    }
    if (event && useEventTarget) {
      const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [eventTarget] : queryDocument2(eventTargetSelector);
      if (finalSelector) {
        if (useEventTarget === PARENT2) {
          return queryDocument2(finalSelector).filter(
            (parentElement) => eventTargets.some(
              (targetElement) => elementContains2(parentElement, targetElement)
            )
          );
        }
        if (useEventTarget === CHILDREN2) {
          return queryDocument2(finalSelector).filter(
            (childElement) => eventTargets.some(
              (targetElement) => elementContains2(targetElement, childElement)
            )
          );
        }
        if (useEventTarget === SIBLINGS2) {
          return queryDocument2(finalSelector).filter(
            (siblingElement) => eventTargets.some(
              (targetElement) => isSiblingNode2(targetElement, siblingElement)
            )
          );
        }
      }
      return eventTargets;
    }
    if (baseSelector == null || finalSelector == null) {
      return [];
    }
    if (IS_BROWSER_ENV && elementRoot) {
      return queryDocument2(finalSelector).filter(
        (element) => elementRoot.contains(element)
      );
    }
    if (limitAffectedElements === CHILDREN2) {
      return queryDocument2(baseSelector, finalSelector);
    } else if (limitAffectedElements === IMMEDIATE_CHILDREN2) {
      return getChildElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else if (limitAffectedElements === SIBLINGS2) {
      return getSiblingElements2(queryDocument2(baseSelector)).filter(
        matchSelector2(finalSelector)
      );
    } else {
      return queryDocument2(finalSelector);
    }
  }
  function getComputedStyle2({ element, actionItem }) {
    if (!IS_BROWSER_ENV) {
      return {};
    }
    const { actionTypeId } = actionItem;
    switch (actionTypeId) {
      case STYLE_SIZE2:
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
      case GENERAL_DISPLAY:
        return window.getComputedStyle(element);
      default:
        return {};
    }
  }
  function getInstanceOrigin(element, refState2 = {}, computedStyle = {}, actionItem, elementApi) {
    const { getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (isPluginType(actionTypeId)) {
      return getPluginOrigin(actionTypeId)(refState2[actionTypeId], actionItem);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        return (
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]
        );
      }
      case STYLE_FILTER2:
        return getFilterDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.filters
        );
      case STYLE_FONT_VARIATION2:
        return getFontVariationDefaults(
          // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
          refState2[actionItem.actionTypeId],
          actionItem.config.fontVariations
        );
      case STYLE_OPACITY:
        return { value: (0, import_defaultTo.default)(parseFloat(getStyle2(element, OPACITY2)), 1) };
      case STYLE_SIZE2: {
        const inlineWidth = getStyle2(element, WIDTH2);
        const inlineHeight = getStyle2(element, HEIGHT2);
        let widthValue;
        let heightValue;
        if (actionItem.config.widthUnit === AUTO2) {
          widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        } else {
          widthValue = (0, import_defaultTo.default)(
            parseFloat(inlineWidth),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.width)
          );
        }
        if (actionItem.config.heightUnit === AUTO2) {
          heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : (
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        } else {
          heightValue = (0, import_defaultTo.default)(
            parseFloat(inlineHeight),
            // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
            parseFloat(computedStyle.height)
          );
        }
        return {
          widthValue,
          heightValue
        };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR:
        return parseColor({
          element,
          actionTypeId: actionItem.actionTypeId,
          computedStyle,
          getStyle: getStyle2
        });
      case GENERAL_DISPLAY:
        return {
          // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
          value: (0, import_defaultTo.default)(getStyle2(element, DISPLAY2), computedStyle.display)
        };
      case OBJECT_VALUE:
        return refState2[actionItem.actionTypeId] || { value: 0 };
      default: {
        return;
      }
    }
  }
  function getDestinationValues({
    element,
    actionItem,
    elementApi
  }) {
    if (isPluginType(actionItem.actionTypeId)) {
      return getPluginDestination(actionItem.actionTypeId)(actionItem.config);
    }
    switch (actionItem.actionTypeId) {
      case TRANSFORM_MOVE2:
      case TRANSFORM_SCALE2:
      case TRANSFORM_ROTATE2:
      case TRANSFORM_SKEW2: {
        const { xValue, yValue, zValue } = actionItem.config;
        return { xValue, yValue, zValue };
      }
      case STYLE_SIZE2: {
        const { getStyle: getStyle2, setStyle: setStyle2, getProperty: getProperty2 } = elementApi;
        const { widthUnit, heightUnit } = actionItem.config;
        let { widthValue, heightValue } = actionItem.config;
        if (!IS_BROWSER_ENV) {
          return { widthValue, heightValue };
        }
        if (widthUnit === AUTO2) {
          const temp = getStyle2(element, WIDTH2);
          setStyle2(element, WIDTH2, "");
          widthValue = getProperty2(element, "offsetWidth");
          setStyle2(element, WIDTH2, temp);
        }
        if (heightUnit === AUTO2) {
          const temp = getStyle2(element, HEIGHT2);
          setStyle2(element, HEIGHT2, "");
          heightValue = getProperty2(element, "offsetHeight");
          setStyle2(element, HEIGHT2, temp);
        }
        return { widthValue, heightValue };
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
        if (globalSwatchId && globalSwatchId.startsWith("--")) {
          const { getStyle: getStyle2 } = elementApi;
          const value = getStyle2(element, globalSwatchId);
          const normalizedValue = (0, import_normalizeColor.normalizeColor)(value);
          return {
            rValue: normalizedValue.red,
            gValue: normalizedValue.green,
            bValue: normalizedValue.blue,
            aValue: normalizedValue.alpha
          };
        }
        return { rValue, gValue, bValue, aValue };
      }
      case STYLE_FILTER2: {
        return actionItem.config.filters.reduce(
          reduceFilters,
          {}
        );
      }
      case STYLE_FONT_VARIATION2: {
        return actionItem.config.fontVariations.reduce(
          reduceFontVariations,
          {}
        );
      }
      default: {
        const { value } = actionItem.config;
        return { value };
      }
    }
  }
  function getRenderType(actionTypeId) {
    if (/^TRANSFORM_/.test(actionTypeId)) {
      return RENDER_TRANSFORM2;
    }
    if (/^STYLE_/.test(actionTypeId)) {
      return RENDER_STYLE2;
    }
    if (/^GENERAL_/.test(actionTypeId)) {
      return RENDER_GENERAL2;
    }
    if (/^PLUGIN_/.test(actionTypeId)) {
      return RENDER_PLUGIN2;
    }
  }
  function getStyleProp(renderType, actionTypeId) {
    return renderType === RENDER_STYLE2 ? actionTypeId.replace("STYLE_", "").toLowerCase() : null;
  }
  function renderHTMLElement(element, refState2, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
    switch (renderType) {
      case RENDER_TRANSFORM2: {
        return renderTransform(
          element,
          refState2,
          actionState,
          actionItem,
          elementApi
        );
      }
      case RENDER_STYLE2: {
        return renderStyle(
          element,
          refState2,
          actionState,
          actionItem,
          styleProp,
          elementApi
        );
      }
      case RENDER_GENERAL2: {
        return renderGeneral(element, actionItem, elementApi);
      }
      case RENDER_PLUGIN2: {
        const { actionTypeId } = actionItem;
        if (isPluginType(actionTypeId)) {
          return renderPlugin(actionTypeId)(pluginInstance, refState2, actionItem);
        }
      }
    }
  }
  function renderTransform(element, refState2, actionState, actionItem, elementApi) {
    const newTransform = transformKeys.map((actionTypeId) => {
      const defaults = transformDefaults[actionTypeId];
      const {
        xValue = defaults.xValue,
        yValue = defaults.yValue,
        zValue = defaults.zValue,
        xUnit = "",
        yUnit = "",
        zUnit = ""
      } = refState2[actionTypeId] || {};
      switch (actionTypeId) {
        case TRANSFORM_MOVE2:
          return `${TRANSLATE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_SCALE2:
          return `${SCALE_3D2}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
        case TRANSFORM_ROTATE2:
          return `${ROTATE_X2}(${xValue}${xUnit}) ${ROTATE_Y2}(${yValue}${yUnit}) ${ROTATE_Z2}(${zValue}${zUnit})`;
        case TRANSFORM_SKEW2:
          return `${SKEW2}(${xValue}${xUnit}, ${yValue}${yUnit})`;
        default:
          return "";
      }
    }).join(" ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, TRANSFORM_PREFIXED, elementApi);
    setStyle2(element, TRANSFORM_PREFIXED, newTransform);
    if (hasDefined3dTransform(actionItem, actionState)) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, PRESERVE_3D2);
    }
  }
  function renderFilter(element, actionState, actionItemConfig, elementApi) {
    const filterValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => `${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`,
      ""
    );
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FILTER2, elementApi);
    setStyle2(element, FILTER2, filterValue);
  }
  function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
    const fontVariationValue = (0, import_reduce.default)(
      actionState,
      (result, value, type) => {
        result.push(`"${type}" ${value}`);
        return result;
      },
      []
    ).join(", ");
    const { setStyle: setStyle2 } = elementApi;
    addWillChange(element, FONT_VARIATION_SETTINGS2, elementApi);
    setStyle2(element, FONT_VARIATION_SETTINGS2, fontVariationValue);
  }
  function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
    return actionTypeId === TRANSFORM_MOVE2 && zValue !== void 0 || // SCALE_Z
    actionTypeId === TRANSFORM_SCALE2 && zValue !== void 0 || // ROTATE_X or ROTATE_Y
    actionTypeId === TRANSFORM_ROTATE2 && (xValue !== void 0 || yValue !== void 0);
  }
  function getFirstMatch(regex, value) {
    const match = regex.exec(value);
    return match ? match[1] : "";
  }
  function parseColor({ element, actionTypeId, computedStyle, getStyle: getStyle2 }) {
    const prop = colorStyleProps[actionTypeId];
    const inlineValue = getStyle2(element, prop);
    const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
    const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER2);
    return {
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      rValue: (0, import_defaultTo.default)(parseInt(matches[0], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      gValue: (0, import_defaultTo.default)(parseInt(matches[1], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      bValue: (0, import_defaultTo.default)(parseInt(matches[2], 10), 255),
      // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
      aValue: (0, import_defaultTo.default)(parseFloat(matches[3]), 1)
    };
  }
  function renderStyle(element, refState2, actionState, actionItem, styleProp, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case STYLE_SIZE2: {
        let { widthUnit = "", heightUnit = "" } = actionItem.config;
        const { widthValue, heightValue } = actionState;
        if (widthValue !== void 0) {
          if (widthUnit === AUTO2) {
            widthUnit = "px";
          }
          addWillChange(element, WIDTH2, elementApi);
          setStyle2(element, WIDTH2, widthValue + widthUnit);
        }
        if (heightValue !== void 0) {
          if (heightUnit === AUTO2) {
            heightUnit = "px";
          }
          addWillChange(element, HEIGHT2, elementApi);
          setStyle2(element, HEIGHT2, heightValue + heightUnit);
        }
        break;
      }
      case STYLE_FILTER2: {
        renderFilter(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_FONT_VARIATION2: {
        renderFontVariation(element, actionState, actionItem.config, elementApi);
        break;
      }
      case STYLE_BACKGROUND_COLOR:
      case STYLE_BORDER:
      case STYLE_TEXT_COLOR: {
        const prop = colorStyleProps[actionItem.actionTypeId];
        const rValue = Math.round(actionState.rValue);
        const gValue = Math.round(actionState.gValue);
        const bValue = Math.round(actionState.bValue);
        const aValue = actionState.aValue;
        addWillChange(element, prop, elementApi);
        setStyle2(
          element,
          prop,
          aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`
        );
        break;
      }
      default: {
        const { unit = "" } = actionItem.config;
        addWillChange(element, styleProp, elementApi);
        setStyle2(element, styleProp, actionState.value + unit);
        break;
      }
    }
  }
  function renderGeneral(element, actionItem, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    switch (actionItem.actionTypeId) {
      case GENERAL_DISPLAY: {
        const { value } = actionItem.config;
        if (value === FLEX2 && IS_BROWSER_ENV) {
          setStyle2(element, DISPLAY2, FLEX_PREFIXED);
        } else {
          setStyle2(element, DISPLAY2, value);
        }
        return;
      }
    }
  }
  function addWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value) {
      setStyle2(element, WILL_CHANGE2, validProp);
      return;
    }
    const values = value.split(COMMA_DELIMITER2).map(trim);
    if (values.indexOf(validProp) === -1) {
      setStyle2(
        element,
        WILL_CHANGE2,
        values.concat(validProp).join(COMMA_DELIMITER2)
      );
    }
  }
  function removeWillChange(element, prop, elementApi) {
    if (!IS_BROWSER_ENV) {
      return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
      return;
    }
    const { getStyle: getStyle2, setStyle: setStyle2 } = elementApi;
    const value = getStyle2(element, WILL_CHANGE2);
    if (!value || value.indexOf(validProp) === -1) {
      return;
    }
    setStyle2(
      element,
      WILL_CHANGE2,
      value.split(COMMA_DELIMITER2).map(trim).filter((v) => v !== validProp).join(COMMA_DELIMITER2)
    );
  }
  function clearAllStyles({ store, elementApi }) {
    const { ixData: ixData2 } = store.getState();
    const { events = {}, actionLists = {} } = ixData2;
    Object.keys(events).forEach((eventId) => {
      const event = events[eventId];
      const { config } = event.action;
      const { actionListId } = config;
      const actionList = actionLists[actionListId];
      if (actionList) {
        clearActionListStyles({ actionList, event, elementApi });
      }
    });
    Object.keys(actionLists).forEach((actionListId) => {
      clearActionListStyles({ actionList: actionLists[actionListId], elementApi });
    });
  }
  function clearActionListStyles({ actionList = {}, event, elementApi }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    actionItemGroups.forEach((actionGroup) => {
      clearActionGroupStyles({ actionGroup, event, elementApi });
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.forEach((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      continuousActionGroups.forEach((actionGroup) => {
        clearActionGroupStyles({ actionGroup, event, elementApi });
      });
    });
  }
  function clearActionGroupStyles({ actionGroup, event, elementApi }) {
    const { actionItems } = actionGroup;
    actionItems.forEach((actionItem) => {
      const { actionTypeId, config } = actionItem;
      let clearElement;
      if (isPluginType(actionTypeId)) {
        clearElement = (ref) => clearPlugin(actionTypeId)(ref, actionItem);
      } else {
        clearElement = processElementByType({
          effect: clearStyleProp,
          actionTypeId,
          elementApi
        });
      }
      getAffectedElements({ config, event, elementApi }).forEach(clearElement);
    });
  }
  function cleanupHTMLElement(element, actionItem, elementApi) {
    const { setStyle: setStyle2, getStyle: getStyle2 } = elementApi;
    const { actionTypeId } = actionItem;
    if (actionTypeId === STYLE_SIZE2) {
      const { config } = actionItem;
      if (config.widthUnit === AUTO2) {
        setStyle2(element, WIDTH2, "");
      }
      if (config.heightUnit === AUTO2) {
        setStyle2(element, HEIGHT2, "");
      }
    }
    if (getStyle2(element, WILL_CHANGE2)) {
      processElementByType({ effect: removeWillChange, actionTypeId, elementApi })(
        element
      );
    }
  }
  function clearStyleProp(element, prop, elementApi) {
    const { setStyle: setStyle2 } = elementApi;
    removeWillChange(element, prop, elementApi);
    setStyle2(element, prop, "");
    if (prop === TRANSFORM_PREFIXED) {
      setStyle2(element, TRANSFORM_STYLE_PREFIXED, "");
    }
  }
  function getMaxDurationItemIndex(actionItems) {
    let maxDuration = 0;
    let resultIndex = 0;
    actionItems.forEach((actionItem, index) => {
      const { config } = actionItem;
      const total = config.delay + config.duration;
      if (total >= maxDuration) {
        maxDuration = total;
        resultIndex = index;
      }
    });
    return resultIndex;
  }
  function getActionListProgress(actionList, instance) {
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
    let totalDuration = 0;
    let elapsedDuration = 0;
    actionItemGroups.forEach((group, index) => {
      if (useFirstGroupAsInitialState && index === 0) {
        return;
      }
      const { actionItems } = group;
      const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
      const { config, actionTypeId } = carrierItem;
      if (instanceItem.id === carrierItem.id) {
        elapsedDuration = totalDuration + verboseTimeElapsed;
      }
      const duration = getRenderType(actionTypeId) === RENDER_GENERAL2 ? 0 : config.duration;
      totalDuration += config.delay + duration;
    });
    return totalDuration > 0 ? optimizeFloat(elapsedDuration / totalDuration) : 0;
  }
  function reduceListToGroup({ actionList, actionItemId, rawData }) {
    const { actionItemGroups, continuousParameterGroups } = actionList;
    const newActionItems = [];
    const takeItemUntilMatch = (actionItem) => {
      newActionItems.push(
        (0, import_timm4.mergeIn)(actionItem, ["config"], {
          delay: 0,
          duration: 0
        })
      );
      return actionItem.id === actionItemId;
    };
    actionItemGroups && // @ts-expect-error - TS7031 - Binding element 'actionItems' implicitly has an 'any' type.
    actionItemGroups.some(({ actionItems }) => {
      return actionItems.some(takeItemUntilMatch);
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.some((paramGroup) => {
      const { continuousActionGroups } = paramGroup;
      return continuousActionGroups.some(({ actionItems }) => {
        return actionItems.some(takeItemUntilMatch);
      });
    });
    return (0, import_timm4.setIn)(rawData, ["actionLists"], {
      [actionList.id]: {
        id: actionList.id,
        actionItemGroups: [
          {
            actionItems: newActionItems
          }
        ]
      }
    });
  }
  function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
    return eventTypeId === EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === EventTypeConsts.MOUSE_MOVE && basedOn === EventBasedOn.ELEMENT;
  }
  function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
    const namespacedParameterId = eventStateKey + COLON_DELIMITER2 + continuousParameterGroupId;
    return namespacedParameterId;
  }
  function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
    if (mediaQueryKey == null) {
      return true;
    }
    return mediaQueries.indexOf(mediaQueryKey) !== -1;
  }
  function mediaQueriesEqual(listA, listB) {
    return shallowEqual_default(listA && listA.sort(), listB && listB.sort());
  }
  function stringifyTarget(target) {
    if (typeof target === "string") {
      return target;
    }
    if (target.pluginElement && target.objectId) {
      return target.pluginElement + BAR_DELIMITER2 + target.objectId;
    }
    if (target.objectId) {
      return target.objectId;
    }
    const { id = "", selector = "", useEventTarget = "" } = target;
    return id + BAR_DELIMITER2 + selector + BAR_DELIMITER2 + useEventTarget;
  }
  var import_defaultTo, import_reduce, import_findLast, import_timm4, import_normalizeColor, BACKGROUND2, TRANSFORM2, TRANSLATE_3D2, SCALE_3D2, ROTATE_X2, ROTATE_Y2, ROTATE_Z2, SKEW2, PRESERVE_3D2, FLEX2, OPACITY2, FILTER2, FONT_VARIATION_SETTINGS2, WIDTH2, HEIGHT2, BACKGROUND_COLOR2, BORDER_COLOR2, COLOR2, CHILDREN2, IMMEDIATE_CHILDREN2, SIBLINGS2, PARENT2, DISPLAY2, WILL_CHANGE2, AUTO2, COMMA_DELIMITER2, COLON_DELIMITER2, BAR_DELIMITER2, RENDER_TRANSFORM2, RENDER_GENERAL2, RENDER_STYLE2, RENDER_PLUGIN2, TRANSFORM_MOVE2, TRANSFORM_SCALE2, TRANSFORM_ROTATE2, TRANSFORM_SKEW2, STYLE_OPACITY, STYLE_FILTER2, STYLE_FONT_VARIATION2, STYLE_SIZE2, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE, trim, colorStyleProps, willChangeProps, objectCache, instanceCount, elementCount, strictEqual, pxValueRegex, getFilterDefaults, getFontVariationDefaults, reduceFilters, reduceFontVariations, getItemConfigByKey, transformDefaults, filterDefaults, fontVariationDefaults, getFilterUnit, transformKeys, paramCapture, rgbValidRegex, rgbMatchRegex, processElementByType;
  var init_IX2VanillaUtils = __esm({
    "packages/systems/ix2/shared/logic/IX2VanillaUtils.ts"() {
      "use strict";
      import_defaultTo = __toESM(require_defaultTo());
      import_reduce = __toESM(require_reduce());
      import_findLast = __toESM(require_findLast());
      import_timm4 = __toESM(require_timm());
      init_shared_constants();
      init_shallowEqual();
      init_IX2EasingUtils();
      import_normalizeColor = __toESM(require_normalizeColor());
      init_IX2VanillaPlugins();
      init_IX2BrowserSupport();
      ({
        BACKGROUND: BACKGROUND2,
        TRANSFORM: TRANSFORM2,
        TRANSLATE_3D: TRANSLATE_3D2,
        SCALE_3D: SCALE_3D2,
        ROTATE_X: ROTATE_X2,
        ROTATE_Y: ROTATE_Y2,
        ROTATE_Z: ROTATE_Z2,
        SKEW: SKEW2,
        PRESERVE_3D: PRESERVE_3D2,
        FLEX: FLEX2,
        OPACITY: OPACITY2,
        FILTER: FILTER2,
        FONT_VARIATION_SETTINGS: FONT_VARIATION_SETTINGS2,
        WIDTH: WIDTH2,
        HEIGHT: HEIGHT2,
        BACKGROUND_COLOR: BACKGROUND_COLOR2,
        BORDER_COLOR: BORDER_COLOR2,
        COLOR: COLOR2,
        CHILDREN: CHILDREN2,
        IMMEDIATE_CHILDREN: IMMEDIATE_CHILDREN2,
        SIBLINGS: SIBLINGS2,
        PARENT: PARENT2,
        DISPLAY: DISPLAY2,
        WILL_CHANGE: WILL_CHANGE2,
        AUTO: AUTO2,
        COMMA_DELIMITER: COMMA_DELIMITER2,
        COLON_DELIMITER: COLON_DELIMITER2,
        BAR_DELIMITER: BAR_DELIMITER2,
        RENDER_TRANSFORM: RENDER_TRANSFORM2,
        RENDER_GENERAL: RENDER_GENERAL2,
        RENDER_STYLE: RENDER_STYLE2,
        RENDER_PLUGIN: RENDER_PLUGIN2
      } = IX2EngineConstants_exports);
      ({
        TRANSFORM_MOVE: TRANSFORM_MOVE2,
        TRANSFORM_SCALE: TRANSFORM_SCALE2,
        TRANSFORM_ROTATE: TRANSFORM_ROTATE2,
        TRANSFORM_SKEW: TRANSFORM_SKEW2,
        STYLE_OPACITY,
        STYLE_FILTER: STYLE_FILTER2,
        STYLE_FONT_VARIATION: STYLE_FONT_VARIATION2,
        STYLE_SIZE: STYLE_SIZE2,
        STYLE_BACKGROUND_COLOR,
        STYLE_BORDER,
        STYLE_TEXT_COLOR,
        GENERAL_DISPLAY,
        OBJECT_VALUE
      } = ActionTypeConsts);
      trim = (v) => v.trim();
      colorStyleProps = Object.freeze({
        [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR2,
        [STYLE_BORDER]: BORDER_COLOR2,
        [STYLE_TEXT_COLOR]: COLOR2
      });
      willChangeProps = Object.freeze({
        [TRANSFORM_PREFIXED]: TRANSFORM2,
        [BACKGROUND_COLOR2]: BACKGROUND2,
        [OPACITY2]: OPACITY2,
        [FILTER2]: FILTER2,
        [WIDTH2]: WIDTH2,
        [HEIGHT2]: HEIGHT2,
        [FONT_VARIATION_SETTINGS2]: FONT_VARIATION_SETTINGS2
      });
      objectCache = /* @__PURE__ */ new Map();
      instanceCount = 1;
      elementCount = 1;
      strictEqual = (a, b) => a === b;
      pxValueRegex = /px/;
      getFilterDefaults = (actionState, filters) => (
        // @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
        filters.reduce((result, filter) => {
          if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
          }
          return result;
        }, actionState || {})
      );
      getFontVariationDefaults = (actionState, fontVariations) => fontVariations.reduce((result, fontVariation) => {
        if (result[fontVariation.type] == null) {
          result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
          fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
          fontVariation.defaultValue || 0;
        }
        return result;
      }, actionState || {});
      reduceFilters = (result, filter) => {
        if (filter) {
          result[filter.type] = filter.value || 0;
        }
        return result;
      };
      reduceFontVariations = (result, fontVariation) => {
        if (fontVariation) {
          result[fontVariation.type] = fontVariation.value || 0;
        }
        return result;
      };
      getItemConfigByKey = (actionTypeId, key, config) => {
        if (isPluginType(actionTypeId)) {
          return getPluginConfig(actionTypeId)(config, key);
        }
        switch (actionTypeId) {
          case STYLE_FILTER2: {
            const filter = (0, import_findLast.default)(config.filters, ({ type }) => type === key);
            return filter ? filter.value : 0;
          }
          case STYLE_FONT_VARIATION2: {
            const fontVariation = (0, import_findLast.default)(
              config.fontVariations,
              ({ type }) => type === key
            );
            return fontVariation ? fontVariation.value : 0;
          }
          default:
            return config[key];
        }
      };
      transformDefaults = {
        [TRANSFORM_MOVE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SCALE2]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [TRANSFORM_ROTATE2]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [TRANSFORM_SKEW2]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      };
      filterDefaults = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      });
      fontVariationDefaults = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      });
      getFilterUnit = (filterType, actionItemConfig) => {
        const filter = (0, import_findLast.default)(
          actionItemConfig.filters,
          ({ type }) => type === filterType
        );
        if (filter && filter.unit) {
          return filter.unit;
        }
        switch (filterType) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      };
      transformKeys = Object.keys(transformDefaults);
      paramCapture = "\\(([^)]+)\\)";
      rgbValidRegex = /^rgb/;
      rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
      processElementByType = ({
        effect,
        actionTypeId,
        elementApi
      }) => (
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
        (element) => {
          switch (actionTypeId) {
            case TRANSFORM_MOVE2:
            case TRANSFORM_SCALE2:
            case TRANSFORM_ROTATE2:
            case TRANSFORM_SKEW2:
              effect(element, TRANSFORM_PREFIXED, elementApi);
              break;
            case STYLE_FILTER2:
              effect(element, FILTER2, elementApi);
              break;
            case STYLE_FONT_VARIATION2:
              effect(element, FONT_VARIATION_SETTINGS2, elementApi);
              break;
            case STYLE_OPACITY:
              effect(element, OPACITY2, elementApi);
              break;
            case STYLE_SIZE2:
              effect(element, WIDTH2, elementApi);
              effect(element, HEIGHT2, elementApi);
              break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
              effect(element, colorStyleProps[actionTypeId], elementApi);
              break;
            case GENERAL_DISPLAY:
              effect(element, DISPLAY2, elementApi);
              break;
          }
        }
      );
    }
  });

  // packages/systems/ix2/shared/index.js
  var require_shared2 = __commonJS({
    "packages/systems/ix2/shared/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.IX2VanillaUtils = exports.IX2VanillaPlugins = exports.IX2ElementsReducer = exports.IX2Easings = exports.IX2EasingUtils = exports.IX2BrowserSupport = void 0;
      var IX2BrowserSupport2 = _interopRequireWildcard((init_IX2BrowserSupport(), __toCommonJS(IX2BrowserSupport_exports)));
      exports.IX2BrowserSupport = IX2BrowserSupport2;
      var IX2Easings = _interopRequireWildcard((init_IX2Easings(), __toCommonJS(IX2Easings_exports)));
      exports.IX2Easings = IX2Easings;
      var IX2EasingUtils2 = _interopRequireWildcard((init_IX2EasingUtils(), __toCommonJS(IX2EasingUtils_exports)));
      exports.IX2EasingUtils = IX2EasingUtils2;
      var IX2ElementsReducer2 = _interopRequireWildcard((init_IX2ElementsReducer(), __toCommonJS(IX2ElementsReducer_exports)));
      exports.IX2ElementsReducer = IX2ElementsReducer2;
      var IX2VanillaPlugins2 = _interopRequireWildcard((init_IX2VanillaPlugins(), __toCommonJS(IX2VanillaPlugins_exports)));
      exports.IX2VanillaPlugins = IX2VanillaPlugins2;
      var IX2VanillaUtils5 = _interopRequireWildcard((init_IX2VanillaUtils(), __toCommonJS(IX2VanillaUtils_exports)));
      exports.IX2VanillaUtils = IX2VanillaUtils5;
    }
  });

  // packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts
  var import_shared, import_timm5, IX2_RAW_DATA_IMPORTED3, IX2_SESSION_STOPPED4, IX2_INSTANCE_ADDED3, IX2_INSTANCE_STARTED2, IX2_INSTANCE_REMOVED2, IX2_ANIMATION_FRAME_CHANGED3, optimizeFloat2, applyEasing2, createBezierEasing2, RENDER_GENERAL3, getItemConfigByKey2, getRenderType2, getStyleProp2, continuousInstance, timedInstance, ixInstances;
  var init_IX2InstancesReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2InstancesReducer.ts"() {
      "use strict";
      init_shared_constants();
      import_shared = __toESM(require_shared2());
      import_timm5 = __toESM(require_timm());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED4,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED3,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED2,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED2,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED3
      } = IX2EngineActionTypes_exports);
      ({ optimizeFloat: optimizeFloat2, applyEasing: applyEasing2, createBezierEasing: createBezierEasing2 } = import_shared.IX2EasingUtils);
      ({ RENDER_GENERAL: RENDER_GENERAL3 } = IX2EngineConstants_exports);
      ({ getItemConfigByKey: getItemConfigByKey2, getRenderType: getRenderType2, getStyleProp: getStyleProp2 } = import_shared.IX2VanillaUtils);
      continuousInstance = (state, action) => {
        const {
          position: lastPosition,
          parameterId,
          actionGroups,
          destinationKeys,
          smoothing,
          restingValue,
          actionTypeId,
          customEasingFn,
          skipMotion,
          skipToValue
        } = state;
        const { parameters } = action.payload;
        let velocity = Math.max(1 - smoothing, 0.01);
        let paramValue = parameters[parameterId];
        if (paramValue == null) {
          velocity = 1;
          paramValue = restingValue;
        }
        const nextPosition = Math.max(paramValue, 0) || 0;
        const positionDiff = optimizeFloat2(nextPosition - lastPosition);
        const position = skipMotion ? skipToValue : optimizeFloat2(lastPosition + positionDiff * velocity);
        const keyframePosition = position * 100;
        if (position === lastPosition && state.current) {
          return state;
        }
        let fromActionItem;
        let toActionItem;
        let positionOffset;
        let positionRange;
        for (let i = 0, { length } = actionGroups; i < length; i++) {
          const { keyframe, actionItems } = actionGroups[i];
          if (i === 0) {
            fromActionItem = actionItems[0];
          }
          if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
              positionOffset = keyframe / 100;
              positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
          }
        }
        const current = {};
        if (fromActionItem && !toActionItem) {
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
          }
        } else if (fromActionItem && toActionItem && positionOffset !== void 0 && positionRange !== void 0) {
          const localPosition = (position - positionOffset) / positionRange;
          const easing = fromActionItem.config.easing;
          const eased = applyEasing2(easing, localPosition, customEasingFn);
          for (let i = 0, { length } = destinationKeys; i < length; i++) {
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey2(
              actionTypeId,
              key,
              fromActionItem.config
            );
            const toVal = getItemConfigByKey2(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
          }
        }
        return (0, import_timm5.merge)(state, {
          position,
          current
        });
      };
      timedInstance = (state, action) => {
        const {
          active,
          origin,
          start,
          immediate,
          renderType,
          verbose,
          actionItem,
          destination,
          destinationKeys,
          pluginDuration,
          instanceDelay,
          customEasingFn,
          skipMotion
        } = state;
        const easing = actionItem.config.easing;
        let { duration, delay } = actionItem.config;
        if (pluginDuration != null) {
          duration = pluginDuration;
        }
        delay = instanceDelay != null ? instanceDelay : delay;
        if (renderType === RENDER_GENERAL3) {
          duration = 0;
        } else if (immediate || skipMotion) {
          duration = delay = 0;
        }
        const { now } = action.payload;
        if (active && origin) {
          const delta = now - (start + delay);
          if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat2(
              Math.min(Math.max(0, verboseDelta / verboseDuration), 1)
            );
            state = (0, import_timm5.set)(
              state,
              "verboseTimeElapsed",
              verboseDuration * verbosePosition
            );
          }
          if (delta < 0) {
            return state;
          }
          const position = optimizeFloat2(Math.min(Math.max(0, delta / duration), 1));
          const eased = applyEasing2(easing, position, customEasingFn);
          const newProps = {};
          let current = null;
          if (destinationKeys.length) {
            current = destinationKeys.reduce((result, key) => {
              const destValue = destination[key];
              const originVal = parseFloat(origin[key]) || 0;
              const diff = parseFloat(destValue) - originVal;
              const value = diff * eased + originVal;
              result[key] = value;
              return result;
            }, {});
          }
          newProps.current = current;
          newProps.position = position;
          if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
          }
          return (0, import_timm5.merge)(state, newProps);
        }
        return state;
      };
      ixInstances = (state = Object.freeze({}), action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED3: {
            return action.payload.ixInstances || Object.freeze({});
          }
          case IX2_SESSION_STOPPED4: {
            return Object.freeze({});
          }
          case IX2_INSTANCE_ADDED3: {
            const {
              instanceId,
              elementId,
              actionItem,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              isCarrier,
              origin,
              destination,
              immediate,
              verbose,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue
            } = action.payload;
            const { actionTypeId } = actionItem;
            const renderType = getRenderType2(actionTypeId);
            const styleProp = getStyleProp2(renderType, actionTypeId);
            const destinationKeys = Object.keys(destination).filter(
              (key) => (
                // Skip null destination values
                destination[key] != null && // Skip string destination values
                typeof destination[key] !== "string"
              )
            );
            const { easing } = actionItem.config;
            return (0, import_timm5.set)(state, instanceId, {
              id: instanceId,
              elementId,
              active: false,
              position: 0,
              start: 0,
              origin,
              destination,
              destinationKeys,
              immediate,
              verbose,
              current: null,
              actionItem,
              actionTypeId,
              eventId,
              eventTarget,
              eventStateKey,
              actionListId,
              groupIndex,
              renderType,
              isCarrier,
              styleProp,
              continuous,
              parameterId,
              actionGroups,
              smoothing,
              restingValue,
              pluginInstance,
              pluginDuration,
              instanceDelay,
              skipMotion,
              skipToValue,
              customEasingFn: Array.isArray(easing) && easing.length === 4 ? (
                // @ts-expect-error - TS2345 - Argument of type 'any[]' is not assignable to parameter of type 'IX2EasingCustomType'.
                createBezierEasing2(easing)
              ) : void 0
            });
          }
          case IX2_INSTANCE_STARTED2: {
            const { instanceId, time } = action.payload;
            return (0, import_timm5.mergeIn)(state, [instanceId], {
              active: true,
              complete: false,
              start: time
            });
          }
          case IX2_INSTANCE_REMOVED2: {
            const { instanceId } = action.payload;
            if (!state[instanceId]) {
              return state;
            }
            const newState = {};
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              if (key !== instanceId) {
                newState[key] = state[key];
              }
            }
            return newState;
          }
          case IX2_ANIMATION_FRAME_CHANGED3: {
            let newState = state;
            const keys = Object.keys(state);
            const { length } = keys;
            for (let i = 0; i < length; i++) {
              const key = keys[i];
              const instance = state[key];
              const reducer = instance.continuous ? continuousInstance : timedInstance;
              newState = (0, import_timm5.set)(newState, key, reducer(instance, action));
            }
            return newState;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts
  var IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED2, ixParameters;
  var init_IX2ParametersReducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2ParametersReducer.ts"() {
      "use strict";
      init_shared_constants();
      ({ IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED4, IX2_SESSION_STOPPED: IX2_SESSION_STOPPED5, IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED2 } = IX2EngineActionTypes_exports);
      ixParameters = (state = {
        /*mutable flat state*/
      }, action) => {
        switch (action.type) {
          case IX2_RAW_DATA_IMPORTED4: {
            return action.payload.ixParameters || {
              /*mutable flat state*/
            };
          }
          case IX2_SESSION_STOPPED5: {
            return {
              /*mutable flat state*/
            };
          }
          case IX2_PARAMETER_CHANGED2: {
            const { key, value } = action.payload;
            state[key] = value;
            return state;
          }
          default: {
            return state;
          }
        }
      };
    }
  });

  // packages/systems/ix2/engine/reducers/IX2Reducer.ts
  var IX2Reducer_exports = {};
  __export(IX2Reducer_exports, {
    default: () => IX2Reducer_default
  });
  var import_redux, import_shared2, ixElements2, IX2Reducer_default;
  var init_IX2Reducer = __esm({
    "packages/systems/ix2/engine/reducers/IX2Reducer.ts"() {
      "use strict";
      import_redux = __toESM(require_lib2());
      init_IX2DataReducer();
      init_IX2RequestReducer();
      init_IX2SessionReducer();
      import_shared2 = __toESM(require_shared2());
      init_IX2InstancesReducer();
      init_IX2ParametersReducer();
      ({ ixElements: ixElements2 } = import_shared2.IX2ElementsReducer);
      IX2Reducer_default = (0, import_redux.combineReducers)({
        // @ts-expect-error - TS2322 - Type '(state: FixMeAny | null | undefined, action: {    type: typeof IX2_RAW_DATA_IMPORTED;    payload: {        ixData: FixMeAny;    };}) => any' is not assignable to type 'Reducer<any>'.
        ixData,
        ixRequest,
        ixSession,
        ixElements: ixElements2,
        ixInstances,
        ixParameters
      });
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // node_modules/lodash/_asciiSize.js
  var require_asciiSize = __commonJS({
    "node_modules/lodash/_asciiSize.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var asciiSize = baseProperty("length");
      module.exports = asciiSize;
    }
  });

  // node_modules/lodash/_hasUnicode.js
  var require_hasUnicode = __commonJS({
    "node_modules/lodash/_hasUnicode.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsZWJ = "\\u200d";
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      module.exports = hasUnicode;
    }
  });

  // node_modules/lodash/_unicodeSize.js
  var require_unicodeSize = __commonJS({
    "node_modules/lodash/_unicodeSize.js"(exports, module) {
      var rsAstralRange = "\\ud800-\\udfff";
      var rsComboMarksRange = "\\u0300-\\u036f";
      var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
      var rsComboSymbolsRange = "\\u20d0-\\u20ff";
      var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
      var rsVarRange = "\\ufe0e\\ufe0f";
      var rsAstral = "[" + rsAstralRange + "]";
      var rsCombo = "[" + rsComboRange + "]";
      var rsFitz = "\\ud83c[\\udffb-\\udfff]";
      var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
      var rsNonAstral = "[^" + rsAstralRange + "]";
      var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var rsZWJ = "\\u200d";
      var reOptMod = rsModifier + "?";
      var rsOptVar = "[" + rsVarRange + "]?";
      var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
      var rsSeq = rsOptVar + reOptMod + rsOptJoin;
      var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      module.exports = unicodeSize;
    }
  });

  // node_modules/lodash/_stringSize.js
  var require_stringSize = __commonJS({
    "node_modules/lodash/_stringSize.js"(exports, module) {
      var asciiSize = require_asciiSize();
      var hasUnicode = require_hasUnicode();
      var unicodeSize = require_unicodeSize();
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      module.exports = stringSize;
    }
  });

  // node_modules/lodash/size.js
  var require_size = __commonJS({
    "node_modules/lodash/size.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArrayLike = require_isArrayLike();
      var isString = require_isString();
      var stringSize = require_stringSize();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      function size2(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      module.exports = size2;
    }
  });

  // node_modules/lodash/negate.js
  var require_negate = __commonJS({
    "node_modules/lodash/negate.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      module.exports = negate;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // node_modules/lodash/_basePickBy.js
  var require_basePickBy = __commonJS({
    "node_modules/lodash/_basePickBy.js"(exports, module) {
      var baseGet = require_baseGet();
      var baseSet = require_baseSet();
      var castPath = require_castPath();
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result, castPath(path, object), value);
          }
        }
        return result;
      }
      module.exports = basePickBy;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/pickBy.js
  var require_pickBy = __commonJS({
    "node_modules/lodash/pickBy.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var basePickBy = require_basePickBy();
      var getAllKeysIn = require_getAllKeysIn();
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = baseIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      module.exports = pickBy;
    }
  });

  // node_modules/lodash/omitBy.js
  var require_omitBy = __commonJS({
    "node_modules/lodash/omitBy.js"(exports, module) {
      var baseIteratee = require_baseIteratee();
      var negate = require_negate();
      var pickBy = require_pickBy();
      function omitBy2(object, predicate) {
        return pickBy(object, negate(baseIteratee(predicate)));
      }
      module.exports = omitBy2;
    }
  });

  // node_modules/lodash/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/lodash/isEmpty.js"(exports, module) {
      var baseKeys = require_baseKeys();
      var getTag = require_getTag();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLike = require_isArrayLike();
      var isBuffer = require_isBuffer();
      var isPrototype = require_isPrototype();
      var isTypedArray = require_isTypedArray();
      var mapTag = "[object Map]";
      var setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function isEmpty2(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      module.exports = isEmpty2;
    }
  });

  // node_modules/lodash/mapValues.js
  var require_mapValues = __commonJS({
    "node_modules/lodash/mapValues.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var baseForOwn = require_baseForOwn();
      var baseIteratee = require_baseIteratee();
      function mapValues2(object, iteratee) {
        var result = {};
        iteratee = baseIteratee(iteratee, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result, key, iteratee(value, key, object2));
        });
        return result;
      }
      module.exports = mapValues2;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach2(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach2;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle2;
    }
  });

  // packages/systems/ix2/engine/actions/IX2EngineActions.ts
  var IX2EngineActions_exports = {};
  __export(IX2EngineActions_exports, {
    actionListPlaybackChanged: () => actionListPlaybackChanged,
    animationFrameChanged: () => animationFrameChanged,
    clearRequested: () => clearRequested,
    elementStateChanged: () => elementStateChanged,
    eventListenerAdded: () => eventListenerAdded,
    eventStateChanged: () => eventStateChanged,
    instanceAdded: () => instanceAdded,
    instanceRemoved: () => instanceRemoved,
    instanceStarted: () => instanceStarted,
    mediaQueriesDefined: () => mediaQueriesDefined,
    parameterChanged: () => parameterChanged,
    playbackRequested: () => playbackRequested,
    previewRequested: () => previewRequested,
    rawDataImported: () => rawDataImported,
    sessionInitialized: () => sessionInitialized,
    sessionStarted: () => sessionStarted,
    sessionStopped: () => sessionStopped,
    stopRequested: () => stopRequested,
    testFrameRendered: () => testFrameRendered,
    viewportWidthChanged: () => viewportWidthChanged
  });
  var import_shared3, IX2_RAW_DATA_IMPORTED5, IX2_SESSION_INITIALIZED3, IX2_SESSION_STARTED3, IX2_SESSION_STOPPED6, IX2_PREVIEW_REQUESTED3, IX2_PLAYBACK_REQUESTED3, IX2_STOP_REQUESTED3, IX2_CLEAR_REQUESTED3, IX2_EVENT_LISTENER_ADDED3, IX2_TEST_FRAME_RENDERED3, IX2_EVENT_STATE_CHANGED3, IX2_ANIMATION_FRAME_CHANGED4, IX2_PARAMETER_CHANGED3, IX2_INSTANCE_ADDED4, IX2_INSTANCE_STARTED3, IX2_INSTANCE_REMOVED3, IX2_ELEMENT_STATE_CHANGED3, IX2_ACTION_LIST_PLAYBACK_CHANGED3, IX2_VIEWPORT_WIDTH_CHANGED3, IX2_MEDIA_QUERIES_DEFINED3, reifyState2, rawDataImported, sessionInitialized, sessionStarted, sessionStopped, previewRequested, playbackRequested, stopRequested, clearRequested, eventListenerAdded, testFrameRendered, eventStateChanged, animationFrameChanged, parameterChanged, instanceAdded, instanceStarted, instanceRemoved, elementStateChanged, actionListPlaybackChanged, viewportWidthChanged, mediaQueriesDefined;
  var init_IX2EngineActions = __esm({
    "packages/systems/ix2/engine/actions/IX2EngineActions.ts"() {
      "use strict";
      init_shared_constants();
      import_shared3 = __toESM(require_shared2());
      ({
        IX2_RAW_DATA_IMPORTED: IX2_RAW_DATA_IMPORTED5,
        IX2_SESSION_INITIALIZED: IX2_SESSION_INITIALIZED3,
        IX2_SESSION_STARTED: IX2_SESSION_STARTED3,
        IX2_SESSION_STOPPED: IX2_SESSION_STOPPED6,
        IX2_PREVIEW_REQUESTED: IX2_PREVIEW_REQUESTED3,
        IX2_PLAYBACK_REQUESTED: IX2_PLAYBACK_REQUESTED3,
        IX2_STOP_REQUESTED: IX2_STOP_REQUESTED3,
        IX2_CLEAR_REQUESTED: IX2_CLEAR_REQUESTED3,
        IX2_EVENT_LISTENER_ADDED: IX2_EVENT_LISTENER_ADDED3,
        IX2_TEST_FRAME_RENDERED: IX2_TEST_FRAME_RENDERED3,
        IX2_EVENT_STATE_CHANGED: IX2_EVENT_STATE_CHANGED3,
        IX2_ANIMATION_FRAME_CHANGED: IX2_ANIMATION_FRAME_CHANGED4,
        IX2_PARAMETER_CHANGED: IX2_PARAMETER_CHANGED3,
        IX2_INSTANCE_ADDED: IX2_INSTANCE_ADDED4,
        IX2_INSTANCE_STARTED: IX2_INSTANCE_STARTED3,
        IX2_INSTANCE_REMOVED: IX2_INSTANCE_REMOVED3,
        IX2_ELEMENT_STATE_CHANGED: IX2_ELEMENT_STATE_CHANGED3,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        IX2_VIEWPORT_WIDTH_CHANGED: IX2_VIEWPORT_WIDTH_CHANGED3,
        IX2_MEDIA_QUERIES_DEFINED: IX2_MEDIA_QUERIES_DEFINED3
      } = IX2EngineActionTypes_exports);
      ({ reifyState: reifyState2 } = import_shared3.IX2VanillaUtils);
      rawDataImported = (rawData) => ({
        type: IX2_RAW_DATA_IMPORTED5,
        payload: {
          ...reifyState2(rawData)
        }
      });
      sessionInitialized = ({
        hasBoundaryNodes,
        reducedMotion
      }) => ({
        type: IX2_SESSION_INITIALIZED3,
        payload: {
          hasBoundaryNodes,
          reducedMotion
        }
      });
      sessionStarted = () => ({
        type: IX2_SESSION_STARTED3
      });
      sessionStopped = () => ({
        type: IX2_SESSION_STOPPED6
      });
      previewRequested = ({
        rawData,
        defer
      }) => ({
        type: IX2_PREVIEW_REQUESTED3,
        payload: {
          defer,
          rawData
        }
      });
      playbackRequested = ({
        actionTypeId = ActionTypeConsts.GENERAL_START_ACTION,
        actionListId,
        actionItemId,
        eventId,
        allowEvents,
        immediate,
        testManual,
        verbose,
        rawData
      }) => ({
        type: IX2_PLAYBACK_REQUESTED3,
        payload: {
          actionTypeId,
          actionListId,
          actionItemId,
          testManual,
          eventId,
          allowEvents,
          immediate,
          verbose,
          rawData
        }
      });
      stopRequested = (actionListId) => ({
        type: IX2_STOP_REQUESTED3,
        payload: {
          actionListId
        }
      });
      clearRequested = () => ({
        type: IX2_CLEAR_REQUESTED3
      });
      eventListenerAdded = (target, listenerParams) => ({
        type: IX2_EVENT_LISTENER_ADDED3,
        payload: {
          target,
          listenerParams
        }
      });
      testFrameRendered = (step = 1) => ({
        type: IX2_TEST_FRAME_RENDERED3,
        payload: {
          step
        }
      });
      eventStateChanged = (stateKey, newState) => ({
        type: IX2_EVENT_STATE_CHANGED3,
        payload: {
          stateKey,
          newState
        }
      });
      animationFrameChanged = (now, parameters) => ({
        type: IX2_ANIMATION_FRAME_CHANGED4,
        payload: {
          now,
          parameters
        }
      });
      parameterChanged = (key, value) => ({
        type: IX2_PARAMETER_CHANGED3,
        payload: {
          key,
          value
        }
      });
      instanceAdded = (options) => ({
        type: IX2_INSTANCE_ADDED4,
        payload: {
          ...options
        }
      });
      instanceStarted = (instanceId, time) => ({
        type: IX2_INSTANCE_STARTED3,
        payload: {
          instanceId,
          time
        }
      });
      instanceRemoved = (instanceId) => ({
        type: IX2_INSTANCE_REMOVED3,
        payload: {
          instanceId
        }
      });
      elementStateChanged = (elementId, actionTypeId, current, actionItem) => ({
        type: IX2_ELEMENT_STATE_CHANGED3,
        payload: {
          elementId,
          actionTypeId,
          current,
          actionItem
        }
      });
      actionListPlaybackChanged = ({
        actionListId,
        isPlaying
      }) => ({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED3,
        payload: {
          actionListId,
          isPlaying
        }
      });
      viewportWidthChanged = ({
        width,
        mediaQueries
      }) => ({
        type: IX2_VIEWPORT_WIDTH_CHANGED3,
        payload: {
          width,
          mediaQueries
        }
      });
      mediaQueriesDefined = () => ({
        type: IX2_MEDIA_QUERIES_DEFINED3
      });
    }
  });

  // packages/systems/ix2/engine/logic/IX2BrowserApi.ts
  var IX2BrowserApi_exports = {};
  __export(IX2BrowserApi_exports, {
    elementContains: () => elementContains,
    getChildElements: () => getChildElements,
    getClosestElement: () => getClosestElement,
    getProperty: () => getProperty,
    getQuerySelector: () => getQuerySelector,
    getRefType: () => getRefType,
    getSiblingElements: () => getSiblingElements,
    getStyle: () => getStyle,
    getValidDocument: () => getValidDocument,
    isSiblingNode: () => isSiblingNode,
    matchSelector: () => matchSelector,
    queryDocument: () => queryDocument,
    setStyle: () => setStyle
  });
  function setStyle(element, prop, value) {
    element.style[prop] = value;
  }
  function getStyle(element, prop) {
    if (prop.startsWith("--")) {
      return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
    }
    return element.style[prop];
  }
  function getProperty(element, prop) {
    return element[prop];
  }
  function matchSelector(selector) {
    return (element) => element[ELEMENT_MATCHES2](selector);
  }
  function getQuerySelector({
    id,
    selector
  }) {
    if (id) {
      let nodeId = id;
      if (id.indexOf(IX2_ID_DELIMITER2) !== -1) {
        const pair = id.split(IX2_ID_DELIMITER2);
        const pageId = pair[0];
        nodeId = pair[1];
        if (pageId !== document.documentElement.getAttribute(WF_PAGE2)) {
          return null;
        }
      }
      return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
    }
    return selector;
  }
  function getValidDocument(pageId) {
    if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE2)) {
      return document;
    }
    return null;
  }
  function queryDocument(baseSelector, descendantSelector) {
    return Array.prototype.slice.call(
      document.querySelectorAll(
        descendantSelector ? baseSelector + " " + descendantSelector : baseSelector
      )
    );
  }
  function elementContains(parent, child) {
    return parent.contains(child);
  }
  function isSiblingNode(a, b) {
    return a !== b && a.parentNode === b.parentNode;
  }
  function getChildElements(sourceElements) {
    const childElements = [];
    for (let i = 0, { length } = sourceElements || []; i < length; i++) {
      const { children } = sourceElements[i];
      const { length: childCount } = children;
      if (!childCount) {
        continue;
      }
      for (let j = 0; j < childCount; j++) {
        childElements.push(children[j]);
      }
    }
    return childElements;
  }
  function getSiblingElements(sourceElements = []) {
    const elements = [];
    const parentCache = [];
    for (let i = 0, { length } = sourceElements; i < length; i++) {
      const { parentNode } = sourceElements[i];
      if (!parentNode || !parentNode.children || !parentNode.children.length) {
        continue;
      }
      if (parentCache.indexOf(parentNode) !== -1) {
        continue;
      }
      parentCache.push(parentNode);
      let el = parentNode.firstElementChild;
      while (el != null) {
        if (sourceElements.indexOf(el) === -1) {
          elements.push(el);
        }
        el = el.nextElementSibling;
      }
    }
    return elements;
  }
  function getRefType(ref) {
    if (ref != null && typeof ref == "object") {
      return ref instanceof Element ? HTML_ELEMENT3 : PLAIN_OBJECT3;
    }
    return null;
  }
  var import_shared4, ELEMENT_MATCHES2, IX2_ID_DELIMITER2, HTML_ELEMENT3, PLAIN_OBJECT3, WF_PAGE2, getClosestElement;
  var init_IX2BrowserApi = __esm({
    "packages/systems/ix2/engine/logic/IX2BrowserApi.ts"() {
      "use strict";
      import_shared4 = __toESM(require_shared2());
      init_shared_constants();
      ({ ELEMENT_MATCHES: ELEMENT_MATCHES2 } = import_shared4.IX2BrowserSupport);
      ({ IX2_ID_DELIMITER: IX2_ID_DELIMITER2, HTML_ELEMENT: HTML_ELEMENT3, PLAIN_OBJECT: PLAIN_OBJECT3, WF_PAGE: WF_PAGE2 } = IX2EngineConstants_exports);
      getClosestElement = Element.prototype.closest ? (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        return element.closest(selector);
      } : (element, selector) => {
        if (!document.documentElement.contains(element)) {
          return null;
        }
        let el = element;
        do {
          if (el[ELEMENT_MATCHES2] && el[ELEMENT_MATCHES2](selector)) {
            return el;
          }
          el = el.parentNode;
        } while (el != null);
        return null;
      };
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_baseLodash.js
  var require_baseLodash = __commonJS({
    "node_modules/lodash/_baseLodash.js"(exports, module) {
      function baseLodash() {
      }
      module.exports = baseLodash;
    }
  });

  // node_modules/lodash/_LodashWrapper.js
  var require_LodashWrapper = __commonJS({
    "node_modules/lodash/_LodashWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = void 0;
      }
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      module.exports = LodashWrapper;
    }
  });

  // node_modules/lodash/_isFlattenable.js
  var require_isFlattenable = __commonJS({
    "node_modules/lodash/_isFlattenable.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      module.exports = isFlattenable;
    }
  });

  // node_modules/lodash/_baseFlatten.js
  var require_baseFlatten = __commonJS({
    "node_modules/lodash/_baseFlatten.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isFlattenable = require_isFlattenable();
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      module.exports = baseFlatten;
    }
  });

  // node_modules/lodash/flatten.js
  var require_flatten = __commonJS({
    "node_modules/lodash/flatten.js"(exports, module) {
      var baseFlatten = require_baseFlatten();
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      module.exports = flatten;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_flatRest.js
  var require_flatRest = __commonJS({
    "node_modules/lodash/_flatRest.js"(exports, module) {
      var flatten = require_flatten();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function flatRest(func) {
        return setToString(overRest(func, void 0, flatten), func + "");
      }
      module.exports = flatRest;
    }
  });

  // node_modules/lodash/_metaMap.js
  var require_metaMap = __commonJS({
    "node_modules/lodash/_metaMap.js"(exports, module) {
      var WeakMap2 = require_WeakMap();
      var metaMap = WeakMap2 && new WeakMap2();
      module.exports = metaMap;
    }
  });

  // node_modules/lodash/noop.js
  var require_noop = __commonJS({
    "node_modules/lodash/noop.js"(exports, module) {
      function noop() {
      }
      module.exports = noop;
    }
  });

  // node_modules/lodash/_getData.js
  var require_getData = __commonJS({
    "node_modules/lodash/_getData.js"(exports, module) {
      var metaMap = require_metaMap();
      var noop = require_noop();
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      module.exports = getData;
    }
  });

  // node_modules/lodash/_realNames.js
  var require_realNames = __commonJS({
    "node_modules/lodash/_realNames.js"(exports, module) {
      var realNames = {};
      module.exports = realNames;
    }
  });

  // node_modules/lodash/_getFuncName.js
  var require_getFuncName = __commonJS({
    "node_modules/lodash/_getFuncName.js"(exports, module) {
      var realNames = require_realNames();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function getFuncName(func) {
        var result = func.name + "", array = realNames[result], length = hasOwnProperty2.call(realNames, result) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result;
      }
      module.exports = getFuncName;
    }
  });

  // node_modules/lodash/_LazyWrapper.js
  var require_LazyWrapper = __commonJS({
    "node_modules/lodash/_LazyWrapper.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var baseLodash = require_baseLodash();
      var MAX_ARRAY_LENGTH = 4294967295;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      module.exports = LazyWrapper;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_wrapperClone.js
  var require_wrapperClone = __commonJS({
    "node_modules/lodash/_wrapperClone.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var copyArray = require_copyArray();
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result.__actions__ = copyArray(wrapper.__actions__);
        result.__index__ = wrapper.__index__;
        result.__values__ = wrapper.__values__;
        return result;
      }
      module.exports = wrapperClone;
    }
  });

  // node_modules/lodash/wrapperLodash.js
  var require_wrapperLodash = __commonJS({
    "node_modules/lodash/wrapperLodash.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var LodashWrapper = require_LodashWrapper();
      var baseLodash = require_baseLodash();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var wrapperClone = require_wrapperClone();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      module.exports = lodash;
    }
  });

  // node_modules/lodash/_isLaziable.js
  var require_isLaziable = __commonJS({
    "node_modules/lodash/_isLaziable.js"(exports, module) {
      var LazyWrapper = require_LazyWrapper();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var lodash = require_wrapperLodash();
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      module.exports = isLaziable;
    }
  });

  // node_modules/lodash/_createFlow.js
  var require_createFlow = __commonJS({
    "node_modules/lodash/_createFlow.js"(exports, module) {
      var LodashWrapper = require_LodashWrapper();
      var flatRest = require_flatRest();
      var getData = require_getData();
      var getFuncName = require_getFuncName();
      var isArray = require_isArray();
      var isLaziable = require_isLaziable();
      var FUNC_ERROR_TEXT = "Expected a function";
      var WRAP_CURRY_FLAG = 8;
      var WRAP_PARTIAL_FLAG = 32;
      var WRAP_ARY_FLAG = 128;
      var WRAP_REARG_FLAG = 256;
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : void 0;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result = funcs[index2].call(this, result);
            }
            return result;
          };
        });
      }
      module.exports = createFlow;
    }
  });

  // node_modules/lodash/flow.js
  var require_flow = __commonJS({
    "node_modules/lodash/flow.js"(exports, module) {
      var createFlow = require_createFlow();
      var flow2 = createFlow();
      module.exports = flow2;
    }
  });

  // node_modules/lodash/_baseClamp.js
  var require_baseClamp = __commonJS({
    "node_modules/lodash/_baseClamp.js"(exports, module) {
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== void 0) {
            number = number <= upper ? number : upper;
          }
          if (lower !== void 0) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      module.exports = baseClamp;
    }
  });

  // node_modules/lodash/clamp.js
  var require_clamp = __commonJS({
    "node_modules/lodash/clamp.js"(exports, module) {
      var baseClamp = require_baseClamp();
      var toNumber = require_toNumber();
      function clamp2(number, lower, upper) {
        if (upper === void 0) {
          upper = lower;
          lower = void 0;
        }
        if (upper !== void 0) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== void 0) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      module.exports = clamp2;
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEvents.ts
  var import_flow, import_get, import_clamp, import_shared5, MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL, COMPONENT_ACTIVE, COMPONENT_INACTIVE, COLON_DELIMITER3, getNamespacedParameterId2, composableFilter, isElement, containsElement, isOrContainsElement, getAutoStopEvent, hasAutoStopEvent, actionGroupCreator, withFilter, baseActionGroupOptions, baseActivityActionGroupOptions, SCROLL_EVENT_TYPES, MOUSE_OVER_OUT_TYPES, baseScrollActionGroupOptions, AUTO_STOP_DISABLED_EVENTS, getDocumentState, areBoxesIntersecting, isElementHovered, isElementVisible, whenComponentActiveChange, whenElementHoverChange, whenElementVisibiltyChange, whenScrollDirectionChange, pointIntersects, whenPageLoadFinish, whenPageLoadStart, whenClickCountChange, getComponentActiveOptions, getComponentInactiveOptions, scrollIntoOutOfViewOptions, MOUSE_OUT_ROUND_THRESHOLD, IX2VanillaEvents_default;
  var init_IX2VanillaEvents = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEvents.ts"() {
      "use strict";
      import_flow = __toESM(require_flow());
      import_get = __toESM(require_get());
      import_clamp = __toESM(require_clamp());
      init_shared_constants();
      init_IX2VanillaEngine();
      init_IX2EngineActions();
      import_shared5 = __toESM(require_shared2());
      ({
        MOUSE_CLICK,
        MOUSE_SECOND_CLICK,
        MOUSE_DOWN,
        MOUSE_UP,
        MOUSE_OVER,
        MOUSE_OUT,
        DROPDOWN_CLOSE,
        DROPDOWN_OPEN,
        SLIDER_ACTIVE,
        SLIDER_INACTIVE,
        TAB_ACTIVE,
        TAB_INACTIVE,
        NAVBAR_CLOSE,
        NAVBAR_OPEN,
        MOUSE_MOVE,
        PAGE_SCROLL_DOWN,
        SCROLL_INTO_VIEW,
        SCROLL_OUT_OF_VIEW,
        PAGE_SCROLL_UP,
        SCROLLING_IN_VIEW,
        PAGE_FINISH,
        ECOMMERCE_CART_CLOSE,
        ECOMMERCE_CART_OPEN,
        PAGE_START,
        PAGE_SCROLL
      } = EventTypeConsts);
      COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
      COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
      ({ COLON_DELIMITER: COLON_DELIMITER3 } = IX2EngineConstants_exports);
      ({ getNamespacedParameterId: getNamespacedParameterId2 } = import_shared5.IX2VanillaUtils);
      composableFilter = (predicate) => (options) => {
        if (typeof options === "object" && predicate(options)) {
          return true;
        }
        return options;
      };
      isElement = composableFilter(({ element, nativeEvent }) => {
        return element === nativeEvent.target;
      });
      containsElement = composableFilter(({ element, nativeEvent }) => {
        return element.contains(nativeEvent.target);
      });
      isOrContainsElement = (0, import_flow.default)([isElement, containsElement]);
      getAutoStopEvent = (store, autoStopEventId) => {
        if (autoStopEventId) {
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          const eventToStop = events[autoStopEventId];
          if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
          }
        }
        return null;
      };
      hasAutoStopEvent = ({ store, event }) => {
        const { action: eventAction } = event;
        const { autoStopEventId } = eventAction.config;
        return Boolean(getAutoStopEvent(store, autoStopEventId));
      };
      actionGroupCreator = ({ store, event, element, eventStateKey }, state) => {
        const { action: eventAction, id: eventId } = event;
        const { actionListId, autoStopEventId } = eventAction.config;
        const eventToStop = getAutoStopEvent(store, autoStopEventId);
        if (eventToStop) {
          stopActionGroup({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER3 + eventStateKey.split(COLON_DELIMITER3)[1],
            actionListId: (0, import_get.default)(eventToStop, "action.config.actionListId")
          });
        }
        stopActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        startActionGroup({
          store,
          eventId,
          eventTarget: element,
          eventStateKey,
          actionListId
        });
        return state;
      };
      withFilter = (filter, handler) => (options, state) => filter(options, state) === true ? handler(options, state) : state;
      baseActionGroupOptions = {
        handler: withFilter(isOrContainsElement, actionGroupCreator)
      };
      baseActivityActionGroupOptions = {
        ...baseActionGroupOptions,
        types: [COMPONENT_ACTIVE, COMPONENT_INACTIVE].join(" ")
      };
      SCROLL_EVENT_TYPES = [
        { target: window, types: "resize orientationchange", throttle: true },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: true
        }
      ];
      MOUSE_OVER_OUT_TYPES = "mouseover mouseout";
      baseScrollActionGroupOptions = {
        types: SCROLL_EVENT_TYPES
      };
      AUTO_STOP_DISABLED_EVENTS = {
        PAGE_START,
        PAGE_FINISH
      };
      getDocumentState = (() => {
        const supportOffset = window.pageXOffset !== void 0;
        const isCSS1Compat = document.compatMode === "CSS1Compat";
        const rootElement = isCSS1Compat ? document.documentElement : document.body;
        return () => ({
          scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
          scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
          // required to remove elasticity in Safari scrolling.
          stiffScrollTop: (0, import_clamp.default)(
            supportOffset ? window.pageYOffset : rootElement.scrollTop,
            0,
            rootElement.scrollHeight - window.innerHeight
          ),
          scrollWidth: rootElement.scrollWidth,
          scrollHeight: rootElement.scrollHeight,
          clientWidth: rootElement.clientWidth,
          clientHeight: rootElement.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })();
      areBoxesIntersecting = (a, b) => !(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
      isElementHovered = ({ element, nativeEvent }) => {
        const { type, target, relatedTarget } = nativeEvent;
        const containsTarget = element.contains(target);
        if (type === "mouseover" && containsTarget) {
          return true;
        }
        const containsRelated = element.contains(relatedTarget);
        if (type === "mouseout" && containsTarget && containsRelated) {
          return true;
        }
        return false;
      };
      isElementVisible = (options) => {
        const {
          element,
          event: { config }
        } = options;
        const { clientWidth, clientHeight } = getDocumentState();
        const scrollOffsetValue = config.scrollOffsetValue;
        const scrollOffsetUnit = config.scrollOffsetUnit;
        const isPX = scrollOffsetUnit === "PX";
        const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
        return areBoxesIntersecting(element.getBoundingClientRect(), {
          left: 0,
          top: offsetPadding,
          right: clientWidth,
          bottom: clientHeight - offsetPadding
        });
      };
      whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState) => {
        const { type } = options.nativeEvent;
        const isActive = [COMPONENT_ACTIVE, COMPONENT_INACTIVE].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = {
          ...oldState,
          isActive
        };
        if (!oldState || newState.isActive !== oldState.isActive) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementHoverChange = (handler) => (options, oldState) => {
        const newState = {
          elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenElementVisibiltyChange = (handler) => (options, oldState) => {
        const newState = {
          ...oldState,
          elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
      (handler) => (options, oldState = {}) => {
        const {
          stiffScrollTop: scrollTop,
          scrollHeight,
          innerHeight
        } = getDocumentState();
        const {
          event: { config, eventTypeId }
        } = options;
        const { scrollOffsetValue, scrollOffsetUnit } = config;
        const isPX = scrollOffsetUnit === "PX";
        const scrollHeightBounds = scrollHeight - innerHeight;
        const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
        if (oldState && oldState.percentTop === percentTop) {
          return oldState;
        }
        const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
        let scrollingDown;
        let scrollDirectionChanged;
        let anchorTop = 0;
        if (oldState) {
          scrollingDown = percentTop > oldState.percentTop;
          scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
          anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
        }
        const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
        const newState = {
          ...oldState,
          percentTop,
          inBounds,
          anchorTop,
          scrollingDown
        };
        if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      pointIntersects = (point, rect) => point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
      whenPageLoadFinish = (handler) => (options, oldState) => {
        const newState = {
          finished: document.readyState === "complete"
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
          handler(options);
        }
        return newState;
      };
      whenPageLoadStart = (handler) => (options, oldState) => {
        const newState = {
          started: true
        };
        if (!oldState) {
          handler(options);
        }
        return newState;
      };
      whenClickCountChange = (handler) => (options, oldState = { clickCount: 0 }) => {
        const newState = {
          clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
          return handler(options, newState) || newState;
        }
        return newState;
      };
      getComponentActiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      getComponentInactiveOptions = (allowNestedChildrenEvents = true) => ({
        ...baseActivityActionGroupOptions,
        handler: withFilter(
          allowNestedChildrenEvents ? isOrContainsElement : isElement,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          whenComponentActiveChange((options, state) => {
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
          })
        )
      });
      scrollIntoOutOfViewOptions = {
        ...baseScrollActionGroupOptions,
        handler: whenElementVisibiltyChange((options, state) => {
          const { elementVisible } = state;
          const { event, store } = options;
          const { ixData: ixData2 } = store.getState();
          const { events } = ixData2;
          if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
          }
          if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            actionGroupCreator(options);
            return {
              ...state,
              triggered: true
            };
          } else {
            return state;
          }
        })
      };
      MOUSE_OUT_ROUND_THRESHOLD = 0.05;
      IX2VanillaEvents_default = {
        [SLIDER_ACTIVE]: getComponentActiveOptions(),
        [SLIDER_INACTIVE]: getComponentInactiveOptions(),
        [DROPDOWN_OPEN]: getComponentActiveOptions(),
        [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
        // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
        // events where the target is the navbar element, and ignore children that dispatch activitiy events.
        [NAVBAR_OPEN]: getComponentActiveOptions(false),
        [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
        [TAB_ACTIVE]: getComponentActiveOptions(),
        [TAB_INACTIVE]: getComponentInactiveOptions(),
        [ECOMMERCE_CART_OPEN]: {
          types: "ecommerce-cart-open",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [ECOMMERCE_CART_CLOSE]: {
          types: "ecommerce-cart-close",
          handler: withFilter(isOrContainsElement, actionGroupCreator)
        },
        [MOUSE_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (hasAutoStopEvent(options)) {
                clickCount === 1 && actionGroupCreator(options);
              } else {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_SECOND_CLICK]: {
          types: "click",
          handler: withFilter(
            isOrContainsElement,
            whenClickCountChange((options, { clickCount }) => {
              if (clickCount === 2) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_DOWN]: {
          ...baseActionGroupOptions,
          types: "mousedown"
        },
        [MOUSE_UP]: {
          ...baseActionGroupOptions,
          types: "mouseup"
        },
        [MOUSE_OVER]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_OUT]: {
          types: MOUSE_OVER_OUT_TYPES,
          handler: withFilter(
            isOrContainsElement,
            whenElementHoverChange((options, state) => {
              if (!state.elementHovered) {
                actionGroupCreator(options);
              }
            })
          )
        },
        [MOUSE_MOVE]: {
          types: "mousemove mouseout scroll",
          handler: ({ store, element, eventConfig, nativeEvent, eventStateKey }, state = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              reverse,
              restingState = 0
            } = eventConfig;
            const {
              clientX = state.clientX,
              clientY = state.clientY,
              pageX = state.pageX,
              pageY = state.pageY
            } = nativeEvent;
            const isXAxis = selectedAxis === "X_AXIS";
            const isMouseOut = nativeEvent.type === "mouseout";
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch (basedOn) {
              case EventBasedOn.VIEWPORT: {
                value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                break;
              }
              case EventBasedOn.PAGE: {
                const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                break;
              }
              case EventBasedOn.ELEMENT:
              default: {
                namespacedParameterId = getNamespacedParameterId2(
                  eventStateKey,
                  continuousParameterGroupId
                );
                const isMouseEvent = nativeEvent.type.indexOf("mouse") === 0;
                if (isMouseEvent && isOrContainsElement({ element, nativeEvent }) !== true) {
                  break;
                }
                const rect = element.getBoundingClientRect();
                const { left, top, width, height } = rect;
                if (!isMouseEvent && !pointIntersects({ left: clientX, top: clientY }, rect)) {
                  break;
                }
                elementHovered = true;
                value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                break;
              }
            }
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
              value = Math.round(value);
            }
            if (basedOn !== EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
              value = reverse ? 1 - value : value;
              store.dispatch(parameterChanged(namespacedParameterId, value));
            }
            return {
              elementHovered,
              clientX,
              clientY,
              pageX,
              pageY
            };
          }
        },
        [PAGE_SCROLL]: {
          types: SCROLL_EVENT_TYPES,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          handler: ({ store, eventConfig }) => {
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch(parameterChanged(continuousParameterGroupId, value));
          }
        },
        [SCROLLING_IN_VIEW]: {
          types: SCROLL_EVENT_TYPES,
          handler: ({ element, store, eventConfig, eventStateKey }, state = { scrollPercent: 0 }) => {
            const {
              scrollLeft,
              scrollTop,
              scrollWidth,
              scrollHeight,
              clientHeight: visibleHeight
            } = getDocumentState();
            const {
              basedOn,
              selectedAxis,
              continuousParameterGroupId,
              startsEntering,
              startsExiting,
              addEndOffset,
              addStartOffset,
              addOffsetValue = 0,
              endOffsetValue = 0
            } = eventConfig;
            const isXAxis = selectedAxis === "X_AXIS";
            if (basedOn === EventBasedOn.VIEWPORT) {
              const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
              if (value !== state.scrollPercent) {
                store.dispatch(parameterChanged(continuousParameterGroupId, value));
              }
              return {
                scrollPercent: value
              };
            } else {
              const namespacedParameterId = getNamespacedParameterId2(
                eventStateKey,
                continuousParameterGroupId
              );
              const elementRect = element.getBoundingClientRect();
              let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
              let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
              offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
              offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
              const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
              const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
              const offsetHeight = offsetElementBottom - offsetElementTop;
              const fixedScrollHeight = Math.min(
                visibleHeight + offsetHeight,
                scrollHeight
              );
              const fixedScrollTop = Math.min(
                Math.max(0, visibleHeight - offsetElementTop),
                fixedScrollHeight
              );
              const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
              if (fixedScrollPerc !== state.scrollPercent) {
                store.dispatch(
                  parameterChanged(namespacedParameterId, fixedScrollPerc)
                );
              }
              return {
                scrollPercent: fixedScrollPerc
              };
            }
          }
        },
        [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
        [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
        [PAGE_SCROLL_DOWN]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_SCROLL_UP]: {
          ...baseScrollActionGroupOptions,
          // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
          handler: whenScrollDirectionChange((options, state) => {
            if (!state.scrollingDown) {
              actionGroupCreator(options);
            }
          })
        },
        [PAGE_FINISH]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
        },
        [PAGE_START]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
        }
      };
    }
  });

  // packages/systems/ix2/engine/logic/IX2VanillaEngine.ts
  var IX2VanillaEngine_exports = {};
  __export(IX2VanillaEngine_exports, {
    observeRequests: () => observeRequests,
    startActionGroup: () => startActionGroup,
    startEngine: () => startEngine,
    stopActionGroup: () => stopActionGroup,
    stopAllActionGroups: () => stopAllActionGroups,
    stopEngine: () => stopEngine
  });
  function observeRequests(store) {
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.preview,
      onChange: handlePreviewRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.playback,
      onChange: handlePlaybackRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.stop,
      onChange: handleStopRequest
    });
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixRequest' implicitly has an 'any' type.
      select: ({ ixRequest: ixRequest2 }) => ixRequest2.clear,
      onChange: handleClearRequest
    });
  }
  function observeMediaQueryChange(store) {
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
      select: ({ ixSession: ixSession2 }) => ixSession2.mediaQueryKey,
      onChange: () => {
        stopEngine(store);
        clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
        startEngine({ store, allowEvents: true });
        dispatchPageUpdateEvent();
      }
    });
  }
  function observeOneRenderTick(store, onTick) {
    const unsubscribe = observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixSession' implicitly has an 'any' type.
      select: ({ ixSession: ixSession2 }) => ixSession2.tick,
      // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
      onChange: (tick) => {
        onTick(tick);
        unsubscribe();
      }
    });
  }
  function handlePreviewRequest({ rawData, defer }, store) {
    const start = () => {
      startEngine({ store, rawData, allowEvents: true });
      dispatchPageUpdateEvent();
    };
    defer ? setTimeout(start, 0) : start();
  }
  function dispatchPageUpdateEvent() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function handlePlaybackRequest(playback, store) {
    const {
      actionTypeId,
      actionListId,
      actionItemId,
      eventId,
      allowEvents,
      immediate,
      testManual,
      verbose = true
    } = playback;
    let { rawData } = playback;
    if (actionListId && actionItemId && rawData && immediate) {
      const actionList = rawData.actionLists[actionListId];
      if (actionList) {
        rawData = reduceListToGroup2({
          actionList,
          actionItemId,
          rawData
        });
      }
    }
    startEngine({ store, rawData, allowEvents, testManual });
    if (actionListId && actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
      stopActionGroup({ store, actionListId });
      renderInitialGroup({ store, actionListId, eventId });
      const started = startActionGroup({
        store,
        eventId,
        actionListId,
        immediate,
        verbose
      });
      if (verbose && started) {
        store.dispatch(
          actionListPlaybackChanged({ actionListId, isPlaying: !immediate })
        );
      }
    }
  }
  function handleStopRequest({ actionListId }, store) {
    if (actionListId) {
      stopActionGroup({ store, actionListId });
    } else {
      stopAllActionGroups({ store });
    }
    stopEngine(store);
  }
  function handleClearRequest(state, store) {
    stopEngine(store);
    clearAllStyles2({ store, elementApi: IX2BrowserApi_exports });
  }
  function startEngine({ store, rawData, allowEvents, testManual }) {
    const { ixSession: ixSession2 } = store.getState();
    if (rawData) {
      store.dispatch(rawDataImported(rawData));
    }
    if (!ixSession2.active) {
      store.dispatch(
        sessionInitialized({
          hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR2)),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })
      );
      if (allowEvents) {
        bindEvents(store);
        addDocumentClass();
        if (store.getState().ixSession.hasDefinedMediaQueries) {
          observeMediaQueryChange(store);
        }
      }
      store.dispatch(sessionStarted());
      startRenderLoop(store, testManual);
    }
  }
  function addDocumentClass() {
    const { documentElement } = document;
    if (documentElement.className.indexOf(W_MOD_IX2) === -1) {
      documentElement.className += ` ${W_MOD_IX2}`;
    }
  }
  function startRenderLoop(store, testManual) {
    const handleFrame = (now) => {
      const { ixSession: ixSession2, ixParameters: ixParameters2 } = store.getState();
      if (ixSession2.active) {
        store.dispatch(animationFrameChanged(now, ixParameters2));
        if (testManual) {
          observeOneRenderTick(store, handleFrame);
        } else {
          requestAnimationFrame(handleFrame);
        }
      }
    };
    handleFrame(window.performance.now());
  }
  function stopEngine(store) {
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.active) {
      const { eventListeners } = ixSession2;
      eventListeners.forEach(clearEventListener);
      clearObjectCache2();
      store.dispatch(sessionStopped());
    }
  }
  function clearEventListener({ target, listenerParams }) {
    target.removeEventListener.apply(target, listenerParams);
  }
  function createGroupInstances({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
    eventTarget,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
    eventConfig,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
    parameterGroup,
    // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
    smoothing,
    // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
    restingValue
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId];
    const { eventTypeId } = event;
    const targetCache = {};
    const instanceActionGroups = {};
    const instanceConfigs = [];
    const { continuousActionGroups } = parameterGroup;
    let { id: parameterId } = parameterGroup;
    if (shouldNamespaceEventParameter2(eventTypeId, eventConfig)) {
      parameterId = getNamespacedParameterId3(eventStateKey, parameterId);
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    continuousActionGroups.forEach((actionGroup) => {
      const { keyframe, actionItems } = actionGroup;
      actionItems.forEach((actionItem) => {
        const { actionTypeId } = actionItem;
        const { target } = actionItem.config;
        if (!target) {
          return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const key = stringifyTarget2(target) + COLON_DELIMITER4 + actionTypeId;
        instanceActionGroups[key] = appendActionItem(
          instanceActionGroups[key],
          keyframe,
          actionItem
        );
        if (!targetCache[key]) {
          targetCache[key] = true;
          const { config } = actionItem;
          getAffectedElements2({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: IX2BrowserApi_exports
          }).forEach((element) => {
            instanceConfigs.push({ element, key });
          });
        }
      });
    });
    instanceConfigs.forEach(({ element, key }) => {
      const actionGroups = instanceActionGroups[key];
      const actionItem = (0, import_get2.default)(actionGroups, `[0].actionItems[0]`, {});
      const { actionTypeId } = actionItem;
      const pluginInstance = isPluginType2(actionTypeId) ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
      const destination = getDestinationValues2(
        { element, actionItem, elementApi: IX2BrowserApi_exports },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance
      );
      createInstance({
        store,
        element,
        eventId,
        actionListId,
        actionItem,
        destination,
        continuous: true,
        parameterId,
        actionGroups,
        smoothing,
        restingValue,
        pluginInstance
      });
    });
  }
  function appendActionItem(actionGroups = [], keyframe, actionItem) {
    const newActionGroups = [...actionGroups];
    let groupIndex;
    newActionGroups.some((group, index) => {
      if (group.keyframe === keyframe) {
        groupIndex = index;
        return true;
      }
      return false;
    });
    if (groupIndex == null) {
      groupIndex = newActionGroups.length;
      newActionGroups.push({
        keyframe,
        actionItems: []
      });
    }
    newActionGroups[groupIndex].actionItems.push(actionItem);
    return newActionGroups;
  }
  function bindEvents(store) {
    const { ixData: ixData2 } = store.getState();
    const { eventTypeMap } = ixData2;
    updateViewportWidth(store);
    (0, import_forEach.default)(eventTypeMap, (events, key) => {
      const logic = IX2VanillaEvents_default[key];
      if (!logic) {
        console.warn(`IX2 event type not configured: ${key}`);
        return;
      }
      bindEventType({
        logic,
        store,
        events
      });
    });
    const { ixSession: ixSession2 } = store.getState();
    if (ixSession2.eventListeners.length) {
      bindResizeEvents(store);
    }
  }
  function bindResizeEvents(store) {
    const handleResize = () => {
      updateViewportWidth(store);
    };
    WINDOW_RESIZE_EVENTS.forEach((type) => {
      window.addEventListener(type, handleResize);
      store.dispatch(eventListenerAdded(window, [type, handleResize]));
    });
    handleResize();
  }
  function updateViewportWidth(store) {
    const { ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const width = window.innerWidth;
    if (width !== ixSession2.viewportWidth) {
      const { mediaQueries } = ixData2;
      store.dispatch(viewportWidthChanged({ width, mediaQueries }));
    }
  }
  function bindEventType({ logic, store, events }) {
    injectBehaviorCSSFixes(events);
    const { types: eventTypes, handler: eventHandler } = logic;
    const { ixData: ixData2 } = store.getState();
    const { actionLists } = ixData2;
    const eventTargets = mapFoundValues(events, getAffectedForEvent);
    if (!(0, import_size.default)(eventTargets)) {
      return;
    }
    (0, import_forEach.default)(eventTargets, (elements, key) => {
      const event = events[key];
      const {
        action: eventAction,
        id: eventId,
        mediaQueries = ixData2.mediaQueryKeys
      } = event;
      const { actionListId } = eventAction.config;
      if (!mediaQueriesEqual2(mediaQueries, ixData2.mediaQueryKeys)) {
        store.dispatch(mediaQueriesDefined());
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
        const configs = Array.isArray(event.config) ? event.config : [event.config];
        configs.forEach((eventConfig) => {
          const { continuousParameterGroupId } = eventConfig;
          const paramGroups = (0, import_get2.default)(
            actionLists,
            `${actionListId}.continuousParameterGroups`,
            []
          );
          const parameterGroup = (0, import_find2.default)(
            paramGroups,
            ({ id }) => id === continuousParameterGroupId
          );
          const smoothing = (eventConfig.smoothing || 0) / 100;
          const restingValue = (eventConfig.restingState || 0) / 100;
          if (!parameterGroup) {
            return;
          }
          elements.forEach((eventTarget, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            createGroupInstances({
              store,
              eventStateKey,
              eventTarget,
              eventId,
              eventConfig,
              actionListId,
              parameterGroup,
              smoothing,
              restingValue
            });
          });
        });
      }
      if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
        renderInitialGroup({ store, actionListId, eventId });
      }
    });
    const handleEvent = (nativeEvent) => {
      const { ixSession: ixSession2 } = store.getState();
      forEachEventTarget(eventTargets, (element, eventId, eventStateKey) => {
        const event = events[eventId];
        const oldState = ixSession2.eventState[eventStateKey];
        const { action: eventAction, mediaQueries = ixData2.mediaQueryKeys } = event;
        if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
          return;
        }
        const handleEventWithConfig = (eventConfig = {}) => {
          const newState = eventHandler(
            {
              store,
              element,
              event,
              eventConfig,
              nativeEvent,
              eventStateKey
            },
            oldState
          );
          if (!shallowEqual2(newState, oldState)) {
            store.dispatch(eventStateChanged(eventStateKey, newState));
          }
        };
        if (eventAction.actionTypeId === ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
          const configs = Array.isArray(event.config) ? event.config : [event.config];
          configs.forEach(handleEventWithConfig);
        } else {
          handleEventWithConfig();
        }
      });
    };
    const handleEventThrottled = (0, import_throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
    const addListeners = ({
      target = document,
      // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
      types,
      // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
      throttle: shouldThrottle
    }) => {
      types.split(" ").filter(Boolean).forEach((type) => {
        const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
        target.addEventListener(type, handlerFunc);
        store.dispatch(eventListenerAdded(target, [type, handlerFunc]));
      });
    };
    if (Array.isArray(eventTypes)) {
      eventTypes.forEach(addListeners);
    } else if (typeof eventTypes === "string") {
      addListeners(logic);
    }
  }
  function injectBehaviorCSSFixes(events) {
    if (!IS_MOBILE_SAFARI) {
      return;
    }
    const injectedSelectors = {};
    let cssText = "";
    for (const eventId in events) {
      const { eventTypeId, target } = events[eventId];
      const selector = getQuerySelector(target);
      if (injectedSelectors[selector]) {
        continue;
      }
      if (eventTypeId === EventTypeConsts.MOUSE_CLICK || eventTypeId === EventTypeConsts.MOUSE_SECOND_CLICK) {
        injectedSelectors[selector] = true;
        cssText += selector + "{cursor: pointer;touch-action: manipulation;}";
      }
    }
    if (cssText) {
      const style = document.createElement("style");
      style.textContent = cssText;
      document.body.appendChild(style);
    }
  }
  function renderInitialGroup({ store, actionListId, eventId }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { actionLists, events } = ixData2;
    const event = events[eventId];
    const actionList = actionLists[actionListId];
    if (actionList && actionList.useFirstGroupAsInitialState) {
      const initialStateItems = (0, import_get2.default)(
        actionList,
        "actionItemGroups[0].actionItems",
        []
      );
      const mediaQueries = (0, import_get2.default)(event, "mediaQueries", ixData2.mediaQueryKeys);
      if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
        return;
      }
      initialStateItems.forEach((actionItem) => {
        const { config: itemConfig, actionTypeId } = actionItem;
        const config = (
          // When useEventTarget is explicitly true, use event target/targets to query elements
          // However, skip this condition when objectId is defined
          itemConfig?.target?.useEventTarget === true && itemConfig?.target?.objectId == null ? { target: event.target, targets: event.targets } : itemConfig
        );
        const itemElements = getAffectedElements2({ config, event, elementApi: IX2BrowserApi_exports });
        const shouldUsePlugin = isPluginType2(actionTypeId);
        itemElements.forEach((element) => {
          const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
          createInstance({
            destination: getDestinationValues2(
              { element, actionItem, elementApi: IX2BrowserApi_exports },
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              pluginInstance
            ),
            immediate: true,
            store,
            element,
            eventId,
            actionItem,
            actionListId,
            pluginInstance
          });
        });
      });
    }
  }
  function stopAllActionGroups({ store }) {
    const { ixInstances: ixInstances2 } = store.getState();
    (0, import_forEach.default)(ixInstances2, (instance) => {
      if (!instance.continuous) {
        const { actionListId, verbose } = instance;
        removeInstance(instance, store);
        if (verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function stopActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId
  }) {
    const { ixInstances: ixInstances2, ixSession: ixSession2 } = store.getState();
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    (0, import_forEach.default)(ixInstances2, (instance) => {
      const boundaryMode = (0, import_get2.default)(instance, "actionItem.config.target.boundaryMode");
      const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
      if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
        if (eventElementRoot && boundaryMode && !elementContains(eventElementRoot, instance.element)) {
          return;
        }
        removeInstance(instance, store);
        if (instance.verbose) {
          store.dispatch(
            actionListPlaybackChanged({ actionListId, isPlaying: false })
          );
        }
      }
    });
  }
  function startActionGroup({
    // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
    store,
    // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
    eventId,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventTarget,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    eventStateKey,
    // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
    actionListId,
    groupIndex = 0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    immediate,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    verbose
  }) {
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    const actionList = (0, import_get2.default)(ixData2, `actionLists.${actionListId}`, {});
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    if (!actionItemGroups || !actionItemGroups.length) {
      return false;
    }
    if (groupIndex >= actionItemGroups.length && (0, import_get2.default)(event, "config.loop")) {
      groupIndex = 0;
    }
    if (groupIndex === 0 && useFirstGroupAsInitialState) {
      groupIndex++;
    }
    const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
    const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : void 0;
    const actionItems = (0, import_get2.default)(actionItemGroups, [groupIndex, "actionItems"], []);
    if (!actionItems.length) {
      return false;
    }
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return false;
    }
    const eventElementRoot = ixSession2.hasBoundaryNodes && eventTarget ? getClosestElement(eventTarget, BOUNDARY_SELECTOR2) : null;
    const carrierIndex = getMaxDurationItemIndex2(actionItems);
    let groupStartResult = false;
    actionItems.forEach((actionItem, actionIndex) => {
      const { config, actionTypeId } = actionItem;
      const shouldUsePlugin = isPluginType2(actionTypeId);
      const { target } = config;
      if (!target) {
        return;
      }
      const elementRoot = target.boundaryMode ? eventElementRoot : null;
      const elements = getAffectedElements2({
        config,
        event,
        eventTarget,
        elementRoot,
        elementApi: IX2BrowserApi_exports
      });
      elements.forEach((element, elementIndex) => {
        const pluginInstance = shouldUsePlugin ? createPluginInstance2(actionTypeId)(element, actionItem) : null;
        const pluginDuration = shouldUsePlugin ? getPluginDuration2(actionTypeId)(element, actionItem) : null;
        groupStartResult = true;
        const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
        const computedStyle = getComputedStyle3({ element, actionItem });
        const destination = getDestinationValues2(
          { element, actionItem, elementApi: IX2BrowserApi_exports },
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          pluginInstance
        );
        createInstance({
          store,
          element,
          actionItem,
          eventId,
          eventTarget,
          eventStateKey,
          actionListId,
          groupIndex,
          isCarrier,
          computedStyle,
          destination,
          immediate,
          verbose,
          pluginInstance,
          pluginDuration,
          instanceDelay
        });
      });
    });
    return groupStartResult;
  }
  function createInstance(options) {
    const { store, computedStyle, ...rest } = options;
    const {
      element,
      actionItem,
      immediate,
      pluginInstance,
      continuous,
      restingValue,
      eventId
    } = rest;
    const autoStart = !continuous;
    const instanceId = getInstanceId2();
    const { ixElements: ixElements3, ixSession: ixSession2, ixData: ixData2 } = store.getState();
    const elementId = getElementId2(ixElements3, element);
    const { refState: refState2 } = ixElements3[elementId] || {};
    const refType = getRefType(element);
    const skipMotion = (
      // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
      ixSession2.reducedMotion && ReducedMotionTypes[actionItem.actionTypeId]
    );
    let skipToValue;
    if (skipMotion && continuous) {
      switch (ixData2.events[eventId]?.eventTypeId) {
        case EventTypeConsts.MOUSE_MOVE:
        case EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          skipToValue = restingValue;
          break;
        default:
          skipToValue = 0.5;
          break;
      }
    }
    const origin = getInstanceOrigin2(
      element,
      refState2,
      computedStyle,
      actionItem,
      IX2BrowserApi_exports,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      pluginInstance
    );
    store.dispatch(
      instanceAdded({
        instanceId,
        elementId,
        origin,
        refType,
        skipMotion,
        skipToValue,
        ...rest
      })
    );
    dispatchCustomEvent(document.body, "ix2-animation-started", instanceId);
    if (immediate) {
      renderImmediateInstance(store, instanceId);
      return;
    }
    observeStore2({
      store,
      // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
      select: ({ ixInstances: ixInstances2 }) => ixInstances2[instanceId],
      onChange: handleInstanceChange
    });
    if (autoStart) {
      store.dispatch(instanceStarted(instanceId, ixSession2.tick));
    }
  }
  function removeInstance(instance, store) {
    dispatchCustomEvent(document.body, "ix2-animation-stopping", {
      instanceId: instance.id,
      state: store.getState()
    });
    const { elementId, actionItem } = instance;
    const { ixElements: ixElements3 } = store.getState();
    const { ref, refType } = ixElements3[elementId] || {};
    if (refType === HTML_ELEMENT4) {
      cleanupHTMLElement2(ref, actionItem, IX2BrowserApi_exports);
    }
    store.dispatch(instanceRemoved(instance.id));
  }
  function dispatchCustomEvent(element, eventName, detail) {
    const event = document.createEvent("CustomEvent");
    event.initCustomEvent(eventName, true, true, detail);
    element.dispatchEvent(event);
  }
  function renderImmediateInstance(store, instanceId) {
    const { ixParameters: ixParameters2 } = store.getState();
    store.dispatch(instanceStarted(instanceId, 0));
    store.dispatch(animationFrameChanged(performance.now(), ixParameters2));
    const { ixInstances: ixInstances2 } = store.getState();
    handleInstanceChange(ixInstances2[instanceId], store);
  }
  function handleInstanceChange(instance, store) {
    const {
      active,
      continuous,
      complete,
      elementId,
      actionItem,
      actionTypeId,
      renderType,
      current,
      groupIndex,
      eventId,
      eventTarget,
      eventStateKey,
      actionListId,
      isCarrier,
      styleProp,
      verbose,
      pluginInstance
    } = instance;
    const { ixData: ixData2, ixSession: ixSession2 } = store.getState();
    const { events } = ixData2;
    const event = events[eventId] || {};
    const { mediaQueries = ixData2.mediaQueryKeys } = event;
    if (!shouldAllowMediaQuery2(mediaQueries, ixSession2.mediaQueryKey)) {
      return;
    }
    if (continuous || active || complete) {
      if (current || renderType === RENDER_GENERAL4 && complete) {
        store.dispatch(
          elementStateChanged(elementId, actionTypeId, current, actionItem)
        );
        const { ixElements: ixElements3 } = store.getState();
        const { ref, refType, refState: refState2 } = ixElements3[elementId] || {};
        const actionState = refState2 && refState2[actionTypeId];
        if (refType === HTML_ELEMENT4 || isPluginType2(actionTypeId)) {
          renderHTMLElement2(
            ref,
            refState2,
            actionState,
            eventId,
            actionItem,
            styleProp,
            IX2BrowserApi_exports,
            renderType,
            pluginInstance
          );
        }
      }
      if (complete) {
        if (isCarrier) {
          const started = startActionGroup({
            store,
            eventId,
            eventTarget,
            eventStateKey,
            actionListId,
            groupIndex: groupIndex + 1,
            verbose
          });
          if (verbose && !started) {
            store.dispatch(
              actionListPlaybackChanged({ actionListId, isPlaying: false })
            );
          }
        }
        removeInstance(instance, store);
      }
    }
  }
  var import_find2, import_get2, import_size, import_omitBy, import_isEmpty, import_mapValues, import_forEach, import_throttle, import_shared6, QuickEffectsIdList, isQuickEffect, COLON_DELIMITER4, BOUNDARY_SELECTOR2, HTML_ELEMENT4, RENDER_GENERAL4, W_MOD_IX2, getAffectedElements2, getElementId2, getDestinationValues2, observeStore2, getInstanceId2, renderHTMLElement2, clearAllStyles2, getMaxDurationItemIndex2, getComputedStyle3, getInstanceOrigin2, reduceListToGroup2, shouldNamespaceEventParameter2, getNamespacedParameterId3, shouldAllowMediaQuery2, cleanupHTMLElement2, clearObjectCache2, stringifyTarget2, mediaQueriesEqual2, shallowEqual2, isPluginType2, createPluginInstance2, getPluginDuration2, ua, IS_MOBILE_SAFARI, THROTTLED_EVENT_WAIT, WINDOW_RESIZE_EVENTS, mapFoundValues, forEachEventTarget, getAffectedForEvent;
  var init_IX2VanillaEngine = __esm({
    "packages/systems/ix2/engine/logic/IX2VanillaEngine.ts"() {
      "use strict";
      import_find2 = __toESM(require_find());
      import_get2 = __toESM(require_get());
      import_size = __toESM(require_size());
      import_omitBy = __toESM(require_omitBy());
      import_isEmpty = __toESM(require_isEmpty());
      import_mapValues = __toESM(require_mapValues());
      import_forEach = __toESM(require_forEach());
      import_throttle = __toESM(require_throttle());
      init_shared_constants();
      import_shared6 = __toESM(require_shared2());
      init_IX2EngineActions();
      init_IX2BrowserApi();
      init_IX2VanillaEvents();
      QuickEffectsIdList = Object.keys(QuickEffectIds);
      isQuickEffect = (actionTypeId) => QuickEffectsIdList.includes(actionTypeId);
      ({
        COLON_DELIMITER: COLON_DELIMITER4,
        BOUNDARY_SELECTOR: BOUNDARY_SELECTOR2,
        HTML_ELEMENT: HTML_ELEMENT4,
        RENDER_GENERAL: RENDER_GENERAL4,
        W_MOD_IX: W_MOD_IX2
      } = IX2EngineConstants_exports);
      ({
        getAffectedElements: getAffectedElements2,
        getElementId: getElementId2,
        getDestinationValues: getDestinationValues2,
        observeStore: observeStore2,
        getInstanceId: getInstanceId2,
        renderHTMLElement: renderHTMLElement2,
        clearAllStyles: clearAllStyles2,
        getMaxDurationItemIndex: getMaxDurationItemIndex2,
        getComputedStyle: getComputedStyle3,
        getInstanceOrigin: getInstanceOrigin2,
        reduceListToGroup: reduceListToGroup2,
        shouldNamespaceEventParameter: shouldNamespaceEventParameter2,
        getNamespacedParameterId: getNamespacedParameterId3,
        shouldAllowMediaQuery: shouldAllowMediaQuery2,
        cleanupHTMLElement: cleanupHTMLElement2,
        clearObjectCache: clearObjectCache2,
        stringifyTarget: stringifyTarget2,
        mediaQueriesEqual: mediaQueriesEqual2,
        shallowEqual: shallowEqual2
      } = import_shared6.IX2VanillaUtils);
      ({ isPluginType: isPluginType2, createPluginInstance: createPluginInstance2, getPluginDuration: getPluginDuration2 } = import_shared6.IX2VanillaPlugins);
      ua = navigator.userAgent;
      IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
      THROTTLED_EVENT_WAIT = 12;
      WINDOW_RESIZE_EVENTS = ["resize", "orientationchange"];
      mapFoundValues = (object, iteratee) => (0, import_omitBy.default)((0, import_mapValues.default)(object, iteratee), import_isEmpty.default);
      forEachEventTarget = (eventTargets, eventCallback) => {
        (0, import_forEach.default)(eventTargets, (elements, eventId) => {
          elements.forEach((element, index) => {
            const eventStateKey = eventId + COLON_DELIMITER4 + index;
            eventCallback(element, eventId, eventStateKey);
          });
        });
      };
      getAffectedForEvent = (event) => {
        const config = { target: event.target, targets: event.targets };
        return getAffectedElements2({ config, elementApi: IX2BrowserApi_exports });
      };
    }
  });

  // packages/systems/ix2/engine/index.js
  var require_engine = __commonJS({
    "packages/systems/ix2/engine/index.js"(exports) {
      "use strict";
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.actions = void 0;
      exports.destroy = destroy;
      exports.init = init;
      exports.setEnv = setEnv;
      exports.store = void 0;
      require_includes3();
      var _redux = require_lib2();
      var _IX2Reducer = _interopRequireDefault((init_IX2Reducer(), __toCommonJS(IX2Reducer_exports)));
      var _IX2VanillaEngine = (init_IX2VanillaEngine(), __toCommonJS(IX2VanillaEngine_exports));
      var actions = _interopRequireWildcard((init_IX2EngineActions(), __toCommonJS(IX2EngineActions_exports)));
      exports.actions = actions;
      var store = exports.store = (0, _redux.createStore)(_IX2Reducer.default);
      function setEnv(env) {
        if (env()) {
          (0, _IX2VanillaEngine.observeRequests)(store);
        }
      }
      function init(rawData) {
        destroy();
        (0, _IX2VanillaEngine.startEngine)({
          store,
          rawData,
          allowEvents: true
        });
      }
      function destroy() {
        (0, _IX2VanillaEngine.stopEngine)(store);
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js
  var require_webflow_ix2 = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var ix2 = require_engine();
      ix2.setEnv(Webflow.env);
      Webflow.define("ix2", module.exports = function() {
        return ix2;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($, _) {
        var api = {};
        var $win = $(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          if (link.getAttribute("hreflang")) {
            return;
          }
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            if (anchor.link.attr("hreflang")) {
              return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $(window);
        var $doc = $(document);
        var $body = $(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease2(elapsed / duration);
        }
        function ease2(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var {
            WF_CLICK_EMPTY,
            WF_CLICK_SCROLL
          } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($) {
        var api = {};
        var getSelection = window.getSelection;
        $.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $.Event(type, {
            originalEvent: evt
          });
          $(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Form/webflow-forms.js
  var require_webflow_forms = __commonJS({
    "packages/shared/render/plugins/Form/webflow-forms.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("forms", module.exports = function($, _) {
        var api = {};
        var $doc = $(document);
        var $forms;
        var loc = window.location;
        var retro = window.XDomainRequest && !window.atob;
        var namespace = ".w-form";
        var siteId;
        var emailField = /e(-)?mail/i;
        var emailValue = /^\S+@\S+$/;
        var alert = window.alert;
        var inApp = Webflow.env();
        var listening;
        var formUrl;
        var signFileUrl;
        var chimpRegex = /list-manage[1-9]?.com/i;
        var disconnected = _.debounce(function() {
          alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
        }, 100);
        api.ready = api.design = api.preview = function() {
          init();
          if (!inApp && !listening) {
            addListeners();
          }
        };
        function init() {
          siteId = $("html").attr("data-wf-site");
          formUrl = "https://webflow.com/api/v1/form/" + siteId;
          if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
          }
          signFileUrl = `${formUrl}/signFile`;
          $forms = $(namespace + " form");
          if (!$forms.length) {
            return;
          }
          $forms.each(build);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              form: $el
            });
          }
          reset(data);
          var wrap = $el.closest("div.w-form");
          data.done = wrap.find("> .w-form-done");
          data.fail = wrap.find("> .w-form-fail");
          data.fileUploads = wrap.find(".w-file-upload");
          data.fileUploads.each(function(j) {
            initFileUpload(j, data);
          });
          var formName = data.form.attr("aria-label") || data.form.attr("data-name") || "Form";
          if (!data.done.attr("aria-label")) {
            data.form.attr("aria-label", formName);
          }
          data.done.attr("tabindex", "-1");
          data.done.attr("role", "region");
          if (!data.done.attr("aria-label")) {
            data.done.attr("aria-label", formName + " success");
          }
          data.fail.attr("tabindex", "-1");
          data.fail.attr("role", "region");
          if (!data.fail.attr("aria-label")) {
            data.fail.attr("aria-label", formName + " failure");
          }
          var action = data.action = $el.attr("action");
          data.handler = null;
          data.redirect = $el.attr("data-redirect");
          if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
          }
          if (action) {
            return;
          }
          if (siteId) {
            data.handler = true ? exportedSubmitWebflow : (() => {
              const hostedSubmitHandler = null.default;
              return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
            })();
            return;
          }
          disconnected();
        }
        function addListeners() {
          listening = true;
          $doc.on("submit", namespace + " form", function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
              data.evt = evt;
              data.handler(data);
            }
          });
          const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
          const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
          const CHECKED_CLASS = "w--redirected-checked";
          const FOCUSED_CLASS = "w--redirected-focus";
          const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
          const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
          const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
          $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
          });
          $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass("w-radio-input")) {
              $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
          });
          CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
            $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
              $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
              $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
          });
        }
        function reset(data) {
          var btn = data.btn = data.form.find(':input[type="submit"]');
          data.wait = data.btn.attr("data-wait") || null;
          data.success = false;
          btn.prop("disabled", false);
          data.label && btn.val(data.label);
        }
        function disableBtn(data) {
          var btn = data.btn;
          var wait = data.wait;
          btn.prop("disabled", true);
          if (wait) {
            data.label = btn.val();
            btn.val(wait);
          }
        }
        function findFields(form, result) {
          var status = null;
          result = result || {};
          form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr("type");
            var name = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === "checkbox") {
              value = field.is(":checked");
            } else if (type === "radio") {
              if (result[name] === null || typeof result[name] === "string") {
                return;
              }
              value = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
            }
            if (typeof value === "string") {
              value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
          });
          return status;
        }
        function findFileUploads(form) {
          var result = {};
          form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
            var value = field.attr("data-value");
            if (typeof value === "string") {
              value = $.trim(value);
            }
            result[name] = value;
          });
          return result;
        }
        const trackingCookieNameMap = {
          _mkto_trk: "marketo"
          // __hstc: 'hubspot',
        };
        function collectEnterpriseTrackingCookies() {
          const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
            const splitCookie = cookie.split("=");
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
              const mappedName = trackingCookieNameMap[name];
              const value = splitCookie.slice(1).join("=");
              acc[mappedName] = value;
            }
            return acc;
          }, {});
          return cookies;
        }
        function getStatus(field, type, name, value) {
          var status = null;
          if (type === "password") {
            status = "Passwords cannot be submitted.";
          } else if (field.attr("required")) {
            if (!value) {
              status = "Please fill out the required field: " + name;
            } else if (emailField.test(field.attr("type"))) {
              if (!emailValue.test(value)) {
                status = "Please enter a valid email address for: " + name;
              }
            }
          } else if (name === "g-recaptcha-response" && !value) {
            status = "Please confirm you\u2019re not a robot.";
          }
          return status;
        }
        function exportedSubmitWebflow(data) {
          preventDefault(data);
          afterSubmit(data);
        }
        function submitMailChimp(data) {
          reset(data);
          var form = data.form;
          var payload = {};
          if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr("method", "post");
            return;
          }
          preventDefault(data);
          var status = findFields(form, payload);
          if (status) {
            return alert(status);
          }
          disableBtn(data);
          var fullName;
          _.each(payload, function(value, key) {
            if (emailField.test(key)) {
              payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
              fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
              payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
              payload.LNAME = value;
            }
          });
          if (fullName && !payload.FNAME) {
            fullName = fullName.split(" ");
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
          }
          var url = data.action.replace("/post?", "/post-json?") + "&c=?";
          var userId = url.indexOf("u=") + 2;
          userId = url.substring(userId, url.indexOf("&", userId));
          var listId = url.indexOf("id=") + 3;
          listId = url.substring(listId, url.indexOf("&", listId));
          payload["b_" + userId + "_" + listId] = "";
          $.ajax({
            url,
            data: payload,
            dataType: "jsonp"
          }).done(function(resp) {
            data.success = resp.result === "success" || /already/.test(resp.msg);
            if (!data.success) {
              console.info("MailChimp error: " + resp.msg);
            }
            afterSubmit(data);
          }).fail(function() {
            afterSubmit(data);
          });
        }
        function afterSubmit(data) {
          var form = data.form;
          var redirect = data.redirect;
          var success = data.success;
          if (success && redirect) {
            Webflow.location(redirect);
            return;
          }
          data.done.toggle(success);
          data.fail.toggle(!success);
          if (success) {
            data.done.focus();
          } else {
            data.fail.focus();
          }
          form.toggle(!success);
          reset(data);
        }
        function preventDefault(data) {
          data.evt && data.evt.preventDefault();
          data.evt = null;
        }
        function initFileUpload(i, form) {
          if (!form.fileUploads || !form.fileUploads[i]) {
            return;
          }
          var file;
          var $el = $(form.fileUploads[i]);
          var $defaultWrap = $el.find("> .w-file-upload-default");
          var $uploadingWrap = $el.find("> .w-file-upload-uploading");
          var $successWrap = $el.find("> .w-file-upload-success");
          var $errorWrap = $el.find("> .w-file-upload-error");
          var $input = $defaultWrap.find(".w-file-upload-input");
          var $label = $defaultWrap.find(".w-file-upload-label");
          var $labelChildren = $label.children();
          var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
          var $fileEl = $successWrap.find(".w-file-upload-file");
          var $removeEl = $successWrap.find(".w-file-remove-link");
          var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
          var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
          var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
          var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
          if (!inApp) {
            $label.on("click keydown", function(e) {
              if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                return;
              }
              e.preventDefault();
              $input.click();
            });
          }
          $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
          $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
          if (!inApp) {
            $removeEl.on("click keydown", function(e) {
              if (e.type === "keydown") {
                if (e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
              }
              $input.removeAttr("data-value");
              $input.val("");
              $fileNameEl.html("");
              $defaultWrap.toggle(true);
              $successWrap.toggle(false);
              $label.focus();
            });
            $input.on("change", function(e) {
              file = e.target && e.target.files && e.target.files[0];
              if (!file) {
                return;
              }
              $defaultWrap.toggle(false);
              $errorWrap.toggle(false);
              $uploadingWrap.toggle(true);
              $uploadingWrap.focus();
              $fileNameEl.text(file.name);
              if (!isUploading()) {
                disableBtn(form);
              }
              form.fileUploads[i].uploading = true;
              signFile(file, afterSign);
            });
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
          } else {
            $input.on("click", function(e) {
              e.preventDefault();
            });
            $label.on("click", function(e) {
              e.preventDefault();
            });
            $labelChildren.on("click", function(e) {
              e.preventDefault();
            });
          }
          function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
              userError = typeErrMsg;
            } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
              userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr("data-value");
            $input.val("");
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function afterSign(err, data) {
            if (err) {
              return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr("data-value", fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
          }
          function afterUpload(err) {
            if (err) {
              return parseError(err);
            }
            $uploadingWrap.toggle(false);
            $successWrap.css("display", "inline-block");
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
              reset(form);
            }
          }
          function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
              return value.uploading;
            });
          }
        }
        function signFile(file, cb) {
          var payload = new URLSearchParams({
            name: file.name,
            size: file.size
          });
          $.ajax({
            type: "GET",
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
          }).done(function(data) {
            cb(null, data);
          }).fail(function(err) {
            cb(err);
          });
        }
        function uploadS3(url, data, file, fileName, cb) {
          var formData = new FormData();
          for (var k in data) {
            formData.append(k, data[k]);
          }
          formData.append("file", file, fileName);
          $.ajax({
            type: "POST",
            url,
            data: formData,
            processData: false,
            contentType: false
          }).done(function() {
            cb(null);
          }).fail(function(err) {
            cb(err);
          });
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Navbar/webflow-navbar.js
  var require_webflow_navbar = __commonJS({
    "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      Webflow.define("navbar", module.exports = function($, _) {
        var api = {};
        var tram = $.tram;
        var $win = $(window);
        var $doc = $(document);
        var debounce = _.debounce;
        var $body;
        var $navbars;
        var designer;
        var inEditor;
        var inApp = Webflow.env();
        var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
        var namespace = ".w-nav";
        var navbarOpenedButton = "w--open";
        var navbarOpenedDropdown = "w--nav-dropdown-open";
        var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
        var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
        var navbarOpenedLink = "w--nav-link-open";
        var ix = IXEvents.triggers;
        var menuSibling = $();
        api.ready = api.design = api.preview = init;
        api.destroy = function() {
          menuSibling = $();
          removeListeners();
          if ($navbars && $navbars.length) {
            $navbars.each(teardown);
          }
        };
        function init() {
          designer = inApp && Webflow.env("design");
          inEditor = Webflow.env("editor");
          $body = $(document.body);
          $navbars = $doc.find(namespace);
          if (!$navbars.length) {
            return;
          }
          $navbars.each(build);
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.resize.off(resizeAll);
        }
        function addListeners() {
          Webflow.resize.on(resizeAll);
        }
        function resizeAll() {
          $navbars.each(resize);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              open: false,
              el: $el,
              config: {},
              selectedIdx: -1
            });
          }
          data.menu = $el.find(".w-nav-menu");
          data.links = data.menu.find(".w-nav-link");
          data.dropdowns = data.menu.find(".w-dropdown");
          data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
          data.dropdownList = data.menu.find(".w-dropdown-list");
          data.button = $el.find(".w-nav-button");
          data.container = $el.find(".w-container");
          data.overlayContainerId = "w-nav-overlay-" + i;
          data.outside = outside(data);
          var navBrandLink = $el.find(".w-nav-brand");
          if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
            navBrandLink.attr("aria-label", "home");
          }
          data.button.attr("style", "-webkit-user-select: text;");
          if (data.button.attr("aria-label") == null) {
            data.button.attr("aria-label", "menu");
          }
          data.button.attr("role", "button");
          data.button.attr("tabindex", "0");
          data.button.attr("aria-controls", data.overlayContainerId);
          data.button.attr("aria-haspopup", "menu");
          data.button.attr("aria-expanded", "false");
          data.el.off(namespace);
          data.button.off(namespace);
          data.menu.off(namespace);
          configure(data);
          if (designer) {
            removeOverlay(data);
            data.el.on("setting" + namespace, handler(data));
          } else {
            addOverlay(data);
            data.button.on("click" + namespace, toggle(data));
            data.menu.on("click" + namespace, "a", navigate(data));
            data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
          }
          resize(i, el);
        }
        function teardown(i, el) {
          var data = $.data(el, namespace);
          if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
          }
        }
        function removeOverlay(data) {
          if (!data.overlay) {
            return;
          }
          close(data, true);
          data.overlay.remove();
          data.overlay = null;
        }
        function addOverlay(data) {
          if (data.overlay) {
            return;
          }
          data.overlay = $(overlay).appendTo(data.el);
          data.overlay.attr("id", data.overlayContainerId);
          data.parent = data.menu.parent();
          close(data, true);
        }
        function configure(data) {
          var config = {};
          var old = data.config || {};
          var animation = config.animation = data.el.attr("data-animation") || "default";
          config.animOver = /^over/.test(animation);
          config.animDirect = /left$/.test(animation) ? -1 : 1;
          if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
          }
          config.easing = data.el.attr("data-easing") || "ease";
          config.easing2 = data.el.attr("data-easing2") || "ease";
          var duration = data.el.attr("data-duration");
          config.duration = duration != null ? Number(duration) : 400;
          config.docHeight = data.el.attr("data-doc-height");
          data.config = config;
        }
        function handler(data) {
          return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            data.open && _.defer(function() {
              if (winWidth !== $win.width()) {
                reopen(data);
              }
            });
          };
        }
        function makeToggleButtonKeyboardHandler(data) {
          return function(evt) {
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                toggle(data)();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN:
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (!data.open) {
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function makeLinksKeyboardHandler(data) {
          return function(evt) {
            if (!data.open) {
              return;
            }
            data.selectedIdx = data.links.index(document.activeElement);
            switch (evt.keyCode) {
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                data.button.focus();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_LEFT:
              case KEY_CODES.ARROW_UP: {
                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN: {
                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function focusSelectedLink(data) {
          if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
          }
        }
        function reopen(data) {
          if (!data.open) {
            return;
          }
          close(data, true);
          open(data, true);
        }
        function toggle(data) {
          return debounce(function() {
            data.open ? close(data) : open(data);
          });
        }
        function navigate(data) {
          return function(evt) {
            var link = $(this);
            var href = link.attr("href");
            if (!Webflow.validClick(evt.currentTarget)) {
              evt.preventDefault();
              return;
            }
            if (href && href.indexOf("#") === 0 && data.open) {
              close(data);
            }
          };
        }
        function outside(data) {
          if (data.outside) {
            $doc.off("click" + namespace, data.outside);
          }
          return function(evt) {
            var $target = $(evt.target);
            if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
              return;
            }
            outsideDebounced(data, $target);
          };
        }
        var outsideDebounced = debounce(function(data, $target) {
          if (!data.open) {
            return;
          }
          var menu = $target.closest(".w-nav-menu");
          if (!data.menu.is(menu)) {
            close(data);
          }
        });
        function resize(i, el) {
          var data = $.data(el, namespace);
          var collapsed = data.collapsed = data.button.css("display") !== "none";
          if (data.open && !collapsed && !designer) {
            close(data, true);
          }
          if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
          }
          if (data.open) {
            setOverlayHeight(data);
          }
        }
        var maxWidth = "max-width";
        function updateMax(data) {
          var containMax = data.container.css(maxWidth);
          if (containMax === "none") {
            containMax = "";
          }
          return function(i, link) {
            link = $(link);
            link.css(maxWidth, "");
            if (link.css(maxWidth) === "none") {
              link.css(maxWidth, containMax);
            }
          };
        }
        function addMenuOpen(i, el) {
          el.setAttribute("data-nav-menu-open", "");
        }
        function removeMenuOpen(i, el) {
          el.removeAttribute("data-nav-menu-open");
        }
        function open(data, immediate) {
          if (data.open) {
            return;
          }
          data.open = true;
          data.menu.each(addMenuOpen);
          data.links.addClass(navbarOpenedLink);
          data.dropdowns.addClass(navbarOpenedDropdown);
          data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
          data.dropdownList.addClass(navbarOpenedDropdownList);
          data.button.addClass(navbarOpenedButton);
          var config = data.config;
          var animation = config.animation;
          if (animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          var bodyHeight = setOverlayHeight(data);
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          var navbarEl = data.el[0];
          resize(0, navbarEl);
          ix.intro(0, navbarEl);
          Webflow.redraw.up();
          if (!designer) {
            $doc.on("click" + namespace, data.outside);
          }
          if (immediate) {
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing;
          if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
          }
          if (config.animOver) {
            tram(data.menu).add(transConfig).set({
              x: config.animDirect * menuWidth,
              height: bodyHeight
            }).start({
              x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).set({
            y: -offsetY
          }).start({
            y: 0
          }).then(complete);
          function complete() {
            data.button.attr("aria-expanded", "true");
          }
        }
        function setOverlayHeight(data) {
          var config = data.config;
          var bodyHeight = config.docHeight ? $doc.height() : $body.height();
          if (config.animOver) {
            data.menu.height(bodyHeight);
          } else if (data.el.css("position") !== "fixed") {
            bodyHeight -= data.el.outerHeight(true);
          }
          data.overlay && data.overlay.height(bodyHeight);
          return bodyHeight;
        }
        function close(data, immediate) {
          if (!data.open) {
            return;
          }
          data.open = false;
          data.button.removeClass(navbarOpenedButton);
          var config = data.config;
          if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          ix.outro(0, data.el[0]);
          $doc.off("click" + namespace, data.outside);
          if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing2;
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          if (config.animOver) {
            tram(data.menu).add(transConfig).start({
              x: menuWidth * config.animDirect
            }).then(complete);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).start({
            y: -offsetY
          }).then(complete);
          function complete() {
            data.menu.height("");
            tram(data.menu).set({
              x: 0,
              y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
              menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
              data.overlay.attr("style", "").hide();
            }
            data.el.triggerHandler("w-close");
            data.button.attr("aria-expanded", "false");
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Slider/webflow-slider.js
  var require_webflow_slider = __commonJS({
    "packages/shared/render/plugins/Slider/webflow-slider.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      var FOCUSABLE_SELECTOR = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
      Webflow.define("slider", module.exports = function($, _) {
        var api = {};
        var tram = $.tram;
        var $doc = $(document);
        var $sliders;
        var designer;
        var inApp = Webflow.env();
        var namespace = ".w-slider";
        var dot = '<div class="w-slider-dot" data-wf-ignore />';
        var ariaLiveLabelHtml = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />';
        var forceShow = "w-slider-force-show";
        var ix = IXEvents.triggers;
        var fallback;
        var inRedraw = false;
        api.ready = function() {
          designer = Webflow.env("design");
          init();
        };
        api.design = function() {
          designer = true;
          setTimeout(init, 1e3);
        };
        api.preview = function() {
          designer = false;
          init();
        };
        api.redraw = function() {
          inRedraw = true;
          init();
          inRedraw = false;
        };
        api.destroy = removeListeners;
        function init() {
          $sliders = $doc.find(namespace);
          if (!$sliders.length) {
            return;
          }
          $sliders.each(build);
          if (fallback) {
            return;
          }
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.resize.off(renderAll);
          Webflow.redraw.off(api.redraw);
        }
        function addListeners() {
          Webflow.resize.on(renderAll);
          Webflow.redraw.on(api.redraw);
        }
        function renderAll() {
          $sliders.filter(":visible").each(render);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              index: 0,
              depth: 1,
              hasFocus: {
                keyboard: false,
                mouse: false
              },
              el: $el,
              config: {}
            });
          }
          data.mask = $el.children(".w-slider-mask");
          data.left = $el.children(".w-slider-arrow-left");
          data.right = $el.children(".w-slider-arrow-right");
          data.nav = $el.children(".w-slider-nav");
          data.slides = data.mask.children(".w-slide");
          data.slides.each(ix.reset);
          if (inRedraw) {
            data.maskWidth = 0;
          }
          if ($el.attr("role") === void 0) {
            $el.attr("role", "region");
          }
          if ($el.attr("aria-label") === void 0) {
            $el.attr("aria-label", "carousel");
          }
          var slideViewId = data.mask.attr("id");
          if (!slideViewId) {
            slideViewId = "w-slider-mask-" + i;
            data.mask.attr("id", slideViewId);
          }
          if (!designer && !data.ariaLiveLabel) {
            data.ariaLiveLabel = $(ariaLiveLabelHtml).appendTo(data.mask);
          }
          data.left.attr("role", "button");
          data.left.attr("tabindex", "0");
          data.left.attr("aria-controls", slideViewId);
          if (data.left.attr("aria-label") === void 0) {
            data.left.attr("aria-label", "previous slide");
          }
          data.right.attr("role", "button");
          data.right.attr("tabindex", "0");
          data.right.attr("aria-controls", slideViewId);
          if (data.right.attr("aria-label") === void 0) {
            data.right.attr("aria-label", "next slide");
          }
          if (!tram.support.transform) {
            data.left.hide();
            data.right.hide();
            data.nav.hide();
            fallback = true;
            return;
          }
          data.el.off(namespace);
          data.left.off(namespace);
          data.right.off(namespace);
          data.nav.off(namespace);
          configure(data);
          if (designer) {
            data.el.on("setting" + namespace, handler(data));
            stopTimer(data);
            data.hasTimer = false;
          } else {
            data.el.on("swipe" + namespace, handler(data));
            data.left.on("click" + namespace, previousFunction(data));
            data.right.on("click" + namespace, next(data));
            data.left.on("keydown" + namespace, keyboardSlideButtonsFunction(data, previousFunction));
            data.right.on("keydown" + namespace, keyboardSlideButtonsFunction(data, next));
            data.nav.on("keydown" + namespace, "> div", handler(data));
            if (data.config.autoplay && !data.hasTimer) {
              data.hasTimer = true;
              data.timerCount = 1;
              startTimer(data);
            }
            data.el.on("mouseenter" + namespace, hasFocus(data, true, "mouse"));
            data.el.on("focusin" + namespace, hasFocus(data, true, "keyboard"));
            data.el.on("mouseleave" + namespace, hasFocus(data, false, "mouse"));
            data.el.on("focusout" + namespace, hasFocus(data, false, "keyboard"));
          }
          data.nav.on("click" + namespace, "> div", handler(data));
          if (!inApp) {
            data.mask.contents().filter(function() {
              return this.nodeType === 3;
            }).remove();
          }
          var $elHidden = $el.filter(":hidden");
          $elHidden.addClass(forceShow);
          var $elHiddenParents = $el.parents(":hidden");
          $elHiddenParents.addClass(forceShow);
          if (!inRedraw) {
            render(i, el);
          }
          $elHidden.removeClass(forceShow);
          $elHiddenParents.removeClass(forceShow);
        }
        function configure(data) {
          var config = {};
          config.crossOver = 0;
          config.animation = data.el.attr("data-animation") || "slide";
          if (config.animation === "outin") {
            config.animation = "cross";
            config.crossOver = 0.5;
          }
          config.easing = data.el.attr("data-easing") || "ease";
          var duration = data.el.attr("data-duration");
          config.duration = duration != null ? parseInt(duration, 10) : 500;
          if (isAttrTrue(data.el.attr("data-infinite"))) {
            config.infinite = true;
          }
          if (isAttrTrue(data.el.attr("data-disable-swipe"))) {
            config.disableSwipe = true;
          }
          if (isAttrTrue(data.el.attr("data-hide-arrows"))) {
            config.hideArrows = true;
          } else if (data.config.hideArrows) {
            data.left.show();
            data.right.show();
          }
          if (isAttrTrue(data.el.attr("data-autoplay"))) {
            config.autoplay = true;
            config.delay = parseInt(data.el.attr("data-delay"), 10) || 2e3;
            config.timerMax = parseInt(data.el.attr("data-autoplay-limit"), 10);
            var touchEvents = "mousedown" + namespace + " touchstart" + namespace;
            if (!designer) {
              data.el.off(touchEvents).one(touchEvents, function() {
                stopTimer(data);
              });
            }
          }
          var arrowWidth = data.right.width();
          config.edge = arrowWidth ? arrowWidth + 40 : 100;
          data.config = config;
        }
        function isAttrTrue(value) {
          return value === "1" || value === "true";
        }
        function hasFocus(data, focusIn, eventType) {
          return function(evt) {
            if (!focusIn) {
              if ($.contains(data.el.get(0), evt.relatedTarget)) {
                return;
              }
              data.hasFocus[eventType] = focusIn;
              if (data.hasFocus.mouse && eventType === "keyboard" || data.hasFocus.keyboard && eventType === "mouse") {
                return;
              }
            } else {
              data.hasFocus[eventType] = focusIn;
            }
            if (focusIn) {
              data.ariaLiveLabel.attr("aria-live", "polite");
              if (data.hasTimer) {
                stopTimer(data);
              }
            } else {
              data.ariaLiveLabel.attr("aria-live", "off");
              if (data.hasTimer) {
                startTimer(data);
              }
            }
            return;
          };
        }
        function keyboardSlideButtonsFunction(data, directionFunction) {
          return function(evt) {
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                directionFunction(data)();
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function previousFunction(data) {
          return function() {
            change(data, {
              index: data.index - 1,
              vector: -1
            });
          };
        }
        function next(data) {
          return function() {
            change(data, {
              index: data.index + 1,
              vector: 1
            });
          };
        }
        function select(data, value) {
          var found = null;
          if (value === data.slides.length) {
            init();
            layout(data);
          }
          _.each(data.anchors, function(anchor, index) {
            $(anchor.els).each(function(i, el) {
              if ($(el).index() === value) {
                found = index;
              }
            });
          });
          if (found != null) {
            change(data, {
              index: found,
              immediate: true
            });
          }
        }
        function startTimer(data) {
          stopTimer(data);
          var config = data.config;
          var timerMax = config.timerMax;
          if (timerMax && data.timerCount++ > timerMax) {
            return;
          }
          data.timerId = window.setTimeout(function() {
            if (data.timerId == null || designer) {
              return;
            }
            next(data)();
            startTimer(data);
          }, config.delay);
        }
        function stopTimer(data) {
          window.clearTimeout(data.timerId);
          data.timerId = null;
        }
        function handler(data) {
          return function(evt, options) {
            options = options || {};
            var config = data.config;
            if (designer && evt.type === "setting") {
              if (options.select === "prev") {
                return previousFunction(data)();
              }
              if (options.select === "next") {
                return next(data)();
              }
              configure(data);
              layout(data);
              if (options.select == null) {
                return;
              }
              select(data, options.select);
              return;
            }
            if (evt.type === "swipe") {
              if (config.disableSwipe) {
                return;
              }
              if (Webflow.env("editor")) {
                return;
              }
              if (options.direction === "left") {
                return next(data)();
              }
              if (options.direction === "right") {
                return previousFunction(data)();
              }
              return;
            }
            if (data.nav.has(evt.target).length) {
              var index = $(evt.target).index();
              if (evt.type === "click") {
                change(data, {
                  index
                });
              }
              if (evt.type === "keydown") {
                switch (evt.keyCode) {
                  case KEY_CODES.ENTER:
                  case KEY_CODES.SPACE: {
                    change(data, {
                      index
                    });
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.ARROW_LEFT:
                  case KEY_CODES.ARROW_UP: {
                    focusDot(data.nav, Math.max(index - 1, 0));
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.ARROW_RIGHT:
                  case KEY_CODES.ARROW_DOWN: {
                    focusDot(data.nav, Math.min(index + 1, data.pages));
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.HOME: {
                    focusDot(data.nav, 0);
                    evt.preventDefault();
                    break;
                  }
                  case KEY_CODES.END: {
                    focusDot(data.nav, data.pages);
                    evt.preventDefault();
                    break;
                  }
                  default: {
                    return;
                  }
                }
              }
            }
          };
        }
        function focusDot($nav, index) {
          var $active = $nav.children().eq(index).focus();
          $nav.children().not($active);
        }
        function change(data, options) {
          options = options || {};
          var config = data.config;
          var anchors = data.anchors;
          data.previous = data.index;
          var index = options.index;
          var shift = {};
          if (index < 0) {
            index = anchors.length - 1;
            if (config.infinite) {
              shift.x = -data.endX;
              shift.from = 0;
              shift.to = anchors[0].width;
            }
          } else if (index >= anchors.length) {
            index = 0;
            if (config.infinite) {
              shift.x = anchors[anchors.length - 1].width;
              shift.from = -anchors[anchors.length - 1].x;
              shift.to = shift.from - shift.x;
            }
          }
          data.index = index;
          var $active = data.nav.children().eq(index).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
          data.nav.children().not($active).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1");
          if (config.hideArrows) {
            data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
            data.index === 0 ? data.left.hide() : data.left.show();
          }
          var lastOffsetX = data.offsetX || 0;
          var offsetX = data.offsetX = -anchors[data.index].x;
          var resetConfig = {
            x: offsetX,
            opacity: 1,
            visibility: ""
          };
          var targets = $(anchors[data.index].els);
          var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
          var others = data.slides.not(targets);
          var animation = config.animation;
          var easing = config.easing;
          var duration = Math.round(config.duration);
          var vector = options.vector || (data.index > data.previous ? 1 : -1);
          var fadeRule = "opacity " + duration + "ms " + easing;
          var slideRule = "transform " + duration + "ms " + easing;
          targets.find(FOCUSABLE_SELECTOR).removeAttr("tabindex");
          targets.removeAttr("aria-hidden");
          targets.find("*").removeAttr("aria-hidden");
          others.find(FOCUSABLE_SELECTOR).attr("tabindex", "-1");
          others.attr("aria-hidden", "true");
          others.find("*").attr("aria-hidden", "true");
          if (!designer) {
            targets.each(ix.intro);
            others.each(ix.outro);
          }
          if (options.immediate && !inRedraw) {
            tram(targets).set(resetConfig);
            resetOthers();
            return;
          }
          if (data.index === data.previous) {
            return;
          }
          if (!designer) {
            data.ariaLiveLabel.text(`Slide ${index + 1} of ${anchors.length}.`);
          }
          if (animation === "cross") {
            var reduced = Math.round(duration - duration * config.crossOver);
            var wait = Math.round(duration - reduced);
            fadeRule = "opacity " + reduced + "ms " + easing;
            tram(prevTargs).set({
              visibility: ""
            }).add(fadeRule).start({
              opacity: 0
            });
            tram(targets).set({
              visibility: "",
              x: offsetX,
              opacity: 0,
              zIndex: data.depth++
            }).add(fadeRule).wait(wait).then({
              opacity: 1
            }).then(resetOthers);
            return;
          }
          if (animation === "fade") {
            tram(prevTargs).set({
              visibility: ""
            }).stop();
            tram(targets).set({
              visibility: "",
              x: offsetX,
              opacity: 0,
              zIndex: data.depth++
            }).add(fadeRule).start({
              opacity: 1
            }).then(resetOthers);
            return;
          }
          if (animation === "over") {
            resetConfig = {
              x: data.endX
            };
            tram(prevTargs).set({
              visibility: ""
            }).stop();
            tram(targets).set({
              visibility: "",
              zIndex: data.depth++,
              x: offsetX + anchors[data.index].width * vector
            }).add(slideRule).start({
              x: offsetX
            }).then(resetOthers);
            return;
          }
          if (config.infinite && shift.x) {
            tram(data.slides.not(prevTargs)).set({
              visibility: "",
              x: shift.x
            }).add(slideRule).start({
              x: offsetX
            });
            tram(prevTargs).set({
              visibility: "",
              x: shift.from
            }).add(slideRule).start({
              x: shift.to
            });
            data.shifted = prevTargs;
          } else {
            if (config.infinite && data.shifted) {
              tram(data.shifted).set({
                visibility: "",
                x: lastOffsetX
              });
              data.shifted = null;
            }
            tram(data.slides).set({
              visibility: ""
            }).add(slideRule).start({
              x: offsetX
            });
          }
          function resetOthers() {
            targets = $(anchors[data.index].els);
            others = data.slides.not(targets);
            if (animation !== "slide") {
              resetConfig.visibility = "hidden";
            }
            tram(others).set(resetConfig);
          }
        }
        function render(i, el) {
          var data = $.data(el, namespace);
          if (!data) {
            return;
          }
          if (maskChanged(data)) {
            return layout(data);
          }
          if (designer && slidesChanged(data)) {
            layout(data);
          }
        }
        function layout(data) {
          var pages = 1;
          var offset = 0;
          var anchor = 0;
          var width = 0;
          var maskWidth = data.maskWidth;
          var threshold = maskWidth - data.config.edge;
          if (threshold < 0) {
            threshold = 0;
          }
          data.anchors = [{
            els: [],
            x: 0,
            width: 0
          }];
          data.slides.each(function(i, el) {
            if (anchor - offset > threshold) {
              pages++;
              offset += maskWidth;
              data.anchors[pages - 1] = {
                els: [],
                x: anchor,
                width: 0
              };
            }
            width = $(el).outerWidth(true);
            anchor += width;
            data.anchors[pages - 1].width += width;
            data.anchors[pages - 1].els.push(el);
            var ariaLabel = i + 1 + " of " + data.slides.length;
            $(el).attr("aria-label", ariaLabel);
            $(el).attr("role", "group");
          });
          data.endX = anchor;
          if (designer) {
            data.pages = null;
          }
          if (data.nav.length && data.pages !== pages) {
            data.pages = pages;
            buildNav(data);
          }
          var index = data.index;
          if (index >= pages) {
            index = pages - 1;
          }
          change(data, {
            immediate: true,
            index
          });
        }
        function buildNav(data) {
          var dots = [];
          var $dot;
          var spacing = data.el.attr("data-nav-spacing");
          if (spacing) {
            spacing = parseFloat(spacing) + "px";
          }
          for (var i = 0, len = data.pages; i < len; i++) {
            $dot = $(dot);
            $dot.attr("aria-label", "Show slide " + (i + 1) + " of " + len).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1");
            if (data.nav.hasClass("w-num")) {
              $dot.text(i + 1);
            }
            if (spacing != null) {
              $dot.css({
                "margin-left": spacing,
                "margin-right": spacing
              });
            }
            dots.push($dot);
          }
          data.nav.empty().append(dots);
        }
        function maskChanged(data) {
          var maskWidth = data.mask.width();
          if (data.maskWidth !== maskWidth) {
            data.maskWidth = maskWidth;
            return true;
          }
          return false;
        }
        function slidesChanged(data) {
          var slidesWidth = 0;
          data.slides.each(function(i, el) {
            slidesWidth += $(el).outerWidth(true);
          });
          if (data.slidesWidth !== slidesWidth) {
            data.slidesWidth = slidesWidth;
            return true;
          }
          return false;
        }
        return api;
      });
    }
  });

  // <stdin>
  require_webflow_brand();
  require_webflow_focus_visible();
  require_webflow_focus();
  require_webflow_ix_events();
  require_webflow_ix();
  require_webflow_ix2_events();
  require_webflow_ix2();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_touch();
  require_webflow_forms();
  require_webflow_navbar();
  require_webflow_slider();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
  {"slug":"new-interaction","name":"New Interaction","value":{"style":{},"triggers":[{"type":"hover","stepsA":[{"display":"flex","opacity":1,"transition":"height 200 ease 0"}],"stepsB":[{"display":"flex","opacity":0,"transition":"opacity 200 ease 0"}]}]}}
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
{"events":{"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|72bd328d-7062-901a-23b6-52a9f3cdee18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|72bd328d-7062-901a-23b6-52a9f3cdee18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1677464028925},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-196"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1687428249073},"e-213":{"id":"e-213","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-214"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1687430540876},"e-227":{"id":"e-227","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1687436643985},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|b2a4ab7f-f358-851a-72f1-50cfd97f59fb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|b2a4ab7f-f358-851a-72f1-50cfd97f59fb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1687437125262},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1688555010775},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1688555010775},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-252"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1688555010775},"e-269":{"id":"e-269","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|43cb7b54-4f3a-1b00-17ee-aa94c6409dbd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|43cb7b54-4f3a-1b00-17ee-aa94c6409dbd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1688555010775},"e-289":{"id":"e-289","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|bc89be9f-720b-9c22-3232-36a570ad0ebb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|bc89be9f-720b-9c22-3232-36a570ad0ebb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690185546043},"e-291":{"id":"e-291","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|bc89be9f-720b-9c22-3232-36a570ad0ebf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|bc89be9f-720b-9c22-3232-36a570ad0ebf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1690185546043},"e-295":{"id":"e-295","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|a3c501c0-40bd-1e03-1d83-547ef80aadf2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|a3c501c0-40bd-1e03-1d83-547ef80aadf2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1690186020639},"e-297":{"id":"e-297","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|d88df3de-f9b7-87bc-7f24-5baccec2e03f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|d88df3de-f9b7-87bc-7f24-5baccec2e03f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1690717373353},"e-299":{"id":"e-299","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|d88df3de-f9b7-87bc-7f24-5baccec2e041","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|d88df3de-f9b7-87bc-7f24-5baccec2e041","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690717373353},"e-301":{"id":"e-301","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|7cea7f5f-7506-14c7-3c9a-2b882a4a34e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|7cea7f5f-7506-14c7-3c9a-2b882a4a34e6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690721495255},"e-303":{"id":"e-303","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-304"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".videocard","originalId":"65ba268c185eaccabf7c09e1|d552a4fe-6f27-241f-bbdf-3a30965badc9","appliesTo":"CLASS"},"targets":[{"selector":".videocard","originalId":"65ba268c185eaccabf7c09e1|d552a4fe-6f27-241f-bbdf-3a30965badc9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690721532657},"e-307":{"id":"e-307","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-308"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|3943014b-5cbf-6e3a-3b12-b390ba508e5d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|3943014b-5cbf-6e3a-3b12-b390ba508e5d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691566547343},"e-309":{"id":"e-309","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-310"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|3c096729-6aa6-f959-3ffc-5a3d717484b9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|3c096729-6aa6-f959-3ffc-5a3d717484b9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691566558230},"e-311":{"id":"e-311","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-312"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1691989130068},"e-313":{"id":"e-313","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1691989130068},"e-315":{"id":"e-315","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-316"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691989130068},"e-317":{"id":"e-317","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-318"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|b2a4ab7f-f358-851a-72f1-50cfd97f59fb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|b2a4ab7f-f358-851a-72f1-50cfd97f59fb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691989130068},"e-319":{"id":"e-319","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-320"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|3c096729-6aa6-f959-3ffc-5a3d717484b9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|3c096729-6aa6-f959-3ffc-5a3d717484b9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691989130068},"e-323":{"id":"e-323","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|7cd64388-3764-ae92-1c00-58a5c52a43ff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|7cd64388-3764-ae92-1c00-58a5c52a43ff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691990135522},"e-325":{"id":"e-325","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-326"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|a8b66a05-c632-433d-fb07-9a961cc754ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|a8b66a05-c632-433d-fb07-9a961cc754ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691990143290},"e-327":{"id":"e-327","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-328"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|bce290e9-e8de-a2f3-4714-4a896bf61de8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|bce290e9-e8de-a2f3-4714-4a896bf61de8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691990149186},"e-329":{"id":"e-329","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-330"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|dc2c67c3-4a39-24a0-e097-c616b37ad9d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|dc2c67c3-4a39-24a0-e097-c616b37ad9d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1691990165890},"e-331":{"id":"e-331","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-332"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1692346433456},"e-333":{"id":"e-333","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-334"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1692346433456},"e-335":{"id":"e-335","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-336"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692346433456},"e-347":{"id":"e-347","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-348"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|d466be97-2a77-a39d-65ca-eb7a58a08d57","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|d466be97-2a77-a39d-65ca-eb7a58a08d57","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692347484973},"e-349":{"id":"e-349","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-350"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|199438de-b420-258c-ac0c-5162bd876e58","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|199438de-b420-258c-ac0c-5162bd876e58","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692347492171},"e-351":{"id":"e-351","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-352"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|b17a1f2c-90da-c79c-cca0-c5d3eb87cb7d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|b17a1f2c-90da-c79c-cca0-c5d3eb87cb7d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692347497201},"e-353":{"id":"e-353","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-354"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|fd494859-f75a-638b-ca82-9a4906f3956c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|fd494859-f75a-638b-ca82-9a4906f3956c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692347502253},"e-355":{"id":"e-355","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-356"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1692347824043},"e-357":{"id":"e-357","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-358"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1692347824043},"e-359":{"id":"e-359","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-360"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692347824043},"e-371":{"id":"e-371","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-372"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1692592527533},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-374"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1692592527533},"e-375":{"id":"e-375","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-376"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692592527533},"e-389":{"id":"e-389","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-390"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|146def33-0f2c-9cd2-917a-0219ce301a22","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|146def33-0f2c-9cd2-917a-0219ce301a22","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692593194822},"e-391":{"id":"e-391","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-392"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|435134e3-0b27-5817-61cf-0507cbc62059","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|435134e3-0b27-5817-61cf-0507cbc62059","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692593211836},"e-393":{"id":"e-393","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|1c96c6cc-fa90-9091-1683-3fffc8cce500","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|1c96c6cc-fa90-9091-1683-3fffc8cce500","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692593219799},"e-395":{"id":"e-395","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-396"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|ee5756d3-60f1-c78b-a8cf-74f9b2f086c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|ee5756d3-60f1-c78b-a8cf-74f9b2f086c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1692593227862},"e-423":{"id":"e-423","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-424"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|04290006-3dfe-e767-387c-49438f632608","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|04290006-3dfe-e767-387c-49438f632608","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1693810244361},"e-425":{"id":"e-425","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-426"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|653f5534-19b5-5f42-d72d-448573316887","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|653f5534-19b5-5f42-d72d-448573316887","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1693810259189},"e-427":{"id":"e-427","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-428"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|a4da773b-6084-f512-1d1e-de07bfc4e84d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|a4da773b-6084-f512-1d1e-de07bfc4e84d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1693810369703},"e-429":{"id":"e-429","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-430"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|bd996e83-7bfe-ab24-9600-0d9f64881100","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|bd996e83-7bfe-ab24-9600-0d9f64881100","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1693810382908},"e-441":{"id":"e-441","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-443":{"id":"e-443","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-444"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-445":{"id":"e-445","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-447":{"id":"e-447","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-448"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-449":{"id":"e-449","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-450"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-451":{"id":"e-451","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-452"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254f1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254f1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-453":{"id":"e-453","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-454"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254f3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254f3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-455":{"id":"e-455","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|22ada4b1-6015-6d63-a13a-1421788254f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1694079897448},"e-457":{"id":"e-457","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-458"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|f9f4f8e3-4214-ccc3-9532-341bac840dae","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|f9f4f8e3-4214-ccc3-9532-341bac840dae","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1694080116272},"e-489":{"id":"e-489","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-490"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|c9bdfa06-7523-a7ff-5c33-836e33f13384","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|c9bdfa06-7523-a7ff-5c33-836e33f13384","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694167336675},"e-493":{"id":"e-493","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-136","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-494"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|d8333de3-6089-92db-476a-2b5c328dedcd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|d8333de3-6089-92db-476a-2b5c328dedcd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694167697362},"e-599":{"id":"e-599","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-600"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a8e0b1ff-2e59-1eb4-daa0-a7b643acd5a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a8e0b1ff-2e59-1eb4-daa0-a7b643acd5a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174095149},"e-619":{"id":"e-619","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-620"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|d7c9979b-3674-409d-070a-235d54188abc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|d7c9979b-3674-409d-070a-235d54188abc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174332594},"e-621":{"id":"e-621","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-622"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|d7c9979b-3674-409d-070a-235d54188ac4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|d7c9979b-3674-409d-070a-235d54188ac4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174332594},"e-625":{"id":"e-625","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-626"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|80bb8a58-4494-8556-a03a-b943b306200a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|80bb8a58-4494-8556-a03a-b943b306200a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174420669},"e-627":{"id":"e-627","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-628"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|80bb8a58-4494-8556-a03a-b943b3062012","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|80bb8a58-4494-8556-a03a-b943b3062012","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174420669},"e-633":{"id":"e-633","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-634"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|2148f079-49f4-c637-7bbf-b0a7e19f4ca1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|2148f079-49f4-c637-7bbf-b0a7e19f4ca1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174434481},"e-635":{"id":"e-635","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-636"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|753b15af-5d04-7cd8-e8ce-8433aefc0a19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|753b15af-5d04-7cd8-e8ce-8433aefc0a19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174752021},"e-637":{"id":"e-637","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-638"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|b82b160c-1c3f-9319-b421-da3385a88e91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|b82b160c-1c3f-9319-b421-da3385a88e91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694174752379},"e-651":{"id":"e-651","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-652"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|7793f51e-aa67-dd88-27cb-a543e178b22f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|7793f51e-aa67-dd88-27cb-a543e178b22f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694175254316},"e-653":{"id":"e-653","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-654"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|d3fff84b-94ee-8dd8-84af-a82053414345","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|d3fff84b-94ee-8dd8-84af-a82053414345","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694175255289},"e-655":{"id":"e-655","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-656"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|32b52002-e70b-326d-948a-2f371d40d8d4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|32b52002-e70b-326d-948a-2f371d40d8d4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694175255767},"e-657":{"id":"e-657","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-658"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|c38f224f-c345-49e8-906b-cecb45c3f16e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|c38f224f-c345-49e8-906b-cecb45c3f16e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694175256735},"e-665":{"id":"e-665","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-666"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|53b0a494-a3d0-2408-1788-4fad9fc76867","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|53b0a494-a3d0-2408-1788-4fad9fc76867","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694177957204},"e-667":{"id":"e-667","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-139","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-668"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|325cf848-e84d-7751-9a97-01922e0dfc18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|325cf848-e84d-7751-9a97-01922e0dfc18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178590525},"e-671":{"id":"e-671","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-672"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|7f73ee4a-f41c-df35-891f-94c83ed32e03","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|7f73ee4a-f41c-df35-891f-94c83ed32e03","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178722042},"e-675":{"id":"e-675","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-676"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|28978448-6c81-7d5f-f66c-e70492b878ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|28978448-6c81-7d5f-f66c-e70492b878ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178736388},"e-679":{"id":"e-679","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-680"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|ce66696d-9136-b2ac-a94d-2ccaed14b3e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|ce66696d-9136-b2ac-a94d-2ccaed14b3e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178756031},"e-683":{"id":"e-683","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-684"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|5d8d8d82-4b4a-0492-4845-31a88f394f42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|5d8d8d82-4b4a-0492-4845-31a88f394f42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178772602},"e-687":{"id":"e-687","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-688"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|4c597144-895e-f070-fd36-a42b94865d9f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|4c597144-895e-f070-fd36-a42b94865d9f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178805793},"e-691":{"id":"e-691","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-692"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|3a27fd9b-bb3d-463f-e602-2a7b216bec95","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|3a27fd9b-bb3d-463f-e602-2a7b216bec95","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178819979},"e-699":{"id":"e-699","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-700"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|fc856adc-f0be-2e7f-23db-3a7a872927bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|fc856adc-f0be-2e7f-23db-3a7a872927bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178858267},"e-703":{"id":"e-703","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-704"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|f2ede606-4478-1345-223d-6d0bed5205da","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|f2ede606-4478-1345-223d-6d0bed5205da","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178871817},"e-707":{"id":"e-707","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-708"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|1cc6b8ca-b136-f4ab-970c-b8f82dc0d1e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|1cc6b8ca-b136-f4ab-970c-b8f82dc0d1e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178900521},"e-711":{"id":"e-711","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-712"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|40b25f6d-4e06-e660-4e5c-8e34775ab751","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|40b25f6d-4e06-e660-4e5c-8e34775ab751","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178930279},"e-715":{"id":"e-715","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-716"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|642ac217-46c1-f04e-9dea-e235d751e56a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|642ac217-46c1-f04e-9dea-e235d751e56a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178946122},"e-719":{"id":"e-719","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-720"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|19625eee-1121-185f-493d-f0a0bea102c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|19625eee-1121-185f-493d-f0a0bea102c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694178993732},"e-723":{"id":"e-723","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-724"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|3efaa00f-e407-d64d-ba8b-b77532d33539","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|3efaa00f-e407-d64d-ba8b-b77532d33539","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179009651},"e-727":{"id":"e-727","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-728"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|92ad2d83-9cd2-fa51-307a-5ddb83005d55","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|92ad2d83-9cd2-fa51-307a-5ddb83005d55","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179022016},"e-731":{"id":"e-731","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-732"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|8333af02-e659-ee08-369b-0bf2620d9572","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|8333af02-e659-ee08-369b-0bf2620d9572","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179047674},"e-735":{"id":"e-735","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-736"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a56dc5b0-8d14-02f6-284a-856da204c847","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a56dc5b0-8d14-02f6-284a-856da204c847","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179067629},"e-739":{"id":"e-739","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-740"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|b329333d-6c90-ba9a-dd4e-261872e62f64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|b329333d-6c90-ba9a-dd4e-261872e62f64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179085918},"e-743":{"id":"e-743","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-744"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|7d831a68-f537-f1b5-1d3a-7090e58a5b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|7d831a68-f537-f1b5-1d3a-7090e58a5b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179104835},"e-747":{"id":"e-747","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-748"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|94b846a4-15c1-cbbf-c21c-ac1592b0c04d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|94b846a4-15c1-cbbf-c21c-ac1592b0c04d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179153429},"e-751":{"id":"e-751","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|e4718f0d-95de-ac92-813b-0e3c367d0154","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|e4718f0d-95de-ac92-813b-0e3c367d0154","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179171279},"e-755":{"id":"e-755","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|42dbb56c-deb6-1995-1818-3384f086b56e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|42dbb56c-deb6-1995-1818-3384f086b56e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179302393},"e-759":{"id":"e-759","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|6b180148-070a-eedb-ecb3-c8b2e03df0d9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|6b180148-070a-eedb-ecb3-c8b2e03df0d9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179327377},"e-763":{"id":"e-763","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|07f7a047-4c42-7dd9-e08a-641ae2500757","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|07f7a047-4c42-7dd9-e08a-641ae2500757","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179345631},"e-767":{"id":"e-767","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-768"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a53f18b8-d323-d054-ed8f-bd22bb3e19f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a53f18b8-d323-d054-ed8f-bd22bb3e19f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179357916},"e-771":{"id":"e-771","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-772"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|e74890c9-ae6d-f7f7-1649-f738239af990","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|e74890c9-ae6d-f7f7-1649-f738239af990","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179383673},"e-775":{"id":"e-775","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-74","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-776"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|3dd7c6dd-fff7-7067-5b81-f7f13193a808","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|3dd7c6dd-fff7-7067-5b81-f7f13193a808","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179405047},"e-779":{"id":"e-779","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-780"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|5fa9754e-2517-4d15-bba4-bb7d1fd12a05","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|5fa9754e-2517-4d15-bba4-bb7d1fd12a05","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179417728},"e-783":{"id":"e-783","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-78","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-784"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|4c3f60bd-1372-f1d9-26dc-c0f69a3142d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|4c3f60bd-1372-f1d9-26dc-c0f69a3142d1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179450394},"e-787":{"id":"e-787","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-89","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-788"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|b53c14ff-2cd1-fca8-2506-92e497f278f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|b53c14ff-2cd1-fca8-2506-92e497f278f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179473540},"e-791":{"id":"e-791","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-90","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-792"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|078a23d4-4888-803d-9df6-bdd44bca1c61","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|078a23d4-4888-803d-9df6-bdd44bca1c61","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179501925},"e-795":{"id":"e-795","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-88","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-796"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|2377795a-3589-ef36-c54e-43fd572e0561","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|2377795a-3589-ef36-c54e-43fd572e0561","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179518100},"e-799":{"id":"e-799","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-87","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-800"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|aed70f3f-c301-515f-9d7d-6ed367bfa351","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|aed70f3f-c301-515f-9d7d-6ed367bfa351","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179535589},"e-803":{"id":"e-803","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-86","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-804"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|83a97bf8-5692-1313-74a6-87ca47048ce5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|83a97bf8-5692-1313-74a6-87ca47048ce5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179558252},"e-807":{"id":"e-807","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-808"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|95dcbb1d-9f78-10bd-f42c-65e102c7f859","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|95dcbb1d-9f78-10bd-f42c-65e102c7f859","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694179574265},"e-811":{"id":"e-811","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-137","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-812"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|56cca0c1-c849-813d-5b59-6052eee07632","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|56cca0c1-c849-813d-5b59-6052eee07632","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694182307772},"e-821":{"id":"e-821","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-822"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|d7c9979b-3674-409d-070a-235d54188ab4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|d7c9979b-3674-409d-070a-235d54188ab4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694184595212},"e-823":{"id":"e-823","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-824"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|80bb8a58-4494-8556-a03a-b943b3062002","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|80bb8a58-4494-8556-a03a-b943b3062002","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694184949082},"e-825":{"id":"e-825","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-826"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|2148f079-49f4-c637-7bbf-b0a7e19f4c91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|2148f079-49f4-c637-7bbf-b0a7e19f4c91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694185281803},"e-827":{"id":"e-827","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-828"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|2148f079-49f4-c637-7bbf-b0a7e19f4c99","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|2148f079-49f4-c637-7bbf-b0a7e19f4c99","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694185386942},"e-829":{"id":"e-829","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-830"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf680f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf680f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694185743717},"e-831":{"id":"e-831","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-832"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf683c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf683c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694186485105},"e-833":{"id":"e-833","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-73","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-834"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf6844","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf6844","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694186577276},"e-835":{"id":"e-835","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-75","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-836"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf684c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a56aad0b-a154-9f2f-439d-073893cf684c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694186747508},"e-837":{"id":"e-837","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-838"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|8587a605-71dd-1629-3f5d-e666030e4784","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|8587a605-71dd-1629-3f5d-e666030e4784","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694186934490},"e-839":{"id":"e-839","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-79","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-840"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|8587a605-71dd-1629-3f5d-e666030e478c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|8587a605-71dd-1629-3f5d-e666030e478c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694187018315},"e-841":{"id":"e-841","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-80","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-842"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|8587a605-71dd-1629-3f5d-e666030e4794","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|8587a605-71dd-1629-3f5d-e666030e4794","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694187049047},"e-843":{"id":"e-843","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-81","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-844"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|c93f7f8a-cb2f-b08e-f778-c0c848f30bd7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|c93f7f8a-cb2f-b08e-f778-c0c848f30bd7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694187084917},"e-845":{"id":"e-845","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-846"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|c93f7f8a-cb2f-b08e-f778-c0c848f30bdf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|c93f7f8a-cb2f-b08e-f778-c0c848f30bdf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694187119487},"e-847":{"id":"e-847","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-83","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-848"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|c93f7f8a-cb2f-b08e-f778-c0c848f30be7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|c93f7f8a-cb2f-b08e-f778-c0c848f30be7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694187171198},"e-849":{"id":"e-849","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-850"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a241ac5a-1cd8-4bc4-0df2-0d951a4a1705","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a241ac5a-1cd8-4bc4-0df2-0d951a4a1705","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694434504766},"e-853":{"id":"e-853","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-92","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-854"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|baeddbb8-9f74-268e-b34d-57c6562c1423","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|baeddbb8-9f74-268e-b34d-57c6562c1423","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694434505634},"e-857":{"id":"e-857","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-93","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-858"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|4eefaae2-600a-c0c1-a109-c6d153a474b7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|4eefaae2-600a-c0c1-a109-c6d153a474b7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694434672239},"e-859":{"id":"e-859","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-91","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-860"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|5e05dfc7-c888-7481-362d-79ee03ce1b9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|5e05dfc7-c888-7481-362d-79ee03ce1b9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694434750461},"e-863":{"id":"e-863","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-864"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".div-block-95","originalId":"65ba268c185eaccabf7c09ef|d8333de3-6089-92db-476a-2b5c328dedce","appliesTo":"CLASS"},"targets":[{"selector":".div-block-95","originalId":"65ba268c185eaccabf7c09ef|d8333de3-6089-92db-476a-2b5c328dedce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1694520793316},"e-865":{"id":"e-865","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-866"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".div-block-108","originalId":"65ba268c185eaccabf7c09ef|133eee05-efcb-b3f5-cc1a-0538086a9d1a","appliesTo":"CLASS"},"targets":[{"selector":".div-block-108","originalId":"65ba268c185eaccabf7c09ef|133eee05-efcb-b3f5-cc1a-0538086a9d1a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1694521180346},"e-867":{"id":"e-867","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-138","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-868"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|7fa6ad52-4a7e-44c2-59fc-f130141c1aa4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|7fa6ad52-4a7e-44c2-59fc-f130141c1aa4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694522495625},"e-869":{"id":"e-869","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-96","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-870"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|28f4f2e5-8283-3193-ab4e-1c7ed7f13c83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|28f4f2e5-8283-3193-ab4e-1c7ed7f13c83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694522573247},"e-873":{"id":"e-873","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-874"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|883572da-241a-8cb9-cabd-d7fa47c3567d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|883572da-241a-8cb9-cabd-d7fa47c3567d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1694523487168},"e-875":{"id":"e-875","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-876"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|ae86b1ef-9713-04c2-122b-a588cd614f35","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|ae86b1ef-9713-04c2-122b-a588cd614f35","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1694523533181},"e-881":{"id":"e-881","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-99","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-882"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|5a106e76-0bd0-a4f3-f134-a44aa63f0a82","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|5a106e76-0bd0-a4f3-f134-a44aa63f0a82","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694606592079},"e-885":{"id":"e-885","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-100","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-886"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|48c533a1-52e6-d0fa-5f21-4bab9f824280","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|48c533a1-52e6-d0fa-5f21-4bab9f824280","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694606592738},"e-889":{"id":"e-889","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-101","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-890"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|d015bbd6-806b-6e37-3566-164581de3cec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|d015bbd6-806b-6e37-3566-164581de3cec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694607126073},"e-891":{"id":"e-891","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-102","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-892"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|9da3e29b-6018-66f6-7921-a26f1413177d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|9da3e29b-6018-66f6-7921-a26f1413177d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1694607444687},"e-895":{"id":"e-895","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-896"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1695107769978},"e-897":{"id":"e-897","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-898"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1695107769978},"e-899":{"id":"e-899","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-900"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695107769978},"e-913":{"id":"e-913","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-914"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|e372ff40-28e0-06a1-ef05-48c2398f5ef1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|e372ff40-28e0-06a1-ef05-48c2398f5ef1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695108594046},"e-917":{"id":"e-917","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-918"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|bb35bc9a-c2ab-e748-5973-f6a08fd4ef78","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|bb35bc9a-c2ab-e748-5973-f6a08fd4ef78","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695109225044},"e-919":{"id":"e-919","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-920"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|c4182cc5-ccdf-88eb-6207-9054a25cd8c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|c4182cc5-ccdf-88eb-6207-9054a25cd8c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695109232542},"e-921":{"id":"e-921","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-922"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|18856e09-d784-991a-19b5-3e4c2cb6a45c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|18856e09-d784-991a-19b5-3e4c2cb6a45c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695109239846},"e-923":{"id":"e-923","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-924"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|0f7172f2-4b12-82c9-9b93-5a7eb8b23286","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|0f7172f2-4b12-82c9-9b93-5a7eb8b23286","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695109246245},"e-931":{"id":"e-931","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-103","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-932"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|46b6ffa5-f804-c85d-a4e7-6355d62f2a73","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|46b6ffa5-f804-c85d-a4e7-6355d62f2a73","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695109830684},"e-933":{"id":"e-933","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-104","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-934"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|78d151db-850b-9628-57eb-dbcfa5803207","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|78d151db-850b-9628-57eb-dbcfa5803207","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695109857755},"e-937":{"id":"e-937","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-105","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-938"}},"mediaQueries":["main"],"target":{"selector":".logo","originalId":"65ba268c185eaccabf7c09e1|5ba92d05-faa2-27e8-a01e-3b189927300a","appliesTo":"CLASS"},"targets":[{"selector":".logo","originalId":"65ba268c185eaccabf7c09e1|5ba92d05-faa2-27e8-a01e-3b189927300a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695122738563},"e-938":{"id":"e-938","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-106","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-937"}},"mediaQueries":["main"],"target":{"selector":".logo","originalId":"65ba268c185eaccabf7c09e1|5ba92d05-faa2-27e8-a01e-3b189927300a","appliesTo":"CLASS"},"targets":[{"selector":".logo","originalId":"65ba268c185eaccabf7c09e1|5ba92d05-faa2-27e8-a01e-3b189927300a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695122738566},"e-939":{"id":"e-939","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-107","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-940"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|e19aeb0e-2477-7051-fdee-0a2f8ba676ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|e19aeb0e-2477-7051-fdee-0a2f8ba676ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695210450450},"e-941":{"id":"e-941","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-942"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|b3ccd711-5b12-0ef1-abd1-fce4115cdc94","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|b3ccd711-5b12-0ef1-abd1-fce4115cdc94","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695210516600},"e-943":{"id":"e-943","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-108","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-944"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|f6080401-2836-db54-6e28-6d5492ebbc66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|f6080401-2836-db54-6e28-6d5492ebbc66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695285710879},"e-945":{"id":"e-945","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-109","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-946"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|c21b0e07-812f-9abc-6be9-8eeb73d4d171","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|c21b0e07-812f-9abc-6be9-8eeb73d4d171","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695285776622},"e-949":{"id":"e-949","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-950"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|defef9c7-e6ae-2838-7617-cbfdbf0adb4b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|defef9c7-e6ae-2838-7617-cbfdbf0adb4b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695724597608},"e-951":{"id":"e-951","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-952"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|f673e922-31c2-e4e8-341a-d60b712431d3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|f673e922-31c2-e4e8-341a-d60b712431d3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695724620955},"e-953":{"id":"e-953","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-110","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-954"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|5fa6237b-632d-816d-5208-0ffaf0ad23bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|5fa6237b-632d-816d-5208-0ffaf0ad23bf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695727661069},"e-955":{"id":"e-955","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-111","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-956"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|053c47fa-1748-742e-7249-6d32c4a8921b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|053c47fa-1748-742e-7249-6d32c4a8921b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695727814498},"e-957":{"id":"e-957","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-112","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-958"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a6e941ef-a866-39cc-2d3c-34c82a2d4002","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a6e941ef-a866-39cc-2d3c-34c82a2d4002","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695727873114},"e-961":{"id":"e-961","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-113","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-962"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|af79338e-7b7f-768b-5cb8-384fcec32f83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|af79338e-7b7f-768b-5cb8-384fcec32f83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695727874408},"e-965":{"id":"e-965","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-128","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-966"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|40c8fffb-7a18-e152-0361-d21a19f6d0b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|40c8fffb-7a18-e152-0361-d21a19f6d0b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695730490052},"e-969":{"id":"e-969","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-114","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-970"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|346fc555-3a0a-1105-cf37-a45168ee9096","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|346fc555-3a0a-1105-cf37-a45168ee9096","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695875779730},"e-971":{"id":"e-971","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-115","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-972"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|71c24eae-3f7d-2030-4144-a819f50254fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|71c24eae-3f7d-2030-4144-a819f50254fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695875807879},"e-975":{"id":"e-975","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-976"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|28e234ae-d1a4-ba4a-c99c-9eaaa988b7cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1695876810359},"e-977":{"id":"e-977","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-978"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|adb7dfb2-1d21-cae6-0d2d-38d735b0ab38","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1695876810359},"e-979":{"id":"e-979","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-980"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|b5a1ddd2-0be4-75bc-2fa9-eed3467a36cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695876810359},"e-999":{"id":"e-999","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1000"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|f49933b2-fbc2-ad1d-ce5e-cb155030262c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|f49933b2-fbc2-ad1d-ce5e-cb155030262c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877168195},"e-1001":{"id":"e-1001","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1002"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|3765a5ed-22f3-5b24-4738-f8f6d2266d4c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|3765a5ed-22f3-5b24-4738-f8f6d2266d4c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877177164},"e-1003":{"id":"e-1003","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1004"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|c4196de2-12de-d570-5797-da4b88bbcfec","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|c4196de2-12de-d570-5797-da4b88bbcfec","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877186328},"e-1005":{"id":"e-1005","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1006"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|45c63b4f-eea4-299b-0528-53b84116f940","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|45c63b4f-eea4-299b-0528-53b84116f940","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877192892},"e-1015":{"id":"e-1015","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1016"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ea|3e52d2b3-dc29-d177-6af3-dd23e10c8ac6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ea|3e52d2b3-dc29-d177-6af3-dd23e10c8ac6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877253145},"e-1017":{"id":"e-1017","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1018"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e8|44b4f59d-a466-aa82-67e1-d683c03c29a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e8|44b4f59d-a466-aa82-67e1-d683c03c29a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877260949},"e-1019":{"id":"e-1019","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1020"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e5|b4e21b2c-6bc2-7715-6a34-e203c1915e31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e5|b4e21b2c-6bc2-7715-6a34-e203c1915e31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877266544},"e-1021":{"id":"e-1021","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1022"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ec|4d5ee0d9-2bc0-6541-e1f7-7163a03904a2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ec|4d5ee0d9-2bc0-6541-e1f7-7163a03904a2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1695877273100},"e-1029":{"id":"e-1029","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1030"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|19aa71d0-0001-a912-420c-28d6ae9291b2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|19aa71d0-0001-a912-420c-28d6ae9291b2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695968512736},"e-1031":{"id":"e-1031","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1032"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|57307ec7-8d0b-3712-2603-a04f4f545ea5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|57307ec7-8d0b-3712-2603-a04f4f545ea5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695969223647},"e-1035":{"id":"e-1035","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1036"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|a8632617-fc33-381c-462e-4879ad97b523","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|a8632617-fc33-381c-462e-4879ad97b523","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695977701409},"e-1039":{"id":"e-1039","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-119","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1040"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|71404e26-e2d9-2211-8aeb-9d47e96dd620","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|71404e26-e2d9-2211-8aeb-9d47e96dd620","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695979552170},"e-1043":{"id":"e-1043","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1044"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|efe9b09a-1236-6888-ea7e-8dea521811a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|efe9b09a-1236-6888-ea7e-8dea521811a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695979732467},"e-1047":{"id":"e-1047","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-129","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1048"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|547fba4c-e8d5-d9bb-a486-a01fb0093c29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|547fba4c-e8d5-d9bb-a486-a01fb0093c29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696058630332},"e-1051":{"id":"e-1051","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1052"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|115dfba4-bb24-902a-98cf-b311c8c2315d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|115dfba4-bb24-902a-98cf-b311c8c2315d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696058643325},"e-1055":{"id":"e-1055","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1056"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|39452196-a4dd-98c9-ed01-69e8e9c7c17b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|39452196-a4dd-98c9-ed01-69e8e9c7c17b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696058653960},"e-1059":{"id":"e-1059","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-132","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1060"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|3e909b35-e2b7-dcbc-8db1-2e06a54becb4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|3e909b35-e2b7-dcbc-8db1-2e06a54becb4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696058662914},"e-1063":{"id":"e-1063","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-133","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1064"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|05d80fea-2031-fbe7-6554-687ed440a6a1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|05d80fea-2031-fbe7-6554-687ed440a6a1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696058671553},"e-1091":{"id":"e-1091","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1092"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|121c96de-5840-d9b9-0620-cf948264508c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|121c96de-5840-d9b9-0620-cf948264508c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696091454449},"e-1093":{"id":"e-1093","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-134","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1094"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|0cb07c5e-1d1e-b869-51bf-264797c39b69","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|0cb07c5e-1d1e-b869-51bf-264797c39b69","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696091599769},"e-1097":{"id":"e-1097","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-122","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1098"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|0d9f60ed-73ef-59f5-cf5d-571c4012dc5a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|0d9f60ed-73ef-59f5-cf5d-571c4012dc5a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696138695526},"e-1099":{"id":"e-1099","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-123","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|b6c93a5e-b35b-a017-895b-659cb2bde62e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|b6c93a5e-b35b-a017-895b-659cb2bde62e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696138933219},"e-1101":{"id":"e-1101","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-124","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|c0164f69-38fe-0baf-d17b-534409b64495","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|c0164f69-38fe-0baf-d17b-534409b64495","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696138971204},"e-1103":{"id":"e-1103","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-125","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|9b36343b-1627-8972-214a-be567a93e868","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|9b36343b-1627-8972-214a-be567a93e868","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139003250},"e-1105":{"id":"e-1105","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-126","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|aa8e5748-da4d-e24d-2aab-80f374ed9a81","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|aa8e5748-da4d-e24d-2aab-80f374ed9a81","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139036248},"e-1107":{"id":"e-1107","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-127","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1108"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|eda7b8c2-e3de-fdff-9a4d-1dab51b30759","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|eda7b8c2-e3de-fdff-9a4d-1dab51b30759","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139064872},"e-1109":{"id":"e-1109","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-122","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|bf8ded09-f8e9-2e5a-f449-2657cf830343","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|bf8ded09-f8e9-2e5a-f449-2657cf830343","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139184171},"e-1111":{"id":"e-1111","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-123","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|e96a0cf2-d3af-575f-c1a8-d7103e5acc73","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|e96a0cf2-d3af-575f-c1a8-d7103e5acc73","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139246146},"e-1113":{"id":"e-1113","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-124","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|2404566e-7eb1-298b-709e-5185d72e81e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|2404566e-7eb1-298b-709e-5185d72e81e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139269663},"e-1115":{"id":"e-1115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-125","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|c2b11bbe-bb50-a5d2-1f24-4aa1024b6b56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|c2b11bbe-bb50-a5d2-1f24-4aa1024b6b56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139294782},"e-1117":{"id":"e-1117","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-126","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|b9293235-fa66-e96e-8c2c-db723ac5a14a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|b9293235-fa66-e96e-8c2c-db723ac5a14a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139317982},"e-1119":{"id":"e-1119","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-127","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|349de6e1-76e6-a0dd-ca32-25580a62c07c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|349de6e1-76e6-a0dd-ca32-25580a62c07c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696139341101},"e-1121":{"id":"e-1121","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465191ff6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465191ff6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1123":{"id":"e-1123","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-95","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1124"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465191ffe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465191ffe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1125":{"id":"e-1125","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1126"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192006","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192006","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1127":{"id":"e-1127","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1128"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519200e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519200e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1129":{"id":"e-1129","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192016","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192016","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1131":{"id":"e-1131","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1132"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519201e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519201e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1133":{"id":"e-1133","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-27","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519203d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519203d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1135":{"id":"e-1135","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1136"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192045","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192045","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1137":{"id":"e-1137","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1138"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519204d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519204d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1139":{"id":"e-1139","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-98","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1140"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192055","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d465192055","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1141":{"id":"e-1141","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-118","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1142"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519205d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|09f5ffa9-4b24-8d2c-8e6d-f7d46519205d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696232927238},"e-1143":{"id":"e-1143","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1144"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|1c1e7c8d-d98b-50b8-1e47-c3d6a20b5942","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|1c1e7c8d-d98b-50b8-1e47-c3d6a20b5942","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696234346836},"e-1147":{"id":"e-1147","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-140","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1148"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|46222b16-e2e0-ab58-00db-2721e0f40709","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|46222b16-e2e0-ab58-00db-2721e0f40709","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696234666489},"e-1151":{"id":"e-1151","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-141","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1152"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|19276dc3-485e-6ed0-ffca-a2a75e9b200b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|19276dc3-485e-6ed0-ffca-a2a75e9b200b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696234760059},"e-1155":{"id":"e-1155","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-142","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|9eb0cb3b-2e15-8428-7230-8d7d86a3d95e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|9eb0cb3b-2e15-8428-7230-8d7d86a3d95e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696243462287},"e-1157":{"id":"e-1157","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-143","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|e0f0cc7d-e279-cdb4-b801-01ab4050bbb4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|e0f0cc7d-e279-cdb4-b801-01ab4050bbb4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696243576668},"e-1161":{"id":"e-1161","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-145","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|6e6aff17-c8d6-da15-aa56-e70a13932e78","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|6e6aff17-c8d6-da15-aa56-e70a13932e78","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696410386297},"e-1163":{"id":"e-1163","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-144","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|77ecafac-663e-5182-fbcf-bb8eb7492ace","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|77ecafac-663e-5182-fbcf-bb8eb7492ace","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696410474873},"e-1167":{"id":"e-1167","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-146","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|2fb656dd-e57c-adc2-b07f-1635bb1b60ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|2fb656dd-e57c-adc2-b07f-1635bb1b60ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696410771326},"e-1169":{"id":"e-1169","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-147","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|8e046e12-d983-b001-70f1-1ace730368c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|8e046e12-d983-b001-70f1-1ace730368c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696411028349},"e-1173":{"id":"e-1173","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-150","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|28e72ed9-7647-cd0c-1a3f-0a73ef8d3753","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|28e72ed9-7647-cd0c-1a3f-0a73ef8d3753","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696491568100},"e-1175":{"id":"e-1175","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-148","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|9a5a439a-28d3-4031-2378-20374e32d977","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|9a5a439a-28d3-4031-2378-20374e32d977","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696491617991},"e-1177":{"id":"e-1177","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-149","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|3e104ab2-7226-90fa-3a5e-ef53bc7b9784","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|3e104ab2-7226-90fa-3a5e-ef53bc7b9784","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696491705562},"e-1181":{"id":"e-1181","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-151","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1182"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ef|e1a4aeea-23f5-9e9b-9b8a-f1e88bdccd42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ef|e1a4aeea-23f5-9e9b-9b8a-f1e88bdccd42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1696491975010},"e-1187":{"id":"e-1187","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1188"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|e72ee570-c4c9-c0e7-1d4c-37e0336baffe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|e72ee570-c4c9-c0e7-1d4c-37e0336baffe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1697099921193},"e-1207":{"id":"e-1207","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1208"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|fabff811-a332-ce4b-316c-b71fdd800080","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|fabff811-a332-ce4b-316c-b71fdd800080","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1697178066825},"e-1209":{"id":"e-1209","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|fabff811-a332-ce4b-316c-b71fdd800084","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|fabff811-a332-ce4b-316c-b71fdd800084","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1697178066825},"e-1219":{"id":"e-1219","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|fabff811-a332-ce4b-316c-b71fdd800090","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|fabff811-a332-ce4b-316c-b71fdd800090","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1697178066825},"e-1227":{"id":"e-1227","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".div-block-124","originalId":"65ba268c185eaccabf7c09e1|801ecd76-a671-ac75-7aa2-2c7b0b390ad9","appliesTo":"CLASS"},"targets":[{"selector":".div-block-124","originalId":"65ba268c185eaccabf7c09e1|801ecd76-a671-ac75-7aa2-2c7b0b390ad9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":10,"direction":"BOTTOM","effectIn":true},"createdOn":1697183444347},"e-1229":{"id":"e-1229","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e1|6817151d-23a8-fea1-8117-c1c21f5c3620","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e1|6817151d-23a8-fea1-8117-c1c21f5c3620","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1706260930684},"e-1231":{"id":"e-1231","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e48d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e48d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1233":{"id":"e-1233","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e48f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e48f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1235":{"id":"e-1235","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1236"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e491","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e491","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1239":{"id":"e-1239","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1240"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e495","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e495","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1241":{"id":"e-1241","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e497","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e497","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1243":{"id":"e-1243","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e499","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e499","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1245":{"id":"e-1245","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e49b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e49b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1247":{"id":"e-1247","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e49d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|36a9f836-d6ad-904b-afcf-0107b042e49d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698709980},"e-1249":{"id":"e-1249","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e6|163c053f-4288-0e92-ea55-5234d5d089fc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e6|163c053f-4288-0e92-ea55-5234d5d089fc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698723556},"e-1251":{"id":"e-1251","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1252"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1253":{"id":"e-1253","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456e9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456e9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1255":{"id":"e-1255","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1259":{"id":"e-1259","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456ef","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1261":{"id":"e-1261","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1263":{"id":"e-1263","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1264"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1265":{"id":"e-1265","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1266"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1267":{"id":"e-1267","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|f77a704d-f7f1-81dd-36eb-39a0296456f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698789692},"e-1269":{"id":"e-1269","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09eb|09a84c92-78e9-e1e2-10b5-566efd690a58","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09eb|09a84c92-78e9-e1e2-10b5-566efd690a58","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698814531},"e-1271":{"id":"e-1271","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1273":{"id":"e-1273","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1275":{"id":"e-1275","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1276"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1277":{"id":"e-1277","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1278"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1279":{"id":"e-1279","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1280"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1281":{"id":"e-1281","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1282"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175be","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175be","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1285":{"id":"e-1285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175c2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175c2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1287":{"id":"e-1287","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175c4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|7bb3c5be-3158-3c08-518e-2712d53175c4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698835877},"e-1289":{"id":"e-1289","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09f0|f5e6991c-745f-4ff6-9944-436d39a99d3d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09f0|f5e6991c-745f-4ff6-9944-436d39a99d3d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698877623},"e-1291":{"id":"e-1291","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a638e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a638e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1293":{"id":"e-1293","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6390","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6390","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1295":{"id":"e-1295","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6392","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6392","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1297":{"id":"e-1297","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6394","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6394","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1301":{"id":"e-1301","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6398","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a6398","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1303":{"id":"e-1303","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1304"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a639a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a639a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1305":{"id":"e-1305","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1306"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a639c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a639c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1307":{"id":"e-1307","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1308"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a639e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|72499897-413f-8c0b-d432-178d919a639e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698898009},"e-1309":{"id":"e-1309","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1310"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09ee|a475d935-aacb-74de-c5e3-0a3f7803a315","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09ee|a475d935-aacb-74de-c5e3-0a3f7803a315","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698922758},"e-1311":{"id":"e-1311","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1312"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79391a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79391a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1313":{"id":"e-1313","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1314"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79391c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79391c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1315":{"id":"e-1315","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1316"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79391e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79391e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1317":{"id":"e-1317","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1318"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793920","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793920","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1321":{"id":"e-1321","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1322"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793924","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793924","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1323":{"id":"e-1323","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793926","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793926","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1325":{"id":"e-1325","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1326"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793928","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e793928","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1327":{"id":"e-1327","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1328"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79392a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|f28e8c87-b19c-02d3-4c81-26441e79392a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698933919},"e-1329":{"id":"e-1329","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1330"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65ba268c185eaccabf7c09e7|ea5f4de7-03ac-a297-0ff8-f387ea5d536b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65ba268c185eaccabf7c09e7|ea5f4de7-03ac-a297-0ff8-f387ea5d536b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1711698944104}},"actionLists":{"a-2":{"id":"a-2","title":"Button Appearance","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outCubic","duration":300,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1663791568089},"a-62":{"id":"a-62","title":"Close Alex Mu","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-alexey-murzanev","selectorGuids":["0dc5dd56-82f4-f613-6dfd-787b513f4790"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-136":{"id":"a-136","title":"Open Alex korovyansky","actionItemGroups":[{"actionItems":[{"id":"a-136-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-alex-korovyansky","selectorGuids":["2c757893-a8cf-8a29-b171-0cc56ce793fc"]},"value":"none"}}]},{"actionItems":[{"id":"a-136-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-alex-korovyansky","selectorGuids":["2c757893-a8cf-8a29-b171-0cc56ce793fc"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-36":{"id":"a-36","title":"Open Yuri Scvorcov","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-yuri-skvortsov","selectorGuids":["abd0ac83-381d-4f2a-c411-71d56530e23a"]},"value":"none"}}]},{"actionItems":[{"id":"a-36-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-yuri-skvortsov","selectorGuids":["abd0ac83-381d-4f2a-c411-71d56530e23a"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-40":{"id":"a-40","title":"Open Alex Goryachkin","actionItemGroups":[{"actionItems":[{"id":"a-40-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-vasily-vasilyk","selectorGuids":["79d5b246-98f9-3a62-4de9-bc6818747617"]},"value":"none"}}]},{"actionItems":[{"id":"a-40-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-vasily-vasilyk","selectorGuids":["79d5b246-98f9-3a62-4de9-bc6818747617"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-42":{"id":"a-42","title":"Open Alex Susukov","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-alex-susuikov","selectorGuids":["5c19ee44-62d5-fa44-bb3e-4afb9c2dd501"]},"value":"none"}}]},{"actionItems":[{"id":"a-42-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-alex-susuikov","selectorGuids":["5c19ee44-62d5-fa44-bb3e-4afb9c2dd501"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-48":{"id":"a-48","title":"Open Nikolay Bakalnov","actionItemGroups":[{"actionItems":[{"id":"a-48-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-nikolay-baklanov","selectorGuids":["c1293dc2-9427-b775-ef77-6d926b72edc0"]},"value":"none"}}]},{"actionItems":[{"id":"a-48-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-nikolay-baklanov","selectorGuids":["c1293dc2-9427-b775-ef77-6d926b72edc0"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-46":{"id":"a-46","title":"Open Alex Panch","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-alex-panchenko","selectorGuids":["5bd53ed5-abb0-ecfd-a19d-e02a70f7d339"]},"value":"none"}}]},{"actionItems":[{"id":"a-46-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-alex-panchenko","selectorGuids":["5bd53ed5-abb0-ecfd-a19d-e02a70f7d339"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-54":{"id":"a-54","title":"Open Andrey Cvet","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-andrey-tsvetsykh","selectorGuids":["4a853dc7-5b6e-1b6b-eea4-9b7f71dc02b9"]},"value":"none"}}]},{"actionItems":[{"id":"a-54-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-andrey-tsvetsykh","selectorGuids":["4a853dc7-5b6e-1b6b-eea4-9b7f71dc02b9"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-58":{"id":"a-58","title":"Open Gleb","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-gleb-bezrukov","selectorGuids":["95e38fd1-d37b-d4a0-78bb-e664a1d87613"]},"value":"none"}}]},{"actionItems":[{"id":"a-58-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-gleb-bezrukov","selectorGuids":["95e38fd1-d37b-d4a0-78bb-e664a1d87613"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-56":{"id":"a-56","title":"Open Pavel","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-pavel-kulbida","selectorGuids":["dd9684b1-5fe7-473c-d7c8-92b409156c97"]},"value":"none"}}]},{"actionItems":[{"id":"a-56-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-pavel-kulbida","selectorGuids":["dd9684b1-5fe7-473c-d7c8-92b409156c97"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-69":{"id":"a-69","title":"Open Ramil","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-ramil-gabdrakhmanov","selectorGuids":["59324474-5747-ac95-a8ee-38d876b6e2eb"]},"value":"none"}}]},{"actionItems":[{"id":"a-69-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-ramil-gabdrakhmanov","selectorGuids":["59324474-5747-ac95-a8ee-38d876b6e2eb"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-67":{"id":"a-67","title":"Open Vlad U","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-vlad-unchuris","selectorGuids":["afe9506a-1c69-143b-b356-ea65c4088528"]},"value":"none"}}]},{"actionItems":[{"id":"a-67-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-vlad-unchuris","selectorGuids":["afe9506a-1c69-143b-b356-ea65c4088528"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-65":{"id":"a-65","title":"Open Kirill S","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-kirill-starostin","selectorGuids":["ffe7ba27-8fbf-19f9-42fe-97d3f84212c4"]},"value":"none"}}]},{"actionItems":[{"id":"a-65-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-kirill-starostin","selectorGuids":["ffe7ba27-8fbf-19f9-42fe-97d3f84212c4"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-63":{"id":"a-63","title":"Open Alex rus","actionItemGroups":[{"actionItems":[{"id":"a-63-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-artem-kovardin","selectorGuids":["6939b8ed-813b-9aee-b867-f54b67740f1d"]},"value":"none"}}]},{"actionItems":[{"id":"a-63-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-artem-kovardin","selectorGuids":["6939b8ed-813b-9aee-b867-f54b67740f1d"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-14":{"id":"a-14","title":"Open Alex Murzanev","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-alexey-murzanev","selectorGuids":["0dc5dd56-82f4-f613-6dfd-787b513f4790"]},"value":"none"}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-alexey-murzanev","selectorGuids":["0dc5dd56-82f4-f613-6dfd-787b513f4790"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-139":{"id":"a-139","title":"Close Alex Korovyansky","actionItemGroups":[{"actionItems":[{"id":"a-139-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-alex-korovyansky","selectorGuids":["2c757893-a8cf-8a29-b171-0cc56ce793fc"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-20":{"id":"a-20","title":"Close Roman Alyatudin","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-roman-alyatudin","selectorGuids":["2be2ad00-e6fd-5f25-1949-c2fc29827add"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-22":{"id":"a-22","title":"Close Daniil Mihaliov","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-daniil-mihailov-ovs","selectorGuids":["b4697e5d-c589-f489-8d40-89472be69364"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-24":{"id":"a-24","title":"Close Denis Suprin","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-denus-suprun","selectorGuids":["e0f240fe-9729-0e24-37ff-bde397d67448"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-26":{"id":"a-26","title":"Close Artem Kisl","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-artem-kislitsin","selectorGuids":["9f42388c-2b16-5b15-89d9-4e8274037334"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-28":{"id":"a-28","title":"Close Roma Rvachev","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-roma-rvachev","selectorGuids":["346d0735-b4d3-70a9-88b3-480f89b054ae"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-32":{"id":"a-32","title":"Close Pavel Colcov 2","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-sergey-koltsov","selectorGuids":["12892360-bc89-f4a2-9968-cd3dbbc9f263"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-35":{"id":"a-35","title":"Close Ilya Demchenko","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-ilya-demchenko","selectorGuids":["5767cd0e-d7fd-fb25-8005-697a1ebcf329"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-37":{"id":"a-37","title":"Close Yuri Skvorcov","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-yuri-skvortsov","selectorGuids":["abd0ac83-381d-4f2a-c411-71d56530e23a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-39":{"id":"a-39","title":"Close Max Grozi","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-max-gorozi","selectorGuids":["afa1f9fc-6fff-688b-194f-f4af3ae75509"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-41":{"id":"a-41","title":"Close Alex Gor","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-vasily-vasilyk","selectorGuids":["79d5b246-98f9-3a62-4de9-bc6818747617"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-43":{"id":"a-43","title":"Close Alex Susikov","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-alex-susuikov","selectorGuids":["5c19ee44-62d5-fa44-bb3e-4afb9c2dd501"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-45":{"id":"a-45","title":"Close Nikita Akidinov","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-nikita-akidinov","selectorGuids":["ae7143b8-a35a-5703-e68a-19baae395f2a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-49":{"id":"a-49","title":"Close Nikolay Baklanov","actionItemGroups":[{"actionItems":[{"id":"a-49-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-nikolay-baklanov","selectorGuids":["c1293dc2-9427-b775-ef77-6d926b72edc0"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-47":{"id":"a-47","title":"Close Alex Panch","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-alex-panchenko","selectorGuids":["5bd53ed5-abb0-ecfd-a19d-e02a70f7d339"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-51":{"id":"a-51","title":"Close Igor Saif","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-igor-saifutdinov","selectorGuids":["7543231d-bf2c-ed16-b267-144449849ae0"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-53":{"id":"a-53","title":"Close Vladislav Shakirov","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-vladislav-shakirov","selectorGuids":["e519bb5a-c244-0a79-0491-485357a9d938"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-57":{"id":"a-57","title":"Close Pavel K","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-pavel-kulbida","selectorGuids":["dd9684b1-5fe7-473c-d7c8-92b409156c97"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-55":{"id":"a-55","title":"Close Andreay Cv","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-andrey-tsvetsykh","selectorGuids":["4a853dc7-5b6e-1b6b-eea4-9b7f71dc02b9"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-59":{"id":"a-59","title":"Close Pavel K 2","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-gleb-bezrukov","selectorGuids":["95e38fd1-d37b-d4a0-78bb-e664a1d87613"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-61":{"id":"a-61","title":"Close Anna","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-anna-zharkova","selectorGuids":["50fc93f3-80d0-d857-3fcf-3256a8d506ea"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-64":{"id":"a-64","title":"Close Alex Rus","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-artem-kovardin","selectorGuids":["6939b8ed-813b-9aee-b867-f54b67740f1d"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-66":{"id":"a-66","title":"Close Kirill","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-kirill-starostin","selectorGuids":["ffe7ba27-8fbf-19f9-42fe-97d3f84212c4"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-68":{"id":"a-68","title":"Close Vlad U","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-vlad-unchuris","selectorGuids":["afe9506a-1c69-143b-b356-ea65c4088528"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-70":{"id":"a-70","title":"Close Ramil","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-ramil-gabdrakhmanov","selectorGuids":["59324474-5747-ac95-a8ee-38d876b6e2eb"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-72":{"id":"a-72","title":"Close Evg Bondar","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-evgeny-bondar","selectorGuids":["c19e7b87-cfd0-9541-4dcb-54f22bdbc044"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-74":{"id":"a-74","title":"Close Evg Anochin","actionItemGroups":[{"actionItems":[{"id":"a-74-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-evgeny-anoshin","selectorGuids":["8b5d9b06-a9f6-1b91-f642-a7fa140d0c90"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-76":{"id":"a-76","title":"Close Alex Slu","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-alex-sluzhaev","selectorGuids":["9975066d-31ff-85a1-4f0e-985732038a8a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-78":{"id":"a-78","title":"Close Evg Af","actionItemGroups":[{"actionItems":[{"id":"a-78-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-evgeny-afonasev","selectorGuids":["b5392a79-3675-836a-8729-7e99f4c5b18b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-89":{"id":"a-89","title":"Close Ivan S","actionItemGroups":[{"actionItems":[{"id":"a-89-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-ivan-samohin","selectorGuids":["75dea93f-bcce-db17-118d-79209fce794b"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-90":{"id":"a-90","title":"Close Nikolay Hitrov","actionItemGroups":[{"actionItems":[{"id":"a-90-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-nikolay-hitrov","selectorGuids":["e2b258bb-1c16-97a9-dc58-f079c2389bcc"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-88":{"id":"a-88","title":"Close Sergey P","actionItemGroups":[{"actionItems":[{"id":"a-88-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-danil-nepomnyashih","selectorGuids":["19bedc76-8596-c978-4add-14a033191617"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-87":{"id":"a-87","title":"Close Nikolay V","actionItemGroups":[{"actionItems":[{"id":"a-87-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-nikolay-vasilchuk","selectorGuids":["bc53163b-c854-2d1d-405c-dcd42caf529c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-86":{"id":"a-86","title":"Close Alex Shev","actionItemGroups":[{"actionItems":[{"id":"a-86-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-alex-shevchenko","selectorGuids":["7b76c97f-f855-1998-4581-8e4d65d7c5e3"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-85":{"id":"a-85","title":"Close Max Bruev","actionItemGroups":[{"actionItems":[{"id":"a-85-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-max-bruev","selectorGuids":["09a07fa7-9259-0de4-ce87-950be79f30a3"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-137":{"id":"a-137","title":"Open Dombrovsky","actionItemGroups":[{"actionItems":[{"id":"a-137-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-dombrovsky","selectorGuids":["4b9051d7-c018-cfc3-14ca-9849e24fddc1"]},"value":"none"}}]},{"actionItems":[{"id":"a-137-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-dombrovsky","selectorGuids":["4b9051d7-c018-cfc3-14ca-9849e24fddc1"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-38":{"id":"a-38","title":"Open Max Grozii","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-max-gorozi","selectorGuids":["afa1f9fc-6fff-688b-194f-f4af3ae75509"]},"value":"none"}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-max-gorozi","selectorGuids":["afa1f9fc-6fff-688b-194f-f4af3ae75509"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-44":{"id":"a-44","title":"Open Nikita Akidinov","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-nikita-akidinov","selectorGuids":["ae7143b8-a35a-5703-e68a-19baae395f2a"]},"value":"none"}}]},{"actionItems":[{"id":"a-44-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-nikita-akidinov","selectorGuids":["ae7143b8-a35a-5703-e68a-19baae395f2a"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-50":{"id":"a-50","title":"Open Igor Saif","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-igor-saifutdinov","selectorGuids":["7543231d-bf2c-ed16-b267-144449849ae0"]},"value":"none"}}]},{"actionItems":[{"id":"a-50-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-igor-saifutdinov","selectorGuids":["7543231d-bf2c-ed16-b267-144449849ae0"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-52":{"id":"a-52","title":"Open Vladisllav Shakirov","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-vladislav-shakirov","selectorGuids":["e519bb5a-c244-0a79-0491-485357a9d938"]},"value":"none"}}]},{"actionItems":[{"id":"a-52-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-vladislav-shakirov","selectorGuids":["e519bb5a-c244-0a79-0491-485357a9d938"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-60":{"id":"a-60","title":"Open Anna","actionItemGroups":[{"actionItems":[{"id":"a-60-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-anna-zharkova","selectorGuids":["50fc93f3-80d0-d857-3fcf-3256a8d506ea"]},"value":"none"}}]},{"actionItems":[{"id":"a-60-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-android-anna-zharkova","selectorGuids":["50fc93f3-80d0-d857-3fcf-3256a8d506ea"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-71":{"id":"a-71","title":"Open Evg Bondar","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-evgeny-bondar","selectorGuids":["c19e7b87-cfd0-9541-4dcb-54f22bdbc044"]},"value":"none"}}]},{"actionItems":[{"id":"a-71-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-evgeny-bondar","selectorGuids":["c19e7b87-cfd0-9541-4dcb-54f22bdbc044"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-73":{"id":"a-73","title":"Open Evg Anochin","actionItemGroups":[{"actionItems":[{"id":"a-73-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-evgeny-anoshin","selectorGuids":["8b5d9b06-a9f6-1b91-f642-a7fa140d0c90"]},"value":"none"}}]},{"actionItems":[{"id":"a-73-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-evgeny-anoshin","selectorGuids":["8b5d9b06-a9f6-1b91-f642-a7fa140d0c90"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-75":{"id":"a-75","title":"Open Alex Slu","actionItemGroups":[{"actionItems":[{"id":"a-75-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-alex-sluzhaev","selectorGuids":["9975066d-31ff-85a1-4f0e-985732038a8a"]},"value":"none"}}]},{"actionItems":[{"id":"a-75-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-alex-sluzhaev","selectorGuids":["9975066d-31ff-85a1-4f0e-985732038a8a"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-77":{"id":"a-77","title":"Open Evg A","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-evgeny-afonasev","selectorGuids":["b5392a79-3675-836a-8729-7e99f4c5b18b"]},"value":"none"}}]},{"actionItems":[{"id":"a-77-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-evgeny-afonasev","selectorGuids":["b5392a79-3675-836a-8729-7e99f4c5b18b"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-79":{"id":"a-79","title":"Open Ivan Sm","actionItemGroups":[{"actionItems":[{"id":"a-79-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-ivan-samohin","selectorGuids":["75dea93f-bcce-db17-118d-79209fce794b"]},"value":"none"}}]},{"actionItems":[{"id":"a-79-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-ivan-samohin","selectorGuids":["75dea93f-bcce-db17-118d-79209fce794b"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-80":{"id":"a-80","title":"Open Nikolay Hitrov","actionItemGroups":[{"actionItems":[{"id":"a-80-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-nikolay-hitrov","selectorGuids":["e2b258bb-1c16-97a9-dc58-f079c2389bcc"]},"value":"none"}}]},{"actionItems":[{"id":"a-80-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-nikolay-hitrov","selectorGuids":["e2b258bb-1c16-97a9-dc58-f079c2389bcc"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-81":{"id":"a-81","title":"Open Sergey P","actionItemGroups":[{"actionItems":[{"id":"a-81-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-danil-nepomnyashih","selectorGuids":["19bedc76-8596-c978-4add-14a033191617"]},"value":"none"}}]},{"actionItems":[{"id":"a-81-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-danil-nepomnyashih","selectorGuids":["19bedc76-8596-c978-4add-14a033191617"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-82":{"id":"a-82","title":"Open Nikolay Vas","actionItemGroups":[{"actionItems":[{"id":"a-82-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-nikolay-vasilchuk","selectorGuids":["bc53163b-c854-2d1d-405c-dcd42caf529c"]},"value":"none"}}]},{"actionItems":[{"id":"a-82-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-nikolay-vasilchuk","selectorGuids":["bc53163b-c854-2d1d-405c-dcd42caf529c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-83":{"id":"a-83","title":"Open Alex S","actionItemGroups":[{"actionItems":[{"id":"a-83-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-alex-shevchenko","selectorGuids":["7b76c97f-f855-1998-4581-8e4d65d7c5e3"]},"value":"none"}}]},{"actionItems":[{"id":"a-83-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-alex-shevchenko","selectorGuids":["7b76c97f-f855-1998-4581-8e4d65d7c5e3"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-94":{"id":"a-94","title":"Close Anastasiya Z","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-anastasia-zolotih","selectorGuids":["af7e606b-12d8-944f-4489-c31f876e8cf3"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-92":{"id":"a-92","title":"Close Artem Kuz","actionItemGroups":[{"actionItems":[{"id":"a-92-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-artem-kuznecov","selectorGuids":["e819ce30-8f95-db7d-c9cb-906b45efdb42"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-93":{"id":"a-93","title":"Open Anastasia Z","actionItemGroups":[{"actionItems":[{"id":"a-93-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-anastasia-zolotih","selectorGuids":["af7e606b-12d8-944f-4489-c31f876e8cf3"]},"value":"none"}}]},{"actionItems":[{"id":"a-93-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-anastasia-zolotih","selectorGuids":["af7e606b-12d8-944f-4489-c31f876e8cf3"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-91":{"id":"a-91","title":"Open Artem Kuz","actionItemGroups":[{"actionItems":[{"id":"a-91-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-artem-kuznecov","selectorGuids":["e819ce30-8f95-db7d-c9cb-906b45efdb42"]},"value":"none"}}]},{"actionItems":[{"id":"a-91-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-artem-kuznecov","selectorGuids":["e819ce30-8f95-db7d-c9cb-906b45efdb42"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-138":{"id":"a-138","title":"Open Krugly Stol","actionItemGroups":[{"actionItems":[{"id":"a-138-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-krugly-stol","selectorGuids":["5e8125a6-a8f8-acb9-7c09-a87757c99f57"]},"value":"none"}}]},{"actionItems":[{"id":"a-138-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-krugly-stol","selectorGuids":["5e8125a6-a8f8-acb9-7c09-a87757c99f57"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-96":{"id":"a-96","title":"Close Nikita Moshkalov","actionItemGroups":[{"actionItems":[{"id":"a-96-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-nikita-moshkalov","selectorGuids":["b481230b-2561-e92d-70fe-216a4038bb20"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-99":{"id":"a-99","title":"Close Timur Moiseev","actionItemGroups":[{"actionItems":[{"id":"a-99-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-timur-moiseev","selectorGuids":["1b6c8517-4197-3c3c-1ec4-611afa478c15"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-100":{"id":"a-100","title":"Close Gennady Evstratov","actionItemGroups":[{"actionItems":[{"id":"a-100-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-gannady-evstratov","selectorGuids":["cf886af9-8443-7b2b-ca37-ca9a50e00a20"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-101":{"id":"a-101","title":"Open Evgeny Tumencev","actionItemGroups":[{"actionItems":[{"id":"a-101-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-evgeny-tumencev","selectorGuids":["f732dfef-e418-aad9-3f4f-55bf7aaac660"]},"value":"none"}}]},{"actionItems":[{"id":"a-101-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-evgeny-tumencev","selectorGuids":["f732dfef-e418-aad9-3f4f-55bf7aaac660"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-102":{"id":"a-102","title":"Close Evgeny Tumencev","actionItemGroups":[{"actionItems":[{"id":"a-102-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-evgeny-tumencev","selectorGuids":["f732dfef-e418-aad9-3f4f-55bf7aaac660"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-103":{"id":"a-103","title":"Open Nikita Moshkalov Python","actionItemGroups":[{"actionItems":[{"id":"a-103-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-nikita-moshkalov","selectorGuids":["18abccab-be36-6680-91ad-593ac78c59a9"]},"value":"none"}}]},{"actionItems":[{"id":"a-103-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-nikita-moshkalov","selectorGuids":["18abccab-be36-6680-91ad-593ac78c59a9"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-104":{"id":"a-104","title":"Close Nikita Moshkalov Python","actionItemGroups":[{"actionItems":[{"id":"a-104-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-nikita-moshkalov","selectorGuids":["18abccab-be36-6680-91ad-593ac78c59a9"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-105":{"id":"a-105","title":"Лого становится цветным","actionItemGroups":[{"actionItems":[{"id":"a-105-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":true,"id":"65ba268c185eaccabf7c09e1|5ba92d05-faa2-27e8-a01e-3b189927300a"},"filters":[{"type":"grayscale","filterId":"5548","value":0,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695122744753},"a-106":{"id":"a-106","title":"Лого становится цветным 2","actionItemGroups":[{"actionItems":[{"id":"a-106-n","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".logo","selectorGuids":["7ea64989-69e7-96c4-ec3d-dc5226ca09a9"]},"filters":[{"type":"grayscale","filterId":"5548","value":100,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695122744753},"a-107":{"id":"a-107","title":"Open Max Bruev","actionItemGroups":[{"actionItems":[{"id":"a-107-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-max-bruev","selectorGuids":["09a07fa7-9259-0de4-ce87-950be79f30a3"]},"value":"none"}}]},{"actionItems":[{"id":"a-107-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-max-bruev","selectorGuids":["09a07fa7-9259-0de4-ce87-950be79f30a3"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-108":{"id":"a-108","title":"Open Xenia Tsvetkova","actionItemGroups":[{"actionItems":[{"id":"a-108-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-xenia-tsvetkova","selectorGuids":["993e5a7b-cb9e-8962-281a-df81ca731e99"]},"value":"none"}}]},{"actionItems":[{"id":"a-108-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-xenia-tsvetkova","selectorGuids":["993e5a7b-cb9e-8962-281a-df81ca731e99"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-109":{"id":"a-109","title":"Close Xenia Tsvetkova","actionItemGroups":[{"actionItems":[{"id":"a-109-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-xenia-tsvetkova","selectorGuids":["993e5a7b-cb9e-8962-281a-df81ca731e99"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-110":{"id":"a-110","title":"Open Anastasia Chupova","actionItemGroups":[{"actionItems":[{"id":"a-110-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-anastasia-chupova","selectorGuids":["955021cd-a5b8-91d1-a52e-31ee8397008c"]},"value":"none"}}]},{"actionItems":[{"id":"a-110-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-anastasia-chupova","selectorGuids":["955021cd-a5b8-91d1-a52e-31ee8397008c"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-111":{"id":"a-111","title":"Open Yakov Shtefan","actionItemGroups":[{"actionItems":[{"id":"a-111-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-yakov-shtefan","selectorGuids":["5e1592d4-23e3-cbb4-005e-f75a44db8667"]},"value":"none"}}]},{"actionItems":[{"id":"a-111-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-yakov-shtefan","selectorGuids":["5e1592d4-23e3-cbb4-005e-f75a44db8667"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-112":{"id":"a-112","title":"Close Anastasia Chupova","actionItemGroups":[{"actionItems":[{"id":"a-112-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-anastasia-chupova","selectorGuids":["955021cd-a5b8-91d1-a52e-31ee8397008c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-113":{"id":"a-113","title":"Close Yakov Shtefan","actionItemGroups":[{"actionItems":[{"id":"a-113-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ios-yakov-shtefan","selectorGuids":["5e1592d4-23e3-cbb4-005e-f75a44db8667"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-128":{"id":"a-128","title":"Close 1 video","actionItemGroups":[{"actionItems":[{"id":"a-128-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_1","selectorGuids":["64a4d48c-45d4-2404-06b2-fe2b58c42201"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-114":{"id":"a-114","title":"Open Emil Shariffulin","actionItemGroups":[{"actionItems":[{"id":"a-114-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-emil-shariffulin","selectorGuids":["f1e81176-d916-6ab5-afec-81704927008f"]},"value":"none"}}]},{"actionItems":[{"id":"a-114-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-emil-shariffulin","selectorGuids":["f1e81176-d916-6ab5-afec-81704927008f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-115":{"id":"a-115","title":"Close Emil Shariffulin","actionItemGroups":[{"actionItems":[{"id":"a-115-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-emil-shariffulin","selectorGuids":["f1e81176-d916-6ab5-afec-81704927008f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-116":{"id":"a-116","title":"Open tamara+ulia","actionItemGroups":[{"actionItems":[{"id":"a-116-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-tamara-ulia","selectorGuids":["33d4290d-43e0-d7f3-1575-7700c97a2cdf"]},"value":"none"}}]},{"actionItems":[{"id":"a-116-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-tamara-ulia","selectorGuids":["33d4290d-43e0-d7f3-1575-7700c97a2cdf"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-117":{"id":"a-117","title":"Close tamara+ulia","actionItemGroups":[{"actionItems":[{"id":"a-117-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-ux-tamara-ulia","selectorGuids":["33d4290d-43e0-d7f3-1575-7700c97a2cdf"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-120":{"id":"a-120","title":"Open Gleb 2","actionItemGroups":[{"actionItems":[{"id":"a-120-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-mihail-doshevsky","selectorGuids":["1c9cdb20-1707-ca8e-20df-4963c902319a"]},"value":"none"}}]},{"actionItems":[{"id":"a-120-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-mihail-doshevsky","selectorGuids":["1c9cdb20-1707-ca8e-20df-4963c902319a"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-119":{"id":"a-119","title":"Close Alex Chapligin","actionItemGroups":[{"actionItems":[{"id":"a-119-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-alex-chapligin","selectorGuids":["aaae337b-ba8a-7f6d-c35f-b9cd9c8ff550"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-121":{"id":"a-121","title":"Close Mihail Doshevsky","actionItemGroups":[{"actionItems":[{"id":"a-121-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-net-mihail-doshevsky","selectorGuids":["1c9cdb20-1707-ca8e-20df-4963c902319a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-129":{"id":"a-129","title":"Close 2 video","actionItemGroups":[{"actionItems":[{"id":"a-129-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_2","selectorGuids":["f8a73d06-4061-8da6-2bfc-b8a62d3d5f93"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-131":{"id":"a-131","title":"Close 4 video","actionItemGroups":[{"actionItems":[{"id":"a-131-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_4","selectorGuids":["d9fb0e4d-ee4c-4323-6847-5e7ce16bc172"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-130":{"id":"a-130","title":"Close 3 video","actionItemGroups":[{"actionItems":[{"id":"a-130-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_3","selectorGuids":["01a3fd41-a468-807c-f329-04a3c7a43dfe"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-132":{"id":"a-132","title":"Close 5 video","actionItemGroups":[{"actionItems":[{"id":"a-132-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_5","selectorGuids":["4bb72006-bba4-c2da-1a49-0e8509cd181a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-133":{"id":"a-133","title":"Close 6 video","actionItemGroups":[{"actionItems":[{"id":"a-133-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_6","selectorGuids":["6fd22b99-f679-dc41-7a75-21c59330bab1"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-135":{"id":"a-135","title":"Open Konstantin L","actionItemGroups":[{"actionItems":[{"id":"a-135-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-konstantin-logvinskih","selectorGuids":["6d9006d3-3458-396a-7e43-f2289e929c73"]},"value":"none"}}]},{"actionItems":[{"id":"a-135-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-konstantin-logvinskih","selectorGuids":["6d9006d3-3458-396a-7e43-f2289e929c73"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-134":{"id":"a-134","title":"Close Konstanton L","actionItemGroups":[{"actionItems":[{"id":"a-134-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-web-konstantin-logvinskih","selectorGuids":["6d9006d3-3458-396a-7e43-f2289e929c73"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-122":{"id":"a-122","title":"Open 1 Video","actionItemGroups":[{"actionItems":[{"id":"a-122-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_1","selectorGuids":["64a4d48c-45d4-2404-06b2-fe2b58c42201"]},"value":"none"}}]},{"actionItems":[{"id":"a-122-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_1","selectorGuids":["64a4d48c-45d4-2404-06b2-fe2b58c42201"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-123":{"id":"a-123","title":"Open 2 Video","actionItemGroups":[{"actionItems":[{"id":"a-123-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_2","selectorGuids":["f8a73d06-4061-8da6-2bfc-b8a62d3d5f93"]},"value":"none"}}]},{"actionItems":[{"id":"a-123-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_2","selectorGuids":["f8a73d06-4061-8da6-2bfc-b8a62d3d5f93"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-124":{"id":"a-124","title":"Open 3 Video","actionItemGroups":[{"actionItems":[{"id":"a-124-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_3","selectorGuids":["01a3fd41-a468-807c-f329-04a3c7a43dfe"]},"value":"none"}}]},{"actionItems":[{"id":"a-124-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_3","selectorGuids":["01a3fd41-a468-807c-f329-04a3c7a43dfe"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-125":{"id":"a-125","title":"Open 4 Video","actionItemGroups":[{"actionItems":[{"id":"a-125-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_4","selectorGuids":["d9fb0e4d-ee4c-4323-6847-5e7ce16bc172"]},"value":"none"}}]},{"actionItems":[{"id":"a-125-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_4","selectorGuids":["d9fb0e4d-ee4c-4323-6847-5e7ce16bc172"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-126":{"id":"a-126","title":"Open 5 Video","actionItemGroups":[{"actionItems":[{"id":"a-126-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_5","selectorGuids":["4bb72006-bba4-c2da-1a49-0e8509cd181a"]},"value":"none"}}]},{"actionItems":[{"id":"a-126-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_5","selectorGuids":["4bb72006-bba4-c2da-1a49-0e8509cd181a"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-127":{"id":"a-127","title":"Open 6 Video","actionItemGroups":[{"actionItems":[{"id":"a-127-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_6","selectorGuids":["6fd22b99-f679-dc41-7a75-21c59330bab1"]},"value":"none"}}]},{"actionItems":[{"id":"a-127-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal_video_6","selectorGuids":["6fd22b99-f679-dc41-7a75-21c59330bab1"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-19":{"id":"a-19","title":"Open Roman Alztudin","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-roman-alyatudin","selectorGuids":["2be2ad00-e6fd-5f25-1949-c2fc29827add"]},"value":"none"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-roman-alyatudin","selectorGuids":["2be2ad00-e6fd-5f25-1949-c2fc29827add"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-95":{"id":"a-95","title":"Open Nikita Moshkalov","actionItemGroups":[{"actionItems":[{"id":"a-95-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-nikita-moshkalov","selectorGuids":["b481230b-2561-e92d-70fe-216a4038bb20"]},"value":"none"}}]},{"actionItems":[{"id":"a-95-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-nikita-moshkalov","selectorGuids":["b481230b-2561-e92d-70fe-216a4038bb20"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-17":{"id":"a-17","title":"Open Yaroslav Andreev","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-yaroslav-andreev","selectorGuids":["69c79516-2732-cb23-4457-b2428375a0c2"]},"value":"none"}}]},{"actionItems":[{"id":"a-17-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-yaroslav-andreev","selectorGuids":["69c79516-2732-cb23-4457-b2428375a0c2"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-21":{"id":"a-21","title":"Open Daniil Mihaliov","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-daniil-mihailov-ovs","selectorGuids":["b4697e5d-c589-f489-8d40-89472be69364"]},"value":"none"}}]},{"actionItems":[{"id":"a-21-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-daniil-mihailov-ovs","selectorGuids":["b4697e5d-c589-f489-8d40-89472be69364"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-23":{"id":"a-23","title":"Open Denis Suprin","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-denus-suprun","selectorGuids":["e0f240fe-9729-0e24-37ff-bde397d67448"]},"value":"none"}}]},{"actionItems":[{"id":"a-23-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-denus-suprun","selectorGuids":["e0f240fe-9729-0e24-37ff-bde397d67448"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-25":{"id":"a-25","title":"Open Artem Kisl","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-artem-kislitsin","selectorGuids":["9f42388c-2b16-5b15-89d9-4e8274037334"]},"value":"none"}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-artem-kislitsin","selectorGuids":["9f42388c-2b16-5b15-89d9-4e8274037334"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-27":{"id":"a-27","title":"Open Roman Rvachev","actionItemGroups":[{"actionItems":[{"id":"a-27-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-roma-rvachev","selectorGuids":["346d0735-b4d3-70a9-88b3-480f89b054ae"]},"value":"none"}}]},{"actionItems":[{"id":"a-27-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-roma-rvachev","selectorGuids":["346d0735-b4d3-70a9-88b3-480f89b054ae"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-29":{"id":"a-29","title":"Open Sergei Kolcov","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-sergey-koltsov","selectorGuids":["12892360-bc89-f4a2-9968-cd3dbbc9f263"]},"value":"none"}}]},{"actionItems":[{"id":"a-29-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-sergey-koltsov","selectorGuids":["12892360-bc89-f4a2-9968-cd3dbbc9f263"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-97":{"id":"a-97","title":"Open Gennady Evstratov","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-gannady-evstratov","selectorGuids":["cf886af9-8443-7b2b-ca37-ca9a50e00a20"]},"value":"none"}}]},{"actionItems":[{"id":"a-97-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-gannady-evstratov","selectorGuids":["cf886af9-8443-7b2b-ca37-ca9a50e00a20"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-98":{"id":"a-98","title":"Open Timur Moiseev","actionItemGroups":[{"actionItems":[{"id":"a-98-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-timur-moiseev","selectorGuids":["1b6c8517-4197-3c3c-1ec4-611afa478c15"]},"value":"none"}}]},{"actionItems":[{"id":"a-98-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-timur-moiseev","selectorGuids":["1b6c8517-4197-3c3c-1ec4-611afa478c15"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-118":{"id":"a-118","title":"Open Alex Chapligin","actionItemGroups":[{"actionItems":[{"id":"a-118-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-alex-chapligin","selectorGuids":["aaae337b-ba8a-7f6d-c35f-b9cd9c8ff550"]},"value":"none"}}]},{"actionItems":[{"id":"a-118-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-alex-chapligin","selectorGuids":["aaae337b-ba8a-7f6d-c35f-b9cd9c8ff550"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-15":{"id":"a-15","title":"Close Pavel Fadeev","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-aurora-yaroslav-andreev","selectorGuids":["69c79516-2732-cb23-4457-b2428375a0c2"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-140":{"id":"a-140","title":"Close Dombrovsky","actionItemGroups":[{"actionItems":[{"id":"a-140-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-dombrovsky","selectorGuids":["4b9051d7-c018-cfc3-14ca-9849e24fddc1"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-141":{"id":"a-141","title":"Close Krugly stol","actionItemGroups":[{"actionItems":[{"id":"a-141-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-keynote-krugly-stol","selectorGuids":["5e8125a6-a8f8-acb9-7c09-a87757c99f57"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-142":{"id":"a-142","title":"Open Dmitry Valov","actionItemGroups":[{"actionItems":[{"id":"a-142-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-dmitry-valov","selectorGuids":["7e269f53-0556-cd65-5c2d-0cc84a2ce421"]},"value":"none"}}]},{"actionItems":[{"id":"a-142-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-dmitry-valov","selectorGuids":["7e269f53-0556-cd65-5c2d-0cc84a2ce421"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-143":{"id":"a-143","title":"Close Dmitry Valov","actionItemGroups":[{"actionItems":[{"id":"a-143-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-dmitry-valov","selectorGuids":["7e269f53-0556-cd65-5c2d-0cc84a2ce421"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-145":{"id":"a-145","title":"Open Alex Zubankov","actionItemGroups":[{"actionItems":[{"id":"a-145-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-alexey-zubankov","selectorGuids":["62fd781d-5176-6a05-6a14-826e2d4f29b5"]},"value":"none"}}]},{"actionItems":[{"id":"a-145-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-alexey-zubankov","selectorGuids":["62fd781d-5176-6a05-6a14-826e2d4f29b5"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-144":{"id":"a-144","title":"Close Alex Zubankov","actionItemGroups":[{"actionItems":[{"id":"a-144-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-flutter-alexey-zubankov","selectorGuids":["62fd781d-5176-6a05-6a14-826e2d4f29b5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-146":{"id":"a-146","title":"Open pavel fadeev+1","actionItemGroups":[{"actionItems":[{"id":"a-146-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-pavel-fadeev-1","selectorGuids":["d635938a-242e-4980-99b8-e2dce35dfdee"]},"value":"none"}}]},{"actionItems":[{"id":"a-146-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-pavel-fadeev-1","selectorGuids":["d635938a-242e-4980-99b8-e2dce35dfdee"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-147":{"id":"a-147","title":"Close pavel fadeev+1","actionItemGroups":[{"actionItems":[{"id":"a-147-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-automation-pavel-fadeev-1","selectorGuids":["d635938a-242e-4980-99b8-e2dce35dfdee"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-150":{"id":"a-150","title":"Open Sergey Shlyanin","actionItemGroups":[{"actionItems":[{"id":"a-150-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-sergey-shlyanin","selectorGuids":["fd24fde4-a78e-3cfb-b32f-e7d0b134aa67"]},"value":"none"}}]},{"actionItems":[{"id":"a-150-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-sergey-shlyanin","selectorGuids":["fd24fde4-a78e-3cfb-b32f-e7d0b134aa67"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-148":{"id":"a-148","title":"Open Ivan Sharun","actionItemGroups":[{"actionItems":[{"id":"a-148-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-ivan-sharun","selectorGuids":["4d8535c8-e537-473e-4307-5eeee814a587"]},"value":"none"}}]},{"actionItems":[{"id":"a-148-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-ivan-sharun","selectorGuids":["4d8535c8-e537-473e-4307-5eeee814a587"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1694167038519},"a-149":{"id":"a-149","title":"Close Ivan Sharun","actionItemGroups":[{"actionItems":[{"id":"a-149-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-python-ivan-sharun","selectorGuids":["4d8535c8-e537-473e-4307-5eeee814a587"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"a-151":{"id":"a-151","title":"Close Sergey Shlaynin","actionItemGroups":[{"actionItems":[{"id":"a-151-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-go-sergey-shlyanin","selectorGuids":["fd24fde4-a78e-3cfb-b32f-e7d0b134aa67"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1694167352368},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}
);
