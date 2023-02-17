function Ft() {
}
function me(r) {
  return r();
}
function ee() {
  return /* @__PURE__ */ Object.create(null);
}
function Pt(r) {
  r.forEach(me);
}
function Ce(r) {
  return typeof r == "function";
}
function Tt(r, t) {
  return r != r ? t == t : r !== t || r && typeof r == "object" || typeof r == "function";
}
function We(r) {
  return Object.keys(r).length === 0;
}
function Ve(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function ze(r) {
  return Array.from(r.childNodes);
}
let zt;
function ht(r) {
  zt = r;
}
const z = [], ie = [], bt = [], re = [], je = Promise.resolve();
let Yt = !1;
function Ke() {
  Yt || (Yt = !0, je.then(Se));
}
function Xt(r) {
  bt.push(r);
}
const Gt = /* @__PURE__ */ new Set();
let $ = 0;
function Se() {
  if ($ !== 0)
    return;
  const r = zt;
  do {
    try {
      for (; $ < z.length; ) {
        const t = z[$];
        $++, ht(t), qe(t.$$);
      }
    } catch (t) {
      throw z.length = 0, $ = 0, t;
    }
    for (ht(null), z.length = 0, $ = 0; ie.length; )
      ie.pop()();
    for (let t = 0; t < bt.length; t += 1) {
      const e = bt[t];
      Gt.has(e) || (Gt.add(e), e());
    }
    bt.length = 0;
  } while (z.length);
  for (; re.length; )
    re.pop()();
  Yt = !1, Gt.clear(), ht(r);
}
function qe(r) {
  if (r.fragment !== null) {
    r.update(), Pt(r.before_update);
    const t = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(Xt);
  }
}
const Je = /* @__PURE__ */ new Set();
function Ze(r, t) {
  r && r.i && (Je.delete(r), r.i(t));
}
function Qe(r, t, e, i) {
  const { fragment: a, after_update: n } = r.$$;
  a && a.m(t, e), i || Xt(() => {
    const s = r.$$.on_mount.map(me).filter(Ce);
    r.$$.on_destroy ? r.$$.on_destroy.push(...s) : Pt(s), r.$$.on_mount = [];
  }), n.forEach(Xt);
}
function ti(r, t) {
  const e = r.$$;
  e.fragment !== null && (Pt(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function ei(r, t) {
  r.$$.dirty[0] === -1 && (z.push(r), Ke(), r.$$.dirty.fill(0)), r.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function kt(r, t, e, i, a, n, s, o = [-1]) {
  const l = zt;
  ht(r);
  const h = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: Ft,
    not_equal: a,
    bound: ee(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: ee(),
    dirty: o,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(h.root);
  let u = !1;
  if (h.ctx = e ? e(r, t.props || {}, (p, g, ...w) => {
    const C = w.length ? w[0] : g;
    return h.ctx && a(h.ctx[p], h.ctx[p] = C) && (!h.skip_bound && h.bound[p] && h.bound[p](C), u && ei(r, p)), g;
  }) : [], h.update(), u = !0, Pt(h.before_update), h.fragment = i ? i(h.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = ze(t.target);
      h.fragment && h.fragment.l(p), p.forEach(Ve);
    } else
      h.fragment && h.fragment.c();
    t.intro && Ze(r.$$.fragment), Qe(r, t.target, t.anchor, t.customElement), Se();
  }
  ht(l);
}
class At {
  $destroy() {
    ti(this, 1), this.$destroy = Ft;
  }
  $on(t, e) {
    if (!Ce(e))
      return Ft;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(e), () => {
      const a = i.indexOf(e);
      a !== -1 && i.splice(a, 1);
    };
  }
  $set(t) {
    this.$$set && !We(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
var ii = Math.PI / 180;
function ri() {
  return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
}
const Ot = typeof global < "u" ? global : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, _ = {
  _global: Ot,
  version: "8.4.2",
  isBrowser: ri(),
  isUnminified: /param/.test(function(r) {
  }.toString()),
  dblClickWindow: 400,
  getAngle(r) {
    return _.angleDeg ? r * ii : r;
  },
  enableTrace: !1,
  pointerEventsEnabled: !0,
  autoDrawEnabled: !0,
  hitOnDragEnabled: !1,
  capturePointerEventsEnabled: !1,
  _mouseListenClick: !1,
  _touchListenClick: !1,
  _pointerListenClick: !1,
  _mouseInDblClickWindow: !1,
  _touchInDblClickWindow: !1,
  _pointerInDblClickWindow: !1,
  _mouseDblClickPointerId: null,
  _touchDblClickPointerId: null,
  _pointerDblClickPointerId: null,
  pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
  dragDistance: 3,
  angleDeg: !0,
  showWarnings: !0,
  dragButtons: [0, 1],
  isDragging() {
    return _.DD.isDragging;
  },
  isDragReady() {
    return !!_.DD.node;
  },
  releaseCanvasOnDestroy: !0,
  document: Ot.document,
  _injectGlobal(r) {
    Ot.Konva = r;
  }
}, ct = (r) => {
  _[r.prototype.getClassName()] = r;
};
_._injectGlobal(_);
class X {
  constructor(t = [1, 0, 0, 1, 0, 0]) {
    this.dirty = !1, this.m = t && t.slice() || [1, 0, 0, 1, 0, 0];
  }
  reset() {
    this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
  }
  copy() {
    return new X(this.m);
  }
  copyInto(t) {
    t.m[0] = this.m[0], t.m[1] = this.m[1], t.m[2] = this.m[2], t.m[3] = this.m[3], t.m[4] = this.m[4], t.m[5] = this.m[5];
  }
  point(t) {
    var e = this.m;
    return {
      x: e[0] * t.x + e[2] * t.y + e[4],
      y: e[1] * t.x + e[3] * t.y + e[5]
    };
  }
  translate(t, e) {
    return this.m[4] += this.m[0] * t + this.m[2] * e, this.m[5] += this.m[1] * t + this.m[3] * e, this;
  }
  scale(t, e) {
    return this.m[0] *= t, this.m[1] *= t, this.m[2] *= e, this.m[3] *= e, this;
  }
  rotate(t) {
    var e = Math.cos(t), i = Math.sin(t), a = this.m[0] * e + this.m[2] * i, n = this.m[1] * e + this.m[3] * i, s = this.m[0] * -i + this.m[2] * e, o = this.m[1] * -i + this.m[3] * e;
    return this.m[0] = a, this.m[1] = n, this.m[2] = s, this.m[3] = o, this;
  }
  getTranslation() {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  }
  skew(t, e) {
    var i = this.m[0] + this.m[2] * e, a = this.m[1] + this.m[3] * e, n = this.m[2] + this.m[0] * t, s = this.m[3] + this.m[1] * t;
    return this.m[0] = i, this.m[1] = a, this.m[2] = n, this.m[3] = s, this;
  }
  multiply(t) {
    var e = this.m[0] * t.m[0] + this.m[2] * t.m[1], i = this.m[1] * t.m[0] + this.m[3] * t.m[1], a = this.m[0] * t.m[2] + this.m[2] * t.m[3], n = this.m[1] * t.m[2] + this.m[3] * t.m[3], s = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4], o = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
    return this.m[0] = e, this.m[1] = i, this.m[2] = a, this.m[3] = n, this.m[4] = s, this.m[5] = o, this;
  }
  invert() {
    var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), e = this.m[3] * t, i = -this.m[1] * t, a = -this.m[2] * t, n = this.m[0] * t, s = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), o = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    return this.m[0] = e, this.m[1] = i, this.m[2] = a, this.m[3] = n, this.m[4] = s, this.m[5] = o, this;
  }
  getMatrix() {
    return this.m;
  }
  decompose() {
    var t = this.m[0], e = this.m[1], i = this.m[2], a = this.m[3], n = this.m[4], s = this.m[5], o = t * a - e * i;
    let l = {
      x: n,
      y: s,
      rotation: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    if (t != 0 || e != 0) {
      var h = Math.sqrt(t * t + e * e);
      l.rotation = e > 0 ? Math.acos(t / h) : -Math.acos(t / h), l.scaleX = h, l.scaleY = o / h, l.skewX = (t * i + e * a) / o, l.skewY = 0;
    } else if (i != 0 || a != 0) {
      var u = Math.sqrt(i * i + a * a);
      l.rotation = Math.PI / 2 - (a > 0 ? Math.acos(-i / u) : -Math.acos(i / u)), l.scaleX = o / u, l.scaleY = u, l.skewX = 0, l.skewY = (t * i + e * a) / o;
    }
    return l.rotation = d._getRotation(l.rotation), l;
  }
}
var ai = "[object Array]", ni = "[object Number]", si = "[object String]", oi = "[object Boolean]", hi = Math.PI / 180, li = 180 / Math.PI, Dt = "#", di = "", ci = "0", ui = "Konva warning: ", ae = "Konva error: ", fi = "rgb(", Lt = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
}, gi = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, ut = [];
const pi = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(r) {
  setTimeout(r, 60);
}, d = {
  _isElement(r) {
    return !!(r && r.nodeType == 1);
  },
  _isFunction(r) {
    return !!(r && r.constructor && r.call && r.apply);
  },
  _isPlainObject(r) {
    return !!r && r.constructor === Object;
  },
  _isArray(r) {
    return Object.prototype.toString.call(r) === ai;
  },
  _isNumber(r) {
    return Object.prototype.toString.call(r) === ni && !isNaN(r) && isFinite(r);
  },
  _isString(r) {
    return Object.prototype.toString.call(r) === si;
  },
  _isBoolean(r) {
    return Object.prototype.toString.call(r) === oi;
  },
  isObject(r) {
    return r instanceof Object;
  },
  isValidSelector(r) {
    if (typeof r != "string")
      return !1;
    var t = r[0];
    return t === "#" || t === "." || t === t.toUpperCase();
  },
  _sign(r) {
    return r === 0 || r > 0 ? 1 : -1;
  },
  requestAnimFrame(r) {
    ut.push(r), ut.length === 1 && pi(function() {
      const t = ut;
      ut = [], t.forEach(function(e) {
        e();
      });
    });
  },
  createCanvasElement() {
    var r = document.createElement("canvas");
    try {
      r.style = r.style || {};
    } catch {
    }
    return r;
  },
  createImageElement() {
    return document.createElement("img");
  },
  _isInDocument(r) {
    for (; r = r.parentNode; )
      if (r == document)
        return !0;
    return !1;
  },
  _urlToImage(r, t) {
    var e = d.createImageElement();
    e.onload = function() {
      t(e);
    }, e.src = r;
  },
  _rgbToHex(r, t, e) {
    return ((1 << 24) + (r << 16) + (t << 8) + e).toString(16).slice(1);
  },
  _hexToRgb(r) {
    r = r.replace(Dt, di);
    var t = parseInt(r, 16);
    return {
      r: t >> 16 & 255,
      g: t >> 8 & 255,
      b: t & 255
    };
  },
  getRandomColor() {
    for (var r = (Math.random() * 16777215 << 0).toString(16); r.length < 6; )
      r = ci + r;
    return Dt + r;
  },
  getRGB(r) {
    var t;
    return r in Lt ? (t = Lt[r], {
      r: t[0],
      g: t[1],
      b: t[2]
    }) : r[0] === Dt ? this._hexToRgb(r.substring(1)) : r.substr(0, 4) === fi ? (t = gi.exec(r.replace(/ /g, "")), {
      r: parseInt(t[1], 10),
      g: parseInt(t[2], 10),
      b: parseInt(t[3], 10)
    }) : {
      r: 0,
      g: 0,
      b: 0
    };
  },
  colorToRGBA(r) {
    return r = r || "black", d._namedColorToRBA(r) || d._hex3ColorToRGBA(r) || d._hex4ColorToRGBA(r) || d._hex6ColorToRGBA(r) || d._hex8ColorToRGBA(r) || d._rgbColorToRGBA(r) || d._rgbaColorToRGBA(r) || d._hslColorToRGBA(r);
  },
  _namedColorToRBA(r) {
    var t = Lt[r.toLowerCase()];
    return t ? {
      r: t[0],
      g: t[1],
      b: t[2],
      a: 1
    } : null;
  },
  _rgbColorToRGBA(r) {
    if (r.indexOf("rgb(") === 0) {
      r = r.match(/rgb\(([^)]+)\)/)[1];
      var t = r.split(/ *, */).map(Number);
      return {
        r: t[0],
        g: t[1],
        b: t[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA(r) {
    if (r.indexOf("rgba(") === 0) {
      r = r.match(/rgba\(([^)]+)\)/)[1];
      var t = r.split(/ *, */).map((e, i) => e.slice(-1) === "%" ? i === 3 ? parseInt(e) / 100 : parseInt(e) / 100 * 255 : Number(e));
      return {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t[3]
      };
    }
  },
  _hex8ColorToRGBA(r) {
    if (r[0] === "#" && r.length === 9)
      return {
        r: parseInt(r.slice(1, 3), 16),
        g: parseInt(r.slice(3, 5), 16),
        b: parseInt(r.slice(5, 7), 16),
        a: parseInt(r.slice(7, 9), 16) / 255
      };
  },
  _hex6ColorToRGBA(r) {
    if (r[0] === "#" && r.length === 7)
      return {
        r: parseInt(r.slice(1, 3), 16),
        g: parseInt(r.slice(3, 5), 16),
        b: parseInt(r.slice(5, 7), 16),
        a: 1
      };
  },
  _hex4ColorToRGBA(r) {
    if (r[0] === "#" && r.length === 5)
      return {
        r: parseInt(r[1] + r[1], 16),
        g: parseInt(r[2] + r[2], 16),
        b: parseInt(r[3] + r[3], 16),
        a: parseInt(r[4] + r[4], 16) / 255
      };
  },
  _hex3ColorToRGBA(r) {
    if (r[0] === "#" && r.length === 4)
      return {
        r: parseInt(r[1] + r[1], 16),
        g: parseInt(r[2] + r[2], 16),
        b: parseInt(r[3] + r[3], 16),
        a: 1
      };
  },
  _hslColorToRGBA(r) {
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(r)) {
      const [t, ...e] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r), i = Number(e[0]) / 360, a = Number(e[1]) / 100, n = Number(e[2]) / 100;
      let s, o, l;
      if (a === 0)
        return l = n * 255, {
          r: Math.round(l),
          g: Math.round(l),
          b: Math.round(l),
          a: 1
        };
      n < 0.5 ? s = n * (1 + a) : s = n + a - n * a;
      const h = 2 * n - s, u = [0, 0, 0];
      for (let p = 0; p < 3; p++)
        o = i + 1 / 3 * -(p - 1), o < 0 && o++, o > 1 && o--, 6 * o < 1 ? l = h + (s - h) * 6 * o : 2 * o < 1 ? l = s : 3 * o < 2 ? l = h + (s - h) * (2 / 3 - o) * 6 : l = h, u[p] = l * 255;
      return {
        r: Math.round(u[0]),
        g: Math.round(u[1]),
        b: Math.round(u[2]),
        a: 1
      };
    }
  },
  haveIntersection(r, t) {
    return !(t.x > r.x + r.width || t.x + t.width < r.x || t.y > r.y + r.height || t.y + t.height < r.y);
  },
  cloneObject(r) {
    var t = {};
    for (var e in r)
      this._isPlainObject(r[e]) ? t[e] = this.cloneObject(r[e]) : this._isArray(r[e]) ? t[e] = this.cloneArray(r[e]) : t[e] = r[e];
    return t;
  },
  cloneArray(r) {
    return r.slice(0);
  },
  degToRad(r) {
    return r * hi;
  },
  radToDeg(r) {
    return r * li;
  },
  _degToRad(r) {
    return d.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), d.degToRad(r);
  },
  _radToDeg(r) {
    return d.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), d.radToDeg(r);
  },
  _getRotation(r) {
    return _.angleDeg ? d.radToDeg(r) : r;
  },
  _capitalize(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  },
  throw(r) {
    throw new Error(ae + r);
  },
  error(r) {
    console.error(ae + r);
  },
  warn(r) {
    _.showWarnings && console.warn(ui + r);
  },
  each(r, t) {
    for (var e in r)
      t(e, r[e]);
  },
  _inRange(r, t, e) {
    return t <= r && r < e;
  },
  _getProjectionToSegment(r, t, e, i, a, n) {
    var s, o, l, h = (r - e) * (r - e) + (t - i) * (t - i);
    if (h == 0)
      s = r, o = t, l = (a - e) * (a - e) + (n - i) * (n - i);
    else {
      var u = ((a - r) * (e - r) + (n - t) * (i - t)) / h;
      u < 0 ? (s = r, o = t, l = (r - a) * (r - a) + (t - n) * (t - n)) : u > 1 ? (s = e, o = i, l = (e - a) * (e - a) + (i - n) * (i - n)) : (s = r + u * (e - r), o = t + u * (i - t), l = (s - a) * (s - a) + (o - n) * (o - n));
    }
    return [s, o, l];
  },
  _getProjectionToLine(r, t, e) {
    var i = d.cloneObject(r), a = Number.MAX_VALUE;
    return t.forEach(function(n, s) {
      if (!(!e && s === t.length - 1)) {
        var o = t[(s + 1) % t.length], l = d._getProjectionToSegment(n.x, n.y, o.x, o.y, r.x, r.y), h = l[0], u = l[1], p = l[2];
        p < a && (i.x = h, i.y = u, a = p);
      }
    }), i;
  },
  _prepareArrayForTween(r, t, e) {
    var i, a = [], n = [];
    if (r.length > t.length) {
      var s = t;
      t = r, r = s;
    }
    for (i = 0; i < r.length; i += 2)
      a.push({
        x: r[i],
        y: r[i + 1]
      });
    for (i = 0; i < t.length; i += 2)
      n.push({
        x: t[i],
        y: t[i + 1]
      });
    var o = [];
    return n.forEach(function(l) {
      var h = d._getProjectionToLine(l, a, e);
      o.push(h.x), o.push(h.y);
    }), o;
  },
  _prepareToStringify(r) {
    var t;
    r.visitedByCircularReferenceRemoval = !0;
    for (var e in r)
      if (r.hasOwnProperty(e) && r[e] && typeof r[e] == "object") {
        if (t = Object.getOwnPropertyDescriptor(r, e), r[e].visitedByCircularReferenceRemoval || d._isElement(r[e]))
          if (t.configurable)
            delete r[e];
          else
            return null;
        else if (d._prepareToStringify(r[e]) === null)
          if (t.configurable)
            delete r[e];
          else
            return null;
      }
    return delete r.visitedByCircularReferenceRemoval, r;
  },
  _assign(r, t) {
    for (var e in t)
      r[e] = t[e];
    return r;
  },
  _getFirstPointerId(r) {
    return r.touches ? r.changedTouches[0].identifier : r.pointerId || 999;
  },
  releaseCanvas(...r) {
    _.releaseCanvasOnDestroy && r.forEach((t) => {
      t.width = 0, t.height = 0;
    });
  },
  drawRoundedRectPath(r, t, e, i) {
    let a = 0, n = 0, s = 0, o = 0;
    typeof i == "number" ? a = n = s = o = Math.min(i, t / 2, e / 2) : (a = Math.min(i[0] || 0, t / 2, e / 2), n = Math.min(i[1] || 0, t / 2, e / 2), o = Math.min(i[2] || 0, t / 2, e / 2), s = Math.min(i[3] || 0, t / 2, e / 2)), r.moveTo(a, 0), r.lineTo(t - n, 0), r.arc(t - n, n, n, Math.PI * 3 / 2, 0, !1), r.lineTo(t, e - o), r.arc(t - o, e - o, o, 0, Math.PI / 2, !1), r.lineTo(s, e), r.arc(s, e - s, s, Math.PI / 2, Math.PI, !1), r.lineTo(0, a), r.arc(a, a, a, Math.PI, Math.PI * 3 / 2, !1);
  }
};
function q(r) {
  return d._isString(r) ? '"' + r + '"' : Object.prototype.toString.call(r) === "[object Number]" || d._isBoolean(r) ? r : Object.prototype.toString.call(r);
}
function S() {
  if (_.isUnminified)
    return function(r, t) {
      return d._isNumber(r) || d.warn(q(r) + ' is a not valid value for "' + t + '" attribute. The value should be a number.'), r;
    };
}
function jt() {
  if (_.isUnminified)
    return function(r, t) {
      var e = d._isNumber(r), i = r === "auto";
      return e || i || d.warn(q(r) + ' is a not valid value for "' + t + '" attribute. The value should be a number or "auto".'), r;
    };
}
function J() {
  if (_.isUnminified)
    return function(r, t) {
      return d._isString(r) || d.warn(q(r) + ' is a not valid value for "' + t + '" attribute. The value should be a string.'), r;
    };
}
function ye() {
  if (_.isUnminified)
    return function(r, t) {
      const e = d._isString(r), i = Object.prototype.toString.call(r) === "[object CanvasGradient]" || r && r.addColorStop;
      return e || i || d.warn(q(r) + ' is a not valid value for "' + t + '" attribute. The value should be a string or a native gradient.'), r;
    };
}
function I() {
  if (_.isUnminified)
    return function(r, t) {
      var e = r === !0 || r === !1;
      return e || d.warn(q(r) + ' is a not valid value for "' + t + '" attribute. The value should be a boolean.'), r;
    };
}
function vi(r) {
  if (_.isUnminified)
    return function(t, e) {
      return t == null || d.isObject(t) || d.warn(q(t) + ' is a not valid value for "' + e + '" attribute. The value should be an object with properties ' + r), t;
    };
}
var et = "get", it = "set";
const c = {
  addGetterSetter(r, t, e, i, a) {
    c.addGetter(r, t, e), c.addSetter(r, t, i, a), c.addOverloadedGetterSetter(r, t);
  },
  addGetter(r, t, e) {
    var i = et + d._capitalize(t);
    r.prototype[i] = r.prototype[i] || function() {
      var a = this.attrs[t];
      return a === void 0 ? e : a;
    };
  },
  addSetter(r, t, e, i) {
    var a = it + d._capitalize(t);
    r.prototype[a] || c.overWriteSetter(r, t, e, i);
  },
  overWriteSetter(r, t, e, i) {
    var a = it + d._capitalize(t);
    r.prototype[a] = function(n) {
      return e && n !== void 0 && n !== null && (n = e.call(this, n, t)), this._setAttr(t, n), i && i.call(this), this;
    };
  },
  addComponentsGetterSetter(r, t, e, i, a) {
    var n = e.length, s = d._capitalize, o = et + s(t), l = it + s(t), h, u;
    r.prototype[o] = function() {
      var g = {};
      for (h = 0; h < n; h++)
        u = e[h], g[u] = this.getAttr(t + s(u));
      return g;
    };
    var p = vi(e);
    r.prototype[l] = function(g) {
      var w = this.attrs[t], C;
      i && (g = i.call(this, g)), p && p.call(this, g, t);
      for (C in g)
        g.hasOwnProperty(C) && this._setAttr(t + s(C), g[C]);
      return g || e.forEach((m) => {
        this._setAttr(t + s(m), void 0);
      }), this._fireChangeEvent(t, w, g), a && a.call(this), this;
    }, c.addOverloadedGetterSetter(r, t);
  },
  addOverloadedGetterSetter(r, t) {
    var e = d._capitalize(t), i = it + e, a = et + e;
    r.prototype[t] = function() {
      return arguments.length ? (this[i](arguments[0]), this) : this[a]();
    };
  },
  addDeprecatedGetterSetter(r, t, e, i) {
    d.error("Adding deprecated " + t);
    var a = et + d._capitalize(t), n = t + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
    r.prototype[a] = function() {
      d.error(n);
      var s = this.attrs[t];
      return s === void 0 ? e : s;
    }, c.addSetter(r, t, i, function() {
      d.error(n);
    }), c.addOverloadedGetterSetter(r, t);
  },
  backCompat(r, t) {
    d.each(t, function(e, i) {
      var a = r.prototype[i], n = et + d._capitalize(e), s = it + d._capitalize(e);
      function o() {
        a.apply(this, arguments), d.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + i + '" instead.');
      }
      r.prototype[e] = o, r.prototype[n] = o, r.prototype[s] = o;
    });
  },
  afterSetFilter() {
    this._filterUpToDate = !1;
  }
};
function _i(r) {
  var t = [], e = r.length, i = d, a, n;
  for (a = 0; a < e; a++)
    n = r[a], i._isNumber(n) ? n = Math.round(n * 1e3) / 1e3 : i._isString(n) || (n = n + ""), t.push(n);
  return t;
}
var ne = ",", mi = "(", Ci = ")", Si = "([", yi = "])", bi = ";", wi = "()", xi = "=", se = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], Ei = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const Pi = 100;
class Kt {
  constructor(t) {
    this.canvas = t, _.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {
  }
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {
  }
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, e) {
    var i = this.traceArr, a = i.length, n = "", s, o, l, h;
    for (s = 0; s < a; s++)
      o = i[s], l = o.method, l ? (h = o.args, n += l, t ? n += wi : d._isArray(h[0]) ? n += Si + h.join(ne) + yi : (e && (h = h.map((u) => typeof u == "number" ? Math.floor(u) : u)), n += mi + h.join(ne) + Ci)) : (n += o.property, t || (n += xi + o.val)), n += bi;
    return n;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    var e = this.traceArr, i;
    e.push(t), i = e.length, i >= Pi && e.shift();
  }
  reset() {
    var t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    var e = this.getCanvas();
    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
  }
  _applyLineCap(t) {
    var e = t.getLineCap();
    e && this.setAttr("lineCap", e);
  }
  _applyOpacity(t) {
    var e = t.getAbsoluteOpacity();
    e !== 1 && this.setAttr("globalAlpha", e);
  }
  _applyLineJoin(t) {
    var e = t.attrs.lineJoin;
    e && this.setAttr("lineJoin", e);
  }
  setAttr(t, e) {
    this._context[t] = e;
  }
  arc(t, e, i, a, n, s) {
    this._context.arc(t, e, i, a, n, s);
  }
  arcTo(t, e, i, a, n) {
    this._context.arcTo(t, e, i, a, n);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, e, i, a, n, s) {
    this._context.bezierCurveTo(t, e, i, a, n, s);
  }
  clearRect(t, e, i, a) {
    this._context.clearRect(t, e, i, a);
  }
  clip() {
    this._context.clip();
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, e) {
    var i = arguments;
    if (i.length === 2)
      return this._context.createImageData(t, e);
    if (i.length === 1)
      return this._context.createImageData(t);
  }
  createLinearGradient(t, e, i, a) {
    return this._context.createLinearGradient(t, e, i, a);
  }
  createPattern(t, e) {
    return this._context.createPattern(t, e);
  }
  createRadialGradient(t, e, i, a, n, s) {
    return this._context.createRadialGradient(t, e, i, a, n, s);
  }
  drawImage(t, e, i, a, n, s, o, l, h) {
    var u = arguments, p = this._context;
    u.length === 3 ? p.drawImage(t, e, i) : u.length === 5 ? p.drawImage(t, e, i, a, n) : u.length === 9 && p.drawImage(t, e, i, a, n, s, o, l, h);
  }
  ellipse(t, e, i, a, n, s, o, l) {
    this._context.ellipse(t, e, i, a, n, s, o, l);
  }
  isPointInPath(t, e, i, a) {
    return i ? this._context.isPointInPath(i, t, e, a) : this._context.isPointInPath(t, e, a);
  }
  fill(t) {
    t ? this._context.fill(t) : this._context.fill();
  }
  fillRect(t, e, i, a) {
    this._context.fillRect(t, e, i, a);
  }
  strokeRect(t, e, i, a) {
    this._context.strokeRect(t, e, i, a);
  }
  fillText(t, e, i, a) {
    a ? this._context.fillText(t, e, i, a) : this._context.fillText(t, e, i);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, e, i, a) {
    return this._context.getImageData(t, e, i, a);
  }
  lineTo(t, e) {
    this._context.lineTo(t, e);
  }
  moveTo(t, e) {
    this._context.moveTo(t, e);
  }
  rect(t, e, i, a) {
    this._context.rect(t, e, i, a);
  }
  putImageData(t, e, i) {
    this._context.putImageData(t, e, i);
  }
  quadraticCurveTo(t, e, i, a) {
    this._context.quadraticCurveTo(t, e, i, a);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, e) {
    this._context.scale(t, e);
  }
  setLineDash(t) {
    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, e, i, a, n, s) {
    this._context.setTransform(t, e, i, a, n, s);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, e, i, a) {
    this._context.strokeText(t, e, i, a);
  }
  transform(t, e, i, a, n, s) {
    this._context.transform(t, e, i, a, n, s);
  }
  translate(t, e) {
    this._context.translate(t, e);
  }
  _enableTrace() {
    var t = this, e = se.length, i = this.setAttr, a, n, s = function(o) {
      var l = t[o], h;
      t[o] = function() {
        return n = _i(Array.prototype.slice.call(arguments, 0)), h = l.apply(t, arguments), t._trace({
          method: o,
          args: n
        }), h;
      };
    };
    for (a = 0; a < e; a++)
      s(se[a]);
    t.setAttr = function() {
      i.apply(t, arguments);
      var o = arguments[0], l = arguments[1];
      (o === "shadowOffsetX" || o === "shadowOffsetY" || o === "shadowBlur") && (l = l / this.canvas.getPixelRatio()), t._trace({
        property: o,
        val: l
      });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const e = t.attrs.globalCompositeOperation;
    var i = !e || e === "source-over";
    i || this.setAttr("globalCompositeOperation", e);
  }
}
Ei.forEach(function(r) {
  Object.defineProperty(Kt.prototype, r, {
    get() {
      return this._context[r];
    },
    set(t) {
      this._context[r] = t;
    }
  });
});
class Ti extends Kt {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d");
  }
  _fillColor(t) {
    var e = t.fill();
    this.setAttr("fillStyle", e), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    var e = t._getLinearGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    var e = t._getRadialGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fill(t) {
    var e = t.fill(), i = t.getFillPriority();
    if (e && i === "color") {
      this._fillColor(t);
      return;
    }
    var a = t.getFillPatternImage();
    if (a && i === "pattern") {
      this._fillPattern(t);
      return;
    }
    var n = t.getFillLinearGradientColorStops();
    if (n && i === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    var s = t.getFillRadialGradientColorStops();
    if (s && i === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    e ? this._fillColor(t) : a ? this._fillPattern(t) : n ? this._fillLinearGradient(t) : s && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    var e = t.getStrokeLinearGradientStartPoint(), i = t.getStrokeLinearGradientEndPoint(), a = t.getStrokeLinearGradientColorStops(), n = this.createLinearGradient(e.x, e.y, i.x, i.y);
    if (a) {
      for (var s = 0; s < a.length; s += 2)
        n.addColorStop(a[s], a[s + 1]);
      this.setAttr("strokeStyle", n);
    }
  }
  _stroke(t) {
    var e = t.dash(), i = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!i) {
        this.save();
        var a = this.getCanvas().getPixelRatio();
        this.setTransform(a, 0, 0, a, 0, 0);
      }
      this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var n = t.getStrokeLinearGradientColorStops();
      n ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), i || this.restore();
    }
  }
  _applyShadow(t) {
    var e, i, a, n = (e = t.getShadowRGBA()) !== null && e !== void 0 ? e : "black", s = (i = t.getShadowBlur()) !== null && i !== void 0 ? i : 5, o = (a = t.getShadowOffset()) !== null && a !== void 0 ? a : {
      x: 0,
      y: 0
    }, l = t.getAbsoluteScale(), h = this.canvas.getPixelRatio(), u = l.x * h, p = l.y * h;
    this.setAttr("shadowColor", n), this.setAttr("shadowBlur", s * Math.min(Math.abs(u), Math.abs(p))), this.setAttr("shadowOffsetX", o.x * u), this.setAttr("shadowOffsetY", o.y * p);
  }
}
class ki extends Kt {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(t) {
    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      var e = t.getStrokeScaleEnabled();
      if (!e) {
        this.save();
        var i = this.getCanvas().getPixelRatio();
        this.setTransform(i, 0, 0, i, 0, 0);
      }
      this._applyLineCap(t);
      var a = t.hitStrokeWidth(), n = a === "auto" ? t.strokeWidth() : a;
      this.setAttr("lineWidth", n), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), e || this.restore();
    }
  }
}
var ft;
function Ai() {
  if (ft)
    return ft;
  var r = d.createCanvasElement(), t = r.getContext("2d");
  return ft = function() {
    var e = _._global.devicePixelRatio || 1, i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return e / i;
  }(), d.releaseCanvas(r), ft;
}
class qt {
  constructor(t) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var e = t || {}, i = e.pixelRatio || _.pixelRatio || Ai();
    this.pixelRatio = i, this._canvas = d.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    var e = this.pixelRatio;
    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e);
  }
  setWidth(t) {
    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
    var e = this.pixelRatio, i = this.getContext()._context;
    i.scale(e, e);
  }
  setHeight(t) {
    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
    var e = this.pixelRatio, i = this.getContext()._context;
    i.scale(e, e);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, e) {
    this.setWidth(t || 0), this.setHeight(e || 0);
  }
  toDataURL(t, e) {
    try {
      return this._canvas.toDataURL(t, e);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (a) {
        return d.error("Unable to get data URL. " + a.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
c.addGetterSetter(qt, "pixelRatio", void 0, S());
class K extends qt {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.context = new Ti(this), this.setSize(t.width, t.height);
  }
}
class Jt extends qt {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.hitCanvas = !0, this.context = new ki(this), this.setSize(t.width, t.height);
  }
}
const b = {
  get isDragging() {
    var r = !1;
    return b._dragElements.forEach((t) => {
      t.dragStatus === "dragging" && (r = !0);
    }), r;
  },
  justDragged: !1,
  get node() {
    var r;
    return b._dragElements.forEach((t) => {
      r = t.node;
    }), r;
  },
  _dragElements: /* @__PURE__ */ new Map(),
  _drag(r) {
    const t = [];
    b._dragElements.forEach((e, i) => {
      const { node: a } = e, n = a.getStage();
      n.setPointersPositions(r), e.pointerId === void 0 && (e.pointerId = d._getFirstPointerId(r));
      const s = n._changedPointerPositions.find((h) => h.id === e.pointerId);
      if (s) {
        if (e.dragStatus !== "dragging") {
          var o = a.dragDistance(), l = Math.max(Math.abs(s.x - e.startPointerPos.x), Math.abs(s.y - e.startPointerPos.y));
          if (l < o || (a.startDrag({ evt: r }), !a.isDragging()))
            return;
        }
        a._setDragPosition(r, e), t.push(a);
      }
    }), t.forEach((e) => {
      e.fire("dragmove", {
        type: "dragmove",
        target: e,
        evt: r
      }, !0);
    });
  },
  _endDragBefore(r) {
    const t = [];
    b._dragElements.forEach((e) => {
      const { node: i } = e, a = i.getStage();
      if (r && a.setPointersPositions(r), !a._changedPointerPositions.find((o) => o.id === e.pointerId))
        return;
      (e.dragStatus === "dragging" || e.dragStatus === "stopped") && (b.justDragged = !0, _._mouseListenClick = !1, _._touchListenClick = !1, _._pointerListenClick = !1, e.dragStatus = "stopped");
      const s = e.node.getLayer() || e.node instanceof _.Stage && e.node;
      s && t.indexOf(s) === -1 && t.push(s);
    }), t.forEach((e) => {
      e.draw();
    });
  },
  _endDragAfter(r) {
    b._dragElements.forEach((t, e) => {
      t.dragStatus === "stopped" && t.node.fire("dragend", {
        type: "dragend",
        target: t.node,
        evt: r
      }, !0), t.dragStatus !== "dragging" && b._dragElements.delete(e);
    });
  }
};
_.isBrowser && (window.addEventListener("mouseup", b._endDragBefore, !0), window.addEventListener("touchend", b._endDragBefore, !0), window.addEventListener("mousemove", b._drag), window.addEventListener("touchmove", b._drag), window.addEventListener("mouseup", b._endDragAfter, !1), window.addEventListener("touchend", b._endDragAfter, !1));
var wt = "absoluteOpacity", gt = "allEventListeners", L = "absoluteTransform", oe = "absoluteScale", Y = "canvas", Ri = "Change", Gi = "children", Oi = "konva", Ut = "listening", he = "mouseenter", le = "mouseleave", de = "set", ce = "Shape", xt = " ", ue = "stage", B = "transform", Di = "Stage", $t = "visible", Li = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(xt);
let Ii = 1;
class v {
  constructor(t) {
    this._id = Ii++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === B || t === L) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
  }
  _getCache(t, e) {
    var i = this._cache.get(t), a = t === B || t === L, n = i === void 0 || a && i.dirty === !0;
    return n && (i = e.call(this), this._cache.set(t, i)), i;
  }
  _calculate(t, e, i) {
    if (!this._attachedDepsListeners.get(t)) {
      const a = e.map((n) => n + "Change.konva").join(xt);
      this.on(a, () => {
        this._clearCache(t);
      }), this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, i);
  }
  _getCanvasCache() {
    return this._cache.get(Y);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === L && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Y)) {
      const { scene: t, filter: e, hit: i } = this._cache.get(Y);
      d.releaseCanvas(t, e, i), this._cache.delete(Y);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    var e = t || {}, i = {};
    (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0) && (i = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent()
    }));
    var a = Math.ceil(e.width || i.width), n = Math.ceil(e.height || i.height), s = e.pixelRatio, o = e.x === void 0 ? Math.floor(i.x) : e.x, l = e.y === void 0 ? Math.floor(i.y) : e.y, h = e.offset || 0, u = e.drawBorder || !1, p = e.hitCanvasPixelRatio || 1;
    if (!a || !n) {
      d.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    a += h * 2 + 1, n += h * 2 + 1, o -= h, l -= h;
    var g = new K({
      pixelRatio: s,
      width: a,
      height: n
    }), w = new K({
      pixelRatio: s,
      width: 0,
      height: 0
    }), C = new Jt({
      pixelRatio: p,
      width: a,
      height: n
    }), m = g.getContext(), y = C.getContext();
    return C.isCache = !0, g.isCache = !0, this._cache.delete(Y), this._filterUpToDate = !1, e.imageSmoothingEnabled === !1 && (g.getContext()._context.imageSmoothingEnabled = !1, w.getContext()._context.imageSmoothingEnabled = !1), m.save(), y.save(), m.translate(-o, -l), y.translate(-o, -l), this._isUnderCache = !0, this._clearSelfAndDescendantCache(wt), this._clearSelfAndDescendantCache(oe), this.drawScene(g, this), this.drawHit(C, this), this._isUnderCache = !1, m.restore(), y.restore(), u && (m.save(), m.beginPath(), m.rect(0, 0, a, n), m.closePath(), m.setAttr("strokeStyle", "red"), m.setAttr("lineWidth", 5), m.stroke(), m.restore()), this._cache.set(Y, {
      scene: g,
      filter: w,
      hit: C,
      x: o,
      y: l
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Y);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, e) {
    var i = [
      { x: t.x, y: t.y },
      { x: t.x + t.width, y: t.y },
      { x: t.x + t.width, y: t.y + t.height },
      { x: t.x, y: t.y + t.height }
    ], a, n, s, o, l = this.getAbsoluteTransform(e);
    return i.forEach(function(h) {
      var u = l.point(h);
      a === void 0 && (a = s = u.x, n = o = u.y), a = Math.min(a, u.x), n = Math.min(n, u.y), s = Math.max(s, u.x), o = Math.max(o, u.y);
    }), {
      x: a,
      y: n,
      width: s - a,
      height: o - n
    };
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const e = this._getCanvasCache();
    t.translate(e.x, e.y);
    var i = this._getCachedSceneCanvas(), a = i.pixelRatio;
    t.drawImage(i._canvas, 0, 0, i.width / a, i.height / a), t.restore();
  }
  _drawCachedHitCanvas(t) {
    var e = this._getCanvasCache(), i = e.hit;
    t.save(), t.translate(e.x, e.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore();
  }
  _getCachedSceneCanvas() {
    var t = this.filters(), e = this._getCanvasCache(), i = e.scene, a = e.filter, n = a.getContext(), s, o, l, h;
    if (t) {
      if (!this._filterUpToDate) {
        var u = i.pixelRatio;
        a.setSize(i.width / i.pixelRatio, i.height / i.pixelRatio);
        try {
          for (s = t.length, n.clear(), n.drawImage(i._canvas, 0, 0, i.getWidth() / u, i.getHeight() / u), o = n.getImageData(0, 0, a.getWidth(), a.getHeight()), l = 0; l < s; l++) {
            if (h = t[l], typeof h != "function") {
              d.error("Filter should be type of function, but got " + typeof h + " instead. Please check correct filters");
              continue;
            }
            h.call(this, o), n.putImageData(o, 0, 0);
          }
        } catch (p) {
          d.error("Unable to apply filter. " + p.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return a;
    }
    return i;
  }
  on(t, e) {
    if (this._cache && this._cache.delete(gt), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var i = t.split(xt), a = i.length, n, s, o, l, h;
    for (n = 0; n < a; n++)
      s = i[n], o = s.split("."), l = o[0], h = o[1] || "", this.eventListeners[l] || (this.eventListeners[l] = []), this.eventListeners[l].push({
        name: h,
        handler: e
      });
    return this;
  }
  off(t, e) {
    var i = (t || "").split(xt), a = i.length, n, s, o, l, h, u;
    if (this._cache && this._cache.delete(gt), !t)
      for (s in this.eventListeners)
        this._off(s);
    for (n = 0; n < a; n++)
      if (o = i[n], l = o.split("."), h = l[0], u = l[1], h)
        this.eventListeners[h] && this._off(h, u, e);
      else
        for (s in this.eventListeners)
          this._off(s, u, e);
    return this;
  }
  dispatchEvent(t) {
    var e = {
      target: this,
      type: t.type,
      evt: t
    };
    return this.fire(t.type, e), this;
  }
  addEventListener(t, e) {
    return this.on(t, function(i) {
      e.call(this, i.evt);
    }), this;
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, e, i) {
    var a = this;
    this.on(t, function(n) {
      for (var s = n.target.findAncestors(e, !0, a), o = 0; o < s.length; o++)
        n = d.cloneObject(n), n.currentTarget = s[o], i.call(s[o], n);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), b._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(L), this._clearSelfAndDescendantCache(wt), this._clearSelfAndDescendantCache(oe), this._clearSelfAndDescendantCache(ue), this._clearSelfAndDescendantCache($t), this._clearSelfAndDescendantCache(Ut);
  }
  _remove() {
    this._clearCaches();
    var t = this.getParent();
    t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    var e = "get" + d._capitalize(t);
    return d._isFunction(this[e]) ? this[e]() : this.attrs[t];
  }
  getAncestors() {
    for (var t = this.getParent(), e = []; t; )
      e.push(t), t = t.getParent();
    return e;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return this._batchTransformChanges(() => {
      var e, i;
      if (!t)
        return this;
      for (e in t)
        e !== Gi && (i = de + d._capitalize(e), d._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
    }), this;
  }
  isListening() {
    return this._getCache(Ut, this._isListening);
  }
  _isListening(t) {
    if (!this.listening())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache($t, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isVisible(t) : !0;
  }
  shouldDrawHit(t, e = !1) {
    if (t)
      return this._isVisible(t) && this._isListening(t);
    var i = this.getLayer(), a = !1;
    b._dragElements.forEach((s) => {
      s.dragStatus === "dragging" && (s.node.nodeType === "Stage" || s.node.getLayer() === i) && (a = !0);
    });
    var n = !e && !_.hitOnDragEnabled && a;
    return this.isListening() && this.isVisible() && !n;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var t = this.getDepth(), e = this, i = 0, a, n, s, o;
    function l(h) {
      for (a = [], n = h.length, s = 0; s < n; s++)
        o = h[s], i++, o.nodeType !== ce && (a = a.concat(o.getChildren().slice())), o._id === e._id && (s = n);
      a.length > 0 && a[0].getDepth() <= t && l(a);
    }
    return e.nodeType !== Di && l(e.getStage().getChildren()), i;
  }
  getDepth() {
    for (var t = 0, e = this.parent; e; )
      t++, e = e.parent;
    return t;
  }
  _batchTransformChanges(t) {
    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(B), this._clearSelfAndDescendantCache(L)), this._needClearTransformCache = !1;
  }
  setPosition(t) {
    return this._batchTransformChanges(() => {
      this.x(t.x), this.y(t.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    if (!this.getStage())
      return null;
    var t = this.getStage().getPointerPosition();
    if (!t)
      return null;
    var e = this.getAbsoluteTransform().copy();
    return e.invert(), e.point(t);
  }
  getAbsolutePosition(t) {
    let e = !1, i = this.parent;
    for (; i; ) {
      if (i.isCached()) {
        e = !0;
        break;
      }
      i = i.parent;
    }
    e && !t && (t = !0);
    var a = this.getAbsoluteTransform(t).getMatrix(), n = new X(), s = this.offset();
    return n.m = a.slice(), n.translate(s.x, s.y), n.getTranslation();
  }
  setAbsolutePosition(t) {
    var e = this._clearTransform();
    this.attrs.x = e.x, this.attrs.y = e.y, delete e.x, delete e.y, this._clearCache(B);
    var i = this._getAbsoluteTransform().copy();
    return i.invert(), i.translate(t.x, t.y), t = {
      x: this.attrs.x + i.getTranslation().x,
      y: this.attrs.y + i.getTranslation().y
    }, this._setTransform(e), this.setPosition({ x: t.x, y: t.y }), this._clearCache(B), this._clearSelfAndDescendantCache(L), this;
  }
  _setTransform(t) {
    var e;
    for (e in t)
      this.attrs[e] = t[e];
  }
  _clearTransform() {
    var t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t;
  }
  move(t) {
    var e = t.x, i = t.y, a = this.x(), n = this.y();
    return e !== void 0 && (a += e), i !== void 0 && (n += i), this.setPosition({ x: a, y: n }), this;
  }
  _eachAncestorReverse(t, e) {
    var i = [], a = this.getParent(), n, s;
    if (!(e && e._id === this._id)) {
      for (i.unshift(this); a && (!e || a._id !== e._id); )
        i.unshift(a), a = a.parent;
      for (n = i.length, s = 0; s < n; s++)
        t(i[s]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return d.warn("Node has no parent. moveToTop function is ignored."), !1;
    var t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return d.warn("Node has no parent. moveUp function is ignored."), !1;
    var t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return d.warn("Node has no parent. moveDown function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return d.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return d.warn("Node has no parent. zIndex parameter is ignored."), this;
    (t < 0 || t >= this.parent.children.length) && d.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var e = this.index;
    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(wt, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var t = this.opacity(), e = this.getParent();
    return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    var t = {}, e = this.getAttrs(), i, a, n, s, o;
    t.attrs = {};
    for (i in e)
      a = e[i], o = d.isObject(a) && !d._isPlainObject(a) && !d._isArray(a), !o && (n = typeof this[i] == "function" && this[i], delete e[i], s = n ? n.call(this) : null, e[i] = a, s !== a && (t.attrs[i] = a));
    return t.className = this.getClassName(), d._prepareToStringify(t);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, e, i) {
    var a = [];
    e && this._isMatch(t) && a.push(this);
    for (var n = this.parent; n; ) {
      if (n === i)
        return a;
      n._isMatch(t) && a.push(n), n = n.parent;
    }
    return a;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, e, i) {
    return this.findAncestors(t, e, i)[0];
  }
  _isMatch(t) {
    if (!t)
      return !1;
    if (typeof t == "function")
      return t(this);
    var e = t.replace(/ /g, "").split(","), i = e.length, a, n;
    for (a = 0; a < i; a++)
      if (n = e[a], d.isValidSelector(n) || (d.warn('Selector "' + n + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), d.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), d.warn("Konva is awesome, right?")), n.charAt(0) === "#") {
        if (this.id() === n.slice(1))
          return !0;
      } else if (n.charAt(0) === ".") {
        if (this.hasName(n.slice(1)))
          return !0;
      } else if (this.className === n || this.nodeType === n)
        return !0;
    return !1;
  }
  getLayer() {
    var t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(ue, this._getStage);
  }
  _getStage() {
    var t = this.getParent();
    if (t)
      return t.getStage();
  }
  fire(t, e = {}, i) {
    return e.target = e.target || this, i ? this._fireAndBubble(t, e) : this._fire(t, e), this;
  }
  getAbsoluteTransform(t) {
    return t ? this._getAbsoluteTransform(t) : this._getCache(L, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    var e;
    if (t)
      return e = new X(), this._eachAncestorReverse(function(a) {
        var n = a.transformsEnabled();
        n === "all" ? e.multiply(a.getTransform()) : n === "position" && e.translate(a.x() - a.offsetX(), a.y() - a.offsetY());
      }, t), e;
    e = this._cache.get(L) || new X(), this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
    var i = this.transformsEnabled();
    if (i === "all")
      e.multiply(this.getTransform());
    else if (i === "position") {
      const a = this.attrs.x || 0, n = this.attrs.y || 0, s = this.attrs.offsetX || 0, o = this.attrs.offsetY || 0;
      e.translate(a - s, n - o);
    }
    return e.dirty = !1, e;
  }
  getAbsoluteScale(t) {
    for (var e = this; e; )
      e._isUnderCache && (t = e), e = e.getParent();
    const a = this.getAbsoluteTransform(t).decompose();
    return {
      x: a.scaleX,
      y: a.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(B, this._getTransform);
  }
  _getTransform() {
    var t, e, i = this._cache.get(B) || new X();
    i.reset();
    var a = this.x(), n = this.y(), s = _.getAngle(this.rotation()), o = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, l = (e = this.attrs.scaleY) !== null && e !== void 0 ? e : 1, h = this.attrs.skewX || 0, u = this.attrs.skewY || 0, p = this.attrs.offsetX || 0, g = this.attrs.offsetY || 0;
    return (a !== 0 || n !== 0) && i.translate(a, n), s !== 0 && i.rotate(s), (h !== 0 || u !== 0) && i.skew(h, u), (o !== 1 || l !== 1) && i.scale(o, l), (p !== 0 || g !== 0) && i.translate(-1 * p, -1 * g), i.dirty = !1, i;
  }
  clone(t) {
    var e = d.cloneObject(this.attrs), i, a, n, s, o;
    for (i in t)
      e[i] = t[i];
    var l = new this.constructor(e);
    for (i in this.eventListeners)
      for (a = this.eventListeners[i], n = a.length, s = 0; s < n; s++)
        o = a[s], o.name.indexOf(Oi) < 0 && (l.eventListeners[i] || (l.eventListeners[i] = []), l.eventListeners[i].push(o));
    return l;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    var e = this.getClientRect(), i = this.getStage(), a = t.x !== void 0 ? t.x : Math.floor(e.x), n = t.y !== void 0 ? t.y : Math.floor(e.y), s = t.pixelRatio || 1, o = new K({
      width: t.width || Math.ceil(e.width) || (i ? i.width() : 0),
      height: t.height || Math.ceil(e.height) || (i ? i.height() : 0),
      pixelRatio: s
    }), l = o.getContext();
    return t.imageSmoothingEnabled === !1 && (l._context.imageSmoothingEnabled = !1), l.save(), (a || n) && l.translate(-1 * a, -1 * n), this.drawScene(o), l.restore(), o;
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    var e = t.mimeType || null, i = t.quality || null, a = this._toKonvaCanvas(t).toDataURL(e, i);
    return t.callback && t.callback(a), a;
  }
  toImage(t) {
    return new Promise((e, i) => {
      try {
        const a = t == null ? void 0 : t.callback;
        a && delete t.callback, d._urlToImage(this.toDataURL(t), function(n) {
          e(n), a == null || a(n);
        });
      } catch (a) {
        i(a);
      }
    });
  }
  toBlob(t) {
    return new Promise((e, i) => {
      try {
        const a = t == null ? void 0 : t.callback;
        a && delete t.callback, this.toCanvas(t).toBlob((n) => {
          e(n), a == null || a(n);
        });
      } catch (a) {
        i(a);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : _.dragDistance;
  }
  _off(t, e, i) {
    var a = this.eventListeners[t], n, s, o;
    for (n = 0; n < a.length; n++)
      if (s = a[n].name, o = a[n].handler, (s !== "konva" || e === "konva") && (!e || s === e) && (!i || i === o)) {
        if (a.splice(n, 1), a.length === 0) {
          delete this.eventListeners[t];
          break;
        }
        n--;
      }
  }
  _fireChangeEvent(t, e, i) {
    this._fire(t + Ri, {
      oldVal: e,
      newVal: i
    });
  }
  addName(t) {
    if (!this.hasName(t)) {
      var e = this.name(), i = e ? e + " " + t : t;
      this.name(i);
    }
    return this;
  }
  hasName(t) {
    if (!t)
      return !1;
    const e = this.name();
    if (!e)
      return !1;
    var i = (e || "").split(/\s/g);
    return i.indexOf(t) !== -1;
  }
  removeName(t) {
    var e = (this.name() || "").split(/\s/g), i = e.indexOf(t);
    return i !== -1 && (e.splice(i, 1), this.name(e.join(" "))), this;
  }
  setAttr(t, e) {
    var i = this[de + d._capitalize(t)];
    return d._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this;
  }
  _requestDraw() {
    if (_.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, e) {
    var i = this.attrs[t];
    i === e && !d.isObject(e) || (e == null ? delete this.attrs[t] : this.attrs[t] = e, this._shouldFireChangeEvents && this._fireChangeEvent(t, i, e), this._requestDraw());
  }
  _setComponentAttr(t, e, i) {
    var a;
    i !== void 0 && (a = this.attrs[t], a || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = i, this._fireChangeEvent(t, a, i));
  }
  _fireAndBubble(t, e, i) {
    e && this.nodeType === ce && (e.target = this);
    var a = (t === he || t === le) && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || this.nodeType === "Stage" && !i);
    if (!a) {
      this._fire(t, e);
      var n = (t === he || t === le) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
      (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !n && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i) : this._fireAndBubble.call(this.parent, t, e));
    }
  }
  _getProtoListeners(t) {
    let e = this._cache.get(gt);
    if (!e) {
      e = {};
      let a = Object.getPrototypeOf(this);
      for (; a; ) {
        if (!a.eventListeners) {
          a = Object.getPrototypeOf(a);
          continue;
        }
        for (var i in a.eventListeners) {
          const n = a.eventListeners[i], s = e[i] || [];
          e[i] = n.concat(s);
        }
        a = Object.getPrototypeOf(a);
      }
      this._cache.set(gt, e);
    }
    return e[t];
  }
  _fire(t, e) {
    e = e || {}, e.currentTarget = this, e.type = t;
    const i = this._getProtoListeners(t);
    if (i)
      for (var a = 0; a < i.length; a++)
        i[a].handler.call(this, e);
    const n = this.eventListeners[t];
    if (n)
      for (var a = 0; a < n.length; a++)
        n[a].handler.call(this, e);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    var e = t ? t.pointerId : void 0, i = this.getStage(), a = this.getAbsolutePosition(), n = i._getPointerById(e) || i._changedPointerPositions[0] || a;
    b._dragElements.set(this._id, {
      node: this,
      startPointerPos: n,
      offset: {
        x: n.x - a.x,
        y: n.y - a.y
      },
      dragStatus: "ready",
      pointerId: e
    });
  }
  startDrag(t, e = !0) {
    b._dragElements.has(this._id) || this._createDragElement(t);
    const i = b._dragElements.get(this._id);
    i.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: t && t.evt
    }, e);
  }
  _setDragPosition(t, e) {
    const i = this.getStage()._getPointerById(e.pointerId);
    if (i) {
      var a = {
        x: i.x - e.offset.x,
        y: i.y - e.offset.y
      }, n = this.dragBoundFunc();
      if (n !== void 0) {
        const s = n.call(this, a, t);
        s ? a = s : d.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== a.x || this._lastPos.y !== a.y) && (this.setAbsolutePosition(a), this._requestDraw()), this._lastPos = a;
    }
  }
  stopDrag(t) {
    const e = b._dragElements.get(this._id);
    e && (e.dragStatus = "stopped"), b._endDragBefore(t), b._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = b._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
      var e = t.evt.button !== void 0, i = !e || _.dragButtons.indexOf(t.evt.button) >= 0;
      if (i && !this.isDragging()) {
        var a = !1;
        b._dragElements.forEach((n) => {
          this.isAncestorOf(n.node) && (a = !0);
        }), a || this._createDragElement(t);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var t = this.getStage();
      if (!t)
        return;
      const e = b._dragElements.get(this._id), i = e && e.dragStatus === "dragging", a = e && e.dragStatus === "ready";
      i ? this.stopDrag() : a && b._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const e = this.getStage();
    if (!e)
      return !1;
    const i = {
      x: -t.x,
      y: -t.y,
      width: e.width() + 2 * t.x,
      height: e.height() + 2 * t.y
    };
    return d.haveIntersection(i, this.getClientRect());
  }
  static create(t, e) {
    return d._isString(t) && (t = JSON.parse(t)), this._createNode(t, e);
  }
  static _createNode(t, e) {
    var i = v.prototype.getClassName.call(t), a = t.children, n, s, o;
    e && (t.attrs.container = e), _[i] || (d.warn('Can not find a node with class name "' + i + '". Fallback to "Shape".'), i = "Shape");
    const l = _[i];
    if (n = new l(t.attrs), a)
      for (s = a.length, o = 0; o < s; o++)
        n.add(v._createNode(a[o]));
    return n;
  }
}
v.prototype.nodeType = "Node";
v.prototype._attrsAffectingSize = [];
v.prototype.eventListeners = {};
v.prototype.on.call(v.prototype, Li, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(B), this._clearSelfAndDescendantCache(L);
});
v.prototype.on.call(v.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache($t);
});
v.prototype.on.call(v.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Ut);
});
v.prototype.on.call(v.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(wt);
});
const x = c.addGetterSetter;
x(v, "zIndex");
x(v, "absolutePosition");
x(v, "position");
x(v, "x", 0, S());
x(v, "y", 0, S());
x(v, "globalCompositeOperation", "source-over", J());
x(v, "opacity", 1, S());
x(v, "name", "", J());
x(v, "id", "", J());
x(v, "rotation", 0, S());
c.addComponentsGetterSetter(v, "scale", ["x", "y"]);
x(v, "scaleX", 1, S());
x(v, "scaleY", 1, S());
c.addComponentsGetterSetter(v, "skew", ["x", "y"]);
x(v, "skewX", 0, S());
x(v, "skewY", 0, S());
c.addComponentsGetterSetter(v, "offset", ["x", "y"]);
x(v, "offsetX", 0, S());
x(v, "offsetY", 0, S());
x(v, "dragDistance", null, S());
x(v, "width", 0, S());
x(v, "height", 0, S());
x(v, "listening", !0, I());
x(v, "preventDefault", !0, I());
x(v, "filters", null, function(r) {
  return this._filterUpToDate = !1, r;
});
x(v, "visible", !0, I());
x(v, "transformsEnabled", "all", J());
x(v, "size");
x(v, "dragBoundFunc");
x(v, "draggable", !1, I());
c.backCompat(v, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
class G extends v {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(t) {
    if (!t)
      return this.children || [];
    const e = this.children || [];
    var i = [];
    return e.forEach(function(a) {
      t(a) && i.push(a);
    }), i;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...t) {
    if (t.length === 0)
      return this;
    if (t.length > 1) {
      for (var e = 0; e < t.length; e++)
        this.add(t[e]);
      return this;
    }
    const i = t[0];
    return i.getParent() ? (i.moveTo(this), this) : (this._validateAdd(i), i.index = this.getChildren().length, i.parent = this, i._clearCaches(), this.getChildren().push(i), this._fire("add", {
      child: i
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    var e = this._generalFind(t, !0);
    return e.length > 0 ? e[0] : void 0;
  }
  _generalFind(t, e) {
    var i = [];
    return this._descendants((a) => {
      const n = a._isMatch(t);
      return n && i.push(a), !!(n && e);
    }), i;
  }
  _descendants(t) {
    let e = !1;
    const i = this.getChildren();
    for (const a of i) {
      if (e = t(a), e)
        return !0;
      if (a.hasChildren() && (e = a._descendants(t), e))
        return !0;
    }
    return !1;
  }
  toObject() {
    var t = v.prototype.toObject.call(this);
    return t.children = [], this.getChildren().forEach((e) => {
      t.children.push(e.toObject());
    }), t;
  }
  isAncestorOf(t) {
    for (var e = t.getParent(); e; ) {
      if (e._id === this._id)
        return !0;
      e = e.getParent();
    }
    return !1;
  }
  clone(t) {
    var e = v.prototype.clone.call(this, t);
    return this.getChildren().forEach(function(i) {
      e.add(i.clone());
    }), e;
  }
  getAllIntersections(t) {
    var e = [];
    return this.find("Shape").forEach(function(i) {
      i.isVisible() && i.intersects(t) && e.push(i);
    }), e;
  }
  _clearSelfAndDescendantCache(t) {
    var e;
    super._clearSelfAndDescendantCache(t), !this.isCached() && ((e = this.children) === null || e === void 0 || e.forEach(function(i) {
      i._clearSelfAndDescendantCache(t);
    }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null || t === void 0 || t.forEach(function(e, i) {
      e.index = i;
    }), this._requestDraw();
  }
  drawScene(t, e) {
    var i = this.getLayer(), a = t || i && i.getCanvas(), n = a && a.getContext(), s = this._getCanvasCache(), o = s && s.scene, l = a && a.isCache;
    if (!this.isVisible() && !l)
      return this;
    if (o) {
      n.save();
      var h = this.getAbsoluteTransform(e).getMatrix();
      n.transform(h[0], h[1], h[2], h[3], h[4], h[5]), this._drawCachedSceneCanvas(n), n.restore();
    } else
      this._drawChildren("drawScene", a, e);
    return this;
  }
  drawHit(t, e) {
    if (!this.shouldDrawHit(e))
      return this;
    var i = this.getLayer(), a = t || i && i.hitCanvas, n = a && a.getContext(), s = this._getCanvasCache(), o = s && s.hit;
    if (o) {
      n.save();
      var l = this.getAbsoluteTransform(e).getMatrix();
      n.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedHitCanvas(n), n.restore();
    } else
      this._drawChildren("drawHit", a, e);
    return this;
  }
  _drawChildren(t, e, i) {
    var a, n = e && e.getContext(), s = this.clipWidth(), o = this.clipHeight(), l = this.clipFunc(), h = s && o || l;
    const u = i === this;
    if (h) {
      n.save();
      var p = this.getAbsoluteTransform(i), g = p.getMatrix();
      if (n.transform(g[0], g[1], g[2], g[3], g[4], g[5]), n.beginPath(), l)
        l.call(this, n, this);
      else {
        var w = this.clipX(), C = this.clipY();
        n.rect(w, C, s, o);
      }
      n.clip(), g = p.copy().invert().getMatrix(), n.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
    }
    var m = !u && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
    m && (n.save(), n._applyGlobalCompositeOperation(this)), (a = this.children) === null || a === void 0 || a.forEach(function(y) {
      y[t](e, i);
    }), m && n.restore(), h && n.restore();
  }
  getClientRect(t) {
    var e;
    t = t || {};
    var i = t.skipTransform, a = t.relativeTo, n, s, o, l, h = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, u = this;
    (e = this.children) === null || e === void 0 || e.forEach(function(m) {
      if (m.visible()) {
        var y = m.getClientRect({
          relativeTo: u,
          skipShadow: t.skipShadow,
          skipStroke: t.skipStroke
        });
        y.width === 0 && y.height === 0 || (n === void 0 ? (n = y.x, s = y.y, o = y.x + y.width, l = y.y + y.height) : (n = Math.min(n, y.x), s = Math.min(s, y.y), o = Math.max(o, y.x + y.width), l = Math.max(l, y.y + y.height)));
      }
    });
    for (var p = this.find("Shape"), g = !1, w = 0; w < p.length; w++) {
      var C = p[w];
      if (C._isVisible(this)) {
        g = !0;
        break;
      }
    }
    return g && n !== void 0 ? h = {
      x: n,
      y: s,
      width: o - n,
      height: l - s
    } : h = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, i ? h : this._transformedRect(h, a);
  }
}
c.addComponentsGetterSetter(G, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
c.addGetterSetter(G, "clipX", void 0, S());
c.addGetterSetter(G, "clipY", void 0, S());
c.addGetterSetter(G, "clipWidth", void 0, S());
c.addGetterSetter(G, "clipHeight", void 0, S());
c.addGetterSetter(G, "clipFunc");
const dt = /* @__PURE__ */ new Map(), be = _._global.PointerEvent !== void 0;
function It(r) {
  return dt.get(r);
}
function Zt(r) {
  return {
    evt: r,
    pointerId: r.pointerId
  };
}
function we(r, t) {
  return dt.get(r) === t;
}
function xe(r, t) {
  lt(r), t.getStage() && (dt.set(r, t), be && t._fire("gotpointercapture", Zt(new PointerEvent("gotpointercapture"))));
}
function lt(r, t) {
  const e = dt.get(r);
  if (!e)
    return;
  const i = e.getStage();
  i && i.content, dt.delete(r), be && e._fire("lostpointercapture", Zt(new PointerEvent("lostpointercapture")));
}
var Ni = "Stage", Mi = "string", fe = "px", Hi = "mouseout", Ee = "mouseleave", Pe = "mouseover", Te = "mouseenter", ke = "mousemove", Ae = "mousedown", Re = "mouseup", at = "pointermove", nt = "pointerdown", j = "pointerup", st = "pointercancel", Bi = "lostpointercapture", pt = "pointerout", vt = "pointerleave", _t = "pointerover", mt = "pointerenter", Wt = "contextmenu", Ge = "touchstart", Oe = "touchend", De = "touchmove", Le = "touchcancel", Vt = "wheel", Fi = 5, Yi = [
  [Te, "_pointerenter"],
  [Ae, "_pointerdown"],
  [ke, "_pointermove"],
  [Re, "_pointerup"],
  [Ee, "_pointerleave"],
  [Ge, "_pointerdown"],
  [De, "_pointermove"],
  [Oe, "_pointerup"],
  [Le, "_pointercancel"],
  [Pe, "_pointerover"],
  [Vt, "_wheel"],
  [Wt, "_contextmenu"],
  [nt, "_pointerdown"],
  [at, "_pointermove"],
  [j, "_pointerup"],
  [st, "_pointercancel"],
  [Bi, "_lostpointercapture"]
];
const Nt = {
  mouse: {
    [pt]: Hi,
    [vt]: Ee,
    [_t]: Pe,
    [mt]: Te,
    [at]: ke,
    [nt]: Ae,
    [j]: Re,
    [st]: "mousecancel",
    pointerclick: "click",
    pointerdblclick: "dblclick"
  },
  touch: {
    [pt]: "touchout",
    [vt]: "touchleave",
    [_t]: "touchover",
    [mt]: "touchenter",
    [at]: De,
    [nt]: Ge,
    [j]: Oe,
    [st]: Le,
    pointerclick: "tap",
    pointerdblclick: "dbltap"
  },
  pointer: {
    [pt]: pt,
    [vt]: vt,
    [_t]: _t,
    [mt]: mt,
    [at]: at,
    [nt]: nt,
    [j]: j,
    [st]: st,
    pointerclick: "pointerclick",
    pointerdblclick: "pointerdblclick"
  }
}, ot = (r) => r.indexOf("pointer") >= 0 ? "pointer" : r.indexOf("touch") >= 0 ? "touch" : "mouse", W = (r) => {
  const t = ot(r);
  if (t === "pointer")
    return _.pointerEventsEnabled && Nt.pointer;
  if (t === "touch")
    return Nt.touch;
  if (t === "mouse")
    return Nt.mouse;
};
function ge(r = {}) {
  return (r.clipFunc || r.clipWidth || r.clipHeight) && d.warn("Stage does not support clipping. Please use clip for Layers or Groups."), r;
}
const Xi = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
class Rt extends G {
  constructor(t) {
    super(ge(t)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
      ge(this.attrs);
    }), this._checkVisibility();
  }
  _validateAdd(t) {
    const e = t.getType() === "Layer", i = t.getType() === "FastLayer";
    e || i || d.throw("You may only add layers to the stage.");
  }
  _checkVisibility() {
    if (!this.content)
      return;
    const t = this.visible() ? "" : "none";
    this.content.style.display = t;
  }
  setContainer(t) {
    if (typeof t === Mi) {
      if (t.charAt(0) === ".") {
        var e = t.slice(1);
        t = document.getElementsByClassName(e)[0];
      } else {
        var i;
        t.charAt(0) !== "#" ? i = t : i = t.slice(1), t = document.getElementById(i);
      }
      if (!t)
        throw "Can not find container in document with id " + i;
    }
    return this._setAttr("container", t), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), t.appendChild(this.content)), this;
  }
  shouldDrawHit() {
    return !0;
  }
  clear() {
    var t = this.children, e = t.length, i;
    for (i = 0; i < e; i++)
      t[i].clear();
    return this;
  }
  clone(t) {
    return t || (t = {}), t.container = typeof document < "u" && document.createElement("div"), G.prototype.clone.call(this, t);
  }
  destroy() {
    super.destroy();
    var t = this.content;
    return t && d._isInDocument(t) && this.container().removeChild(t), d.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
  }
  getPointerPosition() {
    const t = this._pointerPositions[0] || this._changedPointerPositions[0];
    return t ? {
      x: t.x,
      y: t.y
    } : (d.warn(Xi), null);
  }
  _getPointerById(t) {
    return this._pointerPositions.find((e) => e.id === t);
  }
  getPointersPositions() {
    return this._pointerPositions;
  }
  getStage() {
    return this;
  }
  getContent() {
    return this.content;
  }
  _toKonvaCanvas(t) {
    t = t || {}, t.x = t.x || 0, t.y = t.y || 0, t.width = t.width || this.width(), t.height = t.height || this.height();
    var e = new K({
      width: t.width,
      height: t.height,
      pixelRatio: t.pixelRatio || 1
    }), i = e.getContext()._context, a = this.children;
    return (t.x || t.y) && i.translate(-1 * t.x, -1 * t.y), a.forEach(function(n) {
      if (n.isVisible()) {
        var s = n._toKonvaCanvas(t);
        i.drawImage(s._canvas, t.x, t.y, s.getWidth() / s.getPixelRatio(), s.getHeight() / s.getPixelRatio());
      }
    }), e;
  }
  getIntersection(t) {
    if (!t)
      return null;
    var e = this.children, i = e.length, a = i - 1, n;
    for (n = a; n >= 0; n--) {
      const s = e[n].getIntersection(t);
      if (s)
        return s;
    }
    return null;
  }
  _resizeDOM() {
    var t = this.width(), e = this.height();
    this.content && (this.content.style.width = t + fe, this.content.style.height = e + fe), this.bufferCanvas.setSize(t, e), this.bufferHitCanvas.setSize(t, e), this.children.forEach((i) => {
      i.setSize({ width: t, height: e }), i.draw();
    });
  }
  add(t, ...e) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++)
        this.add(arguments[i]);
      return this;
    }
    super.add(t);
    var a = this.children.length;
    return a > Fi && d.warn("The stage has " + a + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), t.setSize({ width: this.width(), height: this.height() }), t.draw(), _.isBrowser && this.content.appendChild(t.canvas._canvas), this;
  }
  getParent() {
    return null;
  }
  getLayer() {
    return null;
  }
  hasPointerCapture(t) {
    return we(t, this);
  }
  setPointerCapture(t) {
    xe(t, this);
  }
  releaseCapture(t) {
    lt(t);
  }
  getLayers() {
    return this.children;
  }
  _bindContentEvents() {
    _.isBrowser && Yi.forEach(([t, e]) => {
      this.content.addEventListener(t, (i) => {
        this[e](i);
      }, { passive: !1 });
    });
  }
  _pointerenter(t) {
    this.setPointersPositions(t);
    const e = W(t.type);
    this._fire(e.pointerenter, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _pointerover(t) {
    this.setPointersPositions(t);
    const e = W(t.type);
    this._fire(e.pointerover, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _getTargetShape(t) {
    let e = this[t + "targetShape"];
    return e && !e.getStage() && (e = null), e;
  }
  _pointerleave(t) {
    const e = W(t.type), i = ot(t.type);
    if (e) {
      this.setPointersPositions(t);
      var a = this._getTargetShape(i), n = !b.isDragging || _.hitOnDragEnabled;
      a && n ? (a._fireAndBubble(e.pointerout, { evt: t }), a._fireAndBubble(e.pointerleave, { evt: t }), this._fire(e.pointerleave, {
        evt: t,
        target: this,
        currentTarget: this
      }), this[i + "targetShape"] = null) : n && (this._fire(e.pointerleave, {
        evt: t,
        target: this,
        currentTarget: this
      }), this._fire(e.pointerout, {
        evt: t,
        target: this,
        currentTarget: this
      })), this.pointerPos = void 0, this._pointerPositions = [];
    }
  }
  _pointerdown(t) {
    const e = W(t.type), i = ot(t.type);
    if (e) {
      this.setPointersPositions(t);
      var a = !1;
      this._changedPointerPositions.forEach((n) => {
        var s = this.getIntersection(n);
        if (b.justDragged = !1, _["_" + i + "ListenClick"] = !0, !(s && s.isListening()))
          return;
        _.capturePointerEventsEnabled && s.setPointerCapture(n.id), this[i + "ClickStartShape"] = s, s._fireAndBubble(e.pointerdown, {
          evt: t,
          pointerId: n.id
        }), a = !0;
        const l = t.type.indexOf("touch") >= 0;
        s.preventDefault() && t.cancelable && l && t.preventDefault();
      }), a || this._fire(e.pointerdown, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
  }
  _pointermove(t) {
    const e = W(t.type), i = ot(t.type);
    if (!e)
      return;
    b.isDragging && b.node.preventDefault() && t.cancelable && t.preventDefault(), this.setPointersPositions(t);
    var a = !b.isDragging || _.hitOnDragEnabled;
    if (!a)
      return;
    var n = {};
    let s = !1;
    var o = this._getTargetShape(i);
    this._changedPointerPositions.forEach((l) => {
      const h = It(l.id) || this.getIntersection(l), u = l.id, p = { evt: t, pointerId: u };
      var g = o !== h;
      if (g && o && (o._fireAndBubble(e.pointerout, Object.assign({}, p), h), o._fireAndBubble(e.pointerleave, Object.assign({}, p), h)), h) {
        if (n[h._id])
          return;
        n[h._id] = !0;
      }
      h && h.isListening() ? (s = !0, g && (h._fireAndBubble(e.pointerover, Object.assign({}, p), o), h._fireAndBubble(e.pointerenter, Object.assign({}, p), o), this[i + "targetShape"] = h), h._fireAndBubble(e.pointermove, Object.assign({}, p))) : o && (this._fire(e.pointerover, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: u
      }), this[i + "targetShape"] = null);
    }), s || this._fire(e.pointermove, {
      evt: t,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    });
  }
  _pointerup(t) {
    const e = W(t.type), i = ot(t.type);
    if (!e)
      return;
    this.setPointersPositions(t);
    const a = this[i + "ClickStartShape"], n = this[i + "ClickEndShape"];
    var s = {};
    let o = !1;
    this._changedPointerPositions.forEach((l) => {
      const h = It(l.id) || this.getIntersection(l);
      if (h) {
        if (h.releaseCapture(l.id), s[h._id])
          return;
        s[h._id] = !0;
      }
      const u = l.id, p = { evt: t, pointerId: u };
      let g = !1;
      _["_" + i + "InDblClickWindow"] ? (g = !0, clearTimeout(this[i + "DblTimeout"])) : b.justDragged || (_["_" + i + "InDblClickWindow"] = !0, clearTimeout(this[i + "DblTimeout"])), this[i + "DblTimeout"] = setTimeout(function() {
        _["_" + i + "InDblClickWindow"] = !1;
      }, _.dblClickWindow), h && h.isListening() ? (o = !0, this[i + "ClickEndShape"] = h, h._fireAndBubble(e.pointerup, Object.assign({}, p)), _["_" + i + "ListenClick"] && a && a === h && (h._fireAndBubble(e.pointerclick, Object.assign({}, p)), g && n && n === h && h._fireAndBubble(e.pointerdblclick, Object.assign({}, p)))) : (this[i + "ClickEndShape"] = null, _["_" + i + "ListenClick"] && this._fire(e.pointerclick, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: u
      }), g && this._fire(e.pointerdblclick, {
        evt: t,
        target: this,
        currentTarget: this,
        pointerId: u
      }));
    }), o || this._fire(e.pointerup, {
      evt: t,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    }), _["_" + i + "ListenClick"] = !1, t.cancelable && i !== "touch" && t.preventDefault();
  }
  _contextmenu(t) {
    this.setPointersPositions(t);
    var e = this.getIntersection(this.getPointerPosition());
    e && e.isListening() ? e._fireAndBubble(Wt, { evt: t }) : this._fire(Wt, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _wheel(t) {
    this.setPointersPositions(t);
    var e = this.getIntersection(this.getPointerPosition());
    e && e.isListening() ? e._fireAndBubble(Vt, { evt: t }) : this._fire(Vt, {
      evt: t,
      target: this,
      currentTarget: this
    });
  }
  _pointercancel(t) {
    this.setPointersPositions(t);
    const e = It(t.pointerId) || this.getIntersection(this.getPointerPosition());
    e && e._fireAndBubble(j, Zt(t)), lt(t.pointerId);
  }
  _lostpointercapture(t) {
    lt(t.pointerId);
  }
  setPointersPositions(t) {
    var e = this._getContentPosition(), i = null, a = null;
    t = t || window.event, t.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(t.touches, (n) => {
      this._pointerPositions.push({
        id: n.identifier,
        x: (n.clientX - e.left) / e.scaleX,
        y: (n.clientY - e.top) / e.scaleY
      });
    }), Array.prototype.forEach.call(t.changedTouches || t.touches, (n) => {
      this._changedPointerPositions.push({
        id: n.identifier,
        x: (n.clientX - e.left) / e.scaleX,
        y: (n.clientY - e.top) / e.scaleY
      });
    })) : (i = (t.clientX - e.left) / e.scaleX, a = (t.clientY - e.top) / e.scaleY, this.pointerPos = {
      x: i,
      y: a
    }, this._pointerPositions = [{ x: i, y: a, id: d._getFirstPointerId(t) }], this._changedPointerPositions = [
      { x: i, y: a, id: d._getFirstPointerId(t) }
    ]);
  }
  _setPointerPosition(t) {
    d.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(t);
  }
  _getContentPosition() {
    if (!this.content || !this.content.getBoundingClientRect)
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1
      };
    var t = this.content.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      scaleX: t.width / this.content.clientWidth || 1,
      scaleY: t.height / this.content.clientHeight || 1
    };
  }
  _buildDOM() {
    if (this.bufferCanvas = new K({
      width: this.width(),
      height: this.height()
    }), this.bufferHitCanvas = new Jt({
      pixelRatio: 1,
      width: this.width(),
      height: this.height()
    }), !!_.isBrowser) {
      var t = this.container();
      if (!t)
        throw "Stage has no container. A container is required.";
      t.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this._resizeDOM();
    }
  }
  cache() {
    return d.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
  }
  clearCache() {
    return this;
  }
  batchDraw() {
    return this.getChildren().forEach(function(t) {
      t.batchDraw();
    }), this;
  }
}
Rt.prototype.nodeType = Ni;
ct(Rt);
c.addGetterSetter(Rt, "container");
function Ui(r, t, e) {
  function i(a) {
    return new /* Konva. */
    Rt({ ...a });
  }
  return [i];
}
class $i extends At {
  constructor(t) {
    super(), kt(this, t, Ui, null, Tt, { kStage: 0 });
  }
  get kStage() {
    return this.$$.ctx[0];
  }
}
var Ie = "hasShadow", Ne = "shadowRGBA", Me = "patternImage", He = "linearGradient", Be = "radialGradient";
let Ct;
function Mt() {
  return Ct || (Ct = d.createCanvasElement().getContext("2d"), Ct);
}
const Et = {};
function Wi(r) {
  r.fill();
}
function Vi(r) {
  r.stroke();
}
function zi(r) {
  r.fill();
}
function ji(r) {
  r.stroke();
}
function Ki() {
  this._clearCache(Ie);
}
function qi() {
  this._clearCache(Ne);
}
function Ji() {
  this._clearCache(Me);
}
function Zi() {
  this._clearCache(He);
}
function Qi() {
  this._clearCache(Be);
}
class f extends v {
  constructor(t) {
    super(t);
    let e;
    for (; e = d.getRandomColor(), !(e && !(e in Et)); )
      ;
    this.colorKey = e, Et[e] = this;
  }
  getContext() {
    return d.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
  }
  getCanvas() {
    return d.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
  }
  getSceneFunc() {
    return this.attrs.sceneFunc || this._sceneFunc;
  }
  getHitFunc() {
    return this.attrs.hitFunc || this._hitFunc;
  }
  hasShadow() {
    return this._getCache(Ie, this._hasShadow);
  }
  _hasShadow() {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  }
  _getFillPattern() {
    return this._getCache(Me, this.__getFillPattern);
  }
  __getFillPattern() {
    if (this.fillPatternImage()) {
      var t = Mt();
      const e = t.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
      if (e && e.setTransform) {
        const i = new X();
        i.translate(this.fillPatternX(), this.fillPatternY()), i.rotate(_.getAngle(this.fillPatternRotation())), i.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), i.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
        const a = i.getMatrix(), n = typeof DOMMatrix > "u" ? {
          a: a[0],
          b: a[1],
          c: a[2],
          d: a[3],
          e: a[4],
          f: a[5]
        } : new DOMMatrix(a);
        e.setTransform(n);
      }
      return e;
    }
  }
  _getLinearGradient() {
    return this._getCache(He, this.__getLinearGradient);
  }
  __getLinearGradient() {
    var t = this.fillLinearGradientColorStops();
    if (t) {
      for (var e = Mt(), i = this.fillLinearGradientStartPoint(), a = this.fillLinearGradientEndPoint(), n = e.createLinearGradient(i.x, i.y, a.x, a.y), s = 0; s < t.length; s += 2)
        n.addColorStop(t[s], t[s + 1]);
      return n;
    }
  }
  _getRadialGradient() {
    return this._getCache(Be, this.__getRadialGradient);
  }
  __getRadialGradient() {
    var t = this.fillRadialGradientColorStops();
    if (t) {
      for (var e = Mt(), i = this.fillRadialGradientStartPoint(), a = this.fillRadialGradientEndPoint(), n = e.createRadialGradient(i.x, i.y, this.fillRadialGradientStartRadius(), a.x, a.y, this.fillRadialGradientEndRadius()), s = 0; s < t.length; s += 2)
        n.addColorStop(t[s], t[s + 1]);
      return n;
    }
  }
  getShadowRGBA() {
    return this._getCache(Ne, this._getShadowRGBA);
  }
  _getShadowRGBA() {
    if (this.hasShadow()) {
      var t = d.colorToRGBA(this.shadowColor());
      if (t)
        return "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")";
    }
  }
  hasFill() {
    return this._calculate("hasFill", [
      "fillEnabled",
      "fill",
      "fillPatternImage",
      "fillLinearGradientColorStops",
      "fillRadialGradientColorStops"
    ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
  }
  hasStroke() {
    return this._calculate("hasStroke", [
      "strokeEnabled",
      "strokeWidth",
      "stroke",
      "strokeLinearGradientColorStops"
    ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
  }
  hasHitStroke() {
    const t = this.hitStrokeWidth();
    return t === "auto" ? this.hasStroke() : this.strokeEnabled() && !!t;
  }
  intersects(t) {
    var e = this.getStage(), i = e.bufferHitCanvas, a;
    return i.getContext().clear(), this.drawHit(i, null, !0), a = i.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data, a[3] > 0;
  }
  destroy() {
    return v.prototype.destroy.call(this), delete Et[this.colorKey], delete this.colorKey, this;
  }
  _useBufferCanvas(t) {
    var e;
    if (!this.getStage() || !((e = this.attrs.perfectDrawEnabled) !== null && e !== void 0 ? e : !0))
      return !1;
    const a = t || this.hasFill(), n = this.hasStroke(), s = this.getAbsoluteOpacity() !== 1;
    if (a && n && s)
      return !0;
    const o = this.hasShadow(), l = this.shadowForStrokeEnabled();
    return !!(a && n && o && l);
  }
  setStrokeHitEnabled(t) {
    d.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
  }
  getStrokeHitEnabled() {
    return this.hitStrokeWidth() !== 0;
  }
  getSelfRect() {
    var t = this.size();
    return {
      x: this._centroid ? -t.width / 2 : 0,
      y: this._centroid ? -t.height / 2 : 0,
      width: t.width,
      height: t.height
    };
  }
  getClientRect(t = {}) {
    const e = t.skipTransform, i = t.relativeTo, a = this.getSelfRect(), s = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0, o = a.width + s, l = a.height + s, h = !t.skipShadow && this.hasShadow(), u = h ? this.shadowOffsetX() : 0, p = h ? this.shadowOffsetY() : 0, g = o + Math.abs(u), w = l + Math.abs(p), C = h && this.shadowBlur() || 0, m = g + C * 2, y = w + C * 2, A = {
      width: m,
      height: y,
      x: -(s / 2 + C) + Math.min(u, 0) + a.x,
      y: -(s / 2 + C) + Math.min(p, 0) + a.y
    };
    return e ? A : this._transformedRect(A, i);
  }
  drawScene(t, e) {
    var i = this.getLayer(), a = t || i.getCanvas(), n = a.getContext(), s = this._getCanvasCache(), o = this.getSceneFunc(), l = this.hasShadow(), h, u, p, g = a.isCache, w = e === this;
    if (!this.isVisible() && !w)
      return this;
    if (s) {
      n.save();
      var C = this.getAbsoluteTransform(e).getMatrix();
      return n.transform(C[0], C[1], C[2], C[3], C[4], C[5]), this._drawCachedSceneCanvas(n), n.restore(), this;
    }
    if (!o)
      return this;
    if (n.save(), this._useBufferCanvas() && !g) {
      h = this.getStage(), u = h.bufferCanvas, p = u.getContext(), p.clear(), p.save(), p._applyLineJoin(this);
      var m = this.getAbsoluteTransform(e).getMatrix();
      p.transform(m[0], m[1], m[2], m[3], m[4], m[5]), o.call(this, p, this), p.restore();
      var y = u.pixelRatio;
      l && n._applyShadow(this), n._applyOpacity(this), n._applyGlobalCompositeOperation(this), n.drawImage(u._canvas, 0, 0, u.width / y, u.height / y);
    } else {
      if (n._applyLineJoin(this), !w) {
        var m = this.getAbsoluteTransform(e).getMatrix();
        n.transform(m[0], m[1], m[2], m[3], m[4], m[5]), n._applyOpacity(this), n._applyGlobalCompositeOperation(this);
      }
      l && n._applyShadow(this), o.call(this, n, this);
    }
    return n.restore(), this;
  }
  drawHit(t, e, i = !1) {
    if (!this.shouldDrawHit(e, i))
      return this;
    var a = this.getLayer(), n = t || a.hitCanvas, s = n && n.getContext(), o = this.hitFunc() || this.sceneFunc(), l = this._getCanvasCache(), h = l && l.hit;
    if (this.colorKey || d.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), h) {
      s.save();
      var u = this.getAbsoluteTransform(e).getMatrix();
      return s.transform(u[0], u[1], u[2], u[3], u[4], u[5]), this._drawCachedHitCanvas(s), s.restore(), this;
    }
    if (!o)
      return this;
    if (s.save(), s._applyLineJoin(this), !(this === e)) {
      var g = this.getAbsoluteTransform(e).getMatrix();
      s.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
    }
    return o.call(this, s, this), s.restore(), this;
  }
  drawHitFromCache(t = 0) {
    var e = this._getCanvasCache(), i = this._getCachedSceneCanvas(), a = e.hit, n = a.getContext(), s = a.getWidth(), o = a.getHeight(), l, h, u, p, g, w;
    n.clear(), n.drawImage(i._canvas, 0, 0, s, o);
    try {
      for (l = n.getImageData(0, 0, s, o), h = l.data, u = h.length, p = d._hexToRgb(this.colorKey), g = 0; g < u; g += 4)
        w = h[g + 3], w > t ? (h[g] = p.r, h[g + 1] = p.g, h[g + 2] = p.b, h[g + 3] = 255) : h[g + 3] = 0;
      n.putImageData(l, 0, 0);
    } catch (C) {
      d.error("Unable to draw hit graph from cached scene canvas. " + C.message);
    }
    return this;
  }
  hasPointerCapture(t) {
    return we(t, this);
  }
  setPointerCapture(t) {
    xe(t, this);
  }
  releaseCapture(t) {
    lt(t);
  }
}
f.prototype._fillFunc = Wi;
f.prototype._strokeFunc = Vi;
f.prototype._fillFuncHit = zi;
f.prototype._strokeFuncHit = ji;
f.prototype._centroid = !1;
f.prototype.nodeType = "Shape";
ct(f);
f.prototype.eventListeners = {};
f.prototype.on.call(f.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", Ki);
f.prototype.on.call(f.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", qi);
f.prototype.on.call(f.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", Ji);
f.prototype.on.call(f.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", Zi);
f.prototype.on.call(f.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", Qi);
c.addGetterSetter(f, "stroke", void 0, ye());
c.addGetterSetter(f, "strokeWidth", 2, S());
c.addGetterSetter(f, "fillAfterStrokeEnabled", !1);
c.addGetterSetter(f, "hitStrokeWidth", "auto", jt());
c.addGetterSetter(f, "strokeHitEnabled", !0, I());
c.addGetterSetter(f, "perfectDrawEnabled", !0, I());
c.addGetterSetter(f, "shadowForStrokeEnabled", !0, I());
c.addGetterSetter(f, "lineJoin");
c.addGetterSetter(f, "lineCap");
c.addGetterSetter(f, "sceneFunc");
c.addGetterSetter(f, "hitFunc");
c.addGetterSetter(f, "dash");
c.addGetterSetter(f, "dashOffset", 0, S());
c.addGetterSetter(f, "shadowColor", void 0, J());
c.addGetterSetter(f, "shadowBlur", 0, S());
c.addGetterSetter(f, "shadowOpacity", 1, S());
c.addComponentsGetterSetter(f, "shadowOffset", ["x", "y"]);
c.addGetterSetter(f, "shadowOffsetX", 0, S());
c.addGetterSetter(f, "shadowOffsetY", 0, S());
c.addGetterSetter(f, "fillPatternImage");
c.addGetterSetter(f, "fill", void 0, ye());
c.addGetterSetter(f, "fillPatternX", 0, S());
c.addGetterSetter(f, "fillPatternY", 0, S());
c.addGetterSetter(f, "fillLinearGradientColorStops");
c.addGetterSetter(f, "strokeLinearGradientColorStops");
c.addGetterSetter(f, "fillRadialGradientStartRadius", 0);
c.addGetterSetter(f, "fillRadialGradientEndRadius", 0);
c.addGetterSetter(f, "fillRadialGradientColorStops");
c.addGetterSetter(f, "fillPatternRepeat", "repeat");
c.addGetterSetter(f, "fillEnabled", !0);
c.addGetterSetter(f, "strokeEnabled", !0);
c.addGetterSetter(f, "shadowEnabled", !0);
c.addGetterSetter(f, "dashEnabled", !0);
c.addGetterSetter(f, "strokeScaleEnabled", !0);
c.addGetterSetter(f, "fillPriority", "color");
c.addComponentsGetterSetter(f, "fillPatternOffset", ["x", "y"]);
c.addGetterSetter(f, "fillPatternOffsetX", 0, S());
c.addGetterSetter(f, "fillPatternOffsetY", 0, S());
c.addComponentsGetterSetter(f, "fillPatternScale", ["x", "y"]);
c.addGetterSetter(f, "fillPatternScaleX", 1, S());
c.addGetterSetter(f, "fillPatternScaleY", 1, S());
c.addComponentsGetterSetter(f, "fillLinearGradientStartPoint", [
  "x",
  "y"
]);
c.addComponentsGetterSetter(f, "strokeLinearGradientStartPoint", [
  "x",
  "y"
]);
c.addGetterSetter(f, "fillLinearGradientStartPointX", 0);
c.addGetterSetter(f, "strokeLinearGradientStartPointX", 0);
c.addGetterSetter(f, "fillLinearGradientStartPointY", 0);
c.addGetterSetter(f, "strokeLinearGradientStartPointY", 0);
c.addComponentsGetterSetter(f, "fillLinearGradientEndPoint", [
  "x",
  "y"
]);
c.addComponentsGetterSetter(f, "strokeLinearGradientEndPoint", [
  "x",
  "y"
]);
c.addGetterSetter(f, "fillLinearGradientEndPointX", 0);
c.addGetterSetter(f, "strokeLinearGradientEndPointX", 0);
c.addGetterSetter(f, "fillLinearGradientEndPointY", 0);
c.addGetterSetter(f, "strokeLinearGradientEndPointY", 0);
c.addComponentsGetterSetter(f, "fillRadialGradientStartPoint", [
  "x",
  "y"
]);
c.addGetterSetter(f, "fillRadialGradientStartPointX", 0);
c.addGetterSetter(f, "fillRadialGradientStartPointY", 0);
c.addComponentsGetterSetter(f, "fillRadialGradientEndPoint", [
  "x",
  "y"
]);
c.addGetterSetter(f, "fillRadialGradientEndPointX", 0);
c.addGetterSetter(f, "fillRadialGradientEndPointY", 0);
c.addGetterSetter(f, "fillPatternRotation", 0);
c.backCompat(f, {
  dashArray: "dash",
  getDashArray: "getDash",
  setDashArray: "getDash",
  drawFunc: "sceneFunc",
  getDrawFunc: "getSceneFunc",
  setDrawFunc: "setSceneFunc",
  drawHitFunc: "hitFunc",
  getDrawHitFunc: "getHitFunc",
  setDrawHitFunc: "setHitFunc"
});
var tr = "#", er = "beforeDraw", ir = "draw", Fe = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], rr = Fe.length;
class Z extends G {
  constructor(t) {
    super(t), this.canvas = new K(), this.hitCanvas = new Jt({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this;
  }
  setZIndex(t) {
    super.setZIndex(t);
    var e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), t < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    v.prototype.moveToTop.call(this);
    var t = this.getStage();
    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var t = v.prototype.moveUp.call(this);
    if (!t)
      return !1;
    var e = this.getStage();
    return !e || !e.content ? !1 : (e.content.removeChild(this.getNativeCanvasElement()), this.index < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[this.index + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (v.prototype.moveDown.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (v.prototype.moveToBottom.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var t = this.getNativeCanvasElement();
    return v.prototype.remove.call(this), t && t.parentNode && d._isInDocument(t) && t.parentNode.removeChild(t), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: e }) {
    return this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._setSmoothEnabled(), this;
  }
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" && e !== "Shape" && d.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return t = t || {}, t.width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = t.x !== void 0 ? t.x : this.x(), t.y = t.y !== void 0 ? t.y : this.y(), v.prototype._toKonvaCanvas.call(this, t);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    d.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    d.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, d.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var e = 1, i = !1; ; ) {
      for (let a = 0; a < rr; a++) {
        const n = Fe[a], s = this._getIntersection({
          x: t.x + n.x * e,
          y: t.y + n.y * e
        }), o = s.shape;
        if (o)
          return o;
        if (i = !!s.antialiased, !s.antialiased)
          break;
      }
      if (i)
        e += 1;
      else
        return null;
    }
  }
  _getIntersection(t) {
    const e = this.hitCanvas.pixelRatio, i = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data, a = i[3];
    if (a === 255) {
      const n = d._rgbToHex(i[0], i[1], i[2]), s = Et[tr + n];
      return s ? {
        shape: s
      } : {
        antialiased: !0
      };
    } else if (a > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(t, e) {
    var i = this.getLayer(), a = t || i && i.getCanvas();
    return this._fire(er, {
      node: this
    }), this.clearBeforeDraw() && a.getContext().clear(), G.prototype.drawScene.call(this, a, e), this._fire(ir, {
      node: this
    }), this;
  }
  drawHit(t, e) {
    var i = this.getLayer(), a = t || i && i.hitCanvas;
    return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), G.prototype.drawHit.call(this, a, e), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    d.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
  }
  getHitGraphEnabled(t) {
    return d.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var t = this.parent, e = !!this.hitCanvas._canvas.parentNode;
      e ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return d.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
}
Z.prototype.nodeType = "Layer";
ct(Z);
c.addGetterSetter(Z, "imageSmoothingEnabled", !0);
c.addGetterSetter(Z, "clearBeforeDraw", !0);
c.addGetterSetter(Z, "hitGraphEnabled", !0, I());
function ar(r, t, e) {
  function i(a) {
    return new /* Konva. */
    Z({ ...a });
  }
  return [i];
}
class nr extends At {
  constructor(t) {
    super(), kt(this, t, ar, null, Tt, { kLayer: 0 });
  }
  get kLayer() {
    return this.$$.ctx[0];
  }
}
class Qt extends G {
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" && e !== "Shape" && d.throw("You may only add groups and shapes to groups.");
  }
}
Qt.prototype.nodeType = "Group";
ct(Qt);
function sr(r, t, e) {
  function i(a) {
    return new /* Konva. */
    Qt({ ...a });
  }
  return [i];
}
class or extends At {
  constructor(t) {
    super(), kt(this, t, sr, null, Tt, { kGroup: 0 });
  }
  get kGroup() {
    return this.$$.ctx[0];
  }
}
function hr(r) {
  return Array.from(r);
}
var V = "auto", lr = "center", rt = "justify", dr = "Change.konva", cr = "2d", pe = "-", Ye = "left", ur = "text", fr = "Text", gr = "top", pr = "bottom", ve = "middle", Xe = "normal", vr = "px ", St = " ", _r = "right", mr = "word", Cr = "char", _e = "none", Ht = "…", Ue = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], Sr = Ue.length;
function yr(r) {
  return r.split(",").map((t) => {
    t = t.trim();
    const e = t.indexOf(" ") >= 0, i = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
    return e && !i && (t = `"${t}"`), t;
  }).join(", ");
}
var yt;
function Bt() {
  return yt || (yt = d.createCanvasElement().getContext(cr), yt);
}
function br(r) {
  r.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function wr(r) {
  r.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function xr(r) {
  return r = r || {}, !r.fillLinearGradientColorStops && !r.fillRadialGradientColorStops && !r.fillPatternImage && (r.fill = r.fill || "black"), r;
}
class E extends f {
  constructor(t) {
    super(xr(t)), this._partialTextX = 0, this._partialTextY = 0;
    for (var e = 0; e < Sr; e++)
      this.on(Ue[e] + dr, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    var e = this.textArr, i = e.length;
    if (this.text()) {
      var a = this.padding(), n = this.fontSize(), s = this.lineHeight() * n, o = this.verticalAlign(), l = 0, h = this.align(), u = this.getWidth(), p = this.letterSpacing(), g = this.fill(), w = this.textDecoration(), C = w.indexOf("underline") !== -1, m = w.indexOf("line-through") !== -1, y, A = 0, A = s / 2, k = 0, D = 0;
      for (t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", ve), t.setAttr("textAlign", Ye), o === ve ? l = (this.getHeight() - i * s - a * 2) / 2 : o === pr && (l = this.getHeight() - i * s - a * 2), t.translate(a, l + a), y = 0; y < i; y++) {
        var k = 0, D = 0, T = e[y], O = T.text, R = T.width, F = T.lastInParagraph, P, N, M;
        if (t.save(), h === _r ? k += u - R - a * 2 : h === lr && (k += (u - R - a * 2) / 2), C) {
          t.save(), t.beginPath(), t.moveTo(k, A + D + Math.round(n / 2)), P = O.split(" ").length - 1, N = P === 0, M = h === rt && !F ? u - a * 2 : R, t.lineTo(k + Math.round(M), A + D + Math.round(n / 2)), t.lineWidth = n / 15;
          const tt = this._getLinearGradient();
          t.strokeStyle = tt || g, t.stroke(), t.restore();
        }
        if (m) {
          t.save(), t.beginPath(), t.moveTo(k, A + D), P = O.split(" ").length - 1, N = P === 0, M = h === rt && F && !N ? u - a * 2 : R, t.lineTo(k + Math.round(M), A + D), t.lineWidth = n / 15;
          const tt = this._getLinearGradient();
          t.strokeStyle = tt || g, t.stroke(), t.restore();
        }
        if (p !== 0 || h === rt) {
          P = O.split(" ").length - 1;
          for (var Q = hr(O), U = 0; U < Q.length; U++) {
            var H = Q[U];
            H === " " && !F && h === rt && (k += (u - a * 2 - R) / P), this._partialTextX = k, this._partialTextY = A + D, this._partialText = H, t.fillStrokeShape(this), k += this.measureSize(H).width + p;
          }
        } else
          this._partialTextX = k, this._partialTextY = A + D, this._partialText = O, t.fillStrokeShape(this);
        t.restore(), i > 1 && (A += s);
      }
    }
  }
  _hitFunc(t) {
    var e = this.getWidth(), i = this.getHeight();
    t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    var e = d._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(ur, e), this;
  }
  getWidth() {
    var t = this.attrs.width === V || this.attrs.width === void 0;
    return t ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var t = this.attrs.height === V || this.attrs.height === void 0;
    return t ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return d.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(t) {
    var e = Bt(), i = this.fontSize(), a;
    return e.save(), e.font = this._getContextFont(), a = e.measureText(t), e.restore(), {
      width: a.width,
      height: i
    };
  }
  _getContextFont() {
    return this.fontStyle() + St + this.fontVariant() + St + (this.fontSize() + vr) + yr(this.fontFamily());
  }
  _addTextLine(t) {
    this.align() === rt && (t = t.trim());
    var i = this._getTextWidth(t);
    return this.textArr.push({
      text: t,
      width: i,
      lastInParagraph: !1
    });
  }
  _getTextWidth(t) {
    var e = this.letterSpacing(), i = t.length;
    return Bt().measureText(t).width + (i ? e * (i - 1) : 0);
  }
  _setTextData() {
    var t = this.text().split(`
`), e = +this.fontSize(), i = 0, a = this.lineHeight() * e, n = this.attrs.width, s = this.attrs.height, o = n !== V && n !== void 0, l = s !== V && s !== void 0, h = this.padding(), u = n - h * 2, p = s - h * 2, g = 0, w = this.wrap(), C = w !== _e, m = w !== Cr && C, y = this.ellipsis();
    this.textArr = [], Bt().font = this._getContextFont();
    for (var A = y ? this._getTextWidth(Ht) : 0, k = 0, D = t.length; k < D; ++k) {
      var T = t[k], O = this._getTextWidth(T);
      if (o && O > u)
        for (; T.length > 0; ) {
          for (var R = 0, F = T.length, P = "", N = 0; R < F; ) {
            var M = R + F >>> 1, Q = T.slice(0, M + 1), U = this._getTextWidth(Q) + A;
            U <= u ? (R = M + 1, P = Q, N = U) : F = M;
          }
          if (P) {
            if (m) {
              var H, te = T[P.length], $e = te === St || te === pe;
              $e && N <= u ? H = P.length : H = Math.max(P.lastIndexOf(St), P.lastIndexOf(pe)) + 1, H > 0 && (R = H, P = P.slice(0, R), N = this._getTextWidth(P));
            }
            P = P.trimRight(), this._addTextLine(P), i = Math.max(i, N), g += a;
            var tt = this._shouldHandleEllipsis(g);
            if (tt) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (T = T.slice(R), T = T.trimLeft(), T.length > 0 && (O = this._getTextWidth(T), O <= u)) {
              this._addTextLine(T), g += a, i = Math.max(i, O);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(T), g += a, i = Math.max(i, O), this._shouldHandleEllipsis(g) && k < D - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), l && g + a > p)
        break;
    }
    this.textHeight = e, this.textWidth = i;
  }
  _shouldHandleEllipsis(t) {
    var e = +this.fontSize(), i = this.lineHeight() * e, a = this.attrs.height, n = a !== V && a !== void 0, s = this.padding(), o = a - s * 2, l = this.wrap(), h = l !== _e;
    return !h || n && t + i > o;
  }
  _tryToAddEllipsisToLastLine() {
    var t = this.attrs.width, e = t !== V && t !== void 0, i = this.padding(), a = t - i * 2, n = this.ellipsis(), s = this.textArr[this.textArr.length - 1];
    if (!(!s || !n)) {
      if (e) {
        var o = this._getTextWidth(s.text + Ht) < a;
        o || (s.text = s.text.slice(0, s.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(s.text + Ht);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
}
E.prototype._fillFunc = br;
E.prototype._strokeFunc = wr;
E.prototype.className = fr;
E.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
ct(E);
c.overWriteSetter(E, "width", jt());
c.overWriteSetter(E, "height", jt());
c.addGetterSetter(E, "fontFamily", "Arial");
c.addGetterSetter(E, "fontSize", 12, S());
c.addGetterSetter(E, "fontStyle", Xe);
c.addGetterSetter(E, "fontVariant", Xe);
c.addGetterSetter(E, "padding", 0, S());
c.addGetterSetter(E, "align", Ye);
c.addGetterSetter(E, "verticalAlign", gr);
c.addGetterSetter(E, "lineHeight", 1, S());
c.addGetterSetter(E, "wrap", mr);
c.addGetterSetter(E, "ellipsis", !1, I());
c.addGetterSetter(E, "letterSpacing", 0, S());
c.addGetterSetter(E, "text", "", J());
c.addGetterSetter(E, "textDecoration", "");
function Er(r, t, e) {
  function i(a) {
    return new /* Konva. */
    E({ ...a });
  }
  return [i];
}
class Pr extends At {
  constructor(t) {
    super(), kt(this, t, Er, null, Tt, { kLine: 0 });
  }
  get kLine() {
    return this.$$.ctx[0];
  }
}
const Tr = function() {
  return {
    /** {@NOTATION '〵' unicode U+3035 is symbol known as 'kana' } */
    namespace_sep: RegExp("〵").source,
    SvelteKonva〵Essentials: {
      kStage: $i,
      kLayer: nr,
      kGroup: or
    },
    SvelteKonva〵Primitives: {
      kText: Pr
    }
  };
}.call();
function kr(r, t, e) {
  let i = new r({ target: e }).$$.ctx[0];
  return new i({
    container: e,
    ...t
  });
}
function Ar(r, t = {}, e = document.body) {
  if (r !== null)
    return kr(r, t, e);
  throw new Error("SVELTE-KONVA__ERROR: kComponent was not specified");
}
const Rr = function() {
  return {
    SvelteKonva: Tr,
    ComponentLinker: Ar
  };
}.call();
export {
  Rr as default
};
