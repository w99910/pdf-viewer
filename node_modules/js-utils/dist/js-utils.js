class hr {
  constructor(r) {
    this.date = typeof r == "string" || typeof r == "number" ? new Date(r) : r;
  }
  toHumanReadable() {
    return `${this.getMonth()} ${this.date.getDate()}, ${this.date.getFullYear()}`;
  }
  toDateString() {
    return this.date.toDateString();
  }
  getDate() {
    return this.date.getDate();
  }
  getDay() {
    return this.date.getDay();
  }
  getYear() {
    return this.date.getFullYear();
  }
  get12HourTime() {
    let r = this.date.getHours(), t = this.date.getMinutes(), a = "AM";
    return r >= 12 && (a = "PM", r = 24 - r), t < 10 && (t = "0" + t), `${r}:${t} ${a}`;
  }
  getMonth() {
    switch (this.date.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }
}
function gr(e, r = !1, t = 1) {
  const a = r ? 1e3 : 1024;
  if (Math.abs(e) < a)
    return e + " B";
  const n = r ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let o = -1;
  const u = 10 ** t;
  do
    e /= a, ++o;
  while (Math.round(Math.abs(e) * u) / u >= a && o < n.length - 1);
  return e.toFixed(t) + " " + n[o];
}
class mr {
  static string(r = 5) {
    let t = "";
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = a.length;
    let o = 0;
    for (; o < r; )
      t += a.charAt(Math.floor(Math.random() * n)), o += 1;
    return t;
  }
}
const Ve = `<svg class="w-full h-full " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`, je = '<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>', ze = '<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>', Re = `<svg class='w-full h-full' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
var pe = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: !0,
  timelineOffset: 0
}, G = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, He = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], U = {
  CSS: {},
  springs: {}
};
function P(e, r, t) {
  return Math.min(Math.max(e, r), t);
}
function H(e, r) {
  return e.indexOf(r) > -1;
}
function K(e, r) {
  return e.apply(null, r);
}
var l = {
  arr: function(e) {
    return Array.isArray(e);
  },
  obj: function(e) {
    return H(Object.prototype.toString.call(e), "Object");
  },
  pth: function(e) {
    return l.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function(e) {
    return e instanceof SVGElement;
  },
  inp: function(e) {
    return e instanceof HTMLInputElement;
  },
  dom: function(e) {
    return e.nodeType || l.svg(e);
  },
  str: function(e) {
    return typeof e == "string";
  },
  fnc: function(e) {
    return typeof e == "function";
  },
  und: function(e) {
    return typeof e > "u";
  },
  nil: function(e) {
    return l.und(e) || e === null;
  },
  hex: function(e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function(e) {
    return /^rgb/.test(e);
  },
  hsl: function(e) {
    return /^hsl/.test(e);
  },
  col: function(e) {
    return l.hex(e) || l.rgb(e) || l.hsl(e);
  },
  key: function(e) {
    return !pe.hasOwnProperty(e) && !G.hasOwnProperty(e) && e !== "targets" && e !== "keyframes";
  }
};
function ye(e) {
  var r = /\(([^)]+)\)/.exec(e);
  return r ? r[1].split(",").map(function(t) {
    return parseFloat(t);
  }) : [];
}
function xe(e, r) {
  var t = ye(e), a = P(l.und(t[0]) ? 1 : t[0], 0.1, 100), n = P(l.und(t[1]) ? 100 : t[1], 0.1, 100), o = P(l.und(t[2]) ? 10 : t[2], 0.1, 100), u = P(l.und(t[3]) ? 0 : t[3], 0.1, 100), s = Math.sqrt(n / a), i = o / (2 * Math.sqrt(n * a)), m = i < 1 ? s * Math.sqrt(1 - i * i) : 0, c = 1, f = i < 1 ? (i * s + -u) / m : -u + s;
  function g(p) {
    var v = r ? r * p / 1e3 : p;
    return i < 1 ? v = Math.exp(-v * i * s) * (c * Math.cos(m * v) + f * Math.sin(m * v)) : v = (c + f * v) * Math.exp(-v * s), p === 0 || p === 1 ? p : 1 - v;
  }
  function T() {
    var p = U.springs[e];
    if (p)
      return p;
    for (var v = 1 / 6, x = 0, b = 0; ; )
      if (x += v, g(x) === 1) {
        if (b++, b >= 16)
          break;
      } else
        b = 0;
    var h = x * v * 1e3;
    return U.springs[e] = h, h;
  }
  return r ? g : T;
}
function $e(e) {
  return e === void 0 && (e = 10), function(r) {
    return Math.ceil(P(r, 1e-6, 1) * e) * (1 / e);
  };
}
var Ue = function() {
  var e = 11, r = 1 / (e - 1);
  function t(c, f) {
    return 1 - 3 * f + 3 * c;
  }
  function a(c, f) {
    return 3 * f - 6 * c;
  }
  function n(c) {
    return 3 * c;
  }
  function o(c, f, g) {
    return ((t(f, g) * c + a(f, g)) * c + n(f)) * c;
  }
  function u(c, f, g) {
    return 3 * t(f, g) * c * c + 2 * a(f, g) * c + n(f);
  }
  function s(c, f, g, T, p) {
    var v, x, b = 0;
    do
      x = f + (g - f) / 2, v = o(x, T, p) - c, v > 0 ? g = x : f = x;
    while (Math.abs(v) > 1e-7 && ++b < 10);
    return x;
  }
  function i(c, f, g, T) {
    for (var p = 0; p < 4; ++p) {
      var v = u(f, g, T);
      if (v === 0)
        return f;
      var x = o(f, g, T) - c;
      f -= x / v;
    }
    return f;
  }
  function m(c, f, g, T) {
    if (!(0 <= c && c <= 1 && 0 <= g && g <= 1))
      return;
    var p = new Float32Array(e);
    if (c !== f || g !== T)
      for (var v = 0; v < e; ++v)
        p[v] = o(v * r, c, g);
    function x(b) {
      for (var h = 0, d = 1, k = e - 1; d !== k && p[d] <= b; ++d)
        h += r;
      --d;
      var D = (b - p[d]) / (p[d + 1] - p[d]), w = h + D * r, S = u(w, c, g);
      return S >= 1e-3 ? i(b, w, c, g) : S === 0 ? w : s(b, h, h + r, c, g);
    }
    return function(b) {
      return c === f && g === T || b === 0 || b === 1 ? b : o(x(b), f, T);
    };
  }
  return m;
}(), we = function() {
  var e = { linear: function() {
    return function(a) {
      return a;
    };
  } }, r = {
    Sine: function() {
      return function(a) {
        return 1 - Math.cos(a * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(a) {
        return 1 - Math.sqrt(1 - a * a);
      };
    },
    Back: function() {
      return function(a) {
        return a * a * (3 * a - 2);
      };
    },
    Bounce: function() {
      return function(a) {
        for (var n, o = 4; a < ((n = Math.pow(2, --o)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - o) - 7.5625 * Math.pow((n * 3 - 2) / 22 - a, 2);
      };
    },
    Elastic: function(a, n) {
      a === void 0 && (a = 1), n === void 0 && (n = 0.5);
      var o = P(a, 1, 10), u = P(n, 0.1, 2);
      return function(s) {
        return s === 0 || s === 1 ? s : -o * Math.pow(2, 10 * (s - 1)) * Math.sin((s - 1 - u / (Math.PI * 2) * Math.asin(1 / o)) * (Math.PI * 2) / u);
      };
    }
  }, t = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  return t.forEach(function(a, n) {
    r[a] = function() {
      return function(o) {
        return Math.pow(o, n + 2);
      };
    };
  }), Object.keys(r).forEach(function(a) {
    var n = r[a];
    e["easeIn" + a] = n, e["easeOut" + a] = function(o, u) {
      return function(s) {
        return 1 - n(o, u)(1 - s);
      };
    }, e["easeInOut" + a] = function(o, u) {
      return function(s) {
        return s < 0.5 ? n(o, u)(s * 2) / 2 : 1 - n(o, u)(s * -2 + 2) / 2;
      };
    }, e["easeOutIn" + a] = function(o, u) {
      return function(s) {
        return s < 0.5 ? (1 - n(o, u)(1 - s * 2)) / 2 : (n(o, u)(s * 2 - 1) + 1) / 2;
      };
    };
  }), e;
}();
function X(e, r) {
  if (l.fnc(e))
    return e;
  var t = e.split("(")[0], a = we[t], n = ye(e);
  switch (t) {
    case "spring":
      return xe(e, r);
    case "cubicBezier":
      return K(Ue, n);
    case "steps":
      return K($e, n);
    default:
      return K(a, n);
  }
}
function be(e) {
  try {
    var r = document.querySelectorAll(e);
    return r;
  } catch {
    return;
  }
}
function W(e, r) {
  for (var t = e.length, a = arguments.length >= 2 ? arguments[1] : void 0, n = [], o = 0; o < t; o++)
    if (o in e) {
      var u = e[o];
      r.call(a, u, o, e) && n.push(u);
    }
  return n;
}
function Z(e) {
  return e.reduce(function(r, t) {
    return r.concat(l.arr(t) ? Z(t) : t);
  }, []);
}
function ve(e) {
  return l.arr(e) ? e : (l.str(e) && (e = be(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function ee(e, r) {
  return e.some(function(t) {
    return t === r;
  });
}
function re(e) {
  var r = {};
  for (var t in e)
    r[t] = e[t];
  return r;
}
function Q(e, r) {
  var t = re(e);
  for (var a in e)
    t[a] = r.hasOwnProperty(a) ? r[a] : e[a];
  return t;
}
function N(e, r) {
  var t = re(e);
  for (var a in r)
    t[a] = l.und(e[a]) ? r[a] : e[a];
  return t;
}
function We(e) {
  var r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return r ? "rgba(" + r[1] + ",1)" : e;
}
function Ze(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, t = e.replace(r, function(s, i, m, c) {
    return i + i + m + m + c + c;
  }), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), n = parseInt(a[1], 16), o = parseInt(a[2], 16), u = parseInt(a[3], 16);
  return "rgba(" + n + "," + o + "," + u + ",1)";
}
function Ne(e) {
  var r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e), t = parseInt(r[1], 10) / 360, a = parseInt(r[2], 10) / 100, n = parseInt(r[3], 10) / 100, o = r[4] || 1;
  function u(g, T, p) {
    return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? g + (T - g) * 6 * p : p < 1 / 2 ? T : p < 2 / 3 ? g + (T - g) * (2 / 3 - p) * 6 : g;
  }
  var s, i, m;
  if (a == 0)
    s = i = m = n;
  else {
    var c = n < 0.5 ? n * (1 + a) : n + a - n * a, f = 2 * n - c;
    s = u(f, c, t + 1 / 3), i = u(f, c, t), m = u(f, c, t - 1 / 3);
  }
  return "rgba(" + s * 255 + "," + i * 255 + "," + m * 255 + "," + o + ")";
}
function qe(e) {
  if (l.rgb(e))
    return We(e);
  if (l.hex(e))
    return Ze(e);
  if (l.hsl(e))
    return Ne(e);
}
function I(e) {
  var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (r)
    return r[1];
}
function Ye(e) {
  if (H(e, "translate") || e === "perspective")
    return "px";
  if (H(e, "rotate") || H(e, "skew"))
    return "deg";
}
function _(e, r) {
  return l.fnc(e) ? e(r.target, r.id, r.total) : e;
}
function C(e, r) {
  return e.getAttribute(r);
}
function te(e, r, t) {
  var a = I(r);
  if (ee([t, "deg", "rad", "turn"], a))
    return r;
  var n = U.CSS[r + t];
  if (!l.und(n))
    return n;
  var o = 100, u = document.createElement(e.tagName), s = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  s.appendChild(u), u.style.position = "absolute", u.style.width = o + t;
  var i = o / u.offsetWidth;
  s.removeChild(u);
  var m = i * parseFloat(r);
  return U.CSS[r + t] = m, m;
}
function Me(e, r, t) {
  if (r in e.style) {
    var a = r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), n = e.style[r] || getComputedStyle(e).getPropertyValue(a) || "0";
    return t ? te(e, n, t) : n;
  }
}
function ne(e, r) {
  if (l.dom(e) && !l.inp(e) && (!l.nil(C(e, r)) || l.svg(e) && e[r]))
    return "attribute";
  if (l.dom(e) && ee(He, r))
    return "transform";
  if (l.dom(e) && r !== "transform" && Me(e, r))
    return "css";
  if (e[r] != null)
    return "object";
}
function Te(e) {
  if (l.dom(e)) {
    for (var r = e.style.transform || "", t = /(\w+)\(([^)]*)\)/g, a = /* @__PURE__ */ new Map(), n; n = t.exec(r); )
      a.set(n[1], n[2]);
    return a;
  }
}
function Je(e, r, t, a) {
  var n = H(r, "scale") ? 1 : 0 + Ye(r), o = Te(e).get(r) || n;
  return t && (t.transforms.list.set(r, o), t.transforms.last = r), a ? te(e, o, a) : o;
}
function ae(e, r, t, a) {
  switch (ne(e, r)) {
    case "transform":
      return Je(e, r, a, t);
    case "css":
      return Me(e, r, t);
    case "attribute":
      return C(e, r);
    default:
      return e[r] || 0;
  }
}
function ie(e, r) {
  var t = /^(\*=|\+=|-=)/.exec(e);
  if (!t)
    return e;
  var a = I(e) || 0, n = parseFloat(r), o = parseFloat(e.replace(t[0], ""));
  switch (t[0][0]) {
    case "+":
      return n + o + a;
    case "-":
      return n - o + a;
    case "*":
      return n * o + a;
  }
}
function ke(e, r) {
  if (l.col(e))
    return qe(e);
  if (/\s/g.test(e))
    return e;
  var t = I(e), a = t ? e.substr(0, e.length - t.length) : e;
  return r ? a + r : a;
}
function oe(e, r) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function Ke(e) {
  return Math.PI * 2 * C(e, "r");
}
function Qe(e) {
  return C(e, "width") * 2 + C(e, "height") * 2;
}
function _e(e) {
  return oe(
    { x: C(e, "x1"), y: C(e, "y1") },
    { x: C(e, "x2"), y: C(e, "y2") }
  );
}
function Ee(e) {
  for (var r = e.points, t = 0, a, n = 0; n < r.numberOfItems; n++) {
    var o = r.getItem(n);
    n > 0 && (t += oe(a, o)), a = o;
  }
  return t;
}
function Ge(e) {
  var r = e.points;
  return Ee(e) + oe(r.getItem(r.numberOfItems - 1), r.getItem(0));
}
function Be(e) {
  if (e.getTotalLength)
    return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return Ke(e);
    case "rect":
      return Qe(e);
    case "line":
      return _e(e);
    case "polyline":
      return Ee(e);
    case "polygon":
      return Ge(e);
  }
}
function Xe(e) {
  var r = Be(e);
  return e.setAttribute("stroke-dasharray", r), r;
}
function er(e) {
  for (var r = e.parentNode; l.svg(r) && l.svg(r.parentNode); )
    r = r.parentNode;
  return r;
}
function Pe(e, r) {
  var t = r || {}, a = t.el || er(e), n = a.getBoundingClientRect(), o = C(a, "viewBox"), u = n.width, s = n.height, i = t.viewBox || (o ? o.split(" ") : [0, 0, u, s]);
  return {
    el: a,
    viewBox: i,
    x: i[0] / 1,
    y: i[1] / 1,
    w: u,
    h: s,
    vW: i[2],
    vH: i[3]
  };
}
function rr(e, r) {
  var t = l.str(e) ? be(e)[0] : e, a = r || 100;
  return function(n) {
    return {
      property: n,
      el: t,
      svg: Pe(t),
      totalLength: Be(t) * (a / 100)
    };
  };
}
function tr(e, r, t) {
  function a(c) {
    c === void 0 && (c = 0);
    var f = r + c >= 1 ? r + c : 0;
    return e.el.getPointAtLength(f);
  }
  var n = Pe(e.el, e.svg), o = a(), u = a(-1), s = a(1), i = t ? 1 : n.w / n.vW, m = t ? 1 : n.h / n.vH;
  switch (e.property) {
    case "x":
      return (o.x - n.x) * i;
    case "y":
      return (o.y - n.y) * m;
    case "angle":
      return Math.atan2(s.y - u.y, s.x - u.x) * 180 / Math.PI;
  }
}
function de(e, r) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, a = ke(l.pth(e) ? e.totalLength : e, r) + "";
  return {
    original: a,
    numbers: a.match(t) ? a.match(t).map(Number) : [0],
    strings: l.str(e) || r ? a.split(t) : []
  };
}
function ue(e) {
  var r = e ? Z(l.arr(e) ? e.map(ve) : ve(e)) : [];
  return W(r, function(t, a, n) {
    return n.indexOf(t) === a;
  });
}
function Ce(e) {
  var r = ue(e);
  return r.map(function(t, a) {
    return { target: t, id: a, total: r.length, transforms: { list: Te(t) } };
  });
}
function nr(e, r) {
  var t = re(r);
  if (/^spring/.test(t.easing) && (t.duration = xe(t.easing)), l.arr(e)) {
    var a = e.length, n = a === 2 && !l.obj(e[0]);
    n ? e = { value: e } : l.fnc(r.duration) || (t.duration = r.duration / a);
  }
  var o = l.arr(e) ? e : [e];
  return o.map(function(u, s) {
    var i = l.obj(u) && !l.pth(u) ? u : { value: u };
    return l.und(i.delay) && (i.delay = s ? 0 : r.delay), l.und(i.endDelay) && (i.endDelay = s === o.length - 1 ? r.endDelay : 0), i;
  }).map(function(u) {
    return N(u, t);
  });
}
function ar(e) {
  for (var r = W(Z(e.map(function(o) {
    return Object.keys(o);
  })), function(o) {
    return l.key(o);
  }).reduce(function(o, u) {
    return o.indexOf(u) < 0 && o.push(u), o;
  }, []), t = {}, a = function(o) {
    var u = r[o];
    t[u] = e.map(function(s) {
      var i = {};
      for (var m in s)
        l.key(m) ? m == u && (i.value = s[m]) : i[m] = s[m];
      return i;
    });
  }, n = 0; n < r.length; n++)
    a(n);
  return t;
}
function ir(e, r) {
  var t = [], a = r.keyframes;
  a && (r = N(ar(a), r));
  for (var n in r)
    l.key(n) && t.push({
      name: n,
      tweens: nr(r[n], e)
    });
  return t;
}
function or(e, r) {
  var t = {};
  for (var a in e) {
    var n = _(e[a], r);
    l.arr(n) && (n = n.map(function(o) {
      return _(o, r);
    }), n.length === 1 && (n = n[0])), t[a] = n;
  }
  return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t;
}
function ur(e, r) {
  var t;
  return e.tweens.map(function(a) {
    var n = or(a, r), o = n.value, u = l.arr(o) ? o[1] : o, s = I(u), i = ae(r.target, e.name, s, r), m = t ? t.to.original : i, c = l.arr(o) ? o[0] : m, f = I(c) || I(i), g = s || f;
    return l.und(u) && (u = m), n.from = de(c, g), n.to = de(ie(u, c), g), n.start = t ? t.end : 0, n.end = n.start + n.delay + n.duration + n.endDelay, n.easing = X(n.easing, n.duration), n.isPath = l.pth(o), n.isPathTargetInsideSVG = n.isPath && l.svg(r.target), n.isColor = l.col(n.from.original), n.isColor && (n.round = 1), t = n, n;
  });
}
var Ie = {
  css: function(e, r, t) {
    return e.style[r] = t;
  },
  attribute: function(e, r, t) {
    return e.setAttribute(r, t);
  },
  object: function(e, r, t) {
    return e[r] = t;
  },
  transform: function(e, r, t, a, n) {
    if (a.list.set(r, t), r === a.last || n) {
      var o = "";
      a.list.forEach(function(u, s) {
        o += s + "(" + u + ") ";
      }), e.style.transform = o;
    }
  }
};
function De(e, r) {
  var t = Ce(e);
  t.forEach(function(a) {
    for (var n in r) {
      var o = _(r[n], a), u = a.target, s = I(o), i = ae(u, n, s, a), m = s || I(i), c = ie(ke(o, m), i), f = ne(u, n);
      Ie[f](u, n, c, a.transforms, !0);
    }
  });
}
function sr(e, r) {
  var t = ne(e.target, r.name);
  if (t) {
    var a = ur(r, e), n = a[a.length - 1];
    return {
      type: t,
      property: r.name,
      animatable: e,
      tweens: a,
      duration: n.end,
      delay: a[0].delay,
      endDelay: n.endDelay
    };
  }
}
function cr(e, r) {
  return W(Z(e.map(function(t) {
    return r.map(function(a) {
      return sr(t, a);
    });
  })), function(t) {
    return !l.und(t);
  });
}
function Se(e, r) {
  var t = e.length, a = function(o) {
    return o.timelineOffset ? o.timelineOffset : 0;
  }, n = {};
  return n.duration = t ? Math.max.apply(Math, e.map(function(o) {
    return a(o) + o.duration;
  })) : r.duration, n.delay = t ? Math.min.apply(Math, e.map(function(o) {
    return a(o) + o.delay;
  })) : r.delay, n.endDelay = t ? n.duration - Math.max.apply(Math, e.map(function(o) {
    return a(o) + o.duration - o.endDelay;
  })) : r.endDelay, n;
}
var he = 0;
function lr(e) {
  var r = Q(pe, e), t = Q(G, e), a = ir(t, e), n = Ce(e.targets), o = cr(n, a), u = Se(o, t), s = he;
  return he++, N(r, {
    id: s,
    children: [],
    animatables: n,
    animations: o,
    duration: u.duration,
    delay: u.delay,
    endDelay: u.endDelay
  });
}
var B = [], Oe = function() {
  var e;
  function r() {
    !e && (!ge() || !y.suspendWhenDocumentHidden) && B.length > 0 && (e = requestAnimationFrame(t));
  }
  function t(n) {
    for (var o = B.length, u = 0; u < o; ) {
      var s = B[u];
      s.paused ? (B.splice(u, 1), o--) : (s.tick(n), u++);
    }
    e = u > 0 ? requestAnimationFrame(t) : void 0;
  }
  function a() {
    y.suspendWhenDocumentHidden && (ge() ? e = cancelAnimationFrame(e) : (B.forEach(
      function(n) {
        return n._onDocumentVisibility();
      }
    ), Oe()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", a), r;
}();
function ge() {
  return !!document && document.hidden;
}
function y(e) {
  e === void 0 && (e = {});
  var r = 0, t = 0, a = 0, n, o = 0, u = null;
  function s(h) {
    var d = window.Promise && new Promise(function(k) {
      return u = k;
    });
    return h.finished = d, d;
  }
  var i = lr(e);
  s(i);
  function m() {
    var h = i.direction;
    h !== "alternate" && (i.direction = h !== "normal" ? "normal" : "reverse"), i.reversed = !i.reversed, n.forEach(function(d) {
      return d.reversed = i.reversed;
    });
  }
  function c(h) {
    return i.reversed ? i.duration - h : h;
  }
  function f() {
    r = 0, t = c(i.currentTime) * (1 / y.speed);
  }
  function g(h, d) {
    d && d.seek(h - d.timelineOffset);
  }
  function T(h) {
    if (i.reversePlayback)
      for (var k = o; k--; )
        g(h, n[k]);
    else
      for (var d = 0; d < o; d++)
        g(h, n[d]);
  }
  function p(h) {
    for (var d = 0, k = i.animations, D = k.length; d < D; ) {
      var w = k[d], S = w.animatable, V = w.tweens, O = V.length - 1, M = V[O];
      O && (M = W(V, function(Le) {
        return h < Le.end;
      })[0] || M);
      for (var A = P(h - M.start - M.delay, 0, M.duration) / M.duration, $ = isNaN(A) ? 1 : M.easing(A), E = M.to.strings, q = M.round, Y = [], Fe = M.to.numbers.length, F = void 0, j = 0; j < Fe; j++) {
        var z = void 0, se = M.to.numbers[j], ce = M.from.numbers[j] || 0;
        M.isPath ? z = tr(M.value, $ * se, M.isPathTargetInsideSVG) : z = ce + $ * (se - ce), q && (M.isColor && j > 2 || (z = Math.round(z * q) / q)), Y.push(z);
      }
      var le = E.length;
      if (!le)
        F = Y[0];
      else {
        F = E[0];
        for (var R = 0; R < le; R++) {
          E[R];
          var fe = E[R + 1], J = Y[R];
          isNaN(J) || (fe ? F += J + fe : F += J + " ");
        }
      }
      Ie[w.type](S.target, w.property, F, S.transforms), w.currentValue = F, d++;
    }
  }
  function v(h) {
    i[h] && !i.passThrough && i[h](i);
  }
  function x() {
    i.remaining && i.remaining !== !0 && i.remaining--;
  }
  function b(h) {
    var d = i.duration, k = i.delay, D = d - i.endDelay, w = c(h);
    i.progress = P(w / d * 100, 0, 100), i.reversePlayback = w < i.currentTime, n && T(w), !i.began && i.currentTime > 0 && (i.began = !0, v("begin")), !i.loopBegan && i.currentTime > 0 && (i.loopBegan = !0, v("loopBegin")), w <= k && i.currentTime !== 0 && p(0), (w >= D && i.currentTime !== d || !d) && p(d), w > k && w < D ? (i.changeBegan || (i.changeBegan = !0, i.changeCompleted = !1, v("changeBegin")), v("change"), p(w)) : i.changeBegan && (i.changeCompleted = !0, i.changeBegan = !1, v("changeComplete")), i.currentTime = P(w, 0, d), i.began && v("update"), h >= d && (t = 0, x(), i.remaining ? (r = a, v("loopComplete"), i.loopBegan = !1, i.direction === "alternate" && m()) : (i.paused = !0, i.completed || (i.completed = !0, v("loopComplete"), v("complete"), !i.passThrough && "Promise" in window && (u(), s(i)))));
  }
  return i.reset = function() {
    var h = i.direction;
    i.passThrough = !1, i.currentTime = 0, i.progress = 0, i.paused = !0, i.began = !1, i.loopBegan = !1, i.changeBegan = !1, i.completed = !1, i.changeCompleted = !1, i.reversePlayback = !1, i.reversed = h === "reverse", i.remaining = i.loop, n = i.children, o = n.length;
    for (var d = o; d--; )
      i.children[d].reset();
    (i.reversed && i.loop !== !0 || h === "alternate" && i.loop === 1) && i.remaining++, p(i.reversed ? i.duration : 0);
  }, i._onDocumentVisibility = f, i.set = function(h, d) {
    return De(h, d), i;
  }, i.tick = function(h) {
    a = h, r || (r = a), b((a + (t - r)) * y.speed);
  }, i.seek = function(h) {
    b(c(h));
  }, i.pause = function() {
    i.paused = !0, f();
  }, i.play = function() {
    i.paused && (i.completed && i.reset(), i.paused = !1, B.push(i), f(), Oe());
  }, i.reverse = function() {
    m(), i.completed = !i.reversed, f();
  }, i.restart = function() {
    i.reset(), i.play();
  }, i.remove = function(h) {
    var d = ue(h);
    Ae(d, i);
  }, i.reset(), i.autoplay && i.play(), i;
}
function me(e, r) {
  for (var t = r.length; t--; )
    ee(e, r[t].animatable.target) && r.splice(t, 1);
}
function Ae(e, r) {
  var t = r.animations, a = r.children;
  me(e, t);
  for (var n = a.length; n--; ) {
    var o = a[n], u = o.animations;
    me(e, u), !u.length && !o.children.length && a.splice(n, 1);
  }
  !t.length && !a.length && r.pause();
}
function fr(e) {
  for (var r = ue(e), t = B.length; t--; ) {
    var a = B[t];
    Ae(r, a);
  }
}
function vr(e, r) {
  r === void 0 && (r = {});
  var t = r.direction || "normal", a = r.easing ? X(r.easing) : null, n = r.grid, o = r.axis, u = r.from || 0, s = u === "first", i = u === "center", m = u === "last", c = l.arr(e), f = parseFloat(c ? e[0] : e), g = c ? parseFloat(e[1]) : 0, T = I(c ? e[1] : e) || 0, p = r.start || 0 + (c ? f : 0), v = [], x = 0;
  return function(b, h, d) {
    if (s && (u = 0), i && (u = (d - 1) / 2), m && (u = d - 1), !v.length) {
      for (var k = 0; k < d; k++) {
        if (!n)
          v.push(Math.abs(u - k));
        else {
          var D = i ? (n[0] - 1) / 2 : u % n[0], w = i ? (n[1] - 1) / 2 : Math.floor(u / n[0]), S = k % n[0], V = Math.floor(k / n[0]), O = D - S, M = w - V, A = Math.sqrt(O * O + M * M);
          o === "x" && (A = -O), o === "y" && (A = -M), v.push(A);
        }
        x = Math.max.apply(Math, v);
      }
      a && (v = v.map(function(E) {
        return a(E / x) * x;
      })), t === "reverse" && (v = v.map(function(E) {
        return o ? E < 0 ? E * -1 : -E : Math.abs(x - E);
      }));
    }
    var $ = c ? (g - f) / x : f;
    return p + $ * (Math.round(v[h] * 100) / 100) + T;
  };
}
function dr(e) {
  e === void 0 && (e = {});
  var r = y(e);
  return r.duration = 0, r.add = function(t, a) {
    var n = B.indexOf(r), o = r.children;
    n > -1 && B.splice(n, 1);
    function u(g) {
      g.passThrough = !0;
    }
    for (var s = 0; s < o.length; s++)
      u(o[s]);
    var i = N(t, Q(G, e));
    i.targets = i.targets || e.targets;
    var m = r.duration;
    i.autoplay = !1, i.direction = r.direction, i.timelineOffset = l.und(a) ? m : ie(a, m), u(r), r.seek(i.timelineOffset);
    var c = y(i);
    u(c), o.push(c);
    var f = Se(o, e);
    return r.delay = f.delay, r.endDelay = f.endDelay, r.duration = f.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
  }, r;
}
y.version = "3.2.1";
y.speed = 1;
y.suspendWhenDocumentHidden = !0;
y.running = B;
y.remove = fr;
y.get = ae;
y.set = De;
y.convertPx = te;
y.path = rr;
y.setDashoffset = Xe;
y.stagger = vr;
y.timeline = dr;
y.easing = X;
y.penner = we;
y.random = function(e, r) {
  return Math.floor(Math.random() * (r - e + 1)) + e;
};
let L;
class pr {
  constructor(r) {
    this.element = r, L = this, this.prepareToast();
  }
  setStylesToParent() {
    this.element.style.position = "fixed", this.element.style.top = "2vh", this.element.style.right = "1vw", this.element.style.zIndex = "9999", this.element.style.borderRadius = "5px", this.element.style.padding = "10px", this.element.style.transform = "translateX(30%)", this.element.style.opacity = "0", this.element.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)", this.element.style.display = "flex", this.element.style.alignItems = "center", this.element.style.color = "white", this.element.style.border = "0.2px solid white";
  }
  prepareIconElement() {
    this.iconElement = document.createElement("div"), this.iconElement.style.padding = "5px", this.iconElement.style.width = "2rem", this.iconElement.style.height = "2rem", this.element.appendChild(this.iconElement);
  }
  prepareMessageElement() {
    this.messageElement = document.createElement("div"), this.messageElement.style.padding = "5px", this.element.appendChild(this.messageElement);
  }
  prepareToast() {
    this.setStylesToParent(), this.prepareIconElement(), this.prepareMessageElement();
  }
  appendRelatedIcon(r) {
    let t, a, n;
    switch (r) {
      case "success":
        t = ze, a = "#57cc99", n = "#2a2a2a";
        break;
      case "warning":
        t = Re, a = "#ffd166", n = "#1e1e1e";
        break;
      case "error":
        t = je, a = "#e56b6f", n = "#1c1c1c";
        break;
      default:
        t = Ve, a = "#4361ee", n = "#ffffff";
        break;
    }
    this.element.style.backgroundColor = a, this.element.style.color = n, this.iconElement.innerHTML = t;
  }
  static toast(r, t, a = 2e3) {
    if (!L)
      throw new Error("Toaster not initialized");
    L.messageElement.innerText = r, L.appendRelatedIcon(t), y({
      targets: L.element,
      translateX: 0,
      opacity: 1,
      easing: "easeOutExpo",
      complete: function(n) {
        y({
          targets: L.element,
          translateX: "30%",
          easing: "easeOutExpo",
          opacity: 0,
          duration: 800,
          delay: a
        });
      }
    });
  }
}
export {
  hr as Carbon,
  mr as Random,
  pr as Toaster,
  gr as toHumanReadableFileSize
};
